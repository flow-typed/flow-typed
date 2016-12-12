

declare module 'core-js' {
	declare type PropertyKey = string | number | NO PRINT IMPLEMENTED: SymbolKeyword;

	declare interface ObjectConstructor {
		assign<T, U>(target: T, source: U): T & U,
		assign<T, U, V>(target: T, source1: U, source2: V): T & U & V,
		assign<T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W,
		assign(target: any, ...sources: any[]): any,
		is(value1: any, value2: any): boolean,
		setPrototypeOf(o: any, proto: any): any
	}

	declare interface Function {
		name: string,
		undefined(value: any): boolean
	}

	declare interface Array<T> {
		find(
		predicate: (value: T, index: number, obj: Array<T>) => boolean, thisArg?: any
	): T,
		findIndex(predicate: (value: T) => boolean, thisArg?: any): number,
		fill(value: T, start?: number, end?: number): T[],
		copyWithin(target: number, start: number, end?: number): T[],
		undefined: any
	}

	declare interface ArrayConstructor {
		from<T, U>(
		arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any
	): Array<U>,
		from<T, U>(
		iterable: Iterable<T>, mapfn: (v: T, k: number) => U, thisArg?: any
	): Array<U>,
		from<T>(arrayLike: ArrayLike<T>): Array<T>,
		from<T>(iterable: Iterable<T>): Array<T>,
		of<T>(...items: T[]): Array<T>
	}

	declare interface String {
		codePointAt(pos: number): number,
		includes(searchString: string, position?: number): boolean,
		endsWith(searchString: string, endPosition?: number): boolean,
		repeat(count: number): string,
		startsWith(searchString: string, position?: number): boolean
	}

	declare interface StringConstructor {
		fromCodePoint(...codePoints: number[]): string,
		raw(template: TemplateStringsArray, ...substitutions: any[]): string
	}

	declare interface RegExp {
		flags: string
	}

	declare interface NumberConstructor {
		EPSILON: number,
		isFinite(number: number): boolean,
		isInteger(number: number): boolean,
		isNaN(number: number): boolean,
		isSafeInteger(number: number): boolean,
		MAX_SAFE_INTEGER: number,
		MIN_SAFE_INTEGER: number,
		parseFloat(string: string): number,
		parseInt(string: string, radix?: number): number
	}

	declare interface Math {
		clz32(x: number): number,
		imul(x: number, y: number): number,
		sign(x: number): number,
		log10(x: number): number,
		log2(x: number): number,
		log1p(x: number): number,
		expm1(x: number): number,
		cosh(x: number): number,
		sinh(x: number): number,
		tanh(x: number): number,
		acosh(x: number): number,
		asinh(x: number): number,
		atanh(x: number): number,
		hypot(...values: number[]): number,
		trunc(x: number): number,
		fround(x: number): number,
		cbrt(x: number): number
	}

	declare interface Symbol {
		toString(): string,
		undefined: string
	}

	declare interface SymbolConstructor {
		prototype: Symbol,
		(description?: string | number): NO PRINT IMPLEMENTED: SymbolKeyword,
		for(key: string): NO PRINT IMPLEMENTED: SymbolKeyword,
		keyFor(sym: NO PRINT IMPLEMENTED: SymbolKeyword): string,
		hasInstance: NO PRINT IMPLEMENTED: SymbolKeyword,
		isConcatSpreadable: NO PRINT IMPLEMENTED: SymbolKeyword,
		iterator: NO PRINT IMPLEMENTED: SymbolKeyword,
		match: NO PRINT IMPLEMENTED: SymbolKeyword,
		replace: NO PRINT IMPLEMENTED: SymbolKeyword,
		search: NO PRINT IMPLEMENTED: SymbolKeyword,
		species: NO PRINT IMPLEMENTED: SymbolKeyword,
		split: NO PRINT IMPLEMENTED: SymbolKeyword,
		toPrimitive: NO PRINT IMPLEMENTED: SymbolKeyword,
		toStringTag: NO PRINT IMPLEMENTED: SymbolKeyword,
		unscopables: NO PRINT IMPLEMENTED: SymbolKeyword,
		useSimple(): void,
		userSetter(): void
	}

	declare interface Object {
		hasOwnProperty(v: PropertyKey): boolean,
		propertyIsEnumerable(v: PropertyKey): boolean
	}

