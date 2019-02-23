// @flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { mergeMap } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(1, 2, 3).pipe(mergeMap(p => of(Boolean(p))));
});

it("should support a projector that takes an index", () => {
  const o = of(1, 2, 3).pipe(mergeMap((p, index) => of(Boolean(p))));
});

it("should infer correctly by using the resultSelector first parameter", () => {
  const o = of(1, 2, 3).pipe(mergeMap(p => of(Boolean(p)), a => a));
});

it("should infer correctly by using the resultSelector second parameter", () => {
  const o = of(1, 2, 3).pipe(mergeMap(p => of(Boolean(p)), (a, b) => b));
});

it("should support a resultSelector that takes an inner index", () => {
  const o = of(1, 2, 3).pipe(
    mergeMap(p => of(Boolean(p)), (a, b, innnerIndex) => a)
  );
});

it("should support a resultSelector that takes an inner and outer index", () => {
  const o = of(1, 2, 3).pipe(
    mergeMap(p => of(Boolean(p)), (a, b, innnerIndex, outerIndex) => a)
  );
});

it("should support an undefined resultSelector", () => {
  const o = of(1, 2, 3).pipe(mergeMap(p => of(Boolean(p)), undefined));
});

it("should support a concurrent parameter", () => {
  const o = of(1, 2, 3).pipe(mergeMap(p => of(Boolean(p)), 4));
});

it("should support a resultSelector and concurrent parameter", () => {
  const o = of(1, 2, 3).pipe(mergeMap(p => of(Boolean(p)), (a, b) => b, 4));
});

it("should support a undefined resultSelector and concurrent parameter", () => {
  const o = of(1, 2, 3).pipe(mergeMap(p => of(Boolean(p)), undefined, 4));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(mergeMap());
});

it("should enforce the return type", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(mergeMap(p => p));
});

it("should enforce types of the concurrent parameter", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(mergeMap(p => of(Boolean(p)), "4"));
});

it("should enforce types of the concurrent parameter with a resultSelector", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(mergeMap(p => of(Boolean(p)), a => a, "4"));
});

it("should enforce types of the concurrent parameter with an undefined resultSelector", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(mergeMap(p => of(Boolean(p)), undefined, "4"));
});
