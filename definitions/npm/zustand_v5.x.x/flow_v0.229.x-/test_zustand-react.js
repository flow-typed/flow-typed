/* @flow */

import type { UseBoundStore } from 'zustand/react'
import { create, useStore } from 'zustand/react'
import { createStore } from 'zustand/vanilla'

type AgeStore = {
  age: number,
  setAge:
    & (number => void)
    & ((number => number) => void)
}

const useAgeStore: UseBoundStore<AgeStore> =
  create<AgeStore>(
    set => ({
      age: 5,
      setAge: nextAge => {
        set(state => ({
          age: typeof nextAge === 'function' ? nextAge(state.age) : nextAge
        }))
      }
    })
  )

const age: number = useAgeStore(state => state.age)
useAgeStore().setAge(age)

const ageStore = createStore<AgeStore>(set => ({
  age: 6,
  setAge: nextAge => {}
}))

const currentAge: number = useStore(ageStore, state => state.age)
const setAge = useStore(ageStore, state => state.setAge)
setAge(currentAge)
