// @flow

import supportsWebP from "supports-webp";
import { it, describe } from "flow-typed-test";

describe("supports-webp", () => {
  it("works", () => {
    const x: boolean = supportsWebP;
  });

  it("raises error", () => {
    // $ExpectError - imported value is a boolean
    const x: number = supportsWebP;
    // $ExpectError - imported value is a boolean
    const y: string = supportsWebP;
  });
});
