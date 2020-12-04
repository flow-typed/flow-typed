// @flow
import type { Store as ReduxStore, MiddlewareAPI } from 'redux';
import { applyMiddleware, createStore } from 'redux';

type State = Array<number>;
type Action = { type: 'A' };
type Store = ReduxStore<State, Action>;
const reducer = (state: State = [], action: Action): State => state;

//
// applyMiddleware API
//

applyMiddleware();
applyMiddleware(api => next => next);
// $FlowExpectedError
applyMiddleware('wrong');

//
// interaction with createStore
//

createStore(reducer, [1], applyMiddleware(api => next => next));
createStore(
  reducer,
  [1],
  applyMiddleware((api: MiddlewareAPI<State, Action>) => {
    // $FlowExpectedError
    const s: number = api.getState(); // wrong return type
    // $FlowExpectedError
    api.dispatch({ type: 'wrong' }); // wrong action
    // $FlowExpectedError
    api.replaceReducer(() => ({})); // wrong reducer
    // $FlowExpectedError
    api.subscribe(() => 'wrong'); // wrong subscriber
    return next => next;
  })
);
