// @flow
import {getGHLibsAndFlowVersions, filterDefs} from "../lib/libDef.js";
import type {LibDefWithFlow} from "../lib/libDef.js";
import {child_process, path} from '../lib/node'

import table from 'table';

export function _formatDefTable(defs: Array<LibDefWithFlow>): string {
  const formatted = [
    ['Name', 'Package Version', 'Flow Version'/*, 'Install Command'*/]
  ].concat(defs.map(def => {
    return [
      def.pkgName,
      def.pkgVersionStr,
      def.flowVersionStr,
    ];
  }));
  if (formatted.length == 1) {
    return "No definitions found, sorry!";
  } else {
    return "\nFound definitions:\n" + table(formatted)
  }
}

export const name = "search";
export const description =
  "Performs a simple search (by name) of available libdefs";

export async function run(args: {}): Promise<number> {
  if (!args._ || !(args._.length > 1)) {
    console.error('Please provide a term for which to search!')
    return 1;
  }

  const flowVersion = args.flowVersion || undefined
  const term = args._[1];
  const defs = await getGHLibsAndFlowVersions();
  const filtered = filterDefs(term, defs, flowVersion)
  console.log(_formatDefTable(filtered))
  return 0;
};
