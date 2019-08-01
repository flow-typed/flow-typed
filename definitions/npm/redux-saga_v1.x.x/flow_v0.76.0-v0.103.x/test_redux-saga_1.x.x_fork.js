// @flow
import { describe, it } from "flow-typed-test";
import { fork } from "redux-saga/effects";

describe("fork effect", () => {
  describe("structure", () => {
    const c = fork(() => {});

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

  describe("fork(fn, ...args)", () => {
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

    const c0 = fork(nfn0);
    const c1 = fork(nfn1, "1");
    const c2 = fork(nfn2, "1", 2);
    const c3 = fork(nfn3, "1", 2, true);
    const c4 = fork(nfn4, "1", 2, true, "4");
    const c5 = fork(nfn5, "1", 2, true, "4", 5);
    const c6 = fork(nfn6, "1", 2, true, "4", 5, false);
    const c7 = fork(nfn7, "1", 2, true, "4", 5, false, "7");
    const c8 = fork(nfn8, "1", 2, true, "4", 5, false, "7", 8);

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
        fork(nfn6, "1", 2, true, "4");
      });

      it("must raises an error when passed wrong argument types", () => {
        // $ExpectError: Wrong argument types
        fork(nfn1, 1);
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

  describe("fork([context, fn], ...args)", () => {
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

    const f0 = fork([context, nfn0]);
    const f1 = fork([context, nfn1], "1");
    const f2 = fork([context, nfn2], "1", 2);
    const f3 = fork([context, nfn3], "1", 2, true);
    const f4 = fork([context, nfn4], "1", 2, true, "4");
    const f5 = fork([context, nfn5], "1", 2, true, "4", 5);
    const f6 = fork([context, nfn6], "1", 2, true, "4", 5, false);
    const f7 = fork([context, nfn7], "1", 2, true, "4", 5, false, "7");
    const f8 = fork([context, nfn8], "1", 2, true, "4", 5, false, "7", 8);

    describe("arguments tests", () => {
      it("must passes when used properly", () => {
        (f0.payload.args: []);
        (f1.payload.args: [string]);
        (f2.payload.args: [string, number]);
        (f3.payload.args: [string, number, boolean]);
        (f4.payload.args: [string, number, boolean, string]);
        (f5.payload.args: [string, number, boolean, string, number]);
        (f6.payload.args: [string, number, boolean, string, number, boolean]);
        (f7.payload.args: [string, number, boolean, string, number, boolean, string]);
        (f8.payload.args: [string, number, boolean, string, number, boolean, string, number]);
      });

      it("must raises an error when passed number but need string", () => {
        // $ExpectError: First parameter is a string, not a number
        (f1.payload.args: [number]);
      });

      it("must raises an error when passed too few arguments", () => {
        // $ExpectError: Too few arguments
        fork([context, nfn6], "1", 2, true, "4");
      });

      it("must raises an error when passed wrong argument types", () => {
        // $ExpectError: Wrong argument types
        fork([context, nfn1], 1);
      });
    });

    describe("function test", () => {
      it("must passes when used properly", () => {
        (f1.payload.fn: typeof nfn1);
        (f2.payload.fn: typeof nfn2);
        (f3.payload.fn: typeof nfn3);
        (f4.payload.fn: typeof nfn4);
        (f5.payload.fn: typeof nfn5);
        (f6.payload.fn: typeof nfn6);
        (f7.payload.fn: typeof nfn7);
        (f8.payload.fn: typeof nfn8);
      });

      it("should actually fail, but apparently more parameter are fine", () => {
        (f1.payload.fn: typeof nfn6);
      });

      it("must raises an error when Function return not string", () => {
        // $ExpectError: fn returns a number not string
        (f1.payload.fn: (a: boolean) => string);
      });

      it(`must raises an error when "a" argument isn't string`, () => {
        // $ExpectError: 'a' is actually of type string
        (f1.payload.fn: (a: boolean) => number);

        // $ExpectError: 'a' is actually of type string
        (f4.payload.fn: (a: number, b: number) => number);
      });

      it("must raises an error when less parameter are noticed", () => {
        // $ExpectError: Less parameter are noticed
        (f6.payload.fn: typeof nfn1);
      });
    });

    describe("context tests", () => {
      it("must have context", () => {
        (f1.payload.context: typeof context);
        (f2.payload.context: typeof context);
        (f3.payload.context: typeof context);
        (f4.payload.context: typeof context);
        (f5.payload.context: typeof context);
        (f6.payload.context: typeof context);
        (f7.payload.context: typeof context);
        (f8.payload.context: typeof context);
      });

      it("must raises an error when lead context to null", () => {
        // $ExpectError
        (f1.payload.context: null);
      });
    });
  });

  describe("fork({context, fn}, ...args)", () => {
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

    const c0 = fork({ context, fn: nfn0 });
    const c1 = fork({ context, fn: nfn1 }, "1");
    const c2 = fork({ context, fn: nfn2 }, "1", 2);
    const c3 = fork({ context, fn: nfn3 }, "1", 2, true);
    const c4 = fork({ context, fn: nfn4 }, "1", 2, true, "4");
    const c5 = fork({ context, fn: nfn5 }, "1", 2, true, "4", 5);
    const c6 = fork({ context, fn: nfn6 }, "1", 2, true, "4", 5, false);
    const c7 = fork({ context, fn: nfn7 }, "1", 2, true, "4", 5, false, "7");
    const c8 = fork({ context, fn: nfn8 }, "1", 2, true, "4", 5, false, "7", 8);

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
        fork({ context, fn: nfn6 }, "1", 2, true, "4");
      });

      it("must raises an error when passed wrong argument types", () => {
        // $ExpectError: Wrong argument types
        fork({ context, fn: nfn1 }, 1);
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

      it("must actually fail, but apparently more parameter are fine", () => {
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
