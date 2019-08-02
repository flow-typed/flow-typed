// @flow
import { describe, it } from "flow-typed-test";
import {
  channel,
  eventChannel,
  multicastChannel,
  stdChannel,
} from "redux-saga";
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
    it("must passes when pass Channel", () => {
      const myChannel = channel();

      flush(myChannel);
    });

    it("must passes when pass EventChannel", () => {
      const myEventChannel = eventChannel(emitter => {
        emitter("test");

        return () => {};
      });

      flush(myEventChannel);
    });

    it("must raises an error when pass MulticastChannel", () => {
      // $ExpectError: MulticastChannel haven"t a flush property
      flush(multicastChannel());

      // $ExpectError: MulticastChannel haven"t a flush property
      flush(stdChannel());
    });

    it("must raises an error when passed invalid arguments", () => {
      // $ExpectError: Too few arguments
      flush();

      // $ExpectError: Only accept Channels
      flush(42);
    });
  });
});
