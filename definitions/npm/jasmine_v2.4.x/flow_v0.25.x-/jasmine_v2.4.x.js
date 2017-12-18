/* eslint-disable flowtype/no-weak-types */

type JasmineExpectType = {
  not: JasmineExpectType,
  toBe(value: mixed): void,
  toBeCloseTo(num: number, delta: mixed): void,
  toBeDefined(): void,
  toBeFalsy(): void,
  toBeGreaterThan(number: number): void,
  toBeLessThan(number: number): void,
  toBeNull(): void,
  toBeTruthy(): void,
  toBeUndefined(): void,
  toContain(str: string): void,
  toEqual(value: mixed): void,
  toHaveBeenCalled(): void,
  toHaveBeenCalledTimes(number: number): void,
  toHaveBeenCalledWith(...args: Array<any>): void,
  toMatch(regexp: RegExp): void,
  toThrow(message?: string): void,
  toThrowError(val: mixed): void
};

declare function describe(name: string, fn: Function): void;
declare function fdescribe(name: string, fn: Function): void;
declare function xdescribe(name: string, fn: Function): void;

declare function beforeEach(fn: Function, timeout?: number): void;
declare function afterEach(fn: Function, timeout?: number): void;
declare function beforeAll(fn: Function, timeout?: number): void;
declare function afterAll(fn: Function, timeout?: number): void;

declare function it(name: string, fn: Function, timeout?: number): void;
declare function fit(name: string, fn: Function, timeout?: number): void;
declare function xit(name: string, fn: Function): void;

declare function expect(value: mixed): JasmineExpectType;
declare function fail(err?: Error | string): void;

// TODO handle return type
// http://jasmine.github.io/2.4/introduction.html#section-Spies
declare function spyOn(value: mixed, method: string): Object;

type JasmineCallsType = {
  allArgs(): mixed,
  all(): mixed,
  mostRecent(): mixed,
  first(): mixed,
  any(): boolean,
  count(): number,
  reset(): void
};

type JasmineSpyType = {
  calls: JasmineCallsType
};

type JasmineClockType = {
  install(): void,
  uninstall(): void,
  tick(milliseconds?: number): void,
  mockDate(date: Date): void
};

declare type JasmineMatcherResult = {
  pass: boolean,
  message?: string | (() => string)
};

declare type JasmineMatcherStruct = {
  compare<T: any>(actual: T, expected: T): JasmineMatcherResult
};

declare type JasmineMatcher = (
  utils?: mixed,
  customEqualityTesters?: mixed
) => JasmineMatcherStruct;

declare type JasmineMatchers = {
  [key: string]: JasmineMatcher
};

declare var jasmine: {
  createSpy(name?: string): JasmineSpyType,
  any(val: mixed): void,
  anything(): void,
  objectContaining(val: Object): void,
  arrayContaining(val: mixed[]): void,
  stringMatching(val: string): void,
  clock(): JasmineClockType,
  addMatchers(val: JasmineMatchers): void
};
