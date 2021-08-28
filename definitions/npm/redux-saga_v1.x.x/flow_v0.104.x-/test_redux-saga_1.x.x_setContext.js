// @flow
import { describe, it } from "flow-typed-test";
import { setContext } from "redux-saga/effects";

describe("setContext(prop)", () => {
  describe("structure", () => {
    const props = {};
    const c = setContext(props);

    it("payload must be equal props argument", () => {
      (c.payload: typeof props);
    });

    it('type must be equal "SET_CONTEXT"', () => {
      (c.type: "SET_CONTEXT");
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

  it("must ruses an error when first argument isn't object", () => {
    // $FlowExpectedError[incompatible-call] argument required
    setContext();

    // $FlowExpectedError[incompatible-call] object literal is incompatible with object
    setContext("TEST");
  });
});
