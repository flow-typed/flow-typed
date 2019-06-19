// migrated from
// github.com/jsverify/jsverify/blob/2d12f84a1c54cb559e7208a3438ac811517ec37e/lib/jsverify.d.ts

declare type jsverify$Arbitrary<T> = jsverify$ArbitraryLike<T> &
  jsverify$ArbitraryFns<T>;

declare interface jsverify$ArbitraryLike<T> {
  generator: jsverify$Generator<T>,
  show?: jsverify$Show<T>,
  shrink?: jsverify$Shrink<T>
}

declare interface jsverify$ArbitraryFns<T> {
  smap<U>(
    f: (t: T) => U,
    g: (u: U) => T,
    newShow?: jsverify$Show<U>
  ): jsverify$Arbitrary<U>
}

declare type jsverify$arbitraryOf = <T>(T) => jsverify$Arbitrary<T>;

declare interface jsverify$Options {
  tests?: number,
  size?: number,
  quiet?: boolean,
  rngState?: string
}

declare interface jsverify$Result<T> {
  counterexample: T,
  tests: number,
  shrinks: number,
  exc?: string,
  rngState: string
}

declare type jsverify$Generator<T> = jsverify$GeneratorFn<T> &
  jsverify$GeneratorFns<T>;
declare type jsverify$GeneratorFn<T> = (size: number) => T;
declare interface jsverify$GeneratorFns<T> {
  map<U>(f: (t: T) => U): jsverify$Generator<U>,
  flatmap<U>(f: (t: T) => jsverify$Generator<U>): jsverify$Generator<U>
}

declare type jsverify$Shrink<T> = jsverify$ShrinkFn<T> & jsverify$ShrinkFns<T>;
declare type jsverify$ShrinkFn<T> = (t: T) => T[];
declare interface jsverify$ShrinkFns<T> {
  smap<U>(f: (t: T) => U, g: (u: U) => T): jsverify$Shrink<U>
}

declare type jsverify$Show<T> = (t: T) => string;
declare type jsverify$Property<T> = boolean | void | T;
declare type jsverify$integerFn = (
  maxsize: number
) => jsverify$Arbitrary<number>;
declare type jsverify$integerFn2 = (
  minsize: number,
  maxsize: number
) => jsverify$Arbitrary<number>;

declare interface jsverify$GeneratorFunctions {
  constant<U>(u: U): jsverify$Generator<U>,
  oneof<U>(gens: jsverify$Generator<U>[]): jsverify$Generator<U>,
  recursive<U>(
    genZ: jsverify$Generator<U>,
    f: (u: U) => U
  ): jsverify$Generator<U>,
  pair<T, U>(
    genA: jsverify$Generator<T>,
    genB: jsverify$Generator<U>
  ): jsverify$Generator<[T, U]>,
  either<T, U>(
    genA: jsverify$Generator<T>,
    genB: jsverify$Generator<U>
  ): jsverify$Generator<T | U>,

  tuple(gens: jsverify$Generator<any>[]): jsverify$Generator<any[]>,
  sum(gens: jsverify$Generator<any>[]): jsverify$Generator<any>,

  array<U>(gen: jsverify$Generator<U>): jsverify$Generator<U[]>,
  nearray<U>(gen: jsverify$Generator<U>): jsverify$Generator<U[]>,
  dict<U>(gen: jsverify$Generator<U>): jsverify$Generator<{ [key: string]: U }>,

  unit: jsverify$Generator<any>,

  bless<T>(genLike: jsverify$GeneratorFn<T>): jsverify$Generator<T>,
  small<T>(gen: jsverify$Generator<T>): jsverify$Generator<T>,

