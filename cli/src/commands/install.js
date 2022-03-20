// @flow
import colors from 'colors/safe';
import semver from 'semver';
import typeof Yargs from 'yargs';

import {
  getCacheRepoDir,
  _setCustomCacheDir as setCustomCacheDir,
  CACHE_REPO_EXPIRY,
} from '../lib/cacheRepoUtils';
import {signCodeStream, verifySignedCode} from '../lib/codeSign';
import {getEnvDefs, findEnvDef, getEnvDefVersionHash} from '../lib/envDefs';
import {copyFile, mkdirp} from '../lib/fileUtils';
import {findFlowRoot} from '../lib/flowProjectUtils';
import {
  toSemverString as flowVersionToSemver,
  determineFlowSpecificVersion,
  type FlowVersion,
} from '../lib/flowVersion';
import {getFtConfig, type FtConfig} from '../lib/ftConfig';
import {fs, path, child_process} from '../lib/node';
import {
  findNpmLibDef,
  getCacheNpmLibDefs,
  getInstalledNpmLibDefs,
  getNpmLibDefVersionHash,
  getScopedPackageName,
  type NpmLibDef,
} from '../lib/npm/npmLibDefs';
import {
  findWorkspacesPackages,
  getPackageJsonData,
  getPackageJsonDependencies,
  loadPnpResolver,
  mergePackageJsonDependencies,
} from '../lib/npm/npmProjectUtils';
import {getRangeLowerBound} from '../lib/semver';
import {createStub, pkgHasFlowFiles} from '../lib/stubUtils';
import {listItem} from '../lib/logger';

export const name = 'install [explicitLibDefs...]';
export const description = 'Installs libdefs into the ./flow-typed directory';
export type Args = {
  flowVersion?: mixed, // string
  overwrite: mixed, // boolean
  skip: mixed, // boolean
  skipCache?: mixed, // boolean
  skipFlowRestart?: mixed, // boolean
  verbose: mixed, // boolean
  libdefDir?: mixed, // string
  cacheDir?: mixed, // string
  packageDir?: mixed, // string
  ignoreDeps?: mixed, // Array<string>
  rootDir?: mixed, // string,
  useCacheUntil?: mixed, // number (milliseconds)
  explicitLibDefs: mixed, // Array<string>
  ...
};

