// @flow
import { describe, it } from "flow-typed-test";
import { retry } from "redux-saga/effects";

describe("retry effect", () => {
  describe("structure", () => {
    const c = retry(0, 0, () => {});

    it('type must be equal "CALL"', () => {
      (c.type: "CALL");
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

  describe("retry(maxTries, delay, fn, ...args)", () => {
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
    function nfn6(a: string, b: number, c: boolean, d: string, e: number, f: boolean): number {
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

    const [maxTries, delayMs] = [0, 0];

    const c0 = retry(maxTries, delayMs, nfn0);
    const c1 = retry(maxTries, delayMs, nfn1, "1");
    const c2 = retry(maxTries, delayMs, nfn2, "1", 2);
    const c3 = retry(maxTries, delayMs, nfn3, "1", 2, true);
    const c4 = retry(maxTries, delayMs, nfn4, "1", 2, true, "4");
    const c5 = retry(maxTries, delayMs, nfn5, "1", 2, true, "4", 5);
    const c6 = retry(maxTries, delayMs, nfn6, "1", 2, true, "4", 5, false);
    const c7 = retry(maxTries, delayMs, nfn6, "1", 2, true, "4", 5, false, "7");
    const c8 = retry(maxTries, delayMs, nfn6, "1", 2, true, "4", 5, false, "8", 8);

    describe("arguments tests", () => {
      it("must passes when used properly", () => {
        (c0.payload.args: [number, number, typeof nfn0]);
        (c1.payload.args: [number, number, typeof nfn1, string]);
        (c2.payload.args: [number, number, typeof nfn2, string, number]);
        (c3.payload.args: [number, number, typeof nfn3, string, number, boolean]);
        (c4.payload.args: [number, number, typeof nfn4, string, number, boolean, string]);
        (c5.payload.args: [number, number, typeof nfn5, string, number, boolean, string, number]);
        (c6.payload.args: [
          number,
          number,
          typeof nfn6,
          string,
          number,
          boolean,
          string,
          number,
          boolean
        ]);
        (c7.payload.args: [
          number,
          number,
          typeof nfn7,
          string,
          number,
          boolean,
          string,
          number,
          boolean,
          string
        ]);
        (c8.payload.args: [
          number,
          number,
          typeof nfn8,
          string,
          number,
          boolean,
          string,
          number,
          boolean,
          string,
          number
        ]);
      });

      it("must raises an error when passed number but need number", () => {
        // $ExpectError: First parameter is a number, not a string
        (c1.payload.args: [string]);
      });

      it("must raises an error when passed too few arguments", () => {
        // $ExpectError: Too few arguments
        retry(maxTries, delayMs, nfn6, "1", 2, true, "4");
      });

      it("must raises an error when passed wrong argument types", () => {
        // $ExpectError: Wrong argument types
        retry(maxTries, delayMs, nfn1, 1);
      });
    });

    it("must passes when used properly", () => {
      (c1.payload.fn: Function);
      (c2.payload.fn: Function);
      (c3.payload.fn: Function);
      (c4.payload.fn: Function);
      (c5.payload.fn: Function);
      (c6.payload.fn: Function);
      (c7.payload.fn: Function);
      (c8.payload.fn: Function);
    });

    it("must haven't context", () => {
      (c1.payload.context: null);
      (c2.payload.context: null);
      (c3.payload.context: null);
      (c4.payload.context: null);
      (c5.payload.context: null);
      (c6.payload.context: null);
      (c7.payload.context: null);
      (c8.payload.context: null);
    });
  });
});
