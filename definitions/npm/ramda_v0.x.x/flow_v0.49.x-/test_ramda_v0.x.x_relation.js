/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
import _, { compose, pipe, curry, filter, find, repeat, zipWith } from "ramda";

const ns: Array<number> = [1, 2, 3, 4, 5];
const ss: Array<string> = ["one", "two", "three", "four"];
const obj: { [k: string]: number } = { a: 1, c: 2 };
const objMixed: { [k: string]: mixed } = { a: 1, c: "d" };
const os: Array<{ [k: string]: * }> = [{ a: 1, c: "d" }, { b: 2 }];
const str: string = "hello world";

const cl: number = _.clamp(1, 10, -1);
const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
const letters = _.split("", "abcABCaaaBBc");
// In ramda docs example it's just `Math.floor`
// but we don't want the implicit number -> string
const countB = _.countBy(_.compose(_.toString, Math.floor))(numbers);
const countB1: { [k: string]: number } = _.countBy(_.toLower)(letters);
const diff: Array<number> = _.difference([1, 2, 3, 4], [7, 6, 5, 4, 3]);
//$ExpectError
const diff1: Array<string> = _.difference(
  ["1", "2", "3", "4"],
  [7, 6, 5, 4, 3]
);

const cmp = (x, y) => x.a === y.a;
const l1 = [{ a: 1 }, { a: 2 }, { a: 3 }];
const l2 = [{ a: 3 }, { a: 4 }];
const diff2 = _.differenceWith(cmp, l1, l2);

const eqb: boolean = _.eqBy(Math.abs, 5, -5);

const es: boolean = _.equals([1, 2, 3], [1, 2, 3]);

const _gt: boolean = _.gt(2, 1);
const _lt: boolean = _.lt(2, 1);

const _gte: boolean = _.gte(2, 1);
const _lte: boolean = _.lte(2, 1);

const _max: number = _.max(2, 1);
const _min: number = _.min(2, 1);

const _maxBy: number = _.maxBy(Math.abs)(2, 1);
const _minBy: number = _.minBy(Math.abs, 2, 1);

const _identical: boolean = _.identical(2, 1);

const inters: Array<number> = _.intersection(ns, ns);

const interBy: Array<number> = _.intersectionWith(_.eqBy(Math.abs), ns, ns);

const pathEqObj: boolean = _.pathEq(["hello"], 1, obj);
const pathEqObj2: boolean = _.pathEq(["hello"])(1)(obj);

type PropEqFoo = { bar: number };
const propEqFoo: PropEqFoo = { bar: 2 };

const propEqResult1: boolean = _.propEq("bar", 1, propEqFoo);
// Test curried versions.
const propEqResult1a: boolean = _.propEq("bar")(1)(propEqFoo);
const propEqResult1b: boolean = _.propEq("bar")(1, propEqFoo);
const propEqResult1c: boolean = _.propEq("bar", 1)(propEqFoo);

// The type compared should be the type of the property.
// $ExpectError
const propEqResult2: boolean = _.propEq("bar", "wrong", propEqFoo);

// The property name must be a property on the object supplied.
// $ExpectError
const propEqResult3: boolean = _.propEq("baz", 1, propEqFoo);

const sortByFirstItem = _.sortBy(([first]) => first);
const pairs = [[-1, 1], [-2, 2], [-3, 3]];
const sorted: Array<[number, number]> = sortByFirstItem(pairs);

const eqA = _.eqBy(_.prop("a"));
const ls1: Array<{ [k: string]: number }> = [
  { a: 1 },
  { a: 2 },
  { a: 3 },
  { a: 4 }
];
const ls2: Array<{ [k: string]: number }> = [
  { a: 3 },
  { b: 4 },
  { a: 5 },
  { a: 6 }
];
const symW: Array<{ [k: string]: number }> = _.symmetricDifferenceWith(
  eqA,
  ls1,
  ls2
);
const sym: Array<number> = _.symmetricDifference([1, 2, 3, 4], [7, 6, 5, 4, 3]);

const un: Array<number> = _.union([1, 2, 3])([2, 3, 4]);
const un1: Array<{ [k: string]: number }> = _.unionWith(eqA, ls1, ls2);
