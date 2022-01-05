// @flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { takeWhile } from "rxjs/operators";

it("should support a predicate", () => {
  const o = of("foo").pipe(takeWhile(s => true, false));
});
