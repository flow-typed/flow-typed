// @flow
import { describe, it } from "flow-typed-test";
import { CANCEL } from "redux-saga";

describe("CANCEL", () => {
  it("must import CANCEL sting", () => {
    (CANCEL: "@@redux-saga/CANCEL_PROMISE");
  });
});
