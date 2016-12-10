// FIXME(samgoldman) Remove top-level interface once Babel supports
// `declare interface` syntax.
// FIXME(samgoldman) Remove this once rxjs$Subject<T> can mixin rxjs$Observer<T>
interface rxjs$IObserver<-T> {
  next(value: T): mixed;
  error(error: any): mixed;
  complete(): mixed;
}

type rxjs$PartialObserver<-T> =
  | {
    +next: (value: T) => mixed;
    +error?: (error: any) => mixed;
    +complete?: () => mixed;
  }
  | {
    +next?: (value: T) => mixed;
    +error: (error: any) => mixed;
    +complete?: () => mixed;
  }
  | {
    +next?: (value: T) => mixed;
    +error?: (error: any) => mixed;
    +complete: () => mixed;
  }

interface rxjs$ISubscription {
  unsubscribe(): void;
}

type rxjs$TeardownLogic = rxjs$ISubscription | () => void;

type rxjs$EventListenerOptions = {
  capture?: boolean;
  passive?: boolean;
  once?: boolean;
} | boolean;

declare class rxjs$Observable<+T> {
  static concat(...sources: rxjs$Observable<T>[]): rxjs$Observable<T>;

  static create(
    subscribe: (observer: rxjs$Observer<T>) => rxjs$ISubscription | Function | void
  ): rxjs$Observable<T>;

  static defer(observableFactory: () => rxjs$Observable<T> | Promise<T>): rxjs$Observable<T>;

  static from(iterable: Iterable<T>): rxjs$Observable<T>;

  static fromEvent(element: any, eventName: string, ...none: Array<void>): rxjs$Observable<T>;
  static fromEvent(
    element: any,
    eventName: string,
    options: rxjs$EventListenerOptions,
    ...none: Array<void>
  ): rxjs$Observable<T>;
  static fromEvent(
    element: any,
    eventName: string,
    selector: () => T,
    ...none: Array<void>
  ): rxjs$Observable<T>;
  static fromEvent(
    element: any,
    eventName: string,
    options: rxjs$EventListenerOptions,
    selector: () => T,
  ): rxjs$Observable<T>;

  static fromEventPattern(
    addHandler: (handler: () => void) => void,
    removeHandler: (handler: () => void) => void,
    selector?: () => T,
  ): rxjs$Observable<T>;

  static fromPromise(promise: Promise<T>): rxjs$Observable<T>;

  static empty<U>(): rxjs$Observable<U>;

  static interval(period: number): rxjs$Observable<number>;

  static merge<T, U>(
    source0: rxjs$Observable<T>,
    source1: rxjs$Observable<U>,
  ): rxjs$Observable<T | U>;
  static merge<T, U, V>(
    source0: rxjs$Observable<T>,
    source1: rxjs$Observable<U>,
    source2: rxjs$Observable<V>,
  ): rxjs$Observable<T | U | V>;
  static merge(...sources: rxjs$Observable<T>[]): rxjs$Observable<T>;

  static never<U>(): rxjs$Observable<U>;

  static of(...values: T[]): rxjs$Observable<T>;

  static throw(error: any): rxjs$Observable<any>;

  audit(durationSelector: (value: T) => rxjs$Observable<any> | Promise<any>): rxjs$Observable<T>;

  race(other: rxjs$Observable<T>): rxjs$Observable<T>;

  buffer(bufferBoundaries: rxjs$Observable<any>): rxjs$Observable<Array<T>>;

  catch<U>(selector: (err: any, caught: rxjs$Observable<T>) => rxjs$Observable<U>): rxjs$Observable<U>;

  concat<U>(...sources: rxjs$Observable<U>[]): rxjs$Observable<T | U>;

  concatAll<U>(): rxjs$Observable<U>;

  concatMap<U>(
    f: (value: T) => rxjs$Observable<U> | Promise<U> | Iterable<U>
  ): rxjs$Observable<U>;

  debounceTime(duration: number): rxjs$Observable<T>;

  delay(dueTime: number): rxjs$Observable<T>;

  distinctUntilChanged(compare?: (x: T, y: T) => boolean): rxjs$Observable<T>;

  distinct<U>(keySelector?: (value: T) => U, flushes?: rxjs$Observable<mixed>): rxjs$Observable<T>;

