

declare module 'rx.angular' {
					
}

declare module 'npm$namespace$Rx' {
		declare interface IObservable<T> {
		safeApply($scope: ng.IScope, callback: (data: T) => void): Rx.Observable<T>
	}

	declare export interface ScopeScheduler {
		constructor(scope: ng.IScope): ScopeScheduler
	}

	declare export interface ScopeSchedulerStatic {
		new ($scope: angular.IScope): ScopeScheduler
	}

			
}

declare module 'angular' {
		declare export interface IRxScope {
		$toObservable(property: string): Rx.Observable<any>
	}

			
}