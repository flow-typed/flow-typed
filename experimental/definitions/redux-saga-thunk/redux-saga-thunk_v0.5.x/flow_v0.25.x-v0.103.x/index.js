// @flow

import type { Middleware, Reducer } from "redux";

declare module "redux-saga-thunk" {
  declare module.exports: {
    middleware: Middleware,
    reducer: Reducer,
    isPending<State>(state: State, name?: string | string[]): boolean,
    hasFailed<State>(state: State, name?: string | string[]): boolean,
    isDone<State>(state: State, name?: string | string[]): boolean,
    isComplete<State>(state: State, name?: string | string[]): boolean
  };
}
