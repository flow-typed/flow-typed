

declare module 'transducers-js' {
		declare export interface IteratorResult<T> {
		done: boolean,
		value?: T
	}

	declare export interface Iterator<T> {
		next(value?: any): IteratorResult<T>,
		return(value?: any): IteratorResult<T>,
		throw(e?: any): IteratorResult<T>
	}

	declare export interface Reduced<TResult> {
		undefined: boolean,
		undefined: TResult
	}

	declare export interface Reducer<TResult, TInput> {
		(result: TResult, input: TInput): TResult
	}

	declare export interface Transducer<TResult, TInput, TOutput> {
		(xf: Transformer<TResult, TOutput>): Transformer<TResult, TInput>
	}

	declare export interface CompletingTransformer<TResult, TCompleteResult, TInput> {
		undefined(): TResult | void,
		undefined(result: TResult, input: TInput): TResult | Reduced<TResult>,
		undefined(result: TResult): TCompleteResult
	}

	declare export interface Transformer<TResult, TInput> {
		
	}

	declare export function reduced<TResult>(x: TResult): Reduced<TResult>

	declare export function isReduced(x: any): Boolean

	declare export function comp<T>(...args: T[]): T

	declare export function complement(f: Function): Function

	declare export function identity<T>(arg: T): T

	declare export function map<TResult, TInput, TOutput>(
		f: (x: TInput) => TOutput
	): Transducer<TResult, TInput, TOutput>

	declare export function filter<TResult, TInput>(
		pred: (x: TInput) => boolean
	): Transducer<TResult, TInput, TInput>

	declare export function remove<TResult, TInput>(
		pred: (x: TInput) => boolean
	): Transducer<TResult, TInput, TInput>

	declare export function keep<TResult, TInput>(f: (x: TInput) => any): Transducer<TResult, TInput, TInput>

	declare export function keepIndexed<TResult, TInput>(
		f: (i: number, x: TInput) => any
	): Transducer<TResult, TInput, TInput>

	declare export function take<TResult, TInput>(n: number): Transducer<TResult, TInput, TInput>

	declare export function takeWhile<TResult, TInput>(
		pred: (n: TInput) => boolean
	): Transducer<TResult, TInput, TInput>

	declare export function takeNth<TResult, TInput>(n: number): Transducer<TResult, TInput, TInput>

	declare export function drop<TResult, TInput>(n: number): Transducer<TResult, TInput, TInput>

	declare export function dropWhile<TResult, TInput>(
		pred: (input: TInput) => boolean
	): Transducer<TResult, TInput, TInput>

	declare export function partitionBy<TResult, TInput>(
		f: (input: TInput) => any
	): Transducer<TResult, TInput, TInput[]>

	declare export function partitionAll<TResult, TInput>(n: number): Transducer<TResult, TInput, TInput[]>

	declare export function completing<TResult, TCompleteResult, TInput>(
		cf: (result: TResult) => TCompleteResult
	): CompletingTransformer<TResult, TCompleteResult, TInput>

	declare export function wrap<TResult, TInput>(
		stepFn: Reducer<TResult, TInput>
	): Transducer<TResult, TInput, TInput>

	declare export function cat<TResult, TInput>(
		xf: Transformer<TResult, TInput>
	): Transformer<TResult, TInput>

	declare export function mapcat<TResult, TInput, TOutput>(
		f: (arr: TInput[]) => TOutput[]
	): Transducer<TResult, TInput[], TOutput>

	declare export function transduce<TResult, TInput, TOutput>(
		xf: Transducer<TResult, TInput, TOutput>, f: Transformer<TResult, TInput> | Reducer<TResult, TInput>, init: TResult, coll: TInput[] | Iterator<TInput> | string | Object
	): TResult

	declare export function reduce<TResult, TInput, TOutput>(
		xf: Transducer<TResult, TInput, TOutput>, init: TResult, coll: TInput[] | Iterator<TInput> | string | Object
	): TResult

	declare export function into<TResult, TInput, TOutput>(
		empty: TResult, xf: Transducer<TResult, TInput, TOutput>, coll: TInput[] | Iterator<TInput> | string | Object
	): TResult

	declare export function toFn<TResult, TInput, TOutput>(
		xf: Transducer<TResult, TInput, TOutput>, builder: Reducer<TResult, TInput> | Transformer<TResult, TInput>
	): Reducer<TResult, TInput>

	declare export function first<TResult, TInput>(): Wrap<TResult, TInput>

