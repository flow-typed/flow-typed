// @flow
import { describe, it } from "flow-typed-test";
import { select } from "redux-saga/effects";

describe("select effect", () => {
  describe("structure", () => {
    const c = select(() => {});

    it('type must be equal "SELECT"', () => {
      (c.type: "SELECT");
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

  describe("select(selector, ...args)", () => {
    const s0 = (state: Object): Object => ({});
    const s1 = (state: Object, a: string) => ({});
    const s2 = (state: Object, a: string, b: number) => ({});
    const s3 = (state: Object, a: string, b: number, c: string) => ({});
    const s4 = (state: Object, a: string, b: number, c: string, d: number) => ({});
    const s5 = (state: Object, a: string, b: number, c: string, d: number, e: string) => ({});
    const s6 = (
      state: Object,
      a: string,
      b: number,
      c: string,
      d: number,
      e: string,
      f: number
    ) => ({});
    const s7 = (
      state: Object,
      a: string,
      b: number,
      c: string,
      d: number,
      e: string,
      f: number,
      g: string
    ) => ({});
    const s8 = (
      state: Object,
      a: string,
      b: number,
      c: string,
      d: number,
      e: string,
      f: number,
      g: string,
      h: number
    ) => ({});

    const eVoid = select();
    const e0 = select(s0);
    const e1 = select(s1, "1");
    const e2 = select(s2, "1", 2);
    const e3 = select(s3, "1", 2, "3");
    const e4 = select(s4, "1", 2, "3", 4);
    const e5 = select(s5, "1", 2, "3", 4, "5");
    const e6 = select(s6, "1", 2, "3", 4, "5", 6);
    const e7 = select(s7, "1", 2, "3", 4, "5", 6, "7");
    const e8 = select(s8, "1", 2, "3", 4, "5", 6, "7", 8);

    describe("arguments tests", () => {
      it("must passes when used properly", () => {
        (eVoid.payload.args: []);
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

      it("must raises an error when passed boolean but need string", () => {
        // $ExpectError: second args is not a boolean
        (e3.payload.args: [string, boolean, string]);
      });
    });

    describe("function test", () => {
      it("must passes when used properly", () => {
        (eVoid.payload.selector: void);
        (e0.payload.selector: typeof s0);
        (e1.payload.selector: typeof s1);
        (e2.payload.selector: typeof s2);
        (e3.payload.selector: typeof s3);
        (e4.payload.selector: typeof s4);
        (e5.payload.selector: typeof s5);
        (e6.payload.selector: typeof s6);
        (e7.payload.selector: typeof s7);
        (e8.payload.selector: typeof s8);
      });

      it(`must raises an error when "a" argument isn't string`, () => {
        // $ExpectError: args.a should actually be a string
        (e1.payload.selector: (state: Object, a: number) => Object);
      });
    });
  });
});
