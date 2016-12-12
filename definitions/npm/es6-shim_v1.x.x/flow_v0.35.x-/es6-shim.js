

declare module 'es6-shim' {
	declare type PropertyKey = string | number | NO PRINT IMPLEMENTED: SymbolKeyword;

	declare interface IteratorResult<T> {
		done: boolean,
		value?: T
	}

	declare interface IterableShim<T> {
		_es6-shim iterator_(): Iterator<T>
	}

	declare interface Iterator<T> {
		next(value?: any): IteratorResult<T>,
		return(value?: any): IteratorResult<T>,
		throw(e?: any): IteratorResult<T>
	}

	declare interface IterableIteratorShim<T> {
		_es6-shim iterator_(): IterableIteratorShim<T>
	}

	declare interface StringConstructor {
		fromCodePoint(...codePoints: number[]): string,
		raw(template: TemplateStringsArray, ...substitutions: any[]): string
	}

	declare interface String {
		codePointAt(pos: number): number,
		includes(searchString: string, position?: number): boolean,
		endsWith(searchString: string, endPosition?: number): boolean,
		repeat(count: number): string,
		startsWith(searchString: string, position?: number): boolean,
		anchor(name: string): string,
		big(): string,
		blink(): string,
		bold(): string,
		fixed(): string,
		fontcolor(color: string): string,
		fontsize(size: number): string,
		fontsize(size: string): string,
		italics(): string,
		link(url: string): string,
		small(): string,
		strike(): string,
		sub(): string,
		sup(): string,
		_es6-shim iterator_(): IterableIteratorShim<string>
	}

	declare interface ArrayConstructor {
		from<T, U>(
		arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any
	): Array<U>,
		from<T, U>(
		iterable: IterableShim<T>, mapfn: (v: T, k: number) => U, thisArg?: any
	): Array<U>,
		from<T>(arrayLike: ArrayLike<T>): Array<T>,
		from<T>(iterable: IterableShim<T>): Array<T>,
		of<T>(...items: T[]): Array<T>
	}

	declare interface Array<T> {
		find(
		predicate: (value: T, index: number, obj: Array<T>) => boolean, thisArg?: any
	): T,
		findIndex(predicate: (value: T) => boolean, thisArg?: any): number,
		fill(value: T, start?: number, end?: number): T[],
		copyWithin(target: number, start: number, end?: number): T[],
		entries(): IterableIteratorShim<[number, T]>,
		keys(): IterableIteratorShim<number>,
		values(): IterableIteratorShim<T>,
		_es6-shim iterator_(): IterableIteratorShim<T>
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

	declare interface ObjectConstructor {
		assign(target: any, ...sources: any[]): any,
		is(value1: any, value2: any): boolean,
		setPrototypeOf(o: any, proto: any): any
	}

	declare interface RegExp {
		flags: string
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
		all<T>(values: IterableShim<T | PromiseLike<T>>): Promise<T[]>,
		race<T>(values: IterableShim<T | PromiseLike<T>>): Promise<T>,
		reject(reason: any): Promise<void>,
		reject<T>(reason: any): Promise<T>,
		resolve<T>(value: T | PromiseLike<T>): Promise<T>,
		resolve(): Promise<void>
	}

	declare interface Map<K, V> {
		clear(): void,
		delete(key: K): boolean,
		forEach(callbackfn: (value: V, index: K, map: Map<K, V>) => void, thisArg?: any): void,
		get(key: K): V,
		has(key: K): boolean,
		set(key: K, value?: V): Map<K, V>,
		size: number,
		entries(): IterableIteratorShim<[K, V]>,
		keys(): IterableIteratorShim<K>,
		values(): IterableIteratorShim<V>
	}

	declare interface MapConstructor {
		new <K, V>(): Map<K, V>,
		new <K, V>(iterable: IterableShim<[K, V]>): Map<K, V>,
		prototype: Map<any, any>
	}

	declare interface Set<T> {
		add(value: T): Set<T>,
		clear(): void,
		delete(value: T): boolean,
		forEach(callbackfn: (value: T, index: T, set: Set<T>) => void, thisArg?: any): void,
		has(value: T): boolean,
		size: number,
		entries(): IterableIteratorShim<[T, T]>,
		keys(): IterableIteratorShim<T>,
		values(): IterableIteratorShim<T>,
		_es6-shim iterator_(): IterableIteratorShim<T>
	}

	declare interface SetConstructor {
		new <T>(): Set<T>,
		new <T>(iterable: IterableShim<T>): Set<T>,
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
		new <K, V>(iterable: IterableShim<[K, V]>): WeakMap<K, V>,
		prototype: WeakMap<any, any>
	}

	declare interface WeakSet<T> {
		add(value: T): WeakSet<T>,
		delete(value: T): boolean,
		has(value: T): boolean
	}

	declare interface WeakSetConstructor {
		new <T>(): WeakSet<T>,
		new <T>(iterable: IterableShim<T>): WeakSet<T>,
		prototype: WeakSet<any>
	}

			
}

declare module 'npm$namespace$Reflect' {
			declare function apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any

	declare function construct(target: Function, argumentsList: ArrayLike<any>): any

	declare function defineProperty(target: any, propertyKey: PropertyKey, attributes: PropertyDescriptor): boolean

	declare function deleteProperty(target: any, propertyKey: PropertyKey): boolean

	declare function enumerate(target: any): IterableIteratorShim<any>

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

	declare function enumerate(target: any): Iterator<any>

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