// @flow
import { describe, it } from 'flow-typed-test';
import type { UseBoundStore } from 'zustand/react';
import { create, useStore } from 'zustand/react';
import { createStore } from 'zustand/vanilla';
import { useShallow } from 'zustand/react/shallow';

type AgeStore = {|
  age: number,
  setAge: (number => void) & ((number => number) => void),
|};

describe('zustand/react', () => {
  it('creates a bound store hook', () => {
    const useAgeStore: UseBoundStore<AgeStore> = create<AgeStore>(set => ({
      age: 5,
      setAge: nextAge => {
        set(state => ({
          age: typeof nextAge === 'function' ? nextAge(state.age) : nextAge,
        }));
      },
    }));

    const age: number = useAgeStore(state => state.age);
    useAgeStore().setAge(age);

    // $FlowExpectedError[incompatible-type]
    const wrongAge: string = useAgeStore(state => state.age);
    // $FlowExpectedError[prop-missing]
    useAgeStore(state => state.name);
  });

  it('reads a vanilla store with useStore', () => {
    const ageStore = createStore<AgeStore>(set => ({
      age: 6,
      setAge: nextAge => {},
    }));

    const currentAge: number = useStore(ageStore, state => state.age);
    const setAge = useStore(ageStore, state => state.setAge);
    setAge(currentAge);
    useStore(ageStore).age as number;

    // $FlowExpectedError[incompatible-type]
    const wrongAge: string = useStore(ageStore, state => state.age);
  });

  it('wraps a selector with useShallow', () => {
    const useAgeStore = create<AgeStore>(() => ({
      age: 1,
      setAge: () => {},
    }));

    function useAge(): number {
      const [age] = useAgeStore(useShallow((state: AgeStore) => [state.age]));
      return age;
    }
    useAge() as number;
  });
});
