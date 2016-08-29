// flow-typed signature: e2130120dcdc34bf09ff82449b0d508c
// flow-typed version: 230d7577ce/jest_v12.0.x/flow_>=v0.23.x

type JestMockFn = {
  (...args: Array<any>): any;
  mock: {
    calls: Array<Array<any>>;
    instances: mixed;
  };
  mockClear(): Function;
  mockImplementation(fn: Function): JestMockFn;
  mockImplementationOnce(fn: Function): JestMockFn;
  mockReturnThis(): void;
  mockReturnValue(value: any): JestMockFn;
  mockReturnValueOnce(value: any): JestMockFn;
}

type JestAsymmetricEqualityType = {
  asymmetricMatch(value: mixed): boolean;
}

type JestCallsType = {
  allArgs(): mixed;
  all(): mixed;
  any(): boolean;
  count(): number;
  first(): mixed;
  mostRecent(): mixed;
  reset(): void;
}

type JestClockType = {
  install(): void;
  mockDate(date: Date): void;
  tick(): void;
  uninstall(): void;
}

type JestExpectType = {
  not: JestExpectType;
  lastCalledWith(...args: Array<any>): void;
  toBe(value: any): void;
  toBeCalled(): void;
  toBeCalledWith(...args: Array<any>): void;
  toBeCloseTo(num: number, delta: any): void;
  toBeDefined(): void;
  toBeFalsy(): void;
  toBeGreaterThan(number: number): void;
  toBeLessThan(number: number): void;
  toBeNull(): void;
  toBeTruthy(): void;
  toBeUndefined(): void;
  toContain(str: string): void;
  toEqual(value: any): void;
  toHaveBeenCalled(): void,
  toHaveBeenCalledWith(...args: Array<any>): void;
  toMatch(regexp: RegExp): void;
  toMatchSnapshot(): void;
  toThrow(message?: string | Error): void;
  toThrowError(message?: string): void;
}

type JestSpyType = {
  calls: JestCallsType;
}

declare function afterAll(fn: Function): void;
declare function afterEach(fn: Function): void;
declare function beforeAll(fn: Function): void;
declare function beforeEach(fn: Function): void;
declare function describe(name: string, fn: Function): void;
declare function fdescribe(name: string, fn: Function): void;
declare function fit(name: string, fn: Function): ?Promise<void>;
declare function it(name: string, fn: Function): ?Promise<void>;
declare function pit(name: string, fn: Function): Promise<void>;
declare function test(name: string, fn: Function): ?Promise<void>;
declare function xdescribe(name: string, fn: Function): void;
declare function xit(name: string, fn: Function): ?Promise<void>;

declare function expect(value: any): JestExpectType;

// TODO handle return type
// http://jasmine.github.io/2.4/introduction.html#section-Spies
declare function spyOn(value: mixed, method: string): Object;

declare var jest: {
  autoMockOff(): void;
  autoMockOn(): void;
  clearAllTimers(): void;
  currentTestPath(): void;
  disableAutomock(): void;
  doMock(moduleName: string, moduleFactory?: any): void;
  dontMock(moduleName: string): void;
  enableAutomock(): void;
  fn(implementation?: Function): JestMockFn;
  genMockFromModule(moduleName: string): any;
  mock(moduleName: string, moduleFactory?: any): void;
  runAllTicks(): void;
  runAllTimers(): void;
  runOnlyPendingTimers(): void;
  setMock(moduleName: string, moduleExports: any): void;
  unmock(moduleName: string): void;
  useFakeTimers(): void;
  useRealTimers(): void;
}

declare var jasmine: {
  DEFAULT_TIMEOUT_INTERVAL: number;
  any(value: mixed): JestAsymmetricEqualityType;
  anything(): void;
  arrayContaining(value: mixed[]): void;
  clock(): JestClockType;
  createSpy(name: string): JestSpyType;
  objectContaining(value: Object): void;
  stringMatching(value: string): void;
}
