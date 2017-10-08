/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
import _, { compose, pipe, curry, filter, find, repeat, zipWith } from "ramda";

const ns: Array<number> = [1, 2, 3, 4, 5];
const ss: Array<string> = ["one", "two", "three", "four"];
const obj: { [k: string]: number } = { a: 1, c: 2 };
const objMixed: { [k: string]: mixed } = { a: 1, c: "d" };
const os: Array<{ [k: string]: * }> = [{ a: 1, c: "d" }, { b: 2 }];
const str: string = "hello world";

//Logic
const isQueen = _.propEq("rank", "Q");
const isSpade = _.propEq("suit", "♠︎");
const isQueenOfSpades = _.allPass([isQueen, isSpade]);

//$ExpectError
const allp: boolean = isQueenOfSpades(1);
const allp1: boolean = isQueenOfSpades({ rank: "Q", suit: "♣︎" });

const a: boolean = _.and(true, true);
const a_: (a: boolean) => boolean = _.and(true);

const gte = _.anyPass([_.gt, _.equals]);
const ge: boolean = gte(3, 2);

//$ExpectError
const gt10 = x => x > 10;
//$ExpectError
const even = x => x % 2 === 0;
const f = _.both(gt10, even);

const b: boolean = f("");
const b_: boolean = f(100);

//$ExpectError
const isEven = n => n % 2 === 0;
const isOdd = _.complement(isEven);

const c: boolean = isOdd("");
const c_: boolean = isOdd(2);

const fn = _.cond([
  [_.equals(0), _.always("water freezes at 0°C")],
  [_.equals(100), _.always(1)],
  [_.T, temp => "nothing special happens at " + temp + "°C"]
]);
const cond_: number | string = fn(0);

// This is abit awkward — if a non-null value of type
// differrent to number is passed flow will infer a union type
// for all of them
const defaultTo42 = _.defaultTo(42);
const def: number = defaultTo42(null);
const def1: number = defaultTo42(undefined);

const feither = _.either(gt10, even);
const feitherR: boolean = f(101);

const incCount = _.ifElse(_.is(Number), _.inc, _.toString);
const ie: number | string = incCount({});
const ie2: number | string = incCount(1);

const em: boolean = _.isEmpty([1, 2, 3]);

const n: boolean = _.not(true);
//$ExpectError
const n1: boolean = _.not(1);

const oor: boolean = _.or(true, true);

// type refinement is important here
// which might be awkward for some
// but can actually catch some bugs statically

// TODO: pathSatisfies: Started failing in v39...
// const psatE: boolean = _.pathSatisfies(y => y > 0, [ 'x', 'y' ], { x: { y: 2 } })
// const psat: boolean = _.pathSatisfies(y => typeof y === 'number' && y > 0, [ 'x', 'y' ], { x: { y: 2 } })
// const psatPart = _.pathSatisfies(y => typeof y === 'number' && y > 0)
// const psat2: boolean = psatPart([ 'x', 'y' ])({ x: { y: 2 }, z: true })
// const psatPart2 = _.pathSatisfies(y => typeof y === 'number' && y > 0, [ 'x', 'y' ])
// const psat3: boolean = psatPart2({ x: { y: 2 }, z: true })

const propSat: boolean = _.propSatisfies(x => x > 0, "x", { x: 1, y: 2 });
const coerceArray = _.unless(_.isArrayLike, _.of);
const coer: Array<number | Array<number>> | number = coerceArray([1, 2, 3]);
const coer1: Array<number | Array<number>> | number = coerceArray(1);

const coerceString = _.unless(_.is(String), _.toString);
const coer2: string | Array<number> = coerceString([1, 2, 3]);
const coer3: string | Array<number> = coerceString("s");

const unlPrt = _.unless(_.is(Number), _.T);
const unl: number | boolean | Array<number> = unlPrt([1, 2, 3]);
const unl2: number | boolean | Array<number> = unlPrt(1);

const un: number = _.until(_.gt(100), _.multiply(2))(1);
