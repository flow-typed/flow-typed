// @flow
import { describe, it } from "flow-typed-test";
import { channel } from "redux-saga";
import { putResolve } from "redux-saga/effects";

describe("putResolve effect", () => {
  describe("structure", () => {
    const c = putResolve({});

    it('type must be equal "PUT"', () => {
      (c.type: "PUT");
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

  describe("putResolve(action)", () => {
    it("must passes when used properly", () => {
      putResolve({ type: "test" });

      const put1 = putResolve({ type: "TEST", payload: "hi" });

      (put1.payload.action.payload: string);
      (put1.payload.resolve: true);
    });

    it(`must raises an error when action isn't object`, () => {
      // $ExpectError: Can only be called with objects
      putResolve("FOO");
    });
  });

  describe("putResolve(channel, action)", () => {
    const myChannel = channel();
    const myAction = { type: "test" };

    it("must passes when used properly", () => {
      const p = putResolve(myChannel, myAction);

      (p.payload.channel: typeof myChannel);
      (p.payload.action: typeof myAction);
    });

    it("must rises an error when channel is null", () => {
      // $ExpectError: No null as channel accepted
      putResolve(null, { type: "TEST" });
    });
  });
});
