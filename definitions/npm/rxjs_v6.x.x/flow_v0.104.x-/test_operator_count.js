// @flow

import { it } from "flow-typed-test";
import { of, Observable } from "rxjs";
import { count, buffer } from "rxjs/operators";

it("should always infer number", () => {
  const o = of(1, 2, 3).pipe(count(x => x > 1));
  const j = of("a", "b", "c").pipe(count(x => x === "a"));
});

it("should accept empty parameter", () => {
  const o = of(1, 2, 3).pipe(count());
});

it("should infer source observable type in parameter", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(
    count((x, i, source: Observable<string>) => x === 3)
  );
});

it("should expect function parameter", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(count(9));
});
