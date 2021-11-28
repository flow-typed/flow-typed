// @flow

import typeof Yargs from 'yargs';
import {
  _setCustomCacheDir as setCustomCacheDir,
  ensureCacheRepo,
} from '../lib/cacheRepoUtils';
import {path} from '../lib/node';

export const name = 'update-cache';
export const description = 'Update the flow-typed definitions cache';

export type Args = {
  cacheDir?: mixed,
  ...
};

export function setup(yargs: Yargs): Yargs {
  return yargs.usage(`$0 ${name} - ${description}`).options({
    cacheDir: {
      alias: 'c',
      describe:
        'Directory (absolute or relative path, ~ is not supported) to store cache of libdefs',
      type: 'string',
      demandOption: false,
    },
  });
}

export async function run(args: Args): Promise<number> {
  try {
    if (typeof args.cacheDir === 'string') {
      const cacheDir = path.resolve(args.cacheDir);
      console.log('• Setting cache dir', cacheDir);
      setCustomCacheDir(cacheDir);
    }

    console.log('Updating flow-typed definitions...');
    await ensureCacheRepo();

    console.log('Definitions update successful!');
    return 0;
  } catch (e) {
    console.error(`Update failed: ${e.message}`);

    return 1;
  }
}
