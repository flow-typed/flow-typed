// @flow
import * as plow from "plow-js";

/**
 * `$add`
 */
plow.$add("foo", "bar", { foo: ["baz"] });
plow.$add(["foo"], "bar", { foo: ["baz"] });
plow.$add("foo", "bar", { foo: ["baz"] }).foo;
plow.$add("foo", "bar", { foo: ["baz"] }).foo[0];
plow.$add("foo", "bar", { foo: ["baz"] }).foo[1];

// $FlowExpectedError
plow.$add("foo", "bar", { foo: ["baz"] }).bar;

plow.$add("foo", "bar")({ foo: ["baz"] });
plow.$add(["foo"], "bar")({ foo: ["baz"] });
plow.$add("foo", "bar")({ foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$add("foo", "bar")({ foo: ["baz"] }).bar;

plow.$add("foo")("bar")({ foo: ["baz"] });
plow.$add(["foo"])("bar")({ foo: ["baz"] });
plow.$add("foo")("bar")({ foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$add("foo")("bar")({ foo: ["baz"] }).bar;

// $FlowExpectedError
plow.$add(null, "bar", { foo: ["baz"] });

/**
 * `$drop`
 */
plow.$drop("foo.0", { foo: ["baz"] });
plow.$drop(["foo", 0], { foo: ["baz"] });
plow.$drop("foo.0", { foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$drop("foo.0", { foo: ["baz"] }).bar;

plow.$drop("foo.0")({ foo: ["baz"] });
plow.$drop(["foo", 0])({ foo: ["baz"] });
plow.$drop("foo.0")({ foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$drop("foo.0")({ foo: ["baz"] }).bar;

plow.$drop("foo.0")({ foo: ["baz"] });
plow.$drop(["foo", 0])({ foo: ["baz"] });
plow.$drop("foo.0")({ foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$drop("foo.0")({ foo: ["baz"] }).bar;

// $FlowExpectedError
plow.$drop(null, { foo: ["baz"] });

/**
 * `$override`
 */
plow.$override("foo", { baz: "bar" }, { foo: {} });
plow.$override(["foo"], { baz: "bar" }, { foo: {} });
plow.$override("foo", { baz: "bar" }, { foo: {} }).foo;
plow.$override("foo", { baz: "bar" }, { foo: {} }).foo.baz;

// $FlowExpectedError
plow.$override("foo", { baz: "bar" }, { foo: {} }) * 2;

plow.$override("foo", { baz: "bar" })({ foo: {} });
plow.$override(["foo"], { baz: "bar" })({ foo: {} });
plow.$override("foo", { baz: "bar" })({ foo: {} }).foo;

// $FlowExpectedError
plow.$override("foo", { baz: "bar" })({ foo: {} }) * 2;

plow.$override("foo")({ baz: "bar" })({ foo: {} });
plow.$override(["foo"])({ baz: "bar" })({ foo: {} });
plow.$override("foo")({ baz: "bar" })({ foo: {} }).foo;

// $FlowExpectedError
plow.$override("foo")({ baz: "bar" })({ foo: {} }) * 2;

// $FlowExpectedError
plow.$override(null, { baz: "bar" }, { foo: {} });

/**
 * `$pop`
 */
plow.$pop("foo.0", { foo: ["baz"] });
plow.$pop(["foo", 0], { foo: ["baz"] });
plow.$pop("foo.0", { foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$pop("foo.0", { foo: ["baz"] }).bar;

plow.$pop("foo.0")({ foo: ["baz"] });
plow.$pop(["foo", 0])({ foo: ["baz"] });
plow.$pop("foo.0")({ foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$pop("foo.0")({ foo: ["baz"] }).bar;

plow.$pop("foo.0")({ foo: ["baz"] });
plow.$pop(["foo", 0])({ foo: ["baz"] });
plow.$pop("foo.0")({ foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$pop("foo.0")({ foo: ["baz"] }).bar;

// $FlowExpectedError
plow.$pop(null, { foo: ["baz"] });

/**
 * `$remove`
 */
plow.$remove("foo", "bar", { foo: ["bar"] });
plow.$remove(["foo"], "bar", { foo: ["bar"] });
plow.$remove("foo", "bar", { foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$remove("foo", "bar", { foo: ["bar"] }).bar;

plow.$remove("foo", "bar")({ foo: ["bar"] });
plow.$remove(["foo"], "bar")({ foo: ["bar"] });
plow.$remove("foo", "bar")({ foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$remove("foo", "bar")({ foo: ["bar"] }).bar;

plow.$remove("foo")("bar")({ foo: ["bar"] });
plow.$remove(["foo"])("bar")({ foo: ["bar"] });
plow.$remove("foo")("bar")({ foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$remove("foo")("bar")({ foo: ["bar"] }).bar;

// $FlowExpectedError
plow.$remove(null, "bar", { foo: ["bar"] });

/**
 * `$set`
 */
plow.$set("foo", "bar", { foo: ["bar"] });
plow.$set(["foo"], "bar", { foo: ["bar"] });
plow.$set("foo", "bar", { foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$set("foo", "bar", { foo: ["bar"] }) * 2;

plow.$set("foo", "bar")({ foo: ["bar"] });
plow.$set(["foo"], "bar")({ foo: ["bar"] });
plow.$set("foo", "bar")({ foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$set("foo", "bar")({ foo: ["bar"] }) * 2;

plow.$set("foo")("bar")({ foo: ["bar"] });
plow.$set(["foo"])("bar")({ foo: ["bar"] });
plow.$set("foo")("bar")({ foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$set("foo")("bar")({ foo: ["bar"] }) * 2;

// $FlowExpectedError
plow.$set(null, "bar", { foo: ["bar"] });

/**
 * `$pop`
 */
plow.$pop("foo.0", { foo: ["baz"] });
plow.$pop(["foo", 0], { foo: ["baz"] });
plow.$pop("foo.0", { foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$pop("foo.0", { foo: ["baz"] }).bar;

plow.$pop("foo.0")({ foo: ["baz"] });
plow.$pop(["foo", 0])({ foo: ["baz"] });
plow.$pop("foo.0")({ foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$pop("foo.0")({ foo: ["baz"] }).bar;

plow.$pop("foo.0")({ foo: ["baz"] });
plow.$pop(["foo", 0])({ foo: ["baz"] });
plow.$pop("foo.0")({ foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$pop("foo.0")({ foo: ["baz"] }).bar;

// $FlowExpectedError
plow.$pop(null, { foo: ["baz"] });

/**
 * `$shift`
 */
plow.$shift("foo", { foo: ["baz"] });
plow.$shift(["foo"], { foo: ["baz"] });
plow.$shift("foo", { foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$shift("foo", { foo: ["baz"] }).bar;

plow.$shift("foo")({ foo: ["baz"] });
plow.$shift(["foo"])({ foo: ["baz"] });
plow.$shift("foo")({ foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$shift("foo")({ foo: ["baz"] }).bar;

plow.$shift("foo")({ foo: ["baz"] });
plow.$shift(["foo"])({ foo: ["baz"] });
plow.$shift("foo")({ foo: ["baz"] }).foo;

// $FlowExpectedError
plow.$shift("foo")({ foo: ["baz"] }).bar;

// $FlowExpectedError
plow.$shift(null, { foo: ["baz"] });

/**
 * `$unshift`
 */
plow.$unshift("foo", "bar", { foo: ["bar"] });
plow.$unshift(["foo"], "bar", { foo: ["bar"] });
plow.$unshift("foo", "bar", { foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$unshift("foo", "bar", { foo: ["bar"] }).bar;

plow.$unshift("foo", "bar")({ foo: ["bar"] });
plow.$unshift(["foo"], "bar")({ foo: ["bar"] });
plow.$unshift("foo", "bar")({ foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$unshift("foo", "bar")({ foo: ["bar"] }).bar;

plow.$unshift("foo")("bar")({ foo: ["bar"] });
plow.$unshift(["foo"])("bar")({ foo: ["bar"] });
plow.$unshift("foo")("bar")({ foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$unshift("foo")("bar")({ foo: ["bar"] }).bar;

// $FlowExpectedError
plow.$unshift(null, "bar", { foo: ["bar"] });

/**
 * `$merge`
 */
plow.$merge("foo", "bar", { foo: ["bar"] });
plow.$merge(["foo"], "bar", { foo: ["bar"] });
plow.$merge("foo", "bar", { foo: ["bar"] }).foo;
plow.$merge("foo", { baz: 1 }, { foo: { bar: 2 } }).foo.bar;
plow.$merge("foo", { baz: 1 }, { foo: { bar: 2 } }).foo.baz;

// $FlowExpectedError
plow.$merge("foo", "bar", { foo: ["bar"] }) * 2;

plow.$merge("foo", "bar")({ foo: ["bar"] });
plow.$merge(["foo"], "bar")({ foo: ["bar"] });
plow.$merge("foo", "bar")({ foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$merge("foo", "bar")({ foo: ["bar"] }) * 2;

plow.$merge("foo")("bar")({ foo: ["bar"] });
plow.$merge(["foo"])("bar")({ foo: ["bar"] });
plow.$merge("foo")("bar")({ foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$merge("foo")("bar")({ foo: ["bar"] }) * 2;

// $FlowExpectedError
plow.$merge(null, "bar", { foo: ["bar"] });

/**
 * `$toggle`
 */
plow.$toggle("foo", "bar", { foo: ["bar"] });
plow.$toggle(["foo"], "bar", { foo: ["bar"] });
plow.$toggle("foo", "bar", { foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$toggle("foo", "bar", { foo: ["bar"] }).bar;

plow.$toggle("foo", "bar")({ foo: ["bar"] });
plow.$toggle(["foo"], "bar")({ foo: ["bar"] });
plow.$toggle("foo", "bar")({ foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$toggle("foo", "bar")({ foo: ["bar"] }).bar;

plow.$toggle("foo")("bar")({ foo: ["bar"] });
plow.$toggle(["foo"])("bar")({ foo: ["bar"] });
plow.$toggle("foo")("bar")({ foo: ["bar"] }).foo;

// $FlowExpectedError
plow.$toggle("foo")("bar")({ foo: ["bar"] }).bar;

// $FlowExpectedError
plow.$toggle(null, "bar", { foo: ["bar"] });
