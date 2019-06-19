/* @flow */

/* eslint-disable no-unused-vars, no-undef, no-console */

import createSagaMiddleware from 'redux-saga';

import {
  runSaga,
  END, eventChannel, channel,
  buffers,
  takeEvery, takeLatest, throttle,
  delay, CANCEL,
  effects, utils,
} from 'redux-saga';

import {
  take,
  takem,
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
} from 'redux-saga/effects';

import type { Task, Channel, Buffer, SagaMonitor } from 'redux-saga';

import type {
  IOEffect,
  TakeEffect,
  PutEffect,
  SelectEffect,
} from 'redux-saga/effects';

/**
 * SOME COMMON TEST INFRASTRUCTURE
 */
const myChannel = channel();

function SomeContext() { this.z = 'foo'; }

const context = { a: 'foo' };
const context2 = new SomeContext();

const sagaMonitor: SagaMonitor = {
  effectTriggered: () => {},
  effectResolved: () => {},
  effectRejected: () => {},
  effectCancelled: () => {},
};

function* g0(): Generator<any, number, any> { return 1; }
function* g1(a: string): Generator<any, number, any> { return 1; }
function* g2(a: string, b: number): Generator<any, number, any> { return 1; }
function* g3(a: string, b: number, c: string): Generator<any, number, any> { return 1; }
function* g4(a: string, b: number, c: string, d: number): Generator<any, number, any> { return 1; }
function* g5(a: string, b: number, c: string, d: number, e: string): Generator<any, number, any> { return 1; }
function* g6(a: string, b: number, c: string, d: number, e: string, f: number): Generator<any, number, any> { return 1; }

function* gSpread(...args: Array<boolean>): Generator<any, number, any> { return 1; }

// Note: Without the return annotation, flow cannot determine the union case properly
const fn0 = (): Promise<number> => Promise.resolve(1);
const fn1 = (a: string): Promise<number> => Promise.resolve(1);
const fn2 = (a: string, b: number): Promise<number> => Promise.resolve(1);
const fn3 = (a: string, b: number, c: string): Promise<number> => Promise.resolve(1);
const fn4 = (a: string, b: number, c: string, d: number): Promise<number> => Promise.resolve(1);
const fn5 = (a: string, b: number, c: string, d: number, e: string): Promise<number> => Promise.resolve(1);
const fn6 = (a: string, b: number, c: string, d: number, e: string, f: number): Promise<number> => Promise.resolve(1);

const fnSpread = (...args: Array<number>): Promise<string> => Promise.resolve('');

function nfn0(): number { return 1; }
function nfn1(a: string): number { return 1; }
function nfn2(a: string, b: number): number {  return 1; }
function nfn3(a: string, b: number, c: boolean): number { return 1; }
function nfn4(a: string, b: number, c: boolean, d: string, ): number { return 1; }
function nfn5(a: string, b: number, c: boolean, d: string, e: number): number { return 1; }
function nfn6(a: string, b: number, c: boolean, d: string, e: number, f: boolean): number { return 1; }

function nfnSpread(...args: Array<string>): number { return 1; }

/**
 * ALL THE TESTS START FROM HERE
 */

function channelTest() {
  (channel(buffers.fixed(1)): $npm$ReduxSaga$Channel);
}

function eventChannelTest() {
  eventChannel((emitter) => () => {}, buffers.dropping(1));
  eventChannel((emitter) => () => {}, buffers.dropping(1), () => true);

  // $ExpectError: MatcherFn needs boolean as return type
  eventChannel((emitter) => () => {}, buffers.dropping(1), () => '');

  // $ExpectError: second parameter needs to be a Buffer
  eventChannel((emitter) => () => {}, '');
}

function buffersTest() {
  (buffers.none(): $npm$ReduxSaga$Buffer);

  (buffers.fixed(): $npm$ReduxSaga$Buffer);
  (buffers.fixed(5): $npm$ReduxSaga$Buffer);

  // $ExpectError: limit parameter must be given as a number
  (buffers.fixed('five'): $npm$ReduxSaga$Buffer);

  (buffers.dropping(): $npm$ReduxSaga$Buffer);
  (buffers.dropping(6): $npm$ReduxSaga$Buffer);

  // $ExpectError: limit parameter must be given as a number
  (buffers.dropping('six'): $npm$ReduxSaga$Buffer);

  (buffers.sliding(): $npm$ReduxSaga$Buffer);
  (buffers.sliding(7): $npm$ReduxSaga$Buffer);

  // $ExpectError: limit parameter must be given as a number
  (buffers.sliding('seven'): $npm$ReduxSaga$Buffer);

  (buffers.expanding(): $npm$ReduxSaga$Buffer);
  (buffers.expanding(8): $npm$ReduxSaga$Buffer);

  // $ExpectError: limit parameter must be given as a number
  (buffers.expanding('eight'): $npm$ReduxSaga$Buffer);
}

