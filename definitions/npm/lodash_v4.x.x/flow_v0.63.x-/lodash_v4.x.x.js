declare module "lodash" {
  declare type HigherOrderFunctionOptional = (funcs?: Array<Function>) => Function

  declare type __CurriedFunction1<A, R, AA: A> = (...r: [AA]) => R;
  declare type CurriedFunction1<A, R> = __CurriedFunction1<A, R, *>;

  declare type __CurriedFunction2<A, B, R, AA: A, BB: B> = ((
    ...r: [AA]
  ) => CurriedFunction1<BB, R>) &
    ((...r: [AA, BB]) => R);
  declare type CurriedFunction2<A, B, R> = __CurriedFunction2<A, B, R, *, *>;

  declare type __CurriedFunction3<A, B, C, R, AA: A, BB: B, CC: C> = ((
    ...r: [AA]
  ) => CurriedFunction2<BB, CC, R>) &
    ((...r: [AA, BB]) => CurriedFunction1<CC, R>) &
    ((...r: [AA, BB, CC]) => R);
  declare type CurriedFunction3<A, B, C, R> = __CurriedFunction3<
    A,
    B,
    C,
    R,
    *,
    *,
    *
  >;

  declare type __CurriedFunction4<
    A,
    B,
    C,
    D,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D
  > = ((...r: [AA]) => CurriedFunction3<BB, CC, DD, R>) &
    ((...r: [AA, BB]) => CurriedFunction2<CC, DD, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction1<DD, R>) &
    ((...r: [AA, BB, CC, DD]) => R);
  declare type CurriedFunction4<A, B, C, D, R> = __CurriedFunction4<
    A,
    B,
    C,
    D,
    R,
    *,
    *,
    *,
    *
  >;

  declare type __CurriedFunction5<
    A,
    B,
    C,
    D,
    E,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D,
    EE: E
  > = ((...r: [AA]) => CurriedFunction4<BB, CC, DD, EE, R>) &
    ((...r: [AA, BB]) => CurriedFunction3<CC, DD, EE, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction2<DD, EE, R>) &
    ((...r: [AA, BB, CC, DD]) => CurriedFunction1<EE, R>) &
    ((...r: [AA, BB, CC, DD, EE]) => R);
  declare type CurriedFunction5<A, B, C, D, E, R> = __CurriedFunction5<
    A,
    B,
    C,
    D,
    E,
    R,
    *,
    *,
    *,
    *,
    *
  >;

  declare type __CurriedFunction6<
    A,
    B,
    C,
    D,
    E,
    F,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D,
    EE: E,
    FF: F
  > = ((...r: [AA]) => CurriedFunction5<BB, CC, DD, EE, FF, R>) &
    ((...r: [AA, BB]) => CurriedFunction4<CC, DD, EE, FF, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction3<DD, EE, FF, R>) &
    ((...r: [AA, BB, CC, DD]) => CurriedFunction2<EE, FF, R>) &
    ((...r: [AA, BB, CC, DD, EE]) => CurriedFunction1<FF, R>) &
    ((...r: [AA, BB, CC, DD, EE, FF]) => R);
  declare type CurriedFunction6<A, B, C, D, E, F, R> = __CurriedFunction6<
    A,
    B,
    C,
    D,
    E,
    F,
    R,
    *,
    *,
    *,
    *,
    *,
    *
  >;

  declare type Curry = (<A, R>((...r: [A]) => R) => CurriedFunction1<A, R>) &
    (<A, B, R>((...r: [A, B]) => R) => CurriedFunction2<A, B, R>) &
    (<A, B, C, R>((...r: [A, B, C]) => R) => CurriedFunction3<A, B, C, R>) &
    (<A, B, C, D, R>(
      (...r: [A, B, C, D]) => R
    ) => CurriedFunction4<A, B, C, D, R>) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R
    ) => CurriedFunction5<A, B, C, D, E, R>) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R
    ) => CurriedFunction6<A, B, C, D, E, F, R>);

  declare type UnaryFn<A, R> = (a: A) => R;

  declare type TemplateSettings = {
    escape?: RegExp,
    evaluate?: RegExp,
    imports?: Object,
    interpolate?: RegExp,
    variable?: string
  };

  declare type TruncateOptions = {
    length?: number,
    omission?: string,
    separator?: RegExp | string
  };

  declare type DebounceOptions = {
    leading?: boolean,
    maxWait?: number,
    trailing?: boolean
  };

  declare type ThrottleOptions = {
    leading?: boolean,
    trailing?: boolean
  };

  declare type NestedArray<T> = Array<Array<T>>;

  declare type matchesIterateeShorthand = Object;
  declare type matchesPropertyIterateeShorthand = [string, any];
  declare type propertyIterateeShorthand = string;

  declare type OPredicate<A, O> =
    | ((value: A, key: string, object: O) => any)
    | matchesIterateeShorthand
    | matchesPropertyIterateeShorthand
    | propertyIterateeShorthand;

  declare type OIterateeWithResult<V, O, R> =
    | Object
    | string
    | ((value: V, key: string, object: O) => R);
  declare type OIteratee<O> = OIterateeWithResult<any, O, any>;
  declare type OFlatMapIteratee<T, U> = OIterateeWithResult<any, T, Array<U>>;

  declare type Predicate<T> =
    | ((value: T, index: number, array: Array<T>) => any)
    | matchesIterateeShorthand
    | matchesPropertyIterateeShorthand
    | propertyIterateeShorthand;

  declare type _ValueOnlyIteratee<T> = (value: T) => mixed;
  declare type ValueOnlyIteratee<T> = _ValueOnlyIteratee<T> | string;
  declare type _Iteratee<T> = (
    item: T,
    index: number,
    array: ?Array<T>
  ) => mixed;
  declare type Iteratee<T> = _Iteratee<T> | Object | string;
  declare type FlatMapIteratee<T, U> =
    | ((item: T, index: number, array: ?Array<T>) => Array<U>)
    | Object
    | string;
  declare type Comparator<T> = (item: T, item2: T) => boolean;

  declare type MapIterator<T, U> =
    | ((item: T, index: number, array: Array<T>) => U)
    | propertyIterateeShorthand;

  declare type ReadOnlyMapIterator<T, U> =
    | ((item: T, index: number, array: $ReadOnlyArray<T>) => U)
    | propertyIterateeShorthand;

  declare type OMapIterator<T, O, U> =
    | ((item: T, key: string, object: O) => U)
    | propertyIterateeShorthand;

  // exported functions
    // Array
  declare export function chunk<T>(array?: ?Array<T>, size?: ?number): Array<Array<T>>;
  declare export function compact<T, N: ?T>(array?: ?Array<N>): Array<T>;
  declare export function concat<T>(base?: ?Array<T>, ...elements: Array<any>): Array<T | any>;
  declare export function difference<T>(array?: ?$ReadOnlyArray<T>, values?: ?$ReadOnlyArray<T>): Array<T>;
  declare export function differenceBy<T>(
      array?: ?$ReadOnlyArray<T>,
      values?: ?$ReadOnlyArray<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): T[];
  declare export function differenceWith<T>(array?: ?$ReadOnlyArray<T>, values?: ?$ReadOnlyArray<T>, comparator?: ?Comparator<T>): T[];
  declare export function drop<T>(array?: ?Array<T>, n?: ?number): Array<T>;
  declare export function dropRight<T>(array?: ?Array<T>, n?: ?number): Array<T>;
  declare export function dropRightWhile<T>(array?: ?Array<T>, predicate?: ?Predicate<T>): Array<T>;
  declare export function dropWhile<T>(array?: ?Array<T>, predicate?: ?Predicate<T>): Array<T>;
  declare export function fill<T, U>(
      array?: ?Array<T>,
      value?: ?U,
      start?: ?number,
      end?: ?number
    ): Array<T | U>;
  declare export function findIndex<T>(
      array: $ReadOnlyArray<T>,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): number;
  declare export function findIndex<T>(
      array: void | null,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): -1;
  declare export function findLastIndex<T>(
      array: $ReadOnlyArray<T>,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): number;
  declare export function findLastIndex<T>(
      array: void | null,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): -1;
    // alias of _.head
  declare export function first<T>(array: ?Array<T>): T;
  declare export function flatten<T, X>(array?: ?Array<Array<T> | X>): Array<T | X>;
  declare export function flattenDeep<T>(array?: ?any[]): Array<T>;
  declare export function flattenDepth(array?: ?any[], depth?: ?number): any[];
  declare export function fromPairs<A, B>(pairs?: ?Array<[A, B]>): { [key: A]: B };
  declare export function head<T>(array: ?Array<T>): T;
  declare export function indexOf<T>(array: Array<T>, value: T, fromIndex?: number): number;
  declare export function indexOf<T>(array: void | null, value?: ?T, fromIndex?: ?number): -1;
  declare export function initial<T>(array: ?Array<T>): Array<T>;
  declare export function intersection<T>(...arrays?: Array<Array<T>>): Array<T>;
  // Workaround until (...parameter: T, parameter2: U) works
  declare export function intersectionBy<T>(a1?: ?Array<T>, iteratee?: ?ValueOnlyIteratee<T>): Array<T>;
  declare export function intersectionBy<T>(
      a1?: ?Array<T>,
      a2?: ?Array<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): Array<T>;
  declare export function intersectionBy<T>(
      a1?: ?Array<T>,
      a2?: ?Array<T>,
      a3?: ?Array<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): Array<T>;
  declare export function intersectionBy<T>(
      a1?: ?Array<T>,
      a2?: ?Array<T>,
      a3?: ?Array<T>,
      a4?: ?Array<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): Array<T>;
  // Workaround until (...parameter: T, parameter2: U) works
  declare export function intersectionWith<T>(a1?: ?Array<T>, comparator?: ?Comparator<T>): Array<T>;
  declare export function intersectionWith<T>(
      a1?: ?Array<T>,
      a2?: ?Array<T>,
      comparator?: ?Comparator<T>
    ): Array<T>;
  declare export function intersectionWith<T>(
      a1?: ?Array<T>,
      a2?: ?Array<T>,
      a3?: ?Array<T>,
      comparator?: ?Comparator<T>
    ): Array<T>;
  declare export function intersectionWith<T>(
      a1?: ?Array<T>,
      a2?: ?Array<T>,
      a3?: ?Array<T>,
      a4?: ?Array<T>,
      comparator?: ?Comparator<T>
    ): Array<T>;
  declare export function join<T>(array: Array<T>, separator?: ?string): string;
  declare export function join<T>(array: void | null, separator?: ?string): '';
  declare export function last<T>(array: ?Array<T>): T;
  declare export function lastIndexOf<T>(array: Array<T>, value?: ?T, fromIndex?: ?number): number;
  declare export function lastIndexOf<T>(array: void | null, value?: ?T, fromIndex?: ?number): -1;
  declare export function nth<T>(array: T[], n?: ?number): T;
  declare export function nth(array: void | null, n?: ?number): void;
  declare export function pull<T>(array: Array<T>, ...values?: Array<?T>): Array<T>;
  declare export function pull<T: void | null>(array: T, ...values?: Array<?any>): T;
  declare export function pullAll<T>(array: Array<T>, values?: ?Array<T>): Array<T>;
  declare export function pullAll<T: void | null>(array: T, values?: ?Array<any>): T;
  declare export function pullAllBy<T>(
      array: Array<T>,
      values?: ?Array<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): Array<T>;
  declare export function pullAllBy<T: void | null>(
      array: T,
      values?: ?Array<any>,
      iteratee?: ?ValueOnlyIteratee<any>
    ): T;
  declare export function pullAllWith<T>(array: T[], values?: ?T[], comparator?: ?Function): T[];
  declare export function pullAllWith<T: void | null>(array: T, values?: ?Array<any>, comparator?: ?Function): T;
  declare export function pullAt<T>(array?: ?Array<T>, ...indexed?: Array<?number>): Array<T>;
  declare export function pullAt<T>(array?: ?Array<T>, indexed?: ?Array<number>): Array<T>;
  declare export function remove<T>(array?: ?Array<T>, predicate?: ?Predicate<T>): Array<T>;
  declare export function reverse<T>(array: Array<T>): Array<T>;
  declare export function reverse<T: void | null>(array: T): T;
  declare export function slice<T>(array?: ?Array<T>, start?: ?number, end?: ?number): Array<T>;
  declare export function sortedIndex<T>(array: Array<T>, value: T): number;
  declare export function sortedIndex<T>(array: void | null, value: ?T): 0;
  declare export function sortedIndexBy<T>(
      array: Array<T>,
      value?: ?T,
      iteratee?: ?ValueOnlyIteratee<T>
    ): number;
  declare export function sortedIndexBy<T>(
      array: void | null,
      value?: ?T,
      iteratee?: ?ValueOnlyIteratee<T>
    ): 0;
  declare export function sortedIndexOf<T>(array: Array<T>, value: T): number;
  declare export function sortedIndexOf<T>(array: void | null, value?: ?T): -1;
  declare export function sortedLastIndex<T>(array: Array<T>, value: T): number;
  declare export function sortedLastIndex<T>(array: void | null, value?: ?T): 0;
  declare export function sortedLastIndexBy<T>(
      array: Array<T>,
      value: T,
      iteratee?: ValueOnlyIteratee<T>
    ): number;
  declare export function sortedLastIndexBy<T>(
      array: void | null,
      value?: ?T,
      iteratee?: ?ValueOnlyIteratee<T>
    ): 0;
  declare export function sortedLastIndexOf<T>(array: Array<T>, value: T): number;
  declare export function sortedLastIndexOf<T>(array: void | null, value?: ?T): -1;
  declare export function sortedUniq<T>(array?: ?Array<T>): Array<T>;
  declare export function sortedUniqBy<T>(array?: ?Array<T>, iteratee?: ?(value: T) => mixed): Array<T>;
  declare export function tail<T>(array?: ?Array<T>): Array<T>;
  declare export function take<T>(array?: ?Array<T>, n?: ?number): Array<T>;
  declare export function takeRight<T>(array?: ?Array<T>, n?: ?number): Array<T>;
  declare export function takeRightWhile<T>(array?: ?Array<T>, predicate?: ?Predicate<T>): Array<T>;
  declare export function takeWhile<T>(array?: ?Array<T>, predicate?: ?Predicate<T>): Array<T>;
  declare export function union<T>(...arrays?: Array<Array<T>>): Array<T>;
  // Workaround until (...parameter: T, parameter2: U) works
  declare export function unionBy<T>(a1?: ?Array<T>, iteratee?: ?ValueOnlyIteratee<T>): Array<T>;
  declare export function unionBy<T>(
      a1?: ?Array<T>,
      a2: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
  declare export function unionBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
  declare export function unionBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
  // Workaround until (...parameter: T, parameter2: U) works
  declare export function unionWith<T>(a1?: ?Array<T>, comparator?: ?Comparator<T>): Array<T>;
  declare export function unionWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
  declare export function unionWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
  declare export function unionWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
  declare export function uniq<T>(array?: ?Array<T>): Array<T>;
  declare export function uniqBy<T>(array?: ?Array<T>, iteratee?: ?ValueOnlyIteratee<T>): Array<T>;
  declare export function uniqWith<T>(array?: ?Array<T>, comparator?: ?Comparator<T>): Array<T>;
  declare export function unzip<T>(array?: ?Array<T>): Array<T>;
  declare export function unzipWith<T>(array: ?Array<T>, iteratee?: ?Iteratee<T>): Array<T>;
  declare export function without<T>(array?: ?Array<T>, ...values?: Array<?T>): Array<T>;
  declare export function xor<T>(...array: Array<Array<T>>): Array<T>;
  // Workaround until (...parameter: T, parameter2: U) works
  declare export function xorBy<T>(a1?: ?Array<T>, iteratee?: ?ValueOnlyIteratee<T>): Array<T>;
  declare export function xorBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
  declare export function xorBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
  declare export function xorBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
  // Workaround until (...parameter: T, parameter2: U) works
  declare export function xorWith<T>(a1?: ?Array<T>, comparator?: ?Comparator<T>): Array<T>;
  declare export function xorWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
  declare export function xorWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
  declare export function xorWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
  declare export function zip<A, B>(a1?: ?A[], a2?: ?B[]): Array<[A, B]>;
  declare export function zip<A, B, C>(a1: A[], a2: B[], a3: C[]): Array<[A, B, C]>;
  declare export function zip<A, B, C, D>(a1: A[], a2: B[], a3: C[], a4: D[]): Array<[A, B, C, D]>;
  declare export function zip<A, B, C, D, E>(
      a1: A[],
      a2: B[],
      a3: C[],
      a4: D[],
      a5: E[]
    ): Array<[A, B, C, D, E]>;

  declare export function zipObject<K, V>(props: Array<K>, values?: ?Array<V>): { [key: K]: V };
  declare export function zipObject<K, V>(props: void | null, values?: ?Array<V>): {};
  declare export function zipObjectDeep(props: any[], values?: ?any): Object;
  declare export function zipObjectDeep(props: void | null, values?: ?any): {};

  declare export function zipWith<A>(a1?: ?Array<A>): Array<[A]>;
  declare export function zipWith<T, A>(a1: Array<A>, iteratee: (A) => T): Array<T>;

  declare export function zipWith<A, B>(a1: Array<A>, a2: Array<B>): Array<[A, B]>;
  declare export function zipWith<T, A, B>(
      a1: Array<A>,
      a2: Array<B>,
      iteratee: (A, B) => T
    ): Array<T>;

  declare export function zipWith<A, B, C>(
      a1: Array<A>,
      a2: Array<B>,
      a3: Array<C>
    ): Array<[A, B, C]>;
  declare export function zipWith<T, A, B, C>(
      a1: Array<A>,
      a2: Array<B>,
      a3: Array<C>,
      iteratee: (A, B, C) => T
    ): Array<T>;

  declare export function zipWith<A, B, C, D>(
      a1: Array<A>,
      a2: Array<B>,
      a3: Array<C>,
      a4: Array<D>
    ): Array<[A, B, C, D]>;
  declare export function zipWith<T, A, B, C, D>(
      a1: Array<A>,
      a2: Array<B>,
      a3: Array<C>,
      a4: Array<D>,
      iteratee: (A, B, C, D) => T
    ): Array<T>;

    // Collection
  declare export function countBy<T>(array: Array<T>, iteratee?: ?ValueOnlyIteratee<T>): Object;
  declare export function countBy<T>(array: void | null, iteratee?: ?ValueOnlyIteratee<T>): {};
  declare export function countBy<T: Object>(object: T, iteratee?: ?ValueOnlyIteratee<T>): Object;
    // alias of _.forEach
  declare export function each<T>(array: Array<T>, iteratee?: ?Iteratee<T>): Array<T>;
  declare export function each<T: void | null>(array: T, iteratee?: ?Iteratee<any>): T;
  declare export function each<T: Object>(object: T, iteratee?: ?OIteratee<T>): T;
    // alias of _.forEachRight
  declare export function eachRight<T>(array: Array<T>, iteratee?: ?Iteratee<T>): Array<T>;
  declare export function eachRight<T: void | null>(array: T, iteratee?: ?Iteratee<any>): T;
  declare export function eachRight<T: Object>(object: T, iteratee?: OIteratee<T>): T;
  declare export function every<T>(array?: ?Array<T>, iteratee?: ?Iteratee<T>): boolean;
  declare export function every<T: Object>(object: T, iteratee?: OIteratee<T>): boolean;
  declare export function filter<T>(array?: ?Array<T>, predicate?: ?Predicate<T>): Array<T>;
  declare export function filter<A, T: { [id: string]: A }>(
      object: T,
      predicate?: OPredicate<A, T>
    ): Array<A>;
  declare export function find<T>(
      array: $ReadOnlyArray<T>,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): T | void;
  declare export function find<T>(
      array: void | null,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): void;
  declare export function find<V, A, T: { [id: string]: A }>(
      object: T,
      predicate?: OPredicate<A, T>,
      fromIndex?: number
    ): V;
  declare export function findLast<T>(
      array: ?$ReadOnlyArray<T>,
      predicate?: ?Predicate<T>,
      fromIndex?: ?number
    ): T | void;
  declare export function findLast<V, A, T: { [id: string]: A }>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): V;
  declare export function flatMap<T, U>(array?: ?Array<T>, iteratee?: ?FlatMapIteratee<T, U>): Array<U>;
  declare export function flatMap<T: Object, U>(
      object: T,
      iteratee?: OFlatMapIteratee<T, U>
    ): Array<U>;
  declare export function flatMapDeep<T, U>(
      array?: ?Array<T>,
      iteratee?: ?FlatMapIteratee<T, U>
    ): Array<U>;
  declare export function flatMapDeep<T: Object, U>(
      object: T,
      iteratee?: ?OFlatMapIteratee<T, U>
    ): Array<U>;
  declare export function flatMapDepth<T, U>(
      array?: ?Array<T>,
      iteratee?: ?FlatMapIteratee<T, U>,
      depth?: ?number
    ): Array<U>;
  declare export function flatMapDepth<T: Object, U>(
      object: T,
      iteratee?: OFlatMapIteratee<T, U>,
      depth?: number
    ): Array<U>;
  declare export function forEach<T>(array: Array<T>, iteratee?: ?Iteratee<T>): Array<T>;
  declare export function forEach<T: void | null>(array: T, iteratee?: ?Iteratee<any>): T;
  declare export function forEach<T: Object>(object: T, iteratee?: ?OIteratee<T>): T;
  declare export function forEachRight<T>(array: Array<T>, iteratee?: ?Iteratee<T>): Array<T>;
  declare export function forEachRight<T: void | null>(array: T, iteratee?: ?Iteratee<any>): T;
  declare export function forEachRight<T: Object>(object: T, iteratee?: ?OIteratee<T>): T;
  declare export function groupBy<V, T>(
      array: Array<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): { [key: V]: Array<T> };
  declare export function groupBy(
      array: void | null,
      iteratee?: ?ValueOnlyIteratee<any>
    ): {};
  declare export function groupBy<V, A, T: { [id: string]: A }>(
      object: T,
      iteratee?: ValueOnlyIteratee<A>
    ): { [key: V]: Array<A> };
  declare export function includes<T>(array: Array<T>, value: T, fromIndex?: ?number): boolean;
  declare export function includes<T>(array: void | null, value?: ?T, fromIndex?: ?number): false;
  declare export function includes<T: Object>(object: T, value: any, fromIndex?: number): boolean;
  declare export function includes(str: string, value: string, fromIndex?: number): boolean;
  declare export function invokeMap<T>(
      array?: ?Array<T>,
      path?: ?((value: T) => Array<string> | string) | Array<string> | string,
      ...args?: Array<any>
    ): Array<any>;
  declare export function invokeMap<T: Object>(
      object: T,
      path: ((value: any) => Array<string> | string) | Array<string> | string,
      ...args?: Array<any>
    ): Array<any>;
  declare export function keyBy<T, V>(
      array: Array<T>,
      iteratee?: ?ValueOnlyIteratee<T>
    ): { [key: V]: ?T };
  declare export function keyBy(
      array: void | null,
      iteratee?: ?ValueOnlyIteratee<*>
    ): {};
  declare export function keyBy<V, A, I, T: { [id: I]: A }>(
      object: T,
      iteratee?: ?ValueOnlyIteratee<A>
    ): { [key: V]: ?A };
  declare export function map<T, U>(array?: ?Array<T>, iteratee?: ?MapIterator<T, U>): Array<U>;
  declare export function map<T, U>(
      array: ?$ReadOnlyArray<T>,
      iteratee?: ReadOnlyMapIterator<T, U>
  ): Array<U>;
  declare export function map<V, T: Object, U>(
      object: ?T,
      iteratee?: OMapIterator<V, T, U>
    ): Array<U>;
  declare export function map(
      str: ?string,
      iteratee?: (char: string, index: number, str: string) => any
    ): string;
  declare export function orderBy<T>(
      array: Array<T>,
      iteratees?: ?Array<Iteratee<T>> | ?string,
      orders?: ?Array<"asc" | "desc"> | ?string
    ): Array<T>;
  declare export function orderBy<T>(
      array: null | void,
      iteratees?: ?Array<Iteratee<T>> | ?string,
      orders?: ?Array<"asc" | "desc"> | ?string
    ): Array<T>;
  declare export function orderBy<V, T: Object>(
      object: T,
      iteratees?: Array<OIteratee<*>> | string,
      orders?: Array<"asc" | "desc"> | string
    ): Array<V>;
  declare export function partition<T>(
      array?: ?Array<T>,
      predicate?: ?Predicate<T>
    ): [Array<T>, Array<T>];
  declare export function partition<V, A, T: { [id: string]: A }>(
      object: T,
      predicate?: OPredicate<A, T>
    ): [Array<V>, Array<V>];
  declare export function reduce<T, U>(
      array: Array<T>,
      iteratee?: (
        accumulator: U,
        value: T,
        index: number,
        array: ?Array<T>
      ) => U,
      accumulator?: U
    ): U;
  declare export function reduce<T, U>(
      array: void | null,
      iteratee?: ?(
        accumulator: U,
        value: T,
        index: number,
        array: ?Array<T>
      ) => U,
      accumulator?: ?U
    ): void | null;
  declare export function reduce<T: Object, U>(
      object: T,
      iteratee?: (accumulator: U, value: any, key: string, object: T) => U,
      accumulator?: U
    ): U;
  declare export function reduceRight<T, U>(
      array: void | null,
      iteratee?: ?(
        accumulator: U,
        value: T,
        index: number,
        array: ?Array<T>
      ) => U,
      accumulator?: ?U
    ): void | null;
  declare export function reduceRight<T, U>(
      array: Array<T>,
      iteratee?: ?(
        accumulator: U,
        value: T,
        index: number,
        array: ?Array<T>
      ) => U,
      accumulator?: ?U
    ): U;
  declare export function reduceRight<T: Object, U>(
      object: T,
      iteratee?: ?(accumulator: U, value: any, key: string, object: T) => U,
      accumulator?: ?U
    ): U;
  declare export function reject<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
  declare export function reject<V: Object, A, T: { [id: string]: A }>(
      object?: ?T,
      predicate?: ?OPredicate<A, T>
    ): Array<V>;
  declare export function sample<T>(array: ?Array<T>): T;
  declare export function sample<V, T: Object>(object: T): V;
  declare export function sampleSize<T>(array?: ?Array<T>, n?: ?number): Array<T>;
  declare export function sampleSize<V, T: Object>(object: T, n?: number): Array<V>;
  declare export function shuffle<T>(array: ?Array<T>): Array<T>;
  declare export function shuffle<V, T: Object>(object: T): Array<V>;
  declare export function size(collection: Array<any> | Object | string): number;
  declare export function some<T>(array: ?Array<T>, predicate?: Predicate<T>): boolean;
  declare export function some<T>(array: void | null, predicate?: ?Predicate<T>): false;
  declare export function some<A, T: { [id: string]: A }>(
      object?: ?T,
      predicate?: OPredicate<A, T>
    ): boolean;
  declare export function sortBy<T>(array: ?Array<T>, ...iteratees?: Array<Iteratee<T>>): Array<T>;
  declare export function sortBy<T>(array: ?Array<T>, iteratees?: Array<Iteratee<T>>): Array<T>;
  declare export function sortBy<V, T: Object>(
      object: T,
      ...iteratees?: Array<OIteratee<T>>
    ): Array<V>;
  declare export function sortBy<V, T: Object>(object: T, iteratees?: Array<OIteratee<T>>): Array<V>;

    // Date
  declare export function now(): number;

    // Function
  declare export function after(n: number, fn: Function): Function;
  declare export function ary(func: Function, n?: number): Function;
  declare export function before(n: number, fn: Function): Function;
  declare export function bind(func: Function, thisArg: any, ...partials: Array<any>): Function;
  declare export function bindKey(obj?: ?Object, key?: ?string, ...partials?: Array<?any>): Function;
  declare export var curry: Curry;
  declare export function curry(func: Function, arity?: number): Function;
  declare export function curryRight(func: Function, arity?: number): Function;
  declare export function debounce<F: Function>(func: F, wait?: number, options?: DebounceOptions): F;
  declare export function defer(func: Function, ...args?: Array<any>): TimeoutID;
  declare export function delay(func: Function, wait: number, ...args?: Array<any>): TimeoutID;
  declare export function flip(func: Function): Function;
  declare export function memoize<F: Function>(func: F, resolver?: Function): F;
  declare export function negate(predicate: Function): Function;
  declare export function once(func: Function): Function;
  declare export function overArgs(func?: ?Function, ...transforms?: Array<Function>): Function;
  declare export function overArgs(func?: ?Function, transforms?: ?Array<Function>): Function;
  declare export function partial(func: Function, ...partials: any[]): Function;
  declare export function partialRight(func: Function, ...partials: Array<any>): Function;
  declare export function partialRight(func: Function, partials: Array<any>): Function;
  declare export function rearg(func: Function, ...indexes: Array<number>): Function;
  declare export function rearg(func: Function, indexes: Array<number>): Function;
  declare export function rest(func: Function, start?: number): Function;
  declare export function spread(func: Function): Function;
  declare export function throttle(
      func: Function,
      wait?: number,
      options?: ThrottleOptions
    ): Function;
  declare export function unary(func: Function): Function;
  declare export function wrap(value?: any, wrapper?: ?Function): Function;

    // Lang
  declare export function castArray(value: *): any[];
  declare export function clone<T>(value: T): T;
  declare export function cloneDeep<T>(value: T): T;
  declare export function cloneDeepWith<T, U>(
      value: T,
      customizer?: ?(value: T, key: number | string, object: T, stack: any) => U
    ): U;
  declare export function cloneWith<T, U>(
      value: T,
      customizer?: ?(value: T, key: number | string, object: T, stack: any) => U
    ): U;
  declare export function conformsTo<T: { [key: string]: mixed }>(
      source: T,
      predicates: T & { [key: string]: (x: any) => boolean }
    ): boolean;
  declare export function eq(value: any, other: any): boolean;
  declare export function gt(value: any, other: any): boolean;
  declare export function gte(value: any, other: any): boolean;
  declare export function isArguments(value: void | null): false;
  declare export function isArguments(value: any): boolean;
  declare export function isArray(value: Array<any>): true;
  declare export function isArray(value: any): false;
  declare export function isArrayBuffer(value: ArrayBuffer): true;
  declare export function isArrayBuffer(value: any): false;
  declare export function isArrayLike(value: Array<any> | string | {length: number}): true;
  declare export function isArrayLike(value: any): false;
  declare export function isArrayLikeObject(value: {length: number} | Array<any>): true;
  declare export function isArrayLikeObject(value: any): false;
  declare export function isBoolean(value: boolean): true;
  declare export function isBoolean(value: any): false;
  declare export function isBuffer(value: void | null): false;
  declare export function isBuffer(value: any): boolean;
  declare export function isDate(value: Date): true;
  declare export function isDate(value: any): false;
  declare export function isElement(value: Element): true;
  declare export function isElement(value: any): false;
  declare export function isEmpty(value: void | null | '' | {} | [] | number | boolean): true;
  declare export function isEmpty(value: any): boolean;
  declare export function isEqual(value: any, other: any): boolean;
  declare export function isEqualWith<T, U>(
      value?: ?T,
      other?: ?U,
      customizer?: ?(
        objValue: any,
        otherValue: any,
        key: number | string,
        object: T,
        other: U,
        stack: any
      ) => boolean | void
    ): boolean;
  declare export function isError(value: Error): true;
  declare export function isError(value: any): false;
  declare export function isFinite(value: number): boolean;
  declare export function isFinite(value: any): false;
  declare export function isFunction(value: Function): true;
  declare export function isFunction(value: any): false;
  declare export function isInteger(value: number): boolean;
  declare export function isInteger(value: any): false;
  declare export function isLength(value: void | null): false;
  declare export function isLength(value: any): boolean;
  declare export function isMap(value: Map<any, any>): true;
  declare export function isMap(value: any): false;
  declare export function isMatch(object?: ?Object, source?: ?Object): boolean;
  declare export function isMatchWith<T: Object, U: Object>(
      object?: ?T,
      source?: ?U,
      customizer?: ?(
        objValue: any,
        srcValue: any,
        key: number | string,
        object: T,
        source: U
      ) => boolean | void
    ): boolean;
  declare export function isNaN(value: Function | string | void | null | Object): false;
  declare export function isNaN(value: number): boolean;
  declare export function isNative(value: number | string | void | null | Object): false;
  declare export function isNative(value: any): boolean;
  declare export function isNil(value: void | null): true;
  declare export function isNil(value: any): false;
  declare export function isNil(value: mixed): boolean %checks(value === undefined || value === null);
  declare export function isNull(value: null): true;
  declare export function isNull(value: any): false;
  declare export function isNumber(value: number): true;
  declare export function isNumber(value: any): false;
  declare export function isObject(value: Object): true;
  declare export function isObject(value: any): false;
  declare export function isObjectLike(value: void | null): false;
  declare export function isObjectLike(value: any): boolean;
  declare export function isPlainObject(value: Object): true;
  declare export function isPlainObject(value: any): false;
  declare export function isRegExp(value: RegExp): true;
  declare export function isRegExp(value: any): false;
  declare export function isSafeInteger(value: number): boolean;
  declare export function isSafeInteger(value: any): false;
  declare export function isSet(value: Set<any>): true;
  declare export function isSet(value: any): false;
  declare export function isString(value: string): true;
  declare export function isString(
      value: number | boolean | Function | void | null | Object | Array<any>
    ): false;
  declare export function isSymbol(value: Symbol): true;
  declare export function isSymbol(value: any): false;
  declare export function isTypedArray(value: $TypedArray): true;
  declare export function isTypedArray(value: any): false;
  declare export function isUndefined(value: void): true;
  declare export function isUndefined(value: any): false;
  declare export function isWeakMap(value: WeakMap<any, any>): true;
  declare export function isWeakMap(value: any): false;
  declare export function isWeakSet(value: WeakSet<any>): true;
  declare export function isWeakSet(value: any): false;
  declare export function lt(value: any, other: any): boolean;
  declare export function lte(value: any, other: any): boolean;
  declare export function toArray(value: any): Array<any>;
  declare export function toFinite(value: void | null): 0;
  declare export function toFinite(value: any): number;
  declare export function toInteger(value: void | null): 0;
  declare export function toInteger(value: any): number;
  declare export function toLength(value: void | null): 0;
  declare export function toLength(value: any): number;
  declare export function toNumber(value: void | null): 0;
  declare export function toNumber(value: any): number;
  declare export function toPlainObject(value: any): Object;
  declare export function toSafeInteger(value: void | null): 0;
  declare export function toSafeInteger(value: any): number;
  declare export function toString(value: void | null): '';
  declare export function toString(value: any): string;

    // Math
  declare export function add(augend: number, addend: number): number;
  declare export function ceil(number: number, precision?: number): number;
  declare export function divide(dividend: number, divisor: number): number;
  declare export function floor(number: number, precision?: number): number;
  declare export function max<T>(array: ?Array<T>): T;
  declare export function maxBy<T>(array: ?Array<T>, iteratee?: Iteratee<T>): T;
  declare export function mean(array: Array<*>): number;
  declare export function meanBy<T>(array: Array<T>, iteratee?: Iteratee<T>): number;
  declare export function min<T>(array: ?Array<T>): T;
  declare export function minBy<T>(array: ?Array<T>, iteratee?: Iteratee<T>): T;
  declare export function multiply(multiplier: number, multiplicand: number): number;
  declare export function round(number: number, precision?: number): number;
  declare export function subtract(minuend: number, subtrahend: number): number;
  declare export function sum(array: Array<*>): number;
  declare export function sumBy<T>(array: Array<T>, iteratee?: Iteratee<T>): number;

    // number
  declare export function clamp(number?: number, lower?: ?number, upper?: ?number): number;
  declare export function clamp(number: ?number, lower?: ?number, upper?: ?number): 0;
  declare export function inRange(number: number, start?: number, end: number): boolean;
  declare export function random(lower?: number, upper?: number, floating?: boolean): number;

    // Object
  declare export function assign(object?: ?Object, ...sources?: Array<Object>): Object;
  declare export function assignIn(): {};
  declare export function assignIn<A, B>(a: A, b: B): A & B;
  declare export function assignIn<A, B, C>(a: A, b: B, c: C): A & B & C;
  declare export function assignIn<A, B, C, D>(a: A, b: B, c: C, d: D): A & B & C & D;
  declare export function assignIn<A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
  declare export function assignInWith(): {};
  declare export function assignInWith<T: Object, A: Object>(
      object: T,
      s1: A,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): Object;
  declare export function assignInWith<T: Object, A: Object, B: Object>(
      object: T,
      s1: A,
      s2: B,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void
    ): Object;
  declare export function assignInWith<T: Object, A: Object, B: Object, C: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C
      ) => any | void
    ): Object;
  declare export function assignInWith<T: Object, A: Object, B: Object, C: Object, D: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      s4: D,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C | D
      ) => any | void
    ): Object;
  declare export function assignWith(): {};
  declare export function assignWith<T: Object, A: Object>(
      object: T,
      s1: A,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): Object;
  declare export function assignWith<T: Object, A: Object, B: Object>(
      object: T,
      s1: A,
      s2: B,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void
    ): Object;
  declare export function assignWith<T: Object, A: Object, B: Object, C: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C
      ) => any | void
    ): Object;
  declare export function assignWith<T: Object, A: Object, B: Object, C: Object, D: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      s4: D,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C | D
      ) => any | void
    ): Object;
  declare export function at(object?: ?Object, ...paths: Array<string>): Array<any>;
  declare export function at(object?: ?Object, paths: Array<string>): Array<any>;
  declare export function create<T>(prototype: T, properties: Object): $Supertype<T>;
  declare export function create(prototype: any, properties: void | null): {};
  declare export function defaults(object?: ?Object, ...sources?: Array<Object>): Object;
  declare export function defaultsDeep(object?: ?Object, ...sources?: Array<Object>): Object;
    // alias for _.toPairs
  declare export function entries(object?: ?Object): Array<[string, any]>;
    // alias for _.toPairsIn
  declare export function entriesIn(object?: ?Object): Array<[string, any]>;
    // alias for _.assignIn
  declare export function extend<A, B>(a?: ?A, b?: ?B): A & B;
  declare export function extend<A, B, C>(a: A, b: B, c: C): A & B & C;
  declare export function extend<A, B, C, D>(a: A, b: B, c: C, d: D): A & B & C & D;
  declare export function extend<A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
    // alias for _.assignInWith
  declare export function extendWith<T: Object, A: Object>(
      object?: ?T,
      s1?: ?A,
      customizer?: ?(
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): Object;
  declare export function extendWith<T: Object, A: Object, B: Object>(
      object: T,
      s1: A,
      s2: B,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void
    ): Object;
  declare export function extendWith<T: Object, A: Object, B: Object, C: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C
      ) => any | void
    ): Object;
  declare export function extendWith<T: Object, A: Object, B: Object, C: Object, D: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      s4: D,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C | D
      ) => any | void
    ): Object;
  declare export function findKey<A, T: { [id: string]: A }>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): string | void;
  declare export function findKey<A, T: { [id: string]: A }>(
      object: void | null,
      predicate?: ?OPredicate<A, T>
    ): void;
  declare export function findLastKey<A, T: { [id: string]: A }>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): string | void;
  declare export function findLastKey<A, T: { [id: string]: A }>(
      object: void | null,
      predicate?: ?OPredicate<A, T>
    ): void;
  declare export function forIn(object: Object, iteratee?: ?OIteratee<*>): Object;
  declare export function forIn(object: void | null, iteratee?: ?OIteratee<*>): null;
  declare export function forInRight(object: Object, iteratee?: ?OIteratee<*>): Object;
  declare export function forInRight(object: void | null, iteratee?: ?OIteratee<*>): null;
  declare export function forOwn(object: Object, iteratee?: ?OIteratee<*>): Object;
  declare export function forOwn(object: void | null, iteratee?: ?OIteratee<*>): null;
  declare export function forOwnRight(object: Object, iteratee?: ?OIteratee<*>): Object;
  declare export function forOwnRight(object: void | null, iteratee?: ?OIteratee<*>): null;
  declare export function functions(object?: ?Object): Array<string>;
  declare export function functionsIn(object?: ?Object): Array<string>;
  declare export function get(
      object?: ?Object | ?Array<any>,
      path?: ?Array<string> | string,
      defaultValue?: any
    ): any;
  declare export function has(object: Object, path: Array<string> | string): boolean;
  declare export function has(object: Object, path: void | null): false;
  declare export function has(object: void | null, path?: ?Array<string> | ?string): false;
  declare export function hasIn(object: Object, path: Array<string> | string): boolean;
  declare export function hasIn(object: Object, path: void | null): false;
  declare export function hasIn(object: void | null, path?: ?Array<string> | ?string): false;
  declare export function invert(object: Object, multiVal?: ?boolean): Object;
  declare export function invert(object: void | null, multiVal?: ?boolean): {};
  declare export function invertBy(object: Object, iteratee?: ?Function): Object;
  declare export function invertBy(object: void | null, iteratee?: ?Function): {};
  declare export function invoke(
      object?: ?Object,
      path?: ?Array<string> | string,
      ...args?: Array<any>
    ): any;
  declare export function keys<K>(object?: ?{ [key: K]: any }): Array<K>;
  declare export function keys(object?: ?Object): Array<string>;
  declare export function keysIn(object?: ?Object): Array<string>;
  declare export function mapKeys(object: Object, iteratee?: ?OIteratee<*>): Object;
  declare export function mapKeys(object: void | null, iteratee?: ?OIteratee<*>): {};
  declare export function mapValues(object: Object, iteratee?: ?OIteratee<*>): Object;
  declare export function mapValues(object: void | null, iteratee?: ?OIteratee<*>): {};
  declare export function merge(object?: ?Object, ...sources?: Array<?Object>): Object;
  declare export function mergeWith(): {};
  declare export function mergeWith<T: Object, A: Object>(
      object: T,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): Object;
  declare export function mergeWith<T: Object, A: Object, B: Object>(
      object: T,
      s1: A,
      s2: B,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void
    ): Object;
  declare export function mergeWith<T: Object, A: Object, B: Object, C: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C
      ) => any | void
    ): Object;
  declare export function mergeWith<T: Object, A: Object, B: Object, C: Object, D: Object>(
      object: T,
      s1: A,
      s2: B,
      s3: C,
      s4: D,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B | C | D
      ) => any | void
    ): Object;
  declare export function omit(object?: ?Object, ...props: Array<string>): Object;
  declare export function omit(object?: ?Object, props: Array<string>): Object;
  declare export function omitBy<A, T: { [id: string]: A }>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): Object;
  declare export function omitBy<A, T: void | null>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): {};
  declare export function pick(object?: ?Object, ...props: Array<string>): Object;
  declare export function pick(object?: ?Object, props: Array<string>): Object;
  declare export function pickBy<A, T: { [id: string]: A }>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): Object;
  declare export function pickBy<A, T: void | null>(
      object: T,
      predicate?: ?OPredicate<A, T>
    ): {};
  declare export function result(
      object?: ?Object,
      path?: ?Array<string> | string,
      defaultValue?: any
    ): any;
  declare export function set(object: Object, path?: ?Array<string> | string, value: any): Object;
  declare export function set<T: void | null>(
      object: T,
      path?: ?Array<string> | string,
      value?: ?any): T;
  declare export function setWith<T>(
      object: T,
      path?: ?Array<string> | string,
      value: any,
      customizer?: (nsValue: any, key: string, nsObject: T) => any
    ): Object;
  declare export function setWith<T: void | null>(
      object: T,
      path?: ?Array<string> | string,
      value?: ?any,
      customizer?: ?(nsValue: any, key: string, nsObject: T) => any
    ): T;
  declare export function toPairs(object?: ?Object | Array<*>): Array<[string, any]>;
  declare export function toPairsIn(object?: ?Object): Array<[string, any]>;
  declare export function transform(
      collection: Object | Array<any>,
      iteratee?: ?OIteratee<*>,
      accumulator?: any
    ): any;
  declare export function transform(
      collection: void | null,
      iteratee?: ?OIteratee<*>,
      accumulator?: ?any
    ): {};
  declare export function unset(object: Object, path?: ?Array<string> | ?string): boolean;
  declare export function unset(object: void | null, path?: ?Array<string> | ?string): true;
  declare export function update(object: Object, path: string[] | string, updater: Function): Object;
  declare export function update<T: void | null>(
      object: T,
      path?: ?string[] | ?string,
      updater?: ?Function): T;
  declare export function updateWith(
      object: Object,
      path?: ?string[] | ?string,
      updater?: ?Function,
      customizer?: ?Function
    ): Object;
  declare export function updateWith<T: void | null>(
      object: T,
      path?: ?string[] | ?string,
      updater?: ?Function,
      customizer?: ?Function
    ): T;
  declare export function values(object?: ?Object): Array<any>;
  declare export function valuesIn(object?: ?Object): Array<any>;

    // Seq
    // harder to read, but this is _()
  declare export default (value: any) => any;
  declare export function chain<T>(value: T): any;
  declare export function tap<T>(value: T, interceptor: (value: T) => any): T;
  declare export function thru<T1, T2>(value: T1, interceptor: (value: T1) => T2): T2;
    // TODO: _.prototype.*

    // String
  declare export function camelCase(string: string): string;
  declare export function camelCase(string: void | null): '';
  declare export function capitalize(string: string): string;
  declare export function capitalize(string: void | null): '';
  declare export function deburr(string: string): string;
  declare export function deburr(string: void | null): '';
  declare export function endsWith(string: string, target?: string, position?: ?number): boolean;
  declare export function endsWith(string: void | null, target?: ?string, position?: ?number): false;
  declare export function escape(string: string): string;
  declare export function escape(string: void | null): '';
  declare export function escapeRegExp(string: string): string;
  declare export function escapeRegExp(string: void | null): '';
  declare export function kebabCase(string: string): string;
  declare export function kebabCase(string: void | null): '';
  declare export function lowerCase(string: string): string;
  declare export function lowerCase(string: void | null): '';
  declare export function lowerFirst(string: string): string;
  declare export function lowerFirst(string: void | null): '';
  declare export function pad(string?: ?string, length?: ?number, chars?: ?string): string;
  declare export function padEnd(string?: ?string, length?: ?number, chars?: ?string): string;
  declare export function padStart(string?: ?string, length?: ?number, chars?: ?string): string;
  declare export function parseInt(string: string, radix?: ?number): number;
  declare export function repeat(string: string, n?: ?number): string;
  declare export function repeat(string: void | null, n?: ?number): '';
  declare export function replace(
      string: string,
      pattern: RegExp | string,
      replacement: ((string: string) => string) | string
    ): string;
  declare export function replace(
      string: void | null,
      pattern?: ?RegExp | ?string,
      replacement: ?((string: string) => string) | ?string
    ): '';
  declare export function snakeCase(string: string): string;
  declare export function snakeCase(string: void | null): '';
  declare export function split(
      string?: ?string,
      separator?: ?RegExp | ?string,
      limit?: ?number
    ): Array<string>;
  declare export function startCase(string: string): string;
  declare export function startCase(string: void | null): '';
  declare export function startsWith(string: string, target?: string, position?: number): boolean;
  declare export function startsWith(string: void | null, target?: ?string, position?: ?number): false;
  declare export function template(string?: ?string, options?: ?TemplateSettings): Function;
  declare export function toLower(string: string): string;
  declare export function toLower(string: void | null): '';
  declare export function toUpper(string: string): string;
  declare export function toUpper(string: void | null): '';
  declare export function trim(string: string, chars?: string): string;
  declare export function trim(string: void | null, chars?: ?string): '';
  declare export function trimEnd(string: string, chars?: ?string): string;
  declare export function trimEnd(string: void | null, chars?: ?string): '';
  declare export function trimStart(string: string, chars?: ?string): string;
  declare export function trimStart(string: void | null, chars?: ?string): '';
  declare export function truncate(string: string, options?: TruncateOptions): string;
  declare export function truncate(string: void | null, options?: ?TruncateOptions): '';
  declare export function unescape(string: string): string;
  declare export function unescape(string: void | null): '';
  declare export function upperCase(string: string): string;
  declare export function upperCase(string: void | null): '';
  declare export function upperFirst(string: string): string;
  declare export function upperFirst(string: void | null): '';
  declare export function words(string?: ?string, pattern?: ?RegExp | ?string): Array<string>;

    // Util
  declare export function attempt(func: Function, ...args: Array<any>): any;
  declare export function bindAll(object: Object, methodNames?: ?Array<string>): Object;
  declare export function bindAll<T: void | null>(object: T, methodNames?: ?Array<string>): T;
  declare export function bindAll(object: Object, ...methodNames: Array<string>): Object;
  declare export function cond(pairs?: ?NestedArray<Function>): Function;
  declare export function conforms(source?: ?Object): Function;
  declare export function constant<T>(value: T): () => T;
  declare export function defaultTo<T1: string | boolean | Object, T2>(
      value: T1,
      defaultValue: T2
    ): T1;
    // NaN is a number instead of its own type, otherwise it would behave like null/void
  declare export function defaultTo<T1: number, T2>(value: T1, defaultValue: T2): T1 | T2;
  declare export function defaultTo<T1: void | null, T2>(value: T1, defaultValue: T2): T2;
  declare export var flow: HigherOrderFunctionOptional;
  declare export var flowRight: HigherOrderFunctionOptional;
  declare export function identity<T>(value: T): T;
  declare export function iteratee(func?: any): Function;
  declare export function matches(source?: ?Object): Function;
  declare export function matchesProperty(path?: ?Array<string> | string, srcValue: any): Function;
  declare export function method(path?: ?Array<string> | string, ...args?: Array<any>): Function;
  declare export function methodOf(object?: ?Object, ...args?: Array<any>): Function;
  declare export function mixin<T: Function | Object>(
      object?: T,
      source: Object,
      options?: { chain: boolean }
    ): T;
  declare export function noConflict(): $Exports<"lodash">;
  declare export function noop(...args: Array<mixed>): void;
  declare export function nthArg(n?: ?number): Function;
  declare export function over(...iteratees: Array<Function>): Function;
  declare export function over(iteratees: Array<Function>): Function;
  declare export function overEvery(...predicates: Array<Function>): Function;
  declare export function overEvery(predicates: Array<Function>): Function;
  declare export function overSome(...predicates: Array<Function>): Function;
  declare export function overSome(predicates: Array<Function>): Function;
  declare export function property(path?: ?Array<string> | string): Function;
  declare export function propertyOf(object?: ?Object): Function;
  declare export function range(start: number, end: number, step?: number): Array<number>;
  declare export function range(end: number, step?: number): Array<number>;
  declare export function rangeRight(start?: ?number, end?: ?number, step?: ?number): Array<number>;
  declare export function rangeRight(end?: ?number, step?: ?number): Array<number>;
  declare export function runInContext(context?: ?Object): Function;

  declare export function stubArray(): Array<*>;
  declare export function stubFalse(): false;
  declare export function stubObject(): {};
  declare export function stubString(): "";
  declare export function stubTrue(): true;
  declare export function times(n?: ?number, ...rest?: Array<void | null>): Array<number>;
  declare export function times<T>(n: number, iteratee: (i: number) => T): Array<T>;
  declare export function toPath(value: any): Array<string>;
  declare export function uniqueId(prefix?: ?string): string;

    // Properties
  declare export var VERSION: string;
  declare export var templateSettings: TemplateSettings;
}

