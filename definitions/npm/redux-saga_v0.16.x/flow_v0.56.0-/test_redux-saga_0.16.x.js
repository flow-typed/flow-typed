// @flow

/* eslint-disable no-unused-vars, no-undef, no-console */

import createSagaMiddleware, {
  runSaga,
  END,
  eventChannel,
  channel,
  buffers,
  delay,
  CANCEL,
  effects
} from "redux-saga";
import {
  take,
  put,
  race,
  call,
  apply,
  cps,
  fork,
  spawn,
  join,
  cancel,
  select,
  actionChannel,
  cancelled,
  flush,
  takeEvery,
  takeLatest,
  throttle
} from "redux-saga/effects";
import type {
  Task,
  Channel,
  Buffer,
  SagaMonitor,
  Effect,
  Saga
} from "redux-saga";

/**
 * SOME COMMON TEST INFRASTRUCTURE
 */
const myChannel = channel();

function SomeContext() {
  this.z = "foo";
}

const context = { a: "foo" };
const classContext = new SomeContext();

const sagaMonitor: SagaMonitor = {
  effectTriggered: _ => {},
  effectResolved: (_, _2) => {},
  effectRejected: (_, _2) => {},
  effectCancelled: _ => {},
  actionDispatched: _ => {}
};

declare type NodeCallback<R> = {
  (err: Error): void,
  (err: null | void | false, result: R): void
};

function* s0(): Saga<number> {
  return 1;
}
function* s1(a: string): Saga<number> {
  return 1;
}
function* s2(a: string, b: number): Saga<number> {
  return 1;
}
function* s3(a: string, b: number, c: string): Saga<number> {
  return 1;
}
function* s4(a: string, b: number, c: string, d: number): Saga<number> {
  return 1;
}
function* s5(
  a: string,
  b: number,
  c: string,
  d: number,
  e: string
): Saga<number> {
  return 1;
}
function* s6(
  a: string,
  b: number,
  c: string,
  d: number,
  e: string,
  f: number
): Saga<number> {
  return 1;
}
function* s7(
  a: string,
  b: number,
  c: string,
  d: number,
  e: string,
  f: number,
  g: string
): Saga<number> {
  return 1;
}
function* s8(
  a: string,
  b: number,
  c: string,
  d: number,
  e: string,
  f: number,
  g: string,
  h: number
): Saga<number> {
  return 1;
}
function* sSpread(...args: $ReadOnlyArray<number>): Saga<string> {
  return "";
}

// Note: Without the return annotation, flow cannot determine the union case properly
const fn0 = (): Promise<number> => Promise.resolve(1);
const fn1 = (a: string): Promise<number> => Promise.resolve(1);
const fn2 = (a: string, b: number): Promise<number> => Promise.resolve(1);
const fn3 = (a: string, b: number, c: string): Promise<number> =>
  Promise.resolve(1);
const fn4 = (a: string, b: number, c: string, d: number): Promise<number> =>
  Promise.resolve(1);
const fn5 = (
  a: string,
  b: number,
  c: string,
  d: number,
  e: string
): Promise<number> => Promise.resolve(1);
const fn6 = (
  a: string,
  b: number,
  c: string,
  d: number,
  e: string,
  f: number
): Promise<number> => Promise.resolve(1);
const fn7 = (
  a: string,
  b: number,
  c: string,
  d: number,
  e: string,
  f: number,
  g: string
): Promise<number> => Promise.resolve(1);
const fn8 = (
  a: string,
  b: number,
  c: string,
  d: number,
  e: string,
  f: number,
  g: string,
  h: number
): Promise<number> => Promise.resolve(1);
const fnSpread = (...args: $ReadOnlyArray<number>): Promise<string> =>
  Promise.resolve("");

function cpsfn0(cb: NodeCallback<number>): void {}
function cpsfn1(a: string, cb: NodeCallback<number>): void {}
function cpsfn2(a: string, b: number, cb: NodeCallback<number>): void {}
function cpsfn3(
  a: string,
  b: number,
  c: string,
  cb: NodeCallback<number>
): void {}
function cpsfn4(
  a: string,
  b: number,
  c: string,
  d: number,
  cb: NodeCallback<number>
): void {}
function cpsfn5(
  a: string,
  b: number,
  c: string,
  d: number,
  e: string,
  cb: NodeCallback<number>
): void {}
function cpsfn6(
  a: string,
  b: number,
  c: string,
  d: number,
  e: string,
  f: number,
  cb: NodeCallback<number>
): void {}
function cpsfn7(
  a: string,
  b: number,
  c: string,
  d: number,
  e: string,
  f: number,
  g: string,
  cb: NodeCallback<number>
): void {}
function cpsfn8(
  a: string,
  b: number,
  c: string,
  d: number,
  e: string,
  f: number,
  g: string,
  h: number,
  cb: NodeCallback<number>
): void {}

function nfn0(): number {
  return 1;
}
function nfn1(a: string): number {
  return 1;
}
function nfn2(a: string, b: number): number {
  return 1;
}
function nfn3(a: string, b: number, c: boolean): number {
  return 1;
}
function nfn4(a: string, b: number, c: boolean, d: string): number {
  return 1;
}
function nfn5(a: string, b: number, c: boolean, d: string, e: number): number {
  return 1;
}
function nfn6(
  a: string,
  b: number,
  c: boolean,
  d: string,
  e: number,
  f: boolean
): number {
  return 1;
}
function nfn7(
  a: string,
  b: number,
  c: boolean,
  d: string,
  e: number,
  f: boolean,
  g: string
): number {
  return 1;
}
function nfn8(
  a: string,
  b: number,
  c: boolean,
  d: string,
  e: number,
  f: boolean,
  g: string,
  h: number
): number {
  return 1;
}
function nfnSpread(...args: $ReadOnlyArray<number>): string {
  return "";
}

/**
 * ALL THE TESTS START FROM HERE
 */

function channelTest() {
  (channel(): Channel);
  (channel(buffers.fixed(1)): Channel);
}

function eventChannelTest() {
  eventChannel(emitter => () => {}, buffers.dropping(1));
  eventChannel(emitter => () => {}, buffers.dropping(1), () => true);

  // $ExpectError: MatcherFn needs boolean as return type
  eventChannel(emitter => () => {}, buffers.dropping(1), () => "");

  // $ExpectError: second parameter needs to be a Buffer
  eventChannel(emitter => () => {}, "");
}

function buffersTest() {
  (buffers.none(): Buffer);

  (buffers.fixed(): Buffer);
  (buffers.fixed(5): Buffer);

  // $ExpectError: limit parameter must be given as a number
  (buffers.fixed("five"): Buffer);

  (buffers.dropping(): Buffer);
  (buffers.dropping(6): Buffer);

  // $ExpectError: limit parameter must be given as a number
  (buffers.dropping("six"): Buffer);

  (buffers.sliding(): Buffer);
  (buffers.sliding(7): Buffer);

  // $ExpectError: limit parameter must be given as a number
  (buffers.sliding("seven"): Buffer);

  (buffers.expanding(): Buffer);
  (buffers.expanding(8): Buffer);

  // $ExpectError: limit parameter must be given as a number
  (buffers.expanding("eight"): Buffer);
}

