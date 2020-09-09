// @flow

import { describe, it } from "flow-typed-test";
import trimLeft from "trim-left";

describe("trim-left", () => {
  it("expects a string as an argument", () => {
    trimLeft("zxc ");
    // $FlowExpectedError
    trimLeft();
    // $FlowExpectedError
    trimLeft(null);
    // $FlowExpectedError
    trimLeft(5);
    // $FlowExpectedError
    trimLeft({});
  });

  it("returns a string", () => {
    (trimLeft("zxc "): string);
  });
});