declare module "lodash/fp" {
  declare type HigherOrderFunction = (funcs: Array<Function>) => Function

  declare type __CurriedFunction1<A, R, AA: A> = (...r: [AA]) => R;
  declare type CurriedFunction1<A, R> = __CurriedFunction1<A, R, *>;

  declare type __CurriedFunction2<A, B, R, AA: A, BB: B> = ((
    ...r: [AA]
  ) => CurriedFunction1<BB, R>) &
    ((...r: [AA, BB]) => R);
  declare type CurriedFunction2<A, B, R> = __CurriedFunction2<A, B, R, *, *>;

  declare type __CurriedFunction3<A, B, C, R, AA: A, BB: B, CC: C> = ((
    ...r: [AA]
  ) => CurriedFunction2<BB, CC, R>) &
    ((...r: [AA, BB]) => CurriedFunction1<CC, R>) &
    ((...r: [AA, BB, CC]) => R);
  declare type CurriedFunction3<A, B, C, R> = __CurriedFunction3<
    A,
    B,
    C,
    R,
    *,
    *,
    *
  >;

  declare type __CurriedFunction4<
    A,
    B,
    C,
    D,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D
  > = ((...r: [AA]) => CurriedFunction3<BB, CC, DD, R>) &
    ((...r: [AA, BB]) => CurriedFunction2<CC, DD, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction1<DD, R>) &
    ((...r: [AA, BB, CC, DD]) => R);
  declare type CurriedFunction4<A, B, C, D, R> = __CurriedFunction4<
    A,
    B,
    C,
    D,
    R,
    *,
    *,
    *,
    *
  >;

