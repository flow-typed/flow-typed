// @flow

import {signCodeStream} from "../lib/codeSign.js";
import {copyFile, mkdirp, searchUpDirPath} from "../lib/fileUtils.js";
import {getCacheLibDefVersion, getCacheLibDefs, filterLibDefs} from "../lib/libDefs.js";
import type {LibDef} from "../lib/libDefs.js";
import {fs, path} from '../lib/node.js';
import {emptyVersion, stringToVersion, versionToString} from "../lib/semver.js";
import type {Version} from "../lib/semver.js";
import {getInstalledPackageDependencies} from "../lib/npm_helper.js";
import type {DepsMap} from "../lib/npm_helper.js";

export const name = 'install';
export const description = 'Installs a libdef to the ./flow-typed directory';

import typeof Yargs from "yargs";

export function setup(yargs: Yargs) {
  return yargs
    .usage(`$0 ${name} - ${description}`)
    .options({
      flowVersion: {
        alias: 'f',
        //demand: true,
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

  // Find the project root
  const projectRoot = await findFlowProjectRoot();
  if (projectRoot === null) {
    return failWithMessage(
      `\nERROR: Unable to find a flow project in the currend dir or any of ` +
      `it's parents!\nPlease run this command from within a Flow project.`
    );
  }


  // generate a map { dependency: version } for libs to install
  // from command line or package.json.
  let depsMap: DepsMap = {};  
  if(args._[1]) {
    const term = args._[1];
    const matches = term.match(/(@[^@\/]+\/)?([^@]*)@?(.*)?/);
    if(!matches) {
      console.error(      
        "Please specify a package name of the format `PackageFoo` or " +
        "PackageFoo@0.2.2"
      );
    }
    
    const defName = (matches && (matches[1] ? matches[1] + matches[2] : matches[2]));
    const defVersion = (matches && matches[3]) || 'auto';

    if(defName) {
      depsMap[defName] = defVersion;
    }
  } else {
    depsMap = await getInstalledPackageDependencies();
  }

  if (!Object.keys(depsMap).length === 0) {
    return failWithMessage(
      "No package dependencies were found in package.json or specified on the command line."
    );
  }

  // Get a list of defs to install
  const defs: [LibDef] = [];
  for(let dep in depsMap) {  
    let def = await findLibDef(
      dep, 
      depsMap[dep],
      flowVersion);
    if(def) { 
      defs.push(def); 
    }
  }

  console.log(`Installing ${defs.length} defs`);
  await Promise.all(
    defs.map((def) => installLibDef(
        def, 
        projectRoot, 
        args.overwrite
      )
    )
  );

  return 0;
};


/** 
 * install a libDef into the given project root directory
 */
export async function installLibDef(
  def: LibDef,
  projectRoot: string,
  overwrite: boolean = false): Promise<boolean> {

  // Find the libdef
  try {
    const flowTypedDir = path.join(projectRoot, 'flow-typed', 'npm');
    await mkdirp(flowTypedDir);
    const targetFileName = `${def.pkgName}_${def.pkgVersionStr}.js`;
    const targetFilePath = path.join(flowTypedDir, targetFileName);

    const terseTargetFile = path.relative(process.cwd(), targetFilePath);
    if ((await fs.exists(targetFilePath)) && !overwrite) {
      console.log(
        `${terseTargetFile} already exists! Use --overwrite/-o to overwrite the ` +
        `existing libdef.`
      );
      return false;
    }

    const libDefVersion = await getCacheLibDefVersion(def);
    const codeSignPreprocessor = signCodeStream(libDefVersion);
    await copyFile(def.path, targetFilePath, codeSignPreprocessor);
    console.log(`'${targetFileName}' installed at ${targetFilePath}.`);
    return true;

  } catch(e) {
    console.log(`Error: ${e.message}`);     
    return false;
  }
} 

export async function findLibDef(
  defName: string, 
  defVersion: string, 
  flowVersion: Version): Promise<?LibDef> {

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

  console.log(`Searching libdefs for ${defName} v${defVersion}...`);
  if (filtered.length === 0) {
    console.log(
      `  found no matching libdefs for flow@${versionToString(flowVersion)}. \n` +
      `  Consider submitting one to https://github.com/flowtype/flow-typed/`);
    return null;
  }
  console.log('  found %s matching libdefs.', filtered.length);
  return filtered[0];
}

async function findFlowProjectRoot() {
  return await searchUpDirPath(process.cwd(), async (dirPath) => {
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
  const pkgName = def.pkgName;
  if (pkgName.charAt(0) === '@') {
    const scopeDir = path.join(projectRoot, 'flow-typed', 'npm', pkgName.split(path.sep)[0]);
    await mkdirp(scopeDir);
  }
  const targetFileName = `${pkgName}_${def.pkgVersionStr}.js`;
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
}
