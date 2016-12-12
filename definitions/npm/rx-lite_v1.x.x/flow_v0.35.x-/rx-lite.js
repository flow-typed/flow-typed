

declare module 'rx-lite' {
					
}

declare module 'internals' {
			declare function isEqual(left: any, right: any): boolean

	declare function addRef<T>(xs: Observable<T>, r: {
		getDisposable(): IDisposable
	}): Observable<T>

	declare export class PriorityQueue<TTime>  {
		constructor(capacity: number): this;
		length: number;
		isHigherPriority(left: number, right: number): boolean;
		percolate(index: number): void;
		heapify(index: number): void;
		peek(): ScheduledItem<TTime>;
		removeAt(index: number): void;
		dequeue(): ScheduledItem<TTime>;
		enqueue(item: ScheduledItem<TTime>): void;
		remove(item: ScheduledItem<TTime>): boolean;
		count: number
	}

	declare export class ScheduledItem<TTime>  {
		constructor(scheduler: IScheduler, state: any, action: (scheduler: IScheduler, state: any) => IDisposable, dueTime: TTime, comparer?: (x: TTime, y: TTime) => number): this;
		scheduler: IScheduler;
		state: TTime;
		action: (scheduler: IScheduler, state: any) => IDisposable;
		dueTime: TTime;
		comparer: (x: TTime, y: TTime) => number;
		disposable: SingleAssignmentDisposable;
		invoke(): void;
		compareTo(other: ScheduledItem<TTime>): number;
		isCancelled(): boolean;
		invokeCore(): IDisposable
	}

	
}

declare module 'helpers' {
			declare function noop(): void

	declare function notDefined(value: any): boolean

	declare function identity<T>(value: T): T

	declare function defaultNow(): number

	declare function defaultComparer(left: any, right: any): boolean

	declare function defaultSubComparer(left: any, right: any): number

	declare function defaultKeySerializer(key: any): string

	declare function defaultError(err: any): void

	declare function isPromise(p: any): boolean

	declare function asArray<T>(...args: T[]): T[]

	declare function not(value: any): boolean

	declare function isFunction(value: any): boolean

		
}

declare module 'npm$namespace$Rx' {
		declare export interface IDisposable {
		dispose(): void
	}

	declare export interface IScheduler {
		now(): number,
		isScheduler(value: any): boolean,
		schedule(action: () => void): IDisposable,
		scheduleWithState<TState>(
		state: TState, action: (scheduler: IScheduler, state: TState) => IDisposable
	): IDisposable,
		scheduleWithAbsolute(dueTime: number, action: () => void): IDisposable,
		scheduleWithAbsoluteAndState<TState>(
		state: TState, dueTime: number, action: (scheduler: IScheduler, state: TState) => IDisposable
	): IDisposable,
		scheduleWithRelative(dueTime: number, action: () => void): IDisposable,
		scheduleWithRelativeAndState<TState>(
		state: TState, dueTime: number, action: (scheduler: IScheduler, state: TState) => IDisposable
	): IDisposable,
		scheduleRecursive(action: (action: () => void) => void): IDisposable,
		scheduleRecursiveWithState<TState>(
		state: TState, action: (state: TState, action: (state: TState) => void) => void
	): IDisposable,
		scheduleRecursiveWithAbsolute(
		dueTime: number, action: (action: (dueTime: number) => void) => void
	): IDisposable,
		scheduleRecursiveWithAbsoluteAndState<TState>(
		state: TState, dueTime: number, action: (state: TState, action: (state: TState, dueTime: number) => void) => void
	): IDisposable,
		scheduleRecursiveWithRelative(
		dueTime: number, action: (action: (dueTime: number) => void) => void
	): IDisposable,
		scheduleRecursiveWithRelativeAndState<TState>(
		state: TState, dueTime: number, action: (state: TState, action: (state: TState, dueTime: number) => void) => void
	): IDisposable,
		schedulePeriodic(period: number, action: () => void): IDisposable,
		schedulePeriodicWithState<TState>(
		state: TState, period: number, action: (state: TState) => TState
	): IDisposable
	}

	declare export interface Scheduler {
		
	}