export function setup(yargs: Yargs): Yargs {
  return yargs
    .usage(`$0 ${name} - ${description}`)
    .positional('explicitLibDefs', {
      describe: 'Explicitly specify packages to install',
      default: [],
    })
    .options({
      flowVersion: {
        alias: 'f',
        describe:
          'The Flow version that fetched libdefs must be compatible with',
        type: 'string',
      },
      verbose: {
        describe: 'Print additional, verbose info while installing libdefs',
        type: 'boolean',
        demandOption: false,
      },
      skip: {
        alias: 's',
        describe: 'Do not generate stubs for missing libdefs',
        type: 'boolean',
        demandOption: false,
      },
      skipCache: {
        describe: 'Do not update cache prior to installing libdefs',
        type: 'boolean',
        demandOption: false,
      },
      skipFlowRestart: {
        describe: 'Do not restart flow after installing libdefs',
        type: 'boolean',
        demandOption: false,
      },
      libdefDir: {
        alias: 'l',
        describe: 'Use a custom directory to install libdefs',
        type: 'string',
        demandOption: false,
      },
      cacheDir: {
        alias: 'c',
        describe:
          'Directory (absolute or relative path, ~ is not supported) to store cache of libdefs',
        type: 'string',
        demandOption: false,
      },
      packageDir: {
        alias: 'p',
        describe:
          'The relative path of package.json where flow-bin is installed',
        type: 'string',
      },
      overwrite: {
        alias: 'o',
        describe: 'Overwrite an existing libdef',
        type: 'boolean',
        demandOption: false,
      },
      ignoreDeps: {
        alias: 'i',
        describe: 'Dependency categories to ignore when installing definitions',
        choices: ['dev', 'bundled', 'peer'],
        type: 'array',
      },
      rootDir: {
        alias: 'r',
        describe: 'Directory of .flowconfig relative to node_modules',
        type: 'string',
      },
      useCacheUntil: {
        alias: 'u',
        describe: 'Use cache until specified time in milliseconds',
        type: 'number',
      },
    });
}
export async function run(args: Args): Promise<number> {
  const cwd =
    typeof args.rootDir === 'string'
      ? path.resolve(args.rootDir)
      : process.cwd();
  const packageDir =
    typeof args.packageDir === 'string' ? path.resolve(args.packageDir) : cwd;
  const flowVersion = await determineFlowSpecificVersion(
    packageDir,
    args.flowVersion,
  );
  const libdefDir =
    typeof args.libdefDir === 'string' ? args.libdefDir : 'flow-typed';
  if (args.ignoreDeps !== undefined && !Array.isArray(args.ignoreDeps)) {
    throw new Error('ignoreDeps is not array');
  }
  const ignoreDeps = (args.ignoreDeps || []).map(dep => {
    if (typeof dep !== 'string') {
      throw new Error('ignoreDeps should be array of strings');
    }
    return dep;
  });
  if (
    args.explicitLibDefs !== undefined &&
    !Array.isArray(args.explicitLibDefs)
  ) {
    throw new Error('explicitLibDefs is not array');
  }
  const explicitLibDefs = (args.explicitLibDefs || []).map(dep => {
    if (typeof dep !== 'string') {
      throw new Error('explicitLibDefs should be array of strings');
    }
    return dep;
  });

  const ftConfig = getFtConfig(cwd);

  if (args.cacheDir) {
    const cacheDir = path.resolve(String(args.cacheDir));
    console.log('• Setting cache dir', cacheDir);
    setCustomCacheDir(cacheDir);
  }

  const useCacheUntil = Number(args.useCacheUntil) || CACHE_REPO_EXPIRY;

  const npmLibDefResult = await installNpmLibDefs({
    cwd,
    flowVersion,
    explicitLibDefs,
    libdefDir: libdefDir,
    verbose: Boolean(args.verbose),
    overwrite: Boolean(args.overwrite),
    skip: Boolean(args.skip),
    skipCache: Boolean(args.skipCache),
    ignoreDeps: ignoreDeps,
    useCacheUntil: Number(args.useCacheUntil) || CACHE_REPO_EXPIRY,
    ftConfig,
  });
  if (npmLibDefResult !== 0) {
    return npmLibDefResult;
  }

  // Must be after `installNpmLibDefs` to ensure cache is updated first
  if (ftConfig) {
    const envLibDefResult = await installEnvLibDefs(
      ftConfig,
      flowVersion,
      cwd,
      libdefDir,
      useCacheUntil,
      Boolean(args.overwrite),
    );
    if (envLibDefResult !== 0) {
      return envLibDefResult;
    }
  }

  // Once complete restart flow to solve flow issues when scanning large diffs
  if (!args.skipFlowRestart) {
    try {
      await child_process.execP('npx flow stop');
      await child_process.execP('npx flow');
    } catch (e) {
      console.log(colors.red('!! Flow restarted with some errors'));
    }
  }

  return 0;
}

