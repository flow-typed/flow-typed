// @flow
import path from 'path';
import typeof Yargs from 'yargs';
import {table} from 'table';

import {findFlowRoot} from '../lib/flowProjectUtils';
import {
  findNpmLibDef,
  getCacheNpmLibDefs,
  getInstalledNpmLibDefs,
  getNpmLibDefVersionHash,
} from '../lib/npm/npmLibDefs';
import {fs} from '../lib/node';
import {determineFlowSpecificVersion} from '../lib/flowVersion';
import {signCodeStream} from '../lib/codeSign';
import {CACHE_REPO_EXPIRY, getCacheRepoDir} from '../lib/cacheRepoUtils';

export const name = 'outdated';
export const description =
  'Update the flow-typed cache and print any outdated libdefs in current project';

export function setup(yargs: Yargs): Yargs {
  return yargs
    .usage(`$0 ${name}`)
    .options({
      flowVersion: {
        alias: 'f',
        describe:
          'The Flow version that outdated libdefs must be compatible with',
        type: 'string',
      },
      useCacheUntil: {
        alias: 'u',
        describe: 'Use cache until specified time in milliseconds',
        type: 'number',
      },
      libdefDir: {
        alias: 'l',
        describe: 'Scan currently installed libdefs from a custom directory',
        type: 'string',
        demandOption: false,
      },
      rootDir: {
        alias: 'r',
        describe: 'Directory of .flowconfig relative to node_modules',
        type: 'string',
      },
      packageDir: {
        alias: 'p',
        describe:
          'The relative path of package.json where flow-bin is installed',
        type: 'string',
      },
    })
    .example('$0 outdated', '')
    .help('h')
    .alias('h', 'help');
}

type Args = {
  flowVersion?: mixed, // string
  useCacheUntil?: mixed, // number (milliseconds)
  libdefDir?: mixed, // string
  rootDir?: mixed, // string
  packageDir?: mixed, // string
  ...
};

/**
 * 1. Update and pull the cache
 * 2. Compare current installed with what's in the cache
 * 3. Create a list to print out
 */
export async function run(args: Args): Promise<number> {
  const cwd =
    typeof args.rootDir === 'string'
      ? path.resolve(args.rootDir)
      : process.cwd();
  const flowProjectRoot = await findFlowRoot(cwd);
  const packageDir =
    typeof args.packageDir === 'string' ? path.resolve(args.packageDir) : cwd;
  const flowVersion = await determineFlowSpecificVersion(
    packageDir,
    args.flowVersion,
  );
  if (flowProjectRoot === null) {
    console.error(
      'Error: Unable to find a flow project in the current dir or any of ' +
        "it's parent dirs!\n" +
        'Please run this command from within a Flow project.',
    );
    return 1;
  }

  const cachedLibDefs = await getCacheNpmLibDefs(
    Number(args.useCacheUntil) || CACHE_REPO_EXPIRY,
    true,
  );
  const installedLibDefs = await getInstalledNpmLibDefs(
    flowProjectRoot,
    args.libdefDir ? String(args.libdefDir) : undefined,
  );

  let outdatedList: Array<{
    name: string,
    message: string,
  }> = [];

  await Promise.all(
    cachedLibDefs.map(async cachedDef => {
      await Promise.all(
        [...installedLibDefs.values()].map(async installedDef => {
          // For each cached def we'll check if it's installed as a stub
          // if so then we should mark as outdated
          if (
            installedDef.kind === 'Stub' &&
            installedDef.name.startsWith(`${cachedDef.name}_`)
          ) {
            const stubName = installedDef.name.substring(
              0,
              installedDef.name.indexOf('_'),
            );
            outdatedList.push({
              name: stubName,
              message: `A new libdef has been published to the registry replacing your stub install it with \`flow-typed install ${stubName}\``,
            });
          }
          if (
            installedDef.kind === 'LibDef' &&
            installedDef.libDef.name === cachedDef.name &&
            installedDef.libDef.scope === cachedDef.scope
          ) {
            const definitionFullName = installedDef.libDef.scope
              ? `${installedDef.libDef.scope}/${installedDef.libDef.name}`
              : installedDef.libDef.name;
            // If we've found a match we need to know if definition has changed
            // We can just find a compatible matching library and then
            // figure out if the flow signatures has changed
            const npmLibDef = await findNpmLibDef(
              definitionFullName,
              installedDef.libDef.version,
              flowVersion,
              args.useCacheUntil ? Number(args.useCacheUntil) : undefined,
              undefined,
              cachedLibDefs,
            );

            if (npmLibDef) {
              const pullSignature = v => v.split('\n').slice(0, 2);

              const file = await fs.readFile(
                path.join(cwd, installedDef.libDef.path),
                'utf8',
              );
              const installedSignatureArray = pullSignature(file);

              const repoVersion = await getNpmLibDefVersionHash(
                getCacheRepoDir(),
                npmLibDef,
              );
              const codeSignPreprocessor = signCodeStream(repoVersion);
              const content = fs.readFileSync(npmLibDef.path, 'utf-8');
              const cacheSignatureArray = pullSignature(
                codeSignPreprocessor(content),
              );

              if (
                installedSignatureArray[0] !== cacheSignatureArray[0] ||
                installedSignatureArray[1] !== cacheSignatureArray[1]
              ) {
                outdatedList.push({
                  name: definitionFullName,
                  message:
                    'This libdef does not match what we found in the registry, update it with `flow-typed update`',
                });
              }
            }
          }
        }),
      );
    }),
  );

  if (outdatedList.length > 0) {
    // Cleanup duplicated dependencies which come from nested libraries that ship flow
    outdatedList = outdatedList.reduce((acc, cur) => {
      if (acc.find(o => o.name === cur.name)) {
        return acc;
      }
      return [...acc, cur];
    }, []);

    console.log(
      table([
        ['Name', 'Details'],
        ...outdatedList.map(o => [o.name, o.message]),
      ]),
    );
  } else {
    console.log('All your lib defs are up to date!');
  }

  return 0;
}
