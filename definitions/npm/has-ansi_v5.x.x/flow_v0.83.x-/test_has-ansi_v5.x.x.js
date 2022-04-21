// @flow
import { describe, it } from 'flow-typed-test';

import hasAnsi from 'has-ansi';

describe('has-ansi', () => {
  it('works', () => {
    hasAnsi('test');

    // $FlowExpectedError[incompatible-call]
    hasAnsi();
    // $FlowExpectedError[incompatible-call]
    hasAnsi(123);
  });
});
