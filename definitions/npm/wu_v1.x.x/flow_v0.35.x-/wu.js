/**
 * Flowtype definitions for wu
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type Wu$Consumer<T>= (t: T) => void;

declare type Wu$Filter<T>= (t: T) => boolean;

declare export interface Wu$WuStatic {
    (iterable: Iterable<T>): Wu$WuIterable<T>,
        chain<T>(...iters: Iterable<T>[]): Wu$WuIterable<T>,
        count(start?: number, step?: number): Wu$WuIterable<number>,
        curryable<T>(fun: (...x: any[]) => T, expected?: number): any,
        entries<T>(obj: {
            [i: string]: T
        }): Wu$WuIterable<[string, T]>,
        keys<T>(obj: {
            [i: string]: T
        }): Wu$WuIterable<string>,
        values<T>(obj: {
            [i: string]: T
        }): Wu$WuIterable<T>,
        repeat<T>(obj: T, times?: number): Wu$WuIterable<T>,
        asyncEach<T>(fn: Wu$Consumer<T>, maxBlock?: number, timeout?: number): void,
        drop<T>(n: number, iter: Iterable<T>): Wu$WuIterable<T>,
        dropWhile<T>(fn: Wu$Filter<T>, iter: Iterable<T>): Wu$WuIterable<T>,
        cycle<T>(iter: Iterable<T>): Iterable<T>,
        chunk<T>(n: number, iter: Iterable<T>): Wu$WuIterable<T[]>,
        concatMap<T, U>(fn: (t: T) => Iterable<U>, iter: Iterable<T>): Wu$WuIterable<U>,
        dropWhile<T>(fn: Wu$Filter<T>, iter: Iterable<T>): Wu$WuIterable<T>,
        enumerate<T>(iter: Iterable<T>): Iterable<[number, T]>,
        every<T>(fn: Wu$Filter<T>, iter: Iterable<T>): boolean,
        filter<T>(fn: Wu$Filter<T>, iter: Iterable<T>): Wu$WuIterable<T>,
        find<T>(fn: Wu$Filter<T>, iter: Iterable<T>): T,
        flatten(iter: Iterable<any>): Wu$WuIterable<any>,
        flatten(shallow: boolean, iter: Iterable<any>): Wu$WuIterable<any>,
        forEach<T>(fn: Wu$Consumer<T>, iter: Iterable<T>): void,
        has<T>(t: T, iter: Iterable<T>): boolean,
        invoke: any,
        map<T, U>(fn: (t: T) => U, iter: Iterable<T>): Wu$WuIterable<U>,
        pluck(attribute: string, iter: Iterable<any>): Wu$WuIterable<any>,
        reduce<T>(fn: (a: T, b: T) => T, iter: Iterable<T>): T,
        reduce<T>(fn: (a: T, b: T) => T, initial: T, iter: Iterable<T>): T,
        reduce<T, U>(fn: (a: U, b: T) => U, iter: Iterable<T>): U,
        reduce<T, U>(fn: (a: U, b: T) => U, initial: U, iter: Iterable<T>): U,
        reductions<T>(fn: (a: T, b: T) => T, iter: Iterable<T>): Wu$WuIterable<T>,
        reductions<T>(fn: (a: T, b: T) => T, initial: T, iter: Iterable<T>): Wu$WuIterable<T>,
        reductions<T, U>(fn: (a: U, b: T) => U, iter: Iterable<T>): Wu$WuIterable<U>,
        reductions<T, U>(fn: (a: U, b: T) => U, initial: U, iter: Iterable<T>): Wu$WuIterable<U>,
        reject<T>(fn: Wu$Filter<T>, iter: Iterable<T>): Wu$WuIterable<T>,
        slice<T>(iter: Iterable<T>): Wu$WuIterable<T>,
        slice<T>(start: number, iter: Iterable<T>): Wu$WuIterable<T>,
        slice<T>(start: number, stop: number, iter: Iterable<T>): Wu$WuIterable<T>,
        some<T>(fn: Wu$Filter<T>, iter: Iterable<T>): boolean,
        spreadMap<T>(fn: (...x: any[]) => T, iter: Iterable<any[]>): Wu$WuIterable<T>,
        take<T>(n: number, iter: Iterable<T>): Wu$WuIterable<T>,
        takeWhile<T>(fn: Wu$Filter<T>, iter: Iterable<T>): Wu$WuIterable<T>,
        tap<T>(fn: Wu$Consumer<T>, iter: Iterable<T>): Wu$WuIterable<T>,
        unique<T>(iter: Iterable<T>): Wu$WuIterable<T>,
        zip<T, U>(iter2: Iterable<T>, iter: Iterable<U>): Wu$WuIterable<[T, U]>,
        zipLongest<T, U>(iter2: Iterable<T>, iter: Iterable<U>): Wu$WuIterable<[T, U]>,
        zipWith: any,
        unzip: any,
        tee<T>(iter: Iterable<T>): Wu$WuIterable<T>[],
        tee<T>(n: number, iter: Iterable<T>): Wu$WuIterable<T>[]
}

declare export type Wu$WuIterable<T>= {
    asyncEach<T>(fn: Wu$Consumer<T>, maxBlock?: number, timeout?: number): any,
    drop(n: number): Wu$WuIterable<T>,
    dropWhile(fn: Wu$Filter<T>): Wu$WuIterable<T>,
    cycle(): Iterable<T>,
    chunk(n: number): Wu$WuIterable<T[]>,
    concatMap<U>(fn: (t: T) => Iterable<U>): Wu$WuIterable<U>,
    dropWhile(fn: Wu$Filter<T>): Wu$WuIterable<T>,
    enumerate(): Iterable<[number, T]>,
    every(fn: Wu$Filter<T>): boolean,
    filter(fn: Wu$Filter<T>): Wu$WuIterable<T>,
    find(fn: Wu$Filter<T>): T,
    flatten(): Wu$WuIterable<any>,
    flatten(shallow: boolean): Wu$WuIterable<any>,
    forEach(fn: Wu$Consumer<T>): void,
    has(t: T): boolean,
    invoke: any,
    map<U>(fn: (t: T) => U): Wu$WuIterable<U>,
    pluck(attribute: string): Wu$WuIterable<any>,
    reduce(fn: (a: T, b: T) => T): T,
    reduce(fn: (a: T, b: T) => T, initial: T): T,
    reduce<U>(fn: (a: U, b: T) => U): U,
    reduce<U>(fn: (a: U, b: T) => U, initial: U): U,
    reductions(fn: (a: T, b: T) => T): Wu$WuIterable<T>,
    reductions(fn: (a: T, b: T) => T, initial: T): Wu$WuIterable<T>,
    reductions<U>(fn: (a: U, b: T) => U): Wu$WuIterable<U>,
    reductions<U>(fn: (a: U, b: T) => U, initial: U): Wu$WuIterable<U>,
    reject(fn: Wu$Filter<T>): Wu$WuIterable<T>,
    slice(): Wu$WuIterable<T>,
    slice(start: number): Wu$WuIterable<T>,
    slice(start: number, stop: number): Wu$WuIterable<T>,
    some(fn: Wu$Filter<T>): boolean,
    spreadMap(fn: (...x: any[]) => T, iter: Iterable<any[]>): Wu$WuIterable<T>,
    take(n: number): Wu$WuIterable<T>,
    takeWhile(fn: Wu$Filter<T>): Wu$WuIterable<T>,
    tap(fn: Wu$Consumer<T>): Wu$WuIterable<T>,
    unique(): Wu$WuIterable<T>,
    zip<U>(iter2: Iterable<T>): Wu$WuIterable<[T, U]>,
    zipLongest<U>(iter2: Iterable<T>): Wu$WuIterable<[T, U]>,
    zipWith: any,
    unzip: any,
    tee(): Wu$WuIterable<T>[],
    tee(n: number): Wu$WuIterable<T>[]
} & IterableIterator
declare var wu: Wu$WuStatic;