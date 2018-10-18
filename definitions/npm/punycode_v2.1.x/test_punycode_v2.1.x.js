// @flow

import { describe, it } from 'flow-typed-test';
import punycode from 'punycode';

describe('The `punycode.decode` function', () => {
  it('should accept a string as parameter', () => {
    punycode.decode('maana-pta');
    punycode.decode('--dqo34k');
    // $ExpectError
    punycode.decode();
    // $ExpectError
    punycode.decode(0x61);
  });

  it('should return a string', () => {
    (punycode.decode(''): string);
    // $ExpectError
    (punycode.decode(''): void);
    // $ExpectError
    (punycode.decode(''): number);
  });
});

describe('The `punycode.encode` function', () => {
  it('should accept a string as parameter', () => {
    punycode.encode('mañana');
    punycode.encode('☃-⌘');
    // $ExpectError
    punycode.encode();
    // $ExpectError
    punycode.encode(0x61);
  });

  it('should return a string', () => {
    (punycode.encode(''): string);
    // $ExpectError
    (punycode.encode(''): void);
    // $ExpectError
    (punycode.encode(''): number);
  });
});

describe('The `punycode.toUnicode` function', () => {
  it('should accept a string as parameter', () => {
    punycode.toUnicode('xn--maana-pta.com');
    punycode.toUnicode('xn----dqo34k.com');
    punycode.toUnicode('джумла@xn--p-8sbkgc5ag7bhce.xn--ba-lmcq');
    // $ExpectError
    punycode.toUnicode();
    // $ExpectError
    punycode.toUnicode(0x61);
  });

  it('should return a string', () => {
    (punycode.toUnicode(''): string);
    // $ExpectError
    (punycode.toUnicode(''): void);
    // $ExpectError
    (punycode.toUnicode(''): number);
  });
});

describe('The `punycode.toASCII` function', () => {
  it('should accept a string as parameter', () => {
    punycode.toASCII('mañana.com');
    punycode.toASCII('☃-⌘.com');
    punycode.toASCII('джумла@джpумлатест.bрфa');
    // $ExpectError
    punycode.toASCII();
    // $ExpectError
    punycode.toASCII(0x61);
  });

  it('should return a string', () => {
    (punycode.toASCII(''): string);
    // $ExpectError
    (punycode.toASCII(''): void);
    // $ExpectError
    (punycode.toASCII(''): number);
  });
});

describe('The `punycode.ucs2.decode` function', () => {
  it('should accept a sring as parameter', () => {
    punycode.ucs2.decode('abc');
    punycode.ucs2.decode('\uD834\uDF06');
    // $ExpectError
    punycode.ucs2.decode();
    // $ExpectError
    punycode.ucs2.decode(0x61);
  });

  it('should return an Array of codePoints', () => {
    (punycode.ucs2.decode(''): Array<number>);
    // $ExpectError
    (punycode.ucs2.decode(''): void);
    // $ExpectError
    (punycode.ucs2.decode(''): string);
  });
});

describe('The `punycode.ucs2.encode` function', () => {
  it('should accept an Array of codePoints as parameter', () => {
    punycode.ucs2.encode([0x61, 0x62, 0x63]);
    punycode.ucs2.encode([0x1d306]);
    // $ExpectError
    punycode.ucs2.encode(0x61);
    // $ExpectError
    punycode.ucs2.encode('');
  });

  it('should return a string', () => {
    (punycode.ucs2.encode([0x61]): string);
    // $ExpectError
    (punycode.ucs2.encode([0x61]): void);
    // $ExpectError
    (punycode.ucs2.encode([0x61]): number);
  });
});
