

declare module 'qunit-1.16' {
		declare interface DoneCallbackObject {
		failed: number,
		passed: number,
		total: number,
		runtime: number
	}

	declare interface LogCallbackObject {
		result: boolean,
		actual: Object,
		expected: Object,
		message: string,
		source: string
	}

	declare interface ModuleStartCallbackObject {
		name: string
	}

	declare interface ModuleDoneCallbackObject {
		name: string,
		failed: number,
		passed: number,
		total: number
	}

	declare interface TestDoneCallbackObject {
		name: string,
		module: string,
		failed: number,
		passed: number,
		total: number,
		duration: number
	}

	declare interface TestStartCallbackObject {
		name: string,
		module: string
	}

	declare interface Config {
		altertitle: boolean,
		autostart: boolean,
		current: Object,
		reorder: boolean,
		requireExpects: boolean,
		testTimeout: number,
		urlConfig: Array<URLConfigItem>,
		done: any
	}

	declare interface URLConfigItem {
		id: string,
		label: string,
		tooltip: string
	}

	declare interface LifecycleObject {
		setup?: (assert: QUnitAssert) => void,
		teardown?: (assert: QUnitAssert) => void,
		beforeEach?: (assert: QUnitAssert) => void,
		afterEach?: (assert: QUnitAssert) => void,
		[property: string]: any
	}

	declare interface QUnitAssert {
		assert: any,
		current_testEnvironment: any,
		jsDump: any,
		async(): () => void,
		deepEqual(actual: any, expected: any, message?: string): any,
		equal(actual: any, expected: any, message?: string): any,
		expect(amount: number): any,
		notDeepEqual(actual: any, expected: any, message?: string): any,
		notEqual(actual: any, expected: any, message?: string): any,
		notPropEqual(actual: any, expected: any, message?: string): any,
		propEqual(actual: any, expected: any, message?: string): any,
		notStrictEqual(actual: any, expected: any, message?: string): any,
		ok(state: any, message?: string): any,
		strictEqual(actual: any, expected: any, message?: string): any,
		throws(block: () => any, expected: any, message?: string): any,
		throws(block: () => any, message?: string): any,
		raises(block: () => any, expected: any, message?: string): any,
		raises(block: () => any, message?: string): any
	}

	declare interface QUnitStatic {
		start(decrement?: number): any,
		stop(increment?: number): any,
		begin(callback: () => any): any,
		done(callback: (details: DoneCallbackObject) => any): any,
		log(callback: (details: LogCallbackObject) => any): any,
		moduleDone(callback: (details: ModuleDoneCallbackObject) => any): any,
		moduleStart(callback: (details: ModuleStartCallbackObject) => any): any,
		testDone(callback: (details: TestDoneCallbackObject) => any): any,
		testStart(callback: (details: TestStartCallbackObject) => any): any,
		config: Config,
		asyncTest(name: string, expected: number, test: (assert: QUnitAssert) => any): any,
		asyncTest(name: string, test: (assert: QUnitAssert) => any): any,
		expect(amount: number): any,
		extend(target: any, mixin: any): any,
		module(name: string, lifecycle?: LifecycleObject): any,
		test(title: string, expected: number, test: (assert: QUnitAssert) => any): any,
		test(title: string, test: (assert: QUnitAssert) => any): any,
		equiv(a: any, b: any): any,
		push(result: any, actual: any, expected: any, message: string): any,
		reset(): any
	}

	declare function deepEqual(actual: any, expected: any, message?: string): any

	declare function equal(actual: any, expected: any, message?: string): any

	declare function notDeepEqual(actual: any, expected: any, message?: string): any

	declare function notEqual(actual: any, expected: any, message?: string): any

	declare function notStrictEqual(actual: any, expected: any, message?: string): any

	declare function ok(state: any, message?: string): any

	declare function strictEqual(actual: any, expected: any, message?: string): any

	declare function throws(block: () => any, expected: any, message?: string): any

	declare function throws(block: () => any, message?: string): any

	declare function start(decrement?: number): any

	declare function stop(increment?: number): any

	declare function begin(callback: () => any): any

	declare function done(callback: (details: DoneCallbackObject) => any): any

	declare function log(callback: (details: LogCallbackObject) => any): any

	declare function moduleDone(callback: (details: ModuleDoneCallbackObject) => any): any

	declare function moduleStart(callback: (name: string) => any): any

	declare function testDone(callback: (details: TestDoneCallbackObject) => any): any

	declare function testStart(callback: (details: TestStartCallbackObject) => any): any

	declare function asyncTest(name: string, expected?: any, test?: (assert: QUnitAssert) => any): any

	declare function asyncTest(name: string, test: (assert: QUnitAssert) => any): any

	declare function expect(amount: number): any

	declare function test(title: string, expected: number, test: (assert?: QUnitAssert) => any): any

	declare function test(title: string, test: (assert?: QUnitAssert) => any): any

	declare function notPropEqual(actual: any, expected: any, message?: string): any

	declare function propEqual(actual: any, expected: any, message?: string): any

	declare function equiv(a: any, b: any): any

		
}