

declare module 'lodash' {
		declare interface Set<T> {
		
	}

	declare interface Map<K, V> {
		
	}

	declare interface WeakSet<T> {
		
	}

	declare interface WeakMap<K, V> {
		
	}

			declare module.exports: LoDashStatic


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

	declare interface MapCacheConstructor {
		new (): MapCache
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
		pop(): LoDashExplicitObjectWrapper<T>,
		push(...items: T[]): LoDashExplicitArrayWrapper<T>,
		shift(): LoDashExplicitObjectWrapper<T>,
		sort(compareFn?: (a: T, b: T) => number): LoDashExplicitArrayWrapper<T>,
		splice(start: number): LoDashExplicitArrayWrapper<T>,
		splice(
		start: number, deleteCount: number, ...items: any[]
	): LoDashExplicitArrayWrapper<T>,
		unshift(...items: T[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitNumberArrayWrapper {
		
	}

	declare interface LoDashExplicitNumberArrayWrapper {
		
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
		concat<T>(array: T[] | List<T>, ...values: (T | T[] | List<T>)[]): T[]
	}

	declare interface LoDashStatic {
		difference<T>(array: T[] | List<T>, ...values: Array<T[] | List<T>>): T[]
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
		differenceBy<T>(
		array: T[] | List<T>, values?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): T[],
		differenceBy<T, W>(array: T[] | List<T>, values?: T[] | List<T>, iteratee?: W): T[],
		differenceBy<T>(
		array: T[] | List<T>, values1?: T[] | List<T>, values2?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): T[],
		differenceBy<T, W>(
		array: T[] | List<T>, values1?: T[] | List<T>, values2?: T[] | List<T>, iteratee?: W
	): T[],
		differenceBy<T>(
		array: T[] | List<T>, values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): T[],
		differenceBy<T, W>(
		array: T[] | List<T>, values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, iteratee?: W
	): T[],
		differenceBy<T, W>(
		array: T[] | List<T>, values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, iteratee?: W
	): T[],
		differenceBy<T>(
		array: T[] | List<T>, values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): T[],
		differenceBy<T>(
		array: T[] | List<T>, values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, values5?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): T[],
		differenceBy<T, W>(
		array: T[] | List<T>, values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, values5?: T[] | List<T>, iteratee?: W
	): T[],
		differenceBy<T>(array: T[] | List<T>, ...values: any[]): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		differenceBy<T>(
		values?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T, W>(values?: T[] | List<T>, iteratee?: W): LoDashImplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, values5?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, values5?: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T>(...values: any[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		differenceBy<T>(
		values?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T, W>(values?: T[] | List<T>, iteratee?: W): LoDashImplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, values5?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, values5?: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		differenceBy<T>(...values: any[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		differenceBy<T>(
		values?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T, W>(values?: T[] | List<T>, iteratee?: W): LoDashExplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, values5?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, values5?: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T>(...values: any[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		differenceBy<T>(
		values?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T, W>(values?: T[] | List<T>, iteratee?: W): LoDashExplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, values5?: T[] | List<T>, iteratee?: ((value: T) => any) | string
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T, W>(
		values1?: T[] | List<T>, values2?: T[] | List<T>, values3?: T[] | List<T>, values4?: T[] | List<T>, values5?: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		differenceBy<T>(...values: any[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		differenceWith(array: any[] | List<any>, ...values: any[]): any[]
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
		array: List<TValue>, predicate?: ListIterator<TValue, boolean>
	): TValue[],
		dropRightWhile<TValue>(array: List<TValue>, predicate?: string): TValue[],
		dropRightWhile<TWhere, TValue>(array: List<TValue>, predicate?: TWhere): TValue[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		dropRightWhile(predicate?: ListIterator<T, boolean>): LoDashImplicitArrayWrapper<T>,
		dropRightWhile(predicate?: string): LoDashImplicitArrayWrapper<T>,
		dropRightWhile<TWhere>(predicate?: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		dropRightWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>
	): LoDashImplicitArrayWrapper<TValue>,
		dropRightWhile<TValue>(predicate?: string): LoDashImplicitArrayWrapper<TValue>,
		dropRightWhile<TWhere, TValue>(predicate?: TWhere): LoDashImplicitArrayWrapper<TValue>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		dropRightWhile(predicate?: ListIterator<T, boolean>): LoDashExplicitArrayWrapper<T>,
		dropRightWhile(predicate?: string): LoDashExplicitArrayWrapper<T>,
		dropRightWhile<TWhere>(predicate?: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		dropRightWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>
	): LoDashExplicitArrayWrapper<TValue>,
		dropRightWhile<TValue>(predicate?: string): LoDashExplicitArrayWrapper<TValue>,
		dropRightWhile<TWhere, TValue>(predicate?: TWhere): LoDashExplicitArrayWrapper<TValue>
	}

	declare interface LoDashStatic {
		dropWhile<TValue>(
		array: List<TValue>, predicate?: ListIterator<TValue, boolean>
	): TValue[],
		dropWhile<TValue>(array: List<TValue>, predicate?: string): TValue[],
		dropWhile<TWhere, TValue>(array: List<TValue>, predicate?: TWhere): TValue[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		dropWhile(predicate?: ListIterator<T, boolean>): LoDashImplicitArrayWrapper<T>,
		dropWhile(predicate?: string): LoDashImplicitArrayWrapper<T>,
		dropWhile<TWhere>(predicate?: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		dropWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>
	): LoDashImplicitArrayWrapper<TValue>,
		dropWhile<TValue>(predicate?: string): LoDashImplicitArrayWrapper<TValue>,
		dropWhile<TWhere, TValue>(predicate?: TWhere): LoDashImplicitArrayWrapper<TValue>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		dropWhile(predicate?: ListIterator<T, boolean>): LoDashExplicitArrayWrapper<T>,
		dropWhile(predicate?: string): LoDashExplicitArrayWrapper<T>,
		dropWhile<TWhere>(predicate?: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		dropWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>
	): LoDashExplicitArrayWrapper<TValue>,
		dropWhile<TValue>(predicate?: string): LoDashExplicitArrayWrapper<TValue>,
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
		findIndex<T>(
		array: List<T>, predicate?: ListIterator<T, boolean>, fromIndex?: number
	): number,
		findIndex<T>(array: List<T>, predicate?: string, fromIndex?: number): number,
		findIndex<W, T>(array: List<T>, predicate?: W, fromIndex?: number): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		findIndex(predicate?: ListIterator<T, boolean>, fromIndex?: number): number,
		findIndex(predicate?: string, fromIndex?: number): number,
		findIndex<W>(predicate?: W, fromIndex?: number): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		findIndex<TResult>(
		predicate?: ListIterator<TResult, boolean>, fromIndex?: number
	): number,
		findIndex(predicate?: string, fromIndex?: number): number,
		findIndex<W>(predicate?: W, fromIndex?: number): number
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		findIndex(
		predicate?: ListIterator<T, boolean>, fromIndex?: number
	): LoDashExplicitWrapper<number>,
		findIndex(predicate?: string, fromIndex?: number): LoDashExplicitWrapper<number>,
		findIndex<W>(predicate?: W, fromIndex?: number): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		findIndex<TResult>(
		predicate?: ListIterator<TResult, boolean>, fromIndex?: number
	): LoDashExplicitWrapper<number>,
		findIndex(predicate?: string, fromIndex?: number): LoDashExplicitWrapper<number>,
		findIndex<W>(predicate?: W, fromIndex?: number): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		findLastIndex<T>(
		array: List<T>, predicate?: ListIterator<T, boolean>, fromIndex?: number
	): number,
		findLastIndex<T>(array: List<T>, predicate?: string, fromIndex?: number): number,
		findLastIndex<W, T>(array: List<T>, predicate?: W, fromIndex?: number): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		findLastIndex(predicate?: ListIterator<T, boolean>, fromIndex?: number): number,
		findLastIndex(predicate?: string, fromIndex?: number): number,
		findLastIndex<W>(predicate?: W, fromIndex?: number): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		findLastIndex<TResult>(
		predicate?: ListIterator<TResult, boolean>, fromIndex?: number
	): number,
		findLastIndex(predicate?: string, fromIndex?: number): number,
		findLastIndex<W>(predicate?: W, fromIndex?: number): number
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		findLastIndex(
		predicate?: ListIterator<T, boolean>, fromIndex?: number
	): LoDashExplicitWrapper<number>,
		findLastIndex(predicate?: string, fromIndex?: number): LoDashExplicitWrapper<number>,
		findLastIndex<W>(predicate?: W, fromIndex?: number): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		findLastIndex<TResult>(
		predicate?: ListIterator<TResult, boolean>, fromIndex?: number
	): LoDashExplicitWrapper<number>,
		findLastIndex(predicate?: string, fromIndex?: number): LoDashExplicitWrapper<number>,
		findLastIndex<W>(predicate?: W, fromIndex?: number): LoDashExplicitWrapper<number>
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
		flattenDepth<T>(array: ListOfRecursiveArraysOrValues<T>, depth?: number): T[]
	}

	declare interface LoDashStatic {
		fromPairs<T>(array: List<[_.StringRepresentable, T]>): Dictionary<T>,
		fromPairs(array: List<any[]>): Dictionary<any>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		fromPairs(): LoDashImplicitObjectWrapper<any>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		fromPairs(): LoDashExplicitObjectWrapper<any>
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
		intersectionBy(array: any[] | List<any>, ...values: any[]): any[]
	}

	declare interface LoDashStatic {
		intersectionWith(array: any[] | List<any>, ...values: any[]): any[]
	}

	declare interface LoDashStatic {
		join(array: List<any>, separator?: string): string
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
		pullAll(array: any[] | List<any>, ...values: any[]): any[]
	}

	declare interface LoDashStatic {
		pullAllBy(array: any[] | List<any>, ...values: any[]): any[]
	}

	declare interface LoDashStatic {
		reverse(array: any[] | List<any>, ...values: any[]): any[]
	}

	declare interface LoDashStatic {
		sortedIndexOf<T>(array: List<T>, value: T): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sortedIndexOf(value: T): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sortedIndexOf<TValue>(value: TValue): number
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sortedIndexOf(value: T): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sortedIndexOf<TValue>(value: TValue): LoDashExplicitWrapper<number>
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
		remove<T>(array: List<T>, predicate?: ListIterator<T, boolean>): T[],
		remove<T>(array: List<T>, predicate?: string): T[],
		remove<W, T>(array: List<T>, predicate?: W): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		remove(predicate?: ListIterator<T, boolean>): LoDashImplicitArrayWrapper<T>,
		remove(predicate?: string): LoDashImplicitArrayWrapper<T>,
		remove<W>(predicate?: W): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		remove<TResult>(
		predicate?: ListIterator<TResult, boolean>
	): LoDashImplicitArrayWrapper<TResult>,
		remove<TResult>(predicate?: string): LoDashImplicitArrayWrapper<TResult>,
		remove<W, TResult>(predicate?: W): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		remove(predicate?: ListIterator<T, boolean>): LoDashExplicitArrayWrapper<T>,
		remove(predicate?: string): LoDashExplicitArrayWrapper<T>,
		remove<W>(predicate?: W): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		remove<TResult>(
		predicate?: ListIterator<TResult, boolean>
	): LoDashExplicitArrayWrapper<TResult>,
		remove<TResult>(predicate?: string): LoDashExplicitArrayWrapper<TResult>,
		remove<W, TResult>(predicate?: W): LoDashExplicitArrayWrapper<TResult>
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
		slice<T>(array: T[], start?: number, end?: number): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		slice(start?: number, end?: number): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		slice(start?: number, end?: number): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		sortedIndex<T, TSort>(array: List<T>, value: T): number,
		sortedIndex<T>(array: List<T>, value: T): number,
		sortedIndex<T>(array: List<T>, value: T): number,
		sortedIndex<W, T>(array: List<T>, value: T): number,
		sortedIndex<T>(array: List<T>, value: T): number
	}

	declare interface LoDashImplicitWrapper<T> {
		sortedIndex<TSort>(value: string): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sortedIndex<TSort>(value: T): number,
		sortedIndex(value: T): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sortedIndex<T, TSort>(value: T): number,
		sortedIndex<T>(value: T): number,
		sortedIndex<W, T>(value: T): number
	}

	declare interface LoDashExplicitWrapper<T> {
		sortedIndex<TSort>(value: string): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sortedIndex<TSort>(value: T): LoDashExplicitWrapper<number>,
		sortedIndex(value: T): LoDashExplicitWrapper<number>,
		sortedIndex<W>(value: T): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sortedIndex<T, TSort>(value: T): LoDashExplicitWrapper<number>,
		sortedIndex<T>(value: T): LoDashExplicitWrapper<number>,
		sortedIndex<W, T>(value: T): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		sortedIndexBy<T, TSort>(array: List<T>, value: T, iteratee: (x: T) => TSort): number,
		sortedIndexBy<T>(array: List<T>, value: T, iteratee: (x: T) => any): number,
		sortedIndexBy<T>(array: List<T>, value: T, iteratee: string): number,
		sortedIndexBy<W, T>(array: List<T>, value: T, iteratee: W): number,
		sortedIndexBy<T>(array: List<T>, value: T, iteratee: Object): number
	}

	declare interface LoDashImplicitWrapper<T> {
		sortedIndexBy<TSort>(value: string, iteratee: (x: string) => TSort): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sortedIndexBy<TSort>(value: T, iteratee: (x: T) => TSort): number,
		sortedIndexBy(value: T, iteratee: string): number,
		sortedIndexBy<W>(value: T, iteratee: W): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sortedIndexBy<T, TSort>(value: T, iteratee: (x: T) => TSort): number,
		sortedIndexBy<T>(value: T, iteratee: (x: T) => any): number,
		sortedIndexBy<T>(value: T, iteratee: string): number,
		sortedIndexBy<W, T>(value: T, iteratee: W): number,
		sortedIndexBy<T>(value: T, iteratee: Object): number
	}

	declare interface LoDashExplicitWrapper<T> {
		sortedIndexBy<TSort>(
		value: string, iteratee: (x: string) => TSort
	): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sortedIndexBy<TSort>(value: T, iteratee: (x: T) => TSort): LoDashExplicitWrapper<number>,
		sortedIndexBy(value: T, iteratee: string): LoDashExplicitWrapper<number>,
		sortedIndexBy<W>(value: T, iteratee: W): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sortedIndexBy<T, TSort>(value: T, iteratee: (x: T) => TSort): LoDashExplicitWrapper<number>,
		sortedIndexBy<T>(value: T, iteratee: (x: T) => any): LoDashExplicitWrapper<number>,
		sortedIndexBy<T>(value: T, iteratee: string): LoDashExplicitWrapper<number>,
		sortedIndexBy<W, T>(value: T, iteratee: W): LoDashExplicitWrapper<number>,
		sortedIndexBy<T>(value: T, iteratee: Object): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		sortedLastIndex<T, TSort>(array: List<T>, value: T): number,
		sortedLastIndex<T>(array: List<T>, value: T): number,
		sortedLastIndex<T>(array: List<T>, value: T): number,
		sortedLastIndex<W, T>(array: List<T>, value: T): number,
		sortedLastIndex<T>(array: List<T>, value: T): number
	}

	declare interface LoDashImplicitWrapper<T> {
		sortedLastIndex<TSort>(value: string): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sortedLastIndex<TSort>(value: T): number,
		sortedLastIndex(value: T): number,
		sortedLastIndex<W>(value: T): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sortedLastIndex<T, TSort>(value: T): number,
		sortedLastIndex<T>(value: T): number,
		sortedLastIndex<W, T>(value: T): number
	}

	declare interface LoDashExplicitWrapper<T> {
		sortedLastIndex<TSort>(value: string): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sortedLastIndex<TSort>(value: T): LoDashExplicitWrapper<number>,
		sortedLastIndex(value: T): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sortedLastIndex<T, TSort>(value: T): LoDashExplicitWrapper<number>,
		sortedLastIndex<T>(value: T): LoDashExplicitWrapper<number>,
		sortedLastIndex<W, T>(value: T): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		sortedLastIndexBy<T, TSort>(array: List<T>, value: T, iteratee: (x: T) => TSort): number,
		sortedLastIndexBy<T>(array: List<T>, value: T, iteratee: (x: T) => any): number,
		sortedLastIndexBy<T>(array: List<T>, value: T, iteratee: string): number,
		sortedLastIndexBy<W, T>(array: List<T>, value: T, iteratee: W): number,
		sortedLastIndexBy<T>(array: List<T>, value: T, iteratee: Object): number
	}

	declare interface LoDashImplicitWrapper<T> {
		sortedLastIndexBy<TSort>(value: string, iteratee: (x: string) => TSort): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sortedLastIndexBy<TSort>(value: T, iteratee: (x: T) => TSort): number,
		sortedLastIndexBy(value: T, iteratee: string): number,
		sortedLastIndexBy<W>(value: T, iteratee: W): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sortedLastIndexBy<T, TSort>(value: T, iteratee: (x: T) => TSort): number,
		sortedLastIndexBy<T>(value: T, iteratee: (x: T) => any): number,
		sortedLastIndexBy<T>(value: T, iteratee: string): number,
		sortedLastIndexBy<W, T>(value: T, iteratee: W): number,
		sortedLastIndexBy<T>(value: T, iteratee: Object): number
	}

	declare interface LoDashExplicitWrapper<T> {
		sortedLastIndexBy<TSort>(
		value: string, iteratee: (x: string) => TSort
	): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sortedLastIndexBy<TSort>(value: T, iteratee: (x: T) => TSort): LoDashExplicitWrapper<number>,
		sortedLastIndexBy(value: T, iteratee: string): LoDashExplicitWrapper<number>,
		sortedLastIndexBy<W>(value: T, iteratee: W): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sortedLastIndexBy<T, TSort>(value: T, iteratee: (x: T) => TSort): LoDashExplicitWrapper<number>,
		sortedLastIndexBy<T>(value: T, iteratee: (x: T) => any): LoDashExplicitWrapper<number>,
		sortedLastIndexBy<T>(value: T, iteratee: string): LoDashExplicitWrapper<number>,
		sortedLastIndexBy<W, T>(value: T, iteratee: W): LoDashExplicitWrapper<number>,
		sortedLastIndexBy<T>(value: T, iteratee: Object): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		sortedLastIndexOf(array: any[] | List<any>, ...values: any[]): any[]
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
		array: List<TValue>, predicate?: ListIterator<TValue, boolean>
	): TValue[],
		takeRightWhile<TValue>(array: List<TValue>, predicate?: string): TValue[],
		takeRightWhile<TWhere, TValue>(array: List<TValue>, predicate?: TWhere): TValue[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		takeRightWhile(predicate?: ListIterator<T, boolean>): LoDashImplicitArrayWrapper<T>,
		takeRightWhile(predicate?: string): LoDashImplicitArrayWrapper<T>,
		takeRightWhile<TWhere>(predicate?: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		takeRightWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>
	): LoDashImplicitArrayWrapper<TValue>,
		takeRightWhile<TValue>(predicate?: string): LoDashImplicitArrayWrapper<TValue>,
		takeRightWhile<TWhere, TValue>(predicate?: TWhere): LoDashImplicitArrayWrapper<TValue>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		takeRightWhile(predicate?: ListIterator<T, boolean>): LoDashExplicitArrayWrapper<T>,
		takeRightWhile(predicate?: string): LoDashExplicitArrayWrapper<T>,
		takeRightWhile<TWhere>(predicate?: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		takeRightWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>
	): LoDashExplicitArrayWrapper<TValue>,
		takeRightWhile<TValue>(predicate?: string): LoDashExplicitArrayWrapper<TValue>,
		takeRightWhile<TWhere, TValue>(predicate?: TWhere): LoDashExplicitArrayWrapper<TValue>
	}

	declare interface LoDashStatic {
		takeWhile<TValue>(
		array: List<TValue>, predicate?: ListIterator<TValue, boolean>
	): TValue[],
		takeWhile<TValue>(array: List<TValue>, predicate?: string): TValue[],
		takeWhile<TWhere, TValue>(array: List<TValue>, predicate?: TWhere): TValue[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		takeWhile(predicate?: ListIterator<T, boolean>): LoDashImplicitArrayWrapper<T>,
		takeWhile(predicate?: string): LoDashImplicitArrayWrapper<T>,
		takeWhile<TWhere>(predicate?: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		takeWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>
	): LoDashImplicitArrayWrapper<TValue>,
		takeWhile<TValue>(predicate?: string): LoDashImplicitArrayWrapper<TValue>,
		takeWhile<TWhere, TValue>(predicate?: TWhere): LoDashImplicitArrayWrapper<TValue>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		takeWhile(predicate?: ListIterator<T, boolean>): LoDashExplicitArrayWrapper<T>,
		takeWhile(predicate?: string): LoDashExplicitArrayWrapper<T>,
		takeWhile<TWhere>(predicate?: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		takeWhile<TValue>(
		predicate?: ListIterator<TValue, boolean>
	): LoDashExplicitArrayWrapper<TValue>,
		takeWhile<TValue>(predicate?: string): LoDashExplicitArrayWrapper<TValue>,
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
		unionBy<T>(arrays: T[] | List<T>, iteratee?: (value: T) => any): T[],
		unionBy<T, W>(arrays: T[] | List<T>, iteratee?: W): T[],
		unionBy<T>(
		arrays1: T[] | List<T>, arrays2: T[] | List<T>, iteratee?: (value: T) => any
	): T[],
		unionBy<T, W>(arrays1: T[] | List<T>, arrays2: T[] | List<T>, iteratee?: W): T[],
		unionBy<T>(
		arrays1: T[] | List<T>, arrays2: T[] | List<T>, arrays3: T[] | List<T>, iteratee?: (value: T) => any
	): T[],
		unionBy<T, W>(
		arrays1: T[] | List<T>, arrays2: T[] | List<T>, arrays3: T[] | List<T>, iteratee?: W
	): T[],
		unionBy<T>(
		arrays1: T[] | List<T>, arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, iteratee?: (value: T) => any
	): T[],
		unionBy<T, W>(
		arrays1: T[] | List<T>, arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, iteratee?: W
	): T[],
		unionBy<T>(
		arrays1: T[] | List<T>, arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, arrays5: T[] | List<T>, iteratee?: (value: T) => any
	): T[],
		unionBy<T, W>(
		arrays1: T[] | List<T>, arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, arrays5: T[] | List<T>, iteratee?: W
	): T[],
		unionBy<T>(arrays: T[] | List<T>, ...iteratee: any[]): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		unionBy<T>(iteratee?: (value: T) => any): LoDashImplicitArrayWrapper<T>,
		unionBy<T, W>(iteratee?: W): LoDashImplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T, W>(arrays2: T[] | List<T>, iteratee?: W): LoDashImplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T, W>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T, W>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, arrays5: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T, W>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, arrays5: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T>(...iteratee: any[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		unionBy<T>(iteratee?: (value: T) => any): LoDashImplicitArrayWrapper<T>,
		unionBy<T, W>(iteratee?: W): LoDashImplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T, W>(arrays2: T[] | List<T>, iteratee?: W): LoDashImplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T, W>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T, W>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, arrays5: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T, W>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, arrays5: T[] | List<T>, iteratee?: W
	): LoDashImplicitArrayWrapper<T>,
		unionBy<T>(...iteratee: any[]): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		unionBy<T>(iteratee?: (value: T) => any): LoDashExplicitArrayWrapper<T>,
		unionBy<T, W>(iteratee?: W): LoDashExplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T, W>(arrays2: T[] | List<T>, iteratee?: W): LoDashExplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T, W>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T, W>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, arrays5: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T, W>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, arrays5: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T>(...iteratee: any[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		unionBy<T>(iteratee?: (value: T) => any): LoDashExplicitArrayWrapper<T>,
		unionBy<T, W>(iteratee?: W): LoDashExplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T, W>(arrays2: T[] | List<T>, iteratee?: W): LoDashExplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T, W>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T, W>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, arrays5: T[] | List<T>, iteratee?: (value: T) => any
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T, W>(
		arrays2: T[] | List<T>, arrays3: T[] | List<T>, arrays4: T[] | List<T>, arrays5: T[] | List<T>, iteratee?: W
	): LoDashExplicitArrayWrapper<T>,
		unionBy<T>(...iteratee: any[]): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		uniq<T>(array: List<T>): T[],
		uniq<T, TSort>(array: List<T>): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		uniq<TSort>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		uniq<TSort>(): LoDashImplicitArrayWrapper<T>,
		uniq(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		uniq<T>(): LoDashImplicitArrayWrapper<T>,
		uniq<T, TSort>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		uniq<TSort>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		uniq<TSort>(): LoDashExplicitArrayWrapper<T>,
		uniq(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		uniq<T>(): LoDashExplicitArrayWrapper<T>,
		uniq<T, TSort>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		uniqBy<T>(array: List<T>, iteratee: ListIterator<T, any>): T[],
		uniqBy<T, TSort>(array: List<T>, iteratee: ListIterator<T, TSort>): T[],
		uniqBy<T>(array: List<T>, iteratee: string): T[],
		uniqBy<T>(array: List<T>, iteratee: Object): T[],
		uniqBy<TWhere, T>(array: List<T>, iteratee: TWhere): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		uniqBy<TSort>(iteratee: ListIterator<T, TSort>): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		uniqBy<TSort>(iteratee: ListIterator<T, TSort>): LoDashImplicitArrayWrapper<T>,
		uniqBy(iteratee: string): LoDashImplicitArrayWrapper<T>,
		uniqBy<TWhere>(iteratee: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		uniqBy<T>(iteratee: ListIterator<T, any>): LoDashImplicitArrayWrapper<T>,
		uniqBy<T, TSort>(iteratee: ListIterator<T, TSort>): LoDashImplicitArrayWrapper<T>,
		uniqBy<T>(iteratee: string): LoDashImplicitArrayWrapper<T>,
		uniqBy<T>(iteratee: Object): LoDashImplicitArrayWrapper<T>,
		uniqBy<TWhere, T>(iteratee: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		uniqBy<TSort>(iteratee: ListIterator<T, TSort>): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		uniqBy<TSort>(iteratee: ListIterator<T, TSort>): LoDashExplicitArrayWrapper<T>,
		uniqBy(iteratee: string): LoDashExplicitArrayWrapper<T>,
		uniqBy<TWhere>(iteratee: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		uniqBy<T>(iteratee: ListIterator<T, any>): LoDashExplicitArrayWrapper<T>,
		uniqBy<T, TSort>(iteratee: ListIterator<T, TSort>): LoDashExplicitArrayWrapper<T>,
		uniqBy<T>(iteratee: string): LoDashExplicitArrayWrapper<T>,
		uniqBy<T>(iteratee: Object): LoDashExplicitArrayWrapper<T>,
		uniqBy<TWhere, T>(iteratee: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		sortedUniq<T>(array: List<T>): T[],
		sortedUniq<T, TSort>(array: List<T>): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		sortedUniq<TSort>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sortedUniq<TSort>(): LoDashImplicitArrayWrapper<T>,
		sortedUniq(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sortedUniq<T>(): LoDashImplicitArrayWrapper<T>,
		sortedUniq<T, TSort>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		sortedUniq<TSort>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sortedUniq<TSort>(): LoDashExplicitArrayWrapper<T>,
		sortedUniq(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sortedUniq<T>(): LoDashExplicitArrayWrapper<T>,
		sortedUniq<T, TSort>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		sortedUniqBy<T>(array: List<T>, iteratee: ListIterator<T, any>): T[],
		sortedUniqBy<T, TSort>(array: List<T>, iteratee: ListIterator<T, TSort>): T[],
		sortedUniqBy<T>(array: List<T>, iteratee: string): T[],
		sortedUniqBy<T>(array: List<T>, iteratee: Object): T[],
		sortedUniqBy<TWhere, T>(array: List<T>, iteratee: TWhere): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		sortedUniqBy<TSort>(iteratee: ListIterator<T, TSort>): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sortedUniqBy<TSort>(iteratee: ListIterator<T, TSort>): LoDashImplicitArrayWrapper<T>,
		sortedUniqBy(iteratee: string): LoDashImplicitArrayWrapper<T>,
		sortedUniqBy<TWhere>(iteratee: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sortedUniqBy<T>(iteratee: ListIterator<T, any>): LoDashImplicitArrayWrapper<T>,
		sortedUniqBy<T, TSort>(iteratee: ListIterator<T, TSort>): LoDashImplicitArrayWrapper<T>,
		sortedUniqBy<T>(iteratee: string): LoDashImplicitArrayWrapper<T>,
		sortedUniqBy<T>(iteratee: Object): LoDashImplicitArrayWrapper<T>,
		sortedUniqBy<TWhere, T>(iteratee: TWhere): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		sortedUniqBy<TSort>(iteratee: ListIterator<T, TSort>): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sortedUniqBy<TSort>(iteratee: ListIterator<T, TSort>): LoDashExplicitArrayWrapper<T>,
		sortedUniqBy(iteratee: string): LoDashExplicitArrayWrapper<T>,
		sortedUniqBy<TWhere>(iteratee: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sortedUniqBy<T>(iteratee: ListIterator<T, any>): LoDashExplicitArrayWrapper<T>,
		sortedUniqBy<T, TSort>(iteratee: ListIterator<T, TSort>): LoDashExplicitArrayWrapper<T>,
		sortedUniqBy<T>(iteratee: string): LoDashExplicitArrayWrapper<T>,
		sortedUniqBy<T>(iteratee: Object): LoDashExplicitArrayWrapper<T>,
		sortedUniqBy<TWhere, T>(iteratee: TWhere): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		unionWith(array: any[] | List<any>, ...values: any[]): any[]
	}

	declare interface LoDashStatic {
		uniqWith(array: any[] | List<any>, ...values: any[]): any[]
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
		array: List<List<TArray>>, iteratee?: MemoIterator<TArray, TResult>
	): TResult[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		unzipWith<TArr, TResult>(
		iteratee?: MemoIterator<TArr, TResult>
	): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		unzipWith<TArr, TResult>(
		iteratee?: MemoIterator<TArr, TResult>
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
		xorBy(array: any[] | List<any>, ...values: any[]): any[]
	}

	declare interface LoDashStatic {
		xorWith(array: any[] | List<any>, ...values: any[]): any[]
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
		tap<T>(value: T, interceptor: (value: T) => void): T
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		tap(interceptor: (value: T) => void): TWrapper
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		tap(interceptor: (value: T) => void): TWrapper
	}

	declare interface LoDashStatic {
		thru<T, TResult>(value: T, interceptor: (value: T) => TResult): TResult
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		thru<TResult>(interceptor: (value: T) => TResult): LoDashImplicitWrapper<TResult>,
		thru<TResult>(interceptor: (value: T) => TResult): LoDashImplicitWrapper<TResult>,
		thru<TResult>(interceptor: (value: T) => TResult): LoDashImplicitWrapper<TResult>,
		thru<TResult>(
		interceptor: (value: T) => TResult
	): LoDashImplicitObjectWrapper<TResult>,
		thru<TResult>(
		interceptor: (value: T) => TResult[]
	): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		thru<TResult>(interceptor: (value: T) => TResult): LoDashExplicitWrapper<TResult>,
		thru<TResult>(interceptor: (value: T) => TResult): LoDashExplicitWrapper<TResult>,
		thru<TResult>(interceptor: (value: T) => TResult): LoDashExplicitWrapper<TResult>,
		thru<TResult>(
		interceptor: (value: T) => TResult
	): LoDashExplicitObjectWrapper<TResult>,
		thru<TResult>(
		interceptor: (value: T) => TResult[]
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
		countBy<T>(collection: List<T>, iteratee?: ListIterator<T, any>): Dictionary<number>,
		countBy<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>
	): Dictionary<number>,
		countBy<T>(
		collection: NumericDictionary<T>, iteratee?: NumericDictionaryIterator<T, any>
	): Dictionary<number>,
		countBy<T>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, iteratee?: string
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
		iteratee?: ListIterator<T, any>
	): LoDashImplicitObjectWrapper<Dictionary<number>>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		countBy(
		iteratee?: ListIterator<T, any>
	): LoDashImplicitObjectWrapper<Dictionary<number>>,
		countBy(iteratee?: string): LoDashImplicitObjectWrapper<Dictionary<number>>,
		countBy<W>(iteratee?: W): LoDashImplicitObjectWrapper<Dictionary<number>>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		countBy<T>(
		iteratee?: ListIterator<T, any> | DictionaryIterator<T, any> | NumericDictionaryIterator<T, any>
	): LoDashImplicitObjectWrapper<Dictionary<number>>,
		countBy(iteratee?: string): LoDashImplicitObjectWrapper<Dictionary<number>>,
		countBy<W>(iteratee?: W): LoDashImplicitObjectWrapper<Dictionary<number>>
	}

	declare interface LoDashExplicitWrapper<T> {
		countBy(
		iteratee?: ListIterator<T, any>
	): LoDashExplicitObjectWrapper<Dictionary<number>>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		countBy(
		iteratee?: ListIterator<T, any>
	): LoDashExplicitObjectWrapper<Dictionary<number>>,
		countBy(iteratee?: string): LoDashExplicitObjectWrapper<Dictionary<number>>,
		countBy<W>(iteratee?: W): LoDashExplicitObjectWrapper<Dictionary<number>>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		countBy<T>(
		iteratee?: ListIterator<T, any> | DictionaryIterator<T, any> | NumericDictionaryIterator<T, any>
	): LoDashExplicitObjectWrapper<Dictionary<number>>,
		countBy(iteratee?: string): LoDashExplicitObjectWrapper<Dictionary<number>>,
		countBy<W>(iteratee?: W): LoDashExplicitObjectWrapper<Dictionary<number>>
	}

	declare interface LoDashStatic {
		each<T>(collection: T[], iteratee?: ListIterator<T, any>): T[],
		each<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>,
		each<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>
	): Dictionary<T>,
		each<T>(collection: T, iteratee?: ObjectIterator<any, any>): T,
		each<T, TValue>(collection: T, iteratee?: ObjectIterator<TValue, any>): T
	}

	declare interface LoDashImplicitWrapper<T> {
		each(iteratee: ListIterator<string, any>): LoDashImplicitWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		each(iteratee: ListIterator<T, any>): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		each<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>
	): LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		each(iteratee: ListIterator<string, any>): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		each(iteratee: ListIterator<T, any>): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		each<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>
	): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		eachRight<T>(collection: T[], iteratee?: ListIterator<T, any>): T[],
		eachRight<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>,
		eachRight<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>
	): Dictionary<T>,
		eachRight<T>(collection: T, iteratee?: ObjectIterator<any, any>): T,
		eachRight<T, TValue>(collection: T, iteratee?: ObjectIterator<TValue, any>): T
	}

	declare interface LoDashImplicitWrapper<T> {
		eachRight(iteratee: ListIterator<string, any>): LoDashImplicitWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		eachRight(iteratee: ListIterator<T, any>): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		eachRight<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>
	): LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		eachRight(iteratee: ListIterator<string, any>): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		eachRight(iteratee: ListIterator<T, any>): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		eachRight<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>
	): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		every<T>(collection: List<T>, predicate?: ListIterator<T, boolean>): boolean,
		every<T>(
		collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>
	): boolean,
		every<T>(
		collection: NumericDictionary<T>, predicate?: NumericDictionaryIterator<T, boolean>
	): boolean,
		every<T>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, predicate?: string | any[]
	): boolean,
		every<TObject, T>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, predicate?: TObject
	): boolean
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		every(
		predicate?: ListIterator<T, boolean> | NumericDictionaryIterator<T, boolean>
	): boolean,
		every(predicate?: string | any[]): boolean,
		every<TObject>(predicate?: TObject): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		every<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean> | NumericDictionaryIterator<T, boolean>
	): boolean,
		every(predicate?: string | any[]): boolean,
		every<TObject>(predicate?: TObject): boolean
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		every(
		predicate?: ListIterator<T, boolean> | NumericDictionaryIterator<T, boolean>
	): LoDashExplicitWrapper<boolean>,
		every(predicate?: string | any[]): LoDashExplicitWrapper<boolean>,
		every<TObject>(predicate?: TObject): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		every<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean> | NumericDictionaryIterator<T, boolean>
	): LoDashExplicitWrapper<boolean>,
		every(predicate?: string | any[]): LoDashExplicitWrapper<boolean>,
		every<TObject>(predicate?: TObject): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		filter<T>(collection: List<T>, predicate?: ListIterator<T, boolean>): T[],
		filter<T>(collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>): T[],
		filter(collection: string, predicate?: StringIterator<boolean>): string[],
		filter<T>(collection: List<T> | Dictionary<T>, predicate: string): T[],
		filter<W, T>(collection: List<T> | Dictionary<T>, predicate: W): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		filter(predicate?: StringIterator<boolean>): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		filter(predicate: ListIterator<T, boolean>): LoDashImplicitArrayWrapper<T>,
		filter(predicate: string): LoDashImplicitArrayWrapper<T>,
		filter<W>(predicate: W): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		filter<T>(
		predicate: ListIterator<T, boolean> | DictionaryIterator<T, boolean>
	): LoDashImplicitArrayWrapper<T>,
		filter<T>(predicate: string): LoDashImplicitArrayWrapper<T>,
		filter<W, T>(predicate: W): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		filter(predicate?: StringIterator<boolean>): LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		filter(predicate: ListIterator<T, boolean>): LoDashExplicitArrayWrapper<T>,
		filter(predicate: string): LoDashExplicitArrayWrapper<T>,
		filter<W>(predicate: W): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		filter<T>(
		predicate: ListIterator<T, boolean> | DictionaryIterator<T, boolean>
	): LoDashExplicitArrayWrapper<T>,
		filter<T>(predicate: string): LoDashExplicitArrayWrapper<T>,
		filter<W, T>(predicate: W): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		find<T>(
		collection: List<T>, predicate?: ListIterator<T, boolean>, fromIndex?: number
	): T,
		find<T>(
		collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>, fromIndex?: number
	): T,
		find<T>(
		collection: List<T> | Dictionary<T>, predicate?: string, fromIndex?: number
	): T,
		find<TObject, T>(
		collection: List<T> | Dictionary<T>, predicate?: TObject, fromIndex?: number
	): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		find(predicate?: ListIterator<T, boolean>, fromIndex?: number): T,
		find(predicate?: string, fromIndex?: number): T,
		find<TObject>(predicate?: TObject, fromIndex?: number): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		find<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean>, fromIndex?: number
	): TResult,
		find<TResult>(predicate?: string, fromIndex?: number): TResult,
		find<TObject, TResult>(predicate?: TObject, fromIndex?: number): TResult
	}

	declare interface LoDashStatic {
		findLast<T>(
		collection: Array<T>, callback: ListIterator<T, boolean>, fromIndex?: number
	): T,
		findLast<T>(
		collection: List<T>, callback: ListIterator<T, boolean>, fromIndex?: number
	): T,
		findLast<T>(
		collection: Dictionary<T>, callback: DictionaryIterator<T, boolean>, fromIndex?: number
	): T,
		findLast<W, T>(collection: Array<T>, whereValue: W, fromIndex?: number): T,
		findLast<W, T>(collection: List<T>, whereValue: W, fromIndex?: number): T,
		findLast<W, T>(collection: Dictionary<T>, whereValue: W, fromIndex?: number): T,
		findLast<T>(collection: Array<T>, pluckValue: string, fromIndex?: number): T,
		findLast<T>(collection: List<T>, pluckValue: string, fromIndex?: number): T,
		findLast<T>(collection: Dictionary<T>, pluckValue: string, fromIndex?: number): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		findLast(callback: ListIterator<T, boolean>, fromIndex?: number): T,
		findLast<W>(whereValue: W, fromIndex?: number): T,
		findLast(pluckValue: string, fromIndex?: number): T
	}

	declare interface LoDashStatic {
		flatMap<T, TResult>(
		collection: List<T>, iteratee?: ListIterator<T, TResult | TResult[]>
	): TResult[],
		flatMap<TResult>(
		collection: List<any>, iteratee?: ListIterator<any, TResult | TResult[]>
	): TResult[],
		flatMap<T, TResult>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, TResult | TResult[]>
	): TResult[],
		flatMap<TResult>(
		collection: Dictionary<any>, iteratee?: DictionaryIterator<any, TResult | TResult[]>
	): TResult[],
		flatMap<T, TResult>(
		collection: NumericDictionary<T>, iteratee?: NumericDictionaryIterator<T, TResult | TResult[]>
	): TResult[],
		flatMap<TResult>(
		collection: NumericDictionary<any>, iteratee?: NumericDictionaryIterator<any, TResult | TResult[]>
	): TResult[],
		flatMap<TObject, TResult>(
		collection: TObject, iteratee?: ObjectIterator<any, TResult | TResult[]>
	): TResult[],
		flatMap<TResult>(
		collection: Object, iteratee?: ObjectIterator<any, TResult | TResult[]>
	): TResult[],
		flatMap<TWhere, TObject>(collection: TObject, iteratee: TWhere): boolean[],
		flatMap<TObject, TResult>(collection: TObject, iteratee: Object | string): TResult[],
		flatMap<TObject>(collection: TObject, iteratee: [string, any]): boolean[],
		flatMap<TResult>(collection: string): string[],
		flatMap<TResult>(collection: Object, iteratee?: Object | string): TResult[]
	}

	declare interface LoDashImplicitWrapper<T> {
		flatMap<TResult>(
		iteratee: ListIterator<string, TResult | TResult[]>
	): LoDashImplicitArrayWrapper<TResult>,
		flatMap(): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		flatMap<TResult>(
		iteratee: ListIterator<T, TResult | TResult[]> | string
	): LoDashImplicitArrayWrapper<TResult>,
		flatMap<TWhere>(iteratee: TWhere): LoDashImplicitArrayWrapper<boolean>,
		flatMap(iteratee: [string, any]): LoDashImplicitArrayWrapper<boolean>,
		flatMap<TResult>(): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		flatMap<T, TResult>(
		iteratee: ListIterator<T, TResult | TResult[]> | DictionaryIterator<T, TResult | TResult[]> | NumericDictionaryIterator<T, TResult | TResult[]>
	): LoDashImplicitArrayWrapper<TResult>,
		flatMap<TResult>(
		iteratee: ObjectIterator<any, TResult | TResult[]> | string
	): LoDashImplicitArrayWrapper<TResult>,
		flatMap<TWhere>(iteratee: TWhere): LoDashImplicitArrayWrapper<boolean>,
		flatMap(iteratee: [string, any]): LoDashImplicitArrayWrapper<boolean>,
		flatMap<TResult>(): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitWrapper<T> {
		flatMap<TResult>(
		iteratee: ListIterator<string, TResult | TResult[]>
	): LoDashExplicitArrayWrapper<TResult>,
		flatMap(): LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		flatMap<TResult>(
		iteratee: ListIterator<T, TResult | TResult[]> | string
	): LoDashExplicitArrayWrapper<TResult>,
		flatMap<TWhere>(iteratee: TWhere): LoDashExplicitArrayWrapper<boolean>,
		flatMap(iteratee: [string, any]): LoDashExplicitArrayWrapper<boolean>,
		flatMap<TResult>(): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		flatMap<T, TResult>(
		iteratee: ListIterator<T, TResult | TResult[]> | DictionaryIterator<T, TResult | TResult[]> | NumericDictionaryIterator<T, TResult | TResult[]>
	): LoDashExplicitArrayWrapper<TResult>,
		flatMap<TResult>(
		iteratee: ObjectIterator<any, TResult | TResult[]> | string
	): LoDashExplicitArrayWrapper<TResult>,
		flatMap<TWhere>(iteratee: TWhere): LoDashExplicitArrayWrapper<boolean>,
		flatMap(iteratee: [string, any]): LoDashExplicitArrayWrapper<boolean>,
		flatMap<TResult>(): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		forEach<T>(collection: T[], iteratee?: ListIterator<T, any>): T[],
		forEach<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>,
		forEach<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>
	): Dictionary<T>,
		forEach<T>(collection: T, iteratee?: ObjectIterator<any, any>): T,
		forEach<T, TValue>(collection: T, iteratee?: ObjectIterator<TValue, any>): T
	}

	declare interface LoDashImplicitWrapper<T> {
		forEach(iteratee: ListIterator<string, any>): LoDashImplicitWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		forEach(iteratee: ListIterator<T, any>): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		forEach<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>
	): LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		forEach(iteratee: ListIterator<string, any>): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		forEach(iteratee: ListIterator<T, any>): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		forEach<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>
	): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		forEachRight<T>(collection: T[], iteratee?: ListIterator<T, any>): T[],
		forEachRight<T>(collection: List<T>, iteratee?: ListIterator<T, any>): List<T>,
		forEachRight<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>
	): Dictionary<T>,
		forEachRight<T>(collection: T, iteratee?: ObjectIterator<any, any>): T,
		forEachRight<T, TValue>(collection: T, iteratee?: ObjectIterator<TValue, any>): T
	}

	declare interface LoDashImplicitWrapper<T> {
		forEachRight(iteratee: ListIterator<string, any>): LoDashImplicitWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		forEachRight(iteratee: ListIterator<T, any>): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		forEachRight<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>
	): LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		forEachRight(iteratee: ListIterator<string, any>): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		forEachRight(iteratee: ListIterator<T, any>): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		forEachRight<TValue>(
		iteratee?: ListIterator<TValue, any> | DictionaryIterator<TValue, any>
	): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		groupBy<T, TKey>(
		collection: List<T>, iteratee?: ListIterator<T, TKey>
	): Dictionary<T[]>,
		groupBy<T>(collection: List<any>, iteratee?: ListIterator<T, any>): Dictionary<T[]>,
		groupBy<T, TKey>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, TKey>
	): Dictionary<T[]>,
		groupBy<T>(
		collection: Dictionary<any>, iteratee?: DictionaryIterator<T, any>
	): Dictionary<T[]>,
		groupBy<T, TValue>(
		collection: List<T> | Dictionary<T>, iteratee?: string
	): Dictionary<T[]>,
		groupBy<T>(collection: List<T> | Dictionary<T>, iteratee?: string): Dictionary<T[]>,
		groupBy<TWhere, T>(
		collection: List<T> | Dictionary<T>, iteratee?: TWhere
	): Dictionary<T[]>,
		groupBy<T>(collection: List<T> | Dictionary<T>, iteratee?: Object): Dictionary<T[]>
	}

	declare interface LoDashImplicitWrapper<T> {
		groupBy<TKey>(
		iteratee?: ListIterator<T, TKey>
	): LoDashImplicitObjectWrapper<Dictionary<T[]>>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		groupBy<TKey>(
		iteratee?: ListIterator<T, TKey>
	): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<TValue>(iteratee?: string): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<TWhere>(iteratee?: TWhere): LoDashImplicitObjectWrapper<Dictionary<T[]>>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		groupBy<T, TKey>(
		iteratee?: ListIterator<T, TKey> | DictionaryIterator<T, TKey>
	): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T>(
		iteratee?: ListIterator<T, any> | DictionaryIterator<T, any>
	): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T, TValue>(iteratee?: string): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T>(iteratee?: string): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<TWhere, T>(iteratee?: TWhere): LoDashImplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T>(iteratee?: Object): LoDashImplicitObjectWrapper<Dictionary<T[]>>
	}

	declare interface LoDashExplicitWrapper<T> {
		groupBy<TKey>(
		iteratee?: ListIterator<T, TKey>
	): LoDashExplicitObjectWrapper<Dictionary<T[]>>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		groupBy<TKey>(
		iteratee?: ListIterator<T, TKey>
	): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<TValue>(iteratee?: string): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<TWhere>(iteratee?: TWhere): LoDashExplicitObjectWrapper<Dictionary<T[]>>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		groupBy<T, TKey>(
		iteratee?: ListIterator<T, TKey> | DictionaryIterator<T, TKey>
	): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T>(
		iteratee?: ListIterator<T, any> | DictionaryIterator<T, any>
	): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T, TValue>(iteratee?: string): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T>(iteratee?: string): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<TWhere, T>(iteratee?: TWhere): LoDashExplicitObjectWrapper<Dictionary<T[]>>,
		groupBy<T>(iteratee?: Object): LoDashExplicitObjectWrapper<Dictionary<T[]>>
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
		keyBy<T>(collection: List<T>, iteratee?: ListIterator<T, any>): Dictionary<T>,
		keyBy<T>(
		collection: NumericDictionary<T>, iteratee?: NumericDictionaryIterator<T, any>
	): Dictionary<T>,
		keyBy<T>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>
	): Dictionary<T>,
		keyBy<T>(
		collection: List<T> | NumericDictionary<T> | Dictionary<T>, iteratee?: string
	): Dictionary<T>,
		keyBy<W, T>(
		collection: List<T> | NumericDictionary<T> | Dictionary<T>, iteratee?: W
	): Dictionary<T>,
		keyBy<T>(
		collection: List<T> | NumericDictionary<T> | Dictionary<T>, iteratee?: Object
	): Dictionary<T>
	}

	declare interface LoDashImplicitWrapper<T> {
		keyBy(iteratee?: ListIterator<T, any>): LoDashImplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		keyBy(iteratee?: ListIterator<T, any>): LoDashImplicitObjectWrapper<Dictionary<T>>,
		keyBy(iteratee?: string): LoDashImplicitObjectWrapper<Dictionary<T>>,
		keyBy<W>(iteratee?: W): LoDashImplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		keyBy<T>(
		iteratee?: ListIterator<T, any> | NumericDictionaryIterator<T, any> | DictionaryIterator<T, any>
	): LoDashImplicitObjectWrapper<Dictionary<T>>,
		keyBy<T>(iteratee?: string): LoDashImplicitObjectWrapper<Dictionary<T>>,
		keyBy<W, T>(iteratee?: W): LoDashImplicitObjectWrapper<Dictionary<T>>,
		keyBy<T>(iteratee?: Object): LoDashImplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashExplicitWrapper<T> {
		keyBy(iteratee?: ListIterator<T, any>): LoDashExplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		keyBy(iteratee?: ListIterator<T, any>): LoDashExplicitObjectWrapper<Dictionary<T>>,
		keyBy(iteratee?: string): LoDashExplicitObjectWrapper<Dictionary<T>>,
		keyBy<W>(iteratee?: W): LoDashExplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		keyBy<T>(
		iteratee?: ListIterator<T, any> | NumericDictionaryIterator<T, any> | DictionaryIterator<T, any>
	): LoDashExplicitObjectWrapper<Dictionary<T>>,
		keyBy<T>(iteratee?: string): LoDashExplicitObjectWrapper<Dictionary<T>>,
		keyBy<W, T>(iteratee?: W): LoDashExplicitObjectWrapper<Dictionary<T>>,
		keyBy<T>(iteratee?: Object): LoDashExplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashStatic {
		invoke<TObject, TResult>(
		object: TObject, path: StringRepresentable | StringRepresentable[], ...args: any[]
	): TResult,
		invoke<TValue, TResult>(
		object: Dictionary<TValue> | TValue[], path: StringRepresentable | StringRepresentable[], ...args: any[]
	): TResult,
		invoke<TResult>(
		object: any, path: StringRepresentable | StringRepresentable[], ...args: any[]
	): TResult
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		invoke<TResult>(
		path: StringRepresentable | StringRepresentable[], ...args: any[]
	): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		invoke<TResult>(
		path: StringRepresentable | StringRepresentable[], ...args: any[]
	): TResult
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		invoke<TResult>(
		path: StringRepresentable | StringRepresentable[], ...args: any[]
	): TResult
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		invoke<TResult>(
		path: StringRepresentable | StringRepresentable[], ...args: any[]
	): TResult
	}

	declare interface LoDashStatic {
		invokeMap<TValue, TResult>(
		collection: TValue[], methodName: string, ...args: any[]
	): TResult[],
		invokeMap<TValue, TResult>(
		collection: Dictionary<TValue>, methodName: string, ...args: any[]
	): TResult[],
		invokeMap<TResult>(collection: {
		
	}[], methodName: string, ...args: any[]): TResult[],
		invokeMap<TResult>(
		collection: Dictionary<{
		
	}>, methodName: string, ...args: any[]
	): TResult[],
		invokeMap<TValue, TResult>(
		collection: TValue[], method: (...args: any[]) => TResult, ...args: any[]
	): TResult[],
		invokeMap<TValue, TResult>(
		collection: Dictionary<TValue>, method: (...args: any[]) => TResult, ...args: any[]
	): TResult[],
		invokeMap<TResult>(
		collection: {
		
	}[], method: (...args: any[]) => TResult, ...args: any[]
	): TResult[],
		invokeMap<TResult>(
		collection: Dictionary<{
		
	}>, method: (...args: any[]) => TResult, ...args: any[]
	): TResult[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		invokeMap<TResult>(
		methodName: string, ...args: any[]
	): LoDashImplicitArrayWrapper<TResult>,
		invokeMap<TResult>(
		method: (...args: any[]) => TResult, ...args: any[]
	): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		invokeMap<TResult>(
		methodName: string, ...args: any[]
	): LoDashImplicitArrayWrapper<TResult>,
		invokeMap<TResult>(
		method: (...args: any[]) => TResult, ...args: any[]
	): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		invokeMap<TResult>(
		methodName: string, ...args: any[]
	): LoDashExplicitArrayWrapper<TResult>,
		invokeMap<TResult>(
		method: (...args: any[]) => TResult, ...args: any[]
	): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		invokeMap<TResult>(
		methodName: string, ...args: any[]
	): LoDashExplicitArrayWrapper<TResult>,
		invokeMap<TResult>(
		method: (...args: any[]) => TResult, ...args: any[]
	): LoDashExplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		map<T, TResult>(
		collection: List<T>, iteratee?: ListIterator<T, TResult>
	): TResult[],
		map<T, TResult>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, TResult>
	): TResult[],
		map<T, TResult>(
		collection: NumericDictionary<T>, iteratee?: NumericDictionaryIterator<T, TResult>
	): TResult[],
		map<T, TResult>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, iteratee?: string
	): TResult[],
		map<T, TObject>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, iteratee?: TObject
	): boolean[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		map<TResult>(
		iteratee?: ListIterator<T, TResult>
	): LoDashImplicitArrayWrapper<TResult>,
		map<TResult>(iteratee?: string): LoDashImplicitArrayWrapper<TResult>,
		map<TObject>(iteratee?: TObject): LoDashImplicitArrayWrapper<boolean>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		map<TValue, TResult>(
		iteratee?: ListIterator<TValue, TResult> | DictionaryIterator<TValue, TResult>
	): LoDashImplicitArrayWrapper<TResult>,
		map<TValue, TResult>(iteratee?: string): LoDashImplicitArrayWrapper<TResult>,
		map<TObject>(iteratee?: TObject): LoDashImplicitArrayWrapper<boolean>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		map<TResult>(
		iteratee?: ListIterator<T, TResult>
	): LoDashExplicitArrayWrapper<TResult>,
		map<TResult>(iteratee?: string): LoDashExplicitArrayWrapper<TResult>,
		map<TObject>(iteratee?: TObject): LoDashExplicitArrayWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		map<TValue, TResult>(
		iteratee?: ListIterator<TValue, TResult> | DictionaryIterator<TValue, TResult>
	): LoDashExplicitArrayWrapper<TResult>,
		map<TValue, TResult>(iteratee?: string): LoDashExplicitArrayWrapper<TResult>,
		map<TObject>(iteratee?: TObject): LoDashExplicitArrayWrapper<boolean>
	}

	declare interface LoDashStatic {
		partition<T>(collection: List<T>, callback: ListIterator<T, boolean>): T[][],
		partition<T>(collection: Dictionary<T>, callback: DictionaryIterator<T, boolean>): T[][],
		partition<W, T>(collection: List<T>, whereValue: W): T[][],
		partition<W, T>(collection: Dictionary<T>, whereValue: W): T[][],
		partition<T>(collection: List<T>, path: string, srcValue: any): T[][],
		partition<T>(collection: Dictionary<T>, path: string, srcValue: any): T[][],
		partition<T>(collection: List<T>, pluckValue: string): T[][],
		partition<T>(collection: Dictionary<T>, pluckValue: string): T[][]
	}

	declare interface LoDashImplicitStringWrapper {
		partition(callback: ListIterator<string, boolean>): LoDashImplicitArrayWrapper<string[]>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		partition(callback: ListIterator<T, boolean>): LoDashImplicitArrayWrapper<T[]>,
		partition<W>(whereValue: W): LoDashImplicitArrayWrapper<T[]>,
		partition(path: string, srcValue: any): LoDashImplicitArrayWrapper<T[]>,
		partition(pluckValue: string): LoDashImplicitArrayWrapper<T[]>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		partition<TResult>(
		callback: ListIterator<TResult, boolean>
	): LoDashImplicitArrayWrapper<TResult[]>,
		partition<TResult>(
		callback: DictionaryIterator<TResult, boolean>
	): LoDashImplicitArrayWrapper<TResult[]>,
		partition<W, TResult>(whereValue: W): LoDashImplicitArrayWrapper<TResult[]>,
		partition<TResult>(path: string, srcValue: any): LoDashImplicitArrayWrapper<TResult[]>,
		partition<TResult>(pluckValue: string): LoDashImplicitArrayWrapper<TResult[]>
	}

	declare interface LoDashStatic {
		reduce<T, TResult>(
		collection: Array<T>, callback: MemoIterator<T, TResult>, accumulator: TResult
	): TResult,
		reduce<T, TResult>(
		collection: List<T>, callback: MemoIterator<T, TResult>, accumulator: TResult
	): TResult,
		reduce<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>, accumulator: TResult
	): TResult,
		reduce<T, TResult>(
		collection: NumericDictionary<T>, callback: MemoIterator<T, TResult>, accumulator: TResult
	): TResult,
		reduce<T, TResult>(collection: Array<T>, callback: MemoIterator<T, TResult>): TResult,
		reduce<T, TResult>(collection: List<T>, callback: MemoIterator<T, TResult>): TResult,
		reduce<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>
	): TResult,
		reduce<T, TResult>(
		collection: NumericDictionary<T>, callback: MemoIterator<T, TResult>
	): TResult
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		reduce<TResult>(callback: MemoIterator<T, TResult>, accumulator: TResult): TResult,
		reduce<TResult>(callback: MemoIterator<T, TResult>): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		reduce<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, accumulator: TResult
	): TResult,
		reduce<TValue, TResult>(callback: MemoIterator<TValue, TResult>): TResult
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		reduce<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>, accumulator: TResult
	): LoDashExplicitObjectWrapper<TResult>,
		reduce<TValue, TResult>(
		callback: MemoIterator<TValue, TResult>
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		reduce<TResult>(
		callback: MemoIterator<T, TResult>, accumulator: TResult
	): LoDashExplicitWrapper<TResult>,
		reduce<TResult>(callback: MemoIterator<T, TResult>): LoDashExplicitWrapper<TResult>
	}

	declare interface LoDashStatic {
		reduceRight<T, TResult>(
		collection: Array<T>, callback: MemoIterator<T, TResult>, accumulator: TResult
	): TResult,
		reduceRight<T, TResult>(
		collection: List<T>, callback: MemoIterator<T, TResult>, accumulator: TResult
	): TResult,
		reduceRight<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>, accumulator: TResult
	): TResult,
		reduceRight<T, TResult>(collection: Array<T>, callback: MemoIterator<T, TResult>): TResult,
		reduceRight<T, TResult>(collection: List<T>, callback: MemoIterator<T, TResult>): TResult,
		reduceRight<T, TResult>(
		collection: Dictionary<T>, callback: MemoIterator<T, TResult>
	): TResult
	}

	declare interface LoDashStatic {
		reject<T>(collection: List<T>, predicate?: ListIterator<T, boolean>): T[],
		reject<T>(collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>): T[],
		reject(collection: string, predicate?: StringIterator<boolean>): string[],
		reject<T>(collection: List<T> | Dictionary<T>, predicate: string): T[],
		reject<W, T>(collection: List<T> | Dictionary<T>, predicate: W): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		reject(predicate?: StringIterator<boolean>): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		reject(predicate: ListIterator<T, boolean>): LoDashImplicitArrayWrapper<T>,
		reject(predicate: string): LoDashImplicitArrayWrapper<T>,
		reject<W>(predicate: W): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		reject<T>(
		predicate: ListIterator<T, boolean> | DictionaryIterator<T, boolean>
	): LoDashImplicitArrayWrapper<T>,
		reject<T>(predicate: string): LoDashImplicitArrayWrapper<T>,
		reject<W, T>(predicate: W): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		reject(predicate?: StringIterator<boolean>): LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		reject(predicate: ListIterator<T, boolean>): LoDashExplicitArrayWrapper<T>,
		reject(predicate: string): LoDashExplicitArrayWrapper<T>,
		reject<W>(predicate: W): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		reject<T>(
		predicate: ListIterator<T, boolean> | DictionaryIterator<T, boolean>
	): LoDashExplicitArrayWrapper<T>,
		reject<T>(predicate: string): LoDashExplicitArrayWrapper<T>,
		reject<W, T>(predicate: W): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		sample<T>(collection: List<T> | Dictionary<T> | NumericDictionary<T>): T,
		sample<O, T>(collection: O): T,
		sample<T>(collection: Object): T
	}

	declare interface LoDashImplicitWrapper<T> {
		sample(): string
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sample(): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sample<T>(): T
	}

	declare interface LoDashExplicitWrapper<T> {
		sample(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sample<TWrapper>(): TWrapper
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sample<TWrapper>(): TWrapper
	}

	declare interface LoDashStatic {
		sampleSize<T>(collection: List<T> | Dictionary<T> | NumericDictionary<T>, n?: number): T[],
		sampleSize<O, T>(collection: O, n?: number): T[],
		sampleSize<T>(collection: Object, n?: number): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		sampleSize(n?: number): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sampleSize(n?: number): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sampleSize<T>(n?: number): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		sampleSize(n?: number): LoDashExplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sampleSize(n?: number): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sampleSize<T>(n?: number): LoDashExplicitArrayWrapper<T>
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
		some<T>(collection: List<T>, predicate?: ListIterator<T, boolean>): boolean,
		some<T>(
		collection: Dictionary<T>, predicate?: DictionaryIterator<T, boolean>
	): boolean,
		some<T>(
		collection: NumericDictionary<T>, predicate?: NumericDictionaryIterator<T, boolean>
	): boolean,
		some(collection: Object, predicate?: ObjectIterator<any, boolean>): boolean,
		some<T>(
		collection: List<T> | Dictionary<T> | NumericDictionary<T>, predicate?: string | [string, any]
	): boolean,
		some(collection: Object, predicate?: string | [string, any]): boolean,
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
		predicate?: ListIterator<T, boolean> | NumericDictionaryIterator<T, boolean>
	): boolean,
		some(predicate?: string | [string, any]): boolean,
		some<TObject>(predicate?: TObject): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		some<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean> | NumericDictionaryIterator<T, boolean> | ObjectIterator<any, boolean>
	): boolean,
		some(predicate?: string | [string, any]): boolean,
		some<TObject>(predicate?: TObject): boolean
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		some(
		predicate?: ListIterator<T, boolean> | NumericDictionaryIterator<T, boolean>
	): LoDashExplicitWrapper<boolean>,
		some(predicate?: string | [string, any]): LoDashExplicitWrapper<boolean>,
		some<TObject>(predicate?: TObject): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		some<TResult>(
		predicate?: ListIterator<TResult, boolean> | DictionaryIterator<TResult, boolean> | NumericDictionaryIterator<T, boolean> | ObjectIterator<any, boolean>
	): LoDashExplicitWrapper<boolean>,
		some(predicate?: string | [string, any]): LoDashExplicitWrapper<boolean>,
		some<TObject>(predicate?: TObject): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		sortBy<T, TSort>(collection: List<T>, iteratee?: ListIterator<T, TSort>): T[],
		sortBy<T, TSort>(
		collection: Dictionary<T>, iteratee?: DictionaryIterator<T, TSort>
	): T[],
		sortBy<T>(collection: List<T> | Dictionary<T>, iteratee: string): T[],
		sortBy<W, T>(collection: List<T> | Dictionary<T>, whereValue: W): T[],
		sortBy<T>(collection: List<T> | Dictionary<T>): T[],
		sortBy<T>(
		collection: (Array<T> | List<T>), iteratees: (ListIterator<T, any> | string | Object)[]
	): T[],
		sortBy<T>(
		collection: (Array<T> | List<T>), ...iteratees: (ListIterator<T, boolean> | Object | string)[]
	): T[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sortBy<TSort>(iteratee?: ListIterator<T, TSort>): LoDashImplicitArrayWrapper<T>,
		sortBy(iteratee: string): LoDashImplicitArrayWrapper<T>,
		sortBy<W>(whereValue: W): LoDashImplicitArrayWrapper<T>,
		sortBy(): LoDashImplicitArrayWrapper<T>,
		sortBy(
		...iteratees: (ListIterator<T, boolean> | Object | string)[]
	): LoDashImplicitArrayWrapper<T>,
		sortBy(
		iteratees: (ListIterator<T, any> | string | Object)[]
	): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sortBy<T, TSort>(
		iteratee?: ListIterator<T, TSort> | DictionaryIterator<T, TSort>
	): LoDashImplicitArrayWrapper<T>,
		sortBy<T>(iteratee: string): LoDashImplicitArrayWrapper<T>,
		sortBy<W, T>(whereValue: W): LoDashImplicitArrayWrapper<T>,
		sortBy<T>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sortBy<TSort>(iteratee?: ListIterator<T, TSort>): LoDashExplicitArrayWrapper<T>,
		sortBy(iteratee: string): LoDashExplicitArrayWrapper<T>,
		sortBy<W>(whereValue: W): LoDashExplicitArrayWrapper<T>,
		sortBy(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sortBy<T, TSort>(
		iteratee?: ListIterator<T, TSort> | DictionaryIterator<T, TSort>
	): LoDashExplicitArrayWrapper<T>,
		sortBy<T>(iteratee: string): LoDashExplicitArrayWrapper<T>,
		sortBy<W, T>(whereValue: W): LoDashExplicitArrayWrapper<T>,
		sortBy<T>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		orderBy<W, T>(
		collection: List<T>, iteratees: ListIterator<T, any> | string | W | (ListIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): T[],
		orderBy<T>(
		collection: List<T>, iteratees: ListIterator<T, any> | string | Object | (ListIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): T[],
		orderBy<W, T>(
		collection: NumericDictionary<T>, iteratees: NumericDictionaryIterator<T, any> | string | W | (NumericDictionaryIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): T[],
		orderBy<T>(
		collection: NumericDictionary<T>, iteratees: NumericDictionaryIterator<T, any> | string | Object | (NumericDictionaryIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): T[],
		orderBy<W, T>(
		collection: Dictionary<T>, iteratees: DictionaryIterator<T, any> | string | W | (DictionaryIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): T[],
		orderBy<T>(
		collection: Dictionary<T>, iteratees: DictionaryIterator<T, any> | string | Object | (DictionaryIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		orderBy(
		iteratees: ListIterator<T, any> | string | (ListIterator<T, any> | string)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		orderBy<W>(
		iteratees: ListIterator<T, any> | string | W | (ListIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		orderBy<W, T>(
		iteratees: ListIterator<T, any> | string | W | (ListIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>,
		orderBy<T>(
		iteratees: ListIterator<T, any> | string | Object | (ListIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>,
		orderBy<W, T>(
		iteratees: NumericDictionaryIterator<T, any> | string | W | (NumericDictionaryIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>,
		orderBy<T>(
		iteratees: NumericDictionaryIterator<T, any> | string | Object | (NumericDictionaryIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>,
		orderBy<W, T>(
		iteratees: DictionaryIterator<T, any> | string | W | (DictionaryIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>,
		orderBy<T>(
		iteratees: DictionaryIterator<T, any> | string | Object | (DictionaryIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		orderBy(
		iteratees: ListIterator<T, any> | string | (ListIterator<T, any> | string)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		orderBy<W>(
		iteratees: ListIterator<T, any> | string | W | (ListIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		orderBy<W, T>(
		iteratees: ListIterator<T, any> | string | W | (ListIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>,
		orderBy<T>(
		iteratees: ListIterator<T, any> | string | Object | (ListIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>,
		orderBy<W, T>(
		iteratees: NumericDictionaryIterator<T, any> | string | W | (NumericDictionaryIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>,
		orderBy<T>(
		iteratees: NumericDictionaryIterator<T, any> | string | Object | (NumericDictionaryIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>,
		orderBy<W, T>(
		iteratees: DictionaryIterator<T, any> | string | W | (DictionaryIterator<T, any> | string | W)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>,
		orderBy<T>(
		iteratees: DictionaryIterator<T, any> | string | Object | (DictionaryIterator<T, any> | string | Object)[], orders?: boolean | string | (boolean | string)[]
	): LoDashExplicitArrayWrapper<T>
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
		createCallback(func: string, argCount?: number): () => any,
		createCallback(func: Dictionary<any>, argCount?: number): () => boolean
	}

	declare interface LoDashImplicitWrapper<T> {
		createCallback(argCount?: number): LoDashImplicitObjectWrapper<() => any>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		createCallback(argCount?: number): LoDashImplicitObjectWrapper<() => any>
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
		flip<T>(func: T): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		flip(): LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		flip(): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		flow<A1, R1, R2>(f1: (a1: A1) => R1, f2: (a: R1) => R2): (a1: A1) => R2,
		flow<A1, R1, R2, R3>(
		f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3
	): (a1: A1) => R3,
		flow<A1, R1, R2, R3, R4>(
		f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4
	): (a1: A1) => R4,
		flow<A1, R1, R2, R3, R4, R5>(
		f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5
	): (a1: A1) => R5,
		flow<A1, R1, R2, R3, R4, R5, R6>(
		f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6
	): (a1: A1) => R6,
		flow<A1, R1, R2, R3, R4, R5, R6, R7>(
		f1: (a1: A1) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7
	): (a1: A1) => R7,
		flow<A1, A2, R1, R2>(
		f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2
	): (a1: A1, a2: A2) => R2,
		flow<A1, A2, R1, R2, R3>(
		f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3
	): (a1: A1, a2: A2) => R3,
		flow<A1, A2, R1, R2, R3, R4>(
		f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4
	): (a1: A1, a2: A2) => R4,
		flow<A1, A2, R1, R2, R3, R4, R5>(
		f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5
	): (a1: A1, a2: A2) => R5,
		flow<A1, A2, R1, R2, R3, R4, R5, R6>(
		f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6
	): (a1: A1, a2: A2) => R6,
		flow<A1, A2, R1, R2, R3, R4, R5, R6, R7>(
		f1: (a1: A1, a2: A2) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7
	): (a1: A1, a2: A2) => R7,
		flow<A1, A2, A3, R1, R2>(
		f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2
	): (a1: A1, a2: A2, a3: A3) => R2,
		flow<A1, A2, A3, R1, R2, R3>(
		f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3
	): (a1: A1, a2: A2, a3: A3) => R3,
		flow<A1, A2, A3, R1, R2, R3, R4>(
		f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4
	): (a1: A1, a2: A2, a3: A3) => R4,
		flow<A1, A2, A3, R1, R2, R3, R4, R5>(
		f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5
	): (a1: A1, a2: A2, a3: A3) => R5,
		flow<A1, A2, A3, R1, R2, R3, R4, R5, R6>(
		f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6
	): (a1: A1, a2: A2, a3: A3) => R6,
		flow<A1, A2, A3, R1, R2, R3, R4, R5, R6, R7>(
		f1: (a1: A1, a2: A2, a3: A3) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7
	): (a1: A1, a2: A2, a3: A3) => R7,
		flow<A1, A2, A3, A4, R1, R2>(
		f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2
	): (a1: A1, a2: A2, a3: A3, a4: A4) => R2,
		flow<A1, A2, A3, A4, R1, R2, R3>(
		f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3
	): (a1: A1, a2: A2, a3: A3, a4: A4) => R3,
		flow<A1, A2, A3, A4, R1, R2, R3, R4>(
		f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4
	): (a1: A1, a2: A2, a3: A3, a4: A4) => R4,
		flow<A1, A2, A3, A4, R1, R2, R3, R4, R5>(
		f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5
	): (a1: A1, a2: A2, a3: A3, a4: A4) => R5,
		flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6>(
		f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6
	): (a1: A1, a2: A2, a3: A3, a4: A4) => R6,
		flow<A1, A2, A3, A4, R1, R2, R3, R4, R5, R6, R7>(
		f1: (a1: A1, a2: A2, a3: A3, a4: A4) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7
	): (a1: A1, a2: A2, a3: A3, a4: A4) => R7,
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
		Cache: MapCacheConstructor
	}
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		memoize(resolver?: Function): LoDashImplicitObjectWrapper<T & MemoizedFunction>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		memoize(resolver?: Function): LoDashExplicitObjectWrapper<T & MemoizedFunction>
	}

	declare interface LoDashStatic {
		overArgs<T, TResult>(func: T, ...transforms: Function[]): TResult,
		overArgs<T, TResult>(func: T, transforms: Function[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		overArgs<TResult>(...transforms: Function[]): LoDashImplicitObjectWrapper<TResult>,
		overArgs<TResult>(transforms: Function[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		overArgs<TResult>(...transforms: Function[]): LoDashExplicitObjectWrapper<TResult>,
		overArgs<TResult>(transforms: Function[]): LoDashExplicitObjectWrapper<TResult>
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
		rest<TResult>(func: Function, start?: number): TResult,
		rest<TResult, TFunc>(func: TFunc, start?: number): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		rest<TResult>(start?: number): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		rest<TResult>(start?: number): LoDashExplicitObjectWrapper<TResult>
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
		unary<T>(func: T): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		unary(): LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		unary(): LoDashExplicitObjectWrapper<T>
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

	declare interface LoDashStatic {
		castArray<T>(value: T): T[]
	}

	declare interface LoDashImplicitWrapper<T> {
		castArray(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		castArray(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		castArray(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitWrapper<T> {
		castArray(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		castArray(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		castArray(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		clone<T>(value: T): T
	}

	declare interface LoDashImplicitWrapper<T> {
		clone(): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		clone(): T[]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		clone(): T
	}

	declare interface LoDashExplicitWrapper<T> {
		clone(): LoDashExplicitWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		clone(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		clone(): LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		cloneDeep<T>(value: T): T
	}

	declare interface LoDashImplicitWrapper<T> {
		cloneDeep(): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		cloneDeep(): T[]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		cloneDeep(): T
	}

	declare interface LoDashExplicitWrapper<T> {
		cloneDeep(): LoDashExplicitWrapper<T>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		cloneDeep(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		cloneDeep(): LoDashExplicitObjectWrapper<T>
	}

	declare interface CloneDeepWithCustomizer<TValue, TResult> {
		(value: TValue): TResult
	}

	declare interface LoDashStatic {
		cloneDeepWith<TResult>(
		value: any, customizer?: CloneDeepWithCustomizer<any, TResult>
	): TResult,
		cloneDeepWith<T, TResult>(
		value: T, customizer?: CloneDeepWithCustomizer<T, TResult>
	): TResult
	}

	declare interface LoDashImplicitWrapper<T> {
		cloneDeepWith<TResult>(customizer?: CloneDeepWithCustomizer<T, TResult>): TResult
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		cloneDeepWith<TResult>(customizer?: CloneDeepWithCustomizer<T[], TResult>): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		cloneDeepWith<TResult>(customizer?: CloneDeepWithCustomizer<T, TResult>): TResult
	}

	declare interface LoDashExplicitWrapper<T> {
		cloneDeepWith<TResult>(
		customizer?: CloneDeepWithCustomizer<T, TResult>
	): LoDashExplicitWrapper<TResult>,
		cloneDeepWith<TResult>(
		customizer?: CloneDeepWithCustomizer<T, TResult[]>
	): LoDashExplicitArrayWrapper<TResult>,
		cloneDeepWith<TResult>(
		customizer?: CloneDeepWithCustomizer<T, TResult>
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		cloneDeepWith<TResult>(
		customizer?: CloneDeepWithCustomizer<T[], TResult>
	): LoDashExplicitWrapper<TResult>,
		cloneDeepWith<TResult>(
		customizer?: CloneDeepWithCustomizer<T[], TResult[]>
	): LoDashExplicitArrayWrapper<TResult>,
		cloneDeepWith<TResult>(
		customizer?: CloneDeepWithCustomizer<T[], TResult>
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		cloneDeepWith<TResult>(
		customizer?: CloneDeepWithCustomizer<T, TResult>
	): LoDashExplicitWrapper<TResult>,
		cloneDeepWith<TResult>(
		customizer?: CloneDeepWithCustomizer<T, TResult[]>
	): LoDashExplicitArrayWrapper<TResult>,
		cloneDeepWith<TResult>(
		customizer?: CloneDeepWithCustomizer<T, TResult>
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface CloneWithCustomizer<TValue, TResult> {
		(value: TValue): TResult
	}

	declare interface LoDashStatic {
		cloneWith<TResult>(value: any, customizer?: CloneWithCustomizer<any, TResult>): TResult,
		cloneWith<T, TResult>(value: T, customizer?: CloneWithCustomizer<T, TResult>): TResult
	}

	declare interface LoDashImplicitWrapper<T> {
		cloneWith<TResult>(customizer?: CloneWithCustomizer<T, TResult>): TResult
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		cloneWith<TResult>(customizer?: CloneWithCustomizer<T[], TResult>): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		cloneWith<TResult>(customizer?: CloneWithCustomizer<T, TResult>): TResult
	}

	declare interface LoDashExplicitWrapper<T> {
		cloneWith<TResult>(
		customizer?: CloneWithCustomizer<T, TResult>
	): LoDashExplicitWrapper<TResult>,
		cloneWith<TResult>(
		customizer?: CloneWithCustomizer<T, TResult[]>
	): LoDashExplicitArrayWrapper<TResult>,
		cloneWith<TResult>(
		customizer?: CloneWithCustomizer<T, TResult>
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		cloneWith<TResult>(
		customizer?: CloneWithCustomizer<T[], TResult>
	): LoDashExplicitWrapper<TResult>,
		cloneWith<TResult>(
		customizer?: CloneWithCustomizer<T[], TResult[]>
	): LoDashExplicitArrayWrapper<TResult>,
		cloneWith<TResult>(
		customizer?: CloneWithCustomizer<T[], TResult>
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		cloneWith<TResult>(
		customizer?: CloneWithCustomizer<T, TResult>
	): LoDashExplicitWrapper<TResult>,
		cloneWith<TResult>(
		customizer?: CloneWithCustomizer<T, TResult[]>
	): LoDashExplicitArrayWrapper<TResult>,
		cloneWith<TResult>(
		customizer?: CloneWithCustomizer<T, TResult>
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		eq(value: any, other: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		eq(other: any): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		eq(other: any): LoDashExplicitWrapper<boolean>
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
		isArrayBuffer(value?: any): ArrayBuffer
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isArrayBuffer(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isArrayBuffer(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isArrayLike<T>(value?: any): T[]
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isArrayLike(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isArrayLike(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isArrayLikeObject<T>(value?: any): T[]
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isArrayLikeObject(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isArrayLikeObject(): LoDashExplicitWrapper<boolean>
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
		isBuffer(value?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isBuffer(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isBuffer(): LoDashExplicitWrapper<boolean>
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

	declare interface LoDashStatic {
		isEqual(value: any, other: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isEqual(other: any): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isEqual(other: any): LoDashExplicitWrapper<boolean>
	}

	declare interface IsEqualCustomizer {
		(value: any, other: any, indexOrKey?: number | string): boolean
	}

	declare interface LoDashStatic {
		isEqualWith(value: any, other: any, customizer: IsEqualCustomizer): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isEqualWith(other: any, customizer: IsEqualCustomizer): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isEqualWith(other: any, customizer: IsEqualCustomizer): LoDashExplicitWrapper<boolean>
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

	declare interface LoDashStatic {
		isInteger(value?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isInteger(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isInteger(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isLength(value?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isLength(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isLength(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isMap<K, V>(value?: any): Map
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isMap(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isMap(): LoDashExplicitWrapper<boolean>
	}

	declare interface isMatchCustomizer {
		(value: any, other: any, indexOrKey?: number | string): boolean
	}

	declare interface LoDashStatic {
		isMatch(object: Object, source: Object): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		isMatch(source: Object): boolean
	}

	declare interface isMatchWithCustomizer {
		(value: any, other: any, indexOrKey?: number | string): boolean
	}

	declare interface LoDashStatic {
		isMatchWith(object: Object, source: Object, customizer: isMatchWithCustomizer): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		isMatchWith(source: Object, customizer: isMatchWithCustomizer): boolean
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
		isNil(value?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isNil(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isNil(): LoDashExplicitWrapper<boolean>
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
		isObjectLike(value?: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isObjectLike(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isObjectLike(): LoDashExplicitWrapper<boolean>
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
		isSafeInteger(value: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isSafeInteger(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isSafeInteger(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isSet<T>(value?: any): Set
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isSet(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isSet(): LoDashExplicitWrapper<boolean>
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
		isSymbol(value: any): boolean
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isSymbol(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isSymbol(): LoDashExplicitWrapper<boolean>
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
		isWeakMap<K, V>(value?: any): WeakMap
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isWeakMap(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isWeakMap(): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		isWeakSet<T>(value?: any): WeakSet
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		isWeakSet(): boolean
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		isWeakSet(): LoDashExplicitWrapper<boolean>
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
		toInteger(value: any): number
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		toInteger(): LoDashImplicitWrapper<number>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		toInteger(): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		toLength(value: any): number
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		toLength(): LoDashImplicitWrapper<number>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		toLength(): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		toNumber(value: any): number
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		toNumber(): LoDashImplicitWrapper<number>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		toNumber(): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		toSafeInteger(value: any): number
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		toSafeInteger(): LoDashImplicitWrapper<number>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		toSafeInteger(): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		toString(value: any): string
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
		max<T>(collection: List<T>): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		max(): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		max<T>(): T
	}

	declare interface LoDashStatic {
		maxBy<T>(collection: List<T>, iteratee?: ListIterator<T, any>): T,
		maxBy<T>(collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>): T,
		maxBy<T>(collection: List<T> | Dictionary<T>, iteratee?: string): T,
		maxBy<TObject, T>(collection: List<T> | Dictionary<T>, whereValue?: TObject): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		maxBy(iteratee?: ListIterator<T, any>): T,
		maxBy(iteratee?: string): T,
		maxBy<TObject>(whereValue?: TObject): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		maxBy<T>(iteratee?: ListIterator<T, any> | DictionaryIterator<T, any>): T,
		maxBy<T>(iteratee?: string): T,
		maxBy<TObject, T>(whereValue?: TObject): T
	}

	declare interface LoDashStatic {
		mean<T>(collection: List<T>): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		mean<T>(): number,
		mean(): number
	}

	declare interface LoDashStatic {
		min<T>(collection: List<T>): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		min(): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		min<T>(): T
	}

	declare interface LoDashStatic {
		minBy<T>(collection: List<T>, iteratee?: ListIterator<T, any>): T,
		minBy<T>(collection: Dictionary<T>, iteratee?: DictionaryIterator<T, any>): T,
		minBy<T>(collection: List<T> | Dictionary<T>, iteratee?: string): T,
		minBy<TObject, T>(collection: List<T> | Dictionary<T>, whereValue?: TObject): T
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		minBy(iteratee?: ListIterator<T, any>): T,
		minBy(iteratee?: string): T,
		minBy<TObject>(whereValue?: TObject): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		minBy<T>(iteratee?: ListIterator<T, any> | DictionaryIterator<T, any>): T,
		minBy<T>(iteratee?: string): T,
		minBy<TObject, T>(whereValue?: TObject): T
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
		sum<T>(collection: List<T>): number,
		sum(collection: List<number> | Dictionary<number>): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sum(): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sum<TValue>(): number,
		sum(): number
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sum(): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sum<TValue>(): LoDashExplicitWrapper<number>,
		sum(): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		sumBy<T>(collection: List<T>, iteratee: ListIterator<T, number>): number,
		sumBy(collection: List<{
		
	}>, iteratee: string): number,
		sumBy(collection: List<number>): number,
		sumBy(collection: List<{
		
	}>, iteratee: Dictionary<{
		
	}>): number
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		sumBy(iteratee: ListIterator<T, number>): number,
		sumBy(iteratee: string): number,
		sumBy(iteratee: Dictionary<{
		
	}>): number
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		sumBy(iteratee: ListIterator<{
		
	}, number>): number,
		sumBy(iteratee: string): number,
		sumBy(iteratee: Dictionary<{
		
	}>): number
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		sumBy(iteratee: ListIterator<T, number>): LoDashExplicitWrapper<number>,
		sumBy(iteratee: string): LoDashExplicitWrapper<number>,
		sumBy(): LoDashExplicitWrapper<number>,
		sumBy(iteratee: Dictionary<{
		
	}>): LoDashExplicitWrapper<number>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		sumBy(iteratee: ListIterator<{
		
	}, number>): LoDashExplicitWrapper<number>,
		sumBy(iteratee: string): LoDashExplicitWrapper<number>,
		sumBy(iteratee: Dictionary<{
		
	}>): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		subtract(minuend: number, subtrahend: number): number
	}

	declare interface LoDashImplicitWrapper<T> {
		subtract(subtrahend: number): number
	}

	declare interface LoDashExplicitWrapper<T> {
		subtract(subtrahend: number): LoDashExplicitWrapper<number>
	}

	declare interface LoDashStatic {
		clamp(number: number, lower: number, upper: number): number
	}

	declare interface LoDashImplicitWrapper<T> {
		clamp(lower: number, upper: number): number
	}

	declare interface LoDashExplicitWrapper<T> {
		clamp(lower: number, upper: number): LoDashExplicitWrapper<number>
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

	declare interface LoDashStatic {
		assign<TObject, TSource>(object: TObject, source: TSource): TObject & TSource,
		assign<TObject, TSource1, TSource2>(
		object: TObject, source1: TSource1, source2: TSource2
	): TObject & TSource1 & TSource2,
		assign<TObject, TSource1, TSource2, TSource3>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3
	): TObject & TSource1 & TSource2 & TSource3,
		assign<TObject, TSource1, TSource2, TSource3, TSource4>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): TObject & TSource1 & TSource2 & TSource3 & TSource4,
		assign<TObject>(object: TObject): TObject,
		assign<TResult>(object: any, ...otherArgs: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		assign<TSource>(source: TSource): LoDashImplicitObjectWrapper<T & TSource>,
		assign<TSource1, TSource2>(
		source1: TSource1, source2: TSource2
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2>,
		assign<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		assign<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		assign(): LoDashImplicitObjectWrapper<T>,
		assign<TResult>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		assign<TSource>(source: TSource): LoDashExplicitObjectWrapper<T & TSource>,
		assign<TSource1, TSource2>(
		source1: TSource1, source2: TSource2
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2>,
		assign<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		assign<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		assign(): LoDashExplicitObjectWrapper<T>,
		assign<TResult>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface AssignCustomizer {
		(objectValue: any, sourceValue: any, key?: string, object?: {
		
	}, source?: {
		
	}): any
	}

	declare interface LoDashStatic {
		assignWith<TObject, TSource>(
		object: TObject, source: TSource, customizer: AssignCustomizer
	): TObject & TSource,
		assignWith<TObject, TSource1, TSource2>(
		object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer
	): TObject & TSource1 & TSource2,
		assignWith<TObject, TSource1, TSource2, TSource3>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer
	): TObject & TSource1 & TSource2 & TSource3,
		assignWith<TObject, TSource1, TSource2, TSource3, TSource4>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer
	): TObject & TSource1 & TSource2 & TSource3 & TSource4,
		assignWith<TObject>(object: TObject): TObject,
		assignWith<TResult>(object: any, ...otherArgs: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		assignWith<TSource>(
		source: TSource, customizer: AssignCustomizer
	): LoDashImplicitObjectWrapper<T & TSource>,
		assignWith<TSource1, TSource2>(
		source1: TSource1, source2: TSource2, customizer: AssignCustomizer
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2>,
		assignWith<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		assignWith<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		assignWith(): LoDashImplicitObjectWrapper<T>,
		assignWith<TResult>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		assignWith<TSource>(
		source: TSource, customizer: AssignCustomizer
	): LoDashExplicitObjectWrapper<T & TSource>,
		assignWith<TSource1, TSource2>(
		source1: TSource1, source2: TSource2, customizer: AssignCustomizer
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2>,
		assignWith<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		assignWith<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		assignWith(): LoDashExplicitObjectWrapper<T>,
		assignWith<TResult>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		assignIn<TObject, TSource>(object: TObject, source: TSource): TObject & TSource,
		assignIn<TObject, TSource1, TSource2>(
		object: TObject, source1: TSource1, source2: TSource2
	): TObject & TSource1 & TSource2,
		assignIn<TObject, TSource1, TSource2, TSource3>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3
	): TObject & TSource1 & TSource2 & TSource3,
		assignIn<TObject, TSource1, TSource2, TSource3, TSource4>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): TObject & TSource1 & TSource2 & TSource3 & TSource4,
		assignIn<TObject>(object: TObject): TObject,
		assignIn<TResult>(object: any, ...otherArgs: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		assignIn<TSource>(source: TSource): LoDashImplicitObjectWrapper<T & TSource>,
		assignIn<TSource1, TSource2>(
		source1: TSource1, source2: TSource2
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2>,
		assignIn<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		assignIn<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		assignIn(): LoDashImplicitObjectWrapper<T>,
		assignIn<TResult>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		assignIn<TSource>(source: TSource): LoDashExplicitObjectWrapper<T & TSource>,
		assignIn<TSource1, TSource2>(
		source1: TSource1, source2: TSource2
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2>,
		assignIn<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		assignIn<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		assignIn(): LoDashExplicitObjectWrapper<T>,
		assignIn<TResult>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface AssignCustomizer {
		(objectValue: any, sourceValue: any, key?: string, object?: {
		
	}, source?: {
		
	}): any
	}

	declare interface LoDashStatic {
		assignInWith<TObject, TSource>(
		object: TObject, source: TSource, customizer: AssignCustomizer
	): TObject & TSource,
		assignInWith<TObject, TSource1, TSource2>(
		object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer
	): TObject & TSource1 & TSource2,
		assignInWith<TObject, TSource1, TSource2, TSource3>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer
	): TObject & TSource1 & TSource2 & TSource3,
		assignInWith<TObject, TSource1, TSource2, TSource3, TSource4>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer
	): TObject & TSource1 & TSource2 & TSource3 & TSource4,
		assignInWith<TObject>(object: TObject): TObject,
		assignInWith<TResult>(object: any, ...otherArgs: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		assignInWith<TSource>(
		source: TSource, customizer: AssignCustomizer
	): LoDashImplicitObjectWrapper<T & TSource>,
		assignInWith<TSource1, TSource2>(
		source1: TSource1, source2: TSource2, customizer: AssignCustomizer
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2>,
		assignInWith<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		assignInWith<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		assignInWith(): LoDashImplicitObjectWrapper<T>,
		assignInWith<TResult>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		assignInWith<TSource>(
		source: TSource, customizer: AssignCustomizer
	): LoDashExplicitObjectWrapper<T & TSource>,
		assignInWith<TSource1, TSource2>(
		source1: TSource1, source2: TSource2, customizer: AssignCustomizer
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2>,
		assignInWith<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		assignInWith<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		assignInWith(): LoDashExplicitObjectWrapper<T>,
		assignInWith<TResult>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>
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
		defaults<TObject, TSource>(object: TObject, source: TSource): TSource & TObject,
		defaults<TObject, TSource1, TSource2>(
		object: TObject, source1: TSource1, source2: TSource2
	): TSource2 & TSource1 & TObject,
		defaults<TObject, TSource1, TSource2, TSource3>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3
	): TSource3 & TSource2 & TSource1 & TObject,
		defaults<TObject, TSource1, TSource2, TSource3, TSource4>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): TSource4 & TSource3 & TSource2 & TSource1 & TObject,
		defaults<TObject>(object: TObject): TObject,
		defaults<TResult>(object: any, ...sources: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		defaults<TSource>(source: TSource): LoDashImplicitObjectWrapper<TSource & T>,
		defaults<TSource1, TSource2>(
		source1: TSource1, source2: TSource2
	): LoDashImplicitObjectWrapper<TSource2 & TSource1 & T>,
		defaults<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3
	): LoDashImplicitObjectWrapper<TSource3 & TSource2 & TSource1 & T>,
		defaults<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): LoDashImplicitObjectWrapper<TSource4 & TSource3 & TSource2 & TSource1 & T>,
		defaults(): LoDashImplicitObjectWrapper<T>,
		defaults<TResult>(...sources: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		defaults<TSource>(source: TSource): LoDashExplicitObjectWrapper<TSource & T>,
		defaults<TSource1, TSource2>(
		source1: TSource1, source2: TSource2
	): LoDashExplicitObjectWrapper<TSource2 & TSource1 & T>,
		defaults<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3
	): LoDashExplicitObjectWrapper<TSource3 & TSource2 & TSource1 & T>,
		defaults<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): LoDashExplicitObjectWrapper<TSource4 & TSource3 & TSource2 & TSource1 & T>,
		defaults(): LoDashExplicitObjectWrapper<T>,
		defaults<TResult>(...sources: any[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		defaultsDeep<T, TResult>(object: T, ...sources: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		defaultsDeep<TResult>(...sources: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		extend<TObject, TSource>(object: TObject, source: TSource): TObject & TSource,
		extend<TObject, TSource1, TSource2>(
		object: TObject, source1: TSource1, source2: TSource2
	): TObject & TSource1 & TSource2,
		extend<TObject, TSource1, TSource2, TSource3>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3
	): TObject & TSource1 & TSource2 & TSource3,
		extend<TObject, TSource1, TSource2, TSource3, TSource4>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): TObject & TSource1 & TSource2 & TSource3 & TSource4,
		extend<TObject>(object: TObject): TObject,
		extend<TResult>(object: any, ...otherArgs: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		extend<TSource>(source: TSource): LoDashImplicitObjectWrapper<T & TSource>,
		extend<TSource1, TSource2>(
		source1: TSource1, source2: TSource2
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2>,
		extend<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		extend<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		extend(): LoDashImplicitObjectWrapper<T>,
		extend<TResult>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		extend<TSource>(source: TSource): LoDashExplicitObjectWrapper<T & TSource>,
		extend<TSource1, TSource2>(
		source1: TSource1, source2: TSource2
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2>,
		extend<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		extend<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		extend(): LoDashExplicitObjectWrapper<T>,
		extend<TResult>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		extendWith<TObject, TSource>(
		object: TObject, source: TSource, customizer: AssignCustomizer
	): TObject & TSource,
		extendWith<TObject, TSource1, TSource2>(
		object: TObject, source1: TSource1, source2: TSource2, customizer: AssignCustomizer
	): TObject & TSource1 & TSource2,
		extendWith<TObject, TSource1, TSource2, TSource3>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer
	): TObject & TSource1 & TSource2 & TSource3,
		extendWith<TObject, TSource1, TSource2, TSource3, TSource4>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer
	): TObject & TSource1 & TSource2 & TSource3 & TSource4,
		extendWith<TObject>(object: TObject): TObject,
		extendWith<TResult>(object: any, ...otherArgs: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		extendWith<TSource>(
		source: TSource, customizer: AssignCustomizer
	): LoDashImplicitObjectWrapper<T & TSource>,
		extendWith<TSource1, TSource2>(
		source1: TSource1, source2: TSource2, customizer: AssignCustomizer
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2>,
		extendWith<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		extendWith<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		extendWith(): LoDashImplicitObjectWrapper<T>,
		extendWith<TResult>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		extendWith<TSource>(
		source: TSource, customizer: AssignCustomizer
	): LoDashExplicitObjectWrapper<T & TSource>,
		extendWith<TSource1, TSource2>(
		source1: TSource1, source2: TSource2, customizer: AssignCustomizer
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2>,
		extendWith<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3, customizer: AssignCustomizer
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		extendWith<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: AssignCustomizer
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		extendWith(): LoDashExplicitObjectWrapper<T>,
		extendWith<TResult>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		findKey<TValues, TObject>(
		object: TObject, predicate?: DictionaryIterator<TValues, boolean>
	): string,
		findKey<TObject>(object: TObject, predicate?: ObjectIterator<any, boolean>): string,
		findKey<TObject>(object: TObject, predicate?: string): string,
		findKey<TWhere, TObject>(object: TObject, predicate?: TWhere): string
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		findKey<TValues>(predicate?: DictionaryIterator<TValues, boolean>): string,
		findKey(predicate?: ObjectIterator<any, boolean>): string,
		findKey(predicate?: string): string,
		findKey<TWhere>(predicate?: TWhere): string
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		findKey<TValues>(
		predicate?: DictionaryIterator<TValues, boolean>
	): LoDashExplicitWrapper<string>,
		findKey(predicate?: ObjectIterator<any, boolean>): LoDashExplicitWrapper<string>,
		findKey(predicate?: string): LoDashExplicitWrapper<string>,
		findKey<TWhere>(predicate?: TWhere): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		findLastKey<TValues, TObject>(
		object: TObject, predicate?: DictionaryIterator<TValues, boolean>
	): string,
		findLastKey<TObject>(object: TObject, predicate?: ObjectIterator<any, boolean>): string,
		findLastKey<TObject>(object: TObject, predicate?: string): string,
		findLastKey<TWhere, TObject>(object: TObject, predicate?: TWhere): string
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		findLastKey<TValues>(predicate?: DictionaryIterator<TValues, boolean>): string,
		findLastKey(predicate?: ObjectIterator<any, boolean>): string,
		findLastKey(predicate?: string): string,
		findLastKey<TWhere>(predicate?: TWhere): string
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		findLastKey<TValues>(
		predicate?: DictionaryIterator<TValues, boolean>
	): LoDashExplicitWrapper<string>,
		findLastKey(predicate?: ObjectIterator<any, boolean>): LoDashExplicitWrapper<string>,
		findLastKey(predicate?: string): LoDashExplicitWrapper<string>,
		findLastKey<TWhere>(predicate?: TWhere): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		forIn<T>(object: Dictionary<T>, iteratee?: DictionaryIterator<T, any>): Dictionary<T>,
		forIn<T>(object: T, iteratee?: ObjectIterator<any, any>): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		forIn<TValue>(
		iteratee?: DictionaryIterator<TValue, any>
	): _.LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		forIn<TValue>(
		iteratee?: DictionaryIterator<TValue, any>
	): _.LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		forInRight<T>(object: Dictionary<T>, iteratee?: DictionaryIterator<T, any>): Dictionary<T>,
		forInRight<T>(object: T, iteratee?: ObjectIterator<any, any>): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		forInRight<TValue>(
		iteratee?: DictionaryIterator<TValue, any>
	): _.LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		forInRight<TValue>(
		iteratee?: DictionaryIterator<TValue, any>
	): _.LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		forOwn<T>(object: Dictionary<T>, iteratee?: DictionaryIterator<T, any>): Dictionary<T>,
		forOwn<T>(object: T, iteratee?: ObjectIterator<any, any>): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		forOwn<TValue>(
		iteratee?: DictionaryIterator<TValue, any>
	): _.LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		forOwn<TValue>(
		iteratee?: DictionaryIterator<TValue, any>
	): _.LoDashExplicitObjectWrapper<T>
	}

	declare interface LoDashStatic {
		forOwnRight<T>(object: Dictionary<T>, iteratee?: DictionaryIterator<T, any>): Dictionary<T>,
		forOwnRight<T>(object: T, iteratee?: ObjectIterator<any, any>): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		forOwnRight<TValue>(
		iteratee?: DictionaryIterator<TValue, any>
	): _.LoDashImplicitObjectWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		forOwnRight<TValue>(
		iteratee?: DictionaryIterator<TValue, any>
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
		functionsIn<T>(object: any): string[]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		functionsIn(): _.LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		functionsIn(): _.LoDashExplicitArrayWrapper<string>
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
		hasIn<T>(object: T, path: StringRepresentable | StringRepresentable[]): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		hasIn(path: StringRepresentable | StringRepresentable[]): boolean
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		hasIn(
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

	declare interface InvertByIterator<T> {
		(value: T): any
	}

	declare interface LoDashStatic {
		invertBy(
		object: Object, interatee?: InvertByIterator<any> | string
	): Dictionary<string[]>,
		invertBy<T>(
		object: _.Dictionary<T> | _.NumericDictionary<T>, interatee?: InvertByIterator<T> | string
	): Dictionary<string[]>,
		invertBy<W>(object: Object, interatee?: W): Dictionary<string[]>,
		invertBy<T, W>(object: _.Dictionary<T>, interatee?: W): Dictionary<string[]>
	}

	declare interface LoDashImplicitWrapper<T> {
		invertBy(
		interatee?: InvertByIterator<any>
	): LoDashImplicitObjectWrapper<Dictionary<string[]>>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		invertBy(
		interatee?: InvertByIterator<T> | string
	): LoDashImplicitObjectWrapper<Dictionary<string[]>>,
		invertBy<W>(interatee?: W): LoDashImplicitObjectWrapper<Dictionary<string[]>>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		invertBy(
		interatee?: InvertByIterator<any> | string
	): LoDashImplicitObjectWrapper<Dictionary<string[]>>,
		invertBy<W>(interatee?: W): LoDashImplicitObjectWrapper<Dictionary<string[]>>
	}

	declare interface LoDashExplicitWrapper<T> {
		invertBy(
		interatee?: InvertByIterator<any>
	): LoDashExplicitObjectWrapper<Dictionary<string[]>>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		invertBy(
		interatee?: InvertByIterator<T> | string
	): LoDashExplicitObjectWrapper<Dictionary<string[]>>,
		invertBy<W>(interatee?: W): LoDashExplicitObjectWrapper<Dictionary<string[]>>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		invertBy(
		interatee?: InvertByIterator<any> | string
	): LoDashExplicitObjectWrapper<Dictionary<string[]>>,
		invertBy<W>(interatee?: W): LoDashExplicitObjectWrapper<Dictionary<string[]>>
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
		mapKeys<T, TKey>(object: List<T>, iteratee?: ListIterator<T, TKey>): Dictionary<T>,
		mapKeys<T, TKey>(
		object: Dictionary<T>, iteratee?: DictionaryIterator<T, TKey>
	): Dictionary<T>,
		mapKeys<T, TObject>(object: List<T> | Dictionary<T>, iteratee?: TObject): Dictionary<T>,
		mapKeys<T>(object: List<T> | Dictionary<T>, iteratee?: string): Dictionary<T>
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		mapKeys<TKey>(
		iteratee?: ListIterator<T, TKey>
	): LoDashImplicitObjectWrapper<Dictionary<T>>,
		mapKeys<TObject>(iteratee?: TObject): LoDashImplicitObjectWrapper<Dictionary<T>>,
		mapKeys(iteratee?: string): LoDashImplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		mapKeys<TResult, TKey>(
		iteratee?: ListIterator<TResult, TKey> | DictionaryIterator<TResult, TKey>
	): LoDashImplicitObjectWrapper<Dictionary<TResult>>,
		mapKeys<TResult, TObject>(
		iteratee?: TObject
	): LoDashImplicitObjectWrapper<Dictionary<TResult>>,
		mapKeys<TResult>(iteratee?: string): LoDashImplicitObjectWrapper<Dictionary<TResult>>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		mapKeys<TKey>(
		iteratee?: ListIterator<T, TKey>
	): LoDashExplicitObjectWrapper<Dictionary<T>>,
		mapKeys<TObject>(iteratee?: TObject): LoDashExplicitObjectWrapper<Dictionary<T>>,
		mapKeys(iteratee?: string): LoDashExplicitObjectWrapper<Dictionary<T>>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		mapKeys<TResult, TKey>(
		iteratee?: ListIterator<TResult, TKey> | DictionaryIterator<TResult, TKey>
	): LoDashExplicitObjectWrapper<Dictionary<TResult>>,
		mapKeys<TResult, TObject>(
		iteratee?: TObject
	): LoDashExplicitObjectWrapper<Dictionary<TResult>>,
		mapKeys<TResult>(iteratee?: string): LoDashExplicitObjectWrapper<Dictionary<TResult>>
	}

	declare interface LoDashStatic {
		mapValues<T, TResult>(
		obj: Dictionary<T>, callback: ObjectIterator<T, TResult>
	): Dictionary<TResult>,
		mapValues<T>(obj: Dictionary<T>, where: Dictionary<T>): Dictionary<boolean>,
		mapValues<T, TMapped>(obj: T, pluck: string): TMapped,
		mapValues<T>(obj: T, callback: ObjectIterator<any, any>): T
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		mapValues<TValue, TResult>(
		callback: ObjectIterator<TValue, TResult>
	): LoDashImplicitObjectWrapper<Dictionary<TResult>>,
		mapValues<TResult>(pluck: string): LoDashImplicitObjectWrapper<Dictionary<TResult>>,
		mapValues<TResult>(where: Dictionary<TResult>): LoDashImplicitArrayWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		mapValues<TValue, TResult>(
		callback: ObjectIterator<TValue, TResult>
	): LoDashExplicitObjectWrapper<Dictionary<TResult>>,
		mapValues<TResult>(pluck: string): LoDashExplicitObjectWrapper<Dictionary<TResult>>,
		mapValues<TResult>(where: Dictionary<TResult>): LoDashExplicitObjectWrapper<boolean>
	}

	declare interface LoDashStatic {
		merge<TObject, TSource>(object: TObject, source: TSource): TObject & TSource,
		merge<TObject, TSource1, TSource2>(
		object: TObject, source1: TSource1, source2: TSource2
	): TObject & TSource1 & TSource2,
		merge<TObject, TSource1, TSource2, TSource3>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3
	): TObject & TSource1 & TSource2 & TSource3,
		merge<TObject, TSource1, TSource2, TSource3, TSource4>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): TObject & TSource1 & TSource2 & TSource3 & TSource4,
		merge<TResult>(object: any, ...otherArgs: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		merge<TSource>(source: TSource): LoDashImplicitObjectWrapper<T & TSource>,
		merge<TSource1, TSource2>(
		source1: TSource1, source2: TSource2
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2>,
		merge<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		merge<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		merge<TResult>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		merge<TSource>(source: TSource): LoDashExplicitObjectWrapper<T & TSource>,
		merge<TSource1, TSource2>(
		source1: TSource1, source2: TSource2
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2>,
		merge<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		merge<TSource1, TSource2, TSource3, TSource4>(
		
	): LoDashExplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		merge<TResult>(...otherArgs: any[]): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface MergeWithCustomizer {
		(value: any, srcValue: any, key?: string, object?: Object, source?: Object): any
	}

	declare interface LoDashStatic {
		mergeWith<TObject, TSource>(
		object: TObject, source: TSource, customizer: MergeWithCustomizer
	): TObject & TSource,
		mergeWith<TObject, TSource1, TSource2>(
		object: TObject, source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer
	): TObject & TSource1 & TSource2,
		mergeWith<TObject, TSource1, TSource2, TSource3>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer
	): TObject & TSource1 & TSource2 & TSource3,
		mergeWith<TObject, TSource1, TSource2, TSource3, TSource4>(
		object: TObject, source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer
	): TObject & TSource1 & TSource2 & TSource3 & TSource4,
		mergeWith<TResult>(object: any, ...otherArgs: any[]): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		mergeWith<TSource>(
		source: TSource, customizer: MergeWithCustomizer
	): LoDashImplicitObjectWrapper<T & TSource>,
		mergeWith<TSource1, TSource2>(
		source1: TSource1, source2: TSource2, customizer: MergeWithCustomizer
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2>,
		mergeWith<TSource1, TSource2, TSource3>(
		source1: TSource1, source2: TSource2, source3: TSource3, customizer: MergeWithCustomizer
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3>,
		mergeWith<TSource1, TSource2, TSource3, TSource4>(
		source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, customizer: MergeWithCustomizer
	): LoDashImplicitObjectWrapper<T & TSource1 & TSource2 & TSource3 & TSource4>,
		mergeWith<TResult>(...otherArgs: any[]): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		omit<TResult, T>(
		object: T, ...predicate: (StringRepresentable | StringRepresentable[])[]
	): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		omit<TResult>(
		...predicate: (StringRepresentable | StringRepresentable[])[]
	): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		omit<TResult>(
		...predicate: (StringRepresentable | StringRepresentable[])[]
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		omitBy<TResult, T>(object: T, predicate: ObjectIterator<any, boolean>): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		omitBy<TResult>(
		predicate: ObjectIterator<any, boolean>
	): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		omitBy<TResult>(
		predicate: ObjectIterator<any, boolean>
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		pick<TResult, T>(
		object: T, ...predicate: (StringRepresentable | StringRepresentable[])[]
	): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		pick<TResult>(
		...predicate: (StringRepresentable | StringRepresentable[])[]
	): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		pick<TResult>(
		...predicate: (StringRepresentable | StringRepresentable[])[]
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		pickBy<TResult, T>(object: T, predicate?: ObjectIterator<any, boolean>): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		pickBy<TResult>(
		predicate?: ObjectIterator<any, boolean>
	): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		pickBy<TResult>(
		predicate?: ObjectIterator<any, boolean>
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

	declare interface SetWithCustomizer<T> {
		(nsValue: any, key: string, nsObject: T): any
	}

	declare interface LoDashStatic {
		setWith<TResult>(
		object: Object, path: StringRepresentable | StringRepresentable[], value: any, customizer?: SetWithCustomizer<Object>
	): TResult,
		setWith<V, TResult>(
		object: Object, path: StringRepresentable | StringRepresentable[], value: V, customizer?: SetWithCustomizer<Object>
	): TResult,
		setWith<O, V, TResult>(
		object: O, path: StringRepresentable | StringRepresentable[], value: V, customizer?: SetWithCustomizer<O>
	): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		setWith<TResult>(
		path: StringRepresentable | StringRepresentable[], value: any, customizer?: SetWithCustomizer<T>
	): LoDashImplicitObjectWrapper<TResult>,
		setWith<V, TResult>(
		path: StringRepresentable | StringRepresentable[], value: V, customizer?: SetWithCustomizer<T>
	): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		setWith<TResult>(
		path: StringRepresentable | StringRepresentable[], value: any, customizer?: SetWithCustomizer<T>
	): LoDashExplicitObjectWrapper<TResult>,
		setWith<V, TResult>(
		path: StringRepresentable | StringRepresentable[], value: V, customizer?: SetWithCustomizer<T>
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		toPairs<T>(object?: T): any[][],
		toPairs<T, TResult>(object?: T): TResult[][]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		toPairs<TResult>(): LoDashImplicitArrayWrapper<TResult[]>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		toPairs<TResult>(): LoDashExplicitArrayWrapper<TResult[]>
	}

	declare interface LoDashStatic {
		toPairsIn<T>(object?: T): any[][],
		toPairsIn<T, TResult>(object?: T): TResult[][]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		toPairsIn<TResult>(): LoDashImplicitArrayWrapper<TResult[]>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		toPairsIn<TResult>(): LoDashExplicitArrayWrapper<TResult[]>
	}

	declare interface LoDashStatic {
		transform<T, TResult>(
		object: T[], iteratee?: MemoVoidArrayIterator<T, TResult[]>, accumulator?: TResult[]
	): TResult[],
		transform<T, TResult>(
		object: T[], iteratee?: MemoVoidArrayIterator<T, Dictionary<TResult>>, accumulator?: Dictionary<TResult>
	): Dictionary<TResult>,
		transform<T, TResult>(
		object: Dictionary<T>, iteratee?: MemoVoidDictionaryIterator<T, Dictionary<TResult>>, accumulator?: Dictionary<TResult>
	): Dictionary<TResult>,
		transform<T, TResult>(
		object: Dictionary<T>, iteratee?: MemoVoidDictionaryIterator<T, TResult[]>, accumulator?: TResult[]
	): TResult[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		transform<TResult>(
		iteratee?: MemoVoidArrayIterator<T, TResult[]>, accumulator?: TResult[]
	): LoDashImplicitArrayWrapper<TResult>,
		transform<TResult>(
		iteratee?: MemoVoidArrayIterator<T, Dictionary<TResult>>, accumulator?: Dictionary<TResult>
	): LoDashImplicitObjectWrapper<Dictionary<TResult>>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		transform<T, TResult>(
		iteratee?: MemoVoidDictionaryIterator<T, Dictionary<TResult>>, accumulator?: Dictionary<TResult>
	): LoDashImplicitObjectWrapper<Dictionary<TResult>>,
		transform<T, TResult>(
		iteratee?: MemoVoidDictionaryIterator<T, TResult[]>, accumulator?: TResult[]
	): LoDashImplicitArrayWrapper<TResult>
	}

	declare interface LoDashStatic {
		unset<T>(object: T, path: StringRepresentable | StringRepresentable[]): boolean
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		unset(
		path: StringRepresentable | StringRepresentable[]
	): LoDashImplicitWrapper<boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		unset(
		path: StringRepresentable | StringRepresentable[]
	): LoDashExplicitWrapper<boolean>
	}

	declare interface LoDashStatic {
		update<TResult>(
		object: Object, path: StringRepresentable | StringRepresentable[], updater: Function
	): TResult,
		update<U, TResult>(
		object: Object, path: StringRepresentable | StringRepresentable[], updater: U
	): TResult,
		update<O, TResult>(
		object: O, path: StringRepresentable | StringRepresentable[], updater: Function
	): TResult,
		update<O, U, TResult>(
		object: O, path: StringRepresentable | StringRepresentable[], updater: U
	): TResult
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		update<TResult>(
		path: StringRepresentable | StringRepresentable[], updater: any
	): LoDashImplicitObjectWrapper<TResult>,
		update<U, TResult>(
		path: StringRepresentable | StringRepresentable[], updater: U
	): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		update<TResult>(
		path: StringRepresentable | StringRepresentable[], updater: any
	): LoDashExplicitObjectWrapper<TResult>,
		update<U, TResult>(
		path: StringRepresentable | StringRepresentable[], updater: U
	): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		values<T>(object?: Dictionary<T>): T[],
		values<T>(object?: any): T[]
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		values<T>(): LoDashImplicitArrayWrapper<T>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		values<T>(): LoDashExplicitArrayWrapper<T>
	}

	declare interface LoDashStatic {
		valuesIn<T>(object?: Dictionary<T>): T[],
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
		lowerCase(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		lowerCase(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		lowerCase(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		lowerFirst(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		lowerFirst(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		lowerFirst(): LoDashExplicitWrapper<string>
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
		padEnd(string?: string, length?: number, chars?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		padEnd(length?: number, chars?: string): string
	}

	declare interface LoDashExplicitWrapper<T> {
		padEnd(length?: number, chars?: string): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		padStart(string?: string, length?: number, chars?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		padStart(length?: number, chars?: string): string
	}

	declare interface LoDashExplicitWrapper<T> {
		padStart(length?: number, chars?: string): LoDashExplicitWrapper<string>
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
		replace(
		string: string, pattern: RegExp | string, replacement: Function | string
	): string,
		replace(pattern?: RegExp | string, replacement?: Function | string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		replace(pattern?: RegExp | string, replacement?: Function | string): string,
		replace(replacement?: Function | string): string
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		replace(pattern?: RegExp | string, replacement?: Function | string): string,
		replace(replacement?: Function | string): string
	}

	declare interface LoDashExplicitWrapper<T> {
		replace(
		pattern?: RegExp | string, replacement?: Function | string
	): LoDashExplicitWrapper<string>,
		replace(replacement?: Function | string): LoDashExplicitWrapper<string>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		replace(
		pattern?: RegExp | string, replacement?: Function | string
	): LoDashExplicitWrapper<string>,
		replace(replacement?: Function | string): LoDashExplicitWrapper<string>
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

	declare interface LoDashStatic {
		split(string: string, separator?: RegExp | string, limit?: number): string[]
	}

	declare interface LoDashImplicitWrapper<T> {
		split(
		separator?: RegExp | string, limit?: number
	): LoDashImplicitArrayWrapper<string>
	}

	declare interface LoDashExplicitWrapper<T> {
		split(
		separator?: RegExp | string, limit?: number
	): LoDashExplicitArrayWrapper<string>
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
		toLower(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		toLower(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		toLower(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		toUpper(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		toUpper(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		toUpper(): LoDashExplicitWrapper<string>
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
		trimEnd(string?: string, chars?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		trimEnd(chars?: string): string
	}

	declare interface LoDashExplicitWrapper<T> {
		trimEnd(chars?: string): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		trimStart(string?: string, chars?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		trimStart(chars?: string): string
	}

	declare interface LoDashExplicitWrapper<T> {
		trimStart(chars?: string): LoDashExplicitWrapper<string>
	}

	declare interface TruncateOptions {
		length?: number,
		omission?: string,
		separator?: string | RegExp
	}

	declare interface LoDashStatic {
		truncate(string?: string, options?: TruncateOptions): string
	}

	declare interface LoDashImplicitWrapper<T> {
		truncate(options?: TruncateOptions): string
	}

	declare interface LoDashExplicitWrapper<T> {
		truncate(options?: TruncateOptions): LoDashExplicitWrapper<string>
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
		upperCase(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		upperCase(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		upperCase(): LoDashExplicitWrapper<string>
	}

	declare interface LoDashStatic {
		upperFirst(string?: string): string
	}

	declare interface LoDashImplicitWrapper<T> {
		upperFirst(): string
	}

	declare interface LoDashExplicitWrapper<T> {
		upperFirst(): LoDashExplicitWrapper<string>
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
		constant<T>(value: T): () => T
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		constant<TResult>(): LoDashImplicitObjectWrapper<() => TResult>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		constant<TResult>(): LoDashExplicitObjectWrapper<() => TResult>
	}

	declare interface LoDashStatic {
		defaultTo<T>(value: T, defaultValue: T): T
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		defaultTo<TResult>(value: TResult): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		defaultTo<TResult>(value: TResult): LoDashExplicitObjectWrapper<TResult>
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
		iteratee<TResult>(func: Function): (...args: any[]) => TResult,
		iteratee<TResult>(func: string): (object: any) => TResult,
		iteratee(func: Object): (object: any) => boolean,
		iteratee<TResult>(): (value: TResult) => TResult
	}

	declare interface LoDashImplicitWrapper<T> {
		iteratee<TResult>(): LoDashImplicitObjectWrapper<(object: any) => TResult>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		iteratee(): LoDashImplicitObjectWrapper<(object: any) => boolean>,
		iteratee<TResult>(): LoDashImplicitObjectWrapper<(...args: any[]) => TResult>
	}

	declare interface LoDashExplicitWrapper<T> {
		iteratee<TResult>(): LoDashExplicitObjectWrapper<(object: any) => TResult>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		iteratee(): LoDashExplicitObjectWrapper<(object: any) => boolean>,
		iteratee<TResult>(): LoDashExplicitObjectWrapper<(...args: any[]) => TResult>
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
		nthArg<TResult>(n?: number): TResult
	}

	declare interface LoDashImplicitWrapper<T> {
		nthArg<TResult>(): LoDashImplicitObjectWrapper<TResult>
	}

	declare interface LoDashExplicitWrapper<T> {
		nthArg<TResult>(): LoDashExplicitObjectWrapper<TResult>
	}

	declare interface LoDashStatic {
		over<TResult>(
		...iteratees: (Function | Function[])[]
	): (...args: any[]) => TResult[]
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		over<TResult>(
		...iteratees: (Function | Function[])[]
	): LoDashImplicitObjectWrapper<(...args: any[]) => TResult[]>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		over<TResult>(
		...iteratees: (Function | Function[])[]
	): LoDashImplicitObjectWrapper<(...args: any[]) => TResult[]>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		over<TResult>(
		...iteratees: (Function | Function[])[]
	): LoDashExplicitObjectWrapper<(...args: any[]) => TResult[]>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		over<TResult>(
		...iteratees: (Function | Function[])[]
	): LoDashExplicitObjectWrapper<(...args: any[]) => TResult[]>
	}

	declare interface LoDashStatic {
		overEvery(...predicates: (Function | Function[])[]): (...args: any[]) => boolean
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		overEvery(
		...predicates: (Function | Function[])[]
	): LoDashImplicitObjectWrapper<(...args: any[]) => boolean>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		overEvery(
		...predicates: (Function | Function[])[]
	): LoDashImplicitObjectWrapper<(...args: any[]) => boolean>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		overEvery(
		...predicates: (Function | Function[])[]
	): LoDashExplicitObjectWrapper<(...args: any[]) => boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		overEvery(
		...predicates: (Function | Function[])[]
	): LoDashExplicitObjectWrapper<(...args: any[]) => boolean>
	}

	declare interface LoDashStatic {
		overSome(...predicates: (Function | Function[])[]): (...args: any[]) => boolean
	}

	declare interface LoDashImplicitArrayWrapper<T> {
		overSome(
		...predicates: (Function | Function[])[]
	): LoDashImplicitObjectWrapper<(...args: any[]) => boolean>
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		overSome(
		...predicates: (Function | Function[])[]
	): LoDashImplicitObjectWrapper<(...args: any[]) => boolean>
	}

	declare interface LoDashExplicitArrayWrapper<T> {
		overSome(
		...predicates: (Function | Function[])[]
	): LoDashExplicitObjectWrapper<(...args: any[]) => boolean>
	}

	declare interface LoDashExplicitObjectWrapper<T> {
		overSome(
		...predicates: (Function | Function[])[]
	): LoDashExplicitObjectWrapper<(...args: any[]) => boolean>
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
		rangeRight(start: number, end: number, step?: number): number[],
		rangeRight(end: number, step?: number): number[]
	}

	declare interface LoDashImplicitWrapper<T> {
		rangeRight(end?: number, step?: number): LoDashImplicitArrayWrapper<number>
	}

	declare interface LoDashExplicitWrapper<T> {
		rangeRight(end?: number, step?: number): LoDashExplicitArrayWrapper<number>
	}

	declare interface LoDashStatic {
		runInContext(context?: Object): typeof _
	}

	declare interface LoDashImplicitObjectWrapper<T> {
		runInContext(): typeof _
	}

	declare interface LoDashStatic {
		times<TResult>(n: number, iteratee: (num: number) => TResult): TResult[],
		times(n: number): number[]
	}

	declare interface LoDashImplicitWrapper<T> {
		times<TResult>(iteratee: (num: number) => TResult): TResult[],
		times(): number[]
	}

	declare interface LoDashExplicitWrapper<T> {
		times<TResult>(
		iteratee: (num: number) => TResult
	): LoDashExplicitArrayWrapper<TResult>,
		times(): LoDashExplicitArrayWrapper<number>
	}

	declare interface LoDashStatic {
		toPath(value: any): string[]
	}

	declare interface LoDashImplicitWrapperBase<T, TWrapper> {
		toPath(): LoDashImplicitWrapper<string[]>
	}

	declare interface LoDashExplicitWrapperBase<T, TWrapper> {
		toPath(): LoDashExplicitWrapper<string[]>
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
		cancel(): void,
		flush(): void
	}

			
}

declare module 'lodash/after' {
					declare module.exports: undefined


}

declare module 'lodash/ary' {
					declare module.exports: undefined


}

declare module 'lodash/assign' {
					declare module.exports: undefined


}

declare module 'lodash/assignIn' {
					declare module.exports: undefined


}

declare module 'lodash/assignInWith' {
					declare module.exports: undefined


}

declare module 'lodash/assignWith' {
					declare module.exports: undefined


}

declare module 'lodash/at' {
					declare module.exports: undefined


}

declare module 'lodash/before' {
					declare module.exports: undefined


}

declare module 'lodash/bind' {
					declare module.exports: undefined


}

declare module 'lodash/bindAll' {
					declare module.exports: undefined


}

declare module 'lodash/bindKey' {
					declare module.exports: undefined


}

declare module 'lodash/castArray' {
					declare module.exports: undefined


}

declare module 'lodash/chain' {
					declare module.exports: undefined


}

declare module 'lodash/chunk' {
					declare module.exports: undefined


}

declare module 'lodash/compact' {
					declare module.exports: undefined


}

declare module 'lodash/concat' {
					declare module.exports: undefined


}

declare module 'lodash/constant' {
					declare module.exports: undefined


}

declare module 'lodash/countBy' {
					declare module.exports: undefined


}

declare module 'lodash/create' {
					declare module.exports: undefined


}

declare module 'lodash/curry' {
					declare module.exports: undefined


}

declare module 'lodash/curryRight' {
					declare module.exports: undefined


}

declare module 'lodash/debounce' {
					declare module.exports: undefined


}

declare module 'lodash/defaults' {
					declare module.exports: undefined


}

declare module 'lodash/defaultsDeep' {
					declare module.exports: undefined


}

declare module 'lodash/defer' {
					declare module.exports: undefined


}

declare module 'lodash/delay' {
					declare module.exports: undefined


}

declare module 'lodash/difference' {
					declare module.exports: undefined


}

declare module 'lodash/differenceBy' {
					declare module.exports: undefined


}

declare module 'lodash/differenceWith' {
					declare module.exports: undefined


}

declare module 'lodash/drop' {
					declare module.exports: undefined


}

declare module 'lodash/dropRight' {
					declare module.exports: undefined


}

declare module 'lodash/dropRightWhile' {
					declare module.exports: undefined


}

declare module 'lodash/dropWhile' {
					declare module.exports: undefined


}

declare module 'lodash/fill' {
					declare module.exports: undefined


}

declare module 'lodash/filter' {
					declare module.exports: undefined


}

declare module 'lodash/flatMap' {
					declare module.exports: undefined


}

declare module 'lodash/flatten' {
					declare module.exports: undefined


}

declare module 'lodash/flattenDeep' {
					declare module.exports: undefined


}

declare module 'lodash/flattenDepth' {
					declare module.exports: undefined


}

declare module 'lodash/flip' {
					declare module.exports: undefined


}

declare module 'lodash/flow' {
					declare module.exports: undefined


}

declare module 'lodash/flowRight' {
					declare module.exports: undefined


}

declare module 'lodash/fromPairs' {
					declare module.exports: undefined


}

declare module 'lodash/functions' {
					declare module.exports: undefined


}

declare module 'lodash/functionsIn' {
					declare module.exports: undefined


}

declare module 'lodash/groupBy' {
					declare module.exports: undefined


}

declare module 'lodash/initial' {
					declare module.exports: undefined


}

declare module 'lodash/intersection' {
					declare module.exports: undefined


}

declare module 'lodash/intersectionBy' {
					declare module.exports: undefined


}

declare module 'lodash/intersectionWith' {
					declare module.exports: undefined


}

declare module 'lodash/invert' {
					declare module.exports: undefined


}

declare module 'lodash/invertBy' {
					declare module.exports: undefined


}

declare module 'lodash/invokeMap' {
					declare module.exports: undefined


}

declare module 'lodash/iteratee' {
					declare module.exports: undefined


}

declare module 'lodash/keyBy' {
					declare module.exports: undefined


}

declare module 'lodash/keys' {
					declare module.exports: undefined


}

declare module 'lodash/keysIn' {
					declare module.exports: undefined


}

declare module 'lodash/map' {
					declare module.exports: undefined


}

declare module 'lodash/mapKeys' {
					declare module.exports: undefined


}

declare module 'lodash/mapValues' {
					declare module.exports: undefined


}

declare module 'lodash/matches' {
					declare module.exports: undefined


}

declare module 'lodash/matchesProperty' {
					declare module.exports: undefined


}

declare module 'lodash/memoize' {
					declare module.exports: undefined


}

declare module 'lodash/merge' {
					declare module.exports: undefined


}

declare module 'lodash/mergeWith' {
					declare module.exports: undefined


}

declare module 'lodash/method' {
					declare module.exports: undefined


}

declare module 'lodash/methodOf' {
					declare module.exports: undefined


}

declare module 'lodash/mixin' {
					declare module.exports: undefined


}

declare module 'lodash/negate' {
					declare module.exports: undefined


}

declare module 'lodash/nthArg' {
					declare module.exports: undefined


}

declare module 'lodash/omit' {
					declare module.exports: undefined


}

declare module 'lodash/omitBy' {
					declare module.exports: undefined


}

declare module 'lodash/once' {
					declare module.exports: undefined


}

declare module 'lodash/orderBy' {
					declare module.exports: undefined


}

declare module 'lodash/over' {
					declare module.exports: undefined


}

declare module 'lodash/overArgs' {
					declare module.exports: undefined


}

declare module 'lodash/overEvery' {
					declare module.exports: undefined


}

declare module 'lodash/overSome' {
					declare module.exports: undefined


}

declare module 'lodash/partial' {
					declare module.exports: undefined


}

declare module 'lodash/partialRight' {
					declare module.exports: undefined


}

declare module 'lodash/partition' {
					declare module.exports: undefined


}

declare module 'lodash/pick' {
					declare module.exports: undefined


}

declare module 'lodash/pickBy' {
					declare module.exports: undefined


}

declare module 'lodash/property' {
					declare module.exports: undefined


}

declare module 'lodash/propertyOf' {
					declare module.exports: undefined


}

declare module 'lodash/pull' {
					declare module.exports: undefined


}

declare module 'lodash/pullAll' {
					declare module.exports: undefined


}

declare module 'lodash/pullAllBy' {
					declare module.exports: undefined


}

declare module 'lodash/pullAt' {
					declare module.exports: undefined


}

declare module 'lodash/range' {
					declare module.exports: undefined


}

declare module 'lodash/rangeRight' {
					declare module.exports: undefined


}

declare module 'lodash/rearg' {
					declare module.exports: undefined


}

declare module 'lodash/reject' {
					declare module.exports: undefined


}

declare module 'lodash/remove' {
					declare module.exports: undefined


}

declare module 'lodash/rest' {
					declare module.exports: undefined


}

declare module 'lodash/reverse' {
					declare module.exports: undefined


}

declare module 'lodash/sampleSize' {
					declare module.exports: undefined


}

declare module 'lodash/set' {
					declare module.exports: undefined


}

declare module 'lodash/setWith' {
					declare module.exports: undefined


}

declare module 'lodash/shuffle' {
					declare module.exports: undefined


}

declare module 'lodash/slice' {
					declare module.exports: undefined


}

declare module 'lodash/sortBy' {
					declare module.exports: undefined


}

declare module 'lodash/sortedUniq' {
					declare module.exports: undefined


}

declare module 'lodash/sortedUniqBy' {
					declare module.exports: undefined


}

declare module 'lodash/split' {
					declare module.exports: undefined


}

declare module 'lodash/spread' {
					declare module.exports: undefined


}

declare module 'lodash/tail' {
					declare module.exports: undefined


}

declare module 'lodash/take' {
					declare module.exports: undefined


}

declare module 'lodash/takeRight' {
					declare module.exports: undefined


}

declare module 'lodash/takeRightWhile' {
					declare module.exports: undefined


}

declare module 'lodash/takeWhile' {
					declare module.exports: undefined


}

declare module 'lodash/tap' {
					declare module.exports: undefined


}

declare module 'lodash/throttle' {
					declare module.exports: undefined


}

declare module 'lodash/thru' {
					declare module.exports: undefined


}

declare module 'lodash/toArray' {
					declare module.exports: undefined


}

declare module 'lodash/toPairs' {
					declare module.exports: undefined


}

declare module 'lodash/toPairsIn' {
					declare module.exports: undefined


}

declare module 'lodash/toPath' {
					declare module.exports: undefined


}

declare module 'lodash/toPlainObject' {
					declare module.exports: undefined


}

declare module 'lodash/transform' {
					declare module.exports: undefined


}

declare module 'lodash/unary' {
					declare module.exports: undefined


}

declare module 'lodash/union' {
					declare module.exports: undefined


}

declare module 'lodash/unionBy' {
					declare module.exports: undefined


}

declare module 'lodash/unionWith' {
					declare module.exports: undefined


}

declare module 'lodash/uniq' {
					declare module.exports: undefined


}

declare module 'lodash/uniqBy' {
					declare module.exports: undefined


}

declare module 'lodash/uniqWith' {
					declare module.exports: undefined


}

declare module 'lodash/unset' {
					declare module.exports: undefined


}

declare module 'lodash/unzip' {
					declare module.exports: undefined


}

declare module 'lodash/unzipWith' {
					declare module.exports: undefined


}

declare module 'lodash/update' {
					declare module.exports: undefined


}

declare module 'lodash/values' {
					declare module.exports: undefined


}

declare module 'lodash/valuesIn' {
					declare module.exports: undefined


}

declare module 'lodash/without' {
					declare module.exports: undefined


}

declare module 'lodash/words' {
					declare module.exports: undefined


}

declare module 'lodash/wrap' {
					declare module.exports: undefined


}

declare module 'lodash/xor' {
					declare module.exports: undefined


}

declare module 'lodash/xorBy' {
					declare module.exports: undefined


}

declare module 'lodash/xorWith' {
					declare module.exports: undefined


}

declare module 'lodash/zip' {
					declare module.exports: undefined


}

declare module 'lodash/zipObject' {
					declare module.exports: undefined


}

declare module 'lodash/zipWith' {
					declare module.exports: undefined


}

declare module 'lodash/extend' {
					declare module.exports: undefined


}

declare module 'lodash/extendWith' {
					declare module.exports: undefined


}

declare module 'lodash/add' {
					declare module.exports: undefined


}

declare module 'lodash/attempt' {
					declare module.exports: undefined


}

declare module 'lodash/camelCase' {
					declare module.exports: undefined


}

declare module 'lodash/capitalize' {
					declare module.exports: undefined


}

declare module 'lodash/ceil' {
					declare module.exports: undefined


}

declare module 'lodash/clamp' {
					declare module.exports: undefined


}

declare module 'lodash/clone' {
					declare module.exports: undefined


}

declare module 'lodash/cloneDeep' {
					declare module.exports: undefined


}

declare module 'lodash/cloneDeepWith' {
					declare module.exports: undefined


}

declare module 'lodash/cloneWith' {
					declare module.exports: undefined


}

declare module 'lodash/deburr' {
					declare module.exports: undefined


}

declare module 'lodash/endsWith' {
					declare module.exports: undefined


}

declare module 'lodash/eq' {
					declare module.exports: undefined


}

declare module 'lodash/escape' {
					declare module.exports: undefined


}

declare module 'lodash/escapeRegExp' {
					declare module.exports: undefined


}

declare module 'lodash/every' {
					declare module.exports: undefined


}

declare module 'lodash/find' {
					declare module.exports: undefined


}

declare module 'lodash/findIndex' {
					declare module.exports: undefined


}

declare module 'lodash/findKey' {
					declare module.exports: undefined


}

declare module 'lodash/findLast' {
					declare module.exports: undefined


}

declare module 'lodash/findLastIndex' {
					declare module.exports: undefined


}

declare module 'lodash/findLastKey' {
					declare module.exports: undefined


}

declare module 'lodash/floor' {
					declare module.exports: undefined


}

declare module 'lodash/forEach' {
					declare module.exports: undefined


}

declare module 'lodash/forEachRight' {
					declare module.exports: undefined


}

declare module 'lodash/forIn' {
					declare module.exports: undefined


}

declare module 'lodash/forInRight' {
					declare module.exports: undefined


}

declare module 'lodash/forOwn' {
					declare module.exports: undefined


}

declare module 'lodash/forOwnRight' {
					declare module.exports: undefined


}

declare module 'lodash/get' {
					declare module.exports: undefined


}

declare module 'lodash/gt' {
					declare module.exports: undefined


}

declare module 'lodash/gte' {
					declare module.exports: undefined


}

declare module 'lodash/has' {
					declare module.exports: undefined


}

declare module 'lodash/hasIn' {
					declare module.exports: undefined


}

declare module 'lodash/head' {
					declare module.exports: undefined


}

declare module 'lodash/identity' {
					declare module.exports: undefined


}

declare module 'lodash/includes' {
					declare module.exports: undefined


}

declare module 'lodash/indexOf' {
					declare module.exports: undefined


}

declare module 'lodash/inRange' {
					declare module.exports: undefined


}

declare module 'lodash/invoke' {
					declare module.exports: undefined


}

declare module 'lodash/isArguments' {
					declare module.exports: undefined


}

declare module 'lodash/isArray' {
					declare module.exports: undefined


}

declare module 'lodash/isArrayBuffer' {
					declare module.exports: undefined


}

declare module 'lodash/isArrayLike' {
					declare module.exports: undefined


}

declare module 'lodash/isArrayLikeObject' {
					declare module.exports: undefined


}

declare module 'lodash/isBoolean' {
					declare module.exports: undefined


}

declare module 'lodash/isBuffer' {
					declare module.exports: undefined


}

declare module 'lodash/isDate' {
					declare module.exports: undefined


}

declare module 'lodash/isElement' {
					declare module.exports: undefined


}

declare module 'lodash/isEmpty' {
					declare module.exports: undefined


}

declare module 'lodash/isEqual' {
					declare module.exports: undefined


}

declare module 'lodash/isEqualWith' {
					declare module.exports: undefined


}

declare module 'lodash/isError' {
					declare module.exports: undefined


}

declare module 'lodash/isFinite' {
					declare module.exports: undefined


}

declare module 'lodash/isFunction' {
					declare module.exports: undefined


}

declare module 'lodash/isInteger' {
					declare module.exports: undefined


}

declare module 'lodash/isLength' {
					declare module.exports: undefined


}

declare module 'lodash/isMap' {
					declare module.exports: undefined


}

declare module 'lodash/isMatch' {
					declare module.exports: undefined


}

declare module 'lodash/isMatchWith' {
					declare module.exports: undefined


}

declare module 'lodash/isNaN' {
					declare module.exports: undefined


}

declare module 'lodash/isNative' {
					declare module.exports: undefined


}

declare module 'lodash/isNil' {
					declare module.exports: undefined


}

declare module 'lodash/isNull' {
					declare module.exports: undefined


}

declare module 'lodash/isNumber' {
					declare module.exports: undefined


}

declare module 'lodash/isObject' {
					declare module.exports: undefined


}

declare module 'lodash/isObjectLike' {
					declare module.exports: undefined


}

declare module 'lodash/isPlainObject' {
					declare module.exports: undefined


}

declare module 'lodash/isRegExp' {
					declare module.exports: undefined


}

declare module 'lodash/isSafeInteger' {
					declare module.exports: undefined


}

declare module 'lodash/isSet' {
					declare module.exports: undefined


}

declare module 'lodash/isString' {
					declare module.exports: undefined


}

declare module 'lodash/isSymbol' {
					declare module.exports: undefined


}

declare module 'lodash/isTypedArray' {
					declare module.exports: undefined


}

declare module 'lodash/isUndefined' {
					declare module.exports: undefined


}

declare module 'lodash/isWeakMap' {
					declare module.exports: undefined


}

declare module 'lodash/isWeakSet' {
					declare module.exports: undefined


}

declare module 'lodash/join' {
					declare module.exports: undefined


}

declare module 'lodash/kebabCase' {
					declare module.exports: undefined


}

declare module 'lodash/last' {
					declare module.exports: undefined


}

declare module 'lodash/lastIndexOf' {
					declare module.exports: undefined


}

declare module 'lodash/lowerCase' {
					declare module.exports: undefined


}

declare module 'lodash/lowerFirst' {
					declare module.exports: undefined


}

declare module 'lodash/lt' {
					declare module.exports: undefined


}

declare module 'lodash/lte' {
					declare module.exports: undefined


}

declare module 'lodash/max' {
					declare module.exports: undefined


}

declare module 'lodash/maxBy' {
					declare module.exports: undefined


}

declare module 'lodash/mean' {
					declare module.exports: undefined


}

declare module 'lodash/min' {
					declare module.exports: undefined


}

declare module 'lodash/minBy' {
					declare module.exports: undefined


}

declare module 'lodash/noConflict' {
					declare module.exports: undefined


}

declare module 'lodash/noop' {
					declare module.exports: undefined


}

declare module 'lodash/now' {
					declare module.exports: undefined


}

declare module 'lodash/pad' {
					declare module.exports: undefined


}

declare module 'lodash/padEnd' {
					declare module.exports: undefined


}

declare module 'lodash/padStart' {
					declare module.exports: undefined


}

declare module 'lodash/parseInt' {
					declare module.exports: undefined


}

declare module 'lodash/random' {
					declare module.exports: undefined


}

declare module 'lodash/reduce' {
					declare module.exports: undefined


}

declare module 'lodash/reduceRight' {
					declare module.exports: undefined


}

declare module 'lodash/repeat' {
					declare module.exports: undefined


}

declare module 'lodash/replace' {
					declare module.exports: undefined


}

declare module 'lodash/result' {
					declare module.exports: undefined


}

declare module 'lodash/round' {
					declare module.exports: undefined


}

declare module 'lodash/runInContext' {
					declare module.exports: undefined


}

declare module 'lodash/sample' {
					declare module.exports: undefined


}

declare module 'lodash/size' {
					declare module.exports: undefined


}

declare module 'lodash/snakeCase' {
					declare module.exports: undefined


}

declare module 'lodash/some' {
					declare module.exports: undefined


}

declare module 'lodash/sortedIndex' {
					declare module.exports: undefined


}

declare module 'lodash/sortedIndexBy' {
					declare module.exports: undefined


}

declare module 'lodash/sortedIndexOf' {
					declare module.exports: undefined


}

declare module 'lodash/sortedLastIndex' {
					declare module.exports: undefined


}

declare module 'lodash/sortedLastIndexBy' {
					declare module.exports: undefined


}

declare module 'lodash/sortedLastIndexOf' {
					declare module.exports: undefined


}

declare module 'lodash/startCase' {
					declare module.exports: undefined


}

declare module 'lodash/startsWith' {
					declare module.exports: undefined


}

declare module 'lodash/subtract' {
					declare module.exports: undefined


}

declare module 'lodash/sum' {
					declare module.exports: undefined


}

declare module 'lodash/sumBy' {
					declare module.exports: undefined


}

declare module 'lodash/template' {
					declare module.exports: undefined


}

declare module 'lodash/times' {
					declare module.exports: undefined


}

declare module 'lodash/toInteger' {
					declare module.exports: undefined


}

declare module 'lodash/toLength' {
					declare module.exports: undefined


}

declare module 'lodash/toLower' {
					declare module.exports: undefined


}

declare module 'lodash/toNumber' {
					declare module.exports: undefined


}

declare module 'lodash/toSafeInteger' {
					declare module.exports: undefined


}

declare module 'lodash/toString' {
					declare module.exports: undefined


}

declare module 'lodash/toUpper' {
					declare module.exports: undefined


}

declare module 'lodash/trim' {
					declare module.exports: undefined


}

declare module 'lodash/trimEnd' {
					declare module.exports: undefined


}

declare module 'lodash/trimStart' {
					declare module.exports: undefined


}

declare module 'lodash/truncate' {
					declare module.exports: undefined


}

declare module 'lodash/unescape' {
					declare module.exports: undefined


}

declare module 'lodash/uniqueId' {
					declare module.exports: undefined


}

declare module 'lodash/upperCase' {
					declare module.exports: undefined


}

declare module 'lodash/upperFirst' {
					declare module.exports: undefined


}

declare module 'lodash/each' {
					declare module.exports: undefined


}

declare module 'lodash/eachRight' {
					declare module.exports: undefined


}

declare module 'lodash/first' {
					declare module.exports: undefined


}

declare module 'lodash/fp' {
					declare module.exports: undefined


}

declare module 'lodash.after' {
					declare module.exports: undefined


}

declare module 'lodash.ary' {
					declare module.exports: undefined


}

declare module 'lodash.assign' {
					declare module.exports: undefined


}

declare module 'lodash.assignIn' {
					declare module.exports: undefined


}

declare module 'lodash.assignInWith' {
					declare module.exports: undefined


}

declare module 'lodash.assignWith' {
					declare module.exports: undefined


}

declare module 'lodash.at' {
					declare module.exports: undefined


}

declare module 'lodash.before' {
					declare module.exports: undefined


}

declare module 'lodash.bind' {
					declare module.exports: undefined


}

declare module 'lodash.bindAll' {
					declare module.exports: undefined


}

declare module 'lodash.bindKey' {
					declare module.exports: undefined


}

declare module 'lodash.castArray' {
					declare module.exports: undefined


}

declare module 'lodash.chain' {
					declare module.exports: undefined


}

declare module 'lodash.chunk' {
					declare module.exports: undefined


}

declare module 'lodash.compact' {
					declare module.exports: undefined


}

declare module 'lodash.concat' {
					declare module.exports: undefined


}

declare module 'lodash.constant' {
					declare module.exports: undefined


}

declare module 'lodash.countBy' {
					declare module.exports: undefined


}

declare module 'lodash.create' {
					declare module.exports: undefined


}

declare module 'lodash.curry' {
					declare module.exports: undefined


}

declare module 'lodash.curryRight' {
					declare module.exports: undefined


}

declare module 'lodash.debounce' {
					declare module.exports: undefined


}

declare module 'lodash.defaults' {
					declare module.exports: undefined


}

declare module 'lodash.defaultsDeep' {
					declare module.exports: undefined


}

declare module 'lodash.defer' {
					declare module.exports: undefined


}

declare module 'lodash.delay' {
					declare module.exports: undefined


}

declare module 'lodash.difference' {
					declare module.exports: undefined


}

declare module 'lodash.differenceBy' {
					declare module.exports: undefined


}

declare module 'lodash.differenceWith' {
					declare module.exports: undefined


}

declare module 'lodash.drop' {
					declare module.exports: undefined


}

declare module 'lodash.dropRight' {
					declare module.exports: undefined


}

declare module 'lodash.dropRightWhile' {
					declare module.exports: undefined


}

declare module 'lodash.dropWhile' {
					declare module.exports: undefined


}

declare module 'lodash.fill' {
					declare module.exports: undefined


}

declare module 'lodash.filter' {
					declare module.exports: undefined


}

declare module 'lodash.flatMap' {
					declare module.exports: undefined


}

declare module 'lodash.flatten' {
					declare module.exports: undefined


}

declare module 'lodash.flattenDeep' {
					declare module.exports: undefined


}

declare module 'lodash.flattenDepth' {
					declare module.exports: undefined


}

declare module 'lodash.flip' {
					declare module.exports: undefined


}

declare module 'lodash.flow' {
					declare module.exports: undefined


}

declare module 'lodash.flowRight' {
					declare module.exports: undefined


}

declare module 'lodash.fromPairs' {
					declare module.exports: undefined


}

declare module 'lodash.functions' {
					declare module.exports: undefined


}

declare module 'lodash.functionsIn' {
					declare module.exports: undefined


}

declare module 'lodash.groupBy' {
					declare module.exports: undefined


}

declare module 'lodash.initial' {
					declare module.exports: undefined


}

declare module 'lodash.intersection' {
					declare module.exports: undefined


}

declare module 'lodash.intersectionBy' {
					declare module.exports: undefined


}

declare module 'lodash.intersectionWith' {
					declare module.exports: undefined


}

declare module 'lodash.invert' {
					declare module.exports: undefined


}

declare module 'lodash.invertBy' {
					declare module.exports: undefined


}

declare module 'lodash.invokeMap' {
					declare module.exports: undefined


}

declare module 'lodash.iteratee' {
					declare module.exports: undefined


}

declare module 'lodash.keyBy' {
					declare module.exports: undefined


}

declare module 'lodash.keys' {
					declare module.exports: undefined


}

declare module 'lodash.keysIn' {
					declare module.exports: undefined


}

declare module 'lodash.map' {
					declare module.exports: undefined


}

declare module 'lodash.mapKeys' {
					declare module.exports: undefined


}

declare module 'lodash.mapValues' {
					declare module.exports: undefined


}

declare module 'lodash.matches' {
					declare module.exports: undefined


}

declare module 'lodash.matchesProperty' {
					declare module.exports: undefined


}

declare module 'lodash.memoize' {
					declare module.exports: undefined


}

declare module 'lodash.merge' {
					declare module.exports: undefined


}

declare module 'lodash.mergeWith' {
					declare module.exports: undefined


}

declare module 'lodash.method' {
					declare module.exports: undefined


}

declare module 'lodash.methodOf' {
					declare module.exports: undefined


}

declare module 'lodash.mixin' {
					declare module.exports: undefined


}

declare module 'lodash.negate' {
					declare module.exports: undefined


}

declare module 'lodash.nthArg' {
					declare module.exports: undefined


}

declare module 'lodash.omit' {
					declare module.exports: undefined


}

declare module 'lodash.omitBy' {
					declare module.exports: undefined


}

declare module 'lodash.once' {
					declare module.exports: undefined


}

declare module 'lodash.orderBy' {
					declare module.exports: undefined


}

declare module 'lodash.over' {
					declare module.exports: undefined


}

declare module 'lodash.overArgs' {
					declare module.exports: undefined


}

declare module 'lodash.overEvery' {
					declare module.exports: undefined


}

declare module 'lodash.overSome' {
					declare module.exports: undefined


}

declare module 'lodash.partial' {
					declare module.exports: undefined


}

declare module 'lodash.partialRight' {
					declare module.exports: undefined


}

declare module 'lodash.partition' {
					declare module.exports: undefined


}

declare module 'lodash.pick' {
					declare module.exports: undefined


}

declare module 'lodash.pickBy' {
					declare module.exports: undefined


}

declare module 'lodash.property' {
					declare module.exports: undefined


}

declare module 'lodash.propertyOf' {
					declare module.exports: undefined


}

declare module 'lodash.pull' {
					declare module.exports: undefined


}

declare module 'lodash.pullAll' {
					declare module.exports: undefined


}

declare module 'lodash.pullAllBy' {
					declare module.exports: undefined


}

declare module 'lodash.pullAt' {
					declare module.exports: undefined


}

declare module 'lodash.range' {
					declare module.exports: undefined


}

declare module 'lodash.rangeRight' {
					declare module.exports: undefined


}

declare module 'lodash.rearg' {
					declare module.exports: undefined


}

declare module 'lodash.reject' {
					declare module.exports: undefined


}

declare module 'lodash.remove' {
					declare module.exports: undefined


}

declare module 'lodash.rest' {
					declare module.exports: undefined


}

declare module 'lodash.reverse' {
					declare module.exports: undefined


}

declare module 'lodash.sampleSize' {
					declare module.exports: undefined


}

declare module 'lodash.set' {
					declare module.exports: undefined


}

declare module 'lodash.setWith' {
					declare module.exports: undefined


}

declare module 'lodash.shuffle' {
					declare module.exports: undefined


}

declare module 'lodash.slice' {
					declare module.exports: undefined


}

declare module 'lodash.sortBy' {
					declare module.exports: undefined


}

declare module 'lodash.sortedUniq' {
					declare module.exports: undefined


}

declare module 'lodash.sortedUniqBy' {
					declare module.exports: undefined


}

declare module 'lodash.split' {
					declare module.exports: undefined


}

declare module 'lodash.spread' {
					declare module.exports: undefined


}

declare module 'lodash.tail' {
					declare module.exports: undefined


}

declare module 'lodash.take' {
					declare module.exports: undefined


}

declare module 'lodash.takeRight' {
					declare module.exports: undefined


}

declare module 'lodash.takeRightWhile' {
					declare module.exports: undefined


}

declare module 'lodash.takeWhile' {
					declare module.exports: undefined


}

declare module 'lodash.tap' {
					declare module.exports: undefined


}

declare module 'lodash.throttle' {
					declare module.exports: undefined


}

declare module 'lodash.thru' {
					declare module.exports: undefined


}

declare module 'lodash.toArray' {
					declare module.exports: undefined


}

declare module 'lodash.toPairs' {
					declare module.exports: undefined


}

declare module 'lodash.toPairsIn' {
					declare module.exports: undefined


}

declare module 'lodash.toPath' {
					declare module.exports: undefined


}

declare module 'lodash.toPlainObject' {
					declare module.exports: undefined


}

declare module 'lodash.transform' {
					declare module.exports: undefined


}

declare module 'lodash.unary' {
					declare module.exports: undefined


}

declare module 'lodash.union' {
					declare module.exports: undefined


}

declare module 'lodash.unionBy' {
					declare module.exports: undefined


}

declare module 'lodash.unionWith' {
					declare module.exports: undefined


}

declare module 'lodash.uniq' {
					declare module.exports: undefined


}

declare module 'lodash.uniqBy' {
					declare module.exports: undefined


}

declare module 'lodash.uniqWith' {
					declare module.exports: undefined


}

declare module 'lodash.unset' {
					declare module.exports: undefined


}

declare module 'lodash.unzip' {
					declare module.exports: undefined


}

declare module 'lodash.unzipWith' {
					declare module.exports: undefined


}

declare module 'lodash.update' {
					declare module.exports: undefined


}

declare module 'lodash.values' {
					declare module.exports: undefined


}

declare module 'lodash.valuesIn' {
					declare module.exports: undefined


}

declare module 'lodash.without' {
					declare module.exports: undefined


}

declare module 'lodash.words' {
					declare module.exports: undefined


}

declare module 'lodash.wrap' {
					declare module.exports: undefined


}

declare module 'lodash.xor' {
					declare module.exports: undefined


}

declare module 'lodash.xorBy' {
					declare module.exports: undefined


}

declare module 'lodash.xorWith' {
					declare module.exports: undefined


}

declare module 'lodash.zip' {
					declare module.exports: undefined


}

declare module 'lodash.zipObject' {
					declare module.exports: undefined


}

declare module 'lodash.zipWith' {
					declare module.exports: undefined


}

declare module 'lodash.extend' {
					declare module.exports: undefined


}

declare module 'lodash.extendWith' {
					declare module.exports: undefined


}

declare module 'lodash.add' {
					declare module.exports: undefined


}

declare module 'lodash.attempt' {
					declare module.exports: undefined


}

declare module 'lodash.camelCase' {
					declare module.exports: undefined


}

declare module 'lodash.capitalize' {
					declare module.exports: undefined


}

declare module 'lodash.ceil' {
					declare module.exports: undefined


}

declare module 'lodash.clamp' {
					declare module.exports: undefined


}

declare module 'lodash.clone' {
					declare module.exports: undefined


}

declare module 'lodash.cloneDeep' {
					declare module.exports: undefined


}

declare module 'lodash.cloneDeepWith' {
					declare module.exports: undefined


}

declare module 'lodash.cloneWith' {
					declare module.exports: undefined


}

declare module 'lodash.deburr' {
					declare module.exports: undefined


}

declare module 'lodash.endsWith' {
					declare module.exports: undefined


}

declare module 'lodash.eq' {
					declare module.exports: undefined


}

declare module 'lodash.escape' {
					declare module.exports: undefined


}

declare module 'lodash.escapeRegExp' {
					declare module.exports: undefined


}

declare module 'lodash.every' {
					declare module.exports: undefined


}

declare module 'lodash.find' {
					declare module.exports: undefined


}

declare module 'lodash.findIndex' {
					declare module.exports: undefined


}

declare module 'lodash.findKey' {
					declare module.exports: undefined


}

declare module 'lodash.findLast' {
					declare module.exports: undefined


}

declare module 'lodash.findLastIndex' {
					declare module.exports: undefined


}

declare module 'lodash.findLastKey' {
					declare module.exports: undefined


}

declare module 'lodash.floor' {
					declare module.exports: undefined


}

declare module 'lodash.forEach' {
					declare module.exports: undefined


}

declare module 'lodash.forEachRight' {
					declare module.exports: undefined


}

declare module 'lodash.forIn' {
					declare module.exports: undefined


}

declare module 'lodash.forInRight' {
					declare module.exports: undefined


}

declare module 'lodash.forOwn' {
					declare module.exports: undefined


}

declare module 'lodash.forOwnRight' {
					declare module.exports: undefined


}

declare module 'lodash.get' {
					declare module.exports: undefined


}

declare module 'lodash.gt' {
					declare module.exports: undefined


}

declare module 'lodash.gte' {
					declare module.exports: undefined


}

declare module 'lodash.has' {
					declare module.exports: undefined


}

declare module 'lodash.hasIn' {
					declare module.exports: undefined


}

declare module 'lodash.head' {
					declare module.exports: undefined


}

declare module 'lodash.identity' {
					declare module.exports: undefined


}

declare module 'lodash.includes' {
					declare module.exports: undefined


}

declare module 'lodash.indexOf' {
					declare module.exports: undefined


}

declare module 'lodash.inRange' {
					declare module.exports: undefined


}

declare module 'lodash.invoke' {
					declare module.exports: undefined


}

declare module 'lodash.isArguments' {
					declare module.exports: undefined


}

declare module 'lodash.isArray' {
					declare module.exports: undefined


}

declare module 'lodash.isArrayBuffer' {
					declare module.exports: undefined


}

declare module 'lodash.isArrayLike' {
					declare module.exports: undefined


}

declare module 'lodash.isArrayLikeObject' {
					declare module.exports: undefined


}

declare module 'lodash.isBoolean' {
					declare module.exports: undefined


}

declare module 'lodash.isBuffer' {
					declare module.exports: undefined


}

declare module 'lodash.isDate' {
					declare module.exports: undefined


}

declare module 'lodash.isElement' {
					declare module.exports: undefined


}

declare module 'lodash.isEmpty' {
					declare module.exports: undefined


}

declare module 'lodash.isEqual' {
					declare module.exports: undefined


}

declare module 'lodash.isEqualWith' {
					declare module.exports: undefined


}

declare module 'lodash.isError' {
					declare module.exports: undefined


}

declare module 'lodash.isFinite' {
					declare module.exports: undefined


}

declare module 'lodash.isFunction' {
					declare module.exports: undefined


}

declare module 'lodash.isInteger' {
					declare module.exports: undefined


}

declare module 'lodash.isLength' {
					declare module.exports: undefined


}

declare module 'lodash.isMap' {
					declare module.exports: undefined


}

declare module 'lodash.isMatch' {
					declare module.exports: undefined


}

declare module 'lodash.isMatchWith' {
					declare module.exports: undefined


}

declare module 'lodash.isNaN' {
					declare module.exports: undefined


}

declare module 'lodash.isNative' {
					declare module.exports: undefined


}

declare module 'lodash.isNil' {
					declare module.exports: undefined


}

declare module 'lodash.isNull' {
					declare module.exports: undefined


}

declare module 'lodash.isNumber' {
					declare module.exports: undefined


}

declare module 'lodash.isObject' {
					declare module.exports: undefined


}

declare module 'lodash.isObjectLike' {
					declare module.exports: undefined


}

declare module 'lodash.isPlainObject' {
					declare module.exports: undefined


}

declare module 'lodash.isRegExp' {
					declare module.exports: undefined


}

declare module 'lodash.isSafeInteger' {
					declare module.exports: undefined


}

declare module 'lodash.isSet' {
					declare module.exports: undefined


}

declare module 'lodash.isString' {
					declare module.exports: undefined


}

declare module 'lodash.isSymbol' {
					declare module.exports: undefined


}

declare module 'lodash.isTypedArray' {
					declare module.exports: undefined


}

declare module 'lodash.isUndefined' {
					declare module.exports: undefined


}

declare module 'lodash.isWeakMap' {
					declare module.exports: undefined


}

declare module 'lodash.isWeakSet' {
					declare module.exports: undefined


}

declare module 'lodash.join' {
					declare module.exports: undefined


}

declare module 'lodash.kebabCase' {
					declare module.exports: undefined


}

declare module 'lodash.last' {
					declare module.exports: undefined


}

declare module 'lodash.lastIndexOf' {
					declare module.exports: undefined


}

declare module 'lodash.lowerCase' {
					declare module.exports: undefined


}

declare module 'lodash.lowerFirst' {
					declare module.exports: undefined


}

declare module 'lodash.lt' {
					declare module.exports: undefined


}

declare module 'lodash.lte' {
					declare module.exports: undefined


}

declare module 'lodash.max' {
					declare module.exports: undefined


}

declare module 'lodash.maxBy' {
					declare module.exports: undefined


}

declare module 'lodash.mean' {
					declare module.exports: undefined


}

declare module 'lodash.min' {
					declare module.exports: undefined


}

declare module 'lodash.minBy' {
					declare module.exports: undefined


}

declare module 'lodash.noConflict' {
					declare module.exports: undefined


}

declare module 'lodash.noop' {
					declare module.exports: undefined


}

declare module 'lodash.now' {
					declare module.exports: undefined


}

declare module 'lodash.pad' {
					declare module.exports: undefined


}

declare module 'lodash.padEnd' {
					declare module.exports: undefined


}

declare module 'lodash.padStart' {
					declare module.exports: undefined


}

declare module 'lodash.parseInt' {
					declare module.exports: undefined


}

declare module 'lodash.random' {
					declare module.exports: undefined


}

declare module 'lodash.reduce' {
					declare module.exports: undefined


}

declare module 'lodash.reduceRight' {
					declare module.exports: undefined


}

declare module 'lodash.repeat' {
					declare module.exports: undefined


}

declare module 'lodash.replace' {
					declare module.exports: undefined


}

declare module 'lodash.result' {
					declare module.exports: undefined


}

declare module 'lodash.round' {
					declare module.exports: undefined


}

declare module 'lodash.runInContext' {
					declare module.exports: undefined


}

declare module 'lodash.sample' {
					declare module.exports: undefined


}

declare module 'lodash.size' {
					declare module.exports: undefined


}

declare module 'lodash.snakeCase' {
					declare module.exports: undefined


}

declare module 'lodash.some' {
					declare module.exports: undefined


}

declare module 'lodash.sortedIndex' {
					declare module.exports: undefined


}

declare module 'lodash.sortedIndexBy' {
					declare module.exports: undefined


}

declare module 'lodash.sortedIndexOf' {
					declare module.exports: undefined


}

declare module 'lodash.sortedLastIndex' {
					declare module.exports: undefined


}

declare module 'lodash.sortedLastIndexBy' {
					declare module.exports: undefined


}

declare module 'lodash.sortedLastIndexOf' {
					declare module.exports: undefined


}

declare module 'lodash.startCase' {
					declare module.exports: undefined


}

declare module 'lodash.startsWith' {
					declare module.exports: undefined


}

declare module 'lodash.subtract' {
					declare module.exports: undefined


}

declare module 'lodash.sum' {
					declare module.exports: undefined


}

declare module 'lodash.sumBy' {
					declare module.exports: undefined


}

declare module 'lodash.template' {
					declare module.exports: undefined


}

declare module 'lodash.times' {
					declare module.exports: undefined


}

declare module 'lodash.toInteger' {
					declare module.exports: undefined


}

declare module 'lodash.toLength' {
					declare module.exports: undefined


}

declare module 'lodash.toLower' {
					declare module.exports: undefined


}

declare module 'lodash.toNumber' {
					declare module.exports: undefined


}

declare module 'lodash.toSafeInteger' {
					declare module.exports: undefined


}

declare module 'lodash.toString' {
					declare module.exports: undefined


}

declare module 'lodash.toUpper' {
					declare module.exports: undefined


}

declare module 'lodash.trim' {
					declare module.exports: undefined


}

declare module 'lodash.trimEnd' {
					declare module.exports: undefined


}

declare module 'lodash.trimStart' {
					declare module.exports: undefined


}

declare module 'lodash.truncate' {
					declare module.exports: undefined


}

declare module 'lodash.unescape' {
					declare module.exports: undefined


}

declare module 'lodash.uniqueId' {
					declare module.exports: undefined


}

declare module 'lodash.upperCase' {
					declare module.exports: undefined


}

declare module 'lodash.upperFirst' {
					declare module.exports: undefined


}

declare module 'lodash.each' {
					declare module.exports: undefined


}

declare module 'lodash.eachRight' {
					declare module.exports: undefined


}

declare module 'lodash.first' {
					declare module.exports: undefined


}