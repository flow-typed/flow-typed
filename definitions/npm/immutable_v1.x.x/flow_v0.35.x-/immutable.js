

declare module 'immutable' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Immutable' {
		declare export interface List<T> {
		set(index: number, value: T): List<T>,
		delete(index: number): List<T>,
		remove(index: number): List<T>,
		insert(index: number, value: T): List<T>,
		clear(): List<T>,
		push(...values: T[]): List<T>,
		pop(): List<T>,
		unshift(...values: T[]): List<T>,
		shift(): List<T>,
		update(updater: (value: List<T>) => List<T>): List<T>,
		update(index: number, updater: (value: T) => T): List<T>,
		update(index: number, notSetValue: T, updater: (value: T) => T): List<T>,
		merge(...iterables: Iterable.Indexed<T>[]): List<T>,
		merge(...iterables: Array<T>[]): List<T>,
		mergeWith(
		merger: (previous: T, next: T, key: number) => T, ...iterables: Iterable.Indexed<T>[]
	): List<T>,
		mergeWith(
		merger: (previous: T, next: T, key: number) => T, ...iterables: Array<T>[]
	): List<T>,
		mergeDeep(...iterables: Iterable.Indexed<T>[]): List<T>,
		mergeDeep(...iterables: Array<T>[]): List<T>,
		mergeDeepWith(
		merger: (previous: T, next: T, key: number) => T, ...iterables: Iterable.Indexed<T>[]
	): List<T>,
		mergeDeepWith(
		merger: (previous: T, next: T, key: number) => T, ...iterables: Array<T>[]
	): List<T>,
		setSize(size: number): List<T>,
		setIn(keyPath: Array<any>, value: any): List<T>,
		setIn(keyPath: Iterable<any, any>, value: any): List<T>,
		deleteIn(keyPath: Array<any>): List<T>,
		deleteIn(keyPath: Iterable<any, any>): List<T>,
		removeIn(keyPath: Array<any>): List<T>,
		removeIn(keyPath: Iterable<any, any>): List<T>,
		updateIn(keyPath: Array<any>, updater: (value: any) => any): List<T>,
		updateIn(keyPath: Array<any>, notSetValue: any, updater: (value: any) => any): List<T>,
		updateIn(keyPath: Iterable<any, any>, updater: (value: any) => any): List<T>,
		updateIn(
		keyPath: Iterable<any, any>, notSetValue: any, updater: (value: any) => any
	): List<T>,
		mergeIn(keyPath: Iterable<any, any>, ...iterables: Iterable.Indexed<T>[]): List<T>,
		mergeIn(keyPath: Array<any>, ...iterables: Iterable.Indexed<T>[]): List<T>,
		mergeIn(keyPath: Array<any>, ...iterables: Array<T>[]): List<T>,
		mergeDeepIn(keyPath: Iterable<any, any>, ...iterables: Iterable.Indexed<T>[]): List<T>,
		mergeDeepIn(keyPath: Array<any>, ...iterables: Iterable.Indexed<T>[]): List<T>,
		mergeDeepIn(keyPath: Array<any>, ...iterables: Array<T>[]): List<T>,
		withMutations(mutator: (mutable: List<T>) => any): List<T>,
		asMutable(): List<T>,
		asImmutable(): List<T>
	}

	declare export interface Map<K, V> {
		set(key: K, value: V): Map<K, V>,
		delete(key: K): Map<K, V>,
		remove(key: K): Map<K, V>,
		clear(): Map<K, V>,
		update(updater: (value: Map<K, V>) => Map<K, V>): Map<K, V>,
		update(key: K, updater: (value: V) => V): Map<K, V>,
		update(key: K, notSetValue: V, updater: (value: V) => V): Map<K, V>,
		merge(...iterables: Iterable<K, V>[]): Map<K, V>,
		merge(...iterables: {
		[key: string]: V
	}[]): Map<string, V>,
		mergeWith(
		merger: (previous: V, next: V, key: K) => V, ...iterables: Iterable<K, V>[]
	): Map<K, V>,
		mergeWith(
		merger: (previous: V, next: V, key: K) => V, ...iterables: {
		[key: string]: V
	}[]
	): Map<string, V>,
		mergeDeep(...iterables: Iterable<K, V>[]): Map<K, V>,
		mergeDeep(...iterables: {
		[key: string]: V
	}[]): Map<string, V>,
		mergeDeepWith(
		merger: (previous: V, next: V, key: K) => V, ...iterables: Iterable<K, V>[]
	): Map<K, V>,
		mergeDeepWith(
		merger: (previous: V, next: V, key: K) => V, ...iterables: {
		[key: string]: V
	}[]
	): Map<string, V>,
		setIn(keyPath: Array<any>, value: any): Map<K, V>,
		setIn(KeyPath: Iterable<any, any>, value: any): Map<K, V>,
		deleteIn(keyPath: Array<any>): Map<K, V>,
		deleteIn(keyPath: Iterable<any, any>): Map<K, V>,
		removeIn(keyPath: Array<any>): Map<K, V>,
		removeIn(keyPath: Iterable<any, any>): Map<K, V>,
		updateIn(keyPath: Array<any>, updater: (value: any) => any): Map<K, V>,
		updateIn(keyPath: Array<any>, notSetValue: any, updater: (value: any) => any): Map<K, V>,
		updateIn(keyPath: Iterable<any, any>, updater: (value: any) => any): Map<K, V>,
		updateIn(
		keyPath: Iterable<any, any>, notSetValue: any, updater: (value: any) => any
	): Map<K, V>,
		mergeIn(keyPath: Iterable<any, any>, ...iterables: Iterable<K, V>[]): Map<K, V>,
		mergeIn(keyPath: Array<any>, ...iterables: Iterable<K, V>[]): Map<K, V>,
		mergeIn(keyPath: Array<any>, ...iterables: {
		[key: string]: V
	}[]): Map<string, V>,
		mergeDeepIn(keyPath: Iterable<any, any>, ...iterables: Iterable<K, V>[]): Map<K, V>,
		mergeDeepIn(keyPath: Array<any>, ...iterables: Iterable<K, V>[]): Map<K, V>,
		mergeDeepIn(keyPath: Array<any>, ...iterables: {
		[key: string]: V
	}[]): Map<string, V>,
		withMutations(mutator: (mutable: Map<K, V>) => any): Map<K, V>,
		asMutable(): Map<K, V>,
		asImmutable(): Map<K, V>
	}

	declare export interface OrderedMap<K, V> {
		
	}

	declare export interface Set<T> {
		add(value: T): Set<T>,
		delete(value: T): Set<T>,
		remove(value: T): Set<T>,
		clear(): Set<T>,
		union(...iterables: Iterable<any, T>[]): Set<T>,
		union(...iterables: Array<T>[]): Set<T>,
		merge(...iterables: Iterable<any, T>[]): Set<T>,
		merge(...iterables: Array<T>[]): Set<T>,
		intersect(...iterables: Iterable<any, T>[]): Set<T>,
		intersect(...iterables: Array<T>[]): Set<T>,
		subtract(...iterables: Iterable<any, T>[]): Set<T>,
		subtract(...iterables: Array<T>[]): Set<T>,
		withMutations(mutator: (mutable: Set<T>) => any): Set<T>,
		asMutable(): Set<T>,
		asImmutable(): Set<T>
	}

	declare export interface OrderedSet<T> {
		
	}

	declare export interface Stack<T> {
		peek(): T,
		clear(): Stack<T>,
		unshift(...values: T[]): Stack<T>,
		unshiftAll(iter: Iterable<any, T>): Stack<T>,
		unshiftAll(iter: Array<T>): Stack<T>,
		shift(): Stack<T>,
		push(...values: T[]): Stack<T>,
		pushAll(iter: Iterable<any, T>): Stack<T>,
		pushAll(iter: Array<T>): Stack<T>,
		pop(): Stack<T>,
		withMutations(mutator: (mutable: Stack<T>) => any): Stack<T>,
		asMutable(): Stack<T>,
		asImmutable(): Stack<T>
	}

	declare export interface Seq<K, V> {
		size: number,
		cacheResult(): this
	}

	declare export interface Iterable<K, V> {
		equals(other: Iterable<K, V>): boolean,
		hashCode(): number,
		get(key: K, notSetValue?: V): V,
		has(key: K): boolean,
		includes(value: V): boolean,
		contains(value: V): boolean,
		first(): V,
		last(): V,
		getIn(searchKeyPath: Array<any>, notSetValue?: any): any,
		getIn(searchKeyPath: Iterable<any, any>, notSetValue?: any): any,
		hasIn(searchKeyPath: Array<any>): boolean,
		hasIn(searchKeyPath: Iterable<any, any>): boolean,
		toJS(): any,
		toArray(): Array<V>,
		toObject(): {
		[key: string]: V
	},
		toMap(): Map<K, V>,
		toOrderedMap(): OrderedMap<K, V>,
		toSet(): Set<V>,
		toOrderedSet(): OrderedSet<V>,
		toList(): List<V>,
		toStack(): Stack<V>,
		toSeq(): Seq<K, V>,
		toKeyedSeq(): Seq.Keyed<K, V>,
		toIndexedSeq(): Seq.Indexed<V>,
		toSetSeq(): Seq.Set<V>,
		keys(): Iterator<K>,
		values(): Iterator<V>,
		entries(): Iterator<[K, V]>,
		keySeq(): Seq.Indexed<K>,
		valueSeq(): Seq.Indexed<V>,
		entrySeq(): Seq.Indexed<[K, V]>,
		map<M>(mapper: (value: V, key: K, iter: this) => M, context?: any): Iterable<K, M>,
		filter(predicate: (value: V, key: K, iter: this) => boolean, context?: any): this,
		filterNot(predicate: (value: V, key: K, iter: this) => boolean, context?: any): this,
		reverse(): this,
		sort(comparator?: (valueA: V, valueB: V) => number): this,
		sortBy<C>(
		comparatorValueMapper: (value: V, key: K, iter: this) => C, comparator?: (valueA: C, valueB: C) => number
	): this,
		groupBy<G>(
		grouper: (value: V, key: K, iter: this) => G, context?: any
	): Seq.Keyed<G, this>,
		forEach(sideEffect: (value: V, key: K, iter: this) => any, context?: any): number,
		slice(begin?: number, end?: number): this,
		rest(): this,
		butLast(): this,
		skip(amount: number): this,
		skipLast(amount: number): this,
		skipWhile(predicate: (value: V, key: K, iter: this) => boolean, context?: any): this,
		skipUntil(predicate: (value: V, key: K, iter: this) => boolean, context?: any): this,
		take(amount: number): this,
		takeLast(amount: number): this,
		takeWhile(predicate: (value: V, key: K, iter: this) => boolean, context?: any): this,
		takeUntil(predicate: (value: V, key: K, iter: this) => boolean, context?: any): this,
		concat(...valuesOrIterables: Array<Iterable<K, V> | V>): this,
		flatten(depth?: number): this,
		flatten(shallow?: boolean): this,
		flatMap<MK, MV>(
		mapper: (value: V, key: K, iter: this) => Iterable<MK, MV>, context?: any
	): Iterable<MK, MV>,
		flatMap<MK, MV>(
		mapper: (value: V, key: K, iter: this) => any, context?: any
	): Iterable<MK, MV>,
		reduce<R>(
		reducer: (reduction: R, value: V, key: K, iter: this) => R, initialReduction?: R, context?: any
	): R,
		reduceRight<R>(
		reducer: (reduction: R, value: V, key: K, iter: this) => R, initialReduction?: R, context?: any
	): R,
		every(predicate: (value: V, key: K, iter: this) => boolean, context?: any): boolean,
		some(predicate: (value: V, key: K, iter: this) => boolean, context?: any): boolean,
		join(separator?: string): string,
		isEmpty(): boolean,
		count(): number,
		count(predicate: (value: V, key: K, iter: this) => boolean, context?: any): number,
		countBy<G>(
		grouper: (value: V, key: K, iter: this) => G, context?: any
	): Seq.Keyed<G, number>,
		find(
		predicate: (value: V, key: K, iter: this) => boolean, context?: any, notSetValue?: V
	): V,
		findLast(
		predicate: (value: V, key: K, iter: this) => boolean, context?: any, notSetValue?: V
	): V,
		findEntry(
		predicate: (value: V, key: K, iter: this) => boolean, context?: any, notSetValue?: V
	): [K, V],
		findLastEntry(
		predicate: (value: V, key: K, iter: this) => boolean, context?: any, notSetValue?: V
	): [K, V],
		findKey(predicate: (value: V, key: K, iter: this) => boolean, context?: any): K,
		findLastKey(predicate: (value: V, key: K, iter: this) => boolean, context?: any): K,
		keyOf(searchValue: V): K,
		lastKeyOf(searchValue: V): K,
		max(comparator?: (valueA: V, valueB: V) => number): V,
		maxBy<C>(
		comparatorValueMapper: (value: V, key: K, iter: this) => C, comparator?: (valueA: C, valueB: C) => number
	): V,
		min(comparator?: (valueA: V, valueB: V) => number): V,
		minBy<C>(
		comparatorValueMapper: (value: V, key: K, iter: this) => C, comparator?: (valueA: C, valueB: C) => number
	): V,
		isSubset(iter: Iterable<any, V>): boolean,
		isSubset(iter: Array<V>): boolean,
		isSuperset(iter: Iterable<any, V>): boolean,
		isSuperset(iter: Array<V>): boolean,
		size: number
	}

	declare export interface Collection<K, V> {
		size: number
	}

	declare export interface Iterator<T> {
		next(): {
		value: T,
		done: boolean
	}
	}

	declare export function fromJS(json: any, reviver?: (k: any, v: Iterable<any, any>) => any): any

	declare export function is(first: any, second: any): boolean

	declare export function List<T>(): List<T>

	declare export function List<T>(iter: Iterable.Indexed<T>): List<T>

	declare export function List<T>(iter: Iterable.Set<T>): List<T>

	declare export function List<K, V>(iter: Iterable.Keyed<K, V>): List<[K, V]>

	declare export function List<T>(array: Array<T>): List<T>

	declare export function List<T>(iterator: Iterator<T>): List<T>

	declare export function List<T>(iterable: Iterable<any, T>): List<T>

	declare export function Map<K, V>(): Map<K, V>

	declare export function Map<K, V>(iter: Iterable.Keyed<K, V>): Map<K, V>

	declare export function Map<K, V>(iter: Iterable<any, [K, V]>): Map<K, V>

	declare export function Map<K, V>(array: Array<[K, V]>): Map<K, V>

	declare export function Map<V>(obj: {
		[key: string]: V
	}): Map<string, V>

	declare export function Map<K, V>(iterator: Iterator<[K, V]>): Map<K, V>

	declare export function Map<K, V>(iterable: Iterable<any, [K, V]>): Map<K, V>

	declare export function OrderedMap<K, V>(): OrderedMap<K, V>

	declare export function OrderedMap<K, V>(iter: Iterable.Keyed<K, V>): OrderedMap<K, V>

	declare export function OrderedMap<K, V>(iter: Iterable<any, [K, V]>): OrderedMap<K, V>

	declare export function OrderedMap<K, V>(array: Array<[K, V]>): OrderedMap<K, V>

	declare export function OrderedMap<V>(obj: {
		[key: string]: V
	}): OrderedMap<string, V>

	declare export function OrderedMap<K, V>(iterator: Iterator<[K, V]>): OrderedMap<K, V>

	declare export function OrderedMap<K, V>(iterable: Iterable<any, [K, V]>): OrderedMap<K, V>

	declare export function Set<T>(): Set<T>

	declare export function Set<T>(iter: Iterable.Set<T>): Set<T>

	declare export function Set<T>(iter: Iterable.Indexed<T>): Set<T>

	declare export function Set<K, V>(iter: Iterable.Keyed<K, V>): Set<[K, V]>

	declare export function Set<T>(array: Array<T>): Set<T>

	declare export function Set<T>(iterator: Iterator<T>): Set<T>

	declare export function Set<T>(iterable: Iterable<any, T>): Set<T>

	declare export function OrderedSet<T>(): OrderedSet<T>

	declare export function OrderedSet<T>(iter: Iterable.Set<T>): OrderedSet<T>

	declare export function OrderedSet<T>(iter: Iterable.Indexed<T>): OrderedSet<T>

	declare export function OrderedSet<K, V>(iter: Iterable.Keyed<K, V>): OrderedSet<[K, V]>

	declare export function OrderedSet<T>(array: Array<T>): OrderedSet<T>

	declare export function OrderedSet<T>(iterator: Iterator<T>): OrderedSet<T>

	declare export function OrderedSet<T>(iterable: Iterable<any, T>): OrderedSet<T>

	declare export function Stack<T>(): Stack<T>

	declare export function Stack<T>(iter: Iterable.Indexed<T>): Stack<T>

	declare export function Stack<T>(iter: Iterable.Set<T>): Stack<T>

	declare export function Stack<K, V>(iter: Iterable.Keyed<K, V>): Stack<[K, V]>

	declare export function Stack<T>(array: Array<T>): Stack<T>

	declare export function Stack<T>(iterator: Iterator<T>): Stack<T>

	declare export function Stack<T>(iterable: Iterable<any, T>): Stack<T>

	declare export function Range(start?: number, end?: number, step?: number): Seq.Indexed<number>

	declare export function Repeat<T>(value: T, times?: number): Seq.Indexed<T>

	declare export function Record(defaultValues: {
		[key: string]: any
	}, name?: string): Record.Class

	declare export function Seq<K, V>(): Seq<K, V>

	declare export function Seq<K, V>(seq: Seq<K, V>): Seq<K, V>

	declare export function Seq<K, V>(iterable: Iterable<K, V>): Seq<K, V>

	declare export function Seq<T>(array: Array<T>): Seq.Indexed<T>

	declare export function Seq<V>(obj: {
		[key: string]: V
	}): Seq.Keyed<string, V>

	declare export function Seq<T>(iterator: Iterator<T>): Seq.Indexed<T>

	declare export function Seq<T>(iterable: Iterable<any, T>): Seq.Indexed<T>

	declare export function Iterable<K, V>(iterable: Iterable<K, V>): Iterable<K, V>

	declare export function Iterable<T>(array: Array<T>): Iterable.Indexed<T>

	declare export function Iterable<V>(obj: {
		[key: string]: V
	}): Iterable.Keyed<string, V>

	declare export function Iterable<T>(iterator: Iterator<T>): Iterable.Indexed<T>

	declare export function Iterable<T>(iterable: Iterable<any, T>): Iterable.Indexed<T>

	declare export function Iterable<V>(value: V): Iterable.Indexed<V>

		
}

