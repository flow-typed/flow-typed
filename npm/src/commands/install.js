// @flow

import mkdirp from 'mkdirp'
import {
  getGHLibsAndFlowVersions,
  filterDefs,
  formatDefTable
} from '../lib/libDef';

import type {LibDefWithFlow} from '../lib/libDef';
import {child_process, path, https, fs} from '../lib/node'

export const name = 'install';
export const description = 'Installs a libdef to the ./flow-typed directory';

export function setup(yargs: Object): Object {
  return yargs
    .usage(`$0 ${name} - ${description}`)
    .options({
      flowVersion: {
        demand: true,
        describe: 'The version of Flow fetched libdefs must be compatible with',
        type: 'string',
      },
    });
};

function failWithMessage(message: ?string) {
  if (message != null) {
    console.error(message);
  }
  return 1;
}

type Args = {
  _: Array<string>;
  flowVersion?: string;
}

export async function run(args: Args): Promise<number> {
  const { _ } = args;

  if (_ == null || !(_.length > 1)) {
    return failWithMessage('Please provide a libdef name (example: lodash, or lodash@4.2.1)');
  }

  if (args.flowVersion == null) {
    return failWithMessage('Please provide a flow version (example: --flowVersion 0.23.0)');
  }

  const term = args._[1];

  const flowVersion = args.flowVersion;

  const matches = term.match(/(\w*)?@?(.*)/)
  const defName = (matches && matches[1])
  const defVersion = (matches && matches[2]) || 'auto'

  const failNoLibDefFound = () => failWithMessage('Sorry, no libdef found with that name, version and flow version');
  if (!defName) {
    return failNoLibDefFound(); 
  }

  const defs = await getGHLibsAndFlowVersions();
  const filtered = filterDefs(term, defs, flowVersion, defVersion)

  if (!filtered.length) {
    return failNoLibDefFound();
  }

  const def = filtered[0]

  await new Promise((resolve, reject) => {
    const flowTypedDir = path.resolve('./flow-typed')

    console.log(`File will be downloaded to '${flowTypedDir}'`);
    mkdirp.sync(flowTypedDir)

    const url = `https://raw.githubusercontent.com/flowtype/flow-typed/master/definitions/${def.pkgName}_${def.pkgVersionStr}/flow_${def.flowVersionStr}/${def.pkgName}_${def.pkgVersionStr}.js`;

    const targetFile = path.join(flowTypedDir, `${def.pkgName}_${def.pkgVersionStr}.js`);
    console.log(`Downloading '${url}' ...`);
    console.log(`Writing definitions to '${targetFile}' ...`);

    https.get(url, (res) => {
      const file = fs.createWriteStream(targetFile);
      file.on('end', () => resolve(0));
      res.pipe(file);
    })
  })
};
