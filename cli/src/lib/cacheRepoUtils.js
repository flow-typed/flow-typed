// @flow

import {mkdirp} from './fileUtils';

import {cloneInto, rebaseRepoMaster} from './git';

import {fs, os, path} from './node';

import semver from 'semver';

const CACHE_REPO_EXPIRY = 1000 * 60; // 1 minute
const REMOTE_REPO_URL = 'https://github.com/flowtype/flow-typed.git';

async function cloneCacheRepo() {
  await mkdirp(getCacheRepoDir());
  try {
    await cloneInto(REMOTE_REPO_URL, getCacheRepoDir());
  } catch (e) {
    console.error('ERROR: Unable to clone local cache repo!');
    throw e;
  }
  await fs.writeFile(getLastUpdatedFile(), String(Date.now()));
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

function getCacheRepoGitDir() {
  return path.join(getCacheRepoDir(), '.git');
}

function getLastUpdatedFile() {
  return path.join(getCacheRepoDir(), 'lastUpdated');
}

async function rebaseCacheRepo() {
  if (
    (await fs.exists(getCacheRepoDir())) &&
    (await fs.exists(getCacheRepoGitDir()))
  ) {
    try {
      await rebaseRepoMaster(getCacheRepoDir());
    } catch (e) {
      console.error(
        'ERROR: Unable to rebase the local cache repo. ' + e.message,
      );
      return false;
    }
    await fs.writeFile(getLastUpdatedFile(), String(Date.now()));
    return true;
  } else {
    await cloneCacheRepo();
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
      const repoDirExists = fs.exists(getCacheRepoDir());
      const repoGitDirExists = fs.exists(getCacheRepoGitDir());
      if (!(await repoDirExists) || !(await repoGitDirExists)) {
        console.log(`• flow-typed cache not found, fetching from GitHub...`);
        await cloneCacheRepo();
      } else {
        let lastUpdated = 0;
        if (await fs.exists(getLastUpdatedFile())) {
          // If the LAST_UPDATED_FILE has anything other than just a number in
          // it, just assume we need to update.
          const lastUpdatedRaw = await fs.readFile(getLastUpdatedFile());
          const lastUpdatedNum = parseInt(lastUpdatedRaw, 10);
          if (String(lastUpdatedNum) === String(lastUpdatedRaw)) {
            lastUpdated = lastUpdatedNum;
          }
        }

        if (lastUpdated + cacheRepoExpiry < Date.now()) {
          console.log('• rebasing flow-typed cache...');
          const rebaseSuccessful = await rebaseCacheRepo();
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

export function getCacheRepoDir() {
  return path.join(getCacheDir(), 'repo');
}

export async function verifyCLIVersion(): Promise<void> {
  const metadataPath = path.join(
    getCacheRepoDir(),
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
  REMOTE_REPO_URL as _REMOTE_REPO_URL,
  setCustomCacheDir as _setCustomCacheDir,
};
