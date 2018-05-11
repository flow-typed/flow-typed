type rxjs$PartialObserver<-T> =
  | {
      +next: (value: T) => mixed,
      +error?: (error: any) => mixed,
      +complete?: () => mixed
    }
  | {
      +next?: (value: T) => mixed,
      +error: (error: any) => mixed,
      +complete?: () => mixed
    }
  | {
      +next?: (value: T) => mixed,
      +error?: (error: any) => mixed,
      +complete: () => mixed
    };

declare interface rxjs$ISubscription {
  unsubscribe(): void;
}

type rxjs$TeardownLogic = rxjs$ISubscription | (() => void);

type rxjs$EventListenerOptions =
  | {
      capture?: boolean,
      passive?: boolean,
      once?: boolean
    }
  | boolean;

type rxjs$ObservableInput<T> = rxjs$Observable<T> | Promise<T> | Iterable<T>;

type rxjs$OperatorFunction<T, R> = (rxjs$Observable<T>) => rxjs$Observable<R>;
type rxjs$OperatorFunctionLast<T, R: rxjs$Observable<*>> = (
  rxjs$Observable<T>
) => R;

declare class rxjs$Observable<+T> {
  static bindCallback(
    callbackFunc: (callback: (_: void) => any) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): () => rxjs$Observable<void>;
  static bindCallback<U>(
    callbackFunc: (callback: (result: U) => any) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): () => rxjs$Observable<U>;
  static bindCallback<T, U>(
    callbackFunc: (v1: T, callback: (result: U) => any) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T) => rxjs$Observable<U>;
  static bindCallback<T, T2, U>(
    callbackFunc: (v1: T, v2: T2, callback: (result: U) => any) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2) => rxjs$Observable<U>;
  static bindCallback<T, T2, T3, U>(
    callbackFunc: (v1: T, v2: T2, v3: T3, callback: (result: U) => any) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2, v3: T3) => rxjs$Observable<U>;
  static bindCallback<T, T2, T3, T4, U>(
    callbackFunc: (
      v1: T,
      v2: T2,
      v3: T3,
      v4: T4,
      callback: (result: U) => any
    ) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2, v3: T3, v4: T4) => rxjs$Observable<U>;
  static bindCallback<T, T2, T3, T4, T5, U>(
    callbackFunc: (
      v1: T,
      v2: T2,
      v3: T3,
      v4: T4,
      v5: T5,
      callback: (result: U) => any
    ) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => rxjs$Observable<U>;
  static bindCallback<T, T2, T3, T4, T5, T6, U>(
    callbackFunc: (
      v1: T,
      v2: T2,
      v3: T3,
      v4: T4,
      v5: T5,
      v6: T6,
      callback: (result: U) => any
    ) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => rxjs$Observable<U>;
  static bindCallback<U>(
    callbackFunc: (callback: (...args: Array<any>) => any) => any,
    selector: (...args: Array<any>) => U,
    scheduler?: rxjs$SchedulerClass
  ): () => rxjs$Observable<U>;
  static bindCallback<T, U>(
    callbackFunc: (v1: T, callback: (...args: Array<any>) => any) => any,
    selector: (...args: Array<any>) => U,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T) => rxjs$Observable<U>;
  static bindCallback<T, T2, U>(
    callbackFunc: (
      v1: T,
      v2: T2,
      callback: (...args: Array<any>) => any
    ) => any,
    selector: (...args: Array<any>) => U,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2) => rxjs$Observable<U>;
  static bindCallback<T, T2, T3, U>(
    callbackFunc: (
      v1: T,
      v2: T2,
      v3: T3,
      callback: (...args: Array<any>) => any
    ) => any,
    selector: (...args: Array<any>) => U,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2, v3: T3) => rxjs$Observable<U>;
  static bindCallback<T, T2, T3, T4, U>(
    callbackFunc: (
      v1: T,
      v2: T2,
      v3: T3,
      v4: T4,
      callback: (...args: Array<any>) => any
    ) => any,
    selector: (...args: Array<any>) => U,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2, v3: T3, v4: T4) => rxjs$Observable<U>;
  static bindCallback<T, T2, T3, T4, T5, U>(
    callbackFunc: (
      v1: T,
      v2: T2,
      v3: T3,
      v4: T4,
      v5: T5,
      callback: (...args: Array<any>) => any
    ) => any,
    selector: (...args: Array<any>) => U,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => rxjs$Observable<U>;
  static bindCallback<T, T2, T3, T4, T5, T6, U>(
    callbackFunc: (
      v1: T,
      v2: T2,
      v3: T3,
      v4: T4,
      v5: T5,
      v6: T6,
      callback: (...args: Array<any>) => any
    ) => any,
    selector: (...args: Array<any>) => U,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => rxjs$Observable<U>;
  static bindCallback<T>(
    callbackFunc: Function,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (...args: Array<any>) => rxjs$Observable<T>;
  static bindCallback<T>(
    callbackFunc: Function,
    selector?: (...args: Array<any>) => T,
    scheduler?: rxjs$SchedulerClass
  ): (...args: Array<any>) => rxjs$Observable<T>;

  static bindNodeCallback<U>(
    callbackFunc: (callback: (err: any, result: U) => any) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): () => rxjs$Observable<U>;
  static bindNodeCallback<T, U>(
    callbackFunc: (v1: T, callback: (err: any, result: U) => any) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T) => rxjs$Observable<U>;
  static bindNodeCallback<T, T2, U>(
    callbackFunc: (
      v1: T,
      v2: T2,
      callback: (err: any, result: U) => any
    ) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2) => rxjs$Observable<U>;
  static bindNodeCallback<T, T2, T3, U>(
    callbackFunc: (
      v1: T,
      v2: T2,
      v3: T3,
      callback: (err: any, result: U) => any
    ) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2, v3: T3) => rxjs$Observable<U>;
  static bindNodeCallback<T, T2, T3, T4, U>(
    callbackFunc: (
      v1: T,
      v2: T2,
      v3: T3,
      v4: T4,
      callback: (err: any, result: U) => any
    ) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2, v3: T3, v4: T4) => rxjs$Observable<U>;
  static bindNodeCallback<T, T2, T3, T4, T5, U>(
    callbackFunc: (
      v1: T,
      v2: T2,
      v3: T3,
      v4: T4,
      v5: T5,
      callback: (err: any, result: U) => any
    ) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => rxjs$Observable<U>;
  static bindNodeCallback<T, T2, T3, T4, T5, T6, U>(
    callbackFunc: (
      v1: T,
      v2: T2,
      v3: T3,
      v4: T4,
      v5: T5,
      v6: T6,
      callback: (err: any, result: U) => any
    ) => any,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => rxjs$Observable<U>;
  static bindNodeCallback<T>(
    callbackFunc: Function,
    selector?: void,
    scheduler?: rxjs$SchedulerClass
  ): (...args: Array<any>) => rxjs$Observable<T>;
  static bindNodeCallback<T>(
    callbackFunc: Function,
    selector?: (...args: Array<any>) => T,
    scheduler?: rxjs$SchedulerClass
  ): (...args: Array<any>) => rxjs$Observable<T>;

  static concat(...sources: rxjs$Observable<T>[]): rxjs$Observable<T>;

  static create(
    subscribe: (
      observer: rxjs$Observer<T>
    ) => rxjs$ISubscription | Function | void
  ): rxjs$Observable<T>;

  static defer(
    observableFactory: () => rxjs$Observable<T> | Promise<T>
  ): rxjs$Observable<T>;

  static from(
    input: rxjs$ObservableInput<T>,
    scheduler?: rxjs$SchedulerClass
  ): rxjs$Observable<T>;

  static fromEvent(
    element: any,
    eventName: string,
    ...none: Array<void>
  ): rxjs$Observable<T>;
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
    selector: () => T
  ): rxjs$Observable<T>;

  static fromEventPattern(
    addHandler: (handler: (item: T) => void) => void,
    removeHandler: (handler: (item: T) => void) => void,
    selector?: () => T
  ): rxjs$Observable<T>;

  static fromPromise(promise: Promise<T>): rxjs$Observable<T>;

  static empty<U>(): rxjs$Observable<U>;

  static interval(period: number): rxjs$Observable<number>;

  static timer(
    initialDelay: number | Date,
    period?: number,
    scheduler?: rxjs$SchedulerClass
  ): rxjs$Observable<number>;

  static merge<T, U>(
    source0: rxjs$Observable<T>,
    source1: rxjs$Observable<U>
  ): rxjs$Observable<T | U>;
  static merge<T, U, V>(
    source0: rxjs$Observable<T>,
    source1: rxjs$Observable<U>,
    source2: rxjs$Observable<V>
  ): rxjs$Observable<T | U | V>;
  static merge(...sources: rxjs$Observable<T>[]): rxjs$Observable<T>;

  static never<U>(): rxjs$Observable<U>;

  static of(...values: T[]): rxjs$Observable<T>;

  static range(
    start?: number,
    count?: number,
    scheduler?: rxjs$SchedulerClass
  ): rxjs$Observable<number>;

  static throw(error: any): rxjs$Observable<any>;

  audit(
    durationSelector: (value: T) => rxjs$Observable<any> | Promise<any>
  ): rxjs$Observable<T>;

  auditTime(
    duration: number,
    scheduler?: rxjs$SchedulerClass
  ): rxjs$Observable<T>;

  race(other: rxjs$Observable<T>): rxjs$Observable<T>;

  repeat(count?: number): rxjs$Observable<T>;

  buffer(bufferBoundaries: rxjs$Observable<any>): rxjs$Observable<Array<T>>;

  bufferCount(
    bufferSize: number,
    startBufferEvery?: number
  ): rxjs$Observable<Array<T>>;

  bufferTime(
    bufferTimeSpan: number,
    bufferCreationInterval?: number,
    maxBufferSize?: number,
    scheduler?: rxjs$SchedulerClass
  ): rxjs$Observable<Array<T>>;

  bufferToggle<U>(
    openings: rxjs$Observable<U> | Promise<U>,
    closingSelector: (value: U) => rxjs$Observable<any> | Promise<any>
  ): rxjs$Observable<Array<T>>;

  bufferWhen(
    closingSelector: () => rxjs$Observable<any>
  ): rxjs$Observable<Array<T>>;

  catch<U>(
    selector: (err: any, caught: rxjs$Observable<T>) => rxjs$Observable<U>
  ): rxjs$Observable<T | U>;

  concat<U>(...sources: rxjs$Observable<U>[]): rxjs$Observable<T | U>;

  concatAll<U>(): rxjs$Observable<U>;

  concatMap<U>(
    f: (value: T, index: number) => rxjs$ObservableInput<U>,
    _: void
  ): rxjs$Observable<U>;
  concatMap<U, V>(
    f: (value: T, index: number) => rxjs$ObservableInput<U>,
    resultSelector: (
      outerValue: T,
      innerValue: U,
      outerIndex: number,
      innerIndex: number
    ) => V
  ): rxjs$Observable<V>;

  debounceTime(
    dueTime: number,
    scheduler?: rxjs$SchedulerClass
  ): rxjs$Observable<T>;

  defaultIfEmpty<U>(defaultValue: U): rxjs$Observable<T | U>;

  delay(dueTime: number, scheduler?: rxjs$SchedulerClass): rxjs$Observable<T>;

  delayWhen(
    delayDurationSelector: (value: T) => rxjs$Observable<any>,
    subscriptionDelay?: rxjs$Observable<any>
  ): rxjs$Observable<T>;

  distinctUntilChanged(compare?: (x: T, y: T) => boolean): rxjs$Observable<T>;

  distinct<U>(
    keySelector?: (value: T) => U,
    flushes?: rxjs$Observable<mixed>
  ): rxjs$Observable<T>;

  distinctUntilKeyChanged(
    key: string,
    compare?: (x: mixed, y: mixed) => boolean
  ): rxjs$Observable<T>;

  elementAt(index: number, defaultValue?: T): rxjs$Observable<T>;

  exhaustMap<U>(
    project: (value: T, index: number) => rxjs$ObservableInput<U>,
    _: void
  ): rxjs$Observable<U>;
  exhaustMap<U, V>(
    project: (value: T, index: number) => rxjs$ObservableInput<U>,
    resultSelector: (
      outerValue: T,
      innerValue: U,
      outerIndex: number,
      innerIndex: number
    ) => V
  ): rxjs$Observable<V>;

  expand(
    project: (value: T, index: number) => rxjs$Observable<T>,
    concurrent?: number,
    scheduler?: rxjs$SchedulerClass
  ): rxjs$Observable<T>;

  filter(
    predicate: (value: T, index: number) => boolean,
    thisArg?: any
  ): rxjs$Observable<T>;

  finally(f: () => mixed): rxjs$Observable<T>;

  first(
    predicate?: (value: T, index: number, source: rxjs$Observable<T>) => boolean
  ): rxjs$Observable<T>;
  first<U>(
    predicate: ?(
      value: T,
      index: number,
      source: rxjs$Observable<T>
    ) => boolean,
    resultSelector: (value: T, index: number) => U
  ): rxjs$Observable<U>;
  first<U>(
    predicate: ?(
      value: T,
      index: number,
      source: rxjs$Observable<T>
    ) => boolean,
    resultSelector: ?(value: T, index: number) => U,
    defaultValue: U
  ): rxjs$Observable<U>;

  groupBy<K>(
    keySelector: (value: T) => K,
    _: void
  ): rxjs$Observable<rxjs$GroupedObservable<K, T>>;
  groupBy<K, V>(
    keySelector: (value: T) => K,
    elementSelector: (value: T) => V,
    durationSelector?: (
      grouped: rxjs$GroupedObservable<K, V>
    ) => rxjs$Observable<any>
  ): rxjs$Observable<rxjs$GroupedObservable<K, V>>;

  ignoreElements<U>(): rxjs$Observable<U>;

  last(
    predicate?: (value: T, index: number, source: rxjs$Observable<T>) => boolean
  ): rxjs$Observable<T>;
  last<U>(
    predicate: ?(
      value: T,
      index: number,
      source: rxjs$Observable<T>
    ) => boolean,
    resultSelector: (value: T, index: number) => U
  ): rxjs$Observable<U>;
  last<U>(
    predicate: ?(
      value: T,
      index: number,
      source: rxjs$Observable<T>
    ) => boolean,
    resultSelector: ?(value: T, index: number) => U,
    defaultValue: U
  ): rxjs$Observable<U>;

  let<U>(
    project: (self: rxjs$Observable<T>) => rxjs$Observable<U>
  ): rxjs$Observable<U>;

  // Alias for `let`
  letBind<U>(
    project: (self: rxjs$Observable<T>) => rxjs$Observable<U>
  ): rxjs$Observable<U>;

  switch(): T; // assumption: T is Observable

  // Alias for `mergeMap`
  flatMap<U>(
    project: (value: T, index: number) => rxjs$ObservableInput<U>,
    concurrency?: number
  ): rxjs$Observable<U>;
  flatMap<U, V>(
    project: (value: T, index: number) => rxjs$ObservableInput<U>,
    resultSelector: (
      outerValue: T,
      innerValue: U,
      outerIndex: number,
      innerIndex: number
    ) => V,
    concurrency?: number
  ): rxjs$Observable<V>;

  flatMapTo<U>(innerObservable: rxjs$Observable<U>): rxjs$Observable<U>;

  flatMapTo<U, V>(
    innerObservable: rxjs$Observable<U>,
    resultSelector: (
      outerValue: T,
      innerValue: U,
      outerIndex: number,
      innerIndex: number
    ) => V,
    concurrent?: number
  ): rxjs$Observable<V>;

  switchMap<U>(
    project: (value: T, index: number) => rxjs$ObservableInput<U>,
    _: void
  ): rxjs$Observable<U>;
  switchMap<U, V>(
    project: (value: T, index: number) => rxjs$ObservableInput<U>,
    resultSelector: (
      outerValue: T,
      innerValue: U,
      outerIndex: number,
      innerIndex: number
    ) => V
  ): rxjs$Observable<V>;

  switchMapTo<U>(innerObservable: rxjs$Observable<U>): rxjs$Observable<U>;

  map<U>(f: (value: T, index: number) => U, thisArg?: any): rxjs$Observable<U>;

  mapTo<U>(value: U): rxjs$Observable<U>;

  merge(other: rxjs$Observable<T>): rxjs$Observable<T>;

  mergeAll<U>(): rxjs$Observable<U>;

  mergeMap<U>(
    project: (value: T, index: number) => rxjs$ObservableInput<U>,
    concurrency?: number
  ): rxjs$Observable<U>;
  mergeMap<U, V>(
    project: (value: T, index: number) => rxjs$ObservableInput<U>,
    resultSelector: (
      outerValue: T,
      innerValue: U,
      outerIndex: number,
      innerIndex: number
    ) => V,
    concurrency?: number
  ): rxjs$Observable<V>;

  mergeMapTo<U>(innerObservable: rxjs$Observable<U>): rxjs$Observable<U>;

  mergeMapTo<U, V>(
    innerObservable: rxjs$Observable<U>,
    resultSelector: (
      outerValue: T,
      innerValue: U,
      outerIndex: number,
      innerIndex: number
    ) => V,
    concurrent?: number
  ): rxjs$Observable<V>;

  multicast(
    subjectOrSubjectFactory: rxjs$Subject<T> | (() => rxjs$Subject<T>)
  ): rxjs$ConnectableObservable<T>;

  observeOn(scheduler: rxjs$SchedulerClass): rxjs$Observable<T>;

  pairwise(): rxjs$Observable<[T, T]>;

  partition(
    predicate: (value: T, index: number) => boolean,
    thisArg: any
  ): [rxjs$Observable<T>, rxjs$Observable<T>];

  pipe(): rxjs$Observable<T>;

  pipe<A>(op1: rxjs$OperatorFunctionLast<T, A>): A;

  pipe<A, B>(
    op1: rxjs$OperatorFunction<T, A>,
    op2: rxjs$OperatorFunctionLast<A, B>
  ): B;

  pipe<A, B, C>(
    op1: rxjs$OperatorFunction<T, A>,
    op2: rxjs$OperatorFunction<A, B>,
    op3: rxjs$OperatorFunctionLast<B, C>
  ): C;

  pipe<A, B, C, D>(
    op1: rxjs$OperatorFunction<T, A>,
    op2: rxjs$OperatorFunction<A, B>,
    op3: rxjs$OperatorFunction<B, C>,
    op4: rxjs$OperatorFunctionLast<C, D>
  ): D;

  pipe<A, B, C, D, E>(
    op1: rxjs$OperatorFunction<T, A>,
    op2: rxjs$OperatorFunction<A, B>,
    op3: rxjs$OperatorFunction<B, C>,
    op4: rxjs$OperatorFunction<C, D>,
    op5: rxjs$OperatorFunctionLast<D, E>
  ): E;

  publish(): rxjs$ConnectableObservable<T>;

  publishLast(): rxjs$ConnectableObservable<T>;

  reduce<U>(
    accumulator: (
      acc: U,
      currentValue: T,
      index: number,
      source: rxjs$Observable<T>
    ) => U,
    seed: U
  ): rxjs$Observable<U>;

  sample(notifier: rxjs$Observable<any>): rxjs$Observable<T>;

  sampleTime(
    delay: number,
    scheduler?: rxjs$SchedulerClass
  ): rxjs$Observable<T>;

  publishReplay(
    bufferSize?: number,
    windowTime?: number,
    scheduler?: rxjs$SchedulerClass
  ): rxjs$ConnectableObservable<T>;

  retry(retryCount: ?number): rxjs$Observable<T>;

  retryWhen(
    notifier: (errors: rxjs$Observable<Error>) => rxjs$Observable<any>
  ): rxjs$Observable<T>;

  scan<U>(f: (acc: U, value: T) => U, initialValue: U): rxjs$Observable<U>;

  share(): rxjs$Observable<T>;

  skip(count: number): rxjs$Observable<T>;

  skipUntil(other: rxjs$Observable<any> | Promise<any>): rxjs$Observable<T>;

  skipWhile(
    predicate: (value: T, index: number) => boolean
  ): rxjs$Observable<T>;

  startWith(...values: Array<T>): rxjs$Observable<T>;

  subscribeOn(scheduler: rxjs$SchedulerClass): rxjs$Observable<T>;

  take(count: number): rxjs$Observable<T>;

  takeUntil(other: rxjs$Observable<any>): rxjs$Observable<T>;

  takeWhile(
    predicate: (value: T, index: number) => boolean
  ): rxjs$Observable<T>;

  do(
    onNext?: (value: T) => mixed,
    onError?: (error: any) => mixed,
    onCompleted?: () => mixed
  ): rxjs$Observable<T>;
  do(observer: {
    next?: (value: T) => mixed,
    error?: (error: any) => mixed,
    complete?: () => mixed
  }): rxjs$Observable<T>;

  throttleTime(duration: number): rxjs$Observable<T>;

  timeout(due: number | Date, _: void): rxjs$Observable<T>;

  timeoutWith<U>(
    due: number | Date,
    withObservable: rxjs$Observable<U>,
    scheduler?: rxjs$SchedulerClass
  ): rxjs$Observable<T | U>;

  toArray(): rxjs$Observable<T[]>;

  toPromise(): Promise<T>;

  subscribe(observer: rxjs$PartialObserver<T>): rxjs$Subscription;
  subscribe(
    onNext: ?(value: T) => mixed,
    onError: ?(error: any) => mixed,
    onCompleted: ?() => mixed
  ): rxjs$Subscription;

  static combineLatest<A, B>(
    a: rxjs$Observable<A>,
    resultSelector: (a: A) => B
  ): rxjs$Observable<B>;

  static combineLatest<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    resultSelector: (a: A, b: B) => C
  ): rxjs$Observable<C>;

  static combineLatest<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    resultSelector: (a: A, b: B, c: C) => D
  ): rxjs$Observable<D>;

  static combineLatest<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    resultSelector: (a: A, b: B, c: C, d: D) => E
  ): rxjs$Observable<E>;

  static combineLatest<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E) => F
  ): rxjs$Observable<F>;

  static combineLatest<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F) => G
  ): rxjs$Observable<G>;

  static combineLatest<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H
  ): rxjs$Observable<H>;

  static combineLatest<A>(a: rxjs$Observable<A>, _: void): rxjs$Observable<[A]>;

  static combineLatest<A, B>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    _: void
  ): rxjs$Observable<[A, B]>;

  static combineLatest<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    _: void
  ): rxjs$Observable<[A, B, C]>;

  static combineLatest<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    _: void
  ): rxjs$Observable<[A, B, C, D]>;

  static combineLatest<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    _: void
  ): rxjs$Observable<[A, B, C, D, E]>;

  static combineLatest<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    _: void
  ): rxjs$Observable<[A, B, C, D, E, F]>;

  static combineLatest<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    _: void
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
    _: void
  ): rxjs$Observable<[A, B, C, D, E, F, G, H]>;

  combineLatest<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    resultSelector: (t: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H
  ): rxjs$Observable<H>;

  combineLatest<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    resultSelector: (t: T, a: A, b: B, c: C, d: D, e: E, f: F) => G
  ): rxjs$Observable<G>;

  combineLatest<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    resultSelector: (t: T, a: A, b: B, c: C, d: D, e: E) => F
  ): rxjs$Observable<F>;

  combineLatest<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    resultSelector: (t: T, a: A, b: B, c: C, d: D) => E
  ): rxjs$Observable<E>;

  combineLatest<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    resultSelector: (t: T, a: A, b: B, c: C) => D
  ): rxjs$Observable<D>;

  combineLatest<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    resultSelector: (t: T, a: A, b: B) => C
  ): rxjs$Observable<C>;

  combineLatest<A, B>(
    a: rxjs$Observable<A>,
    resultSelector: (t: T, a: A) => B
  ): rxjs$Observable<B>;

  combineLatest<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    _: void
  ): rxjs$Observable<[T, A, B, C, D, E, E, F, G]>;

  combineLatest<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    _: void
  ): rxjs$Observable<[T, A, B, C, D, E, F]>;

  combineLatest<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    _: void
  ): rxjs$Observable<[T, A, B, C, D, E]>;

  combineLatest<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    _: void
  ): rxjs$Observable<[T, A, B, C, D]>;

  combineLatest<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    _: void
  ): rxjs$Observable<[T, A, B, C]>;

  combineLatest<A, B>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    _: void
  ): rxjs$Observable<[T, A, B]>;

  combineLatest<A>(a: rxjs$Observable<A>, _: void): rxjs$Observable<[T, A]>;

  static zip<A, B>(
    a: rxjs$Observable<A>,
    resultSelector: (a: A) => B
  ): rxjs$Observable<B>;

  static zip<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    resultSelector: (a: A, b: B) => C
  ): rxjs$Observable<C>;

  static zip<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    resultSelector: (a: A, b: B, c: C) => D
  ): rxjs$Observable<D>;

  static zip<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    resultSelector: (a: A, b: B, c: C, d: D) => E
  ): rxjs$Observable<E>;

  static zip<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E) => F
  ): rxjs$Observable<F>;

  static zip<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F) => G
  ): rxjs$Observable<G>;

  static zip<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H
  ): rxjs$Observable<H>;

  static zip<A>(a: rxjs$Observable<A>, _: void): rxjs$Observable<[A]>;

  static zip<A, B>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    _: void
  ): rxjs$Observable<[A, B]>;

  static zip<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    _: void
  ): rxjs$Observable<[A, B, C]>;

  static zip<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    _: void
  ): rxjs$Observable<[A, B, C, D]>;

  static zip<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    _: void
  ): rxjs$Observable<[A, B, C, D, E]>;

  static zip<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    _: void
  ): rxjs$Observable<[A, B, C, D, E, F]>;

  static zip<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    _: void
  ): rxjs$Observable<[A, B, C, D, E, F, G]>;

  static zip<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    h: rxjs$Observable<H>,
    _: void
  ): rxjs$Observable<[A, B, C, D, E, F, G, H]>;

  zip<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    resultSelector: (t: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H
  ): rxjs$Observable<H>;

  zip<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    resultSelector: (t: T, a: A, b: B, c: C, d: D, e: E, f: F) => G
  ): rxjs$Observable<G>;

  zip<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    resultSelector: (t: T, a: A, b: B, c: C, d: D, e: E) => F
  ): rxjs$Observable<F>;

  zip<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    resultSelector: (t: T, a: A, b: B, c: C, d: D) => E
  ): rxjs$Observable<E>;

  zip<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    resultSelector: (t: T, a: A, b: B, c: C) => D
  ): rxjs$Observable<D>;

  zip<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    resultSelector: (t: T, a: A, b: B) => C
  ): rxjs$Observable<C>;

  zip<A, B>(
    a: rxjs$Observable<A>,
    resultSelector: (t: T, a: A) => B
  ): rxjs$Observable<B>;

  zip<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    _: void
  ): rxjs$Observable<[T, A, B, C, D, E, E, F, G]>;

  zip<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    _: void
  ): rxjs$Observable<[T, A, B, C, D, E, F]>;

  zip<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    _: void
  ): rxjs$Observable<[T, A, B, C, D, E]>;

  zip<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    _: void
  ): rxjs$Observable<[T, A, B, C, D]>;

  zip<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    _: void
  ): rxjs$Observable<[T, A, B, C]>;

  zip<A, B>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    _: void
  ): rxjs$Observable<[T, A, B]>;

  zip<A>(a: rxjs$Observable<A>, _: void): rxjs$Observable<[T, A]>;

  static forkJoin<A, B>(
    a: rxjs$Observable<A>,
    resultSelector: (a: A) => B
  ): rxjs$Observable<B>;

  static forkJoin<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    resultSelector: (a: A, b: B) => C
  ): rxjs$Observable<C>;

  static forkJoin<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    resultSelector: (a: A, b: B, c: C) => D
  ): rxjs$Observable<D>;

  static forkJoin<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    resultSelector: (a: A, b: B, c: C, d: D) => E
  ): rxjs$Observable<E>;

  static forkJoin<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E) => F
  ): rxjs$Observable<F>;

  static forkJoin<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F) => G
  ): rxjs$Observable<G>;

  static forkJoin<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    resultSelector: (a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H
  ): rxjs$Observable<H>;

  static forkJoin<A, B>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    _: void
  ): rxjs$Observable<[A, B]>;

  static forkJoin<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    _: void
  ): rxjs$Observable<[A, B, C]>;

  static forkJoin<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    _: void
  ): rxjs$Observable<[A, B, C, D]>;

  static forkJoin<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    _: void
  ): rxjs$Observable<[A, B, C, D, E]>;

  static forkJoin<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    _: void
  ): rxjs$Observable<[A, B, C, D, E, F]>;

  static forkJoin<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    _: void
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
    _: void
  ): rxjs$Observable<[A, B, C, D, E, F, G, H]>;

  static forkJoin<A>(
    a: Array<rxjs$Observable<A>>,
    _: void
  ): rxjs$Observable<Array<A>>;

  static forkJoin<A>(
    a: Array<rxjs$Observable<any>>,
    _: void
  ): rxjs$Observable<A>;

  static forkJoin<A, B>(
    a: Array<rxjs$Observable<A>>,
    resultSelector: (...values: Array<A>) => B
  ): rxjs$Observable<B>;

  static forkJoin<A>(
    a: Array<rxjs$Observable<any>>,
    resultSelector: (...values: Array<any>) => A
  ): rxjs$Observable<A>;

  window(
    windowBoundaries: rxjs$Observable<any>
  ): rxjs$Observable<rxjs$Observable<T>>;
  windowCount(
    windowSize: number,
    startWindowEvery?: number
  ): rxjs$Observable<rxjs$Observable<T>>;
  windowToggle<A>(
    openings: rxjs$Observable<A>,
    closingSelector: (value: A) => rxjs$Observable<any>
  ): rxjs$Observable<rxjs$Observable<T>>;
  windowWhen(
    closingSelector: () => rxjs$Observable<any>
  ): rxjs$Observable<rxjs$Observable<T>>;

  withLatestFrom<A, B, C, D, E, F, G, H>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    resultSelector: (t: T, a: A, b: B, c: C, d: D, e: E, f: F, g: G) => H
  ): rxjs$Observable<H>;

  withLatestFrom<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    resultSelector: (t: T, a: A, b: B, c: C, d: D, e: E, f: F) => G
  ): rxjs$Observable<G>;

  withLatestFrom<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    resultSelector: (t: T, a: A, b: B, c: C, d: D, e: E) => F
  ): rxjs$Observable<F>;

  withLatestFrom<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    resultSelector: (t: T, a: A, b: B, c: C, d: D) => E
  ): rxjs$Observable<E>;

  withLatestFrom<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    resultSelector: (t: T, a: A, b: B, c: C) => D
  ): rxjs$Observable<D>;

  withLatestFrom<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    resultSelector: (t: T, a: A, b: B) => C
  ): rxjs$Observable<C>;

  withLatestFrom<A, B>(
    a: rxjs$Observable<A>,
    resultSelector: (t: T, a: A) => B
  ): rxjs$Observable<B>;

  withLatestFrom<A, B, C, D, E, F, G>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    g: rxjs$Observable<G>,
    _: void
  ): rxjs$Observable<[T, A, B, C, D, E, E, F, G]>;

  withLatestFrom<A, B, C, D, E, F>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    f: rxjs$Observable<F>,
    _: void
  ): rxjs$Observable<[T, A, B, C, D, E, F]>;

  withLatestFrom<A, B, C, D, E>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    e: rxjs$Observable<E>,
    _: void
  ): rxjs$Observable<[T, A, B, C, D, E]>;

  withLatestFrom<A, B, C, D>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    d: rxjs$Observable<D>,
    _: void
  ): rxjs$Observable<[T, A, B, C, D]>;

  withLatestFrom<A, B, C>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    c: rxjs$Observable<C>,
    _: void
  ): rxjs$Observable<[T, A, B, C]>;

  withLatestFrom<A, B>(
    a: rxjs$Observable<A>,
    b: rxjs$Observable<B>,
    _: void
  ): rxjs$Observable<[T, A, B]>;

  withLatestFrom<A>(a: rxjs$Observable<A>, _: void): rxjs$Observable<[T, A]>;

  static using<R: rxjs$ISubscription>(
    resourceFactory: () => ?R,
    observableFactory: (resource: R) => rxjs$Observable<T> | Promise<T> | void
  ): rxjs$Observable<T>;

  _subscribe(observer: rxjs$Subscriber<T>): rxjs$Subscription;

  _isScalar: boolean;
  source: ?rxjs$Observable<any>;
  operator: ?rxjs$Operator<any, any>;
}

