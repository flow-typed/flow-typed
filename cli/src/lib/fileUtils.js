// @flow

import mkdirpLib from 'mkdirp';

import {fs, path} from './node.js';

const P = Promise;

export function copyDir(srcPath: string, destPath: string): Promise<void> {
  return new Promise((res, rej) => {
    fs.copy(srcPath, destPath, err => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });
}

export function copyFile(
  srcPath: string,
  destPath: string,
  preProcessor?: (content: string) => string,
): Promise<void> {
  return new Promise((res, rej) => {
    if (preProcessor) {
      const content = fs.readFileSync(srcPath, 'utf-8');

      fs.writeFile(destPath, preProcessor(content), (err: Error) => {
        if (err) {
          rej(err);
        } else {
          res();
        }
      });
    } else {
      fs.copyFile(srcPath, destPath, err => {
        if (err) {
          rej(err);
        } else {
          res();
        }
      });
    }
  });
}

export async function getFilesInDir(
  dirPath: string,
  recursive: boolean = false,
): Promise<Set<string>> {
  let dirItems = await fs.readdir(dirPath);
  let dirItemStats = await P.all(
    dirItems.map(item => fs.stat(path.join(dirPath, item))),
  );
  const installedLibDefs = new Set();
  await P.all(
    dirItems.map(async (itemName, idx) => {
      const itemStat = dirItemStats[idx];
      if (itemStat.isFile()) {
        installedLibDefs.add(itemName);
      } else if (recursive && itemStat.isDirectory()) {
        const itemPath = path.join(dirPath, itemName);
        const subDirFiles = await getFilesInDir(itemPath, recursive);
        subDirFiles.forEach(subItemName =>
          installedLibDefs.add(path.join(itemName, subItemName)),
        );
      }
    }),
  );
  return installedLibDefs;
}

export function mkdirp(path: string): Promise<*> {
  return mkdirpLib(path);
}

export async function recursiveRmdir(dirPath: string): Promise<void> {
  let dirItems = await fs.readdir(dirPath);
  let dirItemStats = await P.all(
    dirItems.map(item => fs.stat(path.join(dirPath, item))),
  );
  await P.all(
    dirItems.map(async (itemName, idx) => {
      const itemStat = dirItemStats[idx];
      const itemPath = path.join(dirPath, itemName);
      if (itemStat.isFile()) {
        await fs.unlink(itemPath);
      } else {
        await recursiveRmdir(itemPath);
        await fs.rmdir(itemPath).catch(err => {
          if (err.code === 'ENOENT') {
            // Ignore ENOENT error
            // it's okay if the files are already removed
            return;
          }

          throw err;
        });
      }
    }),
  );
  return fs.rmdir(dirPath);
}

export async function searchUpDirPath(
  startDir: string,
  testFn: (path: string) => Promise<boolean>,
): Promise<string | null> {
  let currDir = startDir;
  let lastDir = null;
  while (currDir !== lastDir) {
    if (await testFn(currDir)) {
      return currDir;
    }
    lastDir = currDir;
    currDir = path.resolve(currDir, '..');
  }
  return null;
}