	declare interface ObjectConstructor {
		getOwnPropertySymbols(o: any): NO PRINT IMPLEMENTED: SymbolKeyword[],
		getOwnPropertyDescriptor(o: any, propertyKey: PropertyKey): PropertyDescriptor,
		defineProperty(o: any, propertyKey: PropertyKey, attributes: PropertyDescriptor): any
	}

	declare interface Math {
		undefined: string
	}

	declare interface JSON {
		undefined: string
	}

	declare interface Map<K, V> {
		clear(): void,
		delete(key: K): boolean,
		forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void,
		get(key: K): V,
		has(key: K): boolean,
		set(key: K, value?: V): Map<K, V>,
		size: number
	}

	declare interface MapConstructor {
		new <K, V>(): Map<K, V>,
		new <K, V>(iterable: Iterable<[K, V]>): Map<K, V>,
		prototype: Map<any, any>
	}

	declare interface Set<T> {
		add(value: T): Set<T>,
		clear(): void,
		delete(value: T): boolean,
		forEach(callbackfn: (value: T, index: T, set: Set<T>) => void, thisArg?: any): void,
		has(value: T): boolean,
		size: number
	}

	declare interface SetConstructor {
		new <T>(): Set<T>,
		new <T>(iterable: Iterable<T>): Set<T>,
		prototype: Set<any>
	}

	declare interface WeakMap<K, V> {
		delete(key: K): boolean,
		get(key: K): V,
		has(key: K): boolean,
		set(key: K, value?: V): WeakMap<K, V>
	}

	declare interface WeakMapConstructor {
		new <K, V>(): WeakMap<K, V>,
		new <K, V>(iterable: Iterable<[K, V]>): WeakMap<K, V>,
		prototype: WeakMap<any, any>
	}

	declare interface WeakSet<T> {
		add(value: T): WeakSet<T>,
		delete(value: T): boolean,
		has(value: T): boolean
	}

	declare interface WeakSetConstructor {
		new <T>(): WeakSet<T>,
		new <T>(iterable: Iterable<T>): WeakSet<T>,
		prototype: WeakSet<any>
	}

	declare interface IteratorResult<T> {
		done: boolean,
		value?: T
	}

	declare interface Iterator<T> {
		next(value?: any): IteratorResult<T>,
		return(value?: any): IteratorResult<T>,
		throw(e?: any): IteratorResult<T>
	}

	declare interface Iterable<T> {
		undefined(): Iterator<T>
	}

	declare interface IterableIterator<T> {
		undefined(): IterableIterator<T>
	}

	declare interface String {
		undefined(): IterableIterator<string>
	}

	declare interface Array<T> {
		undefined(): IterableIterator<T>,
		entries(): IterableIterator<[number, T]>,
		keys(): IterableIterator<number>,
		values(): IterableIterator<T>
	}

	declare interface Map<K, V> {
		entries(): IterableIterator<[K, V]>,
		keys(): IterableIterator<K>,
		values(): IterableIterator<V>,
		undefined(): IterableIterator<[K, V]>
	}

	declare interface Set<T> {
		entries(): IterableIterator<[T, T]>,
		keys(): IterableIterator<T>,
		values(): IterableIterator<T>,
		undefined(): IterableIterator<T>
	}

	declare interface NodeList {
		undefined(): IterableIterator<Node>
	}

	declare interface $for<T> {
		of(callbackfn: (value: T, key: any) => void, thisArg?: any): void,
		array(): T[],
		array<U>(callbackfn: (value: T, key: any) => U, thisArg?: any): U[],
		filter(callbackfn: (value: T, key: any) => boolean, thisArg?: any): $for<T>,
		map<U>(callbackfn: (value: T, key: any) => U, thisArg?: any): $for<U>
	}

	declare interface PromiseLike<T> {
		then<TResult>(
		onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>
	): PromiseLike<TResult>,
		then<TResult>(
		onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void
	): PromiseLike<TResult>
	}

	declare interface Promise<T> {
		then<TResult>(
		onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>
	): Promise<TResult>,
		then<TResult>(
		onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void
	): Promise<TResult>,
		catch(onrejected?: (reason: any) => T | PromiseLike<T>): Promise<T>,
		catch(onrejected?: (reason: any) => void): Promise<T>
	}

