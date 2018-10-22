// @flow
import { describe, it } from "flow-typed-test";
import { channel } from "redux-saga";
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
    it("must passes when used properly", () => {
      const myChannel = channel();

      take(myChannel);
    });

    it("must raises an error when passed invalid channel", () => {
      // $ExpectError: Channels must have take prop
      take({ close: () => {}, put: msg => {} });

      // $ExpectError: Channels must have close prop
      take({ take: cb => {}, put: msg => {} });
    });
  });
});
