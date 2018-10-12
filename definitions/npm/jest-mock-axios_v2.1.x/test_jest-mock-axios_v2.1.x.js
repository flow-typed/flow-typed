// @flow

import { describe, it } from "flow-typed-test";

import mockAxios from "jest-mock-axios";

describe("jest-mock-axios", () => {
  it("mockResponse", () => {
    mockAxios.mockResponse({});
  });

  it("mockError", () => {
    mockAxios.mockError({});
  });


  it("lastPromiseGet", () => {
    mockAxios.lastPromiseGet();
  });

  it("lastReqGet", () => {
    mockAxios.lastReqGet();
  });

  it("reset", () => {
    mockAxios.reset();
  });
});