	declare interface PromiseConstructor {
		prototype: Promise<any>,
		new <T>(
		executor: (
		resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void
	) => void
	): Promise<T>,
		all<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
		values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>, T10 | PromiseLike<T10>]
	): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>,
		all<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
		values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>, T9 | PromiseLike<T9>]
	): Promise<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>,
		all<T1, T2, T3, T4, T5, T6, T7, T8>(
		values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>, T8 | PromiseLike<T8>]
	): Promise<[T1, T2, T3, T4, T5, T6, T7, T8]>,
		all<T1, T2, T3, T4, T5, T6, T7>(
		values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>, T7 | PromiseLike<T7>]
	): Promise<[T1, T2, T3, T4, T5, T6, T7]>,
		all<T1, T2, T3, T4, T5, T6>(
		values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>, T6 | PromiseLike<T6>]
	): Promise<[T1, T2, T3, T4, T5, T6]>,
		all<T1, T2, T3, T4, T5>(
		values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>, T5 | PromiseLike<T5>]
	): Promise<[T1, T2, T3, T4, T5]>,
		all<T1, T2, T3, T4>(
		values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>, T4 | PromiseLike<T4>]
	): Promise<[T1, T2, T3, T4]>,
		all<T1, T2, T3>(
		values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>, T3 | PromiseLike<T3>]
	): Promise<[T1, T2, T3]>,
		all<T1, T2>(
		values: [T1 | PromiseLike<T1>, T2 | PromiseLike<T2>]
	): Promise<[T1, T2]>,
		all<TAll>(values: Iterable<TAll | PromiseLike<TAll>>): Promise<TAll[]>,
		race<T>(values: Iterable<T | PromiseLike<T>>): Promise<T>,
		reject(reason: any): Promise<void>,
		reject<T>(reason: any): Promise<T>,
		resolve<T>(value: T | PromiseLike<T>): Promise<T>,
		resolve(): Promise<void>
	}

	declare interface Array<T> {
		includes(value: T, fromIndex?: number): boolean
	}

	declare interface String {
		at(index: number): string,
		lpad(length: number, fillStr?: string): string,
		rpad(length: number, fillStr?: string): string
	}

	declare interface ObjectConstructor {
		values(object: any): any[],
		entries(object: any): [string, any][],
		getOwnPropertyDescriptors(object: any): PropertyDescriptorMap
	}

	declare interface RegExpConstructor {
		escape(str: string): string
	}

	declare interface Map<K, V> {
		toJSON(): any
	}

	declare interface Set<T> {
		toJSON(): any
	}

	declare interface ArrayConstructor {
		push<T>(array: ArrayLike<T>, ...items: T[]): number,
		pop<T>(array: ArrayLike<T>): T,
		concat<T>(array: ArrayLike<T>, ...items: (T[] | T)[]): T[],
		join<T>(array: ArrayLike<T>, separator?: string): string,
		reverse<T>(array: ArrayLike<T>): T[],
		shift<T>(array: ArrayLike<T>): T,
		slice<T>(array: ArrayLike<T>, start?: number, end?: number): T[],
		sort<T>(array: ArrayLike<T>, compareFn?: (a: T, b: T) => number): T[],
		splice<T>(array: ArrayLike<T>, start: number): T[],
		splice<T>(array: ArrayLike<T>, start: number, deleteCount: number, ...items: T[]): T[],
		unshift<T>(array: ArrayLike<T>, ...items: T[]): number,
		indexOf<T>(array: ArrayLike<T>, searchElement: T, fromIndex?: number): number,
		lastIndexOf<T>(array: ArrayLike<T>, earchElement: T, fromIndex?: number): number,
		every<T>(
		array: ArrayLike<T>, callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any
	): boolean,
		some<T>(
		array: ArrayLike<T>, callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any
	): boolean,
		forEach<T>(
		array: ArrayLike<T>, callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any
	): void,
		map<T, U>(
		array: ArrayLike<T>, callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any
	): U[],
		filter<T>(
		array: ArrayLike<T>, callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any
	): T[],
		reduce<T, U>(
		array: ArrayLike<T>, callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U
	): U,
		reduce<T>(
		array: ArrayLike<T>, callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T
	): T,
		reduceRight<T, U>(
		array: ArrayLike<T>, callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U
	): U,
		reduceRight<T>(
		array: ArrayLike<T>, callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T
	): T,
		entries<T>(array: ArrayLike<T>): IterableIterator<[number, T]>,
		keys<T>(array: ArrayLike<T>): IterableIterator<number>,
		values<T>(array: ArrayLike<T>): IterableIterator<T>,
		find<T>(
		array: ArrayLike<T>, predicate: (value: T, index: number, obj: Array<T>) => boolean, thisArg?: any
	): T,
		findIndex<T>(
		array: ArrayLike<T>, predicate: (value: T) => boolean, thisArg?: any
	): number,
		fill<T>(array: ArrayLike<T>, value: T, start?: number, end?: number): T[],
		copyWithin<T>(array: ArrayLike<T>, target: number, start: number, end?: number): T[],
		includes<T>(array: ArrayLike<T>, value: T, fromIndex?: number): boolean,
		turn<T, U>(
		array: ArrayLike<T>, callbackfn: (memo: U, value: T, index: number, array: Array<T>) => void, memo?: U
	): U,
		turn<T>(
		array: ArrayLike<T>, callbackfn: (memo: Array<T>, value: T, index: number, array: Array<T>) => void, memo?: Array<T>
	): Array<T>
	}

	declare interface ObjectConstructor {
		isObject(value: any): boolean,
		classof(value: any): string,
		define<T>(target: T, mixin: any): T,
		make<T>(proto: T, mixin?: any): T
	}

	declare interface Log {
		(message?: any, ...optionalParams: any[]): void,
		enable(): void,
		disable(): void
	}

	declare interface Dict<T> {
		[key: string]: T,
		[key: number]: T
	}

	declare interface DictConstructor {
		prototype: Dict<any>,
		new <T>(value?: Dict<T>): Dict<T>,
		new (value?: any): Dict<any>,
		(value?: Dict<T>): Dict<T>,
		(value?: any): Dict<any>,
		isDict(value: any): boolean,
		values<T>(object: Dict<T>): IterableIterator<T>,
		keys<T>(object: Dict<T>): IterableIterator<PropertyKey>,
		entries<T>(object: Dict<T>): IterableIterator<[PropertyKey, T]>,
		has<T>(object: Dict<T>, key: PropertyKey): boolean,
		get<T>(object: Dict<T>, key: PropertyKey): T,
		set<T>(object: Dict<T>, key: PropertyKey, value: T): Dict<T>,
		forEach<T>(
		object: Dict<T>, callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => void, thisArg?: any
	): void,
		map<T, U>(
		object: Dict<T>, callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => U, thisArg?: any
	): Dict<U>,
		mapPairs<T, U>(
		object: Dict<T>, callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => [PropertyKey, U], thisArg?: any
	): Dict<U>,
		filter<T>(
		object: Dict<T>, callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => boolean, thisArg?: any
	): Dict<T>,
		some<T>(
		object: Dict<T>, callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => boolean, thisArg?: any
	): boolean,
		every<T>(
		object: Dict<T>, callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => boolean, thisArg?: any
	): boolean,
		find<T>(
		object: Dict<T>, callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => boolean, thisArg?: any
	): T,
		findKey<T>(
		object: Dict<T>, callbackfn: (value: T, key: PropertyKey, dict: Dict<T>) => boolean, thisArg?: any
	): PropertyKey,
		keyOf<T>(object: Dict<T>, value: T): PropertyKey,
		includes<T>(object: Dict<T>, value: T): boolean,
		reduce<T, U>(
		object: Dict<T>, callbackfn: (previousValue: U, value: T, key: PropertyKey, dict: Dict<T>) => U, initialValue: U
	): U,
		reduce<T>(
		object: Dict<T>, callbackfn: (previousValue: T, value: T, key: PropertyKey, dict: Dict<T>) => T, initialValue?: T
	): T,
		turn<T, U>(
		object: Dict<T>, callbackfn: (memo: Dict<U>, value: T, key: PropertyKey, dict: Dict<T>) => void, memo: Dict<U>
	): Dict<U>,
		turn<T>(
		object: Dict<T>, callbackfn: (memo: Dict<T>, value: T, key: PropertyKey, dict: Dict<T>) => void, memo?: Dict<T>
	): Dict<T>
	}

	declare interface Function {
		part(...args: any[]): any
	}

	declare interface Date {
		format(template: string, locale?: string): string,
		formatUTC(template: string, locale?: string): string
	}

	declare interface Array<T> {
		turn<U>(
		callbackfn: (memo: U, value: T, index: number, array: Array<T>) => void, memo?: U
	): U,
		turn(
		callbackfn: (memo: Array<T>, value: T, index: number, array: Array<T>) => void, memo?: Array<T>
	): Array<T>
	}

	declare interface Number {
		undefined(): IterableIterator<number>
	}

	declare interface String {
		escapeHTML(): string,
		unescapeHTML(): string
	}

	declare function $for<T>(iterable: Iterable<T>): $for<T>

	declare function delay(msec: number): Promise<void>

		declare module.exports: undefined


}