declare class rxjs$ConnectableObservable<T> extends rxjs$Observable<T> {
  connect(): rxjs$Subscription;
  refCount(): rxjs$Observable<T>;
}

declare class rxjs$GroupedObservable<K, V> extends rxjs$Observable<V> {
  key: K;
}

declare class rxjs$Observer<-T> {
  next(value: T): mixed;
  error(error: any): mixed;
  complete(): mixed;
}

declare interface rxjs$Operator<T, R> {
  call(subscriber: rxjs$Subscriber<R>, source: any): rxjs$TeardownLogic;
}

declare class rxjs$Subject<T> mixins rxjs$Observable<T>, rxjs$Observer<T> {
  static create<T>(
    destination: rxjs$Observer<T>,
    source: rxjs$Observable<T>
  ): rxjs$AnonymousSubject<T>;

  asObservable(): rxjs$Observable<T>;
  observers: Array<rxjs$Observer<T>>;
  unsubscribe(): void;

  // For use in subclasses only:
  _next(value: T): void;
}

declare class rxjs$AnonymousSubject<T> extends rxjs$Subject<T> {
  source: ?rxjs$Observable<T>;
  destination: ?rxjs$Observer<T>;

  constructor(
    destination?: rxjs$Observer<T>,
    source?: rxjs$Observable<T>
  ): void;
}

