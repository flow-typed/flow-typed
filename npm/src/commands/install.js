// @flow
import mkdir from 'mkdirp'
import {getGHLibsAndFlowVersions, filterDefs, formatDefTable}
  from "../lib/libDef.js";
import type {LibDefWithFlow} from "../lib/libDef.js";
import {child_process, path, https, fs} from '../lib/node'

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
  }

  function errorNeedFlowVersion() {
    console.error('Please provide a flow version ' +
    '(example: --flow v0.23.0)')
  }

  if (!args._ || !(args._.length > 1)) {
    errorNeedDefName()
    return 1;
  }

  if (!args.flow) {
    errorNeedFlowVersion()
    return 1;
  }

  const term = args._[1];

  const flowVersion = args.flow
  const matches = term.match(/(.*)@?(.*)?/)
  const defName = (matches && matches[1])
  const defVersion = (matches && matches[2]) || 'auto'

  if (!defName) {
    errorNeedDefName()
    return 1;
  }

  const defs = await getGHLibsAndFlowVersions();
  const filtered = filterDefs(term, defs, flowVersion, defVersion)

  if (!filtered.length) {
    console.error('Sorry, no libdef found with that name, version, ' +
    'and flow version.')
    return 1;
  }

  const def = filtered[0]

  console.log('DEBUG: About to install', def.pkgName, def.pkgVersionStr)

  await new Promise((res, rej) => {
    const flowTypedFolder = path.resolve('./flow-typed')

    // Here's where I left off, creating the flow-typed folder if it doesn't
    // exist, and downloading the libdef from github to that location.
    mkdir.sync(flowTypedFolder)

    https.get(` https://raw.githubusercontent.com/flowtype/flow-typed/master/definitions/${def.pkgName}_${def.pkgVersionStr}/flow_${def.flowVersionStr}/${def.pkgName}_${def.flowVersionStr}.js`, response => {
      const file = fs.createWriteStream(`${flowTypedFolder}/${def.pkgName}_${def.pkgVersionStr}.js`)
      response.pipe(file)
      res(0)
    })
  })
};
