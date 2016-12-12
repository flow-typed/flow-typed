

declare module 'knockout-transformations' {
		declare interface KnockoutObservableArrayFunctions<T> {
		map<TResult>(
		mapping: KnockoutTransformations.Mapping<T, TResult>
	): KnockoutObservableArray<TResult>,
		map<TResult>(
		mapping: KnockoutTransformations.MappingOption<T, TResult>
	): KnockoutObservableArray<TResult>,
		map<TResult>(
		mapping: KnockoutTransformations.MappingWithDisposeCallbackOption<T, TResult>
	): KnockoutObservableArray<TResult>,
		filter(predicate: (value: T) => boolean): KnockoutObservableArray<T>,
		sortBy(
		sorter: (value: T, descending: (sorter: any) => any) => any
	): KnockoutObservableArray<T>,
		indexBy(indexer: (value: T) => string): KnockoutObservable<{
		[index: string]: T[]
	}>,
		indexBy(
		indexer: (value: T) => string[]
	): KnockoutObservable<{
		[index: string]: T[]
	}>,
		indexBy(indexer: (value: T) => any): KnockoutObservable<any>,
		uniqueIndexBy(indexer: (value: T) => string): KnockoutObservable<{
		[index: string]: T
	}>
	}

			
}

declare module 'npm$namespace$KnockoutTransformations' {
		declare interface Mapping<T, TResult> {
		(value: T): TResult
	}

	declare interface MappingOption<T, TResult> {
		mapping: Mapping<T, TResult>,
		disposeItem?: (item: TResult) => void
	}

	declare interface MappingWithDisposeCallbackOption<T, TResult> {
		mappingWithDisposeCallback: (value: T) => {
		mappedValue: TResult,
		dispose: () => void
	}
	}

			
}