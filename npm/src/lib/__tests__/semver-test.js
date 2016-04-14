// @flow

import {stringToVersion} from '../semver.js';

describe('semver', () => {
  describe('stringToVersion', () => {
    it('parses concrete versions', () => {
      expect(stringToVersion('v0.0.0')).toEqual({major: 0, minor: 0, patch: 0});
      expect(stringToVersion('v0.0.3')).toEqual({major: 0, minor: 0, patch: 3});
      expect(stringToVersion('v0.2.3')).toEqual({major: 0, minor: 2, patch: 3});
      expect(stringToVersion('v1.2.3')).toEqual({major: 1, minor: 2, patch: 3});
    });

    it('parses ranged versions', () => {
      expect(stringToVersion('v0.0.0').range).toBe(undefined);
      expect(stringToVersion('>=v0.0.0').range).toBe('>=');
      expect(stringToVersion('<=v0.0.0').range).toBe('<=');
    });

    it('parses wildcard versions', () => {
      expect(stringToVersion('v1.2.x')).toEqual({major: 1, minor: 2, patch: 'x'});
      expect(stringToVersion('v1.x.3')).toEqual({major: 1, minor: 'x', patch: 3});

      // No wildcards on majors. This is rarely useful, so we assume it's a
      // mistake for now.
      expect(() => stringToVersion('vx.2.3')).toThrow();
    });

    it('parses a little of everything', () => {
      expect(stringToVersion('>=v1.2.x')).toEqual({
        range: '>=',
        major: 1,
        minor: 2,
        patch: 'x',
      });
    });
  });
});