declare module 'npm$namespace$Reflect' {
			declare function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any

	declare function construct(target: Function, argumentsList: ArrayLike<any>, newTarget?: any): any

	declare function defineProperty(target: any, propertyKey: PropertyKey, attributes: PropertyDescriptor): boolean

	declare function deleteProperty(target: any, propertyKey: PropertyKey): boolean

	declare function enumerate(target: any): IterableIterator<any>

	declare function get(target: any, propertyKey: PropertyKey, receiver?: any): any

	declare function getOwnPropertyDescriptor(target: any, propertyKey: PropertyKey): PropertyDescriptor

	declare function getPrototypeOf(target: any): any

	declare function has(target: any, propertyKey: PropertyKey): boolean

	declare function isExtensible(target: any): boolean

	declare function ownKeys(target: any): Array<PropertyKey>

	declare function preventExtensions(target: any): boolean

	declare function set(target: any, propertyKey: PropertyKey, value: any, receiver?: any): boolean

	declare function setPrototypeOf(target: any, proto: any): boolean

		
}

declare module 'Reflect' {
			declare function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any

	declare function construct(target: Function, argumentsList: ArrayLike<any>): any

	declare function defineProperty(target: any, propertyKey: PropertyKey, attributes: PropertyDescriptor): boolean

	declare function deleteProperty(target: any, propertyKey: PropertyKey): boolean

