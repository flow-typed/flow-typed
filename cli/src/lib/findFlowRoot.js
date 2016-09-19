// @flow

import {searchUpDirPath} from "./fileUtils";
import {fs, path} from './node';

// Find the project root
export default async function (start: string): Promise<string | null> {
  return searchUpDirPath(start, async (dirPath) => {
    const flowConfigPath = path.join(dirPath, '.flowconfig');
    try {
      return fs.statSync(flowConfigPath).isFile();
    } catch (e) {
      // Not a file...
      return false;
    }
  });
}
