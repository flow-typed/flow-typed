/* @flow */

import { combineReducers } from 'redux-loop'

import type { Effect, Reducer } from 'redux-loop'

type StateA = number
type StateB = string
type StateC = boolean

type State = { a: StateA, b: StateB, c: StateC }

const action = { type: 'ACTION' }

function testCombineReducers<Action>(
  a: Reducer<StateA, Action>,
  b: (state: StateB, action: Action) => StateB,
  c: (state: StateC, action: Action) => (StateC | [StateC, Effect])
) {
  // ok
  const reducer = combineReducers({ a, b, c }, { a: 1, b: 'two', c: false })

  // ok
  const reducer2: Reducer<State, Action> = combineReducers({ a, b, c }, { a: 1, b: 'two', c: false })

  // ok
  const result: [State, Effect] = reducer({ a: 1, b: 'two', c: false }, action)


  //
  // Checks type of state input to reducer
  //

  // $ExpectError
  reducer({}, action)

  // $ExpectError
  reducer({ a: 'badvalue', b: 'two', c: false }, action)
  
  // $ExpectError
  reducer({ a: 1, b: 2, c: false }, action)

  // $ExpectError
  reducer({ a: 1, b: 'two', c: new Date() }, action)


  //
  // Checks shape of initial state
  //

  // TODO: This should fail, but does not. It appears that `$Shape` does not
  // combine well with `$ObjMap`.
  //
  // combineReducers({ a, b, c }, { a: 'one' })


  //
  // State accessor and modifier
  //

  // ok
  combineReducers(
    { a, b, c },
    {},
    (state, key) => state[key],
    (state, key, value) => state[key] = value,
  )
}
