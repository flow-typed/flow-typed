// FIXME(samgoldman) Remove top-level interface once Babel supports
// `declare interface` syntax.
// FIXME(samgoldman) Remove this once rxjs$Subject<T> can mixin rxjs$Observer<T>
interface rxjs$IObserver<-T> {
  next(value: T): mixed;
  error(error: any): mixed;
  complete(): mixed;
}

declare type rxjs$PartialObserver<-T> =
  | {
    next: (value: T) => mixed;
    error?: (error: any) => mixed;
    complete?: () => mixed;
  }
  | {
    next?: (value: T) => mixed;
    error: (error: any) => mixed;
    complete?: () => mixed;
  }
  | {
    next?: (value: T) => mixed;
    error?: (error: any) => mixed;
    complete: () => mixed;
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
    subscribe: (observer: rxjs$PartialObserver<T>) => rxjs$ISubscription | Function | void
  ): rxjs$Observable<T>;

  static defer(observableFactory: () => rxjs$Observable<T>): rxjs$Observable<T>;

  static bindCallback<A, R>(f: (a: A, cb: (a: R) => any) => any, c?: rxjs$Scheduler): (a: A) => rxjs$Observable<R>;
  static bindCallback<A, B, R>(f: (a: A, b: B, cb: (a: R) => any) => any, c?: rxjs$Scheduler): (a: A, b: B) => rxjs$Observable<R>;
  static bindCallback<A, B, C, R>(f: (a: A, b: B, c: C, cb: (a: R) => any) => any, c?: rxjs$Scheduler): (a: A, b: B, c: C) => rxjs$Observable<R>;
  static bindCallback<A, B, C, D, R>(f: (a: A, b: B, c: C, d: D, cb: (a: R) => any) => any, c?: rxjs$Scheduler): (a: A, b: B, c: C, d: D) => rxjs$Observable<R>;
  static bindCallback<A, B, C, D, E, R>(f: (a: A, b: B, c: C, d: D, e: E, cb: (a: R) => any) => any, c?: rxjs$Scheduler): (a: A, b: B, c: C, d: D, e: E) => rxjs$Observable<R>;
  static bindCallback<A, B, C, D, E, F, R>(f: (a: A, b: B, c: C, d: D, e: E, f: F, cb: (a: R) => any) => any, c?: rxjs$Scheduler): (a: A, b: B, c: C, d: D, e: E, f: F) => rxjs$Observable<R>;
  static bindCallback<A, B, C, D, E, F, G, R>(f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, cb: (a: R) => any) => any, c?: rxjs$Scheduler): (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => rxjs$Observable<R>;

  static bindCallback<A, U, R>(f: (a: A, cb: (a: R) => any, c?: rxjs$Scheduler) => any, s: (a: R) => U): (a: A) => rxjs$Observable<U>;
  static bindCallback<A, B, U, R>(f: (a: A, b: B, cb: (a: R) => any, c?: rxjs$Scheduler) => any, s: (a: R) => U): (a: A, b: B) => rxjs$Observable<U>;
  static bindCallback<A, B, C, U, R>(f: (a: A, b: B, c: C, cb: (a: R) => any, c?: rxjs$Scheduler) => any, s: (a: R) => U): (a: A, b: B, c: C) => rxjs$Observable<U>;
  static bindCallback<A, B, C, D, U, R>(f: (a: A, b: B, c: C, d: D, cb: (a: R) => any, c?: rxjs$Scheduler) => any, s: (a: R) => U): (a: A, b: B, c: C, d: D) => rxjs$Observable<U>;
  static bindCallback<A, B, C, D, E, U, R>(f: (a: A, b: B, c: C, d: D, e: E, cb: (a: R) => any, c?: rxjs$Scheduler) => any, s: (a: R) => U): (a: A, b: B, c: C, d: D, e: E) => rxjs$Observable<U>;
  static bindCallback<A, B, C, D, E, F, U, R>(f: (a: A, b: B, c: C, d: D, e: E, f: F, cb: (a: R) => any, c?: rxjs$Scheduler) => any, s: (a: R) => U): (a: A, b: B, c: C, d: D, e: E, f: F) => rxjs$Observable<U>;
  static bindCallback<A, B, C, D, E, F, G, U, R>(f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, cb: (a: R) => any, c?: rxjs$Scheduler) => any, s: (a: R) => U): (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => rxjs$Observable<U>;

  static bindNodeCallback<A, R>(f: (a: A, cb: (e: Error | void | null, a: R) => any, c?: rxjs$Scheduler) => any): (a: A) => rxjs$Observable<R>;
  static bindNodeCallback<A, B, R>(f: (a: A, b: B, cb: (e: Error | void | null, a: R) => any, c?: rxjs$Scheduler) => any): (a: A, b: B) => rxjs$Observable<R>;
  static bindNodeCallback<A, B, C, R>(f: (a: A, b: B, c: C, cb: (e: Error | void | null, a: R) => any, c?: rxjs$Scheduler) => any): (a: A, b: B, c: C) => rxjs$Observable<R>;
  static bindNodeCallback<A, B, C, D, R>(f: (a: A, b: B, c: C, d: D, cb: (e: Error | void | null, a: R) => any, c?: rxjs$Scheduler) => any): (a: A, b: B, c: C, d: D) => rxjs$Observable<R>;
  static bindNodeCallback<A, B, C, D, E, R>(f: (a: A, b: B, c: C, d: D, e: E, cb: (e: Error | void | null, a: R) => any, c?: rxjs$Scheduler) => any): (a: A, b: B, c: C, d: D, e: E) => rxjs$Observable<R>;
  static bindNodeCallback<A, B, C, D, E, F, R>(f: (a: A, b: B, c: C, d: D, e: E, f: F, cb: (e: Error | void | null, a: R) => any, c?: rxjs$Scheduler) => any): (a: A, b: B, c: C, d: D, e: E, f: F) => rxjs$Observable<R>;
  static bindNodeCallback<A, B, C, D, E, F, G, R>(f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, cb: (e: Error | void | null, a: R) => any, c?: rxjs$Scheduler) => any): (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => rxjs$Observable<R>;

  static bindNodeCallback<A, U, R>(f: (a: A, cb: (e: Error | void | null, a: R) => any) => any, s: (a: R) => U, c?: rxjs$Scheduler): (a: A) => rxjs$Observable<U>;
  static bindNodeCallback<A, B, U, R>(f: (a: A, b: B, cb: (e: Error | void | null, a: R) => any) => any, s: (a: R) => U, c?: rxjs$Scheduler): (a: A, b: B) => rxjs$Observable<U>;
  static bindNodeCallback<A, B, C, U, R>(f: (a: A, b: B, c: C, cb: (e: Error | void | null, a: R) => any) => any, s: (a: R) => U, c?: rxjs$Scheduler): (a: A, b: B, c: C) => rxjs$Observable<U>;
  static bindNodeCallback<A, B, C, D, U, R>(f: (a: A, b: B, c: C, d: D, cb: (e: Error | void | null, a: R) => any) => any, s: (a: R) => U, c?: rxjs$Scheduler): (a: A, b: B, c: C, d: D) => rxjs$Observable<U>;
  static bindNodeCallback<A, B, C, D, E, U, R>(f: (a: A, b: B, c: C, d: D, e: E, cb: (e: Error | void | null, a: R) => any) => any, s: (a: R) => U, c?: rxjs$Scheduler): (a: A, b: B, c: C, d: D, e: E) => rxjs$Observable<U>;
  static bindNodeCallback<A, B, C, D, E, F, U, R>(f: (a: A, b: B, c: C, d: D, e: E, f: F, cb: (e: Error | void | null, a: R) => any) => any, s: (a: R) => U, c?: rxjs$Scheduler): (a: A, b: B, c: C, d: D, e: E, f: F) => rxjs$Observable<U>;
  static bindNodeCallback<A, B, C, D, E, F, G, U, R>(f: (a: A, b: B, c: C, d: D, e: E, f: F, g: G, cb: (e: Error | void | null, a: R) => any) => any, s: (a: R) => U, c?: rxjs$Scheduler): (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => rxjs$Observable<U>;

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

  static never<U>(): rxjs$Observable<U>;

  static of(...values: T[]): rxjs$Observable<T>;

  static range(a: number, b?: number, b?: rxjs$Scheduler): rxjs$Observable<number>;

  static timer(initialDelay: number | Date, period: ?number, scheduler?: rxjs$Scheduler): rxjs$Observable<number>;

  static throw(error: any): rxjs$Observable<any>;

  static onErrorResumeNext(...sources: Array<rxjs$Observable<T>>): rxjs$Observable<T>;

  zip(o: rxjs$Observable<T>): rxjs$Observable<T>;
  zip(o: Iterable<rxjs$Observable<T>>): rxjs$Observable<T>;
  zip(...o: Array<rxjs$Observable<T>>): rxjs$Observable<T>;

  static zip(o: rxjs$Observable<T>): rxjs$Observable<T>;
  static zip(o: Iterable<rxjs$Observable<T>>): rxjs$Observable<T>;
  static zip(...o: Array<rxjs$Observable<T>>): rxjs$Observable<T>;

  onErrorResumeNext<I>(...sources: Array<rxjs$Observable<I>>): rxjs$Observable<T | I>;
  audit(durationSelector: (value: T) => rxjs$Observable<any> | Promise<any>): rxjs$Observable<T>;

  race(other: rxjs$Observable<T>): rxjs$Observable<T>;
  race(others: Iterable<rxjs$Observable<T>>): rxjs$Observable<T>;
  race(...others: Array<rxjs$Observable<T>>): rxjs$Observable<T>;

  static race(other: rxjs$Observable<T>): rxjs$Observable<T>;
  static race(others: Iterable<rxjs$Observable<T>>): rxjs$Observable<T>;
  static race(...others: Array<rxjs$Observable<T>>): rxjs$Observable<T>;

  buffer(bufferBoundaries: rxjs$Observable<any>): rxjs$Observable<Array<T>>;
  bufferCount(s: number, c: number): rxjs$Observable<Array<T>>;
  bufferTime(t: number, i: ?number, z: ?number, s?: rxjs$Scheduler): rxjs$Observable<Array<T>>;
  bufferToggle(
    s: rxjs$Observable<any> | Promise<any>,
    e: (v: T) => rxjs$Observable<any> | Promise<any>
  ): rxjs$Observable<Array<T>>;
  bufferWhen(s: () => rxjs$Observable<any>): rxjs$Observable<Array<T>>;

  cache(bufferSize: ?number, windowTime: ?number, scheduler?: rxjs$Scheduler): rxjs$Observable<T>;

  catch<U>(selector: (err: any, caught: rxjs$Observable<T>) => rxjs$Observable<U>): rxjs$Observable<U>;

  concat(...sources: rxjs$Observable<T>[]): rxjs$Observable<T>;

  concatAll<U>(): rxjs$Observable<U>;

  concatMap<U>(
    f: (v: T, i: number) => rxjs$Observable<U> | Promise<U> | Iterable<U>,
    ...rest: Array<void>
  ): rxjs$Observable<U>;
  concatMap<U, V>(
    f: (v: T, i: number) => rxjs$Observable<U> | Promise<U> | Iterable<U>,
    r: (o: T, i: U, oi: number, ii: number) => V
  ): rxjs$Observable<V>;
  concatMapTo<U>(v: T, ...rest: Array<void>): rxjs$Observable<U>;
  concatMapTo<U, V>(
    v: U,
    r: (o: T, i: U, oi: number, ii: number) => V
  ): rxjs$Observable<V>;

  expand(p: (v: T) => rxjs$Observable<T>, c: ?number, s?: rxjs$Scheduler): rxjs$Observable<T>;

  debounce(s: (a: T) => rxjs$Observable<any>, s?: rxjs$Scheduler): rxjs$Observable<T>;
  debounceTime(duration: number): rxjs$Observable<T>;

  delay(dueTime: number): rxjs$Observable<T>;
  delayWhen(s: (v: T) => rxjs$Observable<any>, s: ?rxjs$Observable<any>): rxjs$Observable<T>;

  distinctUntilChanged(compare?: (x: T, y: T) => boolean): rxjs$Observable<T>;

  elementAt(index: number, defaultValue?: T): rxjs$Observable<T>;

  filter(predicate: (value: T) => boolean): rxjs$Observable<T>;

  finally(f: () => mixed): rxjs$Observable<T>;

  first(
    predicate?: (value: T, index: number, source: rxjs$Observable<T>) => boolean,
  ): rxjs$Observable<T>;
  first<U>(
    predicate: ?(value: T, index: number, source: rxjs$Observable<T>) => boolean,
    resultSelector: ?(value: T, index: number) => U,
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

  map<U>(f: (value: T) => U): rxjs$Observable<U>;

  mapTo<U>(value: U): rxjs$Observable<U>;

  merge(other: rxjs$Observable<T>): rxjs$Observable<T>;
  merge(others: Iterable<rxjs$Observable<T>>): rxjs$Observable<T>;
  merge(...others: Array<rxjs$Observable<T>>): rxjs$Observable<T>;

  static merge(other: rxjs$Observable<T>): rxjs$Observable<T>;
  static merge(others: Iterable<rxjs$Observable<T>>): rxjs$Observable<T>;
  static merge(...others: Array<rxjs$Observable<T>>): rxjs$Observable<T>;

  mergeAll<U>(): rxjs$Observable<U>;

  mergeMap<U>(
    p: (value: T, index?: number) => rxjs$Observable<U> | Promise<U> | Iterable<U>,
    r: (void | null),
    c: ?number
  ): rxjs$Observable<U>;
  mergeMap<U, V>(
    p: (value: T, index?: number) => rxjs$Observable<U> | Promise<U> | Iterable<U>,
    r: (o: T, i: U, oi: number, ii: number) => V,
    c: ?number
  ): rxjs$Observable<V>;

  multicast(
    subjectOrSubjectFactory: rxjs$Subject<T> | () => rxjs$Subject<T>,
  ): rxjs$ConnectableObservable<T>;

  // TODO implement undocumented third arg delay
  observeOn(scheduler: rxjs$Scheduler): rxjs$Observable<T>;

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
  skipWhile(p: (v: T) => boolean): rxjs$Observable<T>;

  startWith(...values: Array<T>): rxjs$Observable<T>;

  subscribeOn(scheduler: rxjs$Scheduler): rxjs$Observable<T>;

  take(count: number): rxjs$Observable<T>;
  takeUntil(other: rxjs$Observable<any>): rxjs$Observable<T>;
  takeWhile(f: (value: T) => boolean): rxjs$Observable<T>;

  do:
    (
      next: (value: T) => mixed,
      error?: (error: any) => mixed,
      complete?: () => mixed,
    ) => rxjs$Observable<T>
    | (
      next?: (value: T) => mixed,
      error: (error: any) => mixed,
      complete?: () => mixed,
    ) => rxjs$Observable<T>
    | (
      next?: (value: T) => mixed,
      error?: (error: any) => mixed,
      complete: () => mixed,
    ) => rxjs$Observable<T>;
  do(observer: rxjs$PartialObserver<T>): rxjs$Observable<T>;

  throttle(s: (v: T) => rxjs$Observable<any> | Promise<any>): rxjs$Observable<T>;
  throttleTime(duration: number): rxjs$Observable<T>;

  timeout(due: number | Date, errorToSend?: any): rxjs$Observable<T>;

  toArray(): rxjs$Observable<T[]>;

  toPromise(): Promise<T>;

  subscribe(observer: rxjs$PartialObserver<T>): rxjs$Subscription;
  subscribe(
    next: ?(value: T) => mixed,
    error: ?(error: any) => mixed,
    complete: ?() => mixed,
  ): rxjs$Subscription;

  static combineLatest<A, B>(
    a: rxjs$Observable<A>,
    resultSelector: ?(a: A) => B,
  ): rxjs$Observable<B>;

  static combineLatest<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    resultSelector: ?(a: A, b: B) => C,
  ): rxjs$Observable<C>;

  static combineLatest<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    resultSelector: ?(a: A, b: B, c: C) => D,
  ): rxjs$Observable<D>;

  static combineLatest<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    resultSelector: ?(a: A, b: B, c: C, d: D) => E,
  ): rxjs$Observable<E>;

  static combineLatest<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    resultSelector: ?(a: A, b: B, c: C, d: D, e: E) => F,
  ): rxjs$Observable<F>;

  static combineLatest<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    resultSelector: ?(a: A, b: B, c: C, d: D, e: E, f: F) => G,
  ): rxjs$Observable<G>;

  static combineLatest<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    resultSelector: ?(a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H,
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

  withLatestFrom(...o: Array<rxjs$Observable<T>>): rxjs$Observable<Array<T>>;
  withLatestFrom(o: Array<rxjs$Observable<T>>): rxjs$Observable<Array<T>>;
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
  ): rxjs$Observable<[A, B]>;

  static forkJoin<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
  ): rxjs$Observable<[A, B, C]>;

  static forkJoin<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
  ): rxjs$Observable<[A, B, C, D]>;

  static forkJoin<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
  ): rxjs$Observable<[A, B, C, D, E]>;

  static forkJoin<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
  ): rxjs$Observable<[A, B, C, D, E, F]>;

  static forkJoin<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
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

  static forkJoin<A>(
    ...a: Array<rxjs$Observable<A>>
  ): rxjs$Observable<Array<A>>;

  static forkJoin<A, B>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
  ): rxjs$Observable<[A, B]>;

  static forkJoin<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
  ): rxjs$Observable<[A, B, C]>;

  static forkJoin<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
  ): rxjs$Observable<[A, B, C, D]>;

  static forkJoin<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
  ): rxjs$Observable<[A, B, C, D, E]>;

  static forkJoin<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
  ): rxjs$Observable<[A, B, C, D, E, F]>;

  static forkJoin<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
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
  ): rxjs$Observable<[A, B, C, D, E, F, G, H]>;

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

  defaultIfEmpty(a: T): rxjs$Observable<T>;
  every(p: (v: T) => boolean, t: ?any): rxjs$Observable<boolean>;

  last(p: ?(v: T) => boolean, d: ?T): rxjs$Observable<T>;
  single(p: ?(v: T) => boolean): rxjs$Observable<T>;

  // FIXME Using any types for the values of all these nested observables.
  // The real type of `any` should be the subtype of `T`.
  // e.g. in case of `rsjs$Observable<number>` `any` should really be `number`
  combineAll<A>(project: (i: Array<any>) => A): rxjs$Observable<A>;
  combineAll(): rxjs$Observable<Array<any>>;
  concatAll(): T; // assumption: T is rxjs$Observable
  mergeAll(n: number): T; // assumption: T is rxjs$Observable

  materialize(): rxjs$Observable<rxjs$Notification<rxjs$NotificationType, T>>;
  dematerialize(): rxjs$Observable<any>; // assumption: T is a rxjs$Observable<rxjs$Notification<rxjs$NotificationType, T>>
  // TODO implement some of the utility operators
  window(windowBoundaries: rxjs$Observable<any>): rxjs$Observable<rxjs$Observable<T>>;
  windowCount(windowSize: number, startWindowEvery?: number): rxjs$Observable<rxjs$Observable<T>>;
  windowTime(timeSpan: number, windowCreationInterval?: number): rxjs$Observable<rxjs$Observable<T>>;
  windowToggle<O>(openings: rxjs$Observable<O>, closingSelector?: (v: O) => rxjs$Observable<any>): rxjs$Observable<rxjs$Observable<T>>;
  windowWhen(closingSelector: () => rxjs$Observable<any>): rxjs$Observable<rxjs$Observable<T>>;
}

