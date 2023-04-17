//@flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { skip } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of("foo", "bar", "baz").pipe(skip(7));
});

it("should enforce types", () => {
  // $FlowExpectedError[incompatible-call]
  const o = of("foo", "bar", "baz").pipe(skip());
  // $FlowExpectedError[incompatible-call]
  const p = of("foo", "bar", "baz").pipe(skip("7"));
});
