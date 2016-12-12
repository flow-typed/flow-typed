

declare module 'knockout-paging' {
		declare interface KnockoutStatic {
		paging: KnockoutPagingOptions,
		pagedObservableArray<T>(
		initialValue?: T[], options?: KnockoutPagedOptions
	): KnockoutPagedObservableArray<T>
	}

	declare interface KnockoutPagingOptions {
		defaults: KnockoutPagingDefaultOptions,
		generators: {
		[name: string]: KnockoutPageGenerator,
		sliding: KnockoutSlidingPageGenerator
	}
	}

	declare interface KnockoutPagingDefaultOptions {
		pageNumber: number,
		pageSize: number
	}

	declare interface KnockoutPagedObservableArray<T> {
		pageSize: KnockoutObservable<number>,
		pageNumber: KnockoutObservable<number>,
		pageItems: KnockoutComputed<T[]>,
		pageCount: KnockoutComputed<number>,
		itemCount: KnockoutComputed<number>,
		firstItemOnPage: KnockoutComputed<number>,
		lastItemOnPage: KnockoutComputed<number>,
		hasPreviousPage: KnockoutComputed<boolean>,
		hasNextPage: KnockoutComputed<boolean>,
		isFirstPage: KnockoutComputed<boolean>,
		isLastPage: KnockoutComputed<boolean>,
		pages: KnockoutComputed<number[]>,
		toNextPage(): void,
		toPreviousPage(): void,
		toLastPage(): void,
		toFirstPage(): void
	}

	declare interface KnockoutPagedOptions {
		pageSize?: number,
		pageNumber?: number,
		pageGenerator?: string
	}

	declare interface KnockoutObservableArray<T> {
		extend(requestedExtenders: {
		paged: any
	}): KnockoutPagedObservableArray<T>
	}

	declare interface KnockoutPageGenerator {
		generate<T>(pagedObservable: KnockoutPagedObservableArray<T>): number[]
	}

	declare interface KnockoutSlidingPageGenerator {
		windowSize: KnockoutObservable<number>
	}

	declare interface KnockoutExtenders {
		paged(
		target: KnockoutObservableArray<any>, options: KnockoutPagedOptions
	): KnockoutObservableArray<any>
	}

			
}