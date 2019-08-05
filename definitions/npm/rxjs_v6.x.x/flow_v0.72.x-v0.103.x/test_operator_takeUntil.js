//@flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { takeUntil } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(1, 2, 3).pipe(takeUntil(of(1, 2, 3)));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(takeUntil(value => value < 3));
});
