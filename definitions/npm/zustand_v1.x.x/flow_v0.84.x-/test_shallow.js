// @flow strict
import { describe, it } from 'flow-typed-test';
import shallow, { shallow as namedShallow } from 'zustand/shallow';

describe('zustand shallow', () => {
  it('works', () => {
    (shallow({ a: 1 }, { b: 2 }): boolean);
    (namedShallow({ a: 1 }, { b: 2 }): boolean);

    // $ExpectError
    (shallow({ a: 1 }, { b: 2 }): string);
    // $ExpectError
    (namedShallow({ a: 1 }, { b: 2 }): number);
  });
});
