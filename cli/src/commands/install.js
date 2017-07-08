// @flow

import {
  signCodeStream,
} from "../lib/codeSign";

import {
  copyFile,
  mkdirp,
} from "../lib/fileUtils";

import {
  findFlowRoot,
} from "../lib/flowProjectUtils";

import {
  toSemverString as flowVersionToSemver,
  parseFlowSpecificVer,
} from "../lib/flowVersion";
import type {
  FlowVersion,
} from "../lib/flowVersion";

import {
  fs,
  path,
} from "../lib/node";

import {
  findNpmLibDef,
  getInstalledNpmLibDefs,
  getNpmLibDefVersionHash,
} from "../lib/npm/npmLibDefs";
import type {
  NpmLibDef,
} from "../lib/npm/npmLibDefs";

import {
  findFlowSpecificVer,
  getPackageJsonData,
  getPackageJsonDependencies,
} from "../lib/npm/npmProjectUtils";

import {
  getCacheRepoDir,
} from "../lib/cacheRepoUtils";

import {
  getRangeLowerBound,
} from "../lib/semver";

import
  colors
from "colors/safe";

import
  semver
from "semver";

import {
  createStub,
  pkgHasFlowFiles,
} from "../lib/stubUtils";

import
  typeof Yargs
from "yargs";

export const name = "install";
export const description = "Installs libdefs into the ./flow-typed directory";
export type Args = {
  _: Array<string>,
  flowVersion?: string,
  overwrite: boolean,
  skip: boolean,
  verbose: bool,
  libdefDir?: string,
};
export function setup(yargs: Yargs) {
  return yargs
    .usage(`$0 ${name} - ${description}`)
    .options({
      flowVersion: {
        alias: 'f',
        describe: "The Flow version that fetched libdefs must be compatible " +
                  "with",
        type: "string",
      },
      verbose: {
        describe: "Print additional, verbose info while installing libdefs",
        type: "boolean",
        demand: false,
      },
      skip: {
        alias: 's',
        describe: 'Do not generate stubs for missing libdefs',
        type: 'boolean',
        demand: false,
      },
      libdefDir: {
        alias: 'l',
        describe: 'Use a custom directory to install libdefs',
        type: 'string',
        demand: false,
      },
    });
};
export async function run(args: Args) {
  const cwd = process.cwd();
  const flowVersion = await determineFlowVersion(cwd, args.flowVersion);
  const libdefDir = args.libdefDir || 'flow-typed';
  const explicitLibDefs = args._.slice(1);

  const coreLibDefResult = await installCoreLibDefs();
  if (coreLibDefResult !== 0) {
    return coreLibDefResult;
  }

  const npmLibDefResult = await installNpmLibDefs({
    cwd,
    flowVersion,
    explicitLibDefs,
    libdefDir: libdefDir,
    verbose: args.verbose,
    overwrite: args.overwrite,
    skip: args.skip,
  });
  if (npmLibDefResult !== 0) {
    return npmLibDefResult;
  }
  return 0;
};

async function determineFlowVersion(cwd: string, flowVersionArg?: string) {
  if (flowVersionArg != null) {
    // Be permissive if the prefix 'v' is left off
    let flowVersionStr =
      flowVersionArg[0] === 'v'
      ? flowVersionArg
      : `v${flowVersionArg}`;

    if (/^v[0-9]+\.[0-9]+$/.test(flowVersionStr)) {
      flowVersionStr = `${flowVersionStr}.0`;
    }

    return {
      kind: 'specific',
      ver: parseFlowSpecificVer(flowVersionStr, flowVersionArg)
    };
  } else {
    return {
      kind: 'specific',
      ver: await findFlowSpecificVer(cwd)
    };
  }
}

async function installCoreLibDefs(): Promise<number> {
  // TODO...
  return 0;
}

