import type { Lifecycle, Describe, It } from 'npm$namespace$jest'

declare module 'jest' {
		declare interface NodeRequire {
		requireActual(moduleName: string): any,
		requireMock(moduleName: string): any
	}

	declare function expect(actual: any): jest.Matchers

	declare function spyOn(object: any, method: string): jasmine.Spy

	declare function pending(reason?: string): void

	declare function fail(error?: any): void

		
}

declare module 'npm$namespace$jest' {
		declare interface MockOptions {
		virtual?: boolean
	}

	declare interface EmptyFunction {
		(): void
	}

	declare interface DoneCallback {
		(...args: any[]): any,
		fail(error?: string | {
		message: string
	}): any
	}

	declare interface ProvidesCallback {
		(cb?: DoneCallback): any
	}

	declare interface Lifecycle {
		(fn: ProvidesCallback): any
	}

	declare interface It {
		(name: string, fn: ProvidesCallback): void,
		only: It,
		skip: It,
		concurrent: It
	}

	declare interface Describe {
		(name: string, fn: EmptyFunction): void,
		only: Describe,
		skip: Describe
	}

	declare interface Matchers {
		not: Matchers,
		lastCalledWith(...args: any[]): void,
		toBe(expected: any): void,
		toBeCalled(): void,
		toBeCalledWith(...args: any[]): void,
		toBeCloseTo(expected: number, delta: number): void,
		toBeDefined(): void,
		toBeFalsy(): void,
		toBeGreaterThan(expected: number): void,
		toBeGreaterThanOrEqual(expected: number): void,
		toBeInstanceOf(expected: any): void,
		toBeLessThan(expected: number): void,
		toBeLessThanOrEqual(expected: number): void,
		toBeNull(): void,
		toBeTruthy(): void,
		toBeUndefined(): void,
		toContain(expected: any): void,
		toContainEqual(expected: any): void,
		toEqual(expected: any): void,
		toHaveBeenCalled(): boolean,
		toHaveBeenCalledTimes(expected: number): boolean,
		toHaveBeenCalledWith(...params: any[]): boolean,
		toMatch(expected: string | RegExp): void,
		toMatchSnapshot(): void,
		toThrow(): void,
		toThrowError(error?: string | Constructable | RegExp): void,
		toThrowErrorMatchingSnapshot(): void
	}

	declare interface Constructable {
		new (...args: any[]): any
	}

	declare interface Mock<T> {
		new (): T,
		(...args: any[]): any,
		mock: MockContext<T>,
		mockClear(): void,
		mockImplementation(fn: Function): Mock<T>,
		mockImplementationOnce(fn: Function): Mock<T>,
		mockReturnThis(): Mock<T>,
		mockReturnValue(value: any): Mock<T>,
		mockReturnValueOnce(value: any): Mock<T>
	}

	declare interface MockContext<T> {
		calls: any[][],
		instances: T[]
	}

	declare function addMatchers(matchers: jasmine.CustomMatcherFactories): typeof jest

	declare function autoMockOff(): typeof jest

	declare function autoMockOn(): typeof jest

	declare function clearAllMocks(): typeof jest

	declare function clearAllTimers(): typeof jest

	declare function deepUnmock(moduleName: string): typeof jest

	declare function disableAutomock(): typeof jest

	declare function doMock(moduleName: string): typeof jest

	declare function dontMock(moduleName: string): typeof jest

	declare function enableAutomock(): typeof jest

	declare function fn<T>(implementation?: Function): Mock<T>

	declare function genMockFromModule<T>(moduleName: string): T

	declare function isMockFunction(fn: any): Mock

	declare function mock(moduleName: string, factory?: any, options?: MockOptions): typeof jest

	declare function resetModuleRegistry(): typeof jest

	declare function resetModules(): typeof jest

	declare function runAllImmediates(): typeof jest

	declare function runAllTicks(): typeof jest

	declare function runAllTimers(): typeof jest

	declare function runOnlyPendingTimers(): typeof jest

	declare function runTimersToTime(msToRun: number): typeof jest

	declare function setMock<T>(moduleName: string, moduleExports: T): typeof jest

	declare function unmock(moduleName: string): typeof jest

	declare function useFakeTimers(): typeof jest

	declare function useRealTimers(): typeof jest

		
}

declare module 'npm$namespace$jasmine' {
		declare interface Clock {
		install(): void,
		uninstall(): void,
		tick(ms: number): void,
		mockDate(date?: Date): void
	}

	declare interface Any {
		new (expectedClass: any): any,
		jasmineMatches(other: any): boolean,
		jasmineToString(): string
	}

	declare interface ArrayContaining {
		new (sample: any[]): any,
		asymmetricMatch(other: any): boolean,
		jasmineToString(): string
	}

	declare interface ObjectContaining {
		new (sample: any): any,
		jasmineMatches(other: any, mismatchKeys: any[], mismatchValues: any[]): boolean,
		jasmineToString(): string
	}

	declare interface Spy {
		(...params: any[]): any,
		identity: string,
		and: SpyAnd,
		calls: Calls,
		mostRecentCall: {
		args: any[]
	},
		argsForCall: any[],
		wasCalled: boolean
	}

	declare interface SpyAnd {
		callThrough(): Spy,
		returnValue(val: any): Spy,
		returnValues(...values: any[]): Spy,
		callFake(fn: Function): Spy,
		throwError(msg: string): Spy,
		stub(): Spy
	}

	declare interface Calls {
		any(): boolean,
		count(): number,
		argsFor(index: number): any[],
		allArgs(): any[],
		all(): CallInfo[],
		mostRecent(): CallInfo,
		first(): CallInfo,
		reset(): void
	}

	declare interface CallInfo {
		object: any,
		args: any[],
		returnValue: any
	}

	declare interface CustomMatcherFactories {
		[index: string]: CustomMatcherFactory
	}

	declare interface CustomMatcherFactory {
		(util: MatchersUtil, customEqualityTesters: Array<CustomEqualityTester>): CustomMatcher
	}

	declare interface MatchersUtil {
		equals(a: any, b: any, customTesters?: Array<CustomEqualityTester>): boolean,
		contains<T>(
		haystack: ArrayLike<T> | string, needle: any, customTesters?: Array<CustomEqualityTester>
	): boolean,
		buildFailureMessage(
		matcherName: string, isNot: boolean, actual: any, ...expected: Array<any>
	): string
	}

	declare interface CustomEqualityTester {
		(first: any, second: any): boolean
	}

	declare interface CustomMatcher {
		compare<T>(actual: T, expected: T): CustomMatcherResult,
		compare(actual: any, expected: any): CustomMatcherResult
	}

	declare interface CustomMatcherResult {
		pass: boolean,
		message: string | (() => string)
	}

	declare interface ArrayLike<T> {
		length: number,
		[n: number]: T
	}

	declare function any(aclass: any): Any

	declare function anything(): Any

	declare function arrayContaining(sample: any[]): ArrayContaining

	declare function objectContaining(sample: any): ObjectContaining

	declare function createSpy(name: string, originalFn?: Function): Spy

	declare function createSpyObj(baseName: string, methodNames: any[]): any

	declare function createSpyObj<T>(baseName: string, methodNames: any[]): T

	declare function pp(value: any): string

	declare function addCustomEqualityTester(equalityTester: CustomEqualityTester): void

	declare function addMatchers(matchers: CustomMatcherFactories): void

	declare function stringMatching(value: string | RegExp): Any

		
}