// @flow
import React from "react";
import { Provider } from "react-redux";

type ReduxStore<S, A, D> = {
  dispatch: D;
  getState(): S;
  subscribe(listener: () => void): () => void;
  replaceReducer(nextReducer: ReduxReducer<S, A>): void
};

type ReduxReducer<S, A> = (state: S, action: A) => S;

type Action = { type: "A" } | { type: "B" };

type State = {
  c: number,
  d: string
};

// $ExpectError
<Provider />; // missing store

/*
 * Redux Thunk style usage
 */

type ThunkDispatch = {
  <R>(thunkAction: ThunkAction<R>): R,
  <A: Action>(action: A): A,
};
type GetState = () => State;
type ThunkAction<R> = (dispatch: ThunkDispatch, getState: GetState) => R;
type ThunkStore = ReduxStore<State, Action, ThunkDispatch>;

declare var thunkStore: ThunkStore;
<Provider store={thunkStore} />;
