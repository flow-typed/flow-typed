// @flow
import {
  createAction,
  createActions,
  handleAction,
  handleActions,
  combineActions
} from 'redux-actions';

createAction('foo')();
createAction('bar', () => {})();

handleAction('foo', () => {}, [])();
// $FlowExpectedError
handleAction('foo', () => {})();

handleActions({
  foo: {},
  bar() {},
}, {})();

// $FlowExpectedError
handleActions({ foo: {}, bar() {} });


const { a } = createActions('a', () => null, Symbol('foo'));
a();

// $FlowExpectedError
createActions(2);


(combineActions('a', Symbol(), () => null): string);

// $FlowExpectedError
combineActions(2)
