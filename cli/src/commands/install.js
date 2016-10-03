// @flow

import colors from "colors/safe";
import {copyFile} from "../lib/fileUtils.js";
import {createStub} from "../lib/stubUtils.js";
import {determineFlowVersion} from "../lib/npmProjectUtils.js";
import {filterLibDefs} from "../lib/libDefs.js";
import {findFlowRoot} from '../lib/flowProjectUtils.js';
import {fs} from '../lib/node.js';
import {getCacheLibDefs} from "../lib/libDefs.js";
import {getCacheLibDefVersion} from "../lib/libDefs.js";
import {getPackageJsonData} from "../lib/npmProjectUtils.js";
import {getPackageJsonDependencies} from "../lib/npmProjectUtils.js";
import {getRangeLowerBound} from "../lib/semver.js";
import {mkdirp} from "../lib/fileUtils.js";
import {path} from '../lib/node.js';
import {pkgHasFlowFiles} from '../lib/stubUtils.js';
import semver from "semver";
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
        `• Found flow-bin@${versionToString(flowVer)} installed. Installing ` +
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
        console.log(`• Found package.json dependency: ${dep} ${depsMap[dep]}`);
      });
    } else {
      console.log(
        `• Found ${String(Object.keys(depsMap).length)} dependencies in ` +
        `package.json. Searching for libdefs...`
      );
    }
  }

  // Get a list of defs to install.
  let libDefsToInstall = [];
  let missingLibDefs = [];
  let libDefNeedsUpdate = [];
  const depNames = Object.keys(depsMap);
  await Promise.all(depNames.map(async (pkgName) => {
    if (FLOW_BUILT_IN_LIBS.indexOf(pkgName) > -1) {
      return;
    }

    const pkgVersionStr = depsMap[pkgName];
    let libDef = await findLibDef(
      pkgName,
      pkgVersionStr,
      flowVersion,
    );
    if (libDef) {
      libDefsToInstall.push(libDef);
      const libDefLowerBound = getRangeLowerBound(libDef.pkgVersionStr);
      const pkgDepLowerBound = getRangeLowerBound(pkgVersionStr);
      if (semver.lt(libDefLowerBound, pkgDepLowerBound)) {
        libDefNeedsUpdate.push([libDef, [pkgName, pkgVersionStr]]);
      }
    } else {
      missingLibDefs.push([pkgName, pkgVersionStr]);
    }
  }));

  if (libDefsToInstall.length > 0) {
    console.log(`• Installing ${libDefsToInstall.length} libdefs...`);
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
  }

  if ((args.verbose || missingLibDefs.length === 0) && libDefNeedsUpdate.length > 0) {
    console.log(
      `• The following installed libdefs are compatible with your ` +
      `dependencies, but may not include all minor and patch changes for ` +
      `your specific dependency version:\n`
    );
    libDefNeedsUpdate.forEach(([libDef, [pkgName, pkgVersionStr]]) => {
      console.log(
        '  • libdef: %s (satisfies %s)',
        colors.yellow(`${libDef.pkgName}_${libDef.pkgVersionStr}`),
        colors.bold(`${pkgName}@${pkgVersionStr}`)
      );
    });
    const libDefPlural =
      libDefNeedsUpdate.length > 1
      ? ['versioned updates', 'these packages']
      : ['a versioned update', 'this package'];
    console.log(
      `\n  Consider submitting ${libDefPlural[0]} for ${libDefPlural[1]} to\n` +
      `  https://github.com/flowtype/flow-typed/\n`
    );
  }

  if (missingLibDefs.length > 0) {
    // If the user specific an explicit library to be installed, don't generate
    // a stub if no libdef exists -- just inform the user that one doesn't exist
    if (args._[1]) {
      console.log(
        colors.red(`!! No libdefs found in flow-typed for ${args._[1]}. !!`) +
        '\n\nConsider using `%s` to generate an empty libdef that you can fill in.',
        colors.bold(`flow-typed create-stub ${args._[1]}`)
      );
    } else {
      // If a package that's missing a flow-typed libdef has any .flow files,
      // we'll skip generating a stub for it.
      let untypedMissingLibDefs = [];
      let typedMissingLibDefs = [];
      await Promise.all(missingLibDefs.map(async ([pkgName, pkgVerStr]) => {
        const hasFlowFiles = await pkgHasFlowFiles(cwd, pkgName);
        if (hasFlowFiles) {
          typedMissingLibDefs.push([pkgName, pkgVerStr]);
        } else {
          untypedMissingLibDefs.push([pkgName, pkgVerStr]);
        }
      }));

      if (untypedMissingLibDefs.length > 0) {
        console.log('• Generating stubs for untyped dependencies...');
        await Promise.all(
          untypedMissingLibDefs.map(async ([pkgName, pkgVerStr]) => {
            await createStub(
              flowProjectRoot,
              pkgName,
              pkgVerStr,
              args.overwrite,
            );
          })
        );

        console.log(colors.red(
          `\n!! No flow@${versionToString(flowVersion)}-compatible libdefs ` +
          `found in flow-typed for the above untyped dependencies !!`
        ));
        const plural =
          missingLibDefs.length > 1
          ? ['libdefs', 'these packages', 'them']
          : ['a libdef', 'this package', 'it'];
        console.log(`
   I've generated ${'`'}any${'`'}-typed stubs for ${plural[1]}, but consider submitting
   ${plural[0]} for ${plural[2]} to ${colors.bold('https://github.com/flowtype/flow-typed/')}\n`
        );
      }
    }
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
        "  • %s\n" +
        "    └> %s",
        colors.bold(colors.red(`${terseTargetFile} already exists!`)),
        "Use --overwrite to overwrite the existing libdef."
      );
      return false;
    }

    const libDefVersion = await getCacheLibDefVersion(def);
    const codeSignPreprocessor = signCodeStream(libDefVersion);
    await copyFile(def.path, targetFilePath, codeSignPreprocessor);
    console.log(
      colors.bold(
        "  • %s\n" +
        "    └> %s"
      ),
      targetFileName,
      colors.green(`.${path.sep}${terseTargetFile}`)
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
