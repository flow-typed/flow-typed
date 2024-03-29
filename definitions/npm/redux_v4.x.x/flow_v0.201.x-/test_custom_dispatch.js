// @flow
import type { Store as ReduxStore, DispatchAPI, MiddlewareAPI, StoreEnhancer } from 'redux'
import { applyMiddleware, bindActionCreators, createStore } from 'redux'

type State = Array<number>;
type Action = { type: 'A', ... };
type Thunk = (dispatch: Dispatch, getState: () => State) => void;
type Dispatch = DispatchAPI<Action | Thunk>;
type Store = ReduxStore<State, Action, Dispatch>;
const reducer = (state: State = [], action: Action): State => state

//
// applyMiddleware interaction with createStore
//

createStore(reducer, [1], applyMiddleware((api: MiddlewareAPI<State, Action, Dispatch>) => {
  api.dispatch({ type: 'A' });
  // $FlowExpectedError[incompatible-call]
  api.dispatch({ type: 'wrong' }) // wrong action

  api.dispatch((dispatch, getState) => {});
  // $FlowExpectedError[incompatible-call]
  api.dispatch(() => false);

  return next => next
}));

//
// bindActionCreators API
//

declare var dispatch: Dispatch;

const ac1 = bindActionCreators((n: number) => ({ type: 'A' }), dispatch);
ac1(1);
// $FlowExpectedError[incompatible-call]
bindActionCreators((n: number) => ({ type: 'wrong' }), dispatch); // wrong action

const ac2 = bindActionCreators((n: number) => (dispatch: Dispatch, getState: () => State) => {}, dispatch);
ac2(1);
// $FlowExpectedError[incompatible-call]
bindActionCreators((n: number) => (dispatch: Dispatch, getState: () => State) => 'wrong', dispatch); // wrong thunk

//
// createStore API
//

declare var myEnhancer: StoreEnhancer<State, Action, Dispatch>;
const store: Store = createStore(reducer, [1], myEnhancer);

store.dispatch({ type: 'A' });
// $FlowExpectedError[incompatible-call]
store.dispatch({ type: 'wrong' }); // wrong action

store.dispatch((dispatch, getState) => {});
// $FlowExpectedError[incompatible-call]
store.dispatch((dispatch, getState) => false); // wrong action
