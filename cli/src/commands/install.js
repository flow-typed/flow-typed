// @flow

import {signCodeStream} from "../lib/codeSign.js";
import {copyFile, mkdirp, searchUpDirPath} from "../lib/fileUtils.js";
import {getCacheLibDefVersion, getCacheLibDefs, filterLibDefs} from "../lib/libDefs.js";
import type {LibDef} from "../lib/libDefs.js";
import {fs, path} from '../lib/node.js';
import semver from 'semver';
import {emptyVersion, stringToVersion, versionToString} from "../lib/semver.js";
import type {Version} from "../lib/semver.js";
import {getPackageDependencies, getPackageFlowBinSemver} from "../lib/npmHelper.js";
import type {DepsMap} from "../lib/npmHelper.js";

export const name = 'install';
export const description = 'Installs a libdef to the ./flow-typed directory';

import typeof Yargs from "yargs";

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
  const launchDirectory = process.cwd();

  let {flowVersion: flowVersionRaw} = args;
  if (flowVersionRaw == null) {
    try {
      flowVersionRaw = await getFlowVersionString(launchDirectory);
      console.log(`Found installed flow version: ${flowVersionRaw}`);
    } catch(err) {
      return failWithMessage(`Failed to find a flow-bin dependency in package.json.
  Please install flow bin: npm install --save-dev flow-bin
  or provide a version on the command line: flow-typed install --flowVersion 0.24.0`
      );
    }
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
  const projectRoot = await findFlowProjectRoot(launchDirectory);
  if (projectRoot === null) {
    return failWithMessage(
      `\nERROR: Unable to find a flow project in the current dir or any of ` +
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
    depsMap = await getPackageDependencies(launchDirectory);
  }

  if(Object.keys(depsMap).length === 0) {
    return failWithMessage(
      "No package dependencies were found in package.json or specified on the command line."
    );
  }

  Object.keys(depsMap).forEach((dep) => console.log(`Found package.json dependency: ${dep} ${depsMap[dep]}`));

  // Get a list of defs to install.
  // The following is serialized to prevent a
  // error caused by rebasing the libdedf cache concurrently.
  const defs: Array<LibDef> = [];
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
async function installLibDef(
  def: LibDef,
  projectRoot: string,
  overwrite: boolean = false): Promise<boolean> {

  const flowTypedDir = path.join(projectRoot, 'flow-typed', 'npm');
  const pkgName = def.pkgName;
  if (pkgName.charAt(0) === '@') {
    const scopeDir = path.join(projectRoot, 'flow-typed', 'npm', pkgName.split(path.sep)[0]);
    await mkdirp(scopeDir);
  }
  const targetFileName = `${pkgName}_${def.pkgVersionStr}.js`;
  const targetFilePath = path.join(flowTypedDir, targetFileName);

  // Find the libdef
  try {
    await mkdirp(flowTypedDir);

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
    console.log(`Failed to install ${def.pkgName} into ${targetFilePath}`);
    console.log(`ERROR: ${e.message}`);
    return false;
  }
}

const flowBuiltInLibs: Array<string> = [
  'react',
  'react-dom',
];

/**
 * Search flow typed, or the cache, for a matching libdef.
 */
async function findLibDef(
  defName: string,
  defVersion: string,
  flowVersion: Version): Promise<?LibDef> {

  let filter;
  if (defVersion !== 'auto') {
    filter = {
      type: 'exact',
      libDef: {
        pkgName: defName,
        pkgVersionStr: defVersion,

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

  console.log(`Searching libdefs for ${defName} ${defVersion}...`);
  if (filtered.length === 0) {
    if(flowBuiltInLibs.indexOf[defName.toLowerCase()] === -1) {
      console.log(
        `  found no matching libdefs for flow@${versionToString(flowVersion)}. \n` +
        `  Consider submitting one to https://github.com/flowtype/flow-typed/`);
      return null;
  } else {
      console.log(
        `  found no matching libdefs for flow@${versionToString(flowVersion)}.`);
      return null;
  }

    }
  console.log('  found %s matching libdefs.', filtered.length);
  return filtered[0];
}

async function findFlowProjectRoot(fromPath: string) {
  return await searchUpDirPath(fromPath, async (dirPath) => {
    const flowConfigPath = path.join(dirPath, '.flowconfig');
    try {
      return fs.statSync(flowConfigPath).isFile();
    } catch (e) {
      // Not a file...
      return false;
    }
  });
}

async function getFlowVersionString(startPath: string): Promise<string> {
  const versionString = await getPackageFlowBinSemver(startPath);
  const verRange = new semver.Range(versionString);
  return verRange.set[0][0].semver.version;
}
