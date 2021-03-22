declare module 'redux-thunk' {
  // Types from redux, should use imports in the near future once we figure out
  // cross dependency imports in flow-typed
  declare export type DispatchAPI<A> = (action: A) => A;

  declare export type Dispatch<A: { type: any, ... }> = DispatchAPI<A>;

  declare export type MiddlewareAPI<S, A, D = Dispatch<A>> = {
    dispatch: D,
    getState(): S,
    ...
  };

  declare export type Middleware<S, A, D = Dispatch<A>> = (
    api: MiddlewareAPI<S, A, D>
  ) => (next: D) => D;
  // --- End of types from redux

  declare export type Thunk = Middleware<S, A> & {|
    withExtraArgument(arg: any): Middleware<S, A>,
  |};

  declare module.exports: Thunk;
}
