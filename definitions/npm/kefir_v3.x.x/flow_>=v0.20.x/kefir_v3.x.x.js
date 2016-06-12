/*
 * Types definitions for [Kefir][], for use with Flow type checker
 *
 * [Kefir]: https://rpominov.github.io/kefir/
 *
 * by Jesse Hallett
 */

declare module kefir {

  declare class Observable<T,E> {

    /* Subscribe / add side effects */

    onValue(callback: (value: T) => any): this;
    offValue(callback: (value: T) => any): this;
    onError(callback: (error: E) => any): this;
    offError(callback: (error: E) => any): this;
    onEnd(callback: () => any): this;
    offEnd(callback: () => any): this;
    onAny(callback: (event: Event<T,E>) => any): this;
    offAny(callback: (event: Event<T,E>) => any): this;
    log(name?: string): this;
    offLog(name?: string): this;

    /* Modify an observable */

    filter(predicate?: (value: T) => boolean): this;
    filterErrors(predicate?: (error: E) => boolean): this;
    take(n: number): this;
    takeErrors(n: number): this;
    takeWhile(predicate?: (value: T) => boolean): this;
    last(): this;
    skip(n: number): this;
    skipWhile(predicate?: (value: T) => boolean): this;
    skipDuplicates(comparator?: (a: T, b: T) => boolean): this;
    scan<U>(fn: (accum: U, value: T) => U, seed?: U): Property<U,E>;
    flatten<U>(transformer?: (value: T) => U[]): Stream<U,E>;
    delay(wait: number): this;
    throttle(wait: number, options?: { leading?: boolean, trailing?: boolean } ): this;
    debounce(wait: number, options?: { immediate?: boolean }): this;
    ignoreValues(): this;
    ignoreErrors(): this;
    ignoreEnd(): this;
    transduce<U,F>(transducer: any): Observable<U,F>;  // TODO

    /* Combine observables */

    combine<U,F,R>(otherObs: Observable<U,F>, combinator?: (a: T, b: U) => R): Stream<R,E|F>;
    zip<U,F,R>(obs: Observable<U,F> | U[], combinator?: (a: T, b: U) => R): Stream<[T,U]|R,E|F>;
    merge<U,F>(obs: Observable<U,F>): Stream<T|U,E|F>;
    concat<U,F>(obs: Observable<U,F>): Stream<T|U,E|F>;
    flatMap<U,F>(fn?: (value: T) => Observable<U,F>): Stream<U,E|F>;
    flatMapLatest<U,F>(fn?: (value: T) => Observable<U,F>): Stream<U,E|F>;
    flatMapFirst<U,F>(fn?: (value: T) => Observable<U,F>): Stream<U,E|F>;
    flatMapConcat<U,F>(fn?: (value: T) => Observable<U,F>): Stream<U,E|F>;
    flatMapConcurLimit<U,F>(fn: ?(value: T) => Observable<U,F>, limit: number): Stream<U,E|F>;
    flatMapErrors<U,F>(fn?: (error: E) => Observable<U,F>): Stream<T|U,F>;

    /* Combine two observables */

    filterBy(obs: Observable<any,any>): this;
    sampledBy<U,R>(obs: Observable<U,any>, combinator?: (a: T, b: U) => R): Stream<T|R,E>;
    skipUntilBy(obs: Observable): this;
    takeUntilBy(obs: Observable): this;

    /* Interoperation with other async abstractions */

    toPromise(promiseConstructor?: Class<Promise<T>>): Promise<T>;
    toESObservable(): ESObservable<T,E>;

  }

  declare class Stream<T,E> extends Observable<T,E> {

    /* Convert observables */

    toProperty<U>(getCurrent?: () => U): Property<T|U,E>;

    /* Modify a stream  */

    map<U>(fn: (value: T) => U): Stream<U,E>;
    mapErrors<F>(fn: (error: E) => F): Stream<T,F>;
    diff<U>(fn?: ?(a: T, b: T) => U, seed?: T): Stream<U,E>;
    beforeEnd<U>(fn: () => U): Stream<T|U,E>;
    slidingWindow(max: number, min?: number): Stream<T[],E>;
    bufferWhile(predicate?: ?(value: T) => boolean,
                options?: { flushOnEnd?: boolean }
               ): Stream<T[],E>;
    bufferWithCount(count: number, options?: { flushOnEnd?: boolean }): Stream<T[],E>;
    bufferWithTimeOrCount(period: number,
                          count: number,
                          options?: { flushOnEnd?: boolean }
                         ): Stream<T[],E>;
    withHandler<U,F>(handler: (e: Emitter<U,F>, event: Event<T,E>) => any): Stream<U,F>;

    /* Combine two observables */

    bufferBy(obs: Observable<any,any>, options?: { flushOnEnd?: boolean }): Stream<T[],E>;
    bufferWhileBy(obs: Observable<any,any>, options?: { flushOnEnd?: boolean
                                                      , flushOnChange?: boolean
                                                      }
                 ): Stream<T[],E>;

  }

  declare class Property<T,E> extends Observable<T,E> {

    /* Convert observables */

    changes(): Stream<T,E>;

    /* Modify a property */

    map<U>(fn: (value: T) => U): Property<U,E>;
    mapErrors<F>(fn: (error: E) => F): Property<T,F>;
    diff<U>(fn?: ?(a: T, b: T) => U, seed?: T): Property<U,E>;
    beforeEnd<U>(fn: () => U): Property<T|U,E>;
    slidingWindow(max: number, min?: number): Property<T[],E>;
    bufferWhile(predicate?: ?(value: T) => boolean,
                options?: { flushOnEnd?: boolean }
               ): Property<T[],E>;
    bufferWithCount(count: number, options?: { flushOnEnd?: boolean }): Property<T[],E>;
    bufferWithTimeOrCount(period: number,
                          count: number,
                          options?: { flushOnEnd?: boolean }
                         ): Property<T[],E>;
    withHandler<U,F>(handler: (e: Emitter<U,F>, event: Event<T,E>) => any): Property<U,F>;

