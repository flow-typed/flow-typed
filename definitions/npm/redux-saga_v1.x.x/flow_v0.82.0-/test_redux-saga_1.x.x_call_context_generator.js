// @flow
import { describe, it } from "flow-typed-test";
import type { Saga } from "redux-saga";
import { call } from "redux-saga/effects";

describe("call() effect with normal function and without context", () => {
  describe("call([context, fn], ...args)", () => {
    const context = { some: "contextObject" };

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

    const c0 = call([context, s0]);
    const c1 = call([context, s1], "1");
    const c2 = call([context, s2], "1", 2);
    const c3 = call([context, s3], "1", 2, "3");
    const c4 = call([context, s4], "1", 2, "3", 4);
    const c5 = call([context, s5], "1", 2, "3", 4, "5");
    const c6 = call([context, s6], "1", 2, "3", 4, "5", 6);
    const c7 = call([context, s7], "1", 2, "3", 4, "5", 6, "7");
    const c8 = call([context, s8], "1", 2, "3", 4, "5", 6, "7", 8);

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
        call([context, s6], "1", 2, "3", 4);
      });

      it("must raises an error when passed wrong argument types", () => {
        // $ExpectError: Wrong argument types
        call([context, s1], 1);
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
      it("must have context", () => {
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

  describe("call([context, fnName], ...args)", () => {
    const context = { some: "contextObject" };

    const context0 = {
      someFn0: function* s0(): Saga<number> {
        return 1;
      }
    };
    const context1 = {
      someFn1: function* s1(a: string): Saga<number> {
        return 1;
      }
    };
    const context2 = {
      someFn2: function* s2(a: string, b: number): Saga<number> {
        return 1;
      }
    };
    const context3 = {
      someFn3: function* s3(a: string, b: number, c: string): Saga<number> {
        return 1;
      }
    };
    const context4 = {
      someFn4: function* s4(a: string, b: number, c: string, d: number): Saga<number> {
        return 1;
      }
    };
    const context5 = {
      someFn5: function* s5(a: string, b: number, c: string, d: number, e: string): Saga<number> {
        return 1;
      }
    };
    const context6 = {
      someFn6: function* s6(
        a: string,
        b: number,
        c: string,
        d: number,
        e: string,
        f: number
      ): Saga<number> {
        return 1;
      }
    };
    const context7 = {
      someFn7: function* s7(
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
    };
    const context8 = {
      someFn8: function* s8(
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
    };

    const c0 = call([context0, "someFn0"]);
    const c1 = call([context1, "someFn1"], "1");
    const c2 = call([context2, "someFn2"], "1", 2);
    const c3 = call([context3, "someFn3"], "1", 2, "3");
    const c4 = call([context4, "someFn4"], "1", 2, "3", 4);
    const c5 = call([context5, "someFn5"], "1", 2, "3", 4, "5");
    const c6 = call([context6, "someFn6"], "1", 2, "3", 4, "5", 6);
    const c7 = call([context7, "someFn7"], "1", 2, "3", 4, "5", 6, "7");
    const c8 = call([context8, "someFn8"], "1", 2, "3", 4, "5", 6, "7", 8);

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
        call([context6, "someFn6"], "1", 2, "3", 4);
      });

      it("must raises an error when passed wrong argument types", () => {
        // $ExpectError: Wrong argument types
        call([context1, "someFn1"], 1);
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
        (c7.payload.fn: $PropertyType<typeof context7, "someFn7">);
        (c8.payload.fn: $PropertyType<typeof context8, "someFn8">);
      });

      it("should actually fail, but apparently more parameter are fine", () => {
        (c1.payload.fn: $PropertyType<typeof context6, "someFn6">);
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
        (c6.payload.fn: $PropertyType<typeof context1, "someFn1">);
      });
    });

    describe("context tests", () => {
      it("must have context", () => {
        (c1.payload.context: typeof context1);
        (c2.payload.context: typeof context2);
        (c3.payload.context: typeof context3);
        (c4.payload.context: typeof context4);
        (c5.payload.context: typeof context5);
        (c6.payload.context: typeof context6);
        (c7.payload.context: typeof context7);
        (c8.payload.context: typeof context8);
      });

      it("must raises an error when lead context to null", () => {
        // $ExpectError
        (c1.payload.context: null);
      });
    });
  });

  describe("call({context, fn}, ...args)", () => {
    const context = { some: "contextObject" };

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

    const c0 = call({ context, fn: s0 });
    const c1 = call({ context, fn: s1 }, "1");
    const c2 = call({ context, fn: s2 }, "1", 2);
    const c3 = call({ context, fn: s3 }, "1", 2, "3");
    const c4 = call({ context, fn: s4 }, "1", 2, "3", 4);
    const c5 = call({ context, fn: s5 }, "1", 2, "3", 4, "5");
    const c6 = call({ context, fn: s6 }, "1", 2, "3", 4, "5", 6);
    const c7 = call({ context, fn: s7 }, "1", 2, "3", 4, "5", 6, "7");
    const c8 = call({ context, fn: s8 }, "1", 2, "3", 4, "5", 6, "7", 8);

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
        call({ context, fn: s6 }, "1", 2, "3", 4);
      });

      it("must raises an error when passed wrong argument types", () => {
        // $ExpectError: Wrong argument types
        call({ context, fn: s1 }, 1);
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
      it("must have context", () => {
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
});
