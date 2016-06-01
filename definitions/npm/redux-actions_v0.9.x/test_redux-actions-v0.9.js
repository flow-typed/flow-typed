// @flow
import { createAction, handleAction, handleActions } from 'redux-actions';

createAction('foo')();
createAction('bar', () => {})()
handleAction('foo', {});
handleActions({
  foo: {},
  bar() {},
});
// $ExpectError
handleActions({
  foo: {},
  bar() {},
}, 123);
