// @flow

import * as Install from './install';
import type {Args} from './install';

export const name = 'update';
export const description: string =
  'Download updates for any installed libdefs. (Note: This is just an alias ' +
  'of `flow-typed install --overwrite`)';

export const setup = Install.setup;

export async function run(args: Args): Promise<number> {
  args.overwrite = true;
  return Install.run(args);
}
