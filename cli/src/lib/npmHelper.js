// @flow
import {fs, path} from "./node.js";

async function isPackage(dir: string): Promise<boolean> {
  return await fs.exists(path.join(dir, 'package.json'));
}

async function findRootPackage(startPath : string): Promise<string> {
  async function _searchDirs(dirs: Array<string>): Promise<string> {
    if(!dirs.length) {
      throw new Error(`package.json not found in ${startPath}`);
    }
    dirs.pop();
    var dir = dirs.join(path.sep);
    if(await isPackage(dir)) {
      return dir;
    }
    return await _searchDirs(dirs);
  }

  let currentPath = startPath;
  if (currentPath[currentPath.length-1] !== path.sep) {
    currentPath+=path.sep;
  }
  const dirs: Array<string> = currentPath.split(path.sep);
  return await _searchDirs(dirs);
}

async function getPackageData(pkgDir: string): Promise<any> {
  let rawBuffer = await fs.readFile(path.join(pkgDir, 'package.json'));
  return JSON.parse(String(rawBuffer)); 
}

export type DepsMap = { [key: string]: string };

async function getDepsFromPkg(pkgDir: string): Promise<DepsMap> {
  let data = await getPackageData(pkgDir);
  return data.dependencies;
}

async function getVersionFromPkg(pkgDir: string): Promise<string> {
  let data = await getPackageData(pkgDir);
  return data.version;
}

export async function getInstalledPackageDependencies(srcPath: string): Promise<DepsMap> {
  let packagePath = await findRootPackage(srcPath);
  return await getDepsFromPkg(packagePath);
}