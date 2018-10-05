// @flow
import { describe, it } from "flow-typed-test";
import { SAGA_LOCATION } from "redux-saga";

describe("SAGA_LOCATION", () => {
  it("must import SAGA_LOCATION symbol", () => {
    // I use string because Symbol don't supported flow.js
    (SAGA_LOCATION: "@@redux-saga/LOCATION");
  });
});
