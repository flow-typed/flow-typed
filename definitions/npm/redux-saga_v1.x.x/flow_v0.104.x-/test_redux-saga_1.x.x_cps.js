// @flow
import { describe, it } from "flow-typed-test";
import { cps } from "redux-saga/effects";

describe("cps effect", () => {
  describe("structure", () => {
    const c = cps(() => {});

    it('type must be equal "CPS"', () => {
      (c.type: "CPS");
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

  describe("all variants", () => {
    declare type NodeCallback<R> = {
      (err: Error): void,
      (err: null | void | false, result: R): void,
      ...
    };

    function cpsfn0(cb: NodeCallback<number>): void {}
    function cpsfn1(a: string, cb: NodeCallback<number>): void {}
    function cpsfn2(a: string, b: number, cb: NodeCallback<number>): void {}
    function cpsfn3(a: string, b: number, c: string, cb: NodeCallback<number>): void {}
    function cpsfn4(a: string, b: number, c: string, d: number, cb: NodeCallback<number>): void {}
    function cpsfn5(
      a: string,
      b: number,
      c: string,
      d: number,
      e: string,
      cb: NodeCallback<number>
    ): void {}
    function cpsfn6(
      a: string,
      b: number,
      c: string,
      d: number,
      e: string,
      f: number,
      cb: NodeCallback<number>
    ): void {}
    function cpsfn7(
      a: string,
      b: number,
      c: string,
      d: number,
      e: string,
      f: number,
      g: string,
      cb: NodeCallback<number>
    ): void {}
    function cpsfn8(
      a: string,
      b: number,
      c: string,
      d: number,
      e: string,
      f: number,
      g: string,
      h: number,
      cb: NodeCallback<number>
    ): void {}

    describe("cps(fn, ...args)", () => {
      const e0 = cps(cpsfn0);
      const e1 = cps(cpsfn1, "1");
      const e2 = cps(cpsfn2, "1", 2);
      const e3 = cps(cpsfn3, "1", 2, "3");
      const e4 = cps(cpsfn4, "1", 2, "3", 4);
      const e5 = cps(cpsfn5, "1", 2, "3", 4, "5");
      const e6 = cps(cpsfn6, "1", 2, "3", 4, "5", 6);
      const e7 = cps(cpsfn7, "1", 2, "3", 4, "5", 6, "7");
      const e8 = cps(cpsfn8, "1", 2, "3", 4, "5", 6, "7", 8);

      it("must passes when correct arguments are passed", () => {
        (e0.payload.args: []);
        (e1.payload.args: [string]);
        (e2.payload.args: [string, number]);
        (e3.payload.args: [string, number, string]);
        (e4.payload.args: [string, number, string, number]);
        (e5.payload.args: [string, number, string, number, string]);
        (e6.payload.args: [string, number, string, number, string, number]);
        (e7.payload.args: [string, number, string, number, string, number, string]);
        (e8.payload.args: [string, number, string, number, string, number, string, number]);
      });

      it("must passes when context is null", () => {
        (e1.payload.context: null);
        (e2.payload.context: null);
        (e3.payload.context: null);
        (e4.payload.context: null);
        (e5.payload.context: null);
        (e6.payload.context: null);
        (e7.payload.context: null);
        (e8.payload.context: null);
      });

      it("must passes when correct fn type", () => {
        (e1.payload.fn: typeof cpsfn1);
        (e2.payload.fn: typeof cpsfn2);
        (e3.payload.fn: typeof cpsfn3);
        (e4.payload.fn: typeof cpsfn4);
        (e5.payload.fn: typeof cpsfn5);
        (e6.payload.fn: typeof cpsfn6);
        (e7.payload.fn: typeof cpsfn7);
        (e8.payload.fn: typeof cpsfn8);

        // $ExpectError: wrong fn
        (e6.payload.fn: typeof cpsfn1);
      });
    });

    describe("cps([context, fn], ...args)", () => {
      const context = { some: "context" };
      const e0 = cps([context, cpsfn0]);
      const e1 = cps([context, cpsfn1], "1");
      const e2 = cps([context, cpsfn2], "1", 2);
      const e3 = cps([context, cpsfn3], "1", 2, "3");
      const e4 = cps([context, cpsfn4], "1", 2, "3", 4);
      const e5 = cps([context, cpsfn5], "1", 2, "3", 4, "5");
      const e6 = cps([context, cpsfn6], "1", 2, "3", 4, "5", 6);
      const e7 = cps([context, cpsfn7], "1", 2, "3", 4, "5", 6, "7");
      const e8 = cps([context, cpsfn8], "1", 2, "3", 4, "5", 6, "7", 8);

      it("must passes when correct arguments are passed", () => {
        (e0.payload.args: []);
        (e1.payload.args: [string]);
        (e2.payload.args: [string, number]);
        (e3.payload.args: [string, number, string]);
        (e4.payload.args: [string, number, string, number]);
        (e5.payload.args: [string, number, string, number, string]);
        (e6.payload.args: [string, number, string, number, string, number]);
        (e7.payload.args: [string, number, string, number, string, number, string]);
        (e8.payload.args: [string, number, string, number, string, number, string, number]);
      });

      it("must passes when context isn't null", () => {
        (e1.payload.context: typeof context);
        (e2.payload.context: typeof context);
        (e3.payload.context: typeof context);
        (e4.payload.context: typeof context);
        (e5.payload.context: typeof context);
        (e6.payload.context: typeof context);
        (e7.payload.context: typeof context);
        (e8.payload.context: typeof context);

        // $ExpectError: not null
        (e8.payload.context: null);
      });

      it("must passes when correct fn equal", () => {
        (e1.payload.fn: typeof cpsfn1);
        (e2.payload.fn: typeof cpsfn2);
        (e3.payload.fn: typeof cpsfn3);
        (e4.payload.fn: typeof cpsfn4);
        (e5.payload.fn: typeof cpsfn5);
        (e6.payload.fn: typeof cpsfn6);
        (e7.payload.fn: typeof cpsfn7);
        (e8.payload.fn: typeof cpsfn8);

        // $ExpectError: wrong fn
        (e6.payload.fn: typeof cpsfn1);
      });
    });

    describe("cps({context, fn}, ...args)", () => {
      const context = { some: "context" };
      const e0 = cps({ context, fn: cpsfn0 });
      const e1 = cps({ context, fn: cpsfn1 }, "1");
      const e2 = cps({ context, fn: cpsfn2 }, "1", 2);
      const e3 = cps({ context, fn: cpsfn3 }, "1", 2, "3");
      const e4 = cps({ context, fn: cpsfn4 }, "1", 2, "3", 4);
      const e5 = cps({ context, fn: cpsfn5 }, "1", 2, "3", 4, "5");
      const e6 = cps({ context, fn: cpsfn6 }, "1", 2, "3", 4, "5", 6);
      const e7 = cps({ context, fn: cpsfn7 }, "1", 2, "3", 4, "5", 6, "7");
      const e8 = cps({ context, fn: cpsfn8 }, "1", 2, "3", 4, "5", 6, "7", 8);

      it("must passes when correct arguments are passed", () => {
        (e0.payload.args: []);
        (e1.payload.args: [string]);
        (e2.payload.args: [string, number]);
        (e3.payload.args: [string, number, string]);
        (e4.payload.args: [string, number, string, number]);
        (e5.payload.args: [string, number, string, number, string]);
        (e6.payload.args: [string, number, string, number, string, number]);
        (e7.payload.args: [string, number, string, number, string, number, string]);
        (e8.payload.args: [string, number, string, number, string, number, string, number]);
      });

      it("must passes when context isn't null", () => {
        (e1.payload.context: typeof context);
        (e2.payload.context: typeof context);
        (e3.payload.context: typeof context);
        (e4.payload.context: typeof context);
        (e5.payload.context: typeof context);
        (e6.payload.context: typeof context);
        (e7.payload.context: typeof context);
        (e8.payload.context: typeof context);

        // $ExpectError: not null
        (e8.payload.context: null);
      });

      it("must passes when correct fn equal", () => {
        (e1.payload.fn: typeof cpsfn1);
        (e2.payload.fn: typeof cpsfn2);
        (e3.payload.fn: typeof cpsfn3);
        (e4.payload.fn: typeof cpsfn4);
        (e5.payload.fn: typeof cpsfn5);
        (e6.payload.fn: typeof cpsfn6);
        (e7.payload.fn: typeof cpsfn7);
        (e8.payload.fn: typeof cpsfn8);

        // $ExpectError: wrong fn
        (e6.payload.fn: typeof cpsfn1);
      });
    });
  });
});
