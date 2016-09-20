// @flow

import {filterLibDefs, getCacheLibDefs} from "../lib/libDefs.js";
import {stringToVersion} from "../lib/semver.js";
import type {LibDef} from "../lib/libDefs.js";
import type {Argv} from "yargs";

import table from 'table';

export function _formatDefTable(defs: Array<LibDef>): string {
  const formatted = [
    ['Name', 'Package Version', 'Flow Version']
  ].concat(defs.map(def => {
    return [
      def.pkgName,
      def.pkgVersionStr,
      def.flowVersionStr,
    ];
  }));
  if (formatted.length === 1) {
    return "No definitions found, sorry!";
  } else {
    return "\nFound definitions:\n" + table(formatted);
  }
};

export const name = "search";
export const description =
  "Performs a simple search (by name) of available libdefs";

export async function run(args: Argv): Promise<number> {
  if (!args._ || !(args._.length > 1)) {
    console.error('Please provide a term for which to search!');
    return 1;
  }

  let flowVersion;
  if (typeof args.flowVersion === "string") {
    flowVersion = stringToVersion(args.flowVersion);
  }

  const term = args._[1];
  const defs = await getCacheLibDefs(process.stdout);
  const filtered = filterLibDefs(defs, {type: 'fuzzy', term, flowVersion});
  console.log(_formatDefTable(filtered));
  return 0;
};
