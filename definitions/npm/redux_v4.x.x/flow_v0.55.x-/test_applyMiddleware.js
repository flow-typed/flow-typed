// @flow
import type { Store as ReduxStore, MiddlewareAPI } from 'redux'
import { applyMiddleware, createStore } from 'redux'

type State = Array<number>;
type Action = { type: 'A' };
type Store = ReduxStore<State, Action>;
const reducer = (state: State = [], action: Action): State => state

//
// applyMiddleware API
//

applyMiddleware();
applyMiddleware(api => next => next);
// $ExpectError
applyMiddleware('wrong');

//
// interaction with createStore
//

createStore(reducer, [1], applyMiddleware(api => next => next))
createStore(reducer, [1], applyMiddleware((api: MiddlewareAPI<State, Action>) => {
  // $ExpectError
  const s: number = api.getState() // wrong return type
  // $ExpectError
  api.dispatch({ type: 'wrong' }) // wrong action
  // $ExpectError
  api.replaceReducer(() => ({})) // wrong reducer
  // $ExpectError
  api.subscribe(() => 'wrong') // wrong subscriber
  return next => next
}))