function takeTest() {
  take((action) => action.type === 'foo');
  takem((action) => action.type === 'foo');

  take(['FOO', 'BAR']);
  takem(['FOO', 'BAR']);

  // $ExpectError: PatternFn returns a boolean
  take((action) => null);

  // $ExpectError: PatternFn returns a boolean
  takem((action) => null);

  // $ExpectError: Only string patterns for arrays
  take(['FOO', 'BAR', 1]);

  // $ExpectError: Only string patterns for arrays
  takem(['FOO', 'BAR', 1]);
}

function putTest() {
  put({ type: 'test' });

  const put1 = put({ type: 'FOO', bar: 'hi' });
  (put1.PUT.action.bar: string);

  const put2 = put(myChannel, { type: 'test' });
  (put2.PUT.channel: ?$npm$ReduxSaga$Channel)

  // $ExpectError: Only action objects allowed
  put('test');

  // $ExpectError: No null as channel accepted
  put(null, { type: 'test' });

  // $ExpectError: This property cannot be inferred
  (put1.PUT.action.unknown: string);
}

function actionChannelTest() {
  (actionChannel('ASDF').ACTION_CHANNEL.pattern: string);
  (actionChannel(['FOO', 'BAR']).ACTION_CHANNEL.pattern[0]: string);
}


function callTest() {
  const c0 = call(fn0);
  const c1 = call(fn1, '1');
  const c2 = call(fn2, '1', 2);
  const c3 = call(fn3, '1', 2, '3');
  const c4 = call(fn4, '1', 2, '3', 4);
  const c5 = call(fn5, '1', 2, '3', 4, '5');
  const c6 = call(fn6, '1', 2, '3', 4, '5', 6);

  // $ExpectError: Too less arguments
  call(fn6, '1', 2, '3', 4);

  const cSpread = call(fnSpread, 1, 2, 3, 1);

  // Args tests
  (c0.CALL.args: []);
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, string]);
  (c4.CALL.args: [string, number, string, number]);
  (c5.CALL.args: [string, number, string, number, string]);
  (c6.CALL.args: [string, number, string, number, string, number]);

  // $ExpectError: First parameter is a string, not a number
  (c1.CALL.args: [number]);

  // Fn tests
  (c1.CALL.fn: typeof fn1);
  (c2.CALL.fn: typeof fn2);
  (c3.CALL.fn: typeof fn3);
  (c4.CALL.fn: typeof fn4);
  (c5.CALL.fn: typeof fn5);
  (c6.CALL.fn: typeof fn6);

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

  // $ExpectError
  (c1.CALL.context: Object);
}

function callNormalFunctionTest() {
  const c0 = call(nfn0);
  const c1 = call(nfn1, '1');
  const c2 = call(nfn2, '1', 2);
  const c3 = call(nfn3, '1', 2, true);
  const c4 = call(nfn4, '1', 2, true, '4');
  const c5 = call(nfn5, '1', 2, true, '4', 5);
  const c6 = call(nfn6, '1', 2, true, '4', 5, false);

  // $ExpectError: Too less arguments
  call(nfn6, '1', 2, true, '4');

  const cSpread = call(nfnSpread, '1', '2', '3', '4');

  // Args tests
  (c0.CALL.args: []);
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, boolean]);
  (c4.CALL.args: [string, number, boolean, string]);
  (c5.CALL.args: [string, number, boolean, string, number]);
  (c6.CALL.args: [string, number, boolean, string, number, boolean]);

  // $ExpectError: First parameter is a string, not a number
  (c1.CALL.args: [number]);

  // Fn tests
  (c1.CALL.fn: typeof nfn1);
  (c2.CALL.fn: typeof nfn2);
  (c3.CALL.fn: typeof nfn3);
  (c4.CALL.fn: typeof nfn4);
  (c5.CALL.fn: typeof nfn5);
  (c6.CALL.fn: typeof nfn6);

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

  // $ExpectError
  (c1.CALL.context: Object);
}

