// @flow

import { describe, it } from "flow-typed-test";

import LinkHeader from "http-link-header";

describe("http-link-header", () => {
  const headerValue = '<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"';
  const link = LinkHeader.parse(headerValue);

  it("constructor", () => {
    new LinkHeader(headerValue);
  });

  it("parse - static", () => {
    LinkHeader.parse(headerValue);
  });

  it("parse", () => {
    link.parse(headerValue);
  });

  it("rel", () => {
    link.rel("next");
  });

  it("get", () => {
    link.get("rel", "next");
  });

  it("set", () => {
    link.set({uri: "https://www.github.com"});
  });

  it("has", () => {
    link.has("rel", "next");
  });

  it("toString", () => {
    link.toString();
  });
});
