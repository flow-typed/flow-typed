// @flow

import { useId } from '@reach/auto-id';
import { it, describe } from 'flow-typed-test';

describe('@reach/auto-id', () => {
  it('should validate on default usage', () => {
    const id = useId();
  });

  it('should accept a string', () => {
    const id = useId('test');
  });

  it('should accept a null value', () => {
    const id = useId(null);
  });

  it('should error on ivalid value', () => {
    // $FlowExpectedError[incompatible-call]
    const id = useId(123);
  });

  it('should return a string', () => {
    const id: string | void = useId();
    // $FlowExpectedError[incompatible-type]
    const fail: number = useId();
  });
});
