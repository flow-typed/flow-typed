// @flow

import supportsWebP from "supports-webp";
import { it, describe } from "flow-typed-test";

describe("supports-webp", () => {
  it("works", () => {
    const x: boolean = supportsWebP;
  });

  it("raises error", () => {
    // $FlowExpectedError - imported value is a boolean
    const x: number = supportsWebP;
    // $FlowExpectedError - imported value is a boolean
    const y: string = supportsWebP;
  });
});
