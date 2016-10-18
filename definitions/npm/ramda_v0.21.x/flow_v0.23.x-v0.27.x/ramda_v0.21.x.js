/* @flow */
/* eslint-disable no-unused-vars, no-redeclare */

type Transformer<A,B> = {
  '@@transducer/step': <I,R>(r: A, a: *) => R,
  '@@transducer/init': () => A,
  '@@transducer/result': (result: *) => B
}

declare module 'ramda' {
  declare type UnaryFn<A,R> = (a: A) => R;
  declare type BinaryFn<A,B,R> = ((a: A, b: B) => R) & ((a:A) => (b: B) => R);
  declare type UnarySameTypeFn<T> = UnaryFn<T,T>
  declare type BinarySameTypeFn<T> = BinaryFn<T,T,T>
  declare type NestedObject<V> = { [key: string]: V | NestedObject<V> }
  declare type UnaryPredicateFn<T> = (x:T) => boolean
  declare type BinaryPredicateFn<T> = (x:T, y:T) => boolean

  declare interface ObjPredicate {
    (value: any, key: string): boolean;
  }

  // declare type Transducer = (xf: Transformer)

  declare interface Functor<A> {
    map<A,B>(fn:(a: A) => B): B;
  }

  declare class Composition {
    pipe<A,B,C,D,E,F,G>(ab: UnaryFn<A,B>, bc: UnaryFn<B,C>, cd: UnaryFn<C,D>, de: UnaryFn<D,E>, ef: UnaryFn<E,F>, fg: UnaryFn<F,G>, ...rest: Array<void>): UnaryFn<A,G>;
    pipe<A,B,C,D,E,F>(ab: UnaryFn<A,B>, bc: UnaryFn<B,C>, cd: UnaryFn<C,D>, de: UnaryFn<D,E>, ef: UnaryFn<E,F>, ...rest: Array<void>): UnaryFn<A,F>;
    pipe<A,B,C,D,E>(ab: UnaryFn<A,B>, bc: UnaryFn<B,C>, cd: UnaryFn<C,D>, de: UnaryFn<D,E>, ...rest: Array<void>): UnaryFn<A,E>;
    pipe<A,B,C,D>(ab: UnaryFn<A,B>, bc: UnaryFn<B,C>, cd: UnaryFn<C,D>, ...rest: Array<void>): UnaryFn<A,D>;
    pipe<A,B,C>(ab: UnaryFn<A,B>, bc: UnaryFn<B,C>, ...rest: Array<void>): UnaryFn<A,C>;
    pipe<A,B>(ab: UnaryFn<A,B>, ...rest: Array<void>): UnaryFn<A,B>;
    compose<A,B,C,D,E,F,G>(fg: UnaryFn<F,G>, ef: UnaryFn<E,F>, de: UnaryFn<D,E>, cd: UnaryFn<C,D>, bc: UnaryFn<B,C>, ab: UnaryFn<A,B>, ...rest: Array<void>): UnaryFn<A,G>;
    compose<A,B,C,D,E,F>(ef: UnaryFn<E,F>, de: UnaryFn<D,E>, cd: UnaryFn<C,D>, bc: UnaryFn<B,C>, ab: UnaryFn<A,B>, ...rest: Array<void>): UnaryFn<A,F>;
    compose<A,B,C,D,E>(de: UnaryFn<D,E>, cd: UnaryFn<C,D>, bc: UnaryFn<B,C>, ab: UnaryFn<A,B>, ...rest: Array<void>): UnaryFn<A,E>;
    compose<A,B,C,D>(cd: UnaryFn<C,D>, bc: UnaryFn<B,C>, ab: UnaryFn<A,B>, ...rest: Array<void>): UnaryFn<A,D>;
    compose<A,B,C>(bc: UnaryFn<B,C>, ab: UnaryFn<A,B>, ...rest: Array<void>): UnaryFn<A,C>;
    compose<A,B>(ab: UnaryFn<A,B>, ...rest: Array<void>): UnaryFn<A,B>;
  }

  declare interface CurriedFunction2<T1, T2, R> {
    (t1: T1): (t2: T2) => R;
    (t1: T1, t2: T2): R;
  }

  declare interface CurriedFunction3<T1, T2, T3, R> {
    (t1: T1): CurriedFunction2<T2, T3, R>;
    (t1: T1, t2: T2): (t3: T3) => R;
    (t1: T1, t2: T2, t3: T3): R;
  }

  declare interface CurriedFunction4<T1, T2, T3, T4, R> {
    (t1: T1): CurriedFunction3<T2, T3, T4, R>;
    (t1: T1, t2: T2): CurriedFunction2<T3, T4, R>;
    (t1: T1, t2: T2, t3: T3): (t4: T4) => R;
    (t1: T1, t2: T2, t3: T3, t4: T4): R;
  }

