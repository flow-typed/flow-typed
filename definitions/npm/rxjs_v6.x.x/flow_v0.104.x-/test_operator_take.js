//@flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { take } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(1, 2, 3).pipe(take(7));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(take("7"));
});
