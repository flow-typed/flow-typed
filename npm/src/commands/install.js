// @flow
import {getGHLibsAndFlowVersions, filterDefs, formatDefTable}
  from "../lib/libDef.js";
import type {LibDefWithFlow} from "../lib/libDef.js";
import {child_process, path} from '../lib/node'

export const name = "install";
export const description =
  "Installs a libdef";

type Args = {
  _: Array<string>;
  flowVersion?: string;
}
export async function run(args: Args): Promise<number> {

  function errorNeedDefName() {
    console.error('Please provide a libdef name ' +
      '(example: lodash, or lodash@4.2.1)')
    return 1;
  }

  function errorNeedFlowVersion() {
    console.error('Please provide a flow version ' +
    '(example: --flow v0.23.0)')
    return 1;
  }

  if (!args._ || !(args._.length > 1)) {
    errorNeedDefName()
  }

  if (!args.flowVersion) {
    errorNeedFlowVersion()
  }

  const term = args._[1];

  const flowVersion = args.flowVersion
  const matches = term.match(/(.*)@?(.*)?/)
  const defName = (matches && matches[1])
  const defVersion = (matches && matches[2]) || 'auto'

  if (!defName) { errorNeedDefName() }

  const defs = await getGHLibsAndFlowVersions();
  const filtered = filterDefs(term, defs, flowVersion, defVersion)

  if (!filtered.length) {
    console.error('Sorry, no libdef found with that name, version, ' +
    'and flow version.')
    process.exit(1)
  }

  const def = filtered[0]
  console.log('About to install', def)

  // Get the first item off of the compatible libdefs array,
  // download it, and put it in the flow-typed directory.

  return 0;
};
