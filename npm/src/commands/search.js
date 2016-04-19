// @flow
import {getGHLibsAndFlowVersions, filterDefs, formatDefTable}
  from "../lib/libDef.js";
import type {LibDefWithFlow} from "../lib/libDef.js";
import {child_process, path} from '../lib/node'

export const name = "search";
export const description =
  "Performs a simple search (by name) of available libdefs";

function findFlowVersion(): string {
  const nodeModulesBin = path.resolve('node_modules', '.bin')
  const _path = `${nodeModulesBin}:${process.env.PATH}`

  function fail() {
    console.error('Couldn\'t identify your flow version. Please make sure ' +
    'flow is installed and in your PATH, or flow-bin is installed ' +
    'in your project.')
    process.exit(-1)
  }

  let output = ''

  try {
    output = child_process.execSync('flow version', {
      env: {PATH: _path}
    }).toString()
  } catch(e) {
    fail()
  }

  const matches = output.match(/.*version (.*)\n$/)
  if (!matches || !matches[1]) {
    fail()
  } else {
    return matches[1]
  }
}

export async function run(args: {}): Promise<number> {
  if (!args._ || !args._.length > 1) {
    console.error('Please provide a term for which to search!')
    return 1;
  }

  const flowVersion = args.flowVersion || findFlowVersion()
  const term = args._[1];
  const defs = await getGHLibsAndFlowVersions();
  const filtered = filterDefs(term, defs, args.flowVersion || undefined)
  console.log(formatDefTable(filtered))
  return 0;
};
