// @flow
import * as plow from "plow-js";

/**
 * `$get`
 */
plow.$get("foo", { foo: 2 });
plow.$get(["foo"], { foo: 2 });
plow.$get(["foo", 1], { foo: [2] });
plow.$get(["foo"])({ foo: 2 });

// $FlowExpectedError
plow.$get({}, { foo: 2 });

/**
 * `$count`
 */
plow.$count("foo", { foo: 2 });
plow.$count(["foo"], { foo: 2 });
plow.$count(["foo", 1], { foo: [2] });
plow.$count(["foo"])({ foo: 2 });

// $FlowExpectedError
plow.$count({}, { foo: 2 });

// $FlowExpectedError
plow.$count({}, { foo: 2 }).length;

/**
 * `$contains`
 */
plow.$contains(2, "foo", { foo: [2] });
plow.$contains(2, ["foo"], { foo: [2] });
plow.$contains(2, "foo")({ foo: [2] });
plow.$contains(2)("foo")({ foo: [2] });

// $FlowExpectedError
plow.$contains(2, {}, { foo: 2 });

/**
 * `$head`
 */
plow.$head("foo", { foo: [2] });
plow.$head(["foo"], { foo: [2] });
plow.$head(["foo"], { foo: [2] });
plow.$head(["foo"])({ foo: [2] });

// $FlowExpectedError
plow.$head({}, { foo: 2 });

/**
 * `$tail`
 */
plow.$tail("foo", { foo: [0, 2] });
plow.$tail(["foo"], { foo: [0, 2] });
plow.$tail(["foo"], { foo: [0, 2] });
plow.$tail(["foo"])({ foo: [0, 2] });
plow.$tail(["foo"])({ foo: [0, 2] }).length;

// $FlowExpectedError
plow.$tail({}, { foo: [0, 2] });

// $FlowExpectedError
plow.$tail({}, { foo: [0, 2] }) * 2;

/**
 * `$last`
 */
plow.$last("foo", { foo: [2] });
plow.$last(["foo"], { foo: [2] });
plow.$last(["foo"], { foo: [2] });
plow.$last(["foo"])({ foo: [2] });

// $FlowExpectedError
plow.$last({}, { foo: 2 });

/**
 * `$map`
 */
plow.$map(x => x * 2, "foo", { foo: [1, 2] });
plow.$map("name", "foo", {
  foo: {
    bar: { name: "Bar" },
    baz: { name: "Baz" }
  }
});
plow.$map(x => x * 2, ["foo"], { foo: [1, 2] });
plow.$map(x => x * 2, "foo")({ foo: [1, 2] });
plow.$map(x => x * 2)("foo")({ foo: [1, 2] });

// $FlowExpectedError
plow.$map(null, {}, { foo: 2 });

// $FlowExpectedError
plow.$map(x => x * 2, {}, { foo: 2 });

/**
 * `$transform`
 */
plow.$transform(
  {
    fooBar: plow.$get("foo.bar"),
    bazQux: plow.$get(["baz", "qux"])
  },
  {
    foo: { bar: "Foo bar" },
    baz: { qux: "Baz qux" }
  }
);
plow.$transform({
  fooBar: plow.$get("foo.bar"),
  bazQux: plow.$get(["baz", "qux"])
})({
  foo: { bar: "Foo bar" },
  baz: { qux: "Baz qux" }
});

// $FlowExpectedError
plow.$transform("foo", {
  foo: { bar: "Foo bar" },
  baz: { qux: "Baz qux" }
});

// $FlowExpectedError
plow.$transform(["foo"], {
  foo: { bar: "Foo bar" },
  baz: { qux: "Baz qux" }
});

/**
 * `$resolve`
 */
plow.$resolve("foo", { foo: "bar.baz", bar: { baz: 2 } });
plow.$resolve(["foo"], { foo: "bar.baz", bar: { baz: 2 } });
plow.$resolve(["foo"], { foo: "bar.baz", bar: { baz: 2 } });
plow.$resolve(["foo"])({ foo: "bar.baz", bar: { baz: 2 } });

// $FlowExpectedError
plow.$resolve({}, { foo: "bar.baz", bar: { baz: 2 } });

/**
 * `$and`
 */
plow.$and(
  plow.$contains(2, "foo"),
  plow.$contains(0, "foo"),
  plow.$contains(1, "foo")
)({
  foo: [2]
});

// $FlowExpectedError
plow.$and(plow.$contains(1, "foo"), { foo: [2] }).length;

/**
 * `$or`
 */
plow.$or(
  plow.$contains(2, "foo"),
  plow.$contains(0, "foo"),
  plow.$contains(1, "foo")
)({
  foo: [2]
});

// $FlowExpectedError
plow.$or(plow.$contains(1, "foo"), { foo: [2] }).length;

/**
 * `$not`
 */
plow.$not(plow.$contains(2, "foo"), { foo: [2] });
plow.$not(plow.$contains(0, "foo"), { foo: [2] });

// $FlowExpectedError
plow.$not(plow.$contains(0, "foo"), { foo: [2] }).length;

// $FlowExpectedError
plow.$not(null, { foo: [2] });

// $FlowExpectedError
plow.$not(2, { foo: [2] });
