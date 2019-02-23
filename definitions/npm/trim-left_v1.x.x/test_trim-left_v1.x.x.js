// @flow

import { describe, it } from "flow-typed-test";
import trimLeft from "trim-left";

describe("trim-left", () => {
  it("expects a string as an argument", () => {
    trimLeft("zxc ");
    // $ExpectError
    trimLeft();
    // $ExpectError
    trimLeft(null);
    // $ExpectError
    trimLeft(5);
    // $ExpectError
    trimLeft({});
  });

  it("returns a string", () => {
    (trimLeft("zxc "): string);
  });
});
