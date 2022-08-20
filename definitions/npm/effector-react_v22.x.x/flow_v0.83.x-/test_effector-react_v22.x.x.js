// @flow
import { describe, it } from 'flow-typed-test';
import { useStore } from 'effector-react';
import { createStore } from 'effector';

describe('effector-react', () => {
  describe('useStore', () => {
    it('returns a value of store', () => {

      const $id = createStore<number>(1)
      const id: number = useStore($id);
    
      const $name = createStore<string>('')
      const fail: string = useStore($name);
    });
  })
});