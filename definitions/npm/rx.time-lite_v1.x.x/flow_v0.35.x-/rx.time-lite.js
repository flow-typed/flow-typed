

declare module 'rx.time-lite' {
					
}

declare module 'npm$namespace$Rx' {
		declare export interface TimeInterval<T> {
		value: T,
		interval: number
	}

	declare export interface Timestamp<T> {
		value: T,
		timestamp: number
	}

	declare export interface Observable<T> {
		delay(dueTime: Date, scheduler?: IScheduler): Observable<T>,
		delay(dueTime: number, scheduler?: IScheduler): Observable<T>,
		debounce(dueTime: number, scheduler?: IScheduler): Observable<T>,
		throttleWithTimeout(dueTime: number, scheduler?: IScheduler): Observable<T>,
		throttle(dueTime: number, scheduler?: IScheduler): Observable<T>,
		timeInterval(scheduler?: IScheduler): Observable<TimeInterval<T>>,
		timestamp(scheduler?: IScheduler): Observable<Timestamp<T>>,
		sample(interval: number, scheduler?: IScheduler): Observable<T>,
		sample<TSample>(sampler: Observable<TSample>, scheduler?: IScheduler): Observable<T>,
		timeout(dueTime: Date, other?: Observable<T>, scheduler?: IScheduler): Observable<T>,
		timeout(dueTime: number, other?: Observable<T>, scheduler?: IScheduler): Observable<T>
	}

	declare interface ObservableStatic {
		interval(period: number, scheduler?: IScheduler): Observable<number>,
		interval(dutTime: number, period: number, scheduler?: IScheduler): Observable<number>,
		timer(dueTime: number, period: number, scheduler?: IScheduler): Observable<number>,
		timer(dueTime: number, scheduler?: IScheduler): Observable<number>
	}

			
}