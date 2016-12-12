

declare module 'lodash-3.10' {
					
}

declare module '_' {
	declare type PH = LoDashStatic;

	declare interface LoDashStatic {
		(value: number): LoDashImplicitWrapper<number>,
		(value: string): LoDashImplicitStringWrapper,
		(value: boolean): LoDashImplicitWrapper<boolean>,
		(value: Array<number>): LoDashImplicitNumberArrayWrapper,
		(value: Array<T>): LoDashImplicitArrayWrapper<T>,
		(value: T): LoDashImplicitObjectWrapper<T>,
		(value: any): LoDashImplicitWrapper<any>,
		VERSION: string,
		support: Support,
		templateSettings: TemplateSettings
	}

	declare interface TemplateSettings {
		escape?: RegExp,
		evaluate?: RegExp,
		imports?: Dictionary<any>,
		interpolate?: RegExp,
		variable?: string
	}

	declare interface MapCache {
		delete(key: string): boolean,
		get(key: string): any,
		has(key: string): boolean,
		set(key: string, value: any): _.Dictionary<any>
	}

	declare interface Support {
		argsClass: boolean,
		argsObject: boolean,
		enumErrorProps: boolean,
		enumPrototypes: boolean,
		fastBind: boolean,
		funcDecomp: boolean,
		funcNames: boolean,
		nonEnumArgs: boolean,
		nonEnumShadows: boolean,
		ownLast: boolean,
		spliceObjects: boolean,
		unindexedChars: boolean
	}

	declare interface LoDashWrapperBase<T, TWrapper> {
		
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		
	}

	declare interface LoDashImplicitWrapper<T> {
		
	}

	declare interface LoDashExplicitWrapper<T> {
		
	}

	declare interface LoDashImplicitStringWrapper {
		
	}

