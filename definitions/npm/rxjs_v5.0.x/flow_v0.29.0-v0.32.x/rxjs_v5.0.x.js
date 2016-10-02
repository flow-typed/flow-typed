// flow-typed signature: 6edaa881c92edf19917412cdad44267e
// flow-typed version: a1067d257d/rxjs_v5.0.x/flow_>=v0.29.0_<=v0.32.x

// FIXME(samgoldman) Remove top-level interface once Babel supports
// `declare interface` syntax.
// FIXME(samgoldman) Remove this once rx$Subject<T> can mixin rx$Observer<T>
interface rx$IObserver<-T> {
  next(value: T): mixed;
  error(error: any): mixed;
  complete(): mixed;
}

// FIXME: Technically at least one of these is required.
interface rx$PartialObserver<-T> {
  next?: (value: T) => mixed;
  error?: (error: any) => mixed;
  complete?: () => mixed;
}

interface rx$ISubscription {
  unsubscribe(): void;
}

type TeardownLogic = rx$ISubscription | () => void;

declare class rx$Observable<+T> {
  static concat(...sources: rx$Observable<T>[]): rx$Observable<T>;

  static create(
    subscribe: (observer: rx$Observer<T>) => rx$ISubscription | Function | void
  ): rx$Observable<T>;

  static defer(observableFactory: () => rx$Observable<T>): rx$Observable<T>;

  static from(iterable: Iterable<T>): rx$Observable<T>;

  static fromEvent(
    element: any,
    eventName: string,
    selector?: () => T,
  ): rx$Observable<T>;

  static fromEventPattern(
    addHandler: (handler: () => void) => void,
    removeHandler: (handler: () => void) => void,
    selector?: () => T,
  ): rx$Observable<T>;

  static fromPromise(promise: Promise<T>): rx$Observable<T>;

  static empty<U>(): rx$Observable<U>;

  static interval(period: number): rx$Observable<number>;

  static merge<T, U>(
    source0: rx$Observable<T>,
    source1: rx$Observable<U>,
  ): rx$Observable<T | U>;
  static merge<T, U, V>(
    source0: rx$Observable<T>,
    source1: rx$Observable<U>,
    source2: rx$Observable<V>,
  ): rx$Observable<T | U | V>;
  static merge(...sources: rx$Observable<T>[]): rx$Observable<T>;

  static never<U>(): rx$Observable<U>;

  static of(...values: T[]): rx$Observable<T>;

  static throw(error: any): rx$Observable<any>;

  race(other: rx$Observable<T>): rx$Observable<T>;

  buffer(bufferBoundaries: rx$Observable<any>): rx$Observable<Array<T>>;

  cache(bufferSize?: number, windowTime?: number): rx$Observable<T>;

  catch<U>(selector: (err: any, caught: rx$Observable<T>) => rx$Observable<U>): rx$Observable<U>;

  concat(...sources: rx$Observable<T>[]): rx$Observable<T>;

  concatMap<U>(
    f: (value: T) => rx$Observable<U> | Promise<U> | Iterable<U>
  ): rx$Observable<U>;

  debounceTime(duration: number): rx$Observable<T>;

  delay(dueTime: number): rx$Observable<T>;

  distinctUntilChanged(compare?: (x: T, y: T) => boolean): rx$Observable<T>;

  elementAt(index: number, defaultValue?: T): rx$Observable<T>;

  filter(predicate: (value: T) => boolean): rx$Observable<T>;

  finally(f: () => mixed): rx$Observable<T>;

  first(
    predicate?: (value: T, index: number, source: rx$Observable<T>) => boolean,
  ): rx$Observable<T>;
  first<U>(
    predicate: ?(value: T, index: number, source: rx$Observable<T>) => boolean,
    resultSelector: (value: T, index: number) => U,
  ): rx$Observable<U>;
  first<U>(
    predicate: ?(value: T, index: number, source: rx$Observable<T>) => boolean,
    resultSelector: ?(value: T, index: number) => U,
    defaultValue: U,
  ): rx$Observable<U>;

  groupBy(
    keySelector: (value: T) => mixed,
    elementSelector?: (value: T) => T,
    compare?: (x: T, y: T) => boolean,
  ): rx$Observable<rx$Observable<T>>;

  ignoreElements<U>(): rx$Observable<U>;

  // Alias for `mergeMap`
  flatMap<U>(
    project: (value: T) => rx$Observable<U> | Promise<U> | Iterable<U>
  ): rx$Observable<U>;

  switchMap<U>(
    project: (value: T) => rx$Observable<U> | Promise<U> | Iterable<U>
  ): rx$Observable<U>;

  map<U>(f: (value: T) => U): rx$Observable<U>;

