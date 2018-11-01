// @flow

import { describe, it } from "flow-typed-test";
import random from "math-random";

describe("math-random", () => {
  it("does not expect any arguments", () => {
    random();
    // $ExpectError
    random(null);
    // $ExpectError
    random({});
    // $ExpectError
    random("test");
    // $ExpectError
    random(5);
  });

  it('provides a property to check if random is "cryptographic"', () => {
    (random.cryptographic: ?boolean);
  });
});
