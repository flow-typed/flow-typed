/* @flow */

import type { StoreApi } from 'zustand/vanilla'
import { createStore } from 'zustand/vanilla'

type AgeStore = {
  age: number,
  setAge:
    | (number => void)
    | ((number => number) => void)
}

const ageStore: StoreApi<AgeStore> =
  createStore<AgeStore>(
    set => ({
      age: 5,
      setAge: nextAge => {
        set(state => ({
          age: typeof nextAge === 'function' ? nextAge(state.age) : nextAge
        }))
      }
    })
  )

ageStore.setState({ age: 10 })

console.log(
  ageStore.getInitialState(),
  ageStore.getState()
)

const ageStoreChained: StoreApi<AgeStore> =
  createStore<AgeStore>()(set => ({
    age: 6,
    setAge: nextAge => {}
  }))

ageStoreChained.setState(state => ({ age: 10 }))
