declare class xstream$Stream<T> {
  addListener(listener: xstream$Listener<T>): void;
  removeListener(listener: xstream$Listener<T>): void;
  subscribe(listener: xstream$Listener<T>): xstream$Subscription;
  map<R>(project: (value: T) => R): xstream$Stream<R>;
  mapTo<R>(projectedValue: R): xstream$Stream<R>;
  filter(passes: (value: T) => boolean): xstream$Stream<T>;
  take(amount: number): xstream$Stream<T>;
  drop(amount: number): xstream$Stream<T>;
  last(): xstream$Stream<T>;
  startWith(initial: T): xstream$Stream<T>;
  endWhen(other: xstream$Stream<*>): xstream$Stream<T>;
  fold<R>(accumulate: (acc: R, x: T) => R, seed: R): xstream$Stream<R>;
  replaceError(replace: xstream$Stream<T>): xstream$Stream<T>;
  flatten(): T;
  compose<R>(operator: (stream: xstream$Stream<T>) => xstream$Stream<R>): xstream$Stream<R>;
  remember(): xstream$MemoryStream<T>;
  debug(labelOrSpy: string | (x: T) => void): xstream$Stream<T>;
  imitate(target: xstream$Stream<T>): void;
  shamefullySendNext(value: T): void;
  shamefullySendError(error: any): void;
  shamefullySendComplete(): void;
  setDebugListener(listener: xstream$Listener<T>): void;
}

declare class xstream$MemoryStream<T> extends xstream$Stream<T> {
}

declare type xstream$Listener<T> = {
  next<T>(value: T): void;
  error(error: Error): void;
  complete(): void;
}

declare class xstream$Subscription {
  unsubscribe(): void;
}

declare type xstream$Producer<T> = {
  start: (listener: xstream$Listener<T>) => void;
  stop: () => void;
}

declare function xstream$combineResult<T>(s: xstream$Stream<T>): T;

declare type xstream$exports = {
  default: xstream$exports;
  create<T>(producer?: xstream$Producer<T>): xstream$Stream<T>;
  createWithMemory<T>(producer: xstream$Producer<T>): xstream$MemoryStream<T>;
  never<T>(): xstream$Stream<T>;
  empty<T>(): xstream$Stream<T>;
  throw<T>(error: any): xstream$Stream<T>;
  from<T>(arrayOrPromise: T[] | Promise<T>): xstream$Stream<T>;
  of<T>(...values: T[]): xstream$Stream<T>;
  fromArray<T>(array: T[]): xstream$Stream<T>;
  fromPromise<T>(promise: Promise<T>): xstream$Stream<T>;
  periodic(period: number): xstream$Stream<number>;
  merge<T>(stream1: xstream$Stream<T>, stream2: xstream$Stream<T>): xstream$Stream<T>;
  merge<T>(...streams: Array<xstream$Stream<T>>): xstream$Stream<T>;
  combine<T, R>(stream1: xstream$Stream<T>, stream2: xstream$Stream<R>): xstream$Stream<[T, R]>;
  combine<T>(...streams: Array<xstream$Stream<T>>): xstream$Stream<T[]>;

  Stream: typeof xstream$Stream;
  MemoryStream: typeof xstream$MemoryStream;
  Listener: xstream$Listener<*>;
  Producer: xstream$Producer<*>;
  Subscription: typeof xstream$Subscription;
}

declare module "xstream" {
  declare module.exports: xstream$exports;
}
