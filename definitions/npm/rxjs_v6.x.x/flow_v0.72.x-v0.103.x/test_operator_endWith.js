// @flow

import { it } from "flow-typed-test";
import { of, asyncScheduler } from "rxjs";
import { endWith } from "rxjs/operators";

it("should support a scheduler", () => {
  const a = of(1, 2, 3).pipe(endWith(asyncScheduler));
});

it("should infer type for 1 parameter", () => {
  const a = of(1, 2, 3).pipe(endWith(4));
});

it("should infer type for 2 parameter", () => {
  const a = of(1, 2, 3).pipe(endWith(4, 5));
});

it("should infer type for 3 parameter", () => {
  const a = of(1, 2, 3).pipe(endWith(4, 5, 6));
});

it("should infer type for 4 parameter", () => {
  const a = of(1, 2, 3).pipe(endWith(4, 5, 6, 7));
});

it("should infer type for 5 parameter", () => {
  const a = of(1, 2, 3).pipe(endWith(4, 5, 6, 7, 8));
});

it("should infer type for 6 parameter", () => {
  const a = of(1, 2, 3).pipe(endWith(4, 5, 6, 7, 8, 9));
});

it("should infer type for rest parameters", () => {
  const a = of(1, 2, 3).pipe(endWith(4, 5, 6, 7, 8, 9, 10));
});

it("should accept empty parameter", () => {
  const a = of(1, 2, 3).pipe(endWith());
});
