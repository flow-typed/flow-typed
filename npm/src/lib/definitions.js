// @flow

import {fs, https, path} from "./node.js";

export const DEFINITIONS_DIR = path.join(__dirname, '..', '..', '..', 'definitions');
const P = Promise;

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
  const dirItemStats = await P.all(
    dirItems.map(async (item) => fs.stat(path.join(pkgDir, item)))
  );

  return dirItems.filter((item, idx) => dirItemStats[idx].isDirectory());
};

export async function getFlowVersionsForPkgVersion(
  pkgName: string,
  pkgVer: string
): Promise<Array<string>> {
  const pkgDir = await getPkgDir(pkgName);
  const pkgVerDir = path.join(pkgDir, pkgVer);
  if (!(await fs.exists(pkgVerDir))) {
    throw new Error(
      "'" + pkgName + "@" + pkgVer + "' does not exist in the " +
      "definitions library!"
    );
  }

  const dirItems = await fs.readdir(pkgVerDir);
  const dirItemStats = await P.all(
    dirItems.map(async (item) => fs.stat(path.join(pkgVerDir, item)))
  );

  return dirItems
    .filter((_, idx) => dirItemStats[idx].isDirectory())
    .map((itemName) => itemName.substr('flow-'.length));
};

export function isTestFileName(
  itemName: string,
  itemStats: fs.Stats
): boolean {
  return (
    itemStats.isFile()
    && itemName.substr(0, 'test-'.length) === 'test-'
    && path.extname(itemName) === '.js'
  );
};

export async function getTestsInPath(dirPath: string): Promise<Array<string>> {
  if (!(await fs.exists(dirPath))) {
    throw new Error('Invalid test directory: ' + dirPath);
  }
  const dirItems = await fs.readdir(dirPath);
  const dirItemStats = await P.all(
    dirItems.map(itemName => fs.stat(path.join(dirPath, itemName)))
  );

  return dirItems.filter((itemName, idx) => {
    const itemStats = dirItemStats[idx];
    return isTestFileName(itemName, itemStats);
  });
};

export async function getTestsForPkgVersionFlowVersion(
  pkgName: string,
  pkgVer: string,
  flowVer: string
): Promise<Array<string>> {
  const pkgDir = await getPkgDir(pkgName);
  const pkgVerDir = path.join(pkgDir, pkgVer);
  if (!(await fs.exists(pkgVerDir))) {
    throw new Error(
      "'" + pkgName + "@" + pkgVer + "' does not exist in the " +
      "definitions library!"
    );
  }
  const pkgVerFlowDir = path.join(pkgVerDir, flowVer);
  if (!(await fs.exists(pkgVerFlowDir))) {
    throw new Error(
      "'" + pkgName + "@" + pkgVer + "/flow-" + flowVer + "' does " +
      "not exist in the definitions library!"
    );
  }

  // Get and stat all of the items in the package/version dir as well as the
  // package/version/flow-version dir
  const [pkgVerDirItems, pkgVerFlowDirItems] = await P.all([
    await fs.readdir(pkgVerDir),
    await fs.readdir(pkgVerFlowDir),
  ]);
  const [pkgVerDirItemStats, pkgVerFlowDirItemStats] = await P.all([
    P.all(pkgVerDirItems.map(
      item => fs.stat(path.join(pkgVerDir, item))
    )),
    P.all(pkgVerFlowDirItems.map(
      item => fs.stat(path.join(pkgVerFlowDir, item))
    )),
  ]);

  const pkgVerDirTests = pkgVerDirItems.filter((itemName, idx) => {
    return isTestFileName(itemName, pkgVerDirItemStats[idx]);
  }).map(itemName => path.join('..', itemName));
  const pkgVerFlowDirTests = pkgVerFlowDirItems.filter((itemName, idx) => {
    return isTestFileName(itemName, pkgVerFlowDirItemStats[idx]);
  });

  return pkgVerDirTests.concat(pkgVerFlowDirTests);
};
