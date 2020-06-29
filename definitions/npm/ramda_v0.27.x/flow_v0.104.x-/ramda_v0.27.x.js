/* eslint-disable no-unused-vars, no-redeclare */

type Transformer<A, B> = {
  "@@transducer/step": <I, R>(r: A, a: *) => R,
  "@@transducer/init": () => A,
  "@@transducer/result": (result: *) => B,
  ...
};

declare type $npm$ramda$Placeholder = { "@@functional/placeholder": true, ... };

declare opaque type $npm$ramda$Reduced<T>;

declare module ramda {
  declare type FunctorObj<A> = { map: (<B>(A => B) => FunctorObj<B>), ... }
  declare type FunctorFantasyLand<A> = { 'fantasy-land/map': (<B>(A => B) => FunctorFantasyLand<B>), ... }
  declare type UnaryFn<A, R> = (a: A) => R;
  declare type UnaryPromiseFn<A, R> = UnaryFn<A, Promise<R>>;
  declare type BinaryFn<A, B, R> = ((a: A, b: B) => R) &
    ((a: A) => (b: B) => R);
  declare type UnarySameTypeFn<T> = UnaryFn<T, T>;
  declare type BinarySameTypeFn<T> = BinaryFn<T, T, T>;
  declare type NestedObject<T> = { [k: string]: T | NestedObject<T>, ... };
  declare type UnaryPredicateFn<T> = (x: T) => boolean;
  declare type MapUnaryPredicateFn = <V>(V) => V => boolean;
  declare type BinaryPredicateFn<T> = (x: T, y: T) => boolean;
  declare type BinaryPredicateFn2<T, S> = (x: T, y: S) => boolean;

  declare interface ObjPredicate {
    (value: mixed, key: string): boolean;
  }

  declare type __CurriedFunction1<A, R, AA: A> = (...r: [AA]) => R;
  declare type CurriedFunction1<A, R> = __CurriedFunction1<A, R, *>;

  declare type __CurriedFunction2<A, B, R, AA: A, BB: B> = (
    ((...r: [AA]) => CurriedFunction1<BB, R>) &
    ((...r: [$npm$ramda$Placeholder, BB]) => CurriedFunction1<AA, R>) &
    ((...r: [AA, BB]) => R)
  );
  declare type CurriedFunction2<A, B, R> = __CurriedFunction2<A, B, R, *, *>;

  declare type __CurriedFunction3<A, B, C, R, AA: A, BB: B, CC: C> = (
    ((...r: [AA]) => CurriedFunction2<BB, CC, R>) &
    ((...r: [$npm$ramda$Placeholder, BB]) => CurriedFunction2<AA, CC, R>) &
    ((...r: [AA, BB]) => CurriedFunction1<CC, R>) &
    ((...r: [$npm$ramda$Placeholder, BB, CC]) => CurriedFunction1<AA, R>) &
    ((...r: [AA, $npm$ramda$Placeholder, CC]) => CurriedFunction1<BB, R>) &
    ((...r: [AA, BB, CC]) => R)
  );
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
    ((...r: [$npm$ramda$Placeholder, BB]) => CurriedFunction3<AA, CC, DD, R>) &
    ((...r: [AA, BB]) => CurriedFunction2<CC, DD, R>) &
    ((...r: [$npm$ramda$Placeholder, BB, CC]) => CurriedFunction2<AA, DD, R>) &
    ((...r: [BB, $npm$ramda$Placeholder, CC]) => CurriedFunction2<BB, DD, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction1<DD, R>) &
    ((...r: [$npm$ramda$Placeholder, BB, CC, DD]) => CurriedFunction1<AA, R>) &
    ((...r: [AA, $npm$ramda$Placeholder, CC, DD]) => CurriedFunction1<BB, R>) &
    ((...r: [AA, BB, $npm$ramda$Placeholder, DD]) => CurriedFunction1<CC, R>) &
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
    ((...r: [$npm$ramda$Placeholder, BB]) => CurriedFunction4<AA, CC, DD, EE, R>) &
    ((...r: [AA, BB]) => CurriedFunction3<CC, DD, EE, R>) &
    ((...r: [$npm$ramda$Placeholder, BB, CC]) => CurriedFunction3<AA, DD, EE, R>) &
    ((...r: [AA, $npm$ramda$Placeholder, CC]) => CurriedFunction3<BB, DD, EE, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction2<DD, EE, R>) &
    ((...r: [$npm$ramda$Placeholder, BB, CC, DD]) => CurriedFunction2<AA, EE, R>) &
    ((...r: [AA, $npm$ramda$Placeholder, CC, DD]) => CurriedFunction2<BB, EE, R>) &
    ((...r: [AA, BB, $npm$ramda$Placeholder, DD]) => CurriedFunction2<CC, EE, R>) &
    ((...r: [AA, BB, CC, DD]) => CurriedFunction1<EE, R>) &
    ((...r: [$npm$ramda$Placeholder, BB, CC, DD, EE]) => CurriedFunction1<AA, R>) &
    ((...r: [AA, $npm$ramda$Placeholder, CC, DD, EE]) => CurriedFunction1<BB, R>) &
    ((...r: [AA, BB, $npm$ramda$Placeholder, DD, EE]) => CurriedFunction1<CC, R>) &
    ((...r: [AA, BB, CC, $npm$ramda$Placeholder, EE]) => CurriedFunction1<DD, R>) &
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
    ((...r: [$npm$ramda$Placeholder, BB]) => CurriedFunction5<AA, CC, DD, EE, FF, R>) &
    ((...r: [AA, BB]) => CurriedFunction4<CC, DD, EE, FF, R>) &
    ((...r: [$npm$ramda$Placeholder, BB, CC]) => CurriedFunction4<AA, DD, EE, FF, R>) &
    ((...r: [AA, $npm$ramda$Placeholder, CC]) => CurriedFunction4<BB, DD, EE, FF, R>) &
    ((...r: [AA, BB, CC]) => CurriedFunction3<DD, EE, FF, R>) &
    ((...r: [$npm$ramda$Placeholder, BB, CC, DD]) => CurriedFunction3<AA, EE, FF, R>) &
    ((...r: [AA, $npm$ramda$Placeholder, CC, DD]) => CurriedFunction3<BB, EE, FF, R>) &
    ((...r: [AA, BB, $npm$ramda$Placeholder, DD]) => CurriedFunction3<CC, EE, FF, R>) &
    ((...r: [AA, BB, CC, DD]) => CurriedFunction2<EE, FF, R>) &
    ((...r: [$npm$ramda$Placeholder, BB, CC, DD, EE]) => CurriedFunction2<AA, FF, R>) &
    ((...r: [AA, $npm$ramda$Placeholder, CC, DD, EE]) => CurriedFunction2<BB, FF, R>) &
    ((...r: [AA, BB, $npm$ramda$Placeholder, DD, EE]) => CurriedFunction2<CC, FF, R>) &
    ((...r: [AA, BB, CC, $npm$ramda$Placeholder, EE]) => CurriedFunction2<DD, FF, R>) &
    ((...r: [AA, BB, CC, DD, EE]) => CurriedFunction1<FF, R>) &
    ((...r: [$npm$ramda$Placeholder, BB, CC, DD, EE, FF]) => CurriedFunction1<AA, R>) &
    ((...r: [AA, $npm$ramda$Placeholder, CC, DD, EE, FF]) => CurriedFunction1<BB, R>) &
    ((...r: [AA, BB, $npm$ramda$Placeholder, DD, EE, FF]) => CurriedFunction1<CC, R>) &
    ((...r: [AA, BB, CC, $npm$ramda$Placeholder, EE, FF]) => CurriedFunction1<DD, R>) &
    ((...r: [AA, BB, CC, DD, $npm$ramda$Placeholder, FF]) => CurriedFunction1<EE, R>) &
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

