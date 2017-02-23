// @flow

import {updateCacheRepo} from '../lib/libDefs';

import type {Argv} from "yargs";
import typeof Yargs from "yargs";

export const name = 'update-cache';
export const description = 'Update the flow-typed definitions cache';

export function setup(yargs: Yargs) {
  return yargs
    .usage(`$0 ${name} - ${description}`)
    .options({
      debug: {
        describe: 'Enable verbose messages for the update procedure',
        alias: 'd',
        type: 'boolean',
        demand: false,
      }
    });
};

export async function run(argv: Argv): Promise<number> {
  try {
    let verbose;

    if (argv.debug) {
      verbose = process.stdout;
    }

    console.log('Updating flow-typed definitions...');
    await updateCacheRepo(verbose);

    console.log('Definitions update successful!');
    return 0;
  } catch (e) {
    console.error(`Update failed: ${e.message}`);

    if (argv.debug) {
      console.error(e);
    }

    return 1;
  }
}
