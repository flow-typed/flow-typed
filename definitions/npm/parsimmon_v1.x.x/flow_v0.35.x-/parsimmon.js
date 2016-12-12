

declare module 'parsimmon' {
					declare module.exports: undefined


}

declare module 'Parsimmon' {
	declare export type StreamType = string;

	declare export type SuccessFunctionType<U> = (index: number, result: U) => Result<U>;

	declare export type FailureFunctionType<U> = (index: number, msg: string) => Result<U>;

	declare export type ParseFunctionType<U> = (stream: StreamType, index: number) => Result<U>;

	declare export interface Index {
		offset: number,
		line: number,
		column: number
	}

	declare export interface Mark<T> {
		start: Index,
		end: Index,
		value: T
	}

	declare export interface Result<T> {
		status: boolean,
		value?: T,
		expected?: string,
		index?: Index
	}

	declare export interface Parser<T> {
		parse(input: string): Result<T>,
		or(otherParser: Parser<T>): Parser<T>,
		or<U>(otherParser: Parser<U>): Parser<any>,
		chain<U>(next: (result: T) => Parser<U>): Parser<U>,
		then<U>(call: (result: T) => Parser<U>): Parser<U>,
		then<U>(anotherParser: Parser<U>): Parser<U>,
		map<U>(call: (result: T) => U): Parser<U>,
		skip<U>(otherParser: Parser<U>): Parser<T>,
		result<U>(aResult: U): Parser<U>,
		many(): Parser<T[]>,
		times(n: number): Parser<T[]>,
		times(min: number, max: number): Parser<T[]>,
		atMost(n: number): Parser<T[]>,
		atLeast(n: number): Parser<T[]>,
		mark(): Parser<Mark<T>>,
		desc(description: string): Parser<T>
	}

	declare export function isParser(obj: any): boolean

	declare export function string(string: string): Parser<string>

	declare export function oneOf(string: string): Parser<string>

	declare export function noneOf(string: string): Parser<string>

	declare export function regexp(myregex: RegExp, group?: number): Parser<string>

	declare export function regex(myregex: RegExp, group?: number): Parser<string>

	declare export function succeed<U>(result: U): Parser<U>

	declare export function of<U>(result: U): Parser<U>

	declare export function seq<T>(p1: Parser<T>): Parser<[T]>

	declare export function seq<T, U>(p1: Parser<T>, p2: Parser<U>): Parser<[T, U]>

	declare export function seq<T, U, V>(p1: Parser<T>, p2: Parser<U>, p3: Parser<V>): Parser<[T, U, V]>

	declare export function seq<T, U, V, W>(
		p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>
	): Parser<[T, U, V, W]>

	declare export function seq<T, U, V, W, X>(
		p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>
	): Parser<[T, U, V, W, X]>

	declare export function seq<T, U, V, W, X, Y>(
		p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, p6: Parser<Y>
	): Parser<[T, U, V, W, X, Y]>

	declare export function seq<T, U, V, W, X, Y, Z>(
		p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, p6: Parser<Y>, p7: Parser<Z>
	): Parser<[T, U, V, W, X, Y, Z]>

	declare export function seq<T>(...parsers: Parser<T>[]): Parser<T[]>

	declare export function seq(...parsers: Parser<any>[]): Parser<any[]>

	declare export function formatError<T>(string: string, error: Result<T>): string

	declare export function seqMap<T, U>(p1: Parser<T>, cb: (a1: T) => U): Parser<U>

	declare export function seqMap<T, U, V>(p1: Parser<T>, p2: Parser<U>, cb: (a1: T, a2: U) => V): Parser<V>

	declare export function seqMap<T, U, V, W>(
		p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, cb: (a1: T, a2: U, a3: V) => W
	): Parser<W>

	declare export function seqMap<T, U, V, W, X>(
		p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, cb: (a1: T, a2: U, a3: V, a4: W) => X
	): Parser<X>

	declare export function seqMap<T, U, V, W, X, Y>(
		p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, cb: (a1: T, a2: U, a3: V, a4: W, a5: X) => Y
	): Parser<Y>

	declare export function seqMap<T, U, V, W, X, Y, Z>(
		p1: Parser<T>, p2: Parser<U>, p3: Parser<V>, p4: Parser<W>, p5: Parser<X>, p6: Parser<Y>, cb: (a1: T, a2: U, a3: V, a4: W, a5: X, a6: Y) => Z
	): Parser<Z>

	declare export function custom<U>(
		parsingFunction: (
		success: SuccessFunctionType<U>, failure: FailureFunctionType<U>
	) => ParseFunctionType<U>
	): Parser<U>

	declare export function alt<U>(...parsers: Parser<U>[]): Parser<U>

	declare export function alt(...parsers: Parser<any>[]): Parser<any>

	declare export function sepBy<T>(content: Parser<T>, separator: Parser<T>): Parser<T>

	declare export function sepBy1<T>(content: Parser<T>, separator: Parser<T>): Parser<T>

	declare export function lazy<U>(f: () => Parser<U>): Parser<U>

	declare export function lazy<U>(description: string, f: () => Parser<U>): Parser<U>

	declare export function fail(message: string): Parser<void>

	declare export function fail<U>(message: string): Parser<U>

	declare export function test(predicate: (char: string) => boolean): Parser<string>

	declare export function takeWhile(predicate: (char: string) => boolean): Parser<string>

		
}