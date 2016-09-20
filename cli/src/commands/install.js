// @flow

import {signCodeStream} from "../lib/codeSign.js";
import {copyFile, mkdirp, searchUpDirPath} from "../lib/fileUtils.js";
import {filterLibDefs, getCacheLibDefs, getCacheLibDefVersion} from "../lib/libDefs.js";
import {fs, path} from '../lib/node.js';
import {emptyVersion, stringToVersion, versionToString} from "../lib/semver.js";

export const name = 'install';
export const description = 'Installs a libdef to the ./flow-typed directory';

import typeof Yargs from "yargs";

export function setup(yargs: Yargs) {
  return yargs
    .usage(`$0 ${name} - ${description}`)
    .options({
      flowVersion: {
        alias: 'f',
        demand: true,
        describe: 'The version of Flow fetched libdefs must be compatible with',
        type: 'string',
      },
      overwrite: {
        alias: 'o',
        describe: 'Overwrite a libdef if it is already present in the ' +
                  '`flow-typed` directory',
        type: 'boolean',
        demand: false,
      },
    });
};

function failWithMessage(message: string) {
  console.error(message);
  return 1;
}

type Args = {
  _: Array<string>,
  flowVersion?: string,
  overwrite: bool,
};

export async function run(args: Args): Promise<number> {
  if (args._ == null || !(args._.length > 1)) {
    return failWithMessage(
      'Please provide a libdef name (example: lodash, or lodash@4.2.1)'
    );
  }

  const {flowVersion: flowVersionRaw} = args;
  if (flowVersionRaw == null) {
    return failWithMessage(
      'Please provide a flow version (example: --flowVersion 0.24.0)'
    );
  }
  let flowVersionStr =
    flowVersionRaw[0] === 'v'
    ? flowVersionRaw
    : `v${flowVersionRaw}`;

  if (/^v[0-9]+\.[0-9]+$/.test(flowVersionStr)) {
    flowVersionStr = `${flowVersionStr}.0`;
  }
  const flowVersion = stringToVersion(flowVersionStr);

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

        // This is clowny... These probably shouldn't be part of the filter
        // object...
        flowVersion: emptyVersion(),
        flowVersionStr: versionToString(emptyVersion()),
        path: '',
        testFilePaths: [],
      },
      flowVersion,
    };
  } else {
    filter = {
      type: 'exact-name',
      term: defName,
      flowVersion,
    };
  }

  const defs = await getCacheLibDefs();

  const filtered = filterLibDefs(defs, filter);

  if (filtered.length === 0) {
    return failWithMessage(
      `Sorry, I was unable to find any libdefs for ${term} that work with ` +
      `flow@${flowVersionStr}. Consider submitting one! :)\n\n` +
      `https://github.com/flowtype/flow-typed/`
    );
  }
  console.log(' * found %s matching libdefs.', filtered.length);

  const def = filtered[0];

  // Find the project root
  const projectRoot = await searchUpDirPath(process.cwd(), async (dirPath) => {
    const flowConfigPath = path.join(dirPath, '.flowconfig');
    try {
      return fs.statSync(flowConfigPath).isFile();
    } catch (e) {
      // Not a file...
      return false;
    }
  });
  if (projectRoot === null) {
    return failWithMessage(
      `\nERROR: Unable to find a flow project in the currend dir or any of ` +
      `it's parents!\nPlease run this command from within a Flow project.`
    );
  }

  const flowTypedDir = path.join(projectRoot, 'flow-typed', 'npm');
  await mkdirp(flowTypedDir);
  const targetFileName = `${def.pkgName}_${def.pkgVersionStr}.js`;
  const targetFilePath = path.join(flowTypedDir, targetFileName);

  const terseTargetFile = path.relative(process.cwd(), targetFilePath);
  if ((await fs.exists(targetFilePath)) && !args.overwrite) {
    console.log(
      `${terseTargetFile} already exists! Use --overwrite/-o to overwrite the ` +
      `existing libdef.`
    );
    return 0;
  }

  const libDefVersion = await getCacheLibDefVersion(def);
  const codeSignPreprocessor = signCodeStream(libDefVersion);
  await copyFile(def.path, targetFilePath, codeSignPreprocessor);
  console.log(`'${targetFileName}' installed at ${targetFilePath}.`);

  return 0;
};