function callGeneratorFunctionTest() {
  const c0 = call(g0);
  const c1 = call(g1, '1');
  const c2 = call(g2, '1', 2);
  const c3 = call(g3, '1', 2, '3');
  const c4 = call(g4, '1', 2, '3', 4);
  const c5 = call(g5, '1', 2, '3', 4, '5');
  const c6 = call(g6, '1', 2, '3', 4, '5', 6);

  // $ExpectError: Too less arguments
  call(g6, '1', 2, '3', 4);

  const cSpread = call(gSpread, true, false, true, false);

  // Args tests
  (c0.CALL.args: []);
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, string]);
  (c4.CALL.args: [string, number, string, number]);
  (c5.CALL.args: [string, number, string, number, string]);
  (c6.CALL.args: [string, number, string, number, string, number]);

  // $ExpectError: First parameter is a string, not a number
  (c1.CALL.args: [number]);

  // Fn tests
  (c1.CALL.fn: typeof g1);
  (c2.CALL.fn: typeof g2);
  (c3.CALL.fn: typeof g3);
  (c4.CALL.fn: typeof g4);
  (c5.CALL.fn: typeof g5);
  (c6.CALL.fn: typeof g6);

  // $ExpectError: fn returns a number not string
  (c1.CALL.fn: (a: boolean) => string);

  // $ExpectError: 'a' is actually of type string
  (c1.CALL.fn: (a: boolean) => number);

  // $ExpectError: 'a' is actually of type string
  (c4.CALL.fn: (a: number, b: number) => number);

  // $ExpectError: Less parameter are noticed
  (c6.CALL.fn: typeof g1);

  // Context tests
  (c1.CALL.context: null);
  (c2.CALL.context: null);
  (c3.CALL.context: null);
  (c4.CALL.context: null);
  (c5.CALL.context: null);
  (c6.CALL.context: null);

  // $ExpectError
  (c1.CALL.context: Object);
}

function contextCallTest() {
  const c0 = call([context, fn0]);
  const c1 = call([context, fn1], '1');
  const c2 = call([context, fn2], '1', 2);
  const c3 = call([context, fn3], '1', 2, '3');
  const c4 = call([context, fn3], '1', 2, '3', 4);
  const c5 = call([context, fn3], '1', 2, '3', 4, '5');
  const c6 = call([context, fn3], '1', 2, '3', 4, '5', 6);
  const cClass = call([context2, fn1], '1');

  // Fn tests
  (c1.CALL.fn: typeof fn1);
  (c2.CALL.fn: typeof fn2);
  (c3.CALL.fn: typeof fn3);
  (c4.CALL.fn: typeof fn4);
  (c5.CALL.fn: typeof fn5);
  (c6.CALL.fn: typeof fn6);

  // $ExpectError: Wrong number of parameters
  (c6.CALL.fn: typeof fn1);

  // Args tests
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, string]);
  (c4.CALL.args: [string, number, string, number]);
  (c5.CALL.args: [string, number, string, number, string]);
  (c6.CALL.args: [string, number, string, number, string, number]);

  // $ExpectError: a is a number, not an Array
  (c1.CALL.args: [Array<*>]);

  // Context tests
  (c1.CALL.context: typeof context);
  (c2.CALL.context: typeof context);
  (c3.CALL.context: typeof context);
  (c4.CALL.context: typeof context);
  (c5.CALL.context: typeof context);
  (c6.CALL.context: typeof context);

  (c1.CALL.context.a: string);

  // $ExpectError: Different context
  (c1.CALL.context: { b: 'nope' });

  // $ExpectError: Parameter b requires a number
  call([context, fn2], 'test', 'test');
}

function contextCallNormalFunctionTest() {
  const c0 = call([context, nfn0]);
  const c1 = call([context, nfn1], '1');
  const c2 = call([context, nfn2], '1', 2);
  const c3 = call([context, nfn3], '1', 2, true);
  const c4 = call([context, nfn3], '1', 2, true, '4');
  const c5 = call([context, nfn3], '1', 2, true, '4', 5);
  const c6 = call([context, nfn3], '1', 2, true, '4', 5, false);
  const cClass = call([context2, nfn1], '1');

  // Fn tests
  (c1.CALL.fn: typeof nfn1);
  (c2.CALL.fn: typeof nfn2);
  (c3.CALL.fn: typeof nfn3);
  (c4.CALL.fn: typeof nfn4);
  (c5.CALL.fn: typeof nfn5);
  (c6.CALL.fn: typeof nfn6);

  // $ExpectError: Wrong number of parameters
  (c6.CALL.fn: typeof nfn1);

  // Args tests
  (c0.CALL.args: []);
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, boolean]);
  (c4.CALL.args: [string, number, boolean, string]);
  (c5.CALL.args: [string, number, boolean, string, number]);
  (c6.CALL.args: [string, number, boolean, string, number, boolean]);

  // $ExpectError: a is a number, not an Array
  (c1.CALL.args: [Array<*>]);

  // Context tests
  (c1.CALL.context: typeof context);
  (c2.CALL.context: typeof context);
  (c3.CALL.context: typeof context);
  (c4.CALL.context: typeof context);
  (c5.CALL.context: typeof context);
  (c6.CALL.context: typeof context);
  (cClass.CALL.context: typeof context2);

  (c1.CALL.context.a: string);
  (cClass.CALL.context.z: string);

  // $ExpectError: Different context
  (c1.CALL.context: { b: 'nope' });

  // $ExpectError: Parameter b requires a number
  call([context, nfn2], 'test', 'test');
}

