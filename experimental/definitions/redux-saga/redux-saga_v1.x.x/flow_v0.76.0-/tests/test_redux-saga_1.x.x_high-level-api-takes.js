// @flow
import { describe, it } from "flow-typed-test";
import { channel } from "redux-saga";
import { takeEvery, takeLatest, takeLeading } from "redux-saga/effects";

const topLevelTakesApi = [takeEvery, takeLatest, takeLeading];

for (const takeEffect of topLevelTakesApi) {
  describe("top level takes effect", () => {
    describe("structure", () => {
      const c = takeEffect("ACTION_NAME", () => {});

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

    function* s0(): any {
      return 1;
    }
    function* s1(a: string): any {
      return 1;
    }
    function* s2(a: string, b: number): any {
      return 1;
    }
    function* s3(a: string, b: number, c: string): any {
      return 1;
    }
    function* s4(a: string, b: number, c: string, d: number): any {
      return 1;
    }
    function* s5(a: string, b: number, c: string, d: number, e: string): any {
      return 1;
    }
    function* s6(a: string, b: number, c: string, d: number, e: string, f: number): any {
      return 1;
    }
    function* s7(a: string, b: number, c: string, d: number, e: string, f: number, g: string): any {
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
    ): any {
      return 1;
    }

    describe("takeXXX(pattern)", () => {
      const e0 = takeEffect("ACTION_NAME", s0);
      const e1 = takeEffect("ACTION_NAME", s1, "1");
      const e2 = takeEffect("ACTION_NAME", s2, "1", 2);
      const e3 = takeEffect("ACTION_NAME", s3, "1", 2, "3");
      const e4 = takeEffect("ACTION_NAME", s4, "1", 2, "3", 4);
      const e5 = takeEffect("ACTION_NAME", s5, "1", 2, "3", 4, "5");
      const e6 = takeEffect("ACTION_NAME", s6, "1", 2, "3", 4, "5", 6);
      const e7 = takeEffect("ACTION_NAME", s7, "1", 2, "3", 4, "5", 6, "7");
      const e8 = takeEffect("ACTION_NAME", s8, "1", 2, "3", 4, "5", 6, "7", 8);

      it("must haven't context", () => {
        (e0.payload.context: null);
        (e1.payload.context: null);
        (e2.payload.context: null);
        (e3.payload.context: null);
        (e4.payload.context: null);
        (e5.payload.context: null);
        (e6.payload.context: null);
        (e7.payload.context: null);
        (e8.payload.context: null);
      });

      describe("arguments tests", () => {
        it("must passes when used properly", () => {
          (e0.payload.args: [string, typeof s0]);
          (e1.payload.args: [string, typeof s1, string]);
          (e2.payload.args: [string, typeof s2, string, number]);
          (e3.payload.args: [string, typeof s3, string, number, string]);
          (e4.payload.args: [string, typeof s4, string, number, string, number]);
          (e5.payload.args: [string, typeof s5, string, number, string, number, string]);
          (e6.payload.args: [string, typeof s6, string, number, string, number, string, number]);
          (e7.payload.args: [
            string,
            typeof s7,
            string,
            number,
            string,
            number,
            string,
            number,
            string
          ]);
          (e8.payload.args: [
            string,
            typeof s8,
            string,
            number,
            string,
            number,
            string,
            number,
            string,
            number
          ]);
        });

        it("must raises an error when passed number but need string", () => {
          // $ExpectError: First parameter is a string, not a number
          (e1.payload.args: [number]);
        });

        it("must raises an error when passed too few arguments", () => {
          // $ExpectError: Too few arguments
          fork("ACTION_NAME", s6, "1", 2, true, "4");
        });

        it("must raises an error when passed wrong argument types", () => {
          // $ExpectError: Wrong argument types
          fork("ACTION_NAME", s1, 1);
        });
      });
    });

    describe("takeXXX(channel)", () => {
      const myChannel = channel();

      const e0 = takeEffect(myChannel, s0);
      const e1 = takeEffect(myChannel, s1, "1");
      const e2 = takeEffect(myChannel, s2, "1", 2);
      const e3 = takeEffect(myChannel, s3, "1", 2, "3");
      const e4 = takeEffect(myChannel, s4, "1", 2, "3", 4);
      const e5 = takeEffect(myChannel, s5, "1", 2, "3", 4, "5");
      const e6 = takeEffect(myChannel, s6, "1", 2, "3", 4, "5", 6);
      const e7 = takeEffect(myChannel, s7, "1", 2, "3", 4, "5", 6, "7");
      const e8 = takeEffect(myChannel, s8, "1", 2, "3", 4, "5", 6, "7", 8);

      it("must haven't context", () => {
        (e0.payload.context: null);
        (e1.payload.context: null);
        (e2.payload.context: null);
        (e3.payload.context: null);
        (e4.payload.context: null);
        (e5.payload.context: null);
        (e6.payload.context: null);
        (e7.payload.context: null);
        (e8.payload.context: null);
      });

      describe("arguments tests", () => {
        it("must passes when used properly", () => {
          (e0.payload.args: [typeof myChannel, typeof s0]);
          (e1.payload.args: [typeof myChannel, typeof s1, string]);
          (e2.payload.args: [typeof myChannel, typeof s2, string, number]);
          (e3.payload.args: [typeof myChannel, typeof s3, string, number, string]);
          (e4.payload.args: [typeof myChannel, typeof s4, string, number, string, number]);
          (e5.payload.args: [typeof myChannel, typeof s5, string, number, string, number, string]);
          (e6.payload.args: [
            typeof myChannel,
            typeof s6,
            string,
            number,
            string,
            number,
            string,
            number
          ]);
          (e7.payload.args: [
            typeof myChannel,
            typeof s7,
            string,
            number,
            string,
            number,
            string,
            number,
            string
          ]);
          (e8.payload.args: [
            typeof myChannel,
            typeof s8,
            string,
            number,
            string,
            number,
            string,
            number,
            string,
            number
          ]);
        });

        it("must raises an error when passed number but need string", () => {
          // $ExpectError: First parameter is a string, not a number
          (e1.payload.args: [number]);
        });

        it("must raises an error when passed too few arguments", () => {
          // $ExpectError: Too few arguments
          fork(myChannel, s6, "1", 2, true, "4");
        });

        it("must raises an error when passed wrong argument types", () => {
          // $ExpectError: Wrong argument types
          fork(myChannel, s1, 1);
        });
      });
    });
  });
}
