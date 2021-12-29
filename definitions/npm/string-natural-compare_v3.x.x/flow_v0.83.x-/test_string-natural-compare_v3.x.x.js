// @flow
import { describe, it } from 'flow-typed-test';
import naturalCompare from 'string-natural-compare';

describe('string-natural-compare', () => {
  it('takes two strings', () => {
    naturalCompare('a', 'b');

    // $FlowExpectedError[incompatible-call]
    naturalCompare('a');
    // $FlowExpectedError[incompatible-call]
    naturalCompare('a', 1);
    // $FlowExpectedError[incompatible-call]
    naturalCompare(1, 'b');
    // $FlowExpectedError[incompatible-call]
    naturalCompare();
  });

  it('handles options', () => {
    naturalCompare('a', 'b', {
      caseInsensitive: true,
      alphabet: 'test',
    });

    naturalCompare('a', 'b', {});
    naturalCompare('a', 'b', {
      alphabet: 'test',
    });
    naturalCompare('a', 'b', {
      caseInsensitive: true,
    });

    naturalCompare('a', 'b', {
      // $FlowExpectedError[incompatible-call]
      caseInsensitive: 'test',
    });
    naturalCompare('a', 'b', {
      // $FlowExpectedError[incompatible-call]
      alphabet: true,
    });
  });
});
