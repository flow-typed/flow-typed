// @flow
import { describe, it } from "flow-typed-test";
import { SAGA_LOCATION } from "redux-saga";

describe("SAGA_LOCATION", () => {
  it("must import SAGA_LOCATION string", () => {
    (SAGA_LOCATION: "@@redux-saga/LOCATION");
  });
});