  declare type Partial = (<A, R>((...r: [A]) => R, args: [A]) => () => R) &
    (<A, B, R>((...r: [A, B]) => R, args: [A]) => B => R) &
    (<A, B, R>((...r: [A, B]) => R, args: [A, B]) => () => R) &
    (<A, B, C, R>((...r: [A, B, C]) => R, args: [A]) => (B, C) => R) &
    (<A, B, C, R>((...r: [A, B, C]) => R, args: [A, B]) => C => R) &
    (<A, B, C, R>((...r: [A, B, C]) => R, args: [A, B, C]) => () => R) &
    (<A, B, C, D, R>((...r: [A, B, C, D]) => R, args: [A]) => (B, C, D) => R) &
    (<A, B, C, D, R>((...r: [A, B, C, D]) => R, args: [A, B]) => (C, D) => R) &
    (<A, B, C, D, R>((...r: [A, B, C, D]) => R, args: [A, B, C]) => D => R) &
    (<A, B, C, D, R>(
      (...r: [A, B, C, D]) => R,
      args: [A, B, C, D]
    ) => () => R) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R,
      args: [A]
    ) => (B, C, D, E) => R) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R,
      args: [A, B]
    ) => (C, D, E) => R) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R,
      args: [A, B, C]
    ) => (D, E) => R) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R,
      args: [A, B, C, D]
    ) => E => R) &
    (<A, B, C, D, E, R>(
      (...r: [A, B, C, D, E]) => R,
      args: [A, B, C, D, E]
    ) => () => R) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R,
      args: [A]
    ) => (B, C, D, E, F) => R) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R,
      args: [A, B]
    ) => (C, D, E, F) => R) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R,
      args: [A, B, C]
    ) => (D, E, F) => R) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R,
      args: [A, B, C, D]
    ) => (E, F) => R) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R,
      args: [A, B, C, D, E]
    ) => F => R) &
    (<A, B, C, D, E, F, R>(
      (...r: [A, B, C, D, E, F]) => R,
      args: [A, B, C, D, E, F]
    ) => () => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A]
    ) => (B, C, D, E, F, G) => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A, B]
    ) => (C, D, E, F, G) => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A, B, C]
    ) => (D, E, F, G) => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A, B, C, D]
    ) => (E, F, G) => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A, B, C, D, E]
    ) => (F, G) => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A, B, C, D, E, F]
    ) => G => R) &
    (<A, B, C, D, E, F, G, R>(
      (...r: [A, B, C, D, E, F, G]) => R,
      args: [A, B, C, D, E, F, G]
    ) => () => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A]
    ) => (B, C, D, E, F, G, H) => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B]
    ) => (C, D, E, F, G, H) => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B, C]
    ) => (D, E, F, G, H) => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B, C, D]
    ) => (E, F, G, H) => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B, C, D, E]
    ) => (F, G, H) => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B, C, D, E, F]
    ) => (G, H) => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B, C, D, E, F, G]
    ) => H => R) &
    (<A, B, C, D, E, F, G, H, R>(
      (...r: [A, B, C, D, E, F, G, H]) => R,
      args: [A, B, C, D, E, F, G, H]
    ) => () => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A]
    ) => (B, C, D, E, F, G, H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B]
    ) => (C, D, E, F, G, H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C]
    ) => (D, E, F, G, H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C, D]
    ) => (E, F, G, H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C, D, E]
    ) => (F, G, H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C, D, E, F]
    ) => (G, H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C, D, E, F, G]
    ) => (H, I) => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C, D, E, F, G, H]
    ) => I => R) &
    (<A, B, C, D, E, F, G, H, I, R>(
      (...r: [A, B, C, D, E, F, G, H, I]) => R,
      args: [A, B, C, D, E, F, G, H, I]
    ) => () => R);

  declare var pipe: {
    <Args, Return, B, C, D, E, F>(
      ab: (...a: Args) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, F>,
      fg: UnaryFn<F, Return>,
    ): (...a: Args) => Return,
    <Args, Return, B, C, D, E,>(
      ab: (...a: Args) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, E>,
      ef: UnaryFn<E, Return>,
    ): (...a: Args) => Return,
    <Args, Return, B, C, D,>(
      ab: (...a: Args) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, D>,
      de: UnaryFn<D, Return>,
    ): (...a: Args) => Return,
    <Args, Return, B, C,>(
      ab: (...a: Args) => B,
      bc: UnaryFn<B, C>,
      cd: UnaryFn<C, Return>,
    ): (...a: Args) => Return,
    <Args, Return, B,>(
      ab: (...a: Args) => B,
      bc: UnaryFn<B, Return>,
    ): (...a: Args) => Return,
    <A, B>(ab: UnaryFn<A, B>): UnaryFn<A, B>,
    ...
  };

  declare type Pipe = typeof pipe;

  declare type PipeP = (<A, B, C, D, E, F, G>(
    ab: UnaryPromiseFn<A, B>,
    bc: UnaryPromiseFn<B, C>,
    cd: UnaryPromiseFn<C, D>,
    de: UnaryPromiseFn<D, E>,
    ef: UnaryPromiseFn<E, F>,
    fg: UnaryPromiseFn<F, G>,
  ) => UnaryPromiseFn<A, G>) &
    (<A, B, C, D, E, F>(
      ab: UnaryPromiseFn<A, B>,
      bc: UnaryPromiseFn<B, C>,
      cd: UnaryPromiseFn<C, D>,
      de: UnaryPromiseFn<D, E>,
      ef: UnaryPromiseFn<E, F>,
    ) => UnaryPromiseFn<A, F>) &
    (<A, B, C, D, E>(
      ab: UnaryPromiseFn<A, B>,
      bc: UnaryPromiseFn<B, C>,
      cd: UnaryPromiseFn<C, D>,
      de: UnaryPromiseFn<D, E>,
    ) => UnaryPromiseFn<A, E>) &
    (<A, B, C, D>(
      ab: UnaryPromiseFn<A, B>,
      bc: UnaryPromiseFn<B, C>,
      cd: UnaryPromiseFn<C, D>,
    ) => UnaryPromiseFn<A, D>) &
    (<A, B, C>(
      ab: UnaryPromiseFn<A, B>,
      bc: UnaryPromiseFn<B, C>,
    ) => UnaryPromiseFn<A, C>) &
    (<A, B>(
      ab: UnaryPromiseFn<A, B>,
    ) => UnaryPromiseFn<A, B>);

  // This kind of filter allows us to do type refinement on the result, but we
  // still need Filter so that non-refining predicates still pass a type check.
  declare type RefineFilter =
    & (<K, V, P: $Pred<1>, T: Array<V> | $ReadOnlyArray<V>> (fn: P, xs: T) => Array<$Refine<V, P, 1>>)
    & (<K, V, P: $Pred<1>, T: Array<V> | $ReadOnlyArray<V>> (fn: P) => (xs: T) => Array<$Refine<V, P, 1>>);

  declare type Filter =
    & (<K, V, T: $ReadOnlyArray<V> | { +[key: K]: V, ... }>  (fn: UnaryPredicateFn<V>, xs: T) => T)
    & (<K, V, T: { [key: K]: V, ... } | Array<V>>   (fn: UnaryPredicateFn<V>, xs: T) => T)

    & (<K, V, T: $ReadOnlyArray<V> | { +[key: K]: V, ... }>  (fn: UnaryPredicateFn<V>) =>(xs: T) => T)
    & (<K, V, T: Array<V> | { [key: K]: V, ... }>   (fn: UnaryPredicateFn<V>) =>(xs: T) => T)

  declare interface Monad<A> {
    chain<B>(f: A => Monad<B>): Monad<B>;
  }

  declare class Semigroup<T> {}

  declare class Chain {
    chain<T, V: Monad<T> | $ReadOnlyArray<T>>(fn: (a: T) => V, x: V): V;
    chain<T, V: Monad<T> | $ReadOnlyArray<T>>(fn: (a: T) => V): (x: V) => V;
  }

  declare class GenericContructor<T> {
    constructor(x: T): GenericContructor<T>;
  }

  declare class GenericContructorMulti<T> {
    constructor(...args: Array<T>): GenericContructor<T>;
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

  declare type Compose = (<A, B, C, D, E, F, G, H, I, J, K>(
    jk: UnaryFn<J, K>,
    ij: UnaryFn<I, J>,
    hi: UnaryFn<H, I>,
    gh: UnaryFn<G, H>,
    fg: UnaryFn<F, G>,
    ef: UnaryFn<E, F>,
    de: UnaryFn<D, E>,
    cd: UnaryFn<C, D>,
    bc: UnaryFn<B, C>,
    ab: UnaryFn<A, B>
  ) => UnaryFn<A, K>) &
    (<A, B, C, D, E, F, G, H, I, J>(
      ij: UnaryFn<I, J>,
      hi: UnaryFn<H, I>,
      gh: UnaryFn<G, H>,
      fg: UnaryFn<F, G>,
      ef: UnaryFn<E, F>,
      de: UnaryFn<D, E>,
      cd: UnaryFn<C, D>,
      bc: UnaryFn<B, C>,
      ab: UnaryFn<A, B>
    ) => UnaryFn<A, J>) &
    (<A, B, C, D, E, F, G, H, I>(
      hi: UnaryFn<H, I>,
      gh: UnaryFn<G, H>,
      fg: UnaryFn<F, G>,
      ef: UnaryFn<E, F>,
      de: UnaryFn<D, E>,
      cd: UnaryFn<C, D>,
      bc: UnaryFn<B, C>,
      ab: UnaryFn<A, B>
    ) => UnaryFn<A, I>) &
    (<A, B, C, D, E, F, G, H>(
      gh: UnaryFn<G, H>,
      fg: UnaryFn<F, G>,
      ef: UnaryFn<E, F>,
      de: UnaryFn<D, E>,
      cd: UnaryFn<C, D>,
      bc: UnaryFn<B, C>,
      ab: UnaryFn<A, B>
    ) => UnaryFn<A, H>) &
    (<A, B, C, D, E, F, G>(
      fg: UnaryFn<F, G>,
      ef: UnaryFn<E, F>,
      de: UnaryFn<D, E>,
      cd: UnaryFn<C, D>,
      bc: UnaryFn<B, C>,
      ab: UnaryFn<A, B>
    ) => UnaryFn<A, G>) &
    (<A, B, C, D, E, F>(
      ef: UnaryFn<E, F>,
      de: UnaryFn<D, E>,
      cd: UnaryFn<C, D>,
      bc: UnaryFn<B, C>,
      ab: UnaryFn<A, B>,
    ) => UnaryFn<A, F>) &
    (<A, B, C, D, E>(
      de: UnaryFn<D, E>,
      cd: UnaryFn<C, D>,
      bc: UnaryFn<B, C>,
      ab: UnaryFn<A, B>,
    ) => UnaryFn<A, E>) &
    (<A, B, C, D>(
      cd: UnaryFn<C, D>,
      bc: UnaryFn<B, C>,
      ab: UnaryFn<A, B>,
    ) => UnaryFn<A, D>) &
    (<A, B, C>(
      bc: UnaryFn<B, C>,
      ab: UnaryFn<A, B>,
    ) => UnaryFn<A, C>) &
    (<A, B>(ab: UnaryFn<A, B>) => UnaryFn<A, B>);
  declare var compose: Compose;

  declare function andThen<A, R>(onSuccess: UnaryFn<A, R> | UnaryPromiseFn<A, R>): CurriedFunction1<Promise<A>, Promise<R>>
  declare function andThen<A, R>(onSuccess: UnaryFn<A, R> | UnaryPromiseFn<A, R>, p: Promise<A>): Promise<R>;
  declare var curry: Curry;
  declare function curryN<A, R>(
    length: number,
    fn: (...args: Array<A>) => R
  ): Function;

  // *Math
  declare var add: CurriedFunction2<number, number, number>;
  declare var inc: UnaryFn<number, number>;
  declare var dec: UnaryFn<number, number>;
  declare var mean: UnaryFn<Array<number>, number>;
  declare var divide: CurriedFunction2<number, number, number>;
  declare var mathMod: CurriedFunction2<number, number, number>;
  declare var median: UnaryFn<Array<number>, number>;
  declare var modulo: CurriedFunction2<number, number, number>;
  declare var multiply: CurriedFunction2<number, number, number>;
  declare var negate: UnaryFn<number, number>;
  declare var product: UnaryFn<Array<number>, number>;
  declare var subtract:
    & CurriedFunction2<number, number, number>
    & CurriedFunction2<Date, Date, number>
    & CurriedFunction2<Date, number, number>
    & CurriedFunction2<number, Date, number>;
  declare var sum: UnaryFn<Array<number>, number>;

  // Filter
  // To refine with filter, be sure to import the RefineFilter type, and cast
  // filter to a RefineFilter.
  // ex:
  // import { type RefineFilter, filter } from 'ramda'
  // const notNull = (x): bool %checks => x != null
  // const ns: Array<number> = (filter: RefineFilter)(notNull, [1, 2, null])
  declare var filter: RefineFilter & Filter;
  // reject doesn't get RefineFilter since it performs the opposite work of
  // filter, and we don't have a kind of $NotPred type.
  declare var reject: Filter;

  // *String
  declare var match: CurriedFunction2<RegExp, string, Array<string | void>>;
  declare type ReplacementFn = (substring: string, ...args: Array<string>) => string;
  declare function replace<A: RegExp | string, B: string | ReplacementFn>(A): CurriedFunction2<B, string, string>;
  declare function replace<A: RegExp | string, B: string | ReplacementFn>(A, B): CurriedFunction1<string, string>;
  declare function replace<A: RegExp | string, B: string | ReplacementFn>(A, B, string): string;
  declare var split: CurriedFunction2<RegExp | string, string, Array<string>>;
  declare var test: CurriedFunction2<RegExp, string, boolean>;

  declare function startsWith<A>(prefix: $ReadOnlyArray<A>): $ReadOnlyArray<A> => boolean;
  declare function startsWith(prefix: string): string => boolean;
  declare function startsWith<A>(prefix: $ReadOnlyArray<A>, list: $ReadOnlyArray<A>): boolean;
  declare function startsWith(prefix: string, list: string): boolean;

  declare function endsWith<A>(prefix: $ReadOnlyArray<A>): $ReadOnlyArray<A> => boolean;
  declare function endsWith(prefix: string): string => boolean;
  declare function endsWith<A>(prefix: $ReadOnlyArray<A>, list: $ReadOnlyArray<A>): boolean;
  declare function endsWith(prefix: string, list: string): boolean;

  declare function toLower(a: string): string;
  declare function toString(x: mixed): string;
  declare function toUpper(a: string): string;
  declare function trim(a: string): string;

  // *Type

  declare function is<T>(t: T): mixed => boolean;
  declare function is<T>(t: T, v: mixed): boolean;
  declare function propIs<O>(mixed, $Keys<O>): CurriedFunction1<O, boolean>;
  declare function propIs<O>(mixed): CurriedFunction2<$Keys<O>, O, boolean>;
  declare function propIs<O>(mixed, $Keys<O>, O): boolean;
  declare function type(x: mixed): string;

  declare function isNil(x: mixed): boolean %checks(x === undefined || x === null);

  // *List
  declare function adjust<T>(index: number): CurriedFunction2<(a: T) => T, $ReadOnlyArray<T>, Array<T>>;
  declare function adjust<T>(index: number, fn: (a: T) => T): CurriedFunction1<$ReadOnlyArray<T>, Array<T>>;
  declare function adjust<T>(index: number, fn: (a: T) => T, src: $ReadOnlyArray<T>): Array<T>;

  declare function all<T>(fn: UnaryPredicateFn<T>): CurriedFunction1<$ReadOnlyArray<T>, boolean>;
  declare function all<T>(fn: UnaryPredicateFn<T>, xs: $ReadOnlyArray<T>): boolean;

  declare function any<T>(fn: UnaryPredicateFn<T>): CurriedFunction1<$ReadOnlyArray<T>, boolean>;
  declare function any<T>(fn: UnaryPredicateFn<T>, xs: $ReadOnlyArray<T>): boolean;

  declare function aperture<T>(n: number): CurriedFunction1<$ReadOnlyArray<T>, Array<Array<T>>>;
  declare function aperture<T>(n: number, xs: $ReadOnlyArray<T>): Array<Array<T>>;

  declare function append<A, E>(A, $ReadOnlyArray<E>): Array<E|A>;
  declare function append<A, E>(A): CurriedFunction1<$ReadOnlyArray<E>, Array<E|A>>;

  declare function prepend<E>(x: E, xs: $ReadOnlyArray<E>): Array<E>;
  declare function prepend<E>(x: E): (xs: $ReadOnlyArray<E>) => Array<E>;

  declare function chain<A, B>(f: (x: A) => B[], xs: $ReadOnlyArray<A>): B[]
  declare function chain<A, B>(f: (x: A) => B[]): (xs: $ReadOnlyArray<A>) => B[]

  // Additional chain functionality documented at https://ramdajs.com/docs/#chain:
  //
  // Dispatches to the chain method of the second argument, if present, according to the FantasyLand Chain spec (https://github.com/fantasyland/fantasy-land#chain).
  //
  // If second argument is a function, chain(f, g)(x) is equivalent to f(g(x), x).
  //
  // Acts as a transducer if a transformer is given in list position.
  declare function chain<A, B, R>(f: (x: A, y: B) => R, g: (y: B) => A):(y: B) => R;

  declare function concat<A, B>(x: $ReadOnlyArray<A>, y: $ReadOnlyArray<B>): Array<A | B>;
  declare function concat<A, B>(x: $ReadOnlyArray<A>): CurriedFunction1<$ReadOnlyArray<B>, Array<A | B>>;

  declare function concat(x: string, y: string): string;
  declare function concat(x: string): CurriedFunction1<string, string>;

  declare type Includes =
    & ((string, string) => boolean)
    & ((string) => ((string => boolean)))
    & (<A, T: $ReadOnlyArray<A> | Array<A>>(a: A) => (b: T) => boolean)
    & (<A, T: $ReadOnlyArray<A> | Array<A>>(a: A, b: T) => boolean)

  declare var includes: Includes;

  declare function drop(n: number): (xs: string) => string;
  declare function drop(n: number, xs: string): string;
  declare function drop<V, T: $ReadOnlyArray<V>>(n: number): (xs: T) => V[];
  declare function drop<V, T: $ReadOnlyArray<V>>(n: number, xs: T): V[];

  declare function dropLast(n: number): (xs: string) => string;
  declare function dropLast(n: number, xs: string): string;
  declare function dropLast<V, T: $ReadOnlyArray<V>>(n: number): (xs: T) => V[];
  declare function dropLast<V, T: $ReadOnlyArray<V>>(n: number, xs: T): V[];

  declare function dropLastWhile(fn: UnaryPredicateFn<string>): (xs: string) => string;
  declare function dropLastWhile(fn: UnaryPredicateFn<string>, xs: string): string;
  declare function dropLastWhile<V, T: $ReadOnlyArray<V>>(fn: UnaryPredicateFn<V>): (xs: T) => V[];
  declare function dropLastWhile<V, T: $ReadOnlyArray<V>>(fn: UnaryPredicateFn<V>, xs: T): V[];

  declare function dropWhile(fn: UnaryPredicateFn<string>): (xs: string) => string;
  declare function dropWhile(fn: UnaryPredicateFn<string>, xs: string): string;
  declare function dropWhile<V, T: $ReadOnlyArray<V>>(fn: UnaryPredicateFn<V>): (xs: T) => V[];
  declare function dropWhile<V, T: $ReadOnlyArray<V>>(fn: UnaryPredicateFn<V>, xs: T): V[];

  declare function dropRepeats<V>(xs: $ReadOnlyArray<V>): V[];

  declare function dropRepeatsWith<V>(fn: BinaryPredicateFn<V>): (xs: $ReadOnlyArray<V>) => V[];
  declare function dropRepeatsWith<V>(fn: BinaryPredicateFn<V>, xs: $ReadOnlyArray<V>): V[];

  declare function groupBy<T>(fn: (x: T) => string, xs: $ReadOnlyArray<T>): { [key: string]: Array<T>, ... };
  declare function groupBy<T>(fn: (x: T) => string): CurriedFunction1<$ReadOnlyArray<T>, { [string]: Array<T>, ... }>;

  declare function groupWith<V>(fn: BinaryPredicateFn<V>): (xs: $ReadOnlyArray<V>) => V[][];
  declare function groupWith<V>(fn: BinaryPredicateFn<V>, xs: $ReadOnlyArray<V>): V[][];
  declare function groupWith(fn: BinaryPredicateFn<string>): (xs: $ReadOnlyArray<string>) => string[];
  declare function groupWith(fn: BinaryPredicateFn<string>, xs: $ReadOnlyArray<string>): string[];

  declare function head<T, V: $ReadOnlyArray<T>>(xs: V): $ElementType<V, 0>;
  declare function head(xs: string): string;

  declare function into<I, T, A: $ReadOnlyArray<T>, R>(
    accum: R,
    xf: (a: A) => I,
    input: A
  ): R;
  declare function into<I, T, A: $ReadOnlyArray<T>, R>(
    accum: Transformer<I, R>,
    xf: (a: A) => R,
    input: A
  ): R;

  declare function indexOf<E>(x: ?E, xs: $ReadOnlyArray<E>): number;
  declare function indexOf<E>(x: ?E): (xs: $ReadOnlyArray<E>) => number;

  declare function indexBy<V>(fn: (x: V) => string): (xs: $ReadOnlyArray<V>) => { [key: string]: V, ... };
  declare function indexBy<V>(fn: (x: V) => string, xs: $ReadOnlyArray<V>): { [key: string]: V, ... };

  declare function insert<T>(index: number): (
    & ((elem: T) => (src: $ReadOnlyArray<T>) => Array<T>)
    & ((elem: T, src: $ReadOnlyArray<T>) => Array<T>)
  );
  declare function insert<T>(index: number, elem: T): (src: $ReadOnlyArray<T>) => Array<T>;
  declare function insert<T>(index: number, elem: T, src: $ReadOnlyArray<T>): Array<T>;

  declare function insertAll<T, S>(index: number): (
    & ((elem: $ReadOnlyArray<S>) => (src: $ReadOnlyArray<T>) => Array<S | T>)
    & ((elem: $ReadOnlyArray<S>, src: $ReadOnlyArray<T>) => Array<S | T>)
  );
  declare function insertAll<T, S>(index: number, elems: $ReadOnlyArray<S>): (src: $ReadOnlyArray<T>) => Array<S | T>;
  declare function insertAll<T, S>(index: number, elems: $ReadOnlyArray<S>, src: $ReadOnlyArray<T>): Array<S | T>;

  declare function join(x: string, xs: $ReadOnlyArray<string | number>): string;
  declare function join(x: string): (xs: $ReadOnlyArray<string | number>) => string;

  declare function last<T>(xs: $ReadOnlyArray<T>): ?T;
  declare function last(xs: string): string;

  declare function none<T>(fn: UnaryPredicateFn<T>, xs: $ReadOnlyArray<T>): boolean;
  declare function none<T>(fn: UnaryPredicateFn<T>): (xs: $ReadOnlyArray<T>) => boolean;

  declare function nth<V>(i: number, xs: $ReadOnlyArray<V>): ?V;
  declare function nth(i: number, xs: string): string;
  declare function nth<V>(i: number): (
    & ((xs: string) => string)
    & ((xs: $ReadOnlyArray<V>) => ?V)
  );

  declare type Find = (
    & (<V>(fn: UnaryPredicateFn<V>) => (xs: $ReadOnlyArray<V>) => ?V)
    & (<V>(fn: UnaryPredicateFn<V>, xs: $ReadOnlyArray<V>) => ?V)
  );

  declare var find: Find;

  declare function findLast<V>(fn: UnaryPredicateFn<V>): (xs: $ReadOnlyArray<V>) => ?V | O;
  declare function findLast<V>(fn: UnaryPredicateFn<V>, xs: $ReadOnlyArray<V>): ?V;

  declare function findIndex<K, V, T: Array<V> | { [key: K]: V, ... }>(
    fn: UnaryPredicateFn<V>,
  ): (xs: T) => number;
  declare function findIndex<K, V, T: Array<V> | { [key: K]: V, ... }>(
    fn: UnaryPredicateFn<V>,
    xs: T
  ): number;

  declare function findLastIndex<K, V>(fn: UnaryPredicateFn<V>): (xs: $ReadOnlyArray<V>) => number;
  declare function findLastIndex<K, V>(fn: UnaryPredicateFn<V>, xs: $ReadOnlyArray<V>): number;

  declare function forEach<T, V>(fn: (x: T) => mixed, xs: $ReadOnlyArray<T>): Array<T>;
  declare function forEach<T, V>(fn: (x: T) => mixed): (xs: $ReadOnlyArray<T>) => Array<T>;

  declare function forEachObjIndexed<O, K: $Keys<O>, V: $Values<O>>(
    fn: (val: V, key: K, o: O) => mixed,
    o: O
  ): O;
  declare function forEachObjIndexed<O, K: $Keys<O>, V: $Values<O>>(
    fn: (val: V, key: K, o: O) => mixed,
  ): O => O;

  declare function lastIndexOf<E>(x: E, xs: $ReadOnlyArray<E>): number;
  declare function lastIndexOf<E>(x: E): (xs: $ReadOnlyArray<E>) => number;

  declare var map: {
    <T, R, FN: (x: T) => R, SR, S: { +map: FN => SR, ... }>(fn: FN, xs: S): SR,

    <T, R, FN: (x: T) => R>(fn: FN): (
      (<SR, S: { +map: FN => SR, ... }>(xs: S) => SR) &
      ((xs: { +[key: string]: T, ... }) => { [key: string]: R, ... }) &
      ((xs: $ReadOnlyArray<T> | Array<T>) => Array<R>)
    ),
    <T, R>(fn: (x: T) => R, xs: $ReadOnlyArray<T>): Array<R>,
    <T, R>(fn: (x: T) => R, xs: { +[key: string]: T, ... }): { [key: string]: R, ... },
    ...
  };

  declare type AccumIterator<A, B, R> = (acc: R, x: A) => [R, B];
  declare function mapAccum<A, B, R>(
    fn: AccumIterator<A, B, R>,
    acc: R,
    xs: $ReadOnlyArray<A>
  ): [R, Array<B>];
  declare function mapAccum<A, B, R>(
    fn: AccumIterator<A, B, R>,
  ): (acc: R, xs: $ReadOnlyArray<A>) => [R, Array<B>];

  declare function mapAccumRight<A, B, R>(
    fn: AccumIterator<A, B, R>,
    acc: R,
    xs: $ReadOnlyArray<A>
  ): [R, Array<B>];
  declare function mapAccumRight<A, B, R>(
    fn: AccumIterator<A, B, R>,
  ): (acc: R, xs: $ReadOnlyArray<A>) => [R, Array<B>];

  declare function intersperse<E>(x: E, xs: $ReadOnlyArray<E>): Array<E>;
  declare function intersperse<E>(
    x: E,
  ): (xs: $ReadOnlyArray<E>) => Array<E>;

  declare function pair<A, B>(a: A, b: B): [A, B];
  declare function pair<A, B>(a: A): (b: B) => [A, B];

  declare function partition<V>(fn: UnaryPredicateFn<V>, xs: $ReadOnlyArray<V>): [V[], V[]];
  declare function partition<O, V: $Values<O>>(fn: UnaryPredicateFn<V>, xs: O): [$Shape<O>, $Shape<O>];
  declare function partition<V>(fn: UnaryPredicateFn<V>): ((xs: $ReadOnlyArray<V>) => [V[], V[]]);
  declare function partition<O, V>(fn: UnaryPredicateFn<V>): ((xs: O) => [$Shape<O>, $Shape<O>]);

  declare function pluck<
    V,
    K: $Keys<V>,
  >(key: K, list: $ReadOnlyArray<V>): Array<$ElementType<V, K>>;
  declare function pluck<
    V,
    K: $Keys<V>,
  >(key: K): (list: $ReadOnlyArray<V>) => Array<$ElementType<V, K>>;
  declare function pluck<
    T,
    V: $ReadOnlyArray<T>,
  >(key: number, list: $ReadOnlyArray<V>): Array<$ElementType<V, number>>;
  declare function pluck<
    T,
    V: $ReadOnlyArray<V>,
  >(key: number): (list: $ReadOnlyArray<V>) => Array<$ElementType<V, number>>;

  declare var range: CurriedFunction2<number, number, Array<number>>;

  declare function reduced<T>(x: T): $npm$ramda$Reduced<T>;

  declare function remove<T>(
    from: number,
  ): ((to: number) => (src: $ReadOnlyArray<T>) => Array<T>) &
    ((to: number, src: $ReadOnlyArray<T>) => Array<T>);
  declare function remove<T>(
    from: number,
    to: number,
  ): (src: $ReadOnlyArray<T>) => Array<T>;
  declare function remove<T>(from: number, to: number, src: $ReadOnlyArray<T>): Array<T>;

  declare function repeat<T>(x: T, times: number): Array<T>;
  declare function repeat<T>(x: T): (times: number) => Array<T>;

  declare function slice(from: number): (
    & ((to: number) => (
        & (<V>(src: $ReadOnlyArray<V>) => V[])
        & ((src: string) => string)
    ))
    & (<V>(to: number, src: $ReadOnlyArray<V>) => V[])
    & ((to: number, src: string) => string)
  );
  declare function slice(from: number, to: number): (
    & (<V>(src: $ReadOnlyArray<V>) => V[])
    & ((src: string) => string)
  );
  declare function slice<V>(
    from: number,
    to: number,
    src: $ReadOnlyArray<V>,
  ): V[];
  declare function slice(
    from: number,
    to: number,
    src: string,
  ): string;

  declare function sort<V, T: Array<V>>(fn: (a: V, b: V) => number, xs: $ReadOnlyArray<V>): T;
  declare function sort<V, T: Array<V>>(
    fn: (a: V, b: V) => number,
  ): (xs: $ReadOnlyArray<V>) => T;

  declare function sortWith<V, T: Array<V>>(
    fns: $ReadOnlyArray<(a: V, b: V) => number>,
    xs: $ReadOnlyArray<V>
  ): T;
  declare function sortWith<V, T: Array<V>>(
    fns: $ReadOnlyArray<(a: V, b: V) => number>,
  ): (xs: $ReadOnlyArray<V>) => T;

  /**
   * In the examples for ascend and descend, its result is plugged into sort.
   * In order for this to function properly ascend and descend need to yield a
   * function that can take two arguments. In our case we'll declare the result
   * function as curried, which matches the ramda behavior.
   */
  declare type MakeComparator = <A, B>(A => B) => CurriedFunction2<A, A, number>

  declare var descend: MakeComparator
  declare var ascend: MakeComparator

  declare function times<T>(fn: (i: number) => T, n: number): Array<T>;
  declare function times<T>(
    fn: (i: number) => T,
  ): (n: number) => Array<T>;

  declare function take<V, T: Array<V> | string>(n: number, xs: T): T;
  declare function take<V, T: Array<V> | string>(n: number): (xs: T) => T;

  declare function takeLast<V, T: Array<V> | string>(n: number, xs: T): T;
  declare function takeLast<V, T: Array<V> | string>(n: number): (xs: T) => T;

  declare function takeLastWhile<V, T: Array<V>>(
    fn: UnaryPredicateFn<V>,
    xs: $ReadOnlyArray<V>
  ): T;
  declare function takeLastWhile<V, T: Array<V>>(
    fn: UnaryPredicateFn<V>
  ): (xs: $ReadOnlyArray<V>) => T;

  declare function takeWhile<V, T: Array<V>>(fn: UnaryPredicateFn<V>, xs: $ReadOnlyArray<V>): T;
  declare function takeWhile<V, T: Array<V>>(
    fn: UnaryPredicateFn<V>
  ): (xs: $ReadOnlyArray<V>) => T;

  declare function unfold<T, R>(
    fn: (seed: T) => [R, T] | boolean,
  ): (seed: T) => Array<R>;
  declare function unfold<T, R>(
    fn: (seed: T) => [R, T] | boolean,
    seed: T
  ): Array<R>;

  declare function uniqBy<T, V>(
    fn: (x: T) => V,
  ): (xs: $ReadOnlyArray<T>) => Array<T>;
  declare function uniqBy<T, V>(fn: (x: T) => V, xs: $ReadOnlyArray<T>): Array<T>;

  declare function uniqWith<T>(
    fn: BinaryPredicateFn<T>,
  ): (xs: $ReadOnlyArray<T>) => Array<T>;
  declare function uniqWith<T>(
    fn: BinaryPredicateFn<T>,
    xs: $ReadOnlyArray<T>
  ): Array<T>;

  declare function update<T>(
    index: number,
  ): ((elem: T) => (src: $ReadOnlyArray<T>) => Array<T>) &
    ((elem: T, src: $ReadOnlyArray<T>) => Array<T>);
  declare function update<T>(
    index: number,
    elem: T,
  ): (src: $ReadOnlyArray<T>) => Array<T>;
  declare function update<T>(index: number, elem: T, src: $ReadOnlyArray<T>): Array<T>;

  // TODO `without` as a transducer
  declare function without<T, E>($ReadOnlyArray<E>, $ReadOnlyArray<E|T>): Array<E|T>;
  declare function without<T, E>($ReadOnlyArray<E>): CurriedFunction1<$ReadOnlyArray<E|T>, Array<E|T>>;

  declare function xprod<T, S>(xs: $ReadOnlyArray<T>, ys: $ReadOnlyArray<S>): Array<[T, S]>;
  declare function xprod<T, S>(
    xs: $ReadOnlyArray<T>,
  ): (ys: $ReadOnlyArray<S>) => Array<[T, S]>;

  declare function zip<T, S>(xs: $ReadOnlyArray<T>, ys: $ReadOnlyArray<S>): Array<[T, S]>;
  declare function zip<T, S>(
    xs: $ReadOnlyArray<T>,
  ): (ys: $ReadOnlyArray<S>) => Array<[T, S]>;

  declare function zipObj<T: string, S>(
    xs: $ReadOnlyArray<T>,
    ys: $ReadOnlyArray<S>
  ): { [key: T]: S, ... };
  declare function zipObj<T: string, S>(
    xs: $ReadOnlyArray<T>,
  ): (ys: $ReadOnlyArray<S>) => { [key: T]: S, ... };

  declare type NestedArray<T> = $ReadOnlyArray<T | NestedArray<T>>;
  declare function flatten<T>(xs: NestedArray<T>): Array<T>;

  declare function fromPairs<T, V>(pairs: $ReadOnlyArray<[T, V]>): { [key: string]: V, ... };

  declare function init<T>(xs: $ReadOnlyArray<T>): T[];
  declare function init(xs: string): string;

  declare function length<T>(xs: $ReadOnlyArray<T> | string | { length: number, ... }): number;

  declare function reverse<T, V: Array<T> | string>(xs: $ReadOnlyArray<T>): V;

  declare type Reduce = (
    & (
      <A, B, I = A>(fn: (acc: A | I, elm: B) => $npm$ramda$Reduced<A> | A) => (
        & ((init: I) => (xs: $ReadOnlyArray<B>) => (A | I))
        & ((init: I, xs: $ReadOnlyArray<B>) => (A | I))
      )
    )
    & (
      <A, B, I = A>(fn: (acc: A | I, elm: B) => $npm$ramda$Reduced<A> | A, init: I) => (xs: $ReadOnlyArray<B>) => (A | I)
    )
    & (
      <A, B, I = A>(fn: (acc: A | I, elm: B) => $npm$ramda$Reduced<A> | A, init: I, xs: $ReadOnlyArray<B>) => (A | I)
    )
  );

  declare var reduce: Reduce;

  declare function reduceBy<A, B>(
    fn: (acc: B, elem: A) => B,
  ): ((acc: B) => ((
    keyFn: (elem: A) => string,
  ) => (xs: Array<A>) => { [key: string]: B, ... }) &
    ((keyFn: (elem: A) => string, xs: Array<A>) => { [key: string]: B, ... })) &
    ((
      acc: B,
      keyFn: (elem: A) => string,
    ) => (xs: Array<A>) => { [key: string]: B, ... }) &
    ((
      acc: B,
      keyFn: (elem: A) => string,
      xs: Array<A>
    ) => { [key: string]: B, ... });
  declare function reduceBy<A, B>(
    fn: (acc: B, elem: A) => B,
    acc: B,
  ): ((
    keyFn: (elem: A) => string,
  ) => (xs: Array<A>) => { [key: string]: B, ... }) &
    ((keyFn: (elem: A) => string, xs: Array<A>) => { [key: string]: B, ... });
  declare function reduceBy<A, B>(
    fn: (acc: B, elem: A) => B,
    acc: B,
    keyFn: (elem: A) => string
  ): (xs: Array<A>) => { [key: string]: B, ... };
  declare function reduceBy<A, B>(
    fn: (acc: B, elem: A) => B,
    acc: B,
    keyFn: (elem: A) => string,
    xs: Array<A>
  ): { [key: string]: B, ... };

  declare function reduceRight<A, B>(
    fn: (elem: B, acc: A) => A,
  ): ((init: A, xs: Array<B>) => A) &
    ((init: A) => (xs: Array<B>) => A);
  declare function reduceRight<A, B>(
    fn: (elem: B, acc: A) => A,
    init: A,
  ): (xs: Array<B>) => A;
  declare function reduceRight<A, B>(
    fn: (elem: B, acc: A) => A,
    init: A,
    xs: Array<B>
  ): A;

  declare function reduceWhile<A, B>(pred: (acc: A, curr: B) => boolean): ((
    fn: (a: A, b: B) => A,
  ) => (init: A) => (
    xs: Array<B>
  ) => A &
    ((
      fn: (a: A, b: B) => A,
    ) => (init: A, xs: Array<B>) => A)) &
    ((
      fn: (a: A, b: B) => A,
      init: A,
    ) => (xs: Array<B>) => A) &
    ((fn: (a: A, b: B) => A, init: A, xs: Array<B>) => A);

  declare function reduceWhile<A, B>(
    pred: (acc: A, curr: B) => boolean,
    fn: (a: A, b: B) => A,
  ): ((init: A) => (xs: Array<B>) => A) &
    ((init: A, xs: Array<B>) => A);

  declare function reduceWhile<A, B>(
    fn: (acc: A, curr: B) => boolean,
    fn: (a: A, b: B) => A,
    init: A,
    xs: Array<B>
  ): A;

  declare function scan<A, B>(
    fn: (acc: A, elem: B) => A,
  ): ((init: A, xs: Array<B>) => Array<A>) &
    ((init: A) => (xs: Array<B>) => Array<A>);
  declare function scan<A, B>(
    fn: (acc: A, elem: B) => A,
    init: A,
  ): (xs: Array<B>) => Array<A>;
  declare function scan<A, B>(
    fn: (acc: A, elem: B) => A,
    init: A,
    xs: Array<B>
  ): Array<A>;

  declare function splitAt<V>(i: number, xs: $ReadOnlyArray<V>): [V[], V[]];
  declare function splitAt(i: number, xs: string): [string, string];
  declare function splitAt(i: number): (
    & (string => [string, string])
    & <V>($ReadOnlyArray<V>) => [V[], V[]]
  );

  declare function splitEvery<V>(i: number, xs: $ReadOnlyArray<V>): V[][];
  declare function splitEvery(i: number, xs: string): string[];
  declare function splitEvery(i: number): (
    & (string => string[])
    & <V>($ReadOnlyArray<V>) => V[][]
  );

  declare function splitWhen<V>(fn: UnaryPredicateFn<V>, xs: $ReadOnlyArray<V>): [V[], V[]];
  declare function splitWhen(fn: UnaryPredicateFn<string>, xs: string): [string, string];
  declare function splitWhen<V>(fn: V => boolean): (
  	& ($ReadOnlyArray<V> => [V[], V[]])
  	& ((V & string) => [string, string])
  );

  declare function tail<V>(xs: $ReadOnlyArray<V>): V[];
  declare function tail<V>(xs: string): string;

  declare function transpose<T>(xs: $ReadOnlyArray<$ReadOnlyArray<T>>): Array<Array<T>>;

  declare function uniq<T>(xs: $ReadOnlyArray<T>): Array<T>;

  declare function unnest<T>(xs: $ReadOnlyArray<T | $ReadOnlyArray<T>>): $ReadOnlyArray<T>;

  declare function zipWith<T, S, R>(
    fn: (a: T, b: S) => R,
  ): ((xs: $ReadOnlyArray<T>, ys: $ReadOnlyArray<S>) => Array<R>) &
    ((xs: $ReadOnlyArray<T>) => (ys: $ReadOnlyArray<S>) => Array<R>);
  declare function zipWith<T, S, R>(
    fn: (a: T, b: S) => R,
    xs: $ReadOnlyArray<T>,
  ): (ys: $ReadOnlyArray<S>) => Array<R>;
  declare function zipWith<T, S, R>(
    fn: (a: T, b: S) => R,
    xs: $ReadOnlyArray<T>,
    ys: $ReadOnlyArray<S>
  ): Array<R>;

  // *Relation
  declare function equals<T>(x: T): (y: T) => boolean;
  declare function equals<T>(x: T, y: T): boolean;

  declare function eqBy<A, B>(
    fn: (x: A) => B,
      ): ((x: A, y: A) => boolean) &
    ((x: A) => (y: A) => boolean);
  declare function eqBy<A, B>(
    fn: (x: A) => B,
    x: A,
      ): (y: A) => boolean;
  declare function eqBy<A, B>(fn: (x: A) => B, x: A, y: A): boolean;

  // Flow cares about the order in which these appear. Generally function
  // siguatures should go from smallest arity to largest arity.
  declare type PropEq = (
    & (
        <T>(prop: $Keys<T>) => (
          & ((val: mixed) => (obj: T) => boolean)
          & ((val: mixed, obj: T) => boolean)
        )
    )
    & (
      <T>(prop: $Keys<T>, val: mixed) => (obj: T) => boolean
    )
    & (
      <T>(prop: $Keys<T>, val: mixed, obj: T) => boolean
    )
    // Array variants.
    & (
      <T>(prop: number) => (
        & ((val: mixed) => (obj: $ReadOnlyArray<T>) => boolean)
        & ((val: mixed, obj: $ReadOnlyArray<T>) => boolean)
      )
    )
    & (
      <T>(prop: number, val: mixed) => (obj: $ReadOnlyArray<T>) => boolean
    )
    & (
      <T>(prop: number, val: mixed, obj: $ReadOnlyArray<T>) => boolean
    )
  );
  declare var propEq: PropEq;

  declare function pathEq<
    T: string | number, E, O: { ... } | $ReadOnlyArray<E>
  >(path: $ReadOnlyArray<T>): (
    & ((val: mixed) => (o: O) => boolean)
    & ((val: mixed, o: O) => boolean)
  );
  declare function pathEq<
    T: string | number, E, O: { ... } | $ReadOnlyArray<E>
  >(path: $ReadOnlyArray<T>, val: mixed): (o: O) => boolean;
  declare function pathEq<
    T: string | number, E, O: { ... } | $ReadOnlyArray<E>
  >(path: $ReadOnlyArray<T>, val: mixed, O): boolean;

  declare function clamp<T: number | string | Date>(
    min: T,
  ): ((max: T) => (v: T) => T) & ((max: T, v: T) => T);
  declare function clamp<T: number | string | Date>(
    min: T,
    max: T,
  ): (v: T) => T;
  declare function clamp<T: number | string | Date>(min: T, max: T, v: T): T;

  declare function countBy<T>(
    fn: (x: T) => string,
  ): (list: $ReadOnlyArray<T>) => { [key: string]: number, ... };
  declare function countBy<T>(
    fn: (x: T) => string,
    list: $ReadOnlyArray<T>
  ): { [key: string]: number, ... };

  declare function difference<T>(
    xs1: $ReadOnlyArray<T>,
  ): (xs2: $ReadOnlyArray<T>) => Array<T>;
  declare function difference<T>(xs1: $ReadOnlyArray<T>, xs2: $ReadOnlyArray<T>): Array<T>;

  declare function differenceWith<T>(
    fn: BinaryPredicateFn<T>,
  ): ((xs1: $ReadOnlyArray<T>) => (xs2: $ReadOnlyArray<T>) => Array<T>) &
    ((xs1: $ReadOnlyArray<T>, xs2: $ReadOnlyArray<T>) => Array<T>);
  declare function differenceWith<T>(
    fn: BinaryPredicateFn<T>,
    xs1: $ReadOnlyArray<T>,
  ): (xs2: $ReadOnlyArray<T>) => Array<T>;
  declare function differenceWith<T>(
    fn: BinaryPredicateFn<T>,
    xs1: $ReadOnlyArray<T>,
    xs2: $ReadOnlyArray<T>
  ): Array<T>;

  declare function eqBy<T>(fn: (x: T) => T, x: T, y: T): boolean;
  declare function eqBy<T>(fn: (x: T) => T): (x: T, y: T) => boolean;
  declare function eqBy<T>(fn: (x: T) => T, x: T): (y: T) => boolean;
  declare function eqBy<T>(fn: (x: T) => T): (x: T) => (y: T) => boolean;

  declare type RelationCompare =
    & ((x: number) => (y: number) => bool)
    & ((x: number, y: number) => bool)
    & ((x: string) => (y: string) => bool)
    & ((x: string, y: string) => bool)

  declare var gt: RelationCompare
  declare var gte: RelationCompare
  declare var lt: RelationCompare
  declare var lte: RelationCompare

  declare function identical<T>(x: T): (y: T) => boolean;
  declare function identical<T>(x: T, y: T): boolean;

  declare function innerJoin<A, B>(
    pred: (a: A, b: B) => boolean,
  ): (
    a: $ReadOnlyArray<A>,
  ) => (b: $ReadOnlyArray<B>) => Array<A> & ((a: $ReadOnlyArray<A>, b: $ReadOnlyArray<B>) => Array<A>);
  declare function innerJoin<A, B>(
    pred: (a: A, b: B) => boolean,
    a: $ReadOnlyArray<A>,
  ): (b: $ReadOnlyArray<B>) => Array<A>;
  declare function innerJoin<A, B>(
    pred: (a: A, b: B) => boolean,
    a: $ReadOnlyArray<A>,
    b: $ReadOnlyArray<B>
  ): Array<A>;

  declare function intersection<T>(x: $ReadOnlyArray<T>, y: $ReadOnlyArray<T>): Array<T>;
  declare function intersection<T>(x: $ReadOnlyArray<T>): (y: $ReadOnlyArray<T>) => Array<T>;

  declare function max<T>(x: T): (y: T) => T;
  declare function max<T>(x: T, y: T): T;

  declare function maxBy<T, V>(
    fn: (x: T) => V,
  ): ((x: T, y: T) => T) & ((x: T) => (y: T) => T);
  declare function maxBy<T, V>(
    fn: (x: T) => V,
    x: T,
  ): (y: T) => T;
  declare function maxBy<T, V>(fn: (x: T) => V, x: T, y: T): T;

  declare function min<T>(x: T): (y: T) => T;
  declare function min<T>(x: T, y: T): T;

  declare function minBy<T, V>(
    fn: (x: T) => V,
  ): ((x: T, y: T) => T) & ((x: T) => (y: T) => T);
  declare function minBy<T, V>(fn: (x: T) => V, x: T): (y: T) => T;
  declare function minBy<T, V>(fn: (x: T) => V, x: T, y: T): T;

  declare function sortBy<T, V>(
    fn: (x: T) => V,
  ): (x: $ReadOnlyArray<T>) => Array<T>;
  declare function sortBy<T, V>(fn: (x: T) => V, x: $ReadOnlyArray<T>): Array<T>;

  declare function symmetricDifference<T>(
    x: $ReadOnlyArray<T>,
  ): (y: $ReadOnlyArray<T>) => Array<T>;
  declare function symmetricDifference<T>(x: $ReadOnlyArray<T>, y: $ReadOnlyArray<T>): Array<T>;

  declare function symmetricDifferenceWith<T>(
    fn: BinaryPredicateFn<T>,
  ): ((x: $ReadOnlyArray<T>) => (y: Array<T>) => Array<T>) &
    ((x: $ReadOnlyArray<T>, y: $ReadOnlyArray<T>) => Array<T>);
  declare function symmetricDifferenceWith<T>(
    fn: BinaryPredicateFn<T>,
    x: $ReadOnlyArray<T>,
  ): (y: $ReadOnlyArray<T>) => Array<T>;
  declare function symmetricDifferenceWith<T>(
    fn: BinaryPredicateFn<T>,
    x: $ReadOnlyArray<T>,
    y: $ReadOnlyArray<T>
  ): Array<T>;

  declare function union<T>(
    x: $ReadOnlyArray<T>,
  ): (y: $ReadOnlyArray<T>) => Array<T>;
  declare function union<T>(x: $ReadOnlyArray<T>, y: $ReadOnlyArray<T>): Array<T>;

  declare function unionWith<T>(
    fn: BinaryPredicateFn<T>,
  ): ((x: $ReadOnlyArray<T>) => (y: Array<T>) => Array<T>) &
    ((x: $ReadOnlyArray<T>, y: $ReadOnlyArray<T>) => Array<T>);
  declare function unionWith<T>(
    fn: BinaryPredicateFn<T>,
    x: $ReadOnlyArray<T>,
  ): (y: $ReadOnlyArray<T>) => Array<T>;
  declare function unionWith<T>(
    fn: BinaryPredicateFn<T>,
    x: $ReadOnlyArray<T>,
    y: $ReadOnlyArray<T>
  ): Array<T>;

  // *Object
  declare var assoc: {
    <T, S>(
      key: string,
      ...args: Array<void>
    ):
      & ((val: T) => (src: S) => ({ [k: string]: T, ... }))
      & ((val: T, src: S) => ({ [k: string]: T, ... } & S)),
    <T, S>(
      key: string,
      val: T,
      ...args: Array<void>
    ): (src: S) => ({ [k: string]: T, ... } & S),
    <T, S: { ... }, K: $Keys<S>> (key: K, val: T, src: S):      ({ [k: string]: T, ... } & S),
    <T, S: { ... }>              (key: string, val: T, src: S): ({
      [k: string]: T,
      ...$Exact<S>,
      ...
    }),
    ...
  };

  declare function assocPath<T: string | number, S, V>(
    key: $ReadOnlyArray<T>,
    ...args: Array<void>
  ): ((val: V) => (src: S) => { [k: string]: V, ... }) &
    ((val: V) => (src: S) => { [k: string]: V, ... } & S);
  declare function assocPath<T: string | number, S, V>(
    key: $ReadOnlyArray<T>,
    val: V,
    ...args: Array<void>
  ): (src: S) => { [k: string]: V, ... } & S;
  declare function assocPath<T: string | number, S, V>(
    key: $ReadOnlyArray<T>,
    val: V,
    src: S
  ): { [k: string]: V, ... } & S;

  declare function clone<T>(src: T): $Shape<T>;

  declare function dissoc<T>(
    key: string,
    ...args: Array<void>
  ): (src: { [k: string]: T, ... }) => { [k: string]: T, ... };
  declare function dissoc<T>(
    key: string,
    src: { [k: string]: T, ... }
  ): { [k: string]: T, ... };

  declare function dissocPath<T: string | number, U>(
    key: $ReadOnlyArray<T>,
    ...args: Array<void>
  ): (src: { [k: string]: U, ... }) => { [k: string]: U, ... };
  declare function dissocPath<T: string | number, U>(
    key: $ReadOnlyArray<T>,
    src: { [k: string]: U, ... }
  ): { [k: string]: U, ... };

  declare function evolve(NestedObject<Function>): { ... } => { ... };
  declare function evolve(NestedObject<Function>, { ... }): { ... };

  declare function eqProps(
    key: string,
    ...args: Array<void>
  ): ((o1: { ... }) => (o2: { ... }) => boolean) &
    ((o1: { ... }, o2: { ... }) => boolean);
  declare function eqProps(
    key: string,
    o1: { ... },
    ...args: Array<void>
  ): (o2: { ... }) => boolean;
  declare function eqProps(key: string, o1: { ... }, o2: { ... }): boolean;

  declare function has(key: string): (o: ?{ ... }) => boolean;
  declare function has(key: string, o: ?{ ... }): boolean;

  declare function hasPath<T: string | number>(path: $ReadOnlyArray<T>): (o: { ... }) => boolean;
  declare function hasPath<T: string | number>(path: $ReadOnlyArray<T>, o: { ... }): boolean;

  declare function hasIn(key: string, o: { ... }): boolean;
  declare function hasIn(key: string): (o: { ... }) => boolean;

  declare function invert(o: { ... }): { [k: string]: Array<string>, ... };
  declare function invertObj(o: { ... }): { [k: string]: string, ... };

  declare function keys(o: ?{ ... }): Array<string>;

  declare type Lens<A, B, Fa: Functor<A>, Fb: Functor<B>> = (A => Fb) => Fb;
  /**
   * Because it is difficult to treat objects as if they are Functors, let's
   * just have a lens type that works with objects, since Ramda supports objects
   * as Functors in this context.
   */
  declare type LensObj<F, A, O> = (A => O) => O;

  declare var lens:
    & (<A, B, Fa, Fb>(
      getter: (f: Fa) => A) => (
      setter: (b: B, f: Fa) => Fb
    ) => LensObj<Fa, A, Fb>)
    & (<A, B, Fa, Fb>(
      getter: (f: Fa) => A,
      setter: (b: B, f: Fa) => Fb
    ) => LensObj<Fa, A, Fb>)
    & (<A, B, Fa: Functor<A>, Fb: Functor<B>>(
      getter: (f: Fa) => A) => (
      setter: (b: B, f: Fa) => Fb
    ) => Lens<A, B, Fa, Fb>)
    & (<A, B, Fa: Functor<A>, Fb: Functor<B>>(
      getter: (f: Fa) => A,
      setter: (b: B, f: Fa) => Fb
    ) => Lens<A, B, Fa, Fb>)

  declare function lensIndex<A, B, Fa: Functor<A>, Fb: Functor<B>, N: number, V: $ElementType<Fa, N>>(N): Lens<V, B, Fa, Fb>;

  /**
   * lensPath requires a tuple rather than an Array for its parameter. This
   * allows us to make rested $ElementType uses in order to walk down the object
   * hierarchy. This remains something TODO.
   */
  declare function lensPath<O, F, K: $Keys<F>>(p: [K]): LensObj<F, $ElementType<F, K>, O>;
  declare function lensPath<
    O, F,
    K0: $Keys<F>, E0: $ElementType<F, K0>,
    K1: $Keys<E0>
  >(p: [K0, K1]): LensObj<F, $ElementType<E0, K1>, O>;
  declare function lensPath<
    O, F,
    K0: $Keys<F>, E0: $ElementType<F, K0>,
    K1: $Keys<E0>, E1: $ElementType<E0, K1>,
    K2: $Keys<E1>
  >(p: [K0, K1, K2]): LensObj<F, $ElementType<E1, K2>, O>;
  declare function lensPath<
    O, F,
    K0: $Keys<F>, E0: $ElementType<F, K0>,
    K1: $Keys<E0>, E1: $ElementType<E0, K1>,
    K2: $Keys<E1>, E2: $ElementType<E1, K2>,
    K3: $Keys<E2>
  >(p: [K0, K1, K2, K3]): LensObj<F, $ElementType<E2, K3>, O>;
  declare function lensPath<
    O, F,
    K0: $Keys<F>, E0: $ElementType<F, K0>,
    K1: $Keys<E0>, E1: $ElementType<E0, K1>,
    K2: $Keys<E1>, E2: $ElementType<E1, K2>,
    K3: $Keys<E2>, E3: $ElementType<E2, K3>,
    K4: $Keys<E3>
  >(p: [K0, K1, K2, K3, K4]): LensObj<F, $ElementType<E3, K4>, O>;

  // declare function lensProp(str: string): Lens;
  declare function lensProp<O, F, K: $Keys<F>>(K): LensObj<F, $ElementType<F, K>, O>;

  declare function mapObjIndexed<A, B>(
    fn: (val: A, key: string, o: { ... }) => B,
    o: { [key: string]: A, ... }
  ): { [key: string]: B, ... };
  declare function mapObjIndexed<A, B>(
    fn: (val: A, key: string, o: { ... }) => B,
    ...args: Array<void>
  ): (o: { [key: string]: A, ... }) => { [key: string]: B, ... };

  declare type Merge =
    (<A, B>(a: A) => (b: B) => A & B) &
    (<A, B>(a: A, b: B) => A & B);

  declare var mergeLeft: Merge;
  declare var mergeDeepLeft: Merge;
  declare var mergeRight: Merge;

  declare function mergeAll<T>(
    os: $ReadOnlyArray<{ [k: string]: T, ... }>
  ): { [k: string]: T, ... };

  declare var mergeDeepRight: (<A, B>(a: A, b: B) => B & A) &
    (<A, B>(a: A) => (b: B) => B & A);

  declare type MergeWith = (<A, B, T: $Values<A> & $Values<B>>(
    fn: (a: T, b: T) => T,
    a: A,
    b: B
  ) => A & B) &
    (<A, B, T>(
      fn: (a: T, b: T) => T,
    ) => (a: A) => (b: B) => A & B) &
    (<A, B, T>(
      fn: (a: T, b: T) => T,
    ) => (a: A, b: B) => A & B) &
    (<A, B, T>(
      fn: (a: T, b: T) => T,
      a: A,
    ) => (b: B) => A & B);

  declare type MergeWithKey = (<
    A,
    B,
    S: $Keys<A> & $Keys<B>,
    T: $ElementType<A, $Keys<A>> & $ElementType<B, $Keys<B>>,
  >(
    fn: (s: S, a: T, b: T) => T,
    a: A,
    b: B
  ) => A & B) &
    (<S, T, A, B>(
      fn: (s: S, a: T, b: T) => T,
    ) => (a: A, b: B) => A & B) &
    (<S, T, A, B>(
      fn: (s: S, a: T, b: T) => T,
    ) => (a: A) => (b: B) => A & B) &
    (<S, T, A, B>(
      fn: (s: S, a: T, b: T) => T,
      a: A,
    ) => (b: B) => A & B);

  declare var mergeDeepWith: MergeWith;

  declare var mergeDeepWithKey: MergeWithKey;

  declare var mergeWith: MergeWith;

  declare var mergeWithKey: MergeWithKey;

  declare function objOf<T>(
    key: string,
  ): (val: T) => { [key: string]: T, ... };
  declare function objOf<T>(key: string, val: T): { [key: string]: T, ... };

  declare function omit<T: { ... }>(
    keys: $ReadOnlyArray<string>,
  ): (val: T) => $Shape<T>;
  declare function omit<T: { ... }>(keys: $ReadOnlyArray<string>, val: T): $Shape<T>;

  declare type Functor<A> =
    | { @@iterator(): Iterator<A>, ... }
    | FunctorObj<A>
    | FunctorFantasyLand<A>
    | Array<A>
    | $ReadOnlyArray<A>

  declare var over:
    & (<A, B, Oa, Ob>(lens: LensObj<Oa, A, B>) => CurriedFunction2<A => B, Oa, Ob>)
    & (<A, B, Oa, Ob>(lens: LensObj<Oa, A, B>, A => B) => CurriedFunction1<Oa, Ob>)
    & (<A, B, Oa, Ob>(lens: LensObj<Oa, A, B>, A => B, Oa) => Ob)
    & (<A, B, Fa: Functor<A>, Fb: Functor<B>>(lens: Lens<A, B, Fa, Fb>) => CurriedFunction2<A => B, Fa, Fb>)
    & (<A, B, Fa: Functor<A>, Fb: Functor<B>>(lens: Lens<A, B, Fa, Fb>, A => B) => CurriedFunction1<Fa, Fb>)
    & (<A, B, Fa: Functor<A>, Fb: Functor<B>>(lens: Lens<A, B, Fa, Fb>, A => B, Fa) => Fb)

  declare function path<T: string | number, V>(
    p: $ReadOnlyArray<T>,
  ): (o: NestedObject<V>) => V;
  declare function path<T: string | number, V>(
    p: $ReadOnlyArray<T>,
  ): (o: null | void) => void;
  declare function path<T: string | number, V>(
    p: $ReadOnlyArray<T>,
  ): (o: mixed) => ?V;
  declare function path<T: string | number, V, A: NestedObject<V>>(p: $ReadOnlyArray<T>, o: A): V;
  declare function path<T: string | number, V, A: null | void>(p: $ReadOnlyArray<T>, o: A): void;
  declare function path<T: string | number, V, A>(p: $ReadOnlyArray<T>, o: A): ?V;

  declare function path<V>(
    p: $ReadOnlyArray<string>,
  ): (o: NestedObject<V>) => V;
  declare function path<V>(
    p: $ReadOnlyArray<string>,
  ): (o: null | void) => void;
  declare function path<V>(
    p: $ReadOnlyArray<string>,
  ): (o: mixed) => ?V;
  declare function path<V, A: NestedObject<V>>(p: $ReadOnlyArray<string>, o: A): V;
  declare function path<V, A: null | void>(p: $ReadOnlyArray<string>, o: A): void;
  declare function path<V, A: mixed>(p: $ReadOnlyArray<string>, o: A): ?V;

  declare function pathOr<T, U: string | number, V, A: NestedObject<V>>(
    or: T,
  ): ((p: $ReadOnlyArray<U>) => (o: ?A) => V | T) &
    ((p: $ReadOnlyArray<U>, o: ?A) => V | T);
  declare function pathOr<T, U: string | number, V, A: NestedObject<V>>(
    or: T,
    p: $ReadOnlyArray<U>,
  ): (o: ?A) => V | T;
  declare function pathOr<T, U: string | number, V, A: NestedObject<V>>(
    or: T,
    p: $ReadOnlyArray<U>,
    o: ?A
  ): V | T;

  declare function pick<O, K: $ReadOnlyArray<$Keys<O>>>(
    keys: K,
  ): (val: O) => O;
  declare function pick<O, K: $ReadOnlyArray<$Keys<O>>>(
    keys: K,
    val: O
  ): O;

  declare function pickAll<A>(
    keys: $ReadOnlyArray<string>,
  ): (val: { [key: string]: A, ... }) => { [key: string]: ?A, ... };
  declare function pickAll<A>(
    keys: $ReadOnlyArray<string>,
    val: { [key: string]: A, ... }
  ): { [key: string]: ?A, ... };

  declare function pickBy<A>(
    fn: BinaryPredicateFn2<A, string>,
  ): (val: { [key: string]: A, ... }) => { [key: string]: A, ... };
  declare function pickBy<A>(
    fn: BinaryPredicateFn2<A, string>,
    val: { [key: string]: A, ... }
  ): { [key: string]: A, ... };

  declare function project<T>(
    keys: $ReadOnlyArray<string>,
  ): (val: $ReadOnlyArray<{ [key: string]: T, ... }>) => Array<{ [key: string]: T, ... }>;
  declare function project<T>(
    keys: $ReadOnlyArray<string>,
    val: $ReadOnlyArray<{ [key: string]: T, ... }>
  ): Array<{ [key: string]: T, ... }>;

  declare function prop<T: string, O>(
    key: T,
  ): (o: O) => $ElementType<O, T>;
  declare function prop<T: string, O>(
    __: $npm$ramda$Placeholder,
    o: O
  ): (key: T) => $ElementType<O, T>;
  declare function prop<T: string, O>(key: T, o: O): $ElementType<O, T>;

  declare function propOr<T, V, A: { [k: string]: V, ... }>(
    or: T,
  ): ((p: string) => (o: A) => V | T) &
    ((p: string, o: A) => V | T);
  declare function propOr<T, V, A: { [k: string]: V, ... }>(
    or: T,
    p: string,
  ): (o: A) => V | T;
  declare function propOr<T, V, A: { [k: string]: V, ... }>(
    or: T,
    p: string,
    o: A
  ): V | T;

  declare function keysIn(o: { ... }): Array<string>;

  declare function props<T: string, O>(
    keys: $ReadOnlyArray<T>,
  ): (o: O) => Array<$ElementType<O, T>>;
  declare function props<T: string, O>(
    keys: $ReadOnlyArray<T>,
    o: O
  ): Array<$ElementType<O, T>>;

  declare var set:
    & (<A, B, Oa, Ob>(lens: LensObj<Oa, A, B>) => (
      & (B => Oa => Ob)
      & ((B, Oa) => Ob)
    ))
    & (<A, B, Oa, Ob>(lens: LensObj<Oa, A, B>, B, Oa) => Ob)
    // NOTE: Other functor types might need to be directly supported here.
    & (<A, B, Fa: Array<A>>(lens: Lens<A, B, Fa, Array<B>>) => (
      & (B => Fa => Array<B>)
      & ((B, Fa) => Array<B>)
    ))
    & (<A, B, Fa: Array<A>>(lens: Lens<A, B, Fa, Array<B>>, B, Fa) => Array<B>)
    & (<A, B, Fa: Functor<A>, Fb: Functor<B>>(lens: Lens<A, B, Fa, Fb>) => (
      & (B => Fa => Fb)
      & ((B, Fa) => Fb)
    ))
    & (<A, B, Fa: Functor<A>, Fb: Functor<B>>(lens: Lens<A, B, Fa, Fb>, B, Fa) => Fb)

  declare function toPairs<T, O: { [k: string]: T, ... }>(
    o: O
  ): Array<[$Keys<O>, T]>;

  declare function toPairsIn<T, O: { [k: string]: T, ... }>(
    o: O
  ): Array<[string, T]>;

  declare function values<T>(o: T): Array<$Values<T>>;

  declare function valuesIn<T, O>(o: O): Array<$Values<T> | mixed>;

  declare function where<O>(
    predObj: $ObjMap<O, MapUnaryPredicateFn>,
    o: O
  ): boolean;
  declare function where<O>(
    predObj: $ObjMap<O, MapUnaryPredicateFn>
  ): O => boolean;

  declare function whereEq<T, S, O: { [k: string]: T, ... }, Q: { [k: string]: S, ... }>(
    predObj: O,
  ): (o: $Shape<O & Q>) => boolean;
  declare function whereEq<T, S, O: { [k: string]: T, ... }, Q: { [k: string]: S, ... }>(
    predObj: O,
    o: $Shape<O & Q>
  ): boolean;

  declare var view:
    & (<A, B, Oa, Ob>(LensObj<Oa, A, B>) => Oa => A)
    & (<A, B, Oa, Ob>(LensObj<Oa, A, B>, Oa) => A)
    & (<A, B, Fa: Functor<A>, Fb: Functor<B>>(Lens<A, B, Fa, Fb>) => Fa => A)
    & (<A, B, Fa: Functor<A>, Fb: Functor<B>>(Lens<A, B, Fa, Fb>, Fa) => A)

  // *Function
  declare var __: $npm$ramda$Placeholder;

  declare var T: (_: mixed) => true;
  declare var F: (_: mixed) => false;

  declare function addIndex<A, B>(
    iterFn: (fn: (x: A) => B, xs: $ReadOnlyArray<A>) => Array<B>
  ): (fn: (x: A, idx: number, xs: $ReadOnlyArray<A>) => B, xs: $ReadOnlyArray<A>) => Array<B>;

  declare function always<T>(x: T): (x: mixed) => T;

  declare function ap<T, V>(
    fns: $ReadOnlyArray<(x: T) => V>,
  ): (xs: $ReadOnlyArray<T>) => Array<V>;
  declare function ap<T, V>(fns: $ReadOnlyArray<(x: T) => V>, xs: $ReadOnlyArray<T>): Array<V>;

  declare function apply<T, V>(
    fn: (...args: Array<T>) => V,
  ): (xs: $ReadOnlyArray<T>) => V;
  declare function apply<T, V>(fn: (...args: Array<T>) => V, xs: $ReadOnlyArray<T>): V;

  declare function applySpec<
    V,
    S,
    A: $ReadOnlyArray<V>,
    T: NestedObject<(...args: A) => S>
  >(
    spec: T
  ): (...args: A) => NestedObject<S>;

  declare function applyTo<A, B>(a: A): (fn: (x: A) => B) => B;
  declare function applyTo<A, B>(a: A, fn: (x: A) => B): B;

  declare function binary<T, A, B>(
    fn: (a: A, b: B, ...args: Array<mixed>) => T
  ): (x: A, y: B) => T;

  declare function bind<T, A, R, F: (...args: A) => R>(
    fn: F,
    thisObj: T
  ): F;

  declare function call<T, V>(
    fn: (...args: Array<V>) => T,
    ...args: Array<V>
  ): T;

  declare function comparator<T>(
    fn: BinaryPredicateFn<T>
  ): (x: T, y: T) => number;

  // TODO add tests
  declare function construct<T>(
    ctor: Class<GenericContructor<T>>
  ): (x: T) => GenericContructor<T>;

  // TODO add tests
  declare function constructN<T, E>(
    n: number,
    ctor: Class<GenericContructorMulti<T>>
  ): (...args: Array<T>) => GenericContructorMulti<T>;

  // TODO make less generic
  declare function converge(after: Function, fns: $ReadOnlyArray<Function>): Function;

  declare function empty<T>(x: T): T;

  declare function flip<A, B, TResult>(
    fn: (arg0: A, arg1: B) => TResult
  ): CurriedFunction2<B, A, TResult>;
  declare function flip<A, B, C, TResult>(
    fn: (arg0: A, arg1: B, arg2: C) => TResult
  ): ((arg0: B, arg1: A) => (arg2: C) => TResult) &
    ((arg0: B, arg1: A, arg2: C) => TResult);
  declare function flip<A, B, C, D, TResult>(
    fn: (arg0: A, arg1: B, arg2: C, arg3: D) => TResult
  ): ((
    arg1: B,
    arg0: A,
  ) => (arg2: C, arg3: D) => TResult) &
    ((arg1: B, arg0: A, arg2: C, arg3: D) => TResult);
  declare function flip<A, B, C, D, E, TResult>(
    fn: (arg0: A, arg1: B, arg2: C, arg3: D, arg4: E) => TResult
  ): ((
    arg1: B,
    arg0: A,
  ) => (arg2: C, arg3: D, arg4: E) => TResult) &
    ((arg1: B, arg0: A, arg2: C, arg3: D, arg4: E) => TResult);

  declare function identity<T>(x: T): T;

  declare function invoker<A, B, C, D, O: { [k: string]: Function, ... }>(
    arity: number,
    name: $Keys<O>
  ): CurriedFunction2<A, O, D> &
    CurriedFunction3<A, B, O, D> &
    CurriedFunction4<A, B, C, O, D>;

  declare function juxt<T, S>(
    fns: $ReadOnlyArray<(...args: Array<S>) => T>
  ): (...args: Array<S>) => Array<T>;

  // TODO lift

  // TODO liftN

  declare function memoizeWith<A, B, C>(
    keyFn: (...args: $ReadOnlyArray<A>) => C
  ): (...args: Array<A>) => (...args: Array<A>) => B;
  declare function memoizeWith<A, B, C>(
    keyFn: (...args: $ReadOnlyArray<A>) => C,
    fn: (...args: Array<A>) => B
  ): (...args: Array<A>) => B;

  declare function nAry<T, V>(
    arity: number,
    fn: (...args: Array<V>) => T
  ): (...args: Array<V>) => T;

  declare function nthArg<T>(n: number): (...args: Array<T>) => T;

  declare var o: (<A, B, C>(
    fn1: (b: B) => C,
    ...rest: void[]
  ) => ((fn2: (a: A) => B, ...rest: void[]) => (x: A) => C) &
    ((fn2: (a: A) => B, x: A) => C)) &
    (<A, B, C>(
      fn1: (b: B) => C,
      fn2: (a: A) => B,
      ...rest: void[]
    ) => (x: A) => C) &
    (<A, B, C>(fn1: (b: B) => C, fn2: (a: A) => B, x: A) => C);

  declare function of<T>(x: T): Array<T>;

  declare function once<A, B, T: (...args: Array<A>) => B>(fn: T): T;

  declare var partial: Partial;
  // TODO partialRight

  declare type UnaryMonadFn<A, R> = UnaryFn<A, Monad<R>>;

  declare function tap<T>(fn: (x: T) => mixed): (x: T) => T;
  declare function tap<T>(fn: (x: T) => mixed, x: T): T;

  declare function tryCatch<A, B, E>(
    tryer: (a: A) => B
  ): ((catcher: (e: E, a: A) => B) => (a: A) => B) &
    ((catcher: (e: E, a: A) => B, a: A) => B);
  declare function tryCatch<A, B, E>(
    tryer: (a: A) => B,
    catcher: (e: E, a: A) => B
  ): (a: A) => B;
  declare function tryCatch<A, B, E>(
    tryer: (a: A) => B,
    catcher: (e: E, a: A) => B,
    a: A
  ): B;

  declare function unapply<T, V>(
    fn: (xs: $ReadOnlyArray<T>) => V
  ): (...args: Array<T>) => V;

  declare function unary<T, A, V>(fn: (A, ...args: Array<V>) => T): (x: A) => T;

  declare var uncurryN: (<A, B, C>(2, (A) => B => C) => (A, B) => C) &
    (<A, B, C, D>(3, (A) => B => C => D) => (A, B, C) => D) &
    (<A, B, C, D, E>(4, (A) => B => C => D => E) => (A, B, C, D) => E) &
    (<A, B, C, D, E, F>(
      5,
      (A) => B => C => D => E => F
    ) => (A, B, C, D, E) => F) &
    (<A, B, C, D, E, F, G>(
      6,
      (A) => B => C => D => E => F => G
    ) => (A, B, C, D, E, F) => G) &
    (<A, B, C, D, E, F, G, H>(
      7,
      (A) => B => C => D => E => F => G => H
    ) => (A, B, C, D, E, F, G) => H) &
    (<A, B, C, D, E, F, G, H, I>(
      8,
      (A) => B => C => D => E => F => G => H => I
    ) => (A, B, C, D, E, F, G, H) => I);

  //TODO useWith

  // *Logic

  declare function allPass<T>(
    fns: $ReadOnlyArray<(...args: Array<T>) => boolean>
  ): (...args: Array<T>) => boolean;

  declare function and<X, Y>(x: X): (y: Y) => X | Y;
  declare function and<X, Y>(x: X, y: Y): X | Y;

  declare function anyPass<T>(
    fns: $ReadOnlyArray<(...args: Array<T>) => boolean>
  ): (...args: Array<T>) => boolean;

  declare function both<T, F: (...args: Array<T>) => boolean>(x: F): (y: F) => F;
  declare function both<T, F: (...args: Array<T>) => boolean>(x: F, y: F): F;

  // The following code is generated from
  // https://github.com/LoganBarnett/typedef-gen due to Flow not being able to
  // preserve the input function's form as a return type.
  //
  // Begin generated complement declaration.

  declare function complement< Fn: () => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, Fn: (A) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, Fn: (A, B) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, Fn: (A, B, C) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, Fn: (A, B, C, D) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, E, Fn: (A, B, C, D, E) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, E, F, Fn: (A, B, C, D, E, F) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, E, F, G, Fn: (A, B, C, D, E, F, G) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, E, F, G, H, Fn: (A, B, C, D, E, F, G, H) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, E, F, G, H, I, Fn: (A, B, C, D, E, F, G, H, I) => boolean>(
    f: Fn
  ): Fn;

  declare function complement<A, B, C, D, E, F, G, H, I, J, Fn: (A, B, C, D, E, F, G, H, I, J) => boolean>(
    f: Fn
  ): Fn;
  // End generated complement declaration.

  declare function cond<A>(
    fns: $ReadOnlyArray<[
      (...r: Array<A>) => boolean,
      (...r: Array<A>) => B
    ]>
  ): (...r: Array<A>) => B;

  declare function defaultTo<T, V>(d: T): (x: ?V) => V | T;
  declare function defaultTo<T, V>(d: T, x: ?V): V | T;

  declare function either<A, F: (...args: Array<A>) => boolean>(x: F): (y: F) => F;
  declare function either<A, F: (...args: Array<A>) => boolean>(x: F, y: F): F;

  declare function ifElse<Args, B, C>(
    cond: (...args: Args) => boolean
  ): ((
    f1: (...args: Args) => B
  ) => (f2: (...args: Args) => C) => (...args: Args) => B | C) &
    ((
      f1: (...args: Args) => B,
      f2: (...args: Args) => C
    ) => (...args: Args) => B | C);
  declare function ifElse<Args, B, C>(
    cond: (...args: Args) => boolean,
    f1: (...args: Args) => B,
    f2: (...args: Args) => C
  ): (...args: Args) => B | C;

  declare function isEmpty<A>(x: ?$ReadOnlyArray<A> | { ... } | string): boolean;

  declare function not(x: boolean): boolean;

  declare function or<X, Y>(x: X): (y: Y) => X | Y;
  declare function or<X, Y>(x: X, y: Y): X | Y;

  declare var pathSatisfies: CurriedFunction3<
    UnaryPredicateFn<mixed>,
    $ReadOnlyArray<string | number>,
    { ... },
    boolean
  >;

  declare function propSatisfies<T, K>(
    cond: (x: $ElementType<T, K>) => boolean,
  ): ((prop:  K) => (o: T) => boolean) &
    ((prop:  K, o: T) => boolean);
  declare function propSatisfies<T, K>(
    cond: (x: $ElementType<T, K>) => boolean,
    prop: K,
  ): (o: T) => boolean;
  declare function propSatisfies<T, K>(
    cond: (x: $ElementType<T, K>) => boolean,
    prop: K,
    o: T
  ): boolean;

  declare function unless<T, V, S>(
    pred: UnaryPredicateFn<T>,
  ): ((fn: (x: S) => V) => (x: T | S) => T | V) &
    ((fn: (x: S) => V, x: T | S) => T | V);
  declare function unless<T, V, S>(
    pred: UnaryPredicateFn<T>,
    fn: (x: S) => V,
  ): (x: T | S) => V | T;
  declare function unless<T, V, S>(
    pred: UnaryPredicateFn<T>,
    fn: (x: S) => V,
    x: T | S
  ): T | V;

  declare function until<T>(
    pred: UnaryPredicateFn<T>,
  ): ((fn: (x: T) => T) => (x: T) => T) &
    ((fn: (x: T) => T, x: T) => T);
  declare function until<T>(
    pred: UnaryPredicateFn<T>,
    fn: (x: T) => T,
  ): (x: T) => T;
  declare function until<T>(
    pred: UnaryPredicateFn<T>,
    fn: (x: T) => T,
    x: T
  ): T;

  declare function when<T, V, S>(
    pred: UnaryPredicateFn<T>,
  ): ((fn: (x: S) => V) => (x: T | S) => T | V) &
    ((fn: (x: S) => V, x: T | S) => T | V);
  declare function when<T, V, S>(
    pred: UnaryPredicateFn<T>,
    fn: (x: S) => V,
  ): (x: T | S) => V | T;
  declare function when<T, V, S>(
    pred: UnaryPredicateFn<T>,
    fn: (x: S) => V,
    x: T | S
  ): T | V;
}
