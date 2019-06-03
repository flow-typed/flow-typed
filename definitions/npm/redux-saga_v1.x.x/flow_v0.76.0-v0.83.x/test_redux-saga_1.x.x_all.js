// @flow
import { describe, it } from "flow-typed-test";
import type { AllEffect } from "redux-saga";
import { all, take, put } from "redux-saga/effects";

describe("all effect", () => {
  describe("structure", () => {
    const c = all([]);

    it('type must be equal "ALL"', () => {
      (c.type: "ALL");
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

  describe("all(Array<Effect>)", () => {
    it("passes when used properly", () => {
      const e1 = take("FETCH_STATS");
      const e2 = put({ type: "FETCH_USER" });

      (all([e1, e2]): AllEffect);
    });
  });

  describe("all({[key: string]: Effect})", () => {
    it("passes when used properly", () => {
      const e1 = take("FETCH_STATS");
      const e2 = put({ type: "FETCH_USER" });

      (all({
        isLogOut: e1,
        fetchUser: e2
      }): AllEffect);
    });
  });
});
