// @flow strict

import * as tld from "tldjs";
import { describe, it } from "flow-typed-test";

describe("tldjs", () => {
  it("errors", () => {
    // $FlowExpectedError
    tld.tldExists();
  });

  it("works", () => {
    (tld.tldExists("google.com"): boolean);
    (tld.tldExists("amazon.co.uk"): boolean);
    (tld.tldExists(
      "https://user:password@example.co.uk:8080/some/path?and&query#hash"
    ): boolean);
  });

  it("getDomain", () => {
    (tld.getDomain("localhost"): string | null);
    (tld.getDomain("google.com"): string | null);
    (tld.getDomain(
      "https://user:password@example.co.uk:8080/some/path?and&query#hash"
    ): string | null);
  });

  it("getSubdomain", () => {
    (tld.getSubdomain("vhost.localhost"): string | null);
    (tld.getSubdomain("google.com"): string | null);
  });

  it("getPublicSuffix", () => {
    (tld.getPublicSuffix("google.com"): string | null);
  });

  it("isValidHostname", () => {
    (tld.isValidHostname("google.com"): boolean);
    (tld.isValidHostname(
      "https://user:password@example.co.uk:8080/some/path?and&query#hash"
    ): boolean);
  });

  it("extractHostname", () => {
    (tld.extractHostname(
      "https://user:password@example.co.uk:8080/some/path?and&query#hash"
    ): string | null);
  });

  it("parse", () => {
    const r = tld.parse(
      "https://user:password@example.co.uk:8080/some/path?and&query#hash"
    );
    (r.isValid: boolean);
    (r.isIp: boolean);
    (r.tldExists: boolean);
    (r.publicSuffix: string | null);
    (r.domain: string | null);
    (r.subdomain: string | null);
  });

  it("fromUserSettings", () => {
    const tld2 = tld.fromUserSettings({ validHosts: ["localhost"] });
    (tld2.getDomain("localhost"): string | null);
    (tld2.getSubdomain("vhost.localhost"): string | null);
  });
});
