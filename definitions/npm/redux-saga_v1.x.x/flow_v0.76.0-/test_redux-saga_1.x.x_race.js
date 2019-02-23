// @flow
import { describe, it } from "flow-typed-test";
import { race, take, put } from "redux-saga/effects";

describe("race effect", () => {
  describe("structure", () => {
    const c = race([]);

    it('type must be equal "RACE"', () => {
      (c.type: "RACE");
    });

    it('combinator must be equal true', () => {
      (c.combinator: true);
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

  describe("race(Array<Effect>)", () => {
    it("should recognize the payload data structure", () => {
      const e1 = take("LOG_OUT");
      const e2 = put({ type: "FETCH_USER" });

      const r = race([e1, e2]);

      (r.payload[0]: typeof e1);
      (r.payload[1]: typeof e2);
    });
  });

  describe("race({[key: string]: Effect})", () => {
    it("should recognize the payload data structure", () => {
      const e1 = take("LOG_OUT");
      const e2 = put({ type: "FETCH_USER" });

      const r = race({
        isLogOut: e1,
        fetchUser: e2
      });

      (r.payload.isLogOut: typeof e1);
      (r.payload.fetchUser: typeof e2);
    });
  });
});
