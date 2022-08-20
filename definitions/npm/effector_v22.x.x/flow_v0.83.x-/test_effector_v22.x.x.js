// @flow
import { describe, it } from 'flow-typed-test';
import { createStore, createEvent } from 'effector';

describe('effector-react', () => {
  describe('useStore', () => {
    it('returns a value of store', () => {
      const $id = createStore<number>(1);
      const inc = createEvent<number>();

      $id.on(inc, (state: number, inc: number) => state + inc);
    });
  });
});
