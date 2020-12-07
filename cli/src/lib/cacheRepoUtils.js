// @flow

import {mkdirp} from './fileUtils';

import {cloneInto, rebaseRepoMaster} from './git';

import {fs, os, path} from './node';

import semver from 'semver';

import {isFlowTypedRepoUrl, getGithubRepoUrl} from './repoUtils';
import md5 from 'md5';

export const CACHE_REPO_EXPIRY = 1000 * 60; // 1 minute

async function cloneCacheRepo(repoName: string) {
  const repoCacheDir = getCacheRepoDir(repoName);
  const repoUrl = getGithubRepoUrl(repoName);
  await mkdirp(repoCacheDir);
  try {
    await cloneInto(repoUrl, repoCacheDir);
  } catch (e) {
    console.error('ERROR: Unable to clone local cache repo!');
    throw e;
  }
  await fs.writeFile(getLastUpdatedFile(repoName), String(Date.now()));
}

let customCacheDir = null;
function getCacheDir() {
  return customCacheDir === null
    ? path.join(os.homedir(), '.flow-typed')
    : customCacheDir;
}
function clearCustomCacheDir(): void {
  customCacheDir = null;
}
function setCustomCacheDir(dir: string): void {
  customCacheDir = dir;
}

function getCacheRepoGitDir(repoName: string) {
  return path.join(getCacheRepoDir(repoName), '.git');
}

export function getCacheRepoDefsDir(repoName: string) {
  return path.join(getCacheRepoDir(repoName), 'definitions');
}

export function getCacheRepoNpmDefsDir(repoName: string) {
  return path.join(getCacheRepoDefsDir(repoName), 'npm');
}

function getLastUpdatedFile(repoName: string) {
  return path.join(getCacheRepoDir(repoName), 'lastUpdated');
}

async function rebaseCacheRepo(repoName: string) {
  if (
    (await fs.exists(getCacheRepoDir(repoName))) &&
    (await fs.exists(getCacheRepoGitDir(repoName)))
  ) {
    try {
      await rebaseRepoMaster(getCacheRepoDir(repoName));
    } catch (e) {
      console.error(
        'ERROR: Unable to rebase the local cache repo. ' + e.message,
      );
      return false;
    }
    await fs.writeFile(getLastUpdatedFile(repoName), String(Date.now()));
    return true;
  } else {
    await cloneCacheRepo(repoName);
    return true;
  }
}

/**
 * Ensure that the CACHE_REPO_DIR exists and is recently rebased.
 * (else: create/rebase it)
 */
const cacheRepoEnsureToken: {
  lastEnsured: number,
  pendingEnsurance: Promise<*>,
} = {
  lastEnsured: 0,
  pendingEnsurance: Promise.resolve(),
};
export async function ensureCacheRepo(
  repoName: string,
  cacheRepoExpiry: number = CACHE_REPO_EXPIRY,
) {
  // Only re-run rebase checks if a check hasn't been run in the last 5 minutes
  if (cacheRepoEnsureToken.lastEnsured + 5 * 1000 * 60 >= Date.now()) {
    return cacheRepoEnsureToken.pendingEnsurance;
  }

  cacheRepoEnsureToken.lastEnsured = Date.now();
  const prevEnsurance = cacheRepoEnsureToken.pendingEnsurance;
  return (cacheRepoEnsureToken.pendingEnsurance = prevEnsurance.then(() =>
    (async function() {
      const repoDirExists = fs.exists(getCacheRepoDir(repoName));
      const repoGitDirExists = fs.exists(getCacheRepoGitDir(repoName));
      if (!(await repoDirExists) || !(await repoGitDirExists)) {
        console.log(`• flow-typed cache not found, fetching from GitHub...`);
        await cloneCacheRepo(repoName);
      } else {
        let lastUpdated = 0;
        if (await fs.exists(getLastUpdatedFile(repoName))) {
          // If the LAST_UPDATED_FILE has anything other than just a number in
          // it, just assume we need to update.
          const lastUpdatedRaw = await fs.readFile(
            getLastUpdatedFile(repoName),
          );
          const lastUpdatedNum = parseInt(lastUpdatedRaw, 10);
          if (String(lastUpdatedNum) === String(lastUpdatedRaw)) {
            lastUpdated = lastUpdatedNum;
          }
        }

        if (lastUpdated + cacheRepoExpiry < Date.now()) {
          console.log('• rebasing flow-typed cache...');
          const rebaseSuccessful = await rebaseCacheRepo(repoName);
          if (!rebaseSuccessful) {
            console.log(
              "\nNOTE: Unable to rebase local cache! If you don't currently " +
                "have internet connectivity, no worries -- we'll update the " +
                'local cache the next time you do.\n',
            );
          }
        }
      }
    })(),
  ));
}

export function getCacheRepoDir(repoName: string) {
  const repoDirname = isFlowTypedRepoUrl(repoName) ? 'repo' : `repo-${md5(repoName)}`;
  return path.join(getCacheDir(), repoDirname);
}

export async function verifyCLIVersion(repoName: string): Promise<void> {
  const metadataPath = path.join(
    getCacheRepoDir(repoName),
    'definitions',
    '.cli-metadata.json',
  );
  const metadata = JSON.parse(String(await fs.readFile(metadataPath)));
  const compatibleCLIRange = metadata.compatibleCLIRange;
  if (!compatibleCLIRange) {
    throw new Error(
      `Unable to find the 'compatibleCLIRange' property in ${metadataPath}. ` +
        `You might need to update your flow-typed CLI to the latest version.`,
    );
  }
  const thisCLIPkgJsonPath = path.join(__dirname, '..', '..', 'package.json');
  const thisCLIPkgJson = JSON.parse(
    String(await fs.readFile(thisCLIPkgJsonPath)),
  );
  const thisCLIVersion = thisCLIPkgJson.version;
  if (!semver.satisfies(thisCLIVersion, compatibleCLIRange)) {
    throw new Error(
      `Please upgrade your flow-typed CLI! This CLI is version ` +
        `${thisCLIVersion}, but the latest flow-typed definitions are only ` +
        `compatible with flow-typed@${compatibleCLIRange}`,
    );
  }
}

export {
  CACHE_REPO_EXPIRY as _CACHE_REPO_EXPIRY,
  cacheRepoEnsureToken as _cacheRepoEnsureToken,
  clearCustomCacheDir as _clearCustomCacheDir,
  getCacheRepoGitDir as _getCacheRepoGitDir,
  getLastUpdatedFile as _getLastUpdatedFile,
  setCustomCacheDir as _setCustomCacheDir,
};
