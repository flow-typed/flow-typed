

declare module 'fromjs' {
			declare function from<T>(results: Array<T>): FromJS.IQueryable<T>

	declare function from<T>(results: any): FromJS.IQueryable<any>

		
}

declare module 'npm$namespace$FromJS' {
		declare export interface IOrderedQueryable<T> {
		thenBy<TResult>(item: (item: T) => TResult): IOrderedQueryable<T>,
		thenByDesc<TResult>(item: (item: T) => TResult): IOrderedQueryable<T>
	}

	declare export interface IQueryable<T> {
		where(predicate: (item: T) => boolean): IQueryable<T>,
		select<TResult>(item: (item: T) => TResult): IQueryable<TResult>,
		orderByDesc<TResult>(item: (item: T) => TResult): IOrderedQueryable<T>,
		orderBy<TResult>(item: (item: T) => TResult): IOrderedQueryable<T>,
		selectMany<TResult>(item: (item: T) => Array<TResult>): IQueryable<TResult>,
		skip<TResult>(count: Number): IQueryable<TResult>,
		take<TResult>(count: Number): IQueryable<TResult>,
		single(): T,
		single(predicate: (item: T) => boolean): T,
		singleOrDefault(): T,
		singleOrDefault(predicate: (item: T) => boolean): T,
		first(): T,
		last(): T,
		max(): T,
		distinct(): IQueryable<T>,
		count(): number,
		contains(item: T): boolean,
		first(predicate: (item: T) => boolean): T,
		firstOrDefault(): T,
		each(action: (item: T) => void): void,
		each<TKey>(action: (value: T, key: TKey) => void): void,
		each(action: (item: T) => void, a: boolean): void,
		toArray(): Array<T>,
		concat(second: Array<T>): IQueryable<T>,
		sum(): T,
		distinct(): IQueryable<T>,
		any(): boolean,
		any(predicate: (item: T) => boolean): boolean,
		all(predicate: (item: T) => boolean): boolean
	}

			
}