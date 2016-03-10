// @flow

import {fs, https, path} from "./node.js";

const DEFINITIONS_DIR = path.join(__dirname, '..', '..', '..', 'definitions');

async function getPkgDir(pkgName: string): Promise<string> {
  const pkgDir = path.join(DEFINITIONS_DIR, pkgName);
  if (!(await fs.exists(pkgDir))) {
    throw new Error(
      "Package(" + pkgName + ") does not exist in the definitions library!"
    );
  }
  return pkgDir;
}

export async function getPkgNames(): Promise<Array<string>> {
  return fs.readdir(DEFINITIONS_DIR);
};

export async function getPkgVersions(
  pkgName: string
): Promise<Array<string>> {
  const pkgDir = await getPkgDir(pkgName);
  const dirItems = await fs.readdir(pkgDir);
  const dirItemStats = await Promise.all(
    dirItems.map(async (item) => fs.stat(path.join(pkgDir, item)))
  );

  return dirItems.filter((item, idx) => dirItemStats[idx].isDirectory());
};

/**
 * Find the list of all Flow versions given a package name and version
 */
export async function getFlowVersionsForPkgVersion(
  pkgName: string,
  pkgVersion: string
): Promise<Array<string>> {
  const pkgDir = await getPkgDir(pkgName);
  const pkgVersionDir = path.join(pkgDir, pkgVersion);
  if (!(await fs.exists(pkgVersionDir))) {
    throw new Error(
      "'" + pkgName + "@" + pkgVersion + "' does not exist in the " +
      "definitions library!"
    );
  }

  const dirItems = await fs.readdir(pkgVersionDir);
  const dirItemStats = await Promise.all(
    dirItems.map(async (item) => fs.stat(path.join(pkgVersionDir, item)))
  );

  return dirItems.filter((item, idx) => dirItemStats[idx].isDirectory());
};
