import type { JfpStatic } from 'npm$namespace$j'

declare module 'jfp' {
					declare module.exports: JfpStatic


}

declare module 'npm$namespace$j' {
		declare interface JfpStatic {
		(alias: string, ...arguments: any[]): JfpCurriedOutput<any>,
		(externalFunction: (...arguments: any[]) => any, ...arguments: any[]): JfpCurriedOutput<any>
	}

	declare interface JfpCurriedOutput<T> {
		
	}

	declare interface JfpStatic {
		compact(values: any[]): any[],
		concat(values1: any[], values2: any[]): any[],
		conj(value: any, destination: any[]): any[],
		cons(value: any, destination: any[]): any[],
		copyArray(list: any[]): any[],
		difference(lista: any[], listb: any[]): any[],
		drop(index: number, values: any[]): any[],
		dropFirst(values: any[]): any[],
		dropLast(values: any[]): any[],
		dropUntil(predicate: (...arguments: any[]) => boolean, list: any[]): any[],
		each(iteratable: (value: any) => void, values: any[]): any[],
		filter(predicate: (value: any) => boolean, values: any[]): any[],
		find(predicate: (value: any) => boolean, values: any[]): any,
		init(list: any[]): any[],
		intersect(lista: any[], listb: any[]): any[],
		first(values: any[]): any,
		last(values: any[]): any,
		lastIndex(values: any[]): number,
		map(mapper: (value: any) => any, values: any[]): any[],
		multiPartition(
		predicate: (criterion: any, value: any) => boolean, criteria: any[], list: any[]
	): any[][],
		numberOf(predicate: (value: any) => boolean, list: any[]): number,
		partition(predicate: (value: any) => boolean, list: any[]): any[][],
		nth(index: number, values: any[]): any,
		reduce(reducer: (condition1: any, condition2: any) => any, values: any[]): any,
		reduce(
		reducer: (condition1: any, condition2: any) => any, values: any[], initialCondition: any
	): any,
		rest(values: any[]): any[],
		slice(initialIndex: number, values: any[]): any[],
		slice(initialIndex: number, values: any[], lastIndex: number): any[],
		some(predicate: (value: any) => boolean, list: any[]): boolean,
		sort(list: any[]): any[],
		sort(list: any[], comparator: (a: any, b: any) => number): any[],
		symmetricDifference(lista: any[], listb: any[]): any[],
		take(quantity: number, values: any[]): any[],
		takeUntil(predicate: (value: any) => boolean, list: any[]): any[],
		union(lista: any[], listb: any[]): any[],
		unique(values: any[]): any[],
		zip(lista: any[], listb: any[]): any[][]
	}

	declare interface JfpStatic {
		either(defaultValue: any, preferredValue: any): any,
		either(defaultValue: any, preferredValue: any, datatype: string): any,
		eitherIf(defaultValue: any, preferredValue: any, predicateValue: boolean): any,
		eitherWhen(
		defaultValue: any, preferredValue: any, predicate: (value: any) => boolean
	): any,
		maybe(preferredValue: any): any,
		maybe(preferredValue: any, datatype: string): any,
		shortCircuit(defaultValue: any, userFn: (...arguments: any[]) => any, value: any): any,
		when(predicateValue: boolean, userFunction: (...arguments: any[]) => any): any,
		when(
		predicateValue: boolean, userFunction: (...arguments: any[]) => any, ...arguments: any[]
	): any
	}

	declare interface JfpStatic {
		toDec(value: string): number,
		toDec(value: number): number,
		toValues(value: Object): any[]
	}

	declare interface JfpStatic {
		always(value: any): (...arguments: any[]) => any,
		apply(userFn: (...arguments: any[]) => any, values: any[]): void,
		compose(...arguments: ((...arguments: any[]) => any)[]): (...arguments: any[]) => any,
		countArguments(userFn: (...arguments: any[]) => any): number,
		curry(userFn: (...arguments: any[]) => any): (...arguments: any[]) => any,
		curry(userFn: (...arguments: any[]) => any): any,
		curry(
		userFn: (...arguments: any[]) => any, ...arguments: any[]
	): (...arguments: any[]) => any,
		curry(userFn: (...arguments: any[]) => any, ...arguments: any[]): any,
		execute(userFn: (...arguments: any[]) => any): any,
		getType(value: any): string,
		identity(value: any): any,
		partial(userFn: (...arguments: any[]) => any): (...arguments: any[]) => any,
		partial(
		userFn: (...arguments: any[]) => any, ...arguments: any[]
	): (...arguments: any[]) => any,
		pipeline(value: any, ...arguments: ((...arguments: any[]) => any)[]): any,
		recur(userFn: (...arguments: any[]) => any): any,
		recur(userFn: (...arguments: any[]) => any, ...arguments: any[]): any,
		reverseArgs(userFn: (...arguments: any[]) => any): (...arguments: any[]) => any,
		rpartial(userFn: (...arguments: any[]) => any): any,
		rpartial(userFn: (...arguments: any[]) => any, ...arguments: any[]): any,
		splitPartial(
		userFn: (...arguments: any[]) => any, leftArgs: any[], rightArgs: any[]
	): (...arguments: any[]) => any
	}

