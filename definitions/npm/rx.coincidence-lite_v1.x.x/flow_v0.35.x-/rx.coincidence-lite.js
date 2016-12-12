

declare module 'rx.coincidence-lite' {
					
}

declare module 'npm$namespace$Rx' {
		declare interface Observable<T> {
		pairwise(): Observable<T[]>,
		partition(
		predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any
	): Observable<T>[]
	}

			
}