// @flow
import { describe, it } from "flow-typed-test";
import {
  channel,
  eventChannel,
  multicastChannel,
  stdChannel,
} from "redux-saga";
import { takeMaybe } from "redux-saga/effects";

describe("takeMaybe effect", () => {
  describe("structure", () => {
    const c = takeMaybe("ACTION_NAME");

    it('type must be equal "TAKE"', () => {
      (c.type: "TAKE");
    });

    it('payload property must have "maybe" property', () => {
      (c.payload.maybe: true);
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

  describe("takeMaybe()", () => {
    it("must passes when call effect without any arguments", () => {
      const t = takeMaybe();

      (t.payload.pattern: '*');
    });
  });

  describe("takeMaybe(pattern)", () => {
    it("must passes when used properly", () => {
      takeMaybe(action => action.type === "foo");
      takeMaybe([
        action => action.type === "foo",
        action => action.type === "foo",
      ]);

      takeMaybe("ACTION_1");
      takeMaybe(["ACTION_1", "ACTION_2"]);
    });

    it("must raises an error when passed invalid pattern", () => {
      // $ExpectError: PatternFn returns a boolean
      takeMaybe(action => null);

      // $ExpectError: Only string patterns for arrays
      takeMaybe(["FOO", "BAR", 1]);
    });
  });

  describe("takeMaybe(channel)", () => {
    it("must passes when pass Channel", () => {
      const myChannel = channel();

      takeMaybe(myChannel);
    });

    it("must passes when pass EventChannel", () => {
      const myEventChannel = eventChannel(emitter => {
        emitter("test");

        return () => {};
      });

      takeMaybe(myEventChannel);
    });

    it("must passes when pass MulticastChannel", () => {
      takeMaybe(multicastChannel());
      takeMaybe(stdChannel());
    });

    it("must raises an error when passed invalid channel", () => {
      // $ExpectError: Channels must have take prop
      takeMaybe({ close: () => {}, put: msg => {} });
    });
  });
});
