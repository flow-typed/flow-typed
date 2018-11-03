// @flow
import { describe, it } from "flow-typed-test";
import {
  runSaga,
  stdChannel,
  type Saga,
  type Task,
  type SagaMonitor,
  type MulticastChannel
} from "redux-saga";

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
  function* s5(a: string, b: number, c: string, d: number, e: string): Saga<number> {
    return 1;
  }
  function* s6(a: string, b: number, c: string, d: number, e: string, f: number): Saga<number> {
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

  describe("test arguments", () => {
    it("must passes when used properly", () => {
      (runSaga({}, s0): Task<number>);
      (runSaga({}, s1, "1"): Task<number>);
      (runSaga({}, s2, "1", 2): Task<number>);
      (runSaga({}, s3, "1", 2, "3"): Task<number>);
      (runSaga({}, s4, "1", 2, "3", 4): Task<number>);
      (runSaga({}, s5, "1", 2, "3", 4, "5"): Task<number>);
      (runSaga({}, s6, "1", 2, "3", 4, "5", 6): Task<number>);
      (runSaga({}, s7, "1", 2, "3", 4, "5", 6, "7"): Task<number>);
      (runSaga({}, s8, "1", 2, "3", 4, "5", 6, "7", 8): Task<number>);
    });

    it("must raises an error when passed invalid arguments", () => {
      // $ExpectError: too few args
      (runSaga({}, s6, "1", 2): Task<number>);

      // $ExpectError: wrong argument type
      (runSaga({}, s1, 1): Task<number>);
    });

    it("must raises an error", () => {
      // $ExpectError: wrong return type
      (runSaga({}, s1, 1): Task<string>);
    });
  });

  describe("runSaga(RunSagaOptions)", () => {
    const channel: MulticastChannel<number> = stdChannel();
    const sagaMonitor: SagaMonitor = {
      effectTriggered: _ => {},
      effectResolved: (_, _2) => {},
      effectRejected: (_, _2) => {},
      effectCancelled: _ => {},
      actionDispatched: _ => {}
    };

    const dispatch = output => {};
    const getState = () => ({});
    const logger = level => {};

    runSaga({ dispatch }, s0);
    runSaga({ getState }, s0);
    runSaga({ sagaMonitor }, s0);
    runSaga({ logger }, s0);

    // $ExpectError: error level is a string enum
    runSaga({ logger: (level: number) => {} }, s0);

    runSaga({ channel }, s1, "");
  });
});