  combine<A, R>(
    arb1: jsverify$Generator<A>,
    prop: (t: A) => R
  ): jsverify$Generator<R>,
  combine<A, B, R>(
    arb1: jsverify$Generator<A>,
    arb2: jsverify$Generator<B>,
    prop: (t: A, u: B) => R
  ): jsverify$Generator<R>,
  combine<A, B, C, R>(
    arb1: jsverify$Generator<A>,
    arb2: jsverify$Generator<B>,
    arb3: jsverify$Generator<C>,
    prop: (t: A, u: B, v: C) => R
  ): jsverify$Generator<R>,
  combine<A, B, C, D, R>(
    arb1: jsverify$Generator<A>,
    arb2: jsverify$Generator<B>,
    arb3: jsverify$Generator<C>,
    arb4: jsverify$Generator<D>,
    prop: (t: A, u: B, v: C, w: D) => R
  ): jsverify$Generator<R>,
  combine<A, B, C, D, E, R>(
    arb1: jsverify$Generator<A>,
    arb2: jsverify$Generator<B>,
    arb3: jsverify$Generator<C>,
    arb4: jsverify$Generator<D>,
    arb5: jsverify$Generator<E>,
    prop: (t: A, u: B, v: C, w: D, e: E) => R
  ): jsverify$Generator<R>,
  combine<A, B, C, D, E, F, R>(
    arb1: jsverify$Generator<A>,
    arb2: jsverify$Generator<B>,
    arb3: jsverify$Generator<C>,
    arb4: jsverify$Generator<D>,
    arb5: jsverify$Generator<E>,
    arb6: jsverify$Generator<F>,
    prop: (t: A, u: B, v: C, w: D, e: E, a: F) => R
  ): jsverify$Generator<R>,
  combine<A, B, C, D, E, F, G, R>(
    arb1: jsverify$Generator<A>,
    arb2: jsverify$Generator<B>,
    arb3: jsverify$Generator<C>,
    arb4: jsverify$Generator<D>,
    arb5: jsverify$Generator<E>,
    arb6: jsverify$Generator<F>,
    arb7: jsverify$Generator<G>,
    prop: (t: A, u: B, v: C, w: D, e: E, a: F, b: G) => R
  ): jsverify$Generator<R>,
  combine<A, B, C, D, E, F, G, H, R>(
    arb1: jsverify$Generator<A>,
    arb2: jsverify$Generator<B>,
    arb3: jsverify$Generator<C>,
    arb4: jsverify$Generator<D>,
    arb5: jsverify$Generator<E>,
    arb6: jsverify$Generator<F>,
    arb7: jsverify$Generator<G>,
    arb8: jsverify$Generator<H>,
    prop: (t: A, u: B, v: C, w: D, e: E, a: F, b: G, c: H) => R
  ): jsverify$Generator<R>,
  combine<A, B, C, D, E, F, G, H, I, R>(
    arb1: jsverify$Generator<A>,
    arb2: jsverify$Generator<B>,
    arb3: jsverify$Generator<C>,
    arb4: jsverify$Generator<D>,
    arb5: jsverify$Generator<E>,
    arb6: jsverify$Generator<F>,
    arb7: jsverify$Generator<G>,
    arb8: jsverify$Generator<H>,
    arb9: jsverify$Generator<I>,
    prop: (t: A, u: B, v: C, w: D, e: E, a: F, b: G, c: H, d: I) => R
  ): jsverify$Generator<R>,
  combine<A, B, C, D, E, F, G, H, I, J, R>(
    arb1: jsverify$Generator<A>,
    arb2: jsverify$Generator<B>,
    arb3: jsverify$Generator<C>,
    arb4: jsverify$Generator<D>,
    arb5: jsverify$Generator<E>,
    arb6: jsverify$Generator<F>,
    arb7: jsverify$Generator<G>,
    arb8: jsverify$Generator<H>,
    arb9: jsverify$Generator<I>,
    arb10: jsverify$Generator<J>,
    prop: (t: A, u: B, v: C, w: D, e: E, a: F, b: G, c: H, d: I, f: J) => R
  ): jsverify$Generator<R>,

  combine<R>(...args: any[]): jsverify$Generator<R>
}

declare interface jsverify$ShrinkFunctions {
  noop: jsverify$Shrink<any>,
  pair<T, U>(
    shrA: jsverify$Shrink<T>,
    shrB: jsverify$Shrink<U>
  ): jsverify$Shrink<[T, U]>,
  either<T, U>(
    shrA: jsverify$Shrink<T>,
    shrB: jsverify$Shrink<U>
  ): jsverify$Shrink<T | U>,

