// @flow

import { describe, it } from 'flow-typed-test';
import React from 'react';
import { useDispatch } from 'react-redux';

type Action = {|
  type: 'action',
|};
type Dispatch = Action => Action;

describe('useDispatch', () => {
  it('returns type `Dispatch` which accepts only type `Action` as param', () => {
    function Com() {
      const dispatch = useDispatch<Dispatch>();
      return (
        <button
          onClick={function() {
            dispatch({ type: 'action' });
          }}
        >
          Dispatch time
        </button>
      );
    }
  });

  it('errors if returned type is passed invalid Action', () => {
    function Com() {
      const dispatch = useDispatch<Dispatch>();
      return (
        <div
          onClick={() => {
            // $ExpectError: return value of `useDispatch` should make `Dispatch` and expect an `Action`.
            dispatch();
          }}
        >
          Dispatch time
        </div>
      );
    }
  });
});
