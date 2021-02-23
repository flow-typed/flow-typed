// @flow

import {
  getSignedCodeVersion,
  signCode,
  signCodeStream,
  verifySignedCode,
} from '../codeSign.js';

describe('codeSign', () => {
  describe('verifySignedCode', () => {
    it('verifies signed code', () => {
      const code = 'line 1\nline 2\nline 3';
      const version = 'VersionA';
      const signedCode = signCode(code, version);
      expect(verifySignedCode(signedCode)).toBe(true);
    });

    it('does not verify unsigned code', () => {
      const code = 'line 1\nline2\nline3';
      expect(verifySignedCode(code)).toBe(false);
    });
  });

  describe('getSignedCodeVersion', () => {
    it('gets version from well-signed code', () => {
      const code = 'line 1\nline 2\nline 3';
      const version = 'VersionA';
      const signedCode = signCode(code, version);
      expect(getSignedCodeVersion(signedCode)).toBe(version);
    });

    it('gets version from altered signed code', () => {
      const code = 'line 1\nline 2\nline 3';
      const version = 'VersionA';
      const signedCode = signCode(code, version);
      const alteredCode = `${signedCode}\nline 4`;
      expect(getSignedCodeVersion(alteredCode)).toBe(version);
    });

    it('returns null for code without signature comments', () => {
      const code = 'line 1\nline 2\nline 3';
      expect(getSignedCodeVersion(code)).toBe(null);
    });
  });

  describe('signCodeStream', () => {
    it('signs and versions the output code', async () => {
      const code = 'line 1\nline 2\nline 3';
      const version = 'VersionA';
      const signedCode = await signCodeStream(version)(code);

      expect(verifySignedCode(signedCode)).toBe(true);
      expect(getSignedCodeVersion(signedCode)).toBe(version);
    });
  });
});