	declare function enumerate(target: any): IterableIterator<any>

	declare function get(target: any, propertyKey: PropertyKey, receiver?: any): any

	declare function getOwnPropertyDescriptor(target: any, propertyKey: PropertyKey): PropertyDescriptor

	declare function getPrototypeOf(target: any): any

	declare function has(target: any, propertyKey: string): boolean

	declare function has(target: any, propertyKey: NO PRINT IMPLEMENTED: SymbolKeyword): boolean

	declare function isExtensible(target: any): boolean

	declare function ownKeys(target: any): Array<PropertyKey>

	declare function preventExtensions(target: any): boolean

	declare function set(target: any, propertyKey: PropertyKey, value: any, receiver?: any): boolean

	declare function setPrototypeOf(target: any, proto: any): boolean

		
}

declare module 'npm$namespace$core' {
		declare interface Locale {
		weekdays: string,
		months: string
	}

	declare function setTimeout(handler: any, timeout?: any, ...args: any[]): number

	declare function setInterval(handler: any, timeout?: any, ...args: any[]): number

	declare function setImmediate(expression: any, ...args: any[]): number

	declare function clearImmediate(handle: number): void

	declare function $for<T>(iterable: Iterable<T>): $for<T>

	declare function isIterable(value: any): boolean

	declare function getIterator<T>(iterable: Iterable<T>): Iterator<T>

	declare function addLocale(lang: string, locale: Locale): typeof core

	declare function locale(lang?: string): string

	declare function delay(msec: number): Promise<void>

		
}

declare module 'core-js/shim' {
					declare module.exports: undefined


}

declare module 'core-js/core' {
					declare module.exports: undefined


}

declare module 'core-js/core/$for' {
					declare module.exports: undefined


}

declare module 'core-js/core/_' {
					declare module.exports: undefined


}

declare module 'core-js/core/array' {
					declare module.exports: undefined


}

declare module 'core-js/core/date' {
					declare module.exports: undefined


}

declare module 'core-js/core/delay' {
					declare module.exports: undefined


}

declare module 'core-js/core/dict' {
					declare module.exports: undefined


}

declare module 'core-js/core/function' {
					declare module.exports: undefined


}

declare module 'core-js/core/global' {
					declare module.exports: undefined


}

declare module 'core-js/core/log' {
					declare module.exports: undefined


}

declare module 'core-js/core/number' {
					declare module.exports: undefined


}

declare module 'core-js/core/object' {
					declare module.exports: undefined


}

declare module 'core-js/core/string' {
					declare module.exports: undefined


}

declare module 'core-js/fn/$for' {
					declare module.exports: undefined


}

declare module 'core-js/fn/_' {
					declare module.exports: undefined


}

declare module 'core-js/fn/clear-immediate' {
					declare module.exports: undefined


}

