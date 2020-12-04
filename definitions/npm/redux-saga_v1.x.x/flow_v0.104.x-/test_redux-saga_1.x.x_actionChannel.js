// @flow
import { describe, it } from "flow-typed-test";
import { buffers, type Buffer } from "redux-saga";
import { actionChannel } from "redux-saga/effects";

describe("actionChannel(Pattern, ?Buffer) effect", () => {
  describe("structure", () => {
    const ach = actionChannel("");

    it('type must be equal "ACTION_CHANNEL"', () => {
      (ach.type: "ACTION_CHANNEL");
    });

    it("returned object must be read only", () => {
      // $FlowExpectedError: read-only  property
      ach.type = "anyType";
      // $FlowExpectedError: read-only  property
      ach.payload = {};
    });

    it("returned object must be exact", () => {
      // $FlowExpectedError: exact type
      ach.abc = 69;
    });
  });

  describe("actionChannel(Pattern)", () => {
    const ach0 = actionChannel();
    const ach1 = actionChannel("TEST");
    const ach2 = actionChannel(["SIGN_IN", "SIGN_OUT"]);
    const ach3 = actionChannel(() => true);
    const ach4 = actionChannel([b => true, a => false]);

    it("must passes when used properly", () => {
      (ach0.payload.buffer: void);
      (ach1.payload.buffer: void);
      (ach2.payload.buffer: void);
      (ach3.payload.buffer: void);
      (ach4.payload.buffer: void);

      (ach0.payload.pattern: void);
      (ach1.payload.pattern: string);
      (ach2.payload.pattern[0]: string);
      (ach3.payload.pattern: Function);
      (ach4.payload.pattern[0]: Function);
    });

    it("must rises an error", () => {
      // $FlowExpectedError
      (ach2.payload.pattern[99]: number);
      // $FlowExpectedError
      (ach4.payload.pattern[2]: string);
    });
  });

  describe("actionChannel(Pattern, Buffer)", () => {
    const ach0 = actionChannel("TEST", buffers.none());

    it("must passes when used properly", () => {
      (ach0.payload.buffer: Buffer<*>);
      (ach0.payload.pattern: string);
    });
  });
});
