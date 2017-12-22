// @flow

import configureStore from 'redux-mock-store';

// $ExpectError
const mockStoreContainingInvalidMiddlware = configureStore(['middlewares']);

const mockStore = configureStore();

const store = mockStore({ todos: [{ title: 'thing', done: false, id: 1 }] });

// $ExpectError
store.getState().somethingNotHere;

store.getState().todos;
