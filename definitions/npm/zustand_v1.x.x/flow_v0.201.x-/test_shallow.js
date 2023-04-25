// @flow strict
import { describe, it } from 'flow-typed-test';
import shallow, { shallow as namedShallow } from 'zustand/shallow';

describe('zustand shallow', () => {
  it('works', () => {
    (shallow({ a: 1 }, { b: 2 }): boolean);
    (namedShallow({ a: 1 }, { b: 2 }): boolean);

    // $FlowExpectedError
    (shallow({ a: 1 }, { b: 2 }): string);
    // $FlowExpectedError
    (namedShallow({ a: 1 }, { b: 2 }): number);
  });
});
