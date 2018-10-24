"use strict";

var _semver = require("../semver.js");

describe('semver', function () {
  describe('stringToVersion', function () {
    it('parses concrete versions', function () {
      expect((0, _semver.stringToVersion)('v0.0.0')).toEqual({
        major: 0,
        minor: 0,
        patch: 0
      });
      expect((0, _semver.stringToVersion)('v0.0.3')).toEqual({
        major: 0,
        minor: 0,
        patch: 3
      });
      expect((0, _semver.stringToVersion)('v0.2.3')).toEqual({
        major: 0,
        minor: 2,
        patch: 3
      });
      expect((0, _semver.stringToVersion)('v1.2.3')).toEqual({
        major: 1,
        minor: 2,
        patch: 3
      });
    });
    it('parses ranged versions', function () {
      expect((0, _semver.stringToVersion)('v0.0.0').range).toBe(undefined);
      expect((0, _semver.stringToVersion)('>=v0.0.0').range).toBe('>=');
      expect((0, _semver.stringToVersion)('<=v0.0.0').range).toBe('<=');
    });
    it('parses wildcard versions', function () {
      expect((0, _semver.stringToVersion)('v1.2.x')).toEqual({
        major: 1,
        minor: 2,
        patch: 'x'
      });
      expect((0, _semver.stringToVersion)('v1.x.3')).toEqual({
        major: 1,
        minor: 'x',
        patch: 3
      }); // No wildcards on majors. This is rarely useful, so we assume it's a
      // mistake for now.

      expect(function () {
        return (0, _semver.stringToVersion)('vx.2.3');
      }).toThrow();
    });
    it('parses a little of everything', function () {
      expect((0, _semver.stringToVersion)('>=v1.2.x')).toEqual({
        range: '>=',
        major: 1,
        minor: 2,
        patch: 'x'
      });
    });
  });
});