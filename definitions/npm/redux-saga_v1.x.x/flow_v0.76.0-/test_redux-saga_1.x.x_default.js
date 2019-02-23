// @flow
import { describe, it } from "flow-typed-test";
import sagaMiddlewareFactory, {
  type Task,
  type Saga,
  type SagaMonitor,
  type EffectMiddleware,
  type SagaMiddleware
} from "redux-saga";

describe("sagaMiddlewareFactory", () => {
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

  it("must passes when don't pass an argument", () => {
    (sagaMiddlewareFactory<Symbol>(): SagaMiddleware<Symbol>);
  });

  describe("run()", () => {
    const middleware = sagaMiddlewareFactory();

    it("must passes when used properly", () => {
      middleware.run(s0);
      middleware.run(s1, "1");
      middleware.run(s2, "1", 2);
      middleware.run(s3, "1", 2, "3");
      middleware.run(s4, "1", 2, "3", 4);
      middleware.run(s5, "1", 2, "3", 4, "5");
      middleware.run(s6, "1", 2, "3", 4, "5", 6);
      middleware.run(s7, "1", 2, "3", 4, "5", 6, "7");
      middleware.run(s8, "1", 2, "3", 4, "5", 6, "7", 8);

      (middleware.run(s0): Task<number>);
    });

    it("must raises an error when argument type incompatible", () => {
      // $ExpectError: Boolean argument should be string
      middleware.run(s3, true, 2, "3");
    });

    it("must raises an error when returned Task type incompatible", () => {
      // $ExpectError: Number [1] is incompatible with string [2] in type argument
      (middleware.run(s0): Task<string>);
    });
  });

  describe("SagaMiddlewareOptions", () => {
    const sagaMonitor: SagaMonitor = {
      effectTriggered: _ => {},
      effectResolved: (_, _2) => {},
      effectRejected: (_, _2) => {},
      effectCancelled: _ => {},
      actionDispatched: _ => {}
    };

    const simpleEffectMiddleware: EffectMiddleware = (next: (e: mixed) => void) => effect => {};

    it("must passes when used properly", () => {
      const logger = level => {};
      const error = (e: Error) => {};
      const error2 = () => {};

      sagaMiddlewareFactory({ sagaMonitor });
      sagaMiddlewareFactory({ logger });
      sagaMiddlewareFactory({ onError: error });
      sagaMiddlewareFactory({ onError: error2 });
      sagaMiddlewareFactory<{ someContext: string }>({
        context: { someContext: "data" }
      });

      sagaMiddlewareFactory({ effectMiddlewares: [] });
      sagaMiddlewareFactory({ effectMiddlewares: [simpleEffectMiddleware] });
    });

    it("must raises an error when EffectMiddleware doesn't return function", () => {
      // $ExpectError
      sagaMiddlewareFactory({ effectMiddlewares: [() => {}] });
    });

    it("must raises an error when Context type incompatible", () => {
      type C = { test: number };

      sagaMiddlewareFactory<C>({ context: { test: 99 } });

      // $ExpectError: string [1] is incompatible with number
      sagaMiddlewareFactory<C>({}).setContext({ test: "string" });

      // $ExpectError: string [1] is incompatible with number
      sagaMiddlewareFactory<C>({ context: { test: "ops..." } });
    });

    it("must raises an error when passed an unrecognized field", () => {
      // $ExpectError: `anyFields` is missing in  `SagaMiddlewareOptions`
      sagaMiddlewareFactory({ anyFields: "ops" });
    });

    it("must raises an error when logger type invalid", () => {
      // $ExpectError: logger parameter should be Logger function
      sagaMiddlewareFactory({ logger: "logger" });
    });

    it("must raises an error when onError type invalid", () => {
      // $ExpectError: onError parameter should be function
      sagaMiddlewareFactory({ onError: "error" });

      // $ExpectError: Number incompatible Error
      sagaMiddlewareFactory({ onError: (error: number) => {} });
    });
  });
});
