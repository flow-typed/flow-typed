// @flow

import { it } from "flow-typed-test";
import { of, asyncScheduler } from "rxjs";
import { debounceTime } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(1, 2, 3).pipe(debounceTime(47));
});

it("should support a scheduler", () => {
  const o = of(1, 2, 3).pipe(debounceTime(47, asyncScheduler));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(debounceTime());
  // $ExpectError
  const p = of(1, 2, 3).pipe(debounceTime("foo"));
  // $ExpectError
  const q = of(1, 2, 3).pipe(debounceTime(47, "foo"));
});
