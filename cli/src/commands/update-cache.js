// @flow

import { _updateCacheRepo as updateCacheRepo } from '../lib/libDefs';

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
  let verbose;

  if (args.debug) {
    verbose = process.stdout;
  }

  console.log('Updating flow-typed definitions...');
  const success = await updateCacheRepo(verbose);

  if (success) {
    console.log('Definitions update successful!');
    return 0;
  }

  console.log('Update failed...');

  if (!args.debug) {
    console.log('Rerun this command with the --debug for more information!');
  }

  return 1;
}