	declare interface JfpStatic {
		contains(value: any, list: any[]): boolean,
		equal(valuea: any, valueb: any): boolean,
		every(predicate: (value: any) => boolean, list: any[]): boolean,
		isEmptyString(value: any): boolean,
		isNull(value: any): boolean,
		isType(type: string, value: any): boolean,
		isArray(value: any): boolean,
		isBoolean(value: any): boolean,
		isFunction(value: any): boolean,
		isNumber(value: any): boolean,
		isObject(value: any): boolean,
		isString(value: any): boolean,
		isUndefined(value: any): boolean,
		isTuple(value: any): boolean,
		isPair(value: any): boolean,
		isSingle(value: any): boolean,
		isTriple(value: any): boolean,
		hasFirst(value: any): boolean,
		isNumeric(value: any): boolean,
		isPrimitive(value: any): boolean,
		isTruthy(value: any): boolean,
		not(value: boolean): boolean
	}

	declare interface JfpStatic {
		clone(value: any): any,
		clone(value: any, depth: number): any,
		compose(...arguments: ((...arguments: any[]) => any)[]): (...arguments: any[]) => any,
		curry(
		fn: (...arguments: any[]) => any, ...arguments: any[]
	): (...arguments: any[]) => any,
		eitherType(type: string, defaultValue: any, value: any): any,
		maybeType(type: string, value: any): any,
		partialReverse(
		fn: (...arguments: any[]) => any, ...arguments: any[]
	): (...arguments: any[]) => any,
		pipeline(value: any, ...arguments: ((...arguments: any[]) => any)[]): any,
		rcompose(...arguments: ((...arguments: any[]) => any)[]): (...arguments: any[]) => any,
		recur(fn: (...arguments: any[]) => any): any,
		repeat(count: number, action: (...arguments: any[]) => any): any,
		times(count: number, value: string): string
	}

	declare interface JfpStatic {
		toDec(value: any): number
	}

	declare interface JfpStatic {
		add(a: number, b: number): number,
		divide(numerator: number, denominator: number): number,
		fac(n: number): number,
		inc(value: number): number,
		max(a: number, b: number): number,
		min(a: number, b: number): number,
		mod(a: number, b: number): number,
		modulo(a: number, b: number): number,
		multiply(a: number, b: number): number,
		range(end: number): number[],
		range(start: number, end: number): number[],
		subtract(a: number, b: number): number,
		truncate(value: number): number
	}

	declare interface JfpStatic {
		isNegative(value: number): boolean,
		isPositive(value: number): boolean,
		isZero(value: number): boolean,
		between(bounds: number[], value: number): boolean,
		isEven(value: number): boolean,
		isInt(value: number): boolean,
		isMultipleOf(base: number, value: number): boolean,
		isNonNegative(value: number): boolean,
		isNonPositive(value: number): boolean,
		isNonZero(value: number): boolean,
		isOdd(value: number): boolean,
		geq(a: number, b: number): boolean,
		greater(a: number, b: number): boolean,
		leq(a: number, b: number): boolean,
		less(a: number, b: number): boolean
	}

	declare interface JfpStatic {
		getKeys(dataset: {
		
	}): string[],
		merge(left: {
		
	}, right: {
		
	}): {
		
	},
		pick(key: string, dataset: {
		
	}): any
	}

	declare interface JfpStatic {
		deref(key: string, dataset: {
		
	}): any,
		pluck(key: string, dataset: {
		
	}): {
		
	},
		pluckKeys(keys: string[], dataset: {
		
	}): {
		
	},
		toValues(dataset: {
		
	}): any[],
		transform(transformation: string[][], dataset: {
		
	}): {
		
	}
	}

	declare interface JfpStatic {
		and(a: boolean, b: boolean, ...arguments: boolean[]): boolean,
		or(a: boolean, b: boolean, ...arguments: boolean[]): boolean,
		xor(a: boolean, b: boolean): boolean,
		composePredicate(
		...arguments: ((...arguments: any[]) => boolean)[]
	): (...arguments: any[]) => boolean
	}

			
}