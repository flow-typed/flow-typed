/* @flow */

import { createAction, handleAction } from 'redux-actions'
import type { ActionType, Reducer } from 'redux-actions'

const INCREMENT = 'INCREMENT'
const NOT_INCREMENT = 'NOT_INCREMENT'

const increment = createAction(INCREMENT, (x: number) => x)

const initState = { count: 0 }

function test_handleAction() {
  const reducer = handleAction(INCREMENT, (state, action: ActionType<typeof increment>) => {
    assert(action.payload, (x: number) => {})

    // $ExpectError
    assert(action.payload, (x: string) => {})
  }, initState)
}

function test_handleAction_typeMismatch() {
  // For the moment Flow is only able to detect a mismatch between the `type`
  // argument to `handleAction` and the action type in this very specific
  // scenario. Unfortunately Flow does not detect the mismatch when the action
  // type is given using the `ActionType` helper.
  const reducer: Reducer<*, { type: 'INCREMENT', payload: number }> =
    // $ExpectError
    handleAction(NOT_INCREMENT, () => ({}), {})
}

// Helper to assert that the type of the first argument is compatible with the
// argument type of the second argument.
function assert<T>(actual: T, expected: (_: T) => void) {}
