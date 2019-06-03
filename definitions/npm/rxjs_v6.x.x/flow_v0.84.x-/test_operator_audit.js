// @flow

import { it } from "flow-typed-test";

import { of, NEVER } from "rxjs";
import { audit } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(1, 2, 3).pipe(audit(() => of("foo")));
  const p = of(1, 2, 3).pipe(audit(() => NEVER));
});

it("should infer correctly with a Promise", () => {
  const o = of(1, 2, 3).pipe(audit(() => new Promise(() => {})));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(audit());
  // $ExpectError
  const p = of(1, 2, 3).pipe(audit((p: string) => of("foo")));
});