	declare export interface SchedulerStatic {
		new (
		now: () => number, schedule: (
		state: any, action: (scheduler: IScheduler, state: any) => IDisposable
	) => IDisposable, scheduleRelative: (
		state: any, dueTime: number, action: (scheduler: IScheduler, state: any) => IDisposable
	) => IDisposable, scheduleAbsolute: (
		state: any, dueTime: number, action: (scheduler: IScheduler, state: any) => IDisposable
	) => IDisposable
	): Scheduler,
		normalize(timeSpan: number): number,
		immediate: IScheduler,
		currentThread: ICurrentThreadScheduler,
		default: IScheduler,
		timeout: IScheduler
	}

	declare interface ICurrentThreadScheduler {
		scheduleRequired(): boolean
	}

	declare export interface IPromise<T> {
		then<R>(
		onFulfilled: (value: T) => IPromise<R>, onRejected: (reason: any) => IPromise<R>
	): IPromise<R>,
		then<R>(
		onFulfilled: (value: T) => IPromise<R>, onRejected?: (reason: any) => R
	): IPromise<R>,
		then<R>(
		onFulfilled: (value: T) => R, onRejected: (reason: any) => IPromise<R>
	): IPromise<R>,
		then<R>(onFulfilled?: (value: T) => R, onRejected?: (reason: any) => R): IPromise<R>
	}

	declare export interface IObserver<T> {
		onNext(value: T): void,
		onError(exception: any): void,
		onCompleted(): void
	}

	declare export interface Observer<T> {
		toNotifier(): (notification: Notification<T>) => void,
		asObserver(): Observer<T>
	}

	declare interface ObserverStatic {
		create<T>(
		onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void
	): Observer<T>,
		fromNotifier<T>(
		handler: (notification: Notification<T>, thisArg?: any) => void
	): Observer<T>
	}

	declare export interface IObservable<T> {
		subscribe(observer: Observer<T>): IDisposable,
		subscribe(
		onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void
	): IDisposable,
		subscribeOnNext(onNext: (value: T) => void, thisArg?: any): IDisposable,
		subscribeOnError(onError: (exception: any) => void, thisArg?: any): IDisposable,
		subscribeOnCompleted(onCompleted: () => void, thisArg?: any): IDisposable
	}