async function installEnvLibDefs(
  {env}: FtConfig,
  flowVersion: FlowVersion,
  flowProjectRoot,
  libdefDir,
  useCacheUntil: number,
  overwrite: boolean,
): Promise<number> {
  if (env) {
    console.log(
      colors.green(
        '• `env` key found in `flow-typed.config.json`, attempting to install env definitions...\n',
      ),
    );

    if (!Array.isArray(env)) {
      console.log(
        colors.yellow(
          'Warning: `env` in `flow-typed.config.json` must be of type Array<string> - skipping',
        ),
      );
      return 0;
    }

    // Get a list of all environment defs
    const envDefs = await getEnvDefs();

    const flowTypedDirPath = path.join(
      flowProjectRoot,
      libdefDir,
      'environments',
    );
    await mkdirp(flowTypedDirPath);

    // Go through each env and try to install a libdef of the same name
    // for the given flow version,
    // if none is found throw a warning and continue. We shouldn't block the user.
    await Promise.all(
      env.map(async en => {
        if (typeof en === 'string') {
          const def = await findEnvDef(en, flowVersion, useCacheUntil, envDefs);

          if (def) {
            const fileName = `${en}.js`;
            const defLocalPath = path.join(flowTypedDirPath, fileName);
            const envAlreadyInstalled = await fs.exists(defLocalPath);
            if (envAlreadyInstalled) {
              const localFile = fs.readFileSync(defLocalPath, 'utf-8');

              if (!verifySignedCode(localFile) && !overwrite) {
                listItem(
                  en,
                  colors.red(
                    `${en} already exists and appears to have been manually written or changed!`,
                  ),
                  colors.yellow(
                    `Consider contributing your changes back to flow-typed repository :)`,
                  ),
                  colors.yellow(
                    `${en} already exists and appears to have been manually written or changed!`,
                  ),
                  colors.yellow(
                    `Read more at https://github.com/flow-typed/flow-typed/blob/master/CONTRIBUTING.md`,
                  ),
                  colors.yellow(
                    `Use --overwrite to overwrite the existing env defs.`,
                  ),
                );
                return;
              }

              fs.unlink(defLocalPath);
            }

            const repoVersion = await getEnvDefVersionHash(
              getCacheRepoDir(),
              def,
            );
            const codeSignPreprocessor = signCodeStream(repoVersion);
            await copyFile(def.path, defLocalPath, codeSignPreprocessor);

            listItem(
              en,
              colors.green(
                `.${path.sep}${path.relative(flowProjectRoot, defLocalPath)}`,
              ),
            );
          } else {
            listItem(
              en,
              colors.yellow(
                `Was unable to install ${en}. The env might not exist or there is not a version compatible with your version of flow`,
              ),
            );
          }
        }
      }),
    );
  }

  return 0;
}

