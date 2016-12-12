

declare module 'jasmine' {
		declare interface DoneFn {
		(): void,
		fail: (message?: Error | string) => void
	}

	declare function describe(description: string, specDefinitions: () => void): void

	declare function fdescribe(description: string, specDefinitions: () => void): void

	declare function xdescribe(description: string, specDefinitions: () => void): void

	declare function it(expectation: string, assertion?: () => void, timeout?: number): void

	declare function it(
		expectation: string, assertion?: (done: DoneFn) => void, timeout?: number
	): void

	declare function fit(expectation: string, assertion?: () => void, timeout?: number): void

	declare function fit(
		expectation: string, assertion?: (done: DoneFn) => void, timeout?: number
	): void

	declare function xit(expectation: string, assertion?: () => void, timeout?: number): void

	declare function xit(
		expectation: string, assertion?: (done: DoneFn) => void, timeout?: number
	): void

	declare function pending(reason?: string): void

	declare function beforeEach(action: () => void, timeout?: number): void

	declare function beforeEach(action: (done: DoneFn) => void, timeout?: number): void

	declare function afterEach(action: () => void, timeout?: number): void

	declare function afterEach(action: (done: DoneFn) => void, timeout?: number): void

	declare function beforeAll(action: () => void, timeout?: number): void

	declare function beforeAll(action: (done: DoneFn) => void, timeout?: number): void

	declare function afterAll(action: () => void, timeout?: number): void

	declare function afterAll(action: (done: DoneFn) => void, timeout?: number): void

	declare function expect(spy: Function): jasmine.Matchers

	declare function expect(actual: any): jasmine.Matchers

	declare function fail(e?: any): void

	declare function spyOn(object: any, method: string): jasmine.Spy

	declare function runs(asyncMethod: Function): void

	declare function waitsFor(latchMethod: () => boolean, failureMessage?: string, timeout?: number): void

	declare function waits(timeout?: number): void

		
}

declare module 'npm$namespace$jasmine' {
		declare interface Any {
		new (expectedClass: any): any,
		jasmineMatches(other: any): boolean,
		jasmineToString(): string
	}

	declare interface ArrayLike<T> {
		length: number,
		[n: number]: T
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

	declare interface Block {
		new (env: Env, func: SpecFunction, spec: Spec): any,
		execute(onComplete: () => void): void
	}

	declare interface WaitsBlock {
		new (env: Env, timeout: number, spec: Spec): any
	}

	declare interface WaitsForBlock {
		new (
		env: Env, timeout: number, latchFunction: SpecFunction, message: string, spec: Spec
	): any
	}

	declare interface Clock {
		install(): void,
		uninstall(): void,
		tick(ms: number): void,
		mockDate(date?: Date): void,
		withMock(func: () => void): void
	}

	declare interface CustomEqualityTester {
		(first: any, second: any): boolean
	}

	declare interface CustomMatcher {
		compare<T>(actual: T, expected: T): CustomMatcherResult,
		compare(actual: any, expected: any): CustomMatcherResult
	}

	declare interface CustomMatcherFactory {
		(util: MatchersUtil, customEqualityTesters: Array<CustomEqualityTester>): CustomMatcher
	}

	declare interface CustomMatcherFactories {
		[index: string]: CustomMatcherFactory
	}

	declare interface CustomMatcherResult {
		pass: boolean,
		message?: string
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

	declare interface Env {
		setTimeout: any,
		clearTimeout: void,
		setInterval: any,
		clearInterval: void,
		updateInterval: number,
		currentSpec: Spec,
		matchersClass: Matchers,
		version(): any,
		versionString(): string,
		nextSpecId(): number,
		addReporter(reporter: Reporter): void,
		addReporter(reporter: CustomReporter): void,
		execute(): void,
		describe(description: string, specDefinitions: () => void): Suite,
		beforeEach(beforeEachFunction: () => void): void,
		beforeAll(beforeAllFunction: () => void): void,
		currentRunner(): Runner,
		afterEach(afterEachFunction: () => void): void,
		afterAll(afterAllFunction: () => void): void,
		xdescribe(desc: string, specDefinitions: () => void): XSuite,
		it(description: string, func: () => void): Spec,
		xit(desc: string, func: () => void): XSpec,
		compareRegExps_(
		a: RegExp, b: RegExp, mismatchKeys: string[], mismatchValues: string[]
	): boolean,
		compareObjects_(a: any, b: any, mismatchKeys: string[], mismatchValues: string[]): boolean,
		equals_(a: any, b: any, mismatchKeys: string[], mismatchValues: string[]): boolean,
		contains_(haystack: any, needle: any): boolean,
		addCustomEqualityTester(equalityTester: CustomEqualityTester): void,
		addMatchers(matchers: CustomMatcherFactories): void,
		specFilter(spec: Spec): boolean,
		throwOnExpectationFailure(value: boolean): void,
		seed(seed: string | number): string | number,
		provideFallbackReporter(reporter: Reporter): void,
		throwingExpectationFailures(): boolean,
		allowRespy(allow: boolean): void,
		randomTests(): boolean,
		randomizeTests(b: boolean): void
	}

