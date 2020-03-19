declare module 'zen-observable' {
  declare export interface SubscriptionObserver<T> {
    +next: (value: T) => void;
    +error: (err: Error) => void;
    +complete: () => void;
    get closed(): boolean;
  }

  declare export interface Observer<T> {
    +next?: (value: T) => any;
    +error?: (err: Error) => any;
    +complete?: () => any;
  }

  declare export interface Subscription {
    get closed(): boolean;
    unsubscribe(): void;
  }

  declare export type Subscriber<T> = (
    observer: SubscriptionObserver<T>
  ) => void | (() => mixed) | Subscription;

  declare export default class Observable<T> {
    constructor(subscriber: Subscriber<T>): void;
    subscribe(
      next: (value: T) => mixed,
      error?: (err: Error) => mixed,
      complete?: () => mixed
    ): Subscription;
    subscribe(observer: Observer<T>): Subscription;
    forEach(iteratee: (value: T, done: () => void) => mixed): Promise<void>;
    map<R>(iteratee: (value: T) => R): Observable<R>;
    filter(predicate: (value: T) => mixed): Observable<T>;
    reduce<A>(reducer: (acc: A, value: T) => A, initValue?: A): Observable<A>;
    concat<S>(...sources: Array<Observable<S>>): Observable<T | S>;

    static of<T>(...items: Array<T>): Observable<T>;
    static from<T>(value: Observable<T>): Observable<T>;
    static from<T>(value: Iterable<T>): Observable<T>;
  }
}
