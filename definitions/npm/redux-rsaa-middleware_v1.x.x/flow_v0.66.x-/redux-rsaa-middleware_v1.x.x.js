declare module 'redux-rsaa-middleware' {
  import type { Middleware } from 'redux';

  declare export type RSAAAction = {
    type: string,
    payload: RSAAPayload,
  };

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

  declare export type RSAAState = Object;
  
  declare export type DispatchAPI<A> = (action: A) => A;
  
  declare export type Dispatch<A: { type: $Subtype<string> }> = DispatchAPI<A>;  
  
  declare export var RSAAMiddleware : Middleware<RSAAState, RSAAAction, Dispatch<RSAAAction>>;
}