  declare interface CurriedFunction5<T1, T2, T3, T4, T5, R> {
    (t1: T1): CurriedFunction4<T2, T3, T4, T5, R>;
    (t1: T1, t2: T2): CurriedFunction3<T3, T4, T5, R>;
    (t1: T1, t2: T2, t3: T3): CurriedFunction2<T4, T5, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4): (t5: T5) => R;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): R;
  }

  declare interface CurriedFunction6<T1, T2, T3, T4, T5, T6, R> {
    (t1: T1): CurriedFunction5<T2, T3, T4, T5, T6, R>;
    (t1: T1, t2: T2): CurriedFunction4<T3, T4, T5, T6, R>;
    (t1: T1, t2: T2, t3: T3): CurriedFunction3<T4, T5, T6, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4): CurriedFunction2<T5, T6, R>;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5): (t6: T6) => R;
    (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6): R;
  }

  declare class Curry {
    curry<T1, T2, TResult>(fn: (a: T1, b: T2) => TResult): CurriedFunction2<T1,T2, TResult>;
    curry<T1, T2, T3, TResult>(fn: (a: T1, b: T2, c: T3) => TResult): CurriedFunction3<T1,T2, T3, TResult>;
    curry<T1, T2, T3, T4, TResult>(fn: (a: T1, b: T2, c: T3, d: T4) => TResult): CurriedFunction4<T1,T2, T3, T4, TResult>;
    curry<T1, T2, T3, T4, T5, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5) => TResult): CurriedFunction5<T1,T2, T3, T4, T5, TResult>;
    curry<T1, T2, T3, T4, T5, T6, TResult>(fn: (a: T1, b: T2, c: T3, d: T4, e: T5, f: T6) => TResult): CurriedFunction6<T1,T2, T3, T4, T5, T6, TResult>;
    curry(fn: Function): Function;
    curryN(length: number, fn: (...args: Array<any>) => any): Function;
  }

  // Math methods: done
  declare class RMath {
    add(a: number, b: number): number;
    add(a: number): (b: number) => number;
    dec(a: number): number;
    divide(a: number, b: number): number;
    divide(a: number): (b: number) => number;
    inc(a: number): number;
    mathMod(a: number, b: number): number;
    mathMod(a: number): (b: number) => number;
    mean: UnaryFn<Array<number>,number>;
    median: UnaryFn<Array<number>,number>;
    modulo(a: number, b: number): number;
    modulo(a: number): (b: number) => number;
    multiply(a: number, b: number): number;
    multiply(a: number): (b: number) => number;
    negate(a: number): number;
    product: UnaryFn<Array<number>,number>;
    subtract(a: number, b: number): number;
    subtract(a: number): (b: number) => number;
    sum: UnaryFn<Array<number>,number>;
  }

  declare class Monad<T> {}
  declare class Semigroup<T> {}

  declare class Chain {
    chain<T,V: Monad<T>|Array<T>>(fn: (a:T) => V, x: V): V;
    chain<T,V: Monad<T>|Array<T>>(fn: (a:T) => V): (x: V) => V;
  }

  declare class Concat {
    concat<V,T:Array<V>|string>(x: T, y: T): T;
    concat<V,T:Array<V>|string>(x: T): (y: T) => T;
  }

  declare class Filter {
    filter<K,V,T:Array<V>|{[key:K]:V}>(fn: UnaryPredicateFn<V>, xs:T): T;
    filter<K,V,T:Array<V>|{[key:K]:V}>(fn: UnaryPredicateFn<V>): (xs:T) => T;
    reject<K,V,T:Array<V>|{[key:K]:V}>(fn: UnaryPredicateFn<V>, xs:T): T;
    reject<K,V,T:Array<V>|{[key:K]:V}>(fn: UnaryPredicateFn<V>): (xs:T) => T
  }

  declare class Find {
    find<V,T:Array<V>>(fn: UnaryPredicateFn<V>, xs:T): ?V;
    find<V,T:Array<V>>(fn: UnaryPredicateFn<V>): (xs:T) => ?V;
    find<K,V,T:{[key:K]:V}>(fn: UnaryPredicateFn<V>, xs:T): ?{[key:K]:V};
    find<K,V,T:{[key:K]:V}>(fn: UnaryPredicateFn<V>): (xs:T) => ?{[key:K]:V};
    findLast<V,T:Array<V>>(fn: UnaryPredicateFn<V>, xs:T): ?V;
    findLast<V,T:Array<V>>(fn: UnaryPredicateFn<V>): (xs:T) => ?V;
    findLast<K,V,T:{[key:K]:V}>(fn: UnaryPredicateFn<V>, xs:T): ?{[key:K]:V};
    findLast<K,V,T:{[key:K]:V}>(fn: UnaryPredicateFn<V>): (xs:T) => ?{[key:K]:V};
    findIndex<K,V,T:Array<V>|{[key:K]:V}>(fn: UnaryPredicateFn<V>, xs:T): number;
    findIndex<K,V,T:Array<V>|{[key:K]:V}>(fn: UnaryPredicateFn<V>): (xs:T) => number;
    findLastIndex<K,V,T:Array<V>|{[key:K]:V}>(fn: UnaryPredicateFn<V>, xs:T): number;
    findLastIndex<K,V,T:Array<V>|{[key:K]:V}>(fn: UnaryPredicateFn<V>): (xs:T) => number;
  }

  declare class Drop {
    drop<V,T:Array<V>|string>(n: number, xs: T): T;
    drop<V,T:Array<V>|string>(n: number):(xs: T) => T;
    dropLast<V,T:Array<V>|string>(n: number, xs: T): T;
    dropLast<V,T:Array<V>|string>(n: number):(xs: T) => T;
    dropLastWhile<V,T:Array<V>>(fn: UnaryPredicateFn<V>, xs:T): T;
    dropLastWhile<V,T:Array<V>>(fn: UnaryPredicateFn<V>): (xs:T) => T;
    dropWhile<V,T:Array<V>>(fn: UnaryPredicateFn<V>, xs:T): T;
    dropWhile<V,T:Array<V>>(fn: UnaryPredicateFn<V>): (xs:T) => T;
    dropRepeats<V,T:Array<V>>(xs:T): T;
    dropRepeatsWith<V,T:Array<V>>(fn: BinaryPredicateFn<V>, xs:T): T;
    dropRepeatsWith<V,T:Array<V>>(fn: BinaryPredicateFn<V>): (xs:T) => T;
  }

  declare class Take {
    take<V,T:Array<V>|string>(n: number, xs: T): T;
    take<V,T:Array<V>|string>(n: number):(xs: T) => T;
    takeLast<V,T:Array<V>|string>(n: number, xs: T): T;
    takeLast<V,T:Array<V>|string>(n: number):(xs: T) => T;
    takeLastWhile<V,T:Array<V>>(fn: UnaryPredicateFn<V>, xs:T): T;
    takeLastWhile<V,T:Array<V>>(fn: UnaryPredicateFn<V>): (xs:T) => T;
    takeWhile<V,T:Array<V>>(fn: UnaryPredicateFn<V>, xs:T): T;
    takeWhile<V,T:Array<V>>(fn: UnaryPredicateFn<V>): (xs:T) => T;
  }

  declare type AccumIterator<A,B,T> = ((acc: T, x: A, ...args: Array<void>) => [T,B]) | ((acc: T, ...args:Array<void>) => (x: A) => [T,B])

  declare class RMap {
    map<T,R>(fn: (x:T) => R, xs: Array<T>): Array<R>;
    map<T,R>(fn: (x:T) => R): (xs: Array<T>) => Array<R>;
    map<T,R>(fn: (x:T) => R, xs: Functor<T>): Functor<R>;
    map<T,R>(fn: (x:T) => R): (xs: Functor<T>) => Functor<R>;
    map<T,R>(fn: (x:T) => R, xs: {[key: string]: T}): {[key: string]: R};
    map<T,R>(fn: (x:T) => R): (xs: {[key: string]: T}) => {[key: string]: R};
    mapAccum<A,B,R>(fn: AccumIterator<A,B,R>, acc: R, xs: Array<A>): [R, Array<B>];
    mapAccum<A,B,R>(fn: AccumIterator<A,B,R>): (acc: R, xs: Array<A>) => [R, Array<B>];
    mapAccumRight<A,B,R>(fn: AccumIterator<A,B,R>, acc: R, xs: Array<A>): [R, Array<B>];
    mapAccumRight<A,B,R>(fn: AccumIterator<A,B,R>): (acc: R, xs: Array<A>) => [R, Array<B>];
  }

  declare class RReduce {
    reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: Array<T>): TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult): (acc: TResult, list: Array<T>) => TResult;
    reduce<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult): (list: Array<T>) => TResult;
    reduceRight<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: Array<T>): TResult;
    reduceRight<T, TResult>(fn: (acc: TResult, elem: T) => TResult): (acc: TResult, list: Array<T>) => TResult;
    reduceRight<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult): (list: Array<T>) => TResult;
    reduceBy<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, keyFn:(elem: T) => string, list: Array<T>): {[key: string]: TResult};
    reduceBy<T, TResult>(fn: (acc: TResult, elem: T) => TResult): (acc: TResult, keyFn:(elem: T) => string, list: Array<T>) => {[key: string]: TResult};
    reduceBy<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult): (keyFn:(elem: T) => string, list: Array<T>) => {[key: string]: TResult};
    reduceBy<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult): (keyFn:(elem: T) => string) => (list: Array<T>) => {[key: string]: TResult};
    reduceBy<T, TResult>(fn: (acc: TResult, elem: T) => TResult): (acc: TResult, keyFn:(elem: T) => string) => (list: Array<T>) => {[key: string]: TResult};
    reduceBy<T, TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, keyFn:(elem: T) => string): (list: Array<T>) => {[key: string]: TResult};
    scan<T,TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult, list: Array<T>): Array<TResult>;
    scan<T,TResult>(fn: (acc: TResult, elem: T) => TResult): (acc: TResult, list: Array<T>) => Array<TResult>;
    scan<T,TResult>(fn: (acc: TResult, elem: T) => TResult, acc: TResult): (list: Array<T>) => Array<TResult>;
    scan<T,TResult>(fn: (acc: TResult, elem: T) => TResult): (acc: TResult) => (list: Array<T>) => Array<TResult>;
  }

  declare class Split {
    splitAt<V,T:Array<V>|string>(i: number, xs: T): [T,T];
    splitAt<V,T:Array<V>|string>(i: number): (xs: T) => [T,T];
    splitEvery<V,T:Array<V>|string>(i: number, xs: T): Array<T>;
    splitEvery<V,T:Array<V>|string>(i: number): (xs: T) => Array<T>;
    splitWhen<V,T:Array<V>>(fn: UnaryPredicateFn<V>, xs:T): [T,T];
    splitWhen<V,T:Array<V>>(fn: UnaryPredicateFn<V>): (xs:T) => [T,T];
  }

  declare type NestedArray<T> = Array<T | NestedArray<T>>
  declare class RList<T> {
    /*
    TODO:
    reduced
    sequence
    transduce
    traverse
    */
    adjust<T>(fn:(a: T) => T, ...rest: Array<void>): (index: number) => (src: Array<T>) => Array<T>;
    adjust<T>(fn:(a: T) => T, index: number, ...rest: Array<void>): (src: Array<T>) => Array<T>;
    adjust<T>(fn:(a: T) => T, index: number, src: Array<T>, ...rest: Array<void>): Array<T>;
    all<T>(fn: (a: T) => boolean, xs: Array<T>): boolean;
    all<T>(fn: (a: T) => boolean): (xs: Array<T>) => boolean;
    any<T>(fn: (a: T) => boolean, xs: Array<T>): boolean;
    any<T>(fn: (a: T) => boolean): (xs: Array<T>) => boolean;
    aperture<T>(n: number, xs: Array<T>): Array<Array<T>>;
    aperture<T>(n: number): (xs: Array<T>) => Array<Array<T>>;
    append<T>(x: T, xs: Array<T>): Array<T>;
    append<T>(x: T): (xs: Array<T>) => Array<T>;
    contains<T>(x:T, xs: Array<T>): boolean;
    contains<T>(x:T): (xs: Array<T>) => boolean;
    flatten<T>(xs: NestedArray<T>): Array<T>;
    forEach<T,V>(fn:(x:T) => ?V, xs: Array<T>): Array<T>;
    forEach<T,V>(fn:(x:T) => ?V): (xs: Array<T>) => Array<T>;
    fromPairs<T,V>(pair: Array<[T,V]>): {[key: string]:V};
    groupBy<T>(fn: (x: T) => string, xs: Array<T>): {[key: string]: Array<T>};
    groupBy<T>(fn: (x: T) => string): (xs: Array<T>) => {[key: string]: Array<T>};
    groupWith<T,V:Array<T>|string>(fn: BinaryPredicateFn<T>, xs: V): Array<V>;
    groupWith<T,V:Array<T>|string>(fn: BinaryPredicateFn<T>): (xs: V) => Array<V>;
    head<T,V:Array<T>>(xs: V): ?T;
    head<T,V:string>(xs: V): V;
    into<I,T,A:Array<T>,R:Array<*>|string|Object>(accum: R, xf: (a: A) => I, input: A): R;
    into<I,T,A:Array<T>,R>(accum: Transformer<I,R>, xf: (a: A) => R, input: A): R;
    indexBy<V,T:{[key: string]:V}>(fn: (x: T) => string, xs: Array<T>): {[key: string]: T};
    indexBy<V,T:{[key: string]:V}>(fn: (x: T) => string): (xs: Array<T>) => {[key: string]: T};
    indexOf<T>(x: T, xs: Array<T>): number;
    indexOf<T>(x: T): (xs: Array<T>) => number;
    init<T,V:Array<T>|string>(xs: V): V;
    insert<T>(index: number, ...rest: Array<void>): (elem: T) => (src: Array<T>) => Array<T>;
    insert<T>(index: number, elem: T, ...rest: Array<void>): (src: Array<T>) => Array<T>;
    insert<T>(index: number, elem: T, src: Array<T>, ...rest: Array<void>): Array<T>;
    insertAll<T>(index: number, ...rest: Array<void>): (elem: Array<T>) => (src: Array<T>) => Array<T>;
    insertAll<T>(index: number, elems: Array<T>, ...rest: Array<void>): (src: Array<T>) => Array<T>;
    insertAll<T>(index: number, elems: Array<T>, src: Array<T>, ...rest: Array<void>): Array<T>;
    intersperse<T>(x: T, xs: Array<T>): Array<T>;
    intersperse<T>(x: T): (xs: Array<T>) => Array<T>;
    join(x: string, xs: Array<any>): string;
    join(x: string): (xs: Array<any>) => string;
    last<T,V:Array<T>>(xs: V): ?T;
    last<T,V:string>(xs: V): V;
    lastIndexOf<T>(x: T, xs: Array<T>): number;
    lastIndexOf<T>(x: T): (xs: Array<T>) => number;
    length<T>(xs: Array<T>): number;
    none<T>(fn: (a: T) => boolean, xs: Array<T>): boolean;
    none<T>(fn: (a: T) => boolean): (xs: Array<T>) => boolean;
    nth<V,T:Array<V>>(i: number, xs: T): ?V;
    nth<V,T:Array<V>>(i: number): (xs: T) => ?V;
    nth<T:string>(i: number, xs: T): T;
    nth<T:string>(i: number): (xs: T) => T;
    mergeAll(objs: Array<{[key: string]: any}>):{[key: string]: any};
    pair<A,B>(a:A, b:B): [A,B];
    pair<A,B>(a:A): (b:B) => [A,B];
    partition<K,V,T:Array<V>|{[key:K]:V}>(fn: UnaryPredicateFn<V>, xs:T): [T,T];
    partition<K,V,T:Array<V>|{[key:K]:V}>(fn: UnaryPredicateFn<V>): (xs:T) => [T,T];
    pluck<V,K:string|number,T:Array<Array<V>|{[key:string]:V}>>(k: K, xs: T): Array<V>;
    pluck<V,K:string|number,T:Array<Array<V>|{[key:string]:V}>>(k: K): (xs: T) => Array<V>;
    prepend<T>(x: T, xs: Array<T>): Array<T>;
    prepend<T>(x: T): (xs: Array<T>) => Array<T>;
    range(from: number, to: number): Array<number>;
    range(from: number): (to: number) => Array<number>;
    remove<T>(from: number, ...rest: Array<void>): (to: number) => (src: Array<T>) => Array<T>;
    remove<T>(from: number, to: number, ...rest: Array<void>): (src: Array<T>) => Array<T>;
    remove<T>(from: number, to: number, src: Array<T>, ...rest: Array<void>): Array<T>;
    repeat<T>(x: T, times: number): Array<T>;
    repeat<T>(x: T): (times: number) => Array<T>;
    reverse<T,V:Array<T>|string>(xs: V): V;
    slice<V,T:Array<V>|string>(from: number, ...rest: Array<void>): (to: number) => (src: T) => T;
    slice<V,T:Array<V>|string>(from: number, to: number, ...rest: Array<void>): (src: T) => T;
    slice<V,T:Array<V>|string>(from: number, to: number, src: T, ...rest: Array<void>): T;
    sort<V,T:Array<V>>(fn: BinaryPredicateFn<V>, xs:T): T;
    sort<V,T:Array<V>>(fn: BinaryPredicateFn<V>): (xs:T) => T;
    tail<T,V:Array<T>|string>(xs: V): V;
    times<T>(fn:(i?: number) => T, n: number): Array<T>;
    times<T>(fn:(i?: number) => T): (n: number) => Array<T>;
    transpose<T>(xs: Array<Array<T>>): Array<Array<T>>;
    unfold<T, TResult>(fn: (seed: T) => Array<TResult>|boolean, seed: T): Array<TResult>;
    unfold<T, TResult>(fn: (seed: T) => Array<TResult>|boolean): (seed: T) => Array<TResult>;
    uniq<T>(xs: Array<T>): Array<T>;
    uniqBy<T,V>(fn:(x: T) => V, xs: Array<T>): Array<T>;
    uniqBy<T,V>(fn:(x: T) => V): (xs: Array<T>) => Array<T>;
    uniqWith<T>(fn: BinaryPredicateFn<T>, xs: Array<T>): Array<T>;
    uniqWith<T>(fn: BinaryPredicateFn<T>): (xs: Array<T>) => Array<T>;
    unnest<T>(xs: NestedArray<T>): NestedArray<T>;
    update<T>(index: number, ...rest: Array<void>): (elem: T) => (src: Array<T>) => Array<T>;
    update<T>(index: number, elem: T, ...rest: Array<void>): (src: Array<T>) => Array<T>;
    update<T>(index: number, elem: T, src: Array<T>, ...rest: Array<void>): Array<T>;
    without<T>(xs: Array<T>, src: Array<T>): Array<T>;
    without<T>(xs: Array<T>): (src: Array<T>) => Array<T>;
    xprod<T,S>(xs: Array<T>, ys: Array<S>): Array<[T,S]>;
    xprod<T,S>(xs: Array<T>): (ys: Array<S>) => Array<[T,S]>;
    zip<T,S>(xs: Array<T>, ys: Array<S>): Array<[T,S]>;
    zip<T,S>(xs: Array<T>): (ys: Array<S>) => Array<[T,S]>;
    zipObj<T:string,S>(xs: Array<T>, ys: Array<S>): {[key: string]:S};
    zipObj<T:string,S>(xs: Array<T>): (ys: Array<S>) => {[key: string]:S};
    zipWith<T,S,R>(fn: (a: T, b: S) => R, xs: Array<T>, ys: Array<S>): Array<R>;
    zipWith<T,S,R>(fn: (a: T, b: S) => R, xs: Array<T>): (ys: Array<S>) => Array<R>;
    zipWith<T,S,R>(fn: (a: T, b: S) => R): (xs: Array<T>, ys: Array<S>) => Array<R>;
    zipWith<T,S,R>(fn: (a: T, b: S) => R): (xs: Array<T>) => (ys: Array<S>) => Array<R>;
  }

  declare class RObject {
    /**
    * TODO:
    * lens
    * lensIndex
    * lensPath
    * lensProp
    * over
    * set
    * view
    */
    assoc<T>(key: string, val:T, src: Object): Object;
    assoc<T>(key: string, val:T, ...args: Array<void>): (src: Object) => Object;
    assoc<T>(key: string, ...args: Array<void>): (val: T) => (src: Object) => Object;
    assocPath<T>(key: Array<string>, val:T, src: Object): Object;
    assocPath<T>(key: Array<string>, val:T, ...args: Array<void>): (src: Object) => Object;
    assocPath<T>(key: Array<string>, ...args: Array<void>): (val: T) => (src: Object) => Object;
    clone(src: Object): Object;
    dissoc<T>(key: string, val:T, src: Object): Object;
    dissoc<T>(key: string, val:T, ...args: Array<void>): (src: Object) => Object;
    dissoc<T>(key: string, ...args: Array<void>): (val: T) => (src: Object) => Object;
    dissocPath<T>(keys: Array<string>, val:T, src: Object): Object;
    dissocPath<T>(keys: Array<string>, val:T, ...args: Array<void>): (src: Object) => Object;
    dissocPath<T>(keys: Array<string>, ...args: Array<void>): (val: T) => (src: Object) => Object;
    eqProps(key: string, o1: Object, o2: Object): boolean;
    eqProps(key: string, o1: Object, ...args: Array<void>): (o2: Object) => boolean;
    eqProps(key: string, ...args: Array<void>): (o1: Object) => (o2: Object) => boolean;
    evolve<V>(fn:{[key: string]: (x:V) => any}, src: Object): Object;
    has(key: string, o: Object): boolean;
    has(key: string):(o: Object) => boolean;
    hasIn(key: string, o: Object): boolean;
    hasIn(key: string): (o: Object) => boolean;
    invert(o: Object): {[k: string]: Array<string>};
    invertObj(o: Object): {[k: string]: string};
    keys(o: Object): Array<string>;
    keysIn(o: Object): Array<string>;
    mapObjIndexed(fn: (val: any, key: string, o: Object) => any, o: {[key: string]: any}): {[key: string]: any};
    mapObjIndexed(fn: (val: any, key: string, o: Object) => any, ...args: Array<void>): (o: {[key: string]: any}) => {[key: string]: any};
    merge(o1: Object, o2: Object): Object;
    merge(o1: Object): (o2: Object) => Object;
    mergeAll(o1: Array<Object>, o2: Object): Object;
    mergeAll(o1: Array<Object>): (o2: Object) => Object;
    mergeWith(fn: (v1: any, v2: any) => any, o1: Object, o2: Object): Object;
    mergeWith(fn: (v1: any, v2: any) => any): (o1: Object, o2: Object) => Object;
    mergeWithKey(fn: (v0: string, v1: any, v2: any) => any, o1: Object, o2: Object): Object;
    mergeWithKey(fn: (v0: string, v1: any, v2: any) => any): (o1: Object, o2: Object) => Object;
    objOf<T>(key: string, val: T): {[key: string]: T};
    objOf<T>(key: string):(val: T) => {[key: string]: T};
    omit(keys: Array<string>, val: Object): Object;
    omit(keys: Array<string>): (val: Object) => Object;
    path(p: Array<string>, o: Object): ?any;
    path(p: Array<string>): (o: Object) => ?any;
    pathOr<T>(or: T, p: Array<string>, o: Object): any|T;
    pathOr<T>(or: T, p: Array<string>): (o: Object) => any|T;
    pick(keys: Array<string>, val: {[key:string]: any}): {[key:string]: any};
    pick(keys: Array<string>): (val: {[key:string]: any}) => {[key:string]: any};
    pickAll(keys: Array<string>, val: {[key:string]: any}): {[key:string]: ?any};
    pickAll(keys: Array<string>): (val: {[key:string]: any}) => {[key:string]: ?any};
    pickBy(fn: (v: any, k: string) => boolean, val: {[key:string]: any}): {[key:string]: any};
    pickBy(fn: (v: any, k: string) => boolean): (val: {[key:string]: any}) => {[key:string]: any};
    project(keys: Array<string>, val: Array<{[key:string]: any}>): Array<{[key:string]: any}>;
    project(keys: Array<string>): (val: Array<{[key:string]: any}>) => Array<{[key:string]: any}>;
    prop(key: string, o: Object): ?any;
    prop(key: string): (o: Object) => ?any;
    propOr<T,V>(v: T, key: string, o: {[key:string]:V}): V|T;
    propOr<T,V>(v: T, key: string): (o: {[key:string]:V}) => V|T;
    propOr<T,V>(v: T): (key: string, o: {[key:string]:V}) => V|T;
    propOr<T,V>(v: T): (key: string) => (o: {[key:string]:V}) => V|T;
    props(keys: Array<string>, o: Object): Array<any>;
    props(keys: Array<string>): (o: Object) => Array<any>;
    toPairs(o: Object): Array<[string, any]>;
    toPairsIn(o: Object): Array<[string, any]>;
    values(o: Object): Array<any>;
    valuesIn(o: Object): Array<any>;
    where(predObj: {[key: string]: UnaryPredicateFn<any>}, o: Object): boolean;
    where(predObj: {[key: string]: UnaryPredicateFn<any>}): (o: Object) => boolean;
    whereEq(predObj: Object, o: Object): boolean;
    whereEq(predObj: Object): (o: Object) => boolean;
  }

  // String methods: done
  declare class RString {
    match(a: RegExp, s: string): Array<string|void>;
    match(a: RegExp): (s: string) => Array<string|void>;
    replace(a: RegExp|string, s: string, src: string): string;
    replace(a: RegExp|string, s: string): (src: string) => string;
    replace(a: RegExp|string): (s: string, src: string) => string;
    replace(a: RegExp|string): (s: string) => (src: string) => string;
    split(a: RegExp|string, s: string): Array<string>;
    split(a: RegExp|string): (s: string) => Array<string>;
    test(a: RegExp, s: string): boolean;
    test(a: RegExp): (s: string) => boolean;
    toLower(a: string): string;
    toString(a: any): string;
    toUpper(a: string): string;
    trim(a: string): string;
  }

  declare class RLogic {
    allPass(fns: Array<(...args: Array<any>) => boolean>): (...args: Array<any>) => boolean;
    and(x: boolean, y: boolean): boolean;
    and(x: boolean): (y: boolean) => boolean;
    anyPass(fns: Array<(...args: Array<any>) => boolean>): (...args: Array<any>) => boolean;
    both(x: (...args: Array<any>) => boolean, y: (...args: Array<any>) => boolean): (...args: Array<any>) => boolean;
    both(x: (...args: Array<any>) => boolean): (y: (...args: Array<any>) => boolean) => (...args: Array<any>) => boolean;
    complement(x: (...args: Array<any>) => boolean): (...args: Array<any>) => boolean;
    cond(fns: Array<[(...args: Array<any>) => boolean, (...args: Array<any>) => any]>): (...args: Array<any>) => any;
    defaultTo<T,V>(d: T, x: ?V): V|T;
    defaultTo<T,V>(d: T): (x: ?V) => V|T;
    either(x: (...args: Array<any>) => boolean, y: (...args: Array<any>) => boolean): (...args: Array<any>) => boolean;
    either(x: (...args: Array<any>) => boolean): (y: (...args: Array<any>) => boolean) => (...args: Array<any>) => boolean;
    ifElse(cond:(...args: Array<any>) => boolean, f1: (...args: Array<any>) => any, f2: (...args: Array<any>) => any): (...args: Array<any>) => any;
    ifElse(cond:(...args: Array<any>) => boolean): (f1: (...args: Array<any>) => any) => (f2: (...args: Array<any>) => any) => (...args: Array<any>) => any;
    isEmpty(x:Array<any>|Object|string): boolean;
    not(x:boolean): boolean;
    or(x: boolean, y: boolean): boolean;
    or(x: boolean): (y: boolean) => boolean;
    pathSatisfies(cond: (x: any) => boolean, path: Array<string>, o: Object): boolean;
    pathSatisfies(cond: (x: any) => boolean, path: Array<string>): (o: Object) => boolean;
    pathSatisfies(cond: (x: any) => boolean): (path: Array<string>, o: Object) => boolean;
    pathSatisfies(cond: (x: any) => boolean): (path: Array<string>) => (o: Object) => boolean;
    propSatisfies(cond: (x: any) => boolean, prop: string, o: Object): boolean;
    propSatisfies(cond: (x: any) => boolean, prop: string): (o: Object) => boolean;
    propSatisfies(cond: (x: any) => boolean): (prop: string, o: Object) => boolean;
    propSatisfies(cond: (x: any) => boolean): (prop: string) => (o: Object) => boolean;
    unless<T,V>(pred: UnaryPredicateFn<T>, fn: (x: T) => V, x: T): T|V;
    unless<T,V>(pred: UnaryPredicateFn<T>, fn: (x: T) => V): (x: T) => T|V;
    unless<T,V>(pred: UnaryPredicateFn<T>): (fn: (x: T) => V) => (x: T) => T|V;
    until<T>(pres: UnaryPredicateFn<T>, fn: (x:T) => T, x: T): T;
    until<T>(pres: UnaryPredicateFn<T>, fn: (x:T) => T): (x: T) => T;
    until<T>(pres: UnaryPredicateFn<T>): (fn: (x:T) => T, x: T) => T;
    until<T>(pres: UnaryPredicateFn<T>): (fn: (x:T) => T) => (x: T) => T;
    when<T>(pres: UnaryPredicateFn<T>, fn: (x:T) => T, x: T): T;
    when<T>(pres: UnaryPredicateFn<T>, fn: (x:T) => T): (x: T) => T;
    when<T>(pres: UnaryPredicateFn<T>): (fn: (x:T) => T, x: T) => T;
    when<T>(pres: UnaryPredicateFn<T>): (fn: (x:T) => T) => (x: T) => T;
  }

  declare class RRelation {
    clamp<T:number|string|Date>(min: T, max: T, v: T): T;
    clamp<T:number|string|Date>(min: T, max: T): (v: T) => T;
    clamp<T:number|string|Date>(min: T): (max: T, v: T) => T;
    clamp<T:number|string|Date>(min: T): (max: T) => (v: T) => T;
    countBy<T>(fn: (x: T) => string, list: Array<T>): {[key: string]: number};
    countBy<T>(fn: (x: T) => string): (list: Array<T>) => {[key: string]: number};
    difference<T>(xs1: Array<T>, xs2: Array<T>): Array<T>;
    difference<T>(xs1: Array<T>): (xs2: Array<T>) => Array<T>;
    differenceWith<T>(fn: BinaryPredicateFn<T>, xs1: Array<T>, xs2: Array<T>): Array<T>;
    differenceWith<T>(fn: BinaryPredicateFn<T>): (xs1: Array<T>) => (xs2: Array<T>) => Array<T>;
    differenceWith<T>(fn: BinaryPredicateFn<T>): (xs1: Array<T>, xs2: Array<T>) => Array<T>;
    differenceWith<T>(fn: BinaryPredicateFn<T>, xs1: Array<T>): (xs2: Array<T>) => Array<T>;
    eqBy<T>(fn: (x: T) => T, x: T, y: T): boolean;
    eqBy<T>(fn: (x: T) => T): (x: T, y: T) => boolean;
    eqBy<T>(fn: (x: T) => T, x: T): (y: T) => boolean;
    eqBy<T>(fn: (x: T) => T): (x: T) => (y: T) => boolean;
    equals<T>(x: T, y: T): boolean;
    equals<T>(x: T): (y: T) => boolean;
    gt<T>(x: T, y: T): boolean;
    gt<T>(x: T): (y: T) => boolean;
    gte<T>(x: T, y: T): boolean;
    gte<T>(x: T): (y: T) => boolean;
    identical<T>(x: T, y: T): boolean;
    identical<T>(x: T): (y: T) => boolean;
    intersection<T>(x: Array<T>, y: Array<T>): Array<T>;
    intersection<T>(x: Array<T>): (y: Array<T>) => Array<T>;
    intersectionWith<T>(fn: BinaryPredicateFn<T>, x: Array<T>, y: Array<T>): Array<T>;
    intersectionWith<T>(fn: BinaryPredicateFn<T>): (x: Array<T>) => (y: Array<T>) => Array<T>;
    intersectionWith<T>(fn: BinaryPredicateFn<T>): (x: Array<T>, y: Array<T>) => Array<T>;
    intersectionWith<T>(fn: BinaryPredicateFn<T>, x: Array<T>): (y: Array<T>) => Array<T>;
    lt<T>(x: T, y: T): boolean;
    lt<T>(x: T): (y: T) => boolean;
    lte<T>(x: T, y: T): boolean;
    lte<T>(x: T): (y: T) => boolean;
    max<T>(x: T, y: T): T;
    max<T>(x: T): (y: T) => T;
    maxBy<T,V>(fn: (x:T) => V, x: T, y: T): T;
    maxBy<T,V>(fn: (x:T) => V): (x: T, y: T) => T;
    maxBy<T,V>(fn: (x:T) => V): (x: T) => (y: T) => T;
    maxBy<T,V>(fn: (x:T) => V, x: T): (y: T) => T;
    min<T>(x: T, y: T): T;
    min<T>(x: T): (y: T) => T;
    minBy<T,V>(fn: (x:T) => V, x: T, y: T): T;
    minBy<T,V>(fn: (x:T) => V): (x: T, y: T) => T;
    minBy<T,V>(fn: (x:T) => V): (x: T) => (y: T) => T;
    minBy<T,V>(fn: (x:T) => V, x: T): (y: T) => T;
    pathEq(path: Array<string>, val: any, o: Object): boolean;
    pathEq(path: Array<string>, val: any): (o: Object) => boolean;
    pathEq(path: Array<string>): (val: any, o: Object) => boolean;
    pathEq(path: Array<string>): (val: any) => (o: Object) => boolean;
    propEq(path: string, val: any, o: Object): boolean;
    propEq(path: string, val: any): (o: Object) => boolean;
    propEq(path: string): (val: any, o: Object) => boolean;
    propEq(path: string): (val: any) => (o: Object) => boolean;
    sortBy<T,V>(fn: (x:T) => V, x: Array<T>): Array<T>;
    sortBy<T,V>(fn: (x:T) => V): (x: Array<T>) => Array<T>;
    symmetricDifference<T>(x: Array<T>, y: Array<T>): Array<T>;
    symmetricDifference<T>(x: Array<T>): (y: Array<T>) => Array<T>;
    symmetricDifferenceWith<T>(fn: BinaryPredicateFn<T>, x: Array<T>, y: Array<T>): Array<T>;
    symmetricDifferenceWith<T>(fn: BinaryPredicateFn<T>): (x: Array<T>) => (y: Array<T>) => Array<T>;
    symmetricDifferenceWith<T>(fn: BinaryPredicateFn<T>): (x: Array<T>, y: Array<T>) => Array<T>;
    symmetricDifferenceWith<T>(fn: BinaryPredicateFn<T>, x: Array<T>): (y: Array<T>) => Array<T>;
    union<T>(x: Array<T>, y: Array<T>): Array<T>;
    union<T>(x: Array<T>): (y: Array<T>) => Array<T>;
    unionWith<T>(fn: BinaryPredicateFn<T>, x: Array<T>, y: Array<T>): Array<T>;
    unionWith<T>(fn: BinaryPredicateFn<T>): (x: Array<T>) => (y: Array<T>) => Array<T>;
    unionWith<T>(fn: BinaryPredicateFn<T>): (x: Array<T>, y: Array<T>) => Array<T>;
    unionWith<T>(fn: BinaryPredicateFn<T>, x: Array<T>): (y: Array<T>) => Array<T>;
  }

  declare class GenericContructor<T> {
    constructor(x: T): GenericContructor<any>
  }

  declare class GenericContructorMulti {
    constructor(...args: Array<any>): GenericContructor<any>
  }

  declare class RFunction {
    /**
    * TODO:
    * addIndex
    * composeK
    * composeP
    * invoker
    * lift
    * liftN
    * partial
    * partialRight
    * pipeK
    * pipeP
    * tryCatch
    * uncurryN
    * useWith
    * wrap
    */
    __: any;
    T: (_: any) => boolean;
    F: (_: any) => boolean;
    always<T>(x:T): (x: any) => T;
    ap<T,V>(fns: Array<(x:T) => V>, xs: Array<T>): Array<V>;
    ap<T,V>(fns: Array<(x:T) => V>): (xs: Array<T>) => Array<V>;
    apply<T,V>(fn: (...args: Array<T>) => V, xs: Array<T>): V;
    apply<T,V>(fn: (...args: Array<T>) => V): (xs: Array<T>) => V;
    applySpec(spec: NestedObject<(x: any) => any>): (...args: Array<any>) => NestedObject<any>;
    binary<T>(fn:(...args: Array<any>) => T): (x: any, y: any) => T;
    binary<T>(fn:(...args: Array<any>) => T): (x: any)=> (y: any) => T;
    bind<T>(fn: (...args: Array<any>) => any, thisObj: T): (...args: Array<any>) => any;
    call<T>(fn: (...args: Array<any>) => T, ...args: Array<any>): T;
    comparator<T>(fn: BinaryPredicateFn<T>): (x:T, y:T) => number;
    construct<T>(ctor: Class<GenericContructor<T>>): (x: T) => GenericContructor<T>;
    constructN<T>(n: number, ctor: Class<GenericContructorMulti<any>>): (...args: any) => GenericContructorMulti<any>;
    converge(after: Function, fns: Array<Function>): Function;
    empty<T>(x: T): T;
    flip<A,B,TResult>(fn: (arg0: A, arg1: B) => TResult): (arg1: B, arg0?: A) => TResult;
    flip<A,B,C,TResult>(fn: (arg0: A, arg1: B, arg2: C) => TResult): (arg2: C, arg1: B, arg0?: A) => TResult;
    flip<A,B,C,D,TResult>(fn: (arg0: A, arg1: B, arg2: C, arg3: D) => TResult): (arg3: D, arg2: C, arg1: B, arg0?: A) => TResult;
    flip<A,B,C,D,E,TResult>(fn: (arg0: A, arg1: B, arg2: C, arg3: D, arg4:E) => TResult): (arg4:E, arg3: D, arg2: C, arg1: B, arg0?: A) => TResult;
    identity<T>(x:T): T;
    juxt<T>(fns: Array<(...args: Array<any>) => T>): (...args: Array<T>) => Array<T>;
    memoize<V,T:(...args: Array<any>) => V>(fn:T):T;
    nAry<T>(arity: number, fn:(...args: Array<any>) => T): (...args: Array<any>) => T;
    nthArg(n: number): (...args: Array<any>) => any;
    of<T>(x: T): Array<T>;
    once<V,T:(...args: Array<any>) => V>(fn:T):T;
    tap<T>(fn: (x: T) => any): (x: T) => T;
    unapply<T,V>(fn: (xs: Array<T>) => V): (...args: Array<T>) => V;
    unary<T>(fn:(...args: Array<any>) => T): (x: any) => T;
  }

  declare class RType {
    is(ctor: Class<any>, instance: any): boolean;
    is(ctor: Class<any>): (instance: any) => boolean;
    isArrayLike(x: any): boolean;
    isNil(x: ?any): boolean;
    propIs(ctor: any, prop: string, o: Object): boolean;
    propIs(ctor: any, prop: string): (o: Object) => boolean;
    propIs(ctor: any): (prop: string) => (o: Object) => boolean;
    type(x: ?any): string;
  }

  /**
  * DONE:
  * Function*
  * List*
  * Logic
  * Math
  * Object*
  * Relation
  * String
  * Type
  */


  declare class Ramda mixins
  RFunction,
  Composition,
  RMath,
  RList,
  RObject,
  RString,
  Chain,
  Concat,
  Drop,
  Take,
  Filter,
  Find,
  Split,
  RLogic,
  RRelation,
  Curry,
  RType,
  RMap,
  RReduce
  {}

  declare var exports: Ramda
}
