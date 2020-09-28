// @flow

import { describe, it } from "flow-typed-test";
import trimRight from "trim-right";

describe("trim-right", () => {
  it("expects a string as an argument", () => {
    trimRight(" zxc");
    // $FlowExpectedError
    trimRight();
    // $FlowExpectedError
    trimRight(null);
    // $FlowExpectedError
    trimRight(5);
    // $FlowExpectedError
    trimRight({});
  });

  it("returns a string", () => {
    (trimRight(" zxc"): string);
  });
});
