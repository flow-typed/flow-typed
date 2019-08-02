// @flow

import { describe, it } from 'flow-typed-test';
import React from 'react';
import { useStore } from 'react-redux';

describe('useStore', () => {
  type Action = { type: 'SOME_ACTION' };
  type State = { state: string };

  // ReduxStore should be imported from 'redux' but we can't do this with this
  // test environment, so let's copy them once again...
  declare type Redux$DispatchAPI<A> = (action: A) => A;
  declare type Redux$Dispatch<A: { type: string }> = Redux$DispatchAPI<A>;
  declare type Redux$Reducer<S, A> = (state: S | void, action: A) => S;
  declare type Redux$Store<S, A, D = Redux$Dispatch<A>> = {
    dispatch: D,
    getState(): S,
    subscribe(listener: () => void): () => void,
    replaceReducer(nextReducer: Redux$Reducer<S, A>): void,
  };

  type Dispatch = (action: Action) => Action;
  type GetState = () => State;
  type Store = Redux$Store<State, Action, Dispatch>;

  it('returns instance of Store', () => {
    function Com() {
      const store = useStore<Store>();
      return <div>{store.getState().state}</div>;
    }
  });

  it('returns instance of Store, no extra keys', () => {
    function Com() {
      const store = useStore<Store>();
      // $ExpectError: `foobar` is not a member of the Store instance
      return <div>{store.getState().foobar}</div>;
    }
  });
});
