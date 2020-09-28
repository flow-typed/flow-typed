// @flow strict

import { describe, it } from "flow-typed-test";
import limit from "promise-limit";

describe("promise-limit", () => {
  it("errors", () => {
    // $FlowExpectedError
    limit("");
  });

  it("works", () => {
    const limiter = limit(3);

    function dosomething_(): Promise<string> {
      return Promise.resolve("hi");
    }
    const dosomething = () => limiter(() => dosomething_());
    (dosomething: () => Promise<string>);
  });
});
