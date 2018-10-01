/* @flow */

import { createAction, handleActions } from "redux-actions";
import type { ActionType, Reducer } from "redux-actions";

const INCREMENT = "INCREMENT";
const INCREMENT2 = "INCREMENT2";
const INCREMENT3 = "INCREMENT3";

const increment = createAction(INCREMENT, (x: number) => x);
const increment2 = createAction(INCREMENT2, (x: number, y: string) => x);
const increment3 = createAction(INCREMENT3, (x: number, y: string) => Promise.resolve(x));
const decrement = createAction("DECREMENT", (x: number) => x);

type StateType = { count: number };
const initState: StateType = { count: 0 };

function test_handleActions() {
  handleActions(
    {
      [INCREMENT]: (state: StateType, action: ActionType<typeof increment>): StateType => {
        return { count: state.count + 1 };
      },

      [String(increment2)]: (state: StateType, action: ActionType<typeof increment2>): StateType => {
        assert(action.payload, (x: number) => {});
        return {
          count: state.count + action.payload
        };
      },

      [INCREMENT3]: (state: StateType, action: ActionType<typeof increment3>): StateType => {
        assert(action.payload, (x: number) => {});
        return {
          count: state.count + action.payload
        };
      },

      [decrement.toString()]: (state: StateType, action: ActionType<typeof decrement>): StateType => {
        assert(action.payload, (x: number) => {});
        const decrementCount: number = action.payload;
        return { count: state.count - decrementCount };
      },

      INFERS_STATE_TYPE: (state, action) => {
        assert(state.count, (x: number) => {});

        // $ExpectError
        assert(state.count, (x: string) => {});

        return state;
      },

      // Errors happen if this is uncommented
      // 'CHECKS_REDUCER_RETURN_TYPE': (state, action) => {
      //   return { foo: 1 }
      // },

      // $ExpectError
      REQUIRERS_REDUCER_VALUE: {},

      ACCEPTS_REDUCER_MAP: {
        next: (state, action) => state,
        throw: (state, action) => state
      }
    },
    initState
  );
}

// Helper to assert that the type of the first argument is compatible with the
// argument type of the second argument.
function assert<T>(actual: T, expected: (_: T) => void) {}

increment2(1, "2");
// $ExpectError
increment2("1", 0);
// $ExpectError
increment2("1", "1");
// $ExpectError
increment2(1, 1);
