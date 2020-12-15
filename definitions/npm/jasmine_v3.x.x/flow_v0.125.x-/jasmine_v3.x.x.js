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
  toContain(substringOrElement: mixed): void,
  toEqual(value: mixed): void,
  toHaveBeenCalled(): void,
  toHaveBeenCalledBefore(spy: mixed): void,
  toHaveBeenCalledTimes(number: number): void,
  toHaveBeenCalledWith(...args: Array<any>): void,
  toMatch(regexp: RegExp): void,
  toThrow(message?: string): void,
  toThrowError(val: mixed): void,
  ...
};

declare function describe(name: string, fn: (...any) => any): void;
declare function fdescribe(name: string, fn: (...any) => any): void;
declare function xdescribe(name: string, fn: (...any) => any): void;

declare function beforeEach(fn: (...any) => any, timeout?: number): void;
declare function afterEach(fn: (...any) => any, timeout?: number): void;
declare function beforeAll(fn: (...any) => any, timeout?: number): void;
declare function afterAll(fn: (...any) => any, timeout?: number): void;

declare function it(name: string, fn: (...any) => any, timeout?: number): void;
declare function fit(name: string, fn: (...any) => any, timeout?: number): void;
declare function xit(name: string, fn: (...any) => any): void;

declare function expect(value: mixed): JasmineExpectType;
declare function pending(message?: string): void;
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
  reset(): void,
  ...
};

type JasmineSpyStrategyType = {
  callFake((...args: Array<any>) => any): JasmineSpyType,
  callThrough(): JasmineSpyType,
  identity: string,
  returnValue(value: any): JasmineSpyType,
  returnValues(...values: any): JasmineSpyType,
  stub(): JasmineSpyType,
  throwError(errorMessage?: string): JasmineSpyType,
  ...
};

type JasmineSpyTypeProto = {
  and: JasmineSpyStrategyType,
  calls: JasmineCallsType,
  ...
};

type JasmineSpyType = JasmineSpyTypeProto & (...any) => any;

type JasmineClockType = {
  install(): void,
  uninstall(): void,
  tick(milliseconds?: number): void,
  mockDate(date: Date): void,
  ...
};

declare type JasmineMatcherResult = {
  pass: boolean,
  message?: string | (() => string),
  ...
};

declare type JasmineMatcherStruct = { compare(actual: any, expected: any): JasmineMatcherResult, ... };

declare type JasmineMatcher = (
  utils?: mixed,
  customEqualityTesters?: mixed
) => JasmineMatcherStruct;

declare type JasmineMatchers = { [key: string]: JasmineMatcher, ... };

declare var jasmine: {
  addMatchers(val: JasmineMatchers): void,
  any(val: mixed): void,
  anything(): void,
  arrayContaining(val: mixed[]): void,
  clock(): JasmineClockType,
  createSpy(name?: string): JasmineSpyType,
  DEFAULT_TIMEOUT_INTERVAL: number,
  objectContaining(val: {...}): void,
  stringMatching(val: string | RegExp): void,
  ...
};
