// @flow
import type { Reducer } from 'redux'
import { combineReducers } from 'redux'

type State = {
  a: number,
  b: string
};
type Action = { type: 'A' } | { type: 'B' };

//
// combineReducers API
//

// $ExpectError
combineReducers() // wrong reducers argument
// $ExpectError
combineReducers([]) // wrong reducers argument
const r1: Reducer<State, Action> = combineReducers({
  a: () => 1,
  b: () => 's'
})
// $ExpectError
const r2: Reducer<State, Action> = combineReducers({
  a: () => 1,
  b: () => 's',
  c: () => true // wrong key
})
