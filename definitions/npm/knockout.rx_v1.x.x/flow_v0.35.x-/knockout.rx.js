

declare module 'knockout.rx' {
		declare interface KnockoutSubscribableFunctions<T> {
		toObservable(event?: string): Rx.Observable<T>,
		toObservable<TEvent>(event: string): Rx.Observable<TEvent>
	}

	declare interface KnockoutObservableFunctions<T> {
		toObservableWithReplyLatest(): Rx.Observable<T>,
		toSubject(): Rx.ISubject<T>
	}

	declare interface KnockoutComputedFunctions<T> {
		toObservableWithReplyLatest(): Rx.Observable<T>
	}

			
}

declare module 'npm$namespace$Rx' {
		declare interface Observable<T> {
		toKoSubscribable(): KnockoutSubscribable<T>,
		toKoObservable(initialValue?: T): KnockoutObservable<T>
	}

	declare interface Subject<T> {
		toKoObservable(initialValue?: T): KnockoutObservable<T>
	}

			
}