  declare type __CurriedFunction5<
    A,
    B,
    C,
    D,
    E,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D,
    EE: E
  > = ((...r: [AA]) => CurriedFunction4<BB, CC, DD, EE, R>) &
    ((...r: [AA, BB]) => CurriedFunction3<CC, DD, EE, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction2<DD, EE, R>) &
    ((...r: [AA, BB, CC, DD]) => CurriedFunction1<EE, R>) &
    ((...r: [AA, BB, CC, DD, EE]) => R);
  declare type CurriedFunction5<A, B, C, D, E, R> = __CurriedFunction5<
    A,
    B,
    C,
    D,
    E,
    R,
    *,
    *,
    *,
    *,
    *
  >;

  declare type __CurriedFunction6<
    A,
    B,
    C,
    D,
    E,
    F,
    R,
    AA: A,
    BB: B,
    CC: C,
    DD: D,
    EE: E,
    FF: F
  > = ((...r: [AA]) => CurriedFunction5<BB, CC, DD, EE, FF, R>) &
    ((...r: [AA, BB]) => CurriedFunction4<CC, DD, EE, FF, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction3<DD, EE, FF, R>) &
    ((...r: [AA, BB, CC, DD]) => CurriedFunction2<EE, FF, R>) &
    ((...r: [AA, BB, CC, DD, EE]) => CurriedFunction1<FF, R>) &
    ((...r: [AA, BB, CC, DD, EE, FF]) => R);
  declare type CurriedFunction6<A, B, C, D, E, F, R> = __CurriedFunction6<
    A,
    B,
    C,
    D,
    E,
    F,
    R,
    *,
    *,
    *,
    *,
    *,
    *
  >;

