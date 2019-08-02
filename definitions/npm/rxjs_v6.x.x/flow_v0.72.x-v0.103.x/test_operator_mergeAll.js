// @flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { mergeAll } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(of(1, 2, 3)).pipe(mergeAll());
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(mergeAll());
});