declare module 'core-js/fn/delay' {
					declare module.exports: undefined


}

declare module 'core-js/fn/dict' {
					declare module.exports: undefined


}

declare module 'core-js/fn/get-iterator' {
					declare module.exports: undefined


}

declare module 'core-js/fn/global' {
					declare module.exports: undefined


}

declare module 'core-js/fn/is-iterable' {
					declare module.exports: undefined


}

declare module 'core-js/fn/log' {
					declare module.exports: undefined


}

declare module 'core-js/fn/map' {
					declare module.exports: undefined


}

declare module 'core-js/fn/promise' {
					declare module.exports: undefined


}

declare module 'core-js/fn/set' {
					declare module.exports: undefined


}

declare module 'core-js/fn/set-immediate' {
					declare module.exports: undefined


}

declare module 'core-js/fn/set-interval' {
					declare module.exports: undefined


}

declare module 'core-js/fn/set-timeout' {
					declare module.exports: undefined


}

declare module 'core-js/fn/weak-map' {
					declare module.exports: undefined


}

declare module 'core-js/fn/weak-set' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/concat' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/copy-within' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/entries' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/every' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/fill' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/filter' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/find' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/find-index' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/for-each' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/from' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/includes' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/index-of' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/join' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/keys' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/last-index-of' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/map' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/of' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/pop' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/push' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/reduce' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/reduce-right' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/reverse' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/shift' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/slice' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/some' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/sort' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/splice' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/turn' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/unshift' {
					declare module.exports: undefined


}

declare module 'core-js/fn/array/values' {
					declare module.exports: undefined


}

declare module 'core-js/fn/date' {
					declare module.exports: undefined


}

declare module 'core-js/fn/date/add-locale' {
					declare module.exports: undefined


}

declare module 'core-js/fn/date/format' {
					declare module.exports: undefined


}

declare module 'core-js/fn/date/formatUTC' {
					declare module.exports: undefined


}

declare module 'core-js/fn/function' {
					declare module.exports: undefined


}

declare module 'core-js/fn/function/has-instance' {
					declare module.exports: undefined


}

declare module 'core-js/fn/function/part' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/acosh' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/asinh' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/atanh' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/cbrt' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/clz32' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/cosh' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/expm1' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/fround' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/hypot' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/imul' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/log10' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/log1p' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/log2' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/sign' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/sinh' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/tanh' {
					declare module.exports: undefined


}

declare module 'core-js/fn/math/trunc' {
					declare module.exports: undefined


}

declare module 'core-js/fn/number' {
					declare module.exports: undefined


}

declare module 'core-js/fn/number/epsilon' {
					declare module.exports: undefined


}

declare module 'core-js/fn/number/is-finite' {
					declare module.exports: undefined


}

declare module 'core-js/fn/number/is-integer' {
					declare module.exports: undefined


}

declare module 'core-js/fn/number/is-nan' {
					declare module.exports: undefined


}

declare module 'core-js/fn/number/is-safe-integer' {
					declare module.exports: undefined


}

declare module 'core-js/fn/number/max-safe-integer' {
					declare module.exports: undefined


}

declare module 'core-js/fn/number/min-safe-integer' {
					declare module.exports: undefined


}

declare module 'core-js/fn/number/parse-float' {
					declare module.exports: undefined


}

declare module 'core-js/fn/number/parse-int' {
					declare module.exports: undefined


}

declare module 'core-js/fn/number/random' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/assign' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/classof' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/create' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/define' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/define-properties' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/define-property' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/entries' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/freeze' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/get-own-property-descriptor' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/get-own-property-descriptors' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/get-own-property-names' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/get-own-property-symbols' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/get-prototype-of' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/is' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/is-extensible' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/is-frozen' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/is-object' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/is-sealed' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/keys' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/make' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/prevent-extensions' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/seal' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/set-prototype-of' {
					declare module.exports: undefined


}

declare module 'core-js/fn/object/values' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/apply' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/construct' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/define-property' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/delete-property' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/enumerate' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/get' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/get-own-property-descriptor' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/get-prototype-of' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/has' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/is-extensible' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/own-keys' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/prevent-extensions' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/set' {
					declare module.exports: undefined


}

declare module 'core-js/fn/reflect/set-prototype-of' {
					declare module.exports: undefined


}

declare module 'core-js/fn/regexp' {
					declare module.exports: undefined


}

