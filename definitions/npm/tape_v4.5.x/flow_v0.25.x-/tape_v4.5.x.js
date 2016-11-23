/* @flow */

/* eslint-disable  */

declare type tape$TestOpts = {
  skip: boolean,
  timeout?: number,
} | {
  skip?: boolean,
  timeout: number,
};


declare type tape$TestCb = (t: tape$Context) => mixed;
declare type tape$TestFn = (a: string | tape$TestOpts | tape$TestCb, b?: tape$TestOpts | tape$TestCb, c?: tape$TestCb) => void;

declare interface tape$Context {
  fail(msg?: string): void,
  pass(msg?: string): void,

  error(err: mixed, msg?: string): void,
  ifError(err: mixed, msg?: string): void,
  ifErr(err: mixed, msg?: string): void,
  iferror(err: mixed, msg?: string): void,

  ok(value: mixed, msg?: string): void,
  true(value: mixed, msg?: string): void,
  assert(value: mixed, msg?: string): void,

  notOk(value: mixed, msg?: string): void,
  false(value: mixed, msg?: string): void,
  notok(value: mixed, msg?: string): void,

  // equal + aliases
  equal(actual: mixed, expected: mixed, msg?: string): void,
  equals(actual: mixed, expected: mixed, msg?: string): void,
  isEqual(actual: mixed, expected: mixed, msg?: string): void,
  is(actual: mixed, expected: mixed, msg?: string): void,
  strictEqual(actual: mixed, expected: mixed, msg?: string): void,
  strictEquals(actual: mixed, expected: mixed, msg?: string): void,

  // notEqual + aliases
  notEqual(actual: mixed, expected: mixed, msg?: string): void,
  notEquals(actual: mixed, expected: mixed, msg?: string): void,
  notStrictEqual(actual: mixed, expected: mixed, msg?: string): void,
  notStrictEquals(actual: mixed, expected: mixed, msg?: string): void,
  isNotEqual(actual: mixed, expected: mixed, msg?: string): void,
  isNot(actual: mixed, expected: mixed, msg?: string): void,
  not(actual: mixed, expected: mixed, msg?: string): void,
  doesNotEqual(actual: mixed, expected: mixed, msg?: string): void,
  isInequal(actual: mixed, expected: mixed, msg?: string): void,

  // deepEqual + aliases
  deepEqual(actual: mixed, expected: mixed, msg?: string): void,
  deepEquals(actual: mixed, expected: mixed, msg?: string): void,
  isEquivalent(actual: mixed, expected: mixed, msg?: string): void,
  same(actual: mixed, expected: mixed, msg?: string): void,

  // notDeepEqual
  notDeepEqual(actual: mixed, expected: mixed, msg?: string): void,
  notEquivalent(actual: mixed, expected: mixed, msg?: string): void,
  notDeeply(actual: mixed, expected: mixed, msg?: string): void,
  notSame(actual: mixed, expected: mixed, msg?: string): void,
  isNotDeepEqual(actual: mixed, expected: mixed, msg?: string): void,
  isNotDeeply(actual: mixed, expected: mixed, msg?: string): void,
  isNotEquivalent(actual: mixed, expected: mixed, msg?: string): void,
  isInequivalent(actual: mixed, expected: mixed, msg?: string): void,

  // deepLooseEqual
  deepLooseEqual(actual: mixed, expected: mixed, msg?: string): void,
  looseEqual(actual: mixed, expected: mixed, msg?: string): void,
  looseEquals(actual: mixed, expected: mixed, msg?: string): void,

  // notDeepLooseEqual
  notDeepLooseEqual(actual: mixed, expected: mixed, msg?: string): void,
  notLooseEqual(actual: mixed, expected: mixed, msg?: string): void,
  notLooseEquals(actual: mixed, expected: mixed, msg?: string): void,

  throws(fn: Function, expected?: RegExp | Function, msg?: string): void,
  doesNotThrow(fn: Function, expected?: RegExp | Function, msg?: string): void,

  timeoutAfter(ms: number): void,

  skip(msg?: string): void,
  plan(n: number): void,
  onFinish(fn: Function): void,
  end(): void,
  comment(msg: string): void,
  test: tape$TestFn,
}


declare module 'tape' {
  declare type TestHarness = Tape;
  declare type StreamOpts = {
    objectMode?: boolean,
  };

  declare type Tape = {
    (a: string | tape$TestOpts | tape$TestCb, b?: tape$TestCb | tape$TestOpts, c?: tape$TestCb, ...rest: Array<void>): void,
    test: tape$TestFn,
    skip: (name: string, cb?: tape$TestCb) => void,
    createHarness: () => TestHarness,
    createStream: (opts?: StreamOpts) => stream$Readable,
    only: (a: string | tape$TestOpts | tape$TestCb, b?: tape$TestCb | tape$TestOpts, c?: tape$TestCb, ...rest: Array<void>) => void,
  };

  declare module.exports: Tape;
}
