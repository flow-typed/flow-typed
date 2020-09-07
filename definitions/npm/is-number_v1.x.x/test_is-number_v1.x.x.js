import isNumber from 'is-number';
import { describe, it } from 'flow-typed-test';

describe('is-number', () => {
  it('should be boolean', () => {
    const a: boolean = isNumber(4);
    //=> true

    const b: boolean = isNumber(Infinity);
    //=> false
  });

  it('should error', () => {
    // $FlowExpectedError
    (isNumber(4): string);
  });
});
