// @flow

import { describe, it } from "flow-typed-test";

import { parse, compile, tokensToFunction, tokensToRegExp } from "path-to-regexp";

describe("path-to-regexp", () => {
  const url = "/test/url/:with/param";
  const tokens = [
    "/test",
    "/url",
    {name: "with", prefix: "/", delimiter: "/", optional: false, repeat: false, partial: false, pattern: "[^\\/]+?"},
    "/param"
  ];
  const badTokens = [
    "/test",
    "/url",
    {prefix: "/", delimiter: "/", optional: false, repeat: false, partial: false, pattern: "[^\\/]+?"},
    "/param"
  ];

  it("parse", () => {
    parse(url);
  });

  it("compile", () => {
    compile(url);
  });

  it("tokensToFunction", () => {
    tokensToFunction(tokens);

    // $ExpectError
    tokensToFunction(badTokens);
  });

  it("tokensToRegExp", () => {
    tokensToRegExp(tokens);

    // $ExpectError
    tokensToRegExp(badTokens);
  });
});
