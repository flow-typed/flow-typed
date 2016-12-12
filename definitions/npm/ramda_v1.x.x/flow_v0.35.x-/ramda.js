import type { Static } from 'npm$namespace$R'

declare module 'ramda' {
					declare module.exports: Static


}

declare module 'npm$namespace$R' {
	declare type Ord = number | string | boolean;

	declare interface ListIterator<T, TResult> {
		(value: T, index: number, list: T[]): TResult
	}

	declare interface Functor<T> {
		map<T>(a: any): T
	}

	declare interface ObjectIterator<T, TResult> {
		(element: T, key: string, obj: Dictionary<T>): Dictionary<TResult>
	}

	declare interface KeyValuePair<K, V> {
		0: K,
		1: V
	}

	declare interface ArrayLike {
		nodeType: number
	}

	declare interface Arity0Fn {
		(): any
	}

	declare interface Arity1Fn {
		(a: any): any
	}

	declare interface Arity2Fn {
		(a: any, b: any): any
	}

	declare interface ObjFunc {
		[index: string]: Function
	}

	declare interface ObjFunc2 {
		[index: string]: (x: any, y: any) => boolean
	}

	declare interface Pred {
		(...a: any[]): boolean
	}

	declare interface ObjPred {
		(value: any, key: string): boolean
	}

	declare interface Dictionary<T> {
		[index: string]: T
	}

	declare interface CharList {
		push(x: string): void
	}

	declare interface Nested<U> {
		[index: string]: Nested<U> | {
		(value: any): U
	}
	}

	declare interface Lens {
		(obj: T): U,
		set<T, U>(str: string, obj: T): U
	}

	declare interface CurriedFunction2<T1, T2, R> {
		(t1: T1): (t2: T2) => R,
		(t1: T1, t2: T2): R
	}

	declare interface CurriedFunction3<T1, T2, T3, R> {
		(t1: T1): CurriedFunction2<T2, T3, R>,
		(t1: T1, t2: T2): (t3: T3) => R,
		(t1: T1, t2: T2, t3: T3): R
	}

	declare interface CurriedFunction4<T1, T2, T3, T4, R> {
		(t1: T1): CurriedFunction3<T2, T3, T4, R>,
		(t1: T1, t2: T2): CurriedFunction2<T3, T4, R>,
		(t1: T1, t2: T2, t3: T3): (t4: T4) => R,
		(t1: T1, t2: T2, t3: T3, t4: T4): R
	}

