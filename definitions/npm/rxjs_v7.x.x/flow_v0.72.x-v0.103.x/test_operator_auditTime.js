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
  // $FlowExpectedError
  const o = of("a", "b", "c").pipe(auditTime());
  // $FlowExpectedError
  const p = of("a", "b", "c").pipe(auditTime("47"));
  // $FlowExpectedError
  const q = of("a", "b", "c").pipe(auditTime(47, "foo"));
});