  declare type Curry = (<A, R>((...r: [A]) => R) => CurriedFunction1<A, R>) &
    (<A, B, R>((...r: [A, B]) => R) => CurriedFunction2<A, B, R>) &
    (<A, B, C, R>((...r: [A, B, C]) => R) => CurriedFunction3<A, B, C, R>) &
    (<A, B, C, D, R>(
      (...r: [A, B, C, D]) => R
    ) => CurriedFunction4<A, B, C, D, R>) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R
    ) => CurriedFunction5<A, B, C, D, E, R>) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R
    ) => CurriedFunction6<A, B, C, D, E, F, R>);

  declare type UnaryFn<A, R> = (a: A) => R;

  declare type TemplateSettings = {
    escape?: RegExp,
    evaluate?: RegExp,
    imports?: Object,
    interpolate?: RegExp,
    variable?: string
  };

  declare type TruncateOptions = {
    length?: number,
    omission?: string,
    separator?: RegExp | string
  };

  declare type DebounceOptions = {
    leading?: boolean,
    maxWait?: number,
    trailing?: boolean
  };

  declare type ThrottleOptions = {
    leading?: boolean,
    trailing?: boolean
  };

  declare type NestedArray<T> = Array<Array<T>>;

  declare type matchesIterateeShorthand = Object;
  declare type matchesPropertyIterateeShorthand = [string, any];
  declare type propertyIterateeShorthand = string;

  declare type OPredicate<A> =
    | ((value: A) => any)
    | matchesIterateeShorthand
    | matchesPropertyIterateeShorthand
    | propertyIterateeShorthand;

  declare type OIterateeWithResult<V, R> = Object | string | ((value: V) => R);
  declare type OIteratee<O> = OIterateeWithResult<any, any>;
  declare type OFlatMapIteratee<T, U> = OIterateeWithResult<any, Array<U>>;

  declare type Predicate<T> =
    | ((value: T) => any)
    | matchesIterateeShorthand
    | matchesPropertyIterateeShorthand
    | propertyIterateeShorthand;

  declare type _ValueOnlyIteratee<T> = (value: T) => mixed;
  declare type ValueOnlyIteratee<T> = _ValueOnlyIteratee<T> | string;
  declare type _Iteratee<T> = (item: T) => mixed;
  declare type Iteratee<T> = _Iteratee<T> | Object | string;
  declare type FlatMapIteratee<T, U> =
    | ((item: T) => Array<U>)
    | Object
    | string;
  declare type Comparator<T> = (item: T, item2: T) => boolean;

  declare type MapIterator<T, U> = ((item: T) => U) | propertyIterateeShorthand;

  declare type OMapIterator<T, U> =
    | ((item: T) => U)
    | propertyIterateeShorthand;

  // exporting functions
    // Array
  declare export function chunk<T>(size: number): (array: Array<T>) => Array<Array<T>>;
  declare export function chunk<T>(size: number, array: Array<T>): Array<Array<T>>;
  declare export function compact<T, N: T>(array: Array<N>): Array<T>;
  declare export function concat<T, U, A: Array<T> | T, B: Array<U> | U>(
      base: A
    ): (elements: B) => Array<T | U>;
  declare export function concat<T, U, A: Array<T> | T, B: Array<U> | U>(
      base: A,
      elements: B
    ): Array<T | U>;
  declare export function difference<T>(values: Array<T>): (array: Array<T>) => Array<T>;
  declare export function difference<T>(values: Array<T>, array: Array<T>): Array<T>;
  declare export function differenceBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((values: Array<T>) => (array: Array<T>) => T[]) &
      ((values: Array<T>, array: Array<T>) => T[]);
  declare export function differenceBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      values: Array<T>
    ): (array: Array<T>) => T[];
  declare export function differenceBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      values: Array<T>,
      array: Array<T>
    ): T[];
  declare export function differenceWith<T>(
      values: T[]
    ): ((comparator: Comparator<T>) => (array: T[]) => T[]) &
      ((comparator: Comparator<T>, array: T[]) => T[]);
  declare export function differenceWith<T>(
      values: T[],
      comparator: Comparator<T>
    ): (array: T[]) => T[];
  declare export function differenceWith<T>(values: T[], comparator: Comparator<T>, array: T[]): T[];
  declare export function drop<T>(n: number): (array: Array<T>) => Array<T>;
  declare export function drop<T>(n: number, array: Array<T>): Array<T>;
  declare export function dropLast<T>(n: number): (array: Array<T>) => Array<T>;
  declare export function dropLast<T>(n: number, array: Array<T>): Array<T>;
  declare export function dropRight<T>(n: number): (array: Array<T>) => Array<T>;
  declare export function dropRight<T>(n: number, array: Array<T>): Array<T>;
  declare export function dropRightWhile<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
  declare export function dropRightWhile<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
  declare export function dropWhile<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
  declare export function dropWhile<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
  declare export function dropLastWhile<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
  declare export function dropLastWhile<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
  declare export function fill<T, U>(
      start: number
    ): ((
      end: number
    ) => ((value: U) => (array: Array<T>) => Array<T | U>) &
      ((value: U, array: Array<T>) => Array<T | U>)) &
      ((end: number, value: U) => (array: Array<T>) => Array<T | U>) &
      ((end: number, value: U, array: Array<T>) => Array<T | U>);
  declare export function fill<T, U>(
      start: number,
      end: number
    ): ((value: U) => (array: Array<T>) => Array<T | U>) &
      ((value: U, array: Array<T>) => Array<T | U>);
  declare export function fill<T, U>(
      start: number,
      end: number,
      value: U
    ): (array: Array<T>) => Array<T | U>;
  declare export function fill<T, U>(
      start: number,
      end: number,
      value: U,
      array: Array<T>
    ): Array<T | U>;
  declare export function findIndex<T>(predicate: Predicate<T>): (array: $ReadOnlyArray<T>) => number;
  declare export function findIndex<T>(predicate: Predicate<T>, array: $ReadOnlyArray<T>): number;
  declare export function findIndexFrom<T>(
      predicate: Predicate<T>
    ): ((fromIndex: number) => (array: $ReadOnlyArray<T>) => number) &
      ((fromIndex: number, array: $ReadOnlyArray<T>) => number);
  declare export function findIndexFrom<T>(
      predicate: Predicate<T>,
      fromIndex: number
    ): (array: $ReadOnlyArray<T>) => number;
  declare export function findIndexFrom<T>(
      predicate: Predicate<T>,
      fromIndex: number,
      array: $ReadOnlyArray<T>
    ): number;
  declare export function findLastIndex<T>(
      predicate: Predicate<T>
    ): (array: $ReadOnlyArray<T>) => number;
  declare export function findLastIndex<T>(predicate: Predicate<T>, array: $ReadOnlyArray<T>): number;
  declare export function findLastIndexFrom<T>(
      predicate: Predicate<T>
    ): ((fromIndex: number) => (array: $ReadOnlyArray<T>) => number) &
      ((fromIndex: number, array: $ReadOnlyArray<T>) => number);
  declare export function findLastIndexFrom<T>(
      predicate: Predicate<T>,
      fromIndex: number
    ): (array: $ReadOnlyArray<T>) => number;
  declare export function findLastIndexFrom<T>(
      predicate: Predicate<T>,
      fromIndex: number,
      array: $ReadOnlyArray<T>
    ): number;
    // alias of _.head
  declare export function first<T>(array: Array<T>): T;
  declare export function flatten<T, X>(array: Array<Array<T> | X>): Array<T | X>;
  declare export function unnest<T, X>(array: Array<Array<T> | X>): Array<T | X>;
  declare export function flattenDeep<T>(array: any[]): Array<T>;
  declare export function flattenDepth(depth: number): (array: any[]) => any[];
  declare export function flattenDepth(depth: number, array: any[]): any[];
  declare export function fromPairs<A, B>(pairs: Array<[A, B]>): { [key: A]: B };
  declare export function head<T>(array: Array<T>): T;
  declare export function indexOf<T>(value: T): (array: Array<T>) => number;
  declare export function indexOf<T>(value: T, array: Array<T>): number;
  declare export function indexOfFrom<T>(
      value: T
    ): ((fromIndex: number) => (array: Array<T>) => number) &
      ((fromIndex: number, array: Array<T>) => number);
  declare export function indexOfFrom<T>(value: T, fromIndex: number): (array: Array<T>) => number;
  declare export function indexOfFrom<T>(value: T, fromIndex: number, array: Array<T>): number;
  declare export function initial<T>(array: Array<T>): Array<T>;
  declare export function init<T>(array: Array<T>): Array<T>;
  declare export function intersection<T>(a1: Array<T>): (a2: Array<T>) => Array<T>;
  declare export function intersection<T>(a1: Array<T>, a2: Array<T>): Array<T>;
  declare export function intersectionBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
  declare export function intersectionBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
  declare export function intersectionBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
  declare export function intersectionWith<T>(
      comparator: Comparator<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
  declare export function intersectionWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
  declare export function intersectionWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
  declare export function join<T>(separator: string): (array: Array<T>) => string;
  declare export function join<T>(separator: string, array: Array<T>): string;
  declare export function last<T>(array: Array<T>): T;
  declare export function lastIndexOf<T>(value: T): (array: Array<T>) => number;
  declare export function lastIndexOf<T>(value: T, array: Array<T>): number;
  declare export function lastIndexOfFrom<T>(
      value: T
    ): ((fromIndex: number) => (array: Array<T>) => number) &
      ((fromIndex: number, array: Array<T>) => number);
  declare export function lastIndexOfFrom<T>(
      value: T,
      fromIndex: number
    ): (array: Array<T>) => number;
  declare export function lastIndexOfFrom<T>(value: T, fromIndex: number, array: Array<T>): number;
  declare export function nth<T>(n: number): (array: T[]) => T;
  declare export function nth<T>(n: number, array: T[]): T;
  declare export function pull<T>(value: T): (array: Array<T>) => Array<T>;
  declare export function pull<T>(value: T, array: Array<T>): Array<T>;
  declare export function pullAll<T>(values: Array<T>): (array: Array<T>) => Array<T>;
  declare export function pullAll<T>(values: Array<T>, array: Array<T>): Array<T>;
  declare export function pullAllBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((values: Array<T>) => (array: Array<T>) => Array<T>) &
      ((values: Array<T>, array: Array<T>) => Array<T>);
  declare export function pullAllBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      values: Array<T>
    ): (array: Array<T>) => Array<T>;
  declare export function pullAllBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      values: Array<T>,
      array: Array<T>
    ): Array<T>;
  declare export function pullAllWith<T>(
      comparator: Function
    ): ((values: T[]) => (array: T[]) => T[]) &
      ((values: T[], array: T[]) => T[]);
  declare export function pullAllWith<T>(comparator: Function, values: T[]): (array: T[]) => T[];
  declare export function pullAllWith<T>(comparator: Function, values: T[], array: T[]): T[];
  declare export function pullAt<T>(indexed: Array<number>): (array: Array<T>) => Array<T>;
  declare export function pullAt<T>(indexed: Array<number>, array: Array<T>): Array<T>;
  declare export function remove<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
  declare export function remove<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
  declare export function reverse<T>(array: Array<T>): Array<T>;
  declare export function slice<T>(
      start: number
    ): ((end: number) => (array: Array<T>) => Array<T>) &
      ((end: number, array: Array<T>) => Array<T>);
  declare export function slice<T>(start: number, end: number): (array: Array<T>) => Array<T>;
  declare export function slice<T>(start: number, end: number, array: Array<T>): Array<T>;
  declare export function sortedIndex<T>(value: T): (array: Array<T>) => number;
  declare export function sortedIndex<T>(value: T, array: Array<T>): number;
  declare export function sortedIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((value: T) => (array: Array<T>) => number) &
      ((value: T, array: Array<T>) => number);
  declare export function sortedIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      value: T
    ): (array: Array<T>) => number;
  declare export function sortedIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      value: T,
      array: Array<T>
    ): number;
  declare export function sortedIndexOf<T>(value: T): (array: Array<T>) => number;
  declare export function sortedIndexOf<T>(value: T, array: Array<T>): number;
  declare export function sortedLastIndex<T>(value: T): (array: Array<T>) => number;
  declare export function sortedLastIndex<T>(value: T, array: Array<T>): number;
  declare export function sortedLastIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((value: T) => (array: Array<T>) => number) &
      ((value: T, array: Array<T>) => number);
  declare export function sortedLastIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      value: T
    ): (array: Array<T>) => number;
  declare export function sortedLastIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      value: T,
      array: Array<T>
    ): number;
  declare export function sortedLastIndexOf<T>(value: T): (array: Array<T>) => number;
  declare export function sortedLastIndexOf<T>(value: T, array: Array<T>): number;
  declare export function sortedUniq<T>(array: Array<T>): Array<T>;
  declare export function sortedUniqBy<T>(
      iteratee: (value: T) => mixed
    ): (array: Array<T>) => Array<T>;
  declare export function sortedUniqBy<T>(iteratee: (value: T) => mixed, array: Array<T>): Array<T>;
  declare export function tail<T>(array: Array<T>): Array<T>;
  declare export function take<T>(n: number): (array: Array<T>) => Array<T>;
  declare export function take<T>(n: number, array: Array<T>): Array<T>;
  declare export function takeRight<T>(n: number): (array: Array<T>) => Array<T>;
  declare export function takeRight<T>(n: number, array: Array<T>): Array<T>;
  declare export function takeLast<T>(n: number): (array: Array<T>) => Array<T>;
  declare export function takeLast<T>(n: number, array: Array<T>): Array<T>;
  declare export function takeRightWhile<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
  declare export function takeRightWhile<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
  declare export function takeLastWhile<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
  declare export function takeLastWhile<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
  declare export function takeWhile<T>(predicate: Predicate<T>): (array: Array<T>) => Array<T>;
  declare export function takeWhile<T>(predicate: Predicate<T>, array: Array<T>): Array<T>;
  declare export function union<T>(a1: Array<T>): (a2: Array<T>) => Array<T>;
  declare export function union<T>(a1: Array<T>, a2: Array<T>): Array<T>;
  declare export function unionBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
  declare export function unionBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
  declare export function unionBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
  declare export function unionWith<T>(
      comparator: Comparator<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
  declare export function unionWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
  declare export function unionWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
  declare export function uniq<T>(array: Array<T>): Array<T>;
  declare export function uniqBy<T>(iteratee: ValueOnlyIteratee<T>): (array: Array<T>) => Array<T>;
  declare export function uniqBy<T>(iteratee: ValueOnlyIteratee<T>, array: Array<T>): Array<T>;
  declare export function uniqWith<T>(comparator: Comparator<T>): (array: Array<T>) => Array<T>;
  declare export function uniqWith<T>(comparator: Comparator<T>, array: Array<T>): Array<T>;
  declare export function unzip<T>(array: Array<T>): Array<T>;
  declare export function unzipWith<T>(iteratee: Iteratee<T>): (array: Array<T>) => Array<T>;
  declare export function unzipWith<T>(iteratee: Iteratee<T>, array: Array<T>): Array<T>;
  declare export function without<T>(values: Array<T>): (array: Array<T>) => Array<T>;
  declare export function without<T>(values: Array<T>, array: Array<T>): Array<T>;
  declare export function xor<T>(a1: Array<T>): (a2: Array<T>) => Array<T>;
  declare export function xor<T>(a1: Array<T>, a2: Array<T>): Array<T>;
  declare export function symmetricDifference<T>(a1: Array<T>): (a2: Array<T>) => Array<T>;
  declare export function symmetricDifference<T>(a1: Array<T>, a2: Array<T>): Array<T>;
  declare export function xorBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
  declare export function xorBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
  declare export function xorBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
  declare export function symmetricDifferenceBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
  declare export function symmetricDifferenceBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
  declare export function symmetricDifferenceBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
  declare export function xorWith<T>(
      comparator: Comparator<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
  declare export function xorWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
  declare export function xorWith<T>(comparator: Comparator<T>, a1: Array<T>, a2: Array<T>): Array<T>;
  declare export function symmetricDifferenceWith<T>(
      comparator: Comparator<T>
    ): ((a1: Array<T>) => (a2: Array<T>) => Array<T>) &
      ((a1: Array<T>, a2: Array<T>) => Array<T>);
  declare export function symmetricDifferenceWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>
    ): (a2: Array<T>) => Array<T>;
  declare export function symmetricDifferenceWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>;
  declare export function zip<A, B>(a1: A[]): (a2: B[]) => Array<[A, B]>;
  declare export function zip<A, B>(a1: A[], a2: B[]): Array<[A, B]>;
  declare export function zipAll(arrays: Array<Array<any>>): Array<any>;
  declare export function zipObject<K, V>(props?: Array<K>): (values?: Array<V>) => { [key: K]: V };
  declare export function zipObject<K, V>(props?: Array<K>, values?: Array<V>): { [key: K]: V };
  declare export function zipObj(props: Array<any>): (values: Array<any>) => Object;
  declare export function zipObj(props: Array<any>, values: Array<any>): Object;
  declare export function zipObjectDeep(props: any[]): (values: any) => Object;
  declare export function zipObjectDeep(props: any[], values: any): Object;
  declare export function zipWith<T>(
      iteratee: Iteratee<T>
    ): ((a1: NestedArray<T>) => (a2: NestedArray<T>) => Array<T>) &
      ((a1: NestedArray<T>, a2: NestedArray<T>) => Array<T>);
  declare export function zipWith<T>(
      iteratee: Iteratee<T>,
      a1: NestedArray<T>
    ): (a2: NestedArray<T>) => Array<T>;
  declare export function zipWith<T>(
      iteratee: Iteratee<T>,
      a1: NestedArray<T>,
      a2: NestedArray<T>
    ): Array<T>;
    // Collection
  declare export function countBy<T>(
      iteratee: ValueOnlyIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => { [string]: number };
  declare export function countBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): { [string]: number };
    // alias of _.forEach
  declare export function each<T>(
      iteratee: Iteratee<T> | OIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
  declare export function each<T>(
      iteratee: Iteratee<T> | OIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;
    // alias of _.forEachRight
  declare export function eachRight<T>(
      iteratee: Iteratee<T> | OIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
  declare export function eachRight<T>(
      iteratee: Iteratee<T> | OIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;
  declare export function every<T>(
      iteratee: Iteratee<T> | OIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => boolean;
  declare export function every<T>(
      iteratee: Iteratee<T> | OIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): boolean;
  declare export function all<T>(
      iteratee: Iteratee<T> | OIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => boolean;
  declare export function all<T>(
      iteratee: Iteratee<T> | OIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): boolean;
  declare export function filter<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
  declare export function filter<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;
  declare export function find<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: $ReadOnlyArray<T> | { [id: any]: T }) => T | void;
  declare export function find<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ): T | void;
  declare export function findFrom<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): ((
      fromIndex: number
    ) => (collection: $ReadOnlyArray<T> | { [id: any]: T }) => T | void) &
      ((
        fromIndex: number,
        collection: $ReadOnlyArray<T> | { [id: any]: T }
      ) => T | void);
  declare export function findFrom<T>(
      predicate: Predicate<T> | OPredicate<T>,
      fromIndex: number
    ): (collection: Array<T> | { [id: any]: T }) => T | void;
  declare export function findFrom<T>(
      predicate: Predicate<T> | OPredicate<T>,
      fromIndex: number,
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ): T | void;
  declare export function findLast<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: $ReadOnlyArray<T> | { [id: any]: T }) => T | void;
  declare export function findLast<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ): T | void;
  declare export function findLastFrom<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): ((
      fromIndex: number
    ) => (collection: $ReadOnlyArray<T> | { [id: any]: T }) => T | void) &
      ((
        fromIndex: number,
        collection: $ReadOnlyArray<T> | { [id: any]: T }
      ) => T | void);
  declare export function findLastFrom<T>(
      predicate: Predicate<T> | OPredicate<T>,
      fromIndex: number
    ): (collection: $ReadOnlyArray<T> | { [id: any]: T }) => T | void;
  declare export function findLastFrom<T>(
      predicate: Predicate<T> | OPredicate<T>,
      fromIndex: number,
      collection: $ReadOnlyArray<T> | { [id: any]: T }
    ): T | void;
  declare export function flatMap<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>
    ): (collection: Array<T> | { [id: any]: T }) => Array<U>;
  declare export function flatMap<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>,
      collection: Array<T> | { [id: any]: T }
    ): Array<U>;
  declare export function flatMapDeep<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>
    ): (collection: Array<T> | { [id: any]: T }) => Array<U>;
  declare export function flatMapDeep<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>,
      collection: Array<T> | { [id: any]: T }
    ): Array<U>;
  declare export function flatMapDepth<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>
    ): ((
      depth: number
    ) => (collection: Array<T> | { [id: any]: T }) => Array<U>) &
      ((depth: number, collection: Array<T> | { [id: any]: T }) => Array<U>);
  declare export function flatMapDepth<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>,
      depth: number
    ): (collection: Array<T> | { [id: any]: T }) => Array<U>;
  declare export function flatMapDepth<T, U>(
      iteratee: FlatMapIteratee<T, U> | OFlatMapIteratee<T, U>,
      depth: number,
      collection: Array<T> | { [id: any]: T }
    ): Array<U>;
  declare export function forEach<T>(
      iteratee: Iteratee<T> | OIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
  declare export function forEach<T>(
      iteratee: Iteratee<T> | OIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;
  declare export function forEachRight<T>(
      iteratee: Iteratee<T> | OIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
  declare export function forEachRight<T>(
      iteratee: Iteratee<T> | OIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;
  declare export function groupBy<V, T>(
      iteratee: ValueOnlyIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => { [key: V]: Array<T> };
  declare export function groupBy<V, T>(
      iteratee: ValueOnlyIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): { [key: V]: Array<T> };
  declare export function includes(value: string): (str: string) => boolean;
  declare export function includes(value: string, str: string): boolean;
  declare export function includes<T>(value: T): (collection: Array<T> | { [id: any]: T }) => boolean;
  declare export function includes<T>(value: T, collection: Array<T> | { [id: any]: T }): boolean;
  declare export function contains(value: string): (str: string) => boolean;
  declare export function contains(value: string, str: string): boolean;
  declare export function contains<T>(value: T): (collection: Array<T> | { [id: any]: T }) => boolean;
  declare export function contains<T>(value: T, collection: Array<T> | { [id: any]: T }): boolean;
  declare export function includesFrom(
      value: string
    ): ((fromIndex: number) => (str: string) => boolean) &
      ((fromIndex: number, str: string) => boolean);
  declare export function includesFrom(value: string, fromIndex: number): (str: string) => boolean;
  declare export function includesFrom(value: string, fromIndex: number, str: string): boolean;
  declare export function includesFrom<T>(
      value: T
    ): ((fromIndex: number) => (collection: Array<T>) => boolean) &
      ((fromIndex: number, collection: Array<T>) => boolean);
  declare export function includesFrom<T>(
      value: T,
      fromIndex: number
    ): (collection: Array<T>) => boolean;
  declare export function includesFrom<T>(value: T, fromIndex: number, collection: Array<T>): boolean;
  declare export function invokeMap<T>(
      path: ((value: T) => Array<string> | string) | Array<string> | string
    ): (collection: Array<T> | { [id: any]: T }) => Array<any>;
  declare export function invokeMap<T>(
      path: ((value: T) => Array<string> | string) | Array<string> | string,
      collection: Array<T> | { [id: any]: T }
    ): Array<any>;
  declare export function invokeArgsMap<T>(
      path: ((value: T) => Array<string> | string) | Array<string> | string
    ): ((
      collection: Array<T> | { [id: any]: T }
    ) => (args: Array<any>) => Array<any>) &
      ((
        collection: Array<T> | { [id: any]: T },
        args: Array<any>
      ) => Array<any>);
  declare export function invokeArgsMap<T>(
      path: ((value: T) => Array<string> | string) | Array<string> | string,
      collection: Array<T> | { [id: any]: T }
    ): (args: Array<any>) => Array<any>;
  declare export function invokeArgsMap<T>(
      path: ((value: T) => Array<string> | string) | Array<string> | string,
      collection: Array<T> | { [id: any]: T },
      args: Array<any>
    ): Array<any>;
  declare export function keyBy<T, V>(
      iteratee: ValueOnlyIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => { [key: V]: T };
  declare export function keyBy<T, V>(
      iteratee: ValueOnlyIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): { [key: V]: T };
  declare export function indexBy<T, V>(
      iteratee: ValueOnlyIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => { [key: V]: T };
  declare export function indexBy<T, V>(
      iteratee: ValueOnlyIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): { [key: V]: T };
  declare export function map<T, U>(
      iteratee: MapIterator<T, U> | OMapIterator<T, U>
    ): (collection: Array<T> | { [id: any]: T }) => Array<U>;
  declare export function map<T, U>(
      iteratee: MapIterator<T, U> | OMapIterator<T, U>,
      collection: Array<T> | { [id: any]: T }
    ): Array<U>;
  declare export function map(iteratee: (char: string) => any): (str: string) => string;
  declare export function map(iteratee: (char: string) => any, str: string): string;
  declare export function pluck<T, U>(
      iteratee: MapIterator<T, U> | OMapIterator<T, U>
    ): (collection: Array<T> | { [id: any]: T }) => Array<U>;
  declare export function pluck<T, U>(
      iteratee: MapIterator<T, U> | OMapIterator<T, U>,
      collection: Array<T> | { [id: any]: T }
    ): Array<U>;
  declare export function pluck(iteratee: (char: string) => any): (str: string) => string;
  declare export function pluck(iteratee: (char: string) => any, str: string): string;
  declare export function orderBy<T>(
      iteratees: Array<Iteratee<T> | OIteratee<*>> | string
    ): ((
      orders: Array<"asc" | "desc"> | string
    ) => (collection: Array<T> | { [id: any]: T }) => Array<T>) &
      ((
        orders: Array<"asc" | "desc"> | string,
        collection: Array<T> | { [id: any]: T }
      ) => Array<T>);
  declare export function orderBy<T>(
      iteratees: Array<Iteratee<T> | OIteratee<*>> | string,
      orders: Array<"asc" | "desc"> | string
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
  declare export function orderBy<T>(
      iteratees: Array<Iteratee<T> | OIteratee<*>> | string,
      orders: Array<"asc" | "desc"> | string,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;
  declare export function partition<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: Array<T> | { [id: any]: T }) => [Array<T>, Array<T>];
  declare export function partition<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: Array<T> | { [id: any]: T }
    ): [Array<T>, Array<T>];
  declare export function reduce<T, U>(
      iteratee: (accumulator: U, value: T) => U
    ): ((accumulator: U) => (collection: Array<T> | { [id: any]: T }) => U) &
      ((accumulator: U, collection: Array<T> | { [id: any]: T }) => U);
  declare export function reduce<T, U>(
      iteratee: (accumulator: U, value: T) => U,
      accumulator: U
    ): (collection: Array<T> | { [id: any]: T }) => U;
  declare export function reduce<T, U>(
      iteratee: (accumulator: U, value: T) => U,
      accumulator: U,
      collection: Array<T> | { [id: any]: T }
    ): U;
  declare export function reduceRight<T, U>(
      iteratee: (value: T, accumulator: U) => U
    ): ((accumulator: U) => (collection: Array<T> | { [id: any]: T }) => U) &
      ((accumulator: U, collection: Array<T> | { [id: any]: T }) => U);
  declare export function reduceRight<T, U>(
      iteratee: (value: T, accumulator: U) => U,
      accumulator: U
    ): (collection: Array<T> | { [id: any]: T }) => U;
  declare export function reduceRight<T, U>(
      iteratee: (value: T, accumulator: U) => U,
      accumulator: U,
      collection: Array<T> | { [id: any]: T }
    ): U;
  declare export function reject<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
  declare export function reject<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;
  declare export function sample<T>(collection: Array<T> | { [id: any]: T }): T;
  declare export function sampleSize<T>(
      n: number
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
  declare export function sampleSize<T>(n: number, collection: Array<T> | { [id: any]: T }): Array<T>;
  declare export function shuffle<T>(collection: Array<T> | { [id: any]: T }): Array<T>;
  declare export function size(collection: Array<any> | Object | string): number;
  declare export function some<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: Array<T> | { [id: any]: T }) => boolean;
  declare export function some<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: Array<T> | { [id: any]: T }
    ): boolean;
  declare export function any<T>(
      predicate: Predicate<T> | OPredicate<T>
    ): (collection: Array<T> | { [id: any]: T }) => boolean;
  declare export function any<T>(
      predicate: Predicate<T> | OPredicate<T>,
      collection: Array<T> | { [id: any]: T }
    ): boolean;
  declare export function sortBy<T>(
      iteratees: Array<Iteratee<T> | OIteratee<T>> | Iteratee<T> | OIteratee<T>
    ): (collection: Array<T> | { [id: any]: T }) => Array<T>;
  declare export function sortBy<T>(
      iteratees: Array<Iteratee<T> | OIteratee<T>> | Iteratee<T> | OIteratee<T>,
      collection: Array<T> | { [id: any]: T }
    ): Array<T>;

    // Date
  declare export function now(): number;

    // Function
  declare export function after(fn: Function): (n: number) => Function;
  declare export function after(fn: Function, n: number): Function;
  declare export function ary(func: Function): Function;
  declare export function nAry(n: number): (func: Function) => Function;
  declare export function nAry(n: number, func: Function): Function;
  declare export function before(fn: Function): (n: number) => Function;
  declare export function before(fn: Function, n: number): Function;
  declare export function bind(func: Function): (thisArg: any) => Function;
  declare export function bind(func: Function, thisArg: any): Function;
  declare export function bindKey(obj: Object): (key: string) => Function;
  declare export function bindKey(obj: Object, key: string): Function;
  declare export var curry: Curry;
  declare export function curryN(arity: number): (func: Function) => Function;
  declare export function curryN(arity: number, func: Function): Function;
  declare export function curryRight(func: Function): Function;
  declare export function curryRightN(arity: number): (func: Function) => Function;
  declare export function curryRightN(arity: number, func: Function): Function;
  declare export function debounce(wait: number): <F: Function>(func: F) => F;
  declare export function debounce<F: Function>(wait: number, func: F): F;
  declare export function defer(func: Function): TimeoutID;
  declare export function delay(wait: number): (func: Function) => TimeoutID;
  declare export function delay(wait: number, func: Function): TimeoutID;
  declare export function flip(func: Function): Function;
  declare export function memoize<F: Function>(func: F): F;
  declare export function negate(predicate: Function): Function;
  declare export function complement(predicate: Function): Function;
  declare export function once(func: Function): Function;
  declare export function overArgs(func: Function): (transforms: Array<Function>) => Function;
  declare export function overArgs(func: Function, transforms: Array<Function>): Function;
  declare export function useWith(func: Function): (transforms: Array<Function>) => Function;
  declare export function useWith(func: Function, transforms: Array<Function>): Function;
  declare export function partial(func: Function): (partials: any[]) => Function;
  declare export function partial(func: Function, partials: any[]): Function;
  declare export function partialRight(func: Function): (partials: Array<any>) => Function;
  declare export function partialRight(func: Function, partials: Array<any>): Function;
  declare export function rearg(indexes: Array<number>): (func: Function) => Function;
  declare export function rearg(indexes: Array<number>, func: Function): Function;
  declare export function rest(func: Function): Function;
  declare export function unapply(func: Function): Function;
  declare export function restFrom(start: number): (func: Function) => Function;
  declare export function restFrom(start: number, func: Function): Function;
  declare export function spread(func: Function): Function;
  declare export function apply(func: Function): Function;
  declare export function spreadFrom(start: number): (func: Function) => Function;
  declare export function spreadFrom(start: number, func: Function): Function;
  declare export function throttle(wait: number): (func: Function) => Function;
  declare export function throttle(wait: number, func: Function): Function;
  declare export function unary(func: Function): Function;
  declare export function wrap(wrapper: Function): (value: any) => Function;
  declare export function wrap(wrapper: Function, value: any): Function;

    // Lang
  declare export function castArray(value: *): any[];
  declare export function clone<T>(value: T): T;
  declare export function cloneDeep<T>(value: T): T;
  declare export function cloneDeepWith<T, U>(
      customizer: (value: T, key: number | string, object: T, stack: any) => U
    ): (value: T) => U;
  declare export function cloneDeepWith<T, U>(
      customizer: (value: T, key: number | string, object: T, stack: any) => U,
      value: T
    ): U;
  declare export function cloneWith<T, U>(
      customizer: (value: T, key: number | string, object: T, stack: any) => U
    ): (value: T) => U;
  declare export function cloneWith<T, U>(
      customizer: (value: T, key: number | string, object: T, stack: any) => U,
      value: T
    ): U;
  declare export function conformsTo<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean }
    ): (source: T) => boolean;
  declare export function conformsTo<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean },
      source: T
    ): boolean;
  declare export function where<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean }
    ): (source: T) => boolean;
  declare export function where<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean },
      source: T
    ): boolean;
  declare export function conforms<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean }
    ): (source: T) => boolean;
  declare export function conforms<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean },
      source: T
    ): boolean;
  declare export function eq(value: any): (other: any) => boolean;
  declare export function eq(value: any, other: any): boolean;
  declare export function identical(value: any): (other: any) => boolean;
  declare export function identical(value: any, other: any): boolean;
  declare export function gt(value: any): (other: any) => boolean;
  declare export function gt(value: any, other: any): boolean;
  declare export function gte(value: any): (other: any) => boolean;
  declare export function gte(value: any, other: any): boolean;
  declare export function isArguments(value: any): boolean;
  declare export function isArray(value: any): boolean;
  declare export function isArrayBuffer(value: any): boolean;
  declare export function isArrayLike(value: any): boolean;
  declare export function isArrayLikeObject(value: any): boolean;
  declare export function isBoolean(value: any): boolean;
  declare export function isBuffer(value: any): boolean;
  declare export function isDate(value: any): boolean;
  declare export function isElement(value: any): boolean;
  declare export function isEmpty(value: any): boolean;
  declare export function isEqual(value: any): (other: any) => boolean;
  declare export function isEqual(value: any, other: any): boolean;
  declare export function equals(value: any): (other: any) => boolean;
  declare export function equals(value: any, other: any): boolean;
  declare export function isEqualWith<T, U>(
      customizer: (
        objValue: any,
        otherValue: any,
        key: number | string,
        object: T,
        other: U,
        stack: any
      ) => boolean | void
    ): ((value: T) => (other: U) => boolean) &
      ((value: T, other: U) => boolean);
  declare export function isEqualWith<T, U>(
      customizer: (
        objValue: any,
        otherValue: any,
        key: number | string,
        object: T,
        other: U,
        stack: any
      ) => boolean | void,
      value: T
    ): (other: U) => boolean;
  declare export function isEqualWith<T, U>(
      customizer: (
        objValue: any,
        otherValue: any,
        key: number | string,
        object: T,
        other: U,
        stack: any
      ) => boolean | void,
      value: T,
      other: U
    ): boolean;
  declare export function isError(value: any): boolean;
  declare export function isFinite(value: any): boolean;
  declare export function isFunction(value: Function): true;
  declare export function isFunction(value: number | string | void | null | Object): false;
  declare export function isInteger(value: any): boolean;
  declare export function isLength(value: any): boolean;
  declare export function isMap(value: any): boolean;
  declare export function isMatch(source: Object): (object: Object) => boolean;
  declare export function isMatch(source: Object, object: Object): boolean;
  declare export function whereEq(source: Object): (object: Object) => boolean;
  declare export function whereEq(source: Object, object: Object): boolean;
  declare export function isMatchWith<T: Object, U: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: number | string,
        object: T,
        source: U
      ) => boolean | void
    ): ((source: U) => (object: T) => boolean) &
      ((source: U, object: T) => boolean);
  declare export function isMatchWith<T: Object, U: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: number | string,
        object: T,
        source: U
      ) => boolean | void,
      source: U
    ): (object: T) => boolean;
  declare export function isMatchWith<T: Object, U: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: number | string,
        object: T,
        source: U
      ) => boolean | void,
      source: U,
      object: T
    ): boolean;
  declare export function isNaN(value: any): boolean;
  declare export function isNative(value: any): boolean;
  declare export function isNil(value: any): boolean;
  declare export function isNil(value: mixed): boolean %checks(value === undefined || value === null);
  declare export function isNull(value: any): boolean;
  declare export function isNumber(value: any): boolean;
  declare export function isObject(value: any): boolean;
  declare export function isObjectLike(value: any): boolean;
  declare export function isPlainObject(value: any): boolean;
  declare export function isRegExp(value: any): boolean;
  declare export function isSafeInteger(value: any): boolean;
  declare export function isSet(value: any): boolean;
  declare export function isString(value: string): true;
  declare export function isString(
      value: number | boolean | Function | void | null | Object | Array<any>
    ): false;
  declare export function isSymbol(value: any): boolean;
  declare export function isTypedArray(value: any): boolean;
  declare export function isUndefined(value: any): boolean;
  declare export function isWeakMap(value: any): boolean;
  declare export function isWeakSet(value: any): boolean;
  declare export function lt(value: any): (other: any) => boolean;
  declare export function lt(value: any, other: any): boolean;
  declare export function lte(value: any): (other: any) => boolean;
  declare export function lte(value: any, other: any): boolean;
  declare export function toArray(value: any): Array<any>;
  declare export function toFinite(value: any): number;
  declare export function toInteger(value: any): number;
  declare export function toLength(value: any): number;
  declare export function toNumber(value: any): number;
  declare export function toPlainObject(value: any): Object;
  declare export function toSafeInteger(value: any): number;
  declare export function toString(value: any): string;

    // Math
  declare export function add(augend: number): (addend: number) => number;
  declare export function add(augend: number, addend: number): number;
  declare export function ceil(number: number): number;
  declare export function divide(dividend: number): (divisor: number) => number;
  declare export function divide(dividend: number, divisor: number): number;
  declare export function floor(number: number): number;
  declare export function max<T>(array: Array<T>): T;
  declare export function maxBy<T>(iteratee: Iteratee<T>): (array: Array<T>) => T;
  declare export function maxBy<T>(iteratee: Iteratee<T>, array: Array<T>): T;
  declare export function mean(array: Array<*>): number;
  declare export function meanBy<T>(iteratee: Iteratee<T>): (array: Array<T>) => number;
  declare export function meanBy<T>(iteratee: Iteratee<T>, array: Array<T>): number;
  declare export function min<T>(array: Array<T>): T;
  declare export function minBy<T>(iteratee: Iteratee<T>): (array: Array<T>) => T;
  declare export function minBy<T>(iteratee: Iteratee<T>, array: Array<T>): T;
  declare export function multiply(multiplier: number): (multiplicand: number) => number;
  declare export function multiply(multiplier: number, multiplicand: number): number;
  declare export function round(number: number): number;
  declare export function subtract(minuend: number): (subtrahend: number) => number;
  declare export function subtract(minuend: number, subtrahend: number): number;
  declare export function sum(array: Array<*>): number;
  declare export function sumBy<T>(iteratee: Iteratee<T>): (array: Array<T>) => number;
  declare export function sumBy<T>(iteratee: Iteratee<T>, array: Array<T>): number;

    // number
  declare export function clamp(
      lower: number
    ): ((upper: number) => (number: number) => number) &
      ((upper: number, number: number) => number);
  declare export function clamp(lower: number, upper: number): (number: number) => number;
  declare export function clamp(lower: number, upper: number, number: number): number;
  declare export function inRange(
      start: number
    ): ((end: number) => (number: number) => boolean) &
      ((end: number, number: number) => boolean);
  declare export function inRange(start: number, end: number): (number: number) => boolean;
  declare export function inRange(start: number, end: number, number: number): boolean;
  declare export function random(lower: number): (upper: number) => number;
  declare export function random(lower: number, upper: number): number;

    // Object
  declare export function assign(object: Object): (source: Object) => Object;
  declare export function assign(object: Object, source: Object): Object;
  declare export function assignAll(objects: Array<Object>): Object;
  declare export function assignInAll(objects: Array<Object>): Object;
  declare export function extendAll(objects: Array<Object>): Object;
  declare export function assignIn<A, B>(a: A): (b: B) => A & B;
  declare export function assignIn<A, B>(a: A, b: B): A & B;
  declare export function assignInWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): ((object: T) => (s1: A) => Object) & ((object: T, s1: A) => Object);
  declare export function assignInWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T
    ): (s1: A) => Object;
  declare export function assignInWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T,
      s1: A
    ): Object;
  declare export function assignWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): ((object: T) => (s1: A) => Object) & ((object: T, s1: A) => Object);
  declare export function assignWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T
    ): (s1: A) => Object;
  declare export function assignWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T,
      s1: A
    ): Object;
  declare export function assignInAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void
    ): (objects: Array<Object>) => Object;
  declare export function assignInAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void,
      objects: Array<Object>
    ): Object;
  declare export function extendAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void
    ): (objects: Array<Object>) => Object;
  declare export function extendAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void,
      objects: Array<Object>
    ): Object;
  declare export function assignAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void
    ): (objects: Array<Object>) => Object;
  declare export function assignAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void,
      objects: Array<Object>
    ): Object;
  declare export function at(paths: Array<string>): (object: Object) => Array<any>;
  declare export function at(paths: Array<string>, object: Object): Array<any>;
  declare export function props(paths: Array<string>): (object: Object) => Array<any>;
  declare export function props(paths: Array<string>, object: Object): Array<any>;
  declare export function paths(paths: Array<string>): (object: Object) => Array<any>;
  declare export function paths(paths: Array<string>, object: Object): Array<any>;
  declare export function create<T>(prototype: T): $Supertype<T>;
  declare export function defaults(source: Object): (object: Object) => Object;
  declare export function defaults(source: Object, object: Object): Object;
  declare export function defaultsAll(objects: Array<Object>): Object;
  declare export function defaultsDeep(source: Object): (object: Object) => Object;
  declare export function defaultsDeep(source: Object, object: Object): Object;
  declare export function defaultsDeepAll(objects: Array<Object>): Object;
    // alias for _.toPairs
  declare export function entries(object: Object): Array<[string, any]>;
    // alias for _.toPairsIn
  declare export function entriesIn(object: Object): Array<[string, any]>;
    // alias for _.assignIn
  declare export function extend<A, B>(a: A): (b: B) => A & B;
  declare export function extend<A, B>(a: A, b: B): A & B;
    // alias for _.assignInWith
  declare export function extendWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): ((object: T) => (s1: A) => Object) & ((object: T, s1: A) => Object);
  declare export function extendWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T
    ): (s1: A) => Object;
  declare export function extendWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T,
      s1: A
    ): Object;
  declare export function findKey<A, T: { [id: any]: A }>(
      predicate: OPredicate<A>
    ): (object: T) => string | void;
  declare export function findKey<A, T: { [id: any]: A }>(
      predicate: OPredicate<A>,
      object: T
    ): string | void;
  declare export function findLastKey<A, T: { [id: any]: A }>(
      predicate: OPredicate<A>
    ): (object: T) => string | void;
  declare export function findLastKey<A, T: { [id: any]: A }>(
      predicate: OPredicate<A>,
      object: T
    ): string | void;
  declare export function forIn(iteratee: OIteratee<*>): (object: Object) => Object;
  declare export function forIn(iteratee: OIteratee<*>, object: Object): Object;
  declare export function forInRight(iteratee: OIteratee<*>): (object: Object) => Object;
  declare export function forInRight(iteratee: OIteratee<*>, object: Object): Object;
  declare export function forOwn(iteratee: OIteratee<*>): (object: Object) => Object;
  declare export function forOwn(iteratee: OIteratee<*>, object: Object): Object;
  declare export function forOwnRight(iteratee: OIteratee<*>): (object: Object) => Object;
  declare export function forOwnRight(iteratee: OIteratee<*>, object: Object): Object;
  declare export function functions(object: Object): Array<string>;
  declare export function functionsIn(object: Object): Array<string>;
  declare export function get(path: Array<string> | string): (object: Object | Array<any>) => any;
  declare export function get(path: Array<string> | string, object: Object | Array<any>): any;
  declare export function prop(path: Array<string> | string): (object: Object | Array<any>) => any;
  declare export function prop(path: Array<string> | string, object: Object | Array<any>): any;
  declare export function path(path: Array<string> | string): (object: Object | Array<any>) => any;
  declare export function path(path: Array<string> | string, object: Object | Array<any>): any;
  declare export function getOr(
      defaultValue: any
    ): ((
      path: Array<string> | string
    ) => (object: Object | Array<any>) => any) &
      ((path: Array<string> | string, object: Object | Array<any>) => any);
  declare export function getOr(
      defaultValue: any,
      path: Array<string> | string
    ): (object: Object | Array<any>) => any;
  declare export function getOr(
      defaultValue: any,
      path: Array<string> | string,
      object: Object | Array<any>
    ): any;
  declare export function propOr(
      defaultValue: any
    ): ((
      path: Array<string> | string
    ) => (object: Object | Array<any>) => any) &
      ((path: Array<string> | string, object: Object | Array<any>) => any);
  declare export function propOr(
      defaultValue: any,
      path: Array<string> | string
    ): (object: Object | Array<any>) => any;
  declare export function propOr(
      defaultValue: any,
      path: Array<string> | string,
      object: Object | Array<any>
    ): any;
  declare export function pathOr(
      defaultValue: any
    ): ((
      path: Array<string> | string
    ) => (object: Object | Array<any>) => any) &
      ((path: Array<string> | string, object: Object | Array<any>) => any);
  declare export function pathOr(
      defaultValue: any,
      path: Array<string> | string
    ): (object: Object | Array<any>) => any;
  declare export function pathOr(
      defaultValue: any,
      path: Array<string> | string,
      object: Object | Array<any>
    ): any;
  declare export function has(path: Array<string> | string): (object: Object) => boolean;
  declare export function has(path: Array<string> | string, object: Object): boolean;
  declare export function hasIn(path: Array<string> | string): (object: Object) => boolean;
  declare export function hasIn(path: Array<string> | string, object: Object): boolean;
  declare export function invert(object: Object): Object;
  declare export function invertObj(object: Object): Object;
  declare export function invertBy(iteratee: Function): (object: Object) => Object;
  declare export function invertBy(iteratee: Function, object: Object): Object;
  declare export function invoke(path: Array<string> | string): (object: Object) => any;
  declare export function invoke(path: Array<string> | string, object: Object): any;
  declare export function invokeArgs(
      path: Array<string> | string
    ): ((object: Object) => (args: Array<any>) => any) &
      ((object: Object, args: Array<any>) => any);
  declare export function invokeArgs(
      path: Array<string> | string,
      object: Object
    ): (args: Array<any>) => any;
  declare export function invokeArgs(
      path: Array<string> | string,
      object: Object,
      args: Array<any>
    ): any;
  declare export function keys<K>(object: { [key: K]: any }): Array<K>;
  declare export function keys(object: Object): Array<string>;
  declare export function keysIn(object: Object): Array<string>;
  declare export function mapKeys(iteratee: OIteratee<*>): (object: Object) => Object;
  declare export function mapKeys(iteratee: OIteratee<*>, object: Object): Object;
  declare export function mapValues(iteratee: OIteratee<*>): (object: Object) => Object;
  declare export function mapValues(iteratee: OIteratee<*>, object: Object): Object;
  declare export function merge(object: Object): (source: Object) => Object;
  declare export function merge(object: Object, source: Object): Object;
  declare export function mergeAll(objects: Array<Object>): Object;
  declare export function mergeWith<T: Object, A: Object, B: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void
    ): ((object: T) => (s1: A) => Object) & ((object: T, s1: A) => Object);
  declare export function mergeWith<T: Object, A: Object, B: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void,
      object: T
    ): (s1: A) => Object;
  declare export function mergeWith<T: Object, A: Object, B: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void,
      object: T,
      s1: A
    ): Object;
  declare export function mergeAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void
    ): (objects: Array<Object>) => Object;
  declare export function mergeAllWith(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: Object,
        source: Object
      ) => any | void,
      objects: Array<Object>
    ): Object;
  declare export function omit(props: Array<string>): (object: Object) => Object;
  declare export function omit(props: Array<string>, object: Object): Object;
  declare export function omitAll(props: Array<string>): (object: Object) => Object;
  declare export function omitAll(props: Array<string>, object: Object): Object;
  declare export function omitBy<A, T: { [id: any]: A }>(
      predicate: OPredicate<A>
    ): (object: T) => Object;
  declare export function omitBy<A, T: { [id: any]: A }>(predicate: OPredicate<A>, object: T): Object;
  declare export function pick(props: Array<string>): (object: Object) => Object;
  declare export function pick(props: Array<string>, object: Object): Object;
  declare export function pickAll(props: Array<string>): (object: Object) => Object;
  declare export function pickAll(props: Array<string>, object: Object): Object;
  declare export function pickBy<A, T: { [id: any]: A }>(
      predicate: OPredicate<A>
    ): (object: T) => Object;
  declare export function pickBy<A, T: { [id: any]: A }>(predicate: OPredicate<A>, object: T): Object;
  declare export function result(path: Array<string> | string): (object: Object) => any;
  declare export function result(path: Array<string> | string, object: Object): any;
  declare export function set(
      path: Array<string> | string
    ): ((value: any) => (object: Object) => Object) &
      ((value: any, object: Object) => Object);
  declare export function set(path: Array<string> | string, value: any): (object: Object) => Object;
  declare export function set(path: Array<string> | string, value: any, object: Object): Object;
  declare export function assoc(
      path: Array<string> | string
    ): ((value: any) => (object: Object) => Object) &
      ((value: any, object: Object) => Object);
  declare export function assoc(path: Array<string> | string, value: any): (object: Object) => Object;
  declare export function assoc(path: Array<string> | string, value: any, object: Object): Object;
  declare export function assocPath(
      path: Array<string> | string
    ): ((value: any) => (object: Object) => Object) &
      ((value: any, object: Object) => Object);
  declare export function assocPath(
      path: Array<string> | string,
      value: any
    ): (object: Object) => Object;
  declare export function assocPath(path: Array<string> | string, value: any, object: Object): Object;
  declare export function setWith<T>(
      customizer: (nsValue: any, key: string, nsObject: T) => any
    ): ((
      path: Array<string> | string
    ) => ((value: any) => (object: T) => Object) &
      ((value: any, object: T) => Object)) &
      ((path: Array<string> | string, value: any) => (object: T) => Object) &
      ((path: Array<string> | string, value: any, object: T) => Object);
  declare export function setWith<T>(
      customizer: (nsValue: any, key: string, nsObject: T) => any,
      path: Array<string> | string
    ): ((value: any) => (object: T) => Object) &
      ((value: any, object: T) => Object);
  declare export function setWith<T>(
      customizer: (nsValue: any, key: string, nsObject: T) => any,
      path: Array<string> | string,
      value: any
    ): (object: T) => Object;
  declare export function setWith<T>(
      customizer: (nsValue: any, key: string, nsObject: T) => any,
      path: Array<string> | string,
      value: any,
      object: T
    ): Object;
  declare export function toPairs(object: Object | Array<*>): Array<[string, any]>;
  declare export function toPairsIn(object: Object): Array<[string, any]>;
  declare export function transform(
      iteratee: OIteratee<*>
    ): ((accumulator: any) => (collection: Object | Array<any>) => any) &
      ((accumulator: any, collection: Object | Array<any>) => any);
  declare export function transform(
      iteratee: OIteratee<*>,
      accumulator: any
    ): (collection: Object | Array<any>) => any;
  declare export function transform(
      iteratee: OIteratee<*>,
      accumulator: any,
      collection: Object | Array<any>
    ): any;
  declare export function unset(path: Array<string> | string): (object: Object) => boolean;
  declare export function unset(path: Array<string> | string, object: Object): boolean;
  declare export function dissoc(path: Array<string> | string): (object: Object) => boolean;
  declare export function dissoc(path: Array<string> | string, object: Object): boolean;
  declare export function dissocPath(path: Array<string> | string): (object: Object) => boolean;
  declare export function dissocPath(path: Array<string> | string, object: Object): boolean;
  declare export function update(
      path: string[] | string
    ): ((updater: Function) => (object: Object) => Object) &
      ((updater: Function, object: Object) => Object);
  declare export function update(
      path: string[] | string,
      updater: Function
    ): (object: Object) => Object;
  declare export function update(path: string[] | string, updater: Function, object: Object): Object;
  declare export function updateWith(
      customizer: Function
    ): ((
      path: string[] | string
    ) => ((updater: Function) => (object: Object) => Object) &
      ((updater: Function, object: Object) => Object)) &
      ((
        path: string[] | string,
        updater: Function
      ) => (object: Object) => Object) &
      ((path: string[] | string, updater: Function, object: Object) => Object);
  declare export function updateWith(
      customizer: Function,
      path: string[] | string
    ): ((updater: Function) => (object: Object) => Object) &
      ((updater: Function, object: Object) => Object);
  declare export function updateWith(
      customizer: Function,
      path: string[] | string,
      updater: Function
    ): (object: Object) => Object;
  declare export function updateWith(
      customizer: Function,
      path: string[] | string,
      updater: Function,
      object: Object
    ): Object;
  declare export function values(object: Object): Array<any>;
  declare export function valuesIn(object: Object): Array<any>;

  declare export function tap<T>(interceptor: (value: T) => any): (value: T) => T;
  declare export function tap<T>(interceptor: (value: T) => any, value: T): T;
  declare export function thru<T1, T2>(interceptor: (value: T1) => T2): (value: T1) => T2;
  declare export function thru<T1, T2>(interceptor: (value: T1) => T2, value: T1): T2;

    // String
  declare export function camelCase(string: string): string;
  declare export function capitalize(string: string): string;
  declare export function deburr(string: string): string;
  declare export function endsWith(target: string): (string: string) => boolean;
  declare export function endsWith(target: string, string: string): boolean;
  declare export function escape(string: string): string;
  declare export function escapeRegExp(string: string): string;
  declare export function kebabCase(string: string): string;
  declare export function lowerCase(string: string): string;
  declare export function lowerFirst(string: string): string;
  declare export function pad(length: number): (string: string) => string;
  declare export function pad(length: number, string: string): string;
  declare export function padChars(
      chars: string
    ): ((length: number) => (string: string) => string) &
      ((length: number, string: string) => string);
  declare export function padChars(chars: string, length: number): (string: string) => string;
  declare export function padChars(chars: string, length: number, string: string): string;
  declare export function padEnd(length: number): (string: string) => string;
  declare export function padEnd(length: number, string: string): string;
  declare export function padCharsEnd(
      chars: string
    ): ((length: number) => (string: string) => string) &
      ((length: number, string: string) => string);
  declare export function padCharsEnd(chars: string, length: number): (string: string) => string;
  declare export function padCharsEnd(chars: string, length: number, string: string): string;
  declare export function padStart(length: number): (string: string) => string;
  declare export function padStart(length: number, string: string): string;
  declare export function padCharsStart(
      chars: string
    ): ((length: number) => (string: string) => string) &
      ((length: number, string: string) => string);
  declare export function padCharsStart(chars: string, length: number): (string: string) => string;
  declare export function padCharsStart(chars: string, length: number, string: string): string;
  declare export function parseInt(radix: number): (string: string) => number;
  declare export function parseInt(radix: number, string: string): number;
  declare export function repeat(n: number): (string: string) => string;
  declare export function repeat(n: number, string: string): string;
  declare export function replace(
      pattern: RegExp | string
    ): ((
      replacement: ((string: string) => string) | string
    ) => (string: string) => string) &
      ((
        replacement: ((string: string) => string) | string,
        string: string
      ) => string);
  declare export function replace(
      pattern: RegExp | string,
      replacement: ((string: string) => string) | string
    ): (string: string) => string;
  declare export function replace(
      pattern: RegExp | string,
      replacement: ((string: string) => string) | string,
      string: string
    ): string;
  declare export function snakeCase(string: string): string;
  declare export function split(separator: RegExp | string): (string: string) => Array<string>;
  declare export function split(separator: RegExp | string, string: string): Array<string>;
  declare export function startCase(string: string): string;
  declare export function startsWith(target: string): (string: string) => boolean;
  declare export function startsWith(target: string, string: string): boolean;
  declare export function template(string: string): Function;
  declare export function toLower(string: string): string;
  declare export function toUpper(string: string): string;
  declare export function trim(string: string): string;
  declare export function trimChars(chars: string): (string: string) => string;
  declare export function trimChars(chars: string, string: string): string;
  declare export function trimEnd(string: string): string;
  declare export function trimCharsEnd(chars: string): (string: string) => string;
  declare export function trimCharsEnd(chars: string, string: string): string;
  declare export function trimStart(string: string): string;
  declare export function trimCharsStart(chars: string): (string: string) => string;
  declare export function trimCharsStart(chars: string, string: string): string;
  declare export function truncate(options: TruncateOptions): (string: string) => string;
  declare export function truncate(options: TruncateOptions, string: string): string;
  declare export function unescape(string: string): string;
  declare export function upperCase(string: string): string;
  declare export function upperFirst(string: string): string;
  declare export function words(string: string): Array<string>;

    // Util
  declare export function attempt(func: Function): any;
  declare export function bindAll(methodNames: Array<string>): (object: Object) => Object;
  declare export function bindAll(methodNames: Array<string>, object: Object): Object;
  declare export function cond(pairs: NestedArray<Function>): Function;
  declare export function constant<T>(value: T): () => T;
  declare export function always<T>(value: T): () => T;
  declare export function defaultTo<T1: string | boolean | Object, T2>(
      defaultValue: T2
    ): (value: T1) => T1;
  declare export function defaultTo<T1: string | boolean | Object, T2>(
      defaultValue: T2,
      value: T1
    ): T1;
    // NaN is a number instead of its own type, otherwise it would behave like null/void
  declare export function defaultTo<T1: number, T2>(defaultValue: T2): (value: T1) => T1 | T2;
  declare export function defaultTo<T1: number, T2>(defaultValue: T2, value: T1): T1 | T2;
  declare export function defaultTo<T1: void | null, T2>(defaultValue: T2): (value: T1) => T2;
  declare export function defaultTo<T1: void | null, T2>(defaultValue: T2, value: T1): T2;
  declare export var flow: HigherOrderFunction;
  declare export var pipe: HigherOrderFunction;
  declare export var flowRight: HigherOrderFunction;
  declare export var compose: HigherOrderFunction;
  declare export function identity<T>(value: T): T;
  declare export function iteratee(func: any): Function;
  declare export function matches(source: Object): (object: Object) => boolean;
  declare export function matches(source: Object, object: Object): boolean;
  declare export function matchesProperty(path: Array<string> | string): (srcValue: any) => Function;
  declare export function matchesProperty(path: Array<string> | string, srcValue: any): Function;
  declare export function propEq(path: Array<string> | string): (srcValue: any) => Function;
  declare export function propEq(path: Array<string> | string, srcValue: any): Function;
  declare export function pathEq(path: Array<string> | string): (srcValue: any) => Function;
  declare export function pathEq(path: Array<string> | string, srcValue: any): Function;
  declare export function method(path: Array<string> | string): Function;
  declare export function methodOf(object: Object): Function;
  declare export function mixin<T: Function | Object>(
      object: T
    ): ((source: Object) => (options: { chain: boolean }) => T) &
      ((source: Object, options: { chain: boolean }) => T);
  declare export function mixin<T: Function | Object>(
      object: T,
      source: Object
    ): (options: { chain: boolean }) => T;
  declare export function mixin<T: Function | Object>(
      object: T,
      source: Object,
      options: { chain: boolean }
    ): T;
  declare export function noConflict(): $Exports<"lodash">;
  declare export function noop(...args: Array<mixed>): void;
  declare export function nthArg(n: number): Function;
  declare export function over(iteratees: Array<Function>): Function;
  declare export function juxt(iteratees: Array<Function>): Function;
  declare export function overEvery(predicates: Array<Function>): Function;
  declare export function allPass(predicates: Array<Function>): Function;
  declare export function overSome(predicates: Array<Function>): Function;
  declare export function anyPass(predicates: Array<Function>): Function;
  declare export function property(
      path: Array<string> | string
    ): (object: Object | Array<any>) => any;
  declare export function property(path: Array<string> | string, object: Object | Array<any>): any;
  declare export function propertyOf(object: Object): (path: Array<string> | string) => Function;
  declare export function propertyOf(object: Object, path: Array<string> | string): Function;
  declare export function range(start: number): (end: number) => Array<number>;
  declare export function range(start: number, end: number): Array<number>;
  declare export function rangeStep(
      step: number
    ): ((start: number) => (end: number) => Array<number>) &
      ((start: number, end: number) => Array<number>);
  declare export function rangeStep(step: number, start: number): (end: number) => Array<number>;
  declare export function rangeStep(step: number, start: number, end: number): Array<number>;
  declare export function rangeRight(start: number): (end: number) => Array<number>;
  declare export function rangeRight(start: number, end: number): Array<number>;
  declare export function rangeStepRight(
      step: number
    ): ((start: number) => (end: number) => Array<number>) &
      ((start: number, end: number) => Array<number>);
  declare export function rangeStepRight(step: number, start: number): (end: number) => Array<number>;
  declare export function rangeStepRight(step: number, start: number, end: number): Array<number>;
  declare export function runInContext(context: Object): Function;

  declare export function stubArray(): Array<*>;
  declare export function stubFalse(): false;
  declare export function F(): false;
  declare export function stubObject(): {};
  declare export function stubString(): "";
  declare export function stubTrue(): true;
  declare export function T(): true;
  declare export function times<T>(iteratee: (i: number) => T): (n: number) => Array<T>;
  declare export function times<T>(iteratee: (i: number) => T, n: number): Array<T>;
  declare export function toPath(value: any): Array<string>;
  declare export function uniqueId(prefix: string): string;

  declare var __: any;
  declare var placeholder: any;

  declare export function convert(options: {
      cap?: boolean,
      curry?: boolean,
      fixed?: boolean,
      immutable?: boolean,
      rearg?: boolean
    }): void;

    // Properties
  declare var VERSION: string;
  declare var templateSettings: TemplateSettings;
}

