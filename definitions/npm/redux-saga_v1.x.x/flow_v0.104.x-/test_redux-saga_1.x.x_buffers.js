// @flow
import { describe, it } from "flow-typed-test";
import { buffers, type Buffer } from "redux-saga";

describe("buffers", () => {
  it("must be read only object", () => {
    // $ExpectError
    buffers.none = "hi belarus";
    // $ExpectError
    buffers.fixed = "hi belarus";
    // $ExpectError
    buffers.dropping = "hi belarus";
    // $ExpectError
    buffers.sliding = "hi belarus";
    // $ExpectError
    buffers.expanding = "hi belarus";
  });

  it("must be exact type", () => {
    // $ExpectError
    buffers.anyOtherProp = "anyValue";
  });

  describe("buffers.none", () => {
    it("must return Buffer when call it without args", () => {
      (buffers.none(): Buffer<*>);
    });
  });

  describe("buffers.fixed", () => {
    it("must return Buffer when call it without args", () => {
      (buffers.fixed(): Buffer<*>);
    });

    it("must return Buffer when first argument is number", () => {
      (buffers.fixed(5): Buffer<*>);
    });

    it("must raises an error when first argument isn't number", () => {
      // $ExpectError: limit parameter must be given as a number
      (buffers.fixed("five"): Buffer<*>);
    });
  });

  describe("buffers.dropping", () => {
    it("must return Buffer when call it without args", () => {
      (buffers.dropping(): Buffer<*>);
    });

    it("must return Buffer when first argument is number", () => {
      (buffers.dropping(6): Buffer<*>);
    });

    it("must raises an error when first argument isn't number", () => {
      // $ExpectError: limit parameter must be given as a number
      (buffers.dropping("six"): Buffer<*>);
    });
  });

  describe("buffers.sliding", () => {
    it("must return Buffer when call it without args", () => {
      (buffers.sliding(): Buffer<*>);
    });

    it("must return Buffer when first argument is number", () => {
      (buffers.sliding(7): Buffer<*>);
    });

    it("must raises an error when first argument isn't number", () => {
      // $ExpectError: limit parameter must be given as a number
      (buffers.sliding("seven"): Buffer<*>);
    });
  });

  describe("buffers.expanding", () => {
    it("must return Buffer when call it without args", () => {
      (buffers.expanding(): Buffer<*>);
    });

    it("must return Buffer when first argument is number", () => {
      (buffers.expanding(8): Buffer<*>);
    });

    it("must raises an error when first argument isn't number", () => {
      // $ExpectError: limit parameter must be given as a number
      (buffers.expanding("eight"): Buffer<*>);
    });
  });
});