function takeTest() {
  take(action => action.type === "foo");
  take.maybe(action => action.type === "foo");

  take(["FOO", "BAR"]);
  take.maybe(["FOO", "BAR"]);

  take(myChannel);
  take.maybe(myChannel);

  // $ExpectError: PatternFn returns a boolean
  take(action => null);

  // $ExpectError: PatternFn returns a boolean
  take.maybe(action => null);

  // $ExpectError: Only string patterns for arrays
  take(["FOO", "BAR", 1]);

  // $ExpectError: Only string patterns for arrays
  take.maybe(["FOO", "BAR", 1]);

  // $ExpectError: Channels must have take prop
  take({ close: () => undefined, put: msg => undefined });

  // $ExpectError: Channels must have take prop
  take.maybe({ close: () => undefined, put: msg => undefined });

  // $ExpectError: Channels must have close prop
  take({ take: cb => undefined, put: msg => undefined });

  // $ExpectError: Channels must have close prop
  take.maybe({ take: cb => undefined, put: msg => undefined });
}

function putTest() {
  put({ type: "test" });

  const put1 = put({ type: "FOO", bar: "hi" });
  (put1.PUT.action.bar: string);

  const put2 = put(myChannel, { type: "test" });
  (put2.PUT.channel: Channel);

  // $ExpectError: Can only be called with objects
  put("FOO");

  // $ExpectError: No null as channel accepted
  put(null, { type: "test" });

  // $ExpectError: This property cannot be inferred
  (put1.PUT.action.unknown: string);

  put.resolve({ type: "test" });

  const put3 = put.resolve({ type: "FOO", baz: "hi" });
  (put3.PUT.action.baz: string);

  const put4 = put.resolve(myChannel, { type: "test" });
  (put4.PUT.channel: Channel);

  // $ExpectError: Can only be called with objects
  put.resolve("FOO");

  // $ExpectError: No null as channel accepted
  put.resolve(null, { type: "test" });

  // $ExpectError: This property cannot be inferred
  (put3.PUT.action.unknown: string);
}

function actionChannelTest() {
  (actionChannel("ASDF").ACTION_CHANNEL.pattern: string);
  (actionChannel(["FOO", "BAR"]).ACTION_CHANNEL.pattern[0]: string);
}

function callTest() {
  const c0 = call(fn0);
  const c1 = call(fn1, "1");
  const c2 = call(fn2, "1", 2);
  const c3 = call(fn3, "1", 2, "3");
  const c4 = call(fn4, "1", 2, "3", 4);
  const c5 = call(fn5, "1", 2, "3", 4, "5");
  const c6 = call(fn6, "1", 2, "3", 4, "5", 6);
  const c7 = call(fn7, "1", 2, "3", 4, "5", 6, "7");
  const c8 = call(fn8, "1", 2, "3", 4, "5", 6, "7", 8);

  // $ExpectError: Too few arguments
  call(fn6, "1", 2, "3", 4);

  // $ExpectError: Wrong argument types
  call(fn1, 1);

  const cSpread = call(fnSpread, 1, 2, 3, 1);

  // Args tests
  (c0.CALL.args: []);
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, string]);
  (c4.CALL.args: [string, number, string, number]);
  (c5.CALL.args: [string, number, string, number, string]);
  (c6.CALL.args: [string, number, string, number, string, number]);
  (c7.CALL.args: [string, number, string, number, string, number, string]);
  (c8.CALL.args: [string, number, string, number, string, number, string, number]);

  // $ExpectError: First parameter is a string, not a number
  (c1.CALL.args: [number]);

  // Fn tests
  (c1.CALL.fn: typeof fn1);
  (c2.CALL.fn: typeof fn2);
  (c3.CALL.fn: typeof fn3);
  (c4.CALL.fn: typeof fn4);
  (c5.CALL.fn: typeof fn5);
  (c6.CALL.fn: typeof fn6);
  (c7.CALL.fn: typeof fn7);
  (c8.CALL.fn: typeof fn8);

  // NOTE: This should actually fail, but apparently more parameter are fine..
  (c1.CALL.fn: typeof fn6);

  // $ExpectError: fn returns a Promise<string> not Promise<number>
  (c1.CALL.fn: (a: boolean) => Promise<number>);

  // $ExpectError: 'a' is actually of type string
  (c4.CALL.fn: (a: number, b: number) => Promise<string>);

  // $ExpectError: Less parameter are noticed
  (c6.CALL.fn: typeof fn1);

  // Context tests
  (c1.CALL.context: null);
  (c2.CALL.context: null);
  (c3.CALL.context: null);
  (c4.CALL.context: null);
  (c5.CALL.context: null);
  (c6.CALL.context: null);
  (c7.CALL.context: null);
  (c8.CALL.context: null);

  // $ExpectError
  (c1.CALL.context: Object);
}

function callNormalFunctionTest() {
  const c0 = call(nfn0);
  const c1 = call(nfn1, "1");
  const c2 = call(nfn2, "1", 2);
  const c3 = call(nfn3, "1", 2, true);
  const c4 = call(nfn4, "1", 2, true, "4");
  const c5 = call(nfn5, "1", 2, true, "4", 5);
  const c6 = call(nfn6, "1", 2, true, "4", 5, false);
  const c7 = call(nfn7, "1", 2, true, "4", 5, false, "7");
  const c8 = call(nfn8, "1", 2, true, "4", 5, false, "7", 8);

  // $ExpectError: Too few arguments
  call(nfn6, "1", 2, true, "4");

  // $ExpectError: Wrong argument types
  call(nfn1, 1);

  const cSpread = call(nfnSpread, 1, 2, 3, 4);

  // Args tests
  (c0.CALL.args: []);
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, boolean]);
  (c4.CALL.args: [string, number, boolean, string]);
  (c5.CALL.args: [string, number, boolean, string, number]);
  (c6.CALL.args: [string, number, boolean, string, number, boolean]);
  (c7.CALL.args: [string, number, boolean, string, number, boolean, string]);
  (c8.CALL.args: [string, number, boolean, string, number, boolean, string, number]);

  // $ExpectError: First parameter is a string, not a number
  (c1.CALL.args: [number]);

  // Fn tests
  (c1.CALL.fn: typeof nfn1);
  (c2.CALL.fn: typeof nfn2);
  (c3.CALL.fn: typeof nfn3);
  (c4.CALL.fn: typeof nfn4);
  (c5.CALL.fn: typeof nfn5);
  (c6.CALL.fn: typeof nfn6);
  (c7.CALL.fn: typeof nfn7);
  (c8.CALL.fn: typeof nfn8);

  // $ExpectError: fn returns a number not string
  (c1.CALL.fn: (a: boolean) => string);

  // $ExpectError: 'a' is actually of type string
  (c1.CALL.fn: (a: boolean) => number);

  // $ExpectError: 'a' is actually of type string
  (c4.CALL.fn: (a: number, b: number) => number);

  // $ExpectError: Less parameter are noticed
  (c6.CALL.fn: typeof nfn1);

  // Context tests
  (c1.CALL.context: null);
  (c2.CALL.context: null);
  (c3.CALL.context: null);
  (c4.CALL.context: null);
  (c5.CALL.context: null);
  (c6.CALL.context: null);
  (c7.CALL.context: null);
  (c8.CALL.context: null);

  // $ExpectError
  (c1.CALL.context: Object);
}

