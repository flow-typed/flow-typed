// @flow
import type {Action} from 'redux'
import { describe, it } from 'flow-typed-test';

describe('Action<T>', () => {

  it('passes when used properly', () => {
    const action: Action<"increment"> = { type: "increment" };
  });

  it('raises an error when passed an invalid type parameter', () => {
    // $ExpectError
    const action: Action<"increment"> = { type: "decrement" };
  });

  it('raises an error when missed the type property', () => {
    // $ExpectError
    const action: Action<string> = { payload: 1 };
  });

});




