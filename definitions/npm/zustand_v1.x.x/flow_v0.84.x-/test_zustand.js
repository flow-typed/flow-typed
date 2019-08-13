// @flow strict
import create from 'zustand';
import shallow from 'zustand/shallow';

function test_basic() {
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
}

function test_equality() {
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
}

function test_api() {
  const [, api] = create(() => ({ a: 1, b: 2, c: 3 }));

  const num: number = api.getState().a;
  const unsub1 = api.subscribe(state => console.log('state changed', state));
  const unsub2 = api.subscribe(a => console.log('a changed', a), {
    selector: state => state.a,
  });
  api.setState({ a: 1 });
  unsub1();
  unsub2();
  api.destroy();
}
