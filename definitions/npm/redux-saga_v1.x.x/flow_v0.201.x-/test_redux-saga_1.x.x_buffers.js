// @flow
import { describe, it } from "flow-typed-test";
import { buffers, type Buffer } from "redux-saga";

describe("buffers", () => {
  it("must be read only object", () => {
    // $FlowExpectedError[cannot-write]
    buffers.none = "hi belarus";
    // $FlowExpectedError[cannot-write]
    buffers.fixed = "hi belarus";
    // $FlowExpectedError[cannot-write]
    buffers.dropping = "hi belarus";
    // $FlowExpectedError[cannot-write]
    buffers.sliding = "hi belarus";
    // $FlowExpectedError[cannot-write]
    buffers.expanding = "hi belarus";
  });

  it("must be exact type", () => {
    // $FlowExpectedError[prop-missing]
    buffers.anyOtherProp = "anyValue";
  });

  describe("buffers.none", () => {
    it("must return Buffer when call it without args", () => {
      (buffers.none(): Buffer<any>);
    });
  });

  describe("buffers.fixed", () => {
    it("must return Buffer when call it without args", () => {
      (buffers.fixed(): Buffer<any>);
    });

    it("must return Buffer when first argument is number", () => {
      (buffers.fixed(5): Buffer<any>);
    });

    it("must raises an error when first argument isn't number", () => {
      // $FlowExpectedError[incompatible-call]: limit parameter must be given as a number
      (buffers.fixed("five"): Buffer<any>);
    });
  });

  describe("buffers.dropping", () => {
    it("must return Buffer when call it without args", () => {
      (buffers.dropping(): Buffer<any>);
    });

    it("must return Buffer when first argument is number", () => {
      (buffers.dropping(6): Buffer<any>);
    });

    it("must raises an error when first argument isn't number", () => {
      // $FlowExpectedError[incompatible-call]: limit parameter must be given as a number
      (buffers.dropping("six"): Buffer<any>);
    });
  });

  describe("buffers.sliding", () => {
    it("must return Buffer when call it without args", () => {
      (buffers.sliding(): Buffer<any>);
    });

    it("must return Buffer when first argument is number", () => {
      (buffers.sliding(7): Buffer<any>);
    });

    it("must raises an error when first argument isn't number", () => {
      // $FlowExpectedError[incompatible-call]: limit parameter must be given as a number
      (buffers.sliding("seven"): Buffer<any>);
    });
  });

  describe("buffers.expanding", () => {
    it("must return Buffer when call it without args", () => {
      (buffers.expanding(): Buffer<any>);
    });

    it("must return Buffer when first argument is number", () => {
      (buffers.expanding(8): Buffer<any>);
    });

    it("must raises an error when first argument isn't number", () => {
      // $FlowExpectedError[incompatible-call]: limit parameter must be given as a number
      (buffers.expanding("eight"): Buffer<any>);
    });
  });
});
