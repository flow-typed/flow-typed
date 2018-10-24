"use strict";

var _flowVersion = require("../flowVersion");

describe('flowVersion', function () {
  describe('parseVersion', function () {
    it('parses an exact flow version, no pre-rel', function () {
      expect((0, _flowVersion.__parseVersion)('v0.1.2', false)).toEqual([6, {
        major: 0,
        minor: 1,
        patch: 2,
        prerel: null
      }]);
    });
    it('parses an exact flow version, with pre-rel', function () {
      expect((0, _flowVersion.__parseVersion)('v0.1.2-prerel-secondpart', false)).toEqual([25, {
        major: 0,
        minor: 1,
        patch: 2,
        prerel: 'prerel-secondpart'
      }]);
    });
    it('parses an exact flow version, no patch no pre-rel', function () {
      expect((0, _flowVersion.__parseVersion)('v0.1', false)).toEqual([4, {
        major: 0,
        minor: 1,
        patch: 'x',
        prerel: null
      }]);
    });
    it('parses an exact flow version, no patch with pre-rel', function () {
      // Note that, in semver, a pre-rel identifier can only come after a
      // patch version! That means if the user leaves off a patch version,
      // parseVersion() should stop parsing after the minor
      expect((0, _flowVersion.__parseVersion)('v0.1-ignoredprerel', false)).toEqual([4, {
        major: 0,
        minor: 1,
        patch: 'x',
        prerel: null
      }]);
    });
    it('errors on `x` major version', function () {
      expect(function () {
        return (0, _flowVersion.__parseVersion)('vx.1.2', false);
      }).toThrow('The major version of a Flow version string cannot be ' + '`x`, it must be a number!');
    });
    it('errors on missing minor version', function () {
      expect(function () {
        return (0, _flowVersion.__parseVersion)('v1', false);
      }).toThrow('Flow versions must be a non-range semver with an exact ' + 'major version and either an exact minor version or an `x` minor ver. Instead got: v1');
    });
    it('parses wildcard minor versions', function () {
      expect((0, _flowVersion.__parseVersion)('v0.x', false)).toEqual([4, {
        major: 0,
        minor: 'x',
        patch: 'x',
        prerel: null
      }]);
    });
    it('parses wildcard patch versions', function () {
      expect((0, _flowVersion.__parseVersion)('v0.1.x', false)).toEqual([6, {
        major: 0,
        minor: 1,
        patch: 'x',
        prerel: null
      }]);
    });
    it('parses prerel when range upper is possible', function () {
      expect((0, _flowVersion.__parseVersion)('v0.1.x-prerel', true)).toEqual([13, {
        major: 0,
        minor: 1,
        patch: 'x',
        prerel: 'prerel'
      }]);
    });
    it('doesnt parse prerel when range upper is possible and present', function () {
      expect((0, _flowVersion.__parseVersion)('v0.1.x-v0.1', true)).toEqual([6, {
        major: 0,
        minor: 1,
        patch: 'x',
        prerel: null
      }]);
    });
    it('parses prerel on lower bound but excludes upper-range version', function () {
      expect((0, _flowVersion.__parseVersion)('v0.1.x-prerel-prerel2-v0.1', true)).toEqual([21, {
        major: 0,
        minor: 1,
        patch: 'x',
        prerel: 'prerel-prerel2'
      }]);
    });
  });
  describe('parseDirString', function () {
    it('parses a flow-all version', function () {
      expect((0, _flowVersion.parseDirString)('flow_all')).toEqual({
        kind: 'all'
      });
    });
    it('parses an upper-bounded range', function () {
      expect((0, _flowVersion.parseDirString)('flow_-v0.1.2')).toEqual({
        kind: 'ranged',
        lower: null,
        upper: {
          major: 0,
          minor: 1,
          patch: 2,
          prerel: null
        }
      });
    });
    it('parses a fully-bounded range', function () {
      expect((0, _flowVersion.parseDirString)('flow_v0.1.2-v0.2.3')).toEqual({
        kind: 'ranged',
        lower: {
          major: 0,
          minor: 1,
          patch: 2,
          prerel: null
        },
        upper: {
          major: 0,
          minor: 2,
          patch: 3,
          prerel: null
        }
      });
    });
    it('parses a lower-bounded range', function () {
      expect((0, _flowVersion.parseDirString)('flow_v0.1.2-')).toEqual({
        kind: 'ranged',
        upper: null,
        lower: {
          major: 0,
          minor: 1,
          patch: 2,
          prerel: null
        }
      });
    });
  });
  describe('toSemverString', function () {
    it('serializes `flow_all` versions', function () {
      expect((0, _flowVersion.toSemverString)({
        kind: 'all'
      })).toBe('vx.x.x');
    });
    it('serializes specific versions', function () {
      expect((0, _flowVersion.toSemverString)({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: null
        }
      })).toBe('v1.2.3');
      expect((0, _flowVersion.toSemverString)({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 2,
          patch: 'x',
          prerel: null
        }
      })).toBe('v1.2.x');
      expect((0, _flowVersion.toSemverString)({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 'x',
          patch: 'x',
          prerel: null
        }
      })).toBe('v1.x.x');
      expect((0, _flowVersion.toSemverString)({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 'x',
          patch: 'x',
          prerel: null
        }
      })).toBe('v1.x.x');
      expect((0, _flowVersion.toSemverString)({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'somepatch-rel-v1'
        }
      })).toBe('v1.2.3-somepatch-rel-v1');
    });
    it('serializes ranged versions', function () {
      expect((0, _flowVersion.toSemverString)({
        kind: 'ranged',
        lower: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1'
        },
        upper: null
      })).toBe('>=v1.2.3-prerel-v1');
      expect((0, _flowVersion.toSemverString)({
        kind: 'ranged',
        lower: null,
        upper: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1'
        }
      })).toBe('<=v1.2.3-prerel-v1');
      expect((0, _flowVersion.toSemverString)({
        kind: 'ranged',
        lower: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1'
        },
        upper: {
          major: 2,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1'
        }
      })).toBe('>=v1.2.3-prerel-v1 <=v2.2.3-prerel-v1');
    });
  });
  describe('toDirString', function () {
    it('serializes `flow_all` versions', function () {
      expect((0, _flowVersion.toDirString)({
        kind: 'all'
      })).toBe('flow_all');
    });
    it('serializes specific versions', function () {
      expect((0, _flowVersion.toDirString)({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: null
        }
      })).toBe('flow_v1.2.3');
      expect((0, _flowVersion.toDirString)({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 2,
          patch: 'x',
          prerel: null
        }
      })).toBe('flow_v1.2.x');
      expect((0, _flowVersion.toDirString)({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 'x',
          patch: 'x',
          prerel: null
        }
      })).toBe('flow_v1.x.x');
      expect((0, _flowVersion.toDirString)({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 'x',
          patch: 'x',
          prerel: null
        }
      })).toBe('flow_v1.x.x');
      expect((0, _flowVersion.toDirString)({
        kind: 'specific',
        ver: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'somepatch-rel-v1'
        }
      })).toBe('flow_v1.2.3-somepatch-rel-v1');
    });
    it('serializes ranged versions', function () {
      expect((0, _flowVersion.toDirString)({
        kind: 'ranged',
        lower: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1'
        },
        upper: null
      })).toBe('flow_v1.2.3-prerel-v1-');
      expect((0, _flowVersion.toDirString)({
        kind: 'ranged',
        lower: null,
        upper: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1'
        }
      })).toBe('flow_-v1.2.3-prerel-v1');
      expect((0, _flowVersion.toDirString)({
        kind: 'ranged',
        lower: {
          major: 1,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1'
        },
        upper: {
          major: 2,
          minor: 2,
          patch: 3,
          prerel: 'prerel-v1'
        }
      })).toBe('flow_v1.2.3-prerel-v1-v2.2.3-prerel-v1');
    });
  });
});