	declare export function ensureReduced<TResult>(x: TResult | Reduced<TResult>): Reduced<TResult>

	declare export function unreduced<TResult>(x: TResult | Reduced<TResult>): TResult

	declare export function deref<TResult>(x: Reduced<TResult>): TResult

	declare export class Map<TResult, TInput, TOutput> extends Transformer<TResult, TInput> {
		constructor(f: (x: TInput) => TOutput, xf: Transformer<TResult, TOutput>): this;
		undefined(): TResult;
		undefined(result: TResult, input: TInput): TResult;
		undefined(result: TResult): TResult
	}

	declare export class Filter<TResult, TInput> extends Transformer<TResult, TInput> {
		constructor(pred: (x: TInput) => boolean, xf: Transformer<TResult, TInput>): this;
		undefined(): TResult;
		undefined(result: TResult, input: TInput): TResult;
		undefined(result: TResult): TResult
	}

	declare export class Keep<TResult, TInput> extends Transformer<TResult, TInput> {
		constructor(f: (x: TInput) => any, xf: Transformer<TResult, TInput>): this;
		undefined(): TResult;
		undefined(result: TResult, input: TInput): TResult;
		undefined(result: TResult): TResult
	}

	declare export class KeepIndexed<TResult, TInput> extends Transformer<TResult, TInput> {
		constructor(f: (i: number, x: TInput) => any, xf: Transformer<TResult, TInput>): this;
		undefined(): TResult;
		undefined(result: TResult, input: TInput): TResult;
		undefined(result: TResult): TResult
	}

	declare export class Take<TResult, TInput> extends Transformer<TResult, TInput> {
		constructor(n: number, xf: Transformer<TResult, TInput>): this;
		undefined(): TResult;
		undefined(result: TResult, input: TInput): TResult | Reduced<TResult>;
		undefined(result: TResult): TResult
	}

	declare export class TakeWhile<TResult, TInput> extends Transformer<TResult, TInput> {
		constructor(pred: (n: TInput) => boolean, xf: Transformer<TResult, TInput>): this;
		undefined(): TResult;
		undefined(result: TResult, input: TInput): TResult | Reduced<TResult>;
		undefined(result: TResult): TResult
	}

	declare export class TakeNth<TResult, TInput> extends Transformer<TResult, TInput> {
		constructor(n: number, xf: Transformer<TResult, TInput>): this;
		undefined(): TResult;
		undefined(result: TResult, input: TInput): TResult;
		undefined(result: TResult): TResult
	}

	declare export class Drop<TResult, TInput> extends Transformer<TResult, TInput> {
		constructor(n: number, xf: Transformer<TResult, TInput>): this;
		undefined(): TResult;
		undefined(result: TResult, input: TInput): TResult;
		undefined(result: TResult): TResult
	}

	declare export class DropWhile<TResult, TInput> extends Transformer<TResult, TInput> {
		constructor(pred: (input: TInput) => boolean, xf: Transformer<TResult, TInput>): this;
		undefined(): TResult;
		undefined(result: TResult, input: TInput): TResult;
		undefined(result: TResult): TResult
	}

	declare export class PartitionBy<TResult, TInput> extends Transformer<TResult, TInput> {
		constructor(f: (input: TInput) => any, xf: Transformer<TResult, TInput[]>): this;
		undefined(): TResult;
		undefined(result: TResult, input: TInput): TResult;
		undefined(result: TResult): TResult
	}

	declare export class PartitionAll<TResult, TInput> extends Transformer<TResult, TInput> {
		constructor(n: number, xf: Transformer<TResult, TInput[]>): this;
		undefined(): TResult;
		undefined(result: TResult, input: TInput): TResult;
		undefined(result: TResult): TResult
	}

	declare export class Completing<TResult, TCompleteResult, TInput> extends CompletingTransformer<TResult, TCompleteResult, TInput> {
		constructor(cf: (result: TResult) => TCompleteResult, xf: Transformer<TResult, TInput>): this;
		undefined(): TResult;
		undefined(result: TResult, input: TInput): TResult;
		undefined(result: TResult): TCompleteResult
	}

	declare export class Wrap<TResult, TInput> extends Transformer<TResult, TInput> {
		constructor(stepFn: Reducer<TResult, TInput>, xf: Transformer<TResult, TInput>): this;
		undefined(): TResult;
		undefined(result: TResult, input: TInput): TResult;
		undefined(result: TResult): TResult
	}

	
}