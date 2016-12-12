

declare module 'power-assert' {
			declare function assert(value: any, message?: string): void

		declare module.exports: undefined


}

declare module 'npm$namespace$assert' {
		declare export interface Options {
		assertion?: empower.Options,
		output?: powerAssertFormatter.Options
	}

	declare export function fail(actual?: any, expected?: any, message?: string, operator?: string): void

	declare export function ok(value: any, message?: string): void

	declare export function equal(actual: any, expected: any, message?: string): void

	declare export function notEqual(actual: any, expected: any, message?: string): void

	declare export function deepEqual(actual: any, expected: any, message?: string): void

	declare export function notDeepEqual(acutal: any, expected: any, message?: string): void

	declare export function strictEqual(actual: any, expected: any, message?: string): void

	declare export function notStrictEqual(actual: any, expected: any, message?: string): void

	declare export function deepStrictEqual(actual: any, expected: any, message?: string): void

	declare export function notDeepStrictEqual(actual: any, expected: any, message?: string): void

	declare export function ifError(value: any): void

	declare export function customize(options: Options): typeof assert

	declare export class AssertionError extends Error {
		name: string;
		message: string;
		actual: any;
		expected: any;
		operator: string;
		generatedMessage: boolean;
		constructor(options?: {
		message?: string,
		actual?: any,
		expected?: any,
		operator?: string,
		stackStartFunction?: Function
	}): this
	}

	
}