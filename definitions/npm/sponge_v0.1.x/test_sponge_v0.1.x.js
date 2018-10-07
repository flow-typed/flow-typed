// @flow

import { describe, it } from "flow-typed-test";
import sponge from "sponge";

let file = "./test.js";
let buff = Buffer.from("");

describe("The `sponge` function", () => {
  it("should accept a string for its `file` parameter", () => {
    sponge(file);
    // $ExpectError
    sponge(buff);
    // $ExpectError
    sponge({});
    // $ExpectError
    sponge(file, () => {});
  });

  it("should return a Writable stream if `file` is passed", () => {
    (sponge(file): stream$Writable);
  });

  it("should return a Transform stream if `file` is omitted", () => {
    (sponge(): stream$Transform);
  });
});