declare class rxjs$BehaviorSubject<T> extends rxjs$Subject<T> {
  constructor(initialValue: T): void;

  getValue(): T;
}

declare class rxjs$ReplaySubject<T> extends rxjs$Subject<T> {
  constructor(
    bufferSize?: number,
    windowTime?: number,
    scheduler?: rxjs$SchedulerClass
  ): void;
}

declare class rxjs$Subscription {
  unsubscribe(): void;
  add(teardown: rxjs$TeardownLogic): rxjs$Subscription;
}

declare class rxjs$Subscriber<T> extends rxjs$Subscription {
  static create<T>(
    next?: (x?: T) => void,
    error?: (e?: any) => void,
    complete?: () => void
  ): rxjs$Subscriber<T>;

  constructor(
    destinationOrNext?: rxjs$PartialObserver<any> | ((value: T) => void),
    error?: (e?: any) => void,
    complete?: () => void
  ): void;
  next(value?: T): void;
  error(err?: any): void;
  complete(): void;
  unsubscribe(): void;
}

declare class rxjs$SchedulerClass {
  schedule<T>(
    work: (state?: T) => void,
    delay?: number,
    state?: T
  ): rxjs$Subscription;
}

declare class rxjs$ArgumentOutOfRangeError extends Error {}
declare class rxjs$EmptyError extends Error {}
declare class rxjs$ObjectUnsubscribedError extends Error {}
declare class rxjs$TimeoutError extends Error {}
declare class rxjs$UnsubscriptionError extends Error {}

