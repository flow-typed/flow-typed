// @flow strict
import create from 'zustand';
import * as React from 'react';

function test_basic() {
  const [useStore] = create(set => ({
    count: 0,
    increase: () => set(state => ({ count: state.count + 1 })),
    reset: () => set({ count: 0 }),
  }));

  function Counter() {
    const count = useStore(state => state.count);
    return <h1>{count}</h1>;
  }

  function Controls() {
    const increase = useStore(state => state.increase);
    return <button onClick={increase}>up</button>;
  }
}
