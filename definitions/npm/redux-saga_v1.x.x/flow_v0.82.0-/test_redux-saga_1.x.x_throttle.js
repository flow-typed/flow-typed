// @flow
import { describe, it } from "flow-typed-test";
import type { Pattern } from "redux-saga";
import { throttle } from "redux-saga/effects";

describe("throttle effect", () => {
  describe("structure", () => {
    const c = throttle(0, "pattern", () => {});

    it('type must be equal "FORK"', () => {
      (c.type: "FORK");
    });

    it("returned object must be read only", () => {
      // $ExpectError: read-only  property
      c.type = "anyType";
      // $ExpectError: read-only  property
      c.payload = {};
    });

    it("returned object must be exact", () => {
      // $ExpectError: exact type
      c.abc = 69;
    });
  });

  describe("throttle(ms, pattern, saga, ...args)", () => {
    function fn0(): number {
      return 1;
    }
    function fn1(a: string): number {
      return 1;
    }
    function fn2(a: string, b: number): number {
      return 1;
    }
    function fn3(a: string, b: number, c: boolean): number {
      return 1;
    }
    function fn4(a: string, b: number, c: boolean, d: string): number {
      return 1;
    }
    function fn5(a: string, b: number, c: boolean, d: string, e: number): number {
      return 1;
    }
    function fn6(a: string, b: number, c: boolean, d: string, e: number, f: boolean): number {
      return 1;
    }

    const timeMs: number = 0;
    const pattern: Pattern = "ACTION_NAME";

    const c0 = throttle(timeMs, pattern, fn0);
    const c1 = throttle(timeMs, pattern, fn1, "1");
    const c2 = throttle(timeMs, pattern, fn2, "1", 2);
    const c3 = throttle(timeMs, pattern, fn3, "1", 2, true);
    const c4 = throttle(timeMs, pattern, fn4, "1", 2, true, "4");
    const c5 = throttle(timeMs, pattern, fn5, "1", 2, true, "4", 5);
    const c6 = throttle(timeMs, pattern, fn6, "1", 2, true, "4", 5, false);

    describe("arguments tests", () => {
      it("must passes when used properly", () => {
        (c0.payload.args: [number, typeof pattern, typeof fn0]);
        (c1.payload.args: [number, typeof pattern, typeof fn1, string]);
        (c2.payload.args: [number, typeof pattern, typeof fn2, string, number]);
        (c3.payload.args: [number, typeof pattern, typeof fn3, string, number, boolean]);
        (c4.payload.args: [number, typeof pattern, typeof fn4, string, number, boolean, string]);
        (c5.payload.args: [
          number,
          typeof pattern,
          typeof fn5,
          string,
          number,
          boolean,
          string,
          number
        ]);
        (c6.payload.args: [
          number,
          typeof pattern,
          typeof fn6,
          string,
          number,
          boolean,
          string,
          number,
          boolean
        ]);
      });

      it("must raises an error when passed number but need number", () => {
        // $ExpectError: First parameter is a number, not a string
        (c1.payload.args: [string]);
      });

      it("must raises an error when passed too few arguments", () => {
        // $ExpectError: Too few arguments
        throttle(timeMs, pattern, fn6, "1", 2, true, "4");
      });

      it("must raises an error when passed wrong argument types", () => {
        // $ExpectError: Wrong argument types
        throttle(timeMs, pattern, fn1, 1);
      });
    });

    it("must passes when used properly", () => {
      (c1.payload.fn: Function);
      (c2.payload.fn: Function);
      (c3.payload.fn: Function);
      (c4.payload.fn: Function);
      (c5.payload.fn: Function);
      (c6.payload.fn: Function);
    });

    it("must haven't context", () => {
      (c1.payload.context: null);
      (c2.payload.context: null);
      (c3.payload.context: null);
      (c4.payload.context: null);
      (c5.payload.context: null);
      (c6.payload.context: null);
    });
  });
});
