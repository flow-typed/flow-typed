//@flow

import { it } from "flow-typed-test";
import { of, asyncScheduler } from "rxjs";
import { startWith } from "rxjs/operators";

it("should infer correctly with one value", () => {
  const o = of(1, 2, 3).pipe(startWith(4));
});

it("should infer correctly with multiple values", () => {
  const o = of(1, 2, 3).pipe(startWith(4, 5, 6));
});

it("should infer correctly with no value", () => {
  const o = of(1, 2, 3).pipe(startWith());
});

it("should infer correctly with a value and a scheduler", () => {
  const o = of(1, 2, 3).pipe(startWith(5, asyncScheduler));
});

it("should infer correctly with a different type", () => {
  const o = of(1, 2, 3).pipe(startWith("foo"));
});

it("should infer correctly with multiple different types", () => {
  const o = of(1, 2, 3).pipe(startWith("foo", 4, true));
});

it("should infer correctly with only a scheduler", () => {
  const o = of(1, 2, 3).pipe(startWith(asyncScheduler));
});
