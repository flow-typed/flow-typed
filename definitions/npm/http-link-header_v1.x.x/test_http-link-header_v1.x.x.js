// @flow

import { describe, it } from "flow-typed-test";

import LinkHeader from "http-link-header";

describe("http-link-header", () => {
  const headerValue = '<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=15>; rel="next",<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=34>; rel="last",<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=1>; rel="first",<https://api.github.com/search/code?q=addClass+user%3Amozilla&page=13>; rel="prev"';
  const link = LinkHeader.parse(headerValue);

  it("constructor", () => {
    new LinkHeader(headerValue);

    // $FlowExpectedError
    new LinkHeader(5);
  });

  it("parse - static", () => {
    LinkHeader.parse(headerValue);

    // $FlowExpectedError
    LinkHeader.parse(5);
  });

  it("parse", () => {
    link.parse(headerValue);

    // $FlowExpectedError
    link.parse(5);
  });

  it("rel", () => {
    link.rel("next");

    // $FlowExpectedError
    link.rel(5);
  });

  it("get", () => {
    link.get("rel", "next");

    // $FlowExpectedError
    link.get("rel");

    // $FlowExpectedError
    link.get("rel", 5);

    // $FlowExpectedError
    link.get(5, "next");
  });

  it("set", () => {
    link.set({uri: "https://www.github.com"});

    // $FlowExpectedError
    link.set(5);
  });

  it("has", () => {
    link.has("rel", "next");

    // $FlowExpectedError
    link.has("rel");

    // $FlowExpectedError
    link.has("rel", 5);

    // $FlowExpectedError
    link.has(5, "next");
  });

  it("toString", () => {
    link.toString();
  });
});
