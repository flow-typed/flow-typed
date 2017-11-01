// @flow
import { createAction, createReducer } from 'redux-act';

createAction('foo');
createAction('bar');
createAction('bar', (id, name) => { id, name });
// $ExpectError
createAction({});
// $ExpectError
createAction();

createReducer({
  // Sadly .toString() is necessary: https://github.com/facebook/flow/issues/3287
  [createAction('foo').toString()]: (state, payload) => {
    return {
      isEditing: true,
    };
  },
}, {
  isEditing: false,
})

// $ExpectError
createReducer({ foo: {}, bar() {} }, 123);

const increment = createAction('increment');
const decrement = createAction('decrement');

createReducer({
  [increment.toString()]: (state) => state + 1,
  [decrement.toString()]: (state) => state - 1,
}, 0);

createReducer((on) => {
  on(increment.toString(), (state) => state + 1);
  on(decrement.toString(), (state) => state - 1);
}, 10);

createReducer((on, off) => {
  on(increment.toString(), (state) => state + 1);
  off(decrement.toString());
}, 10);
