// @flow
import { describe, it } from "flow-typed-test";
import { cancelled } from "redux-saga/effects";

describe("cancelled()", () => {
  describe("structure", () => {
    const c = cancelled();

    it("payload must be empty object", () => {
      const a = {};

      (c.payload: typeof a);
    });

    it('type must be equal "CANCELLED"', () => {
      (c.type: "CANCELLED");
    });

    it("returned object must be read only", () => {
      // $FlowExpectedError: read-only  property
      c.type = "anyType";
      // $FlowExpectedError: read-only  property
      c.payload = {};
    });

    it("returned object must be exact", () => {
      // $FlowExpectedError: exact type
      c.abc = 69;
    });
  });
});