declare module 'List' {
			declare function isList(maybeList: any): boolean

	declare function of<T>(...values: T[]): List<T>

		
}

declare module 'Map' {
			declare function isMap(maybeMap: any): boolean

	declare function of<K, V>(...keyValues: (K | V)[]): Map<K, V>

		
}

declare module 'OrderedMap' {
			declare function isOrderedMap(maybeOrderedMap: any): boolean

		
}

declare module 'Set' {
			declare function isSet(maybeSet: any): boolean

	declare function of<T>(...values: T[]): Set<T>

	declare function fromKeys<T>(iter: Iterable<T, any>): Set<T>

	declare function fromKeys(obj: {
		[key: string]: any
	}): Set<string>

	declare function of<T>(...values: T[]): Seq.Set<T>

		
}

declare module 'OrderedSet' {
			declare function isOrderedSet(maybeOrderedSet: any): boolean

	declare function of<T>(...values: T[]): OrderedSet<T>

	declare function fromKeys<T>(iter: Iterable<T, any>): OrderedSet<T>

	declare function fromKeys(obj: {
		[key: string]: any
	}): OrderedSet<string>

		
}

declare module 'Stack' {
			declare function isStack(maybeStack: any): boolean

	declare function of<T>(...values: T[]): Stack<T>

		
}

