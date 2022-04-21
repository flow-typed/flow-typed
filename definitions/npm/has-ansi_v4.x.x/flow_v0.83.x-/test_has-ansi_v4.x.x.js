// @flow
import { describe, it } from 'flow-typed-test';

const hasAnsi = require('has-ansi');

describe('has-ansi', () => {
  it('works', () => {
    hasAnsi('test');

    // $FlowExpectedError[incompatible-call]
    hasAnsi();
    // $FlowExpectedError[incompatible-call]
    hasAnsi(123);
  });
});