declare module "lodash/chunk" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "chunk">;
}

declare module "lodash/compact" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "compact">;
}

declare module "lodash/concat" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "concat">;
}

declare module "lodash/difference" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "difference">;
}

declare module "lodash/differenceBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "differenceBy">;
}

declare module "lodash/differenceWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "differenceWith">;
}

declare module "lodash/drop" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "drop">;
}

declare module "lodash/dropRight" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "dropRight">;
}

declare module "lodash/dropRightWhile" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "dropRightWhile">;
}

declare module "lodash/dropWhile" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "dropWhile">;
}

declare module "lodash/fill" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "fill">;
}

declare module "lodash/findIndex" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "findIndex">;
}

declare module "lodash/findLastIndex" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "findLastIndex">;
}

declare module "lodash/first" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "first">;
}

declare module "lodash/flatten" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "flatten">;
}

declare module "lodash/flattenDeep" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "flattenDeep">;
}

declare module "lodash/flattenDepth" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "flattenDepth">;
}

declare module "lodash/fromPairs" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "fromPairs">;
}

declare module "lodash/head" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "head">;
}

declare module "lodash/indexOf" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "indexOf">;
}

declare module "lodash/initial" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "initial">;
}

declare module "lodash/intersection" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "intersection">;
}

declare module "lodash/intersectionBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "intersectionBy">;
}