/*
 * largely internal scheduler type
 */
declare type rxjs$Scheduler = {
  actions: Array<(state?: *) => void>;
  active: boolean;
  scheduleId: number;
  flush(): void;
  now(): number;
  schedule<T>(work: (state?: T) => void, delay: ?number, state: ?T): rxjs$Subscription;
}

/*
 * The exported scheduler object
 */
declare type rxjs$SchedulerPublic = {
  queue: rxjs$Scheduler;
  asap: rxjs$Scheduler;
  async: rxjs$Scheduler;
  animationFrame: rxjs$Scheduler;
}

declare type rxjs$NotificationType = 'N' | 'E' | 'C'

declare class rxjs$Notification<T: rxjs$NotificationType, V> {
  static createComplete(): rxjs$Notification<'C', void>;
  static createError(e: any): rxjs$Notification<'E', any>;
  static createNext(v: V): rxjs$Notification<'N', V>;
  accept(o: rxjs$Observer<V>): void;
  accept(n: (v: V) => void, e: (e: any) => void, e: () => void): void;
  do(n: (v: V) => void, e: (e: any) => void, e: () => void): void;
  observe(o: rxjs$Observer<V>): void;
  toObservable(): rxjs$Observable<V>;
  hasValue(): boolean;
  value: V;
  type: T;
  exception: any;

}

