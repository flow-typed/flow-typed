// @flow
import type { Store as ReduxStore, StoreEnhancer } from 'redux'
import { createStore } from 'redux'

type State = Array<number>;
type Action = { type: 'A' };
type Store = ReduxStore<State, Action>;
const reducer = (state: State = [], action: Action): State => state

//
// createStore API
//

// $FlowExpectedError
const store1: Store = createStore(() => ({})); // wrong reducer
const store2: Store = createStore(reducer);
// $FlowExpectedError
const store3: Store = createStore(reducer, {}); // wrong initialState shape
const store4: Store = createStore(reducer, []);
// $FlowExpectedError
const store5: Store = createStore(reducer, ['wrong']); // wrong initialState content
const store6: Store = createStore(reducer, [1]);
// $FlowExpectedError
const store7: Store = createStore(reducer, [1], 'wrong'); // wrong enhancer
declare var myEnhancer: StoreEnhancer<State, Action>;
const store8: Store = createStore(reducer, [1], myEnhancer);
const store9: Store = createStore(reducer, undefined, myEnhancer);

//
// store members
//

const s: State = store2.getState()
// $FlowExpectedError
const s: number = store2.getState() // wrong return type

store2.dispatch({ type: 'A' })
// $FlowExpectedError
store2.dispatch({ type: 'wrong' }) // wrong action

store2.replaceReducer(reducer)
// $FlowExpectedError
store2.replaceReducer(() => ({})) // wrong reducer

store2.subscribe(() => {})
// $FlowExpectedError
store2.subscribe(() => 'wrong') // wrong subscriber
