/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
import _, {
  compose,
  pipe,
  curry,
  filter,
  find,
  isNil,
  repeat,
  replace,
  zipWith
} from "ramda";
import { describe, it } from 'flow-typed-test';

const ns: Array<number> = [1, 2, 3, 4, 5];
const ss: Array<string> = ["one", "two", "three", "four"];
const obj: { [k: string]: number } = { a: 1, c: 2 };
const objMixed: { [k: string]: mixed } = { a: 1, c: "d" };
const os: Array<{ [k: string]: * }> = [{ a: 1, c: "d" }, { b: 2 }];
const str: string = "hello world";

// Math
{
  const partDiv: (a: number) => number = _.divide(6);
  const div: number = _.divide(6, 2);
  //$FlowExpectedError
  const div2: number = _.divide(6, true);
}

// String
{
  const ss: Array<string | void> = _.match(/h/, "b");
  describe('replace', () => {
    it('should supports replace by string', () => {
      const r1: string = replace(",", "|", "b,d,d");
      const r2: string = replace(",")("|", "b,d,d");
      const r3: string = replace(",")("|")("b,d,d");
      const r4: string = replace(",", "|")("b,d,d");
    });
    it('should supports replace by RegExp', () => {
      const r1: string = replace(/[,]/, "|", "b,d,d");
      const r2: string = replace(/[,]/)("|", "b,d,d");
      const r3: string = replace(/[,]/)("|")("b,d,d");
      const r4: string = replace(/[,]/, "|")("b,d,d");
    });
    it('should supports replace by RegExp with replacement fn', () => {
      const fn = (match: string, g1: string): string => g1;
      const r1: string = replace(/([,])d/, fn, "b,d,d");
      const r2: string = replace(/([,])d/)(fn, "b,d,d");
      const r3: string = replace(/([,])d/)(fn)("b,d,d");
      const r4: string = replace(/([,])d/, fn)("b,d,d");
    });
  });
  const ss2: Array<string> = _.split(",", "b,d,d");
  const ss1: boolean = _.test(/h/, "b");
  const s: string = _.trim("s");
  const x: string = _.head("one");
  const sss: string = _.concat("H", "E");
  const sss1: string = _.concat("H")("E");
  const ssss: string = _.drop(1, "EF");
  const ssss1: string = _.drop(1)("E");
  const ssss2: string = _.dropLast(1, "EF");
  const ys: string = _.nth(2, "curry");
  const ys1: string = _.nth(2)("curry");
}
//Type
{
  const x: boolean = _.is(Number, 1);
  const x1: boolean = isNil(1);

  // should refine type
  const x1a: ?{ a: number } = { a: 1 };
  //$FlowExpectedError
  x1a.a;
  if (!isNil(x1a)) {
    x1a.a;
  }

  const x2: boolean = _.propIs(1, "num", { num: 1 });
}