function callSagaFunctionTest() {
  const c0 = call(s0);
  const c1 = call(s1, "1");
  const c2 = call(s2, "1", 2);
  const c3 = call(s3, "1", 2, "3");
  const c4 = call(s4, "1", 2, "3", 4);
  const c5 = call(s5, "1", 2, "3", 4, "5");
  const c6 = call(s6, "1", 2, "3", 4, "5", 6);
  const c7 = call(s7, "1", 2, "3", 4, "5", 6, "7");
  const c8 = call(s8, "1", 2, "3", 4, "5", 6, "7", 8);

  // $ExpectError: Too few arguments
  call(s6, "1", 2, "3", 4);

  // $ExpectError: Wrong argument types
  call(s1, 1);

  const cSpread = call(sSpread, 1, 2, 3, 4);

  // Args tests
  (c0.CALL.args: []);
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, string]);
  (c4.CALL.args: [string, number, string, number]);
  (c5.CALL.args: [string, number, string, number, string]);
  (c6.CALL.args: [string, number, string, number, string, number]);
  (c7.CALL.args: [string, number, string, number, string, number, string]);
  (c8.CALL.args: [string, number, string, number, string, number, string, number]);

  // $ExpectError: First parameter is a string, not a number
  (c1.CALL.args: [number]);

  // Fn tests
  (c1.CALL.fn: typeof s1);
  (c2.CALL.fn: typeof s2);
  (c3.CALL.fn: typeof s3);
  (c4.CALL.fn: typeof s4);
  (c5.CALL.fn: typeof s5);
  (c6.CALL.fn: typeof s6);
  (c7.CALL.fn: typeof s7);
  (c8.CALL.fn: typeof s8);

  // $ExpectError: fn returns a Saga<number> not Saga<string>
  (c1.CALL.fn: (a: string) => Saga<string>);

  // $ExpectError: 'a' is actually of type string
  (c1.CALL.fn: (a: boolean) => Saga<number>);

  // $ExpectError: 'a' is actually of type string
  (c4.CALL.fn: (a: number, b: number) => Saga<number>);

  // $ExpectError: Less parameter are noticed
  (c6.CALL.fn: typeof s1);

  // Context tests
  (c1.CALL.context: null);
  (c2.CALL.context: null);
  (c3.CALL.context: null);
  (c4.CALL.context: null);
  (c5.CALL.context: null);
  (c6.CALL.context: null);
  (c7.CALL.context: null);
  (c8.CALL.context: null);

  // $ExpectError
  (c1.CALL.context: Object);
}

function contextCallTest() {
  const c0 = call([context, fn0]);
  const c1 = call([context, fn1], "1");
  const c2 = call([context, fn2], "1", 2);
  const c3 = call([context, fn3], "1", 2, "3");
  const c4 = call([context, fn4], "1", 2, "3", 4);
  const c5 = call([context, fn5], "1", 2, "3", 4, "5");
  const c6 = call([context, fn6], "1", 2, "3", 4, "5", 6);
  const c7 = call([context, fn7], "1", 2, "3", 4, "5", 6, "7");
  const c8 = call([context, fn8], "1", 2, "3", 4, "5", 6, "7", 8);
  const cClass = call([classContext, fn1], "1");

  // $ExpectError: Too few arguments
  call([context, fn6], "1", 2, "3", 4);

  // $ExpectError: Wrong argument types
  call([context, fn1], 1);

  const cSpread = call([context, fnSpread], 1, 2, 3, 1);

  // Args tests
  (c0.CALL.args: []);
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, string]);
  (c4.CALL.args: [string, number, string, number]);
  (c5.CALL.args: [string, number, string, number, string]);
  (c6.CALL.args: [string, number, string, number, string, number]);
  (c7.CALL.args: [string, number, string, number, string, number, string]);
  (c8.CALL.args: [string, number, string, number, string, number, string, number]);

  // $ExpectError: First parameter is a string, not a number
  (c1.CALL.args: [number]);

  // Fn tests
  (c1.CALL.fn: typeof fn1);
  (c2.CALL.fn: typeof fn2);
  (c3.CALL.fn: typeof fn3);
  (c4.CALL.fn: typeof fn4);
  (c5.CALL.fn: typeof fn5);
  (c6.CALL.fn: typeof fn6);
  (c7.CALL.fn: typeof fn7);
  (c8.CALL.fn: typeof fn8);

  // NOTE: This should actually fail, but apparently more parameter are fine..
  (c1.CALL.fn: typeof fn6);

  // $ExpectError: fn returns a Promise<string> not Promise<number>
  (c1.CALL.fn: (a: boolean) => Promise<number>);

  // $ExpectError: 'a' is actually of type string
  (c4.CALL.fn: (a: number, b: number) => Promise<string>);

  // $ExpectError: Less parameter are noticed
  (c6.CALL.fn: typeof fn1);

  // Context tests
  (c1.CALL.context: typeof context);
  (c2.CALL.context: typeof context);
  (c3.CALL.context: typeof context);
  (c4.CALL.context: typeof context);
  (c5.CALL.context: typeof context);
  (c6.CALL.context: typeof context);
  (c7.CALL.context: typeof context);
  (c8.CALL.context: typeof context);

  // $ExpectError
  (c1.CALL.context: null);
}

function contextCallNormalFunctionTest() {
  const c0 = call([context, nfn0]);
  const c1 = call([context, nfn1], "1");
  const c2 = call([context, nfn2], "1", 2);
  const c3 = call([context, nfn3], "1", 2, true);
  const c4 = call([context, nfn4], "1", 2, true, "4");
  const c5 = call([context, nfn5], "1", 2, true, "4", 5);
  const c6 = call([context, nfn6], "1", 2, true, "4", 5, false);
  const c7 = call([context, nfn7], "1", 2, true, "4", 5, false, "7");
  const c8 = call([context, nfn8], "1", 2, true, "4", 5, false, "7", 8);
  const cClass = call([classContext, nfn1], "1");

  // TODO: For weird reasons I do not understand, these tests fail in the wrong place - ExpectError: Too few arguments
  // call([context, nfn6], '1', 2, true, '4');

  // $ExpectError: Wrong argument types
  call([context, nfn1], 1);

  const cSpread = call([context, nfnSpread], 1, 2, 3, 4);

  // Args tests
  (c0.CALL.args: []);
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, boolean]);
  (c4.CALL.args: [string, number, boolean, string]);
  (c5.CALL.args: [string, number, boolean, string, number]);
  (c6.CALL.args: [string, number, boolean, string, number, boolean]);
  (c7.CALL.args: [string, number, boolean, string, number, boolean, string]);
  (c8.CALL.args: [string, number, boolean, string, number, boolean, string, number]);

  // $ExpectError: First parameter is a string, not a number
  (c1.CALL.args: [number]);

  // Fn tests
  (c1.CALL.fn: typeof nfn1);
  (c2.CALL.fn: typeof nfn2);
  (c3.CALL.fn: typeof nfn3);
  (c4.CALL.fn: typeof nfn4);
  (c5.CALL.fn: typeof nfn5);
  (c6.CALL.fn: typeof nfn6);
  (c7.CALL.fn: typeof nfn7);
  (c8.CALL.fn: typeof nfn8);

  // $ExpectError: fn returns a number not string
  (c1.CALL.fn: (a: boolean) => string);

  // $ExpectError: 'a' is actually of type string
  (c1.CALL.fn: (a: boolean) => number);

  // $ExpectError: 'a' is actually of type string
  (c4.CALL.fn: (a: number, b: number) => number);

  // $ExpectError: Less parameter are noticed
  (c6.CALL.fn: typeof nfn1);

  // Context tests
  (c1.CALL.context: typeof context);
  (c2.CALL.context: typeof context);
  (c3.CALL.context: typeof context);
  (c4.CALL.context: typeof context);
  (c5.CALL.context: typeof context);
  (c6.CALL.context: typeof context);
  (c7.CALL.context: typeof context);
  (c7.CALL.context: typeof context);

  // $ExpectError
  (c1.CALL.context: null);
}

