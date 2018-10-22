// @flow
import { describe, it } from "flow-typed-test";
import { channel } from "redux-saga";
import { flush } from "redux-saga/effects";

describe("flush effect", () => {
  describe("structure", () => {
    const c = flush(channel());

    it('type must be equal "FLUSH"', () => {
      (c.type: "FLUSH");
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

  describe("flush(channel)", () => {
    it("must passes when used properly", () => {
      const myChannel = channel();

      const f = flush(myChannel);

      (f.payload: typeof myChannel);
    });

    it("must raises an error when passed invalid arguments", () => {
      // $ExpectError: Too few arguments
      flush();

      // $ExpectError: Only accept Channels
      flush(42);
    });
  });
});
