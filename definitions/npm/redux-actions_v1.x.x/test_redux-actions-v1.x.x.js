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
// $ExpectError
handleAction('foo', () => {})();

handleActions({
  foo: {},
  bar() {},
}, {})();

// $ExpectError
handleActions({ foo: {}, bar() {} });


const { a } = createActions('a', () => null, Symbol('foo'));
a();

// $ExpectError
createActions(2);


(combineActions('a', Symbol(), () => null): string);

// $ExpectError
combineActions(2)
