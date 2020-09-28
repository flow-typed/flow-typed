// @flow

import { describe, it } from 'flow-typed-test';
import punycode from 'punycode';

describe('The `punycode.decode` function', () => {
  it('should accept a string as parameter', () => {
    punycode.decode('maana-pta');
    punycode.decode('--dqo34k');
    // $FlowExpectedError
    punycode.decode();
    // $FlowExpectedError
    punycode.decode(0x61);
  });

  it('should return a string', () => {
    (punycode.decode(''): string);
    // $FlowExpectedError
    (punycode.decode(''): void);
    // $FlowExpectedError
    (punycode.decode(''): number);
  });
});

describe('The `punycode.encode` function', () => {
  it('should accept a string as parameter', () => {
    punycode.encode('mañana');
    punycode.encode('☃-⌘');
    // $FlowExpectedError
    punycode.encode();
    // $FlowExpectedError
    punycode.encode(0x61);
  });

  it('should return a string', () => {
    (punycode.encode(''): string);
    // $FlowExpectedError
    (punycode.encode(''): void);
    // $FlowExpectedError
    (punycode.encode(''): number);
  });
});

describe('The `punycode.toUnicode` function', () => {
  it('should accept a string as parameter', () => {
    punycode.toUnicode('xn--maana-pta.com');
    punycode.toUnicode('xn----dqo34k.com');
    punycode.toUnicode('джумла@xn--p-8sbkgc5ag7bhce.xn--ba-lmcq');
    // $FlowExpectedError
    punycode.toUnicode();
    // $FlowExpectedError
    punycode.toUnicode(0x61);
  });

  it('should return a string', () => {
    (punycode.toUnicode(''): string);
    // $FlowExpectedError
    (punycode.toUnicode(''): void);
    // $FlowExpectedError
    (punycode.toUnicode(''): number);
  });
});

describe('The `punycode.toASCII` function', () => {
  it('should accept a string as parameter', () => {
    punycode.toASCII('mañana.com');
    punycode.toASCII('☃-⌘.com');
    punycode.toASCII('джумла@джpумлатест.bрфa');
    // $FlowExpectedError
    punycode.toASCII();
    // $FlowExpectedError
    punycode.toASCII(0x61);
  });

  it('should return a string', () => {
    (punycode.toASCII(''): string);
    // $FlowExpectedError
    (punycode.toASCII(''): void);
    // $FlowExpectedError
    (punycode.toASCII(''): number);
  });
});

describe('The `punycode.ucs2.decode` function', () => {
  it('should accept a sring as parameter', () => {
    punycode.ucs2.decode('abc');
    punycode.ucs2.decode('\uD834\uDF06');
    // $FlowExpectedError
    punycode.ucs2.decode();
    // $FlowExpectedError
    punycode.ucs2.decode(0x61);
  });

  it('should return an Array of codePoints', () => {
    (punycode.ucs2.decode(''): Array<number>);
    // $FlowExpectedError
    (punycode.ucs2.decode(''): void);
    // $FlowExpectedError
    (punycode.ucs2.decode(''): string);
  });
});

describe('The `punycode.ucs2.encode` function', () => {
  it('should accept an Array of codePoints as parameter', () => {
    punycode.ucs2.encode([0x61, 0x62, 0x63]);
    punycode.ucs2.encode([0x1d306]);
    // $FlowExpectedError
    punycode.ucs2.encode(0x61);
    // $FlowExpectedError
    punycode.ucs2.encode('');
  });

  it('should return a string', () => {
    (punycode.ucs2.encode([0x61]): string);
    // $FlowExpectedError
    (punycode.ucs2.encode([0x61]): void);
    // $FlowExpectedError
    (punycode.ucs2.encode([0x61]): number);
  });
});
