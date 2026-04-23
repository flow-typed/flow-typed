/* @flow */

import type { CreateReduxState } from 'zustand/middleware'
import type { CreateState } from 'zustand'
import { create } from 'zustand/react'
import { combine, devtools, redux } from 'zustand/middleware'

type PositionState = { position: string }
type PositionAction = { type: 'SET_POSITION', value: string }

function positionReducer (
  state: PositionState,
  action: PositionAction
): PositionState {
  if (action.type === 'SET_POSITION') {
    return { ...state, position: action.value }
  }

  return state
}

const createPositionReduxState: CreateReduxState<PositionState, PositionAction> =
  redux(positionReducer, { position: 'aa' })

create(devtools(createPositionReduxState))().position as string
create(devtools(createPositionReduxState))().dispatch as PositionAction => PositionAction

type PositionMethods = {
  setPosition: string => void
}

const createPositionState: CreateState<{...PositionState, ...PositionMethods}> =
  combine(
    { position: 'bb' },
    (set) => ({
      setPosition: (value: string) => set({ position: value })
    })
  )

create(createPositionState)().setPosition('cc')
