// @flow
import * as plow from "plow-js";

/**
 * `$add`
 */
plow.$add("foo", "bar", { foo: ["baz"] });
plow.$add(["foo"], "bar", { foo: ["baz"] });
plow.$add("foo", "bar", { foo: ["baz"] }).foo;

// $ExpectError
plow.$add("foo", "bar", { foo: ["baz"] }).bar;

plow.$add("foo", "bar")({ foo: ["baz"] });
plow.$add(["foo"], "bar")({ foo: ["baz"] });
plow.$add("foo", "bar")({ foo: ["baz"] }).foo;

// $ExpectError
plow.$add("foo", "bar")({ foo: ["baz"] }).bar;

plow.$add("foo")("bar")({ foo: ["baz"] });
plow.$add(["foo"])("bar")({ foo: ["baz"] });
plow.$add("foo")("bar")({ foo: ["baz"] }).foo;

// $ExpectError
plow.$add("foo")("bar")({ foo: ["baz"] }).bar;

// $ExpectError
plow.$add(null, "bar", { foo: ["baz"] });

/**
 * `$drop`
 */
plow.$drop("foo.0", { foo: ["baz"] });
plow.$drop(["foo", 0], { foo: ["baz"] });
plow.$drop("foo.0", { foo: ["baz"] }).foo;

// $ExpectError
plow.$drop("foo.0", { foo: ["baz"] }).bar;

plow.$drop("foo.0")({ foo: ["baz"] });
plow.$drop(["foo", 0])({ foo: ["baz"] });
plow.$drop("foo.0")({ foo: ["baz"] }).foo;

// $ExpectError
plow.$drop("foo.0")({ foo: ["baz"] }).bar;

plow.$drop("foo.0")({ foo: ["baz"] });
plow.$drop(["foo", 0])({ foo: ["baz"] });
plow.$drop("foo.0")({ foo: ["baz"] }).foo;

// $ExpectError
plow.$drop("foo.0")({ foo: ["baz"] }).bar;

// $ExpectError
plow.$drop(null, { foo: ["baz"] });

/**
 * `$override`
 */
plow.$override("foo", { baz: "bar" }, { foo: {} });
plow.$override(["foo"], { baz: "bar" }, { foo: {} });
plow.$override("foo", { baz: "bar" }, { foo: {} }).foo;

// $ExpectError
plow.$override("foo", { baz: "bar" }, { foo: {} }).bar;

plow.$override("foo", { baz: "bar" })({ foo: {} });
plow.$override(["foo"], { baz: "bar" })({ foo: {} });
plow.$override("foo", { baz: "bar" })({ foo: {} }).foo;

// $ExpectError
plow.$override("foo", { baz: "bar" })({ foo: {} }).bar;

plow.$override("foo")({ baz: "bar" })({ foo: {} });
plow.$override(["foo"])({ baz: "bar" })({ foo: {} });
plow.$override("foo")({ baz: "bar" })({ foo: {} }).foo;

// $ExpectError
plow.$override("foo")({ baz: "bar" })({ foo: {} }).bar;

// $ExpectError
plow.$override(null, { baz: "bar" }, { foo: {} });

/**
 * `$pop`
 */
plow.$pop("foo.0", { foo: ["baz"] });
plow.$pop(["foo", 0], { foo: ["baz"] });
plow.$pop("foo.0", { foo: ["baz"] }).foo;

// $ExpectError
plow.$pop("foo.0", { foo: ["baz"] }).bar;

plow.$pop("foo.0")({ foo: ["baz"] });
plow.$pop(["foo", 0])({ foo: ["baz"] });
plow.$pop("foo.0")({ foo: ["baz"] }).foo;

// $ExpectError
plow.$pop("foo.0")({ foo: ["baz"] }).bar;

plow.$pop("foo.0")({ foo: ["baz"] });
plow.$pop(["foo", 0])({ foo: ["baz"] });
plow.$pop("foo.0")({ foo: ["baz"] }).foo;

// $ExpectError
plow.$pop("foo.0")({ foo: ["baz"] }).bar;

