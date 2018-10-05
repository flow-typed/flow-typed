// @flow
import { describe, it } from "flow-typed-test";
import { CANCEL } from "redux-saga";

describe("CANCEL", () => {
  it("must import CANCEL symbol", () => {
    // I use string because Symbol don't supported flow.js
    (CANCEL: "@@redux-saga/CANCEL_PROMISE");
  });
});
