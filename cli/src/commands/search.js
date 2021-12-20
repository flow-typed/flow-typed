// @flow

import {filterLibDefs, getCacheLibDefs} from '../lib/libDefs.js';
import type {LibDef} from '../lib/libDefs.js';
import typeof Yargs from 'yargs';
import {toSemverString as flowVersionToSemver} from '../lib/flowVersion';

import {table} from 'table';

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
  ...
};

export const name = 'search <term>';
export const description =
  'Perform a simple search (by name) of available libdefs';

export function setup(yargs: Yargs): Yargs {
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
    });
}

export async function run(args: Args): Promise<number> {
  let flowVersionStr;
  if (typeof args.flowVersion === 'string') {
    flowVersionStr = args.flowVersion;
  }

  const term = args.term;
  if (typeof term !== 'string') {
    throw new Error('term should be a string');
  }

  const defs = await getCacheLibDefs(process.stdout);
  const filtered = filterLibDefs(defs, {
    type: 'fuzzy',
    term,
    flowVersionStr,
  });
  console.log(_formatDefTable(filtered));
  return 0;
}
