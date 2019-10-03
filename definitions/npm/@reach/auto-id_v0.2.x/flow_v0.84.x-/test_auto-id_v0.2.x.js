// @flow

import { useId } from '@reach/auto-id';
import { it, describe } from 'flow-typed-test';

describe('@reach/visually-hidden', () => {
  it('returns a number', () => {
    const x: number = useId();
    // $ExpectError - returned value is a number
    const y: string = useId();
  });
});
