// @flow
import type { Store as ReduxStore, DispatchAPI, MiddlewareAPI, StoreEnhancer } from 'redux'
import { applyMiddleware, bindActionCreators, createStore } from 'redux'

type State = Array<number>;
type Action = { type: 'A' };
type Thunk = (dispatch: Dispatch, getState: () => State) => void;
type Dispatch = DispatchAPI<Action | Thunk>;
type Store = ReduxStore<State, Action, Dispatch>;
const reducer = (state: State, action: Action): State => state

//
// applyMiddleware interaction with createStore
//

createStore(reducer, [1], applyMiddleware((api: MiddlewareAPI<State, Action, Dispatch>) => {
  api.dispatch({ type: 'A' });
  // $ExpectError
  api.dispatch({ type: 'wrong' }) // wrong action

  api.dispatch((dispatch, getState) => {});
  // $ExpectError
  api.dispatch(() => false);

  return next => next
}));

//
// bindActionCreators API
//

declare var dispatch: Dispatch;

const ac1 = bindActionCreators((n: number) => ({ type: 'A' }), dispatch);
ac1(1);
// $ExpectError
bindActionCreators((n: number) => ({ type: 'wrong' }), dispatch); // wrong action

const ac2 = bindActionCreators((n: number) => (dispatch, getState) => {}, dispatch);
ac2(1);
// $ExpectError
bindActionCreators((n: number) => (dispatch, getState) => 'wrong', dispatch); // wrong thunk

//
// createStore API
//

declare var myEnhancer: StoreEnhancer<State, Action, Dispatch>;
const store: Store = createStore(reducer, [1], myEnhancer);

store.dispatch({ type: 'A' });
// $ExpectError
store.dispatch({ type: 'wrong' }); // wrong action

store.dispatch((dispatch, getState) => {});
// $ExpectError
store.dispatch((dispatch, getState) => false); // wrong action
