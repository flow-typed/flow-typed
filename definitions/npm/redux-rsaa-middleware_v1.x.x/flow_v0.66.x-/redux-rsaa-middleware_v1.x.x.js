declare module 'redux-rsaa-middleware' {
  declare type DispatchAPI<A> = (action: A) => A;
  
  declare type Dispatch<A: { type: $Subtype<string> }> = DispatchAPI<A>;

  declare type MiddlewareAPI<S, A, D = Dispatch<A>> = {
    dispatch: D;
    getState(): S;
  };

  declare type Middleware<S, A, D = Dispatch<A>> =
    (api: MiddlewareAPI<S, A, D>) =>
      (next: D) => D;

  declare type Action = {
    type: string,
    payload: Object,
  };

  declare type State = Object;
  
  declare export var RSAAMiddleware : Middleware<State, Action, Dispatch<Action>>;

  declare export type RSAAPayload = {
    method?: string,
    path?: string,
    query?: string,
    error?: Object,
    errorTime?: string,
    response?: Object,
    failureAction?: RSAAAction,
    successAction?: RSAAAction,
    startedSendingAction?: RSAAAction,
    finishedSendingAction?: RSAAAction,
  };

  declare export type RSAAAction = {
    type: string,
    payload: RSAAPayload,
  };
}
