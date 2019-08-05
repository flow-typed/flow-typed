declare module 'redux-handlers' {
  // This can be any slice of redux state
  declare type State = mixed
  declare function HandlerFn(...args: any[]): State

  declare type HandlerSystem = {
    registerHandler: (string, typeof HandlerFn) => void,
    createReducer: (State) => (state: State, action: {...}) => State,
    ...
  }

  declare export function createHandlers(): HandlerSystem
}
