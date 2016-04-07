// @flow

import * as semver from "semver";

import {fs, path} from "../lib/node.js";
import {gitHubClient} from "../lib/github.js";
import {getAllShallowLibDefs} from "../lib/libDef.js";

import {
  copyVersion,
  stringToVersion,
  versionToString,
  wildcardSatisfies,
} from "../lib/semver.js";

import type {Version} from "../lib/semver.js";
import type {GHLibDef, ShallowGHLibDef} from "../lib/libdef.js";

const P = Promise;

/**
 * Given two Versions, each assumed to be compatible with some library version,
 * if the first is to be chosen over the second return true. Otherwise return
 * false.
 */
export function _chooseLibDefVersion(ver1: Version, ver2: Version): boolean {
  const ver1Copy = copyVersion(ver1);
  const ver2Copy = copyVersion(ver2);

  // Substitue 'x' for 0
  ver1Copy.major === 'x' && (ver1Copy.major = 0);
  ver1Copy.minor === 'x' && (ver1Copy.minor = 0);
  ver1Copy.patch === 'x' && (ver1Copy.patch = 0);
  ver2Copy.major === 'x' && (ver2Copy.major = 0);
  ver2Copy.minor === 'x' && (ver2Copy.minor = 0);
  ver2Copy.patch === 'x' && (ver2Copy.patch = 0);

  if (ver1Copy.major === ver2Copy.major
      && ver1Copy.minor === ver2Copy.minor
      && ver1Copy.patch === ver2Copy.patch) {

    if (ver1Copy.range && !ver2Copy.range) {
      // ver1 has a range, but ver2 does not
      return ver1Copy.range !== '>='; //true;
    } else if (!ver1Copy.range && ver2Copy.range) {
      // ver2 has a range, but ver1 does not
      return ver2Copy.range === '>=';
    } else if (ver1Copy.range && ver2Copy.range) {
      // both have a range
      return ver1Copy.range === '<=';
    } else {
      // neither has a range
      return semver.lt(versionToString(ver1Copy), versionToString(ver2Copy));
    }
  } else {
    ver1Copy.range = undefined;
    ver2Copy.range = undefined;

    const isLessThan = semver.lt(
      versionToString(ver1Copy),
      versionToString(ver2Copy)
    );

    if (isLessThan) {
      return true;
      //return ver1.range === '<=' || ver2.range !== '<=';
    } else {
      return false;
      //return ver1.range === '<=' && ver2.range !== '<=';
    }
  }
}

/**
 * Given an exact Flow version and a Map<PackageMame, PackageVersionRange>
 * (i.e. taken from a package.json), return a list of GHLibDef objects that
 * satisfy as many of the packages as possible.
 *
 * A GHLibDef is considered to satisfy a Package/VersionRange if it is the
 * lowest compatible version for the package of all compatible libdef versions.
 */
