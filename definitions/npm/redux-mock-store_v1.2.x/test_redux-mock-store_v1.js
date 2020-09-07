// @flow

import { describe, it } from 'flow-typed-test';

import configureStore from 'redux-mock-store';

const mockStore = configureStore();
const store = mockStore({ todos: [{ title: 'thing', done: false, id: 1 }] });

describe('configureStore', () => {
  it('should accept only Middleware', () => {
    const mockMiddleware = spy => store => next => action => {
      spy()
      return next(action)
    }

    configureStore([mockMiddleware]);

    // $FlowExpectedError
    configureStore(['not a middleware']);
  });
});


describe('getState', () => {
  it('returned state should be typed', () => {
    store.getState().todos[0].title;

    // $FlowExpectedError
    store.getState().todos.title;
    // $FlowExpectedError
    store.getState().somethingNotHere;
  });
});

describe('dispatch', () => {
  it('should accept string', () => {
    store.dispatch({ type: 'myActionType', anotherProp: 1 });
  });

  it('should accept subtype of string', () => {
    const TOGGLE: 'TOGGLE' = 'TOGGLE';
    const f = (action: {| type: typeof TOGGLE |}) => {
      store.dispatch(action);
    };
  });
});



