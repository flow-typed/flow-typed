// @flow

import {mkdirp, recursiveRmdir} from './fileUtils';

import {fs, os, path} from './node';

const TMP_DIR = os.tmpdir();
const pendingTestProjects = new Map();
export async function testProject(cb: string => Promise<void>) {
  let _ROOT_DIR = null;
  for (var i = 0; i < 10; i++) {
    _ROOT_DIR = path.join(
      TMP_DIR,
      'install-cmd-test-dir-' + Math.floor(Math.random() * 10000 + 837208),
    );
    if (!pendingTestProjects.has(_ROOT_DIR)) {
      pendingTestProjects.set(_ROOT_DIR, true);
      if (await fs.exists(_ROOT_DIR)) {
        pendingTestProjects.delete(_ROOT_DIR);
        continue;
      }
      await mkdirp(_ROOT_DIR);
      break;
    }
  }
  const ROOT_DIR = _ROOT_DIR;
  if (ROOT_DIR === null) {
    throw new Error('Unable to create a test flow project directory!');
  }

  await cb(ROOT_DIR);

  // Clean up
  await recursiveRmdir(ROOT_DIR);
  pendingTestProjects.delete(ROOT_DIR);
}
