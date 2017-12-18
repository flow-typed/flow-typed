declare module "lodash" {
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

  declare type OMapIterator<T, O, U> =
    | ((item: T, key: string, object: O) => U)
    | propertyIterateeShorthand;

  declare class Lodash {
    // Array
    chunk<T>(array: ?Array<T>, size?: number): Array<Array<T>>;
    compact<T, N: ?T>(array: Array<N>): Array<T>;
    concat<T>(base: Array<T>, ...elements: Array<any>): Array<T | any>;
    difference<T>(array: ?Array<T>, values?: Array<T>): Array<T>;
    differenceBy<T>(
      array: ?Array<T>,
      values: Array<T>,
      iteratee: ValueOnlyIteratee<T>
    ): T[];
    differenceWith<T>(array: T[], values: T[], comparator?: Comparator<T>): T[];
    drop<T>(array: ?Array<T>, n?: number): Array<T>;
    dropRight<T>(array: ?Array<T>, n?: number): Array<T>;
    dropRightWhile<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    dropWhile<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    fill<T, U>(
      array: ?Array<T>,
      value: U,
      start?: number,
      end?: number
    ): Array<T | U>;
    findIndex<T>(array: ?Array<T>, predicate?: Predicate<T>): number;
    findLastIndex<T>(array: ?Array<T>, predicate?: Predicate<T>): number;
    // alias of _.head
    first<T>(array: ?Array<T>): T;
    flatten<T, X>(array: Array<Array<T> | X>): Array<T | X>;
    flattenDeep<T>(array: any[]): Array<T>;
    flattenDepth(array: any[], depth?: number): any[];
    fromPairs<A, B>(pairs: Array<[A, B]>): { [key: A]: B };
    head<T>(array: ?Array<T>): T;
    indexOf<T>(array: ?Array<T>, value: T, fromIndex?: number): number;
    initial<T>(array: ?Array<T>): Array<T>;
    intersection<T>(...arrays: Array<Array<T>>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    intersectionBy<T>(a1: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    intersectionBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    intersectionBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    intersectionBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    intersectionWith<T>(a1: Array<T>, comparator: Comparator<T>): Array<T>;
    intersectionWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      comparator: Comparator<T>
    ): Array<T>;
    intersectionWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      comparator: Comparator<T>
    ): Array<T>;
    intersectionWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      comparator: Comparator<T>
    ): Array<T>;
    join<T>(array: ?Array<T>, separator?: string): string;
    last<T>(array: ?Array<T>): T;
    lastIndexOf<T>(array: ?Array<T>, value: T, fromIndex?: number): number;
    nth<T>(array: T[], n?: number): T;
    pull<T>(array: ?Array<T>, ...values?: Array<T>): Array<T>;
    pullAll<T>(array: ?Array<T>, values: Array<T>): Array<T>;
    pullAllBy<T>(
      array: ?Array<T>,
      values: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    pullAllWith<T>(array?: T[], values: T[], comparator?: Function): T[];
    pullAt<T>(array: ?Array<T>, ...indexed?: Array<number>): Array<T>;
    pullAt<T>(array: ?Array<T>, indexed?: Array<number>): Array<T>;
    remove<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    reverse<T>(array: ?Array<T>): Array<T>;
    slice<T>(array: ?Array<T>, start?: number, end?: number): Array<T>;
    sortedIndex<T>(array: ?Array<T>, value: T): number;
    sortedIndexBy<T>(
      array: ?Array<T>,
      value: T,
      iteratee?: ValueOnlyIteratee<T>
    ): number;
    sortedIndexOf<T>(array: ?Array<T>, value: T): number;
    sortedLastIndex<T>(array: ?Array<T>, value: T): number;
    sortedLastIndexBy<T>(
      array: ?Array<T>,
      value: T,
      iteratee?: ValueOnlyIteratee<T>
    ): number;
    sortedLastIndexOf<T>(array: ?Array<T>, value: T): number;
    sortedUniq<T>(array: ?Array<T>): Array<T>;
    sortedUniqBy<T>(array: ?Array<T>, iteratee?: (value: T) => mixed): Array<T>;
    tail<T>(array: ?Array<T>): Array<T>;
    take<T>(array: ?Array<T>, n?: number): Array<T>;
    takeRight<T>(array: ?Array<T>, n?: number): Array<T>;
    takeRightWhile<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    takeWhile<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    union<T>(...arrays?: Array<Array<T>>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    unionBy<T>(a1: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    unionBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    unionBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    unionBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    unionWith<T>(a1: Array<T>, comparator?: Comparator<T>): Array<T>;
    unionWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
    unionWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
    unionWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
    uniq<T>(array: ?Array<T>): Array<T>;
    uniqBy<T>(array: ?Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    uniqWith<T>(array: ?Array<T>, comparator?: Comparator<T>): Array<T>;
    unzip<T>(array: ?Array<T>): Array<T>;
    unzipWith<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>;
    without<T>(array: ?Array<T>, ...values?: Array<T>): Array<T>;
    xor<T>(...array: Array<Array<T>>): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    xorBy<T>(a1: Array<T>, iteratee?: ValueOnlyIteratee<T>): Array<T>;
    xorBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    xorBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    xorBy<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): Array<T>;
    //Workaround until (...parameter: T, parameter2: U) works
    xorWith<T>(a1: Array<T>, comparator?: Comparator<T>): Array<T>;
    xorWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
    xorWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
    xorWith<T>(
      a1: Array<T>,
      a2: Array<T>,
      a3: Array<T>,
      a4: Array<T>,
      comparator?: Comparator<T>
    ): Array<T>;
    zip<A, B>(a1: A[], a2: B[]): Array<[A, B]>;
    zip<A, B, C>(a1: A[], a2: B[], a3: C[]): Array<[A, B, C]>;
    zip<A, B, C, D>(a1: A[], a2: B[], a3: C[], a4: D[]): Array<[A, B, C, D]>;
    zip<A, B, C, D, E>(
      a1: A[],
      a2: B[],
      a3: C[],
      a4: D[],
      a5: E[]
    ): Array<[A, B, C, D, E]>;

    zipObject<K, V>(props?: Array<K>, values?: Array<V>): { [key: K]: V };
    zipObjectDeep(props?: any[], values?: any): Object;
    //Workaround until (...parameter: T, parameter2: U) works
    zipWith<T>(a1: NestedArray<T>, iteratee?: Iteratee<T>): Array<T>;
    zipWith<T>(
      a1: NestedArray<T>,
      a2: NestedArray<T>,
      iteratee?: Iteratee<T>
    ): Array<T>;
    zipWith<T>(
      a1: NestedArray<T>,
      a2: NestedArray<T>,
      a3: NestedArray<T>,
      iteratee?: Iteratee<T>
    ): Array<T>;
    zipWith<T>(
      a1: NestedArray<T>,
      a2: NestedArray<T>,
      a3: NestedArray<T>,
      a4: NestedArray<T>,
      iteratee?: Iteratee<T>
    ): Array<T>;

    // Collection
    countBy<T>(array: ?Array<T>, iteratee?: ValueOnlyIteratee<T>): Object;
    countBy<T: Object>(object: T, iteratee?: ValueOnlyIteratee<T>): Object;
    // alias of _.forEach
    each<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>;
    each<T: Object>(object: T, iteratee?: OIteratee<T>): T;
    // alias of _.forEachRight
    eachRight<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>;
    eachRight<T: Object>(object: T, iteratee?: OIteratee<T>): T;
    every<T>(array: ?Array<T>, iteratee?: Iteratee<T>): boolean;
    every<T: Object>(object: T, iteratee?: OIteratee<T>): boolean;
    filter<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    filter<A, T: { [id: string]: A }>(
      object: T,
      predicate?: OPredicate<A, T>
    ): Array<A>;
    find<T>(
      array: ?Array<T>,
      predicate?: Predicate<T>,
      fromIndex?: number
    ): T | void;
    find<V, A, T: { [id: string]: A }>(
      object: T,
      predicate?: OPredicate<A, T>,
      fromIndex?: number
    ): V;
    findLast<T>(
      array: ?Array<T>,
      predicate?: Predicate<T>,
      fromIndex?: number
    ): T | void;
    findLast<V, A, T: { [id: string]: A }>(
      object: T,
      predicate?: OPredicate<A, T>,
      fromIndex?: number
    ): V;
    flatMap<T, U>(array: ?Array<T>, iteratee?: FlatMapIteratee<T, U>): Array<U>;
    flatMap<T: Object, U>(
      object: T,
      iteratee?: OFlatMapIteratee<T, U>
    ): Array<U>;
    flatMapDeep<T, U>(
      array: ?Array<T>,
      iteratee?: FlatMapIteratee<T, U>
    ): Array<U>;
    flatMapDeep<T: Object, U>(
      object: T,
      iteratee?: OFlatMapIteratee<T, U>
    ): Array<U>;
    flatMapDepth<T, U>(
      array: ?Array<T>,
      iteratee?: FlatMapIteratee<T, U>,
      depth?: number
    ): Array<U>;
    flatMapDepth<T: Object, U>(
      object: T,
      iteratee?: OFlatMapIteratee<T, U>,
      depth?: number
    ): Array<U>;
    forEach<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>;
    forEach<T: Object>(object: T, iteratee?: OIteratee<T>): T;
    forEachRight<T>(array: ?Array<T>, iteratee?: Iteratee<T>): Array<T>;
    forEachRight<T: Object>(object: T, iteratee?: OIteratee<T>): T;
    groupBy<V, T>(
      array: ?Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): { [key: V]: Array<T> };
    groupBy<V, A, T: { [id: string]: A }>(
      object: T,
      iteratee?: ValueOnlyIteratee<A>
    ): { [key: V]: Array<A> };
    includes<T>(array: ?Array<T>, value: T, fromIndex?: number): boolean;
    includes<T: Object>(object: T, value: any, fromIndex?: number): boolean;
    includes(str: string, value: string, fromIndex?: number): boolean;
    invokeMap<T>(
      array: ?Array<T>,
      path: ((value: T) => Array<string> | string) | Array<string> | string,
      ...args?: Array<any>
    ): Array<any>;
    invokeMap<T: Object>(
      object: T,
      path: ((value: any) => Array<string> | string) | Array<string> | string,
      ...args?: Array<any>
    ): Array<any>;
    keyBy<T, V>(
      array: ?Array<T>,
      iteratee?: ValueOnlyIteratee<T>
    ): { [key: V]: ?T };
    keyBy<V, A, T: { [id: string]: A }>(
      object: T,
      iteratee?: ValueOnlyIteratee<A>
    ): { [key: V]: ?A };
    map<T, U>(array: ?Array<T>, iteratee?: MapIterator<T, U>): Array<U>;
    map<V, T: Object, U>(
      object: ?T,
      iteratee?: OMapIterator<V, T, U>
    ): Array<U>;
    map(
      str: ?string,
      iteratee?: (char: string, index: number, str: string) => any
    ): string;
    orderBy<T>(
      array: ?Array<T>,
      iteratees?: Array<Iteratee<T>> | string,
      orders?: Array<"asc" | "desc"> | string
    ): Array<T>;
    orderBy<V, T: Object>(
      object: T,
      iteratees?: Array<OIteratee<*>> | string,
      orders?: Array<"asc" | "desc"> | string
    ): Array<V>;
    partition<T>(
      array: ?Array<T>,
      predicate?: Predicate<T>
    ): [Array<T>, Array<T>];
    partition<V, A, T: { [id: string]: A }>(
      object: T,
      predicate?: OPredicate<A, T>
    ): [Array<V>, Array<V>];
    reduce<T, U>(
      array: ?Array<T>,
      iteratee?: (
        accumulator: U,
        value: T,
        index: number,
        array: ?Array<T>
      ) => U,
      accumulator?: U
    ): U;
    reduce<T: Object, U>(
      object: T,
      iteratee?: (accumulator: U, value: any, key: string, object: T) => U,
      accumulator?: U
    ): U;
    reduceRight<T, U>(
      array: ?Array<T>,
      iteratee?: (
        accumulator: U,
        value: T,
        index: number,
        array: ?Array<T>
      ) => U,
      accumulator?: U
    ): U;
    reduceRight<T: Object, U>(
      object: T,
      iteratee?: (accumulator: U, value: any, key: string, object: T) => U,
      accumulator?: U
    ): U;
    reject<T>(array: ?Array<T>, predicate?: Predicate<T>): Array<T>;
    reject<V: Object, A, T: { [id: string]: A }>(
      object: T,
      predicate?: OPredicate<A, T>
    ): Array<V>;
    sample<T>(array: ?Array<T>): T;
    sample<V, T: Object>(object: T): V;
    sampleSize<T>(array: ?Array<T>, n?: number): Array<T>;
    sampleSize<V, T: Object>(object: T, n?: number): Array<V>;
    shuffle<T>(array: ?Array<T>): Array<T>;
    shuffle<V, T: Object>(object: T): Array<V>;
    size(collection: Array<any> | Object): number;
    some<T>(array: ?Array<T>, predicate?: Predicate<T>): boolean;
    some<A, T: { [id: string]: A }>(
      object?: ?T,
      predicate?: OPredicate<A, T>
    ): boolean;
    sortBy<T>(array: ?Array<T>, ...iteratees?: Array<Iteratee<T>>): Array<T>;
    sortBy<T>(array: ?Array<T>, iteratees?: Array<Iteratee<T>>): Array<T>;
    sortBy<V, T: Object>(
      object: T,
      ...iteratees?: Array<OIteratee<T>>
    ): Array<V>;
    sortBy<V, T: Object>(object: T, iteratees?: Array<OIteratee<T>>): Array<V>;

    // Date
    now(): number;

    // Function
    after(n: number, fn: Function): Function;
    ary(func: Function, n?: number): Function;
    before(n: number, fn: Function): Function;
    bind(func: Function, thisArg: any, ...partials: Array<any>): Function;
    bindKey(obj: Object, key: string, ...partials: Array<any>): Function;
    curry(func: Function, arity?: number): Function;
    curryRight(func: Function, arity?: number): Function;
    debounce(
      func: Function,
      wait?: number,
      options?: DebounceOptions
    ): Function;
    defer(func: Function, ...args?: Array<any>): number;
    delay(func: Function, wait: number, ...args?: Array<any>): number;
    flip(func: Function): Function;
    memoize(func: Function, resolver?: Function): Function;
    negate(predicate: Function): Function;
    once(func: Function): Function;
    overArgs(func: Function, ...transforms: Array<Function>): Function;
    overArgs(func: Function, transforms: Array<Function>): Function;
    partial(func: Function, ...partials: any[]): Function;
    partialRight(func: Function, ...partials: Array<any>): Function;
    partialRight(func: Function, partials: Array<any>): Function;
    rearg(func: Function, ...indexes: Array<number>): Function;
    rearg(func: Function, indexes: Array<number>): Function;
    rest(func: Function, start?: number): Function;
    spread(func: Function): Function;
    throttle(
      func: Function,
      wait?: number,
      options?: ThrottleOptions
    ): Function;
    unary(func: Function): Function;
    wrap(value: any, wrapper: Function): Function;

    // Lang
    castArray(value: *): any[];
    clone<T>(value: T): T;
    cloneDeep<T>(value: T): T;
    cloneDeepWith<T, U>(
      value: T,
      customizer?: ?(value: T, key: number | string, object: T, stack: any) => U
    ): U;
    cloneWith<T, U>(
      value: T,
      customizer?: ?(value: T, key: number | string, object: T, stack: any) => U
    ): U;
    conformsTo<T: { [key: string]: mixed }>(
      source: T,
      predicates: T & { [key: string]: (x: any) => boolean }
    ): boolean;
    eq(value: any, other: any): boolean;
    gt(value: any, other: any): boolean;
    gte(value: any, other: any): boolean;
    isArguments(value: any): boolean;
    isArray(value: any): boolean;
    isArrayBuffer(value: any): boolean;
    isArrayLike(value: any): boolean;
    isArrayLikeObject(value: any): boolean;
    isBoolean(value: any): boolean;
    isBuffer(value: any): boolean;
    isDate(value: any): boolean;
    isElement(value: any): boolean;
    isEmpty(value: any): boolean;
    isEqual(value: any, other: any): boolean;
    isEqualWith<T, U>(
      value: T,
      other: U,
      customizer?: (
        objValue: any,
        otherValue: any,
        key: number | string,
        object: T,
        other: U,
        stack: any
      ) => boolean | void
    ): boolean;
    isError(value: any): boolean;
    isFinite(value: any): boolean;
    isFunction(value: Function): true;
    isFunction(value: number | string | void | null | Object): false;
    isInteger(value: any): boolean;
    isLength(value: any): boolean;
    isMap(value: any): boolean;
    isMatch(object?: ?Object, source: Object): boolean;
    isMatchWith<T: Object, U: Object>(
      object: T,
      source: U,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: number | string,
        object: T,
        source: U
      ) => boolean | void
    ): boolean;
    isNaN(value: any): boolean;
    isNative(value: any): boolean;
    isNil(value: any): boolean;
    isNull(value: any): boolean;
    isNumber(value: any): boolean;
    isObject(value: any): boolean;
    isObjectLike(value: any): boolean;
    isPlainObject(value: any): boolean;
    isRegExp(value: any): boolean;
    isSafeInteger(value: any): boolean;
    isSet(value: any): boolean;
    isString(value: string): true;
    isString(
      value: number | boolean | Function | void | null | Object | Array<any>
    ): false;
    isSymbol(value: any): boolean;
    isTypedArray(value: any): boolean;
    isUndefined(value: any): boolean;
    isWeakMap(value: any): boolean;
    isWeakSet(value: any): boolean;
    lt(value: any, other: any): boolean;
    lte(value: any, other: any): boolean;
    toArray(value: any): Array<any>;
    toFinite(value: any): number;
    toInteger(value: any): number;
    toLength(value: any): number;
    toNumber(value: any): number;
    toPlainObject(value: any): Object;
    toSafeInteger(value: any): number;
    toString(value: any): string;

    // Math
    add(augend: number, addend: number): number;
    ceil(number: number, precision?: number): number;
    divide(dividend: number, divisor: number): number;
    floor(number: number, precision?: number): number;
    max<T>(array: ?Array<T>): T;
    maxBy<T>(array: ?Array<T>, iteratee?: Iteratee<T>): T;
    mean(array: Array<*>): number;
    meanBy<T>(array: Array<T>, iteratee?: Iteratee<T>): number;
    min<T>(array: ?Array<T>): T;
    minBy<T>(array: ?Array<T>, iteratee?: Iteratee<T>): T;
    multiply(multiplier: number, multiplicand: number): number;
    round(number: number, precision?: number): number;
    subtract(minuend: number, subtrahend: number): number;
    sum(array: Array<*>): number;
    sumBy<T>(array: Array<T>, iteratee?: Iteratee<T>): number;

    // number
    clamp(number: number, lower?: number, upper: number): number;
    inRange(number: number, start?: number, end: number): boolean;
    random(lower?: number, upper?: number, floating?: boolean): number;

    // Object
    assign(object?: ?Object, ...sources?: Array<Object>): Object;
    assignIn<A, B>(a: A, b: B): A & B;
    assignIn<A, B, C>(a: A, b: B, c: C): A & B & C;
    assignIn<A, B, C, D>(a: A, b: B, c: C, d: D): A & B & C & D;
    assignIn<A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
    assignInWith<T: Object, A: Object>(
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
    assignInWith<T: Object, A: Object, B: Object>(
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
    assignInWith<T: Object, A: Object, B: Object, C: Object>(
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
    assignInWith<T: Object, A: Object, B: Object, C: Object, D: Object>(
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
    assignWith<T: Object, A: Object>(
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
    assignWith<T: Object, A: Object, B: Object>(
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
    assignWith<T: Object, A: Object, B: Object, C: Object>(
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
    assignWith<T: Object, A: Object, B: Object, C: Object, D: Object>(
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
    at(object?: ?Object, ...paths: Array<string>): Array<any>;
    at(object?: ?Object, paths: Array<string>): Array<any>;
    create<T>(prototype: T, properties?: Object): $Supertype<T>;
    defaults(object?: ?Object, ...sources?: Array<Object>): Object;
    defaultsDeep(object?: ?Object, ...sources?: Array<Object>): Object;
    // alias for _.toPairs
    entries(object?: ?Object): Array<[string, any]>;
    // alias for _.toPairsIn
    entriesIn(object?: ?Object): Array<[string, any]>;
    // alias for _.assignIn
    extend<A, B>(a: A, b: B): A & B;
    extend<A, B, C>(a: A, b: B, c: C): A & B & C;
    extend<A, B, C, D>(a: A, b: B, c: C, d: D): A & B & C & D;
    extend<A, B, C, D, E>(a: A, b: B, c: C, d: D, e: E): A & B & C & D & E;
    // alias for _.assignInWith
    extendWith<T: Object, A: Object>(
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
    extendWith<T: Object, A: Object, B: Object>(
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
    extendWith<T: Object, A: Object, B: Object, C: Object>(
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
    extendWith<T: Object, A: Object, B: Object, C: Object, D: Object>(
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
    findKey<A, T: { [id: string]: A }>(
      object?: ?T,
      predicate?: OPredicate<A, T>
    ): string | void;
    findLastKey<A, T: { [id: string]: A }>(
      object?: ?T,
      predicate?: OPredicate<A, T>
    ): string | void;
    forIn(object?: ?Object, iteratee?: OIteratee<*>): Object;
    forInRight(object?: ?Object, iteratee?: OIteratee<*>): Object;
    forOwn(object?: ?Object, iteratee?: OIteratee<*>): Object;
    forOwnRight(object?: ?Object, iteratee?: OIteratee<*>): Object;
    functions(object?: ?Object): Array<string>;
    functionsIn(object?: ?Object): Array<string>;
    get(
      object?: ?Object | ?Array<any>,
      path?: ?Array<string> | string,
      defaultValue?: any
    ): any;
    has(object?: ?Object, path?: ?Array<string> | string): boolean;
    hasIn(object?: ?Object, path?: ?Array<string> | string): boolean;
    invert(object?: ?Object, multiVal?: boolean): Object;
    invertBy(object: ?Object, iteratee?: Function): Object;
    invoke(
      object?: ?Object,
      path?: ?Array<string> | string,
      ...args?: Array<any>
    ): any;
    keys<K>(object?: ?{ [key: K]: any }): Array<K>;
    keys(object?: ?Object): Array<string>;
    keysIn(object?: ?Object): Array<string>;
    mapKeys(object?: ?Object, iteratee?: OIteratee<*>): Object;
    mapValues(object?: ?Object, iteratee?: OIteratee<*>): Object;
    merge(object?: ?Object, ...sources?: Array<?Object>): Object;
    mergeWith<T: Object, A: Object>(
      object: T,
      customizer?: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void
    ): Object;
    mergeWith<T: Object, A: Object, B: Object>(
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
    mergeWith<T: Object, A: Object, B: Object, C: Object>(
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
    mergeWith<T: Object, A: Object, B: Object, C: Object, D: Object>(
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
    omit(object?: ?Object, ...props: Array<string>): Object;
    omit(object?: ?Object, props: Array<string>): Object;
    omitBy<A, T: { [id: string]: A }>(
      object?: ?T,
      predicate?: OPredicate<A, T>
    ): Object;
    pick(object?: ?Object, ...props: Array<string>): Object;
    pick(object?: ?Object, props: Array<string>): Object;
    pickBy<A, T: { [id: string]: A }>(
      object?: ?T,
      predicate?: OPredicate<A, T>
    ): Object;
    result(
      object?: ?Object,
      path?: ?Array<string> | string,
      defaultValue?: any
    ): any;
    set(object?: ?Object, path?: ?Array<string> | string, value: any): Object;
    setWith<T>(
      object: T,
      path?: ?Array<string> | string,
      value: any,
      customizer?: (nsValue: any, key: string, nsObject: T) => any
    ): Object;
    toPairs(object?: ?Object | Array<*>): Array<[string, any]>;
    toPairsIn(object?: ?Object): Array<[string, any]>;
    transform(
      collection: Object | Array<any>,
      iteratee?: OIteratee<*>,
      accumulator?: any
    ): any;
    unset(object?: ?Object, path?: ?Array<string> | string): boolean;
    update(object: Object, path: string[] | string, updater: Function): Object;
    updateWith(
      object: Object,
      path: string[] | string,
      updater: Function,
      customizer?: Function
    ): Object;
    values(object?: ?Object): Array<any>;
    valuesIn(object?: ?Object): Array<any>;

    // Seq
    // harder to read, but this is _()
    (value: any): any;
    chain<T>(value: T): any;
    tap<T>(value: T, interceptor: (value: T) => any): T;
    thru<T1, T2>(value: T1, interceptor: (value: T1) => T2): T2;
    // TODO: _.prototype.*

    // String
    camelCase(string?: ?string): string;
    capitalize(string?: string): string;
    deburr(string?: string): string;
    endsWith(string?: string, target?: string, position?: number): boolean;
    escape(string?: string): string;
    escapeRegExp(string?: string): string;
    kebabCase(string?: string): string;
    lowerCase(string?: string): string;
    lowerFirst(string?: string): string;
    pad(string?: string, length?: number, chars?: string): string;
    padEnd(string?: string, length?: number, chars?: string): string;
    padStart(string?: string, length?: number, chars?: string): string;
    parseInt(string: string, radix?: number): number;
    repeat(string?: string, n?: number): string;
    replace(
      string?: string,
      pattern: RegExp | string,
      replacement: ((string: string) => string) | string
    ): string;
    snakeCase(string?: string): string;
    split(
      string?: string,
      separator: RegExp | string,
      limit?: number
    ): Array<string>;
    startCase(string?: string): string;
    startsWith(string?: string, target?: string, position?: number): boolean;
    template(string?: string, options?: TemplateSettings): Function;
    toLower(string?: string): string;
    toUpper(string?: string): string;
    trim(string?: string, chars?: string): string;
    trimEnd(string?: string, chars?: string): string;
    trimStart(string?: string, chars?: string): string;
    truncate(string?: string, options?: TruncateOptions): string;
    unescape(string?: string): string;
    upperCase(string?: string): string;
    upperFirst(string?: string): string;
    words(string?: string, pattern?: RegExp | string): Array<string>;

    // Util
    attempt(func: Function): any;
    bindAll(object?: ?Object, methodNames: Array<string>): Object;
    bindAll(object?: ?Object, ...methodNames: Array<string>): Object;
    cond(pairs: NestedArray<Function>): Function;
    conforms(source: Object): Function;
    constant<T>(value: T): () => T;
    defaultTo<T1: string | boolean | Object, T2>(
      value: T1,
      defaultValue: T2
    ): T1;
    // NaN is a number instead of its own type, otherwise it would behave like null/void
    defaultTo<T1: number, T2>(value: T1, defaultValue: T2): T1 | T2;
    defaultTo<T1: void | null, T2>(value: T1, defaultValue: T2): T2;
    flow(...funcs?: Array<Function>): Function;
    flow(funcs?: Array<Function>): Function;
    flowRight(...funcs?: Array<Function>): Function;
    flowRight(funcs?: Array<Function>): Function;
    identity<T>(value: T): T;
    iteratee(func?: any): Function;
    matches(source: Object): Function;
    matchesProperty(path?: ?Array<string> | string, srcValue: any): Function;
    method(path?: ?Array<string> | string, ...args?: Array<any>): Function;
    methodOf(object?: ?Object, ...args?: Array<any>): Function;
    mixin<T: Function | Object>(
      object?: T,
      source: Object,
      options?: { chain: boolean }
    ): T;
    noConflict(): Lodash;
    noop(...args: Array<mixed>): void;
    nthArg(n?: number): Function;
    over(...iteratees: Array<Function>): Function;
    over(iteratees: Array<Function>): Function;
    overEvery(...predicates: Array<Function>): Function;
    overEvery(predicates: Array<Function>): Function;
    overSome(...predicates: Array<Function>): Function;
    overSome(predicates: Array<Function>): Function;
    property(path?: ?Array<string> | string): Function;
    propertyOf(object?: ?Object): Function;
    range(start: number, end: number, step?: number): Array<number>;
    range(end: number, step?: number): Array<number>;
    rangeRight(start: number, end: number, step?: number): Array<number>;
    rangeRight(end: number, step?: number): Array<number>;
    runInContext(context?: Object): Function;

    stubArray(): Array<*>;
    stubFalse(): false;
    stubObject(): {};
    stubString(): "";
    stubTrue(): true;
    times(n: number, ...rest: Array<void>): Array<number>;
    times<T>(n: number, iteratee: (i: number) => T): Array<T>;
    toPath(value: any): Array<string>;
    uniqueId(prefix?: string): string;

    // Properties
    VERSION: string;
    templateSettings: TemplateSettings;
  }

  declare module.exports: Lodash;
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
