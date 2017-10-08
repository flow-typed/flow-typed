// @flow
jest.enableAutomock();
jest.unmock('../libDefs.js');
jest.unmock('../semver.js');
jest.unmock('semver');
jest.unmock('../flowVersion');

import {fs} from '../node.js';

import {
  _CACHE_REPO_DIR as CACHE_REPO_DIR,
  _CACHE_REPO_EXPIRY as CACHE_REPO_EXPIRY,
  _CACHE_REPO_GIT_DIR as CACHE_REPO_GIT_DIR,
  _cacheRepoAssure as cacheRepoAssure,
  _ensureCacheRepo as ensureCacheRepo,
  _LAST_UPDATED_FILE as LAST_UPDATED_FILE,
  _REMOTE_REPO_URL as REMOTE_REPO_URL,
  filterLibDefs,
  updateCacheRepo,
} from '../libDefs.js';
import {parseDirString as parseFlowDirString} from '../flowVersion';
import {cloneInto, rebaseRepoMaster} from '../git.js';

/**
 * Jest's process of mocking in place fools Flow, so we use this as an explicit
 * escape hatch when we need to side-step Flow.
 */
function _mock(mockFn) {
  return (mockFn: any);
}

describe('libDefs', () => {
  describe('ensureCacheRepo', () => {
    beforeEach(() => {
      _mock(cloneInto).mockClear();
      _mock(rebaseRepoMaster).mockClear();
      cacheRepoAssure.lastAssured = 0;
      cacheRepoAssure.pendingAssure = Promise.resolve();
    });

    it('clones the repo if not present on disk', async () => {
      await ensureCacheRepo();
      expect(_mock(cloneInto).mock.calls).toEqual([
        [REMOTE_REPO_URL, CACHE_REPO_DIR],
      ]);
      expect(_mock(fs.writeFile).mock.calls.length).toBe(1);
      expect(_mock(fs.writeFile).mock.calls[0][0]).toBe(LAST_UPDATED_FILE);
    });

    it('does NOT clone the repo if already present on disk', async () => {
      _mock(fs.exists).mockImplementation(dirPath => {
        return dirPath === CACHE_REPO_DIR || dirPath === CACHE_REPO_GIT_DIR;
      });

      await ensureCacheRepo();
      expect(_mock(cloneInto).mock.calls).toEqual([]);
    });

    it('rebases if present on disk + lastUpdated is old', async () => {
      _mock(fs.exists).mockImplementation(dirPath => {
        return dirPath === CACHE_REPO_DIR || dirPath === CACHE_REPO_GIT_DIR;
      });
      _mock(fs.readFile).mockImplementation(filePath => {
        if (filePath === LAST_UPDATED_FILE) {
          return String(Date.now() - CACHE_REPO_EXPIRY - 1);
        }
      });

      await ensureCacheRepo();
      expect(_mock(rebaseRepoMaster).mock.calls[0]).toEqual([CACHE_REPO_DIR]);
    });

    it('does NOT rebase if on disk, but lastUpdated is recent', async () => {
      _mock(fs.exists).mockImplementation(dirPath => {
        return (
          dirPath === CACHE_REPO_DIR ||
          dirPath === CACHE_REPO_GIT_DIR ||
          dirPath === LAST_UPDATED_FILE
        );
      });
      _mock(fs.readFile).mockImplementation(filePath => {
        if (filePath === LAST_UPDATED_FILE) {
          return String(Date.now());
        }
      });

      await ensureCacheRepo();
      expect(_mock(rebaseRepoMaster).mock.calls).toEqual([]);
    });
  });

  describe('updateCacheRepo', () => {
    beforeEach(() => {
      _mock(rebaseRepoMaster).mockClear();
      cacheRepoAssure.lastAssured = 0;
      cacheRepoAssure.pendingAssure = Promise.resolve();
    });

    it('rebases if present on disk + lastUpdated is old', async () => {
      _mock(fs.exists).mockImplementation(dirPath => {
        return dirPath === CACHE_REPO_DIR || dirPath === CACHE_REPO_GIT_DIR;
      });

      _mock(fs.readFile).mockImplementation(filePath => {
        if (filePath === LAST_UPDATED_FILE) {
          return String(Date.now() - CACHE_REPO_EXPIRY - 1);
        }
      });

      await updateCacheRepo();
      expect(_mock(rebaseRepoMaster).mock.calls).toEqual([[CACHE_REPO_DIR]]);
    });
  });

  describe('filterLibDefs', () => {
    function _generateMockLibdef(name, verStr, flowVerStr) {
      return {
        pkgName: name,
        pkgVersionStr: verStr,
        flowVersion: parseFlowDirString(
          flowVerStr,
          `${name}_${verStr}/${flowVerStr}`,
        ),
        flowVersionStr: flowVerStr,
        path: '',
        testFilePaths: [],
      };
    }

    describe('fuzzy filter', () => {
      it('filters on exact name', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture, {type: 'fuzzy', term: 'mori'});
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on differently-cased name', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture, {type: 'fuzzy', term: 'Mori'});
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on partial name', () => {
        const fixture = [
          _generateMockLibdef('**mori', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('mori**', 'v0.3.x', '>=v0.18.x'),
          _generateMockLibdef('mo**ri', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture, {type: 'fuzzy', term: 'mori'});
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on flow version', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'fuzzy',
          term: 'mori',
          flowVersionStr: 'v0.19.0',
        });
        expect(filtered).toEqual([fixture[1]]);
      });
    });

    describe('exact-name filter', () => {
      it('filters on exact name', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact-name',
          term: 'mori',
        });
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on differently-cased name', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact-name',
          term: 'Mori',
        });
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('DOES NOT filter on partial name', () => {
        const fixture = [
          _generateMockLibdef('**mori', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.18.x'),
          _generateMockLibdef('mo**ri', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact-name',
          term: 'mori',
        });
        expect(filtered).toEqual([fixture[1]]);
      });

      it('filters on flow version', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact-name',
          term: 'mori',
          flowVersionStr: 'v0.19.0',
        });
        expect(filtered).toEqual([fixture[1]]);
      });
    });

    describe('exact filter', () => {
      it('filters on exact name', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('notmori', 'v0.3.x', '>=v0.22.x'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.30.0',
          pkgName: 'mori',
          pkgVersionStr: 'v0.3.1',
        });
        expect(filtered).toEqual([fixture[0]]);
      });

      it('filters on differently-cased name', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('notmori', 'v0.3.x', '>=v0.22.x'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.28.0',
          pkgName: 'Mori',
          pkgVersionStr: 'v0.3.x',
        });
        expect(filtered).toEqual([fixture[0]]);
      });

      it('DOES NOT filter on partial name', () => {
        const fixture = [
          _generateMockLibdef('**mori', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('mori**', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('mo**ri', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.22.x'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.28.0',
          pkgName: 'mori',
          pkgVersionStr: 'v0.3.1',
        });
        expect(filtered).toEqual([fixture[3]]);
      });

      it('filters on flow version', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.22.x'),
          _generateMockLibdef('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.19.0',
          pkgName: 'mori',
          pkgVersionStr: 'v0.3.x',
        });
        expect(filtered).toEqual([fixture[1]]);
      });

      it('filters and orders from highest to lowest version', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v2.x.x', '>=v0.22.x'),
          _generateMockLibdef('mori', 'v3.x.x', '>=v0.22.x'),
          _generateMockLibdef('mori', 'v2.3.x', '>=v0.22.x'),
          _generateMockLibdef('mori', 'v2.1.x', '>=v0.22.x'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.22.0',
          pkgName: 'mori',
          pkgVersionStr: 'v2.3.0',
        });
        expect(filtered).toEqual([fixture[2], fixture[3], fixture[0]]);
      });

      it('filters using default (implied ^) and equals libdef versions', () => {
        const fixture = [
          _generateMockLibdef('mori', 'v2.3.x', '>=v0.22.x'),
          _generateMockLibdef('mori', '=v2.3.x', '>=v0.22.x'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'exact',
          flowVersionStr: 'v0.22.0',
          pkgName: 'mori',
          pkgVersionStr: 'v2.4.0',
        });
        expect(filtered).toEqual([fixture[0]]);
      });

      describe('given a package range', () => {
        it('DOES NOT match when libdef range does not intersect package range', () => {
          const fixture = [
            _generateMockLibdef('mori', 'v0.2.x', '>=v0.22.x'),
            _generateMockLibdef('mori', 'v0.4.x', '>=v0.22.x'),
          ];
          const filtered = filterLibDefs(fixture, {
            type: 'exact',
            flowVersionStr: 'v0.x.x',
            pkgName: 'mori',
            pkgVersionStr: '^0.3.0',
          });
          expect(filtered).toEqual([]);
        });

        it(
          'DOES NOT match when ranges intersect but package supports older ' +
            'versions than libdef',
          () => {
            const fixture = [
              _generateMockLibdef('mori', 'v0.3.x', '>=v0.22.x'),
            ];
            const filtered = filterLibDefs(fixture, {
              type: 'exact',
              flowVersionStr: 'v0.22.0',
              pkgName: 'mori',
              pkgVersionStr: '>=0.2.9 <0.3.0',
            });
            expect(filtered).toEqual([]);
          },
        );

        it('matches when ranges intersect and libdef supports older versions', () => {
          const fixture = [
            _generateMockLibdef('mori', 'v0.3.x', '>=v0.22.x'),
            _generateMockLibdef('mori', 'v0.3.8', '>=v0.22.x'),
          ];
          const filtered = filterLibDefs(fixture, {
            type: 'exact',
            flowVersionStr: 'v0.22.0',
            pkgName: 'mori',
            pkgVersionStr: '>=0.3.2 <0.3.8',
          });
          expect(filtered).toEqual([fixture[0]]);
        });
      });
    });
  });
});
