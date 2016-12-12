

declare module 'underscore' {
		declare interface UnderscoreStatic {
		(value: _.Dictionary<T>): Underscore<T>,
		(value: Array<T>): Underscore<T>,
		(value: T): Underscore<T>,
		each<T>(
		list: _.List<T>, iterator: _.ListIterator<T, void>, context?: any
	): _.List<T>,
		each<T>(
		object: _.Dictionary<T>, iterator: _.ObjectIterator<T, void>, context?: any
	): _.Dictionary<T>,
		forEach<T>(
		list: _.List<T>, iterator: _.ListIterator<T, void>, context?: any
	): _.List<T>,
		forEach<T>(
		object: _.Dictionary<T>, iterator: _.ObjectIterator<T, void>, context?: any
	): _.Dictionary<T>,
		map<T, TResult>(
		list: _.List<T>, iterator: _.ListIterator<T, TResult> | _.IterateePropertyShorthand | _.IterateeMatcherShorthand<any>, context?: any
	): TResult[],
		map<T, TResult>(
		object: _.Dictionary<T>, iterator: _.ObjectIterator<T, TResult>, context?: any
	): TResult[],
		collect<T, TResult>(
		list: _.List<T>, iterator: _.ListIterator<T, TResult> | _.IterateePropertyShorthand | _.IterateeMatcherShorthand<any>, context?: any
	): TResult[],
		collect<T, TResult>(
		object: _.Dictionary<T>, iterator: _.ObjectIterator<T, TResult>, context?: any
	): TResult[],
		reduce<T, TResult>(
		list: _.Collection<T>, iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): TResult,
		reduce<T, TResult>(
		list: _.Dictionary<T>, iterator: _.MemoObjectIterator<T, TResult>, memo?: TResult, context?: any
	): TResult,
		inject<T, TResult>(
		list: _.Collection<T>, iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): TResult,
		foldl<T, TResult>(
		list: _.Collection<T>, iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): TResult,
		reduceRight<T, TResult>(
		list: _.Collection<T>, iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): TResult,
		foldr<T, TResult>(
		list: _.Collection<T>, iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): TResult,
		find<T>(list: _.List<T>, iterator: _.ListIterator<T, boolean>, context?: any): T,
		find<T>(
		object: _.Dictionary<T>, iterator: _.ObjectIterator<T, boolean>, context?: any
	): T,
		find<T, U>(object: _.List<T> | _.Dictionary<T>, iterator: U): T,
		find<T>(object: _.List<T> | _.Dictionary<T>, iterator: string): T,
		detect<T>(list: _.List<T>, iterator: _.ListIterator<T, boolean>, context?: any): T,
		detect<T>(
		object: _.Dictionary<T>, iterator: _.ObjectIterator<T, boolean>, context?: any
	): T,
		detect<T, U>(object: _.List<T> | _.Dictionary<T>, iterator: U): T,
		detect<T>(object: _.List<T> | _.Dictionary<T>, iterator: string): T,
		filter<T>(list: _.List<T>, iterator: _.ListIterator<T, boolean>, context?: any): T[],
		filter<T>(
		object: _.Dictionary<T>, iterator: _.ObjectIterator<T, boolean>, context?: any
	): T[],
		select<T>(list: _.List<T>, iterator: _.ListIterator<T, boolean>, context?: any): T[],
		select<T>(
		object: _.Dictionary<T>, iterator: _.ObjectIterator<T, boolean>, context?: any
	): T[],
		where<T, U>(list: _.List<T>, properties: U): T[],
		findWhere<T, U>(list: _.List<T>, properties: U): T,
		reject<T>(list: _.List<T>, iterator: _.ListIterator<T, boolean>, context?: any): T[],
		reject<T>(
		object: _.Dictionary<T>, iterator: _.ObjectIterator<T, boolean>, context?: any
	): T[],
		every<T>(
		list: _.List<T>, iterator?: _.ListIterator<T, boolean>, context?: any
	): boolean,
		every<T>(
		list: _.Dictionary<T>, iterator?: _.ObjectIterator<T, boolean>, context?: any
	): boolean,
		all<T>(
		list: _.List<T>, iterator?: _.ListIterator<T, boolean>, context?: any
	): boolean,
		all<T>(
		list: _.Dictionary<T>, iterator?: _.ObjectIterator<T, boolean>, context?: any
	): boolean,
		some<T>(
		list: _.List<T>, iterator?: _.ListIterator<T, boolean>, context?: any
	): boolean,
		some<T>(
		object: _.Dictionary<T>, iterator?: _.ObjectIterator<T, boolean>, context?: any
	): boolean,
		any<T>(
		list: _.List<T>, iterator?: _.ListIterator<T, boolean>, context?: any
	): boolean,
		any<T>(
		object: _.Dictionary<T>, iterator?: _.ObjectIterator<T, boolean>, context?: any
	): boolean,
		any<T>(list: _.List<T>, value: T): boolean,
		contains<T>(list: _.List<T>, value: T, fromIndex?: number): boolean,
		contains<T>(object: _.Dictionary<T>, value: T): boolean,
		include<T>(list: _.Collection<T>, value: T, fromIndex?: number): boolean,
		include<T>(object: _.Dictionary<T>, value: T): boolean,
		includes<T>(list: _.Collection<T>, value: T, fromIndex?: number): boolean,
		includes<T>(object: _.Dictionary<T>, value: T): boolean,
		invoke<T>(list: _.List<T>, methodName: string, ...arguments: any[]): any,
		pluck<T>(list: _.List<T>, propertyName: string): any[],
		max(list: _.List<number>): number,
		max(object: _.Dictionary<number>): number,
		max<T>(list: _.List<T>, iterator?: _.ListIterator<T, any>, context?: any): T,
		max<T>(
		list: _.Dictionary<T>, iterator?: _.ObjectIterator<T, any>, context?: any
	): T,
		min(list: _.List<number>): number,
		min(o: _.Dictionary<number>): number,
		min<T>(list: _.List<T>, iterator?: _.ListIterator<T, any>, context?: any): T,
		min<T>(
		list: _.Dictionary<T>, iterator?: _.ObjectIterator<T, any>, context?: any
	): T,
		sortBy<T, TSort>(
		list: _.List<T>, iterator?: _.ListIterator<T, TSort>, context?: any
	): T[],
		sortBy<T>(list: _.List<T>, iterator: string, context?: any): T[],
		groupBy<T>(
		list: _.List<T>, iterator?: _.ListIterator<T, any>, context?: any
	): _.Dictionary<T[]>,
		groupBy<T>(list: _.List<T>, iterator: string, context?: any): _.Dictionary<T[]>,
		indexBy<T>(
		list: _.List<T>, iterator: _.ListIterator<T, any>, context?: any
	): _.Dictionary<T>,
		indexBy<T>(list: _.List<T>, iterator: string, context?: any): _.Dictionary<T>,
		countBy<T>(
		list: _.List<T>, iterator?: _.ListIterator<T, any>, context?: any
	): _.Dictionary<number>,
		countBy<T>(list: _.List<T>, iterator: string, context?: any): _.Dictionary<number>,
		shuffle<T>(list: _.Collection<T>): T[],
		sample<T>(list: _.Collection<T>, n: number): T[],
		sample<T>(list: _.Collection<T>): T,
		toArray<T>(list: _.Collection<T>): T[],
		size<T>(list: _.Collection<T>): number,
		partition<T>(array: Array<T>, iterator: _.ListIterator<T, boolean>, context?: any): T[][],
		first<T>(array: _.List<T>): T,
		first<T>(array: _.List<T>, n: number): T[],
		head<T>(array: _.List<T>): T,
		head<T>(array: _.List<T>, n: number): T[],
		take<T>(array: _.List<T>): T,
		take<T>(array: _.List<T>, n: number): T[],
		initial<T>(array: _.List<T>, n?: number): T[],
		last<T>(array: _.List<T>): T,
		last<T>(array: _.List<T>, n: number): T[],
		rest<T>(array: _.List<T>, n?: number): T[],
		tail<T>(array: _.List<T>, n?: number): T[],
		drop<T>(array: _.List<T>, n?: number): T[],
		compact<T>(array: _.List<T>): T[],
		flatten(array: _.List<any>, shallow?: boolean): any[],
		without<T>(array: _.List<T>, ...values: T[]): T[],
		union<T>(...arrays: _.List<T>[]): T[],
		intersection<T>(...arrays: _.List<T>[]): T[],
		difference<T>(array: _.List<T>, ...others: _.List<T>[]): T[],
		uniq<T, TSort>(
		array: _.List<T>, isSorted?: boolean, iterator?: _.ListIterator<T, TSort> | _.IterateePropertyShorthand, context?: any
	): T[],
		uniq<T, TSort>(
		array: _.List<T>, iterator?: _.ListIterator<T, TSort>, context?: any
	): T[],
		unique<T, TSort>(
		array: _.List<T>, iterator?: _.ListIterator<T, TSort> | _.IterateePropertyShorthand, context?: any
	): T[],
		unique<T, TSort>(
		array: _.List<T>, isSorted?: boolean, iterator?: _.ListIterator<T, TSort>, context?: any
	): T[],
		zip(...arrays: any[][]): any[][],
		zip(...arrays: any[]): any[],
		unzip(...arrays: any[][]): any[][],
		object<TResult>(keys: _.List<string>, values: _.List<any>): TResult,
		object<TResult>(...keyValuePairs: any[][]): TResult,
		object<TResult>(list: _.List<any>, values?: any): TResult,
		indexOf<T>(array: _.List<T>, value: T, isSorted?: boolean): number,
		indexOf<T>(array: _.List<T>, value: T, startFrom: number): number,
		lastIndexOf<T>(array: _.List<T>, value: T, from?: number): number,
		findIndex<T>(
		array: _.List<T>, predicate: _.ListIterator<T, boolean> | {
		
	}, context?: any
	): number,
		findLastIndex<T>(
		array: _.List<T>, predicate: _.ListIterator<T, boolean> | {
		
	}, context?: any
	): number,
		sortedIndex<T, TSort>(
		list: _.List<T>, value: T, iterator?: (x: T) => TSort, context?: any
	): number,
		range(start: number, stop: number, step?: number): number[],
		range(stop: number): number[],
		chunk<T>(array: _.Collection<T>, count: number): (_.Collection<T>)[],
		bind(func: Function, context: any, ...arguments: any[]): () => any,
		bindAll(object: any, ...methodNames: string[]): any,
		partial<T1, T2>(fn: {
		(p1: T1): T2
	}, p1: T1): {
		(): T2
	},
		partial<T1, T2, T3>(fn: {
		(p1: T1, p2: T2): T3
	}, p1: T1): {
		(p2: T2): T3
	},
		partial<T1, T2, T3>(fn: {
		(p1: T1, p2: T2): T3
	}, p1: T1, p2: T2): {
		(): T3
	},
		partial<T1, T2, T3>(
		fn: {
		(p1: T1, p2: T2): T3
	}, stub1: UnderscoreStatic, p2: T2
	): {
		(p1: T1): T3
	},
		partial<T1, T2, T3, T4>(
		fn: {
		(p1: T1, p2: T2, p3: T3): T4
	}, p1: T1
	): {
		(p2: T2, p3: T3): T4
	},
		partial<T1, T2, T3, T4>(
		fn: {
		(p1: T1, p2: T2, p3: T3): T4
	}, p1: T1, p2: T2
	): {
		(p3: T3): T4
	},
		partial<T1, T2, T3, T4>(
		fn: {
		(p1: T1, p2: T2, p3: T3): T4
	}, stub1: UnderscoreStatic, p2: T2
	): {
		(p1: T1, p3: T3): T4
	},
		partial<T1, T2, T3, T4>(
		fn: {
		(p1: T1, p2: T2, p3: T3): T4
	}, p1: T1, p2: T2, p3: T3
	): {
		(): T4
	},
		partial<T1, T2, T3, T4>(
		fn: {
		(p1: T1, p2: T2, p3: T3): T4
	}, stub1: UnderscoreStatic, p2: T2, p3: T3
	): {
		(p1: T1): T4
	},
		partial<T1, T2, T3, T4>(
		fn: {
		(p1: T1, p2: T2, p3: T3): T4
	}, p1: T1, stub2: UnderscoreStatic, p3: T3
	): {
		(p2: T2): T4
	},
		partial<T1, T2, T3, T4>(
		fn: {
		(p1: T1, p2: T2, p3: T3): T4
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3
	): {
		(p1: T1, p2: T2): T4
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, p1: T1
	): {
		(p2: T2, p3: T3, p4: T4): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, p1: T1, p2: T2
	): {
		(p3: T3, p4: T4): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, stub1: UnderscoreStatic, p2: T2
	): {
		(p1: T1, p3: T3, p4: T4): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, p1: T1, p2: T2, p3: T3
	): {
		(p4: T4): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, stub1: UnderscoreStatic, p2: T2, p3: T3
	): {
		(p1: T1, p4: T4): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, p1: T1, stub2: UnderscoreStatic, p3: T3
	): {
		(p2: T2, p4: T4): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3
	): {
		(p1: T1, p2: T2, p4: T4): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, p1: T1, p2: T2, p3: T3, p4: T4
	): {
		(): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4
	): {
		(p1: T1): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4
	): {
		(p2: T2): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4
	): {
		(p1: T1, p2: T2): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4
	): {
		(p3: T3): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4
	): {
		(p1: T1, p3: T3): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4
	): {
		(p2: T2, p3: T3): T5
	},
		partial<T1, T2, T3, T4, T5>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4): T5
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4
	): {
		(p1: T1, p2: T2, p3: T3): T5
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1
	): {
		(p2: T2, p3: T3, p4: T4, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, p2: T2
	): {
		(p3: T3, p4: T4, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, p2: T2
	): {
		(p1: T1, p3: T3, p4: T4, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, p2: T2, p3: T3
	): {
		(p4: T4, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, p2: T2, p3: T3
	): {
		(p1: T1, p4: T4, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, stub2: UnderscoreStatic, p3: T3
	): {
		(p2: T2, p4: T4, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3
	): {
		(p1: T1, p2: T2, p4: T4, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, p2: T2, p3: T3, p4: T4
	): {
		(p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4
	): {
		(p1: T1, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4
	): {
		(p2: T2, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4
	): {
		(p1: T1, p2: T2, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4
	): {
		(p3: T3, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4
	): {
		(p1: T1, p3: T3, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4
	): {
		(p2: T2, p3: T3, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4
	): {
		(p1: T1, p2: T2, p3: T3, p5: T5): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, p2: T2, p3: T3, p4: T4, p5: T5
	): {
		(): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4, p5: T5
	): {
		(p1: T1): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5
	): {
		(p2: T2): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5
	): {
		(p1: T1, p2: T2): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5
	): {
		(p3: T3): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5
	): {
		(p1: T1, p3: T3): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5
	): {
		(p2: T2, p3: T3): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5
	): {
		(p1: T1, p2: T2, p3: T3): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5
	): {
		(p4: T4): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5
	): {
		(p1: T1, p4: T4): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5
	): {
		(p2: T2, p4: T4): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5
	): {
		(p1: T1, p2: T2, p4: T4): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5
	): {
		(p3: T3, p4: T4): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5
	): {
		(p1: T1, p3: T3, p4: T4): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5
	): {
		(p2: T2, p3: T3, p4: T4): T6
	},
		partial<T1, T2, T3, T4, T5, T6>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T6
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5
	): {
		(p1: T1, p2: T2, p3: T3, p4: T4): T6
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1
	): {
		(p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2
	): {
		(p3: T3, p4: T4, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2
	): {
		(p1: T1, p3: T3, p4: T4, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, p3: T3
	): {
		(p4: T4, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, p3: T3
	): {
		(p1: T1, p4: T4, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, p3: T3
	): {
		(p2: T2, p4: T4, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3
	): {
		(p1: T1, p2: T2, p4: T4, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, p3: T3, p4: T4
	): {
		(p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4
	): {
		(p1: T1, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4
	): {
		(p2: T2, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4
	): {
		(p1: T1, p2: T2, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4
	): {
		(p3: T3, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4
	): {
		(p1: T1, p3: T3, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4
	): {
		(p2: T2, p3: T3, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4
	): {
		(p1: T1, p2: T2, p3: T3, p5: T5, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, p3: T3, p4: T4, p5: T5
	): {
		(p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4, p5: T5
	): {
		(p1: T1, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5
	): {
		(p2: T2, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5
	): {
		(p1: T1, p2: T2, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5
	): {
		(p3: T3, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5
	): {
		(p1: T1, p3: T3, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5
	): {
		(p2: T2, p3: T3, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5
	): {
		(p1: T1, p2: T2, p3: T3, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5
	): {
		(p4: T4, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5
	): {
		(p1: T1, p4: T4, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5
	): {
		(p2: T2, p4: T4, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5
	): {
		(p1: T1, p2: T2, p4: T4, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5
	): {
		(p3: T3, p4: T4, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5
	): {
		(p1: T1, p3: T3, p4: T4, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5
	): {
		(p2: T2, p3: T3, p4: T4, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5
	): {
		(p1: T1, p2: T2, p3: T3, p4: T4, p6: T6): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6
	): {
		(): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6
	): {
		(p1: T1): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5, p6: T6
	): {
		(p2: T2): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5, p6: T6
	): {
		(p1: T1, p2: T2): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5, p6: T6
	): {
		(p3: T3): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5, p6: T6
	): {
		(p1: T1, p3: T3): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5, p6: T6
	): {
		(p2: T2, p3: T3): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5, p6: T6
	): {
		(p1: T1, p2: T2, p3: T3): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p4: T4): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p1: T1, p4: T4): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p2: T2, p4: T4): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p1: T1, p2: T2, p4: T4): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p3: T3, p4: T4): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p1: T1, p3: T3, p4: T4): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p2: T2, p3: T3, p4: T4): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p1: T1, p2: T2, p3: T3, p4: T4): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, p3: T3, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p2: T2, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p2: T2, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p3: T3, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p3: T3, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p2: T2, p3: T3, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p2: T2, p3: T3, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p4: T4, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p4: T4, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p2: T2, p4: T4, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p2: T2, p4: T4, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p3: T3, p4: T4, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p3: T3, p4: T4, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p2: T2, p3: T3, p4: T4, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T7
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T7
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1
	): {
		(p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2
	): {
		(p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2
	): {
		(p1: T1, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3
	): {
		(p4: T4, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3
	): {
		(p1: T1, p4: T4, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3
	): {
		(p2: T2, p4: T4, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3
	): {
		(p1: T1, p2: T2, p4: T4, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, p4: T4
	): {
		(p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4
	): {
		(p1: T1, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4
	): {
		(p2: T2, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4
	): {
		(p1: T1, p2: T2, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4
	): {
		(p3: T3, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4
	): {
		(p1: T1, p3: T3, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4
	): {
		(p2: T2, p3: T3, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4
	): {
		(p1: T1, p2: T2, p3: T3, p5: T5, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, p4: T4, p5: T5
	): {
		(p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4, p5: T5
	): {
		(p1: T1, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5
	): {
		(p2: T2, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5
	): {
		(p1: T1, p2: T2, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5
	): {
		(p3: T3, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5
	): {
		(p1: T1, p3: T3, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5
	): {
		(p2: T2, p3: T3, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5
	): {
		(p1: T1, p2: T2, p3: T3, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5
	): {
		(p4: T4, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5
	): {
		(p1: T1, p4: T4, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5
	): {
		(p2: T2, p4: T4, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5
	): {
		(p1: T1, p2: T2, p4: T4, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5
	): {
		(p3: T3, p4: T4, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5
	): {
		(p1: T1, p3: T3, p4: T4, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5
	): {
		(p2: T2, p3: T3, p4: T4, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5
	): {
		(p1: T1, p2: T2, p3: T3, p4: T4, p6: T6, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6
	): {
		(p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6
	): {
		(p1: T1, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5, p6: T6
	): {
		(p2: T2, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5, p6: T6
	): {
		(p1: T1, p2: T2, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5, p6: T6
	): {
		(p3: T3, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5, p6: T6
	): {
		(p1: T1, p3: T3, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5, p6: T6
	): {
		(p2: T2, p3: T3, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5, p6: T6
	): {
		(p1: T1, p2: T2, p3: T3, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p4: T4, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p1: T1, p4: T4, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p2: T2, p4: T4, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p1: T1, p2: T2, p4: T4, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p3: T3, p4: T4, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p1: T1, p3: T3, p4: T4, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p2: T2, p3: T3, p4: T4, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, p6: T6
	): {
		(p1: T1, p2: T2, p3: T3, p4: T4, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p2: T2, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p2: T2, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p3: T3, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p3: T3, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p2: T2, p3: T3, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p2: T2, p3: T3, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p4: T4, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p4: T4, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p2: T2, p4: T4, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p2: T2, p4: T4, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p3: T3, p4: T4, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p3: T3, p4: T4, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p2: T2, p3: T3, p4: T4, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6
	): {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p7: T7): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7
	): {
		(): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7
	): {
		(p1: T1): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7
	): {
		(p2: T2): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7
	): {
		(p1: T1, p2: T2): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5, p6: T6, p7: T7
	): {
		(p3: T3): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5, p6: T6, p7: T7
	): {
		(p1: T1, p3: T3): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5, p6: T6, p7: T7
	): {
		(p2: T2, p3: T3): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5, p6: T6, p7: T7
	): {
		(p1: T1, p2: T2, p3: T3): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5, p6: T6, p7: T7
	): {
		(p4: T4): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5, p6: T6, p7: T7
	): {
		(p1: T1, p4: T4): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5, p6: T6, p7: T7
	): {
		(p2: T2, p4: T4): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5, p6: T6, p7: T7
	): {
		(p1: T1, p2: T2, p4: T4): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, p6: T6, p7: T7
	): {
		(p3: T3, p4: T4): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, p6: T6, p7: T7
	): {
		(p1: T1, p3: T3, p4: T4): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, p6: T6, p7: T7
	): {
		(p2: T2, p3: T3, p4: T4): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, p6: T6, p7: T7
	): {
		(p1: T1, p2: T2, p3: T3, p4: T4): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, p4: T4, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p1: T1, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p2: T2, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p1: T1, p2: T2, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p3: T3, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p1: T1, p3: T3, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p2: T2, p3: T3, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p1: T1, p2: T2, p3: T3, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p4: T4, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p1: T1, p4: T4, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p2: T2, p4: T4, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p1: T1, p2: T2, p4: T4, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p3: T3, p4: T4, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p1: T1, p3: T3, p4: T4, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p2: T2, p3: T3, p4: T4, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, p6: T6, p7: T7
	): {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p2: T2, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p2: T2, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p3: T3, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p3: T3, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p2: T2, p3: T3, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p2: T2, p3: T3, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p4: T4, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, stub4: UnderscoreStatic, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p4: T4, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p2: T2, p4: T4, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p2: T2, p4: T4, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p3: T3, p4: T4, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p3: T3, p4: T4, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p2: T2, p3: T3, p4: T4, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, p5: T5, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p2: T2, p3: T3, p4: T4, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, p4: T4, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, p4: T4, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, p4: T4, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p2: T2, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, p4: T4, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p2: T2, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p3: T3, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p3: T3, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p2: T2, p3: T3, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, p4: T4, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p2: T2, p3: T3, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p4: T4, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p4: T4, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p2: T2, p4: T4, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, p3: T3, stub4: UnderscoreStatic, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p2: T2, p4: T4, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p3: T3, p4: T4, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, p2: T2, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p3: T3, p4: T4, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, p1: T1, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T8
	},
		partial<T1, T2, T3, T4, T5, T6, T7, T8>(
		fn: {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6, p7: T7): T8
	}, stub1: UnderscoreStatic, stub2: UnderscoreStatic, stub3: UnderscoreStatic, stub4: UnderscoreStatic, stub5: UnderscoreStatic, stub6: UnderscoreStatic, p7: T7
	): {
		(p1: T1, p2: T2, p3: T3, p4: T4, p5: T5, p6: T6): T8
	},
		memoize(fn: Function, hashFn?: (...args: any[]) => string): Function,
		delay(func: Function, wait: number, ...arguments: any[]): any,
		delay(func: Function, ...arguments: any[]): any,
		defer(fn: Function, ...arguments: any[]): void,
		throttle<T>(func: T, wait: number, options?: _.ThrottleSettings): T & _.Cancelable,
		debounce<T>(fn: T, wait: number, immediate?: boolean): T & _.Cancelable,
		once<T>(fn: T): T,
		restArgs(func: Function, starIndex?: number): Function,
		after(count: number, fn: Function): Function,
		before(count: number, fn: Function): Function,
		wrap(fn: Function, wrapper: (fn: Function, ...args: any[]) => any): Function,
		negate(predicate: (...args: any[]) => boolean): (...args: any[]) => boolean,
		compose(...functions: Function[]): Function,
		keys(object: any): string[],
		allKeys(object: any): string[],
		values<T>(object: _.Dictionary<T>): T[],
		values(object: any): any[],
		mapObject<T, U>(
		object: _.Dictionary<T>, iteratee: (val: T, key: string, object: _.Dictionary<T>) => U, context?: any
	): _.Dictionary<U>,
		mapObject<T>(
		object: any, iteratee: (val: any, key: string, object: any) => T, context?: any
	): _.Dictionary<T>,
		mapObject(object: any, iteratee: string, context?: any): _.Dictionary<any>,
		pairs(object: any): any[][],
		invert(object: any): any,
		functions(object: any): string[],
		methods(object: any): string[],
		extend(destination: any, ...sources: any[]): any,
		extendOwn(destination: any, ...source: any[]): any,
		assign(destination: any, ...source: any[]): any,
		findKey<T>(
		obj: _.Dictionary<T>, predicate: _.ObjectIterator<T, boolean>, context?: any
	): T,
		pick(object: any, ...keys: any[]): any,
		pick(object: any, fn: (value: any, key: any, object: any) => any): any,
		omit(object: any, ...keys: string[]): any,
		omit(object: any, keys: string[]): any,
		omit(object: any, iteratee: Function): any,
		defaults(object: any, ...defaults: any[]): any,
		create(prototype: any, props?: Object): any,
		clone<T>(object: T): T,
		tap<T>(object: T, intercepter: Function): T,
		has(object: any, key: string): boolean,
		matches<T, TResult>(attrs: T): _.ListIterator<T, TResult>,
		matcher<T, TResult>(attrs: T): _.ListIterator<T, TResult>,
		property(key: string): (object: Object) => any,
		propertyOf(object: Object): (key: string) => any,
		isEqual(object: any, other: any): boolean,
		isEmpty(object: any): boolean,
		isMatch(object: any, properties: any): boolean,
		isElement(object: any): Element,
		isArray(object: any): any[],
		isArray<T>(object: any): T[],
		isSymbol(object: any): NO PRINT IMPLEMENTED: SymbolKeyword,
		isObject(object: any): boolean,
		isArguments(object: any): IArguments,
		isFunction(object: any): Function,
		isError(object: any): Error,
		isString(object: any): string,
		isNumber(object: any): number,
		isFinite(object: any): boolean,
		isBoolean(object: any): boolean,
		isDate(object: any): Date,
		isRegExp(object: any): RegExp,
		isNaN(object: any): boolean,
		isNull(object: any): boolean,
		isUndefined(value: any): boolean,
		noConflict(): any,
		identity<T>(value: T): T,
		constant<T>(value: T): () => T,
		noop(): void,
		times<TResult>(n: number, iterator: (n: number) => TResult, context?: any): TResult[],
		random(max: number): number,
		random(min: number, max: number): number,
		mixin(object: any): void,
		iteratee(value: string): Function,
		iteratee(value: Function, context?: any): Function,
		iteratee(value: Object): Function,
		uniqueId(prefix?: string): string,
		escape(str: string): string,
		unescape(str: string): string,
		result(object: any, property: string, defaultValue?: any): any,
		template(
		templateString: string, settings?: _.TemplateSettings
	): (...data: any[]) => string,
		templateSettings: _.TemplateSettings,
		now(): number,
		chain<T>(obj: T[]): _Chain<T>,
		chain<T>(obj: _.Dictionary<T>): _Chain<T>,
		chain<T>(obj: T): _Chain<T>
	}

	declare interface Underscore<T> {
		each(iterator: _.ListIterator<T, void>, context?: any): T[],
		each(iterator: _.ObjectIterator<T, void>, context?: any): T[],
		forEach(iterator: _.ListIterator<T, void>, context?: any): T[],
		forEach(iterator: _.ObjectIterator<T, void>, context?: any): T[],
		map<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): TResult[],
		map<TResult>(iterator: _.ObjectIterator<T, TResult>, context?: any): TResult[],
		collect<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): TResult[],
		collect<TResult>(iterator: _.ObjectIterator<T, TResult>, context?: any): TResult[],
		reduce<TResult>(
		iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): TResult,
		inject<TResult>(
		iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): TResult,
		foldl<TResult>(
		iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): TResult,
		reduceRight<TResult>(
		iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): TResult,
		foldr<TResult>(
		iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): TResult,
		find<T>(
		iterator: _.ListIterator<T, boolean> | _.ObjectIterator<T, boolean>, context?: any
	): T,
		find<T, U>(interator: U): T,
		find<T>(interator: string): T,
		detect<T>(
		iterator: _.ListIterator<T, boolean> | _.ObjectIterator<T, boolean>, context?: any
	): T,
		detect<T, U>(interator?: U): T,
		detect<T>(interator?: string): T,
		filter(iterator: _.ListIterator<T, boolean>, context?: any): T[],
		select(iterator: _.ListIterator<T, boolean>, context?: any): T[],
		where<U>(properties: U): T[],
		findWhere<U>(properties: U): T,
		reject(iterator: _.ListIterator<T, boolean>, context?: any): T[],
		all(iterator?: _.ListIterator<T, boolean>, context?: any): boolean,
		every(iterator?: _.ListIterator<T, boolean>, context?: any): boolean,
		any(iterator?: _.ListIterator<T, boolean>, context?: any): boolean,
		some(iterator?: _.ListIterator<T, boolean>, context?: any): boolean,
		contains(value: T, fromIndex?: number): boolean,
		include(value: T, fromIndex?: number): boolean,
		includes(value: T, fromIndex?: number): boolean,
		invoke(methodName: string, ...arguments: any[]): any,
		pluck(propertyName: string): any[],
		max(): number,
		max(iterator: _.ListIterator<T, number>, context?: any): T,
		max(iterator?: _.ListIterator<T, any>, context?: any): T,
		min(): number,
		min(iterator: _.ListIterator<T, number>, context?: any): T,
		min(iterator?: _.ListIterator<T, any>, context?: any): T,
		sortBy(iterator?: _.ListIterator<T, any>, context?: any): T[],
		sortBy(iterator: string, context?: any): T[],
		groupBy(iterator?: _.ListIterator<T, any>, context?: any): _.Dictionary<_.List<T>>,
		groupBy(iterator: string, context?: any): _.Dictionary<T[]>,
		indexBy(iterator: _.ListIterator<T, any>, context?: any): _.Dictionary<T>,
		indexBy(iterator: string, context?: any): _.Dictionary<T>,
		countBy(iterator?: _.ListIterator<T, any>, context?: any): _.Dictionary<number>,
		countBy(iterator: string, context?: any): _.Dictionary<number>,
		shuffle(): T[],
		sample<T>(n: number): T[],
		sample<T>(): T,
		toArray(): T[],
		size(): number,
		first(): T,
		first(n: number): T[],
		head(): T,
		head(n: number): T[],
		take(): T,
		take(n: number): T[],
		initial(n?: number): T[],
		last(): T,
		last(n: number): T[],
		rest(n?: number): T[],
		tail(n?: number): T[],
		drop(n?: number): T[],
		compact(): T[],
		flatten(shallow?: boolean): any[],
		without(...values: T[]): T[],
		partition(iterator: _.ListIterator<T, boolean>, context?: any): T[][],
		union(...arrays: _.List<T>[]): T[],
		intersection(...arrays: _.List<T>[]): T[],
		difference(...others: _.List<T>[]): T[],
		uniq(isSorted?: boolean, iterator?: _.ListIterator<T, any>): T[],
		uniq<TSort>(iterator?: _.ListIterator<T, TSort>, context?: any): T[],
		unique<TSort>(isSorted?: boolean, iterator?: _.ListIterator<T, TSort>): T[],
		unique<TSort>(iterator?: _.ListIterator<T, TSort>, context?: any): T[],
		zip(...arrays: any[][]): any[][],
		unzip(...arrays: any[][]): any[][],
		object(...keyValuePairs: any[][]): any,
		object(values?: any): any,
		indexOf(value: T, isSorted?: boolean): number,
		indexOf(value: T, startFrom: number): number,
		lastIndexOf(value: T, from?: number): number,
		findIndex<T>(
		array: _.List<T>, predicate: _.ListIterator<T, boolean> | {
		
	}, context?: any
	): number,
		findLastIndex<T>(
		array: _.List<T>, predicate: _.ListIterator<T, boolean> | {
		
	}, context?: any
	): number,
		sortedIndex(value: T, iterator?: (x: T) => any, context?: any): number,
		range(stop: number, step?: number): number[],
		range(): number[],
		chunk(): any[][],
		bind(object: any, ...arguments: any[]): Function,
		bindAll(...methodNames: string[]): any,
		partial(...arguments: any[]): Function,
		memoize(hashFn?: (n: any) => string): Function,
		defer(...arguments: any[]): void,
		delay(wait: number, ...arguments: any[]): any,
		delay(...arguments: any[]): any,
		throttle(wait: number, options?: _.ThrottleSettings): Function & _.Cancelable,
		debounce(wait: number, immediate?: boolean): Function & _.Cancelable,
		once(): Function,
		restArgs(starIndex?: number): Function,
		after(fn: Function): Function,
		before(fn: Function): Function,
		wrap(wrapper: Function): () => Function,
		negate(): boolean,
		compose(...functions: Function[]): Function,
		keys(): string[],
		allKeys(): string[],
		values(): T[],
		pairs(): any[][],
		invert(): any,
		functions(): string[],
		methods(): string[],
		extend(...sources: any[]): any,
		findKey(predicate: _.ObjectIterator<any, boolean>, context?: any): any,
		pick(...keys: any[]): any,
		pick(keys: any[]): any,
		pick(fn: (value: any, key: any, object: any) => any): any,
		omit(...keys: string[]): any,
		omit(keys: string[]): any,
		omit(fn: Function): any,
		defaults(...defaults: any[]): any,
		create(props?: Object): any,
		clone(): T,
		tap(interceptor: (...as: any[]) => any): any,
		has(key: string): boolean,
		matches<TResult>(): _.ListIterator<T, TResult>,
		matcher<TResult>(): _.ListIterator<T, TResult>,
		property(): (object: Object) => any,
		propertyOf(): (key: string) => any,
		isEqual(other: any): boolean,
		isEmpty(): boolean,
		isMatch(): boolean,
		isElement(): boolean,
		isArray(): boolean,
		isSymbol(): boolean,
		isObject(): boolean,
		isArguments(): boolean,
		isFunction(): boolean,
		isError(): boolean,
		isString(): boolean,
		isNumber(): boolean,
		isFinite(): boolean,
		isBoolean(): boolean,
		isDate(): boolean,
		isRegExp(): boolean,
		isNaN(): boolean,
		isNull(): boolean,
		isUndefined(): boolean,
		identity(): any,
		constant(): () => T,
		noop(): void,
		times<TResult>(iterator: (n: number) => TResult, context?: any): TResult[],
		random(): number,
		random(max: number): number,
		mixin(): void,
		iteratee(context?: any): Function,
		uniqueId(): string,
		escape(): string,
		unescape(): string,
		result(property: string, defaultValue?: any): any,
		template(settings?: _.TemplateSettings): (...data: any[]) => string,
		chain(): _Chain<T>,
		value<TResult>(): TResult
	}

	declare interface _Chain<T> {
		each(iterator: _.ListIterator<T, void>, context?: any): _Chain<T>,
		each(iterator: _.ObjectIterator<T, void>, context?: any): _Chain<T>,
		forEach(iterator: _.ListIterator<T, void>, context?: any): _Chain<T>,
		forEach(iterator: _.ObjectIterator<T, void>, context?: any): _Chain<T>,
		map<TArray>(
		iterator: _.ListIterator<T, TArray[]>, context?: any
	): _ChainOfArrays<TArray>,
		map<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): _Chain<TResult>,
		map<TArray>(
		iterator: _.ObjectIterator<T, TArray[]>, context?: any
	): _ChainOfArrays<TArray>,
		map<TResult>(
		iterator: _.ObjectIterator<T, TResult>, context?: any
	): _Chain<TResult>,
		collect<TResult>(iterator: _.ListIterator<T, TResult>, context?: any): _Chain<TResult>,
		collect<TResult>(
		iterator: _.ObjectIterator<T, TResult>, context?: any
	): _Chain<TResult>,
		reduce<TResult>(
		iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): _ChainSingle<TResult>,
		inject<TResult>(
		iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): _ChainSingle<TResult>,
		foldl<TResult>(
		iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): _ChainSingle<TResult>,
		reduceRight<TResult>(
		iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): _ChainSingle<TResult>,
		foldr<TResult>(
		iterator: _.MemoIterator<T, TResult>, memo?: TResult, context?: any
	): _ChainSingle<TResult>,
		find<T>(
		iterator: _.ListIterator<T, boolean> | _.ObjectIterator<T, boolean>, context?: any
	): _ChainSingle<T>,
		find<T, U>(interator: U): _ChainSingle<T>,
		find<T>(interator: string): _ChainSingle<T>,
		detect<T>(
		iterator: _.ListIterator<T, boolean> | _.ObjectIterator<T, boolean>, context?: any
	): _ChainSingle<T>,
		detect<T, U>(interator: U): _ChainSingle<T>,
		detect<T>(interator: string): _ChainSingle<T>,
		filter(iterator: _.ListIterator<T, boolean>, context?: any): _Chain<T>,
		select(iterator: _.ListIterator<T, boolean>, context?: any): _Chain<T>,
		where<U>(properties: U): _Chain<T>,
		findWhere<U>(properties: U): _ChainSingle<T>,
		reject(iterator: _.ListIterator<T, boolean>, context?: any): _Chain<T>,
		all(iterator?: _.ListIterator<T, boolean>, context?: any): _ChainSingle<boolean>,
		every(iterator?: _.ListIterator<T, boolean>, context?: any): _ChainSingle<boolean>,
		any(iterator?: _.ListIterator<T, boolean>, context?: any): _ChainSingle<boolean>,
		some(iterator?: _.ListIterator<T, boolean>, context?: any): _ChainSingle<boolean>,
		contains(value: T, fromIndex?: number): _ChainSingle<boolean>,
		include(value: T, fromIndex?: number): _ChainSingle<boolean>,
		includes(value: T, fromIndex?: number): _ChainSingle<boolean>,
		invoke(methodName: string, ...arguments: any[]): _Chain<T>,
		pluck(propertyName: string): _Chain<any>,
		max(): _ChainSingle<T>,
		max(iterator: _.ListIterator<T, number>, context?: any): _ChainSingle<T>,
		max(iterator?: _.ListIterator<T, any>, context?: any): _ChainSingle<T>,
		min(): _ChainSingle<T>,
		min(iterator: _.ListIterator<T, number>, context?: any): _ChainSingle<T>,
		min(iterator?: _.ListIterator<T, any>, context?: any): _ChainSingle<T>,
		sortBy(iterator?: _.ListIterator<T, any>, context?: any): _Chain<T>,
		sortBy(iterator: string, context?: any): _Chain<T>,
		groupBy(iterator?: _.ListIterator<T, any>, context?: any): _ChainOfArrays<T>,
		groupBy(iterator: string, context?: any): _ChainOfArrays<T>,
		indexBy(iterator: _.ListIterator<T, any>, context?: any): _Chain<T>,
		indexBy(iterator: string, context?: any): _Chain<T>,
		countBy(iterator?: _.ListIterator<T, any>, context?: any): _Chain<T>,
		countBy(iterator: string, context?: any): _Chain<T>,
		shuffle(): _Chain<T>,
		sample<T>(n: number): _Chain<T>,
		sample<T>(): _Chain<T>,
		toArray(): _Chain<T>,
		size(): _ChainSingle<number>,
		first(): _ChainSingle<T>,
		first(n: number): _Chain<T>,
		head(): _Chain<T>,
		head(n: number): _Chain<T>,
		take(): _Chain<T>,
		take(n: number): _Chain<T>,
		initial(n?: number): _Chain<T>,
		last(): _ChainSingle<T>,
		last(n: number): _Chain<T>,
		rest(n?: number): _Chain<T>,
		tail(n?: number): _Chain<T>,
		drop(n?: number): _Chain<T>,
		compact(): _Chain<T>,
		flatten(shallow?: boolean): _Chain<any>,
		without(...values: T[]): _Chain<T>,
		partition(iterator: _.ListIterator<T, boolean>, context?: any): _Chain<T[]>,
		union(...arrays: _.List<T>[]): _Chain<T>,
		intersection(...arrays: _.List<T>[]): _Chain<T>,
		difference(...others: _.List<T>[]): _Chain<T>,
		uniq(isSorted?: boolean, iterator?: _.ListIterator<T, any>): _Chain<T>,
		uniq<TSort>(iterator?: _.ListIterator<T, TSort>, context?: any): _Chain<T>,
		unique<TSort>(isSorted?: boolean, iterator?: _.ListIterator<T, TSort>): _Chain<T>,
		unique<TSort>(iterator?: _.ListIterator<T, TSort>, context?: any): _Chain<T>,
		zip(...arrays: any[][]): _Chain<T>,
		unzip(...arrays: any[][]): _Chain<T>,
		object(...keyValuePairs: any[][]): _Chain<T>,
		object(values?: any): _Chain<T>,
		indexOf(value: T, isSorted?: boolean): _ChainSingle<number>,
		indexOf(value: T, startFrom: number): _ChainSingle<number>,
		lastIndexOf(value: T, from?: number): _ChainSingle<number>,
		findIndex<T>(
		predicate: _.ListIterator<T, boolean> | {
		
	}, context?: any
	): _ChainSingle<number>,
		findLastIndex<T>(
		predicate: _.ListIterator<T, boolean> | {
		
	}, context?: any
	): _ChainSingle<number>,
		sortedIndex(value: T, iterator?: (x: T) => any, context?: any): _ChainSingle<number>,
		range(stop: number, step?: number): _Chain<T>,
		range(): _Chain<T>,
		chunk(): _Chain<T>,
		bind(object: any, ...arguments: any[]): _Chain<T>,
		bindAll(...methodNames: string[]): _Chain<T>,
		partial(...arguments: any[]): _Chain<T>,
		memoize(hashFn?: (n: any) => string): _Chain<T>,
		defer(...arguments: any[]): _Chain<T>,
		delay(wait: number, ...arguments: any[]): _Chain<T>,
		delay(...arguments: any[]): _Chain<T>,
		throttle(wait: number, options?: _.ThrottleSettings): _Chain<T>,
		debounce(wait: number, immediate?: boolean): _Chain<T>,
		once(): _Chain<T>,
		restArgs(startIndex?: number): _Chain<T>,
		after(func: Function): _Chain<T>,
		before(fn: Function): _Chain<T>,
		wrap(wrapper: Function): () => _Chain<T>,
		negate(): _Chain<T>,
		compose(...functions: Function[]): _Chain<T>,
		keys(): _Chain<string>,
		allKeys(): _Chain<string>,
		values(): _Chain<T>,
		pairs(): _Chain<T>,
		invert(): _Chain<T>,
		functions(): _Chain<T>,
		methods(): _Chain<T>,
		extend(...sources: any[]): _Chain<T>,
		findKey(predicate: _.ObjectIterator<any, boolean>, context?: any): _Chain<T>,
		pick(...keys: any[]): _Chain<T>,
		pick(keys: any[]): _Chain<T>,
		pick(fn: (value: any, key: any, object: any) => any): _Chain<T>,
		omit(...keys: string[]): _Chain<T>,
		omit(keys: string[]): _Chain<T>,
		omit(iteratee: Function): _Chain<T>,
		defaults(...defaults: any[]): _Chain<T>,
		create(props?: Object): _Chain<T>,
		clone(): _Chain<T>,
		tap(interceptor: (...as: any[]) => any): _Chain<T>,
		has(key: string): _Chain<T>,
		matches<TResult>(): _Chain<T>,
		matcher<TResult>(): _Chain<T>,
		property(): _Chain<T>,
		propertyOf(): _Chain<T>,
		isEqual(other: any): _Chain<T>,
		isEmpty(): _Chain<T>,
		isMatch(): _Chain<T>,
		isElement(): _Chain<T>,
		isArray(): _Chain<T>,
		isSymbol(): _Chain<T>,
		isObject(): _Chain<T>,
		isArguments(): _Chain<T>,
		isFunction(): _Chain<T>,
		isError(): _Chain<T>,
		isString(): _Chain<T>,
		isNumber(): _Chain<T>,
		isFinite(): _Chain<T>,
		isBoolean(): _Chain<T>,
		isDate(): _Chain<T>,
		isRegExp(): _Chain<T>,
		isNaN(): _Chain<T>,
		isNull(): _Chain<T>,
		isUndefined(): _Chain<T>,
		identity(): _Chain<T>,
		constant(): _Chain<T>,
		noop(): _Chain<T>,
		times<TResult>(iterator: (n: number) => TResult, context?: any): _Chain<T>,
		random(): _Chain<T>,
		random(max: number): _Chain<T>,
		mixin(): _Chain<T>,
		iteratee(context?: any): _Chain<T>,
		uniqueId(): _Chain<T>,
		escape(): _Chain<T>,
		unescape(): _Chain<T>,
		result(property: string, defaultValue?: any): _Chain<T>,
		template(settings?: _.TemplateSettings): (...data: any[]) => _Chain<T>,
		concat(...arr: Array<T[]>): _Chain<T>,
		join(separator?: any): _ChainSingle<T>,
		pop(): _ChainSingle<T>,
		push(...item: Array<T>): _Chain<T>,
		reverse(): _Chain<T>,
		shift(): _ChainSingle<T>,
		slice(start: number, end?: number): _Chain<T>,
		sort(compareFn: (a: T, b: T) => boolean): _Chain<T>,
		splice(index: number, quantity: number, ...items: Array<T>): _Chain<T>,
		toString(): _ChainSingle<T>,
		unshift(...items: Array<T>): _Chain<T>,
		chain(): _Chain<T>,
		value<TResult>(): T[]
	}

	declare interface _ChainSingle<T> {
		value(): T
	}

	declare interface _ChainOfArrays<T> {
		flatten(shallow?: boolean): _Chain<T>,
		mapObject(fn: _.ListIterator<T, any>): _ChainOfArrays<T>
	}

			declare module.exports: UnderscoreStatic


}

declare module '_' {
	declare type IterateePropertyShorthand = string | number;

	declare type IterateeMatcherShorthand<T> = Dictionary<T>;

	declare interface ThrottleSettings {
		leading?: boolean,
		trailing?: boolean
	}

	declare interface TemplateSettings {
		evaluate?: RegExp,
		interpolate?: RegExp,
		escape?: RegExp,
		variable?: string
	}

	declare interface Collection<T> {
		
	}

	declare interface List<T> {
		[index: number]: T,
		length: number
	}

	declare interface Dictionary<T> {
		[index: string]: T
	}

	declare interface ListIterator<T, TResult> {
		(value: T, index: number, list: List<T>): TResult
	}

	declare interface ObjectIterator<T, TResult> {
		(element: T, key: string, list: Dictionary<T>): TResult
	}

	declare interface MemoIterator<T, TResult> {
		(prev: TResult, curr: T, index: number, list: List<T>): TResult
	}

	declare interface MemoObjectIterator<T, TResult> {
		(prev: TResult, curr: T, key: string, list: Dictionary<T>): TResult
	}

	declare interface Cancelable {
		cancel(): void
	}

			
}