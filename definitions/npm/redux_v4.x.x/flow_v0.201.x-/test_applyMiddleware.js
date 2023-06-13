// @flow
import type { Store as ReduxStore, MiddlewareAPI, Dispatch } from 'redux'
import { applyMiddleware, createStore } from 'redux'

type State = Array<number>;
type Action = { type: 'A', ... };
type Store = ReduxStore<State, Action>;
const reducer = (state: State = [], action: Action): State => state

//
// applyMiddleware API
//

applyMiddleware<State, Action, Dispatch<Action>>();
applyMiddleware<State, Action, Dispatch<Action>>(api => next => next);
// $FlowExpectedError[incompatible-call]
applyMiddleware('wrong');

//
// interaction with createStore
//

createStore(reducer, [1], applyMiddleware<State, Action, Dispatch<Action>>(api => next => next))
createStore(reducer, [1], applyMiddleware<State, Action, Dispatch<Action>>((api: MiddlewareAPI<State, Action>) => {
  // $FlowExpectedError[incompatible-type]
  const s: number = api.getState() // wrong return type
  // $FlowExpectedError[incompatible-call]
  api.dispatch({ type: 'wrong' }) // wrong action
  // $FlowExpectedError[prop-missing]
  api.replaceReducer(() => ({})) // wrong reducer
  // $FlowExpectedError[prop-missing]
  api.subscribe(() => 'wrong') // wrong subscriber
  return next => next
}))