declare module "rxjs" {
  declare module.exports: {
    Observable: typeof rxjs$Observable,
    Observer: typeof rxjs$Observer,
    ConnectableObservable: typeof rxjs$ConnectableObservable,
    Subject: typeof rxjs$Subject,
    Subscriber: typeof rxjs$Subscriber,
    AnonymousSubject: typeof rxjs$AnonymousSubject,
    BehaviorSubject: typeof rxjs$BehaviorSubject,
    ReplaySubject: typeof rxjs$ReplaySubject,
    Scheduler: {
      asap: rxjs$SchedulerClass,
      queue: rxjs$SchedulerClass,
      animationFrame: rxjs$SchedulerClass,
      async: rxjs$SchedulerClass
    },
    Subscription: typeof rxjs$Subscription,
    ArgumentOutOfRangeError: typeof rxjs$ArgumentOutOfRangeError,
    EmptyError: typeof rxjs$EmptyError,
    ObjectUnsubscribedError: typeof rxjs$ObjectUnsubscribedError,
    TimeoutError: typeof rxjs$TimeoutError,
    UnsubscriptionError: typeof rxjs$UnsubscriptionError,
  };
}

declare module "rxjs/Observable" {
  declare module.exports: {
    Observable: typeof rxjs$Observable
  };
}

