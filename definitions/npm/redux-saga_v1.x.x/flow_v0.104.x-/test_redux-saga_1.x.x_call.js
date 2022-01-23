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
      // $FlowExpectedError[cannot-write]: read-only  property
      c.type = "anyType";
      // $FlowExpectedError[cannot-write]: read-only  property
      c.payload = {};
    });

    it("returned object must be exact", () => {
      // $FlowExpectedError[prop-missing]: exact type
      c.abc = 69;
    });
  });
});
