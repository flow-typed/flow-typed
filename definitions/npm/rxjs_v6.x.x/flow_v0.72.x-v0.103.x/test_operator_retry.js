//@flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { retry } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(1, 2, 3).pipe(retry());
});

it("should accept a count parameter", () => {
  const o = of(1, 2, 3).pipe(retry(47));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(retry("aa"));
});
