// @flow strict

import { describe, it } from "flow-typed-test";
import objectHash from "object-hash";

describe("object-hash", () => {
  it("errors", () => {
    // $FlowExpectedError
    objectHash();
    // $FlowExpectedError
    objectHash(32);
    // $FlowExpectedError
    objectHash("string");
  });

  it("works with arrays", () => {
    (objectHash([]): string);
    (objectHash(["a", "b"]): string);
  });

  it("works with objects", () => {
    (objectHash({}): string);
    (objectHash({ a: 1 }): string);
  });

  it("works with options", () => {
    (objectHash({ a: 1 }, { algorithm: "md5" }): string);
  });
});
