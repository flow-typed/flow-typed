// @flow
import { describe, it } from 'flow-typed-test';
import type { StoreApi } from 'zustand/vanilla';
import { createStore } from 'zustand/vanilla';

type AgeStore = {|
  age: number,
  setAge: (number => void) | ((number => number) => void),
|};

describe('zustand/vanilla', () => {
  it('creates a store', () => {
    const ageStore: StoreApi<AgeStore> = createStore<AgeStore>(set => ({
      age: 5,
      setAge: nextAge => {
        set(state => ({
          age: typeof nextAge === 'function' ? nextAge(state.age) : nextAge,
        }));
      },
    }));

    ageStore.setState({ age: 10 });
    ageStore.getInitialState().age as number;
    ageStore.getState().age as number;

    // $FlowExpectedError[incompatible-type]
    ageStore.setState({ age: 'ten' });
    // $FlowExpectedError[incompatible-type]
    ageStore.getState().age as string;
    // $FlowExpectedError[prop-missing]
    ageStore.subscribeTypo();
  });

  it('creates a store with the curried form', () => {
    const ageStoreChained: StoreApi<AgeStore> = createStore<AgeStore>()(
      set => ({
        age: 6,
        setAge: nextAge => {},
      }),
    );

    ageStoreChained.setState(state => ({ age: state.age + 1 }));

    // $FlowExpectedError[incompatible-type]
    ageStoreChained.setState(state => ({ age: String(state.age) }));
  });

  it('requires the full state when replacing', () => {
    const store = createStore<AgeStore>(() => ({ age: 1, setAge: () => {} }));

    store.setState({ age: 2, setAge: () => {} }, true);

    // $FlowExpectedError[incompatible-type]
    store.setState({ age: 2 }, true);
  });
});
