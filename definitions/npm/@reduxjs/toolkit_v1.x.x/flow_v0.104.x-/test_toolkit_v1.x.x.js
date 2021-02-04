// @flow
import { describe, it } from 'flow-typed-test';
import { createAction, createReducer } from '@reduxjs/toolkit';

describe('@redux/toolkit', () => {
  describe('createAction', () => {
    it('supports being called with an action type string', () => {
      createAction('increment');
    });

    it('supports being called with an action type string and a payload type', () => {
      type Payload = $ReadOnly<{|
        someData: 'The FitnessGram Pacer Test is a multistage aerobic capacity test that progressively gets...',
      |}>;

      createAction<Payload>('injectData');
    });
  });

  describe('createReducer', () => {
    it('supports being called with an object map', () => {
      const state = {
        name: 'Pelle',
      };

      const SET_NAME = 'SET_NAME';

      createReducer(state, {
        [SET_NAME]: (state, action) => {
          state.name = action.payload.name;
        }
      });
    });

    it('supports being called with an builder callback', () => {
      const state = {
        name: 'Pelle',
      };

      const setName = createAction<string>('SET_NAME');

      createReducer(state, builder => {
        builder.addCase(setName, (state, action) => {
          state.name = action.payload.name;
        });
      });
    });
  });
});
