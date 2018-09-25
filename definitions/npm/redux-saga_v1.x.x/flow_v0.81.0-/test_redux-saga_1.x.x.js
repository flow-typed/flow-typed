// @flow
import {describe,it } from 'flow-typed-test';
import createSagaMiddleware, {
  buffers,
  CANCEL,
  channel,
  detach,
  effects,
  END,
  eventChannel,
  multicastChannel,
  runSaga,
  stdChannel,
  utils
} from "redux-saga";
import {
  actionChannel,
  all,
  apply,
  call,
  cancel,
  cancelled,
  cps,
  debounce,
  delay,
  flush,
  getContext,
  join,
  race,
  retry,
  select,
  setContext,
  takeEvery,
  throttle
} from "redux-saga/effects";

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



describe('call() effect', () => {
  const c0 = call(fn0);
  const c1 = call(fn1, "1");
  const c2 = call(fn2, "1", 2);
  const c3 = call(fn3, "1", 2, "3");
  const c4 = call(fn4, "1", 2, "3", 4);
  const c5 = call(fn5, "1", 2, "3", 4, "5");
  const c6 = call(fn6, "1", 2, "3", 4, "5", 6);


  it('type must be equal "CALL"', () => {
    (c0.type: 'CALL');
  });

  it('returned object must be read only', () => {
    // $ExpectError: read-only  property
    c0.type = 'anyType';
    c0.payload = {};
  });

  it('returned object must be exact', () => {
    // $ExpectError: exact type
    c0.abc = 666;
  });

  it('raises error when passed too few arguments', () => {
    // $ExpectError: too few arguments
    call(fn6, "1", 2, "3", 4);
  });

  it('raises error when passed wrong argument types', () => {
    // $ExpectError: wrong argument types
    call(fn1, 1);
  });


  const cSpread = call(fnSpread, 1, 2, 3, 1);


  // Read only test


  
  // Args tests
  (c0.payload.args: []);
  (c1.payload.args: [string]);
  (c2.payload.args: [string, number]);
  (c3.payload.args: [string, number, string]);
  (c4.payload.args: [string, number, string, number]);
  (c5.payload.args: [string, number, string, number, string]);
  (c6.payload.args: [string, number, string, number, string, number]);

  // $ExpectError: First parameter is a string, not a number
  (c1.payload.args: [number]);

  // Fn tests
  (c1.payload.fn: typeof fn1);
  (c2.payload.fn: typeof fn2);
  (c3.payload.fn: typeof fn3);
  (c4.payload.fn: typeof fn4);
  (c5.payload.fn: typeof fn5);
  (c6.payload.fn: typeof fn6);

  // NOTE: This should actually fail, but apparently more parameter are fine..
  (c1.payload.fn: typeof fn6);

  // $ExpectError: fn returns a Promise<string> not Promise<number>
  (c1.payload.fn: (a: boolean) => Promise<number>);

  // $ExpectError: 'a' is actually of type string
  (c4.payload.fn: (a: number, b: number) => Promise<string>);

  // $ExpectError: Less parameter are noticed
  (c6.payload.fn: typeof fn1);

  // Context tests
  (c1.payload.context: null);
  (c2.payload.context: null);
  (c3.payload.context: null);
  (c4.payload.context: null);
  (c5.payload.context: null);
  (c6.payload.context: null);

  // $ExpectError
  (c1.payload.context: Object);
});
