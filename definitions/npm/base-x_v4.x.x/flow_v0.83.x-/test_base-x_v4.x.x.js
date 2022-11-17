// @flow
import { describe, it } from 'flow-typed-test';

const baseX = require('base-x');

describe('base-x', () => {
  it('works', () => {
    const bTest = baseX('test');
    const encoded = bTest.decode('test');
    (bTest.encode(encoded): string);
  });

  it('fails', () => {
    const bTest = baseX('test');
    const encoded = bTest.decode('test');

    // $FlowExpectedError[incompatible-call]
    baseX(1);
    // $FlowExpectedError[incompatible-call]
    baseX();

    // $FlowExpectedError[incompatible-call]
    bTest.decode(encoded);
    // $FlowExpectedError[incompatible-cast]
    (bTest.encode(encoded): Buffer);
  });
});