declare module "rxjs/Observer" {
  declare module.exports: {
    Observer: typeof rxjs$Observer
  };
}

declare module "rxjs/BehaviorSubject" {
  declare module.exports: {
    BehaviorSubject: typeof rxjs$BehaviorSubject
  };
}

declare module "rxjs/ReplaySubject" {
  declare module.exports: {
    ReplaySubject: typeof rxjs$ReplaySubject
  };
}

declare module "rxjs/Subject" {
  declare module.exports: {
    Subject: typeof rxjs$Subject,
    AnonymousSubject: typeof rxjs$AnonymousSubject
  };
}

declare module "rxjs/Subscriber" {
  declare module.exports: {
    Subscriber: typeof rxjs$Subscriber
  };
}

declare module "rxjs/Subscription" {
  declare module.exports: {
    Subscription: typeof rxjs$Subscription
  };
}

declare module "rxjs/testing/TestScheduler" {
  declare module.exports: {
    TestScheduler: typeof rxjs$SchedulerClass
  };
}

declare module "rxjs/util/ArgumentOutOfRangeError" {
  declare module.exports: {
    ArgumentOutOfRangeError: typeof rxjs$ArgumentOutOfRangeError,
  };
}

declare module "rxjs/util/EmptyError" {
  declare module.exports: {
    EmptyError: typeof rxjs$EmptyError,
  };
}

