// @flow

import { describe, it } from "flow-typed-test";
import random from "math-random";

describe("math-random", () => {
  it("does not expect any arguments", () => {
    random();
    // $FlowExpectedError
    random(null);
    // $FlowExpectedError
    random({});
    // $FlowExpectedError
    random("test");
    // $FlowExpectedError
    random(5);
  });

  it('provides a property to check if random is "cryptographic"', () => {
    (random.cryptographic: ?boolean);
  });
});