  distinctUntilKeyChanged(key: string, compare?: (x: mixed, y: mixed) => boolean): rxjs$Observable<T>;

  elementAt(index: number, defaultValue?: T): rxjs$Observable<T>;

  filter(predicate: (value: T) => boolean): rxjs$Observable<T>;

  finally(f: () => mixed): rxjs$Observable<T>;

  first(
    predicate?: (value: T, index: number, source: rxjs$Observable<T>) => boolean,
  ): rxjs$Observable<T>;
  first<U>(
    predicate: ?(value: T, index: number, source: rxjs$Observable<T>) => boolean,
    resultSelector: (value: T, index: number) => U,
  ): rxjs$Observable<U>;
  first<U>(
    predicate: ?(value: T, index: number, source: rxjs$Observable<T>) => boolean,
    resultSelector: ?(value: T, index: number) => U,
    defaultValue: U,
  ): rxjs$Observable<U>;

  groupBy(
    keySelector: (value: T) => mixed,
    elementSelector?: (value: T) => T,
    compare?: (x: T, y: T) => boolean,
  ): rxjs$Observable<rxjs$Observable<T>>;

  ignoreElements<U>(): rxjs$Observable<U>;

  let<U>(project: (self: rxjs$Observable<T>) => rxjs$Observable<U>): rxjs$Observable<U>;

  // Alias for `let`
  letBind<U>(project: (self: rxjs$Observable<T>) => rxjs$Observable<U>): rxjs$Observable<U>;

  switch(): T; // assumption: T is Observable

  // Alias for `mergeMap`
  flatMap<U>(
    project: (value: T) => rxjs$Observable<U> | Promise<U> | Iterable<U>
  ): rxjs$Observable<U>;

  switchMap<U>(
    project: (value: T) => rxjs$Observable<U> | Promise<U> | Iterable<U>
  ): rxjs$Observable<U>;

  switchMapTo<U>(
    innerObservable: rxjs$Observable<U>,
  ): rxjs$Observable<U>;

  map<U>(f: (value: T) => U): rxjs$Observable<U>;

  mapTo<U>(value: U): rxjs$Observable<U>;

  merge(other: rxjs$Observable<T>): rxjs$Observable<T>;

  mergeAll<U>(): rxjs$Observable<U>;

  mergeMap<U>(
    project: (value: T, index?: number) => rxjs$Observable<U> | Promise<U> | Iterable<U>,
  ): rxjs$Observable<U>;

  multicast(
    subjectOrSubjectFactory: rxjs$Subject<T> | () => rxjs$Subject<T>,
  ): rxjs$ConnectableObservable<T>;

  observeOn(scheduler: rxjs$SchedulerClass): rxjs$Observable<T>;

  pairwise(): rxjs$Observable<[T, T]>;

  publish(): rxjs$ConnectableObservable<T>;

  publishLast(): rxjs$ConnectableObservable<T>;

  reduce<U>(
    accumulator: (
      acc: U,
      currentValue: T,
      index: number,
      source: rxjs$Observable<T>,
    ) => U,
    seed: U,
  ): rxjs$Observable<U>;

  sample(notifier: rxjs$Observable<any>): rxjs$Observable<T>;

  sampleTime(delay: number): rxjs$Observable<T>;

  publishReplay(): rxjs$ConnectableObservable<T>;

  retry(retryCount: number): rxjs$Observable<T>;

  retryWhen(notifier: (errors: rxjs$Observable<Error>) => rxjs$Observable<any>): rxjs$Observable<T>;

  scan<U>(
    f: (acc: U, value: T) => U,
    initialValue: U,
  ): rxjs$Observable<U>;

  share(): rxjs$Observable<T>;

  skip(count: number): rxjs$Observable<T>;

  skipUntil(other: rxjs$Observable<any> | Promise<any>): rxjs$Observable<T>;

  startWith(...values: Array<T>): rxjs$Observable<T>;

  subscribeOn(scheduler: rxjs$SchedulerClass): rxjs$Observable<T>;

  take(count: number): rxjs$Observable<T>;

  takeUntil(other: rxjs$Observable<any>): rxjs$Observable<T>;

  takeWhile(f: (value: T) => boolean): rxjs$Observable<T>;

