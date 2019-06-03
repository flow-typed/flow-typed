// @flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { exhaust } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(of(1, 2, 3)).pipe(exhaust());
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(exhaust());
});
