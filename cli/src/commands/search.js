// @flow

import {filterLibDefs, getCacheLibDefs} from '../lib/libDefs.js';
import type {LibDef} from '../lib/libDefs.js';
import typeof Yargs from 'yargs';
import {toSemverString as flowVersionToSemver} from '../lib/flowVersion';

import {table} from 'table';
import {validateString} from '../lib/validationUtils.js';
import {DEFAULT_REPO_NAME} from '../lib/repoUtils.js';

export function _formatDefTable(defs: Array<LibDef>): string {
  const formatted = [['Name', 'Package Version', 'Flow Version']].concat(
    defs.map(def => {
      return [
        def.pkgName,
        def.pkgVersionStr,
        flowVersionToSemver(def.flowVersion),
      ];
    }),
  );
  if (formatted.length === 1) {
    return 'No definitions found, sorry!';
  } else {
    return '\nFound definitions:\n' + table(formatted);
  }
}

export type Args = {
  flowVersion: mixed, // ?string
  term: mixed, // string
  from: mixed, // string
};

export const name = 'search <term>';
export const description =
  'Perform a simple search (by name) of available libdefs';

export function setup(yargs: Yargs) {
  return yargs
    .positional('term', {
      describe: 'Please provide a term for which to search!',
      type: 'string',
    })
    .option({
      flowVersion: {
        alias: 'f',
        describe:
          'The Flow version that fetched libdefs must be compatible with',
        type: 'string',
      },
      from: {
        describe: 'Use given github flow-typed repository',
        type: 'string',
        default: DEFAULT_REPO_NAME,
      },
    });
}

export async function run(args: Args): Promise<number> {
  let flowVersionStr;
  if (typeof args.flowVersion === 'string') {
    flowVersionStr = args.flowVersion;
  }

  const term = validateString('term', args.term);
  const from = validateString('from', args.from);

  const defs = await getCacheLibDefs(from);
  const filtered = filterLibDefs(defs, {
    type: 'fuzzy',
    term,
    flowVersionStr,
  });
  console.log(_formatDefTable(filtered));
  return 0;
}
