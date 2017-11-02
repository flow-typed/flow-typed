/* @flow */

import type { Reducer, Case } from "rereducer";

import rereducer, { getPayload } from "rereducer";

type TestAction1 = {| type: "TEST", payload: number |};
type TestAction2 = {|
  type: "TEST2",
  payload: {| x: number |}
|};
type TestAction3 = {| type: "TEST3", x: number |};
type TestAction4 = {| type: "TEST4", payload: number, meta: string |};
type TestAction5 = {| type: "TEST5", payload: string |};

type Actions1 = TestAction1 | TestAction4;
type Actions2 = TestAction1 | TestAction2;

const when1: Case<number, TestAction1> = ["TEST", getPayload];
// $ExpectError
const when2: Case<number, TestAction2> = ["TEST2", getPayload];
const when3: Case<number, Actions1> = [["TEST", "TEST4"], getPayload];
// $ExpectError
const when3: Case<number, Actions1> = [["TEST2", "TEST4"], getPayload];
// $ExpectError
const when4: Case<number, Actions2> = [["TEST", "TEST2"], getPayload];
const when5: Case<number, TestAction2> = [
  "TEST2",
  (s, { payload: { x } }) => x
];
const when6: Case<number, TestAction3> = ["TEST3", (s, { x }) => x];
// $ExpectError
const when7: Case<number, TestAction5> = ["TEST5", getPayload];

const reducer1: Reducer<number> = rereducer(10, when1, when3, when6);

const x1: number = reducer1(5, { type: "whatever" });
const x2: number = reducer1(undefined, { type: "whatever" });
// $ExpectError
reducer1();
// $ExpectError
reducer1("asdf", { type: "whatever" });
// $ExpectError
const x3: string = reducer1("asdf", { type: "whatever" });
// $ExpectError
const reducer2: Reducer<string> = rereducer(10, when1);

const fnReducer: number => Reducer<number> = rereducer(when1, when3);
const reducer3: Reducer<number> = fnReducer(10);
// $ExpectError
const reducer4: Reducer<string> = fnReducer("asdf");
