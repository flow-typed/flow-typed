"use strict";

var _codeSign = require("../codeSign.js");

describe('codeSign', function () {
  describe('verifySignedCode', function () {
    it('verifies signed code', function () {
      var code = 'line 1\nline 2\nline 3';
      var version = 'VersionA';
      var signedCode = (0, _codeSign.signCode)(code, version);
      expect((0, _codeSign.verifySignedCode)(signedCode)).toBe(true);
    });
    it('does not verify unsigned code', function () {
      var code = 'line 1\nline2\nline3';
      expect((0, _codeSign.verifySignedCode)(code)).toBe(false);
    });
  });
  describe('getSignedCodeVersion', function () {
    it('gets version from well-signed code', function () {
      var code = 'line 1\nline 2\nline 3';
      var version = 'VersionA';
      var signedCode = (0, _codeSign.signCode)(code, version);
      expect((0, _codeSign.getSignedCodeVersion)(signedCode)).toBe(version);
    });
    it('gets version from altered signed code', function () {
      var code = 'line 1\nline 2\nline 3';
      var version = 'VersionA';
      var signedCode = (0, _codeSign.signCode)(code, version);
      var alteredCode = "".concat(signedCode, "\nline 4");
      expect((0, _codeSign.getSignedCodeVersion)(alteredCode)).toBe(version);
    });
    it('returns null for code without signature comments', function () {
      var code = 'line 1\nline 2\nline 3';
      expect((0, _codeSign.getSignedCodeVersion)(code)).toBe(null);
    });
  });
  describe('signCodeStream', function () {
    it('signs and versions the output code', function () {
      var version = 'VersionA';
      var stream = (0, _codeSign.signCodeStream)(version);
      stream.write('line 1\n');
      stream.write('line 2\n');
      stream.write('line 3\n');
      var signedCode = '';
      stream.on('data', function (data) {
        return signedCode += data;
      });
      return new Promise(function (res, _rej) {
        stream.on('close', function () {
          expect((0, _codeSign.verifySignedCode)(signedCode)).toBe(true);
          expect((0, _codeSign.getSignedCodeVersion)(signedCode)).toBe(version);
          res();
        });
        stream.end();
      });
    });
  });
});