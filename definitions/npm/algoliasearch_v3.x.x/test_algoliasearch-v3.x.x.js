// @flow
import { describe, it } from "flow-typed-test";
import algoliasearchImport from "algoliasearch";

describe("algoliasearch", () => {
  it("works with `require`", () => {
    const algoliasearch = require("algoliasearch");
    const searchIndex = algoliasearch("", "").initIndex("");
    searchIndex.search("test").then(result => result.hits);
  });

  it("works with `import` syntax", () => {
    const searchIndex = algoliasearchImport("", "").initIndex("");
    searchIndex.search("test").then(result => result.hits);
  });

  it("works with `await import` syntax", async () => {
    const algoliasearch = await import("algoliasearch");
    const searchIndex = algoliasearch.default("", "").initIndex("");
    searchIndex.search("test").then(result => result.hits);
  });

  it("reactnative works", () => {
    const algoliasearch = require("algoliasearch/reactnative");
    const searchIndex = algoliasearch("", "").initIndex("");
    searchIndex.search("test").then(result => result.hits);
  });

  it("lite works", () => {
    const algoliasearch = require("algoliasearch/lite");
    const searchIndex = algoliasearch("", "").initIndex("");
    searchIndex.search("test").then(result => result.hits);
  });
});
