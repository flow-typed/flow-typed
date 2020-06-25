/* @flow */
/*eslint-disable no-undef, no-unused-vars, no-console*/
import { describe, it } from 'flow-typed-test';
import _, {
  complement,
  compose,
  curry,
  filter,
  find,
  ifElse,
  pipe,
  repeat,
  zipWith,
} from 'ramda';

const ns: Array<number> = [1, 2, 3, 4, 5];
const ss: Array<string> = ['one', 'two', 'three', 'four'];
const obj: { [k: string]: number, ... } = { a: 1, c: 2 };
const objMixed: { [k: string]: mixed, ... } = { a: 1, c: 'd' };
const os: Array<{ [k: string]: *, ... }> = [{ a: 1, c: 'd' }, { b: 2 }];
const str: string = 'hello world';

//Logic
// TODO: Fix flow issues
// const isQueen = _.propEq("rank", "Q");
// const isSpade = _.propEq("suit", "♠︎");
// const isQueenOfSpades = _.allPass([isQueen, isSpade]);

//$FlowExpectedError
const allp: boolean = isQueenOfSpades(1);
const allp1: boolean = isQueenOfSpades({ rank: 'Q', suit: '♣︎' });

const a: boolean = _.and(true, true);
const a_: (a: boolean) => boolean = _.and(true);

const nonBooleanAnd: number = _.and(69, 42);
const nonBooleanAnd_: (nonBooleanAnd: number) => * = _.and(69);

const gte = _.anyPass([_.gt, _.equals]);
const ge: boolean = gte(3, 2);

//$FlowExpectedError
const gt10 = x => x > 10;
//$FlowExpectedError
const even = x => x % 2 === 0;
const f = _.both(gt10, even);

const b: boolean = f('');
const b_: boolean = f(100);

