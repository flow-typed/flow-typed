// @flow

import { it } from "flow-typed-test";
import { of, Observable } from "rxjs";
import { findIndex } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of("foo", "bar", "baz").pipe(findIndex(p => p === "foo"));
});

it("should support a predicate that takes an index ", () => {
  const o = of("foo", "bar", "baz").pipe(findIndex((p, index) => index === 3));
});

it("should support a predicate that takes a source ", () => {
  const o = of("foo", "bar", "baz").pipe(
    findIndex((p, index, source) => p === "foo")
  );
});

it("should support an argument ", () => {
  const o = of("foo", "bar", "baz").pipe(findIndex(p => p === "foo", 123));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of("foo", "bar", "baz").pipe(findIndex());
});

it("should enforce predicate types", () => {
  // $ExpectError
  const o = of("foo", "bar", "baz").pipe(findIndex((p: number) => p === 3));
  // $ExpectError
  const p = of("foo", "bar", "baz").pipe(findIndex((p, index: string) => p === 3));
  // $ExpectError
  const q = of("foo", "bar", "baz").pipe(findIndex((p, index, source: Observable<number>) => p === 3));
});

it("should enforce predicate return type", () => {
  // $ExpectError
  const o = of("foo", "bar", "baz").pipe(findIndex(p => p));
});
