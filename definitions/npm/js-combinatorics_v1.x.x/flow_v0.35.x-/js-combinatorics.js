

declare module 'js-combinatorics' {
					declare module.exports: undefined


}

declare module 'npm$namespace$___Combinatorics' {
		declare interface IGenerator<T> {
		next(): T,
		forEach(f: (item: T) => void): void,
		map<TResult>(f: (item: T) => TResult): TResult[],
		filter(predicate: (item: T) => boolean): T[],
		toArray(): T[],
		length: number
	}

	declare interface IPredictableGenerator<T> {
		nth(n: number): T
	}

	declare interface ICartesianProductGenerator<T> {
		get(...coordinates: number[]): T
	}

	declare function P(m: number, n: number): number

	declare function C(m: number, n: number): number

	declare function factorial(n: number): number

	declare function factoradic(n: number): number[]

	declare function power<T>(a: T[]): IPredictableGenerator<T[]>

	declare function combination<T>(a: T[], n?: number): IGenerator<T[]>

	declare function permutation<T>(a: T[], n?: number): IGenerator<T[]>

	declare function permutationCombination<T>(a: T[]): IGenerator<T[]>

	declare function baseN<T>(a: T[], n?: number): IPredictableGenerator<T[]>

	declare function cartesianProduct<T1>(a1: T1[]): ICartesianProductGenerator<[T1]>

	declare function cartesianProduct<T1, T2>(a1: T1[], a2: T2[]): ICartesianProductGenerator<[T1, T2]>

	declare function cartesianProduct<T1, T2, T3>(
		a1: T1[], a2: T2[], a3: T3[]
	): ICartesianProductGenerator<[T1, T2, T3]>

	declare function cartesianProduct<T1, T2, T3, T4>(
		a1: T1[], a2: T2[], a3: T3[], a4: T4[]
	): ICartesianProductGenerator<[T1, T2, T3, T4]>

	declare function cartesianProduct<T1, T2, T3, T4, T5>(
		a1: T1[], a2: T2[], a3: T3[], a4: T4[], a5: T5[]
	): ICartesianProductGenerator<[T1, T2, T3, T4, T5]>

	declare function cartesianProduct<T1, T2, T3, T4, T5, T6>(
		a1: T1[], a2: T2[], a3: T3[], a4: T4[], a5: T5[], a6: T6[]
	): ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6]>

	declare function cartesianProduct<T1, T2, T3, T4, T5, T6, T7>(
		a1: T1[], a2: T2[], a3: T3[], a4: T4[], a5: T5[], a6: T6[], a7: T7[]
	): ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6, T7]>

	declare function cartesianProduct<T1, T2, T3, T4, T5, T6, T7, T8>(
		a1: T1[], a2: T2[], a3: T3[], a4: T4[], a5: T5[], a6: T6[], a7: T7[], a8: T8[]
	): ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6, T7, T8]>

	declare function cartesianProduct<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
		a1: T1[], a2: T2[], a3: T3[], a4: T4[], a5: T5[], a6: T6[], a7: T7[], a8: T8[], a9: T9[]
	): ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6, T7, T8, T9]>

	declare function cartesianProduct<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
		a1: T1[], a2: T2[], a3: T3[], a4: T4[], a5: T5[], a6: T6[], a7: T7[], a8: T8[], a9: T9[], a10: T10[]
	): ICartesianProductGenerator<[T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]>

	declare function cartesianProduct(...a: any[][]): ICartesianProductGenerator<any[]>

		
}