function contextCallSagaFunctionTest() {
  const c0 = call([context, s0]);
  const c1 = call([context, s1], "1");
  const c2 = call([context, s2], "1", 2);
  const c3 = call([context, s3], "1", 2, "3");
  const c4 = call([context, s4], "1", 2, "3", 4);
  const c5 = call([context, s5], "1", 2, "3", 4, "5");
  const c6 = call([context, s6], "1", 2, "3", 4, "5", 6);
  const c7 = call([context, s7], "1", 2, "3", 4, "5", 6, "7");
  const c8 = call([context, s8], "1", 2, "3", 4, "5", 6, "7", 8);
  const cClass = call([classContext, s1], "1");

  // TODO: For weird reasons I do not understand, these tests fail in the wrong place - ExpectError: Too few arguments
  // call([context, s6], '1', 2, '3', 4);

  // $ExpectError: Wrong argument types
  call([context, s1], 1);

  const cSpread = call([context, sSpread], 1, 2, 3, 4);

  // Args tests
  (c0.CALL.args: []);
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, string]);
  (c4.CALL.args: [string, number, string, number]);
  (c5.CALL.args: [string, number, string, number, string]);
  (c6.CALL.args: [string, number, string, number, string, number]);
  (c7.CALL.args: [string, number, string, number, string, number, string]);
  (c8.CALL.args: [string, number, string, number, string, number, string, number]);

  // $ExpectError: First parameter is a string, not a number
  (c1.CALL.args: [number]);

  // Fn tests
  (c1.CALL.fn: typeof s1);
  (c2.CALL.fn: typeof s2);
  (c3.CALL.fn: typeof s3);
  (c4.CALL.fn: typeof s4);
  (c5.CALL.fn: typeof s5);
  (c6.CALL.fn: typeof s6);
  (c7.CALL.fn: typeof s7);
  (c8.CALL.fn: typeof s8);

  // $ExpectError: fn returns a Saga<number> not Saga<string>
  (c1.CALL.fn: (a: string) => Saga<string>);

  // $ExpectError: 'a' is actually of type string
  (c1.CALL.fn: (a: boolean) => Saga<number>);

  // $ExpectError: 'a' is actually of type string
  (c4.CALL.fn: (a: number, b: number) => Saga<number>);

  // $ExpectError: Less parameter are noticed
  (c6.CALL.fn: typeof s1);

  // Context tests
  (c1.CALL.context: typeof context);
  (c2.CALL.context: typeof context);
  (c3.CALL.context: typeof context);
  (c4.CALL.context: typeof context);
  (c5.CALL.context: typeof context);
  (c6.CALL.context: typeof context);
  (c7.CALL.context: typeof context);
  (c8.CALL.context: typeof context);

  // $ExpectError
  (c1.CALL.context: null);
}

function applyTest() {
  const c0 = apply(context, fn0);
  const c1 = apply(context, fn1, "1");
  const c2 = apply(context, fn2, "1", 2);
  const c3 = apply(context, fn3, "1", 2, "3");
  const c4 = apply(context, fn4, "1", 2, "3", 4);
  const c5 = apply(context, fn5, "1", 2, "3", 4, "5");
  const c6 = apply(context, fn6, "1", 2, "3", 4, "5", 6);
  const c7 = apply(context, fn6, "1", 2, "3", 4, "5", 6, "7");
  const c8 = apply(context, fn6, "1", 2, "3", 4, "5", 6, "7", 8);
  const cClass = apply(classContext, fn1, "1");

  // $ExpectError: Too few arguments
  apply(context, fn6, "1", 2, "3", 4);

  // $ExpectError: Wrong argument types
  apply(context, fn1, 1);

  const cSpread = apply(context, fnSpread, 1, 2, 3, 1);

  // Args tests
  (c0.CALL.args: []);
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, string]);
  (c4.CALL.args: [string, number, string, number]);
  (c5.CALL.args: [string, number, string, number, string]);
  (c6.CALL.args: [string, number, string, number, string, number]);
  (c7.CALL.args: [string, number, string, number, string, number, string]);
  (c8.CALL.args: [string, number, string, number, string, number, string, number]);

  // $ExpectError: First parameter is a string, not a number
  (c1.CALL.args: [number]);

  // Fn tests
  (c1.CALL.fn: typeof fn1);
  (c2.CALL.fn: typeof fn2);
  (c3.CALL.fn: typeof fn3);
  (c4.CALL.fn: typeof fn4);
  (c5.CALL.fn: typeof fn5);
  (c6.CALL.fn: typeof fn6);
  (c7.CALL.fn: typeof fn7);
  (c8.CALL.fn: typeof fn8);

  // NOTE: This should actually fail, but apparently more parameter are fine..
  (c1.CALL.fn: typeof fn6);

  // $ExpectError: fn returns a Promise<string> not Promise<number>
  (c1.CALL.fn: (a: boolean) => Promise<number>);

  // $ExpectError: 'a' is actually of type string
  (c4.CALL.fn: (a: number, b: number) => Promise<string>);

  // $ExpectError: Less parameter are noticed
  (c6.CALL.fn: typeof fn1);

  // Context tests
  (c1.CALL.context: typeof context);
  (c2.CALL.context: typeof context);
  (c3.CALL.context: typeof context);
  (c4.CALL.context: typeof context);
  (c5.CALL.context: typeof context);
  (c6.CALL.context: typeof context);
  (c7.CALL.context: typeof context);
  (c8.CALL.context: typeof context);

  // $ExpectError
  (c1.CALL.context: null);
}

function applyNormalFunctionTest() {
  const c0 = apply(context, nfn0);
  const c1 = apply(context, nfn1, "1");
  const c2 = apply(context, nfn2, "1", 2);
  const c3 = apply(context, nfn3, "1", 2, true);
  const c4 = apply(context, nfn4, "1", 2, true, "4");
  const c5 = apply(context, nfn5, "1", 2, true, "4", 5);
  const c6 = apply(context, nfn6, "1", 2, true, "4", 5, false);
  const c7 = apply(context, nfn7, "1", 2, true, "4", 5, false, "7");
  const c8 = apply(context, nfn8, "1", 2, true, "4", 5, false, "7", 8);
  const cClass = apply(classContext, nfn1, "1");

  // $ExpectError: Too few arguments
  apply(context, nfn6, "1", 2, true, "4");

  // $ExpectError: Wrong argument types
  apply(context, nfn1, 1);

  const cSpread = apply(context, nfnSpread, 1, 2, 3, 4);

  // Args tests
  (c0.CALL.args: []);
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, boolean]);
  (c4.CALL.args: [string, number, boolean, string]);
  (c5.CALL.args: [string, number, boolean, string, number]);
  (c6.CALL.args: [string, number, boolean, string, number, boolean]);
  (c7.CALL.args: [string, number, boolean, string, number, boolean, string]);
  (c8.CALL.args: [string, number, boolean, string, number, boolean, string, number]);

  // $ExpectError: First parameter is a string, not a number
  (c1.CALL.args: [number]);

  // Fn tests
  (c1.CALL.fn: typeof nfn1);
  (c2.CALL.fn: typeof nfn2);
  (c3.CALL.fn: typeof nfn3);
  (c4.CALL.fn: typeof nfn4);
  (c5.CALL.fn: typeof nfn5);
  (c6.CALL.fn: typeof nfn6);
  (c7.CALL.fn: typeof nfn7);
  (c8.CALL.fn: typeof nfn8);

  // $ExpectError: fn returns a number not string
  (c1.CALL.fn: (a: boolean) => string);

  // $ExpectError: 'a' is actually of type string
  (c1.CALL.fn: (a: boolean) => number);

  // $ExpectError: 'a' is actually of type string
  (c4.CALL.fn: (a: number, b: number) => number);

  // $ExpectError: Less parameter are noticed
  (c6.CALL.fn: typeof nfn1);

  // Context tests
  (c1.CALL.context: typeof context);
  (c2.CALL.context: typeof context);
  (c3.CALL.context: typeof context);
  (c4.CALL.context: typeof context);
  (c5.CALL.context: typeof context);
  (c6.CALL.context: typeof context);
  (c7.CALL.context: typeof context);
  (c8.CALL.context: typeof context);

  // $ExpectError
  (c1.CALL.context: null);
}

