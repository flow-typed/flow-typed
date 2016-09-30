// @flow

import {fs} from "./node.js";
import {path} from "./node.js";
import resolveAsync from "resolve";
import {searchUpDirPath} from "./fileUtils.js";
import semver from "semver";
import {stringToVersion} from "./semver.js";

import type {Version} from "./semver.js";

type PkgJson = {|
  pathStr: string,
  content: {
    name: string,
    version: string,

    bundledDependencies?: {[pkgName: string]: string},
    dependencies?: {[pkgName: string]: string},
    devDependencies?: {[pkgName: string]: string},
    optionalDependencies?: {[pkgName: string]: string},
    peerDependencies?: {[pkgName: string]: string},
  }
|};

const PKG_JSON_DEP_FIELDS = [
  'dependencies',
  'devDependencies',
  'peerDependencies',
  'bundledDependencies',
];
export async function findPackageJsonDepVersionStr(
  pkgJson: PkgJson,
  depName: string
): Promise<null | string> {
  let matchedFields = [];
  const deps = PKG_JSON_DEP_FIELDS.reduce((deps, section) => {
    const contentSection = pkgJson.content[section];
    if (contentSection && contentSection[depName]) {
      matchedFields.push(section);
      deps.push(contentSection[depName]);
    }
    return deps;
  }, []);

  if (deps.length === 0) {
    return null;
  } else if (deps.length === 1) {
    return deps.pop();
  } else {
    throw new Error(
      `Found ${depName} listed in ${String(deps.length)} places in ` +
      `${pkgJson.pathStr}!`
    );
  }
}

export async function findPackageJsonPath(pathStr: string): Promise<string> {
  const pkgJsonPathStr = await searchUpDirPath(
    pathStr,
    async (p) => await fs.exists(path.join(p, 'package.json'))
  );
  if (pkgJsonPathStr === null) {
    throw new Error(`Unable to find a package.json for ${pathStr}!`);
  }
  return path.join(pkgJsonPathStr, 'package.json');
};

export function getPackageJsonDependencies(
  pkgJson: PkgJson
): {[depName: string]: string} {
  return PKG_JSON_DEP_FIELDS.reduce((deps, section) => {
    const contentSection = pkgJson.content[section];
    if (contentSection) {
      Object.keys(contentSection).forEach(pkgName => {
        if (deps[pkgName]) {
          throw new Error(`Found ${pkgName} listed twice in package.json!`);
        }
        deps[pkgName] = contentSection[pkgName];
      });
    }
    return deps;
  }, {});
}

export async function getPackageJsonData(pathStr: string): Promise<PkgJson> {
  const pkgJsonPath = await findPackageJsonPath(pathStr);
  const pkgJsonContent = await fs.readFile(pkgJsonPath);
  return {
    pathStr: pkgJsonPath,
    content: JSON.parse(pkgJsonContent.toString())
  };
};

export async function determineFlowVersion(
  pathStr: string
): Promise<null | Version> {
  const pkgJsonData = await getPackageJsonData(pathStr);
  const flowBinVersionStr =
    await findPackageJsonDepVersionStr(pkgJsonData, 'flow-bin');

  if (flowBinVersionStr !== null) {
    let flowVerStr;
    if (semver.valid(flowBinVersionStr)) {
      flowVerStr = flowBinVersionStr;
    } else {
      const flowVerRange = new semver.Range(flowBinVersionStr);
      if (flowVerRange.set[0].length !== 2) {
        const cliPkgJson = require("../../package.json");
        const cliFlowVer = cliPkgJson.devDependencies['flow-bin'];
        throw new Error(
          `Unable to extract flow-bin version from package.json!\n` +
          `Never use a complex version range with flow-bin. Always use a ` +
          `specific version (i.e. "${cliFlowVer}").`
        );
      }
      flowVerStr = flowVerRange.set[0][0].semver.version;
    }
    return stringToVersion('v' + flowVerStr);
  }

  return null;
};

export function resolve(name: string, options: Object): Promise<string> {
  return new Promise((res, rej) =>
    resolveAsync(name, options, (err, result) => {
      if (err) { rej(err); } else { res(result); }
    })
  );
};
