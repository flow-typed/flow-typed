// @flow strict

import { describe, it } from "flow-typed-test";
import randomize from "randomatic";

describe("randomatic", () => {
  it("errors", () => {
    // $FlowExpectedError
    randomize();
  });

  it("works", () => {
    (randomize("00"): string);
    (randomize("*", 10): string);
    (randomize("Aa0!", 10): string);
  });
});
