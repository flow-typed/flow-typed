// @flow
/**
 * Flowtype definitions for rx.time-lite
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export interface Rx$TimeInterval<T>{
    value: T,
    interval: number
}

declare export interface Rx$Timestamp<T>{
    value: T,
    timestamp: number
}

declare export interface Rx$Observable<T>{
    delay(dueTime: Date, scheduler?: IScheduler): Rx$Observable<T>,
    delay(dueTime: number, scheduler?: IScheduler): Rx$Observable<T>,
    debounce(dueTime: number, scheduler?: IScheduler): Rx$Observable<T>,
    throttleWithTimeout(dueTime: number, scheduler?: IScheduler): Rx$Observable<T>,

    /**
     * 
     * @deprecated  use #debounce or #throttleWithTimeout instead.
     */
    throttle(dueTime: number, scheduler?: IScheduler): Rx$Observable<T>,
    timeInterval(scheduler?: IScheduler): Rx$Observable<Rx$TimeInterval<T >> ,
    timestamp(scheduler?: IScheduler): Rx$Observable<Rx$Timestamp<T >> ,
    sample(interval: number, scheduler?: IScheduler): Rx$Observable<T>,
    sample<TSample>(
        sampler: Rx$Observable<TSample>,
        scheduler?: IScheduler): Rx$Observable<T>,
    timeout(
        dueTime: Date,
        other?: Rx$Observable<T>,
        scheduler?: IScheduler): Rx$Observable<T>,
    timeout(
        dueTime: number,
        other?: Rx$Observable<T>,
        scheduler?: IScheduler): Rx$Observable<T >
}

declare interface Rx$ObservableStatic {
    interval(period: number, scheduler?: IScheduler): Rx$Observable<number>,
        interval(dutTime: number, period: number, scheduler?: IScheduler): Rx$Observable<number>,
        timer(dueTime: number, period: number, scheduler?: IScheduler): Rx$Observable<number>,
        timer(dueTime: number, scheduler?: IScheduler): Rx$Observable<number >
}