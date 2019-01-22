// @flow
import { describe, it } from "flow-typed-test";
import type { Saga } from "redux-saga";
import { call } from "redux-saga/effects";

describe("call() effect with normal function and without context", () => {
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

  const c0 = call(s0);
  const c1 = call(s1, "1");
  const c2 = call(s2, "1", 2);
  const c3 = call(s3, "1", 2, "3");
  const c4 = call(s4, "1", 2, "3", 4);
  const c5 = call(s5, "1", 2, "3", 4, "5");
  const c6 = call(s6, "1", 2, "3", 4, "5", 6);
  const c7 = call(s7, "1", 2, "3", 4, "5", 6, "7");
  const c8 = call(s8, "1", 2, "3", 4, "5", 6, "7", 8);

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

    it("must raises an error when passed number but need string", () => {
      // $ExpectError: First parameter is a string, not a number
      (c1.payload.args: [number]);
    });

    it("must raises an error when passed too few arguments", () => {
      // $ExpectError: Too few arguments
      call(s6, "1", 2, "3", 4);
    });

    it("must raises an error when passed wrong argument types", () => {
      // $ExpectError: Wrong argument types
      call(s1, 1);
    });
  });

  describe("function test", () => {
    it("must passes when used properly", () => {
      (c1.payload.fn: typeof s1);
      (c2.payload.fn: typeof s2);
      (c3.payload.fn: typeof s3);
      (c4.payload.fn: typeof s4);
      (c5.payload.fn: typeof s5);
      (c6.payload.fn: typeof s6);
      (c7.payload.fn: typeof s7);
      (c8.payload.fn: typeof s8);
    });

    it("should actually fail, but apparently more parameter are fine", () => {
      (c1.payload.fn: typeof s6);
    });

    it("must raises an error when Function return not string", () => {
      // $ExpectError: fn returns a Saga<number> not Saga<string>
      (c1.payload.fn: (a: string) => Saga<string>);
    });

    it(`must raises an error when "a" argument isn't string`, () => {
      // $ExpectError: 'a' is actually of type string
      (c1.payload.fn: (a: boolean) => Saga<number>);

      // $ExpectError: 'a' is actually of type string
      (c4.payload.fn: (a: number, b: number) => Saga<number>);
    });

    it("must raises an error when less parameter are noticed", () => {
      // $ExpectError: Less parameter are noticed
      (c6.payload.fn: typeof s1);
    });
  });

  describe("context tests", () => {
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

    it("must raises an error when lead context to Object", () => {
      // $ExpectError
      (c1.payload.context: {});
    });
  });
});
