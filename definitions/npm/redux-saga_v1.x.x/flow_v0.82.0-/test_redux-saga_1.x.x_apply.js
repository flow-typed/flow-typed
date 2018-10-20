// @flow
import { describe, it } from "flow-typed-test";
import { apply } from "redux-saga/effects";

describe("apply(context, fn, [args])", () => {
  const context = { some: "contextObject" };

  const fn0 = (): Promise<number> => Promise.resolve(1);
  const fn1 = (a: string): Promise<number> => Promise.resolve(1);
  const fn2 = (a: string, b: number): Promise<number> => Promise.resolve(1);
  const fn3 = (a: string, b: number, c: string): Promise<number> => Promise.resolve(1);
  const fn4 = (a: string, b: number, c: string, d: number): Promise<number> => Promise.resolve(1);
  const fn5 = (a: string, b: number, c: string, d: number, e: string): Promise<number> =>
    Promise.resolve(1);
  const fn6 = (a: string, b: number, c: string, d: number, e: string, f: number): Promise<number> =>
    Promise.resolve(1);
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

  const c0 = apply(context, fn0);
  const c1 = apply(context, fn1, "1");
  const c2 = apply(context, fn2, "1", 2);
  const c3 = apply(context, fn3, "1", 2, "3");
  const c4 = apply(context, fn4, "1", 2, "3", 4);
  const c5 = apply(context, fn5, "1", 2, "3", 4, "5");
  const c6 = apply(context, fn6, "1", 2, "3", 4, "5", 6);
  const c7 = apply(context, fn6, "1", 2, "3", 4, "5", 6, "7");
  const c8 = apply(context, fn6, "1", 2, "3", 4, "5", 6, "7", 8);

  describe("arguments tests", () => {
    it("must passes when used properly", () => {
      (c0.payload.args: []);
      (c1.payload.args: [string]);
      (c2.payload.args: [string, number]);
      (c3.payload.args: [string, number, string]);
      (c4.payload.args: [string, number, string, number]);
      (c5.payload.args: [string, number, string, number, string]);
      (c6.payload.args: [string, number, string, number, string, number]);
      (c7.payload.args: [string, number, string, number, string, number, string]);
      (c8.payload.args: [string, number, string, number, string, number, string, number]);
    });

    it("must raises an error", () => {
      // $ExpectError: Too few arguments
      apply(context, fn6, "1", 2, "3", 4);

      // $ExpectError: Wrong argument types
      apply(context, fn1, 1);

      // $ExpectError: First parameter is a string, not a number
      (c1.payload.args: [number]);
    });
  });

  describe("function test", () => {
    it("must passes when used properly", () => {
      (c1.payload.fn: typeof fn1);
      (c2.payload.fn: typeof fn2);
      (c3.payload.fn: typeof fn3);
      (c4.payload.fn: typeof fn4);
      (c5.payload.fn: typeof fn5);
      (c6.payload.fn: typeof fn6);
      (c7.payload.fn: typeof fn7);
      (c8.payload.fn: typeof fn8);
    });

    it("must raises an error", () => {
      // NOTE: This should actually fail, but apparently more parameter are fine..
      (c1.payload.fn: typeof fn6);

      // $ExpectError: fn returns a Promise<string> not Promise<number>
      (c1.payload.fn: (a: boolean) => Promise<number>);

      // $ExpectError: 'a' is actually of type string
      (c4.payload.fn: (a: number, b: number) => Promise<string>);

      // $ExpectError: Less parameter are noticed
      (c6.payload.fn: typeof fn1);
    });
  });

  describe("context tests", () => {
    it("must haven't context", () => {
      (c1.payload.context: typeof context);
      (c2.payload.context: typeof context);
      (c3.payload.context: typeof context);
      (c4.payload.context: typeof context);
      (c5.payload.context: typeof context);
      (c6.payload.context: typeof context);
      (c7.payload.context: typeof context);
      (c8.payload.context: typeof context);
    });

    it("must raises an error when lead context to null", () => {
      // $ExpectError
      (c1.payload.context: null);
    });
  });
});
