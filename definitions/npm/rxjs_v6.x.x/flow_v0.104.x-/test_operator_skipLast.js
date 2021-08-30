//@flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { skipLast } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of("foo", "bar", "baz").pipe(skipLast(7));
});

it("should enforce types", () => {
  // $FlowExpectedError[incompatible-call]
  const o = of("foo", "bar", "baz").pipe(skipLast());
  // $FlowExpectedError[incompatible-call]
  const p = of("foo", "bar", "baz").pipe(skipLast("7"));
});
