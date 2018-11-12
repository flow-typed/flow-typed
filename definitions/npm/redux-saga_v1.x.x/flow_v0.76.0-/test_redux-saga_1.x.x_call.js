// @flow
import { describe, it } from "flow-typed-test";
import { call } from "redux-saga/effects";

describe("call effect", () => {
  describe("structure", () => {
    const c = call(() => {});

    it('type must be equal "CALL"', () => {
      (c.type: "CALL");
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
});
