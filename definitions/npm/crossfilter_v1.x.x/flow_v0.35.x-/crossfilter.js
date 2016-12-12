import type { CrossFilterStatic } from 'npm$namespace$CrossFilter'

declare module 'crossfilter' {
					declare module.exports: CrossFilterStatic


}

declare module 'npm$namespace$CrossFilter' {
		declare export interface Selector<T> {
		(value: T): any
	}

	declare export interface CrossFilterStatic {
		(data: T[]): CrossFilter<T>,
		version: string,
		permute<T>(array: T[], index: number[]): T[],
		bisect: {
		(array: T[], value: T, lo: number, hi: number): number,
		by<T>(value: Selector<T>): Bisector<T>
	},
		heap: {
		(array: T[], lo: number, hi: number): T[],
		by<T>(value: Selector<T>): Heap<T>
	},
		heapselect: {
		(array: T[], lo: number, hi: number, k: number): T[],
		by<T>(value: Selector<T>): HeapSelect<T>
	},
		insertionsort: {
		(array: T[], lo: number, hi: number): T[],
		by<T>(value: Selector<T>): Sort<T>
	},
		quicksort: {
		(array: T[], lo: number, hi: number): T[],
		by<T>(value: Selector<T>): Sort<T>
	}
	}

	declare export interface Bisection<T> {
		(array: T[], value: T, lo: number, hi: number): number
	}

	declare export interface Bisector<T> {
		left: Bisection<T>,
		right: Bisection<T>
	}

	declare export interface Heap<T> {
		(array: T[], lo: number, hi: number): T[],
		sort(array: T[], lo: number, hi: number): T[]
	}

	declare export interface HeapSelect<T> {
		(array: T[], lo: number, hi: number, k: number): T[]
	}

	declare export interface Sort<T> {
		(array: T[], lo: number, hi: number): T[]
	}

	declare export interface GroupAll<T, TValue> {
		reduce<TValue>(
		add: (p: TValue, v: T) => TValue, remove: (p: TValue, v: T) => TValue, initial: () => TValue
	): GroupAll<T, TValue>,
		reduceCount(): GroupAll<T, TValue>,
		reduceSum(value: Selector<T>): GroupAll<T, TValue>,
		dispose(): GroupAll<T, TValue>,
		value(): TValue
	}

	declare export interface Grouping<TKey, TValue> {
		key: TKey,
		value: TValue
	}

	declare export interface Group<T, TKey, TValue> {
		top(k: number): Grouping<TKey, TValue>[],
		all(): Grouping<TKey, TValue>[],
		reduce<TGroup>(
		add: (p: TGroup, v: T) => TGroup, remove: (p: TGroup, v: T) => TGroup, initial: () => TGroup
	): Group<T, TKey, TGroup>,
		reduceCount(): Group<T, TKey, number>,
		reduceSum<TGroup>(value: (data: T) => TGroup): Group<T, TKey, TGroup>,
		order(value?: Selector<TValue>): Group<T, TKey, TValue>,
		orderNatural(): Group<T, TKey, TValue>,
		size(): number,
		dispose(): Group<T, TKey, TValue>
	}

	declare export interface CrossFilter<T> {
		add(records: T[]): CrossFilter<T>,
		remove(): CrossFilter<T>,
		size(): number,
		GroupAll(): GroupAll<T, T>,
		groupAll<TValue>(): GroupAll<T, TValue>,
		dimension<TDimension>(value: (data: T) => TDimension): Dimension<T, TDimension>
	}

	declare export interface Dimension<T, TDimension> {
		filter(value: TDimension[]): Dimension<T, TDimension>,
		filter(value: TDimension): Dimension<T, TDimension>,
		filter(value: Selector<TDimension>): Dimension<T, TDimension>,
		filterExact(value: TDimension): Dimension<T, TDimension>,
		filterRange(value: TDimension[]): Dimension<T, TDimension>,
		filterFunction(value: Selector<TDimension>): Dimension<T, TDimension>,
		filterAll(): Dimension<T, TDimension>,
		top(k: number): T[],
		bottom(k: number): T[],
		dispose(): void,
		group(): Group<T, TDimension, TDimension>,
		group<TGroup>(groupValue: (data: TDimension) => TGroup): Group<T, TDimension, TGroup>,
		groupAll(): GroupAll<T, T>,
		groupAll<TValue>(): GroupAll<T, TValue>
	}

			
}