// @flow
import {fs, path} from './node';

export type FtConfig = {
  env?: mixed, // Array<string>,
};

export const getFtConfig = (
  cwd: string,
  libdefDir: string,
): FtConfig | void => {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(cwd, libdefDir, 'ft-config.json'), 'utf-8'),
    );
  } catch (e) {}
};
