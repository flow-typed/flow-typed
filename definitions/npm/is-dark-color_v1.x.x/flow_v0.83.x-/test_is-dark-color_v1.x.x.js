// @flow
import { describe, it } from 'flow-typed-test';
import isDarkColor from 'is-dark-color';

describe('is-dark-color', () => {
  it('works', () => {
    (isDarkColor('#ffffff'): boolean);
    isDarkColor('#ffffff', {
      override: {
        '#000000': true,
      },
    });
  });

  it('errors', () => {
    // $FlowExpectedError[incompatible-call]
    isDarkColor();
    // $FlowExpectedError[incompatible-call]
    isDarkColor(123);
    // $FlowExpectedError[incompatible-cast]
    (isDarkColor('#ffffff'): string);
    // $FlowExpectedError[prop-missing]
    isDarkColor('#ffffff', {
      random: 'string',
    });
    // $FlowExpectedError[prop-missing]
    isDarkColor('#ffffff', {
      '#123': 'fail',
    });
  });
});
