// @flow

import { describe, it } from "flow-typed-test";

import LinkHeader from "http-link-header";

describe("http-link-header", () => {
  const headerValue = '<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"';
  const link = LinkHeader.parse(headerValue);

  it("constructor", () => {
    new LinkHeader(headerValue);

    // $ExpectError
    new LinkHeader(5);
  });

  it("parse - static", () => {
    LinkHeader.parse(headerValue);

    // $ExpectError
    LinkHeader.parse(5);
  });

  it("parse", () => {
    link.parse(headerValue);

    // $ExpectError
    link.parse(5);
  });

  it("rel", () => {
    link.rel("next");

    // $ExpectError
    link.rel(5);
  });

  it("get", () => {
    link.get("rel", "next");

    // $ExpectError
    link.get("rel");

    // $ExpectError
    link.get("rel", 5);

    // $ExpectError
    link.get(5, "next");
  });

  it("set", () => {
    link.set({uri: "https://www.github.com"});

    // $ExpectError
    link.set(5);
  });

  it("has", () => {
    link.has("rel", "next");

    // $ExpectError
    link.has("rel");

    // $ExpectError
    link.has("rel", 5);

    // $ExpectError
    link.has(5, "next");
  });

  it("toString", () => {
    link.toString();
  });
});
