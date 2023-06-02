// @flow strict
import { describe, it } from 'flow-typed-test';
import create from 'zustand';
import shallow from 'zustand/shallow';

describe('zustand', () => {
  it('supports basic use', () => {
    const [useStore] = create(set => ({
      count: 0,
      increase: () => set(state => ({ count: state.count + 1 })),
      reset: () => set({ count: 0 }),
    }));

    function Counter() {
      const count: number = useStore(state => state.count);
    }

    function Controls() {
      const increase: () => void = useStore(state => state.increase);
    }
  });

  it('supports equality fn', () => {
    const [useStore] = create(set => ({
      foo: 1,
      bar: 'baz',
    }));

    const { foo, bar } = useStore(
      state => ({ foo: state.foo, bar: state.bar }),
      shallow
    );

    (foo: number);
    (bar: string);
  });

  it('supports api', () => {
    const [, api] = create(() => ({ a: 1, b: 2, c: 3 }));

    const num: number = api.getState().a;
    // $FlowExpectedError
    const num: string = api.getState().b;
    const unsub1 = api.subscribe(state => console.log('state changed', state));
    const unsub2 = api.subscribe(a => console.log('a changed', a), {
      selector: state => state.a,
    });
    api.setState({ a: 1 });
    unsub1();
    unsub2();
    // $FlowExpectedError
    api.setState({ b: [] });
    api.destroy();
  });
});