function applySagaFunctionTest() {
  const c0 = apply(context, s0);
  const c1 = apply(context, s1, "1");
  const c2 = apply(context, s2, "1", 2);
  const c3 = apply(context, s3, "1", 2, "3");
  const c4 = apply(context, s4, "1", 2, "3", 4);
  const c5 = apply(context, s5, "1", 2, "3", 4, "5");
  const c6 = apply(context, s6, "1", 2, "3", 4, "5", 6);
  const c7 = apply(context, s7, "1", 2, "3", 4, "5", 6, "7");
  const c8 = apply(context, s8, "1", 2, "3", 4, "5", 6, "7", 8);
  const cClass = apply(classContext, s1, "1");

  // $ExpectError: Too few arguments
  apply(context, s6, "1", 2, "3", 4);

  // $ExpectError: Wrong argument types
  apply(context, s1, 1);

  const cSpread = apply(context, sSpread, 1, 2, 3, 4);

  // Args tests
  (c0.CALL.args: []);
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, string]);
  (c4.CALL.args: [string, number, string, number]);
  (c5.CALL.args: [string, number, string, number, string]);
  (c6.CALL.args: [string, number, string, number, string, number]);
  (c7.CALL.args: [string, number, string, number, string, number, string]);
  (c8.CALL.args: [string, number, string, number, string, number, string, number]);

  // $ExpectError: First parameter is a string, not a number
  (c1.CALL.args: [number]);

  // Fn tests
  (c1.CALL.fn: typeof s1);
  (c2.CALL.fn: typeof s2);
  (c3.CALL.fn: typeof s3);
  (c4.CALL.fn: typeof s4);
  (c5.CALL.fn: typeof s5);
  (c6.CALL.fn: typeof s6);
  (c7.CALL.fn: typeof s7);
  (c8.CALL.fn: typeof s8);

  // $ExpectError: fn returns a Saga<number> not Saga<string>
  (c1.CALL.fn: (a: string) => Saga<string>);

  // $ExpectError: 'a' is actually of type string
  (c1.CALL.fn: (a: boolean) => Saga<number>);

  // $ExpectError: 'a' is actually of type string
  (c4.CALL.fn: (a: number, b: number) => Saga<number>);

  // $ExpectError: Less parameter are noticed
  (c6.CALL.fn: typeof s1);

  // Context tests
  (c1.CALL.context: typeof context);
  (c2.CALL.context: typeof context);
  (c3.CALL.context: typeof context);
  (c4.CALL.context: typeof context);
  (c5.CALL.context: typeof context);
  (c6.CALL.context: typeof context);
  (c7.CALL.context: typeof context);
  (c8.CALL.context: typeof context);

  // $ExpectError
  (c1.CALL.context: null);
}

function forkTest() {
  const e0 = fork(fn0);
  const e1 = fork(fn1, "1");
  const e2 = fork(fn2, "1", 2);
  const e3 = fork(fn3, "1", 2, "3");
  const e4 = fork(fn4, "1", 2, "3", 4);
  const e5 = fork(fn5, "1", 2, "3", 4, "5");
  const e6 = fork(fn6, "1", 2, "3", 4, "5", 6);
  const e7 = fork(fn7, "1", 2, "3", 4, "5", 6, "7");
  const e8 = fork(fn8, "1", 2, "3", 4, "5", 6, "7", 8);
  const eClass = fork(fn1, "1");
  const eSaga = fork(s1, "1");

  // Args Test
  (e0.FORK.args: []);
  (e1.FORK.args: [string]);
  (e2.FORK.args: [string, number]);
  (e3.FORK.args: [string, number, string]);
  (e4.FORK.args: [string, number, string, number]);
  (e5.FORK.args: [string, number, string, number, string]);
  (e6.FORK.args: [string, number, string, number, string, number]);
  (e7.FORK.args: [string, number, string, number, string, number, string]);
  (e8.FORK.args: [string, number, string, number, string, number, string, number]);

  // Context Test
  (e1.FORK.context: null);
  (e2.FORK.context: null);
  (e3.FORK.context: null);
  (e4.FORK.context: null);
  (e5.FORK.context: null);
  (e6.FORK.context: null);
  (e7.FORK.context: null);
  (e8.FORK.context: null);
  (eSaga.FORK.context: null);

  // Fn Test
  (e1.FORK.fn: typeof fn1);
  (e2.FORK.fn: typeof fn2);
  (e3.FORK.fn: typeof fn3);
  (e4.FORK.fn: typeof fn4);
  (e5.FORK.fn: typeof fn5);
  (e6.FORK.fn: typeof fn6);
  (e7.FORK.fn: typeof fn7);
  (e8.FORK.fn: typeof fn8);
  (eSaga.FORK.fn: typeof s1);

  // $ExpectError: wrong fn
  (e6.FORK.fn: typeof fn1);
}

function contextForkTest() {
  const e0 = fork([context, fn0]);
  const e1 = fork([context, fn1], "1");
  const e2 = fork([context, fn2], "1", 2);
  const e3 = fork([context, fn3], "1", 2, "3");
  const e4 = fork([context, fn4], "1", 2, "3", 4);
  const e5 = fork([context, fn5], "1", 2, "3", 4, "5");
  const e6 = fork([context, fn6], "1", 2, "3", 4, "5", 6);
  const e7 = fork([context, fn7], "1", 2, "3", 4, "5", 6, "7");
  const e8 = fork([context, fn8], "1", 2, "3", 4, "5", 6, "7", 8);
  const eClass = fork([context, fn1], "1");
  const eSaga = fork([context, s1], "1");

  // Args Test
  (e0.FORK.args: []);
  (e1.FORK.args: [string]);
  (e2.FORK.args: [string, number]);
  (e3.FORK.args: [string, number, string]);
  (e4.FORK.args: [string, number, string, number]);
  (e5.FORK.args: [string, number, string, number, string]);
  (e6.FORK.args: [string, number, string, number, string, number]);
  (e7.FORK.args: [string, number, string, number, string, number, string]);
  (e8.FORK.args: [string, number, string, number, string, number, string, number]);

  // Context Test
  (e1.FORK.context: typeof context);
  (e2.FORK.context: typeof context);
  (e3.FORK.context: typeof context);
  (e4.FORK.context: typeof context);
  (e5.FORK.context: typeof context);
  (e6.FORK.context: typeof context);
  (e7.FORK.context: typeof context);
  (e8.FORK.context: typeof context);
  (eSaga.FORK.context: typeof context);

  // Fn Test
  (e1.FORK.fn: typeof fn1);
  (e2.FORK.fn: typeof fn2);
  (e3.FORK.fn: typeof fn3);
  (e4.FORK.fn: typeof fn4);
  (e5.FORK.fn: typeof fn5);
  (e6.FORK.fn: typeof fn6);
  (e7.FORK.fn: typeof fn7);
  (e8.FORK.fn: typeof fn8);
  (eSaga.FORK.fn: typeof s1);

  // $ExpectError: wrong fn
  (e6.FORK.fn: typeof fn1);
}

