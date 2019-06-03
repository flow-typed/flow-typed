// @flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { filter } from "rxjs/operators";

it("should support a predicate", () => {
  const o = of(1, 2, 3).pipe(filter(value => value < 3));
});

it("should support a predicate with an index", () => {
  const o = of(1, 2, 3).pipe(filter((value, index) => index < 3));
});

it("should support a predicate and an argument", () => {
  const o = of(1, 2, 3).pipe(filter(value => value < 3, "bonjour"));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(filter());
});

it("should enforce predicate types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(filter(value => value < "3"));
  // $ExpectError
  const p = of(1, 2, 3).pipe(filter((value, index) => index < "3"));
});