declare module 'core-js/fn/regexp/escape' {
					declare module.exports: undefined


}

declare module 'core-js/fn/string' {
					declare module.exports: undefined


}

declare module 'core-js/fn/string/at' {
					declare module.exports: undefined


}

declare module 'core-js/fn/string/code-point-at' {
					declare module.exports: undefined


}

declare module 'core-js/fn/string/ends-with' {
					declare module.exports: undefined


}

declare module 'core-js/fn/string/escape-html' {
					declare module.exports: undefined


}

declare module 'core-js/fn/string/from-code-point' {
					declare module.exports: undefined


}

declare module 'core-js/fn/string/includes' {
					declare module.exports: undefined


}

declare module 'core-js/fn/string/lpad' {
					declare module.exports: undefined


}

declare module 'core-js/fn/string/raw' {
					declare module.exports: undefined


}

declare module 'core-js/fn/string/repeat' {
					declare module.exports: undefined


}

declare module 'core-js/fn/string/rpad' {
					declare module.exports: undefined


}

declare module 'core-js/fn/string/starts-with' {
					declare module.exports: undefined


}

declare module 'core-js/fn/string/unescape-html' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol/for' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol/has-instance' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol/is-concat-spreadable' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol/iterator' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol/key-for' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol/match' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol/replace' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol/search' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol/species' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol/split' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol/to-primitive' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol/to-string-tag' {
					declare module.exports: undefined


}

declare module 'core-js/fn/symbol/unscopables' {
					declare module.exports: undefined


}

declare module 'core-js/es5' {
					declare module.exports: undefined


}

declare module 'core-js/es6' {
					declare module.exports: undefined


}

declare module 'core-js/es6/array' {
					declare module.exports: undefined


}

declare module 'core-js/es6/function' {
					declare module.exports: undefined


}

declare module 'core-js/es6/map' {
					declare module.exports: undefined


}

declare module 'core-js/es6/math' {
					declare module.exports: undefined


}

declare module 'core-js/es6/number' {
					declare module.exports: undefined


}

declare module 'core-js/es6/object' {
					declare module.exports: undefined


}

declare module 'core-js/es6/promise' {
					declare module.exports: undefined


}

declare module 'core-js/es6/reflect' {
					declare module.exports: undefined


}

declare module 'core-js/es6/regexp' {
					declare module.exports: undefined


}

declare module 'core-js/es6/set' {
					declare module.exports: undefined


}

declare module 'core-js/es6/string' {
					declare module.exports: undefined


}

declare module 'core-js/es6/symbol' {
					declare module.exports: undefined


}

declare module 'core-js/es6/weak-map' {
					declare module.exports: undefined


}

declare module 'core-js/es6/weak-set' {
					declare module.exports: undefined


}

declare module 'core-js/es7' {
					declare module.exports: undefined


}

declare module 'core-js/es7/array' {
					declare module.exports: undefined


}

declare module 'core-js/es7/map' {
					declare module.exports: undefined


}

declare module 'core-js/es7/object' {
					declare module.exports: undefined


}

declare module 'core-js/es7/regexp' {
					declare module.exports: undefined


}

declare module 'core-js/es7/set' {
					declare module.exports: undefined


}

declare module 'core-js/es7/string' {
					declare module.exports: undefined


}

declare module 'core-js/js' {
					declare module.exports: undefined


}

declare module 'core-js/js/array' {
					declare module.exports: undefined


}

declare module 'core-js/web' {
					declare module.exports: undefined


}

declare module 'core-js/web/dom' {
					declare module.exports: undefined


}

declare module 'core-js/web/immediate' {
					declare module.exports: undefined


}

declare module 'core-js/web/timers' {
					declare module.exports: undefined


}

declare module 'core-js/library' {
					declare module.exports: undefined


}

declare module 'core-js/library/shim' {
					declare module.exports: undefined


}

declare module 'core-js/library/core' {
					declare module.exports: undefined


}

declare module 'core-js/library/core/$for' {
					declare module.exports: undefined


}

declare module 'core-js/library/core/_' {
					declare module.exports: undefined


}

declare module 'core-js/library/core/array' {
					declare module.exports: undefined


}

declare module 'core-js/library/core/date' {
					declare module.exports: undefined


}

declare module 'core-js/library/core/delay' {
					declare module.exports: undefined


}

declare module 'core-js/library/core/dict' {
					declare module.exports: undefined


}

