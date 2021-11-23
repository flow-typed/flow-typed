// @flow
import path from 'path';
import fs from 'fs';
import typeof Yargs from 'yargs';

import { CACHE_REPO_EXPIRY, ensureCacheRepo } from "../lib/cacheRepoUtils";

export const name = 'outdated [explicitLibDefs...]';
export const description = 'Update the flow-typed cache and print any outdated libdefs in current project';

export function setup(yargs: Yargs): Yargs {
  return yargs
    .usage(`$0 ${name}`)
    .positional('explicitLibDefs', {
      describe: 'Explicitly specify packages check',
      default: [],
    })
    .options({
      useCacheUntil: {
        alias: 'u',
        describe: 'Use cache until specified time in milliseconds',
        type: 'number',
      },
    })
    .example('$0 outdated', '')
    .help('h')
    .alias('h', 'help');
}

type Args = {
  explicitLibDefs?: mixed, // Array<string>
  useCacheUntil?: mixed, // number (milliseconds)
};

export async function run({
  explicitLibDefs = [],
  useCacheUntil,
}: Args): Promise<number> {
  /**
   * 1. Update the cache
   * 2. Are we looking at all install libdefs or explicit
   *    a. if explicit use explicit
   *    b. else create list of all libdefs in `.flow-typed/npm` dir
   * 3. Compare current installed with what's in the cache
   * 4. Create a list to print out
   */
  await ensureCacheRepo(
    Number(useCacheUntil) || CACHE_REPO_EXPIRY,
  );

  if (!Array.isArray(explicitLibDefs)) {
    return 1;
  }

  let libDefsToCompare;
  if (explicitLibDefs.length === 0) {
    // get all libdefs currently in flow-typed/npm
    libDefsToCompare = [];
  } else {
    libDefsToCompare = explicitLibDefs;
  }

  libDefsToCompare.forEach((def) => {
    // compare between the cache and installed
    // if file contents are different then all to a list
  });

  // Print out some list for user to see

  return 0;
}