function contextCallGeneratorFunctionTest() {
  const c0 = call([context, g0]);
  const c1 = call([context, g1], '1');
  const c2 = call([context, g2], '1', 2);
  const c3 = call([context, g3], '1', 2, '3');
  const c4 = call([context, g3], '1', 2, '3', 4);
  const c5 = call([context, g3], '1', 2, '3', 4, '5');
  const c6 = call([context, g3], '1', 2, '3', 4, '5', 6);
  const cClass = call([context2, g1], '1');

  // Fn tests
  (c1.CALL.fn: typeof g1);
  (c2.CALL.fn: typeof g2);
  (c3.CALL.fn: typeof g3);
  (c4.CALL.fn: typeof g4);
  (c5.CALL.fn: typeof g5);
  (c6.CALL.fn: typeof g6);

  // $ExpectError: Wrong number of parameters
  (c6.CALL.fn: typeof g1);

  // Args tests
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, string]);
  (c4.CALL.args: [string, number, string, number]);
  (c5.CALL.args: [string, number, string, number, string]);
  (c6.CALL.args: [string, number, string, number, string, number]);

  // $ExpectError: a is a number, not an Array
  (c1.CALL.args: [Array<*>]);

  // Context tests
  (c1.CALL.context: typeof context);
  (c2.CALL.context: typeof context);
  (c3.CALL.context: typeof context);
  (c4.CALL.context: typeof context);
  (c5.CALL.context: typeof context);
  (c6.CALL.context: typeof context);
  (cClass.CALL.context: typeof context2);

  (c1.CALL.context.a: string);
  (cClass.CALL.context.z: string);

  // $ExpectError: Different context
  (c1.CALL.context: { b: 'nope' });

  // $ExpectError: Parameter b requires a number
  call([context, g2], 'test', 'test');
}

function applyTest() {
  const c0 = apply(context, fn0);
  const c1 = apply(context, fn1, '1');
  const c2 = apply(context, fn2, '1', 2);
  const c3 = apply(context, fn3, '1', 2, '3');
  const c4 = apply(context, fn4, '1', 2, '3', 4);
  const c5 = apply(context, fn5, '1', 2, '3', 4, '5');
  const c6 = apply(context, fn6, '1', 2, '3', 4, '5', 6);
  const cClass = apply(context2, fn1, '1');

  // Fn tests
  (c1.CALL.fn: typeof fn1);
  (c2.CALL.fn: typeof fn2);
  (c3.CALL.fn: typeof fn3);
  (c4.CALL.fn: typeof fn4);
  (c5.CALL.fn: typeof fn5);
  (c6.CALL.fn: typeof fn6);

  // $ExpectError: Wrong number of parameters
  (c6.CALL.fn: typeof fn1);

  // Args tests
  (c1.CALL.args: [string]);
  (c2.CALL.args: [string, number]);
  (c3.CALL.args: [string, number, string]);
  (c4.CALL.args: [string, number, string, number]);
  (c5.CALL.args: [string, number, string, number, string]);
  (c6.CALL.args: [string, number, string, number, string, number]);

  // $ExpectError: a is a number, not an Array
  (c1.CALL.args: [boolean]);

  // Context tests
  (c1.CALL.context: typeof context);
  (c2.CALL.context: typeof context);
  (c3.CALL.context: typeof context);
  (c4.CALL.context: typeof context);
  (c5.CALL.context: typeof context);
  (c6.CALL.context: typeof context);

  (c1.CALL.context.a: string);
  (c1.CALL.context.a: string);

  // $ExpectError: Different context
  (c1.CALL.context: { b: 'nope' });

  // $ExpectError: Parameter b requires a number
  call([context, fn2], 'test', 'test');
}

