// @flow
import { describe, it } from "flow-typed-test";
import { getContext } from "redux-saga/effects";

describe("getContext(prop)", () => {
  describe("structure", () => {
    const prop = "TEST";
    const c = getContext(prop);

    it("payload must be equal prop argument", () => {
      (c.payload: typeof prop);
    });

    it('type must be equal "GET_CONTEXT"', () => {
      (c.type: "GET_CONTEXT");
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

  it("must ruses an error when first argument isn't string", () => {
    // $ExpectError argument required
    getContext();

    // $ExpectError object literal is incompatible with string
    getContext({});
  });
});