function cpsTest() {
  const e0 = cps(cpsfn0);
  const e1 = cps(cpsfn1, "1");
  const e2 = cps(cpsfn2, "1", 2);
  const e3 = cps(cpsfn3, "1", 2, "3");
  const e4 = cps(cpsfn4, "1", 2, "3", 4);
  const e5 = cps(cpsfn5, "1", 2, "3", 4, "5");
  const e6 = cps(cpsfn6, "1", 2, "3", 4, "5", 6);
  const e7 = cps(cpsfn7, "1", 2, "3", 4, "5", 6, "7");
  const e8 = cps(cpsfn8, "1", 2, "3", 4, "5", 6, "7", 8);

  // Args Test
  (e0.CPS.args: []);
  (e1.CPS.args: [string]);
  (e2.CPS.args: [string, number]);
  (e3.CPS.args: [string, number, string]);
  (e4.CPS.args: [string, number, string, number]);
  (e5.CPS.args: [string, number, string, number, string]);
  (e6.CPS.args: [string, number, string, number, string, number]);
  (e7.CPS.args: [string, number, string, number, string, number, string]);
  (e8.CPS.args: [string, number, string, number, string, number, string, number]);

  // Context Test
  (e1.CPS.context: null);
  (e2.CPS.context: null);
  (e3.CPS.context: null);
  (e4.CPS.context: null);
  (e5.CPS.context: null);
  (e6.CPS.context: null);
  (e7.CPS.context: null);
  (e8.CPS.context: null);

  // Fn Test
  (e1.CPS.fn: typeof cpsfn1);
  (e2.CPS.fn: typeof cpsfn2);
  (e3.CPS.fn: typeof cpsfn3);
  (e4.CPS.fn: typeof cpsfn4);
  (e5.CPS.fn: typeof cpsfn5);
  (e6.CPS.fn: typeof cpsfn6);
  (e7.CPS.fn: typeof cpsfn7);
  (e8.CPS.fn: typeof cpsfn8);

  // $ExpectError: wrong fn
  (e6.CPS.fn: typeof cpsfn1);
}

function contextCpsTest() {
  const e0 = cps([context, cpsfn0]);
  const e1 = cps([context, cpsfn1], "1");
  const e2 = cps([context, cpsfn2], "1", 2);
  const e3 = cps([context, cpsfn3], "1", 2, "3");
  const e4 = cps([context, cpsfn4], "1", 2, "3", 4);
  const e5 = cps([context, cpsfn5], "1", 2, "3", 4, "5");
  const e6 = cps([context, cpsfn6], "1", 2, "3", 4, "5", 6);
  const e7 = cps([context, cpsfn7], "1", 2, "3", 4, "5", 6, "7");
  const e8 = cps([context, cpsfn8], "1", 2, "3", 4, "5", 6, "7", 8);
  const eClass = cps([classContext, cpsfn1], "1");

  // Args Test
  (e0.CPS.args: []);
  (e1.CPS.args: [string]);
  (e2.CPS.args: [string, number]);
  (e3.CPS.args: [string, number, string]);
  (e4.CPS.args: [string, number, string, number]);
  (e5.CPS.args: [string, number, string, number, string]);
  (e6.CPS.args: [string, number, string, number, string, number]);
  (e7.CPS.args: [string, number, string, number, string, number, string]);
  (e8.CPS.args: [string, number, string, number, string, number, string, number]);

  // Context Test
  (e1.CPS.context: typeof context);
  (e2.CPS.context: typeof context);
  (e3.CPS.context: typeof context);
  (e4.CPS.context: typeof context);
  (e5.CPS.context: typeof context);
  (e6.CPS.context: typeof context);
  (e7.CPS.context: typeof context);
  (e8.CPS.context: typeof context);
  (eClass.CPS.context: typeof classContext);

  // Fn Test
  (e1.CPS.fn: typeof cpsfn1);
  (e2.CPS.fn: typeof cpsfn2);
  (e3.CPS.fn: typeof cpsfn3);
  (e4.CPS.fn: typeof cpsfn4);
  (e5.CPS.fn: typeof cpsfn5);
  (e6.CPS.fn: typeof cpsfn6);
  (e7.CPS.fn: typeof cpsfn7);
  (e8.CPS.fn: typeof cpsfn8);

  // $ExpectError: wrong fn
  (e6.CPS.fn: typeof cpsfn1);
}

function spawnTest() {
  const e0 = spawn(fn0);
  const e1 = spawn(fn1, "1");
  const e2 = spawn(fn2, "1", 2);
  const e3 = spawn(fn3, "1", 2, "3");
  const e4 = spawn(fn4, "1", 2, "3", 4);
  const e5 = spawn(fn5, "1", 2, "3", 4, "5");
  const e6 = spawn(fn6, "1", 2, "3", 4, "5", 6);
  const e7 = spawn(fn7, "1", 2, "3", 4, "5", 6, "7");
  const e8 = spawn(fn8, "1", 2, "3", 4, "5", 6, "7", 8);
  const eClass = spawn(fn1, "1");
  const eSaga = spawn(s1, "1");

  // Args Test
  (e0.SPAWN.args: []);
  (e1.SPAWN.args: [string]);
  (e2.SPAWN.args: [string, number]);
  (e3.SPAWN.args: [string, number, string]);
  (e4.SPAWN.args: [string, number, string, number]);
  (e5.SPAWN.args: [string, number, string, number, string]);
  (e6.SPAWN.args: [string, number, string, number, string, number]);
  (e7.SPAWN.args: [string, number, string, number, string, number, string]);
  (e8.SPAWN.args: [string, number, string, number, string, number, string, number]);

  // Context Test
  (e1.SPAWN.context: null);
  (e2.SPAWN.context: null);
  (e3.SPAWN.context: null);
  (e4.SPAWN.context: null);
  (e5.SPAWN.context: null);
  (e6.SPAWN.context: null);
  (e7.SPAWN.context: null);
  (e8.SPAWN.context: null);
  (eSaga.SPAWN.context: null);

  // Fn Test
  (e1.SPAWN.fn: typeof fn1);
  (e2.SPAWN.fn: typeof fn2);
  (e3.SPAWN.fn: typeof fn3);
  (e4.SPAWN.fn: typeof fn4);
  (e5.SPAWN.fn: typeof fn5);
  (e6.SPAWN.fn: typeof fn6);
  (e7.SPAWN.fn: typeof fn7);
  (e8.SPAWN.fn: typeof fn8);
  (eSaga.SPAWN.fn: typeof s1);

  // $ExpectError: wrong fn
  (e6.SPAWN.fn: typeof fn1);
}