function contextForkTest() {
  const e0 = fork([context, fn0]);
  const e1 = fork([context, fn1], '1');
  const e2 = fork([context, fn2], '1', 2);
  const e3 = fork([context, fn3], '1', 2, '3');
  const e4 = fork([context, fn4], '1', 2, '3', 4);
  const e5 = fork([context, fn5], '1', 2, '3', 4, '5');
  const e6 = fork([context, fn6], '1', 2, '3', 4, '5', 6);
  const eClass = fork([context2, fn1], '1');
  const eGen = fork([context, g1], '1');

  // Args Test
  (e0.FORK.args: []);
  (e1.FORK.args: [string]);
  (e2.FORK.args: [string, number]);
  (e3.FORK.args: [string, number, string]);
  (e4.FORK.args: [string, number, string, number]);
  (e5.FORK.args: [string, number, string, number, string]);
  (e6.FORK.args: [string, number, string, number, string, number]);

  // Context Test
  (e1.FORK.context: typeof context);
  (e2.FORK.context: typeof context);
  (e3.FORK.context: typeof context);
  (e4.FORK.context: typeof context);
  (e5.FORK.context: typeof context);
  (e6.FORK.context: typeof context);
  (eGen.FORK.context: typeof context);

  // Fn Test
  (e1.FORK.fn: typeof fn1);
  (e2.FORK.fn: typeof fn2);
  (e3.FORK.fn: typeof fn3);
  (e4.FORK.fn: typeof fn4);
  (e5.FORK.fn: typeof fn5);
  (e6.FORK.fn: typeof fn6);
  (eGen.FORK.fn: typeof g1);

  // $ExpectError: wrong fn
  (e6.FORK.fn: typeof fn1);
}

function forkTest() {
  const e0 = fork(fn0);
  const e1 = fork(fn1, '1');
  const e2 = fork(fn2, '1', 2);
  const e3 = fork(fn3, '1', 2, '3');
  const e4 = fork(fn4, '1', 2, '3', 4);
  const e5 = fork(fn5, '1', 2, '3', 4, '5');
  const e6 = fork(fn6, '1', 2, '3', 4, '5', 6);
  const eClass = fork(fn1, '1');
  const eGen = fork(g1, '1');

  // Args Test
  (e0.FORK.args: []);
  (e1.FORK.args: [string]);
  (e2.FORK.args: [string, number]);
  (e3.FORK.args: [string, number, string]);
  (e4.FORK.args: [string, number, string, number]);
  (e5.FORK.args: [string, number, string, number, string]);
  (e6.FORK.args: [string, number, string, number, string, number]);

  // Fn Test
  (e1.FORK.fn: typeof fn1);
  (e2.FORK.fn: typeof fn2);
  (e3.FORK.fn: typeof fn3);
  (e4.FORK.fn: typeof fn4);
  (e5.FORK.fn: typeof fn5);
  (e6.FORK.fn: typeof fn6);
  (eGen.FORK.fn: typeof g1);

  // $ExpectError: wrong fn
  (e6.FORK.fn: typeof fn1);
}

function cpsTest() {
  const e0 = cps(fn0);
  const e1 = cps(fn1, '1');
  const e2 = cps(fn2, '1', 2);
  const e3 = cps(fn3, '1', 2, '3');
  const e4 = cps(fn4, '1', 2, '3', 4);
  const e5 = cps(fn5, '1', 2, '3', 4, '5');
  const e6 = cps(fn6, '1', 2, '3', 4, '5', 6);
  const eClass = cps(fn1, '1');
  const eGen = cps(g1, '1');

  // Args Test
  (e0.CPS.args: []);
  (e1.CPS.args: [string]);
  (e2.CPS.args: [string, number]);
  (e3.CPS.args: [string, number, string]);
  (e4.CPS.args: [string, number, string, number]);
  (e5.CPS.args: [string, number, string, number, string]);
  (e6.CPS.args: [string, number, string, number, string, number]);

  // Fn Test
  (e1.CPS.fn: typeof fn1);
  (e2.CPS.fn: typeof fn2);
  (e3.CPS.fn: typeof fn3);
  (e4.CPS.fn: typeof fn4);
  (e5.CPS.fn: typeof fn5);
  (e6.CPS.fn: typeof fn6);
  (eGen.CPS.fn: typeof g1);

  // $ExpectError: wrong fn
  (e6.CPS.fn: typeof fn1);
}

