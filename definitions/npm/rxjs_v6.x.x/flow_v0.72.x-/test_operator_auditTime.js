// @flow

import { it } from "flow-typed-test";
import { of, asyncScheduler } from "rxjs";
import { auditTime } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of("a", "b", "c").pipe(auditTime(47));
});

it("should support a scheduler", () => {
  const o = of("a", "b", "c").pipe(auditTime(47, asyncScheduler));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of("a", "b", "c").pipe(auditTime());
  // $ExpectError
  const p = of("a", "b", "c").pipe(auditTime("47"));
  // $ExpectError
  const q = of("a", "b", "c").pipe(auditTime(47, "foo"));
});
