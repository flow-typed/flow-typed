// @flow

import { it } from "flow-typed-test";
import { of } from "rxjs";
import { distinct } from "rxjs/operators";

it("should infer correctly", () => {
  const o = of(1, 2, 3).pipe(distinct());
});

it("should accept a keySelector", () => {
  interface Person { name: string }
  const o = of<Person>({ name: "Tim" }).pipe(distinct(person => person.name));
});

it("should accept flushes", () => {
  const o = of(1, 2, 3).pipe(distinct(n => n, of("t", "i", "m")));
});

it("should enforce types", () => {
  // $ExpectError
  const o = of(1, 2, 3).pipe(distinct("F00D"));
});

it("should enforce types of keySelector", () => {
  // $ExpectError
  const o = of<{ id: string }>({ id: "F00D" }).pipe(distinct(item => item.foo));
});