declare module "lodash/intersectionWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "intersectionWith">;
}

declare module "lodash/join" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "join">;
}

declare module "lodash/last" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "last">;
}

declare module "lodash/lastIndexOf" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "lastIndexOf">;
}

declare module "lodash/nth" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "nth">;
}

declare module "lodash/pull" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "pull">;
}

declare module "lodash/pullAll" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "pullAll">;
}

declare module "lodash/pullAllBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "pullAllBy">;
}

declare module "lodash/pullAllWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "pullAllWith">;
}

declare module "lodash/pullAt" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "pullAt">;
}

declare module "lodash/remove" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "remove">;
}

declare module "lodash/reverse" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "reverse">;
}

declare module "lodash/slice" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "slice">;
}

declare module "lodash/sortedIndex" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "sortedIndex">;
}

declare module "lodash/sortedIndexBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "sortedIndexBy">;
}

declare module "lodash/sortedIndexOf" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "sortedIndexOf">;
}

declare module "lodash/sortedLastIndex" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "sortedLastIndex">;
}

declare module "lodash/sortedLastIndexBy" {
  declare module.exports: $PropertyType<
    $Exports<"lodash">,
    "sortedLastIndexBy"
  >;
}

declare module "lodash/sortedLastIndexOf" {
  declare module.exports: $PropertyType<
    $Exports<"lodash">,
    "sortedLastIndexOf"
  >;
}

