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

// $ExpectError
const store1: Store = createStore(() => ({})); // wrong reducer
const store2: Store = createStore(reducer);
// $ExpectError
const store3: Store = createStore(reducer, {}); // wrong initialState shape
const store4: Store = createStore(reducer, []);
// $ExpectError
const store5: Store = createStore(reducer, ['wrong']); // wrong initialState content
const store6: Store = createStore(reducer, [1]);
// $ExpectError
const store7: Store = createStore(reducer, [1], 'wrong'); // wrong enhancer
declare var myEnhancer: StoreEnhancer<State, Action>;
const store8: Store = createStore(reducer, [1], myEnhancer);
const store9: Store = createStore(reducer, undefined, myEnhancer);

//
// store members
//

const s: State = store2.getState()
// $ExpectError
const s: number = store2.getState() // wrong return type

store2.dispatch({ type: 'A' })
// $ExpectError
store2.dispatch({ type: 'wrong' }) // wrong action

store2.replaceReducer(reducer)
// $ExpectError
store2.replaceReducer(() => ({})) // wrong reducer

store2.subscribe(() => {})
// $ExpectError
store2.subscribe(() => 'wrong') // wrong subscriber
