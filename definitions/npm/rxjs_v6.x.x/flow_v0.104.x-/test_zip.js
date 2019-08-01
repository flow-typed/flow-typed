// @flow

import { it } from "flow-typed-test";
import { Observable, of, zip } from "rxjs";

it("should support observables", () => {
  const a = of(1);
  const b = of("foo");
  const c = of(true);
  const o1 = zip(a, b, c);
});

it("should support mixed observables and promises", () => {
  const a = Promise.resolve(1);
  const b = of("foo");
  const c = of(true);
  const d = of(["bar"]);
  const o1 = zip(a, b, c, d);
});

it("should return Array<T> when given a single promise", () => {
  const a = Promise.resolve(1);
  const o1 = zip(a);
});

it("should return Array<T> when given a single observable", () => {
  const a = of(1);
  const o1 = zip(a);
});
