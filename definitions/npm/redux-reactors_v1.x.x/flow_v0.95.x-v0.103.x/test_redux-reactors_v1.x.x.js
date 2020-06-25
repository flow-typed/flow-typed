// @flow

import { describe, it } from 'flow-typed-test';
import { reactorEnhancer, createReactor } from 'redux-reactors';
import type { ReactorAction } from 'redux-reactors';

/* Helper types from 'redux'
*
* NOTE THAT THE BELOW TYPES ARE COPIED DIRECTLY FROM THE LIBDEF
* FOR 'redux'.  CHANGES SHOULD BE MIRRORED BACK HERE TO ENSURE
* CONSISTENCY ACROSS VERSIONS.
*
* Equivalent to:
*    import type { StoreCreator, Action } from 'redux';
*/
type Action<T> = {
  type: T
};

type DispatchAPI<A> = (action: A) => A;

type Dispatch<A: { type: * }> = DispatchAPI<A>;

type Reducer<S, A> = (state: S | void, action: A) => S;

type StoreEnhancer<S, A, D = Dispatch<A>> = (
  next: StoreCreator<S, A, D>
) => StoreCreator<S, A, D>;

type Store<S, A, D = Dispatch<A>> = {
  // rewrite MiddlewareAPI members in order to get nicer error messages (intersections produce long messages)
  dispatch: D,
  getState(): S,
  subscribe(listener: () => void): () => void,
  replaceReducer(nextReducer: Reducer<S, A>): void,
};

type StoreCreator<S, A, D = Dispatch<A>> = {
  (reducer: Reducer<S, A>, enhancer?: StoreEnhancer<S, A, D>): Store<S, A, D>,
  (
    reducer: Reducer<S, A>,
    preloadedState: S,
    enhancer?: StoreEnhancer<S, A, D>
  ): Store<S, A, D>,
};
/* END OF COPIED 'redux' TYPES */

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
    // $FlowExpectedError - should be 'StoreType'
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
      // $FlowExpectedError - mismatch to generic for 'INCREMENT'
      'DECREMENT',
      (state, action) => {
        if (!state) throw new Error('Missing state!');
        if (typeof action.payload !== 'number') return state;

        // $FlowExpectedError - missing 'initialCount'
        return {
          counter: state.counter + action.payload,
        };
      }
    );
  });
});