function contextCpsTest() {
  const e0 = cps([context, fn0]);
  const e1 = cps([context, fn1], '1');
  const e2 = cps([context, fn2], '1', 2);
  const e3 = cps([context, fn3], '1', 2, '3');
  const e4 = cps([context, fn4], '1', 2, '3', 4);
  const e5 = cps([context, fn5], '1', 2, '3', 4, '5');
  const e6 = cps([context, fn6], '1', 2, '3', 4, '5', 6);
  const eClass = cps([context2, fn1], '1');
  const eGen = cps([context, g1], '1');

  // Args Test
  (e0.CPS.args: []);
  (e1.CPS.args: [string]);
  (e2.CPS.args: [string, number]);
  (e3.CPS.args: [string, number, string]);
  (e4.CPS.args: [string, number, string, number]);
  (e5.CPS.args: [string, number, string, number, string]);
  (e6.CPS.args: [string, number, string, number, string, number]);

  // Context Test
  (e1.CPS.context: typeof context);
  (e2.CPS.context: typeof context);
  (e3.CPS.context: typeof context);
  (e4.CPS.context: typeof context);
  (e5.CPS.context: typeof context);
  (e6.CPS.context: typeof context);
  (eGen.CPS.context: typeof context);

  // Fn Test
  (e1.CPS.fn: typeof fn1);
  (e2.CPS.fn: typeof fn2);
  (e3.CPS.fn: typeof fn3);
  (e4.CPS.fn: typeof fn4);
  (e5.CPS.fn: typeof fn5);
  (e6.CPS.fn: typeof fn6);
  (eGen.CPS.fn: typeof g1);

  // $ExpectError: wrong fn
  (e6.CPS.fn: typeof fn1);
}

function spawnTest() {
  const e0 = spawn(fn0);
  const e1 = spawn(fn1, '1');
  const e2 = spawn(fn2, '1', 2);
  const e3 = spawn(fn3, '1', 2, '3');
  const e4 = spawn(fn4, '1', 2, '3', 4);
  const e5 = spawn(fn5, '1', 2, '3', 4, '5');
  const e6 = spawn(fn6, '1', 2, '3', 4, '5', 6);
  const eClass = spawn(fn1, '1');
  const eGen = spawn(g1, '1');

  // Args Test
  (e0.FORK.args: []);
  (e1.FORK.args: [string]);
  (e2.FORK.args: [string, number]);
  (e3.FORK.args: [string, number, string]);
  (e4.FORK.args: [string, number, string, number]);
  (e5.FORK.args: [string, number, string, number, string]);
  (e6.FORK.args: [string, number, string, number, string, number]);

  // Fn Test
  (e1.FORK.fn: typeof fn1);
  (e2.FORK.fn: typeof fn2);
  (e3.FORK.fn: typeof fn3);
  (e4.FORK.fn: typeof fn4);
  (e5.FORK.fn: typeof fn5);
  (e6.FORK.fn: typeof fn6);
  (eGen.FORK.fn: typeof g1);

  // $ExpectError: wrong fn
  (e6.FORK.fn: typeof fn1);
}

function contextSpawnTest() {
  const e0 = spawn([context, fn0]);
  const e1 = spawn([context, fn1], '1');
  const e2 = spawn([context, fn2], '1', 2);
  const e3 = spawn([context, fn3], '1', 2, '3');
  const e4 = spawn([context, fn4], '1', 2, '3', 4);
  const e5 = spawn([context, fn5], '1', 2, '3', 4, '5');
  const e6 = spawn([context, fn6], '1', 2, '3', 4, '5', 6);
  const eClass = spawn([context2, fn1], '1');
  const eGen = spawn([context, g1], '1');

  // Args Test
  (e0.FORK.args: []);
  (e1.FORK.args: [string]);
  (e2.FORK.args: [string, number]);
  (e3.FORK.args: [string, number, string]);
  (e4.FORK.args: [string, number, string, number]);
  (e5.FORK.args: [string, number, string, number, string]);
  (e6.FORK.args: [string, number, string, number, string, number]);

  // Context Test
  (e1.FORK.context: typeof context);
  (e2.FORK.context: typeof context);
  (e3.FORK.context: typeof context);
  (e4.FORK.context: typeof context);
  (e5.FORK.context: typeof context);
  (e6.FORK.context: typeof context);
  (eGen.FORK.context: typeof context);

  // Fn Test
  (e1.FORK.fn: typeof fn1);
  (e2.FORK.fn: typeof fn2);
  (e3.FORK.fn: typeof fn3);
  (e4.FORK.fn: typeof fn4);
  (e5.FORK.fn: typeof fn5);
  (e6.FORK.fn: typeof fn6);
  (eGen.FORK.fn: typeof g1);

  // $ExpectError: wrong fn
  (e6.FORK.fn: typeof fn1);
}

function joinTest() {
  const task = utils.createMockTask();

  const j = join(task);

  // $ExpectError: This is not an actual Task object
  (j.JOIN.call: Function);
}

function cancelTest() {
  const task = utils.createMockTask();

  const c = cancel(task);

  // $ExpectError: This is not an actual Task object
  (c.CANCEL.call: Function);
}

