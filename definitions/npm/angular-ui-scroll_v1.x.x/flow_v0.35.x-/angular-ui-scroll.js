

declare module 'angular-ui-scroll' {
					
}

declare module 'ui' {
		declare interface IScrollDatasource<T> {
		get(index: number, count: number, success: (results: Array<T>) => any): void
	}

	declare interface IScrollAdapter {
		isLoading: boolean,
		topVisible: any,
		topVisibleElement: ng.IAugmentedJQueryStatic,
		topVisibleScope: ng.IRepeatScope,
		reload(startIndex?: number): void,
		applyUpdates(index: number, newItems: any[]): void,
		applyUpdates(updater: (item: any, scope: ng.IRepeatScope) => any): void,
		append(newItems: any[]): void,
		prepend(newItems: any[]): void
	}

			
}