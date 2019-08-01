// @flow
import * as plow from "plow-js";

/**
 * `$all`
 */
plow.$all(plow.$add("foo", "bar"), plow.$add("foo", "foo"))({ foo: ["baz"] });

// $ExpectError
plow.$all(plow.$add("foo", "bar"), plow.$add("foo", "foo"))({ foo: ["baz"] }) *
  2;

/**
 * `$summarize`
 */
const summarizeOps = [
  plow.$contains("foo", "bar"),
  plow.$contains("foo", "baz")
];
const summarizeFinisher = (containsBar, containsBaz) => ({
  containsBar,
  containsBaz
});
plow.$summarize(summarizeOps, summarizeFinisher, { foo: ["baz"] }).containsBaz;

// $ExpectError
plow.$summarize(summarizeOps, summarizeFinisher, { foo: ["baz"] }).foo;

plow.$summarize(summarizeOps, summarizeFinisher)({ foo: ["baz"] });

plow.$summarize(summarizeOps)(summarizeFinisher)({ foo: ["baz"] });

/**
 * `$traverse`
 */
plow.$traverse(x => x * 2, { foo: 1, bar: 3 });

// $ExpectError
plow.$traverse(x => x * 2, { foo: 1, bar: 3 }) * 2;

plow.$traverse(x => x * 2)({ foo: 1, bar: 3 });

/**
 * `$log`
 */
plow.$log(["foo"], { foo: 1 }) * 2;

plow.$log({ foo: 1 });
