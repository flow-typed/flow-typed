// @flow strict

import { describe, it } from "flow-typed-test";
import cookieParser from "cookie-parser";
import type { Middleware } from "express";

describe("cookie-parser", () => {
  it("errors", () => {
    // $ExpectError
    cookieParser(42);
  });

  it("works", () => {
    (cookieParser(): Middleware);
  });
});
