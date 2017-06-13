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

createReducer({
  // $ExpectError
  foo: {},
  bar() {},
}, 123);

const increment = createAction('increment');
const decrement = createAction('decrement');
createReducer({
  [increment.toString()]: (state) => state + 1,
  [decrement.toString()]: (state) => state - 1,
}, 0);
