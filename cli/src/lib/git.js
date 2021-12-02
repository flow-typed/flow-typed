// @flow

import whichCb from 'which';
import {child_process} from './node';

async function getGitPath() {
  try {
    return await which('git');
  } catch (e) {
    throw new Error(
      `Unable to find ${'`'}git${'`'} installed on this system: ${e.message}`,
    );
  }
}

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
      'origin/master',
      '--name-only',
    ]);
    console.log(stdout);

    if (
      stdout.split('\n').filter(o => o.startsWith('definitions/')).length === 0
    ) {
      // We are probably already on master, so compare to the last commit.
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

export async function rebaseRepoMaster(repoDirPath: string) {
  const gitPath = await getGitPath();
  await child_process
    .spawnP(gitPath, ['checkout', 'master'], {cwd: repoDirPath})
    .catch(({stderr}) => {
      throw new Error(
        'Error checking out the `master` branch of the following repo:\n' +
          `${repoDirPath}\n\n${stderr}`,
      );
    });

  try {
    await child_process.execFileP(gitPath, ['pull', '--rebase'], {
      cwd: repoDirPath,
    });
  } catch (e) {
    const {stderr} = e;
    throw new Error(
      'Error rebasing the `master` branch of the following repo:\n' +
        `${repoDirPath}\n\n${stderr}`,
    );
  }
}