const fn = _.cond([
  [_.equals(0), _.always('water freezes at 0°C')],
  [_.equals(100), _.always(1)],
  [_.T, temp => 'nothing special happens at ' + temp + '°C'],
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

describe('complement', () => {
  it('accepts a function that returns a boolean', () => {
    complement(() => true)
    complement(() => false)
    // $FlowExpectedError
    complement(() => 'foo')
    // $FlowExpectedError
    complement(() => 5)
    // $FlowExpectedError
    complement(() => [])
    // $FlowExpectedError
    complement(() => ({}))
    // $FlowExpectedError
    complement(() => null)
    // $FlowExpectedError
    complement(() => undefined)
  })

  it('returns a function that returns a boolean', () => {
    const fn = complement(() => true)
    const b: boolean = fn()
    // $FlowExpectedError
    const s: string = fn()
    // $FlowExpectedError
    const n: number = fn()
    // $FlowExpectedError
    const xs: Array<mixed> = fn()
    // $FlowExpectedError
    const obj: {[string]: mixed} = fn()
    // $FlowExpectedError
    const v: void = fn()
    // $FlowExpectedError
    const nil: null = fn()
  })

  // The following code is generated from
  // https://github.com/LoganBarnett/typedef-gen due to Flow not being able to
  // preserve the input function's form as a return type.
  //
  // Begin generated complement test cases.
  it('returns a function whose parameters match the input function (0)', () => {
    const fn = complement(() => true)
    fn()
    // Extra arguments are discarded, so there is no negative case here.
  })

  it('returns a function whose parameters match the input function (1)', () => {
    const fn = complement((a: 'a',) => true)
    fn('a',)
    // $FlowExpectedError
    fn(0)
  })

  it('returns a function whose parameters match the input function (2)', () => {
    const fn = complement((a: 'a', b: 'b',) => true)
    fn('a', 'b',)
    // $FlowExpectedError
    fn(0, 1)
  })

  it('returns a function whose parameters match the input function (3)', () => {
    const fn = complement((a: 'a', b: 'b', c: 'c',) => true)
    fn('a', 'b', 'c',)
    // $FlowExpectedError
    fn(0, 1, 2)
  })

  it('returns a function whose parameters match the input function (4)', () => {
    const fn = complement((a: 'a', b: 'b', c: 'c', d: 'd',) => true)
    fn('a', 'b', 'c', 'd',)
    // $FlowExpectedError
    fn(0, 1, 2, 3)
  })

  it('returns a function whose parameters match the input function (5)', () => {
    const fn = complement((a: 'a', b: 'b', c: 'c', d: 'd', e: 'e',) => true)
    fn('a', 'b', 'c', 'd', 'e',)
    // $FlowExpectedError
    fn(0, 1, 2, 3, 4)
  })

  it('returns a function whose parameters match the input function (6)', () => {
    const fn = complement((a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f',) => true)
    fn('a', 'b', 'c', 'd', 'e', 'f',)
    // $FlowExpectedError
    fn(0, 1, 2, 3, 4, 5)
  })

  it('returns a function whose parameters match the input function (7)', () => {
    const fn = complement((a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g',) => true)
    fn('a', 'b', 'c', 'd', 'e', 'f', 'g',)
    // $FlowExpectedError
    fn(0, 1, 2, 3, 4, 5, 6)
  })

  it('returns a function whose parameters match the input function (8)', () => {
    const fn = complement((a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h',) => true)
    fn('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',)
    // $FlowExpectedError
    fn(0, 1, 2, 3, 4, 5, 6, 7)
  })

  it('returns a function whose parameters match the input function (9)', () => {
    const fn = complement((a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i',) => true)
    fn('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',)
    // $FlowExpectedError
    fn(0, 1, 2, 3, 4, 5, 6, 7, 8)
  })

  it('returns a function whose parameters match the input function (10)', () => {
    const fn = complement((a: 'a', b: 'b', c: 'c', d: 'd', e: 'e', f: 'f', g: 'g', h: 'h', i: 'i', j: 'j',) => true)
    fn('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',)
    // $FlowExpectedError
    fn(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
  })

  // End generated complement test cases.
})


describe('ifElse', () => {
  it('uses a union of both branches as the return type', () => {
    const incCount = ifElse(x => x % 2 == 0, x => x + 1, x => x.toString());
    const ie: number | string = incCount(1);
  })

  it('checks the condition input matches the branch inputs', () => {
    const incCount = ifElse(x => x % 2 == 0, x => x + 1, x => x.toString());
    // Because the object literal ({}) isn't a number it
    // $FlowExpectedError
    const ie: number | string = incCount({});
  })

  it('works with variadic arg inputs', () => {
    const ifElseFn = ifElse(
      // Without this test, variadic argument input functions will produce an
      // error like this:
      //
      // Cannot call `ifElse` because rest array [1] has an unknown number of
      // elements, so is incompatible with tuple type [2].
      (...args: [string]): boolean => true,
      (s: string) => s.toUpperCase(),
      (s: string) => s.toLowerCase(),
    );
    const result: void | string = ifElseFn('input')
  })

  it('preserves the types used with variadic argument condition functions', () => {
    const ifElseFn = ifElse(
      (...args: [string]): boolean => true,
      (s: string) => s.toUpperCase(),
      (s: string) => s.toLowerCase(),
    );
    // $FlowExpectedError
    const result: void | string = ifElseFn(5)
  })

  // This was the original test for ifElse, which depends on the implementation
  // of "is". "is" in its present form does not perform type refinement, so the
  // stricter form of ifElse fails the check with this test. This test below
  // captures the issue, and is left for reference and/or if some brave soul
  // wishes to expand the definition of ifElse (and possibly also "is") to
  // refine the predicate correctly. At time of writing, $Pred and $Refine are
  // considered experimental/internal and abandoned:
  // https://github.com/facebook/flow/issues/2464#issuecomment-471115953
  //
  // it('feeds a predicate-refined type to the branches', () => {
  //   const incCount = ifElse(is(Number), x => x + 1, x => x.toString());
  //   const ie: number | string = incCount(1);
  // })
})

const em: boolean = _.isEmpty([1, 2, 3]);

const n: boolean = _.not(true);
//$FlowExpectedError
const n1: boolean = _.not(1);

const oor: boolean = _.or(true, true);

const nonBooleanOr: ?string = _.or('watskeburt', undefined);
const nonBooleanOr_: (arg: { key: string, ... }) => string | { key: string, ... } = _.or(
  'watskeburt'
);

// type refinement is important here
// which might be awkward for some
// but can actually catch some bugs statically

const psatE: boolean = _.pathSatisfies(y => y > 0, ['x', 'y', 0], {
  x: { y: [2] },
});
const psat: boolean = _.pathSatisfies(
  y => typeof y === 'number' && y > 0,
  ['x', 'y', 0],
  { x: { y: [2] } }
);
const psatPart = _.pathSatisfies(y => typeof y === 'number' && y > 0);
const psat2: boolean = psatPart(['x', 'y', 0])({ x: { y: 2 }, z: true });
const psatPart2 = _.pathSatisfies(y => typeof y === 'number' && y > 0, [
  'x',
  'y',
  0,
]);
const psat3: boolean = psatPart2({ x: { y: 2 }, z: true });

describe('propSatisfies', () => {
  describe('with object', () => {
    it('should works with object', () => {
      const propSat: boolean = _.propSatisfies(x => x > 0, 'x', { x: 1, y: 2 });
    });
    it('should works with object with properties of different types', () => {
      const propSat: boolean = _.propSatisfies(x => x > 0, 'x', { x: 1, y: 2, str: 'different type' });
      // same again but this time using a curried function
      const propSatCurry: boolean = _.propSatisfies((x: number) => x > 0, 'x')({ x: 1, y: 2, str: 'different type' });
    });
    it('should error when property does not exist', () => {
      //$FlowExpectedError
      const propSat3: boolean = _.propSatisfies((x: number) => x > 0, 'z', { x: 1, y: 2 });
    });
    it('should error when condition param does not match property type', () => {
      //$FlowExpectedError
      const propSat: boolean = _.propSatisfies(x => x > 0, 'str', { x: 1, y: 2, str: 'different type' });
      //$FlowExpectedError
      const propSatCurry: boolean = _.propSatisfies((x: number) => x > 0, 'str')({ x: 1, y: 2, str: 'different type' });
    });
  });
  describe('with object as maps', () => {
    const o: { [string]: number, ... } = { x: 1, y: 2 };
    it('should works with object map', () => {
      const propSat: boolean = _.propSatisfies((x: number) => x > 0, 'x', o);
    });
    it('should error when condition param does not match property type', () => {
      //$FlowExpectedError
      const propSat2: boolean = _.propSatisfies((x: string) => x > 0, 'x', o);
    });
  });
});

const coerceArray = _.unless(_.is(Array), _.of);
const coer: Array<number | Array<number>> | number = coerceArray([1, 2, 3]);
const coer1: Array<number | Array<number>> | number = coerceArray(1);

const coerceString = _.unless(_.is(String), _.toString);
const coer2: string | Array<number> = coerceString([1, 2, 3]);
const coer3: string | Array<number> = coerceString('s');

const unlPrt = _.unless(_.is(Number), _.T);
const unl: number | boolean | Array<number> = unlPrt([1, 2, 3]);
const unl2: number | boolean | Array<number> = unlPrt(1);

const un: number = _.until(_.gt(100), _.multiply(2))(1);
