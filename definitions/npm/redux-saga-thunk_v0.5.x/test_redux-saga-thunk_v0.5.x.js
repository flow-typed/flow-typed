import {
  middleware as thunkMiddleware,
  reducer as thunkReducer,
  isPending,
  hasFailed,
  isDone,
  isComplete
} from "redux-saga-thunk";

(thunkMiddleware: <A>(store: *) => (next: Function) => (action: A) => A);

(thunkReducer: <S, A>(state: S, action: A) => S);

const state = {};

isPending(state);
hasFailed(state);
isDone(state);
isComplete(state);

isPending(state, "FOO");
hasFailed(state, "FOO");
isDone(state, "FOO");
isComplete(state, "FOO");

isPending(state, ["FOO", "BAR"]);
hasFailed(state, ["FOO", "BAR"]);
isDone(state, ["FOO", "BAR"]);
isComplete(state, ["FOO", "BAR"]);

// $ExpectError
isPending(state, 2);
// $ExpectError
hasFailed(state, 2);
// $ExpectError
isDone(state, 2);
// $ExpectError
isComplete(state, 2);