  do(
    onNext?: (value: T) => mixed,
    onError?: (error: any) => mixed,
    onCompleted?: () => mixed,
  ): rxjs$Observable<T>;
  do(observer: {
    next?: (value: T) => mixed;
    error?: (error: any) => mixed;
    complete?: () => mixed;
  }): rxjs$Observable<T>;

  throttleTime(duration: number): rxjs$Observable<T>;

  timeout(due: number | Date, errorToSend?: any): rxjs$Observable<T>;

  toArray(): rxjs$Observable<T[]>;

  toPromise(): Promise<T>;

  subscribe(observer: rxjs$PartialObserver<T>): rxjs$Subscription;
  subscribe(
    onNext: ?(value: T) => mixed,
    onError: ?(error: any) => mixed,
    onCompleted: ?() => mixed,
  ): rxjs$Subscription;

  static combineLatest<A, B>(
    a: rxjs$Observable<A>,
    resultSelector: (a: A) => B,
  ): rxjs$Observable<B>;

  static combineLatest<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    resultSelector: (a: A, b: B) => C,
  ): rxjs$Observable<C>;

  static combineLatest<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    resultSelector: (a: A, b: B, c: C) => D,
  ): rxjs$Observable<D>;

  static combineLatest<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    resultSelector: (a: A, b: B, c: C, d: D) => E,
  ): rxjs$Observable<E>;

  static combineLatest<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E) => F,
  ): rxjs$Observable<F>;

  static combineLatest<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F) => G,
  ): rxjs$Observable<G>;

  static combineLatest<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H,
  ): rxjs$Observable<H>;

  static combineLatest<A, B>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
  ): rxjs$Observable<[A, B]>;

  static combineLatest<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
  ): rxjs$Observable<[A, B, C]>;

  static combineLatest<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
  ): rxjs$Observable<[A, B, C, D]>;

  static combineLatest<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
  ): rxjs$Observable<[A, B, C, D, E]>;

  static combineLatest<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
  ): rxjs$Observable<[A, B, C, D, E, F]>;

  static combineLatest<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
  ): rxjs$Observable<[A, B, C, D, E, F, G]>;

  static combineLatest<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    h: rxjs$Observable<H>,
  ): rxjs$Observable<[A, B, C, D, E, F, G, H]>;

  combineLatest<A>(
    a: rxjs$Observable<A>
  ): rxjs$Observable<[T, A]>;

  combineLatest<A, B>(
    a: rxjs$Observable<A>,
    resultSelector: (a: A) => B,
  ): rxjs$Observable<B>;

  combineLatest<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    resultSelector: (a: A, b: B) => C,
  ): rxjs$Observable<C>;

  combineLatest<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    resultSelector: (a: A, b: B, c: C) => D,
  ): rxjs$Observable<D>;

  combineLatest<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    resultSelector: (a: A, b: B, c: C, d: D) => E,
  ): rxjs$Observable<E>;

  combineLatest<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E) => F,
  ): rxjs$Observable<F>;

  combineLatest<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F) => G,
  ): rxjs$Observable<G>;

  combineLatest<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H,
  ): rxjs$Observable<H>;

  static forkJoin<A, B>(
    a: rxjs$Observable<A>,
    resultSelector: (a: A) => B,
  ): rxjs$Observable<B>;

  static forkJoin<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    resultSelector: (a: A, b: B) => C,
  ): rxjs$Observable<C>;

  static forkJoin<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    resultSelector: (a: A, b: B, c: C) => D,
  ): rxjs$Observable<D>;

  static forkJoin<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    resultSelector: (a: A, b: B, c: C, d: D) => E,
  ): rxjs$Observable<E>;

  static forkJoin<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E) => F,
  ): rxjs$Observable<F>;

  static forkJoin<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F) => G,
  ): rxjs$Observable<G>;

  static forkJoin<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H,
  ): rxjs$Observable<H>;

  static forkJoin<A, B>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    _: void,
  ): rxjs$Observable<[A, B]>;

  static forkJoin<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    _: void,
  ): rxjs$Observable<[A, B, C]>;

  static forkJoin<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    _: void,
  ): rxjs$Observable<[A, B, C, D]>;

  static forkJoin<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    _: void,
  ): rxjs$Observable<[A, B, C, D, E]>;

  static forkJoin<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    _: void,
  ): rxjs$Observable<[A, B, C, D, E, F]>;

  static forkJoin<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    _: void,
  ): rxjs$Observable<[A, B, C, D, E, F, G]>;

  static forkJoin<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    h: rxjs$Observable<H>,
    _: void,
  ): rxjs$Observable<[A, B, C, D, E, F, G, H]>;

  withLatestFrom<A>(
    a: rxjs$Observable<A>
  ): rxjs$Observable<[T, A]>;

  withLatestFrom<A, B>(
    a: rxjs$Observable<A>,
    resultSelector: (a: A) => B,
  ): rxjs$Observable<B>;

  withLatestFrom<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    resultSelector: (a: A, b: B) => C,
  ): rxjs$Observable<C>;

  withLatestFrom<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    resultSelector: (a: A, b: B, c: C) => D,
  ): rxjs$Observable<D>;

  withLatestFrom<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    resultSelector: (a: A, b: B, c: C, d: D) => E,
  ): rxjs$Observable<E>;

  withLatestFrom<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E) => F,
  ): rxjs$Observable<F>;

  withLatestFrom<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F) => G,
  ): rxjs$Observable<G>;

  withLatestFrom<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H,
  ): rxjs$Observable<H>;

  static using<R: rxjs$ISubscription>(
    resourceFactory: () => ?R,
    observableFactory: (resource: R) => rxjs$Observable<T> | Promise<T> | void,
  ): rxjs$Observable<T>;
}

