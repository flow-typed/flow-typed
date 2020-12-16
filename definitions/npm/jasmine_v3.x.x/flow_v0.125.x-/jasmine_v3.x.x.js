type JasmineExpectType = {|
  not: JasmineExpectType,
  nothing(): void,
  toBe(value: mixed): void,
  toBeCloseTo(num: number, delta: mixed): void,
  toBeDefined(): void,
  toBeFalse(): void,
  toBeFalsy(): void,
  toBeGreaterThan(number: number): void,
  toBeGreaterThanOrEqual(number: number): void,
  toBeInstanceOf(value: mixed): void,
  toBeLessThan(number: number): void,
  toBeLessThanOrEqual(number: number): void,
  toBeNaN(): void,
  toBeNegativeInfinity(): void,
  toBeNull(): void,
  toBePositiveInfinity(): void,
  toBeTrue(): void,
  toBeTruthy(): void,
  toBeUndefined(): void,
  toContain(substringOrElement: mixed): void,
  toEqual(value: mixed): void,
  toHaveBeenCalled(): void,
  toHaveBeenCalledBefore(spy: (...any) => any): void,
  toHaveBeenCalledOnceWith(spy: (...any) => any): void,
  toHaveBeenCalledTimes(number: number): void,
  toHaveBeenCalledWith(...args: Array<any>): void,
  toHaveClass(className: string): void,
  toHaveSize(expected: number): void,
  toMatch(regexp: RegExp): void,
  toThrow(message?: string): void,
  toThrowError(val: mixed): void,
  toThrowMatching(predicate: (...any) => boolean): void,
  withContext(message: string): JasmineExpectType,
|};

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
// https://jasmine.github.io/api/edge/global.html#spyOn
declare function spyOn(value: mixed, method: string): any;

type JasmineCallsType = {
  all(): mixed,
  allArgs(): mixed,
  any(): boolean,
  count(): number,
  first(): mixed,
  mostRecent(): mixed,
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
  mockDate(date: Date): void,
  tick(milliseconds?: number): void,
  uninstall(): void,
  ...
};

declare class JasmineEnv {
  addReporter(mixed): void,
  clearReporters(): void,
  configuration(): any,
  configure(mixed): void,
  hideDisabled(): void,
  provideFallbackReporter(mixed): void,
  randomizeTests(value: boolean): void,
  seed(number): void,
  setSpecProperty(key: string, value: mixed): void,
  setSuiteProperty(key: string, value: mixed): void,
  stopOnSpecFailure(value: boolean): void,
  throwOnExpectationFailure(value: boolean): void,
}

declare type JasmineMatcherResult = {
  message?: string | (() => string),
  pass: boolean,
  ...
};

declare type JasmineMatcherStruct = { compare(actual: any, expected: any): JasmineMatcherResult, ... };

declare type JasmineMatcher = (
  utils?: mixed,
  customEqualityTesters?: mixed
) => JasmineMatcherStruct;

declare type JasmineMatchers = { [key: string]: JasmineMatcher, ... };

declare var jasmine: {|
  DEFAULT_TIMEOUT_INTERVAL: number,
  MAX_PRETTY_PRINT_ARRAY_LENGTH: number,
  MAX_PRETTY_PRINT_CHARS: number,
  MAX_PRETTY_PRINT_DEPTH: number,
  addAsyncMatchers(val: mixed): void,
  addCustomEqualityTester(...mixed): void,
  addCustomObjectFormatter(...mixed): void,
  addMatchers(val: JasmineMatchers): void,
  addSpyStrategy(name: string, ...mixed): void,
  any(val: mixed): JasmineMatcher,
  anything(): JasmineMatcher,
  arrayContaining(val: mixed[]): JasmineMatcher,
  arrayWithExactContents(val: mixed[]): JasmineMatcher,
  clock(): JasmineClockType,
  createSpy(name?: string, originalFn?: (...any) => any): JasmineSpyType,
  createSpyObj(...mixed): JasmineSpyType,
  empty(): JasmineMatcher,
  falsy(): JasmineMatcher,
  getEnv(): JasmineEnv,
  mapContaining(...mixed): JasmineMatcher,
  notEmpty(): JasmineMatcher,
  objectContaining(val: {...}): JasmineMatcher,
  setContaining(val: Set<mixed>): JasmineMatcher,
  setDefaultSpyStrategy(defaultStrategyFn: JasmineSpyStrategyType => JasmineSpyType): void,
  stringMatching(val: string | RegExp): JasmineMatcher,
  truthy(): JasmineMatcher,
|};
