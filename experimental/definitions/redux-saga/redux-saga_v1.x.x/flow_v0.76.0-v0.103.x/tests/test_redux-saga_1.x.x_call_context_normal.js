// @flow
import { describe, it } from "flow-typed-test";
import { call } from "redux-saga/effects";

describe("call() effect with normal function and without context", () => {
  describe("call([context, fn], ...args)", () => {
    const context = { some: "contextObject" };

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

    const c0 = call([context, nfn0]);
    const c1 = call([context, nfn1], "1");
    const c2 = call([context, nfn2], "1", 2);
    const c3 = call([context, nfn3], "1", 2, true);
    const c4 = call([context, nfn4], "1", 2, true, "4");
    const c5 = call([context, nfn5], "1", 2, true, "4", 5);
    const c6 = call([context, nfn6], "1", 2, true, "4", 5, false);
    const c7 = call([context, nfn7], "1", 2, true, "4", 5, false, "7");
    const c8 = call([context, nfn8], "1", 2, true, "4", 5, false, "7", 8);

    describe("arguments tests", () => {
      it("must passes when used properly", () => {
        (c0.payload.args: []);
        (c1.payload.args: [string]);
        (c2.payload.args: [string, number]);
        (c3.payload.args: [string, number, boolean]);
        (c4.payload.args: [string, number, boolean, string]);
        (c5.payload.args: [string, number, boolean, string, number]);
        (c6.payload.args: [string, number, boolean, string, number, boolean]);
        (c7.payload.args: [string, number, boolean, string, number, boolean, string]);
        (c8.payload.args: [string, number, boolean, string, number, boolean, string, number]);
      });

      it("must raises an error when passed number but need string", () => {
        // $ExpectError: First parameter is a string, not a number
        (c1.payload.args: [number]);
      });

      it("must raises an error when passed too few arguments", () => {
        // $ExpectError: Too few arguments
        call([context, nfn6], "1", 2, true, "4");
      });

      it("must raises an error when passed wrong argument types", () => {
        // $ExpectError: Wrong argument types
        call([context, nfn1], 1);
      });
    });

    describe("function test", () => {
      it("must passes when used properly", () => {
        (c1.payload.fn: typeof nfn1);
        (c2.payload.fn: typeof nfn2);
        (c3.payload.fn: typeof nfn3);
        (c4.payload.fn: typeof nfn4);
        (c5.payload.fn: typeof nfn5);
        (c6.payload.fn: typeof nfn6);
        (c7.payload.fn: typeof nfn7);
        (c8.payload.fn: typeof nfn8);
      });

      it("should actually fail, but apparently more parameter are fine", () => {
        (c1.payload.fn: typeof nfn6);
      });

      it("must raises an error when Function return not string", () => {
        // $ExpectError: fn returns a number not string
        (c1.payload.fn: (a: boolean) => string);
      });

      it(`must raises an error when "a" argument isn't string`, () => {
        // $ExpectError: 'a' is actually of type string
        (c1.payload.fn: (a: boolean) => number);

        // $ExpectError: 'a' is actually of type string
        (c4.payload.fn: (a: number, b: number) => number);
      });

      it("must raises an error when less parameter are noticed", () => {
        // $ExpectError: Less parameter are noticed
        (c6.payload.fn: typeof nfn1);
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
    const context0 = {
      someFn0(): number {
        return 1;
      }
    };
    const context1 = {
      someFn1(a: string): number {
        return 1;
      }
    };
    const context2 = {
      someFn2(a: string, b: number): number {
        return 1;
      }
    };
    const context3 = {
      someFn3(a: string, b: number, c: boolean): number {
        return 1;
      }
    };
    const context4 = {
      someFn4(a: string, b: number, c: boolean, d: string): number {
        return 1;
      }
    };
    const context5 = {
      someFn5(a: string, b: number, c: boolean, d: string, e: number): number {
        return 1;
      }
    };
    const context6 = {
      someFn6(a: string, b: number, c: boolean, d: string, e: number, f: boolean): number {
        return 1;
      }
    };
    const context7 = {
      someFn7(
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
    };
    const context8 = {
      someFn8(
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
    };

    const c0 = call([context0, "someFn0"]);
    const c1 = call([context1, "someFn1"], "1");
    const c2 = call([context2, "someFn2"], "1", 2);
    const c3 = call([context3, "someFn3"], "1", 2, true);
    const c4 = call([context4, "someFn4"], "1", 2, true, "4");
    const c5 = call([context5, "someFn5"], "1", 2, true, "4", 5);
    const c6 = call([context6, "someFn6"], "1", 2, true, "4", 5, false);
    const c7 = call([context7, "someFn7"], "1", 2, true, "4", 5, false, "7");
    const c8 = call([context8, "someFn8"], "1", 2, true, "4", 5, false, "7", 8);

    describe("arguments tests", () => {
      it("must passes when used properly", () => {
        (c0.payload.args: []);
        (c1.payload.args: [string]);
        (c2.payload.args: [string, number]);
        (c3.payload.args: [string, number, boolean]);
        (c4.payload.args: [string, number, boolean, string]);
        (c5.payload.args: [string, number, boolean, string, number]);
        (c6.payload.args: [string, number, boolean, string, number, boolean]);
        (c7.payload.args: [string, number, boolean, string, number, boolean, string]);
        (c8.payload.args: [string, number, boolean, string, number, boolean, string, number]);
      });

      it("must raises an error when passed number but need string", () => {
        // $ExpectError: First parameter is a string, not a number
        (c1.payload.args: [number]);
      });

      it("must raises an error when passed too few arguments", () => {
        // $ExpectError: Too few arguments
        call([context6, "someFn6"], "1", 2, true, "4");
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
        // $ExpectError: fn returns a number not string
        (c1.payload.fn: (a: boolean) => string);
      });

      it(`must raises an error when "a" argument isn't string`, () => {
        // $ExpectError: 'a' is actually of type string
        (c1.payload.fn: (a: boolean) => number);

        // $ExpectError: 'a' is actually of type string
        (c4.payload.fn: (a: number, b: number) => number);
      });

      it("must raises an error when less parameter are noticed", () => {
        // $ExpectError: Less parameter are noticed
        (c6.payload.fn: $PropertyType<typeof context1, "someFn1">);
      });
    });

    describe("context tests", () => {
      it("must haven't context", () => {
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

    const c0 = call({ context, fn: nfn0 });
    const c1 = call({ context, fn: nfn1 }, "1");
    const c2 = call({ context, fn: nfn2 }, "1", 2);
    const c3 = call({ context, fn: nfn3 }, "1", 2, true);
    const c4 = call({ context, fn: nfn4 }, "1", 2, true, "4");
    const c5 = call({ context, fn: nfn5 }, "1", 2, true, "4", 5);
    const c6 = call({ context, fn: nfn6 }, "1", 2, true, "4", 5, false);
    const c7 = call({ context, fn: nfn7 }, "1", 2, true, "4", 5, false, "7");
    const c8 = call({ context, fn: nfn8 }, "1", 2, true, "4", 5, false, "7", 8);

    describe("arguments tests", () => {
      it("must passes when used properly", () => {
        (c0.payload.args: []);
        (c1.payload.args: [string]);
        (c2.payload.args: [string, number]);
        (c3.payload.args: [string, number, boolean]);
        (c4.payload.args: [string, number, boolean, string]);
        (c5.payload.args: [string, number, boolean, string, number]);
        (c6.payload.args: [string, number, boolean, string, number, boolean]);
        (c7.payload.args: [string, number, boolean, string, number, boolean, string]);
        (c8.payload.args: [string, number, boolean, string, number, boolean, string, number]);
      });

      it("must raises an error when passed number but need string", () => {
        // $ExpectError: First parameter is a string, not a number
        (c1.payload.args: [number]);
      });

      it("must raises an error when passed too few arguments", () => {
        // $ExpectError: Too few arguments
        call({ context, fn: nfn6 }, "1", 2, true, "4");
      });

      it("must raises an error when passed wrong argument types", () => {
        // $ExpectError: Wrong argument types
        call({ context, fn: nfn1 }, 1);
      });
    });

    describe("function test", () => {
      it("must passes when used properly", () => {
        (c1.payload.fn: typeof nfn1);
        (c2.payload.fn: typeof nfn2);
        (c3.payload.fn: typeof nfn3);
        (c4.payload.fn: typeof nfn4);
        (c5.payload.fn: typeof nfn5);
        (c6.payload.fn: typeof nfn6);
        (c7.payload.fn: typeof nfn7);
        (c8.payload.fn: typeof nfn8);
      });

      it("should actually fail, but apparently more parameter are fine", () => {
        (c1.payload.fn: typeof nfn6);
      });

      it("must raises an error when Function return not string", () => {
        // $ExpectError: fn returns a number not string
        (c1.payload.fn: (a: boolean) => string);
      });

      it(`must raises an error when "a" argument isn't string`, () => {
        // $ExpectError: 'a' is actually of type string
        (c1.payload.fn: (a: boolean) => number);

        // $ExpectError: 'a' is actually of type string
        (c4.payload.fn: (a: number, b: number) => number);
      });

      it("must raises an error when less parameter are noticed", () => {
        // $ExpectError: Less parameter are noticed
        (c6.payload.fn: typeof nfn1);
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