declare class rxjs$ConnectableObservable<T> extends rxjs$Observable<T> {
  connect(): rxjs$Subscription;
  refCount(): rxjs$Observable<T>;
}

declare class rxjs$Observer<T> {
  next(value: T): mixed;

  error(error: any): mixed;

  complete(): mixed;
}

// FIXME(samgoldman) should be `mixins rxjs$Observable<T>, rxjs$Observer<T>`
// once Babel parsing support exists: https://phabricator.babeljs.io/T6821
declare class rxjs$Subject<T> extends rxjs$Observable<T> {
  asObservable(): rxjs$Observable<T>;

  observers: Array<rxjs$Observer<T>>;

  unsubscribe(): void;

  // Copied from rxjs$Observer<T>
  next(value: T): mixed;
  error(error: any): mixed;
  complete(): mixed;

  // For use in subclasses only:
  _next(value: T): void;
  _subscribe(observer: rxjs$PartialObserver<T>): rxjs$Subscription;
}

declare class rxjs$BehaviorSubject<T> extends rxjs$Subject<T> {
  constructor(initialValue: T): void;

  getValue(): T;
}

declare class rxjs$ReplaySubject<T> extends rxjs$Subject<T> {

}

declare class rxjs$Subscription {
  unsubscribe(): void;
  add(teardown: rxjs$TeardownLogic): rxjs$Subscription;
}

declare class rxjs$SchedulerClass {
  schedule<T>(work: (state?: T) => void, delay?: number, state?: T): rxjs$Subscription;
}

declare module 'rxjs' {
  declare module.exports: {
    Observable: typeof rxjs$Observable,
    ConnectableObservable: typeof rxjs$ConnectableObservable,
    Subject: typeof rxjs$Subject,
    BehaviorSubject: typeof rxjs$BehaviorSubject,
    ReplaySubject: typeof rxjs$ReplaySubject,
    Scheduler: {
      asap: rxjs$SchedulerClass,
      queue: rxjs$SchedulerClass,
      animationFrame: rxjs$SchedulerClass,
      async: rxjs$SchedulerClass,
    },
    Subscription: typeof rxjs$Subscription,
  }
}

declare module 'rxjs/Observable' {
  declare module.exports: {
    Observable: typeof rxjs$Observable
  }
}

declare module 'rxjs/Observer' {
  declare module.exports: {
    Observer: typeof rxjs$Observer
  }
}

declare module 'rxjs/BehaviorSubject' {
  declare module.exports: {
    BehaviorSubject: typeof rxjs$BehaviorSubject
  }
}

declare module 'rxjs/ReplaySubject' {
  declare module.exports: {
    ReplaySubject: typeof rxjs$ReplaySubject
  }
}

declare module 'rxjs/Subject' {
  declare module.exports: {
    Subject: typeof rxjs$Subject
  }
}

declare module 'rxjs/Subscription' {
  declare module.exports: {
    Subscription: typeof rxjs$Subscription
  }
}