function contextSpawnTest() {
  const e0 = spawn([context, fn0]);
  const e1 = spawn([context, fn1], "1");
  const e2 = spawn([context, fn2], "1", 2);
  const e3 = spawn([context, fn3], "1", 2, "3");
  const e4 = spawn([context, fn4], "1", 2, "3", 4);
  const e5 = spawn([context, fn5], "1", 2, "3", 4, "5");
  const e6 = spawn([context, fn6], "1", 2, "3", 4, "5", 6);
  const e7 = spawn([context, fn7], "1", 2, "3", 4, "5", 6, "7");
  const e8 = spawn([context, fn8], "1", 2, "3", 4, "5", 6, "7", 8);
  const eClass = spawn([context, fn1], "1");
  const eSaga = spawn([context, s1], "1");

  // Args Test
  (e0.SPAWN.args: []);
  (e1.SPAWN.args: [string]);
  (e2.SPAWN.args: [string, number]);
  (e3.SPAWN.args: [string, number, string]);
  (e4.SPAWN.args: [string, number, string, number]);
  (e5.SPAWN.args: [string, number, string, number, string]);
  (e6.SPAWN.args: [string, number, string, number, string, number]);
  (e7.SPAWN.args: [string, number, string, number, string, number, string]);
  (e8.SPAWN.args: [string, number, string, number, string, number, string, number]);

  // Context Test
  (e1.SPAWN.context: typeof context);
  (e2.SPAWN.context: typeof context);
  (e3.SPAWN.context: typeof context);
  (e4.SPAWN.context: typeof context);
  (e5.SPAWN.context: typeof context);
  (e6.SPAWN.context: typeof context);
  (e7.SPAWN.context: typeof context);
  (e8.SPAWN.context: typeof context);
  (eSaga.SPAWN.context: typeof context);

  // Fn Test
  (e1.SPAWN.fn: typeof fn1);
  (e2.SPAWN.fn: typeof fn2);
  (e3.SPAWN.fn: typeof fn3);
  (e4.SPAWN.fn: typeof fn4);
  (e5.SPAWN.fn: typeof fn5);
  (e6.SPAWN.fn: typeof fn6);
  (e7.SPAWN.fn: typeof fn7);
  (e8.SPAWN.fn: typeof fn8);
  (eSaga.SPAWN.fn: typeof s1);

  // $ExpectError: wrong fn
  (e6.SPAWN.fn: typeof fn1);
}

function joinTest() {
  declare var task1: Task<string>;
  declare var task2: Task<number>;

  const j1 = join(task1);
  const j2 = join(task1, task2);

  (j1.JOIN: typeof task1);

  // $ExpectError: This is not a join effect but an all effect
  (j2.JOIN: Task<*>);
}

function cancelTest() {
  declare var task1: Task<string>;
  declare var task2: Task<number>;

  const selfCancel = cancel();
  const c1 = cancel(task1);
  const c2 = cancel(task1, task2);

  (selfCancel.CANCEL: "@@redux-saga/SELF_CANCELLATION");
  (c1.CANCEL: typeof task1);

  // $ExpectError: This is not a cancel effect but an all effect
  (c2.CANCEL: Task<*>);
}

function raceTest() {
  const e1 = take("FOO");
  const e2 = put({ type: "BAR" });

  const r = race({
    foo: e1,
    bar: e2
  });

  // Should recognize the RACE data structure
  (r.RACE.foo: typeof e1);
  (r.RACE.bar: typeof e2);
}

function raceTupleTest() {
  const e1 = take("FOO");
  const e2 = put({ type: "BAR" });

  const r = race([e1, e2]);

  // Should recognize the RACE data structure
  (r.RACE[0]: typeof e1);
  (r.RACE[1]: typeof e2);
}

function cancelledTest() {
  const c = cancelled();

  (c.CANCELLED: Object);
}

function flushTest() {
  const f = flush(myChannel);
  (f.FLUSH: typeof myChannel);

  // $ExpectError: Too few arguments
  flush();

  // $ExpectError: Only accept Channels
  flush(42);
}

function selectTest() {
  const s0 = (state: Object): Object => ({});
  const s1 = (state: Object, a: string) => ({});
  const s2 = (state: Object, a: string, b: number) => ({});
  const s3 = (state: Object, a: string, b: number, c: string) => ({});
  const s4 = (
    state: Object,
    a: string,
    b: number,
    c: string,
    d: number
  ) => ({});
  const s5 = (
    state: Object,
    a: string,
    b: number,
    c: string,
    d: number,
    e: string
  ) => ({});
  const s6 = (
    state: Object,
    a: string,
    b: number,
    c: string,
    d: number,
    e: string,
    f: number
  ) => ({});
  const s7 = (
    state: Object,
    a: string,
    b: number,
    c: string,
    d: number,
    e: string,
    f: number,
    g: string
  ) => ({});
  const s8 = (
    state: Object,
    a: string,
    b: number,
    c: string,
    d: number,
    e: string,
    f: number,
    g: string,
    h: number
  ) => ({});
  const sSpread = (state: Object, ...args: Array<string>): Object => ({});

  const eVoid = select();
  const e0 = select(s0);
  const e1 = select(s1, "1");
  const e2 = select(s2, "1", 2);
  const e3 = select(s3, "1", 2, "3");
  const e4 = select(s4, "1", 2, "3", 4);
  const e5 = select(s5, "1", 2, "3", 4, "5");
  const e6 = select(s6, "1", 2, "3", 4, "5", 6);
  const e7 = select(s7, "1", 2, "3", 4, "5", 6, "7");
  const e8 = select(s8, "1", 2, "3", 4, "5", 6, "7", 8);

  // Args test
  (eVoid.SELECT.args: []);
  (e0.SELECT.args: []);
  (e1.SELECT.args: [string]);
  (e2.SELECT.args: [string, number]);
  (e3.SELECT.args: [string, number, string]);
  (e4.SELECT.args: [string, number, string, number]);
  (e5.SELECT.args: [string, number, string, number, string]);
  (e6.SELECT.args: [string, number, string, number, string, number]);
  (e7.SELECT.args: [string, number, string, number, string, number, string]);
  (e8.SELECT.args: [string, number, string, number, string, number, string, number]);

  // $ExpectError: second args is not a boolean
  (e3.SELECT.args: [string, boolean, string]);

  // Fn check
  (eVoid.SELECT.selector: void);
  (e0.SELECT.selector: typeof s0);
  (e1.SELECT.selector: typeof s1);
  (e2.SELECT.selector: typeof s2);
  (e3.SELECT.selector: typeof s3);
  (e4.SELECT.selector: typeof s4);
  (e5.SELECT.selector: typeof s5);
  (e6.SELECT.selector: typeof s6);
  (e7.SELECT.selector: typeof s7);
  (e8.SELECT.selector: typeof s8);

  // $ExpectError: args.a should actually be a string
  (e1.SELECT.selector: (state: Object, a: number) => Object);
}

function takeEveryTest() {
  const e0 = takeEvery("FOO", s0);
  const e1 = takeEvery("FOO", s1, "1");
  const e2 = takeEvery("FOO", s2, "1", 2);
  const e3 = takeEvery("FOO", s3, "1", 2, "3");
  const e4 = takeEvery("FOO", s4, "1", 2, "3", 4);
  const e5 = takeEvery("FOO", s5, "1", 2, "3", 4, "5");
  const e6 = takeEvery("FOO", s6, "1", 2, "3", 4, "5", 6);
  const e7 = takeEvery("FOO", s7, "1", 2, "3", 4, "5", 6, "7");
  const e8 = takeEvery("FOO", s8, "1", 2, "3", 4, "5", 6, "7", 8);

  // Context Test
  (e1.FORK.context: null);
  (e2.FORK.context: null);
  (e3.FORK.context: null);
  (e4.FORK.context: null);
  (e5.FORK.context: null);
  (e6.FORK.context: null);
  (e7.FORK.context: null);
  (e8.FORK.context: null);
}

