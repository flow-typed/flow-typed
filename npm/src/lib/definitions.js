// @flow

import {fs, https, path} from "./node.js";

export const DEFINITIONS_DIR = path.join(__dirname, '..', '..', '..', 'definitions');
const P = Promise;

export type VersionedName = {
  name: string,
  version: Version,
  path: string,
};

type VersionRange = ">=" | "<=";
export type Version = {
  range?: VersionRange,
  major: number | "x",
  minor: number | "x",
  patch: number | "x",
};

function _validateVersionPartStr(part, prefix, partName): number | "x" {
  if (part === "x") {
    return part;
  }
  const num = parseInt(part, 10);
  if (String(num) !== part) {
    throw new Error(
      `'${prefix}': Invalid ${partName} number. Expected 'x' or a number.`
    );
  }
  return num;
}

export const VERSIONED_NAME_RE = /^(.*)-([><]?=)?v([0-9]*|x)\.([0-9]*|x)\.([0-9]*|x)$/;
function dirNameToVersionedName(dirPath): VersionedName {
  const dirName = path.basename(dirPath);
  const dirNameParts = dirName.match(VERSIONED_NAME_RE);
  if (dirNameParts == null) {
    throw new Error(
      `'${dirName}' has a malformed name. Expected a name formatted as ` +
      "`<PKGNAME>-v<MAJOR>.<MINOR>.<PATCH>`."
    );
  }
  let [_, name, range, major, minor, patch] = dirNameParts;

  if (range != null && range !== ">=" && range !== "<=") {
    throw new Error(
      `'${dirName}': Invalid package version range: ${range}`
    );
  }

  major = _validateVersionPartStr(major, dirName, "major");
  minor = _validateVersionPartStr(minor, dirName, "minor");
  patch = _validateVersionPartStr(patch, dirName, "patch");

  return {
    name,
    version: {range, major, minor, patch},
    path: dirPath,
  };
};

export async function getFlowVersionsForPackage(
  pkgVer: VersionedName
): Promise<Array<VersionedName>> {
  const dirItems = await fs.readdir(pkgVer.path);
  const dirItemStats = await P.all(dirItems.map(name => {
    return fs.stat(path.join(pkgVer.path, name));
  }));
  return dirItems
    .filter((_, idx) => dirItemStats[idx].isDirectory())
    .map(dirName => {
      const dirPath = path.join(pkgVer.path, dirName);
      return dirName !== "flow-all" ? dirNameToVersionedName(dirPath) : {
        name: "flow",
        version: {major: "x", minor: "x", patch: "x"},
        path: dirPath
      };
    });
};

export async function getPackages(): Promise<Array<VersionedName>> {
  return (await fs.readdir(DEFINITIONS_DIR))
    .filter(item => item != '.cli-metadata.json')
    .map(item => dirNameToVersionedName(path.join(DEFINITIONS_DIR, item)));
};

export function versionToString(ver: Version): string {
  const rangeStr = ver.range ? ver.range : '';
  return `${rangeStr}v${ver.major}.${ver.minor}.${ver.patch}`;
};

export async function getTestFilesInDir(dirPath: string): Promise<Array<string>> {
  if (!(await fs.exists(dirPath))) {
    throw new Error(`Invalid test directory: ${dirPath}`);
  }
  const dirItems = await fs.readdir(dirPath);
  const dirItemStats = await P.all(
    dirItems.map(itemName => fs.stat(path.join(dirPath, itemName)))
  );

  return dirItems.filter((itemName, idx) => {
    const itemStats = dirItemStats[idx];
    return isTestFileName(itemName, itemStats);
  }).map(name => path.join(dirPath, name));
};

export function isTestFileName(itemName: string): boolean {
  return /^test-.*\.js$/.test(itemName);
};