	declare interface FakeTimer {
		new (): any,
		reset(): void,
		tick(millis: number): void,
		runFunctionsWithinRange(oldMillis: number, nowMillis: number): void,
		scheduleFunction(
		timeoutKey: any, funcToCall: () => void, millis: number, recurring: boolean
	): void
	}

	declare interface HtmlReporter {
		new (): any
	}

	declare interface HtmlSpecFilter {
		new (): any
	}

	declare interface Result {
		type: string
	}

	declare interface NestedResults {
		description: string,
		totalCount: number,
		passedCount: number,
		failedCount: number,
		skipped: boolean,
		rollupCounts(result: NestedResults): void,
		log(values: any): void,
		getItems(): Result[],
		addResult(result: Result): void,
		passed(): boolean
	}

	declare interface MessageResult {
		values: any,
		trace: Trace
	}

	declare interface ExpectationResult {
		matcherName: string,
		passed(): boolean,
		expected: any,
		actual: any,
		message: string,
		trace: Trace
	}

	declare interface Order {
		new (options: {
		random: boolean,
		seed: string
	}): any,
		random: boolean,
		seed: string,
		sort<T>(items: T[]): T[]
	}

	declare interface TreeProcessor {
		new (attrs: any): any,
		execute: (done: Function) => void,
		processTree(): any
	}

	declare interface Trace {
		name: string,
		message: string,
		stack: any
	}

	declare interface PrettyPrinter {
		new (): any,
		format(value: any): void,
		iterateObject(obj: any, fn: (property: string, isGetter: boolean) => void): void,
		emitScalar(value: any): void,
		emitString(value: string): void,
		emitArray(array: any[]): void,
		emitObject(obj: any): void,
		append(value: any): void
	}

	declare interface StringPrettyPrinter {
		
	}

	declare interface Queue {
		new (env: any): any,
		env: Env,
		ensured: boolean[],
		blocks: Block[],
		running: boolean,
		index: number,
		offset: number,
		abort: boolean,
		addBefore(block: Block, ensure?: boolean): void,
		add(block: any, ensure?: boolean): void,
		insertNext(block: any, ensure?: boolean): void,
		start(onComplete?: () => void): void,
		isRunning(): boolean,
		next_(): void,
		results(): NestedResults
	}

	declare interface Matchers {
		new (env: Env, actual: any, spec: Env, isNot?: boolean): any,
		env: Env,
		actual: any,
		spec: Env,
		isNot?: boolean,
		message(): any,
		toBe(expected: any, expectationFailOutput?: any): boolean,
		toEqual(expected: any, expectationFailOutput?: any): boolean,
		toMatch(expected: string | RegExp, expectationFailOutput?: any): boolean,
		toBeDefined(expectationFailOutput?: any): boolean,
		toBeUndefined(expectationFailOutput?: any): boolean,
		toBeNull(expectationFailOutput?: any): boolean,
		toBeNaN(): boolean,
		toBeTruthy(expectationFailOutput?: any): boolean,
		toBeFalsy(expectationFailOutput?: any): boolean,
		toHaveBeenCalled(): boolean,
		toHaveBeenCalledWith(...params: any[]): boolean,
		toHaveBeenCalledTimes(expected: number): boolean,
		toContain(expected: any, expectationFailOutput?: any): boolean,
		toBeLessThan(expected: number, expectationFailOutput?: any): boolean,
		toBeLessThanOrEqual(expected: number, expectationFailOutput?: any): boolean,
		toBeGreaterThan(expected: number, expectationFailOutput?: any): boolean,
		toBeGreaterThanOrEqual(expected: number, expectationFailOutput?: any): boolean,
		toBeCloseTo(expected: number, precision?: any, expectationFailOutput?: any): boolean,
		toThrow(expected?: any): boolean,
		toThrowError(message?: string | RegExp): boolean,
		toThrowError(
		expected?: NO PRINT IMPLEMENTED: ConstructorType, message?: string | RegExp
	): boolean,
		not: Matchers,
		Any: Any
	}

	declare interface Reporter {
		reportRunnerStarting(runner: Runner): void,
		reportRunnerResults(runner: Runner): void,
		reportSuiteResults(suite: Suite): void,
		reportSpecStarting(spec: Spec): void,
		reportSpecResults(spec: Spec): void,
		log(str: string): void
	}

	declare interface MultiReporter {
		addReporter(reporter: Reporter): void
	}

	declare interface SuiteInfo {
		totalSpecsDefined: number
	}

	declare interface CustomReportExpectation {
		matcherName: string,
		message: string,
		passed: boolean,
		stack: string
	}

	declare interface FailedExpectation {
		actual: string,
		expected: string
	}

	declare interface PassedExpectation {
		
	}

