// @flow
import { describe, it } from "flow-typed-test";
import { call } from "redux-saga/effects";

describe("call() effect with async functions and context", () => {
  describe("call([context, fn], ...args)", () => {
    const context = { some: "contextObject" };
    const fn0 = (): Promise<number> => Promise.resolve(1);
    const fn1 = (a: string): Promise<number> => Promise.resolve(1);
    const fn2 = (a: string, b: number): Promise<number> => Promise.resolve(1);
    const fn3 = (a: string, b: number, c: string): Promise<number> => Promise.resolve(1);
    const fn4 = (a: string, b: number, c: string, d: number): Promise<number> => Promise.resolve(1);
    const fn5 = (a: string, b: number, c: string, d: number, e: string): Promise<number> =>
      Promise.resolve(1);
    const fn6 = (
      a: string,
      b: number,
      c: string,
      d: number,
      e: string,
      f: number
    ): Promise<number> => Promise.resolve(1);

    const c0 = call([context, fn0]);
    const c1 = call([context, fn1], "1");
    const c2 = call([context, fn2], "1", 2);
    const c3 = call([context, fn3], "1", 2, "3");
    const c4 = call([context, fn4], "1", 2, "3", 4);
    const c5 = call([context, fn5], "1", 2, "3", 4, "5");
    const c6 = call([context, fn6], "1", 2, "3", 4, "5", 6);

    describe("context tests", () => {
      it("must have context", () => {
        (c1.payload.context: typeof context);
        (c2.payload.context: typeof context);
        (c3.payload.context: typeof context);
        (c4.payload.context: typeof context);
        (c5.payload.context: typeof context);
        (c6.payload.context: typeof context);
      });

      it("must raises an error when lead context to null", () => {
        // $ExpectError
        (c1.payload.context: null);
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
        call([context, fn6], "1", 2, "3", 4);
      });

      it("must raises an error when passed wrong argument types", () => {
        // $ExpectError: wrong argument types
        call([context, fn1], 1);
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

  describe("call([context, fnName], ...args)", () => {
    const context0 = {
      someFn0(): Promise<number> {
        return Promise.resolve(1);
      }
    };
    const context1 = {
      someFn1(a: string): Promise<number> {
        return Promise.resolve(1);
      }
    };
    const context2 = {
      someFn2(a: string, b: number): Promise<number> {
        return Promise.resolve(1);
      }
    };
    const context3 = {
      someFn3(a: string, b: number, c: string): Promise<number> {
        return Promise.resolve(1);
      }
    };
    const context4 = {
      someFn4(a: string, b: number, c: string, d: number): Promise<number> {
        return Promise.resolve(1);
      }
    };
    const context5 = {
      someFn5(a: string, b: number, c: string, d: number, e: string): Promise<number> {
        return Promise.resolve(1);
      }
    };
    const context6 = {
      someFn6(a: string, b: number, c: string, d: number, e: string, f: number): Promise<number> {
        return Promise.resolve(1);
      }
    };

    const c0 = call([context0, "someFn0"]);
    const c1 = call([context1, "someFn1"], "1");
    const c2 = call([context2, "someFn2"], "1", 2);
    const c3 = call([context3, "someFn3"], "1", 2, "3");
    const c4 = call([context4, "someFn4"], "1", 2, "3", 4);
    const c5 = call([context5, "someFn5"], "1", 2, "3", 4, "5");
    const c6 = call([context6, "someFn6"], "1", 2, "3", 4, "5", 6);

    describe("context tests", () => {
      it("must have context", () => {
        (c1.payload.context: typeof context1);
        (c2.payload.context: typeof context2);
        (c3.payload.context: typeof context3);
        (c4.payload.context: typeof context4);
        (c5.payload.context: typeof context5);
        (c6.payload.context: typeof context6);
      });

      it("must raises an error when lead context to null", () => {
        // $ExpectError
        (c1.payload.context: null);
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
        call([context, fn6], "1", 2, "3", 4);
      });

      it("must raises an error when passed wrong argument types", () => {
        // $ExpectError: wrong argument types
        call([context, fn1], 1);
      });
    });

    describe("function test", () => {
      it("must passes when used properly", () => {
        (c1.payload.fn: $PropertyType<typeof context1, "someFn1">);
        (c2.payload.fn: $PropertyType<typeof context2, "someFn2">);
        (c3.payload.fn: $PropertyType<typeof context3, "someFn3">);
        (c4.payload.fn: $PropertyType<typeof context4, "someFn4">);
        (c5.payload.fn: $PropertyType<typeof context5, "someFn5">);
        (c6.payload.fn: $PropertyType<typeof context6, "someFn6">);
      });

      it("should actually fail, but apparently more parameter are fine", () => {
        (c1.payload.fn: $PropertyType<typeof context6, "someFn6">);
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
        (c6.payload.fn: $PropertyType<typeof context1, "someFn1">);
      });
    });
  });

  describe("call({context, fn}, ...args)", () => {
    const context = { some: "contextObject" };

    const fn0 = (): Promise<number> => Promise.resolve(1);
    const fn1 = (a: string): Promise<number> => Promise.resolve(1);
    const fn2 = (a: string, b: number): Promise<number> => Promise.resolve(1);
    const fn3 = (a: string, b: number, c: string): Promise<number> => Promise.resolve(1);
    const fn4 = (a: string, b: number, c: string, d: number): Promise<number> => Promise.resolve(1);
    const fn5 = (a: string, b: number, c: string, d: number, e: string): Promise<number> =>
      Promise.resolve(1);
    const fn6 = (
      a: string,
      b: number,
      c: string,
      d: number,
      e: string,
      f: number
    ): Promise<number> => Promise.resolve(1);

    const c0 = call({ context, fn: fn0 });
    const c1 = call({ context, fn: fn1 }, "1");
    const c2 = call({ context, fn: fn2 }, "1", 2);
    const c3 = call({ context, fn: fn3 }, "1", 2, "3");
    const c4 = call({ context, fn: fn4 }, "1", 2, "3", 4);
    const c5 = call({ context, fn: fn5 }, "1", 2, "3", 4, "5");
    const c6 = call({ context, fn: fn6 }, "1", 2, "3", 4, "5", 6);

    describe("context tests", () => {
      it("must have context", () => {
        (c1.payload.context: typeof context);
        (c2.payload.context: typeof context);
        (c3.payload.context: typeof context);
        (c4.payload.context: typeof context);
        (c5.payload.context: typeof context);
        (c6.payload.context: typeof context);
      });

      it("must raises an error when lead context to null", () => {
        // $ExpectError
        (c1.payload.context: null);
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
        call({ context, fn: fn6 }, "1", 2, "3", 4);
      });

      it("must raises an error when passed wrong argument types", () => {
        // $ExpectError: wrong argument types
        call({ context, fn: fn1 }, 1);
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
});
