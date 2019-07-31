// @flow
import { createAction, createReducer } from "redux-act";

createAction("foo");
createAction("bar");
createAction("bar", (id, name) => ({ id, name }));
const barAction = createAction("bar", (id: number, name: string) => ({
  id,
  name
}));
barAction(12, "xxx");
barAction(12, "xxx").payload;
barAction(12, "xxx").type;
barAction(12, "xxx").meta;
// $ExpectError
barAction(12, "xxx").payloadd;
// $ExpectError
barAction("12", "xxx");
// $ExpectError
createAction({});
// $ExpectError
createAction();

createReducer(
  {
    // Sadly .toString() is necessary: https://github.com/facebook/flow/issues/3287
    [createAction("foo").toString()]: (state, payload) => {
      return {
        isEditing: true
      };
    }
  },
  {
    isEditing: false
  }
);

// $ExpectError
createReducer({ foo: {}, bar() {} }, 123);

const increment = createAction("increment");
const decrement = createAction("decrement");

createReducer(
  {
    [increment.toString()]: state => state + 1,
    [decrement.toString()]: state => state - 1
  },
  0
);

createReducer(on => {
  on(increment.toString(), state => state + 1);
  on(decrement.toString(), state => state - 1);
}, 10);

createReducer((on, off) => {
  on(increment.toString(), state => state + 1);
  off(decrement.toString());
}, 10);
