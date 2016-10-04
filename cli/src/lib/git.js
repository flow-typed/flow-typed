// @flow

import whichCb from 'which';
import {child_process} from "./node";

function which(executable): Promise<string> {
  return new Promise((res, rej) => {
    whichCb(executable, (err, resolvedPath) => {
      if (err) {
        rej(err);
      } else {
        res(resolvedPath);
      }
    });
  });
}

async function getGitPath() {
  try {
    return await which('git');
  } catch (e) {
    throw new Error(
      `Unable to find ${'`'}git${'`'} installed on this system: ${e.message}`
    );
  }
};

export async function cloneInto(gitURL: string, destDirPath: string) {
  const gitPath = await getGitPath();
  try {
    await child_process.spawnP(
      gitPath,
      ['clone', gitURL, destDirPath],
    );
  } catch (e) {
    throw new Error(`Error cloning repo: ${e.message}`);
  }
};

export async function findLatestFileCommitHash(
  repoPath: string,
  filePath: string
): Promise<string> {
  const gitPath = await getGitPath();
  try {
    const {stdout} = await child_process.spawnP(
      gitPath,
      ['log', "--pretty=%H", filePath],
      {cwd: repoPath}
    );
    return stdout.trim();
  } catch (e) {
    throw new Error(
      `Error finding latest commit hash for ${filePath}: ${e.message}`
    );
  }
};

export async function rebaseRepoMaster(repoDirPath: string) {
  const gitPath = await getGitPath();
  await child_process.spawnP(
    gitPath,
    ['checkout', 'master'],
    {cwd: repoDirPath}
  ).catch(({stderr}) => {
    throw new Error(
      'Error checking out the `master` branch of the following repo:\n' +
      `${repoDirPath}\n\n${stderr}`
    );
  });

  try {
    await child_process.execFileP(
      gitPath,
      ['pull', '--rebase'],
      {cwd: repoDirPath}
    );
  } catch (e) {
    const {stderr} = e;
    throw new Error(
      'Error rebasing the `master` branch of the following repo:\n' +
      `${repoDirPath}\n\n${stderr}`
    );
  }
};
