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

  declare type OPredicate<A> =
    | ((value: A) => any)
    | matchesIterateeShorthand
    | matchesPropertyIterateeShorthand
    | propertyIterateeShorthand;

  declare type OIterateeWithResult<V, R> =
    | Object
    | string
    | ((value: V) => R);
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

  declare type MapIterator<T, U> =
    | ((item: T) => U)
    | propertyIterateeShorthand;

  declare type OMapIterator<T, U> =
    | ((item: T) => U)
    | propertyIterateeShorthand;

  declare class Lodash {
    // Array
    chunk<T>(size: number, array: ?Array<T>): Array<Array<T>>,
    compact<T, N: ?T>(array: Array<N>): Array<T>,
    concat<T>(base: Array<T>, elements: Array<T>): Array<T>,
    difference<T>(values: Array<T>, array: ?Array<T>): Array<T>,
    differenceBy<T>(
      values: Array<T>,
      iteratee: ValueOnlyIteratee<T>,
      array: ?Array<T>
    ): T[],
    differenceWith<T>(values: T[], comparator: Comparator<T>, array: T[]): T[],
    drop<T>(n: number, array: ?Array<T>): Array<T>,
    dropRight<T>(n: number, array: ?Array<T>): Array<T>,
    dropRightWhile<T>(predicate: Predicate<T>, array: ?Array<T>): Array<T>,
    dropWhile<T>(predicate: Predicate<T>, array: ?Array<T>): Array<T>,
    fill<T, U>(
      start: number,
      end: number,
      value: U,
      array: ?Array<T>
    ): Array<T | U>,
    findIndex<T>(
      predicate: Predicate<T>,
      array: ?Array<T>
    ): number,
    findLastIndex<T>(
      predicate: Predicate<T>,
      array: ?Array<T>
    ): number,
    // alias of _.head
    first<T>(array: ?Array<T>): T,
    flatten<T, X>(array: Array<Array<T> | X>): Array<T | X>,
    flattenDeep<T>(array: any[]): Array<T>,
    flattenDepth(depth: number, array: any[]): any[],
    fromPairs<T>(pairs: Array<T>): Object,
    head<T>(array: ?Array<T>): T,
    indexOf<T>(value: T, array: ?Array<T>): number,
    initial<T>(array: ?Array<T>): Array<T>,
    intersection<T>(a1: Array<T>, a2: Array<T>): Array<T>,
    intersectionBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>,
    intersectionWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>,
    join<T>(separator: string, array: ?Array<T>): string,
    last<T>(array: ?Array<T>): T,
    lastIndexOf<T>(value: T, array: ?Array<T>): number,
    nth<T>(n: number, array: T[]): T,
    pull<T>(value: T, array: ?Array<T>): Array<T>,
    pullAll<T>(values: Array<T>, array: ?Array<T>): Array<T>,
    pullAllBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      values: Array<T>,
      array: ?Array<T>
    ): Array<T>,
    pullAllWith<T>(comparator: Function, values: T[], array: T[]): T[],
    pullAt<T>(indexed: Array<number>, array: ?Array<T>): Array<T>,
    remove<T>(predicate: Predicate<T>, array: ?Array<T>): Array<T>,
    reverse<T>(array: ?Array<T>): Array<T>,
    slice<T>(start: number, end: number, array: ?Array<T>): Array<T>,
    sortedIndex<T>(value: T, array: ?Array<T>): number,
    sortedIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      value: T,
      array: ?Array<T>
    ): number,
    sortedIndexOf<T>(value: T, array: ?Array<T>): number,
    sortedLastIndex<T>(value: T, array: ?Array<T>): number,
    sortedLastIndexBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      value: T,
      array: ?Array<T>
    ): number,
    sortedLastIndexOf<T>(value: T, array: ?Array<T>): number,
    sortedUniq<T>(array: ?Array<T>): Array<T>,
    sortedUniqBy<T>(iteratee: (value: T) => mixed, array: ?Array<T>): Array<T>,
    tail<T>(array: ?Array<T>): Array<T>,
    take<T>(n: number, array: ?Array<T>): Array<T>,
    takeRight<T>(n: number, array: ?Array<T>): Array<T>,
    takeRightWhile<T>(predicate: Predicate<T>, array: ?Array<T>): Array<T>,
    takeWhile<T>(predicate: Predicate<T>, array: ?Array<T>): Array<T>,
    union<T>(a1: Array<T>, a2: Array<T>): Array<T>,
    unionBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>,
    unionWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>,
    uniq<T>(array: ?Array<T>): Array<T>,
    uniqBy<T>(iteratee: ValueOnlyIteratee<T>, array: ?Array<T>): Array<T>,
    uniqWith<T>(comparator: Comparator<T>, array: ?Array<T>): Array<T>,
    unzip<T>(array: ?Array<T>): Array<T>,
    unzipWith<T>(iteratee: Iteratee<T>, array: ?Array<T>): Array<T>,
    without<T>(values: Array<T>, array: ?Array<T>): Array<T>,
    xor<T>(a1: Array<T>, a2: Array<T>): Array<T>,
    xorBy<T>(
      iteratee: ValueOnlyIteratee<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>,
    xorWith<T>(
      comparator: Comparator<T>,
      a1: Array<T>,
      a2: Array<T>
    ): Array<T>,
    zip<A, B>(a1: A[], a2: B[]): Array<[A, B]>,
    zipObject(props: Array<any>, values: Array<any>): Object,
    zipObjectDeep(props: any[], values: any): Object,
    zipWith<T>(
      iteratee: Iteratee<T>,
      a1: NestedArray<T>,
      a2: NestedArray<T>
    ): Array<T>,
    // Collection
    countBy<T>(iteratee: ValueOnlyIteratee<T>, array: ?Array<T>): Object,
    countBy<T: Object>(iteratee: ValueOnlyIteratee<T>, object: T): Object,
    // alias of _.forEach
    each<T>(iteratee: Iteratee<T>, array: ?Array<T>): Array<T>,
    each<T: Object>(iteratee: OIteratee<T>, object: T): T,
    // alias of _.forEachRight
    eachRight<T>(iteratee: Iteratee<T>, array: ?Array<T>): Array<T>,
    eachRight<T: Object>(iteratee: OIteratee<T>, object: T): T,
    every<T>(iteratee: Iteratee<T>, array: ?Array<T>): boolean,
    every<T: Object>(iteratee: OIteratee<T>, object: T): boolean,
    filter<T>(predicate: Predicate<T>, array: ?Array<T>): Array<T>,
    filter<A, T: { [id: string]: A }>(
      predicate: OPredicate<A>,
      object: T
    ): Array<A>,
    find<T>(
      predicate: Predicate<T>,
      array: ?Array<T>
    ): T | void,
    find<V, A, T: { [id: string]: A }>(
      predicate: OPredicate<A>,
      object: T
    ): V,
    findLast<T>(
      predicate: Predicate<T>,
      array: ?Array<T>
    ): T | void,
    findLast<V, A, T: { [id: string]: A }>(
      predicate: OPredicate<A>,
      object: T
    ): V,
    flatMap<T, U>(iteratee: FlatMapIteratee<T, U>, array: ?Array<T>): Array<U>,
    flatMap<T: Object, U>(
      iteratee: OFlatMapIteratee<T, U>,
      object: T
    ): Array<U>,
    flatMapDeep<T, U>(
      iteratee: FlatMapIteratee<T, U>,
      array: ?Array<T>
    ): Array<U>,
    flatMapDeep<T: Object, U>(
      iteratee: OFlatMapIteratee<T, U>,
      object: T
    ): Array<U>,
    flatMapDepth<T, U>(
      iteratee: FlatMapIteratee<T, U>,
      depth: number,
      array: ?Array<T>
    ): Array<U>,
    flatMapDepth<T: Object, U>(
      iteratee: OFlatMapIteratee<T, U>,
      depth: number,
      object: T
    ): Array<U>,
    forEach<T>(iteratee: Iteratee<T>, array: ?Array<T>): Array<T>,
    forEach<T: Object>(iteratee: OIteratee<T>, object: T): T,
    forEachRight<T>(iteratee: Iteratee<T>, array: ?Array<T>): Array<T>,
    forEachRight<T: Object>(iteratee: OIteratee<T>, object: T): T,
    groupBy<V, T>(
      iteratee: ValueOnlyIteratee<T>,
      array: ?Array<T>
    ): { [key: V]: Array<T> },
    groupBy<V, A, T: { [id: string]: A }>(
      iteratee: ValueOnlyIteratee<A>,
      object: T
    ): { [key: V]: Array<A> },
    includes<T>(value: T, array: ?Array<T>): boolean,
    includes<T: Object>(value: any, object: T): boolean,
    includes(value: string, str: string): boolean,
    invokeMap<T>(
      path: ((value: T) => Array<string> | string) | Array<string> | string,
      array: ?Array<T>
    ): Array<any>,
    invokeMap<T: Object>(
      path: ((value: any) => Array<string> | string) | Array<string> | string,
      object: T
    ): Array<any>,
    keyBy<T, V>(
      iteratee: ValueOnlyIteratee<T>,
      array: ?Array<T>
    ): { [key: V]: ?T },
    keyBy<V, A, I, T: { [id: I]: A }>(
      iteratee: ValueOnlyIteratee<A>,
      object: T
    ): { [key: V]: ?A },
    map<T, U>(iteratee: MapIterator<T, U>, array: ?Array<T>): Array<U>,
    map<V, T: Object, U>(
      iteratee: OMapIterator<V, U>,
      object: ?T
    ): Array<U>,
    map(
      iteratee: (char: string) => any,
      str: ?string
    ): string,
    orderBy<T>(
      iteratees: Array<Iteratee<T>> | string,
      orders: Array<"asc" | "desc"> | string,
      array: ?Array<T>
    ): Array<T>,
    orderBy<V, T: Object>(
      iteratees: Array<OIteratee<*>> | string,
      orders: Array<"asc" | "desc"> | string,
      object: T,
    ): Array<V>,
    partition<T>(predicate: Predicate<T>, array: ?Array<T>): NestedArray<T>,
    partition<V, A, T: { [id: string]: A }>(
      predicate: OPredicate<A>,
      object: T
    ): NestedArray<V>,
    reduce<T, U>(
      iteratee: (
        accumulator: U,
        value: T
      ) => U,
      accumulator: U,
      array: ?Array<T>
    ): U,
    reduce<T: Object, U>(
      iteratee: (accumulator: U, value: any) => U,
      accumulator: U,
      object: T
    ): U,
    reduceRight<T, U>(
      iteratee: (
        accumulator: U,
        value: T
      ) => U,
      accumulator: U,
      array: ?Array<T>
    ): U,
    reduceRight<T: Object, U>(
      iteratee: (accumulator: U, value: any) => U,
      accumulator: U,
      object: T,
    ): U,
    reject<T>(predicate: Predicate<T>, array: ?Array<T>): Array<T>,
    reject<V: Object, A, T: { [id: string]: A }>(
      predicate: OPredicate<A>,
      object: T
    ): Array<V>,
    sample<T>(array: ?Array<T>): T,
    sample<V, T: Object>(object: T): V,
    sampleSize<T>(n: number, array: ?Array<T>): Array<T>,
    sampleSize<V, T: Object>(n: number, object: T): Array<V>,
    shuffle<T>(array: ?Array<T>): Array<T>,
    shuffle<V, T: Object>(object: T): Array<V>,
    size(collection: Array<any> | Object): number,
    some<T>(predicate: Predicate<T>, array: ?Array<T>): boolean,
    some<A, T: { [id: string]: A }>(
      predicate: OPredicate<A>,
      object: ?T
    ): boolean,
    sortBy<T>(iteratees: Array<Iteratee<T>>, array: ?Array<T>): Array<T>,
    sortBy<V, T: Object>(iteratees: Array<OIteratee<T>>, object: T): Array<V>,

    // Date
    now(): number,

    // Function
    after(fn: Function, n: number): Function,
    ary(n: number, func: Function): Function,
    before(fn: Function, n: number): Function,
    bind(func: Function, thisArg: any): Function,
    bindKey(obj: Object, key: string): Function,
    curry(arity: number, func: Function): Function,
    curryRight(arity: number, func: Function): Function,
    debounce(
      wait: number,
      func: Function
    ): Function,
    defer(func: Function): number,
    delay(wait: number, func: Function): number,
    flip(func: Function): Function,
    memoize(func: Function): Function,
    negate(predicate: Function): Function,
    once(func: Function): Function,
    overArgs(func: Function, transforms: Array<Function>): Function,
    partial(func: Function, partials: any[]): Function,
    partialRight(func: Function, partials: Array<any>): Function,
    rearg(indexes: Array<number>, func: Function): Function,
    rest(func: Function): Function,
    spread(func: Function): Function,
    throttle(
      wait: number,
      func: Function
    ): Function,
    unary(func: Function): Function,
    wrap(wrapper: Function, value: any): Function,

    // Lang
    castArray(value: *): any[],
    clone<T>(value: T): T,
    cloneDeep<T>(value: T): T,
    cloneDeepWith<T, U>(
      customizer: ?(value: T, key: number | string, object: T, stack: any) => U,
      value: T
    ): U,
    cloneWith<T, U>(
      customizer: ?(value: T, key: number | string, object: T, stack: any) => U,
      value: T
    ): U,
    conformsTo<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean },
      source: T
    ): boolean,
    eq(value: any, other: any): boolean,
    gt(value: any, other: any): boolean,
    gte(value: any, other: any): boolean,
    isArguments(value: any): boolean,
    isArray(value: any): boolean,
    isArrayBuffer(value: any): boolean,
    isArrayLike(value: any): boolean,
    isArrayLikeObject(value: any): boolean,
    isBoolean(value: any): boolean,
    isBuffer(value: any): boolean,
    isDate(value: any): boolean,
    isElement(value: any): boolean,
    isEmpty(value: any): boolean,
    isEqual(value: any, other: any): boolean,
    isEqualWith<T, U>(
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
    ): boolean,
    isError(value: any): boolean,
    isFinite(value: any): boolean,
    isFunction(value: Function): true,
    isFunction(value: number | string | void | null | Object): false,
    isInteger(value: any): boolean,
    isLength(value: any): boolean,
    isMap(value: any): boolean,
    isMatch(source: Object, object: ?Object): boolean,
    isMatchWith<T: Object, U: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: number | string,
        object: T,
        source: U
      ) => boolean | void,
      source: U,
      object: T
    ): boolean,
    isNaN(value: any): boolean,
    isNative(value: any): boolean,
    isNil(value: any): boolean,
    isNull(value: any): boolean,
    isNumber(value: any): boolean,
    isObject(value: any): boolean,
    isObjectLike(value: any): boolean,
    isPlainObject(value: any): boolean,
    isRegExp(value: any): boolean,
    isSafeInteger(value: any): boolean,
    isSet(value: any): boolean,
    isString(value: string): true,
    isString(
      value: number | boolean | Function | void | null | Object | Array<any>
    ): false,
    isSymbol(value: any): boolean,
    isTypedArray(value: any): boolean,
    isUndefined(value: any): boolean,
    isWeakMap(value: any): boolean,
    isWeakSet(value: any): boolean,
    lt(value: any, other: any): boolean,
    lte(value: any, other: any): boolean,
    toArray(value: any): Array<any>,
    toFinite(value: any): number,
    toInteger(value: any): number,
    toLength(value: any): number,
    toNumber(value: any): number,
    toPlainObject(value: any): Object,
    toSafeInteger(value: any): number,
    toString(value: any): string,

    // Math
    add(augend: number, addend: number): number,
    ceil(number: number): number,
    divide(dividend: number, divisor: number): number,
    floor(number: number): number,
    max<T>(array: ?Array<T>): T,
    maxBy<T>(iteratee: Iteratee<T>, array: ?Array<T>): T,
    mean(array: Array<*>): number,
    meanBy<T>(iteratee: Iteratee<T>, array: Array<T>): number,
    min<T>(array: ?Array<T>): T,
    minBy<T>(iteratee: Iteratee<T>, array: ?Array<T>): T,
    multiply(multiplier: number, multiplicand: number): number,
    round(number: number): number,
    subtract(minuend: number, subtrahend: number): number,
    sum(array: Array<*>): number,
    sumBy<T>(iteratee: Iteratee<T>, array: Array<T>): number,

    // number
    clamp(lower: number, upper: number, number: number): number,
    inRange(start: number, end: number, number: number): boolean,
    random(lower: number, upper: number): number,

    // Object
    assign(object: ?Object, source: Object): Object,
    assignIn<A, B>(a: A, b: B): A & B,
    assignInWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T,
      s1: A,
    ): Object,
    assignWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T,
      s1: A
    ): Object,
    at(paths: Array<string>, object: ?Object): Array<any>,
    create<T>(prototype: T): $Supertype<T>,
    defaults(source: Object, object: ?Object): Object,
    defaultsDeep(source: Object, object: ?Object): Object,
    // alias for _.toPairs
    entries(object: ?Object): NestedArray<any>,
    // alias for _.toPairsIn
    entriesIn(object: ?Object): NestedArray<any>,
    // alias for _.assignIn
    extend<A, B>(a: A, b: B): A & B,
    // alias for _.assignInWith
    extendWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A
      ) => any | void,
      object: T,
      s1: A
    ): Object,
    findKey<A, T: { [id: string]: A }>(
      predicate: OPredicate<A>,
      object: ?T
    ): string | void,
    findLastKey<A, T: { [id: string]: A }>(
      predicate: OPredicate<A>,
      object: ?T
    ): string | void,
    forIn(iteratee: OIteratee<*>, object: ?Object): Object,
    forInRight(iteratee: OIteratee<*>, object: ?Object): Object,
    forOwn(iteratee: OIteratee<*>, object: ?Object): Object,
    forOwnRight(iteratee: OIteratee<*>, object: ?Object): Object,
    functions(object: ?Object): Array<string>,
    functionsIn(object: ?Object): Array<string>,
    get(
      path: ?Array<string> | string,
      object: ?Object | ?Array<any>
    ): any,
    has(path: ?Array<string> | string, object: ?Object): boolean,
    hasIn(path: ?Array<string> | string, object: ?Object): boolean,
    invert(object: ?Object): Object,
    invertBy(iteratee: Function, object: ?Object): Object,
    invoke(
      path: ?Array<string> | string,
      object: ?Object
    ): any,
    keys(object: ?Object): Array<string>,
    keysIn(object: ?Object): Array<string>,
    mapKeys(iteratee: OIteratee<*>, object: ?Object): Object,
    mapValues(iteratee: OIteratee<*>, object: ?Object): Object,
    merge(object: ?Object, source: ?Object): Object,
    mergeWith<T: Object, A: Object>(
      customizer: (
        objValue: any,
        srcValue: any,
        key: string,
        object: T,
        source: A | B
      ) => any | void,
      object: T,
      s1: A,
    ): Object,
    omit(props: Array<string>, object: ?Object): Object,
    omitBy<A, T: { [id: string]: A }>(
      predicate: OPredicate<A>,
      object: ?T
    ): Object,
    pick(props: Array<string>, object: ?Object): Object,
    pickBy<A, T: { [id: string]: A }>(
      predicate: OPredicate<A>,
      object: ?T
    ): Object,
    result(
      path: ?Array<string> | string,
      object: ?Object
    ): any,
    set(path: ?Array<string> | string, value: any, object: ?Object): Object,
    setWith<T>(
      customizer: (nsValue: any, key: string, nsObject: T) => any,
      path: ?Array<string> | string,
      value: any,
      object: T
    ): Object,
    toPairs(object: ?Object | Array<*>): NestedArray<any>,
    toPairsIn(object: ?Object): NestedArray<any>,
    transform(
      iteratee: OIteratee<*>,
      accumulator: any,
      collection: Object | Array<any>
    ): any,
    unset(path: ?Array<string> | string, object: ?Object): boolean,
    update(path: string[] | string, updater: Function, object: Object): Object,
    updateWith(
      customizer: Function,
      path: string[] | string,
      updater: Function,
      object: Object
    ): Object,
    values(object: ?Object): Array<any>,
    valuesIn(object: ?Object): Array<any>,

    tap<T>(interceptor: (value: T) => any, value: T): T,
    thru<T1, T2>(interceptor: (value: T1) => T2, value: T1): T2,

    // String
    camelCase(string: ?string): string,
    capitalize(string: string): string,
    deburr(string: string): string,
    endsWith(target: string, string: string): boolean,
    escape(string: string): string,
    escapeRegExp(string: string): string,
    kebabCase(string: string): string,
    lowerCase(string: string): string,
    lowerFirst(string: string): string,
    pad(length: number, string: string): string,
    padEnd(length: number, string: string): string,
    padStart(length: number, string: string): string,
    parseInt(radix: number, string: string): number,
    repeat(n: number, string: string): string,
    replace(
      pattern: RegExp | string,
      replacement: ((string: string) => string) | string,
      string: string
    ): string,
    snakeCase(string: string): string,
    split(
      separator: RegExp | string,
      string: string
    ): Array<string>,
    startCase(string: string): string,
    startsWith(target: string, string: string): boolean,
    template(string: string): Function,
    toLower(string: string): string,
    toUpper(string: string): string,
    trim(string: string): string,
    trimEnd(string: string): string,
    trimStart(string: string): string,
    truncate(options: TruncateOptions, string: string): string,
    unescape(string: string): string,
    upperCase(string: string): string,
    upperFirst(string: string): string,
    words(string: string): Array<string>,

    // Util
    attempt(func: Function): any,
    bindAll(methodNames: Array<string>, object: ?Object): Object,
    cond(pairs: NestedArray<Function>): Function,
    conforms<T: { [key: string]: mixed }>(
      predicates: T & { [key: string]: (x: any) => boolean },
      source: T
    ): boolean,
    constant<T>(value: T): () => T,
    defaultTo<T1: string | boolean | Object, T2>(
      defaultValue: T2,
      value: T1
    ): T1,
    // NaN is a number instead of its own type, otherwise it would behave like null/void
    defaultTo<T1: number, T2>(defaultValue: T2, value: T1): T1 | T2,
    defaultTo<T1: void | null, T2>(defaultValue: T2, value: T1): T2,
    flow(...funcs: Array<Function>): Function,
    flow(funcs: Array<Function>): Function,
    flowRight(...funcs: Array<Function>): Function,
    flowRight(funcs: Array<Function>): Function,
    identity<T>(value: T): T,
    iteratee(func: any): Function,
    matches(source: Object, object: ?Object): boolean,
    matchesProperty(path: ?Array<string> | string, srcValue: any): Function,
    method(path: ?Array<string> | string): Function,
    methodOf(object: ?Object): Function,
    mixin<T: Function | Object>(
      object?: T,
      source: Object,
      options?: { chain: boolean }
    ): T,
    noConflict(): Lodash,
    noop(...args: Array<mixed>): void,
    nthArg(n: number): Function,
    over(iteratees: Array<Function>): Function,
    overEvery(predicates: Array<Function>): Function,
    overSome(predicates: Array<Function>): Function,
    property(
      path: ?Array<string> | string,
      object: ?Object | ?Array<any>
    ): any,
    propertyOf(object: ?Object, path: ?Array<string> | string): Function,
    range(start: number, end: number): Array<number>,
    rangeRight(start: number, end: number): Array<number>,
    runInContext(context?: Object): Function,

    stubArray(): Array<*>,
    stubFalse(): false,
    stubObject(): {},
    stubString(): "",
    stubTrue(): true,
    times<T>(iteratee: (i: number) => T, n: number): Array<T>,
    toPath(value: any): Array<string>,
    uniqueId(prefix: string): string,

    // Properties
    VERSION: string,
    templateSettings: TemplateSettings
  }

  declare var exports: Lodash;
}