function raceTest() {
  const e1 = take('FOO');
  const e2 = put({ type: 'BAR' });

  const r = race({
    foo: e1,
    bar: e2,
  });

  // Should recognize the RACE data structure
  (r.RACE.foo: TakeEffect<string>);
  (r.RACE.bar: PutEffect<{ type: string }>);

  // $ExpectError: ReduxEffects have a hidden symbol
  race({ fail: { PUT: 'hi' }});
}

function cancelledTest() {
  const c = cancelled();

  (c.CANCELLED: Object);
}

function flushTest() {
  const f = flush(myChannel);
  (f.FLUSH: $npm$ReduxSaga$Channel);

  // $ExpectError: Too less arguments
  flush();

  // $ExpectError: Only accept Channel
  flush(42);
}

function selectTest() {
  const s0 = (state: Object): Object => ({});
  const s1 = (state: Object, a: string) => ({});
  const s2 = (state: Object, a: string, b: number) => ({});
  const s3 = (state: Object, a: string, b: number, c: string) => ({});
  const s4 = (state: Object, a: string, b: number, c: string, d: number) => ({});
  const s5 = (state: Object, a: string, b: number, c: string, d: number, e: string) => ({});
  const s6 = (state: Object, a: string, b: number, c: string, d: number, e: string, f: number) => ({});
  const sSpread = (state: Object, ...args: Array<string>): Object => ({});

  const e0 = select(s0);
  const e1 = select(s1, '1');
  const e2 = select(s2, '1', 2);
  const e3 = select(s3, '1', 2, '3');
  const e4 = select(s4, '1', 2, '3', 4);
  const e5 = select(s5, '1', 2, '3', 4, '5');
  const e6 = select(s6, '1', 2, '3', 4, '5', 6);

  // Args test
  (e0.SELECT.args: []);
  (e1.SELECT.args: [string]);
  (e2.SELECT.args: [string, number]);
  (e3.SELECT.args: [string, number, string]);
  (e4.SELECT.args: [string, number, string, number]);
  (e5.SELECT.args: [string, number, string, number, string]);
  (e6.SELECT.args: [string, number, string, number, string, number]);

  // $ExpectError: second args is not a boolean
  (e3.SELECT.args: [string, boolean, string]);

  // Fn check
  (e0.SELECT.selector: typeof s0);
  (e1.SELECT.selector: typeof s1);
  (e2.SELECT.selector: typeof s2);
  (e3.SELECT.selector: typeof s3);
  (e4.SELECT.selector: typeof s4);
  (e5.SELECT.selector: typeof s5);
  (e6.SELECT.selector: typeof s6);

  // $ExpectError: args.a should actually be a string
  (e1.SELECT.selector: (state: Object, a: number) => Object);
}

function takeEveryTest() {
  const getStuff = (state: Object): Object => ({a: ''})

  function* saga0(): Generator<IOEffect, string, string> {
    let foo = yield fork((): Promise<number> => Promise.resolve(1));
    return '';
  }

  function* saga1(a: string): Generator<IOEffect,*,*>  {
    let foo = yield select(getStuff);
    return '';
  }

  function* faultySaga(a: string): Generator<string,*,*> {
    yield 'test';
  }

  // $ExpectError: yield should be a yield*
  function* faulySagaOfSaga(): Generator<IOEffect,*,*> {
    yield takeEvery('Foo', saga0);
  }

  // This saga should work, since it should yield effects as well
  function* nestedSaga(a: string): Generator<IOEffect,*,*> {
    yield* saga1(a);
  }

  function* sagaOfSaga(): Generator<IOEffect,*,*> {
    yield* takeEvery('Foo', saga0);
  }

  const e0 = takeEvery('FOO', saga0);
  const e1 = takeEvery('FOO', saga1, '1');

  (e0.name: string);

  // $ExpectError: faultySaga yields strings, which is not allowed
  takeEvery('FOO', faultySaga, '1');

  takeEvery('FOO', nestedSaga, '1');
}

function takeLatestTest() {
  const getStuff = (state: Object): Object => ({a: ''})

  function* saga0(): Generator<IOEffect, string, string> {
    let foo = yield fork((): Promise<number> => Promise.resolve(1));
    return '';
  }

  function* saga1(a: string): Generator<IOEffect,*,*>  {
    let foo = yield select(getStuff);
    return '';
  }

  function* faultySaga(a: string): Generator<string,*,*> {
    yield 'test';
  }

  // $ExpectError: yield should be a yield*
  function* faulySagaOfSaga(): Generator<IOEffect,*,*> {
    yield takeEvery('Foo', saga0);
  }

  // This saga should work, since it should yield effects as well
  function* nestedSaga(a: string): Generator<IOEffect,*,*> {
    yield* saga1(a);
  }

  function* sagaOfSaga(): Generator<IOEffect,*,*> {
    yield* takeLatest('Foo', saga0);
  }

  function* yieldForkSaga(): Generator<IOEffect,*,*> {
    yield fork(takeLatest, 'Foo', saga0);
  }

  const e0 = takeLatest('FOO', saga0);
  const e1 = takeLatest('FOO', saga1, '1');

  (e0.name: string);

  // $ExpectError: faultySaga yields strings, which is not allowed
  takeLatest('FOO', faultySaga, '1');

  takeLatest('FOO', nestedSaga, '1');
}

