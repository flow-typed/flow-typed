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
    const dispatch = useDispatch<Dispatch>();

    const action = dispatch({ type: 'action' });
    (action.type: string);
    // $FlowExpectedError[incompatible-cast] will be string because of passed generic
    (action.type: number);
  });

  it('errors if returned type is passed invalid Action', () => {
    const dispatch = useDispatch<Dispatch>();

    // $FlowExpectedError[incompatible-call]: return value of `useDispatch` should make `Dispatch` and expect an `Action`.
    dispatch();
  });

  it('handles action creator passed in and is typed', () => {
    const dispatch = useDispatch();

    const action = dispatch({ anything: 'string' });
    (action.anything: string);
    // $FlowExpectedError[incompatible-cast] will be string because of passed action
    (action.anything: number);
  });

  it('handles thunks being passed to return the right value', () => {
    const thunkAction = () => (dispatch) => {
      return '';
    }
    const dispatch = useDispatch();

    const a = dispatch(thunkAction());
    a.toString();
    // $FlowExpectedError[incompatible-cast] it will return a string, not any which could be cast to number
    (a: number)
  });

  it('handles thunks defined as a promise to keep their type', () => {
    const thunkPromiseAction = () => (dispatch) => new Promise((resolve) => {
      resolve('');
    });
    const dispatch = useDispatch();

    const dispatched = dispatch(thunkPromiseAction());
    (dispatched: Promise<string>);
    // $FlowExpectedError[incompatible-cast] it will return a string, not any which could be cast to number
    (dispatched: Promise<number>);
  });
});
