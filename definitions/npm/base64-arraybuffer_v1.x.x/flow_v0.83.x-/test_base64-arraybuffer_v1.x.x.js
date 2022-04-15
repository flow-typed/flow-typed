import { describe, it } from 'flow-typed-test';

import { encode, decode } from 'base64-arraybuffer';

describe('encode', () => {
  it('basic usage', () => {
    encode(new ArrayBuffer(10));

    // $FlowExpectedError[incompatible-call]
    encode('lang');
  });
});

describe('decode', () => {
  it('basic usage', () => {
    decode('test');
    // $FlowExpectedError[incompatible-call]
    decode(123);
  });
});
