// @flow
import type { Reducer } from 'redux'
import { combineReducers } from 'redux'

type State = {
  name: string,
  age: number
};

type Action = any;

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
  name: reducerName,
  age: reducerAge
})

// $ExpectError
combineReducers() // wrong reducers argument
// $ExpectError
combineReducers([]) // wrong reducers argument

// $ExpectError
const reducer1: Reducer<State, Action> = combineReducers({
  name: reducerName
  // missing age reducer
})
