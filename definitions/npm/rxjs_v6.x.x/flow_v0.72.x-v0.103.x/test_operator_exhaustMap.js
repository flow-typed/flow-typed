// @flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { exhaustMap } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(1, 2, 3).pipe(exhaustMap(p => of(Boolean(p))));
});

it("should support a projector that takes an index", () => {
  const o = of(1, 2, 3).pipe(exhaustMap((p, index) => of(Boolean(p))));
});

it("should infer correctly by using the resultSelector first parameter", () => {
  const o = of(1, 2, 3).pipe(exhaustMap(p => of(Boolean(p)), a => a));
});

it("should infer correctly by using the resultSelector second parameter", () => {
  const o = of(1, 2, 3).pipe(exhaustMap(p => of(Boolean(p)), (a, b) => b));
});

it("should support a resultSelector that takes an inner index", () => {
  const o = of(1, 2, 3).pipe(
    exhaustMap(p => of(Boolean(p)), (a, b, innnerIndex) => a)
  );
});

it("should support a resultSelector that takes an inner and outer index", () => {
  const o = of(1, 2, 3).pipe(
    exhaustMap(p => of(Boolean(p)), (a, b, innnerIndex, outerIndex) => a)
  );
});

it("should support an undefined resultSelector", () => {
  const o = of(1, 2, 3).pipe(exhaustMap(p => of(Boolean(p)), undefined));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(exhaustMap());
});

it("should enforce the return type", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(exhaustMap(p => p));
});
