// @flow

import configureStore from 'redux-mock-store';

// $ExpectError
const mockStoreContainingInvalidMiddleware = configureStore(['not a middleware']);

const mockStore = configureStore();

const store = mockStore({ todos: [{ title: 'thing', done: false, id: 1 }] });

// $ExpectError
store.getState().somethingNotHere;

store.getState().todos;
