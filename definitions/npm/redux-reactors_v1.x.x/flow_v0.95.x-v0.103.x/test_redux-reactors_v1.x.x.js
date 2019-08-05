// @flow

import { describe, it } from 'flow-typed-test';
import { reactorEnhancer, createReactor } from 'redux-reactors';
import type { ReactorAction } from 'redux-reactors';

describe('Test reactorEnhancer', () => {
  it('should pass when used properly', () => {
    type State = {|
      counter: number,
      initialCount: number,
    |};

    // with Redux's 'Action' type
    type StoreTypeWithActions = StoreCreator<State, Action<'INCREMENT'>, any>;
    const enhancedCreateStoreWithActions = reactorEnhancer((({}: any): StoreTypeWithActions));
    (enhancedCreateStoreWithActions: StoreTypeWithActions);

    // with 'ReactorAction' type
    type StoreTypeWithReactors = StoreCreator<State, ReactorAction<State, 'INCREMENT'>, any>;
    let enhancedCreateStoreWithReactors = reactorEnhancer((({}: any): StoreTypeWithReactors));
    (enhancedCreateStoreWithReactors: StoreTypeWithReactors);

    // with 'Action' and ReactorAction' types
    type StoreType = StoreCreator<State, Action<'INCREMENT'> | ReactorAction<State, 'INCREMENT'>, any>;
    let enhancedCreateStore = reactorEnhancer((({}: any): StoreType));
    (enhancedCreateStore: StoreType);
  });

  it('raise an error with malformed inputs', () => {
    type StoreType = StoreCreator<{||}, Action<'INCREMENT'>, any>;
    const enhancedCreateStore = reactorEnhancer((({}: any): StoreType));
    // $ExpectError - should be 'StoreType'
    (enhancedCreateStore: string);
  });
});

describe('Test createReactor', () => {
  if('should pass when used properly', () => {
    type State = {
      counter: number,
      initialCount: number
    };
    
    const incrementReactor = createReactor<State, 'INCREMENT'>('INCREMENT', (state, action) => {
      if(!state) return {};
      if(typeof action.payload !== 'number') return state;

      return Object.assign({}, {
        counter: state.counter + action.payload,
        state,
      });
    });

    (incrementReactor: (payload: string) => ReactorAction<State, 'INCREMENT'>);
    const instance = incrementReactor(5);
    (instance: ReactorAction<State, 'INCREMENT'>);
  });

  it('raise an error with malformed inputs', () => {
    // Missing property in state
    type State = {|
      counter: number,
      initialCount: number,
    |};

    const incrementReactor = createReactor<State, 'INCREMENT'>(
      // $ExpectError - mismatch to generic for 'INCREMENT'
      'DECREMENT',
      (state, action) => {
        if (!state) throw new Error('Missing state!');
        if (typeof action.payload !== 'number') return state;

        // $ExpectError - missing 'initialCount'
        return {
          counter: state.counter + action.payload,
        };
      }
    );
  });
});