  mapTo<U>(value: U): rx$Observable<U>;

  merge(other: rx$Observable<T>): rx$Observable<T>;

  mergeAll(): T; // assumption: T is rx$Observable

  mergeMap<U>(
    project: (value: T, index?: number) => rx$Observable<U> | Promise<U> | Iterable<U>,
  ): rx$Observable<U>;

  multicast(
    subjectOrrx$SubjectFactory: rx$Subject<T> | () => rx$Subject<T>,
  ): rx$ConnectableObservable<T>;

  publish(): rx$ConnectableObservable<T>;

  publishLast(): rx$ConnectableObservable<T>;

  reduce<U>(
    accumulator: (
      acc: U,
      currentValue: T,
      index: number,
      source: rx$Observable<T>,
    ) => U,
    seed: U,
  ): rx$Observable<U>;

  sample(notifier: rx$Observable<any>): rx$Observable<T>;

  sampleTime(delay: number): rx$Observable<T>;

  publishReplay(): rx$ConnectableObservable<T>;

  retry(retryCount: number): rx$Observable<T>;

  retryWhen(notifier: (errors: rx$Observable<Error>) => rx$Observable<any>): rx$Observable<T>;

  scan<U>(
    f: (acc: U, value: T) => U,
    initialValue: U,
  ): rx$Observable<U>;

  share(): rx$Observable<T>;

  skip(count: number): rx$Observable<T>;

  skipUntil(other: rx$Observable<any> | Promise<any>): rx$Observable<T>;

  startWith(...values: Array<T>): rx$Observable<T>;

  take(count: number): rx$Observable<T>;

  takeUntil(other: rx$Observable<any>): rx$Observable<T>;

  takeWhile(f: (value: T) => boolean): rx$Observable<T>;

  do(
    onNext?: (value: T) => mixed,
    onError?: (error: any) => mixed,
    onCompleted?: () => mixed,
  ): rx$Observable<T>;
  do(observer: {
    next?: (value: T) => mixed;
    error?: (error: any) => mixed;
    complete?: () => mixed;
  }): rx$Observable<T>;

  throttleTime(duration: number): rx$Observable<T>;

  timeout(due: number | Date, errorToSend?: any): rx$Observable<T>;

  toArray(): rx$Observable<T[]>;

  toPromise(): Promise<T>;

  subscribe(observer: rx$PartialObserver<T>): rx$Subscription;
  subscribe(
    onNext: ?(value: T) => mixed,
    onError: ?(error: any) => mixed,
    onCompleted: ?() => mixed,
  ): rx$Subscription;

  static combineLatest<A, B>(
    a: rx$Observable<A>,
    resultSelector: (a: A) => B,
  ): rx$Observable<B>;

