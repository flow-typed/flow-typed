// @flow
jest.enableAutomock();
jest.unmock('../libDefs.js');
jest.unmock('../semver.js');
jest.unmock('semver');

import Git from 'nodegit';

import {fs} from '../node.js';
import {
  _CACHE_REPO_DIR as CACHE_REPO_DIR,
  _CACHE_REPO_EXPIRY as CACHE_REPO_EXPIRY,
  _ensureCacheRepo as ensureCacheRepo,
  _LAST_UPDATED_FILE as LAST_UPDATED_FILE,
  filterLibDefs,
} from '../libDefs.js';
import {stringToVersion} from '../semver.js';

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
      _mock(Git.Clone).mockClear();
      const repo = _mock(Git.Repository)._mockRepo;
      repo.checkoutBranch.mockClear();
      repo.rebaseBranches.mockClear();
      _mock(Git.Repository.open).mockClear();
    });

    pit('clones the repo if not present on disk', async () => {
      _mock(fs.exists).mockReturnValue(false);

      await ensureCacheRepo();
      expect(_mock(Git.Clone).mock.calls.length).toBe(1);
      expect(_mock(fs.writeFile).mock.calls.length).toBe(1);
      expect(_mock(fs.writeFile).mock.calls[0][0]).toBe(LAST_UPDATED_FILE);
    });

    pit('does NOT clone the repo if already present on disk', async () => {
      _mock(fs.exists).mockReturnValue(true);

      await ensureCacheRepo();
      expect(_mock(Git.Clone).mock.calls.length).toBe(0);
    });

    pit('rebases if present on disk + lastUpdated is old', async () => {
      _mock(fs.exists).mockReturnValue(true);
      _mock(fs.readFile).mockImplementation((filePath) => {
        if (filePath === LAST_UPDATED_FILE) {
          return String(Date.now() - CACHE_REPO_EXPIRY - 1);
        }
      });

      await ensureCacheRepo();
      expect(_mock(Git.Repository.open).mock.calls).toEqual([
        [CACHE_REPO_DIR],
      ]);
      const _mockRepo = _mock(Git.Repository)._mockRepo;
      expect(_mockRepo.rebaseBranches.mock.calls).toEqual([
        ['master', 'origin/master'],
      ]);
    });

    pit('does NOT rebase if on disk, but lastUpdated is recent', async () => {
      _mock(fs.exists).mockReturnValue(true);
      _mock(fs.readFile).mockImplementation((filePath) => {
        if (filePath === LAST_UPDATED_FILE) {
          return String(Date.now());
        }
      });

      await ensureCacheRepo();
      expect(_mock(Git.Repository.open).mock.calls.length).toBe(0);
    });
  });

  describe('filterLibDefs', () => {
    function _generateFixturePkg(name, verStr, flowVerStr) {
      return {
        pkgName: name,
        pkgVersion: stringToVersion(verStr),
        pkgVersionStr: verStr,
        pkgNameVersionStr: `${name}_${verStr}`,
        flowVersion: stringToVersion(verStr),
        flowVersionStr: flowVerStr,
        path: '',
        testFilePaths: [],
      };
    }

    describe('fuzzy filter', () => {
      it('filters on exact name', () => {
        const fixture = [
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture, {type: 'fuzzy', term: 'mori'});
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on differently-cased name', () => {
        const fixture = [
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture, {type: 'fuzzy', term: 'Mori'});
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on partial name', () => {
        const fixture = [
          _generateFixturePkg('**mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori**', 'v0.3.x', '>=v0.18.x'),
          _generateFixturePkg('mo**ri', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture, {type: 'fuzzy', term: 'mori'});
        expect(filtered).toEqual([fixture[1], fixture[0]]);
      });

      it('filters on flow version', () => {
        const fixture = [
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture, {
          type: 'fuzzy',
          term: 'mori',
          flowVersion: stringToVersion('v0.19.0')
        });
        expect(filtered).toEqual([fixture[1]]);
      });
    });

    describe('exact filter', () => {
      function _generateLibDef(pkgName, pkgVersionStr, flowVersionStr) {
        return {
          pkgName,
          pkgVersion: stringToVersion(pkgVersionStr),
          pkgVersionStr,
          pkgNameVersionStr: `${pkgName}_${pkgVersionStr}`,
          flowVersion: stringToVersion(flowVersionStr),
          flowVersionStr,
          path: '',
          testFilePaths: [],
        };
      }

      it('filters on exact name', () => {
        const fixture = [
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('notmori', 'v0.3.x', '>=v0.22.x'),
        ];
        const filtered = filterLibDefs(
          fixture,
          {type: 'exact', libDef: _generateLibDef('mori', 'v0.3.1', 'v0.x.x')},
        );
        expect(filtered).toEqual([fixture[0]]);
      });

      it('filters on differently-cased name', () => {
        const fixture = [
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('notmori', 'v0.3.x', '>=v0.22.x'),
        ];
        const filtered = filterLibDefs(
          fixture,
          {type: 'exact', libDef: _generateLibDef('Mori', 'v0.3.1', 'v0.x.x')},
        );
        expect(filtered).toEqual([fixture[0]]);
      });

      it('DOES NOT filter on partial name', () => {
        const fixture = [
          _generateFixturePkg('**mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori**', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mo**ri', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori',   'v0.3.x', '>=v0.22.x'),
        ];
        const filtered = filterLibDefs(
          fixture,
          {type: 'exact', libDef: _generateLibDef('mori', 'v0.3.1', 'v0.x.x')},
        );
        expect(filtered).toEqual([fixture[3]]);
      });

      it('filters on flow version', () => {
        const fixture = [
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.22.x'),
          _generateFixturePkg('mori', 'v0.3.x', '>=v0.18.x'),
        ];
        const filtered = filterLibDefs(fixture,{
          type: 'exact',
          libDef: _generateLibDef('mori', 'v0.3.1', 'v0.x.x'),
          flowVersion: stringToVersion('v0.19.0')
        });
        expect(filtered).toEqual([fixture[1]]);
      });
    });
  });
});
