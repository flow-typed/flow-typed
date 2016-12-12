

declare module 'rx.binding-lite' {
					
}

declare module 'npm$namespace$Rx' {
		declare export interface BehaviorSubject<T> {
		getValue(): T
	}

	declare interface BehaviorSubjectStatic {
		new <T>(initialValue: T): BehaviorSubject<T>
	}

	declare export interface ReplaySubject<T> {
		
	}

	declare interface ReplaySubjectStatic {
		new <T>(
		bufferSize?: number, window?: number, scheduler?: IScheduler
	): ReplaySubject<T>
	}

	declare interface ConnectableObservable<T> {
		connect(): IDisposable,
		refCount(): Observable<T>
	}

	declare interface ConnectableObservableStatic {
		new <T>(): ConnectableObservable<T>
	}

	declare export interface Observable<T> {
		multicast(subject: Observable<T>): ConnectableObservable<T>,
		multicast<TResult>(
		subjectSelector: () => ISubject<T>, selector: (source: ConnectableObservable<T>) => Observable<T>
	): Observable<T>,
		publish(): ConnectableObservable<T>,
		publish<TResult>(
		selector: (source: ConnectableObservable<T>) => Observable<TResult>
	): Observable<TResult>,
		share(): Observable<T>,
		publishLast(): ConnectableObservable<T>,
		publishLast<TResult>(
		selector: (source: ConnectableObservable<T>) => Observable<TResult>
	): Observable<TResult>,
		publishValue(initialValue: T): ConnectableObservable<T>,
		publishValue<TResult>(
		selector: (source: ConnectableObservable<T>) => Observable<TResult>, initialValue: T
	): Observable<TResult>,
		shareValue(initialValue: T): Observable<T>,
		replay(
		selector?: boolean, bufferSize?: number, window?: number, scheduler?: IScheduler
	): ConnectableObservable<T>,
		replay(
		selector: (source: ConnectableObservable<T>) => Observable<T>, bufferSize?: number, window?: number, scheduler?: IScheduler
	): Observable<T>,
		shareReplay(bufferSize?: number, window?: number, scheduler?: IScheduler): Observable<T>
	}

			
}