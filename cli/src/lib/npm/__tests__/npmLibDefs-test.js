// @flow

import {
  _extractLibDefsFromNpmPkgDir as extractLibDefsFromNpmPkgDir,
  _parsePkgNameVer as parsePkgNameVer,
  _validateVersionNumPart as validateVersionNumPart,
  _validateVersionPart as validateVersionPart,
  getInstalledNpmLibDefs,
  getNpmLibDefs,
} from '../npmLibDefs';

import path from 'path';

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
      const errs = new Map();
      const defs = await extractLibDefsFromNpmPkgDir(
        UNDERSCORE_PATH,
        null,
        'underscore_v1.x.x',
        errs,
        true,
      );
      expect([...errs.entries()]).toEqual([]);
      expect(defs).toEqual([
        {
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
          testFilePaths: [path.join(UNDERSCORE_PATH, 'test_underscore-v1.js')],
          version: 'v1.x.x',
        },
        {
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
      ]);
    });

    it('fails on bad package dir name', async () => {
      const UNDERSCORE_PATH = path.join(
        FIXTURE_ROOT,
        'bad-pkg-namever',
        'definitions',
        'npm',
        'underscore_v1',
      );
      const defsPromise1 = extractLibDefsFromNpmPkgDir(
        UNDERSCORE_PATH,
        null,
        'underscore_v1',
      );
      let err = null;
      try {
        await defsPromise1;
      } catch (e) {
        err = e;
      }
      expect(err && err.message).toBe(
        'underscore_v1: Malformed npm package name! Expected the name to be ' +
          'formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH>',
      );

      const errs = new Map();
      const defsPromise2 = extractLibDefsFromNpmPkgDir(
        UNDERSCORE_PATH,
        null,
        'underscore_v1',
        errs,
      );
      expect(await defsPromise2).toEqual([]);
      expect([...errs.entries()]).toEqual([
        [
          'underscore_v1',
          [
            'Malformed npm package name! Expected the name to be formatted as ' +
              '<PKGNAME>_v<MAJOR>.<MINOR>.<PATCH>',
          ],
        ],
      ]);
    });

    it('fails on unexpected files', async () => {
      const UNDERSCORE_PATH = path.join(
        FIXTURE_ROOT,
        'unexpected-pkg-file',
        'definitions',
        'npm',
        'underscore_v1.x.x',
      );
      const defsPromise1 = extractLibDefsFromNpmPkgDir(
        UNDERSCORE_PATH,
        null,
        'underscore_v1.x.x',
      );
      let err = null;
      try {
        await defsPromise1;
      } catch (e) {
        err = e;
      }
      expect(err && err.message).toBe(
        path.join('underscore_v1.x.x', 'asdf') +
          ': Unexpected file name. This directory can ' +
          'only contain test files or a libdef file named `underscore_v1.x.x.js`.',
      );

      const errs = new Map();
      const defsPromise2 = extractLibDefsFromNpmPkgDir(
        UNDERSCORE_PATH,
        null,
        'underscore_v1.x.x',
        errs,
      );
      expect((await defsPromise2).length).toBe(2);
      expect([...errs.entries()]).toEqual([
        [
          path.join('underscore_v1.x.x', 'asdf'),
          [
            'Unexpected file name. This directory can only contain test files ' +
              'or a libdef file named `underscore_v1.x.x.js`.',
          ],
        ],
        [
          'underscore_v1.x.x/asdfdir',
          ['Flow versions must start with `flow-`'],
        ],
        [
          path.join('underscore_v1.x.x', 'flow_v0.38.x-', 'asdf2'),
          [
            'Unexpected file. This directory can only contain test files or a ' +
              'libdef file named `underscore_v1.x.x.js`.',
          ],
        ],
        [
          path.join('underscore_v1.x.x', 'flow_v0.38.x-', 'asdf2dir'),
          [
            'Unexpected sub-directory. This directory can only contain test ' +
              'files or a libdef file named `underscore_v1.x.x.js`.',
          ],
        ],
      ]);
    });

    it('fails if flow versions overlap', async () => {
      const UNDERSCORE_PATH = path.join(
        FIXTURE_ROOT,
        'overlapping-flow-versions',
        'definitions',
        'npm',
        'underscore_v1.x.x',
      );
      const defsPromise1 = extractLibDefsFromNpmPkgDir(
        UNDERSCORE_PATH,
        null,
        'underscore_v1.x.x',
      );
      let err = null;
      try {
        await defsPromise1;
      } catch (e) {
        err = e;
      }
      expect(err && err.message).toBe(
        'npm/underscore_v1.x.x: Flow versions not disjoint!',
      );

      const errs = new Map();
      const defsPromise2 = extractLibDefsFromNpmPkgDir(
        UNDERSCORE_PATH,
        null,
        'underscore_v1.x.x',
        errs,
      );
      expect((await defsPromise2).length).toBe(2);
      expect([...errs.entries()]).toEqual([
        ['npm/underscore_v1.x.x', ['Flow versions not disjoint!']],
      ]);
    });

    it('fails if no libdefs are found', async () => {
      const UNDERSCORE_PATH = path.join(
        FIXTURE_ROOT,
        'empty-libdef-dir',
        'definitions',
        'npm',
        'underscore_v1.x.x',
      );
      const defsPromise1 = extractLibDefsFromNpmPkgDir(
        UNDERSCORE_PATH,
        null,
        'underscore_v1.x.x',
      );
      let err = null;
      try {
        await defsPromise1;
      } catch (e) {
        err = e;
      }
      expect(err && err.message).toBe(
        'npm/underscore_v1.x.x: No libdef files found!',
      );

      const errs = new Map();
      const defsPromise2 = extractLibDefsFromNpmPkgDir(
        UNDERSCORE_PATH,
        null,
        'underscore_v1.x.x',
        errs,
      );
      expect(await defsPromise2).toEqual([]);
      expect([...errs.entries()]).toEqual([
        ['npm/underscore_v1.x.x', ['No libdef files found!']],
      ]);
    });

    it('fails if libdef not published on npm', async () => {
      const TOTALLY_NOT_REAL_PKG_PATH = path.join(
        FIXTURE_ROOT,
        'pkg-not-on-npm',
        'definitions',
        'npm',
        'totally-not-real-pkg_v1.x.x',
      );

      const errs = new Map();
      const defsPromise2 = extractLibDefsFromNpmPkgDir(
        TOTALLY_NOT_REAL_PKG_PATH,
        null,
        'totally-not-real-pkg_v1.x.x',
        errs,
        true,
      );
      expect((await defsPromise2).length).toBe(2);
      expect([...errs.entries()]).toEqual([
        ['totally-not-real-pkg', ['Package does not exist on npm!']],
      ]);
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
      expect(installedLibdefs.size).toBe(1);
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
      let err = null;
      try {
        await getNpmLibDefs(FIXTURE_DIR);
      } catch (e) {
        err = e;
      }
      const UNEXPECTED_FILE = path.join(FIXTURE_DIR, 'npm', 'unexpected-file');
      expect(err && err.message).toBe(
        `${UNEXPECTED_FILE}: Expected only directories to be present in this ` +
          `directory.`,
      );

      const errs = new Map();
      const libDefs = await getNpmLibDefs(FIXTURE_DIR, errs);
      expect(libDefs.length).toEqual(2);
      expect([...errs.entries()]).toEqual([
        [
          UNEXPECTED_FILE,
          ['Expected only directories to be present in this directory.'],
        ],
      ]);
    });
  });

  describe('parsePkgNameVer', () => {
    it('parses non-wildcard libs', () => {
      expect(parsePkgNameVer('lib_v1.2.3', 'contexthere')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 2,
          patch: 3,
        },
      });
      expect(parsePkgNameVer('lib_v1.2.3-asdf', 'contexthere')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'asdf',
        },
      });
    });

    it('parses wildcard minor libs', () => {
      expect(parsePkgNameVer('lib_v1.x.x', 'contexthere')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 'x',
          patch: 'x',
        },
      });
      expect(parsePkgNameVer('lib_v1.x.x-asdf', 'contexthere')).toEqual({
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
      expect(parsePkgNameVer('lib_v1.2.x', 'contexthere')).toEqual({
        pkgName: 'lib',
        pkgVersion: {
          major: 1,
          minor: 2,
          patch: 'x',
        },
      });
      expect(parsePkgNameVer('lib_v1.2.x-asdf', 'contexthere')).toEqual({
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
      expect(() => parsePkgNameVer('lib_vx.x.x', 'contexthere')).toThrow(
        'lib_vx.x.x: Malformed npm package name! Expected the name to be ' +
          'formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH>',
      );

      const errs = new Map();
      expect(parsePkgNameVer('lib_vx.x.x', 'contexthere', errs)).toEqual(null);
      expect([...errs.entries()]).toEqual([
        [
          'lib_vx.x.x',
          [
            'Malformed npm package name! Expected the name to be ' +
              'formatted as <PKGNAME>_v<MAJOR>.<MINOR>.<PATCH>',
          ],
        ],
      ]);
    });
  });

  describe('validateVersionNumPart', () => {
    it('returns a number when a string-number is given', () => {
      expect(validateVersionNumPart('42', '', '')).toBe(42);
    });

    it('errors when a non-number-string is given', () => {
      const errmsg =
        "contexthere: Invalid major number: 'x'. Expected a number.";
      expect(() => validateVersionNumPart('x', 'major', 'contexthere')).toThrow(
        errmsg,
      );

      const errs = new Map();
      expect(validateVersionNumPart('x', 'major', 'contexthere', errs)).toEqual(
        -1,
      );
      expect([...errs.entries()]).toEqual([
        ['contexthere', ["Invalid major number: 'x'. Expected a number."]],
      ]);
    });
  });

  describe('validateVersionPart', () => {
    it('returns "x" when given "x"', () => {
      expect(validateVersionPart('x', '', '')).toBe('x');
    });
  });
});
