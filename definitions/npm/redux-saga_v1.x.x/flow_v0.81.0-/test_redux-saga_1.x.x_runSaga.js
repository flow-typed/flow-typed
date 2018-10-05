// @flow
import { describe, it } from "flow-typed-test";
import { runSaga, type Saga, type Task } from "redux-saga";

describe("runSaga", () => {
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
});
