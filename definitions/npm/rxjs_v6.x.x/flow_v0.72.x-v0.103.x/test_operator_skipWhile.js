//@flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { skipWhile } from "rxjs/operators";

it("should support a predicate", () => {
  const o = of("foo", "bar", "baz").pipe(skipWhile(value => value === "bar"));
});

it("should support a predicate with an index", () => {
  const o = of("foo", "bar", "baz").pipe(
    skipWhile((value, index) => index < 3)
  );
});

it("should enforce types", () => {
  // $FlowExpectedError
  const o = of("foo", "bar", "baz").pipe(skipWhile());
});

it("should enforce predicate types", () => {
  // $FlowExpectedError
  const o = of("foo", "bar", "baz").pipe(skipWhile(value => value < 3));
  // $FlowExpectedError
  const p = of("foo", "bar", "baz").pipe(skipWhile((value, index) => index < "3"));
});

it("should enforce predicate return type", () => {
  // $FlowExpectedError
  const o = of("foo", "bar", "baz").pipe(skipWhile(value => value));
});