declare module "lodash/sortedUniq" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "sortedUniq">;
}

declare module "lodash/sortedUniqBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "sortedUniqBy">;
}

declare module "lodash/tail" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "tail">;
}

declare module "lodash/take" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "take">;
}

declare module "lodash/takeRight" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "takeRight">;
}

declare module "lodash/takeRightWhile" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "takeRightWhile">;
}

declare module "lodash/takeWhile" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "takeWhile">;
}

declare module "lodash/union" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "union">;
}

declare module "lodash/unionBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "unionBy">;
}

declare module "lodash/unionWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "unionWith">;
}

declare module "lodash/uniq" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "uniq">;
}

declare module "lodash/uniqBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "uniqBy">;
}

declare module "lodash/uniqWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "uniqWith">;
}

declare module "lodash/unzip" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "unzip">;
}

declare module "lodash/unzipWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "unzipWith">;
}

declare module "lodash/without" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "without">;
}

declare module "lodash/xor" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "xor">;
}

declare module "lodash/xorBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "xorBy">;
}

declare module "lodash/xorWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "xorWith">;
}

declare module "lodash/zip" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "zip">;
}

declare module "lodash/zipObject" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "zipObject">;
}

declare module "lodash/zipObjectDeep" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "zipObjectDeep">;
}

declare module "lodash/zipWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "zipWith">;
}

declare module "lodash/countBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "countBy">;
}

declare module "lodash/each" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "each">;
}

declare module "lodash/eachRight" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "eachRight">;
}

declare module "lodash/every" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "every">;
}

declare module "lodash/filter" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "filter">;
}

declare module "lodash/find" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "find">;
}

declare module "lodash/findLast" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "findLast">;
}

declare module "lodash/flatMap" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "flatMap">;
}

declare module "lodash/flatMapDeep" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "flatMapDeep">;
}

declare module "lodash/flatMapDepth" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "flatMapDepth">;
}

declare module "lodash/forEach" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "forEach">;
}

declare module "lodash/forEachRight" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "forEachRight">;
}

declare module "lodash/groupBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "groupBy">;
}

declare module "lodash/includes" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "includes">;
}

declare module "lodash/invokeMap" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "invokeMap">;
}

declare module "lodash/keyBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "keyBy">;
}

declare module "lodash/map" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "map">;
}

declare module "lodash/orderBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "orderBy">;
}

declare module "lodash/partition" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "partition">;
}

declare module "lodash/reduce" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "reduce">;
}

declare module "lodash/reduceRight" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "reduceRight">;
}

declare module "lodash/reject" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "reject">;
}

declare module "lodash/sample" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "sample">;
}

declare module "lodash/sampleSize" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "sampleSize">;
}

declare module "lodash/shuffle" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "shuffle">;
}

declare module "lodash/size" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "size">;
}

declare module "lodash/some" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "some">;
}

declare module "lodash/sortBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "sortBy">;
}

declare module "lodash/now" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "now">;
}

declare module "lodash/after" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "after">;
}

declare module "lodash/ary" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "ary">;
}

declare module "lodash/before" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "before">;
}

declare module "lodash/bind" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "bind">;
}

declare module "lodash/bindKey" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "bindKey">;
}

declare module "lodash/curry" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "curry">;
}

declare module "lodash/curryRight" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "curryRight">;
}

declare module "lodash/debounce" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "debounce">;
}

declare module "lodash/defer" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "defer">;
}

declare module "lodash/delay" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "delay">;
}

declare module "lodash/flip" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "flip">;
}

declare module "lodash/memoize" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "memoize">;
}

declare module "lodash/negate" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "negate">;
}

declare module "lodash/once" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "once">;
}

declare module "lodash/overArgs" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "overArgs">;
}

declare module "lodash/partial" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "partial">;
}

declare module "lodash/partialRight" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "partialRight">;
}

declare module "lodash/rearg" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "rearg">;
}

declare module "lodash/rest" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "rest">;
}

declare module "lodash/spread" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "spread">;
}

declare module "lodash/throttle" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "throttle">;
}

declare module "lodash/unary" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "unary">;
}

declare module "lodash/wrap" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "wrap">;
}

declare module "lodash/castArray" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "castArray">;
}

declare module "lodash/clone" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "clone">;
}

declare module "lodash/cloneDeep" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "cloneDeep">;
}

declare module "lodash/cloneDeepWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "cloneDeepWith">;
}

declare module "lodash/cloneWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "cloneWith">;
}

declare module "lodash/conformsTo" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "conformsTo">;
}

declare module "lodash/eq" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "eq">;
}

declare module "lodash/gt" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "gt">;
}

declare module "lodash/gte" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "gte">;
}

declare module "lodash/isArguments" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isArguments">;
}

declare module "lodash/isArray" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isArray">;
}

declare module "lodash/isArrayBuffer" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isArrayBuffer">;
}

declare module "lodash/isArrayLike" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isArrayLike">;
}

declare module "lodash/isArrayLikeObject" {
  declare module.exports: $PropertyType<
    $Exports<"lodash">,
    "isArrayLikeObject"
  >;
}

declare module "lodash/isBoolean" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isBoolean">;
}

declare module "lodash/isBuffer" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isBuffer">;
}

declare module "lodash/isDate" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isDate">;
}

declare module "lodash/isElement" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isElement">;
}

declare module "lodash/isEmpty" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isEmpty">;
}

declare module "lodash/isEqual" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isEqual">;
}

declare module "lodash/isEqualWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isEqualWith">;
}

declare module "lodash/isError" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isError">;
}

declare module "lodash/isFinite" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isFinite">;
}

declare module "lodash/isFunction" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isFunction">;
}

declare module "lodash/isInteger" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isInteger">;
}

declare module "lodash/isLength" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isLength">;
}

declare module "lodash/isMap" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isMap">;
}

declare module "lodash/isMatch" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isMatch">;
}

declare module "lodash/isMatchWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isMatchWith">;
}

declare module "lodash/isNaN" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isNaN">;
}

declare module "lodash/isNative" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isNative">;
}

declare module "lodash/isNil" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isNil">;
}

declare module "lodash/isNull" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isNull">;
}

declare module "lodash/isNumber" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isNumber">;
}

declare module "lodash/isObject" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isObject">;
}

declare module "lodash/isObjectLike" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isObjectLike">;
}

declare module "lodash/isPlainObject" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isPlainObject">;
}

declare module "lodash/isRegExp" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isRegExp">;
}

declare module "lodash/isSafeInteger" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isSafeInteger">;
}

declare module "lodash/isSet" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isSet">;
}

declare module "lodash/isString" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isString">;
}

declare module "lodash/isSymbol" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isSymbol">;
}

declare module "lodash/isTypedArray" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isTypedArray">;
}

declare module "lodash/isUndefined" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isUndefined">;
}

declare module "lodash/isWeakMap" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isWeakMap">;
}

declare module "lodash/isWeakSet" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "isWeakSet">;
}

declare module "lodash/lt" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "lt">;
}

declare module "lodash/lte" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "lte">;
}

declare module "lodash/toArray" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "toArray">;
}

declare module "lodash/toFinite" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "toFinite">;
}

declare module "lodash/toInteger" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "toInteger">;
}

declare module "lodash/toLength" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "toLength">;
}

declare module "lodash/toNumber" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "toNumber">;
}

declare module "lodash/toPlainObject" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "toPlainObject">;
}

declare module "lodash/toSafeInteger" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "toSafeInteger">;
}

declare module "lodash/toString" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "toString">;
}

declare module "lodash/add" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "add">;
}

declare module "lodash/ceil" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "ceil">;
}

declare module "lodash/divide" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "divide">;
}

declare module "lodash/floor" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "floor">;
}

declare module "lodash/max" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "max">;
}

declare module "lodash/maxBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "maxBy">;
}

declare module "lodash/mean" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "mean">;
}

declare module "lodash/meanBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "meanBy">;
}

declare module "lodash/min" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "min">;
}

declare module "lodash/minBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "minBy">;
}

declare module "lodash/multiply" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "multiply">;
}

declare module "lodash/round" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "round">;
}

declare module "lodash/subtract" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "subtract">;
}

declare module "lodash/sum" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "sum">;
}

declare module "lodash/sumBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "sumBy">;
}

declare module "lodash/clamp" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "clamp">;
}

declare module "lodash/inRange" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "inRange">;
}

declare module "lodash/random" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "random">;
}

declare module "lodash/assign" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "assign">;
}

declare module "lodash/assignIn" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "assignIn">;
}

declare module "lodash/assignInWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "assignInWith">;
}

declare module "lodash/assignWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "assignWith">;
}

declare module "lodash/at" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "at">;
}

declare module "lodash/create" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "create">;
}

declare module "lodash/defaults" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "defaults">;
}

declare module "lodash/defaultsDeep" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "defaultsDeep">;
}

declare module "lodash/entries" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "entries">;
}

declare module "lodash/entriesIn" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "entriesIn">;
}

declare module "lodash/extend" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "extend">;
}

declare module "lodash/extendWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "extendWith">;
}

declare module "lodash/findKey" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "findKey">;
}

declare module "lodash/findLastKey" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "findLastKey">;
}

declare module "lodash/forIn" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "forIn">;
}

declare module "lodash/forInRight" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "forInRight">;
}

declare module "lodash/forOwn" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "forOwn">;
}

declare module "lodash/forOwnRight" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "forOwnRight">;
}

declare module "lodash/functions" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "functions">;
}

declare module "lodash/functionsIn" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "functionsIn">;
}

declare module "lodash/get" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "get">;
}

declare module "lodash/has" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "has">;
}

declare module "lodash/hasIn" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "hasIn">;
}

declare module "lodash/invert" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "invert">;
}

declare module "lodash/invertBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "invertBy">;
}

declare module "lodash/invoke" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "invoke">;
}

declare module "lodash/keys" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "keys">;
}

declare module "lodash/keysIn" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "keysIn">;
}

declare module "lodash/mapKeys" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "mapKeys">;
}

declare module "lodash/mapValues" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "mapValues">;
}

declare module "lodash/merge" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "merge">;
}

declare module "lodash/mergeWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "mergeWith">;
}

declare module "lodash/omit" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "omit">;
}

declare module "lodash/omitBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "omitBy">;
}

declare module "lodash/pick" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "pick">;
}

declare module "lodash/pickBy" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "pickBy">;
}

declare module "lodash/result" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "result">;
}

declare module "lodash/set" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "set">;
}

declare module "lodash/setWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "setWith">;
}

declare module "lodash/toPairs" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "toPairs">;
}

declare module "lodash/toPairsIn" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "toPairsIn">;
}

declare module "lodash/transform" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "transform">;
}

declare module "lodash/unset" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "unset">;
}

declare module "lodash/update" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "update">;
}

declare module "lodash/updateWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "updateWith">;
}

declare module "lodash/values" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "values">;
}

declare module "lodash/valuesIn" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "valuesIn">;
}

declare module "lodash/chain" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "chain">;
}

declare module "lodash/tap" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "tap">;
}

declare module "lodash/thru" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "thru">;
}

declare module "lodash/camelCase" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "camelCase">;
}

declare module "lodash/capitalize" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "capitalize">;
}

declare module "lodash/deburr" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "deburr">;
}

declare module "lodash/endsWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "endsWith">;
}

declare module "lodash/escape" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "escape">;
}

declare module "lodash/escapeRegExp" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "escapeRegExp">;
}

declare module "lodash/kebabCase" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "kebabCase">;
}

declare module "lodash/lowerCase" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "lowerCase">;
}

declare module "lodash/lowerFirst" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "lowerFirst">;
}

declare module "lodash/pad" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "pad">;
}

declare module "lodash/padEnd" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "padEnd">;
}

declare module "lodash/padStart" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "padStart">;
}

declare module "lodash/parseInt" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "parseInt">;
}

declare module "lodash/repeat" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "repeat">;
}

declare module "lodash/replace" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "replace">;
}

declare module "lodash/snakeCase" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "snakeCase">;
}

declare module "lodash/split" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "split">;
}

declare module "lodash/startCase" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "startCase">;
}

declare module "lodash/startsWith" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "startsWith">;
}

declare module "lodash/template" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "template">;
}

declare module "lodash/toLower" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "toLower">;
}

declare module "lodash/toUpper" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "toUpper">;
}

declare module "lodash/trim" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "trim">;
}

declare module "lodash/trimEnd" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "trimEnd">;
}

declare module "lodash/trimStart" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "trimStart">;
}

declare module "lodash/truncate" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "truncate">;
}

declare module "lodash/unescape" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "unescape">;
}

declare module "lodash/upperCase" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "upperCase">;
}

declare module "lodash/upperFirst" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "upperFirst">;
}

declare module "lodash/words" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "words">;
}

declare module "lodash/attempt" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "attempt">;
}

declare module "lodash/bindAll" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "bindAll">;
}

declare module "lodash/cond" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "cond">;
}

declare module "lodash/conforms" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "conforms">;
}

declare module "lodash/constant" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "constant">;
}

declare module "lodash/defaultTo" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "defaultTo">;
}

declare module "lodash/flow" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "flow">;
}

declare module "lodash/flowRight" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "flowRight">;
}

declare module "lodash/identity" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "identity">;
}

declare module "lodash/iteratee" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "iteratee">;
}

declare module "lodash/matches" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "matches">;
}

declare module "lodash/matchesProperty" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "matchesProperty">;
}

declare module "lodash/method" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "method">;
}

declare module "lodash/methodOf" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "methodOf">;
}

declare module "lodash/mixin" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "mixin">;
}

declare module "lodash/noConflict" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "noConflict">;
}

declare module "lodash/noop" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "noop">;
}

declare module "lodash/nthArg" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "nthArg">;
}

declare module "lodash/over" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "over">;
}

declare module "lodash/overEvery" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "overEvery">;
}

declare module "lodash/overSome" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "overSome">;
}

declare module "lodash/property" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "property">;
}

declare module "lodash/propertyOf" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "propertyOf">;
}

declare module "lodash/range" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "range">;
}

declare module "lodash/rangeRight" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "rangeRight">;
}

declare module "lodash/runInContext" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "runInContext">;
}

declare module "lodash/stubArray" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "stubArray">;
}

declare module "lodash/stubFalse" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "stubFalse">;
}

declare module "lodash/stubObject" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "stubObject">;
}

declare module "lodash/stubString" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "stubString">;
}

declare module "lodash/stubTrue" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "stubTrue">;
}

declare module "lodash/times" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "times">;
}

declare module "lodash/toPath" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "toPath">;
}

declare module "lodash/uniqueId" {
  declare module.exports: $PropertyType<$Exports<"lodash">, "uniqueId">;
}

declare module "lodash/fp/chunk" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "chunk">;
}

declare module "lodash/fp/compact" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "compact">;
}

declare module "lodash/fp/concat" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "concat">;
}

declare module "lodash/fp/difference" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "difference">;
}

declare module "lodash/fp/differenceBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "differenceBy">;
}

declare module "lodash/fp/differenceWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "differenceWith">;
}

declare module "lodash/fp/drop" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "drop">;
}

declare module "lodash/fp/dropLast" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "dropLast">;
}

declare module "lodash/fp/dropRight" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "dropRight">;
}

declare module "lodash/fp/dropRightWhile" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "dropRightWhile">;
}

declare module "lodash/fp/dropWhile" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "dropWhile">;
}

declare module "lodash/fp/dropLastWhile" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "dropLastWhile">;
}

declare module "lodash/fp/fill" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "fill">;
}

declare module "lodash/fp/findIndex" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "findIndex">;
}

declare module "lodash/fp/findIndexFrom" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "findIndexFrom">;
}

declare module "lodash/fp/findLastIndex" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "findLastIndex">;
}

declare module "lodash/fp/findLastIndexFrom" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "findLastIndexFrom">;
}

declare module "lodash/fp/first" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "first">;
}

declare module "lodash/fp/flatten" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "flatten">;
}

declare module "lodash/fp/unnest" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "unnest">;
}

declare module "lodash/fp/flattenDeep" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "flattenDeep">;
}

declare module "lodash/fp/flattenDepth" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "flattenDepth">;
}

declare module "lodash/fp/fromPairs" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "fromPairs">;
}

declare module "lodash/fp/head" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "head">;
}

declare module "lodash/fp/indexOf" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "indexOf">;
}

declare module "lodash/fp/indexOfFrom" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "indexOfFrom">;
}

declare module "lodash/fp/initial" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "initial">;
}

declare module "lodash/fp/init" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "init">;
}

declare module "lodash/fp/intersection" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "intersection">;
}

declare module "lodash/fp/intersectionBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "intersectionBy">;
}

declare module "lodash/fp/intersectionWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "intersectionWith">;
}

declare module "lodash/fp/join" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "join">;
}

declare module "lodash/fp/last" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "last">;
}

declare module "lodash/fp/lastIndexOf" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "lastIndexOf">;
}

declare module "lodash/fp/lastIndexOfFrom" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "lastIndexOfFrom">;
}

declare module "lodash/fp/nth" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "nth">;
}

declare module "lodash/fp/pull" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "pull">;
}

declare module "lodash/fp/pullAll" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "pullAll">;
}

declare module "lodash/fp/pullAllBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "pullAllBy">;
}

declare module "lodash/fp/pullAllWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "pullAllWith">;
}

declare module "lodash/fp/pullAt" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "pullAt">;
}

declare module "lodash/fp/remove" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "remove">;
}

declare module "lodash/fp/reverse" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "reverse">;
}

declare module "lodash/fp/slice" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "slice">;
}

declare module "lodash/fp/sortedIndex" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "sortedIndex">;
}

declare module "lodash/fp/sortedIndexBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "sortedIndexBy">;
}

declare module "lodash/fp/sortedIndexOf" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "sortedIndexOf">;
}

declare module "lodash/fp/sortedLastIndex" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "sortedLastIndex">;
}

declare module "lodash/fp/sortedLastIndexBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "sortedLastIndexBy">;
}

declare module "lodash/fp/sortedLastIndexOf" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "sortedLastIndexOf">;
}

declare module "lodash/fp/sortedUniq" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "sortedUniq">;
}

declare module "lodash/fp/sortedUniqBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "sortedUniqBy">;
}

declare module "lodash/fp/tail" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "tail">;
}

declare module "lodash/fp/take" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "take">;
}

declare module "lodash/fp/takeRight" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "takeRight">;
}

declare module "lodash/fp/takeLast" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "takeLast">;
}

declare module "lodash/fp/takeRightWhile" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "takeRightWhile">;
}

declare module "lodash/fp/takeLastWhile" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "takeLastWhile">;
}

declare module "lodash/fp/takeWhile" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "takeWhile">;
}

declare module "lodash/fp/union" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "union">;
}

declare module "lodash/fp/unionBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "unionBy">;
}

declare module "lodash/fp/unionWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "unionWith">;
}

declare module "lodash/fp/uniq" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "uniq">;
}

declare module "lodash/fp/uniqBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "uniqBy">;
}

declare module "lodash/fp/uniqWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "uniqWith">;
}

declare module "lodash/fp/unzip" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "unzip">;
}

declare module "lodash/fp/unzipWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "unzipWith">;
}

declare module "lodash/fp/without" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "without">;
}

declare module "lodash/fp/xor" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "xor">;
}

