// @flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { first } from "rxjs/operators";

const isFooBar = (value: "foo" | "bar") => /^(foo|bar)$/.test(value);

it("should support an undefined predicate with no default", () => {
  const o = of("foo").pipe(first(undefined));
});

it("should support an undefined predicate with a T default", () => {
  const o = of("foo").pipe(first(undefined, "bar"));
});

it("should support an undefined predicate with a non-T default", () => {
  const o = of("foo").pipe(first(undefined, false));
});

it("should default D to T with an undfined predicate", () => {
  const o = of("foo").pipe(first<string>(undefined));
});

it("should support a null predicate with no default", () => {
  const o = of("foo").pipe(first(null));
});

it("should support a null predicate with a T default", () => {
  const o = of("foo").pipe(first(null, "bar"));
});

it("should support a null predicate with a non-T default", () => {
  const o = of("foo").pipe(first(null, false));
});

it("should default D to T with a null predicate", () => {
  const o = of("foo").pipe(first<string>(null));
});

it("should support a user-defined type guard with no default", () => {
  const o = of("foo").pipe(first(isFooBar));
});

it("should support a user-defined type guard with an S default", () => {
  const o = of("foo").pipe(first(isFooBar, "bar"));
});

it("should widen a user-defined type guard with a non-S default", () => {
  const o = of("foo").pipe(first(isFooBar, false));
});

it("should support a predicate with no default", () => {
  const o = of("foo").pipe(first(x => !!x));
});

it("should support a predicate with a T default", () => {
  const o = of("foo").pipe(first(x => !!x, "bar"));
});

it("should support a predicate with a non-T default", () => {
  const o = of("foo").pipe(first(x => !!x, false));
});

it("should default D to T with a predicate", () => {
  const o = of("foo").pipe(first<string>(x => !!x)); // $Observable<string>
});