// $ExpectError
plow.$pop(null, { foo: ["baz"] });

/**
 * `$remove`
 */
plow.$remove("foo", "bar", { foo: ["bar"] });
plow.$remove(["foo"], "bar", { foo: ["bar"] });
plow.$remove("foo", "bar", { foo: ["bar"] }).foo;

// $ExpectError
plow.$remove("foo", "bar", { foo: ["bar"] }).bar;

plow.$remove("foo", "bar")({ foo: ["bar"] });
plow.$remove(["foo"], "bar")({ foo: ["bar"] });
plow.$remove("foo", "bar")({ foo: ["bar"] }).foo;

// $ExpectError
plow.$remove("foo", "bar")({ foo: ["bar"] }).bar;

plow.$remove("foo")("bar")({ foo: ["bar"] });
plow.$remove(["foo"])("bar")({ foo: ["bar"] });
plow.$remove("foo")("bar")({ foo: ["bar"] }).foo;

// $ExpectError
plow.$remove("foo")("bar")({ foo: ["bar"] }).bar;

// $ExpectError
plow.$remove(null, "bar", { foo: ["bar"] });

/**
 * `$set`
 */
plow.$set("foo", "bar", { foo: ["bar"] });
plow.$set(["foo"], "bar", { foo: ["bar"] });
plow.$set("foo", "bar", { foo: ["bar"] }).foo;

// $ExpectError
plow.$set("foo", "bar", { foo: ["bar"] }).bar;

plow.$set("foo", "bar")({ foo: ["bar"] });
plow.$set(["foo"], "bar")({ foo: ["bar"] });
plow.$set("foo", "bar")({ foo: ["bar"] }).foo;

// $ExpectError
plow.$set("foo", "bar")({ foo: ["bar"] }).bar;

plow.$set("foo")("bar")({ foo: ["bar"] });
plow.$set(["foo"])("bar")({ foo: ["bar"] });
plow.$set("foo")("bar")({ foo: ["bar"] }).foo;

// $ExpectError
plow.$set("foo")("bar")({ foo: ["bar"] }).bar;

// $ExpectError
plow.$set(null, "bar", { foo: ["bar"] });

/**
 * `$pop`
 */
plow.$pop("foo.0", { foo: ["baz"] });
plow.$pop(["foo", 0], { foo: ["baz"] });
plow.$pop("foo.0", { foo: ["baz"] }).foo;

// $ExpectError
plow.$pop("foo.0", { foo: ["baz"] }).bar;

plow.$pop("foo.0")({ foo: ["baz"] });
plow.$pop(["foo", 0])({ foo: ["baz"] });
plow.$pop("foo.0")({ foo: ["baz"] }).foo;

// $ExpectError
plow.$pop("foo.0")({ foo: ["baz"] }).bar;

plow.$pop("foo.0")({ foo: ["baz"] });
plow.$pop(["foo", 0])({ foo: ["baz"] });
plow.$pop("foo.0")({ foo: ["baz"] }).foo;

// $ExpectError
plow.$pop("foo.0")({ foo: ["baz"] }).bar;

// $ExpectError
plow.$pop(null, { foo: ["baz"] });

/**
 * `$shift`
 */
plow.$shift("foo", { foo: ["baz"] });
plow.$shift(["foo"], { foo: ["baz"] });
plow.$shift("foo", { foo: ["baz"] }).foo;

// $ExpectError
plow.$shift("foo", { foo: ["baz"] }).bar;

plow.$shift("foo")({ foo: ["baz"] });
plow.$shift(["foo"])({ foo: ["baz"] });
plow.$shift("foo")({ foo: ["baz"] }).foo;

// $ExpectError
plow.$shift("foo")({ foo: ["baz"] }).bar;

plow.$shift("foo")({ foo: ["baz"] });
plow.$shift(["foo"])({ foo: ["baz"] });
plow.$shift("foo")({ foo: ["baz"] }).foo;

// $ExpectError
plow.$shift("foo")({ foo: ["baz"] }).bar;

// $ExpectError
plow.$shift(null, { foo: ["baz"] });
