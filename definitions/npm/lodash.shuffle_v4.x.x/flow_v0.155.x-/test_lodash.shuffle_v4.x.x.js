// @flow
import { describe, it } from 'flow-typed-test';
import shuffle from 'lodash.shuffle';

describe('lodash.shuffle', () => {
  it('works', () => {
    shuffle();
    (shuffle<string>(['']): Array<string>);
  });

  it('fails', () => {
    // $FlowExpectedError[incompatible-call]
    shuffle<string>(123);
    // $FlowExpectedError[incompatible-cast]
    (shuffle<string>(): Array<number>);
  });
});