declare module 'Record' {
		declare export interface Class {
		new (): Map<string, any>,
		new (values: {
		[key: string]: any
	}): Map<string, any>,
		new (values: Iterable<string, any>): Map<string, any>,
		(): Map<string, any>,
		(values: {
		[key: string]: any
	}): Map<string, any>,
		(values: Iterable<string, any>): Map<string, any>
	}

			
}

declare module 'Seq' {
		declare export interface Keyed<K, V> {
		toSeq(): this
	}

	declare export interface Indexed<T> {
		toSeq(): this
	}

	declare export interface Set<T> {
		toSeq(): this
	}

	declare function isSeq(maybeSeq: any): boolean

	declare function of<T>(...values: T[]): Seq.Indexed<T>

	declare export function Keyed<K, V>(): Seq.Keyed<K, V>

	declare export function Keyed<K, V>(seq: Iterable.Keyed<K, V>): Seq.Keyed<K, V>

	declare export function Keyed<K, V>(seq: Iterable<any, [K, V]>): Seq.Keyed<K, V>

	declare export function Keyed<K, V>(array: Array<[K, V]>): Seq.Keyed<K, V>

	declare export function Keyed<V>(obj: {
		[key: string]: V
	}): Seq.Keyed<string, V>

	declare export function Keyed<K, V>(iterator: Iterator<[K, V]>): Seq.Keyed<K, V>

