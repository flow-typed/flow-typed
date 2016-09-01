// @flow

import {fs, path} from "./node.js";

async function isPackage(dir: string): Promise<boolean> {
  return await fs.exists(path.join(dir, 'package.json'));
}

async function findRootPackage(startPath : string | Array<string>): Promise<string> {
  let dirs: Array<string> = [];
  if (typeof startPath === 'string') {
    let currentPath = startPath;
    if (currentPath[currentPath.length-1] !== path.sep) {
      currentPath+=path.sep;
    }
    dirs = currentPath.split(path.sep);
  }
  if(!dirs.length) {
    throw new Error('package.json not found in path');
  }
  dirs.pop();
  var dir = dirs.join(path.sep);
  if(await isPackage(dir)) {
    return dir;
  }
  return await findRootPackage(dirs);
}

async function getPackageData(pkgDir: string): Promise<any> {
  let rawBuffer = await fs.readFile(path.join(pkgDir, 'package.json'));
  return JSON.parse(String(rawBuffer)); 
}

export type DepsMap = { [key: string]: string };

export async function getDepsFromPkg(pkgDir: string): Promise<DepsMap> {
  let data = await getPackageData(pkgDir);
  return data.dependencies;
}

export async function getVersionFromPkg(pkgDir: string): Promise<string> {
  let data = await getPackageData(pkgDir);
  return data.version;
}

export async function mapInstalledVersions(deps: DepsMap, rootDir: string): Promise<DepsMap> { 
  let resolvedDeps: DepsMap = {};
  
  for (let dep in deps) {
    const depDir = path.join(rootDir, 'node_modules', dep);
    if(await isPackage(depDir)) {
      let version = await getVersionFromPkg(depDir);   
      console.log(`Found npm dependency: ${dep} v${version}`);
      resolvedDeps[dep] = version;
    }
  }
  return resolvedDeps;
}

export async function getInstalledPackageDependencies(): Promise<DepsMap> {
  let packagePath = await findRootPackage(process.cwd());
  let deps = await getDepsFromPkg(packagePath);
  return await mapInstalledVersions(deps, packagePath);
}