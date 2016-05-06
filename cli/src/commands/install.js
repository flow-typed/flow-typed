// @flow

import mkdirp from 'mkdirp';
import {
  getGHLibsAndFlowVersions,
  filterDefs,
} from '../lib/libDef';
import {stringToVersion} from "../lib/semver.js";
import {path, https, fs} from '../lib/node.js';

export const name = 'install';
export const description = 'Installs a libdef to the ./flow-typed directory';

export function setup(yargs: Object): Object {
  return yargs
    .usage(`$0 ${name} - ${description}`)
    .options({
      flowVersion: {
        alias: 'v',
        demand: true,
        describe: 'The version of Flow fetched libdefs must be compatible with',
        type: 'string',
      },
      overwrite: {
        alias: 'o',
        describe: 'Overwrite a libdef if it is already present in the ' +
                  '`flow-typed` directory',
        type: 'bool',
        demand: false,
      },
    });
};

function failWithMessage(message: string) {
  console.error(message);
  return 1;
}

type Args = {
  _: Array<string>;
  flowVersion?: string;
};

export async function run(args: Args): Promise<number> {
  if (args._ == null || !(args._.length > 1)) {
    return failWithMessage(
      'Please provide a libdef name (example: lodash, or lodash@4.2.1)'
    );
  }

  const {flowVersion} = args;
  if (flowVersion == null) {
    return failWithMessage(
      'Please provide a flow version (example: --flowVersion 0.24.0)'
    );
  }

  const term = args._[1];

  const matches = term.match(/([^@]*)@?(.*)?/);
  const defName = (matches && matches[1]);
  const defVersion = (matches && matches[2]) || 'auto';

  if (!defName) {
    return failWithMessage(
      "Please specify a package name of the format `PackageFoo` or " +
      "PackageFoo@0.2.2"
    );
  }

  let filter;
  if (defVersion !== 'auto') {
    const verStr = `v${defVersion}`;
    const ver = stringToVersion(verStr);
    filter = {
      type: 'exact',
      libDef: {
        pkgName: defName,
        pkgVersion: ver,
        pkgVersionStr: verStr,
        pkgNameVersionStr: `${defName}_${verStr}`
      }
    };
  } else {
    filter = {
      type: 'fuzzy',
      term: defName,
    };
  }

  process.stdout.write('Querying github for libdefs...');
  const defs = await getGHLibsAndFlowVersions();

  const filtered = filterDefs(
    filter,
    defs,
    flowVersion
  );
  console.log('found %s matching libdefs.', filtered.length);

  if (filtered.length === 0) {
    return failWithMessage(
      `Sorry, I was unable to find any libdefs for ${term} that work with ` +
      `flow@${flowVersion}. Consider submitting one! :)\n\n` +
      `https://github.com/flowtype/flow-typed/`
    );
  }

  const def = filtered[0];
  const flowTypedDir = path.join(process.cwd(), 'flow-typed');
  const targetFile = path.join(
    flowTypedDir,
    `${def.pkgName}_${def.pkgVersionStr}.js`
  );

  const terseTargetFile = path.relative(process.cwd(), targetFile);
  if ((await fs.exists(targetFile)) && !args.update) {
    console.log(
      `${terseTargetFile} already exists! Use --update/-u to overwrite the ` +
      `existing libdef.`
    );
    return 0;
  }

  const url =
    `https://raw.githubusercontent.com/flowtype/flow-typed/master/` +
    `definitions/${def.pkgName}_${def.pkgVersionStr}/` +
    `flow_${def.flowVersionStr}/${def.pkgName}_${def.pkgVersionStr}.js`;

  process.stdout.write(
    `Downloading flow_${def.flowVersionStr}/${def.pkgNameVersionStr}.js into ` +
    `'${flowTypedDir}'...`
  );
  mkdirp.sync(flowTypedDir);

  await new Promise((resolve, reject) => {
    https.get(url, response => {
      const file = fs.createWriteStream(targetFile);
      file.on('close', () => resolve(0));
      response.pipe(file);
    }).on('error', e => reject(e));
  });
  console.log('done.');

  // TODO: Sign the downloaded file with the latest commit number as a version
  //       reference.
  //
  //       1) This will allow us to determine if their libdef is outdated and
  //          has been improved since they last installed.
  //
  //       2) In the future this will help us quickly notice if the user has
  //          made local changes (so that we might prompt them to contribute
  //          their improvements upstream).
  //
  //       3) This will be handy for troubleshooting (i.e. determining which
  //          version of the libdef the user has installed, and whether anything
  //          changed locally since they installed)

  return 0;
};
