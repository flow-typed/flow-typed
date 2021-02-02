// @flow
import type { Reducer } from 'redux'
import { combineReducers } from 'redux'

type Action = { type: 'A' } | { type: 'B' };
type AState = { foo: number };
const initialAState: AState = { foo: 1 }
const reducerA: Reducer<AState, Action> = (state = initialAState, action) => {
  return state
}
type State = {
  a: AState,
  b: string
};

//
// combineReducers API
//

// $FlowExpectedError
combineReducers() // wrong reducers argument
// $FlowExpectedError
combineReducers([]) // wrong reducers argument
const r1: Reducer<State, Action> = combineReducers({
  a: reducerA,
  b: () => 's'
})
// $FlowExpectedError
const r2: Reducer<State, Action> = combineReducers({
  a: reducerA,
  b: () => 's',
  c: () => true // wrong key
})
