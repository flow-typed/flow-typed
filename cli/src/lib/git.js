// @flow
import whichCb from 'which';
import simpleGit from 'simple-git';

import {child_process} from './node';

const mainlineBranch = 'main';

const isMainlineBranch = async (cacheDirPath: string): Promise<boolean> => {
  const git = simpleGit().cwd(cacheDirPath);

  return (await git.branch()).current === mainlineBranch;
};

const checkoutToMainlineBranch = async (
  cacheDirPath: string,
): Promise<void> => {
  const git = simpleGit().cwd(cacheDirPath);

  try {
    await git.fetch('origin', 'main');
    await git.checkout('main');
  } catch (e) {
    throw new Error(
      `Error checking out the \`${mainlineBranch}\` branch of the following repo:\n` +
        `${cacheDirPath}\n\n${e}`,
    );
  }
};

async function getGitPath() {
  try {
    return await which('git');
  } catch (e) {
    throw new Error(
      `Unable to find ${'`'}git${'`'} installed on this system: ${e.message}`,
    );
  }
}

function which(executable: string): Promise<string> {
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

export async function add(repoPath: string, pathToAdd: string) {
  const gitPath = await getGitPath();
  try {
    await child_process.spawnP(gitPath, ['add', pathToAdd], {cwd: repoPath});
  } catch (e) {
    throw new Error(`Error adding staged file(s) to git repo: ${e.message}`);
  }
}

export async function commit(dirPath: string, message: string) {
  const gitPath = await getGitPath();

  try {
    await child_process.spawnP(gitPath, ['commit', '-a', '-m', message], {
      cwd: dirPath,
    });
  } catch (e) {
    console.error(e);
    //throw new Error(`Error creating a commit in git repo: ${e.message}`);
  }
}

export async function setLocalConfig(
  dirPath: string,
  name: string,
  value: string,
) {
  const gitPath = await getGitPath();

  try {
    await child_process.spawnP(
      gitPath,
      ['config', name, JSON.stringify(value)],
      {cwd: dirPath},
    );
  } catch (e) {
    console.error(e);
    //throw new Error(`Error creating a commit in git repo: ${e.message}`);
  }
}

export async function getDefinitionsDiff(): Promise<Array<string>> {
  const gitPath = await getGitPath();
  try {
    // const {stdout: branchName} = await child_process.spawnP(gitPath, [
    //   'rev-parse',
    //   '--abbrev-ref',
    //   'HEAD',
    // ]);
    let {stdout} = await child_process.spawnP(gitPath, [
      'diff',
      `origin/${mainlineBranch}`,
      '--name-only',
    ]);
    console.log(stdout);

    if (
      stdout.split('\n').filter(o => o.startsWith('definitions/')).length === 0
    ) {
      // We are probably already on mainline, so compare to the last commit.
      const {stdout: headDiff} = await child_process.spawnP(gitPath, [
        'diff',
        'HEAD~1',
        '--name-only',
      ]);
      stdout = headDiff;
    }
    return stdout.split('\n');
  } catch (e) {
    console.error('Unable to find diffs!');
    console.error(e);
    return [];
  }
}

export async function cloneInto(gitURL: string, destDirPath: string) {
  const gitPath = await getGitPath();
  try {
    await child_process.spawnP(gitPath, ['clone', gitURL, destDirPath]);
    if (!(await isMainlineBranch(destDirPath))) {
      await checkoutToMainlineBranch(destDirPath);
    }
  } catch (e) {
    throw new Error(`Error cloning repo: ${e.message}`);
  }
}

export async function init(dirPath: string) {
  const gitPath = await getGitPath();
  try {
    await child_process.spawnP(gitPath, ['init'], {cwd: dirPath});
  } catch (e) {
    throw new Error(`Error init-ing git repo: ${e.message}`);
  }
}

export async function findLatestFileCommitHash(
  repoPath: string,
  filePath: string,
): Promise<string> {
  const gitPath = await getGitPath();
  try {
    const {stdout} = await child_process.spawnP(
      gitPath,
      ['log', '--pretty=%H', filePath],
      {cwd: repoPath},
    );
    return stdout.trim();
  } catch (e) {
    throw new Error(
      `Error finding latest commit hash for ${filePath}: ${e.message}`,
    );
  }
}

export async function rebaseRepoMainline(repoDirPath: string) {
  const gitPath = await getGitPath();
  if (!(await isMainlineBranch(repoDirPath))) {
    await checkoutToMainlineBranch(repoDirPath);
  }

  try {
    await child_process.execFileP(gitPath, ['pull', '--rebase'], {
      cwd: repoDirPath,
    });
  } catch (e) {
    const {stderr} = e;
    throw new Error(
      `Error rebasing the \`${mainlineBranch}\` branch of the following repo:\n` +
        `${repoDirPath}\n\n${stderr}`,
    );
  }
}
