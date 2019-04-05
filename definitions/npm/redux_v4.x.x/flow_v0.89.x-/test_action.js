// @flow
import type {Action} from 'redux'

const action1: Action<"increment"> = { type: "increment" };

// $ExpectError
const action2: Action<"increment"> = { type: "decrement" };

// $ExpectError
const action3: Action<string> = { payload: 1 };