declare module "rxjs/util/ObjectUnsubscribedError" {
  declare module.exports: {
    ObjectUnsubscribedError: typeof rxjs$ObjectUnsubscribedError,
  };
}

declare module "rxjs/util/TimeoutError" {
  declare module.exports: {
    TimeoutError: typeof rxjs$TimeoutError,
  };
}

declare module "rxjs/util/UnsubscriptionError" {
  declare module.exports: {
    UnsubscriptionError: typeof rxjs$UnsubscriptionError,
  };
}

declare module "rxjs/observable/create" {
    declare module.exports: {
        create: typeof rxjs$Observable.create,
    };
}

declare module "rxjs/observable/bindCallback" {
    declare module.exports: {
        bindCallback: typeof rxjs$Observable.bindCallback,
    };
}

declare module "rxjs/observable/bindNodeCallback" {
    declare module.exports: {
        bindNodeCallback: typeof rxjs$Observable.bindNodeCallback,
    };
}

declare module "rxjs/observable/combineLatest" {
    declare module.exports: {
        combineLatest: typeof rxjs$Observable.combineLatest,
    };
}

declare module "rxjs/observable/concat" {
    declare module.exports: {
        concat: typeof rxjs$Observable.concat,
    };
}

declare module "rxjs/observable/defer" {
    declare module.exports: {
        defer: typeof rxjs$Observable.defer,
    };
}

