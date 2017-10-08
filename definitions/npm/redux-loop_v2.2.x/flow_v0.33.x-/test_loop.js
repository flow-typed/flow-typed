/* @flow */

import { loop, Effects } from 'redux-loop'
import * as L            from 'redux-loop'

import type { Effect, Reducer } from 'redux-loop'


//
// loop, Reducer
//

type State = { first: boolean, second: boolean }

type Action =
  | { type: 'FIRST' }
  | { type: 'SECOND' }

// ok
const reducer: Reducer<State, Action> = (state: State, action) => {
  switch(action.type) {
    case 'FIRST':
      return loop(
        { ...state, first: true },
        Effects.constant({ type: 'SECOND' })
      );

    case 'SECOND':
      return { ...state, second: true };

    default:
      // $ExpectError
      return {}
  }
}


//
// liftState
//

// ok
const lifted: [State, Effect] = L.liftState({ first: true, second: false })


//
// loop accessors
//

const state = { first: true, second: false }

const loopState = loop(
  { first: true, second: false },
  Effects.constant({ type: 'SECOND' })
)

// ok
const model1: State = L.getModel(loopState)

// ok
const model2: State = L.getModel(state)

// ok
const effect1: ?Effect = L.getEffect(loopState)

// ok
const effect2: ?Effect = L.getEffect(state)

// $ExpectError
const effect3: Effect = L.getEffect(state)

// ok
L.isLoop(loopState)

// ok
L.isLoop(state)
