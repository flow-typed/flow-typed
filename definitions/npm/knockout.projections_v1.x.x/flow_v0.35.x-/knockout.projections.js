

declare module 'knockout.projections' {
		declare interface KnockoutMappedObservableArray<T> {
		
	}

	declare interface KnockoutObservableArrayFunctions<T> {
		map<TResult>(
		mappingOptions: {
		mappingWithDisposeCallback: (value: T) => {
		mappedValue: TResult,
		dispose: () => void
	}
	}
	): KnockoutMappedObservableArray<TResult>,
		map<TResult>(
		mappingOptions: {
		mapping: (value: T) => TResult,
		disposeItem?: (mappedItem: TResult) => void
	}
	): KnockoutMappedObservableArray<TResult>,
		map<TResult>(
		mappingOptions: (value: T) => TResult
	): KnockoutMappedObservableArray<TResult>,
		filter(predicate: (value: T) => boolean): KnockoutMappedObservableArray<T>
	}

			
}