declare module "rxjs/observable/empty" {
    declare module.exports: {
        empty: typeof rxjs$Observable.empty,
    };
}

declare module "rxjs/observable/forkJoin" {
    declare module.exports: {
        forkJoin: typeof rxjs$Observable.forkJoin,
    };
}

declare module "rxjs/observable/from" {
    declare module.exports: {
        from: typeof rxjs$Observable.from,
    };
}

declare module "rxjs/observable/fromEvent" {
    declare module.exports: {
        fromEvent: typeof rxjs$Observable.fromEvent,
    };
}

declare module "rxjs/observable/fromEventPattern" {
    declare module.exports: {
        fromEventPattern: typeof rxjs$Observable.fromEventPattern,
    };
}

declare module "rxjs/observable/fromPromise" {
    declare module.exports: {
        fromPromise: typeof rxjs$Observable.fromPromise,
    };
}

declare module "rxjs/observable/generate" {
    declare module.exports: {
        generate: typeof rxjs$Observable.generate,
    };
}

declare module "rxjs/observable/if" {
    declare module.exports: {
        if: typeof rxjs$Observable.if,
    };
}

declare module "rxjs/observable/interval" {
    declare module.exports: {
        interval: typeof rxjs$Observable.interval,
    };
}

declare module "rxjs/observable/merge" {
    declare module.exports: {
        merge: typeof rxjs$Observable.merge,
    };
}

declare module "rxjs/observable/race" {
    declare module.exports: {
        race: typeof rxjs$Observable.race,
    };
}

declare module "rxjs/observable/never" {
    declare module.exports: {
        never: typeof rxjs$Observable.never,
    };
}

declare module "rxjs/observable/of" {
    declare module.exports: {
        of: typeof rxjs$Observable.of,
    };
}

declare module "rxjs/observable/onErrorResumeNext" {
    declare module.exports: {
        onErrorResumeNext: typeof rxjs$Observable.onErrorResumeNext,
    };
}

declare module "rxjs/observable/pairs" {
    declare module.exports: {
        pairs: typeof rxjs$Observable.pairs,
    };
}

declare module "rxjs/observable/range" {
    declare module.exports: {
        range: typeof rxjs$Observable.range,
    };
}

declare module "rxjs/observable/using" {
    declare module.exports: {
        using: typeof rxjs$Observable.using,
    };
}

declare module "rxjs/observable/throw" {
    declare module.exports: {
        throw: typeof rxjs$Observable.throw,
    };
}

declare module "rxjs/observable/timer" {
    declare module.exports: {
        timer: typeof rxjs$Observable.timer,
    };
}

