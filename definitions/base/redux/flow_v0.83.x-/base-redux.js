declare module '@flow-typed/base-redux' {
  declare export type Redux$DispatchAPI<A> = (action: A) => A;

  declare export type Redux$Dispatch<A: { type: any, ... }> = DispatchAPI<A>;

  declare export type Redux$MiddlewareAPI<S, A, D = Redux$Dispatch<A>> = {
    dispatch: D,
    getState(): S,
    ...
  };

  declare export type Redux$Middleware<S, A, D = Redux$Dispatch<A>> = (
    api: Redux$MiddlewareAPI<S, A, D>
  ) => (next: D) => D;
}