declare class rxjs$ConnectableObservable<T> extends rxjs$Observable<T> {
  connect(): rxjs$Subscription;
  refCount(): rxjs$Observable<T>;
}

// TODO correct the return types of some prametric functions from void to mixed
declare type rxjs$Observer<-T> = {
  next(value: T): mixed;
  error(error: any): mixed;
  complete(): mixed;
  isUnsubscribed?: () => boolean;
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
  isUnsubscribed?: () => boolean;

  // For use in subclasses only:
  _next(value: T): void;
  _subscribe(observer: rxjs$PartialObserver<T>): rxjs$Subscription;
}

declare class rxjs$BehaviorSubject<T> extends rxjs$Subject<T> {
  constructor(initialValue: T): void;

  getValue(): T;
}

declare class rxjs$ReplaySubject<T> extends rxjs$Subject<T> {}
declare class rxjs$AsyncSubject<T> extends rxjs$Subject<T> {}

declare class rxjs$Subscription {
  constructor(t: rxjs$TeardownLogic): rxjs$Subscription;
  unsubscribe(): void;
  add(t: rxjs$TeardownLogic): rxjs$Subscription;
  remove(s: rxjs$Subscription): void;
}

declare class rxjs$Subscriber<T> {
  static create(next: ?(v: T) => mixed, error: ?(e: any) => mixed, complete: ?() => mixed): rxjs$PartialObserver<T>;
  constructor(next: ?(v: T) => mixed, error: ?(e: any) => mixed, complete: ?() => mixed): rxjs$PartialObserver<T>;
  constructor(o: rxjs$Observer<T>): rxjs$PartialObserver<T>;
}

