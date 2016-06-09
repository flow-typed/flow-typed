// @flow

import {updateCacheRepo} from '../lib/libDefs';

export const name = 'update-cache';
export const description = 'Updates the flow-typed definitions cache';

export function setup(yargs: Object) {
  return yargs
    .usage(`$0 ${name} - ${description}`)
    .options({
      debug: {
        describe: 'Enables verbose messages for the update procedure',
        alias: 'd',
        type: 'bool',
        demand: false,
      }
    });
};

type Args = {
  _: Array<string>,
  debug?: boolean,
}

export async function run(args: Args): Promise<number> {
  try {
    let verbose;

    if (args.debug) {
      verbose = process.stdout;
    }

    console.log('Updating flow-typed definitions...');
    await updateCacheRepo(verbose);

    console.log('Definitions update successful!');
    return 0;
  } catch (e) {
    console.error(`Update failed: ${e.message}`);

    if (args.debug) {
      console.error(e);
    }

    return 1;
  }
}
