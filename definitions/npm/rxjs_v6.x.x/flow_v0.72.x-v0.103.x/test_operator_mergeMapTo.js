//@flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { mergeMapTo } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(1, 2, 3).pipe(mergeMapTo(of("foo")));
});

it("should infer correctly multiple types", () => {
  const o = of(1, 2, 3).pipe(mergeMapTo(of("foo", 4)));
});

it("should infer correctly with an array", () => {
  const o = of(1, 2, 3).pipe(mergeMapTo([4, 5, 6]));
});

it("should infer correctly with a Promise", () => {
  const o = of(1, 2, 3).pipe(mergeMapTo(new Promise<string>(() => {})));
});

it("should support a concurrent parameter", () => {
  const o = of(1, 2, 3).pipe(mergeMapTo(of("foo"), 4));
});

it("should infer correctly by using the resultSelector first parameter", () => {
  const o = of(1, 2, 3).pipe(mergeMapTo(of("foo"), a => a));
});

it("should infer correctly by using the resultSelector second parameter", () => {
  const o = of(1, 2, 3).pipe(mergeMapTo(of("foo"), (a, b) => b));
});

it("should support a resultSelector that takes an inner index", () => {
  const o = of(1, 2, 3).pipe(mergeMapTo(of("foo"), (a, b, innnerIndex) => a));
});

it("should support a resultSelector that takes an inner and outer index", () => {
  const o = of(1, 2, 3).pipe(
    mergeMapTo(of("foo"), (a, b, innnerIndex, outerIndex) => a)
  );
});

it("should support a resultSelector and concurrent parameter", () => {
  const o = of(1, 2, 3).pipe(mergeMapTo(of("foo"), (a, b) => b, 4));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(mergeMapTo());
});

it("should enforce the return type", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(mergeMapTo(p => p));
  // $ExpectError
  const p = of(1, 2, 3).pipe(mergeMapTo(4));
});

it("should enforce types of the concurrent parameter", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(mergeMapTo(of("foo"), "4"));
});

it("should enforce types of the concurrent parameter with a resultSelector", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(mergeMapTo(of("foo"), a => a, "4"));
});
