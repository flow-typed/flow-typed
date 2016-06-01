// @flow

import mkdirpCb from "mkdirp";

import {fs, path} from "./node.js";

const P = Promise;

export function copyFile(
  srcPath: string,
  destPath: string,
  preProcessor?: stream$Duplex,
): Promise<void> {
  return new Promise((res, rej) => {
    const reader = fs.createReadStream(srcPath);
    reader.on("error", rej);
    const writer = fs.createWriteStream(destPath);
    writer.on("error", rej);
    writer.on("close", res);
    if (preProcessor) {
      reader.pipe(preProcessor);
      preProcessor.pipe(writer);
    } else {
      reader.pipe(writer);
    }
  });
};

export function mkdirp(path: string) {
  return new Promise((res, rej) => {
    mkdirpCb(path, err => {
      if (err) {
        rej(err);
      } else {
        res();
      }
    });
  });
};

export async function recursiveRmdir(dirPath: string): Promise<void> {
  let dirItems = await fs.readdir(dirPath);
  let dirItemStats = await P.all(
    dirItems.map(item => fs.stat(path.join(dirPath, item)))
  );
  await P.all(dirItems.map(async (itemName, idx) => {
    const itemStat = dirItemStats[idx];
    const itemPath = path.join(dirPath, itemName);
    if (itemStat.isFile()) {
      await fs.unlink(itemPath);
    } else {
      await recursiveRmdir(itemPath);
      fs.rmdir(itemPath);
    }
  }));
  return fs.rmdir(dirPath);
};

export async function searchUpDirPath(
  startDir: string,
  testFn: (path: string) => Promise<bool>,
) {
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
};