  static combineLatest<A, B, C>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    resultSelector: (a: A, b: B) => C,
  ): rx$Observable<C>;

  static combineLatest<A, B, C, D>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    resultSelector: (a: A, b: B, c: C) => D,
  ): rx$Observable<D>;

  static combineLatest<A, B, C, D, E>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    resultSelector: (a: A, b: B, c: C, d: D) => E,
  ): rx$Observable<E>;

  static combineLatest<A, B, C, D, E, F>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    e: rx$Observable<E>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E) => F,
  ): rx$Observable<F>;

  static combineLatest<A, B, C, D, E, F, G>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    e: rx$Observable<E>,
    f: rx$Observable<F>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F) => G,
  ): rx$Observable<G>;

  static combineLatest<A, B, C, D, E, F, G, H>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    e: rx$Observable<E>,
    f: rx$Observable<F>,
    g: rx$Observable<G>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H,
  ): rx$Observable<H>;

  static combineLatest<A, B>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
  ): rx$Observable<[A, B]>;

  static combineLatest<A, B, C>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
  ): rx$Observable<[A, B, C]>;

  static combineLatest<A, B, C, D>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
  ): rx$Observable<[A, B, C, D]>;

  static combineLatest<A, B, C, D, E>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    e: rx$Observable<E>,
  ): rx$Observable<[A, B, C, D, E]>;

  static combineLatest<A, B, C, D, E, F>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    e: rx$Observable<E>,
    f: rx$Observable<F>,
  ): rx$Observable<[A, B, C, D, E, F]>;

  static combineLatest<A, B, C, D, E, F, G>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    e: rx$Observable<E>,
    f: rx$Observable<F>,
    g: rx$Observable<G>,
  ): rx$Observable<[A, B, C, D, E, F, G]>;

  static combineLatest<A, B, C, D, E, F, G, H>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    e: rx$Observable<E>,
    f: rx$Observable<F>,
    g: rx$Observable<G>,
    h: rx$Observable<H>,
  ): rx$Observable<[A, B, C, D, E, F, G, H]>;

  combineLatest<A>(
    a: rx$Observable<A>
  ): rx$Observable<[T, A]>;

  combineLatest<A, B>(
    a: rx$Observable<A>,
    resultSelector: (a: A) => B,
  ): rx$Observable<B>;

  combineLatest<A, B, C>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    resultSelector: (a: A, b: B) => C,
  ): rx$Observable<C>;

  combineLatest<A, B, C, D>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    resultSelector: (a: A, b: B, c: C) => D,
  ): rx$Observable<D>;

  combineLatest<A, B, C, D, E>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    resultSelector: (a: A, b: B, c: C, d: D) => E,
  ): rx$Observable<E>;

  combineLatest<A, B, C, D, E, F>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    e: rx$Observable<E>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E) => F,
  ): rx$Observable<F>;

  combineLatest<A, B, C, D, E, F, G>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    e: rx$Observable<E>,
    f: rx$Observable<F>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F) => G,
  ): rx$Observable<G>;

  combineLatest<A, B, C, D, E, F, G, H>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    e: rx$Observable<E>,
    f: rx$Observable<F>,
    g: rx$Observable<G>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H,
  ): rx$Observable<H>;

  withLatestFrom<A>(
    a: rx$Observable<A>
  ): rx$Observable<[T, A]>;

  withLatestFrom<A, B>(
    a: rx$Observable<A>,
    resultSelector: (a: A) => B,
  ): rx$Observable<B>;

  withLatestFrom<A, B, C>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    resultSelector: (a: A, b: B) => C,
  ): rx$Observable<C>;

  withLatestFrom<A, B, C, D>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    resultSelector: (a: A, b: B, c: C) => D,
  ): rx$Observable<D>;

  withLatestFrom<A, B, C, D, E>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    resultSelector: (a: A, b: B, c: C, d: D) => E,
  ): rx$Observable<E>;

  withLatestFrom<A, B, C, D, E, F>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    e: rx$Observable<E>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E) => F,
  ): rx$Observable<F>;

  withLatestFrom<A, B, C, D, E, F, G>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    e: rx$Observable<E>,
    f: rx$Observable<F>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F) => G,
  ): rx$Observable<G>;

  withLatestFrom<A, B, C, D, E, F, G, H>(
    a: rx$Observable<A>,
    b: rx$Observable<B>,
    c: rx$Observable<C>,
    d: rx$Observable<D>,
    e: rx$Observable<E>,
    f: rx$Observable<F>,
    g: rx$Observable<G>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H,
  ): rx$Observable<H>;
}

declare class rx$ConnectableObservable<T> extends rx$Observable<T> {
  connect(): rx$Subscription;
  refCount(): rx$Observable<T>;
}

declare class rx$Observer<T> {
  static create(
    onNext?: (value: T) => mixed,
    onError?: (error: any) => mixed,
    onCompleted?: () => mixed,
  ): rx$Observer<T>;

  asrx$Observer(): rx$Observer<T>;

  next(value: T): mixed;

  error(error: any): mixed;

  complete(): mixed;
}

// FIXME(samgoldman) should be `mixins rx$Observable<T>, rx$Observer<T>`
// once Babel parsing support exists: https://phabricator.babeljs.io/T6821
declare class rx$Subject<T> extends rx$Observable<T> {
  asrx$Observable(): rx$Observable<T>;

  observers: Array<rx$Observer<T>>;

  unsubscribe(): void;

  // Copied from rx$Observer<T>
  next(value: T): mixed;
  error(error: any): mixed;
  complete(): mixed;

  // For use in subclasses only:
  _next(value: T): void;
  _subscribe(observer: rx$PartialObserver<T>): rx$Subscription;
}

declare class rx$BehaviorSubject<T> extends rx$Subject<T> {
  constructor(initialValue: T): void;

  getValue(): T;
}

declare class rx$ReplaySubject<T> extends rx$Subject<T> {

}

declare class rx$Subscription {
  unsubscribe(): void;
  add(teardown: TeardownLogic): rx$Subscription;
}

declare module 'rxjs' {
  declare module.exports: {
    Observable: typeof rx$Observable,
    ConnectableObservable: typeof rx$ConnectableObservable,
    Observer: typeof rx$Observer,
    Subject: typeof rx$Subject,
    BehaviorSubject: typeof rx$BehaviorSubject,
    ReplaySubject: typeof rx$ReplaySubject,
    Subscription: typeof rx$Subscription,
  }
}

declare module 'rxjs/Observable' {
  declare module.exports: {
    Observable: typeof rx$Observable
  }
}
