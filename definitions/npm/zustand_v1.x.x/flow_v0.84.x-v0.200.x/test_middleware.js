// @flow strict
import { describe, it } from 'flow-typed-test';
import create from 'zustand';
import { redux, devtools } from 'zustand/middleware';

describe('zustand middleware', () => {
  it('works', () => {
    const types = { increase: 'INCREASE', decrease: 'DECREASE' };

    const reducer = (state, { type, by = 1 }) => {
      switch (type) {
        case types.increase:
          return { count: state.count + by };
        case types.decrease:
          return { count: state.count - by };
      }
    };

    const initialState = { count: 0 };

    const [useStore1] = create(redux(reducer, initialState));

    const [useStore2] = create(
      devtools(set => ({
        count: 0,
        increment: () => set(state => ({ count: state.count + 1 })),
      }))
    );
    const [useStore3] = create(devtools(redux(reducer, initialState)));
  });
});