	declare export function Keyed<K, V>(iterable: Iterable<any, [K, V]>): Seq.Keyed<K, V>

	declare export function Indexed<T>(): Seq.Indexed<T>

	declare export function Indexed<T>(seq: Iterable.Indexed<T>): Seq.Indexed<T>

	declare export function Indexed<T>(seq: Iterable.Set<T>): Seq.Indexed<T>

	declare export function Indexed<K, V>(seq: Iterable.Keyed<K, V>): Seq.Indexed<[K, V]>

	declare export function Indexed<T>(array: Array<T>): Seq.Indexed<T>

	declare export function Indexed<T>(iterator: Iterator<T>): Seq.Indexed<T>

	declare export function Indexed<T>(iterable: Iterable<any, T>): Seq.Indexed<T>

	declare export function Set<T>(): Seq.Set<T>

	declare export function Set<T>(seq: Iterable.Set<T>): Seq.Set<T>

	declare export function Set<T>(seq: Iterable.Indexed<T>): Seq.Set<T>

	declare export function Set<K, V>(seq: Iterable.Keyed<K, V>): Seq.Set<[K, V]>

	declare export function Set<T>(array: Array<T>): Seq.Set<T>

	declare export function Set<T>(iterator: Iterator<T>): Seq.Set<T>

