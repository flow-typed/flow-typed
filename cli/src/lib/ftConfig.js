// @flow
import {fs, path} from './node';

export type FtConfig = {
  env?: Array<string>,
  ignore?: Array<string>,
  workspaces?: Array<string>,
};

export const getFtConfig = (cwd: string): FtConfig | void => {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(cwd, 'flow-typed.config.json'), 'utf-8'),
    );
  } catch (e) {}
};