declare module "rxjs/observable/zip" {
    declare module.exports: {
        zip: typeof rxjs$Observable.zip,
    };
}

declare module "rxjs/observable/ajax" {
    declare module.exports: {
        ajax: typeof rxjs$Observable.ajax,
    };
}

declare module "rxjs/observable/webSocket" {
    declare module.exports: {
        webSocket: typeof rxjs$Observable.webSocket,
    };
}

declare module "rxjs/add/operator/buffer" { }
declare module "rxjs/add/operator/bufferCount" { }
declare module "rxjs/add/operator/bufferTime" { }
declare module "rxjs/add/operator/bufferToggle" { }
declare module "rxjs/add/operator/bufferWhen" { }
declare module "rxjs/add/operator/catch" { }
declare module "rxjs/add/operator/combineAll" { }
declare module "rxjs/add/operator/combineLatest" { }
declare module "rxjs/add/operator/concat" { }
declare module "rxjs/add/operator/concatAll" { }
declare module "rxjs/add/operator/concatMap" { }
declare module "rxjs/add/operator/concatMapTo" { }
declare module "rxjs/add/operator/count" { }
declare module "rxjs/add/operator/dematerialize" { }
declare module "rxjs/add/operator/debounce" { }
declare module "rxjs/add/operator/debounceTime" { }
declare module "rxjs/add/operator/defaultIfEmpty" { }
declare module "rxjs/add/operator/delay" { }
declare module "rxjs/add/operator/delayWhen" { }
declare module "rxjs/add/operator/distinct" { }
declare module "rxjs/add/operator/distinctUntilChanged" { }
declare module "rxjs/add/operator/distinctUntilKeyChanged" { }
declare module "rxjs/add/operator/do" { }
declare module "rxjs/add/operator/exhaust" { }
declare module "rxjs/add/operator/exhaustMap" { }
declare module "rxjs/add/operator/expand" { }
declare module "rxjs/add/operator/elementAt" { }
declare module "rxjs/add/operator/filter" { }
declare module "rxjs/add/operator/finally" { }
declare module "rxjs/add/operator/find" { }
declare module "rxjs/add/operator/findIndex" { }
declare module "rxjs/add/operator/first" { }
declare module "rxjs/add/operator/groupBy" { }
declare module "rxjs/add/operator/ignoreElements" { }
declare module "rxjs/add/operator/isEmpty" { }
declare module "rxjs/add/operator/audit" { }
declare module "rxjs/add/operator/auditTime" { }
declare module "rxjs/add/operator/last" { }
declare module "rxjs/add/operator/let" { }
declare module "rxjs/add/operator/letBind" { }
declare module "rxjs/add/operator/every" { }
declare module "rxjs/add/operator/map" { }
declare module "rxjs/add/operator/mapTo" { }
declare module "rxjs/add/operator/materialize" { }
declare module "rxjs/add/operator/max" { }
declare module "rxjs/add/operator/merge" { }
declare module "rxjs/add/operator/mergeAll" { }
declare module "rxjs/add/operator/mergeMap" { }
declare module "rxjs/add/operator/flatMap" { }
declare module "rxjs/add/operator/flatMapTo" { }
declare module "rxjs/add/operator/mergeMapTo" { }
declare module "rxjs/add/operator/mergeScan" { }
declare module "rxjs/add/operator/min" { }
declare module "rxjs/add/operator/multicast" { }
declare module "rxjs/add/operator/observeOn" { }
declare module "rxjs/add/operator/onErrorResumeNext" { }
declare module "rxjs/add/operator/pairwise" { }
declare module "rxjs/add/operator/partition" { }
declare module "rxjs/add/operator/pluck" { }
declare module "rxjs/add/operator/publish" { }
declare module "rxjs/add/operator/publishBehavior" { }
declare module "rxjs/add/operator/publishReplay" { }
declare module "rxjs/add/operator/publishLast" { }
declare module "rxjs/add/operator/race" { }
declare module "rxjs/add/operator/reduce" { }
declare module "rxjs/add/operator/repeat" { }
declare module "rxjs/add/operator/repeatWhen" { }
declare module "rxjs/add/operator/retry" { }
declare module "rxjs/add/operator/retryWhen" { }
declare module "rxjs/add/operator/sample" { }
declare module "rxjs/add/operator/sampleTime" { }
declare module "rxjs/add/operator/scan" { }
declare module "rxjs/add/operator/sequenceEqual" { }
declare module "rxjs/add/operator/share" { }
declare module "rxjs/add/operator/shareReplay" { }
declare module "rxjs/add/operator/single" { }
declare module "rxjs/add/operator/skip" { }
declare module "rxjs/add/operator/skipLast" { }
declare module "rxjs/add/operator/skipUntil" { }
declare module "rxjs/add/operator/skipWhile" { }
declare module "rxjs/add/operator/startWith" { }
declare module "rxjs/add/operator/subscribeOn" { }
declare module "rxjs/add/operator/switch" { }
declare module "rxjs/add/operator/switchMap" { }
declare module "rxjs/add/operator/switchMapTo" { }
declare module "rxjs/add/operator/take" { }
declare module "rxjs/add/operator/takeLast" { }
declare module "rxjs/add/operator/takeUntil" { }
declare module "rxjs/add/operator/takeWhile" { }
declare module "rxjs/add/operator/throttle" { }
declare module "rxjs/add/operator/throttleTime" { }
declare module "rxjs/add/operator/timeInterval" { }
declare module "rxjs/add/operator/timeout" { }
declare module "rxjs/add/operator/timeoutWith" { }
declare module "rxjs/add/operator/timestamp" { }
declare module "rxjs/add/operator/toArray" { }
declare module "rxjs/add/operator/window" { }
declare module "rxjs/add/operator/windowCount" { }
declare module "rxjs/add/operator/windowTime" { }
declare module "rxjs/add/operator/windowToggle" { }
declare module "rxjs/add/operator/windowWhen" { }
declare module "rxjs/add/operator/withLatestFrom" { }
declare module "rxjs/add/operator/zip" { }
declare module "rxjs/add/operator/zipAll" { }
