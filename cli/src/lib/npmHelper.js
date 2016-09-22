// @flow
import {fs, path} from "./node.js";
import {searchUpDirPath} from "./fileUtils.js";

async function isPackage(dir: string): Promise<boolean> {
  return await fs.exists(path.join(dir, 'package.json'));
}

async function findRootPackage(startPath : string): Promise<string> {
    const packagePath = await searchUpDirPath(
      startPath,
      async (p) => await isPackage(p));
    if(!packagePath) {
      throw new Error(`Unable to find package.json in ${startPath} or a parent directory.`);
    }
    return packagePath;
}

async function getPackageData(pkgDir: string): Promise<any> {
  const rawBuffer = await fs.readFile(path.join(pkgDir, 'package.json'));
  return JSON.parse(String(rawBuffer));
}

export type DepsMap = { [key: string]: string };

async function getDepsFromPkg(pkgDir: string): Promise<DepsMap> {
  const data = await getPackageData(pkgDir);

  const sections = [
    'dependencies',
    'devDependencies',
    'peerDependencies',
    'bundledDependencies',
  ];

  return sections.reduce((deps, section) => {
    if(data[section]) {
      Object.assign(deps, data[section]);
    }
    return deps;
  }, {});
}

export async function getPackageDependencies(startPath: string): Promise<DepsMap> {
  const packagePath = await findRootPackage(startPath);
  return await getDepsFromPkg(packagePath);
}

export async function getPackageFlowBinSemver(srcPath: string): Promise<string> {
  const packagePath = await findRootPackage(srcPath);
  const data = await getPackageData(packagePath);
  if (data && data.devDependencies && data.devDependencies['flow-bin']) {
    return data.devDependencies['flow-bin'];
  }
  throw new Error("failed to find flow-bin in package dependencies");
}
