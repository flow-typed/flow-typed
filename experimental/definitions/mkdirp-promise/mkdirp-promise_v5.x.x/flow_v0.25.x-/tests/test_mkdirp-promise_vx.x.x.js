// @flow strict

import mkdirp from "mkdirp-promise";
import { describe, it } from "flow-typed-test";

describe("mkdirp-promise", () => {
  it("errors", () => {
    // $ExpectError
    mkdirp();
    // $ExpectError
    mkdirp(42);
  });

  it("works", () => {
    (mkdirp("foo"): Promise<void>);
  });
});
