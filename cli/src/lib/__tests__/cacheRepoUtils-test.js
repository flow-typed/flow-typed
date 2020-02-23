// @flow

jest.mock('../git');
jest.mock('../node');

import {
  _CACHE_REPO_EXPIRY as CACHE_REPO_EXPIRY,
  _cacheRepoEnsureToken as cacheRepoEnsureToken,
  _getCacheRepoGitDir as getCacheRepoGitDir,
  _getLastUpdatedFile as getLastUpdatedFile,
  ensureCacheRepo,
  getCacheRepoDir,
  verifyCLIVersion,
} from '../cacheRepoUtils';
import {cloneInto, rebaseRepoMaster} from '../git';
import {fs} from '../node';
import {DEFAULT_REPO_NAME, getGithubRepoUrl} from '../repoUtils';

function _mock(mockFn) {
  return ((mockFn: any): JestMockFn<*, *>);
}

describe('cacheRepoUtils', () => {
  describe('ensureCacheRepo', () => {
    let origConsoleLog = console.log;
    beforeEach(() => {
      _mock(cloneInto).mockClear();
      _mock(rebaseRepoMaster).mockClear();
      (console: any).log = jest.fn();
      cacheRepoEnsureToken.lastEnsured = 0;
      cacheRepoEnsureToken.pendingEnsurance = Promise.resolve();
    });
    afterEach(() => {
      (console: any).log = origConsoleLog;
    });

    it('clones the repo if not present on disk', async () => {
      await ensureCacheRepo(DEFAULT_REPO_NAME);
      expect(_mock(cloneInto).mock.calls).toEqual([
        [
          getGithubRepoUrl(DEFAULT_REPO_NAME),
          getCacheRepoDir(DEFAULT_REPO_NAME),
        ],
      ]);
      expect(_mock(fs.writeFile).mock.calls.length).toBe(1);
      expect(_mock(fs.writeFile).mock.calls[0][0]).toBe(
        getLastUpdatedFile(DEFAULT_REPO_NAME),
      );
    });

    it('does NOT clone the repo if already present on disk', async () => {
      _mock(fs.exists).mockImplementation(dirPath => {
        return (
          dirPath === getCacheRepoDir(DEFAULT_REPO_NAME) ||
          dirPath === getCacheRepoGitDir(DEFAULT_REPO_NAME)
        );
      });

      await ensureCacheRepo(DEFAULT_REPO_NAME);
      expect(_mock(cloneInto).mock.calls).toEqual([]);
    });

    it('rebases if present on disk + lastUpdated is old', async () => {
      _mock(fs.exists).mockImplementation(dirPath => {
        return (
          dirPath === getCacheRepoDir(DEFAULT_REPO_NAME) ||
          dirPath === getCacheRepoGitDir(DEFAULT_REPO_NAME)
        );
      });
      _mock(fs.readFile).mockImplementation(filePath => {
        if (filePath === getLastUpdatedFile(DEFAULT_REPO_NAME)) {
          return String(Date.now() - CACHE_REPO_EXPIRY - 1);
        }
      });

      await ensureCacheRepo(DEFAULT_REPO_NAME);
      expect(_mock(rebaseRepoMaster).mock.calls[0]).toEqual([
        getCacheRepoDir(DEFAULT_REPO_NAME),
      ]);
    });

    it('does NOT rebase if on disk, but lastUpdated is recent', async () => {
      _mock(fs.exists).mockImplementation(dirPath => {
        return (
          dirPath === getCacheRepoDir(DEFAULT_REPO_NAME) ||
          dirPath === getCacheRepoGitDir(DEFAULT_REPO_NAME) ||
          dirPath === getLastUpdatedFile(DEFAULT_REPO_NAME)
        );
      });
      _mock(fs.readFile).mockImplementation(filePath => {
        if (filePath === getLastUpdatedFile(DEFAULT_REPO_NAME)) {
          return String(Date.now());
        }
      });

      await ensureCacheRepo(DEFAULT_REPO_NAME);
      expect(_mock(rebaseRepoMaster).mock.calls).toEqual([]);
    });
  });

  describe('verifyCLIVersion', () => {
    let realReadFile = fs.readFile;
    beforeEach(() => {
      fs.readFile = jest.fn();
    });
    afterEach(() => {
      fs.readFile = realReadFile;
    });

    it('does not throw if the cli range is compatible', async () => {
      const readFileMock = _mock(fs.readFile);
      readFileMock.mockImplementation(() => {
        switch (readFileMock.mock.calls.length) {
          case 1:
            return Promise.resolve(
              JSON.stringify({compatibleCLIRange: '^1.0.0'}),
            );
          case 2:
            return Promise.resolve(JSON.stringify({version: '1.1.0'}));
          default:
            throw new Error(
              'Unexpected call to fs.readFile! Did this impl of ' +
                'verifyCLIVersion change?',
            );
        }
      });
      let err = null;
      try {
        await verifyCLIVersion(DEFAULT_REPO_NAME);
      } catch (e) {
        err = e;
      }
      expect(err).toBe(null);
    });

    it('throws if the cli range is incompatible', async () => {
      const readFileMock = _mock(fs.readFile);
      readFileMock.mockImplementation(() => {
        switch (readFileMock.mock.calls.length) {
          case 1:
            return Promise.resolve(
              JSON.stringify({compatibleCLIRange: '0.0.0'}),
            );
          case 2:
            return Promise.resolve(JSON.stringify({version: '1.0.0'}));
          default:
            throw new Error(
              'Unexpected call to fs.readFile! Did this impl of ' +
                'verifyCLIVersion change?',
            );
        }
      });
      let err = null;
      try {
        await verifyCLIVersion(DEFAULT_REPO_NAME);
      } catch (e) {
        err = e;
      }
      expect(err && err.message).toBe(
        'Please upgrade your flow-typed CLI! This CLI is version 1.0.0, but ' +
          'the latest flow-typed definitions are only compatible with ' +
          'flow-typed@0.0.0',
      );
    });
  });
});
