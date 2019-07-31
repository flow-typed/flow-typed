// @flow
import { describe, it } from "flow-typed-test";
import { call } from "redux-saga/effects";

describe("call() effect with async functions and without context", () => {
  const fn0 = (): Promise<number> => Promise.resolve(1);
  const fn1 = (a: string): Promise<number> => Promise.resolve(1);
  const fn2 = (a: string, b: number): Promise<number> => Promise.resolve(1);
  const fn3 = (a: string, b: number, c: string): Promise<number> => Promise.resolve(1);
  const fn4 = (a: string, b: number, c: string, d: number): Promise<number> => Promise.resolve(1);
  const fn5 = (a: string, b: number, c: string, d: number, e: string): Promise<number> =>
    Promise.resolve(1);
  const fn6 = (a: string, b: number, c: string, d: number, e: string, f: number): Promise<number> =>
    Promise.resolve(1);

  const c0 = call(fn0);
  const c1 = call(fn1, "1");
  const c2 = call(fn2, "1", 2);
  const c3 = call(fn3, "1", 2, "3");
  const c4 = call(fn4, "1", 2, "3", 4);
  const c5 = call(fn5, "1", 2, "3", 4, "5");
  const c6 = call(fn6, "1", 2, "3", 4, "5", 6);

  describe("context tests", () => {
    it("must haven't context", () => {
      (c1.payload.context: null);
      (c2.payload.context: null);
      (c3.payload.context: null);
      (c4.payload.context: null);
      (c5.payload.context: null);
      (c6.payload.context: null);
    });

    it("must raises an error when lead context to Object", () => {
      // $ExpectError
      (c1.payload.context: {...});
    });
  });

  describe("arguments tests", () => {
    it("must passes when used properly", () => {
      (c0.payload.args: []);
      (c1.payload.args: [string]);
      (c2.payload.args: [string, number]);
      (c3.payload.args: [string, number, string]);
      (c4.payload.args: [string, number, string, number]);
      (c5.payload.args: [string, number, string, number, string]);
      (c6.payload.args: [string, number, string, number, string, number]);
    });

    it("must raises an error when passed number but need string", () => {
      // $ExpectError: First parameter is a string, not a number
      (c1.payload.args: [number]);
    });

    it("must raises an error when passed too few arguments", () => {
      // $ExpectError: too few arguments
      call(fn6, "1", 2, "3", 4);
    });

    it("must raises an error when passed wrong argument types", () => {
      // $ExpectError: wrong argument types
      call(fn1, 1);
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
    });

    it("should actually fail, but apparently more parameter are fine", () => {
      (c1.payload.fn: typeof fn6);
    });

    it("must raises an error when Function return no Promise< number>", () => {
      // $ExpectError: fn returns a Promise<string> not Promise<number>
      (c1.payload.fn: (a: boolean) => Promise<number>);
    });

    it(`must raises an error when "a" argument isn't string`, () => {
      // $ExpectError: 'a' is actually of type string
      (c4.payload.fn: (a: number, b: number) => Promise<string>);
    });

    it("must raises an error when less parameter are noticed", () => {
      // $ExpectError: Less parameter are noticed
      (c6.payload.fn: typeof fn1);
    });
  });
});
