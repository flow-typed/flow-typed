// Types from redux with generics removed to be compatible
// with redux & redux-mock-store,
// should use imports in the not too distant future once we
// figure out cross dependency imports in flow-typed
declare module '@@redux' {
  declare export type DispatchAPI<A> = (action: A) => A;

  declare export type Dispatch = DispatchAPI<{ type: any, ... }>;

  declare export type MiddlewareAPI = {
    dispatch: Dispatch,
    getState(): any,
    ...
  };

  declare export type Middleware = (
    api: MiddlewareAPI
  ) => (next: any) => any;
}

declare module 'redux-thunk' {
  import type { Middleware } from '@@redux';

  declare export type Thunk = Middleware & {|
    withExtraArgument(arg: $NonMaybeType<mixed>): Middleware,
  |};

  declare module.exports: Thunk;
}
