

declare module 'qunit' {
		declare interface Assert {
		async(acceptCallCount?: number): () => void,
		deepEqual(actual: any, expected: any, message?: string): void,
		equal(actual: any, expected: any, message?: string): void,
		expect(amount: number): void,
		notDeepEqual(actual: any, expected: any, message?: string): void,
		notEqual(actual: any, expected: any, message?: string): void,
		notOk(state: any, message?: string): void,
		notPropEqual(actual: any, expected: any, message?: string): void,
		notStrictEqual(actual: any, expected: any, message?: string): void,
		ok(state: any, message?: string): void,
		propEqual(actual: any, expected: any, message?: string): void,
		pushResult(
		assertResult: {
		result: boolean,
		actual: any,
		expected: any,
		message: string
	}
	): void,
		strictEqual(actual: any, expected: any, message?: string): void,
		throws(block: () => void, expected?: any, message?: any): void,
		raises(block: () => void, expected?: any, message?: any): void
	}

	declare interface Config {
		altertitle: boolean,
		autostart: boolean,
		collapse: boolean,
		current: any,
		filter: string | RegExp,
		fixture: string,
		hidepassed: boolean,
		maxDepth: number,
		module: string,
		moduleId: string[],
		notrycatch: boolean,
		noglobals: boolean,
		seed: string,
		reorder: boolean,
		requireExpects: boolean,
		testId: string[],
		testTimeout: number,
		scrolltop: boolean,
		urlConfig: {
		id?: string,
		label?: string,
		tooltip?: string,
		value?: string | string[] | {
		[key: string]: string
	}
	}[]
	}

	declare interface Hooks {
		after?: (assert: Assert) => void,
		afterEach?: (assert: Assert) => void,
		before?: (assert: Assert) => void,
		beforeEach?: (assert: Assert) => void
	}

	declare interface NestedHooks {
		after: (fn: (assert: Assert) => void) => void,
		afterEach: (fn: (assert: Assert) => void) => void,
		before: (fn: (assert: Assert) => void) => void,
		beforeEach: (fn: (assert: Assert) => void) => void
	}

	declare interface QUnit {
		assert: Assert,
		begin(callback: (details: {
		totalTests: number
	}) => void): void,
		config: Config,
		done(
		callback: (
		details: {
		failed: number,
		passed: number,
		total: number,
		runtime: number
	}
	) => void
	): void,
		dump: {
		maxDepth: number,
		parse(data: any): string
	},
		extend(target: any, mixin: any): void,
		log(
		callback: (
		details: {
		result: boolean,
		actual: any,
		expected: any,
		message: string,
		source: string,
		module: string,
		name: string,
		runtime: number
	}
	) => void
	): void,
		module(name: string, hooks?: Hooks, nested?: (hooks: NestedHooks) => void): void,
		module(name: string, nested?: (hooks: NestedHooks) => void): void,
		moduleDone(
		callback: (
		details: {
		name: string,
		failed: number,
		passed: number,
		total: number,
		runtime: number
	}
	) => void
	): void,
		moduleStart(callback: (details: {
		name: string
	}) => void): void,
		only(name: string, callback: (assert: Assert) => void): void,
		push(result: boolean, actual: any, expected: any, message: string): void,
		skip(name: string, callback?: (assert: Assert) => void): void,
		stack(offset?: number): string,
		start(): void,
		test(name: string, callback: (assert: Assert) => void): void,
		testDone(
		callback: (
		details: {
		name: string,
		module: string,
		failed: number,
		passed: number,
		total: number,
		runtime: number
	}
	) => void
	): void,
		testStart(callback: (details: {
		name: string,
		module: string
	}) => void): void,
		isLocal: boolean,
		version: string
	}

			
}