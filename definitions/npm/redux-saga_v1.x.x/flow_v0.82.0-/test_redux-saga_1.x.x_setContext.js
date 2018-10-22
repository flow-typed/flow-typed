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

  it("must ruses an error when first argument isn't object", () => {
    // $ExpectError argument required
    setContext();

    // $ExpectError object literal is incompatible with object
    setContext("TEST");
  });
});
