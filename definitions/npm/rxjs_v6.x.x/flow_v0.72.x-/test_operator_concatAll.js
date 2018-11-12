// @flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { concatAll } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(of(1, 2, 3)).pipe(concatAll());
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(concatAll());
});
