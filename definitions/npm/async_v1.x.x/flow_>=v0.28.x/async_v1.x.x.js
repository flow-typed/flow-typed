// @flow

declare module 'async' {
  declare type Collection<TItem> = Iterable<TItem> | { [key: string]: TItem };

  declare type IterateeCallback<TError, TResult> = (err?: TError, result?: TResult) => void;
  declare type Callback<TError, TResult> = (err?: TError, result?: TResult) => mixed;

  // Collections
  declare function each<TItem, TError>(
    collection: Collection<TItem>,
    iteratee: (item: TItem, callback: IterateeCallback<TError, void>) => mixed,
    callback?: Callback<TError, void>
  ): void;
  declare function forEachOf<TItem, TError>(
    collection: Collection<TItem>,
    iteratee: (value: TItem, key: string | number, callback: IterateeCallback<TError, void>) => mixed,
    callback?: Callback<TError, void>
  ): void;
  declare function map<TItem, TResult, TError>(
    collection: Collection<TItem>,
    iteratee: (value: TItem, callback: IterateeCallback<TError, TResult>) => mixed,
    callback?: Callback<TError, Array<TResult>>
  ): void;
  declare function filter(): void;
  declare function reject(): void;
  declare function reduce(): void;
  declare function reduceRight(): void;
  declare function transform(): void;
  declare function detect(): void;
  declare function sortBy(): void;
  declare function some(): void;
  declare function every(): void;
  declare function concat(): void;
  // Control Flow
  declare function series(): void;
  declare function parallel(): void;
  declare function whilst(): void;
  declare function doWhilst(): void;
  declare function until(): void;
  declare function doUntil(): void;
  declare function during(): void;
  declare function doDuring(): void;
  declare function forever(): void;
  declare function waterfall(): void;
  declare function compose(): void;
  declare function seq(): void;
  declare function applyEach(): void;
  declare function applyEachSeries(): void;
  declare function queue(): void;
  declare function priorityQueue(): void;
  declare function cargo(): void;
  declare function auto(): void;
  declare function autoInject(): void;
  declare function retry(): void;
  declare function retryable(): void;
  declare function iterator(): void;
  declare function times(): void;
  declare function timesSeries(): void;
  declare function timesLimit(): void;
  declare function race(): void;
  // Utils
  declare function apply(): void;
  declare function nextTick(): void;
  declare function memoize(): void;
  declare function unmemoize(): void;
  declare function ensureAsync(): void;
  declare function constant(): void;
  declare function asyncify(): void;
  declare function wrapSync(): void;
  declare function log(): void;
  declare function dir(): void;
  declare function noConflict(): void;
  declare function timeout(): void;
  declare function reflect(): void;
  declare function reflectAll(): void;
}
