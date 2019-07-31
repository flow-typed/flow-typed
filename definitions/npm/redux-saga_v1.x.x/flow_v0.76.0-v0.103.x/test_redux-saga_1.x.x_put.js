// @flow
import { describe, it } from "flow-typed-test";
import { channel, eventChannel, multicastChannel } from "redux-saga";
import { put } from "redux-saga/effects";

describe("put effect", () => {
  describe("structure", () => {
    const c = put({});

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

  describe("put(action)", () => {
    it("must passes when used properly", () => {
      put({ type: "test" });

      const put1 = put({ type: "TEST", payload: "hi" });

      (put1.payload.action.payload: string);
    });

    it(`must raises an error when action isn't object`, () => {
      // $ExpectError: Can only be called with objects
      put("FOO");
    });
  });

  describe("put(channel, action)", () => {
    it("must passes when used properly Channel and Action", () => {
      const myChannel = channel();
      const myAction = { type: "test" };
      const p = put(myChannel, myAction);

      (p.payload.channel: typeof myChannel);
      (p.payload.action: typeof myAction);
    });

    it("must raises an error when pass EventChannel", () => {
      const myEventChannel = eventChannel(emitter => () => {});
      const myAction = { type: "test" };

      // $ExpectError: event channel hasn"t a put() property
      put(myEventChannel, myAction);
    });

    it("must passes when used properly MulticastChannel and Action", () => {
      const myMultiChannel = multicastChannel();
      const myAction = { type: "test" };
      const p = put(myMultiChannel, myAction);

      (p.payload.channel: typeof myMultiChannel);
      (p.payload.action: typeof myAction);
    });

    it("must rises an error when channel is null", () => {
      // $ExpectError: No null as channel accepted
      put(null, { type: "TEST" });
    });
  });
});