	declare interface LoDashExplicitStringWrapper {
		
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		pop(): T,
		push(...items: T[]): LoDashImplicitArrayWrapper<T>,
		shift(): T,
		sort(compareFn?: (a: T, b: T) => number): LoDashImplicitArrayWrapper<T>,
		splice(start: number): LoDashImplicitArrayWrapper<T>,
		splice(
		start: number, deleteCount: number, ...items: any[]
	): LoDashImplicitArrayWrapper<T>,
		unshift(...items: T[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		
	}

	declare interface LoDashImplicitNumberArrayWrapper {
		
	}

	declare interface LoDashExplicitNumberArrayWrapper {
		
	}

	declare interface LoDashImplicitWrapper<T> {
		join(separator?: string): string
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		join(separator?: string): string
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		join(separator?: string): string
	}

	declare interface LoDashExplicitWrapper<T> {
		join(separator?: string): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		join(separator?: string): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		join(separator?: string): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		chunk<T>(array: List<T>, size?: number): T[][]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		chunk(size?: number): LoDashImplicitArrayWrapper<T[]>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		chunk<TResult>(size?: number): LoDashImplicitArrayWrapper<TResult[]>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		chunk(size?: number): LoDashExplicitArrayWrapper<T[]>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		chunk<TResult>(size?: number): LoDashExplicitArrayWrapper<TResult[]>
	}

	declare interface LoDashStatic {
		compact<T>(array?: List<T>): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		compact(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		compact<TResult>(): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		compact(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		compact<TResult>(): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		difference<T>(array: T[] | List<T>, ...values: (T[] | List<T>)[]): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		difference(...values: (T[] | List<T>)[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		difference<TValue>(
		...values: (TValue[] | List<TValue>)[]
	): LoDashImplicitArrayWrapper<TValue>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		difference(...values: (T[] | List<T>)[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		difference<TValue>(
		...values: (TValue[] | List<TValue>)[]
	): LoDashExplicitArrayWrapper<TValue>
	}

	declare interface LoDashStatic {
		drop<T>(array: T[] | List<T>, n?: number): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		drop(n?: number): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		drop<T>(n?: number): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		drop(n?: number): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		drop<T>(n?: number): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		dropRight<T>(array: List<T>, n?: number): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		dropRight(n?: number): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		dropRight<TResult>(n?: number): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		dropRight(n?: number): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		dropRight<TResult>(n?: number): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		dropRightWhile<TValue>(
		array: List<TValue>, predicate?: ListIterator<TValue, boolean>, thisArg?: any
	): TValue[],
		dropRightWhile<TValue>(array: List<TValue>, predicate?: string, thisArg?: any): TValue[],
		dropRightWhile<TWhere, TValue>(array: List<TValue>, predicate?: TWhere): TValue[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		dropRightWhile(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		dropRightWhile(predicate?: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		dropRightWhile<TWhere>(predicate?: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		dropRightWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<TValue>,
		dropRightWhile<TValue>(predicate?: string, thisArg?: any): LoDashImplicitArrayWrapper<TValue>,
		dropRightWhile<TWhere, TValue>(predicate?: TWhere): LoDashImplicitArrayWrapper<TValue>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		dropRightWhile(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		dropRightWhile(predicate?: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		dropRightWhile<TWhere>(predicate?: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		dropRightWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<TValue>,
		dropRightWhile<TValue>(predicate?: string, thisArg?: any): LoDashExplicitArrayWrapper<TValue>,
		dropRightWhile<TWhere, TValue>(predicate?: TWhere): LoDashExplicitArrayWrapper<TValue>
	}

	declare interface LoDashStatic {
		dropWhile<TValue>(
		array: List<TValue>, predicate?: ListIterator<TValue, boolean>, thisArg?: any
	): TValue[],
		dropWhile<TValue>(array: List<TValue>, predicate?: string, thisArg?: any): TValue[],
		dropWhile<TWhere, TValue>(array: List<TValue>, predicate?: TWhere): TValue[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		dropWhile(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		dropWhile(predicate?: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		dropWhile<TWhere>(predicate?: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		dropWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<TValue>,
		dropWhile<TValue>(predicate?: string, thisArg?: any): LoDashImplicitArrayWrapper<TValue>,
		dropWhile<TWhere, TValue>(predicate?: TWhere): LoDashImplicitArrayWrapper<TValue>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		dropWhile(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		dropWhile(predicate?: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		dropWhile<TWhere>(predicate?: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		dropWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<TValue>,
		dropWhile<TValue>(predicate?: string, thisArg?: any): LoDashExplicitArrayWrapper<TValue>,
		dropWhile<TWhere, TValue>(predicate?: TWhere): LoDashExplicitArrayWrapper<TValue>
	}

	declare interface LoDashStatic {
		fill<T>(array: any[], value: T, start?: number, end?: number): T[],
		fill<T>(array: List<any>, value: T, start?: number, end?: number): List<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		fill<T>(value: T, start?: number, end?: number): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		fill<T>(
		value: T, start?: number, end?: number
	): LoDashImplicitObjectWrapper<List<T>>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		fill<T>(value: T, start?: number, end?: number): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		fill<T>(
		value: T, start?: number, end?: number
	): LoDashExplicitObjectWrapper<List<T>>
	}

	declare interface LoDashStatic {
		findIndex<T>(array: List<T>, predicate?: ListIterator<T, boolean>, thisArg?: any): number,
		findIndex<T>(array: List<T>, predicate?: string, thisArg?: any): number,
		findIndex<W, T>(array: List<T>, predicate?: W): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		findIndex(predicate?: ListIterator<T, boolean>, thisArg?: any): number,
		findIndex(predicate?: string, thisArg?: any): number,
		findIndex<W>(predicate?: W): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		findIndex<TResult>(predicate?: ListIterator<TResult, boolean>, thisArg?: any): number,
		findIndex(predicate?: string, thisArg?: any): number,
		findIndex<W>(predicate?: W): number
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		findIndex(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashExplicitWrapper<number>,
		findIndex(predicate?: string, thisArg?: any): LoDashExplicitWrapper<number>,
		findIndex<W>(predicate?: W): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		findIndex<TResult>(
		predicate?: ListIterator<TResult, boolean>, thisArg?: any
	): LoDashExplicitWrapper<number>,
		findIndex(predicate?: string, thisArg?: any): LoDashExplicitWrapper<number>,
		findIndex<W>(predicate?: W): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		findLastIndex<T>(array: List<T>, predicate?: ListIterator<T, boolean>, thisArg?: any): number,
		findLastIndex<T>(array: List<T>, predicate?: string, thisArg?: any): number,
		findLastIndex<W, T>(array: List<T>, predicate?: W): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		findLastIndex(predicate?: ListIterator<T, boolean>, thisArg?: any): number,
		findLastIndex(predicate?: string, thisArg?: any): number,
		findLastIndex<W>(predicate?: W): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		findLastIndex<TResult>(predicate?: ListIterator<TResult, boolean>, thisArg?: any): number,
		findLastIndex(predicate?: string, thisArg?: any): number,
		findLastIndex<W>(predicate?: W): number
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		findLastIndex(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashExplicitWrapper<number>,
		findLastIndex(predicate?: string, thisArg?: any): LoDashExplicitWrapper<number>,
		findLastIndex<W>(predicate?: W): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		findLastIndex<TResult>(
		predicate?: ListIterator<TResult, boolean>, thisArg?: any
	): LoDashExplicitWrapper<number>,
		findLastIndex(predicate?: string, thisArg?: any): LoDashExplicitWrapper<number>,
		findLastIndex<W>(predicate?: W): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		first<T>(array: List<T>): T
	}

	declare interface LoDashImplicitWrapper<T> {
		first(): string
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		first(): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		first<T>(): T
	}

	declare interface LoDashExplicitWrapper<T> {
		first(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		first<T>(): T
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		first<T>(): T
	}

	declare interface RecursiveArray<T> {
		
	}

	declare interface ListOfRecursiveArraysOrValues<T> {
		
	}

	declare interface LoDashStatic {
		flatten<T>(array: ListOfRecursiveArraysOrValues<T>, isDeep: boolean): T[],
		flatten<T>(array: List<T | T[]>): T[],
		flatten<T>(array: ListOfRecursiveArraysOrValues<T>): RecursiveArray<T>
	}

	declare interface LoDashImplicitWrapper<T> {
		flatten(): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		flatten<TResult>(isDeep?: boolean): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		flatten<TResult>(isDeep?: boolean): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitWrapper<T> {
		flatten(): LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		flatten<TResult>(isDeep?: boolean): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		flatten<TResult>(isDeep?: boolean): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		flattenDeep<T>(array: ListOfRecursiveArraysOrValues<T>): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		flattenDeep(): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		flattenDeep<T>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		flattenDeep<T>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		flattenDeep(): LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		flattenDeep<T>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		flattenDeep<T>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		head<T>(array: List<T>): T
	}

	declare interface LoDashImplicitWrapper<T> {
		head(): string
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		head(): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		head<T>(): T
	}

	declare interface LoDashExplicitWrapper<T> {
		head(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		head<T>(): T
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		head<T>(): T
	}

	declare interface LoDashStatic {
		indexOf<T>(array: List<T>, value: T, fromIndex?: boolean | number): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		indexOf(value: T, fromIndex?: boolean | number): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		indexOf<TValue>(value: TValue, fromIndex?: boolean | number): number
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		indexOf(value: T, fromIndex?: boolean | number): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		indexOf<TValue>(
		value: TValue, fromIndex?: boolean | number
	): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		initial<T>(array: List<T>): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		initial(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		initial<T>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		initial(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		initial<T>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		intersection<T>(...arrays: (T[] | List<T>)[]): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		intersection<TResult>(
		...arrays: (TResult[] | List<TResult>)[]
	): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		intersection<TResult>(
		...arrays: (TResult[] | List<TResult>)[]
	): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		intersection<TResult>(
		...arrays: (TResult[] | List<TResult>)[]
	): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		intersection<TResult>(
		...arrays: (TResult[] | List<TResult>)[]
	): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		last<T>(array: List<T>): T
	}

	declare interface LoDashImplicitWrapper<T> {
		last(): string
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		last(): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		last<T>(): T
	}

	declare interface LoDashExplicitWrapper<T> {
		last(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		last<T>(): T
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		last<T>(): T
	}

	declare interface LoDashStatic {
		lastIndexOf<T>(array: List<T>, value: T, fromIndex?: boolean | number): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		lastIndexOf(value: T, fromIndex?: boolean | number): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		lastIndexOf<TResult>(value: TResult, fromIndex?: boolean | number): number
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		lastIndexOf(value: T, fromIndex?: boolean | number): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		lastIndexOf<TResult>(
		value: TResult, fromIndex?: boolean | number
	): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		object<TValues, TResult>(
		props: List<StringRepresentable> | List<List<any>>, values?: List<TValues>
	): TResult,
		object<TResult>(
		props: List<StringRepresentable> | List<List<any>>, values?: List<any>
	): TResult,
		object(
		props: List<StringRepresentable> | List<List<any>>, values?: List<any>
	): _.Dictionary<any>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		object<TValues, TResult>(
		values?: List<TValues>
	): _.LoDashImplicitObjectWrapper<TResult>,
		object<TResult>(values?: List<any>): _.LoDashImplicitObjectWrapper<TResult>,
		object(values?: List<any>): _.LoDashImplicitObjectWrapper<_.Dictionary<any>>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		object<TValues, TResult>(
		values?: List<TValues>
	): _.LoDashImplicitObjectWrapper<TResult>,
		object<TResult>(values?: List<any>): _.LoDashImplicitObjectWrapper<TResult>,
		object(values?: List<any>): _.LoDashImplicitObjectWrapper<_.Dictionary<any>>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		object<TValues, TResult>(
		values?: List<TValues>
	): _.LoDashExplicitObjectWrapper<TResult>,
		object<TResult>(values?: List<any>): _.LoDashExplicitObjectWrapper<TResult>,
		object(values?: List<any>): _.LoDashExplicitObjectWrapper<_.Dictionary<any>>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		object<TValues, TResult>(
		values?: List<TValues>
	): _.LoDashExplicitObjectWrapper<TResult>,
		object<TResult>(values?: List<any>): _.LoDashExplicitObjectWrapper<TResult>,
		object(values?: List<any>): _.LoDashExplicitObjectWrapper<_.Dictionary<any>>
	}

	declare interface LoDashStatic {
		pull<T>(array: T[], ...values: T[]): T[],
		pull<T>(array: List<T>, ...values: T[]): List<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		pull(...values: T[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		pull<TValue>(...values: TValue[]): LoDashImplicitObjectWrapper<List<TValue>>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		pull(...values: T[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		pull<TValue>(...values: TValue[]): LoDashExplicitObjectWrapper<List<TValue>>
	}

	declare interface LoDashStatic {
		pullAt<T>(array: List<T>, ...indexes: (number | number[])[]): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		pullAt(...indexes: (number | number[])[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		pullAt<T>(...indexes: (number | number[])[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		pullAt(...indexes: (number | number[])[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		pullAt<T>(...indexes: (number | number[])[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		remove<T>(array: List<T>, predicate?: ListIterator<T, boolean>, thisArg?: any): T[],
		remove<T>(array: List<T>, predicate?: string, thisArg?: any): T[],
		remove<W, T>(array: List<T>, predicate?: W): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		remove(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		remove(predicate?: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		remove<W>(predicate?: W): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		remove<TResult>(
		predicate?: ListIterator<TResult, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<TResult>,
		remove<TResult>(
		predicate?: string, thisArg?: any
	): LoDashImplicitArrayWrapper<TResult>,
		remove<W, TResult>(predicate?: W): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		remove(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		remove(predicate?: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		remove<W>(predicate?: W): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		remove<TResult>(
		predicate?: ListIterator<TResult, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		remove<TResult>(
		predicate?: string, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		remove<W, TResult>(predicate?: W): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		rest<T>(array: List<T>): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		rest(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		rest<T>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		rest(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		rest<T>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		slice<T>(array: T[], start?: number, end?: number): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		slice(start?: number, end?: number): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		slice(start?: number, end?: number): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		sortedIndex<T, TSort>(
		array: List<T>, value: T, iteratee?: (x: T) => TSort, thisArg?: any
	): number,
		sortedIndex<T>(array: List<T>, value: T, iteratee?: (x: T) => any, thisArg?: any): number,
		sortedIndex<T>(array: List<T>, value: T, iteratee: string): number,
		sortedIndex<W, T>(array: List<T>, value: T, iteratee: W): number,
		sortedIndex<T>(array: List<T>, value: T, iteratee: Object): number
	}

	declare interface LoDashImplicitWrapper<T> {
		sortedIndex<TSort>(value: string, iteratee?: (x: string) => TSort, thisArg?: any): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sortedIndex<TSort>(value: T, iteratee?: (x: T) => TSort, thisArg?: any): number,
		sortedIndex(value: T, iteratee: string): number,
		sortedIndex<W>(value: T, iteratee: W): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sortedIndex<T, TSort>(value: T, iteratee?: (x: T) => TSort, thisArg?: any): number,
		sortedIndex<T>(value: T, iteratee?: (x: T) => any, thisArg?: any): number,
		sortedIndex<T>(value: T, iteratee: string): number,
		sortedIndex<W, T>(value: T, iteratee: W): number,
		sortedIndex<T>(value: T, iteratee: Object): number
	}

	declare interface LoDashExplicitWrapper<T> {
		sortedIndex<TSort>(
		value: string, iteratee?: (x: string) => TSort, thisArg?: any
	): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sortedIndex<TSort>(
		value: T, iteratee?: (x: T) => TSort, thisArg?: any
	): LoDashExplicitWrapper<number>,
		sortedIndex(value: T, iteratee: string): LoDashExplicitWrapper<number>,
		sortedIndex<W>(value: T, iteratee: W): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sortedIndex<T, TSort>(
		value: T, iteratee?: (x: T) => TSort, thisArg?: any
	): LoDashExplicitWrapper<number>,
		sortedIndex<T>(
		value: T, iteratee?: (x: T) => any, thisArg?: any
	): LoDashExplicitWrapper<number>,
		sortedIndex<T>(value: T, iteratee: string): LoDashExplicitWrapper<number>,
		sortedIndex<W, T>(value: T, iteratee: W): LoDashExplicitWrapper<number>,
		sortedIndex<T>(value: T, iteratee: Object): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		sortedLastIndex<T, TSort>(
		array: List<T>, value: T, iteratee?: (x: T) => TSort, thisArg?: any
	): number,
		sortedLastIndex<T>(array: List<T>, value: T, iteratee?: (x: T) => any, thisArg?: any): number,
		sortedLastIndex<T>(array: List<T>, value: T, iteratee: string): number,
		sortedLastIndex<W, T>(array: List<T>, value: T, iteratee: W): number,
		sortedLastIndex<T>(array: List<T>, value: T, iteratee: Object): number
	}

	declare interface LoDashImplicitWrapper<T> {
		sortedLastIndex<TSort>(value: string, iteratee?: (x: string) => TSort, thisArg?: any): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sortedLastIndex<TSort>(value: T, iteratee?: (x: T) => TSort, thisArg?: any): number,
		sortedLastIndex(value: T, iteratee: string): number,
		sortedLastIndex<W>(value: T, iteratee: W): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sortedLastIndex<T, TSort>(value: T, iteratee?: (x: T) => TSort, thisArg?: any): number,
		sortedLastIndex<T>(value: T, iteratee?: (x: T) => any, thisArg?: any): number,
		sortedLastIndex<T>(value: T, iteratee: string): number,
		sortedLastIndex<W, T>(value: T, iteratee: W): number,
		sortedLastIndex<T>(value: T, iteratee: Object): number
	}

	declare interface LoDashExplicitWrapper<T> {
		sortedLastIndex<TSort>(
		value: string, iteratee?: (x: string) => TSort, thisArg?: any
	): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sortedLastIndex<TSort>(
		value: T, iteratee?: (x: T) => TSort, thisArg?: any
	): LoDashExplicitWrapper<number>,
		sortedLastIndex(value: T, iteratee: string): LoDashExplicitWrapper<number>,
		sortedLastIndex<W>(value: T, iteratee: W): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sortedLastIndex<T, TSort>(
		value: T, iteratee?: (x: T) => TSort, thisArg?: any
	): LoDashExplicitWrapper<number>,
		sortedLastIndex<T>(
		value: T, iteratee?: (x: T) => any, thisArg?: any
	): LoDashExplicitWrapper<number>,
		sortedLastIndex<T>(value: T, iteratee: string): LoDashExplicitWrapper<number>,
		sortedLastIndex<W, T>(value: T, iteratee: W): LoDashExplicitWrapper<number>,
		sortedLastIndex<T>(value: T, iteratee: Object): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		tail<T>(array: List<T>): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		tail(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		tail<T>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		tail(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		tail<T>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		take<T>(array: List<T>, n?: number): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		take(n?: number): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		take<TResult>(n?: number): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		take(n?: number): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		take<TResult>(n?: number): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		takeRight<T>(array: List<T>, n?: number): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		takeRight(n?: number): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		takeRight<TResult>(n?: number): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		takeRight(n?: number): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		takeRight<TResult>(n?: number): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		takeRightWhile<TValue>(
		array: List<TValue>, predicate?: ListIterator<TValue, boolean>, thisArg?: any
	): TValue[],
		takeRightWhile<TValue>(array: List<TValue>, predicate?: string, thisArg?: any): TValue[],
		takeRightWhile<TWhere, TValue>(array: List<TValue>, predicate?: TWhere): TValue[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		takeRightWhile(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		takeRightWhile(predicate?: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		takeRightWhile<TWhere>(predicate?: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		takeRightWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<TValue>,
		takeRightWhile<TValue>(predicate?: string, thisArg?: any): LoDashImplicitArrayWrapper<TValue>,
		takeRightWhile<TWhere, TValue>(predicate?: TWhere): LoDashImplicitArrayWrapper<TValue>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		takeRightWhile(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		takeRightWhile(predicate?: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		takeRightWhile<TWhere>(predicate?: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		takeRightWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<TValue>,
		takeRightWhile<TValue>(predicate?: string, thisArg?: any): LoDashExplicitArrayWrapper<TValue>,
		takeRightWhile<TWhere, TValue>(predicate?: TWhere): LoDashExplicitArrayWrapper<TValue>
	}

	declare interface LoDashStatic {
		takeWhile<TValue>(
		array: List<TValue>, predicate?: ListIterator<TValue, boolean>, thisArg?: any
	): TValue[],
		takeWhile<TValue>(array: List<TValue>, predicate?: string, thisArg?: any): TValue[],
		takeWhile<TWhere, TValue>(array: List<TValue>, predicate?: TWhere): TValue[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		takeWhile(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		takeWhile(predicate?: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		takeWhile<TWhere>(predicate?: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		takeWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<TValue>,
		takeWhile<TValue>(predicate?: string, thisArg?: any): LoDashImplicitArrayWrapper<TValue>,
		takeWhile<TWhere, TValue>(predicate?: TWhere): LoDashImplicitArrayWrapper<TValue>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		takeWhile(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		takeWhile(predicate?: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		takeWhile<TWhere>(predicate?: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		takeWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<TValue>,
		takeWhile<TValue>(predicate?: string, thisArg?: any): LoDashExplicitArrayWrapper<TValue>,
		takeWhile<TWhere, TValue>(predicate?: TWhere): LoDashExplicitArrayWrapper<TValue>
	}

	declare interface LoDashStatic {
		union<T>(...arrays: List<T>[]): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		union(...arrays: List<T>[]): LoDashImplicitArrayWrapper<T>,
		union<T>(...arrays: List<T>[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		union<T>(...arrays: List<T>[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		union(...arrays: List<T>[]): LoDashExplicitArrayWrapper<T>,
		union<T>(...arrays: List<T>[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		union<T>(...arrays: List<T>[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		uniq<T>(
		array: List<T>, isSorted?: boolean, iteratee?: ListIterator<T, any>, thisArg?: any
	): T[],
		uniq<T, TSort>(
		array: List<T>, isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): T[],
		uniq<T>(array: List<T>, iteratee?: ListIterator<T, any>, thisArg?: any): T[],
		uniq<T, TSort>(
		array: List<T>, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): T[],
		uniq<T>(array: List<T>, isSorted?: boolean, iteratee?: string, thisArg?: any): T[],
		uniq<T>(array: List<T>, iteratee?: string, thisArg?: any): T[],
		uniq<T>(array: List<T>, isSorted?: boolean, iteratee?: Object): T[],
		uniq<TWhere, T>(array: List<T>, isSorted?: boolean, iteratee?: TWhere): T[],
		uniq<T>(array: List<T>, iteratee?: Object): T[],
		uniq<TWhere, T>(array: List<T>, iteratee?: TWhere): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		uniq<TSort>(
		isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		uniq<TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		uniq<TSort>(
		isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		uniq<TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		uniq(
		isSorted?: boolean, iteratee?: string, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		uniq(iteratee?: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		uniq<TWhere>(isSorted?: boolean, iteratee?: TWhere): LoDashImplicitArrayWrapper<T>,
		uniq<TWhere>(iteratee?: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		uniq<T>(
		isSorted?: boolean, iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		uniq<T, TSort>(
		isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		uniq<T>(
		iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		uniq<T, TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		uniq<T>(
		isSorted?: boolean, iteratee?: string, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		uniq<T>(iteratee?: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		uniq<T>(isSorted?: boolean, iteratee?: Object): LoDashImplicitArrayWrapper<T>,
		uniq<TWhere, T>(
		isSorted?: boolean, iteratee?: TWhere
	): LoDashImplicitArrayWrapper<T>,
		uniq<T>(iteratee?: Object): LoDashImplicitArrayWrapper<T>,
		uniq<TWhere, T>(iteratee?: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		uniq<TSort>(
		isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		uniq<TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		uniq<TSort>(
		isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		uniq<TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		uniq(
		isSorted?: boolean, iteratee?: string, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		uniq(iteratee?: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		uniq<TWhere>(isSorted?: boolean, iteratee?: TWhere): LoDashExplicitArrayWrapper<T>,
		uniq<TWhere>(iteratee?: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		uniq<T>(
		isSorted?: boolean, iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		uniq<T, TSort>(
		isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		uniq<T>(
		iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		uniq<T, TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		uniq<T>(
		isSorted?: boolean, iteratee?: string, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		uniq<T>(iteratee?: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		uniq<T>(isSorted?: boolean, iteratee?: Object): LoDashExplicitArrayWrapper<T>,
		uniq<TWhere, T>(
		isSorted?: boolean, iteratee?: TWhere
	): LoDashExplicitArrayWrapper<T>,
		uniq<T>(iteratee?: Object): LoDashExplicitArrayWrapper<T>,
		uniq<TWhere, T>(iteratee?: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		unique<T>(
		array: List<T>, isSorted?: boolean, iteratee?: ListIterator<T, any>, thisArg?: any
	): T[],
		unique<T, TSort>(
		array: List<T>, isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): T[],
		unique<T>(array: List<T>, iteratee?: ListIterator<T, any>, thisArg?: any): T[],
		unique<T, TSort>(
		array: List<T>, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): T[],
		unique<T>(array: List<T>, isSorted?: boolean, iteratee?: string, thisArg?: any): T[],
		unique<T>(array: List<T>, iteratee?: string, thisArg?: any): T[],
		unique<T>(array: List<T>, isSorted?: boolean, iteratee?: Object): T[],
		unique<TWhere, T>(array: List<T>, isSorted?: boolean, iteratee?: TWhere): T[],
		unique<T>(array: List<T>, iteratee?: Object): T[],
		unique<TWhere, T>(array: List<T>, iteratee?: TWhere): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		unique<TSort>(
		isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		unique<TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		unique<TSort>(
		isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		unique<TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		unique(
		isSorted?: boolean, iteratee?: string, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		unique(iteratee?: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		unique<TWhere>(isSorted?: boolean, iteratee?: TWhere): LoDashImplicitArrayWrapper<T>,
		unique<TWhere>(iteratee?: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		unique<T>(
		isSorted?: boolean, iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		unique<T, TSort>(
		isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		unique<T>(
		iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		unique<T, TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		unique<T>(
		isSorted?: boolean, iteratee?: string, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		unique<T>(iteratee?: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		unique<T>(isSorted?: boolean, iteratee?: Object): LoDashImplicitArrayWrapper<T>,
		unique<TWhere, T>(
		isSorted?: boolean, iteratee?: TWhere
	): LoDashImplicitArrayWrapper<T>,
		unique<T>(iteratee?: Object): LoDashImplicitArrayWrapper<T>,
		unique<TWhere, T>(iteratee?: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		unique<TSort>(
		isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		unique<TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		unique<TSort>(
		isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		unique<TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		unique(
		isSorted?: boolean, iteratee?: string, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		unique(iteratee?: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		unique<TWhere>(isSorted?: boolean, iteratee?: TWhere): LoDashExplicitArrayWrapper<T>,
		unique<TWhere>(iteratee?: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		unique<T>(
		isSorted?: boolean, iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		unique<T, TSort>(
		isSorted?: boolean, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		unique<T>(
		iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		unique<T, TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		unique<T>(
		isSorted?: boolean, iteratee?: string, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		unique<T>(iteratee?: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		unique<T>(isSorted?: boolean, iteratee?: Object): LoDashExplicitArrayWrapper<T>,
		unique<TWhere, T>(
		isSorted?: boolean, iteratee?: TWhere
	): LoDashExplicitArrayWrapper<T>,
		unique<T>(iteratee?: Object): LoDashExplicitArrayWrapper<T>,
		unique<TWhere, T>(iteratee?: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		unzip<T>(array: List<List<T>>): T[][]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		unzip<T>(): LoDashImplicitArrayWrapper<T[]>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		unzip<T>(): LoDashImplicitArrayWrapper<T[]>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		unzip<T>(): LoDashExplicitArrayWrapper<T[]>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		unzip<T>(): LoDashExplicitArrayWrapper<T[]>
	}

	declare interface LoDashStatic {
		unzipWith<TArray, TResult>(
		array: List<List<TArray>>, iteratee?: MemoIterator<TArray, TResult>, thisArg?: any
	): TResult[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		unzipWith<TArr, TResult>(
		iteratee?: MemoIterator<TArr, TResult>, thisArg?: any
	): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		unzipWith<TArr, TResult>(
		iteratee?: MemoIterator<TArr, TResult>, thisArg?: any
	): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		without<T>(array: List<T>, ...values: T[]): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		without(...values: T[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		without<T>(...values: T[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		without(...values: T[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		without<T>(...values: T[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		xor<T>(...arrays: List<T>[]): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		xor(...arrays: List<T>[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		xor<T>(...arrays: List<T>[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		xor(...arrays: List<T>[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		xor<T>(...arrays: List<T>[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		zip<T>(...arrays: List<T>[]): T[][]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		zip<T>(...arrays: List<T>[]): _.LoDashImplicitArrayWrapper<T[]>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		zip<T>(...arrays: List<T>[]): _.LoDashImplicitArrayWrapper<T[]>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		zip<T>(...arrays: List<T>[]): _.LoDashExplicitArrayWrapper<T[]>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		zip<T>(...arrays: List<T>[]): _.LoDashExplicitArrayWrapper<T[]>
	}

	declare interface LoDashStatic {
		zipObject<TValues, TResult>(
		props: List<StringRepresentable> | List<List<any>>, values?: List<TValues>
	): TResult,
		zipObject<TResult>(
		props: List<StringRepresentable> | List<List<any>>, values?: List<any>
	): TResult,
		zipObject(
		props: List<StringRepresentable> | List<List<any>>, values?: List<any>
	): _.Dictionary<any>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		zipObject<TValues, TResult>(
		values?: List<TValues>
	): _.LoDashImplicitObjectWrapper<TResult>,
		zipObject<TResult>(values?: List<any>): _.LoDashImplicitObjectWrapper<TResult>,
		zipObject(values?: List<any>): _.LoDashImplicitObjectWrapper<_.Dictionary<any>>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		zipObject<TValues, TResult>(
		values?: List<TValues>
	): _.LoDashImplicitObjectWrapper<TResult>,
		zipObject<TResult>(values?: List<any>): _.LoDashImplicitObjectWrapper<TResult>,
		zipObject(values?: List<any>): _.LoDashImplicitObjectWrapper<_.Dictionary<any>>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		zipObject<TValues, TResult>(
		values?: List<TValues>
	): _.LoDashExplicitObjectWrapper<TResult>,
		zipObject<TResult>(values?: List<any>): _.LoDashExplicitObjectWrapper<TResult>,
		zipObject(values?: List<any>): _.LoDashExplicitObjectWrapper<_.Dictionary<any>>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		zipObject<TValues, TResult>(
		values?: List<TValues>
	): _.LoDashExplicitObjectWrapper<TResult>,
		zipObject<TResult>(values?: List<any>): _.LoDashExplicitObjectWrapper<TResult>,
		zipObject(values?: List<any>): _.LoDashExplicitObjectWrapper<_.Dictionary<any>>
	}

	declare interface LoDashStatic {
		zipWith<TResult>(...args: any[]): TResult[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		zipWith<TResult>(...args: any[]): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		chain(value: number): LoDashExplicitWrapper<number>,
		chain(value: string): LoDashExplicitWrapper<string>,
		chain(value: boolean): LoDashExplicitWrapper<boolean>,
		chain<T>(value: T[]): LoDashExplicitArrayWrapper<T>,
		chain<T>(value: T): LoDashExplicitObjectWrapper<T>,
		chain(value: any): LoDashExplicitWrapper<any>
	}

	declare interface LoDashImplicitWrapper<T> {
		chain(): LoDashExplicitWrapper<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		chain(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		chain(): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		chain(): TWrapper
	}

	declare interface LoDashStatic {
		tap<T>(value: T, interceptor: (value: T) => void, thisArg?: any): T
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		tap(interceptor: (value: T) => void, thisArg?: any): TWrapper
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		tap(interceptor: (value: T) => void, thisArg?: any): TWrapper
	}

	declare interface LoDashStatic {
		thru<T, TResult>(
		value: T, interceptor: (value: T) => TResult, thisArg?: any
	): TResult
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		thru<TResult>(
		interceptor: (value: T) => TResult, thisArg?: any
	): LoDashImplicitWrapper<TResult>,
		thru<TResult>(
		interceptor: (value: T) => TResult, thisArg?: any
	): LoDashImplicitWrapper<TResult>,
		thru<TResult>(
		interceptor: (value: T) => TResult, thisArg?: any
	): LoDashImplicitWrapper<TResult>,
		thru<TResult>(
		interceptor: (value: T) => TResult, thisArg?: any
	): LoDashImplicitObjectWrapper<TResult>,
		thru<TResult>(
		interceptor: (value: T) => TResult[], thisArg?: any
	): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		thru<TResult>(
		interceptor: (value: T) => TResult, thisArg?: any
	): LoDashExplicitWrapper<TResult>,
		thru<TResult>(
		interceptor: (value: T) => TResult, thisArg?: any
	): LoDashExplicitWrapper<TResult>,
		thru<TResult>(
		interceptor: (value: T) => TResult, thisArg?: any
	): LoDashExplicitWrapper<TResult>,
		thru<TResult>(
		interceptor: (value: T) => TResult, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		thru<TResult>(
		interceptor: (value: T) => TResult[], thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		commit(): TWrapper
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		commit(): TWrapper
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		concat<TItem>(
		...items: Array<TItem | Array<TItem>>
	): LoDashImplicitArrayWrapper<TItem>,
		concat(...items: Array<T | Array<T>>): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		concat<TItem>(
		...items: Array<TItem | Array<TItem>>
	): LoDashExplicitArrayWrapper<TItem>,
		concat(...items: Array<T | Array<T>>): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		plant(value: number): LoDashImplicitWrapper<number>,
		plant(value: string): LoDashImplicitStringWrapper,
		plant(value: boolean): LoDashImplicitWrapper<boolean>,
		plant(value: number[]): LoDashImplicitNumberArrayWrapper,
		plant<T>(value: T[]): LoDashImplicitArrayWrapper<T>,
		plant<T>(value: T): LoDashImplicitObjectWrapper<T>,
		plant(value: any): LoDashImplicitWrapper<any>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		plant(value: number): LoDashExplicitWrapper<number>,
		plant(value: string): LoDashExplicitStringWrapper,
		plant(value: boolean): LoDashExplicitWrapper<boolean>,
		plant(value: number[]): LoDashExplicitNumberArrayWrapper,
		plant<T>(value: T[]): LoDashExplicitArrayWrapper<T>,
		plant<T>(value: T): LoDashExplicitObjectWrapper<T>,
		plant(value: any): LoDashExplicitWrapper<any>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		reverse(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		reverse(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashWrapperBase<T, TWrapper> {
		run(): T
	}

	declare interface LoDashWrapperBase<T, TWrapper> {
		toJSON(): T
	}

	declare interface LoDashWrapperBase<T, TWrapper> {
		toString(): string
	}

	declare interface LoDashWrapperBase<T, TWrapper> {
		value(): T
	}

	declare interface LoDashWrapperBase<T, TWrapper> {
		valueOf(): T
	}

	declare interface LoDashStatic {
		all<T>(
		collection: List<T>, predicate?: ListIterator<T, boolean>, thisArg?: any
	): boolean,
		all<T>(
		collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>, thisArg?: any
	): boolean,
		all<T>(
		collection: List<T> | Dictionary<T>, predicate?: string, thisArg?: any
	): boolean,
		all<TObject, T>(collection: List<T> | Dictionary<T>, predicate?: TObject): boolean
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		all(predicate?: ListIterator<T, boolean>, thisArg?: any): boolean,
		all(predicate?: string, thisArg?: any): boolean,
		all<TObject>(predicate?: TObject): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		all<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean>, thisArg?: any
	): boolean,
		all(predicate?: string, thisArg?: any): boolean,
		all<TObject>(predicate?: TObject): boolean
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		all(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashExplicitWrapper<boolean>,
		all(predicate?: string, thisArg?: any): LoDashExplicitWrapper<boolean>,
		all<TObject>(predicate?: TObject): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		all<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean>, thisArg?: any
	): LoDashExplicitWrapper<boolean>,
		all(predicate?: string, thisArg?: any): LoDashExplicitWrapper<boolean>,
		all<TObject>(predicate?: TObject): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		any<T>(
		collection: List<T>, predicate?: ListIterator<T, boolean>, thisArg?: any
	): boolean,
		any<T>(
		collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>, thisArg?: any
	): boolean,
		any<T>(
		collection: NumericDictionary<T>, predicate?: NumericDictionaryIterator<T, boolean>, thisArg?: any
	): boolean,
		any<T>(
		collection: Object, predicate?: ObjectIterator<any, boolean>, thisArg?: any
	): boolean,
		any<T>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, predicate?: string, thisArg?: any
	): boolean,
		any(collection: Object, predicate?: string, thisArg?: any): boolean,
		any<TObject, T>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, predicate?: TObject
	): boolean,
		any<T>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, predicate?: Object
	): boolean,
		any<TObject>(collection: Object, predicate?: TObject): boolean
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		any(
		predicate?: ListIterator<T, boolean> | NumericDictionaryIterator<T, boolean>, thisArg?: any
	): boolean,
		any(predicate?: string, thisArg?: any): boolean,
		any<TObject>(predicate?: TObject): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		any<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean> | NumericDictionaryIterator<T, boolean> | ObjectIterator<any, boolean>, thisArg?: any
	): boolean,
		any(predicate?: string, thisArg?: any): boolean,
		any<TObject>(predicate?: TObject): boolean
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		any(
		predicate?: ListIterator<T, boolean> | NumericDictionaryIterator<T, boolean>, thisArg?: any
	): LoDashExplicitWrapper<boolean>,
		any(predicate?: string, thisArg?: any): LoDashExplicitWrapper<boolean>,
		any<TObject>(predicate?: TObject): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		any<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean> | NumericDictionaryIterator<T, boolean> | ObjectIterator<any, boolean>, thisArg?: any
	): LoDashExplicitWrapper<boolean>,
		any(predicate?: string, thisArg?: any): LoDashExplicitWrapper<boolean>,
		any<TObject>(predicate?: TObject): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		at<T>(
		collection: List<T> | Dictionary<T>, ...props: (number | string | (number | string)[])[]
	): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		at(
		...props: (number | string | (number | string)[])[]
	): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		at<T>(
		...props: (number | string | (number | string)[])[]
	): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		at(
		...props: (number | string | (number | string)[])[]
	): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		at<T>(
		...props: (number | string | (number | string)[])[]
	): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		collect<T, TResult>(
		collection: List<T>, iteratee?: ListIterator<T, TResult>, thisArg?: any
	): TResult[],
		collect<T, TResult>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, TResult>, thisArg?: any
	): TResult[],
		collect<T, TResult>(collection: List<T> | Dictionary<T>, iteratee?: string): TResult[],
		collect<T, TObject>(collection: List<T> | Dictionary<T>, iteratee?: TObject): boolean[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		collect<TResult>(
		iteratee?: ListIterator<T, TResult>, thisArg?: any
	): LoDashImplicitArrayWrapper<TResult>,
		collect<TResult>(iteratee?: string): LoDashImplicitArrayWrapper<TResult>,
		collect<TObject>(iteratee?: TObject): LoDashImplicitArrayWrapper<boolean>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		collect<TValue, TResult>(
		iteratee?: ListIterator<TValue, TResult> | DictionaryIterator<TValue, TResult>, thisArg?: any
	): LoDashImplicitArrayWrapper<TResult>,
		collect<TValue, TResult>(iteratee?: string): LoDashImplicitArrayWrapper<TResult>,
		collect<TObject>(iteratee?: TObject): LoDashImplicitArrayWrapper<boolean>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		collect<TResult>(
		iteratee?: ListIterator<T, TResult>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		collect<TResult>(iteratee?: string): LoDashExplicitArrayWrapper<TResult>,
		collect<TObject>(iteratee?: TObject): LoDashExplicitArrayWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		collect<TValue, TResult>(
		iteratee?: ListIterator<TValue, TResult> | DictionaryIterator<TValue, TResult>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		collect<TValue, TResult>(iteratee?: string): LoDashExplicitArrayWrapper<TResult>,
		collect<TObject>(iteratee?: TObject): LoDashExplicitArrayWrapper<boolean>
	}

	declare interface LoDashStatic {
		contains<T>(collection: List<T> | Dictionary<T>, target: T, fromIndex?: number): boolean,
		contains(collection: string, target: string, fromIndex?: number): boolean
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		contains(target: T, fromIndex?: number): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		contains<TValue>(target: TValue, fromIndex?: number): boolean
	}

	declare interface LoDashImplicitWrapper<T> {
		contains(target: string, fromIndex?: number): boolean
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		contains(target: T, fromIndex?: number): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		contains<TValue>(target: TValue, fromIndex?: number): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashExplicitWrapper<T> {
		contains(target: string, fromIndex?: number): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		countBy<T>(
		collection: List<T>, iteratee?: ListIterator<T, any>, thisArg?: any
	): Dictionary<number>,
		countBy<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, thisArg?: any
	): Dictionary<number>,
		countBy<T>(
		collection: NumericDictionary<T>, iteratee?: NumericDictionaryIterator<T, any>, thisArg?: any
	): Dictionary<number>,
		countBy<T>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, iteratee?: string, thisArg?: any
	): Dictionary<number>,
		countBy<W, T>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, iteratee?: W
	): Dictionary<number>,
		countBy<T>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, iteratee?: Object
	): Dictionary<number>
	}

	declare interface LoDashImplicitWrapper<T> {
		countBy(
		iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<number>>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		countBy(
		iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<number>>,
		countBy(
		iteratee?: string, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<number>>,
		countBy<W>(iteratee?: W): LoDashImplicitObjectWrapper<Dictionary<number>>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		countBy<T>(
		iteratee?: ListIterator<T, any> | DictionaryIterator<T, any> | NumericDictionaryIterator<T, any>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<number>>,
		countBy(
		iteratee?: string, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<number>>,
		countBy<W>(iteratee?: W): LoDashImplicitObjectWrapper<Dictionary<number>>
	}

	declare interface LoDashExplicitWrapper<T> {
		countBy(
		iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<number>>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		countBy(
		iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<number>>,
		countBy(
		iteratee?: string, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<number>>,
		countBy<W>(iteratee?: W): LoDashExplicitObjectWrapper<Dictionary<number>>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		countBy<T>(
		iteratee?: ListIterator<T, any> | DictionaryIterator<T, any> | NumericDictionaryIterator<T, any>, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<number>>,
		countBy(
		iteratee?: string, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<number>>,
		countBy<W>(iteratee?: W): LoDashExplicitObjectWrapper<Dictionary<number>>
	}

	declare interface LoDashStatic {
		detect<T>(collection: List<T>, predicate?: ListIterator<T, boolean>, thisArg?: any): T,
		detect<T>(
		collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>, thisArg?: any
	): T,
		detect<T>(collection: List<T> | Dictionary<T>, predicate?: string, thisArg?: any): T,
		detect<TObject, T>(collection: List<T> | Dictionary<T>, predicate?: TObject): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		detect(predicate?: ListIterator<T, boolean>, thisArg?: any): T,
		detect(predicate?: string, thisArg?: any): T,
		detect<TObject>(predicate?: TObject): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		detect<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean>, thisArg?: any
	): TResult,
		detect<TResult>(predicate?: string, thisArg?: any): TResult,
		detect<TObject, TResult>(predicate?: TObject): TResult
	}

	declare interface LoDashStatic {
		each<T>(collection: T[], iteratee?: ListIterator<T, any>, thisArg?: any): T[],
		each<T>(
		collection: List<T>, iteratee?: ListIterator<T, any>, thisArg?: any
	): List<T>,
		each<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, thisArg?: any
	): Dictionary<T>,
		each<T>(collection: T, iteratee?: ObjectIterator<any, any>, thisArgs?: any): T,
		each<T, TValue>(
		collection: T, iteratee?: ObjectIterator<TValue, any>, thisArgs?: any
	): T
	}

	declare interface LoDashImplicitWrapper<T> {
		each(
		iteratee: ListIterator<string, any>, thisArg?: any
	): LoDashImplicitWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		each(iteratee: ListIterator<T, any>, thisArg?: any): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		each<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>, thisArg?: any
	): LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		each(
		iteratee: ListIterator<string, any>, thisArg?: any
	): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		each(iteratee: ListIterator<T, any>, thisArg?: any): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		each<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>, thisArg?: any
	): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		eachRight<T>(collection: T[], iteratee?: ListIterator<T, any>, thisArg?: any): T[],
		eachRight<T>(
		collection: List<T>, iteratee?: ListIterator<T, any>, thisArg?: any
	): List<T>,
		eachRight<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, thisArg?: any
	): Dictionary<T>,
		eachRight<T>(collection: T, iteratee?: ObjectIterator<any, any>, thisArgs?: any): T,
		eachRight<T, TValue>(
		collection: T, iteratee?: ObjectIterator<TValue, any>, thisArgs?: any
	): T
	}

	declare interface LoDashImplicitWrapper<T> {
		eachRight(
		iteratee: ListIterator<string, any>, thisArg?: any
	): LoDashImplicitWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		eachRight(iteratee: ListIterator<T, any>, thisArg?: any): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		eachRight<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>, thisArg?: any
	): LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		eachRight(
		iteratee: ListIterator<string, any>, thisArg?: any
	): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		eachRight(iteratee: ListIterator<T, any>, thisArg?: any): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		eachRight<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>, thisArg?: any
	): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		every<T>(
		collection: List<T>, predicate?: ListIterator<T, boolean>, thisArg?: any
	): boolean,
		every<T>(
		collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>, thisArg?: any
	): boolean,
		every<T>(
		collection: List<T> | Dictionary<T>, predicate?: string, thisArg?: any
	): boolean,
		every<TObject, T>(collection: List<T> | Dictionary<T>, predicate?: TObject): boolean
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		every(predicate?: ListIterator<T, boolean>, thisArg?: any): boolean,
		every(predicate?: string, thisArg?: any): boolean,
		every<TObject>(predicate?: TObject): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		every<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean>, thisArg?: any
	): boolean,
		every(predicate?: string, thisArg?: any): boolean,
		every<TObject>(predicate?: TObject): boolean
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		every(
		predicate?: ListIterator<T, boolean>, thisArg?: any
	): LoDashExplicitWrapper<boolean>,
		every(predicate?: string, thisArg?: any): LoDashExplicitWrapper<boolean>,
		every<TObject>(predicate?: TObject): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		every<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean>, thisArg?: any
	): LoDashExplicitWrapper<boolean>,
		every(predicate?: string, thisArg?: any): LoDashExplicitWrapper<boolean>,
		every<TObject>(predicate?: TObject): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		filter<T>(
		collection: List<T>, predicate?: ListIterator<T, boolean>, thisArg?: any
	): T[],
		filter<T>(
		collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>, thisArg?: any
	): T[],
		filter(
		collection: string, predicate?: StringIterator<boolean>, thisArg?: any
	): string[],
		filter<T>(collection: List<T> | Dictionary<T>, predicate: string, thisArg?: any): T[],
		filter<W, T>(collection: List<T> | Dictionary<T>, predicate: W): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		filter(
		predicate?: StringIterator<boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		filter(
		predicate: ListIterator<T, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		filter(predicate: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		filter<W>(predicate: W): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		filter<T>(
		predicate: ListIterator<T, boolean> | DictionaryIterator<T, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		filter<T>(predicate: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		filter<W, T>(predicate: W): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		filter(
		predicate?: StringIterator<boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		filter(
		predicate: ListIterator<T, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		filter(predicate: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		filter<W>(predicate: W): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		filter<T>(
		predicate: ListIterator<T, boolean> | DictionaryIterator<T, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		filter<T>(predicate: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		filter<W, T>(predicate: W): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		find<T>(collection: List<T>, predicate?: ListIterator<T, boolean>, thisArg?: any): T,
		find<T>(
		collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>, thisArg?: any
	): T,
		find<T>(collection: List<T> | Dictionary<T>, predicate?: string, thisArg?: any): T,
		find<TObject, T>(collection: List<T> | Dictionary<T>, predicate?: TObject): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		find(predicate?: ListIterator<T, boolean>, thisArg?: any): T,
		find(predicate?: string, thisArg?: any): T,
		find<TObject>(predicate?: TObject): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		find<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean>, thisArg?: any
	): TResult,
		find<TResult>(predicate?: string, thisArg?: any): TResult,
		find<TObject, TResult>(predicate?: TObject): TResult
	}

	declare interface LoDashStatic {
		findWhere<T>(collection: Array<T>, callback: ListIterator<T, boolean>, thisArg?: any): T,
		findWhere<T>(collection: List<T>, callback: ListIterator<T, boolean>, thisArg?: any): T,
		findWhere<T>(
		collection: Dictionary<T>, callback: DictionaryIterator<T, boolean>, thisArg?: any
	): T,
		findWhere<W, T>(collection: Array<T>, whereValue: W): T,
		findWhere<W, T>(collection: List<T>, whereValue: W): T,
		findWhere<W, T>(collection: Dictionary<T>, whereValue: W): T,
		findWhere<T>(collection: Array<T>, pluckValue: string): T,
		findWhere<T>(collection: List<T>, pluckValue: string): T,
		findWhere<T>(collection: Dictionary<T>, pluckValue: string): T
	}

	declare interface LoDashStatic {
		findLast<T>(collection: Array<T>, callback: ListIterator<T, boolean>, thisArg?: any): T,
		findLast<T>(collection: List<T>, callback: ListIterator<T, boolean>, thisArg?: any): T,
		findLast<T>(
		collection: Dictionary<T>, callback: DictionaryIterator<T, boolean>, thisArg?: any
	): T,
		findLast<W, T>(collection: Array<T>, whereValue: W): T,
		findLast<W, T>(collection: List<T>, whereValue: W): T,
		findLast<W, T>(collection: Dictionary<T>, whereValue: W): T,
		findLast<T>(collection: Array<T>, pluckValue: string): T,
		findLast<T>(collection: List<T>, pluckValue: string): T,
		findLast<T>(collection: Dictionary<T>, pluckValue: string): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		findLast(callback: ListIterator<T, boolean>, thisArg?: any): T,
		findLast<W>(whereValue: W): T,
		findLast(pluckValue: string): T
	}

	declare interface LoDashStatic {
		forEach<T>(collection: T[], iteratee?: ListIterator<T, any>, thisArg?: any): T[],
		forEach<T>(
		collection: List<T>, iteratee?: ListIterator<T, any>, thisArg?: any
	): List<T>,
		forEach<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, thisArg?: any
	): Dictionary<T>,
		forEach<T>(collection: T, iteratee?: ObjectIterator<any, any>, thisArgs?: any): T,
		forEach<T, TValue>(
		collection: T, iteratee?: ObjectIterator<TValue, any>, thisArgs?: any
	): T
	}

	declare interface LoDashImplicitWrapper<T> {
		forEach(
		iteratee: ListIterator<string, any>, thisArg?: any
	): LoDashImplicitWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		forEach(iteratee: ListIterator<T, any>, thisArg?: any): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		forEach<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>, thisArg?: any
	): LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		forEach(
		iteratee: ListIterator<string, any>, thisArg?: any
	): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		forEach(iteratee: ListIterator<T, any>, thisArg?: any): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		forEach<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>, thisArg?: any
	): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		forEachRight<T>(collection: T[], iteratee?: ListIterator<T, any>, thisArg?: any): T[],
		forEachRight<T>(
		collection: List<T>, iteratee?: ListIterator<T, any>, thisArg?: any
	): List<T>,
		forEachRight<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, thisArg?: any
	): Dictionary<T>,
		forEachRight<T>(collection: T, iteratee?: ObjectIterator<any, any>, thisArgs?: any): T,
		forEachRight<T, TValue>(
		collection: T, iteratee?: ObjectIterator<TValue, any>, thisArgs?: any
	): T
	}

	declare interface LoDashImplicitWrapper<T> {
		forEachRight(
		iteratee: ListIterator<string, any>, thisArg?: any
	): LoDashImplicitWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		forEachRight(iteratee: ListIterator<T, any>, thisArg?: any): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		forEachRight<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>, thisArg?: any
	): LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		forEachRight(
		iteratee: ListIterator<string, any>, thisArg?: any
	): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		forEachRight(iteratee: ListIterator<T, any>, thisArg?: any): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		forEachRight<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>, thisArg?: any
	): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		groupBy<T, TKey>(
		collection: List<T>, iteratee?: ListIterator<T, TKey>, thisArg?: any
	): Dictionary<T[]>,
		groupBy<T>(
		collection: List<any>, iteratee?: ListIterator<T, any>, thisArg?: any
	): Dictionary<T[]>,
		groupBy<T, TKey>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, TKey>, thisArg?: any
	): Dictionary<T[]>,
		groupBy<T>(
		collection: Dictionary<any>, iteratee?: DictionaryIterator<T, any>, thisArg?: any
	): Dictionary<T[]>,
		groupBy<T, TValue>(
		collection: List<T> | Dictionary<T>, iteratee?: string, thisArg?: TValue
	): Dictionary<T[]>,
		groupBy<T>(
		collection: List<T> | Dictionary<T>, iteratee?: string, thisArg?: any
	): Dictionary<T[]>,
		groupBy<TWhere, T>(
		collection: List<T> | Dictionary<T>, iteratee?: TWhere
	): Dictionary<T[]>,
		groupBy<T>(collection: List<T> | Dictionary<T>, iteratee?: Object): Dictionary<T[]>
	}

	declare interface LoDashImplicitWrapper<T> {
		groupBy<TKey>(
		iteratee?: ListIterator<T, TKey>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<T[]>>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		groupBy<TKey>(
		iteratee?: ListIterator<T, TKey>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<TValue>(
		iteratee?: string, thisArg?: TValue
	): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<TWhere>(iteratee?: TWhere): LoDashImplicitObjectWrapper<Dictionary<T[]>>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		groupBy<T, TKey>(
		iteratee?: ListIterator<T, TKey> | DictionaryIterator<T, TKey>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T>(
		iteratee?: ListIterator<T, any> | DictionaryIterator<T, any>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T, TValue>(
		iteratee?: string, thisArg?: TValue
	): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T>(
		iteratee?: string, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<TWhere, T>(iteratee?: TWhere): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T>(iteratee?: Object): LoDashImplicitObjectWrapper<Dictionary<T[]>>
	}

	declare interface LoDashExplicitWrapper<T> {
		groupBy<TKey>(
		iteratee?: ListIterator<T, TKey>, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<T[]>>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		groupBy<TKey>(
		iteratee?: ListIterator<T, TKey>, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<TValue>(
		iteratee?: string, thisArg?: TValue
	): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<TWhere>(iteratee?: TWhere): LoDashExplicitObjectWrapper<Dictionary<T[]>>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		groupBy<T, TKey>(
		iteratee?: ListIterator<T, TKey> | DictionaryIterator<T, TKey>, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T>(
		iteratee?: ListIterator<T, any> | DictionaryIterator<T, any>, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T, TValue>(
		iteratee?: string, thisArg?: TValue
	): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T>(
		iteratee?: string, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<TWhere, T>(iteratee?: TWhere): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T>(iteratee?: Object): LoDashExplicitObjectWrapper<Dictionary<T[]>>
	}

	declare interface LoDashStatic {
		include<T>(collection: List<T> | Dictionary<T>, target: T, fromIndex?: number): boolean,
		include(collection: string, target: string, fromIndex?: number): boolean
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		include(target: T, fromIndex?: number): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		include<TValue>(target: TValue, fromIndex?: number): boolean
	}

	declare interface LoDashImplicitWrapper<T> {
		include(target: string, fromIndex?: number): boolean
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		include(target: T, fromIndex?: number): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		include<TValue>(target: TValue, fromIndex?: number): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashExplicitWrapper<T> {
		include(target: string, fromIndex?: number): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		includes<T>(collection: List<T> | Dictionary<T>, target: T, fromIndex?: number): boolean,
		includes(collection: string, target: string, fromIndex?: number): boolean
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		includes(target: T, fromIndex?: number): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		includes<TValue>(target: TValue, fromIndex?: number): boolean
	}

	declare interface LoDashImplicitWrapper<T> {
		includes(target: string, fromIndex?: number): boolean
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		includes(target: T, fromIndex?: number): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		includes<TValue>(target: TValue, fromIndex?: number): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashExplicitWrapper<T> {
		includes(target: string, fromIndex?: number): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		indexBy<T>(
		collection: List<T>, iteratee?: ListIterator<T, any>, thisArg?: any
	): Dictionary<T>,
		indexBy<T>(
		collection: NumericDictionary<T>, iteratee?: NumericDictionaryIterator<T, any>, thisArg?: any
	): Dictionary<T>,
		indexBy<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, thisArg?: any
	): Dictionary<T>,
		indexBy<T>(
		collection: List<T> | NumericDictionary<T> | Dictionary<T>, iteratee?: string, thisArg?: any
	): Dictionary<T>,
		indexBy<W, T>(
		collection: List<T> | NumericDictionary<T> | Dictionary<T>, iteratee?: W
	): Dictionary<T>,
		indexBy<T>(
		collection: List<T> | NumericDictionary<T> | Dictionary<T>, iteratee?: Object
	): Dictionary<T>
	}

	declare interface LoDashImplicitWrapper<T> {
		indexBy(
		iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		indexBy(
		iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<T>>,
		indexBy(iteratee?: string, thisArg?: any): LoDashImplicitObjectWrapper<Dictionary<T>>,
		indexBy<W>(iteratee?: W): LoDashImplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		indexBy<T>(
		iteratee?: ListIterator<T, any> | NumericDictionaryIterator<T, any> | DictionaryIterator<T, any>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<T>>,
		indexBy<T>(
		iteratee?: string, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<T>>,
		indexBy<W, T>(iteratee?: W): LoDashImplicitObjectWrapper<Dictionary<T>>,
		indexBy<T>(iteratee?: Object): LoDashImplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashExplicitWrapper<T> {
		indexBy(
		iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		indexBy(
		iteratee?: ListIterator<T, any>, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<T>>,
		indexBy(iteratee?: string, thisArg?: any): LoDashExplicitObjectWrapper<Dictionary<T>>,
		indexBy<W>(iteratee?: W): LoDashExplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		indexBy<T>(
		iteratee?: ListIterator<T, any> | NumericDictionaryIterator<T, any> | DictionaryIterator<T, any>, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<T>>,
		indexBy<T>(
		iteratee?: string, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<T>>,
		indexBy<W, T>(iteratee?: W): LoDashExplicitObjectWrapper<Dictionary<T>>,
		indexBy<T>(iteratee?: Object): LoDashExplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashStatic {
		invoke<T>(collection: Array<T>, methodName: string, ...args: any[]): any,
		invoke<T>(collection: List<T>, methodName: string, ...args: any[]): any,
		invoke<T>(collection: Dictionary<T>, methodName: string, ...args: any[]): any,
		invoke<T>(collection: Array<T>, method: Function, ...args: any[]): any,
		invoke<T>(collection: List<T>, method: Function, ...args: any[]): any,
		invoke<T>(collection: Dictionary<T>, method: Function, ...args: any[]): any
	}

	declare interface LoDashStatic {
		map<T, TResult>(
		collection: List<T>, iteratee?: ListIterator<T, TResult>, thisArg?: any
	): TResult[],
		map<T, TResult>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, TResult>, thisArg?: any
	): TResult[],
		map<T, TResult>(collection: List<T> | Dictionary<T>, iteratee?: string): TResult[],
		map<T, TObject>(collection: List<T> | Dictionary<T>, iteratee?: TObject): boolean[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		map<TResult>(
		iteratee?: ListIterator<T, TResult>, thisArg?: any
	): LoDashImplicitArrayWrapper<TResult>,
		map<TResult>(iteratee?: string): LoDashImplicitArrayWrapper<TResult>,
		map<TObject>(iteratee?: TObject): LoDashImplicitArrayWrapper<boolean>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		map<TValue, TResult>(
		iteratee?: ListIterator<TValue, TResult> | DictionaryIterator<TValue, TResult>, thisArg?: any
	): LoDashImplicitArrayWrapper<TResult>,
		map<TValue, TResult>(iteratee?: string): LoDashImplicitArrayWrapper<TResult>,
		map<TObject>(iteratee?: TObject): LoDashImplicitArrayWrapper<boolean>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		map<TResult>(
		iteratee?: ListIterator<T, TResult>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		map<TResult>(iteratee?: string): LoDashExplicitArrayWrapper<TResult>,
		map<TObject>(iteratee?: TObject): LoDashExplicitArrayWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		map<TValue, TResult>(
		iteratee?: ListIterator<TValue, TResult> | DictionaryIterator<TValue, TResult>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		map<TValue, TResult>(iteratee?: string): LoDashExplicitArrayWrapper<TResult>,
		map<TObject>(iteratee?: TObject): LoDashExplicitArrayWrapper<boolean>
	}

	declare interface LoDashStatic {
		partition<T>(
		collection: List<T>, callback: ListIterator<T, boolean>, thisArg?: any
	): T[][],
		partition<T>(
		collection: Dictionary<T>, callback: DictionaryIterator<T, boolean>, thisArg?: any
	): T[][],
		partition<W, T>(collection: List<T>, whereValue: W): T[][],
		partition<W, T>(collection: Dictionary<T>, whereValue: W): T[][],
		partition<T>(collection: List<T>, path: string, srcValue: any): T[][],
		partition<T>(collection: Dictionary<T>, path: string, srcValue: any): T[][],
		partition<T>(collection: List<T>, pluckValue: string): T[][],
		partition<T>(collection: Dictionary<T>, pluckValue: string): T[][]
	}

	declare interface LoDashImplicitStringWrapper {
		partition(
		callback: ListIterator<string, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<string[]>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		partition(
		callback: ListIterator<T, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<T[]>,
		partition<W>(whereValue: W): LoDashImplicitArrayWrapper<T[]>,
		partition(path: string, srcValue: any): LoDashImplicitArrayWrapper<T[]>,
		partition(pluckValue: string): LoDashImplicitArrayWrapper<T[]>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		partition<TResult>(
		callback: ListIterator<TResult, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<TResult[]>,
		partition<TResult>(
		callback: DictionaryIterator<TResult, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<TResult[]>,
		partition<W, TResult>(whereValue: W): LoDashImplicitArrayWrapper<TResult[]>,
		partition<TResult>(path: string, srcValue: any): LoDashImplicitArrayWrapper<TResult[]>,
		partition<TResult>(pluckValue: string): LoDashImplicitArrayWrapper<TResult[]>
	}

	declare interface LoDashStatic {
		pluck<T>(
		collection: List<T> | Dictionary<T>, path: StringRepresentable | StringRepresentable[]
	): any[],
		pluck<T, TResult>(
		collection: List<T> | Dictionary<T>, path: StringRepresentable | StringRepresentable[]
	): TResult[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		pluck<TResult>(
		path: StringRepresentable | StringRepresentable[]
	): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		pluck<TResult>(
		path: StringRepresentable | StringRepresentable[]
	): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		pluck<TResult>(
		path: StringRepresentable | StringRepresentable[]
	): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		pluck<TResult>(
		path: StringRepresentable | StringRepresentable[]
	): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		reduce<T, TResult>(
		collection: Array<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		reduce<T, TResult>(
		collection: List<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		reduce<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		reduce<T, TResult>(
		collection: Array<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult,
		reduce<T, TResult>(
		collection: List<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult,
		reduce<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult,
		inject<T, TResult>(
		collection: Array<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		inject<T, TResult>(
		collection: List<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		inject<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		inject<T, TResult>(
		collection: Array<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult,
		inject<T, TResult>(
		collection: List<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult,
		inject<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult,
		foldl<T, TResult>(
		collection: Array<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		foldl<T, TResult>(
		collection: List<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		foldl<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		foldl<T, TResult>(
		collection: Array<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult,
		foldl<T, TResult>(
		collection: List<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult,
		foldl<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		reduce<TResult>(
		callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		reduce<TResult>(callback: MemoIterator<T, TResult>, thisArg?: any): TResult,
		inject<TResult>(
		callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		inject<TResult>(callback: MemoIterator<T, TResult>, thisArg?: any): TResult,
		foldl<TResult>(
		callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		foldl<TResult>(callback: MemoIterator<T, TResult>, thisArg?: any): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		reduce<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		reduce<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, thisArg?: any
	): TResult,
		inject<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		inject<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, thisArg?: any
	): TResult,
		foldl<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		foldl<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, thisArg?: any
	): TResult
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		reduce<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, accumulator: TResult, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		reduce<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		inject<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, accumulator: TResult, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		inject<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		foldl<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, accumulator: TResult, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		foldl<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		reduceRight<T, TResult>(
		collection: Array<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		reduceRight<T, TResult>(
		collection: List<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		reduceRight<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		reduceRight<T, TResult>(
		collection: Array<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult,
		reduceRight<T, TResult>(
		collection: List<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult,
		reduceRight<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult,
		foldr<T, TResult>(
		collection: Array<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		foldr<T, TResult>(
		collection: List<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		foldr<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>, accumulator: TResult, thisArg?: any
	): TResult,
		foldr<T, TResult>(
		collection: Array<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult,
		foldr<T, TResult>(
		collection: List<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult,
		foldr<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>, thisArg?: any
	): TResult
	}

	declare interface LoDashStatic {
		reject<T>(
		collection: List<T>, predicate?: ListIterator<T, boolean>, thisArg?: any
	): T[],
		reject<T>(
		collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>, thisArg?: any
	): T[],
		reject(
		collection: string, predicate?: StringIterator<boolean>, thisArg?: any
	): string[],
		reject<T>(collection: List<T> | Dictionary<T>, predicate: string, thisArg?: any): T[],
		reject<W, T>(collection: List<T> | Dictionary<T>, predicate: W): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		reject(
		predicate?: StringIterator<boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		reject(
		predicate: ListIterator<T, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		reject(predicate: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		reject<W>(predicate: W): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		reject<T>(
		predicate: ListIterator<T, boolean> | DictionaryIterator<T, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		reject<T>(predicate: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		reject<W, T>(predicate: W): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		reject(
		predicate?: StringIterator<boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		reject(
		predicate: ListIterator<T, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		reject(predicate: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		reject<W>(predicate: W): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		reject<T>(
		predicate: ListIterator<T, boolean> | DictionaryIterator<T, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		reject<T>(predicate: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		reject<W, T>(predicate: W): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		select<T>(
		collection: List<T>, predicate?: ListIterator<T, boolean>, thisArg?: any
	): T[],
		select<T>(
		collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>, thisArg?: any
	): T[],
		select(
		collection: string, predicate?: StringIterator<boolean>, thisArg?: any
	): string[],
		select<T>(collection: List<T> | Dictionary<T>, predicate: string, thisArg?: any): T[],
		select<W, T>(collection: List<T> | Dictionary<T>, predicate: W): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		select(
		predicate?: StringIterator<boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		select(
		predicate: ListIterator<T, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		select(predicate: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		select<W>(predicate: W): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		select<T>(
		predicate: ListIterator<T, boolean> | DictionaryIterator<T, boolean>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		select<T>(predicate: string, thisArg?: any): LoDashImplicitArrayWrapper<T>,
		select<W, T>(predicate: W): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		select(
		predicate?: StringIterator<boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		select(
		predicate: ListIterator<T, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		select(predicate: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		select<W>(predicate: W): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		select<T>(
		predicate: ListIterator<T, boolean> | DictionaryIterator<T, boolean>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		select<T>(predicate: string, thisArg?: any): LoDashExplicitArrayWrapper<T>,
		select<W, T>(predicate: W): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		sample<T>(collection: List<T> | Dictionary<T> | NumericDictionary<T>, n: number): T[],
		sample<O, T>(collection: O, n: number): T[],
		sample<T>(collection: Object, n: number): T[],
		sample<T>(collection: List<T> | Dictionary<T> | NumericDictionary<T>): T,
		sample<O, T>(collection: O): T,
		sample<T>(collection: Object): T
	}

	declare interface LoDashImplicitWrapper<T> {
		sample(n: number): LoDashImplicitArrayWrapper<string>,
		sample(): string
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sample(n: number): LoDashImplicitArrayWrapper<T>,
		sample(): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sample<T>(n: number): LoDashImplicitArrayWrapper<T>,
		sample<T>(): T
	}

	declare interface LoDashExplicitWrapper<T> {
		sample(n: number): LoDashExplicitArrayWrapper<string>,
		sample(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sample(n: number): LoDashExplicitArrayWrapper<T>,
		sample<TWrapper>(): TWrapper
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sample<T>(n: number): LoDashExplicitArrayWrapper<T>,
		sample<TWrapper>(): TWrapper
	}

	declare interface LoDashStatic {
		shuffle<T>(collection: List<T> | Dictionary<T>): T[],
		shuffle(collection: string): string[]
	}

	declare interface LoDashImplicitWrapper<T> {
		shuffle(): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		shuffle(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		shuffle<T>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		shuffle(): LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		shuffle(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		shuffle<T>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		size<T>(collection: List<T> | Dictionary<T>): number,
		size(collection: string): number
	}

	declare interface LoDashImplicitWrapper<T> {
		size(): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		size(): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		size(): number
	}

	declare interface LoDashExplicitWrapper<T> {
		size(): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		size(): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		size(): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		some<T>(
		collection: List<T>, predicate?: ListIterator<T, boolean>, thisArg?: any
	): boolean,
		some<T>(
		collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>, thisArg?: any
	): boolean,
		some<T>(
		collection: NumericDictionary<T>, predicate?: NumericDictionaryIterator<T, boolean>, thisArg?: any
	): boolean,
		some(
		collection: Object, predicate?: ObjectIterator<any, boolean>, thisArg?: any
	): boolean,
		some<T>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, predicate?: string, thisArg?: any
	): boolean,
		some(collection: Object, predicate?: string, thisArg?: any): boolean,
		some<TObject, T>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, predicate?: TObject
	): boolean,
		some<T>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, predicate?: Object
	): boolean,
		some<TObject>(collection: Object, predicate?: TObject): boolean
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		some(
		predicate?: ListIterator<T, boolean> | NumericDictionaryIterator<T, boolean>, thisArg?: any
	): boolean,
		some(predicate?: string, thisArg?: any): boolean,
		some<TObject>(predicate?: TObject): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		some<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean> | NumericDictionaryIterator<T, boolean> | ObjectIterator<any, boolean>, thisArg?: any
	): boolean,
		some(predicate?: string, thisArg?: any): boolean,
		some<TObject>(predicate?: TObject): boolean
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		some(
		predicate?: ListIterator<T, boolean> | NumericDictionaryIterator<T, boolean>, thisArg?: any
	): LoDashExplicitWrapper<boolean>,
		some(predicate?: string, thisArg?: any): LoDashExplicitWrapper<boolean>,
		some<TObject>(predicate?: TObject): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		some<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean> | NumericDictionaryIterator<T, boolean> | ObjectIterator<any, boolean>, thisArg?: any
	): LoDashExplicitWrapper<boolean>,
		some(predicate?: string, thisArg?: any): LoDashExplicitWrapper<boolean>,
		some<TObject>(predicate?: TObject): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		sortBy<T, TSort>(
		collection: List<T>, iteratee?: ListIterator<T, TSort>, thisArg?: any
	): T[],
		sortBy<T, TSort>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, TSort>, thisArg?: any
	): T[],
		sortBy<T>(collection: List<T> | Dictionary<T>, iteratee: string): T[],
		sortBy<W, T>(collection: List<T> | Dictionary<T>, whereValue: W): T[],
		sortBy<T>(collection: List<T> | Dictionary<T>): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sortBy<TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		sortBy(iteratee: string): LoDashImplicitArrayWrapper<T>,
		sortBy<W>(whereValue: W): LoDashImplicitArrayWrapper<T>,
		sortBy(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sortBy<T, TSort>(
		iteratee?: ListIterator<T, TSort> | DictionaryIterator<T, TSort>, thisArg?: any
	): LoDashImplicitArrayWrapper<T>,
		sortBy<T>(iteratee: string): LoDashImplicitArrayWrapper<T>,
		sortBy<W, T>(whereValue: W): LoDashImplicitArrayWrapper<T>,
		sortBy<T>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sortBy<TSort>(
		iteratee?: ListIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		sortBy(iteratee: string): LoDashExplicitArrayWrapper<T>,
		sortBy<W>(whereValue: W): LoDashExplicitArrayWrapper<T>,
		sortBy(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sortBy<T, TSort>(
		iteratee?: ListIterator<T, TSort> | DictionaryIterator<T, TSort>, thisArg?: any
	): LoDashExplicitArrayWrapper<T>,
		sortBy<T>(iteratee: string): LoDashExplicitArrayWrapper<T>,
		sortBy<W, T>(whereValue: W): LoDashExplicitArrayWrapper<T>,
		sortBy<T>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		sortByAll<T>(
		collection: Array<T>, iteratees: (ListIterator<T, any> | string | Object)[]
	): T[],
		sortByAll<T>(
		collection: List<T>, iteratees: (ListIterator<T, any> | string | Object)[]
	): T[],
		sortByAll<T>(
		collection: Array<T>, ...iteratees: (ListIterator<T, any> | string | Object)[]
	): T[],
		sortByAll<T>(
		collection: List<T>, ...iteratees: (ListIterator<T, any> | string | Object)[]
	): T[],
		sortByAll<T>(
		collection: (Array<T> | List<T>), ...args: (ListIterator<T, boolean> | Object | string)[]
	): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sortByAll(
		...args: (ListIterator<T, boolean> | Object | string)[]
	): LoDashImplicitArrayWrapper<T>,
		sortByAll(
		iteratees: (ListIterator<T, any> | string | Object)[]
	): LoDashImplicitArrayWrapper<T>,
		sortByAll(
		...iteratees: (ListIterator<T, any> | string | Object)[]
	): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		sortByOrder<W, T>(
		collection: List<T>, iteratees: ListIterator<T, any> | string | W | (ListIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): T[],
		sortByOrder<T>(
		collection: List<T>, iteratees: ListIterator<T, any> | string | Object | (ListIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): T[],
		sortByOrder<W, T>(
		collection: NumericDictionary<T>, iteratees: NumericDictionaryIterator<T, any> | string | W | (NumericDictionaryIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): T[],
		sortByOrder<T>(
		collection: NumericDictionary<T>, iteratees: NumericDictionaryIterator<T, any> | string | Object | (NumericDictionaryIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): T[],
		sortByOrder<W, T>(
		collection: Dictionary<T>, iteratees: DictionaryIterator<T, any> | string | W | (DictionaryIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): T[],
		sortByOrder<T>(
		collection: Dictionary<T>, iteratees: DictionaryIterator<T, any> | string | Object | (DictionaryIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		sortByOrder(
		iteratees: ListIterator<T, any> | string | (ListIterator<T, any> | string)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sortByOrder<W>(
		iteratees: ListIterator<T, any> | string | W | (ListIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sortByOrder<W, T>(
		iteratees: ListIterator<T, any> | string | W | (ListIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>,
		sortByOrder<T>(
		iteratees: ListIterator<T, any> | string | Object | (ListIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>,
		sortByOrder<W, T>(
		iteratees: NumericDictionaryIterator<T, any> | string | W | (NumericDictionaryIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>,
		sortByOrder<T>(
		iteratees: NumericDictionaryIterator<T, any> | string | Object | (NumericDictionaryIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>,
		sortByOrder<W, T>(
		iteratees: DictionaryIterator<T, any> | string | W | (DictionaryIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>,
		sortByOrder<T>(
		iteratees: DictionaryIterator<T, any> | string | Object | (DictionaryIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		sortByOrder(
		iteratees: ListIterator<T, any> | string | (ListIterator<T, any> | string)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sortByOrder<W>(
		iteratees: ListIterator<T, any> | string | W | (ListIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sortByOrder<W, T>(
		iteratees: ListIterator<T, any> | string | W | (ListIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>,
		sortByOrder<T>(
		iteratees: ListIterator<T, any> | string | Object | (ListIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>,
		sortByOrder<W, T>(
		iteratees: NumericDictionaryIterator<T, any> | string | W | (NumericDictionaryIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>,
		sortByOrder<T>(
		iteratees: NumericDictionaryIterator<T, any> | string | Object | (NumericDictionaryIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>,
		sortByOrder<W, T>(
		iteratees: DictionaryIterator<T, any> | string | W | (DictionaryIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>,
		sortByOrder<T>(
		iteratees: DictionaryIterator<T, any> | string | Object | (DictionaryIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		where<T, U>(list: Array<T>, properties: U): T[],
		where<T, U>(list: List<T>, properties: U): T[],
		where<T, U>(list: Dictionary<T>, properties: U): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		where<U>(properties: U): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		now(): number
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		now(): number
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		now(): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		after<TFunc>(n: number, func: TFunc): TFunc
	}

	declare interface LoDashImplicitWrapper<T> {
		after<TFunc>(func: TFunc): LoDashImplicitObjectWrapper<TFunc>
	}

	declare interface LoDashExplicitWrapper<T> {
		after<TFunc>(func: TFunc): LoDashExplicitObjectWrapper<TFunc>
	}

	declare interface LoDashStatic {
		ary<TResult>(func: Function, n?: number): TResult,
		ary<T, TResult>(func: T, n?: number): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		ary<TResult>(n?: number): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		ary<TResult>(n?: number): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		backflow<TResult>(...funcs: Function[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		backflow<TResult>(...funcs: Function[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		backflow<TResult>(...funcs: Function[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		before<TFunc>(n: number, func: TFunc): TFunc
	}

	declare interface LoDashImplicitWrapper<T> {
		before<TFunc>(func: TFunc): LoDashImplicitObjectWrapper<TFunc>
	}

	declare interface LoDashExplicitWrapper<T> {
		before<TFunc>(func: TFunc): LoDashExplicitObjectWrapper<TFunc>
	}

	declare interface FunctionBind {
		placeholder: any,
		(func: T, thisArg: any, ...partials: any[]): TResult,
		(func: Function, thisArg: any, ...partials: any[]): TResult
	}

	declare interface LoDashStatic {
		bind: FunctionBind
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		bind<TResult>(
		thisArg: any, ...partials: any[]
	): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		bind<TResult>(
		thisArg: any, ...partials: any[]
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		bindAll<T>(object: T, ...methodNames: (string | string[])[]): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		bindAll(...methodNames: (string | string[])[]): LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		bindAll(...methodNames: (string | string[])[]): LoDashExplicitObjectWrapper<T>
	}

	declare interface FunctionBindKey {
		placeholder: any,
		(object: T, key: any, ...partials: any[]): TResult,
		(object: Object, key: any, ...partials: any[]): TResult
	}

	declare interface LoDashStatic {
		bindKey: FunctionBindKey
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		bindKey<TResult>(key: any, ...partials: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		bindKey<TResult>(key: any, ...partials: any[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		compose<TResult>(...funcs: Function[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		compose<TResult>(...funcs: Function[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		compose<TResult>(...funcs: Function[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		createCallback(func: string, thisArg?: any, argCount?: number): () => any,
		createCallback(func: Dictionary<any>, thisArg?: any, argCount?: number): () => boolean
	}

	declare interface LoDashImplicitWrapper<T> {
		createCallback(thisArg?: any, argCount?: number): LoDashImplicitObjectWrapper<() => any>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		createCallback(thisArg?: any, argCount?: number): LoDashImplicitObjectWrapper<() => any>
	}

	declare interface LoDashStatic {
		curry<T1, R>(func: (t1: T1) => R): CurriedFunction1<T1, R>,
		curry<T1, T2, R>(func: (t1: T1, t2: T2) => R): CurriedFunction2<T1, T2, R>,
		curry<T1, T2, T3, R>(
		func: (t1: T1, t2: T2, t3: T3) => R
	): CurriedFunction3<T1, T2, T3, R>,
		curry<T1, T2, T3, T4, R>(
		func: (t1: T1, t2: T2, t3: T3, t4: T4) => R
	): CurriedFunction4<T1, T2, T3, T4, R>,
		curry<T1, T2, T3, T4, T5, R>(
		func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R
	): CurriedFunction5<T1, T2, T3, T4, T5, R>,
		curry<TResult>(func: Function, arity?: number): TResult
	}

	declare interface CurriedFunction1<T1, R> {
		(): CurriedFunction1<T1, R>,
		(t1: T1): R
	}

	declare interface CurriedFunction2<T1, T2, R> {
		(): CurriedFunction2<T1, T2, R>,
		(t1: T1): CurriedFunction1<T2, R>,
		(t1: T1, t2: T2): R
	}

	declare interface CurriedFunction3<T1, T2, T3, R> {
		(): CurriedFunction3<T1, T2, T3, R>,
		(t1: T1): CurriedFunction2<T2, T3, R>,
		(t1: T1, t2: T2): CurriedFunction1<T3, R>,
		(t1: T1, t2: T2, t3: T3): R
	}

	declare interface CurriedFunction4<T1, T2, T3, T4, R> {
		(): CurriedFunction4<T1, T2, T3, T4, R>,
		(t1: T1): CurriedFunction3<T2, T3, T4, R>,
		(t1: T1, t2: T2): CurriedFunction2<T3, T4, R>,
		(t1: T1, t2: T2, t3: T3): CurriedFunction1<T4, R>,
		(t1: T1, t2: T2, t3: T3, t4: T4): R
	}

	declare interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
		(): CurriedFunction5<T1, T2, T3, T4, T5, R>,
		(t1: T1): CurriedFunction4<T2, T3, T4, T5, R>,
		(t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>,
		(t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>,
		(t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction1<T5, R>,
		(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		curry<TResult>(arity?: number): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		curryRight<T1, R>(func: (t1: T1) => R): CurriedFunction1<T1, R>,
		curryRight<T1, T2, R>(func: (t1: T1, t2: T2) => R): CurriedFunction2<T2, T1, R>,
		curryRight<T1, T2, T3, R>(
		func: (t1: T1, t2: T2, t3: T3) => R
	): CurriedFunction3<T3, T2, T1, R>,
		curryRight<T1, T2, T3, T4, R>(
		func: (t1: T1, t2: T2, t3: T3, t4: T4) => R
	): CurriedFunction4<T4, T3, T2, T1, R>,
		curryRight<T1, T2, T3, T4, T5, R>(
		func: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => R
	): CurriedFunction5<T5, T4, T3, T2, T1, R>,
		curryRight<TResult>(func: Function, arity?: number): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		curryRight<TResult>(arity?: number): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface DebounceSettings {
		leading?: boolean,
		maxWait?: number,
		trailing?: boolean
	}

	declare interface LoDashStatic {
		debounce<T>(func: T, wait?: number, options?: DebounceSettings): T & Cancelable
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		debounce(
		wait?: number, options?: DebounceSettings
	): LoDashImplicitObjectWrapper<T & Cancelable>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		debounce(
		wait?: number, options?: DebounceSettings
	): LoDashExplicitObjectWrapper<T & Cancelable>
	}

	declare interface LoDashStatic {
		defer<T>(func: T, ...args: any[]): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		defer(...args: any[]): LoDashImplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		defer(...args: any[]): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		delay<T>(func: T, wait: number, ...args: any[]): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		delay(wait: number, ...args: any[]): LoDashImplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		delay(wait: number, ...args: any[]): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		flow<TResult>(...funcs: Function[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		flow<TResult>(...funcs: Function[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		flow<TResult>(...funcs: Function[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		flowRight<TResult>(...funcs: Function[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		flowRight<TResult>(...funcs: Function[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		flowRight<TResult>(...funcs: Function[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface MemoizedFunction {
		cache: MapCache
	}

	declare interface LoDashStatic {
		memoize: {
		(func: T, resolver?: Function): T & MemoizedFunction,
		Cache: MapCache
	}
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		memoize(resolver?: Function): LoDashImplicitObjectWrapper<T & MemoizedFunction>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		memoize(resolver?: Function): LoDashExplicitObjectWrapper<T & MemoizedFunction>
	}

	declare interface LoDashStatic {
		modArgs<T, TResult>(func: T, ...transforms: Function[]): TResult,
		modArgs<T, TResult>(func: T, transforms: Function[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		modArgs<TResult>(...transforms: Function[]): LoDashImplicitObjectWrapper<TResult>,
		modArgs<TResult>(transforms: Function[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		modArgs<TResult>(...transforms: Function[]): LoDashExplicitObjectWrapper<TResult>,
		modArgs<TResult>(transforms: Function[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		negate<T>(predicate: T): (...args: any[]) => boolean,
		negate<T, TResult>(predicate: T): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		negate(): LoDashImplicitObjectWrapper<(...args: any[]) => boolean>,
		negate<TResult>(): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		negate(): LoDashExplicitObjectWrapper<(...args: any[]) => boolean>,
		negate<TResult>(): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		once<T>(func: T): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		once(): LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		once(): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		partial: Partial
	}

	declare interface Function0<R> {
		(): R
	}

	declare interface Function1<T1, R> {
		(t1: T1): R
	}

	declare interface Function2<T1, T2, R> {
		(t1: T1, t2: T2): R
	}

	declare interface Function3<T1, T2, T3, R> {
		(t1: T1, t2: T2, t3: T3): R
	}

	declare interface Function4<T1, T2, T3, T4, R> {
		(t1: T1, t2: T2, t3: T3, t4: T4): R
	}

	declare interface Partial {
		(func: Function0<R>): Function0<R>,
		(func: Function1<T1, R>): Function1<T1, R>,
		(func: Function1<T1, R>, arg1: T1): Function0<R>,
		(func: Function2<T1, T2, R>): Function2<T1, T2, R>,
		(func: Function2<T1, T2, R>, arg1: T1): Function1<T2, R>,
		(func: Function2<T1, T2, R>, plc1: PH, arg2: T2): Function1<T1, R>,
		(func: Function2<T1, T2, R>, arg1: T1, arg2: T2): Function0<R>,
		(func: Function3<T1, T2, T3, R>): Function3<T1, T2, T3, R>,
		(func: Function3<T1, T2, T3, R>, arg1: T1): Function2<T2, T3, R>,
		(func: Function3<T1, T2, T3, R>, plc1: PH, arg2: T2): Function2<T1, T3, R>,
		(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2): Function1<T3, R>,
		(func: Function3<T1, T2, T3, R>, plc1: PH, plc2: PH, arg3: T3): Function2<T1, T2, R>,
		(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: PH, arg3: T3): Function1<T2, R>,
		(func: Function3<T1, T2, T3, R>, plc1: PH, arg2: T2, arg3: T3): Function1<T1, R>,
		(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, arg3: T3): Function0<R>,
		(func: Function4<T1, T2, T3, T4, R>): Function4<T1, T2, T3, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1): Function3<T2, T3, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, plc1: PH, arg2: T2): Function3<T1, T3, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2): Function2<T3, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, plc1: PH, plc2: PH, arg3: T3): Function3<T1, T2, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, arg3: T3): Function2<T2, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, plc1: PH, arg2: T2, arg3: T3): Function2<T1, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3): Function1<T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, plc1: PH, plc2: PH, plc3: PH, arg4: T4): Function3<T1, T2, T3, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, plc3: PH, arg4: T4): Function2<T2, T3, R>,
		(func: Function4<T1, T2, T3, T4, R>, plc1: PH, arg2: T2, plc3: PH, arg4: T4): Function2<T1, T3, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: PH, arg4: T4): Function1<T3, R>,
		(func: Function4<T1, T2, T3, T4, R>, plc1: PH, plc2: PH, arg3: T3, arg4: T4): Function2<T1, T2, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, arg3: T3, arg4: T4): Function1<T2, R>,
		(func: Function4<T1, T2, T3, T4, R>, plc1: PH, arg2: T2, arg3: T3, arg4: T4): Function1<T1, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Function0<R>,
		(func: Function, ...args: any[]): Function
	}

	declare interface LoDashStatic {
		partialRight: PartialRight
	}

	declare interface PartialRight {
		(func: Function0<R>): Function0<R>,
		(func: Function1<T1, R>): Function1<T1, R>,
		(func: Function1<T1, R>, arg1: T1): Function0<R>,
		(func: Function2<T1, T2, R>): Function2<T1, T2, R>,
		(func: Function2<T1, T2, R>, arg1: T1, plc2: PH): Function1<T2, R>,
		(func: Function2<T1, T2, R>, arg2: T2): Function1<T1, R>,
		(func: Function2<T1, T2, R>, arg1: T1, arg2: T2): Function0<R>,
		(func: Function3<T1, T2, T3, R>): Function3<T1, T2, T3, R>,
		(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: PH, plc3: PH): Function2<T2, T3, R>,
		(func: Function3<T1, T2, T3, R>, arg2: T2, plc3: PH): Function2<T1, T3, R>,
		(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, plc3: PH): Function1<T3, R>,
		(func: Function3<T1, T2, T3, R>, arg3: T3): Function2<T1, T2, R>,
		(func: Function3<T1, T2, T3, R>, arg1: T1, plc2: PH, arg3: T3): Function1<T2, R>,
		(func: Function3<T1, T2, T3, R>, arg2: T2, arg3: T3): Function1<T1, R>,
		(func: Function3<T1, T2, T3, R>, arg1: T1, arg2: T2, arg3: T3): Function0<R>,
		(func: Function4<T1, T2, T3, T4, R>): Function4<T1, T2, T3, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, plc3: PH, plc4: PH): Function3<T2, T3, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg2: T2, plc3: PH, plc4: PH): Function3<T1, T3, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: PH, plc4: PH): Function2<T3, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg3: T3, plc4: PH): Function3<T1, T2, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, arg3: T3, plc4: PH): Function2<T2, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg2: T2, arg3: T3, plc4: PH): Function2<T1, T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, plc4: PH): Function1<T4, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg4: T4): Function3<T1, T2, T3, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, plc3: PH, arg4: T4): Function2<T2, T3, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg2: T2, plc3: PH, arg4: T4): Function2<T1, T3, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, plc3: PH, arg4: T4): Function1<T3, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg3: T3, arg4: T4): Function2<T1, T2, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, plc2: PH, arg3: T3, arg4: T4): Function1<T2, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg2: T2, arg3: T3, arg4: T4): Function1<T1, R>,
		(func: Function4<T1, T2, T3, T4, R>, arg1: T1, arg2: T2, arg3: T3, arg4: T4): Function0<R>,
		(func: Function, ...args: any[]): Function
	}

	declare interface LoDashStatic {
		rearg<TResult>(func: Function, indexes: number[]): TResult,
		rearg<TResult>(func: Function, ...indexes: number[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		rearg<TResult>(indexes: number[]): LoDashImplicitObjectWrapper<TResult>,
		rearg<TResult>(...indexes: number[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		restParam<TResult>(func: Function, start?: number): TResult,
		restParam<TResult, TFunc>(func: TFunc, start?: number): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		restParam<TResult>(start?: number): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		restParam<TResult>(start?: number): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		spread<F, T>(func: F): T,
		spread<T>(func: Function): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		spread<T>(): LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		spread<T>(): LoDashExplicitObjectWrapper<T>
	}

	declare interface ThrottleSettings {
		leading?: boolean,
		trailing?: boolean
	}

	declare interface LoDashStatic {
		throttle<T>(func: T, wait?: number, options?: ThrottleSettings): T & Cancelable
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		throttle(
		wait?: number, options?: ThrottleSettings
	): LoDashImplicitObjectWrapper<T & Cancelable>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		throttle(
		wait?: number, options?: ThrottleSettings
	): LoDashExplicitObjectWrapper<T & Cancelable>
	}

	declare interface LoDashStatic {
		wrap<V, W, R>(value: V, wrapper: W): R,
		wrap<V, R>(value: V, wrapper: Function): R,
		wrap<R>(value: any, wrapper: Function): R
	}

	declare interface LoDashImplicitWrapper<T> {
		wrap<W, R>(wrapper: W): LoDashImplicitObjectWrapper<R>,
		wrap<R>(wrapper: Function): LoDashImplicitObjectWrapper<R>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		wrap<W, R>(wrapper: W): LoDashImplicitObjectWrapper<R>,
		wrap<R>(wrapper: Function): LoDashImplicitObjectWrapper<R>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		wrap<W, R>(wrapper: W): LoDashImplicitObjectWrapper<R>,
		wrap<R>(wrapper: Function): LoDashImplicitObjectWrapper<R>
	}

	declare interface LoDashExplicitWrapper<T> {
		wrap<W, R>(wrapper: W): LoDashExplicitObjectWrapper<R>,
		wrap<R>(wrapper: Function): LoDashExplicitObjectWrapper<R>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		wrap<W, R>(wrapper: W): LoDashExplicitObjectWrapper<R>,
		wrap<R>(wrapper: Function): LoDashExplicitObjectWrapper<R>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		wrap<W, R>(wrapper: W): LoDashExplicitObjectWrapper<R>,
		wrap<R>(wrapper: Function): LoDashExplicitObjectWrapper<R>
	}

	declare interface CloneCustomizer<TValue, TResult> {
		(value: TValue): TResult
	}

	declare interface LoDashStatic {
		clone<TResult>(
		value: any, isDeep: boolean, customizer: CloneCustomizer<any, TResult>, thisArg?: any
	): TResult,
		clone<T, TResult>(
		value: T, isDeep: boolean, customizer: CloneCustomizer<T, TResult>, thisArg?: any
	): TResult,
		clone<TResult>(
		value: any, customizer: CloneCustomizer<any, TResult>, thisArg?: any
	): TResult,
		clone<T, TResult>(
		value: T, customizer: CloneCustomizer<T, TResult>, thisArg?: any
	): TResult,
		clone<T>(value: T, isDeep?: boolean): T
	}

	declare interface LoDashImplicitWrapper<T> {
		clone<TResult>(
		isDeep: boolean, customizer: CloneCustomizer<T, TResult>, thisArg?: any
	): TResult,
		clone<TResult>(customizer: CloneCustomizer<T, TResult>, thisArg?: any): TResult,
		clone(isDeep?: boolean): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		clone<TResult>(
		isDeep: boolean, customizer: CloneCustomizer<T[], TResult>, thisArg?: any
	): TResult,
		clone<TResult>(customizer: CloneCustomizer<T[], TResult>, thisArg?: any): TResult,
		clone(isDeep?: boolean): T[]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		clone<TResult>(
		isDeep: boolean, customizer: CloneCustomizer<T, TResult>, thisArg?: any
	): TResult,
		clone<TResult>(customizer: CloneCustomizer<T, TResult>, thisArg?: any): TResult,
		clone(isDeep?: boolean): T
	}

	declare interface LoDashExplicitWrapper<T> {
		clone<TResult>(
		isDeep: boolean, customizer: CloneCustomizer<T, TResult>, thisArg?: any
	): LoDashExplicitWrapper<TResult>,
		clone<TResult>(
		isDeep: boolean, customizer: CloneCustomizer<T, TResult[]>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		clone<TResult>(
		isDeep: boolean, customizer: CloneCustomizer<T, TResult>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		clone<TResult>(
		customizer: CloneCustomizer<T, TResult>, thisArg?: any
	): LoDashExplicitWrapper<TResult>,
		clone<TResult>(
		customizer: CloneCustomizer<T, TResult[]>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		clone<TResult>(
		customizer: CloneCustomizer<T, TResult>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		clone(isDeep?: boolean): LoDashExplicitWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		clone<TResult>(
		isDeep: boolean, customizer: CloneCustomizer<T[], TResult>, thisArg?: any
	): LoDashExplicitWrapper<TResult>,
		clone<TResult>(
		isDeep: boolean, customizer: CloneCustomizer<T[], TResult[]>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		clone<TResult>(
		isDeep: boolean, customizer: CloneCustomizer<T[], TResult>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		clone<TResult>(
		customizer: CloneCustomizer<T[], TResult>, thisArg?: any
	): LoDashExplicitWrapper<TResult>,
		clone<TResult>(
		customizer: CloneCustomizer<T[], TResult[]>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		clone<TResult>(
		customizer: CloneCustomizer<T[], TResult>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		clone(isDeep?: boolean): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		clone<TResult>(
		isDeep: boolean, customizer: CloneCustomizer<T, TResult>, thisArg?: any
	): LoDashExplicitWrapper<TResult>,
		clone<TResult>(
		isDeep: boolean, customizer: CloneCustomizer<T, TResult[]>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		clone<TResult>(
		isDeep: boolean, customizer: CloneCustomizer<T, TResult>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		clone<TResult>(
		customizer: CloneCustomizer<T, TResult>, thisArg?: any
	): LoDashExplicitWrapper<TResult>,
		clone<TResult>(
		customizer: CloneCustomizer<T, TResult[]>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		clone<TResult>(
		customizer: CloneCustomizer<T, TResult>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		clone(isDeep?: boolean): LoDashExplicitObjectWrapper<T>
	}

	declare interface CloneDeepCustomizer<TValue, TResult> {
		(value: TValue): TResult
	}

	declare interface LoDashStatic {
		cloneDeep<TResult>(
		value: any, customizer: CloneDeepCustomizer<any, TResult>, thisArg?: any
	): TResult,
		cloneDeep<T, TResult>(
		value: T, customizer: CloneDeepCustomizer<T, TResult>, thisArg?: any
	): TResult,
		cloneDeep<T>(value: T): T
	}

	declare interface LoDashImplicitWrapper<T> {
		cloneDeep<TResult>(customizer: CloneDeepCustomizer<T, TResult>, thisArg?: any): TResult,
		cloneDeep(): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		cloneDeep<TResult>(customizer: CloneDeepCustomizer<T[], TResult>, thisArg?: any): TResult,
		cloneDeep(): T[]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		cloneDeep<TResult>(customizer: CloneDeepCustomizer<T, TResult>, thisArg?: any): TResult,
		cloneDeep(): T
	}

	declare interface LoDashExplicitWrapper<T> {
		cloneDeep<TResult>(
		customizer: CloneDeepCustomizer<T, TResult>, thisArg?: any
	): LoDashExplicitWrapper<TResult>,
		cloneDeep<TResult>(
		customizer: CloneDeepCustomizer<T, TResult[]>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		cloneDeep<TResult>(
		customizer: CloneDeepCustomizer<T, TResult>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		cloneDeep(): LoDashExplicitWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		cloneDeep<TResult>(
		customizer: CloneDeepCustomizer<T[], TResult>, thisArg?: any
	): LoDashExplicitWrapper<TResult>,
		cloneDeep<TResult>(
		customizer: CloneDeepCustomizer<T[], TResult[]>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		cloneDeep<TResult>(
		customizer: CloneDeepCustomizer<T[], TResult>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		cloneDeep(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		cloneDeep<TResult>(
		customizer: CloneDeepCustomizer<T, TResult>, thisArg?: any
	): LoDashExplicitWrapper<TResult>,
		cloneDeep<TResult>(
		customizer: CloneDeepCustomizer<T, TResult[]>, thisArg?: any
	): LoDashExplicitArrayWrapper<TResult>,
		cloneDeep<TResult>(
		customizer: CloneDeepCustomizer<T, TResult>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		cloneDeep(): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		eq(value: any, other: any, customizer?: IsEqualCustomizer, thisArg?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		eq(other: any, customizer?: IsEqualCustomizer, thisArg?: any): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		eq(
		other: any, customizer?: IsEqualCustomizer, thisArg?: any
	): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		gt(value: any, other: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		gt(other: any): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		gt(other: any): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		gte(value: any, other: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		gte(other: any): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		gte(other: any): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isArguments(value?: any): IArguments
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isArguments(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isArguments(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isArray<T>(value?: any): T[]
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isArray(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isArray(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isBoolean(value?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isBoolean(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isBoolean(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isDate(value?: any): Date
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isDate(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isDate(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isElement(value?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isElement(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isElement(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isEmpty(value?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isEmpty(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isEmpty(): LoDashExplicitWrapper<boolean>
	}

	declare interface IsEqualCustomizer {
		(value: any, other: any, indexOrKey?: number | string): boolean
	}

	declare interface LoDashStatic {
		isEqual(value: any, other: any, customizer?: IsEqualCustomizer, thisArg?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isEqual(other: any, customizer?: IsEqualCustomizer, thisArg?: any): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isEqual(
		other: any, customizer?: IsEqualCustomizer, thisArg?: any
	): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isError(value: any): Error
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isError(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isError(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isFinite(value?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isFinite(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isFinite(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isFunction(value?: any): Function
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isFunction(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isFunction(): LoDashExplicitWrapper<boolean>
	}

	declare interface isMatchCustomizer {
		(value: any, other: any, indexOrKey?: number | string): boolean
	}

	declare interface LoDashStatic {
		isMatch(
		object: Object, source: Object, customizer?: isMatchCustomizer, thisArg?: any
	): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		isMatch(source: Object, customizer?: isMatchCustomizer, thisArg?: any): boolean
	}

	declare interface LoDashStatic {
		isNaN(value?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isNaN(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isNaN(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isNative(value: any): Function
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isNative(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isNative(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isNull(value?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isNull(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isNull(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isNumber(value?: any): number
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isNumber(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isNumber(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isObject(value?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isObject(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isObject(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isPlainObject(value?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isPlainObject(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isPlainObject(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isRegExp(value?: any): RegExp
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isRegExp(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isRegExp(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isString(value?: any): string
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isString(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isString(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isTypedArray(value: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isTypedArray(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isTypedArray(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isUndefined(value: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isUndefined(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isUndefined(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		lt(value: any, other: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		lt(other: any): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		lt(other: any): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		lte(value: any, other: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		lte(other: any): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		lte(other: any): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		toArray<T>(value: List<T> | Dictionary<T> | NumericDictionary<T>): T[],
		toArray<TValue, TResult>(value: TValue): TResult[],
		toArray<TResult>(value?: any): TResult[]
	}

	declare interface LoDashImplicitWrapper<T> {
		toArray<TResult>(): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		toArray(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		toArray<TResult>(): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitWrapper<T> {
		toArray<TResult>(): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		toArray(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		toArray<TResult>(): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		toPlainObject<TResult>(value?: any): TResult
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		toPlainObject<TResult>(): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		add(augend: number, addend: number): number
	}

	declare interface LoDashImplicitWrapper<T> {
		add(addend: number): number
	}

	declare interface LoDashExplicitWrapper<T> {
		add(addend: number): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		ceil(n: number, precision?: number): number
	}

	declare interface LoDashImplicitWrapper<T> {
		ceil(precision?: number): number
	}

	declare interface LoDashExplicitWrapper<T> {
		ceil(precision?: number): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		floor(n: number, precision?: number): number
	}

	declare interface LoDashImplicitWrapper<T> {
		floor(precision?: number): number
	}

	declare interface LoDashExplicitWrapper<T> {
		floor(precision?: number): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		max<T>(collection: List<T>, iteratee?: ListIterator<T, any>, thisArg?: any): T,
		max<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, thisArg?: any
	): T,
		max<T>(collection: List<T> | Dictionary<T>, iteratee?: string, thisArg?: any): T,
		max<TObject, T>(collection: List<T> | Dictionary<T>, whereValue?: TObject): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		max(iteratee?: ListIterator<T, any>, thisArg?: any): T,
		max(iteratee?: string, thisArg?: any): T,
		max<TObject>(whereValue?: TObject): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		max<T>(
		iteratee?: ListIterator<T, any> | DictionaryIterator<T, any>, thisArg?: any
	): T,
		max<T>(iteratee?: string, thisArg?: any): T,
		max<TObject, T>(whereValue?: TObject): T
	}

	declare interface LoDashStatic {
		min<T>(collection: List<T>, iteratee?: ListIterator<T, any>, thisArg?: any): T,
		min<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, thisArg?: any
	): T,
		min<T>(collection: List<T> | Dictionary<T>, iteratee?: string, thisArg?: any): T,
		min<TObject, T>(collection: List<T> | Dictionary<T>, whereValue?: TObject): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		min(iteratee?: ListIterator<T, any>, thisArg?: any): T,
		min(iteratee?: string, thisArg?: any): T,
		min<TObject>(whereValue?: TObject): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		min<T>(
		iteratee?: ListIterator<T, any> | DictionaryIterator<T, any>, thisArg?: any
	): T,
		min<T>(iteratee?: string, thisArg?: any): T,
		min<TObject, T>(whereValue?: TObject): T
	}

	declare interface LoDashStatic {
		round(n: number, precision?: number): number
	}

	declare interface LoDashImplicitWrapper<T> {
		round(precision?: number): number
	}

	declare interface LoDashExplicitWrapper<T> {
		round(precision?: number): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		sum<T>(
		collection: List<T>, iteratee: ListIterator<T, number>, thisArg?: any
	): number,
		sum<T>(
		collection: Dictionary<T>, iteratee: DictionaryIterator<T, number>, thisArg?: any
	): number,
		sum(collection: List<{
		
	}> | Dictionary<{
		
	}>, iteratee: string): number,
		sum<T>(collection: List<T> | Dictionary<T>): number,
		sum(collection: List<number> | Dictionary<number>): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sum(iteratee: ListIterator<T, number>, thisArg?: any): number,
		sum(iteratee: string): number,
		sum(): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sum<TValue>(
		iteratee: ListIterator<TValue, number> | DictionaryIterator<TValue, number>, thisArg?: any
	): number,
		sum(iteratee: string): number,
		sum(): number
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sum(
		iteratee: ListIterator<T, number>, thisArg?: any
	): LoDashExplicitWrapper<number>,
		sum(iteratee: string): LoDashExplicitWrapper<number>,
		sum(): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sum<TValue>(
		iteratee: ListIterator<TValue, number> | DictionaryIterator<TValue, number>, thisArg?: any
	): LoDashExplicitWrapper<number>,
		sum(iteratee: string): LoDashExplicitWrapper<number>,
		sum(): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		inRange(n: number, start: number, end: number): boolean,
		inRange(n: number, end: number): boolean
	}

	declare interface LoDashImplicitWrapper<T> {
		inRange(start: number, end: number): boolean,
		inRange(end: number): boolean
	}

	declare interface LoDashExplicitWrapper<T> {
		inRange(start: number, end: number): LoDashExplicitWrapper<boolean>,
		inRange(end: number): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		random(min?: number, max?: number, floating?: boolean): number,
		random(min?: number, floating?: boolean): number,
		random(floating?: boolean): number
	}

	declare interface LoDashImplicitWrapper<T> {
		random(max?: number, floating?: boolean): number,
		random(floating?: boolean): number
	}

	declare interface LoDashExplicitWrapper<T> {
		random(max?: number, floating?: boolean): LoDashExplicitWrapper<number>,
		random(floating?: boolean): LoDashExplicitWrapper<number>
	}

	declare interface AssignCustomizer {
		(objectValue: any, sourceValue: any, key?: string, object?: {
		
	}, source?: {
		
	}): any
	}

	declare interface LoDashStatic {
		assign<TObject, TSource, TResult>(
		object: TObject, source: TSource, customizer?: AssignCustomizer, thisArg?: any
	): TResult,
		assign<TObject, TSource1, TSource2, TResult>(
		object: TObject, source1: TSource1, source2: TSource2, customizer?: AssignCustomizer, thisArg?: any
	): TResult,
		assign<TObject, TSource1, TSource2, TSource3, TResult>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer?: AssignCustomizer, thisArg?: any
	): TResult,
		assign<TObject, TSource1, TSource2, TSource3, TSource4, TResult>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer?: AssignCustomizer, thisArg?: any
	): TResult,
		assign<TObject>(object: TObject): TObject,
		assign<TObject, TResult>(object: TObject, ...otherArgs: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		assign<TSource, TResult>(
		source: TSource, customizer?: AssignCustomizer, thisArg?: any
	): LoDashImplicitObjectWrapper<TResult>,
		assign<TSource1, TSource2, TResult>(
		source1: TSource1, source2: TSource2, customizer?: AssignCustomizer, thisArg?: any
	): LoDashImplicitObjectWrapper<TResult>,
		assign<TSource1, TSource2, TSource3, TResult>(
		source1: TSource1, source2: TSource2, source3: TSource3, customizer?: AssignCustomizer, thisArg?: any
	): LoDashImplicitObjectWrapper<TResult>,
		assign<TSource1, TSource2, TSource3, TSource4, TResult>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer?: AssignCustomizer, thisArg?: any
	): LoDashImplicitObjectWrapper<TResult>,
		assign(): LoDashImplicitObjectWrapper<T>,
		assign<TResult>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		assign<TSource, TResult>(
		source: TSource, customizer?: AssignCustomizer, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		assign<TSource1, TSource2, TResult>(
		source1: TSource1, source2: TSource2, customizer?: AssignCustomizer, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		assign<TSource1, TSource2, TSource3, TResult>(
		source1: TSource1, source2: TSource2, source3: TSource3, customizer?: AssignCustomizer, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		assign<TSource1, TSource2, TSource3, TSource4, TResult>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer?: AssignCustomizer, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		assign(): LoDashExplicitObjectWrapper<T>,
		assign<TResult>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		create<T, U>(prototype: T, properties?: U): T & U
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		create<U>(properties?: U): LoDashImplicitObjectWrapper<T & U>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		create<U>(properties?: U): LoDashExplicitObjectWrapper<T & U>
	}

	declare interface LoDashStatic {
		defaults<Obj, TResult>(object: Obj, ...sources: {
		
	}[]): TResult,
		defaults<Obj, S1, TResult>(object: Obj, source1: S1, ...sources: {
		
	}[]): TResult,
		defaults<Obj, S1, S2, TResult>(
		object: Obj, source1: S1, source2: S2, ...sources: {
		
	}[]
	): TResult,
		defaults<Obj, S1, S2, S3, TResult>(
		object: Obj, source1: S1, source2: S2, source3: S3, ...sources: {
		
	}[]
	): TResult,
		defaults<Obj, S1, S2, S3, S4, TResult>(
		object: Obj, source1: S1, source2: S2, source3: S3, source4: S4, ...sources: {
		
	}[]
	): TResult,
		defaults<TResult>(object: {
		
	}, ...sources: {
		
	}[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		defaults<S1, TResult>(
		source1: S1, ...sources: {
		
	}[]
	): LoDashImplicitObjectWrapper<TResult>,
		defaults<S1, S2, TResult>(
		source1: S1, source2: S2, ...sources: {
		
	}[]
	): LoDashImplicitObjectWrapper<TResult>,
		defaults<S1, S2, S3, TResult>(
		source1: S1, source2: S2, source3: S3, ...sources: {
		
	}[]
	): LoDashImplicitObjectWrapper<TResult>,
		defaults<S1, S2, S3, S4, TResult>(
		source1: S1, source2: S2, source3: S3, source4: S4, ...sources: {
		
	}[]
	): LoDashImplicitObjectWrapper<TResult>,
		defaults(): LoDashImplicitObjectWrapper<T>,
		defaults<TResult>(...sources: {
		
	}[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		defaults<S1, TResult>(
		source1: S1, ...sources: {
		
	}[]
	): LoDashExplicitObjectWrapper<TResult>,
		defaults<S1, S2, TResult>(
		source1: S1, source2: S2, ...sources: {
		
	}[]
	): LoDashExplicitObjectWrapper<TResult>,
		defaults<S1, S2, S3, TResult>(
		source1: S1, source2: S2, source3: S3, ...sources: {
		
	}[]
	): LoDashExplicitObjectWrapper<TResult>,
		defaults<S1, S2, S3, S4, TResult>(
		source1: S1, source2: S2, source3: S3, source4: S4, ...sources: {
		
	}[]
	): LoDashExplicitObjectWrapper<TResult>,
		defaults(): LoDashExplicitObjectWrapper<T>,
		defaults<TResult>(...sources: {
		
	}[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		defaultsDeep<T, TResult>(object: T, ...sources: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		defaultsDeep<TResult>(...sources: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		extend<TObject, TSource, TResult>(
		object: TObject, source: TSource, customizer?: AssignCustomizer, thisArg?: any
	): TResult,
		extend<TObject, TSource1, TSource2, TResult>(
		object: TObject, source1: TSource1, source2: TSource2, customizer?: AssignCustomizer, thisArg?: any
	): TResult,
		extend<TObject, TSource1, TSource2, TSource3, TResult>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer?: AssignCustomizer, thisArg?: any
	): TResult,
		extend<TObject, TSource1, TSource2, TSource3, TSource4, TResult>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer?: AssignCustomizer, thisArg?: any
	): TResult,
		extend<TObject>(object: TObject): TObject,
		extend<TObject, TResult>(object: TObject, ...otherArgs: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		extend<TSource, TResult>(
		source: TSource, customizer?: AssignCustomizer, thisArg?: any
	): LoDashImplicitObjectWrapper<TResult>,
		extend<TSource1, TSource2, TResult>(
		source1: TSource1, source2: TSource2, customizer?: AssignCustomizer, thisArg?: any
	): LoDashImplicitObjectWrapper<TResult>,
		extend<TSource1, TSource2, TSource3, TResult>(
		source1: TSource1, source2: TSource2, source3: TSource3, customizer?: AssignCustomizer, thisArg?: any
	): LoDashImplicitObjectWrapper<TResult>,
		extend<TSource1, TSource2, TSource3, TSource4, TResult>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer?: AssignCustomizer, thisArg?: any
	): LoDashImplicitObjectWrapper<TResult>,
		extend(): LoDashImplicitObjectWrapper<T>,
		extend<TResult>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		extend<TSource, TResult>(
		source: TSource, customizer?: AssignCustomizer, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		extend<TSource1, TSource2, TResult>(
		source1: TSource1, source2: TSource2, customizer?: AssignCustomizer, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		extend<TSource1, TSource2, TSource3, TResult>(
		source1: TSource1, source2: TSource2, source3: TSource3, customizer?: AssignCustomizer, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		extend<TSource1, TSource2, TSource3, TSource4, TResult>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer?: AssignCustomizer, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		extend(): LoDashExplicitObjectWrapper<T>,
		extend<TResult>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		findKey<TValues, TObject>(
		object: TObject, predicate?: DictionaryIterator<TValues, boolean>, thisArg?: any
	): string,
		findKey<TObject>(
		object: TObject, predicate?: ObjectIterator<any, boolean>, thisArg?: any
	): string,
		findKey<TObject>(object: TObject, predicate?: string, thisArg?: any): string,
		findKey<TWhere, TObject>(object: TObject, predicate?: TWhere): string
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		findKey<TValues>(
		predicate?: DictionaryIterator<TValues, boolean>, thisArg?: any
	): string,
		findKey(predicate?: ObjectIterator<any, boolean>, thisArg?: any): string,
		findKey(predicate?: string, thisArg?: any): string,
		findKey<TWhere>(predicate?: TWhere): string
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		findKey<TValues>(
		predicate?: DictionaryIterator<TValues, boolean>, thisArg?: any
	): LoDashExplicitWrapper<string>,
		findKey(
		predicate?: ObjectIterator<any, boolean>, thisArg?: any
	): LoDashExplicitWrapper<string>,
		findKey(predicate?: string, thisArg?: any): LoDashExplicitWrapper<string>,
		findKey<TWhere>(predicate?: TWhere): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		findLastKey<TValues, TObject>(
		object: TObject, predicate?: DictionaryIterator<TValues, boolean>, thisArg?: any
	): string,
		findLastKey<TObject>(
		object: TObject, predicate?: ObjectIterator<any, boolean>, thisArg?: any
	): string,
		findLastKey<TObject>(object: TObject, predicate?: string, thisArg?: any): string,
		findLastKey<TWhere, TObject>(object: TObject, predicate?: TWhere): string
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		findLastKey<TValues>(
		predicate?: DictionaryIterator<TValues, boolean>, thisArg?: any
	): string,
		findLastKey(predicate?: ObjectIterator<any, boolean>, thisArg?: any): string,
		findLastKey(predicate?: string, thisArg?: any): string,
		findLastKey<TWhere>(predicate?: TWhere): string
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		findLastKey<TValues>(
		predicate?: DictionaryIterator<TValues, boolean>, thisArg?: any
	): LoDashExplicitWrapper<string>,
		findLastKey(
		predicate?: ObjectIterator<any, boolean>, thisArg?: any
	): LoDashExplicitWrapper<string>,
		findLastKey(predicate?: string, thisArg?: any): LoDashExplicitWrapper<string>,
		findLastKey<TWhere>(predicate?: TWhere): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		forIn<T>(
		object: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, thisArg?: any
	): Dictionary<T>,
		forIn<T>(object: T, iteratee?: ObjectIterator<any, any>, thisArg?: any): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		forIn<TValue>(
		iteratee?: DictionaryIterator<TValue, any>, thisArg?: any
	): _.LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		forIn<TValue>(
		iteratee?: DictionaryIterator<TValue, any>, thisArg?: any
	): _.LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		forInRight<T>(
		object: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, thisArg?: any
	): Dictionary<T>,
		forInRight<T>(object: T, iteratee?: ObjectIterator<any, any>, thisArg?: any): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		forInRight<TValue>(
		iteratee?: DictionaryIterator<TValue, any>, thisArg?: any
	): _.LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		forInRight<TValue>(
		iteratee?: DictionaryIterator<TValue, any>, thisArg?: any
	): _.LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		forOwn<T>(
		object: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, thisArg?: any
	): Dictionary<T>,
		forOwn<T>(object: T, iteratee?: ObjectIterator<any, any>, thisArg?: any): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		forOwn<TValue>(
		iteratee?: DictionaryIterator<TValue, any>, thisArg?: any
	): _.LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		forOwn<TValue>(
		iteratee?: DictionaryIterator<TValue, any>, thisArg?: any
	): _.LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		forOwnRight<T>(
		object: Dictionary<T>, iteratee?: DictionaryIterator<T, any>, thisArg?: any
	): Dictionary<T>,
		forOwnRight<T>(object: T, iteratee?: ObjectIterator<any, any>, thisArg?: any): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		forOwnRight<TValue>(
		iteratee?: DictionaryIterator<TValue, any>, thisArg?: any
	): _.LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		forOwnRight<TValue>(
		iteratee?: DictionaryIterator<TValue, any>, thisArg?: any
	): _.LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		functions<T>(object: any): string[]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		functions(): _.LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		functions(): _.LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashStatic {
		get<TObject, TResult>(
		object: TObject, path: StringRepresentable | StringRepresentable[], defaultValue?: TResult
	): TResult,
		get<TResult>(
		object: any, path: StringRepresentable | StringRepresentable[], defaultValue?: TResult
	): TResult
	}

	declare interface LoDashImplicitWrapper<T> {
		get<TResult>(
		path: StringRepresentable | StringRepresentable[], defaultValue?: TResult
	): TResult
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		get<TResult>(
		path: StringRepresentable | StringRepresentable[], defaultValue?: TResult
	): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		get<TResult>(
		path: StringRepresentable | StringRepresentable[], defaultValue?: TResult
	): TResult
	}

	declare interface LoDashExplicitWrapper<T> {
		get<TResultWrapper>(
		path: StringRepresentable | StringRepresentable[], defaultValue?: any
	): TResultWrapper
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		get<TResultWrapper>(
		path: StringRepresentable | StringRepresentable[], defaultValue?: any
	): TResultWrapper
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		get<TResultWrapper>(
		path: StringRepresentable | StringRepresentable[], defaultValue?: any
	): TResultWrapper
	}

	declare interface LoDashStatic {
		has<T>(object: T, path: StringRepresentable | StringRepresentable[]): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		has(path: StringRepresentable | StringRepresentable[]): boolean
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		has(
		path: StringRepresentable | StringRepresentable[]
	): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		invert<T, TResult>(object: T, multiValue?: boolean): TResult,
		invert<TResult>(object: Object, multiValue?: boolean): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		invert<TResult>(multiValue?: boolean): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		invert<TResult>(multiValue?: boolean): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		keys(object?: any): string[]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		keys(): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		keys(): LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashStatic {
		keysIn(object?: any): string[]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		keysIn(): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		keysIn(): LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashStatic {
		mapKeys<T, TKey>(
		object: List<T>, iteratee?: ListIterator<T, TKey>, thisArg?: any
	): Dictionary<T>,
		mapKeys<T, TKey>(
		object: Dictionary<T>, iteratee?: DictionaryIterator<T, TKey>, thisArg?: any
	): Dictionary<T>,
		mapKeys<T, TObject>(object: List<T> | Dictionary<T>, iteratee?: TObject): Dictionary<T>,
		mapKeys<T>(
		object: List<T> | Dictionary<T>, iteratee?: string, thisArg?: any
	): Dictionary<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		mapKeys<TKey>(
		iteratee?: ListIterator<T, TKey>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<T>>,
		mapKeys<TObject>(iteratee?: TObject): LoDashImplicitObjectWrapper<Dictionary<T>>,
		mapKeys(iteratee?: string, thisArg?: any): LoDashImplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		mapKeys<TResult, TKey>(
		iteratee?: ListIterator<TResult, TKey> | DictionaryIterator<TResult, TKey>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<TResult>>,
		mapKeys<TResult, TObject>(
		iteratee?: TObject
	): LoDashImplicitObjectWrapper<Dictionary<TResult>>,
		mapKeys<TResult>(
		iteratee?: string, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<TResult>>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		mapKeys<TKey>(
		iteratee?: ListIterator<T, TKey>, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<T>>,
		mapKeys<TObject>(iteratee?: TObject): LoDashExplicitObjectWrapper<Dictionary<T>>,
		mapKeys(iteratee?: string, thisArg?: any): LoDashExplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		mapKeys<TResult, TKey>(
		iteratee?: ListIterator<TResult, TKey> | DictionaryIterator<TResult, TKey>, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<TResult>>,
		mapKeys<TResult, TObject>(
		iteratee?: TObject
	): LoDashExplicitObjectWrapper<Dictionary<TResult>>,
		mapKeys<TResult>(
		iteratee?: string, thisArg?: any
	): LoDashExplicitObjectWrapper<Dictionary<TResult>>
	}

	declare interface LoDashStatic {
		mapValues<T, TResult>(
		obj: Dictionary<T>, callback: ObjectIterator<T, TResult>, thisArg?: any
	): Dictionary<TResult>,
		mapValues<T>(obj: Dictionary<T>, where: Dictionary<T>): Dictionary<boolean>,
		mapValues<T, TMapped>(obj: T, pluck: string): TMapped,
		mapValues<T>(obj: T, callback: ObjectIterator<any, any>, thisArg?: any): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		mapValues<TValue, TResult>(
		callback: ObjectIterator<TValue, TResult>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<TResult>>,
		mapValues<TResult>(pluck: string): LoDashImplicitObjectWrapper<Dictionary<TResult>>,
		mapValues<TResult>(
		pluck: string, where: Dictionary<TResult>
	): LoDashImplicitArrayWrapper<Dictionary<boolean>>,
		mapValues<TResult>(where: Dictionary<TResult>): LoDashImplicitArrayWrapper<boolean>
	}

	declare interface MergeCustomizer {
		(value: any, srcValue: any, key?: string, object?: Object, source?: Object): any
	}

	declare interface LoDashStatic {
		merge<TObject, TSource>(
		object: TObject, source: TSource, customizer?: MergeCustomizer, thisArg?: any
	): TObject & TSource,
		merge<TObject, TSource1, TSource2>(
		object: TObject, source1: TSource1, source2: TSource2, customizer?: MergeCustomizer, thisArg?: any
	): TObject & TSource1 & TSource2,
		merge<TObject, TSource1, TSource2, TSource3>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer?: MergeCustomizer, thisArg?: any
	): TObject & TSource1 & TSource2 & TSource3,
		merge<TObject, TSource1, TSource2, TSource3, TSource4>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer?: MergeCustomizer, thisArg?: any
	): TObject & TSource1 & TSource2 & TSource3 & TSource4,
		merge<TResult>(object: any, ...otherArgs: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		merge<TSource>(
		source: TSource, customizer?: MergeCustomizer, thisArg?: any
	): LoDashImplicitObjectWrapper<T & TSource>,
		merge<TSource1, TSource2>(
		source1: TSource1, source2: TSource2, customizer?: MergeCustomizer, thisArg?: any
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2>,
		merge<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3, customizer?: MergeCustomizer, thisArg?: any
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		merge<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer?: MergeCustomizer, thisArg?: any
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		merge<TResult>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		methods<T>(object: any): string[]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		methods(): _.LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		methods(): _.LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashStatic {
		omit<TResult, T>(
		object: T, predicate: ObjectIterator<any, boolean>, thisArg?: any
	): TResult,
		omit<TResult, T>(
		object: T, ...predicate: (StringRepresentable | StringRepresentable[])[]
	): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		omit<TResult>(
		predicate: ObjectIterator<any, boolean>, thisArg?: any
	): LoDashImplicitObjectWrapper<TResult>,
		omit<TResult>(
		...predicate: (StringRepresentable | StringRepresentable[])[]
	): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		omit<TResult>(
		predicate: ObjectIterator<any, boolean>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		omit<TResult>(
		...predicate: (StringRepresentable | StringRepresentable[])[]
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		pairs<T>(object?: T): any[][],
		pairs<T, TResult>(object?: T): TResult[][]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		pairs<TResult>(): LoDashImplicitArrayWrapper<TResult[]>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		pairs<TResult>(): LoDashExplicitArrayWrapper<TResult[]>
	}

	declare interface LoDashStatic {
		pick<TResult, T>(
		object: T, predicate: ObjectIterator<any, boolean>, thisArg?: any
	): TResult,
		pick<TResult, T>(
		object: T, ...predicate: (StringRepresentable | StringRepresentable[])[]
	): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		pick<TResult>(
		predicate: ObjectIterator<any, boolean>, thisArg?: any
	): LoDashImplicitObjectWrapper<TResult>,
		pick<TResult>(
		...predicate: (StringRepresentable | StringRepresentable[])[]
	): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		pick<TResult>(
		predicate: ObjectIterator<any, boolean>, thisArg?: any
	): LoDashExplicitObjectWrapper<TResult>,
		pick<TResult>(
		...predicate: (StringRepresentable | StringRepresentable[])[]
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		result<TObject, TResult>(
		object: TObject, path: StringRepresentable | StringRepresentable[], defaultValue?: TResult | ((...args: any[]) => TResult)
	): TResult,
		result<TResult>(
		object: any, path: StringRepresentable | StringRepresentable[], defaultValue?: TResult | ((...args: any[]) => TResult)
	): TResult
	}

	declare interface LoDashImplicitWrapper<T> {
		result<TResult>(
		path: StringRepresentable | StringRepresentable[], defaultValue?: TResult | ((...args: any[]) => TResult)
	): TResult
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		result<TResult>(
		path: StringRepresentable | StringRepresentable[], defaultValue?: TResult | ((...args: any[]) => TResult)
	): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		result<TResult>(
		path: StringRepresentable | StringRepresentable[], defaultValue?: TResult | ((...args: any[]) => TResult)
	): TResult
	}

	declare interface LoDashExplicitWrapper<T> {
		result<TResultWrapper>(
		path: StringRepresentable | StringRepresentable[], defaultValue?: any
	): TResultWrapper
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		result<TResultWrapper>(
		path: StringRepresentable | StringRepresentable[], defaultValue?: any
	): TResultWrapper
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		result<TResultWrapper>(
		path: StringRepresentable | StringRepresentable[], defaultValue?: any
	): TResultWrapper
	}

	declare interface LoDashStatic {
		set<TResult>(
		object: Object, path: StringRepresentable | StringRepresentable[], value: any
	): TResult,
		set<V, TResult>(
		object: Object, path: StringRepresentable | StringRepresentable[], value: V
	): TResult,
		set<O, V, TResult>(
		object: O, path: StringRepresentable | StringRepresentable[], value: V
	): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		set<TResult>(
		path: StringRepresentable | StringRepresentable[], value: any
	): LoDashImplicitObjectWrapper<TResult>,
		set<V, TResult>(
		path: StringRepresentable | StringRepresentable[], value: V
	): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		set<TResult>(
		path: StringRepresentable | StringRepresentable[], value: any
	): LoDashExplicitObjectWrapper<TResult>,
		set<V, TResult>(
		path: StringRepresentable | StringRepresentable[], value: V
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		transform<T, TResult>(
		object: T[], iteratee?: MemoVoidArrayIterator<T, TResult[]>, accumulator?: TResult[], thisArg?: any
	): TResult[],
		transform<T, TResult>(
		object: T[], iteratee?: MemoVoidArrayIterator<T, Dictionary<TResult>>, accumulator?: Dictionary<TResult>, thisArg?: any
	): Dictionary<TResult>,
		transform<T, TResult>(
		object: Dictionary<T>, iteratee?: MemoVoidDictionaryIterator<T, Dictionary<TResult>>, accumulator?: Dictionary<TResult>, thisArg?: any
	): Dictionary<TResult>,
		transform<T, TResult>(
		object: Dictionary<T>, iteratee?: MemoVoidDictionaryIterator<T, TResult[]>, accumulator?: TResult[], thisArg?: any
	): TResult[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		transform<TResult>(
		iteratee?: MemoVoidArrayIterator<T, TResult[]>, accumulator?: TResult[], thisArg?: any
	): LoDashImplicitArrayWrapper<TResult>,
		transform<TResult>(
		iteratee?: MemoVoidArrayIterator<T, Dictionary<TResult>>, accumulator?: Dictionary<TResult>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<TResult>>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		transform<T, TResult>(
		iteratee?: MemoVoidDictionaryIterator<T, Dictionary<TResult>>, accumulator?: Dictionary<TResult>, thisArg?: any
	): LoDashImplicitObjectWrapper<Dictionary<TResult>>,
		transform<T, TResult>(
		iteratee?: MemoVoidDictionaryIterator<T, TResult[]>, accumulator?: TResult[], thisArg?: any
	): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		values<T>(object?: any): T[]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		values<T>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		values<T>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		valuesIn<T>(object?: any): T[]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		valuesIn<T>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		valuesIn<T>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		camelCase(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		camelCase(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		camelCase(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		capitalize(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		capitalize(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		capitalize(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		deburr(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		deburr(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		deburr(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		endsWith(string?: string, target?: string, position?: number): boolean
	}

	declare interface LoDashImplicitWrapper<T> {
		endsWith(target?: string, position?: number): boolean
	}

	declare interface LoDashExplicitWrapper<T> {
		endsWith(target?: string, position?: number): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		escape(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		escape(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		escape(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		escapeRegExp(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		escapeRegExp(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		escapeRegExp(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		kebabCase(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		kebabCase(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		kebabCase(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		pad(string?: string, length?: number, chars?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		pad(length?: number, chars?: string): string
	}

	declare interface LoDashExplicitWrapper<T> {
		pad(length?: number, chars?: string): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		padLeft(string?: string, length?: number, chars?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		padLeft(length?: number, chars?: string): string
	}

	declare interface LoDashExplicitWrapper<T> {
		padLeft(length?: number, chars?: string): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		padRight(string?: string, length?: number, chars?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		padRight(length?: number, chars?: string): string
	}

	declare interface LoDashExplicitWrapper<T> {
		padRight(length?: number, chars?: string): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		parseInt(string: string, radix?: number): number
	}

	declare interface LoDashImplicitWrapper<T> {
		parseInt(radix?: number): number
	}

	declare interface LoDashExplicitWrapper<T> {
		parseInt(radix?: number): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		repeat(string?: string, n?: number): string
	}

	declare interface LoDashImplicitWrapper<T> {
		repeat(n?: number): string
	}

	declare interface LoDashExplicitWrapper<T> {
		repeat(n?: number): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		snakeCase(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		snakeCase(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		snakeCase(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashImplicitWrapper<T> {
		split(
		separator?: RegExp | string, limit?: number
	): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitWrapper<T> {
		split(
		separator?: RegExp | string, limit?: number
	): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashStatic {
		startCase(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		startCase(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		startCase(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		startsWith(string?: string, target?: string, position?: number): boolean
	}

	declare interface LoDashImplicitWrapper<T> {
		startsWith(target?: string, position?: number): boolean
	}

	declare interface LoDashExplicitWrapper<T> {
		startsWith(target?: string, position?: number): LoDashExplicitWrapper<boolean>
	}

	declare interface TemplateOptions {
		sourceURL?: string
	}

	declare interface TemplateExecutor {
		(data?: Object): string,
		source: string
	}

	declare interface LoDashStatic {
		template(string: string, options?: TemplateOptions): TemplateExecutor
	}

	declare interface LoDashImplicitWrapper<T> {
		template(options?: TemplateOptions): TemplateExecutor
	}

	declare interface LoDashExplicitWrapper<T> {
		template(options?: TemplateOptions): LoDashExplicitObjectWrapper<TemplateExecutor>
	}

	declare interface LoDashStatic {
		trim(string?: string, chars?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		trim(chars?: string): string
	}

	declare interface LoDashExplicitWrapper<T> {
		trim(chars?: string): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		trimLeft(string?: string, chars?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		trimLeft(chars?: string): string
	}

	declare interface LoDashExplicitWrapper<T> {
		trimLeft(chars?: string): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		trimRight(string?: string, chars?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		trimRight(chars?: string): string
	}

	declare interface LoDashExplicitWrapper<T> {
		trimRight(chars?: string): LoDashExplicitWrapper<string>
	}

	declare interface TruncOptions {
		length?: number,
		omission?: string,
		separator?: string | RegExp
	}

	declare interface LoDashStatic {
		trunc(string?: string, options?: TruncOptions | number): string
	}

	declare interface LoDashImplicitWrapper<T> {
		trunc(options?: TruncOptions | number): string
	}

	declare interface LoDashExplicitWrapper<T> {
		trunc(options?: TruncOptions | number): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		unescape(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		unescape(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		unescape(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		words(string?: string, pattern?: string | RegExp): string[]
	}

	declare interface LoDashImplicitWrapper<T> {
		words(pattern?: string | RegExp): string[]
	}

	declare interface LoDashExplicitWrapper<T> {
		words(pattern?: string | RegExp): LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashStatic {
		attempt<TResult>(func: (...args: any[]) => TResult, ...args: any[]): TResult | Error
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		attempt<TResult>(...args: any[]): TResult | Error
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		attempt<TResult>(...args: any[]): LoDashExplicitObjectWrapper<TResult | Error>
	}

	declare interface LoDashStatic {
		callback<TResult>(func: Function, thisArg?: any): (...args: any[]) => TResult,
		callback<TResult>(func: string, thisArg?: any): (object: any) => TResult,
		callback(func: Object, thisArg?: any): (object: any) => boolean,
		callback<TResult>(): (value: TResult) => TResult
	}

	declare interface LoDashImplicitWrapper<T> {
		callback<TResult>(thisArg?: any): LoDashImplicitObjectWrapper<(object: any) => TResult>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		callback(thisArg?: any): LoDashImplicitObjectWrapper<(object: any) => boolean>,
		callback<TResult>(
		thisArg?: any
	): LoDashImplicitObjectWrapper<(...args: any[]) => TResult>
	}

	declare interface LoDashExplicitWrapper<T> {
		callback<TResult>(thisArg?: any): LoDashExplicitObjectWrapper<(object: any) => TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		callback(thisArg?: any): LoDashExplicitObjectWrapper<(object: any) => boolean>,
		callback<TResult>(
		thisArg?: any
	): LoDashExplicitObjectWrapper<(...args: any[]) => TResult>
	}

	declare interface LoDashStatic {
		constant<T>(value: T): () => T
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		constant<TResult>(): LoDashImplicitObjectWrapper<() => TResult>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		constant<TResult>(): LoDashExplicitObjectWrapper<() => TResult>
	}

	declare interface LoDashStatic {
		identity<T>(value?: T): T
	}

	declare interface LoDashImplicitWrapper<T> {
		identity(): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		identity(): T[]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		identity(): T
	}

	declare interface LoDashExplicitWrapper<T> {
		identity(): LoDashExplicitWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		identity(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		identity(): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		iteratee<TResult>(func: Function, thisArg?: any): (...args: any[]) => TResult,
		iteratee<TResult>(func: string, thisArg?: any): (object: any) => TResult,
		iteratee(func: Object, thisArg?: any): (object: any) => boolean,
		iteratee<TResult>(): (value: TResult) => TResult
	}

	declare interface LoDashImplicitWrapper<T> {
		iteratee<TResult>(thisArg?: any): LoDashImplicitObjectWrapper<(object: any) => TResult>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		iteratee(thisArg?: any): LoDashImplicitObjectWrapper<(object: any) => boolean>,
		iteratee<TResult>(
		thisArg?: any
	): LoDashImplicitObjectWrapper<(...args: any[]) => TResult>
	}

	declare interface LoDashExplicitWrapper<T> {
		iteratee<TResult>(thisArg?: any): LoDashExplicitObjectWrapper<(object: any) => TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		iteratee(thisArg?: any): LoDashExplicitObjectWrapper<(object: any) => boolean>,
		iteratee<TResult>(
		thisArg?: any
	): LoDashExplicitObjectWrapper<(...args: any[]) => TResult>
	}

	declare interface LoDashStatic {
		matches<T>(source: T): (value: any) => boolean,
		matches<T, V>(source: T): (value: V) => boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		matches<V>(): LoDashImplicitObjectWrapper<(value: V) => boolean>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		matches<V>(): LoDashExplicitObjectWrapper<(value: V) => boolean>
	}

	declare interface LoDashStatic {
		matchesProperty<T>(
		path: StringRepresentable | StringRepresentable[], srcValue: T
	): (value: any) => boolean,
		matchesProperty<T, V>(
		path: StringRepresentable | StringRepresentable[], srcValue: T
	): (value: V) => boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		matchesProperty<SrcValue>(
		srcValue: SrcValue
	): LoDashImplicitObjectWrapper<(value: any) => boolean>,
		matchesProperty<SrcValue, Value>(
		srcValue: SrcValue
	): LoDashImplicitObjectWrapper<(value: Value) => boolean>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		matchesProperty<SrcValue>(
		srcValue: SrcValue
	): LoDashExplicitObjectWrapper<(value: any) => boolean>,
		matchesProperty<SrcValue, Value>(
		srcValue: SrcValue
	): LoDashExplicitObjectWrapper<(value: Value) => boolean>
	}

	declare interface LoDashStatic {
		method<TObject, TResult>(
		path: string | StringRepresentable[], ...args: any[]
	): (object: TObject) => TResult,
		method<TResult>(
		path: string | StringRepresentable[], ...args: any[]
	): (object: any) => TResult
	}

	declare interface LoDashImplicitWrapper<T> {
		method<TObject, TResult>(
		...args: any[]
	): LoDashImplicitObjectWrapper<(object: TObject) => TResult>,
		method<TResult>(...args: any[]): LoDashImplicitObjectWrapper<(object: any) => TResult>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		method<TObject, TResult>(
		...args: any[]
	): LoDashImplicitObjectWrapper<(object: TObject) => TResult>,
		method<TResult>(...args: any[]): LoDashImplicitObjectWrapper<(object: any) => TResult>
	}

	declare interface LoDashExplicitWrapper<T> {
		method<TObject, TResult>(
		...args: any[]
	): LoDashExplicitObjectWrapper<(object: TObject) => TResult>,
		method<TResult>(...args: any[]): LoDashExplicitObjectWrapper<(object: any) => TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		method<TObject, TResult>(
		...args: any[]
	): LoDashExplicitObjectWrapper<(object: TObject) => TResult>,
		method<TResult>(...args: any[]): LoDashExplicitObjectWrapper<(object: any) => TResult>
	}

	declare interface LoDashStatic {
		methodOf<TObject, TResult>(
		object: TObject, ...args: any[]
	): (path: StringRepresentable | StringRepresentable[]) => TResult,
		methodOf<TResult>(
		object: {
		
	}, ...args: any[]
	): (path: StringRepresentable | StringRepresentable[]) => TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		methodOf<TResult>(
		...args: any[]
	): LoDashImplicitObjectWrapper<(path: StringRepresentable | StringRepresentable[]) => TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		methodOf<TResult>(
		...args: any[]
	): LoDashExplicitObjectWrapper<(path: StringRepresentable | StringRepresentable[]) => TResult>
	}

	declare interface MixinOptions {
		chain?: boolean
	}

	declare interface LoDashStatic {
		mixin<TResult, TObject>(
		object: TObject, source: Dictionary<Function>, options?: MixinOptions
	): TResult,
		mixin<TResult>(source: Dictionary<Function>, options?: MixinOptions): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		mixin<TResult>(
		source: Dictionary<Function>, options?: MixinOptions
	): LoDashImplicitObjectWrapper<TResult>,
		mixin<TResult>(options?: MixinOptions): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		mixin<TResult>(
		source: Dictionary<Function>, options?: MixinOptions
	): LoDashExplicitObjectWrapper<TResult>,
		mixin<TResult>(options?: MixinOptions): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		noConflict(): typeof _
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		noConflict(): typeof _
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		noConflict(): LoDashExplicitObjectWrapper<typeof _>
	}

	declare interface LoDashStatic {
		noop(...args: any[]): void
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		noop(...args: any[]): void
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		noop(...args: any[]): _.LoDashExplicitWrapper<void>
	}

	declare interface LoDashStatic {
		property<TObj, TResult>(
		path: StringRepresentable | StringRepresentable[]
	): (obj: TObj) => TResult
	}

	declare interface LoDashImplicitWrapper<T> {
		property<TObj, TResult>(): LoDashImplicitObjectWrapper<(obj: TObj) => TResult>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		property<TObj, TResult>(): LoDashImplicitObjectWrapper<(obj: TObj) => TResult>
	}

	declare interface LoDashExplicitWrapper<T> {
		property<TObj, TResult>(): LoDashExplicitObjectWrapper<(obj: TObj) => TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		property<TObj, TResult>(): LoDashExplicitObjectWrapper<(obj: TObj) => TResult>
	}

	declare interface LoDashStatic {
		propertyOf<T>(object: T): (path: string | string[]) => any
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		propertyOf(): LoDashImplicitObjectWrapper<(path: string | string[]) => any>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		propertyOf(): LoDashExplicitObjectWrapper<(path: string | string[]) => any>
	}

	declare interface LoDashStatic {
		range(start: number, end: number, step?: number): number[],
		range(end: number, step?: number): number[]
	}

	declare interface LoDashImplicitWrapper<T> {
		range(end?: number, step?: number): LoDashImplicitArrayWrapper<number>
	}

	declare interface LoDashExplicitWrapper<T> {
		range(end?: number, step?: number): LoDashExplicitArrayWrapper<number>
	}

	declare interface LoDashStatic {
		runInContext(context?: Object): typeof _
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		runInContext(): typeof _
	}

	declare interface LoDashStatic {
		times<TResult>(
		n: number, iteratee: (num: number) => TResult, thisArg?: any
	): TResult[],
		times(n: number): number[]
	}

	declare interface LoDashImplicitWrapper<T> {
		times<TResult>(
		iteratee: (num: number) => TResult, thisArgs?: any
	): LoDashImplicitArrayWrapper<TResult>,
		times(): LoDashImplicitArrayWrapper<number>
	}

	declare interface LoDashExplicitWrapper<T> {
		times<TResult>(
		iteratee: (num: number) => TResult, thisArgs?: any
	): LoDashExplicitArrayWrapper<TResult>,
		times(): LoDashExplicitArrayWrapper<number>
	}

	declare interface LoDashStatic {
		uniqueId(prefix?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		uniqueId(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		uniqueId(): LoDashExplicitWrapper<string>
	}

	declare interface ListIterator<T, TResult> {
		(value: T, index: number, collection: List<T>): TResult
	}

	declare interface DictionaryIterator<T, TResult> {
		(value: T, key?: string, collection?: Dictionary<T>): TResult
	}

	declare interface NumericDictionaryIterator<T, TResult> {
		(value: T, key?: number, collection?: Dictionary<T>): TResult
	}

	declare interface ObjectIterator<T, TResult> {
		(element: T, key?: string, collection?: any): TResult
	}

	declare interface StringIterator<TResult> {
		(char: string, index?: number, string?: string): TResult
	}

	declare interface MemoVoidIterator<T, TResult> {
		(prev: TResult, curr: T, indexOrKey?: any, list?: T[]): void
	}

	declare interface MemoIterator<T, TResult> {
		(prev: TResult, curr: T, indexOrKey?: any, list?: T[]): TResult
	}

	declare interface MemoVoidArrayIterator<T, TResult> {
		(acc: TResult, curr: T, index?: number, arr?: T[]): void
	}

	declare interface MemoVoidDictionaryIterator<T, TResult> {
		(acc: TResult, curr: T, key?: string, dict?: Dictionary<T>): void
	}

	declare interface List<T> {
		[index: number]: T,
		length: number
	}

	declare interface Dictionary<T> {
		[index: string]: T
	}

	declare interface NumericDictionary<T> {
		[index: number]: T
	}

	declare interface StringRepresentable {
		toString(): string
	}

	declare interface Cancelable {
		cancel(): void
	}

			
}

declare module 'lodash' {
					declare module.exports: undefined


}