	declare interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
		(t1: T1): CurriedFunction4<T2, T3, T4, T5, R>,
		(t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>,
		(t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>,
		(t1: T1, t2: T2, t3: T3, t4: T4): (t5: T5) => R,
		(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R
	}

	declare interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
		(t1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>,
		(t1: T1, t2: T2): CurriedFunction4<T3, T4, T5, T6, R>,
		(t1: T1, t2: T2, t3: T3): CurriedFunction3<T4, T5, T6, R>,
		(t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction2<T5, T6, R>,
		(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): (t6: T6) => R,
		(t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): R
	}

	declare interface Reduced {
		
	}

	declare interface Static {
		add(a: number, b: number): number,
		add(a: string, b: string): string,
		add(a: number): (b: number) => number,
		add(a: string): (b: string) => string,
		addIndex<T, U>(
		fn: (f: (item: T) => U, list: T[]) => U[]
	): CurriedFunction2<(item: T, idx: number, list?: T[]) => U, T[], U[]>,
		addIndex<T>(
		fn: (f: (item: T) => void, list: T[]) => T[]
	): CurriedFunction2<(item: T, idx: number, list?: T[]) => void, T[], T[]>,
		addIndex<T, U>(
		fn: (f: (acc: U, item: T) => U, aci: U, list: T[]) => U
	): CurriedFunction3<(acc: U, item: T, idx: number, list?: T[]) => U, U, T[], U>,
		adjust<T>(fn: (a: T) => T, index: number, list: T[]): T[],
		adjust<T>(fn: (a: T) => T, index: number): (list: T[]) => T[],
		all<T>(fn: (a: T) => boolean, list: T[]): boolean,
		all<T>(fn: (a: T) => boolean): (list: T[]) => boolean,
		allPass(preds: Pred[]): Pred,
		always<T>(val: T): () => T,
		and<T>(fn1: T, val2: boolean | any): boolean,
		and<T>(fn1: T): (val2: boolean | any) => boolean,
		any<T>(fn: (a: T) => boolean, list: T[]): boolean,
		any<T>(fn: (a: T) => boolean): (list: T[]) => boolean,
		anyPass(preds: Pred[]): Pred,
		ap<T, U>(fns: ((a: T) => U)[], vs: T[]): U[],
		ap<T, U>(fns: ((a: T) => U)[]): (vs: T[]) => U[],
		aperture<T>(n: number, list: T): T[][],
		aperture(n: number): <T>(list: T) => T[][],
		append<T, U>(el: U, list: T[]): (T & U)[],
		append<U>(el: U): <T>(list: T[]) => (T & U)[],
		append<U>(el: U): <T>(list: T[]) => (T & U)[],
		apply<T, U, TResult>(fn: (arg0: T, ...args: T[]) => TResult, args: U[]): TResult,
		apply<T, TResult>(fn: (arg0: T, ...args: T[]) => TResult): <U>(args: U[]) => TResult,
		applySpec<T>(obj: any): (...args: any[]) => T,
		assoc<T, U>(prop: string, val: T, obj: U): {
		prop: T
	} & U,
		assoc(prop: string): <T, U>(val: T, obj: U) => {
		prop: T
	} & U,
		assoc<T>(prop: string, val: T): <U>(obj: U) => {
		prop: T
	} & U,
		assocPath<T, U>(path: string[], val: T, obj: U): U,
		assocPath(path: string[]): <T, U>(val: T, obj: U) => U,
		assocPath<T>(path: string[], val: T): <U>(obj: U) => U,
		binary(fn: (...args: any[]) => any): Function,
		bind<T>(thisObj: T, fn: (...args: any[]) => any): (...args: any[]) => any,
		both(pred1: Pred, pred2: Pred): Pred,
		both(pred1: Pred): (pred2: Pred) => Pred,
		call(fn: (...args: any[]) => (...args: any[]) => any, ...args: any[]): any,
		chain<T, U>(fn: (n: T) => U[], list: T[]): U[],
		chain<T, U>(fn: (n: T) => U[]): (list: T[]) => U[],
		clamp<T>(min: T, max: T, value: T): T,
		clamp<T>(min: T, max: T): (value: T) => T,
		clamp<T>(min: T): (max: T, value: T) => T,
		clamp<T>(min: T): (max: T) => (value: T) => T,
		clone<T>(value: T): T,
		clone<T>(value: T[]): T[],
		comparator<T>(pred: (a: T, b: T) => boolean): (x: T, y: T) => number,
		complement(pred: (...args: any[]) => boolean): (...args: any[]) => boolean,
		compose<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1,
		compose<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1,
		compose<V0, V1, V2, T1>(
		fn0: (x0: V0, x1: V1, x2: V2) => T1
	): (x0: V0, x1: V1, x2: V2) => T1,
		compose<V0, T1, T2>(fn1: (x: T1) => T2, fn0: (x0: V0) => T1): (x0: V0) => T2,
		compose<V0, V1, T1, T2>(
		fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1
	): (x0: V0, x1: V1) => T2,
		compose<V0, V1, V2, T1, T2>(
		fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1
	): (x0: V0, x1: V1, x2: V2) => T2,
		compose<V0, T1, T2, T3>(
		fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1
	): (x: V0) => T3,
		compose<V0, V1, T1, T2, T3>(
		fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1
	): (x0: V0, x1: V1) => T3,
		compose<V0, V1, V2, T1, T2, T3>(
		fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1
	): (x0: V0, x1: V1, x2: V2) => T3,
		compose<V0, T1, T2, T3, T4>(
		fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1
	): (x: V0) => T4,
		compose<V0, V1, T1, T2, T3, T4>(
		fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1
	): (x0: V0, x1: V1) => T4,
		compose<V0, V1, V2, T1, T2, T3, T4>(
		fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1
	): (x0: V0, x1: V1, x2: V2) => T4,
		compose<V0, T1, T2, T3, T4, T5>(
		fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1
	): (x: V0) => T5,
		compose<V0, V1, T1, T2, T3, T4, T5>(
		fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1
	): (x0: V0, x1: V1) => T5,
		compose<V0, V1, V2, T1, T2, T3, T4, T5>(
		fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1
	): (x0: V0, x1: V1, x2: V2) => T5,
		compose<V0, T1, T2, T3, T4, T5, T6>(
		fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x: V0) => T1
	): (x: V0) => T6,
		compose<V0, V1, T1, T2, T3, T4, T5, T6>(
		fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1) => T1
	): (x0: V0, x1: V1) => T6,
		compose<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
		fn5: (x: T5) => T6, fn4: (x: T4) => T5, fn3: (x: T3) => T4, fn2: (x: T2) => T3, fn1: (x: T1) => T2, fn0: (x0: V0, x1: V1, x2: V2) => T1
	): (x0: V0, x1: V1, x2: V2) => T6,
		concat<T>(list1: T[], list2: T[]): T[],
		concat<T>(list1: T[]): (list2: T[]) => T[],
		concat(list1: string, list2: string): string,
		concat(list1: string): (list2: string) => string,
		cond(fns: [Pred, Function][]): Function,
		construct(fn: Function): Function,
		constructN(n: number, fn: Function): Function,
		contains(a: string, list: string): boolean,
		contains<T>(a: T, list: T[]): boolean,
		contains(a: string): (list: string) => boolean,
		contains<T>(a: T): (list: T[]) => boolean,
		converge(after: Function, fns: Function[]): Function,
		countBy(fn: (a: any) => string | number, list: any[]): any,
		countBy(fn: (a: any) => string | number): (list: any[]) => any,
		curry<T1, T2, TResult>(
		fn: (a: T1, b: T2) => TResult
	): CurriedFunction2<T1, T2, TResult>,
		curry<T1, T2, T3, TResult>(
		fn: (a: T1, b: T2, c: T3) => TResult
	): CurriedFunction3<T1, T2, T3, TResult>,
		curry<T1, T2, T3, T4, TResult>(
		fn: (a: T1, b: T2, c: T3, d: T4) => TResult
	): CurriedFunction4<T1, T2, T3, T4, TResult>,
		curry<T1, T2, T3, T4, T5, TResult>(
		fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => TResult
	): CurriedFunction5<T1, T2, T3, T4, T5, TResult>,
		curry<T1, T2, T3, T4, T5, T6, TResult>(
		fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => TResult
	): CurriedFunction6<T1, T2, T3, T4, T5, T6, TResult>,
		curry(fn: Function): Function,
		curryN(length: number, fn: (...args: any[]) => any): Function,
		dec(n: number): number,
		defaultTo<T, U>(a: T, b: U): T | U,
		defaultTo<T>(a: T): <U>(b: U) => T | U,
		difference<T>(list1: T[], list2: T[]): T[],
		difference<T>(list1: T[]): (list2: T[]) => T[],
		differenceWith<T>(pred: (a: T, b: T) => boolean, list1: T[], list2: T[]): T[],
		dissoc<T>(prop: string, obj: any): T,
		dissoc(prop: string): <U>(obj: any) => U,
		dissocPath<T>(path: string[], obj: any): T,
		dissocPath(path: string[]): <T>(obj: any) => T,
		divide(a: number, b: number): number,
		divide(a: number): (b: number) => number,
		drop<T>(n: number, xs: T[]): T[],
		drop(n: number, xs: string): string,
		drop<T>(n: number): {
		(xs: string): string,
		(xs: T[]): T[]
	},
		dropLast<T>(n: number, xs: T[]): T[],
		dropLast(n: number, xs: string): string,
		dropLast<T>(n: number): {
		(xs: T[]): T[],
		(xs: string): string
	},
		dropLastWhile<T>(fn: (a: T) => boolean, list: T[]): T[],
		dropLastWhile<T>(fn: (a: T) => boolean): (list: T[]) => T[],
		dropWhile<T>(fn: (a: T) => boolean, list: T[]): T[],
		dropWhile<T>(fn: (a: T) => boolean): (list: T[]) => T[],
		either(pred1: Pred, pred2: Pred): Pred,
		either(pred1: Pred): (pred2: Pred) => Pred,
		empty<T>(x: T): T,
		eqBy<T>(fn: (a: T) => T, a: T, b: T): boolean,
		eqBy<T>(fn: (a: T) => T, a: T): (b: T) => boolean,
		eqBy<T>(fn: (a: T) => T): (a: T, b: T) => boolean,
		eqBy<T>(fn: (a: T) => T): (a: T) => (b: T) => boolean,
		eqProps<T, U>(prop: string, obj1: T, obj2: U): boolean,
		eqProps(prop: string): <T, U>(obj1: T, obj2: U) => boolean,
		eqProps<T>(prop: string, obj1: T): <U>(obj2: U) => boolean,
		equals<T>(a: T, b: T): boolean,
		equals<T>(a: T): (b: T) => boolean,
		evolve<V>(transformations: Nested<V>, obj: V): Nested<V>,
		evolve<V>(transformations: Nested<V>): <V>(obj: V) => Nested<V>,
		F(): boolean,
		filter<T>(fn: (value: T) => boolean): (list: T[]) => T[],
		filter<T>(fn: (value: T) => boolean, list: T[]): T[],
		find<T>(fn: (a: T) => boolean, list: T[]): T,
		find<T>(fn: (a: T) => boolean): (list: T[]) => T,
		findIndex<T>(fn: (a: T) => boolean, list: T[]): number,
		findIndex<T>(fn: (a: T) => boolean): (list: T[]) => number,
		findLast<T>(fn: (a: T) => boolean, list: T[]): T,
		findLast<T>(fn: (a: T) => boolean): (list: T[]) => T,
		findLastIndex<T>(fn: (a: T) => boolean, list: T[]): number,
		findLastIndex<T>(fn: (a: T) => boolean): (list: T[]) => number,
		flatten<T>(x: T[][]): T[],
		flatten<T>(x: T[]): T[],
		flip<T, U, TResult>(
		fn: (arg0: T, arg1: U) => TResult
	): (arg1: U, arg0?: T) => TResult,
		flip<T, U, TResult>(
		fn: (arg0: T, arg1: U, ...args: any[]) => TResult
	): (arg1: U, arg0?: T, ...args: any[]) => TResult,
		forEach<T>(fn: (x: T) => void, list: T[]): T[],
		forEach<T>(fn: (x: T) => void): (list: T[]) => T[],
		fromPairs<V>(pairs: KeyValuePair<string, V>[]): {
		[index: string]: V
	},
		fromPairs<V>(pairs: KeyValuePair<number, V>[]): {
		[index: number]: V
	},
		groupBy<T>(fn: (a: T) => string, list: T[]): {
		[index: string]: T[]
	},
		groupBy<T>(fn: (a: T) => string): <T>(list: T[]) => {
		[index: string]: T[]
	},
		groupWith<T>(fn: (x: T, y: T) => boolean, list: T[]): T[][],
		groupWith<T>(fn: (x: T, y: T) => boolean, list: string): string[],
		gt(a: number, b: number): boolean,
		gt(a: number): (b: number) => boolean,
		gte(a: number, b: number): boolean,
		gte(a: number): (b: number) => boolean,
		has<T>(s: string, obj: T): boolean,
		has(s: string): <T>(obj: T) => boolean,
		hasIn<T>(s: string, obj: T): boolean,
		hasIn(s: string): <T>(obj: T) => boolean,
		head<T>(list: T[]): T,
		head(list: string): string,
		identical<T>(a: T, b: T): boolean,
		identical<T>(a: T): (b: T) => boolean,
		identity<T>(a: T): T,
		ifElse(fn: Pred, onTrue: Arity1Fn, onFalse: Arity1Fn): Arity1Fn,
		inc(n: number): number,
		indexBy<T, U>(fn: (a: T) => string, list: T[]): U,
		indexBy<T>(fn: (a: T) => string): <U>(list: T[]) => U,
		indexOf<T>(target: T, list: T[]): number,
		indexOf<T>(target: T): (list: T[]) => number,
		init<T>(list: T[]): T[],
		insert<T>(index: number, elt: T, list: T[]): T[],
		insert<T>(index: number, elt: T): (list: T[]) => T[],
		insert(index: number): <T>(elt: T, list: T[]) => T[],
		insertAll<T>(index: number, elts: T[], list: T[]): T[],
		insertAll<T>(index: number, elts: T[]): (list: T[]) => T[],
		insertAll(index: number): <T>(elts: T[], list: T[]) => T[],
		intersection<T>(list1: T[], list2: T[]): T[],
		intersectionWith<T>(pred: (a: T, b: T) => boolean, list1: T[], list2: T[]): T[],
		intersperse<T>(separator: T, list: T[]): T[],
		intersperse<T>(separator: T): (list: T[]) => T[],
		into<T>(acc: any, xf: Function, list: T[]): T[],
		into(acc: any, xf: Function): <T>(list: T[]) => T[],
		into(acc: any): <T>(xf: Function, list: T[]) => T[],
		invert<T>(obj: T): {
		[index: string]: string[]
	},
		invertObj(obj: any): {
		[index: string]: string
	},
		invertObj(obj: {
		[index: number]: string
	}): {
		[index: string]: string
	},
		invoker(name: string, obj: any, len?: number): Function,
		invoker(name: string): (obj: any, len?: number) => Function,
		is(ctor: any, val: any): boolean,
		is(ctor: any): (val: any) => boolean,
		isArrayLike(val: any): boolean,
		isEmpty(value: any): boolean,
		isNaN(x: any): boolean,
		isNil(value: any): boolean,
		join(x: string, xs: any[]): string,
		join(x: string): (xs: any[]) => string,
		juxt<T, U>(fns: {
		(...args: T[]): U
	}[]): (...args: T[]) => U[],
		keys<T>(x: T): string[],
		keysIn<T>(obj: T): string[],
		last<T>(list: T[]): T,
		last(list: string): string,
		lastIndexOf<T>(target: T, list: T[]): number,
		length(list: any[]): number,
		lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens,
		lensIndex(n: number): Lens,
		lensPath(path: string[]): Lens,
		lensProp(str: string): {
		(obj: T): U,
		set<T, U, V>(val: T, obj: U): V
	},
		lift(fn: Function, ...args: any[]): any,
		liftN(n: number, fn: Function, ...args: any[]): any,
		lt(a: number, b: number): boolean,
		lt(a: number): (b: number) => boolean,
		lte(a: number, b: number): boolean,
		lte(a: number): (b: number) => boolean,
		map<T, U>(fn: (x: T) => U, list: T[]): U[],
		map<T, U>(fn: (x: T) => U, obj: Functor<T>): Functor<U>,
		map<T, U>(fn: (x: T) => U): (list: T[]) => U[],
		mapAccum<T, U, TResult>(
		fn: (acc: U, value: T) => [U, TResult], acc: U, list: T[]
	): [U, TResult[]],
		mapAccum<T, U, TResult>(
		fn: (acc: U, value: T) => [U, TResult]
	): (acc: U, list: T[]) => [U, TResult[]],
		mapAccum<T, U, TResult>(
		fn: (acc: U, value: T) => [U, TResult], acc: U
	): (list: T[]) => [U, TResult[]],
		mapAccumRight<T, U, TResult>(
		fn: (acc: U, value: T) => [U, TResult], acc: U, list: T[]
	): [U, TResult[]],
		mapAccumRight<T, U, TResult>(
		fn: (acc: U, value: T) => [U, TResult]
	): (acc: U, list: T[]) => [U, TResult[]],
		mapAccumRight<T, U, TResult>(
		fn: (acc: U, value: T) => [U, TResult], acc: U
	): (list: T[]) => [U, TResult[]],
		mapObjIndexed<T, TResult>(
		fn: (value: T, key: string, obj?: any) => TResult, obj: any
	): {
		[index: string]: TResult
	},
		mapObjIndexed<T, TResult>(
		fn: (value: T, key: string, obj?: any) => TResult
	): (obj: any) => {
		[index: string]: TResult
	},
		match(regexp: RegExp, str: string): any[],
		match(regexp: RegExp): (str: string) => any[],
		mathMod(a: number, b: number): number,
		mathMod(a: number): (b: number) => number,
		max(a: Ord, b: Ord): Ord,
		max(a: Ord): (b: Ord) => Ord,
		maxBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T,
		maxBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T,
		maxBy<T>(keyFn: (a: T) => Ord): CurriedFunction2<T, T, T>,
		mean(list: number[]): number,
		median(list: number[]): number,
		memoize(fn: Function): Function,
		merge<T1, T2>(a: T1, b: T2): T1 & T2,
		merge<T1>(a: T1): <T2>(b: T2) => T1 & T2,
		mergeAll<T>(list: any[]): T,
		mergeWith<U, V>(fn: (x: any, z: any) => any, a: U, b: V): U & V,
		mergeWith<U>(fn: (x: any, z: any) => any, a: U): <V>(b: V) => U & V,
		mergeWith(fn: (x: any, z: any) => any): <U, V>(a: U, b: V) => U & V,
		mergeWithKey<U, V>(fn: (str: string, x: any, z: any) => any, a: U, b: V): U & V,
		mergeWithKey<U>(fn: (str: string, x: any, z: any) => any, a: U): <V>(b: V) => U & V,
		mergeWithKey(fn: (str: string, x: any, z: any) => any): <U, V>(a: U, b: V) => U & V,
		min(a: Ord, b: Ord): Ord,
		min(a: Ord): (b: Ord) => Ord,
		minBy<T>(keyFn: (a: T) => Ord, a: T, b: T): T,
		minBy<T>(keyFn: (a: T) => Ord, a: T): (b: T) => T,
		minBy<T>(keyFn: (a: T) => Ord): CurriedFunction2<T, T, T>,
		modulo(a: number, b: number): number,
		modulo(a: number): (b: number) => number,
		multiply(a: number, b: number): number,
		multiply(a: number): (b: number) => number,
		nAry(n: number, fn: (...arg: any[]) => any): Function,
		negate(n: number): number,
		none<T>(fn: (a: T) => boolean, list: T[]): boolean,
		none<T>(fn: (a: T) => boolean): (list: T[]) => boolean,
		not(value: any): boolean,
		nth<T>(n: number, list: T[]): T,
		nth(n: number): <T>(list: T[]) => T,
		nthArg(n: number): (...a: any[]) => any,
		objOf<T>(key: string, value: T): {
		string: T
	},
		objOf(key: string): <T>(value: T) => {
		string: T
	},
		of<T>(x: T): T[],
		omit<T>(names: string[], obj: T): T,
		omit(names: string[]): <T>(obj: T) => T,
		once(fn: Function): Function,
		or<T, U>(a: T, b: U): T | U,
		or<T>(a: T): <U>(b: U) => T | U,
		or<T, U>(fn1: T, val2: U): T | U,
		or<T>(fn1: T): <U>(val2: U) => T | U,
		over<T>(lens: Lens, fn: Arity1Fn, value: T): T,
		over<T>(lens: Lens, fn: Arity1Fn, value: T[]): T[],
		over(lens: Lens, fn: Arity1Fn): <T>(value: T) => T,
		over(lens: Lens, fn: Arity1Fn): <T>(value: T[]) => T[],
		over(lens: Lens): <T>(fn: Arity1Fn, value: T) => T,
		over(lens: Lens): <T>(fn: Arity1Fn, value: T[]) => T[],
		pair<F, S>(fst: F, snd: S): [F, S],
		partial(fn: Function, ...args: any[]): Function,
		partialRight(fn: Function, ...args: any[]): Function,
		partition(fn: (a: string) => boolean, list: string[]): string[][],
		partition<T>(fn: (a: T) => boolean, list: T[]): T[][],
		partition<T>(fn: (a: T) => boolean): (list: T[]) => T[][],
		partition(fn: (a: string) => boolean): (list: string[]) => string[][],
		path<T>(path: string[], obj: any): T,
		path(path: string[]): <T>(obj: any) => T,
		pathEq(path: string[], val: any, obj: any): boolean,
		pathEq(path: string[], val: any): (obj: any) => boolean,
		pathEq(path: string[]): (val: any, obj: any) => boolean,
		pathEq(path: string[]): (val: any) => (obj: any) => boolean,
		pathOr<T>(d: T, p: string[], obj: any): T | any,
		pathOr<T>(d: T, p: string[]): (obj: any) => T | any,
		pathOr<T>(d: T): (p: string[], obj: any) => T | any,
		pick<T, U>(names: string[], obj: T): U,
		pick(names: string[]): <T, U>(obj: T) => U,
		pickAll<T, U>(names: string[], obj: T): U,
		pickAll(names: string[]): <T, U>(obj: T) => U,
		pickBy<T, U>(pred: ObjPred, obj: T): U,
		pickBy(pred: ObjPred): <T, U>(obj: T) => U,
		pipe<V0, T1>(fn0: (x0: V0) => T1): (x0: V0) => T1,
		pipe<V0, V1, T1>(fn0: (x0: V0, x1: V1) => T1): (x0: V0, x1: V1) => T1,
		pipe<V0, V1, V2, T1>(
		fn0: (x0: V0, x1: V1, x2: V2) => T1
	): (x0: V0, x1: V1, x2: V2) => T1,
		pipe<V0, T1, T2>(fn0: (x0: V0) => T1, fn1: (x: T1) => T2): (x0: V0) => T2,
		pipe<V0, V1, T1, T2>(
		fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2
	): (x0: V0, x1: V1) => T2,
		pipe<V0, V1, V2, T1, T2>(
		fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2
	): (x0: V0, x1: V1, x2: V2) => T2,
		pipe<V0, T1, T2, T3>(
		fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3
	): (x: V0) => T3,
		pipe<V0, V1, T1, T2, T3>(
		fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3
	): (x0: V0, x1: V1) => T3,
		pipe<V0, V1, V2, T1, T2, T3>(
		fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3
	): (x0: V0, x1: V1, x2: V2) => T3,
		pipe<V0, T1, T2, T3, T4>(
		fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4
	): (x: V0) => T4,
		pipe<V0, V1, T1, T2, T3, T4>(
		fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4
	): (x0: V0, x1: V1) => T4,
		pipe<V0, V1, V2, T1, T2, T3, T4>(
		fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4
	): (x0: V0, x1: V1, x2: V2) => T4,
		pipe<V0, T1, T2, T3, T4, T5>(
		fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5
	): (x: V0) => T5,
		pipe<V0, V1, T1, T2, T3, T4, T5>(
		fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5
	): (x0: V0, x1: V1) => T5,
		pipe<V0, V1, V2, T1, T2, T3, T4, T5>(
		fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5
	): (x0: V0, x1: V1, x2: V2) => T5,
		pipe<V0, T1, T2, T3, T4, T5, T6>(
		fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6
	): (x: V0) => T6,
		pipe<V0, V1, T1, T2, T3, T4, T5, T6>(
		fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6
	): (x0: V0, x1: V1) => T6,
		pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
		fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6
	): (x0: V0, x1: V1, x2: V2) => T6,
		pipe<V0, T1, T2, T3, T4, T5, T6, T7>(
		fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn: (x: T6) => T7
	): (x: V0) => T7,
		pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7>(
		fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7
	): (x0: V0, x1: V1) => T7,
		pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(
		fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7
	): (x0: V0, x1: V1, x2: V2) => T7,
		pipe<V0, T1, T2, T3, T4, T5, T6, T7, T8>(
		fn0: (x: V0) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T6) => T7, fn: (x: T7) => T8
	): (x: V0) => T8,
		pipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(
		fn0: (x0: V0, x1: V1) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T5) => T6, fn7: (x: T7) => T8
	): (x0: V0, x1: V1) => T8,
		pipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(
		fn0: (x0: V0, x1: V1, x2: V2) => T1, fn1: (x: T1) => T2, fn2: (x: T2) => T3, fn3: (x: T3) => T4, fn4: (x: T4) => T5, fn5: (x: T5) => T6, fn6: (x: T5) => T6, fn7: (x: T7) => T8
	): (x0: V0, x1: V1, x2: V2) => T8,
		pluck<T>(p: string | number, list: any[]): T[],
		pluck(p: string | number): <T>(list: any[]) => T[],
		prepend<T>(el: T, list: T[]): T[],
		prepend<T>(el: T): (list: T[]) => T[],
		product(list: number[]): number,
		project<T, U>(props: string[], objs: T[]): U[],
		prop<T>(p: string, obj: any): T,
		prop<T>(p: string): <T>(obj: any) => T,
		propEq<T>(name: string, val: T, obj: any): boolean,
		propEq<T>(name: string, val: T): (obj: any) => boolean,
		propEq(name: string): <T>(val: T, obj: any) => boolean,
		propIs(type: any, name: string, obj: any): boolean,
		propIs(type: any, name: string): (obj: any) => boolean,
		propIs(
		type: any
	): {
		(name: string, obj: any): boolean,
		(name: string): (obj: any) => boolean
	},
		propOr<T, U, V>(val: T, p: string, obj: U): V,
		propOr<T>(val: T, p: string): <U, V>(obj: U) => V,
		propOr<T>(val: T): <U, V>(p: string, obj: U) => V,
		props<T>(ps: string[], obj: any): T[],
		props(ps: string[]): <T>(obj: any) => T[],
		propSatisfies<T, U>(pred: (val: T) => boolean, name: string, obj: U): boolean,
		propSatisfies<T, U>(pred: (val: T) => boolean, name: string): (obj: U) => boolean,
		propSatisfies<T, U>(pred: (val: T) => boolean): CurriedFunction2<string, U, boolean>,
		range(from: number, to: number): number[],
		range(from: number): (to: number) => number[],
		reduce<T, TResult>(
		fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult, list: T[]
	): TResult,
		reduce<T, TResult>(
		fn: (acc: TResult, elem: T) => TResult | Reduced
	): (acc: TResult, list: T[]) => TResult,
		reduce<T, TResult>(
		fn: (acc: TResult, elem: T) => TResult | Reduced, acc: TResult
	): (list: T[]) => TResult,
		reduceBy<T, TResult>(
		valueFn: (acc: TResult, elem: T) => TResult, acc: TResult, keyFn: (elem: T) => string, list: T[]
	): {
		[index: string]: TResult
	},
		reduceBy<T, TResult>(
		valueFn: (acc: TResult, elem: T) => TResult, acc: TResult, keyFn: (elem: T) => string
	): (list: T[]) => {
		[index: string]: TResult
	},
		reduceBy<T, TResult>(
		valueFn: (acc: TResult, elem: T) => TResult, acc: TResult
	): CurriedFunction2<(elem: T) => string, T[], {
		[index: string]: TResult
	}>,
		reduceBy<T, TResult>(
		valueFn: (acc: TResult, elem: T) => TResult
	): CurriedFunction3<TResult, (elem: T) => string, T[], {
		[index: string]: TResult
	}>,
		reduced<T>(elem: T): Reduced,
		reduceRight<T, TResult>(
		fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: T[]
	): TResult,
		reduceRight<T, TResult>(
		fn: (acc: TResult, elem: T) => TResult
	): (acc: TResult, list: T[]) => TResult,
		reduceRight<T, TResult>(
		fn: (acc: TResult, elem: T) => TResult, acc: TResult
	): (list: T[]) => TResult,
		reject<T>(fn: (value: T) => boolean, list: T[]): T[],
		reject<T>(fn: (value: T) => boolean): (list: T[]) => T[],
		remove<T>(start: number, count: number, list: T[]): T[],
		remove<T>(start: number): (count: number, list: T[]) => T[],
		remove<T>(start: number, count: number): (list: T[]) => T[],
		repeat<T>(a: T, n: number): T[],
		repeat<T>(a: T): (n: number) => T[],
		replace(pattern: RegExp, replacement: string, str: string): string,
		replace(pattern: RegExp, replacement: string): (str: string) => string,
		replace(pattern: RegExp): (replacement: string) => (str: string) => string,
		replace(pattern: String, replacement: string, str: string): string,
		replace(pattern: String, replacement: string): (str: string) => string,
		replace(pattern: String): (replacement: string) => (str: string) => string,
		reverse<T>(list: T[]): T[],
		scan<T, TResult>(
		fn: (acc: TResult, elem: T) => any, acc: TResult, list: T[]
	): TResult[],
		scan<T, TResult>(
		fn: (acc: TResult, elem: T) => any, acc: TResult
	): (list: T[]) => TResult[],
		scan<T, TResult>(
		fn: (acc: TResult, elem: T) => any
	): (acc: TResult, list: T[]) => TResult[],
		set<T, U>(lens: Lens, a: U, obj: T): T,
		set<U>(lens: Lens, a: U): <T>(obj: T) => T,
		set(lens: Lens): <T, U>(a: U, obj: T) => T,
		slice(a: number, b: number, list: string): string,
		slice<T>(a: number, b: number, list: T[]): T[],
		slice(a: number, b: number): <T>(list: string | T[]) => string | T[],
		slice(a: number): <T>(b: number, list: string | T[]) => string | T[],
		sort<T>(fn: (a: T, b: T) => number, list: T[]): T[],
		sort<T>(fn: (a: T, b: T) => number): (list: T[]) => T[],
		sortBy<T>(fn: (a: any) => string, list: T[]): T[],
		sortBy(fn: (a: any) => string): <T>(list: T[]) => T[],
		split(sep: string): (str: string) => string[],
		split(sep: RegExp): (str: string) => string[],
		split(sep: string, str: string): string[],
		split(sep: RegExp, str: string): string[],
		splitAt<T>(index: number, list: T): T[],
		splitAt(index: number): <T>(list: T) => T[],
		splitAt<T>(index: number, list: T[]): T[][],
		splitAt(index: number): <T>(list: T[]) => T[][],
		splitEvery<T>(a: number, list: T[]): T[][],
		splitEvery(a: number): <T>(list: T[]) => T[][],
		splitWhen<T, U>(pred: (val: T) => boolean, list: U[]): U[][],
		splitWhen<T>(pred: (val: T) => boolean): <U>(list: U[]) => U[][],
		subtract(a: number, b: number): number,
		subtract(a: number): (b: number) => number,
		sum(list: number[]): number,
		symmetricDifference<T>(list1: T[], list2: T[]): T[],
		symmetricDifference<T>(list: T[]): <T>(list: T[]) => T[],
		symmetricDifferenceWith<T>(pred: (a: T, b: T) => boolean, list1: T[], list2: T[]): T[],
		symmetricDifferenceWith<T>(pred: (a: T, b: T) => boolean): CurriedFunction2<T[], T[], T[]>,
		T(): boolean,
		tail<T>(list: T[]): T[],
		take<T>(n: number, xs: T[]): T[],
		take(n: number, xs: string): string,
		take<T>(n: number): {
		(xs: string): string,
		(xs: T[]): T[]
	},
		takeLast<T>(n: number, xs: T[]): T[],
		takeLast(n: number, xs: string): string,
		takeLast(n: number): {
		(xs: T[]): T[],
		(xs: string): string
	},
		takeLastWhile<T>(pred: (a: T) => Boolean, list: T[]): T[],
		takeLastWhile<T>(pred: (a: T) => Boolean): <T>(list: T[]) => T[],
		takeWhile<T>(fn: (x: T) => boolean, list: T[]): T[],
		takeWhile<T>(fn: (x: T) => boolean): (list: T[]) => T[],
		tap<T>(fn: (a: T) => any, value: T): T,
		tap<T>(fn: (a: T) => any): (value: T) => T,
		test(regexp: RegExp, str: string): boolean,
		test(regexp: RegExp): (str: string) => boolean,
		times<T>(fn: (i: number) => T, n: number): T[],
		times<T>(fn: (i: number) => T): (n: number) => T[],
		toLower(str: string): string,
		toPairs<F, S>(obj: {
		[k: string]: S
	} | {
		[k: number]: S
	} | any): [F, S][],
		toPairsIn<F, S>(obj: {
		[k: string]: S
	} | {
		[k: number]: S
	} | any): [F, S][],
		toString<T>(val: T): string,
		toUpper(str: string): string,
		transduce<T, U>(
		xf: (arg: T[]) => T[], fn: (acc: U[], val: U) => U[], acc: T[], list: T[]
	): U,
		transduce<T, U>(
		xf: (arg: T[]) => T[]
	): (fn: (acc: U[], val: U) => U[], acc: T[], list: T[]) => U,
		transduce<T, U>(
		xf: (arg: T[]) => T[], fn: (acc: U[], val: U) => U[]
	): (acc: T[], list: T[]) => U,
		transduce<T, U>(
		xf: (arg: T[]) => T[], fn: (acc: U[], val: U) => U[], acc: T[]
	): (list: T[]) => U,
		transpose<T>(list: any[][]): any[][],
		trim(str: string): string,
		tryCatch<T>(tryer: (...args: any[]) => T, catcher: (...args: any[]) => T, x: any): T,
		type(val: any): string,
		unapply<T>(fn: (args: any[]) => T): (...args: any[]) => T,
		unary<T>(fn: (a: T, ...args: any[]) => any): (a: T) => any,
		uncurryN<T>(len: number, fn: (a: any) => any): (...a: any[]) => T,
		unfold<T, TResult>(fn: (seed: T) => TResult[] | boolean, seed: T): TResult[],
		unfold<T, TResult>(fn: (seed: T) => TResult[] | boolean): (seed: T) => TResult[],
		union<T>(as: T[], bs: T[]): T[],
		union<T>(as: T[]): (bs: T[]) => T[],
		unionWith<T>(pred: (a: T, b: T) => boolean, list1: T[], list2: T[]): T[],
		unionWith<T>(pred: (a: T, b: T) => boolean): CurriedFunction2<T[], T[], T[]>,
		uniq<T>(list: T[]): T[],
		uniqBy<T, U>(fn: (a: T) => U, list: T[]): T[],
		uniqBy<T, U>(fn: (a: T) => U): (list: T[]) => T[],
		uniqWith<T, U>(pred: (x: T, y: T) => boolean, list: T[]): T[],
		uniqWith<T, U>(pred: (x: T, y: T) => boolean): (list: T[]) => T[],
		unless<T, U>(pred: (a: T) => boolean, whenFalseFn: (a: T) => U, obj: T): U,
		unless<T, U>(pred: (a: T) => boolean, whenFalseFn: (a: T) => U): (obj: T) => U,
		unnest<T>(x: T[][]): T[],
		unnest<T>(x: T[]): T[],
		until<T, U>(pred: (val: T) => boolean, fn: (val: T) => U, init: U): U,
		until<T, U>(pred: (val: T) => boolean, fn: (val: T) => U): (init: U) => U,
		update<T>(index: number, value: T, list: T[]): T[],
		update<T>(index: number, value: T): (list: T[]) => T[],
		useWith(fn: Function, transformers: Function[]): Function,
		values<T>(obj: {
		[index: string]: T
	}): T[],
		values<T>(obj: any): T[],
		valuesIn<T>(obj: any): T[],
		view<T, U>(lens: Lens, obj: T): U,
		when<T, U>(pred: (a: T) => boolean, whenTrueFn: (a: T) => U, obj: T): U,
		when<T, U>(pred: (a: T) => boolean, whenTrueFn: (a: T) => U): (obj: T) => U,
		where<T, U>(spec: T, testObj: U): boolean,
		where<T>(spec: T): <U>(testObj: U) => boolean,
		where<ObjFunc2, U>(spec: ObjFunc2, testObj: U): boolean,
		where<ObjFunc2>(spec: ObjFunc2): <U>(testObj: U) => boolean,
		whereEq<T, U>(spec: T, obj: U): boolean,
		whereEq<T>(spec: T): <U>(obj: U) => boolean,
		without<T>(list1: T[], list2: T[]): T[],
		without<T>(list1: T[]): (list2: T[]) => T[],
		wrap(fn: Function, wrapper: Function): Function,
		xprod<K, V>(as: K[], bs: V[]): KeyValuePair<K, V>[],
		xprod<K>(as: K[]): <V>(bs: V[]) => KeyValuePair<K, V>[],
		zip<K, V>(list1: K[], list2: V[]): KeyValuePair<K, V>[],
		zip<K>(list1: K[]): <V>(list2: V[]) => KeyValuePair<K, V>[],
		zipObj<T>(keys: string[], values: T[]): {
		[index: string]: T
	},
		zipObj(keys: string[]): <T>(values: T[]) => {
		[index: string]: T
	},
		zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[], list2: U[]): TResult[],
		zipWith<T, U, TResult>(
		fn: (x: T, y: U) => TResult, list1: T[]
	): (list2: U[]) => TResult[],
		zipWith<T, U, TResult>(
		fn: (x: T, y: U) => TResult
	): (list1: T[], list2: U[]) => TResult[]
	}

			
}