	declare export function Set<T>(iterable: Iterable<any, T>): Seq.Set<T>

		
}

declare module 'Indexed' {
			declare function of<T>(...values: T[]): Seq.Indexed<T>

		
}

declare module 'Iterable' {
		declare export interface Keyed<K, V> {
		toSeq(): Seq.Keyed<K, V>,
		flip(): this,
		mapKeys<M>(
		mapper: (key: K, value: V, iter: this) => M, context?: any
	): Iterable.Keyed<M, V>,
		mapEntries<KM, VM>(
		mapper: (entry: [K, V], index: number, iter: this) => [KM, VM], context?: any
	): Iterable.Keyed<KM, VM>
	}

	declare export interface Indexed<T> {
		get(index: number, notSetValue?: T): T,
		toSeq(): Seq.Indexed<T>,
		fromEntrySeq(): Seq.Keyed<any, any>,
		interpose(separator: T): this,
		interleave(...iterables: Array<Iterable<any, T>>): this,
		splice(
		index: number, removeNum: number, ...values: Array<Iterable.Indexed<T> | T>
	): this,
		zip(...iterables: Array<Iterable<any, any>>): this,
		zipWith<U, Z>(
		zipper: (value: T, otherValue: U) => Z, otherIterable: Iterable<any, U>
	): Iterable.Indexed<Z>,
		zipWith<U, V, Z>(
		zipper: (value: T, otherValue: U, thirdValue: V) => Z, otherIterable: Iterable<any, U>, thirdIterable: Iterable<any, V>
	): Iterable.Indexed<Z>,
		zipWith<Z>(
		zipper: (...any: Array<any>) => Z, ...iterables: Array<Iterable<any, any>>
	): Iterable.Indexed<Z>,
		indexOf(searchValue: T): number,
		lastIndexOf(searchValue: T): number,
		findIndex(
		predicate: (value: T, index: number, iter: this) => boolean, context?: any
	): number,
		findLastIndex(
		predicate: (value: T, index: number, iter: this) => boolean, context?: any
	): number
	}

