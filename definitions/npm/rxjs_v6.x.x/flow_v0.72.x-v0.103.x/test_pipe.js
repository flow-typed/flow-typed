// @flow

import { it } from "flow-typed-test";
import { pipe, of, Observable } from "rxjs";

function a<I: string, O: string>(
  input: I,
  output: O
): rxjs$UnaryFunction<I, O> {
  return i => output;
}

it("should infer {} for no arguments", () => {
  const o = pipe();
});

it("should infer for 1 argument", () => {
  const o = pipe(a("0", "1"));
});

it("should infer for 2 arguments", () => {
  const o = pipe(
    a("0", "1"),
    a("1", "2")
  );
});

it("should infer for 3 arguments", () => {
  const o = pipe(
    a("0", "1"),
    a("1", "2"),
    a("2", "3")
  );
});

it("should infer for 4 arguments", () => {
  const o = pipe(
    a("0", "1"),
    a("1", "2"),
    a("2", "3"),
    a("3", "4")
  );
});

it("should infer for 5 arguments", () => {
  const o = pipe(
    a("0", "1"),
    a("1", "2"),
    a("2", "3"),
    a("3", "4"),
    a("4", "5")
  );
});

it("should infer for 6 arguments", () => {
  const o = pipe(
    a("0", "1"),
    a("1", "2"),
    a("2", "3"),
    a("3", "4"),
    a("4", "5"),
    a("5", "6")
  );
});

it("should infer for 7 arguments", () => {
  const o = pipe(
    a("0", "1"),
    a("1", "2"),
    a("2", "3"),
    a("3", "4"),
    a("4", "5"),
    a("5", "6"),
    a("6", "7")
  );
});

it("should infer for 8 arguments", () => {
  const o = pipe(
    a("0", "1"),
    a("1", "2"),
    a("2", "3"),
    a("3", "4"),
    a("4", "5"),
    a("5", "6"),
    a("6", "7"),
    a("7", "8")
  );
});

it("should infer for 9 arguments", () => {
  const o = pipe(
    a("0", "1"),
    a("1", "2"),
    a("2", "3"),
    a("3", "4"),
    a("4", "5"),
    a("5", "6"),
    a("6", "7"),
    a("7", "8"),
    a("8", "9")
  );
});

it("should infer {} for more than 9 arguments", () => {
  const o = pipe(
    a("0", "1"),
    a("1", "2"),
    a("2", "3"),
    a("3", "4"),
    a("4", "5"),
    a("5", "6"),
    a("6", "7"),
    a("7", "8"),
    a("8", "9"),
    a("9", "10")
  );
});

it("should require a type assertion for more than 9 arguments", () => {
  // $ExpectError
  const o: rxjs$UnaryFunction<"0", "10"> = pipe(
    a("0", "1"),
    a("1", "2"),
    a("2", "3"),
    a("3", "4"),
    a("4", "5"),
    a("5", "6"),
    a("6", "7"),
    a("7", "8"),
    a("8", "9"),
    a("9", "10")
  );
});

it("should return generic OperatorFunction 1", () => {
  const customOperator = p => (a: Observable<*>) => a;

  const staticPipe = pipe(customOperator("infer"));
  const o = of("foo").pipe(staticPipe);
});

it("should return generic OperatorFunction 2", () => {
  const customOperator = () => (a: Observable<string>) => a;

  const staticPipe = pipe(customOperator());
  const o = of("foo").pipe(staticPipe);
});

it("should return generic OperatorFunction 3", () => {
  const customOperator = () => (a: Observable<*>) => a;

  const staticPipe = pipe(customOperator());
  const o = of("foo").pipe(staticPipe);
});

it("should return generic function", () => {
  const func = pipe(
    (value: string) => value,
    (value: string) => value + value
  );
  const value = func("foo");
});
