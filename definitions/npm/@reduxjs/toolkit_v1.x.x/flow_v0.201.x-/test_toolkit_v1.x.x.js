// @flow
import { describe, it, test } from 'flow-typed-test';
import {
  createAction,
  createReducer,
  configureStore,
  type Middleware,
  type Store,
  type GetDefaultMiddleware,
} from '@reduxjs/toolkit';
import type { Action } from 'redux';

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

  describe('createStore', () => {
    const reducer = createReducer({ name: 'test' }, {
      'a': (state, action) => {
        state.name = action.payload.name;
      },
    });


    createReducer({
      name: 'a',
    }, {
      'a': (state) => { state.name; return state },
    })

    test('with basic reducer', () => {
      configureStore({
        reducer,
      });

      const store: Store<{
        test: { ... },
        test2: number,
        ...
      }, Action<{ ... }>> = configureStore({
        reducer: {
          test: (a: any) => ({}),
          test2: (a: any) => 2,
        },
      });

      store.getState().test2.toFixed(2);
      // $FlowExpectedError[prop-missing]
      store.getState().foo;

      const failedStore: Store<{|
        test: { ... },
        test2: number,
      |}, Action<{ ... }>> = configureStore({
        // $FlowExpectedError[incompatible-call] foo is missing
        reducer: {
          test: (a: any) => ({}),
          test2: (a: any) => 2,
          foo: () => 'bar',
        },
      });

      // const failedStore2: Store<{
      //   test: { ... },
      //   // Expect this to fail but currently does not
      //   test2: string,
      //   ...
      // }, Action<{ ... }>> = configureStore({
      //   reducer: {
      //     test: (a) => ({}),
      //     test2: (a) => 2,
      //   },
      // });
    });

    test('full example', () => {
      const preloadedState = {
        todos: [
          {
            text: 'Eat food',
            completed: true,
          },
          {
            text: 'Exercise',
            completed: false,
          },
        ],
        visibilityFilter: 'SHOW_COMPLETED',
      };
      const reduxBatch: any = {};

      configureStore({
        reducer,
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState,
        enhancers: [reduxBatch],
      })
    });

    test('middleware', () => {
      declare var logger: Middleware<any, any>;

      configureStore({
        reducer,
        middleware: (getDefaultMiddleware: GetDefaultMiddleware) => getDefaultMiddleware().concat(logger),
      })

      configureStore({
        reducer,
        middleware: [logger],
      })
    });

    test('errors', () => {
      // $FlowExpectedError[incompatible-call]
      configureStore();
    })
  });
});
