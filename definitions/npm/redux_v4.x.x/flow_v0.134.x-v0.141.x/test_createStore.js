// @flow
import type { Store as ReduxStore, StoreEnhancer } from 'redux'
import { createStore, legacy_createStore } from 'redux'

type State = Array<number>;
type Action = { type: 'A', ... };
type Store = ReduxStore<State, Action>;
const reducer = (state: State = [], action: Action): State => state

//
// createStore API
//

// $FlowExpectedError[incompatible-type-arg]
// $FlowExpectedError[incompatible-call]
const store1: Store = createStore(() => ({})); // wrong reducer
const store2: Store = createStore(reducer);
// $FlowExpectedError[incompatible-call]
const store3: Store = createStore(reducer, {}); // wrong initialState shape
const store4: Store = createStore(reducer, []);
// $FlowExpectedError[incompatible-type]
// $FlowExpectedError[incompatible-call]
const store5: Store = createStore(reducer, ['wrong']); // wrong initialState content
const store6: Store = createStore(reducer, [1]);
// $FlowExpectedError[incompatible-call]
const store7: Store = createStore(reducer, [1], 'wrong'); // wrong enhancer
declare var myEnhancer: StoreEnhancer<State, Action>;
const store8: Store = createStore(reducer, [1], myEnhancer);
const store9: Store = createStore(reducer, undefined, myEnhancer);

// $FlowExpectedError[incompatible-type-arg]
// $FlowExpectedError[incompatible-call]
const legacyStore1: Store = legacy_createStore(() => ({})); // wrong reducer
const legacyStore2: Store = legacy_createStore(reducer);
// $FlowExpectedError[incompatible-call]
const legacyStore3: Store = legacy_createStore(reducer, {}); // wrong initialState shape
const legacyStore4: Store = legacy_createStore(reducer, []);
// $FlowExpectedError[incompatible-type]
// $FlowExpectedError[incompatible-call]
const legacyStore5: Store = legacy_createStore(reducer, ['wrong']); // wrong initialState content
const legacyStore6: Store = legacy_createStore(reducer, [1]);
// $FlowExpectedError[incompatible-call]
const legacyStore7: Store = legacy_createStore(reducer, [1], 'wrong'); // wrong enhancer
declare var legacyMyEnhancer: StoreEnhancer<State, Action>;
const legacyStore8: Store = legacy_createStore(reducer, [1], myEnhancer);
const legacyStore9: Store = legacy_createStore(reducer, undefined, myEnhancer);

//
// store members
//

const s: State = store2.getState()
// $FlowExpectedError[incompatible-type]
// $FlowExpectedError[name-already-bound]
const s: number = store2.getState() // wrong return type

store2.dispatch({ type: 'A' })
// $FlowExpectedError[incompatible-call]
store2.dispatch({ type: 'wrong' }) // wrong action

store2.replaceReducer(reducer)
// $FlowExpectedError[incompatible-call]
store2.replaceReducer(() => ({})) // wrong reducer

store2.subscribe(() => {})
// $FlowExpectedError[incompatible-call]
store2.subscribe(() => 'wrong') // wrong subscriber
