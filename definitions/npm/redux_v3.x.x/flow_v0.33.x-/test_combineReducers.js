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
  name: string,
  age: number
};

//
// combineReducers API
//

function reducerName(name: string, action: Action): string {
  return name
}

function reducerAge(age: number, action: Action): number {
  return age
}

// ok
const reducer0: Reducer<State, Action> = combineReducers({
  a: reducerA,
  name: reducerName,
  age: reducerAge
})

// $ExpectError
combineReducers() // wrong reducers argument
// $ExpectError
combineReducers([]) // wrong reducers argument

// $ExpectError
const reducer1: Reducer<State, Action> = combineReducers({
  a: reducerA,
  name: reducerName
  // missing age reducer
})
