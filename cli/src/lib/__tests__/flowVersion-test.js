// @flow

import {
  parseDirString,
  __parseVersion as parseVersion,
  toSemverString,
  toDirString,
} from "../flowVersion";

describe('flowVersion', () => {
  describe('parseVersion', () => {
    it('parses an exact flow version, no pre-rel', () => {
      expect(parseVersion('v0.1.2', false)).toEqual([6, {
        major: 0,
        minor: 1,
        patch: 2,
        prerel: null,
      }]);
    });

    it('parses an exact flow version, with pre-rel', () => {
      expect(parseVersion('v0.1.2-prerel-secondpart', false)).toEqual([25, {
        major: 0,
        minor: 1,
        patch: 2,
        prerel: 'prerel-secondpart',
      }]);
    });

    it('parses an exact flow version, no patch no pre-rel', () => {
      expect(parseVersion('v0.1', false)).toEqual([4, {
        major: 0,
        minor: 1,
        patch: 'x',
        prerel: null,
      }]);
    });

    it('parses an exact flow version, no patch with pre-rel', () => {
      // Note that, in semver, a pre-rel identifier can only come after a
      // patch version! That means if the user leaves off a patch version,
      // parseVersion() should stop parsing after the minor
      expect(parseVersion('v0.1-ignoredprerel', false)).toEqual([4, {
        major: 0,
        minor: 1,
        patch: 'x',
        prerel: null,
      }]);
    });

    it('errors on `x` major version', () => {
      expect(() => parseVersion('vx.1.2', false)).toThrow(
        'vx.1.2: The major version of a Flow version string cannot be `x`, ' +
        'it must be a number!'
      );
    });

    it('errors on missing minor version', () => {
      expect(() => parseVersion('v1', false)).toThrow(
        'v1: Flow versions must be a non-range semver with an exact major ' +
        'version and either an exact minor version or an `x` minor ver.'
      );
    });

    it('parses wildcard minor versions', () => {
      expect(parseVersion('v0.x', false)).toEqual([4, {
        major: 0,
        minor: 'x',
        patch: 'x',
        prerel: null,
      }]);
    });

    it('parses wildcard patch versions', () => {
      expect(parseVersion('v0.1.x', false)).toEqual([6, {
        major: 0,
        minor: 1,
        patch: 'x',
        prerel: null,
      }]);
    });

    it('parses prerel when range upper is possible', () => {
      expect(parseVersion('v0.1.x-prerel', true)).toEqual([13, {
        major: 0,
        minor: 1,
        patch: 'x',
        prerel: 'prerel',
      }]);
    });

    it('doesnt parse prerel when range upper is possible and present', () => {
      expect(parseVersion('v0.1.x-v0.1', true)).toEqual([6, {
        major: 0,
        minor: 1,
        patch: 'x',
        prerel: null,
      }]);
    });

    it('parses prerel on lower bound but excludes upper-range version', () => {
      expect(parseVersion('v0.1.x-prerel-prerel2-v0.1', true)).toEqual([21, {
        major: 0,
        minor: 1,
        patch: 'x',
        prerel: 'prerel-prerel2',
      }]);
    });
  });

  describe('parseDirString', () => {
    it('parses a flow-all version', () => {
      expect(parseDirString('flow_all')).toEqual({kind: 'all'});
    });

    it('parses an upper-bounded range', () => {
      expect(parseDirString('flow_-v0.1.2')).toEqual({
        kind: 'ranged',
        lower: null,
        upper: {
          major: 0,
          minor: 1,
          patch: 2,
          prerel: null,
        }
      });
    });

    it('parses a fully-bounded range', () => {
      expect(parseDirString('flow_v0.1.2-v0.2.3')).toEqual({
        kind: 'ranged',
        lower: {
          major: 0,
          minor: 1,
          patch: 2,
          prerel: null,
        },
        upper: {
          major: 0,
          minor: 2,
          patch: 3,
          prerel: null,
        },
      });
    });

    it('parses a lower-bounded range', () => {
      expect(parseDirString('flow_v0.1.2-')).toEqual({
        kind: 'ranged',
        upper: null,
        lower: {
          major: 0,
          minor: 1,
          patch: 2,
          prerel: null,
        }
      });
    });
  });

  describe('toSemverString', () => {
    it('serializes `flow_all` versions', () => {
      expect(toSemverString({kind: 'all'})).toBe('vx.x.x');
    });

    it('serializes specific versions', () => {
      expect(toSemverString({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: null,
        },
      })).toBe('v1.2.3');

      expect(toSemverString({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 2,
          patch: 'x',
          prerel: null,
        },
      })).toBe('v1.2.x');

      expect(toSemverString({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 'x',
          patch: 'x',
          prerel: null,
        },
      })).toBe('v1.x.x');

      expect(toSemverString({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 'x',
          patch: 'x',
          prerel: null,
        },
      })).toBe('v1.x.x');

      expect(toSemverString({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'somepatch-rel-v1',
        },
      })).toBe('v1.2.3-somepatch-rel-v1');
    });

    it('serializes ranged versions', () => {
      expect(toSemverString({
        kind: 'ranged',
        lower: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1',
        },
        upper: null,
      })).toBe('>=v1.2.3-prerel-v1');

      expect(toSemverString({
        kind: 'ranged',
        lower: null,
        upper: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1',
        },
      })).toBe('<=v1.2.3-prerel-v1');

      expect(toSemverString({
        kind: 'ranged',
        lower: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1',
        },
        upper: {
          major: 2,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1',
        },
      })).toBe('>=v1.2.3-prerel-v1 <=v2.2.3-prerel-v1');
    });
  });

  describe('toDirString', () => {
    it('serializes `flow_all` versions', () => {
      expect(toDirString({kind: 'all'})).toBe('flow_all');
    });

    it('serializes specific versions', () => {
      expect(toDirString({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: null,
        },
      })).toBe('flow_v1.2.3');

      expect(toDirString({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 2,
          patch: 'x',
          prerel: null,
        },
      })).toBe('flow_v1.2.x');

      expect(toDirString({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 'x',
          patch: 'x',
          prerel: null,
        },
      })).toBe('flow_v1.x.x');

      expect(toDirString({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 'x',
          patch: 'x',
          prerel: null,
        },
      })).toBe('flow_v1.x.x');

      expect(toDirString({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'somepatch-rel-v1',
        },
      })).toBe('flow_v1.2.3-somepatch-rel-v1');
    });

    it('serializes ranged versions', () => {
      expect(toDirString({
        kind: 'ranged',
        lower: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1',
        },
        upper: null,
      })).toBe('flow_v1.2.3-prerel-v1-');

      expect(toDirString({
        kind: 'ranged',
        lower: null,
        upper: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1',
        },
      })).toBe('flow_-v1.2.3-prerel-v1');

      expect(toDirString({
        kind: 'ranged',
        lower: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1',
        },
        upper: {
          major: 2,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1',
        },
      })).toBe('flow_v1.2.3-prerel-v1-v2.2.3-prerel-v1');
    });
  });
});