declare module "lodash/fp/symmetricDifference" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "symmetricDifference">;
}

declare module "lodash/fp/xorBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "xorBy">;
}

declare module "lodash/fp/symmetricDifferenceBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "symmetricDifferenceBy">;
}

declare module "lodash/fp/xorWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "xorWith">;
}

declare module "lodash/fp/symmetricDifferenceWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "symmetricDifferenceWith">;
}

declare module "lodash/fp/zip" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "zip">;
}

declare module "lodash/fp/zipAll" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "zipAll">;
}

declare module "lodash/fp/zipObject" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "zipObject">;
}

declare module "lodash/fp/zipObj" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "zipObj">;
}

declare module "lodash/fp/zipObjectDeep" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "zipObjectDeep">;
}

declare module "lodash/fp/zipWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "zipWith">;
}

declare module "lodash/fp/countBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "countBy">;
}

declare module "lodash/fp/each" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "each">;
}

declare module "lodash/fp/eachRight" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "eachRight">;
}

declare module "lodash/fp/every" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "every">;
}

declare module "lodash/fp/all" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "all">;
}

declare module "lodash/fp/filter" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "filter">;
}

declare module "lodash/fp/find" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "find">;
}

declare module "lodash/fp/findFrom" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "findFrom">;
}

declare module "lodash/fp/findLast" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "findLast">;
}

declare module "lodash/fp/findLastFrom" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "findLastFrom">;
}

declare module "lodash/fp/flatMap" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "flatMap">;
}

declare module "lodash/fp/flatMapDeep" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "flatMapDeep">;
}

declare module "lodash/fp/flatMapDepth" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "flatMapDepth">;
}

declare module "lodash/fp/forEach" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "forEach">;
}

declare module "lodash/fp/forEachRight" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "forEachRight">;
}

declare module "lodash/fp/groupBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "groupBy">;
}

declare module "lodash/fp/includes" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "includes">;
}

declare module "lodash/fp/contains" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "contains">;
}

declare module "lodash/fp/includesFrom" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "includesFrom">;
}

declare module "lodash/fp/invokeMap" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "invokeMap">;
}

declare module "lodash/fp/invokeArgsMap" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "invokeArgsMap">;
}

declare module "lodash/fp/keyBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "keyBy">;
}

declare module "lodash/fp/indexBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "indexBy">;
}

declare module "lodash/fp/map" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "map">;
}

declare module "lodash/fp/pluck" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "pluck">;
}

declare module "lodash/fp/orderBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "orderBy">;
}

declare module "lodash/fp/partition" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "partition">;
}

declare module "lodash/fp/reduce" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "reduce">;
}

declare module "lodash/fp/reduceRight" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "reduceRight">;
}

declare module "lodash/fp/reject" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "reject">;
}

declare module "lodash/fp/sample" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "sample">;
}

declare module "lodash/fp/sampleSize" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "sampleSize">;
}

declare module "lodash/fp/shuffle" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "shuffle">;
}

declare module "lodash/fp/size" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "size">;
}

declare module "lodash/fp/some" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "some">;
}

declare module "lodash/fp/any" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "any">;
}

declare module "lodash/fp/sortBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "sortBy">;
}

declare module "lodash/fp/now" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "now">;
}

declare module "lodash/fp/after" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "after">;
}

declare module "lodash/fp/ary" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "ary">;
}

declare module "lodash/fp/nAry" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "nAry">;
}

declare module "lodash/fp/before" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "before">;
}

declare module "lodash/fp/bind" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "bind">;
}

declare module "lodash/fp/bindKey" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "bindKey">;
}

declare module "lodash/fp/curry" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "curry">;
}

declare module "lodash/fp/curryN" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "curryN">;
}

declare module "lodash/fp/curryRight" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "curryRight">;
}

declare module "lodash/fp/curryRightN" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "curryRightN">;
}

declare module "lodash/fp/debounce" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "debounce">;
}

declare module "lodash/fp/defer" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "defer">;
}

declare module "lodash/fp/delay" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "delay">;
}

declare module "lodash/fp/flip" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "flip">;
}

declare module "lodash/fp/memoize" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "memoize">;
}

declare module "lodash/fp/negate" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "negate">;
}

declare module "lodash/fp/complement" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "complement">;
}

declare module "lodash/fp/once" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "once">;
}

declare module "lodash/fp/overArgs" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "overArgs">;
}

declare module "lodash/fp/useWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "useWith">;
}

declare module "lodash/fp/partial" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "partial">;
}

declare module "lodash/fp/partialRight" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "partialRight">;
}

declare module "lodash/fp/rearg" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "rearg">;
}

declare module "lodash/fp/rest" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "rest">;
}

declare module "lodash/fp/unapply" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "unapply">;
}

declare module "lodash/fp/restFrom" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "restFrom">;
}

declare module "lodash/fp/spread" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "spread">;
}

declare module "lodash/fp/apply" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "apply">;
}

declare module "lodash/fp/spreadFrom" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "spreadFrom">;
}

declare module "lodash/fp/throttle" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "throttle">;
}

declare module "lodash/fp/unary" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "unary">;
}

declare module "lodash/fp/wrap" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "wrap">;
}

declare module "lodash/fp/castArray" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "castArray">;
}

declare module "lodash/fp/clone" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "clone">;
}

declare module "lodash/fp/cloneDeep" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "cloneDeep">;
}

declare module "lodash/fp/cloneDeepWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "cloneDeepWith">;
}

declare module "lodash/fp/cloneWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "cloneWith">;
}

declare module "lodash/fp/conformsTo" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "conformsTo">;
}

declare module "lodash/fp/where" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "where">;
}

declare module "lodash/fp/conforms" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "conforms">;
}

declare module "lodash/fp/eq" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "eq">;
}

declare module "lodash/fp/identical" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "identical">;
}

declare module "lodash/fp/gt" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "gt">;
}

declare module "lodash/fp/gte" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "gte">;
}

declare module "lodash/fp/isArguments" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isArguments">;
}

declare module "lodash/fp/isArray" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isArray">;
}

declare module "lodash/fp/isArrayBuffer" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isArrayBuffer">;
}

declare module "lodash/fp/isArrayLike" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isArrayLike">;
}

declare module "lodash/fp/isArrayLikeObject" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isArrayLikeObject">;
}

declare module "lodash/fp/isBoolean" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isBoolean">;
}

declare module "lodash/fp/isBuffer" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isBuffer">;
}

declare module "lodash/fp/isDate" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isDate">;
}

declare module "lodash/fp/isElement" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isElement">;
}

declare module "lodash/fp/isEmpty" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isEmpty">;
}

declare module "lodash/fp/isEqual" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isEqual">;
}

declare module "lodash/fp/equals" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "equals">;
}

declare module "lodash/fp/isEqualWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isEqualWith">;
}

declare module "lodash/fp/isError" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isError">;
}

declare module "lodash/fp/isFinite" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isFinite">;
}

declare module "lodash/fp/isFunction" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isFunction">;
}

declare module "lodash/fp/isInteger" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isInteger">;
}

declare module "lodash/fp/isLength" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isLength">;
}

declare module "lodash/fp/isMap" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isMap">;
}

declare module "lodash/fp/isMatch" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isMatch">;
}

declare module "lodash/fp/whereEq" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "whereEq">;
}

declare module "lodash/fp/isMatchWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isMatchWith">;
}

declare module "lodash/fp/isNaN" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isNaN">;
}

declare module "lodash/fp/isNative" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isNative">;
}

declare module "lodash/fp/isNil" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isNil">;
}

declare module "lodash/fp/isNull" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isNull">;
}

declare module "lodash/fp/isNumber" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isNumber">;
}

declare module "lodash/fp/isObject" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isObject">;
}

declare module "lodash/fp/isObjectLike" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isObjectLike">;
}

declare module "lodash/fp/isPlainObject" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isPlainObject">;
}

declare module "lodash/fp/isRegExp" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isRegExp">;
}

declare module "lodash/fp/isSafeInteger" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isSafeInteger">;
}

declare module "lodash/fp/isSet" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isSet">;
}

declare module "lodash/fp/isString" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isString">;
}

declare module "lodash/fp/isSymbol" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isSymbol">;
}

declare module "lodash/fp/isTypedArray" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isTypedArray">;
}

declare module "lodash/fp/isUndefined" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isUndefined">;
}

declare module "lodash/fp/isWeakMap" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isWeakMap">;
}

declare module "lodash/fp/isWeakSet" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "isWeakSet">;
}

declare module "lodash/fp/lt" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "lt">;
}

declare module "lodash/fp/lte" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "lte">;
}

declare module "lodash/fp/toArray" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "toArray">;
}

declare module "lodash/fp/toFinite" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "toFinite">;
}

declare module "lodash/fp/toInteger" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "toInteger">;
}

declare module "lodash/fp/toLength" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "toLength">;
}

declare module "lodash/fp/toNumber" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "toNumber">;
}

declare module "lodash/fp/toPlainObject" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "toPlainObject">;
}

declare module "lodash/fp/toSafeInteger" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "toSafeInteger">;
}

declare module "lodash/fp/toString" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "toString">;
}

declare module "lodash/fp/add" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "add">;
}

declare module "lodash/fp/ceil" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "ceil">;
}

declare module "lodash/fp/divide" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "divide">;
}

declare module "lodash/fp/floor" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "floor">;
}

declare module "lodash/fp/max" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "max">;
}

declare module "lodash/fp/maxBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "maxBy">;
}

declare module "lodash/fp/mean" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "mean">;
}

declare module "lodash/fp/meanBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "meanBy">;
}

declare module "lodash/fp/min" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "min">;
}

declare module "lodash/fp/minBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "minBy">;
}

declare module "lodash/fp/multiply" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "multiply">;
}

declare module "lodash/fp/round" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "round">;
}

declare module "lodash/fp/subtract" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "subtract">;
}

declare module "lodash/fp/sum" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "sum">;
}

declare module "lodash/fp/sumBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "sumBy">;
}

declare module "lodash/fp/clamp" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "clamp">;
}

declare module "lodash/fp/inRange" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "inRange">;
}

declare module "lodash/fp/random" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "random">;
}

declare module "lodash/fp/assign" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "assign">;
}

declare module "lodash/fp/assignAll" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "assignAll">;
}

declare module "lodash/fp/assignInAll" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "assignInAll">;
}

declare module "lodash/fp/extendAll" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "extendAll">;
}

declare module "lodash/fp/assignIn" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "assignIn">;
}

declare module "lodash/fp/assignInWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "assignInWith">;
}

declare module "lodash/fp/assignWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "assignWith">;
}

declare module "lodash/fp/assignInAllWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "assignInAllWith">;
}

declare module "lodash/fp/extendAllWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "extendAllWith">;
}

declare module "lodash/fp/assignAllWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "assignAllWith">;
}

declare module "lodash/fp/at" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "at">;
}

declare module "lodash/fp/props" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "props">;
}

declare module "lodash/fp/paths" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "paths">;
}

declare module "lodash/fp/create" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "create">;
}

declare module "lodash/fp/defaults" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "defaults">;
}

declare module "lodash/fp/defaultsAll" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "defaultsAll">;
}

declare module "lodash/fp/defaultsDeep" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "defaultsDeep">;
}

declare module "lodash/fp/defaultsDeepAll" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "defaultsDeepAll">;
}

declare module "lodash/fp/entries" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "entries">;
}

declare module "lodash/fp/entriesIn" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "entriesIn">;
}

declare module "lodash/fp/extend" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "extend">;
}

declare module "lodash/fp/extendWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "extendWith">;
}

declare module "lodash/fp/findKey" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "findKey">;
}

declare module "lodash/fp/findLastKey" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "findLastKey">;
}

declare module "lodash/fp/forIn" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "forIn">;
}

declare module "lodash/fp/forInRight" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "forInRight">;
}

declare module "lodash/fp/forOwn" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "forOwn">;
}

declare module "lodash/fp/forOwnRight" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "forOwnRight">;
}

declare module "lodash/fp/functions" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "functions">;
}

declare module "lodash/fp/functionsIn" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "functionsIn">;
}

declare module "lodash/fp/get" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "get">;
}

declare module "lodash/fp/prop" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "prop">;
}

declare module "lodash/fp/path" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "path">;
}

declare module "lodash/fp/getOr" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "getOr">;
}

declare module "lodash/fp/propOr" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "propOr">;
}

declare module "lodash/fp/pathOr" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "pathOr">;
}

declare module "lodash/fp/has" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "has">;
}

declare module "lodash/fp/hasIn" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "hasIn">;
}

declare module "lodash/fp/invert" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "invert">;
}

declare module "lodash/fp/invertObj" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "invertObj">;
}

declare module "lodash/fp/invertBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "invertBy">;
}

declare module "lodash/fp/invoke" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "invoke">;
}

declare module "lodash/fp/invokeArgs" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "invokeArgs">;
}

declare module "lodash/fp/keys" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "keys">;
}

declare module "lodash/fp/keysIn" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "keysIn">;
}

declare module "lodash/fp/mapKeys" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "mapKeys">;
}

declare module "lodash/fp/mapValues" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "mapValues">;
}

declare module "lodash/fp/merge" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "merge">;
}

declare module "lodash/fp/mergeAll" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "mergeAll">;
}

declare module "lodash/fp/mergeWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "mergeWith">;
}

declare module "lodash/fp/mergeAllWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "mergeAllWith">;
}

declare module "lodash/fp/omit" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "omit">;
}

declare module "lodash/fp/omitAll" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "omitAll">;
}

declare module "lodash/fp/omitBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "omitBy">;
}

declare module "lodash/fp/pick" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "pick">;
}

declare module "lodash/fp/pickAll" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "pickAll">;
}

declare module "lodash/fp/pickBy" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "pickBy">;
}

declare module "lodash/fp/result" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "result">;
}

declare module "lodash/fp/set" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "set">;
}

declare module "lodash/fp/assoc" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "assoc">;
}

declare module "lodash/fp/assocPath" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "assocPath">;
}

declare module "lodash/fp/setWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "setWith">;
}

declare module "lodash/fp/toPairs" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "toPairs">;
}

declare module "lodash/fp/toPairsIn" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "toPairsIn">;
}

declare module "lodash/fp/transform" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "transform">;
}

declare module "lodash/fp/unset" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "unset">;
}

declare module "lodash/fp/dissoc" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "dissoc">;
}

declare module "lodash/fp/dissocPath" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "dissocPath">;
}

declare module "lodash/fp/update" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "update">;
}

declare module "lodash/fp/updateWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "updateWith">;
}

declare module "lodash/fp/values" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "values">;
}

declare module "lodash/fp/valuesIn" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "valuesIn">;
}

declare module "lodash/fp/tap" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "tap">;
}

declare module "lodash/fp/thru" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "thru">;
}

declare module "lodash/fp/camelCase" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "camelCase">;
}

declare module "lodash/fp/capitalize" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "capitalize">;
}

declare module "lodash/fp/deburr" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "deburr">;
}

declare module "lodash/fp/endsWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "endsWith">;
}

declare module "lodash/fp/escape" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "escape">;
}

declare module "lodash/fp/escapeRegExp" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "escapeRegExp">;
}

declare module "lodash/fp/kebabCase" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "kebabCase">;
}

declare module "lodash/fp/lowerCase" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "lowerCase">;
}

declare module "lodash/fp/lowerFirst" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "lowerFirst">;
}

declare module "lodash/fp/pad" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "pad">;
}

declare module "lodash/fp/padChars" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "padChars">;
}

declare module "lodash/fp/padEnd" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "padEnd">;
}

declare module "lodash/fp/padCharsEnd" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "padCharsEnd">;
}

declare module "lodash/fp/padStart" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "padStart">;
}

declare module "lodash/fp/padCharsStart" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "padCharsStart">;
}

declare module "lodash/fp/parseInt" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "parseInt">;
}

declare module "lodash/fp/repeat" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "repeat">;
}

declare module "lodash/fp/replace" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "replace">;
}

declare module "lodash/fp/snakeCase" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "snakeCase">;
}

declare module "lodash/fp/split" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "split">;
}

declare module "lodash/fp/startCase" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "startCase">;
}

declare module "lodash/fp/startsWith" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "startsWith">;
}

declare module "lodash/fp/template" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "template">;
}

declare module "lodash/fp/toLower" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "toLower">;
}

declare module "lodash/fp/toUpper" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "toUpper">;
}

declare module "lodash/fp/trim" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "trim">;
}

declare module "lodash/fp/trimChars" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "trimChars">;
}

declare module "lodash/fp/trimEnd" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "trimEnd">;
}

declare module "lodash/fp/trimCharsEnd" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "trimCharsEnd">;
}

declare module "lodash/fp/trimStart" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "trimStart">;
}

declare module "lodash/fp/trimCharsStart" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "trimCharsStart">;
}

declare module "lodash/fp/truncate" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "truncate">;
}

declare module "lodash/fp/unescape" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "unescape">;
}

declare module "lodash/fp/upperCase" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "upperCase">;
}

declare module "lodash/fp/upperFirst" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "upperFirst">;
}

declare module "lodash/fp/words" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "words">;
}

declare module "lodash/fp/attempt" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "attempt">;
}

declare module "lodash/fp/bindAll" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "bindAll">;
}

declare module "lodash/fp/cond" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "cond">;
}

declare module "lodash/fp/constant" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "constant">;
}

declare module "lodash/fp/always" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "always">;
}

declare module "lodash/fp/defaultTo" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "defaultTo">;
}

declare module "lodash/fp/flow" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "flow">;
}

declare module "lodash/fp/pipe" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "pipe">;
}

declare module "lodash/fp/flowRight" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "flowRight">;
}

declare module "lodash/fp/compose" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "compose">;
}

declare module "lodash/fp/identity" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "identity">;
}

declare module "lodash/fp/iteratee" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "iteratee">;
}

declare module "lodash/fp/matches" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "matches">;
}

declare module "lodash/fp/matchesProperty" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "matchesProperty">;
}

declare module "lodash/fp/propEq" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "propEq">;
}

declare module "lodash/fp/pathEq" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "pathEq">;
}

declare module "lodash/fp/method" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "method">;
}

declare module "lodash/fp/methodOf" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "methodOf">;
}

declare module "lodash/fp/mixin" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "mixin">;
}

declare module "lodash/fp/noConflict" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "noConflict">;
}

declare module "lodash/fp/noop" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "noop">;
}

declare module "lodash/fp/nthArg" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "nthArg">;
}

declare module "lodash/fp/over" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "over">;
}

declare module "lodash/fp/juxt" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "juxt">;
}

declare module "lodash/fp/overEvery" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "overEvery">;
}

declare module "lodash/fp/allPass" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "allPass">;
}

declare module "lodash/fp/overSome" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "overSome">;
}

declare module "lodash/fp/anyPass" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "anyPass">;
}

declare module "lodash/fp/property" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "property">;
}

declare module "lodash/fp/propertyOf" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "propertyOf">;
}

declare module "lodash/fp/range" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "range">;
}

declare module "lodash/fp/rangeStep" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "rangeStep">;
}

declare module "lodash/fp/rangeRight" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "rangeRight">;
}

declare module "lodash/fp/rangeStepRight" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "rangeStepRight">;
}

declare module "lodash/fp/runInContext" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "runInContext">;
}

declare module "lodash/fp/stubArray" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "stubArray">;
}

declare module "lodash/fp/stubFalse" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "stubFalse">;
}

declare module "lodash/fp/F" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "F">;
}

declare module "lodash/fp/stubObject" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "stubObject">;
}

declare module "lodash/fp/stubString" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "stubString">;
}

declare module "lodash/fp/stubTrue" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "stubTrue">;
}

declare module "lodash/fp/T" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "T">;
}

declare module "lodash/fp/times" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "times">;
}

declare module "lodash/fp/toPath" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "toPath">;
}

declare module "lodash/fp/uniqueId" {
  declare module.exports: $PropertyType<$Exports<"lodash/fp">, "uniqueId">;
}