	declare interface CustomReporterResult {
		description: string,
		failedExpectations?: FailedExpectation[],
		fullName: string,
		id: string,
		passedExpectations?: PassedExpectation[],
		pendingReason?: string,
		status?: string
	}

	declare interface CustomReporter {
		jasmineStarted(suiteInfo: SuiteInfo): void,
		suiteStarted(result: CustomReporterResult): void,
		specStarted(result: CustomReporterResult): void,
		specDone(result: CustomReporterResult): void,
		suiteDone(result: CustomReporterResult): void,
		jasmineDone(): any
	}

	declare interface Runner {
		new (env: Env): any,
		execute(): void,
		beforeEach(beforeEachFunction: SpecFunction): void,
		afterEach(afterEachFunction: SpecFunction): void,
		beforeAll(beforeAllFunction: SpecFunction): void,
		afterAll(afterAllFunction: SpecFunction): void,
		finishCallback(): void,
		addSuite(suite: Suite): void,
		add(block: Block): void,
		specs(): Spec[],
		suites(): Suite[],
		topLevelSuites(): Suite[],
		results(): NestedResults
	}

	declare interface SpecFunction {
		(spec?: Spec): void
	}

	declare interface SuiteOrSpec {
		id: number,
		env: Env,
		description: string,
		queue: Queue
	}

	declare interface Spec {
		new (env: Env, suite: Suite, description: string): any,
		suite: Suite,
		afterCallbacks: SpecFunction[],
		spies_: Spy[],
		results_: NestedResults,
		matchersClass: Matchers,
		getFullName(): string,
		results(): NestedResults,
		log(arguments: any): any,
		runs(func: SpecFunction): Spec,
		addToQueue(block: Block): void,
		addMatcherResult(result: Result): void,
		getResult(): any,
		expect(actual: any): any,
		waits(timeout: number): Spec,
		waitsFor(latchFunction: SpecFunction, timeoutMessage?: string, timeout?: number): Spec,
		fail(e?: any): void,
		getMatchersClass_(): Matchers,
		addMatchers(matchersPrototype: CustomMatcherFactories): void,
		finishCallback(): void,
		finish(onComplete?: () => void): void,
		after(doAfter: SpecFunction): void,
		execute(onComplete?: () => void, enabled?: boolean): any,
		addBeforesAndAftersToQueue(): void,
		explodes(): void,
		spyOn(obj: any, methodName: string, ignoreMethodDoesntExist: boolean): Spy,
		removeAllSpies(): void,
		throwOnExpectationFailure: boolean
	}

	declare interface XSpec {
		id: number,
		runs(): void
	}

	declare interface Suite {
		new (
		env: Env, description: string, specDefinitions: () => void, parentSuite: Suite
	): any,
		parentSuite: Suite,
		getFullName(): string,
		finish(onComplete?: () => void): void,
		beforeEach(beforeEachFunction: SpecFunction): void,
		afterEach(afterEachFunction: SpecFunction): void,
		beforeAll(beforeAllFunction: SpecFunction): void,
		afterAll(afterAllFunction: SpecFunction): void,
		results(): NestedResults,
		add(suiteOrSpec: SuiteOrSpec): void,
		specs(): Spec[],
		suites(): Suite[],
		children(): any[],
		execute(onComplete?: () => void): void
	}

	declare interface XSuite {
		execute(): void
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

	declare interface Util {
		inherit(childClass: Function, parentClass: Function): any,
		formatException(e: any): any,
		htmlEscape(str: string): string,
		argsToArray(args: any): any,
		extend(destination: any, source: any): any
	}

	declare interface JsApiReporter {
		started: boolean,
		finished: boolean,
		result: any,
		messages: any,
		runDetails: {
		failedExpectations: ExpectationResult[],
		order: jasmine.Order
	},
		new (): any,
		suites(): Suite[],
		summarize_(suiteOrSpec: SuiteOrSpec): any,
		results(): any,
		resultsForSpec(specId: any): any,
		log(str: any): any,
		resultsForSpecs(specIds: any): any,
		summarizeResult_(result: any): any
	}

	declare interface Jasmine {
		Spec: Spec,
		clock: Clock,
		util: Util
	}

	declare function any(aclass: any): Any

	declare function anything(): Any

	declare function arrayContaining(sample: any[]): ArrayContaining

	declare function objectContaining(sample: any): ObjectContaining

	declare function createSpy(name: string, originalFn?: Function): Spy

	declare function createSpyObj(baseName: string, methodNames: any[]): any

	declare function createSpyObj<T>(baseName: string, methodNames: any[]): T

	declare function pp(value: any): string

	declare function getEnv(): Env

	declare function addCustomEqualityTester(equalityTester: CustomEqualityTester): void

	declare function addMatchers(matchers: CustomMatcherFactories): void

	declare function stringMatching(str: string): Any

	declare function stringMatching(str: RegExp): Any

	declare function formatErrorMsg(domain: string, usage: string): (msg: string) => string

		
}

declare module 'errors' {
				declare class ExpectationFailed extends Error {
		constructor(): this;
		stack: any
	}

	
}