declare module 'core-js/library/core/function' {
					declare module.exports: undefined


}

declare module 'core-js/library/core/global' {
					declare module.exports: undefined


}

declare module 'core-js/library/core/log' {
					declare module.exports: undefined


}

declare module 'core-js/library/core/number' {
					declare module.exports: undefined


}

declare module 'core-js/library/core/object' {
					declare module.exports: undefined


}

declare module 'core-js/library/core/string' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/$for' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/_' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/clear-immediate' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/delay' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/dict' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/get-iterator' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/global' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/is-iterable' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/log' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/map' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/promise' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/set' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/set-immediate' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/set-interval' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/set-timeout' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/weak-map' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/weak-set' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/concat' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/copy-within' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/entries' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/every' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/fill' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/filter' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/find' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/find-index' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/for-each' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/from' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/includes' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/index-of' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/join' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/keys' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/last-index-of' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/map' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/of' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/pop' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/push' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/reduce' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/reduce-right' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/reverse' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/shift' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/slice' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/some' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/sort' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/splice' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/turn' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/unshift' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/array/values' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/date' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/date/add-locale' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/date/format' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/date/formatUTC' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/function' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/function/has-instance' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/function/part' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/acosh' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/asinh' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/atanh' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/cbrt' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/clz32' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/cosh' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/expm1' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/fround' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/hypot' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/imul' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/log10' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/log1p' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/log2' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/sign' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/sinh' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/tanh' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/math/trunc' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/number' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/number/epsilon' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/number/is-finite' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/number/is-integer' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/number/is-nan' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/number/is-safe-integer' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/number/max-safe-integer' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/number/min-safe-integer' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/number/parse-float' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/number/parse-int' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/number/random' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/assign' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/classof' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/create' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/define' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/define-properties' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/define-property' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/entries' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/freeze' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/get-own-property-descriptor' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/get-own-property-descriptors' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/get-own-property-names' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/get-own-property-symbols' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/get-prototype-of' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/is' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/is-extensible' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/is-frozen' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/is-object' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/is-sealed' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/keys' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/make' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/prevent-extensions' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/seal' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/set-prototype-of' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/object/values' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/apply' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/construct' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/define-property' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/delete-property' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/enumerate' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/get' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/get-own-property-descriptor' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/get-prototype-of' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/has' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/is-extensible' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/own-keys' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/prevent-extensions' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/set' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/reflect/set-prototype-of' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/regexp' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/regexp/escape' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/string' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/string/at' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/string/code-point-at' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/string/ends-with' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/string/escape-html' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/string/from-code-point' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/string/includes' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/string/lpad' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/string/raw' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/string/repeat' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/string/rpad' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/string/starts-with' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/string/unescape-html' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol/for' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol/has-instance' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol/is-concat-spreadable' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol/iterator' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol/key-for' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol/match' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol/replace' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol/search' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol/species' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol/split' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol/to-primitive' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol/to-string-tag' {
					declare module.exports: undefined


}

declare module 'core-js/library/fn/symbol/unscopables' {
					declare module.exports: undefined


}

declare module 'core-js/library/es5' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/array' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/function' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/map' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/math' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/number' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/object' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/promise' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/reflect' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/regexp' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/set' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/string' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/symbol' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/weak-map' {
					declare module.exports: undefined


}

declare module 'core-js/library/es6/weak-set' {
					declare module.exports: undefined


}

declare module 'core-js/library/es7' {
					declare module.exports: undefined


}

declare module 'core-js/library/es7/array' {
					declare module.exports: undefined


}

declare module 'core-js/library/es7/map' {
					declare module.exports: undefined


}

declare module 'core-js/library/es7/object' {
					declare module.exports: undefined


}

declare module 'core-js/library/es7/regexp' {
					declare module.exports: undefined


}

declare module 'core-js/library/es7/set' {
					declare module.exports: undefined


}

declare module 'core-js/library/es7/string' {
					declare module.exports: undefined


}

declare module 'core-js/library/js' {
					declare module.exports: undefined


}

declare module 'core-js/library/js/array' {
					declare module.exports: undefined


}

declare module 'core-js/library/web' {
					declare module.exports: undefined


}

declare module 'core-js/library/web/dom' {
					declare module.exports: undefined


}

declare module 'core-js/library/web/immediate' {
					declare module.exports: undefined


}

declare module 'core-js/library/web/timers' {
					declare module.exports: undefined


}