function takeEveryFromChannelTest() {
  const e0 = takeEvery(myChannel, s0);
  const e1 = takeEvery(myChannel, s1, "1");
  const e2 = takeEvery(myChannel, s2, "1", 2);
  const e3 = takeEvery(myChannel, s3, "1", 2, "3");
  const e4 = takeEvery(myChannel, s4, "1", 2, "3", 4);
  const e5 = takeEvery(myChannel, s5, "1", 2, "3", 4, "5");
  const e6 = takeEvery(myChannel, s6, "1", 2, "3", 4, "5", 6);
  const e7 = takeEvery(myChannel, s7, "1", 2, "3", 4, "5", 6, "7");
  const e8 = takeEvery(myChannel, s8, "1", 2, "3", 4, "5", 6, "7", 8);

  // Context Test
  (e1.FORK.context: null);
  (e2.FORK.context: null);
  (e3.FORK.context: null);
  (e4.FORK.context: null);
  (e5.FORK.context: null);
  (e6.FORK.context: null);
  (e7.FORK.context: null);
  (e8.FORK.context: null);
}

function takeLatestTest() {
  const e0 = takeLatest("FOO", s0);
  const e1 = takeLatest("FOO", s1, "1");
  const e2 = takeLatest("FOO", s2, "1", 2);
  const e3 = takeLatest("FOO", s3, "1", 2, "3");
  const e4 = takeLatest("FOO", s4, "1", 2, "3", 4);
  const e5 = takeLatest("FOO", s5, "1", 2, "3", 4, "5");
  const e6 = takeLatest("FOO", s6, "1", 2, "3", 4, "5", 6);
  const e7 = takeLatest("FOO", s7, "1", 2, "3", 4, "5", 6, "7");
  const e8 = takeLatest("FOO", s8, "1", 2, "3", 4, "5", 6, "7", 8);

  // Context Test
  (e1.FORK.context: null);
  (e2.FORK.context: null);
  (e3.FORK.context: null);
  (e4.FORK.context: null);
  (e5.FORK.context: null);
  (e6.FORK.context: null);
  (e7.FORK.context: null);
  (e8.FORK.context: null);
}

function takeLatestFromChannelTest() {
  const e0 = takeLatest(myChannel, s0);
  const e1 = takeLatest(myChannel, s1, "1");
  const e2 = takeLatest(myChannel, s2, "1", 2);
  const e3 = takeLatest(myChannel, s3, "1", 2, "3");
  const e4 = takeLatest(myChannel, s4, "1", 2, "3", 4);
  const e5 = takeLatest(myChannel, s5, "1", 2, "3", 4, "5");
  const e6 = takeLatest(myChannel, s6, "1", 2, "3", 4, "5", 6);
  const e7 = takeLatest(myChannel, s7, "1", 2, "3", 4, "5", 6, "7");
  const e8 = takeLatest(myChannel, s8, "1", 2, "3", 4, "5", 6, "7", 8);

  // Context Test
  (e1.FORK.context: null);
  (e2.FORK.context: null);
  (e3.FORK.context: null);
  (e4.FORK.context: null);
  (e5.FORK.context: null);
  (e6.FORK.context: null);
  (e7.FORK.context: null);
  (e8.FORK.context: null);
}

function throttleTests() {
  const e0 = throttle(150, "FOO", s0);
  const e1 = throttle(150, "FOO", s1, "1");
  const e2 = throttle(150, "FOO", s2, "1", 2);
  const e3 = throttle(150, "FOO", s3, "1", 2, "3");
  const e4 = throttle(150, "FOO", s4, "1", 2, "3", 4);
  const e5 = throttle(150, "FOO", s5, "1", 2, "3", 4, "5");
  const e6 = throttle(150, "FOO", s6, "1", 2, "3", 4, "5", 6);
  const e7 = throttle(150, "FOO", s7, "1", 2, "3", 4, "5", 6, "7");
  const e8 = throttle(150, "FOO", s8, "1", 2, "3", 4, "5", 6, "7", 8);

  // Context Test
  (e1.FORK.context: null);
  (e2.FORK.context: null);
  (e3.FORK.context: null);
  (e4.FORK.context: null);
  (e5.FORK.context: null);
  (e6.FORK.context: null);
  (e7.FORK.context: null);
  (e8.FORK.context: null);
}

function runSagaTest() {
  (runSaga({}, s0): Task<number>);
  (runSaga({}, s1, "1"): Task<number>);
  (runSaga({}, s2, "1", 2): Task<number>);
  (runSaga({}, s3, "1", 2, "3"): Task<number>);
  (runSaga({}, s4, "1", 2, "3", 4): Task<number>);
  (runSaga({}, s5, "1", 2, "3", 4, "5"): Task<number>);
  (runSaga({}, s6, "1", 2, "3", 4, "5", 6): Task<number>);
  (runSaga({}, s7, "1", 2, "3", 4, "5", 6, "7"): Task<number>);
  (runSaga({}, s8, "1", 2, "3", 4, "5", 6, "7", 8): Task<number>);

  // $ExpectError: too few args
  (runSaga({}, s6, "1", 2): Task<number>);

  // $ExpectError: wrong argument type
  (runSaga({}, s1, 1): Task<number>);

  // $ExpectError: wrong return type
  (runSaga({}, s1, 1): Task<string>);

  const cb = input => {};
  const subscribe = cb => {
    cb("");
    return () => {}; // unsubscribe fn
  };

  const invalidSubscribe = cb => {
    // $ExpectError: cb is a function
    cb + 2;

    return "";
  };

  // $ExpectError: error level is a string enum
  const invalidLogger = (level: number) => {};

  const dispatch = output => {};
  const getState = () => ({});
  const logger = level => {};

  // Should be fine
  runSaga({ subscribe }, s0);
  runSaga({ dispatch }, s0);
  runSaga({ getState }, s0);
  runSaga({ sagaMonitor }, s0);
  runSaga({ logger }, s0);

  // Invalid instantiations
  runSaga({ logger: invalidLogger }, s0);
  // $ExpectError: return needs to be a subscribe fn
  runSaga({ subscribe: invalidSubscribe }, s0);
}

function createSagaMiddlewareTest() {
  const middleware = createSagaMiddleware();

  middleware.run(s0);
  middleware.run(s1, "1");
  middleware.run(s2, "1", 2);
  middleware.run(s3, "1", 2, "3");
  middleware.run(s4, "1", 2, "3", 4);
  middleware.run(s5, "1", 2, "3", 4, "5");
  middleware.run(s6, "1", 2, "3", 4, "5", 6);
  middleware.run(s7, "1", 2, "3", 4, "5", 6, "7");
  middleware.run(s8, "1", 2, "3", 4, "5", 6, "7", 8);

  // $ExpectError: Boolean argument should be string
  middleware.run(s3, true, 2, "3");

  (middleware.run(s0): Task<number>);

  createSagaMiddleware({ sagaMonitor });

  // $ExpectError: sagaMonitor parameter should be SagaMonitor
  createSagaMiddleware({ sagaMonitor: "monitor" });

  const logger = level => {};
  createSagaMiddleware({ logger });

  // $ExpectError: logger parameter should be Logger
  createSagaMiddleware({ logger: "logger" });

  const error = () => {};
  createSagaMiddleware({ onError: error });

  // $ExpectError: onError parameter should be Logger
  createSagaMiddleware({ onError: "error" });
}
