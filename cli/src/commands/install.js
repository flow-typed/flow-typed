// @flow

import {copyFile} from "../lib/fileUtils.js";
import {determineFlowVersion} from "../lib/npmProjectUtils.js";
import {filterLibDefs} from "../lib/libDefs.js";
import {findFlowRoot} from '../lib/flowProjectUtils.js';
import {fs} from '../lib/node.js';
import {getCacheLibDefVersion} from "../lib/libDefs.js";
import {getCacheLibDefs} from "../lib/libDefs.js";
import {getPackageJsonData} from "../lib/npmProjectUtils.js";
import {getPackageJsonDependencies} from "../lib/npmProjectUtils.js";
import {mkdirp} from "../lib/fileUtils.js";
import {path} from '../lib/node.js';
import {signCodeStream} from "../lib/codeSign.js";
import {stringToVersion} from "../lib/semver.js";
import {versionToString} from "../lib/semver.js";

import type {LibDef} from "../lib/libDefs.js";
import type {Version} from "../lib/semver.js";

export const name = 'install';
export const description = 'Installs a libdef to the ./flow-typed directory';

import typeof Yargs from "yargs";

const FLOW_BUILT_IN_LIBS: Array<string> = [
  'react',
  'react-dom',
];

export function setup(yargs: Yargs) {
  return yargs
    .usage(`$0 ${name} - ${description}`)
    .options({
      flowVersion: {
        alias: 'f',
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
      verbose: {
        describe: 'Print additional, verbose information while installing ' +
                  'libdefs.',
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
  verbose: bool,
};

export async function run(args: Args): Promise<number> {
  const cwd = process.cwd();

  const {flowVersion: flowVersionArg} = args;
  let flowVer;
  if (flowVersionArg == null) {
    const discoveredFlowVer = await determineFlowVersion(cwd);
    if (discoveredFlowVer !== null) {
      flowVer = discoveredFlowVer;
      console.log(
        `* Found flow-bin@${versionToString(flowVer)} installed. Installing ` +
        `libdefs compatible with this version of Flow...`
      );
    } else {
      return failWithMessage(
        'Failed to find a flow-bin dependency in package.json.\n' +
        'Please install flow bin: `npm install --save-dev flow-bin` ' +
        'or provide a version on the command line: ' +
        '`flow-typed install --flowVersion=0.24.0`'
      );
    }
  } else {
    let flowVersionStr =
      flowVersionArg[0] === 'v'
      ? flowVersionArg
      : 'v' + flowVersionArg;

    if (/^v[0-9]+\.[0-9]+$/.test(flowVersionStr)) {
      flowVersionStr = `${flowVersionStr}.0`;
    }
    flowVer = stringToVersion(flowVersionStr);
  }
  const flowVersion = flowVer;

  // Find the Flow project root
  const flowProjectRoot = await findFlowRoot(cwd);
  if (flowProjectRoot === null) {
    return failWithMessage(
      'ERROR: Unable to find a flow project in the current dir or any of ' +
      'it\'s parents!\n' +
      'Please run this command from within a Flow project.'
    );
  }

  // Generate a map { dependency: version } for libs to install from command
  // line or package.json.
  let depsMap: {[depName: string]: string} = {};

  // If a specific package was specified, look it up. Otherwise find/read
  // the package.json.
  if (args._[1]) {
    const term = args._[1];
    const matches = term.match(/(@[^@\/]+\/)?([^@]*)@(.+)/);
    if (matches == null) {
      return failWithMessage(
        "ERROR: Please specify an npm package name of the format 'foo@1.2.3'"
      );
    }

    const npmScope = matches[1];
    const pkgName = matches[2];
    const pkgVerStr = matches[3];

    const scopedPkgName = npmScope ? npmScope + pkgName : pkgName;
    depsMap[scopedPkgName] = pkgVerStr;
  } else {
    const pkgJsonData = await getPackageJsonData(cwd);
    depsMap = await getPackageJsonDependencies(pkgJsonData);

    if (Object.keys(depsMap).length === 0) {
      return failWithMessage(
        "No package dependencies were found in package.json."
      );
    }

    if (args.verbose) {
      Object.keys(depsMap).forEach((dep) => {
        console.log(`* Found package.json dependency: ${dep} ${depsMap[dep]}`);
      });
    } else {
      console.log(
        `* Found ${String(Object.keys(depsMap).length)} dependencies in ` +
        `package.json. Searching for libdefs...`
      );
    }
  }

  // Get a list of defs to install.
  let libDefsToInstall = [];
  let missingLibDefs = [];
  const depNames = Object.keys(depsMap);
  await Promise.all(depNames.map(async (pkgName) => {
    const pkgVersionStr = depsMap[pkgName];
    let def = await findLibDef(
      pkgName,
      pkgVersionStr,
      flowVersion,
    );
    if (def) {
      libDefsToInstall.push(def);
    } else {
      missingLibDefs.push([pkgName, pkgVersionStr]);
    }
  }));

  if (libDefsToInstall.length > 0) {
    console.log(`* Installing ${libDefsToInstall.length} libdefs...\n`);
    const flowTypedDirPathStr = path.join(
      flowProjectRoot,
      'flow-typed',
      'npm',
    );
    await mkdirp(flowTypedDirPathStr);
    await Promise.all(
      libDefsToInstall.map(
        (def) => installLibDef(def, flowTypedDirPathStr, args.overwrite)
      )
    );
    console.log('');
  } else {
    console.log('No libdefs were installed.');
  }

  if (missingLibDefs.length > 0) {
    console.log(
      `!! No flow@${versionToString(flowVersion)}-compatible libdefs were ` +
      `found in flow-typed for the following dependencies:\n`
    );
    missingLibDefs.sort().forEach(([pkgName, pkgVersionStr]) => {
      if (FLOW_BUILT_IN_LIBS.indexOf(pkgName.toLowerCase()) === -1) {
        console.log(`  * ${pkgName}@${pkgVersionStr}`);
      }
    });
    const libDefPlural =
      missingLibDefs.length > 1
      ? ['libdefs', 'these packages']
      : ['a libdef', 'this package'];
    console.log(
      `\n  Consider submitting ${libDefPlural[0]} for ` +
      `${libDefPlural[1]} to\n` +
      `  https://github.com/flowtype/flow-typed/\n`
    );
  }

  return 0;
};

/**
 * Install a libDef into the given directory path.
 */
async function installLibDef(
  def: LibDef,
  flowTypedDirPathStr: string,
  overwrite: boolean
): Promise<boolean> {
  const pkgName = def.pkgName;
  const libDefDirPathStr =
    pkgName.charAt(0) === '@'
    ? path.join(flowTypedDirPathStr, pkgName.split(path.sep)[0])
    : flowTypedDirPathStr;

  await mkdirp(libDefDirPathStr);

  const targetFileName = `${pkgName}_${def.pkgVersionStr}.js`;
  const targetFilePath = path.join(libDefDirPathStr, targetFileName);

  // Find the libdef
  try {
    const terseTargetFile = path.relative(process.cwd(), targetFilePath);
    if ((await fs.exists(targetFilePath)) && !overwrite) {
      console.log(
        `  * ${terseTargetFile} already exists! Use --overwrite/-o to ` +
        `overwrite the existing libdef.`
      );
      return false;
    }

    const libDefVersion = await getCacheLibDefVersion(def);
    const codeSignPreprocessor = signCodeStream(libDefVersion);
    await copyFile(def.path, targetFilePath, codeSignPreprocessor);
    console.log(
      `  * '${targetFileName}' installed at .${path.sep}${terseTargetFile}`
    );

    return true;
  } catch(e) {
    console.log(`  !! Failed to install ${def.pkgName} into ${targetFilePath}`);
    console.log(`  ERROR: ${e.message}`);
    return false;
  }
}

/**
 * Search flow typed for a matching libdef.
 */
async function findLibDef(
  defName: string,
  defVersion: string,
  flowVersion: Version,
): Promise<null | LibDef> {
  const filter = {
    type: 'exact',
    pkgName: defName,
    pkgVersionStr: defVersion,
    flowVersionStr: versionToString(flowVersion),
  };

  const defs = await getCacheLibDefs();
  const filtered = filterLibDefs(defs, filter);

  if (filtered.length === 0) {
    return null;
  }
  return filtered[0];
}