    /* Combine two observables */

    bufferBy(obs: Observable<any,any>, options?: { flushOnEnd?: boolean }): Property<T[],E>;
    bufferWhileBy(obs: Observable<any,any>, options?: { flushOnEnd?: boolean
                                                      , flushOnChange?: boolean
                                                      }
                 ): Property<T[],E>;

  }

  /*
   * The `Emitter` class is private - but we can export the type.
   */
  declare type Emitter<T,E> = {
    emit(value: T): void,
    error(err: E): void,
    end(): void,
    emitEvent(event: Event<T,E>): void,
  }

  declare type Event<T,E> = { type: 'value', value: T }
                         | { type: 'error', value: E }
                         | { type: 'end',   value: void }

  /* Create a stream */

  declare function never(): Stream<any,any>
  declare function later<T>(wait: number, value: T): Stream<T,any>
  declare function interval<T>(period: number, value: T): Stream<T,any>
  declare function sequentially<T>(period: number, values: T[]): Stream<T,any>
  declare function fromPoll<T>(period: number, fn: () => T): Stream<T,any>
  declare function withInterval<T,E>(period: number, handler: (e: Emitter<T,E>) => any): Stream<T,E>
  declare function fromCallback<T>(fn: (callback: (value: T) => void) => any): Stream<T,any>
  declare function fromNodeCallback<T,E>(fn: (callback: (err: E, value: T) => void) => any): Stream<T,E>
  declare function fromEvents<T>(target: EventTarget | events$EventEmitter,
                                 eventName: string,
                                 transform?: (...args: any[]) => T
                                ): Stream<T,any>
  declare function stream<T,E>(subscribe: (e: Emitter<T,E>) => (?() => any)): Stream<T,E>

  /* Create a property */

  declare function constant<T>(value: T): Property<T,any>
  declare function constantError<E>(error: E): Property<any,E>

  /* Combine observables */

  declare function combine<T,E,U,F,R>(obss: Observable<T,E>[],
                                      passiveObs?: Observable<U,F>[],
                                      combinator?: (...values: (T|U)[]) => R
                                     ): Stream<R,E|F>

  declare var zip: (<A,EA,B,EB>(sources: [ Observable<A,EA> | A[]
                                         , Observable<B,EB> | B[]
                                         ]
                               ) => Stream<[A,B], EA|EB>)
                 & (<A,EA,B,EB,C,EC>(sources: [ Observable<A,EA> | A[]
                                              , Observable<B,EB> | B[]
                                              , Observable<C,EC> | C[]
                                              ]
                                    ) => Stream<[A,B,C], EA|EB|EC>)
                 & (<A,EA,B,EB,C,EC,D,ED>(sources: [ Observable<A,EA> | A[]
                                                   , Observable<B,EB> | B[]
                                                   , Observable<C,EC> | C[]
                                                   , Observable<D,ED> | D[]
                                                   ]
                                         ) => Stream<[A,B,C,D], EA|EB|EC|ED>)
                 & (<A,EA,B,EB,C,EC,D,ED,E,EE>(sources: [ Observable<A,EA> | A[]
                                                        , Observable<B,EB> | B[]
                                                        , Observable<C,EC> | C[]
                                                        , Observable<D,ED> | D[]
                                                        , Observable<E,EE> | E[]
                                                        ]
                                              ) => Stream<[A,B,C,D,E], EA|EB|EC|ED|EE>)
                 & (<T,E,R>(sources: (Observable<T,E> | T[])[],
                            combinator: (...values: T[]) => R
                           ) => Stream<R,E>)

  declare var merge: (<A,EA,B,EB>(obss: [ Observable<A,EA>
                                        , Observable<B,EB>
                                        ]
                                 ) => Stream<A|B,EA|EB>)
                   & (<A,EA,B,EB,C,EC>(obss: [ Observable<A,EA>
                                             , Observable<B,EB>
                                             , Observable<C,EC>
                                             ]
                                      ) => Stream<A|B|C,EA|EB|EC>)
                   & (<A,EA,B,EB,C,EC,D,ED>(obss: [ Observable<A,EA>
                                                  , Observable<B,EB>
                                                  , Observable<C,EC>
                                                  , Observable<D,ED>
                                                  ]
                                           ) => Stream<A|B|C|D,EA|EB|EC|ED>)
                   & (<A,EA,B,EB,C,EC,D,ED,E,EE>(obss: [ Observable<A,EA>
                                                       , Observable<B,EB>
                                                       , Observable<C,EC>
                                                       , Observable<D,ED>
                                                       , Observable<E,EE>
                                                       ]
                                                ) => Stream<A|B|C|D|E,EA|EB|EC|ED|EE>)

  declare var concat: typeof merge

  declare function pool<T,E>(): Stream<T,E> & { plug:   (obs: Observable<T,E>) => void
                                              , unplug: (obs: Observable<T,E>) => void
                                              }
  declare function repeat<T,E>(generator: (iteration: number) => ?(Observable<T,E> | boolean)
                              ): Stream<T,E>

  /* Interoperation with other async abstractions */

  declare function fromPromise<T>(promise: Promise<T>): Property<T,any>

  declare type ESObservable<T,E> = {
    subscribe(callbacks: {
      next(value: T): any,
      error(error: E): any,
      complete(): any,
    }): { unsubscribe: () => void };
  }

  declare function fromESObservable<T,E>(observable: ESObservable<T,E>): Stream<T,E>

}
