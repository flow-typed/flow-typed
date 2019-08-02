// @flow
import { describe, it } from "flow-typed-test";
import { delay } from "redux-saga/effects";

describe("delay effect", () => {
  describe("delay(number)", () => {
    it("must passes when used properly", () => {
      const callEffect = delay(1);

      (callEffect.type: "CALL");
      (callEffect.payload.context: null);
      (callEffect.payload.fn: Function);
      (callEffect.payload.args[0]: number);
    });

    it("must raises an error when pass multiple arguments", () => {
      // $ExpectError: No more than 1 argument is expected by function type
      delay(1, 2, 3);
    });

    it("must raises an error when first argument isn't number", () => {
      // $ExpectError: string incompatible number
      delay("1");
    });
  });

  describe("delay(ms, [val])", () => {
    it("must passes when used properly", () => {
      const callEffect = delay(1, "returnValue");

      (callEffect.type: "CALL");
      (callEffect.payload.context: null);
      (callEffect.payload.fn: Function);
      (callEffect.payload.args[0]: number);
      (callEffect.payload.args[1]: string);
    });
  });
});
