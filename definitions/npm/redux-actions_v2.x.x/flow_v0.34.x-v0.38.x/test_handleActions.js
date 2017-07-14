/* @flow */

import { createAction, handleActions } from 'redux-actions'
import type { ActionType, Reducer } from 'redux-actions'

const INCREMENT = 'INCREMENT'
const NOT_INCREMENT = 'NOT_INCREMENT'

const increment = createAction(INCREMENT, (x: number) => x)

const initState: { count: number } = { count: 0 }

function test_handleActions() {
  handleActions({
    [INCREMENT]: (state, action: ActionType<typeof increment>) => {
      return { count: state.count + 1 }
    },

    'INFERS_STATE_TYPE': (state, action) => {

      assert(state.count, (x: number) => {})

      // $ExpectError
      assert(state.count, (x: string) => {})

      return state
    },

    // Errors happen if this is uncommented
    // 'CHECKS_REDUCER_RETURN_TYPE': (state, action) => {
    //   return { foo: 1 }
    // },

    // $ExpectError
    'REQUIRERS_REDUCER_VALUE': {},

    'ACCEPTS_REDUCER_MAP': {
      next: (state, action) => state,
      throw: (state, action) => state
    }
  }, initState)
}

// Helper to assert that the type of the first argument is compatible with the
// argument type of the second argument.
function assert<T>(actual: T, expected: (_: T) => void) {}
