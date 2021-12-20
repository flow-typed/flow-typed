// @flow
import path from 'path';
import typeof Yargs from 'yargs';
import {table} from 'table';

import {findFlowRoot} from '../lib/flowProjectUtils';
import {
  getCacheNpmLibDefs,
  getInstalledNpmLibDefs,
} from '../lib/npm/npmLibDefs';

export const name = 'outdated [explicitLibDefs...]';
export const description =
  'Update the flow-typed cache and print any outdated libdefs in current project';

export function setup(yargs: Yargs): Yargs {
  return yargs
    .usage(`$0 ${name}`)
    .options({
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
    })
    .example('$0 outdated', '')
    .help('h')
    .alias('h', 'help');
}

type Args = {
  useCacheUntil?: mixed, // number (milliseconds)
  libdefDir?: mixed, // string
  rootDir?: mixed, // string,
  ...
};

/**
 * 1. Update and pull the cache
 * 2. Compare current installed with what's in the cache
 * 3. Create a list to print out
 */
export async function run({
  useCacheUntil,
  libdefDir,
  rootDir,
}: Args): Promise<number> {
  const cwd =
    typeof rootDir === 'string' ? path.resolve(rootDir) : process.cwd();
  const flowProjectRoot = await findFlowRoot(cwd);
  if (flowProjectRoot === null) {
    console.error(
      'Error: Unable to find a flow project in the current dir or any of ' +
        "it's parent dirs!\n" +
        'Please run this command from within a Flow project.',
    );
    return 1;
  }

  const cachedLibDefs = await getCacheNpmLibDefs(Number(useCacheUntil), true);
  const installedLibDefs = await getInstalledNpmLibDefs(
    flowProjectRoot,
    libdefDir ? String(libdefDir) : undefined,
  );

  const outdatedList: Array<{
    name: string,
    message: string,
  }> = [];

  cachedLibDefs.forEach(cachedDef => {
    installedLibDefs.forEach(installedDef => {
      if (
        installedDef.kind === 'Stub' &&
        installedDef.name === cachedDef.name
      ) {
        // a previously stubbed libdef has now been typed
        outdatedList.push({
          name: installedDef.name,
          message:
            'A new libdef has been published to the registry replacing your stub',
        });
        return;
      }
      if (
        installedDef.kind === 'LibDef' &&
        installedDef.libDef.name === cachedDef.name
      ) {
        // Need to find the range to only check on libdefs that match
        // JSON.stringify(installedDef.libDef.flowVersion) ===
        //   JSON.stringify(cachedDef.flowVersion)
        // But if we don't find one in range it could have been changed mid way
        // and we should add that to the outdated list

        // need to somehow compare the two defs and if there's a difference
        // we assume they're outdated
        outdatedList.push({
          name: installedDef.libDef.name,
          message:
            'This libdef is outdated you can update it with `flow-typed update`',
        });
        return;
      }
    });
  });

  if (outdatedList.length > 0) {
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