  tuple(shrs: jsverify$Shrink<any>[]): jsverify$Shrink<any[]>,
  sum(shrs: jsverify$Shrink<any>[]): jsverify$Shrink<any>,

  array<T>(shr: jsverify$Shrink<T>): jsverify$Shrink<T[]>,
  nearray<T>(shr: jsverify$Shrink<T>): jsverify$Shrink<T[]>,

  bless<T>(shrinkLike: jsverify$ShrinkFn<T>): jsverify$Shrink<T>
}

declare interface jsverify$ShowFunctions {
  def<T>(x: T): string,
  pair<T, U>(sA: jsverify$Show<T>, sB: jsverify$Show<U>, x: [T, U]): string,
  either<T, U>(sA: jsverify$Show<T>, sB: jsverify$Show<U>, x: T | U): string,

  tuple(shs: jsverify$Show<any>[], x: any[]): string,
  sum(shs: jsverify$Show<any>[], x: any): string,

  array<T>(sh: jsverify$Show<T>, x: T[]): string
}

declare type jsverify$Random = jsverify$RandomInt & jsverify$RandomFunctions;
declare type jsverify$RandomInt = (min: number, max: number) => number;
declare interface jsverify$RandomFunctions {
  number(min: number, max: number): number
}

declare module "jsverify" {
  declare export type Arbitrary<T> = jsverify$Arbitrary<T>;
  declare export type ArbitraryLike<T> = jsverify$ArbitraryLike<T>;
  declare export type ArbitraryFns<T> = jsverify$ArbitraryFns<T>;
  declare export type Options = jsverify$Options;
  declare export type Result<T> = jsverify$Result<T>;
  declare export type Generator<T> = jsverify$Generator<T>;
  declare export type GeneratorFn<T> = jsverify$GeneratorFn<T>;
  declare export type GeneratorFns<T> = jsverify$GeneratorFns<T>;
  declare export type Shrink<T> = jsverify$Shrink<T>;
  declare export type ShrinkFn<T> = jsverify$ShrinkFn<T>;
  declare export type ShrinkFns<T> = jsverify$ShrinkFns<T>;
  declare export type Show<T> = jsverify$Show<T>;
  declare export type Property<T> = jsverify$Property<T>;
  declare export type GeneratorFunctions = jsverify$GeneratorFunctions;
  declare export type ShrinkFunctions = jsverify$ShrinkFunctions;
  declare export type ShowFunctions = jsverify$ShowFunctions;
  declare export type Random = jsverify$Random;
  declare export type RandomInt = jsverify$RandomInt;
  declare export type RandomFunctions = jsverify$RandomFunctions;

