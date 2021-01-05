// @flow
import { describe, it } from 'flow-typed-test';
import padstart from 'lodash.padstart';

describe('padstart', () => {
  it('accepts necessary params', () => {
    padstart('test', 0);

    // $FlowExpectedError[incompatible-call]
    padstart();
    // $FlowExpectedError[incompatible-call]
    padstart('test');
  });

  it('accepts third param optionally', () => {
    padstart('test', 0, '--');

    // $FlowExpectedError[incompatible-call]
    padstart('test', 0, 0);
  })
});
