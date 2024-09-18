// @flow

import { describe, it } from 'flow-typed-test';
import punycode from 'punycode.js';

describe('The `punycode.decode` function', () => {
  it('should accept a string as parameter', () => {
    punycode.decode('maana-pta');
    punycode.decode('--dqo34k');
    // $FlowExpectedError[incompatible-call]
    punycode.decode();
    // $FlowExpectedError[incompatible-call]
    punycode.decode(0x61);
  });

  it('should return a string', () => {
    (punycode.decode(''): string);
    // $FlowExpectedError[incompatible-cast]
    (punycode.decode(''): void);
    // $FlowExpectedError[incompatible-cast]
    (punycode.decode(''): number);
  });
});

describe('The `punycode.encode` function', () => {
  it('should accept a string as parameter', () => {
    punycode.encode('mañana');
    punycode.encode('☃-⌘');
    // $FlowExpectedError[incompatible-call]
    punycode.encode();
    // $FlowExpectedError[incompatible-call]
    punycode.encode(0x61);
  });

  it('should return a string', () => {
    (punycode.encode(''): string);
    // $FlowExpectedError[incompatible-cast]
    (punycode.encode(''): void);
    // $FlowExpectedError[incompatible-cast]
    (punycode.encode(''): number);
  });
});

describe('The `punycode.toUnicode` function', () => {
  it('should accept a string as parameter', () => {
    punycode.toUnicode('xn--maana-pta.com');
    punycode.toUnicode('xn----dqo34k.com');
    punycode.toUnicode('джумла@xn--p-8sbkgc5ag7bhce.xn--ba-lmcq');
    // $FlowExpectedError[incompatible-call]
    punycode.toUnicode();
    // $FlowExpectedError[incompatible-call]
    punycode.toUnicode(0x61);
  });

  it('should return a string', () => {
    (punycode.toUnicode(''): string);
    // $FlowExpectedError[incompatible-cast]
    (punycode.toUnicode(''): void);
    // $FlowExpectedError[incompatible-cast]
    (punycode.toUnicode(''): number);
  });
});

describe('The `punycode.toASCII` function', () => {
  it('should accept a string as parameter', () => {
    punycode.toASCII('mañana.com');
    punycode.toASCII('☃-⌘.com');
    punycode.toASCII('джумла@джpумлатест.bрфa');
    // $FlowExpectedError[incompatible-call]
    punycode.toASCII();
    // $FlowExpectedError[incompatible-call]
    punycode.toASCII(0x61);
  });

  it('should return a string', () => {
    (punycode.toASCII(''): string);
    // $FlowExpectedError[incompatible-cast]
    (punycode.toASCII(''): void);
    // $FlowExpectedError[incompatible-cast]
    (punycode.toASCII(''): number);
  });
});

describe('The `punycode.ucs2.decode` function', () => {
  it('should accept a sring as parameter', () => {
    punycode.ucs2.decode('abc');
    punycode.ucs2.decode('\uD834\uDF06');
    // $FlowExpectedError[incompatible-call]
    punycode.ucs2.decode();
    // $FlowExpectedError[incompatible-call]
    punycode.ucs2.decode(0x61);
  });

  it('should return an Array of codePoints', () => {
    (punycode.ucs2.decode(''): Array<number>);
    // $FlowExpectedError[incompatible-cast]
    (punycode.ucs2.decode(''): void);
    // $FlowExpectedError[incompatible-cast]
    (punycode.ucs2.decode(''): string);
  });
});

describe('The `punycode.ucs2.encode` function', () => {
  it('should accept an Array of codePoints as parameter', () => {
    punycode.ucs2.encode([0x61, 0x62, 0x63]);
    punycode.ucs2.encode([0x1d306]);
    // $FlowExpectedError[incompatible-call]
    punycode.ucs2.encode(0x61);
    // $FlowExpectedError[incompatible-call]
    punycode.ucs2.encode('');
  });

  it('should return a string', () => {
    (punycode.ucs2.encode([0x61]): string);
    // $FlowExpectedError[incompatible-cast]
    (punycode.ucs2.encode([0x61]): void);
    // $FlowExpectedError[incompatible-cast]
    (punycode.ucs2.encode([0x61]): number);
  });
});