export async function getMatchingLibdefs(
  flowVer: Version,
  deps: Map<string, string>
): Promise<Array<GHLibDef>> {
  const allShallowLibDefs = await getAllShallowLibDefs();

  // Filter the list of all libdefs down to the ones that satisfy the package
  // version.
  const applicableShallowLibDefs = [];
  const applicableShallowLibDefs2: Map<string, ShallowGHLibDef> = new Map();
  deps.forEach((versionRange, depName) => {
    const ghLibDefVersions = allShallowLibDefs.get(depName);
    if (ghLibDefVersions) {
      ghLibDefVersions.forEach(ghLibDef => {
        const prev = applicableShallowLibDefs2.get(depName);
        if (!wildcardSatisfies(ghLibDef.libDef.pkgVersion, versionRange)) {
          return;
        }
        if (!prev || _chooseLibDefVersion(
             ghLibDef.libDef.pkgVersion,
             prev.libDef.pkgVersion
           )) {
          applicableShallowLibDefs.push(ghLibDef);
          applicableShallowLibDefs2.set(depName, ghLibDef);
        }
      });
    }
  });

  // For each applicable package libdef, query GitHub for information about
  // which versions of Flow are supported.
  const flowVersionStr = versionToString(flowVer);
  return P.all(
    Array.from(applicableShallowLibDefs2).map(async ([_, shallowGHLibDef]) => {
      const libDefFileName = `${shallowGHLibDef.libDef.pkgNameVersionStr}.js`;

      const libDefSubTree = await new Promise((res, rej) => {
        const subtree = gitHubClient().gitdata.getTree({
          user: 'flowtype',
          repo: 'flow-typed',
          sha: shallowGHLibDef.gitTreeSha,
          recursive: true,
        }, (err, result) => { if (err) { rej(err); } else { res(result); } });
      });

      const libDefItems = libDefSubTree.tree.map(item => {
        const dirParts = item.path.match(/^flow-([^\\\/]*).*$/);
        return dirParts === null
          ? [item, null]
          : [item, stringToVersion(dirParts[1])];
      }).filter(([item, dirFlowVersion]) => {
        // Things that don't start with a flow version aren't flow-version
        // subdirectories
        if (dirFlowVersion == null) {
          return false;
        }

        // We only care about libdef files (no test files, etc).
        if (path.basename(item.path) !== libDefFileName) {
          return false;
        }
        const dirFlowVerStr = versionToString(dirFlowVersion);

        return semver.satisfies(flowVersionStr, dirFlowVerStr);
      });

      if (libDefItems.length === 0) {
        throw new Error(
          `Unable to find "${libDefFileName}" in the flow-typed repo! This is ` +
          `likely an issue with flow-typed. Please report on GitHub!`
        );
      }

      libDefItems.sort(([item1, item1FlowVer], [item2, item2FlowVer]) => {
        const item1FlowVerStr = versionToString(item1FlowVer);
        const item2FlowVerStr = versionToString(item2FlowVer);
        if (semver.lt(item1FlowVerStr, item2FlowVerStr)) {
          return -1;
        } else if (semver.gt(item1FlowVerStr, item2FlowVerStr)) {
          return 1;
        } else {
          return 0;
        }
      });

      const url =
        `https://raw.githubusercontent.com/flowtype/flow-typed/master/` +
        `definitions/${encodeURIComponent(shallowGHLibDef.libDef.pkgVersionStr)}/` +
        `flow-${encodeURIComponent(versionToString(libDefItems[0][1]))}/` +
        `${encodeURIComponent(libDefFileName)}`;

      return {...shallowGHLibDef, url};
    })
  );
};

export const name = "libdefs-for-pkg";
export const description =
  "Given a path to a package.json file, find a list of library definitions " +
  "in the flow-typed GitHub repository. By default, prints a JSON list of " +
  "URLs for each library definition found.";
export function setup(yargs: Object): Object {
  return yargs
    .demand(2)
    .usage(`$0 ${name} /path/to/package.json`)
    .options({
      flowVersion: {
        demand: true,
        describe: "The version of Flow fetched libdefs must be compatible with",
        type: "string",
      },
    })
    .check(argv => {
      // Make sure the arg passed is a file that exists
      fs.statSync(argv._[1]);
      return true;
    });
};
export async function run(argv: Object): Promise<number> {
  const pkgJsonPath: string = argv._[1];

  const flowVersionStr =
    argv.flowVersion[0] === 'v'
    ? argv.flowVersion
    : 'v' + argv.flowVersion;
  const flowVersion = stringToVersion(flowVersionStr);

  const pkgJsonData = await fs.readFile(pkgJsonPath, {});
  const pkgJson = JSON.parse(pkgJsonData.toString());
  // $FlowFixMe: Object.entries() missing from core.js -- available in v0.23
  const deps = Object.entries(pkgJson.dependencies);
  // $FlowFixMe: Object.entries() missing from core.js -- available in v0.23
  const devDeps = Object.entries(pkgJson.devDependencies);

  const libDefs = await getMatchingLibdefs(
    flowVersion,
    new Map(devDeps.concat(deps))
  );

  console.log(JSON.stringify(libDefs.map(def => def.url), null, 2));

  return 0;
};
