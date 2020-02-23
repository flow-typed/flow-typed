// @flow

import typeof Yargs from 'yargs';
import {
  _setCustomCacheDir as setCustomCacheDir,
  ensureCacheRepo,
} from '../lib/cacheRepoUtils';
import {path} from '../lib/node';
import {DEFAULT_REPO_NAME} from '../lib/repoUtils';
import {validateString} from '../lib/validationUtils';

export const name = 'update-cache';
export const description = 'Update the flow-typed definitions cache';

export type Args = {
  cacheDir?: mixed,
  from: mixed,
};
export function setup(yargs: Yargs) {
  return yargs.usage(`$0 ${name} - ${description}`).options({
    cacheDir: {
      alias: 'c',
      describe:
        'Directory (absolute or relative path, ~ is not supported) to store cache of libdefs',
      type: 'string',
      demandOption: false,
    },
    from: {
      describe: 'Use given github flow-typed repository',
      type: 'string',
      default: DEFAULT_REPO_NAME,
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

    const from = validateString('from', args.from);

    console.log('Updating flow-typed definitions...');
    await ensureCacheRepo(from);

    console.log('Definitions update successful!');
    return 0;
  } catch (e) {
    console.error(`Update failed: ${e.message}`);

    return 1;
  }
}