	declare export interface Observable<T> {
		forEach(
		onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void
	): IDisposable,
		toArray(): Observable<T[]>,
		catch(handler: (exception: any) => Observable<T>): Observable<T>,
		catchException(handler: (exception: any) => Observable<T>): Observable<T>,
		catch(handler: (exception: any) => IPromise<T>): Observable<T>,
		catchException(handler: (exception: any) => IPromise<T>): Observable<T>,
		catch(second: Observable<T>): Observable<T>,
		catchException(second: Observable<T>): Observable<T>,
		combineLatest<T2>(second: Observable<T2> | IPromise<T2>): Observable<[T, T2]>,
		combineLatest<T2, TResult>(
		second: Observable<T2> | IPromise<T2>, resultSelector: (v1: T, v2: T2) => TResult
	): Observable<TResult>,
		combineLatest<T2, T3>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>
	): Observable<[T, T2, T3]>,
		combineLatest<T2, T3, TResult>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult
	): Observable<TResult>,
		combineLatest<T2, T3, T4>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>
	): Observable<[T, T2, T3, T4]>,
		combineLatest<T2, T3, T4, TResult>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult
	): Observable<TResult>,
		combineLatest<T2, T3, T4, T5>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>
	): Observable<[T, T2, T3, T4, T5]>,
		combineLatest<T2, T3, T4, T5, TResult>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult
	): Observable<TResult>,
		combineLatest<TOther, TResult>(
		souces: (Observable<TOther> | IPromise<TOther>)[], resultSelector: (firstValue: T, ...otherValues: TOther[]) => TResult
	): Observable<TResult>,
		withLatestFrom<T2>(second: Observable<T2> | IPromise<T2>): Observable<[T, T2]>,
		withLatestFrom<T2, TResult>(
		second: Observable<T2> | IPromise<T2>, resultSelector: (v1: T, v2: T2) => TResult
	): Observable<TResult>,
		withLatestFrom<T2, T3>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>
	): Observable<[T, T2, T3]>,
		withLatestFrom<T2, T3, TResult>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult
	): Observable<TResult>,
		withLatestFrom<T2, T3, T4>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>
	): Observable<[T, T2, T3, T4]>,
		withLatestFrom<T2, T3, T4, TResult>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult
	): Observable<TResult>,
		withLatestFrom<T2, T3, T4, T5>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>
	): Observable<[T, T2, T3, T4, T5]>,
		withLatestFrom<T2, T3, T4, T5, TResult>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult
	): Observable<TResult>,
		withLatestFrom<TOther, TResult>(
		souces: (Observable<TOther> | IPromise<TOther>)[], resultSelector: (firstValue: T, ...otherValues: TOther[]) => TResult
	): Observable<TResult>,
		concat(...sources: (Observable<T> | IPromise<T>)[]): Observable<T>,
		concat(sources: (Observable<T> | IPromise<T>)[]): Observable<T>,
		concatAll(): Observable<T>,
		concatObservable(): Observable<T>,
		concatMap<T2, R>(
		selector: (value: T, index: number) => Observable<T2>, resultSelector: (value1: T, value2: T2, index: number) => R
	): Observable<R>,
		concatMap<T2, R>(
		selector: (value: T, index: number) => IPromise<T2>, resultSelector: (value1: T, value2: T2, index: number) => R
	): Observable<R>,
		concatMap<R>(selector: (value: T, index: number) => Observable<R>): Observable<R>,
		concatMap<R>(selector: (value: T, index: number) => IPromise<R>): Observable<R>,
		concatMap<R>(selector: (value: T, index: number) => R[]): Observable<R>,
		concatMap<R>(sequence: Observable<R>): Observable<R>,
		concatMap<R>(sequence: R[]): Observable<R>,
		merge(maxConcurrent: number): T,
		merge(other: Observable<T>): Observable<T>,
		merge(other: IPromise<T>): Observable<T>,
		mergeAll(): Observable<T>,
		mergeObservable(): Observable<T>,
		skipUntil<T2>(other: Observable<T2>): Observable<T>,
		skipUntil<T2>(other: IPromise<T2>): Observable<T>,
		switch(): T,
		switchLatest(): T,
		takeUntil<T2>(other: Observable<T2>): Observable<T>,
		takeUntil<T2>(other: IPromise<T2>): Observable<T>,
		zip<T2>(second: Observable<T2> | IPromise<T2>): Observable<[T, T2]>,
		zip<T2, TResult>(
		second: Observable<T2> | IPromise<T2>, resultSelector: (v1: T, v2: T2) => TResult
	): Observable<TResult>,
		zip<T2, T3>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>
	): Observable<[T, T2, T3]>,
		zip<T2, T3, TResult>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult
	): Observable<TResult>,
		zip<T2, T3, T4>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>
	): Observable<[T, T2, T3, T4]>,
		zip<T2, T3, T4, TResult>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult
	): Observable<TResult>,
		zip<T2, T3, T4, T5>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>
	): Observable<[T, T2, T3, T4, T5]>,
		zip<T2, T3, T4, T5, TResult>(
		second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult
	): Observable<TResult>,
		zip<TOther, TResult>(
		second: (Observable<TOther> | IPromise<TOther>)[], resultSelector: (left: T, ...right: TOther[]) => TResult
	): Observable<TResult>,
		asObservable(): Observable<T>,
		dematerialize<TOrigin>(): Observable<TOrigin>,
		distinctUntilChanged(skipParameter: boolean, comparer: (x: T, y: T) => boolean): Observable<T>,
		distinctUntilChanged<TValue>(
		keySelector?: (value: T) => TValue, comparer?: (x: TValue, y: TValue) => boolean
	): Observable<T>,
		do(observer: Observer<T>): Observable<T>,
		doAction(observer: Observer<T>): Observable<T>,
		tap(observer: Observer<T>): Observable<T>,
		do(
		onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void
	): Observable<T>,
		doAction(
		onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void
	): Observable<T>,
		tap(
		onNext?: (value: T) => void, onError?: (exception: any) => void, onCompleted?: () => void
	): Observable<T>,
		doOnNext(onNext: (value: T) => void, thisArg?: any): Observable<T>,
		doOnError(onError: (exception: any) => void, thisArg?: any): Observable<T>,
		doOnCompleted(onCompleted: () => void, thisArg?: any): Observable<T>,
		tapOnNext(onNext: (value: T) => void, thisArg?: any): Observable<T>,
		tapOnError(onError: (exception: any) => void, thisArg?: any): Observable<T>,
		tapOnCompleted(onCompleted: () => void, thisArg?: any): Observable<T>,
		finally(action: () => void): Observable<T>,
		finallyAction(action: () => void): Observable<T>,
		ignoreElements(): Observable<T>,
		materialize(): Observable<Notification<T>>,
		repeat(repeatCount?: number): Observable<T>,
		retry(retryCount?: number): Observable<T>,
		retryWhen<TError>(
		notifier: (errors: Observable<TError>) => Observable<any>
	): Observable<T>,
		scan<TAcc>(
		accumulator: (acc: TAcc, value: T, index?: number, source?: Observable<TAcc>) => TAcc, seed: TAcc
	): Observable<TAcc>,
		scan(
		accumulator: (acc: T, value: T, index?: number, source?: Observable<T>) => T
	): Observable<T>,
		skipLast(count: number): Observable<T>,
		startWith(...values: T[]): Observable<T>,
		startWith(scheduler: IScheduler, ...values: T[]): Observable<T>,
		takeLast(count: number): Observable<T>,
		takeLastBuffer(count: number): Observable<T[]>,
		select<TResult>(
		selector: (value: T, index: number, source: Observable<T>) => TResult, thisArg?: any
	): Observable<TResult>,
		map<TResult>(
		selector: (value: T, index: number, source: Observable<T>) => TResult, thisArg?: any
	): Observable<TResult>,
		pluck<TResult>(prop: string): Observable<TResult>,
		selectMany<TOther, TResult>(
		selector: (value: T) => Observable<TOther>, resultSelector: (item: T, other: TOther) => TResult
	): Observable<TResult>,
		selectMany<TOther, TResult>(
		selector: (value: T) => IPromise<TOther>, resultSelector: (item: T, other: TOther) => TResult
	): Observable<TResult>,
		selectMany<TResult>(selector: (value: T) => Observable<TResult>): Observable<TResult>,
		selectMany<TResult>(selector: (value: T) => IPromise<TResult>): Observable<TResult>,
		selectMany<TResult>(other: Observable<TResult>): Observable<TResult>,
		selectMany<TResult>(other: IPromise<TResult>): Observable<TResult>,
		selectMany<TResult>(selector: (value: T) => TResult[]): Observable<TResult>,
		flatMap<TOther, TResult>(
		selector: (value: T) => Observable<TOther>, resultSelector: (item: T, other: TOther) => TResult
	): Observable<TResult>,
		flatMap<TOther, TResult>(
		selector: (value: T) => IPromise<TOther>, resultSelector: (item: T, other: TOther) => TResult
	): Observable<TResult>,
		flatMap<TResult>(selector: (value: T) => Observable<TResult>): Observable<TResult>,
		flatMap<TResult>(selector: (value: T) => IPromise<TResult>): Observable<TResult>,
		flatMap<TResult>(other: Observable<TResult>): Observable<TResult>,
		flatMap<TResult>(other: IPromise<TResult>): Observable<TResult>,
		flatMap<TResult>(selector: (value: T) => TResult[]): Observable<TResult>,
		selectManyObserver<T2, T3, T4>(
		onNext: (value: T, index: number) => Observable<T2>, onError: (exception: any) => Observable<T3>, onCompleted: () => Observable<T4>, thisArg?: any
	): Observable<T2 | T3 | T4>,
		flatMapObserver<T2, T3, T4>(
		onNext: (value: T, index: number) => Observable<T2>, onError: (exception: any) => Observable<T3>, onCompleted: () => Observable<T4>, thisArg?: any
	): Observable<T2 | T3 | T4>,
		selectConcat<T2, R>(
		selector: (value: T, index: number) => Observable<T2>, resultSelector: (value1: T, value2: T2, index: number) => R
	): Observable<R>,
		selectConcat<T2, R>(
		selector: (value: T, index: number) => IPromise<T2>, resultSelector: (value1: T, value2: T2, index: number) => R
	): Observable<R>,
		selectConcat<R>(selector: (value: T, index: number) => Observable<R>): Observable<R>,
		selectConcat<R>(selector: (value: T, index: number) => IPromise<R>): Observable<R>,
		selectConcat<R>(sequence: Observable<R>): Observable<R>,
		selectSwitch<TResult>(
		selector: (value: T, index: number, source: Observable<T>) => Observable<TResult>, thisArg?: any
	): Observable<TResult>,
		flatMapLatest<TResult>(
		selector: (value: T, index: number, source: Observable<T>) => Observable<TResult>, thisArg?: any
	): Observable<TResult>,
		switchMap<TResult>(
		selector: (value: T, index: number, source: Observable<T>) => TResult, thisArg?: any
	): Observable<TResult>,
		skip(count: number): Observable<T>,
		skipWhile(
		predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any
	): Observable<T>,
		take(count: number, scheduler?: IScheduler): Observable<T>,
		takeWhile(
		predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any
	): Observable<T>,
		where(
		predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any
	): Observable<T>,
		filter(
		predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any
	): Observable<T>,
		toPromise<TPromise>(
		promiseCtor: {
		new (
		resolver: (
		resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void
	) => void
	): TPromise
	}
	): TPromise,
		toPromise(
		promiseCtor?: {
		new (
		resolver: (
		resolvePromise: (value: T) => void, rejectPromise: (reason: any) => void
	) => void
	): IPromise<T>
	}
	): IPromise<T>,
		exclusive<R>(): Observable<R>,
		exclusiveMap<I, R>(
		selector: (value: I, index: number, source: Observable<I>) => R, thisArg?: any
	): Observable<R>
	}

	declare interface ObservableStatic {
		create<T>(subscribe: (observer: Observer<T>) => IDisposable): Observable<T>,
		create<T>(subscribe: (observer: Observer<T>) => () => void): Observable<T>,
		create<T>(subscribe: (observer: Observer<T>) => void): Observable<T>,
		createWithDisposable<T>(subscribe: (observer: Observer<T>) => IDisposable): Observable<T>,
		defer<T>(observableFactory: () => Observable<T>): Observable<T>,
		defer<T>(observableFactory: () => IPromise<T>): Observable<T>,
		empty<T>(scheduler?: IScheduler): Observable<T>,
		from<T, TResult>(
		array: T[], mapFn: (value: T, index: number) => TResult, thisArg?: any, scheduler?: IScheduler
	): Observable<TResult>,
		from<T>(
		array: T[], mapFn?: (value: T, index: number) => T, thisArg?: any, scheduler?: IScheduler
	): Observable<T>,
		from<T, TResult>(
		array: {
		length: number,
		[index: number]: T
	}, mapFn: (value: T, index: number) => TResult, thisArg?: any, scheduler?: IScheduler
	): Observable<TResult>,
		from<T>(
		array: {
		length: number,
		[index: number]: T
	}, mapFn?: (value: T, index: number) => T, thisArg?: any, scheduler?: IScheduler
	): Observable<T>,
		from<T>(
		iterable: any, mapFn?: (value: any, index: number) => T, thisArg?: any, scheduler?: IScheduler
	): Observable<T>,
		fromArray<T>(array: T[], scheduler?: IScheduler): Observable<T>,
		fromArray<T>(
		array: {
		length: number,
		[index: number]: T
	}, scheduler?: IScheduler
	): Observable<T>,
		generate<TState, TResult>(
		initialState: TState, condition: (state: TState) => boolean, iterate: (state: TState) => TState, resultSelector: (state: TState) => TResult, scheduler?: IScheduler
	): Observable<TResult>,
		never<T>(): Observable<T>,
		of<T>(...values: T[]): Observable<T>,
		ofWithScheduler<T>(scheduler?: IScheduler, ...values: T[]): Observable<T>,
		range(start: number, count: number, scheduler?: IScheduler): Observable<number>,
		repeat<T>(value: T, repeatCount?: number, scheduler?: IScheduler): Observable<T>,
		return<T>(value: T, scheduler?: IScheduler): Observable<T>,
		just<T>(value: T, scheduler?: IScheduler): Observable<T>,
		returnValue<T>(value: T, scheduler?: IScheduler): Observable<T>,
		throw<T>(exception: Error, scheduler?: IScheduler): Observable<T>,
		throw<T>(exception: any, scheduler?: IScheduler): Observable<T>,
		throwException<T>(exception: Error, scheduler?: IScheduler): Observable<T>,
		throwException<T>(exception: any, scheduler?: IScheduler): Observable<T>,
		throwError<T>(error: Error, scheduler?: IScheduler): Observable<T>,
		throwError<T>(error: any, scheduler?: IScheduler): Observable<T>,
		catch<T>(sources: Observable<T>[]): Observable<T>,
		catch<T>(sources: IPromise<T>[]): Observable<T>,
		catchException<T>(sources: Observable<T>[]): Observable<T>,
		catchException<T>(sources: IPromise<T>[]): Observable<T>,
		catchError<T>(sources: Observable<T>[]): Observable<T>,
		catchError<T>(sources: IPromise<T>[]): Observable<T>,
		catch<T>(...sources: Observable<T>[]): Observable<T>,
		catch<T>(...sources: IPromise<T>[]): Observable<T>,
		catchException<T>(...sources: Observable<T>[]): Observable<T>,
		catchException<T>(...sources: IPromise<T>[]): Observable<T>,
		catchError<T>(...sources: Observable<T>[]): Observable<T>,
		catchError<T>(...sources: IPromise<T>[]): Observable<T>,
		combineLatest<T, T2>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>
	): Observable<[T, T2]>,
		combineLatest<T, T2, TResult>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, resultSelector: (v1: T, v2: T2) => TResult
	): Observable<TResult>,
		combineLatest<T, T2, T3>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>
	): Observable<[T, T2, T3]>,
		combineLatest<T, T2, T3, TResult>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult
	): Observable<TResult>,
		combineLatest<T, T2, T3, T4>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>
	): Observable<[T, T2, T3, T4]>,
		combineLatest<T, T2, T3, T4, TResult>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult
	): Observable<TResult>,
		combineLatest<T, T2, T3, T4, T5>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>
	): Observable<[T, T2, T3, T4, T5]>,
		combineLatest<T, T2, T3, T4, T5, TResult>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult
	): Observable<TResult>,
		combineLatest<T>(sources: (Observable<T> | IPromise<T>)[]): Observable<T[]>,
		combineLatest<TOther, TResult>(
		sources: (Observable<TOther> | IPromise<TOther>)[], resultSelector: (...otherValues: TOther[]) => TResult
	): Observable<TResult>,
		withLatestFrom<T, T2>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>
	): Observable<[T, T2]>,
		withLatestFrom<T, T2, TResult>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, resultSelector: (v1: T, v2: T2) => TResult
	): Observable<TResult>,
		withLatestFrom<T, T2, T3>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>
	): Observable<[T, T2, T3]>,
		withLatestFrom<T, T2, T3, TResult>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, resultSelector: (v1: T, v2: T2, v3: T3) => TResult
	): Observable<TResult>,
		withLatestFrom<T, T2, T3, T4>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>
	): Observable<[T, T2, T3, T4]>,
		withLatestFrom<T, T2, T3, T4, TResult>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4) => TResult
	): Observable<TResult>,
		withLatestFrom<T, T2, T3, T4, T5>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>
	): Observable<[T, T2, T3, T4, T5]>,
		withLatestFrom<T, T2, T3, T4, T5, TResult>(
		first: Observable<T> | IPromise<T>, second: Observable<T2> | IPromise<T2>, third: Observable<T3> | IPromise<T3>, fourth: Observable<T4> | IPromise<T4>, fifth: Observable<T5> | IPromise<T5>, resultSelector: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => TResult
	): Observable<TResult>,
		withLatestFrom<TOther, TResult>(
		souces: (Observable<TOther> | IPromise<TOther>)[], resultSelector: (...otherValues: TOther[]) => TResult
	): Observable<TResult>,
		concat<T>(...sources: Observable<T>[]): Observable<T>,
		concat<T>(...sources: IPromise<T>[]): Observable<T>,
		concat<T>(sources: Observable<T>[]): Observable<T>,
		concat<T>(sources: IPromise<T>[]): Observable<T>,
		merge<T>(...sources: Observable<T>[]): Observable<T>,
		merge<T>(...sources: IPromise<T>[]): Observable<T>,
		merge<T>(sources: Observable<T>[]): Observable<T>,
		merge<T>(sources: IPromise<T>[]): Observable<T>,
		merge<T>(scheduler: IScheduler, ...sources: Observable<T>[]): Observable<T>,
		merge<T>(scheduler: IScheduler, ...sources: IPromise<T>[]): Observable<T>,
		merge<T>(scheduler: IScheduler, sources: Observable<T>[]): Observable<T>,
		merge<T>(scheduler: IScheduler, sources: IPromise<T>[]): Observable<T>,
		pairs<T>(
		obj: {
		[key: string]: T
	}, scheduler?: IScheduler
	): Observable<[string, T]>,
		zip<T1, T2>(
		first: Observable<T1> | IPromise<T1>, sources: (Observable<T2> | IPromise<T2>)[]
	): Observable<[T1, T2]>,
		zip<T1, T2, TResult>(
		first: Observable<T1> | IPromise<T1>, sources: (Observable<T2> | IPromise<T2>)[], resultSelector: (item1: T1, ...right: T2[]) => TResult
	): Observable<TResult>,
		zip<T1, T2>(
		source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>
	): Observable<[T1, T2]>,
		zip<T1, T2, TResult>(
		source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, resultSelector: (item1: T1, item2: T2) => TResult
	): Observable<TResult>,
		zip<T1, T2, T3>(
		source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, source3: Observable<T3> | IPromise<T3>
	): Observable<[T1, T2, T3]>,
		zip<T1, T2, T3, TResult>(
		source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, source3: Observable<T3> | IPromise<T3>, resultSelector: (item1: T1, item2: T2, item3: T3) => TResult
	): Observable<TResult>,
		zip<T1, T2, T3, T4>(
		source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, source3: Observable<T3> | IPromise<T3>, source4: Observable<T4> | IPromise<T4>
	): Observable<[T1, T2, T3, T4]>,
		zip<T1, T2, T3, T4, TResult>(
		source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, source3: Observable<T3> | IPromise<T3>, source4: Observable<T4> | IPromise<T4>, resultSelector: (item1: T1, item2: T2, item3: T3, item4: T4) => TResult
	): Observable<TResult>,
		zip<T1, T2, T3, T4, T5>(
		source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, source3: Observable<T3> | IPromise<T3>, source4: Observable<T4> | IPromise<T4>, source5: Observable<T5> | IPromise<T5>
	): Observable<[T1, T2, T3, T4, T5]>,
		zip<T1, T2, T3, T4, T5, TResult>(
		source1: Observable<T1> | IPromise<T1>, source2: Observable<T2> | IPromise<T2>, source3: Observable<T3> | IPromise<T3>, source4: Observable<T4> | IPromise<T4>, source5: Observable<T5> | IPromise<T5>, resultSelector: (item1: T1, item2: T2, item3: T3, item4: T4, item5: T5) => TResult
	): Observable<TResult>,
		zipArray<T>(...sources: (Observable<T> | IPromise<T>)[]): Observable<T[]>,
		zipArray<T>(sources: (Observable<T> | IPromise<T>)[]): Observable<T[]>,
		fromPromise<T>(promise: IPromise<T>): Observable<T>,
		prototype: any
	}

	declare interface ISubject<T> {
		hasObservers(): boolean
	}

	declare export interface Subject<T> {
		
	}

	declare interface SubjectStatic {
		new <T>(): Subject<T>,
		create<T>(observer?: Observer<T>, observable?: Observable<T>): ISubject<T>
	}

	declare export interface AsyncSubject<T> {
		
	}

	declare interface AsyncSubjectStatic {
		new <T>(): AsyncSubject<T>
	}

		declare export class CompositeDisposable extends IDisposable {
		constructor(...disposables: IDisposable[]): this;
		constructor(disposables: IDisposable[]): this;
		isDisposed: boolean;
		length: number;
		dispose(): void;
		add(item: IDisposable): void;
		remove(item: IDisposable): boolean;
		toArray(): IDisposable[]
	}

	declare export class Disposable extends IDisposable {
		constructor(action: () => void): this;
		create(action: () => void): IDisposable;
		empty: IDisposable;
		dispose(): void
	}

	declare export class SingleAssignmentDisposable extends IDisposable {
		constructor(): this;
		isDisposed: boolean;
		current: IDisposable;
		dispose(): void;
		getDisposable(): IDisposable;
		setDisposable(value: IDisposable): void
	}

	declare export class SerialDisposable extends SingleAssignmentDisposable {
		constructor(): this
	}

	declare export class RefCountDisposable extends IDisposable {
		constructor(disposable: IDisposable): this;
		dispose(): void;
		isDisposed: boolean;
		getDisposable(): IDisposable
	}

	declare export class Notification<T>  {
		accept(observer: IObserver<T>): void;
		accept<TResult>(
		onNext: (value: T) => TResult, onError?: (exception: any) => TResult, onCompleted?: () => TResult
	): TResult;
		toObservable(scheduler?: IScheduler): Observable<T>;
		hasValue: boolean;
		equals(other: Notification<T>): boolean;
		kind: string;
		value: T;
		exception: any;
		createOnNext<T>(value: T): Notification<T>;
		createOnError<T>(exception: any): Notification<T>;
		createOnCompleted<T>(): Notification<T>
	}

	
}