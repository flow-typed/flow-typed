// @flow

import {
  _extractLibDefsFromNpmPkgDir as extractLibDefsFromNpmPkgDir,
  _parsePkgNameVer as parsePkgNameVer,
  _validateVersionNumPart as validateVersionNumPart,
  _validateVersionPart as validateVersionPart,
  getInstalledNpmLibDefs,
  getNpmLibDefs,
  findNpmLibDef,
  getScopedPackageName,
  parseSignedCodeVersion,
  pkgVersionMatch,
} from '../npmLibDefs';
import * as cacheRepoUtils from '../../cacheRepoUtils';

import path from 'path';
import {ValidationError} from '../../ValidationError';

const BASE_FIXTURE_ROOT = path.join(__dirname, '__npmLibDefs-fixtures__');

describe('npmLibDefs', () => {
  describe('extractLibDefsFromNpmPkgDir', () => {
    const FIXTURE_ROOT = path.join(
      BASE_FIXTURE_ROOT,
      'extractLibDefsFromNpmPkgDir',
    );

    it('succeeds on well-formed repo', async () => {
      const UNDERSCORE_PATH = path.join(
        FIXTURE_ROOT,
        'well-formed',
        'definitions',
        'npm',
        'underscore_v1.x.x',
      );
      const defs = await extractLibDefsFromNpmPkgDir(
        UNDERSCORE_PATH,
        null,
        'underscore_v1.x.x',
      );
      expect(defs).toEqual(
        expect.arrayContaining([
          {
            depVersions: null,
            flowVersion: {
              kind: 'ranged',
              lower: {
                major: 0,
                minor: 13,
                patch: 'x',
                prerel: null,
              },
              upper: {
                major: 0,
                minor: 37,
                patch: 'x',
                prerel: null,
              },
            },
            name: 'underscore',
            path: path.join(
              UNDERSCORE_PATH,
              'flow_v0.13.x-v0.37.x',
              'underscore_v1.x.x.js',
            ),
            scope: null,
            testFilePaths: [
              path.join(UNDERSCORE_PATH, 'test_underscore-v1.js'),
            ],
            version: 'v1.x.x',
          },
          {
            depVersions: null,
            flowVersion: {
              kind: 'ranged',
              lower: {
                major: 0,
                minor: 38,
                patch: 'x',
                prerel: null,
              },
              upper: null,
            },
            name: 'underscore',
            path: path.join(
              UNDERSCORE_PATH,
              'flow_v0.38.x-',
              'underscore_v1.x.x.js',
            ),
            scope: null,
            testFilePaths: [
              path.join(UNDERSCORE_PATH, 'test_underscore-v1.js'),
              path.join(UNDERSCORE_PATH, 'flow_v0.38.x-', 'test_underscore.js'),
            ],
            version: 'v1.x.x',
          },
        ]),
      );
    });

    it('fails on bad package dir name', async () => {
      const UNDERSCORE_PATH = path.join(
        FIXTURE_ROOT,
        'bad-pkg-namever',
        'definitions',
        'npm',
        'underscore_v1',
      );
      await expect(
        extractLibDefsFromNpmPkgDir(UNDERSCORE_PATH, null, 'underscore_v1'),
      ).rejects.toThrow(
        'Malformed npm package name! Expected the name to be ' +
          'formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH> but instead got underscore_v1',
      );
    });

    it('fails on unexpected files', async () => {
      const UNDERSCORE_PATH = path.join(
        FIXTURE_ROOT,
        'unexpected-pkg-file',
        'definitions',
        'npm',
        'underscore_v1.x.x',
      );
      await expect(
        extractLibDefsFromNpmPkgDir(UNDERSCORE_PATH, null, 'underscore_v1.x.x'),
      ).rejects.toThrow(
        'Flow versions must start with `flow_` but instead got asdfdir',
      );
    });

    it('fails if flow versions overlap', async () => {
      const UNDERSCORE_PATH = path.join(
        FIXTURE_ROOT,
        'overlapping-flow-versions',
        'definitions',
        'npm',
        'underscore_v1.x.x',
      );

      await expect(
        extractLibDefsFromNpmPkgDir(UNDERSCORE_PATH, null, 'underscore_v1.x.x'),
      ).rejects.toThrow('Flow versions not disjoint!');
    });

    it('fails if no libdefs are found', async () => {
      const UNDERSCORE_PATH = path.join(
        FIXTURE_ROOT,
        'empty-libdef-dir',
        'definitions',
        'npm',
        'underscore_v1.x.x',
      );
      await expect(
        extractLibDefsFromNpmPkgDir(UNDERSCORE_PATH, null, 'underscore_v1.x.x'),
      ).rejects.toThrow('No libdef files found!');
    });

    // Fails at random (see #1229)
    // it('fails if libdef not published on npm', async () => {
    //   const TOTALLY_NOT_REAL_PKG_PATH = path.join(
    //     FIXTURE_ROOT,
    //     'pkg-not-on-npm',
    //     'definitions',
    //     'npm',
    //     'totally-not-real-pkg_v1.x.x',
    //   );

    //   const errs = new Map();
    //   const defsPromise2 = extractLibDefsFromNpmPkgDir(
    //     TOTALLY_NOT_REAL_PKG_PATH,
    //     null,
    //     'totally-not-real-pkg_v1.x.x',
    //     errs,
    //     true,
    //   );
    //   expect((await defsPromise2).length).toBe(2);
    //   expect([...errs.entries()]).toEqual([
    //     ['totally-not-real-pkg', ['Package does not exist on npm!']],
    //   ]);
    // });
  });

  describe('findNpmLibDef', () => {
    describe('when no cached libDefs found', () => {
      it('returns null', async () => {
        jest.setTimeout(10000);
        const pkgName = 'jest-test-npm-package';
        const pkgVersion = 'v1.0.0';
        const flowVersion = {kind: 'all'};

        await expect(
          findNpmLibDef(pkgName, pkgVersion, flowVersion),
        ).resolves.toEqual(null);
      });
    });

    describe('extLibDefs', () => {
      it('does not retrieve a new cache of lib defs if one is passed into it', async () => {
        const ensureCacheRepo = jest.fn(() => Promise.resolve());
        jest
          .spyOn(cacheRepoUtils, 'ensureCacheRepo')
          .mockImplementation(ensureCacheRepo);

        const pkgName = 'flow-bin';
        const pkgVersion = 'github:flowtype/flow-bin';
        const flowVersion = {kind: 'all'};
        const skipCache = false;

        await findNpmLibDef(
          pkgName,
          pkgVersion,
          flowVersion,
          undefined,
          skipCache,
          [],
        );

        expect(ensureCacheRepo).not.toHaveBeenCalled();
      });

      it('retrieve a new cache of lib defs if an external one is not passed in', async () => {
        const ensureCacheRepo = jest.fn(() => Promise.resolve());
        jest
          .spyOn(cacheRepoUtils, 'ensureCacheRepo')
          .mockImplementation(ensureCacheRepo);

        const pkgName = 'flow-bin';
        const pkgVersion = 'github:flowtype/flow-bin';
        const flowVersion = {kind: 'all'};
        const skipCache = false;

        await findNpmLibDef(
          pkgName,
          pkgVersion,
          flowVersion,
          undefined,
          skipCache,
        );

        expect(ensureCacheRepo).toHaveBeenCalled();
      });
    });

    describe('when non-semver package provided', () => {
      it("doesn't throw error", async () => {
        const pkgName = 'flow-bin';
        const pkgVersion = 'github:flowtype/flow-bin';
        const flowVersion = {kind: 'all'};

        let filtered;
        let error;
        try {
          filtered = await findNpmLibDef(pkgName, pkgVersion, flowVersion);
        } catch (e) {
          error = e;
        }

        expect(error).toBeUndefined();
        expect(filtered).toBeNull();
      });
    });

    describe('skipCache', () => {
      it("doesn't update the cache when it's provided", async () => {
        const ensureCacheRepo = jest.fn(() => Promise.resolve());
        jest
          .spyOn(cacheRepoUtils, 'ensureCacheRepo')
          .mockImplementation(ensureCacheRepo);

        const pkgName = 'jest-test-npm-package';
        const pkgVersion = 'v1.0.0';
        const flowVersion = {kind: 'all'};
        const skipCache = true;

        await findNpmLibDef(
          pkgName,
          pkgVersion,
          flowVersion,
          undefined,
          skipCache,
        );

        expect(ensureCacheRepo).not.toHaveBeenCalled();
      });

      it("does update the cache when it's not provided", async () => {
        const ensureCacheRepo = jest.fn(() => Promise.resolve());
        jest
          .spyOn(cacheRepoUtils, 'ensureCacheRepo')
          .mockImplementation(ensureCacheRepo);

        const pkgName = 'jest-test-npm-package';
        const pkgVersion = 'v1.0.0';
        const flowVersion = {kind: 'all'};

        await findNpmLibDef(pkgName, pkgVersion, flowVersion);

        expect(ensureCacheRepo).toHaveBeenCalled();
      });
    });
  });

  describe('pkgVersionMatch', () => {
    it('matches minor libdef', () => {
      expect(pkgVersionMatch('^8.5.1', '8.5.x')).toBe(true);
      expect(pkgVersionMatch('~8.5.1', '8.5.x')).toBe(true);
    });

    it('matches major libdef', () => {
      expect(pkgVersionMatch('^8.5.1', '8.x.x')).toBe(true);
      expect(pkgVersionMatch('~8.5.1', '8.x.x')).toBe(true);
    });

    it('will not match a lower libdef', () => {
      expect(pkgVersionMatch('^8.5.1', '8.4.x')).toBe(false);
      expect(pkgVersionMatch('~8.5.1', '8.4.x')).toBe(false);
    });

    it('will not match a lower libdef by major value', () => {
      expect(pkgVersionMatch('^8.5.1', '7.x.x')).toBe(false);
      expect(pkgVersionMatch('~8.5.1', '7.x.x')).toBe(false);
    });

    it('will not match a greater libdef by minor value', () => {
      expect(pkgVersionMatch('^8.5.1', '8.6.x')).toBe(false);
      expect(pkgVersionMatch('~8.5.1', '8.6.x')).toBe(false);
    });

    it('will not match a greater libdef by major value', () => {
      expect(pkgVersionMatch('^8.5.1', '9.x.x')).toBe(false);
      expect(pkgVersionMatch('~8.5.1', '9.x.x')).toBe(false);
    });

    it('matches lowest range when version has >=', () => {
      expect(pkgVersionMatch('>=8.5.1', '8.x.x')).toBe(true);
      expect(pkgVersionMatch('>=8.5.1', '8.5.x')).toBe(true);
    });

    it('will not match any greater libdef when version has >=', () => {
      expect(pkgVersionMatch('>=8.5.1', '9.x.x')).toBe(false);
    });

    it('matches explicit version with major range libdef', () => {
      expect(pkgVersionMatch('8.5.1', '8.x.x')).toBe(true);
    });

    it('matches explicit version with minor range libdef', () => {
      expect(pkgVersionMatch('8.5.1', '8.5.x')).toBe(true);
    });

    it('matches alpha version with libdef', () => {
      expect(pkgVersionMatch('8.5.1-alpha.0', '8.5.x')).toBe(true);
      expect(pkgVersionMatch('8.5.1-alpha.0', '8.x.x')).toBe(true);
    });

    it('matches non-semantic version alpha version with libdef', () => {
      expect(pkgVersionMatch('42.6.7.9.3-alpha', '42.6.x')).toBe(true);
    });
  });

  describe('getInstalledNpmLibDefs', () => {
    const FIXTURE_ROOT = path.join(BASE_FIXTURE_ROOT, 'getInstalledNpmLibDefs');

    it('returns an empty map when /flow-typed dir not present', async () => {
      const installedLibdefs = await getInstalledNpmLibDefs(
        path.join(FIXTURE_ROOT, 'emptyFlowTypedDir'),
      );
      expect(installedLibdefs.size).toBe(0);
    });

    it('finds unscoped libdefs', async () => {
      const installedLibdefs = await getInstalledNpmLibDefs(
        path.join(FIXTURE_ROOT, 'unscopedLibDefs'),
      );
      expect(installedLibdefs.size).toBe(2);
      const semverLibDef = installedLibdefs.get(
        'flow-typed/npm/semver_v5.1.x.js',
      );
      // Since Flow doesn't understand Jest/Jasmine predicates, we wrap in a
      // vanilla one
      if (semverLibDef == null) {
        expect(semverLibDef).not.toEqual(null);
      } else {
        if (semverLibDef.kind !== 'LibDef') {
          expect(semverLibDef.kind).toBe('LibDef');
        } else {
          expect(semverLibDef.libDef).toEqual({
            depVersions: null,
            flowVersion: {
              kind: 'specific',
              ver: {
                major: 0,
                minor: 27,
                patch: 0,
                prerel: null,
              },
            },
            name: 'semver',
            path: 'flow-typed/npm/semver_v5.1.x.js',
            scope: null,
            testFilePaths: [],
            version: 'v5.1.x',
          });
        }
      }
    });

    it('finds scoped libdefs', async () => {
      const installedLibdefs = await getInstalledNpmLibDefs(
        path.join(FIXTURE_ROOT, 'scopedLibDefs'),
      );
      expect(installedLibdefs.size).toBe(1);
      const semverLibDef = installedLibdefs.get(
        'flow-typed/npm/@kadira/storybook_v1.x.x.js',
      );
      // Since Flow doesn't understand Jest/Jasmine predicates, we wrap in a
      // vanilla one
      if (semverLibDef == null) {
        expect(semverLibDef).not.toEqual(null);
      } else {
        if (semverLibDef.kind !== 'LibDef') {
          expect(semverLibDef.kind).toBe('LibDef');
        } else {
          expect(semverLibDef.libDef).toEqual({
            depVersions: null,
            flowVersion: {
              kind: 'specific',
              ver: {
                major: 0,
                minor: 30,
                patch: 'x',
                prerel: null,
              },
            },
            name: 'storybook',
            path: 'flow-typed/npm/@kadira/storybook_v1.x.x.js',
            scope: '@kadira',
            testFilePaths: [],
            version: 'v1.x.x',
          });
          expect(getScopedPackageName(semverLibDef.libDef)).toEqual(
            '@kadira/storybook',
          );
        }
      }
    });

    it('finds libDef with fully-bounded semver range', async () => {
      const installedLibdefs = await getInstalledNpmLibDefs(
        path.join(FIXTURE_ROOT, 'unscopedLibDefs'),
      );
      expect(installedLibdefs.size).toBe(2);
      const semverLibDef = installedLibdefs.get(
        'flow-typed/npm/react-redux_v5.x.x.js',
      );
      // Since Flow doesn't understand Jest/Jasmine predicates, we wrap in a
      // vanilla one
      if (semverLibDef == null) {
        expect(semverLibDef).not.toEqual(null);
      } else {
        if (semverLibDef.kind !== 'LibDef') {
          expect(semverLibDef.kind).toBe('LibDef');
        } else {
          expect(semverLibDef.libDef).toEqual({
            depVersions: null,
            flowVersion: {
              kind: 'ranged',
              lower: {
                major: 0,
                minor: 30,
                patch: 'x',
                prerel: null,
              },
              upper: {
                major: 0,
                minor: 52,
                patch: 'x',
                prerel: null,
              },
            },
            name: 'react-redux',
            path: 'flow-typed/npm/react-redux_v5.x.x.js',
            scope: null,
            testFilePaths: [],
            version: 'v5.x.x',
          });
        }
      }
    });
  });

  describe('getNpmLibDefs', () => {
    const FIXTURE_ROOT = path.join(BASE_FIXTURE_ROOT, 'getNpmLibDefs');

    it('parses npm scope name correctly', async () => {
      const FIXTURE_DIR = path.join(FIXTURE_ROOT, 'scoped-pkgs', 'definitions');
      const libDefs = await getNpmLibDefs(FIXTURE_DIR);
      expect(libDefs.length).toBe(4);
      const scopedLibDefs = libDefs.filter(def => def.scope !== null);
      expect(scopedLibDefs.length).toBe(2);
    });

    it('errors when an unexpected file is in definitions/npm/', async () => {
      const FIXTURE_DIR = path.join(
        FIXTURE_ROOT,
        'unexpected-file',
        'definitions',
      );

      await expect(getNpmLibDefs(FIXTURE_DIR)).rejects.toEqual([
        new ValidationError(
          `Expected only directories to be present in this directory.`,
        ),
      ]);
    });
  });

  describe('parsePkgNameVer', () => {
    it('parses non-wildcard libs', () => {
      expect(parsePkgNameVer('lib_v1.2.3')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 2,
          patch: 3,
        },
      });
      expect(parsePkgNameVer('lib_v1.2.3-asdf')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'asdf',
        },
      });
    });

    it('parses libs installed from git', () => {
      expect(
        parsePkgNameVer('git@github.com:flow-typed/flow-typed.git'),
      ).toEqual({
        pkgName: 'flow-typed',
        pkgVersion: {
          major: 0,
          minor: 0,
          patch: 0,
          prerel: '',
        },
      });
    });

    it('parses wildcard minor libs', () => {
      expect(parsePkgNameVer('lib_v1.x.x')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 'x',
          patch: 'x',
        },
      });
      expect(parsePkgNameVer('lib_v1.x.x-asdf')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 'x',
          patch: 'x',
          prerel: 'asdf',
        },
      });
    });

    it('parses wildcard patch libs', () => {
      expect(parsePkgNameVer('lib_v1.2.x')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 2,
          patch: 'x',
        },
      });
      expect(parsePkgNameVer('lib_v1.2.x-asdf')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 2,
          patch: 'x',
          prerel: 'asdf',
        },
      });
    });

    it('errors on wildcard major', () => {
      expect(() => parsePkgNameVer('lib_vx.x.x')).toThrow(
        'Malformed npm package name! Expected the name to be ' +
          'formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH> but instead got lib_vx.x.x',
      );
    });
  });

  describe('validateVersionNumPart', () => {
    it('returns a number when a string-number is given', () => {
      expect(validateVersionNumPart('42', '')).toBe(42);
    });

    it('errors when a non-number-string is given', () => {
      const errmsg = "Invalid major number: 'x'. Expected a number.";
      expect(() => validateVersionNumPart('x', 'major')).toThrow(errmsg);
    });
  });

  describe('validateVersionPart', () => {
    it('returns "x" when given "x"', () => {
      expect(validateVersionPart('x', '')).toBe('x');
    });
  });

  describe('parseSignedCodeVersion', function() {
    it('works on bad stub version found in the wild', () => {
      expect(
        parseSignedCodeVersion(
          '<<STUB>>/babel-plugin-transform-import-commonjs_vhttps://github.com/jedwards1211/babel-plugin-transform-import-commonjs#patch-1-built/flow_v0.59.0',
        ),
      ).toEqual({
        kind: 'Stub',
        name:
          'babel-plugin-transform-import-commonjs_vhttps://github.com/jedwards1211/babel-plugin-transform-import-commonjs#patch-1-built/flow_v0.59.0',
      });
    });
  });
});
