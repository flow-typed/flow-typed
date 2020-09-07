import escapeStringRegexp from 'escape-string-regexp';
import { describe, it } from 'flow-typed-test';

describe('escape-string-regexp', () => {
  it('should pass if used properly', () => {
    // => 'how much \$ for a unicorn\?'
    const escapedString: string = escapeStringRegexp(
      'how much $ for a unicorn?'
    );

    new RegExp(escapedString);
  });

  it('should raise an error if input is wrong', () => {
    // $FlowExpectedError
    escapeStringRegexp(42);
  });

  it('should raise an error if output type is wrong', () => {
    // $FlowExpectedError
    (escapeStringRegexp('how much $ for a unicorn?'): number);
  });
});
