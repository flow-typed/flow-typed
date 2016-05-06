// @flow

import {fs, path} from "./node.js";

const P = Promise;

export function copyFile(srcPath: string, destPath: string): Promise<void> {
  return new Promise((res, rej) => {
    const reader = fs.createReadStream(srcPath);
    reader.on("error", rej);
    const writer = fs.createWriteStream(destPath);
    writer.on("error", rej);
    writer.on("close", res);
    reader.pipe(writer);
  });
}

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
}
