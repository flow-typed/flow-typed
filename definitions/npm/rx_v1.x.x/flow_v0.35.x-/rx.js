

declare module 'rx' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Rx' {
		declare export interface IScheduler {
		catch(handler: (exception: any) => boolean): IScheduler,
		catchException(handler: (exception: any) => boolean): IScheduler
	}

	declare export interface Observer<T> {
		checked(): Observer<any>
	}

	declare interface ObserverStatic {
		notifyOn<T>(scheduler: IScheduler): Observer<T>
	}

	declare export interface Observable<T> {
		observeOn(scheduler: IScheduler): Observable<T>,
		subscribeOn(scheduler: IScheduler): Observable<T>,
		amb(rightSource: Observable<T>): Observable<T>,
		amb(rightSource: IPromise<T>): Observable<T>,
		onErrorResumeNext(second: Observable<T>): Observable<T>,
		onErrorResumeNext(second: IPromise<T>): Observable<T>,
		bufferWithCount(count: number, skip?: number): Observable<T[]>,
		windowWithCount(count: number, skip?: number): Observable<Observable<T>>,
		defaultIfEmpty(defaultValue?: T): Observable<T>,
		distinct(skipParameter: boolean, valueSerializer: (value: T) => string): Observable<T>,
		distinct<TKey>(
		keySelector?: (value: T) => TKey, keySerializer?: (key: TKey) => string
	): Observable<T>,
		groupBy<TKey, TElement>(
		keySelector: (value: T) => TKey, skipElementSelector?: boolean, keySerializer?: (key: TKey) => string
	): Observable<GroupedObservable<TKey, T>>,
		groupBy<TKey, TElement>(
		keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement, keySerializer?: (key: TKey) => string
	): Observable<GroupedObservable<TKey, TElement>>,
		groupByUntil<TKey, TDuration>(
		keySelector: (value: T) => TKey, skipElementSelector: boolean, durationSelector: (group: GroupedObservable<TKey, T>) => Observable<TDuration>, keySerializer?: (key: TKey) => string
	): Observable<GroupedObservable<TKey, T>>,
		groupByUntil<TKey, TElement, TDuration>(
		keySelector: (value: T) => TKey, elementSelector: (value: T) => TElement, durationSelector: (group: GroupedObservable<TKey, TElement>) => Observable<TDuration>, keySerializer?: (key: TKey) => string
	): Observable<GroupedObservable<TKey, TElement>>
	}

	declare interface ObservableStatic {
		using<TSource, TResource>(
		resourceFactory: () => TResource, observableFactory: (resource: TResource) => Observable<TSource>
	): Observable<TSource>,
		amb<T>(...sources: Observable<T>[]): Observable<T>,
		amb<T>(...sources: IPromise<T>[]): Observable<T>,
		amb<T>(sources: Observable<T>[]): Observable<T>,
		amb<T>(sources: IPromise<T>[]): Observable<T>,
		onErrorResumeNext<T>(...sources: Observable<T>[]): Observable<T>,
		onErrorResumeNext<T>(...sources: IPromise<T>[]): Observable<T>,
		onErrorResumeNext<T>(sources: Observable<T>[]): Observable<T>,
		onErrorResumeNext<T>(sources: IPromise<T>[]): Observable<T>
	}

	declare interface GroupedObservable<TKey, TElement> {
		key: TKey,
		underlyingObservable: Observable<TElement>
	}

			
}