// @flow
import { describe, it } from "flow-typed-test";
import {
  channel,
  eventChannel,
  multicastChannel,
  stdChannel,
} from "redux-saga";
import { take } from "redux-saga/effects";

describe("take effect", () => {
  describe("structure", () => {
    const c = take("ACTION_NAME");

    it('type must be equal "TAKE"', () => {
      (c.type: "TAKE");
    });

    it(`payload property must haven't "maybe" property`, () => {
      // $ExpectError: property `maybe` is missing in type
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

  describe("take()", () => {
    it("must passes when call effect without any arguments", () => {
      const t = take();

      (t.payload.pattern: '*');
    });
  });

  describe("take(pattern)", () => {
    it("must passes when used properly", () => {
      take(action => action.type === "foo");
      take([action => action.type === "foo", action => action.type === "foo"]);

      take("ACTION_1");
      take(["ACTION_1", "ACTION_2"]);
    });

    it("must raises an error when passed invalid pattern", () => {
      // $ExpectError: PatternFn returns a boolean
      take(action => null);

      // $ExpectError: Only string patterns for arrays
      take(["FOO", "BAR", 1]);
    });
  });

  describe("take(channel)", () => {
    it("must passes when pass Channel", () => {
      const myChannel = channel();

      take(myChannel);
    });

    it("must passes when pass EventChannel", () => {
      const myEventChannel = eventChannel(emitter => {
        emitter("test");

        return () => {};
      });

      take(myEventChannel);
    });

    it("must passes when pass MulticastChannel", () => {
      take(multicastChannel());
      take(stdChannel());
    });

    it("must raises an error when passed invalid channel", () => {
      // $ExpectError: Channels must have take prop
      take({ close: () => {}, put: msg => {} });
    });
  });
});