declare type rxjs = {
  Observable: typeof rxjs$Observable,
  ConnectableObservable: typeof rxjs$ConnectableObservable,
  Subject: typeof rxjs$Subject,
  BehaviorSubject: typeof rxjs$BehaviorSubject,
  ReplaySubject: typeof rxjs$ReplaySubject,
  AsyncSubject: typeof rxjs$AsyncSubject,
  Subscription: typeof rxjs$Subscription,
  Subscriber: typeof rxjs$Subscriber,
  Notification: typeof rxjs$Notification,
  Scheduler: rxjs$SchedulerPublic,
}

/*
 * Exports
 */

declare module 'rxjs' {
  declare module.exports: rxjs
}

declare module 'rxjs/Rx' {
  declare module.exports: rxjs
}

declare module 'rxjs/Observable' {
  declare module.exports: {
    Observable: typeof rxjs$Observable
  }
}

declare module 'rxjs/AsyncSubject' {
  declare module.exports: {
    BehaviorSubject: typeof rxjs$BehaviorSubject
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

declare module 'rxjs/Subscriber' {
  declare module.exports: {
    Subscriber: typeof rxjs$Subscriber
  }
}

declare module 'rxjs/Notification' {
  declare module.exports: {
    Notification: typeof rxjs$Notification
  }
}

