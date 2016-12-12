

declare module 'rx.testing' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Rx' {
		declare export interface TestScheduler {
		createColdObservable<T>(...records: Recorded[]): Observable<T>,
		createHotObservable<T>(...records: Recorded[]): Observable<T>,
		createObserver<T>(): MockObserver<T>,
		startWithTiming<T>(
		create: () => Observable<T>, createdAt: number, subscribedAt: number, disposedAt: number
	): MockObserver<T>,
		startWithDispose<T>(create: () => Observable<T>, disposedAt: number): MockObserver<T>,
		startWithCreate<T>(create: () => Observable<T>): MockObserver<T>
	}

	declare export interface MockObserver<T> {
		messages: Recorded[]
	}

	declare interface MockObserverStatic {
		new <T>(scheduler: IScheduler): MockObserver<T>
	}

		declare export class Recorded  {
		constructor(time: number, value: any, equalityComparer?: (x: any, y: any) => boolean): this;
		equals(other: Recorded): boolean;
		toString(): string;
		time: number;
		value: any
	}

	declare export class Subscription  {
		constructor(subscribeAt: number, unsubscribeAt?: number): this;
		equals(other: Subscription): boolean
	}

	
}