  declare module.exports: {
    bless: <U>(arb: jsverify$ArbitraryLike<U>) => jsverify$Arbitrary<U>,
    sampler: <U>(
      arb: jsverify$Arbitrary<U>,
      genSize?: number
    ) => (sampleSize: number) => U,
    small: <U>(arb: jsverify$Arbitrary<U>) => jsverify$Arbitrary<U>,
    suchthat: <U>(
      arb: jsverify$Arbitrary<U>,
      predicate: (u: U) => boolean
    ) => jsverify$Arbitrary<U>,

    integer: jsverify$Arbitrary<number> &
      jsverify$integerFn &
      jsverify$integerFn2,
    nat: jsverify$Arbitrary<number> & jsverify$integerFn,
    number: jsverify$Arbitrary<number> &
      jsverify$integerFn &
      jsverify$integerFn2,

    uint8: jsverify$Arbitrary<number>,
    uint16: jsverify$Arbitrary<number>,
    uint32: jsverify$Arbitrary<number>,
    int8: jsverify$Arbitrary<number>,
    int16: jsverify$Arbitrary<number>,
    int32: jsverify$Arbitrary<number>,

    bool: jsverify$Arbitrary<boolean>,
    datetime: jsverify$Arbitrary<Date>,

    elements: <T>(args: T[]) => jsverify$Arbitrary<T>,
    falsy: jsverify$Arbitrary<any>,
    constant: <T>(x: T) => jsverify$Arbitrary<T>,

    char: jsverify$Arbitrary<string>,
    asciichar: jsverify$Arbitrary<string>,
    string: jsverify$Arbitrary<string>,
    nestring: jsverify$Arbitrary<string>,
    asciistring: jsverify$Arbitrary<string>,
    asciinestring: jsverify$Arbitrary<string>,

    nonShrink: <T>(arb: jsverify$Arbitrary<T>) => jsverify$Arbitrary<T>,
    either: <T, U>(
      arbA: jsverify$Arbitrary<T>,
      arbB: jsverify$Arbitrary<U>
    ) => jsverify$Arbitrary<T | U>,
    pair: <T, U>(
      arbA: jsverify$Arbitrary<T>,
      arbB: jsverify$Arbitrary<U>
    ) => jsverify$Arbitrary<[T, U]>,

    tuple: (arbs: jsverify$Arbitrary<any>[]) => jsverify$Arbitrary<any[]>,
    sum: (arbs: jsverify$Arbitrary<any>[]) => jsverify$Arbitrary<any>,

    dict: <T>(
      arb: jsverify$Arbitrary<T>
    ) => jsverify$Arbitrary<{ [s: string]: T }>,
    array: <T>(arb: jsverify$Arbitrary<T>) => jsverify$Arbitrary<T[]>,
    nearray: <T>(arb: jsverify$Arbitrary<T>) => jsverify$Arbitrary<T[]>,
    fn: <T>(arb: jsverify$Arbitrary<T>) => jsverify$Arbitrary<(a: any) => T>,
    fun: <T>(arb: jsverify$Arbitrary<T>) => jsverify$Arbitrary<(a: any) => T>,

    json: jsverify$Arbitrary<any>,
    unit: jsverify$Arbitrary<any>,

    oneof: <T>(gs: jsverify$Arbitrary<T>[]) => jsverify$Arbitrary<T>,
    record: <T>(
      arbs: $ObjMap<T, jsverify$arbitraryOf>
    ) => jsverify$Arbitrary<T>,

    forall: <A, T>(
      arb1: jsverify$Arbitrary<A>,
      prop: (t: A) => jsverify$Property<T>
    ) => jsverify$Property<T>,
    forall: <A, B, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      prop: (t: A, u: B) => jsverify$Property<T>
    ) => jsverify$Property<T>,
    forall: <A, B, C, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      prop: (t: A, u: B, v: C) => jsverify$Property<T>
    ) => jsverify$Property<T>,
    forall: <A, B, C, D, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      prop: (t: A, u: B, v: C, w: D) => jsverify$Property<T>
    ) => jsverify$Property<T>,
    forall: <A, B, C, D, E, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      prop: (t: A, u: B, v: C, w: D, e: E) => jsverify$Property<T>
    ) => jsverify$Property<T>,
    forall: <A, B, C, D, E, F, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      prop: (t: A, u: B, v: C, w: D, e: E, a: F) => jsverify$Property<T>
    ) => jsverify$Property<T>,
    forall: <A, B, C, D, E, F, G, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      prop: (t: A, u: B, v: C, w: D, e: E, a: F, b: G) => jsverify$Property<T>
    ) => jsverify$Property<T>,
    forall: <A, B, C, D, E, F, G, H, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      arb8: jsverify$Arbitrary<H>,
      prop: (
        t: A,
        u: B,
        v: C,
        w: D,
        e: E,
        a: F,
        b: G,
        c: H
      ) => jsverify$Property<T>
    ) => jsverify$Property<T>,
    forall: <A, B, C, D, E, F, G, H, I, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      arb8: jsverify$Arbitrary<H>,
      arb9: jsverify$Arbitrary<I>,
      prop: (
        t: A,
        u: B,
        v: C,
        w: D,
        e: E,
        a: F,
        b: G,
        c: H,
        d: I
      ) => jsverify$Property<T>
    ) => jsverify$Property<T>,
    forall: <A, B, C, D, E, F, G, H, I, J, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      arb8: jsverify$Arbitrary<H>,
      arb9: jsverify$Arbitrary<I>,
      arb10: jsverify$Arbitrary<J>,
      prop: (
        t: A,
        u: B,
        v: C,
        w: D,
        e: E,
        a: F,
        b: G,
        c: H,
        d: I,
        f: J
      ) => jsverify$Property<T>
    ) => jsverify$Property<T>,

    forall: (...args: any[]) => jsverify$Property<any>,

    assertForall: <A, T>(
      arb1: jsverify$Arbitrary<A>,
      prop: (t: A) => jsverify$Property<T>
    ) => T,
    assertForall: <A, B, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      prop: (t: A, u: B) => jsverify$Property<T>
    ) => T,
    assertForall: <A, B, C, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      prop: (t: A, u: B, v: C) => jsverify$Property<T>
    ) => T,
    assertForall: <A, B, C, D, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      prop: (t: A, u: B, v: C, w: D) => jsverify$Property<T>
    ) => T,
    assertForall: <A, B, C, D, E, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      prop: (t: A, u: B, v: C, w: D, e: E) => jsverify$Property<T>
    ) => T,
    assertForall: <A, B, C, D, E, F, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      prop: (t: A, u: B, v: C, w: D, e: E, a: F) => jsverify$Property<T>
    ) => T,
    assertForall: <A, B, C, D, E, F, G, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      prop: (t: A, u: B, v: C, w: D, e: E, a: F, b: G) => jsverify$Property<T>
    ) => T,
    assertForall: <A, B, C, D, E, F, G, H, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      arb8: jsverify$Arbitrary<H>,
      prop: (
        t: A,
        u: B,
        v: C,
        w: D,
        e: E,
        a: F,
        b: G,
        c: H
      ) => jsverify$Property<T>
    ) => T,
    assertForall: <A, B, C, D, E, F, G, H, I, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      arb8: jsverify$Arbitrary<H>,
      arb9: jsverify$Arbitrary<I>,
      prop: (
        t: A,
        u: B,
        v: C,
        w: D,
        e: E,
        a: F,
        b: G,
        c: H,
        d: I
      ) => jsverify$Property<T>
    ) => T,
    assertForall: <A, B, C, D, E, F, G, H, I, J, T>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      arb8: jsverify$Arbitrary<H>,
      arb9: jsverify$Arbitrary<I>,
      arb10: jsverify$Arbitrary<J>,
      prop: (
        t: A,
        u: B,
        v: C,
        w: D,
        e: E,
        a: F,
        b: G,
        c: H,
        d: I,
        f: J
      ) => jsverify$Property<T>
    ) => T,

    assertForall: (...args: any[]) => any,

    checkForall: <A>(
      arb1: jsverify$Arbitrary<A>,
      prop: (t: A) => jsverify$Property<A>
    ) => Result<A>,
    checkForall: <A, B>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      prop: (t: A, u: B) => jsverify$Property<any>
    ) => Result<any>,
    checkForall: <A, B, C>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      prop: (t: A, u: B, v: C) => jsverify$Property<any>
    ) => Result<any>,
    checkForall: <A, B, C, D>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      prop: (t: A, u: B, v: C, w: D) => jsverify$Property<any>
    ) => Result<any>,
    checkForall: <A, B, C, D, E>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      prop: (t: A, u: B, v: C, w: D, e: E) => jsverify$Property<any>
    ) => Result<any>,
    checkForall: <A, B, C, D, E, F>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      prop: (t: A, u: B, v: C, w: D, e: E, a: F) => jsverify$Property<any>
    ) => Result<any>,
    checkForall: <A, B, C, D, E, F, G>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      prop: (t: A, u: B, v: C, w: D, e: E, a: F, b: G) => jsverify$Property<any>
    ) => Result<any>,
    checkForall: <A, B, C, D, E, F, G, H>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      arb8: jsverify$Arbitrary<H>,
      prop: (
        t: A,
        u: B,
        v: C,
        w: D,
        e: E,
        a: F,
        b: G,
        c: H
      ) => jsverify$Property<any>
    ) => Result<any>,
    checkForall: <A, B, C, D, E, F, G, H, I>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      arb8: jsverify$Arbitrary<H>,
      arb9: jsverify$Arbitrary<I>,
      prop: (
        t: A,
        u: B,
        v: C,
        w: D,
        e: E,
        a: F,
        b: G,
        c: H,
        d: I
      ) => jsverify$Property<any>
    ) => Result<any>,
    checkForall: <A, B, C, D, E, F, G, H, I, J>(
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      arb8: jsverify$Arbitrary<H>,
      arb9: jsverify$Arbitrary<I>,
      arb10: jsverify$Arbitrary<J>,
      prop: (
        t: A,
        u: B,
        v: C,
        w: D,
        e: E,
        a: F,
        b: G,
        c: H,
        d: I,
        f: J
      ) => jsverify$Property<any>
    ) => Result<any>,

    checkForall: (...args: any[]) => jsverify$Result<any>,

    property: <A>(
      description: String,
      arb1: jsverify$Arbitrary<A>,
      prop: (t: A) => jsverify$Property<A>
    ) => any,
    property: <A, B>(
      description: String,
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      prop: (t: A, u: B) => jsverify$Property<any>
    ) => any,
    property: <A, B, C>(
      description: String,
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      prop: (t: A, u: B, v: C) => jsverify$Property<any>
    ) => any,
    property: <A, B, C, D>(
      description: String,
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      prop: (t: A, u: B, v: C, w: D) => jsverify$Property<any>
    ) => any,
    property: <A, B, C, D, E>(
      description: String,
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      prop: (t: A, u: B, v: C, w: D, e: E) => jsverify$Property<any>
    ) => any,
    property: <A, B, C, D, E, F>(
      description: String,
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      prop: (t: A, u: B, v: C, w: D, e: E, a: F) => jsverify$Property<any>
    ) => any,
    property: <A, B, C, D, E, F, G>(
      description: String,
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      prop: (t: A, u: B, v: C, w: D, e: E, a: F, b: G) => jsverify$Property<any>
    ) => any,
    property: <A, B, C, D, E, F, G, H>(
      description: String,
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      arb8: jsverify$Arbitrary<H>,
      prop: (
        t: A,
        u: B,
        v: C,
        w: D,
        e: E,
        a: F,
        b: G,
        c: H
      ) => jsverify$Property<any>
    ) => any,
    property: <A, B, C, D, E, F, G, H, I>(
      description: String,
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      arb8: jsverify$Arbitrary<H>,
      arb9: jsverify$Arbitrary<I>,
      prop: (
        t: A,
        u: B,
        v: C,
        w: D,
        e: E,
        a: F,
        b: G,
        c: H,
        d: I
      ) => jsverify$Property<any>
    ) => any,
    property: <A, B, C, D, E, F, G, H, I, J>(
      description: String,
      arb1: jsverify$Arbitrary<A>,
      arb2: jsverify$Arbitrary<B>,
      arb3: jsverify$Arbitrary<C>,
      arb4: jsverify$Arbitrary<D>,
      arb5: jsverify$Arbitrary<E>,
      arb6: jsverify$Arbitrary<F>,
      arb7: jsverify$Arbitrary<G>,
      arb8: jsverify$Arbitrary<H>,
      arb9: jsverify$Arbitrary<I>,
      arb10: jsverify$Arbitrary<J>,
      prop: (
        t: A,
        u: B,
        v: C,
        w: D,
        e: E,
        a: F,
        b: G,
        c: H,
        d: I,
        f: J
      ) => jsverify$Property<any>
    ) => any,

    property: (...args: any[]) => jsverify$Result<any>,

    check: <T>(
      prop: jsverify$Property<T>,
      opts?: jsverify$Options
    ) => jsverify$Result<T>,
    assert: <T>(prop: jsverify$Property<T>, opts?: jsverify$Options) => T,

    generator: jsverify$GeneratorFunctions,
    shrink: jsverify$ShrinkFunctions,
    show: jsverify$ShowFunctions,
    random: jsverify$Random
  };
}
