

declare module 'tape' {
		declare interface TestCase {
		(test: Test): void
	}

	declare interface TestOptions {
		skip?: boolean,
		timeout?: number
	}

	declare interface StreamOptions {
		objectMode?: boolean
	}

	declare interface Test {
		test(name: string, cb: tape.TestCase): void,
		plan(n: number): void,
		end(err?: any): void,
		fail(msg?: string): void,
		pass(msg?: string): void,
		timeoutAfter(ms: number): void,
		skip(msg?: string): void,
		ok(value: any, msg?: string): void,
		true(value: any, msg?: string): void,
		assert(value: any, msg?: string): void,
		notOk(value: any, msg?: string): void,
		false(value: any, msg?: string): void,
		notok(value: any, msg?: string): void,
		error(err: any, msg?: string): void,
		ifError(err: any, msg?: string): void,
		ifErr(err: any, msg?: string): void,
		iferror(err: any, msg?: string): void,
		equal(a: any, b: any, msg?: string): void,
		equals(a: any, b: any, msg?: string): void,
		isEqual(a: any, b: any, msg?: string): void,
		is(a: any, b: any, msg?: string): void,
		strictEqual(a: any, b: any, msg?: string): void,
		strictEquals(a: any, b: any, msg?: string): void,
		notEqual(a: any, b: any, msg?: string): void,
		notEquals(a: any, b: any, msg?: string): void,
		notStrictEqual(a: any, b: any, msg?: string): void,
		notStrictEquals(a: any, b: any, msg?: string): void,
		isNotEqual(a: any, b: any, msg?: string): void,
		isNot(a: any, b: any, msg?: string): void,
		not(a: any, b: any, msg?: string): void,
		doesNotEqual(a: any, b: any, msg?: string): void,
		isInequal(a: any, b: any, msg?: string): void,
		deepEqual(a: any, b: any, msg?: string): void,
		deepEquals(a: any, b: any, msg?: string): void,
		isEquivalent(a: any, b: any, msg?: string): void,
		same(a: any, b: any, msg?: string): void,
		notDeepEqual(a: any, b: any, msg?: string): void,
		notEquivalent(a: any, b: any, msg?: string): void,
		notDeeply(a: any, b: any, msg?: string): void,
		notSame(a: any, b: any, msg?: string): void,
		isNotDeepEqual(a: any, b: any, msg?: string): void,
		isNotDeeply(a: any, b: any, msg?: string): void,
		isNotEquivalent(a: any, b: any, msg?: string): void,
		isInequivalent(a: any, b: any, msg?: string): void,
		deepLooseEqual(a: any, b: any, msg?: string): void,
		looseEqual(a: any, b: any, msg?: string): void,
		looseEquals(a: any, b: any, msg?: string): void,
		notDeepLooseEqual(a: any, b: any, msg?: string): void,
		notLooseEqual(a: any, b: any, msg?: string): void,
		notLooseEquals(a: any, b: any, msg?: string): void,
		throws(fn: () => void, msg?: string): void,
		throws(fn: () => void, exceptionExpected: RegExp | (() => void), msg?: string): void,
		doesNotThrow(fn: () => void, msg?: string): void,
		doesNotThrow(fn: () => void, exceptionExpected: RegExp | (() => void), msg?: string): void,
		comment(msg: string): void
	}

	declare function tape(name: string, cb: tape.TestCase): void

	declare function tape(name: string, opts: tape.TestOptions, cb: tape.TestCase): void

	declare function tape(cb: tape.TestCase): void

	declare function tape(opts: tape.TestOptions, cb: tape.TestCase): void

	declare export function skip(name: string, cb: tape.TestCase): void

	declare export function only(name: string, cb: tape.TestCase): void

	declare export function createHarness(): typeof tape

	declare export function createStream(opts?: tape.StreamOptions): NodeJS.ReadableStream

		declare module.exports: undefined


}