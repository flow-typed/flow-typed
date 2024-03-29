// @flow
import { describe, it } from 'flow-typed-test';

import React from "react";
import { Provider, createProvider } from "react-redux";

describe('Provider', () => {
  it('should give an error when the store is missing', () => {
    // $FlowExpectedError[prop-missing]
    <Provider />;

    // Also for custom providers
    const CustomProvider: Class<Provider<any>> = createProvider("ikea");

    // $FlowExpectedError[prop-missing]
    <CustomProvider />;
  });
});

describe('Custom Store (eg for ThunkActions)', () => {

  // This represents a common typing for Thunk Actions.

  type Action = { type: 'SOME_ACTION', ... };
  type State = { state: string, ... };

  // ReduxStore should be imported from 'redux' but we can't do this with this
  // test environment, so let's copy them once again...
  declare type Redux$DispatchAPI<A> = (action: A) => A;
  declare type Redux$Dispatch<A: { type: string, ... }> = Redux$DispatchAPI<A>;
  declare type Redux$Reducer<S, A> = (state: S | void, action: A) => S;
  declare type Redux$Store<S, A, D = Redux$Dispatch<A>> = {
    dispatch: D,
    getState(): S,
    subscribe(listener: () => void): () => void,
    replaceReducer(nextReducer: Redux$Reducer<S, A>): void,
    ...
  };

  // R = Result of a thunk action
  type ThunkDispatch = <R>(action: ThunkAction<R>) => R;
  type PlainDispatch = (action: Action) => Action;
  type GetState = () => State;
  type ThunkAction<R> = (dispatch: Dispatch, GetState) => R;
  // The `dispatch` function can accept either a plain action or a thunk action.
  // This is similar to a type `(action: Action | ThunkAction) => any` except this
  // allows to type the return value as well.
  type Dispatch = PlainDispatch & ThunkDispatch;
  type Store = Redux$Store<State, Action, Dispatch>;

  it('accepts a custom store', () => {
    declare var store: Store;
    <Provider store={store} />;
  });
});
