// @flow

import { describe, it } from "flow-typed-test";
import trimRight from "trim-right";

describe("trim-right", () => {
  it("expects a string as an argument", () => {
    trimRight(" zxc");
    // $ExpectError
    trimRight();
    // $ExpectError
    trimRight(null);
    // $ExpectError
    trimRight(5);
    // $ExpectError
    trimRight({});
  });

  it("returns a string", () => {
    (trimRight(" zxc"): string);
  });
});
