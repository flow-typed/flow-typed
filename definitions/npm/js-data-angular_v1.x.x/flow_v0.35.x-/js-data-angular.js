

declare module 'js-data-angular' {
					
}

declare module 'npm$namespace$JSData' {
		declare interface DSProvider {
		defaults: DSConfiguration
	}

	declare interface DS {
		bindAll<T>(
		resourceName: string, params: DSFilterParams, scope: ng.IScope, expr: string, cb?: (err: DSError, items: Array<T & DSInstanceShorthands<T>>) => void
	): Function,
		bindOne<T>(
		resourceName: string, id: string | number, scope: ng.IScope, expr: string, cb?: (err: DSError, item: T & DSInstanceShorthands<T>) => void
	): Function
	}

	declare interface DSResourceDefinition<T> {
		bindAll(
		params: DSFilterParams, scope: ng.IScope, expr: string, cb?: (err: DSError, items: Array<T & DSInstanceShorthands<T>>) => void
	): Function,
		bindOne(
		id: string | number, scope: ng.IScope, expr: string, cb?: (err: DSError, item: T & DSInstanceShorthands<T>) => void
	): Function
	}

			
}