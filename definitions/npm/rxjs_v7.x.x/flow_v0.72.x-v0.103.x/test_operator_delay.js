// @flow

import { it } from "flow-typed-test";
import { of, asyncScheduler } from "rxjs";
import { delay } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(1, 2, 3).pipe(delay(100));
});

it("should support date parameter", () => {
  const o = of(1, 2, 3).pipe(delay(new Date(2018, 9, 18)));
});

it("should support a scheduler", () => {
  const o = of(1, 2, 3).pipe(delay(100, asyncScheduler));
});

it("should enforce types", () => {
  // $FlowExpectedError
  const o = of(1, 2, 3).pipe(delay());
  // $FlowExpectedError
  const p = of(1, 2, 3).pipe(delay("foo"));
  // $FlowExpectedError
  const q = of(1, 2, 3).pipe(delay(47, "foo"));
});
