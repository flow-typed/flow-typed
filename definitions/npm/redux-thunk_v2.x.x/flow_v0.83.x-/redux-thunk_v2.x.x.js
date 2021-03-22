declare module 'redux-thunk' {
  // Types from redux with generics removed to be compatible
  // with redux & redux-mock-store,
  // should use imports in the not too distant future once we
  // figure out cross dependency imports in flow-typed
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
  // --- End of types from redux

  declare export type Thunk = Middleware & {|
    withExtraArgument(arg: any): Middleware,
  |};

  declare module.exports: Thunk;
}
