//@flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { skipUntil } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of("foo", "bar", "baz").pipe(skipUntil(of(4, "RxJS", 7)));
});

it("should enforce types", () => {
  // $FlowExpectedError[incompatible-call]
  const o = of("foo", "bar", "baz").pipe(skipUntil());
  // $FlowExpectedError[incompatible-call]
  const p = of("foo", "bar", "baz").pipe(skipUntil("7"));
});
