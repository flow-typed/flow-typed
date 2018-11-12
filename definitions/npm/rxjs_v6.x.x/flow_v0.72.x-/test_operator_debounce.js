// @flow

import { it } from "flow-typed-test";
import { of, timer } from "rxjs";
import { debounce } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(1, 2, 3).pipe(debounce(() => timer(47)));
});

it("should infer correctly with a Promise", () => {
  const o = of(1, 2, 3).pipe(debounce(() => new Promise<boolean>(() => {})));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(debounce());
  // $ExpectError
  const p = of(1, 2, 3).pipe(debounce(() => {}));
});
