

declare module 'rx.backpressure-lite' {
					
}

declare module 'npm$namespace$Rx' {
		declare export interface Observable<T> {
		pausable(pauser?: Observable<boolean>): PausableObservable<T>,
		pausableBuffered(pauser?: Observable<boolean>): PausableObservable<T>,
		controlled(enableQueue?: boolean): ControlledObservable<T>
	}

	declare export interface ControlledObservable<T> {
		request(numberOfItems?: number): IDisposable
	}

	declare export interface PausableObservable<T> {
		pause(): void,
		resume(): void
	}

			
}