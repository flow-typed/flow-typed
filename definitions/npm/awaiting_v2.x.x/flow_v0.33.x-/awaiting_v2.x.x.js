import type { EventEmitter } from 'events';

declare module 'awaiting' {

  declare class ErrorList extends Error {
    errors: Error[];
    constructor(message: string): void;
    add(err: Error): void;
    get(index: number): Error;
    @@iterator(): Iterator<Error>;
  }

  declare function delay(ms: number): Promise<void>;
  declare function time(date: Date): Promise<void>;
  declare function limit<T>(goal: Promise<T>, limiter: Promise<mixed> | number): Promise<T>;
  declare function event<T>(emitter: EventEmitter, eventName: string): Promise<T[]>;

  declare var callback:
    & (<R>(
      fn: (fn: (err: any, result: ?R) => any) => any
    ) => Promise<R>)

    & (<A,R>(
      fn: (a: A, fn: (err: any, result: ?R) => any) => any,
      a: A
    ) => Promise<R>)

    & (<A,B,R>(
      fn: (a: A, b: B, fn: (err: any, result: ?R) => any) => any,
      a: A, b: B
    ) => Promise<R>)

    & (<A,B,C,R>(
      fn: (a: A, b: B, c: C, fn: (err: any, result: ?R) => any) => any,
      a: A, b: B, c: C
    ) => Promise<R>)

    & (<A,B,C,D,R>(
      fn: (a: A, b: B, c: C, d: D, fn: (err: any, result: ?R) => any) => any,
      a: A, b: B, c: C, d: D
    ) => Promise<R>)

    & (<A,B,C,D,E,R>(
      fn: (a: A, b: B, c: C, d: D, e: E, fn: (err: any, result: ?R) => any) => any,
      a: A, b: B, c: C, d: D, e: E
    ) => Promise<R>);

  declare function single<T>(list: Promise<T>[], ignore?: number): Promise<T>;
  declare function set<T>(list: Promise<T>[], count?: number, ignore?: number): Promise<T[]>;
  declare function list<T>(list: Promise<T>[], ignore?: number): Promise<T[]>;

  declare function object<O: Object>(
    container: O,
    ignore?: number
  ): $ObjMap<O, <T>(propValue: Promise<T> | T) => T>;

  declare var map:
    & (<A, B>(list: A[], concurrency: number, fn: (_: A) => Promise<B>) => Promise<B[]>)
    & (<A, B>(list: A[],                      fn: (_: A) => Promise<B>) => Promise<B[]>);

  declare function failure(promise: Promise<mixed>): Promise<Error>;
  declare function success<T>(promise: Promise<T>): Promise<?T>;
  declare function result<T>(promise: Promise<T>): Promise<T | Error>;
  declare function throwRejections(): void;
  declare function swallowRejections(): void;

  declare module.exports: {
    delay:     typeof delay,
    time:      typeof time,
    limit:     typeof limit,
    event:     typeof event,
    callback:  typeof callback,
    single:    typeof single,
    set:       typeof set,
    list:      typeof list,
    object:    typeof object,
    map:       typeof map,
    failure:   typeof failure,
    success:   typeof success,
    result:    typeof result,
    throw:     typeof throwRejections,
    swallow:   typeof swallowRejections,
    ErrorList: typeof ErrorList
  };

}