const FLOW_BUILT_IN_NPM_LIBS = ['react'];
type installNpmLibDefsArgs = {|
  cwd: string,
  flowVersion: FlowVersion,
  explicitLibDefs: Array<string>,
  libdefDir: string,
  verbose: boolean,
  overwrite: boolean,
  skip: boolean,
  skipCache: boolean,
  ignoreDeps: Array<string>,
  useCacheUntil: number,
  ftConfig?: FtConfig,
|};
async function installNpmLibDefs({
  cwd,
  flowVersion,
  explicitLibDefs,
  libdefDir,
  verbose,
  overwrite,
  skip,
  skipCache,
  ignoreDeps,
  useCacheUntil,
  ftConfig = {},
}: installNpmLibDefsArgs): Promise<number> {
  const flowProjectRoot = await findFlowRoot(cwd);
  if (flowProjectRoot === null) {
    console.error(
      'Error: Unable to find a flow project in the current dir or any of ' +
        "it's parent dirs!\n" +
        'Please run this command from within a Flow project.',
    );
    return 1;
  }

  const libdefsToSearchFor: Map<string, string> = new Map();

  let ignoreDefs;

  if (Array.isArray(ftConfig.ignore)) {
    ignoreDefs = ftConfig.ignore;
  } else {
    try {
      ignoreDefs = fs
        .readFileSync(path.join(cwd, libdefDir, '.ignore'), 'utf-8')
        .replace(/"/g, '')
        .split('\n');
    } catch (err) {
      // If the error is unrelated to file not existing we should continue throwing
      if (err.code !== 'ENOENT') {
        throw err;
      }
      ignoreDefs = [];
    }
  }

  // If a specific pkg/version was specified, only add those packages.
  // Otherwise, extract dependencies from the package.json
  if (explicitLibDefs.length > 0) {
    for (var i = 0; i < explicitLibDefs.length; i++) {
      const term = explicitLibDefs[i];
      const termMatches = term.match(/(@[^@\/]+\/)?([^@]+)@(.+)/);
      if (termMatches == null) {
        const pkgJsonData = await getPackageJsonData(cwd);
        const workspacesPkgJsonData = await findWorkspacesPackages(pkgJsonData);
        const pkgJsonDeps = workspacesPkgJsonData.reduce((acc, pckData) => {
          return mergePackageJsonDependencies(
            acc,
            getPackageJsonDependencies(pckData, [], []),
          );
        }, getPackageJsonDependencies(pkgJsonData, [], []));
        const packageVersion = pkgJsonDeps[term];
        if (packageVersion) {
          libdefsToSearchFor.set(term, packageVersion);
        } else {
          console.error(
            'ERROR: Package not found from package.json.\n' +
              'Please specify version for the package in the format of `foo@1.2.3`',
          );
          return 1;
        }
      } else {
        const [_, npmScope, pkgName, pkgVerStr] = termMatches;
        const scopedPkgName = npmScope != null ? npmScope + pkgName : pkgName;
        libdefsToSearchFor.set(scopedPkgName, pkgVerStr);
      }
    }
    console.log(`• Searching for ${libdefsToSearchFor.size} libdefs...`);
  } else {
    const pkgJsonData = await getPackageJsonData(cwd);
    const workspacesPkgJsonData = await findWorkspacesPackages(pkgJsonData);
    const pkgJsonDeps = workspacesPkgJsonData.reduce((acc, pckData) => {
      return mergePackageJsonDependencies(
        acc,
        getPackageJsonDependencies(pckData, ignoreDeps, ignoreDefs),
      );
    }, getPackageJsonDependencies(pkgJsonData, ignoreDeps, ignoreDefs));
    for (const pkgName in pkgJsonDeps) {
      libdefsToSearchFor.set(pkgName, pkgJsonDeps[pkgName]);
    }

    if (libdefsToSearchFor.size === 0) {
      console.error(
        "No dependencies were found in this project's package.json!",
      );
      return 0;
    }

    if (verbose) {
      libdefsToSearchFor.forEach((ver, name) => {
        console.log(`• Found package.json dependency: ${name}@${ver}`);
      });
    } else {
      console.log(
        `• Found ${libdefsToSearchFor.size} dependencies in package.json to ` +
          `install libdefs for. Searching...`,
      );
    }
  }
  const libDefsToSearchForEntries = [...libdefsToSearchFor.entries()];

  // Search for the requested libdefs
  const libDefsToInstall: Map<string, NpmLibDef> = new Map();
  const outdatedLibDefsToInstall: [
    NpmLibDef,
    {name: string, ver: string},
  ][] = [];
  const unavailableLibDefs = [];

  // This updates the cache for all definition types, npm/env/etc
  const libDefs = await getCacheNpmLibDefs(useCacheUntil, skipCache);

  const getLibDefsToInstall = async (entries: Array<[string, string]>) => {
    await Promise.all(
      entries.map(async ([name, ver]) => {
        // To comment in json files a work around is to give a key value pair
        // of `"//": "comment"` we should exclude these so the install doesn't crash
        // Ref: https://stackoverflow.com/a/14221781/430128
        if (name === '//') {
          return;
        }

        if (FLOW_BUILT_IN_NPM_LIBS.indexOf(name) !== -1) {
          return;
        }

        const libDef = await findNpmLibDef(
          name,
          ver,
          flowVersion,
          useCacheUntil,
          true,
          libDefs,
        );
        if (libDef === null) {
          unavailableLibDefs.push({name, ver});
        } else {
          libDefsToInstall.set(name, libDef);

          const libDefLower = getRangeLowerBound(libDef.version);
          const depLower = getRangeLowerBound(ver);
          if (semver.lt(libDefLower, depLower)) {
            outdatedLibDefsToInstall.push([libDef, {name, ver}]);
          }
        }
      }),
    );
  };
  await getLibDefsToInstall(libDefsToSearchForEntries);

  const pnpResolver = await loadPnpResolver(await getPackageJsonData(cwd));

  // If a package that's missing a flow-typed libdef has any .flow files,
  // we'll skip generating a stub for it.
  const untypedMissingLibDefs: Array<[string, string]> = [];
  const typedMissingLibDefs: Array<[string, string, string]> = [];
  await Promise.all(
    unavailableLibDefs.map(async ({name: pkgName, ver: pkgVer}) => {
      const hasFlowFiles = await pkgHasFlowFiles(cwd, pkgName, pnpResolver);
      if (hasFlowFiles.flowTyped && hasFlowFiles.path) {
        typedMissingLibDefs.push([pkgName, pkgVer, hasFlowFiles.path]);
      } else {
        untypedMissingLibDefs.push([pkgName, pkgVer]);
      }
    }),
  );

  // If there are any typed packages we should try install any missing
  // lib defs for that package.
  // Scanning through all typed dependencies then checking their immediate deps
  // but do not overwrite the lib def that the project itself wants
  if (typedMissingLibDefs.length > 0) {
    const typedDepsLibDefsToSearchFor: Array<[string, string]> = [];
    await Promise.all(
      typedMissingLibDefs.map(async typedLibDef => {
        const pkgJsonData = await getPackageJsonData(
          `${typedLibDef[2]}/package.json`,
        );
        const pkgJsonDeps = getPackageJsonDependencies(
          pkgJsonData,
          ignoreDeps,
          ignoreDefs,
        );
        for (const pkgName in pkgJsonDeps) {
          if (!libDefsToInstall.has(pkgName)) {
            typedDepsLibDefsToSearchFor.push([pkgName, pkgJsonDeps[pkgName]]);
          }
        }
      }),
    );
    await getLibDefsToInstall(typedDepsLibDefsToSearchFor);
  }

  // Scan libdefs that are already installed
  const libDefsToUninstall = new Map();
  const alreadyInstalledLibDefs = await getInstalledNpmLibDefs(
    path.join(flowProjectRoot),
    libdefDir,
  );
  [...alreadyInstalledLibDefs.entries()].forEach(([filePath, npmLibDef]) => {
    const fullFilePath = path.join(flowProjectRoot, filePath);
    switch (npmLibDef.kind) {
      case 'LibDef':
        // If a libdef is already installed for some dependency, we need to
        // uninstall it before installing the new (potentially updated) ver
        const libDef = npmLibDef.libDef;
        const scopedPkgName = getScopedPackageName(libDef);
        if (libDefsToInstall.has(scopedPkgName)) {
          libDefsToUninstall.set(scopedPkgName, fullFilePath);
        }
        break;

      case 'Stub':
        break;

      default:
        (npmLibDef: empty);
    }
  });

  if (libDefsToInstall.size > 0) {
    console.log(`• Installing ${libDefsToInstall.size} libDefs...`);
    const flowTypedDirPath = path.join(flowProjectRoot, libdefDir, 'npm');
    await mkdirp(flowTypedDirPath);
    const results = await Promise.all(
      [...libDefsToInstall.values()].map(async (libDef: NpmLibDef) => {
        const toUninstall = libDefsToUninstall.get(
          getScopedPackageName(libDef),
        );
        if (toUninstall != null) {
          await fs.unlink(toUninstall);
        }
        return installNpmLibDef(libDef, flowTypedDirPath, overwrite);
      }),
    );

    if (results.some(res => !res)) {
      return 1;
    }
  }

  if (
    (verbose || unavailableLibDefs.length === 0) &&
    outdatedLibDefsToInstall.length > 0
  ) {
    console.log(
      '• The following installed libdefs are compatible with your ' +
        'dependencies, but may not include all minor and patch changes for ' +
        'your specific dependency version:\n',
    );
    outdatedLibDefsToInstall.forEach(
      ([libDef, {name: pkgName, ver: pkgVersion}]) => {
        console.log(
          '  • libdef: %s (satisfies %s)',
          colors.yellow(`${libDef.name}_${libDef.version}`),
          colors.bold(`${pkgName}@${pkgVersion}`),
        );

        const libDefPlural =
          outdatedLibDefsToInstall.length > 1
            ? ['versioned updates', 'these packages']
            : ['a versioned update', 'this package'];
        console.log(
          `\n` +
            `  Consider submitting ${libDefPlural[0]} for ${libDefPlural[1]} to \n` +
            `  https://github.com/flowtype/flow-typed/\n`,
        );
      },
    );
  }

  if (
    unavailableLibDefs.length > 0 &&
    unavailableLibDefs.length === explicitLibDefs.length
  ) {
    // If the user specified an explicit library to be installed, don't generate
    // a stub if no libdef exists -- just inform them that one doesn't exist
    console.log(
      colors.red(
        `!! No flow@${flowVersionToSemver(flowVersion)}-compatible libdefs ` +
          `found in flow-typed for the explicitly requested libdefs. !!`,
      ) +
        '\n' +
        '\n' +
        'Consider using `%s` to generate an empty libdef that you can fill in.',
      colors.bold(`flow-typed create-stub ${explicitLibDefs.join(' ')}`),
    );

    return 1;
  } else {
    if (untypedMissingLibDefs.length > 0 && !skip) {
      console.log('• Generating stubs for untyped dependencies...');
      await Promise.all(
        untypedMissingLibDefs.map(async ([pkgName, pkgVerStr]) => {
          await createStub(
            flowProjectRoot,
            pkgName,
            pkgVerStr,
            overwrite,
            pnpResolver,
            /* typescript */ false,
            libdefDir,
          );
        }),
      );

      console.log(
        colors.red(
          `\n!! No flow@${flowVersionToSemver(
            flowVersion,
          )}-compatible libdefs ` +
            `found in flow-typed for the above untyped dependencies !!`,
        ),
      );

      const plural =
        unavailableLibDefs.length > 1
          ? ['libdefs', 'these packages', 'them']
          : ['a libdef', 'this package', 'it'];
      console.log(
        `\n` +
          `We've generated ${'`'}any${'`'}-typed stubs for ${plural[1]}, but ` +
          `consider submitting \n` +
          `${plural[0]} for ${plural[2]} to ` +
          `${colors.bold('https://github.com/flowtype/flow-typed/')}\n`,
      );
    }
  }

  return 0;
}

async function installNpmLibDef(
  npmLibDef: NpmLibDef,
  npmDir: string,
  overwrite: boolean,
): Promise<boolean> {
  const scopedDir =
    npmLibDef.scope === null ? npmDir : path.join(npmDir, npmLibDef.scope);
  mkdirp(scopedDir);

  const fileName = `${npmLibDef.name}_${npmLibDef.version}.js`;
  const filePath = path.join(scopedDir, fileName);

  // Find the libDef in the cached repo
  try {
    const terseFilePath = path.relative(
      path.resolve(npmDir, '..', '..'),
      filePath,
    );

    if (!overwrite && (await fs.exists(filePath))) {
      listItem(
        colors.bold(
          colors.red(
            `${terseFilePath} already exists and appears to have been manually ` +
              `written or changed!`,
          ),
        ),
        colors.green(
          `Consider contributing your changes back to flow-typed repository :)`,
        ),
        `Read more at https://github.com/flow-typed/flow-typed/blob/master/CONTRIBUTING.md`,
        'Use --overwrite to overwrite the existing libdef.',
      );
      return true;
    }

    const repoVersion = await getNpmLibDefVersionHash(
      getCacheRepoDir(),
      npmLibDef,
    );
    const codeSignPreprocessor = signCodeStream(repoVersion);
    await copyFile(npmLibDef.path, filePath, codeSignPreprocessor);

    listItem(fileName, colors.green(`.${path.sep}${terseFilePath}`));

    // Remove any lingering stubs
    console.log(npmLibDef.name);
    console.log(scopedDir);
    const stubName = `${npmLibDef.name}_vx.x.x.js`;
    const stubPath = path.join(scopedDir, stubName);

    if (overwrite && (await fs.exists(stubPath))) {
      await fs.unlink(stubPath);
    }

    return true;
  } catch (e) {
    console.error(`  !! Failed to install ${npmLibDef.name} at ${filePath}`);
    console.error(`  ERROR: ${e.message}`);
    return false;
  }
}

export {
  installNpmLibDefs as _installNpmLibDefs,
  installNpmLibDef as _installNpmLibDef,
};
