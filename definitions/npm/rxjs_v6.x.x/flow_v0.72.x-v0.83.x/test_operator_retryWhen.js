//@flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { retryWhen } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(1, 2, 3).pipe(retryWhen(errors => errors));
});

it("should infer correctly when the error observable has a different type", () => {
  const o = of(1, 2, 3).pipe(retryWhen(retryWhen(errors => of("a", "b", "c"))));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(retryWhen());
});

it("should enforce types of the notifier", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(retryWhen(() => 8));
});