	declare export interface Set<T> {
		toSeq(): Seq.Set<T>
	}

	declare function isIterable(maybeIterable: any): boolean

	declare function isKeyed(maybeKeyed: any): boolean

	declare function isIndexed(maybeIndexed: any): boolean

	declare function isAssociative(maybeAssociative: any): boolean

	declare function isOrdered(maybeOrdered: any): boolean

	declare export function Keyed<K, V>(iter: Iterable.Keyed<K, V>): Iterable.Keyed<K, V>

	declare export function Keyed<K, V>(iter: Iterable<any, [K, V]>): Iterable.Keyed<K, V>

	declare export function Keyed<K, V>(array: Array<[K, V]>): Iterable.Keyed<K, V>

	declare export function Keyed<V>(obj: {
		[key: string]: V
	}): Iterable.Keyed<string, V>

	declare export function Keyed<K, V>(iterator: Iterator<[K, V]>): Iterable.Keyed<K, V>

	declare export function Keyed<K, V>(iterable: Iterable<any, [K, V]>): Iterable.Keyed<K, V>

	declare export function Indexed<T>(iter: Iterable.Indexed<T>): Iterable.Indexed<T>

	declare export function Indexed<T>(iter: Iterable.Set<T>): Iterable.Indexed<T>

	declare export function Indexed<K, V>(iter: Iterable.Keyed<K, V>): Iterable.Indexed<[K, V]>

	declare export function Indexed<T>(array: Array<T>): Iterable.Indexed<T>

	declare export function Indexed<T>(iterator: Iterator<T>): Iterable.Indexed<T>

	declare export function Indexed<T>(iterable: Iterable<any, T>): Iterable.Indexed<T>

	declare export function Set<T>(iter: Iterable.Set<T>): Iterable.Set<T>

	declare export function Set<T>(iter: Iterable.Indexed<T>): Iterable.Set<T>

	declare export function Set<K, V>(iter: Iterable.Keyed<K, V>): Iterable.Set<[K, V]>

	declare export function Set<T>(array: Array<T>): Iterable.Set<T>

	declare export function Set<T>(iterator: Iterator<T>): Iterable.Set<T>

	declare export function Set<T>(iterable: Iterable<any, T>): Iterable.Set<T>

		
}

declare module 'Collection' {
		declare export interface Keyed<K, V> {
		toSeq(): Seq.Keyed<K, V>
	}

	declare export interface Indexed<T> {
		toSeq(): Seq.Indexed<T>
	}

	declare export interface Set<T> {
		toSeq(): Seq.Set<T>
	}

			
}