const FLOW_BUILT_IN_NPM_LIBS = [
  'react',
  'react-dom',
];
type installNpmLibDefsArgs = {|
  cwd: string,
  flowVersion: FlowVersion,
  explicitLibDefs: Array<string>,
  libdefDir: string,
  verbose: boolean,
  overwrite: boolean,
  skip: boolean,
|};
async function installNpmLibDefs({
  cwd,
  flowVersion,
  explicitLibDefs,
  libdefDir,
  verbose,
  overwrite,
  skip,
}: installNpmLibDefsArgs): Promise<number> {
  const flowProjectRoot = await findFlowRoot(cwd);
  if (flowProjectRoot === null) {
    console.error(
      "Error: Unable to find a flow project in the current dir or any of " +
      "it's parent dirs!\n" +
      "Please run this command from within a Flow project."
    );
    return 1;
  }

  const libdefsToSearchFor: Map<string, string> = new Map();

  // If a specific pkg/version was specified, only add those packages.
  // Otherwise, extract dependencies from the package.json
  if (explicitLibDefs.length > 0) {
    for (var i = 0; i < explicitLibDefs.length; i++) {
      const term = explicitLibDefs[i];
      const termMatches = term.match(/(@[^@\/]+\/)?([^@]+)@(.+)/);
      if (termMatches == null) {
        console.error(
          "ERROR: Please specify npm package names in the format of `foo@1.2.3`"
        );
        return 1;
      }

      const [_, npmScope, pkgName, pkgVerStr] = termMatches;
      const scopedPkgName = npmScope != null ? npmScope + pkgName : pkgName;
      libdefsToSearchFor.set(scopedPkgName, pkgVerStr);
    }
    console.log(`• Searching for ${libdefsToSearchFor.size} libdefs...`);
  } else {
    const pkgJsonData = await getPackageJsonData(cwd);
    const pkgJsonDeps = getPackageJsonDependencies(pkgJsonData);
    for (const pkgName in pkgJsonDeps) {
      libdefsToSearchFor.set(pkgName, pkgJsonDeps[pkgName]);
    }

    if (libdefsToSearchFor.size === 0) {
      console.error(
        "No dependencies were found in this project's package.json!"
      );
      return 1;
    }

    if (verbose) {
      libdefsToSearchFor.forEach((ver, name) => {
        console.log(`• Found package.json dependency: ${name}@${ver}`);
      });
    } else {
      console.log(
        `• Found ${libdefsToSearchFor.size} dependencies in package.json to ` +
        `install libdefs for. Searching...`
      );
    }
  }
  const libDefsToSearchForEntries = [...libdefsToSearchFor.entries()];

  // Search for the requested libdefs
  const libDefsToInstall: Map<string, NpmLibDef> = new Map();
  const outdatedLibDefsToInstall: Array<[NpmLibDef, {name: string, ver: string}]> = [];
  const unavailableLibDefs = [];
  await Promise.all(libDefsToSearchForEntries.map(async ([name, ver]) => {
    if (FLOW_BUILT_IN_NPM_LIBS.indexOf(name) !== -1) {
      return;
    }

    const libDef = await findNpmLibDef(name, ver, flowVersion);
    if (libDef === null) {
      unavailableLibDefs.push({name, ver});
    } else {
      libDefsToInstall.set(name, libDef);

      // If the libdef is outdated (but still compatible), note this so we can
      // warn the user
      const libDefLower = getRangeLowerBound(libDef.version);
      const depLower = getRangeLowerBound(ver);
      if (semver.lt(libDefLower, depLower)) {
        outdatedLibDefsToInstall.push([libDef, {name, ver}]);
      }
    }
  }));

  // Scan libdefs that are already installed
  const libDefsToUninstall = new Map();
  const alreadyInstalledLibDefs = await getInstalledNpmLibDefs(
    path.join(flowProjectRoot),
    libdefDir,
  );
  [...alreadyInstalledLibDefs.entries()].forEach(
    ([filePath, npmLibDef]) => {
      const fullFilePath = path.join(flowProjectRoot, filePath);
      switch (npmLibDef.kind) {
        case 'LibDef':
          // If a libdef is already installed for some dependency, we need to
          // uninstall it before installing the new (potentially updated) ver
          const libDef = npmLibDef.libDef;
          //const toInstall = libDefsToInstall.has(libDef.name);
          //console.log(`Found ${libDef.name} already installed. Uninstall? ${toInstall != null ? 'yes' : 'no'}`);
          if (libDefsToInstall.has(libDef.name)) {
            libDefsToUninstall.set(libDef.name, fullFilePath);
          }
          break;

        case 'Stub':
          break;

        default:
          (npmLibDef: empty);
      }
    }
  );

  if (libDefsToInstall.size > 0) {
    console.log(`• Installing ${libDefsToInstall.size} libDefs...`);
    const flowTypedDirPath = path.join(flowProjectRoot, libdefDir, 'npm');
    await mkdirp(flowTypedDirPath);
    const results = await Promise.all(
      [...libDefsToInstall.values()].map(async (def: NpmLibDef) => {
        const toUninstall = libDefsToUninstall.get(def.name);
        if (toUninstall != null) {
          await fs.unlink(toUninstall);
        }
        return installNpmLibDef(def, flowTypedDirPath, overwrite);
      })
    );

    if (results.some(res => !res)) {
      return 1;
    }
  }

  if ((verbose || unavailableLibDefs.length === 0)
      && outdatedLibDefsToInstall.length > 0) {
    console.log(
      "• The following installed libdefs are compatible with your " +
      "dependencies, but may not include all minor and patch changes for " +
      "your specific dependency version:\n"
    );
    outdatedLibDefsToInstall.forEach(([libDef, {name: pkgName, ver: pkgVersion}]) => {
      console.log(
        "  • libdef: %s (satisfies %s)",
        colors.yellow(`${libDef.name}_${libDef.version}`),
        colors.bold(`${pkgName}@${pkgVersion}`),
      );

      const libDefPlural =
        outdatedLibDefsToInstall.length > 1
        ? ["versioned updates", "these packages"]
        : ["a versioned update", "this package"];
      console.log(
        `\n` +
        `  Consider submitting ${libDefPlural[0]} for ${libDefPlural[1]} to \n` +
        `  https://github.com/flowtype/flow-typed/\n`
      );
    });
  }

  if (unavailableLibDefs.length > 0
      && unavailableLibDefs.length === explicitLibDefs.length) {
    // If the user specified an explicit library to be installed, don't generate
    // a stub if no libdef exists -- just inform them that one doesn't exist
    console.log(
      colors.red(
        `!! No libdefs found in flow-typed for the explicitly requested libdefs. !!`
      ) +
      "\n" +
      "\n" +
      "Consider using `%s` to generate an empty libdef that you can fill in.",
      colors.bold(`flow-typed create-stub ${explicitLibDefs.join(' ')}`)
    );

    return 1;
  } else {
    // If a package that's missing a flow-typed libdef has any .flow files,
    // we'll skip generating a stub for it.
    const untypedMissingLibDefs = [];
    const typedMissingLibDefs = [];
    await Promise.all(unavailableLibDefs.map(async ({name: pkgName, ver: pkgVer}) => {
      const hasFlowFiles = await pkgHasFlowFiles(cwd, pkgName);
      if (hasFlowFiles) {
        typedMissingLibDefs.push([pkgName, pkgVer]);
      } else {
        untypedMissingLibDefs.push([pkgName, pkgVer]);
      }
    }));

    if (untypedMissingLibDefs.length > 0 && !skip) {
      console.log('• Generating stubs for untyped dependencies...');
      await Promise.all(
        untypedMissingLibDefs.map(async ([pkgName, pkgVerStr]) => {
          await createStub(
            flowProjectRoot,
            pkgName,
            pkgVerStr,
            true, /*ovewrite*/
            libdefDir
          );
        })
      );

      console.log(colors.red(
        `\n!! No flow@${flowVersionToSemver(flowVersion)}-compatible libdefs ` +
        `found in flow-typed for the above untyped dependencies !!`
      ));

      const plural =
        unavailableLibDefs.length > 1
        ? ['libdefs', 'these packages', 'them']
        : ['a libdef', 'this package', 'it'];
      console.log(
        `\n` +
        `I've generated ${'`'}any${'`'}-typed stubs for ${plural[1]}, but ` +
        `consider submitting \n` +
        `${plural[0]} for ${plural[2]} to ` +
        `${colors.bold('https://github.com/flowtype/flow-typed/')}\n`
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
    npmLibDef.scope === null
    ? npmDir
    : path.join(npmDir, npmLibDef.scope);
  mkdirp(scopedDir);

  const fileName = `${npmLibDef.name}_${npmLibDef.version}.js`;
  const filePath = path.join(scopedDir, fileName);

  // Find the libDef in the cached repo
  try {
    const terseFilePath = path.relative(
      path.resolve(npmDir, '..', '..'),
      filePath
    );

    if (!overwrite && (await fs.exists(filePath))) {
      console.error(
        "  • %s\n" +
        "    └> %s",

        colors.bold(colors.red(
          `${terseFilePath} already exists and appears to have been manually ` +
          `written or changed!`
        )),
        "Use --overwrite to overwrite the existing libdef.",
      );
      return true;
    }

    const repoVersion = await getNpmLibDefVersionHash(
      getCacheRepoDir(),
      npmLibDef,
    );
    const codeSignPreprocessor = signCodeStream(repoVersion);
    await copyFile(npmLibDef.path, filePath, codeSignPreprocessor);

    console.log(
      colors.bold(
        "  • %s\n" +
        "    └> %s"
      ),
      fileName,
      colors.green(`.${path.sep}${terseFilePath}`)
    );

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
  determineFlowVersion as _determineFlowVersion,
  installNpmLibDefs as _installNpmLibDefs,
  installNpmLibDef as _installNpmLibDef,
};
