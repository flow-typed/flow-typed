// @flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { find } from "rxjs/operators";

it("should support a user-defined type guard", () => {
  const o = of("foo").pipe(find((s: "foo") => true));
});

it("should support a user-defined type guard that takes an index", () => {
  const o = of("foo").pipe(find((s: "foo", index) => true));
});

it("should support a user-defined type guard that takes an index and the source", () => {
  const o = of("foo").pipe(find((s: "foo", index, source) => true));
});

it("should support a predicate", () => {
  const o = of("foo").pipe(find(s => true));
});

it("should support a predicate that takes an index", () => {
  const o = of("foo").pipe(find((s, index) => true));
});

it("should support a predicate that takes an index and the source", () => {
  const o = of("foo").pipe(find((s, index, source) => true));
});