function throttleTest() {
  function* saga0(): Generator<IOEffect, string, boolean> {
    let foo = yield fork((): Promise<number> => Promise.resolve(1));
    return '';
  }

  const getStuff = (state: Object): Object => ({a: ''})
  function* saga1(a: string): Generator<IOEffect, string , Object> {
    let foo = yield select(getStuff);
    return '';
  }

  const aFunc = (): number => 1;
  function* saga2(a: string, b: number): Generator<IOEffect, string , number> {
    let foo = yield call(aFunc);
    return '';
  }

  function* faultySaga(a: string): Generator<string,*,*> {
    yield 'test';
  }

  const t0 = throttle(500, 'FOO', saga0);
  const t1 = throttle(500, 'FOO', saga1, '1');
  const t2 = throttle(500, ['FOO', 'BAR'], saga2, '1', 2);

  (t0.name: string);

  // $ExpectError: faultySaga yields strings, which is not allowed
  throttle(500, 'FOO', faultySaga, '1');

  // $ExpectError: delay parameter should be a number
  throttle('one', 'FOO', saga1, '1');
}

function runSagaTest() {
  const iter = function* f() {}();

  (runSaga(iter): Task);
  (runSaga(iter, {}): Task);

  const cb = (input) => {};
  const subscribe = (cb) => {
    cb('');
    return () => {}; // unsubscribe fn
  };

  const invalidSubscribe = (cb) => {
    // $ExpectError: cb is a function
    cb + 2;

    // $ExpectError: return needs to be a subscribe fn
    return '';
  }

  // $ExpectError: error level is a string enum
  const invalidLogger = (level: number) => {};


  const dispatch = (output) => {};
  const getState = () => ({});
  const logger = (level) => {};

  // Should be fine
  runSaga(iter, { subscribe });
  runSaga(iter, { dispatch });
  runSaga(iter, { getState });
  runSaga(iter, { sagaMonitor });
  runSaga(iter, { logger });

  // Invalid instantiations
  runSaga(iter, { logger: invalidLogger });
  runSaga(iter, { subscribe: invalidSubscribe });
}

function createSagaMiddlewareTest() {
  const middleware = createSagaMiddleware();

  function* g0(): Generator<*, *, *> {};
  function* g1(a: string): Generator<*, *, *> {};
  function* g2(a: string, b: number): Generator<*, *, *> {};
  function* g3(a: string, b: number, c: string): Generator<*, *, *> {};
  function* g4(a: string, b: number, c: string, d: number): Generator<*, *, *> {};
  function* g5(a: string, b: number, c: string, d: number, e: string): Generator<*, *, *> {};
  function* g6(a: string, b: number, c: string, d: number, e: string, f: number): Generator<*, *, *> {};
  function* gSpread(...args: Array<string>): Generator<*, *, *> {};
  function* gList(): Generator<*, *, *> { yield []; };

  middleware.run(g0);
  middleware.run(g1, '1');
  middleware.run(g2, '1', 2);
  middleware.run(g3, '1', 2, '3');
  middleware.run(g4, '1', 2, '3', 4);
  middleware.run(g5, '1', 2, '3', 4, '5');
  middleware.run(g6, '1', 2, '3', 4, '5', 6);
  middleware.run(gList);

  // $ExpectError: Too few arguments
  middleware.run(g6, '1', 2, '3');

  // $ExpectError: Boolean argument should be string
  middleware.run(g3, true, 2, '3');

  (middleware.run(g0): Task);

  createSagaMiddleware({ sagaMonitor });

  // $ExpectError: sagaMonitor parameter should be SagaMonitor
  createSagaMiddleware({ sagaMonitor: 'monitor' });

  const logger = (level) => {};
  createSagaMiddleware({ logger });

  // $ExpectError: logger parameter should be Logger
  createSagaMiddleware({ logger: 'logger' });

  const error = () => {};
  createSagaMiddleware({ onError: error });

  // $ExpectError: onError parameter should be Logger
  createSagaMiddleware({ onError: 'error' });
}
