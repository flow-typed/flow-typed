/*
 * Type definitions for [Mori][], for use with Flow type checker
 *
 * Mori: https://swannodette.github.io/mori/
 *
 * by Jesse Hallett <jesse@sitr.us>
 */

declare module mori {

  /* Fundamentals */

  declare function equals(x: any, y: any): boolean
  declare function hash(x: any): number

  /* Collection Types */

  /*
   * Declarations for classes that do not really exist.
   * We need types to describe the capabilities of different collections.
   * Class declarations happen to be a convenient way to make up types that are
   * unique to this module.
   */
  declare class _Collection<A> {}
  declare class _Associative<K,V> {}
  declare class _Keyed<K,V> {}
  declare class _Seq<A>        extends _Collection<A> {}
  declare class _Sequential<A> extends _Collection<A> {}
  declare class _Stack<A>      extends _Collection<A> {}

  /*
   * Export types, but do not export non-existent class implementations.
   */
  declare type Collection<A>    = _Collection<A>
  declare type Associative<K,V> = _Associative<K,V>
  declare type Keyed<K,V>       = _Keyed<K,V>
  declare type Seq<A>           = _Seq<A>
  declare type Sequential<A>    = _Sequential<A>
  declare type Stack<A>         = _Stack<A>

  declare type Indexed<A> = Sequential<A> | Iterable<A>
  declare type Seqable<A> = Collection<A> | Iterable<A>

  declare type List<A> = Collection<A>
                       & Seq<A>
                       & Sequential<A>
                       & Stack<A>

  declare type Map<K,V> = Associative<K,V>
                        & Collection<Pair<K,V>>
                        & Keyed<K,V>

  declare type Queue<A> = Collection<A>
                        & Seq<A>
                        & Sequential<A>
                        & Stack<A>

  declare type Set<A> = Collection<A>
                      & Keyed<A,A>

  declare type Vector<A> = Associative<number,A>
                         & Collection<A>
                         & Keyed<number,A>
                         & Sequential<A>

  /* Other Types */

  /*
   * A pair is just a vector. But by pretending that there is a distinct type
   * called `Pair`, we get a representation at the type level that more closely
   * matches usage of pairs when operating on `Map` values.
   *
   * With a distinct type, `get`, `nth`, `first`, and `last` can be checked with
   * the knowledge that a pair from a map:
   *
   * - has exactly two values
   * - has a value of type `K` in position 0
   * - has a value of type `V` in position 1
   *
   * Furthermore, when building a map with `conj` or `into`, the distinct `Pair`
   * type allows the type checker to verify that keys and values given match the
   * key and value types for the map.
   */
  declare class Pair<K,V> {}

  declare class Keyword {}
  declare class Symbol {}

  declare type booleany = any

  /* Collection Constructors */

  declare function list<A>(...args: A[]): List<A>
  declare var vector: (<A>(...args: A[]) => Vector<A>)
                    & (<K,V>(k: K, v: V) => Pair<K,V>)
  declare function hashMap<K,V>( key0?: K, val0?: V
                               , key1?: K, val1?: V
                               , key2?: K, val2?: V
                               , key3?: K, val3?: V
                               , key4?: K, val4?: V
                               , ...keysAndValues: (K | V)[]): Map<K,V>
  declare function sortedMap<K,V>( key0?: K, val0?: V
                                 , key1?: K, val1?: V
                                 , key2?: K, val2?: V
                                 , key3?: K, val3?: V
                                 , key4?: K, val4?: V
                                 , ...keysAndValues: (K | V)[]): Map<K,V>
  declare function sortedMapBy<K,V>( cmp: (x: K, y: K) => number
                                   , key0?: K, val0?: V
                                   , key1?: K, val1?: V
                                   , key2?: K, val2?: V
                                   , key3?: K, val3?: V
                                   , key4?: K, val4?: V
                                   , ...keysAndValues: (K | V)[]): Map<K,V>
  declare function set<A>(values: Seqable<A>): Set<A>
  declare function sortedSet<A>(values: Seqable<A>): Set<A>
  declare function sortedSetBy<A>(cmp: (x: A, b: A) => number, ...values: A[]): Set<A>
  declare function range(start?: number, end?: number, step?: number): Seq<number>
  declare function queue<A>(...args: A[]): Queue<A>

  /* Other Constructors */

  declare function keyword(name: string): Keyword
  declare function symbol(name: string): Symbol

  /* Type Predicates */

  declare function isList(coll: any): boolean
  declare function isSeq(coll: any): boolean
  declare function isVector(coll: any): boolean
  declare function isMap(coll: any): boolean
  declare function isSet(coll: any): boolean
  declare function isCollection(coll: any): boolean
  declare function isSequential(coll: any): boolean
  declare function isAssociative(coll: any): boolean
  declare function isCounted(coll: any): boolean
  declare function isIndexed(coll: any): boolean
  declare function isReduceable(coll: any): boolean
  declare function isSeqable(coll: any): boolean
  declare function isReversible(coll: any): boolean
  declare function isKeyword(x: any): boolean
  declare function isSymbol(x: any): boolean

  /* Collection Operations */

  declare function conj<A,S:Collection<A>>(coll: S, ...args: A[]): S
  declare function into<A,T:Collection<A>,S:Seqable<A>>(coll: T, from: S): T
  declare function assoc<K,V,S:Associative<K,V>>( coll: S
                                                , key0?: K, val0?: V
                                                , key1?: K, val1?: V
                                                , key2?: K, val2?: V
                                                , key3?: K, val3?: V
                                                , key4?: K, val4?: V
                                                , ...keysAndValues: (K | V)[]): S
  declare function dissoc<K,V,S:Map<K,V>>(coll: S, ...keys: K[]): S
  declare function distinct<A,S:Indexed<A>>(coll: S): S
  declare function empty<A,S:Collection<A>>(coll: S): S
  declare var get: (<K,V,V_>(coll: Keyed<K,V>, key: K, notFound: V_) => V|V_)  // TODO: `get` works on A[]
                 & (<K,V>(coll: Keyed<K,V>, key: K) => ?V)
                 & (<K,V>(coll: Pair<K,V>, key: 0) => K)
                 & (<K,V>(coll: Pair<K,V>, key: 1) => V)
  declare var getIn: (<K,K_,V,V_>(coll: Keyed<K,any>, keys: Seqable<K&K_>, notFound: V_) => V|V_)
                   & (<K,K_,V>(coll: Keyed<K,any>, keys: Seqable<K&K_>) => ?V)
  declare function hasKey<K,V>(coll: Keyed<K,V>, key: K): boolean  // TODO: `hasKey` works on A[]
  declare function find<K,V>(coll: Associative<K,V>, key: K): ?Pair<K,V>
  declare var nth: (<A>(coll: Indexed<A>, index: number) => A)
                 & (<K,V>(coll: Pair<K,V>, index: 0) => K)
                 & (<K,V>(coll: Pair<K,V>, index: 1) => V)
  declare var last: (<A>(coll: Seqable<A>) => A)
                  & (<K,V>(coll: Pair<K,V>) => V)
  declare function assocIn<K,V,S:Associative<K,any>>(coll: S, keys: Seqable<K>, val: V): S
  declare function updateIn<K,V,S:Associative<K,any>>(coll: S,
                                                      keys: Seqable<K>,
                                                      f: (_: V) => V): S
  declare function count<A>(coll: Seqable<A>): number
  declare function isEmpty<A>(coll: Seqable<A>): boolean
  declare function peek<A>(coll: Stack<A>): A
  declare function pop<A,S:Stack<A>>(coll: S): S
  declare function zipmap<A,B>(xs: Seqable<A>, ys: Seqable<B>): Map<A,B>
  declare function reverse<A>(coll: Seqable<A>): Seq<A>

  /* Vector Operations */

  declare function subvec<A>(vec: Vector<A>, start: number, end?: number): Vector<A>

  /* Hash Map Operations */

  declare function keys<K,V>(map: Map<K,V>): Seq<K>
  declare function vals<K,V>(map: Map<K,V>): Seq<V>
  declare function merge<K,V,K_,V_>(map: Map<K,V>, ...maps: Map<K_,V_>[]): Map<K | K_,V | V_>

  /* Set Operations */

  declare function disj<A>(set: Set<A>, ...toRemove: A[]): Set<A>
  declare function union<A,B>(set: Set<A>, ...sets: Set<B>[]): Set<A | B>
  declare function intersection<A,B>(set: Set<A>, ...sets: Set<B>[]): Set<A & B>
  declare function difference<A,B>(set: Set<A>, ...sets: Set<B>[]): Set<A | B>
  declare function isSubset<A,B>(seta: Set<A>, setb: Set<B>): boolean
  declare function isSuperset<A,B>(seta: Set<A>, setb: Set<B>): boolean

  /* Sequences */

  declare var first: (<A>(coll: Seqable<A>) => A)
                   & (<K,V>(coll: Pair<K,V>) => K)
  declare var second: (<A>(coll: Seqable<A>) => A)
                    & (<K,V>(coll: Pair<K,V>) => V)
  declare function rest<A>(coll: Seqable<A>): Seq<A>
  declare function next<A>(coll: Seqable<A>): Seq<A>
  declare function seq<A>(coll: Seqable<A>): Seq<A>
  declare function cons<A,B>(value: A, coll: Seqable<B>): List<A|B>
  declare function concat<A,B>(coll: Seqable<A>, ...colls: Seqable<B>[]): Seq<A|B>
  declare function flatten<A>(coll: Seqable<any>): Seq<A>
  declare var intoArray: (<A>(coll: Seqable<A>) => A[])
                       & (<K,V>(coll: Pair<K,V>) => [K,V])
  declare function each<A>(coll: Seqable<A>, f: (_: A) => any): void

  declare var map: (<A,B,C,D,E,R>(f: (a: A, b: B, c: C, d: D, e: E) => R,
                                  colla: Seqable<A>,
                                  collb: Seqable<B>,
                                  collc: Seqable<C>,
                                  colld: Seqable<D>,
                                  colle: Seqable<E>,
                                  $?: null
                                 ) => Seq<R>)
                 & (<A,B,C,D,R>(f: (a: A, b: B, c: C, d: D) => R,
                                colla: Seqable<A>,
                                collb: Seqable<B>,
                                collc: Seqable<C>,
                                colld: Seqable<D>,
                                $?: null
                               ) => Seq<R>)
                 & (<A,B,C,R>(f: (a: A, b: B, c: C) => R,
                              colla: Seqable<A>,
                              collb: Seqable<B>,
                              collc: Seqable<C>,
                              $?: null
                             ) => Seq<R>)
                 & (<A,B,R>(f: (a: A, b: B) => R,
                            colla: Seqable<A>,
                            collb: Seqable<B>,
                            $?: null
                           ) => Seq<R>)
                 & (<A,R>(f: (a: A) => R,
                          colla: Seqable<A>,
                          $?: null
                         ) => Seq<R>)
                 & (<T,R>(f: (...values: T[]) => R,
                          ...colls: Seqable<T>[]
                          ) => Seq<R>)

  declare var mapcat: (<A,B,C,D,E,R>(f: (a: A, b: B, c: C, d: D, e: E) => Seqable<R>,
                                     colla: Seqable<A>,
                                     collb: Seqable<B>,
                                     collc: Seqable<C>,
                                     colld: Seqable<D>,
                                     colle: Seqable<E>,
                                     $?: null
                                    ) => Seq<R>)
                    & (<A,B,C,D,R>(f: (a: A, b: B, c: C, d: D) => Seqable<R>,
                                   colla: Seqable<A>,
                                   collb: Seqable<B>,
                                   collc: Seqable<C>,
                                   colld: Seqable<D>,
                                   $?: null
                                  ) => Seq<R>)
                    & (<A,B,C,R>(f: (a: A, b: B, c: C) => Seqable<R>,
                                 colla: Seqable<A>,
                                 collb: Seqable<B>,
                                 collc: Seqable<C>,
                                 $?: null
                                ) => Seq<R>)
                    & (<A,B,R>(f: (a: A, b: B) => Seqable<R>,
                               colla: Seqable<A>,
                               collb: Seqable<B>,
                               $?: null
                              ) => Seq<R>)
                    & (<A,R>(f: (a: A) => Seqable<R>,
                             colla: Seqable<A>,
                             $?: null
                            ) => Seq<R>)
                    & (<T,R>(f: (...values: T[]) => Seqable<R>,
                             ...colls: Seqable<T>[]
                             ) => Seq<R>)

  declare function filter<A>(pred: (value: A) => booleany, coll: Seqable<A>): Seq<A>
  declare function remove<A>(pred: (value: A) => booleany, coll: Seqable<A>): Seq<A>
  declare var reduce: (<A,R>(f: (accum: R, value: A) => R,
                                 initial: R,
                                 coll: Seqable<A>
                                ) => R)
                    & (<A,R>(f: (accum: R, value: A) => R,
                                 coll: Seqable<A>
                                ) => ?R)
  declare function reduceKV<K,V,R>(f: (accum: R, key: K, value: V) => R,
                                   initial: R,
                                   coll: Associative<K,V>
                                  ): R
  declare function take<A>(n: number, coll: Seqable<A>): Seq<A>
  declare function takeWhile<A>(f: (value: A) => booleany, coll: Seqable<A>): Seq<A>
  declare function drop<A>(n: number, coll: Seqable<A>): Seq<A>
  declare function dropWhile<A>(f: (value: A) => booleany, coll: Seqable<A>): Seq<A>
  declare function some<A>(f: (value: A) => booleany, coll: Seqable<A>): ?A
  declare function every<A>(f: (value: A) => booleany, coll: Seqable<A>): boolean
  declare var sort: (<A>(cmp: (x: A, y: A) => number, coll: Seqable<A>) => Seq<A>)
                  & (<A>(coll: Seqable<A>) => Seq<A>)
  declare var sortBy: (<A,B>(keyfn: (x: A, y: A) => B, cmp: (x: B, y: B) => B, coll: Seqable<A>) => Seq<A>)
                    & (<A,B>(keyfn: (x: A, y: A) => B, coll: Seqable<A>) => Seq<A>)
  declare function interpose<A,B>(x: B, coll: Seqable<A>): Seq<A|B>
  declare function interleave<A,B,C,D>(colla: Seqable<A>,
                                       collb: Seqable<B>,
                                       collc?: Seqable<C>,
                                       ...colls: Seqable<D>[]
                                      ): Seq<A|B|C|D>
  declare function iterate<A>(f: (value: A) => A, x: A): Seq<A>
  declare var repeat: (<A>(n: number, x: A) => Seq<A>)
                    & (<A>(x: A) => Seq<A>)
  declare var repeatedly: (<A>(n: number, f: () => A) => Seq<A>)
                        & (<A>(f: () => A) => Seq<A>)
  declare var partition: (<A,B>(n: number, step: number, pad: Seqable<B>, coll: Seqable<A>) => Seq<Seq<A|B>>)
                       & (<A>(n: number, step: number, coll: Seqable<A>) => Seq<Seq<A>>)
                       & (<A>(n: number, coll: Seqable<A>) => Seq<Seq<A>>)
  declare function partitionBy<K,A>(f: (value: A) => K, coll: Seqable<A>): Seq<Seq<A>>
  declare function groupBy<K,A>(f: (value: A) => K, coll: Seqable<A>): Map<K,Seq<A>>
  declare function lazySeq<A>(thunk: () => Seqable<A>): Seq<A>

  /* Helpers */

  declare function primSeq<A>(seqable: Seqable<A>, index?: number): Seq<A>
  declare function identity<A>(x: A): A
  declare function constantly<A>(x: A): (...args: any[]) => A
  declare function inc(n: number): number
  declare function dec(n: number): number
  declare function sum(...ns: number[]): number
  declare function isEven(n: number): boolean
  declare function isOdd(n: number): boolean

  declare var comp: (<A,B,C,D,E>( fn3: (d: D) => E
                                , fn2: (c: C) => D
                                , fn1: (b: B) => C
                                , fn0: (a: A) => B
                                , $?: null
                                ) => (a: A) => E)
                  & (<A,B,C,D>( fn2: (c: C) => D
                              , fn1: (b: B) => C
                              , fn0: (a: A) => B
                              , $?: null
                              ) => (a: A) => D)
                  & (<A,B,C>( fn1: (b: B) => C
                            , fn0: (a: A) => B
                            , $?: null
                            ) => (a: A) => C)
                  & (<A,B>( fn0: (a: A) => B
                          , $?: null
                          ) => (a: A) => B)

  declare var juxt: (<T,A,B,C,D,E>(f0: (_: T) => A,
                                   f1: (_: T) => B,
                                   f2: (_: T) => C,
                                   f3: (_: T) => D,
                                   f4: (_: T) => E,
                                   $?: null
                                  ) => (_: T) => [A,B,C,D,E])
                  & (<T,A,B,C,D>(f0: (_: T) => A,
                                 f1: (_: T) => B,
                                 f2: (_: T) => C,
                                 f3: (_: T) => D,
                                 $?: null
                                ) => (_: T) => [A,B,C,D])
                  & (<T,A,B,C>(f0: (_: T) => A,
                               f1: (_: T) => B,
                               f2: (_: T) => C,
                               $?: null
                              ) => (_: T) => [A,B,C])
                  & (<T,A,B>(f0: (_: T) => A,
                             f1: (_: T) => B,
                             $?: null
                            ) => (_: T) => [A,B])
                  & (<T,A>(f0: (_: T) => A,
                           $?: null
                          ) => (_: T) => [A])
                  & (<T>($?: null) => (_: T) => void[])
                  & (<T,R>(f0: (_: T) => R,
                           f1: (_: T) => R,
                           f2: (_: T) => R,
                           f3: (_: T) => R,
                           f4: (_: T) => R,
                           f5: (_: T) => R,
                           ...fs: ((_: T) => R)[]
                          ) => (_: T) => R[])

  declare var knit: (<T,A,B,C,D,E>(f0: (_: T) => A,
                                   f1: (_: T) => B,
                                   f2: (_: T) => C,
                                   f3: (_: T) => D,
                                   f4: (_: T) => E,
                                   $?: null
                                  ) => (_: Seqable<T>) => [A,B,C,D,E])
                  & (<T,A,B,C,D>(f0: (_: T) => A,
                                 f1: (_: T) => B,
                                 f2: (_: T) => C,
                                 f3: (_: T) => D,
                                 $?: null
                                ) => (_: Seqable<T>) => [A,B,C,D])
                  & (<T,A,B,C>(f0: (_: T) => A,
                               f1: (_: T) => B,
                               f2: (_: T) => C,
                               $?: null
                              ) => (_: Seqable<T>) => [A,B,C])
                  & (<T,A,B>(f0: (_: T) => A,
                             f1: (_: T) => B,
                             $?: null
                            ) => (_: Seqable<T>) => [A,B])
                  & (<T,A>(f0: (_: T) => A,
                           $?: null
                          ) => (_: Seqable<T>) => [A])
                  & (<T>($?: null) => (_: Seqable<T>) => void[])
                  & (<T,R>(f0: (_: T) => R,
                           f1: (_: T) => R,
                           f2: (_: T) => R,
                           f3: (_: T) => R,
                           f4: (_: T) => R,
                           f5: (_: T) => R,
                           ...fs: ((_: T) => R)[]
                          ) => (_: Seqable<T>) => R[])

  declare var pipeline: (<A,B,C,D,E,R>(x: A,
                                       f0: (_: A) => B,
                                       f1: (_: B) => C,
                                       f2: (_: C) => D,
                                       f3: (_: D) => E,
                                       f4: (_: E) => R,
                                       $?: null
                                      ) => R)
                      & (<A,B,C,D,R>(x: A,
                                     f0: (_: A) => B,
                                     f1: (_: B) => C,
                                     f2: (_: C) => D,
                                     f3: (_: D) => R,
                                     $?: null
                                    ) => R)
                      & (<A,B,C,R>(x: A,
                                   f0: (_: A) => B,
                                   f1: (_: B) => C,
                                   f2: (_: C) => R,
                                   $?: null
                                  ) => R)
                      & (<A,B,R>(x: A,
                                 f0: (_: A) => B,
                                 f1: (_: B) => R,
                                 $?: null
                                ) => R)
                      & (<A,R>(x: A,
                               f0: (_: A) => R,
                               $?: null
                              ) => R)
                      & (<A>(x: A, $?: null) => A)
                      & (<T,R>(x: T,
                               ...fs: ((_: T) => R)[]
                              ) => R)

  declare var partial: (<T,R>(f: (...args: T[]) => R,
                              $?: null
                           ) => (...args: T[]) => R)
                     & (<A,T,R>(f: (a: A, ...args: T[]) => R,
                                a: A,
                                $?: null
                               ) => (...args: T[]) => R)
                     & (<A,B,T,R>(f: (a: A, b: B, ...args: T[]) => R,
                                  a: A,
                                  b: B,
                                  $?: null
                                 ) => (...args: T[]) => R)
                     & (<A,B,C,T,R>(f: (a: A, b: B, c: C, ...args: T[]) => R,
                                    a: A,
                                    b: B,
                                    c: C,
                                    $?: null
                                   ) => (...args: T[]) => R)
                     & (<A,B,C,D,T,R>(f: (a: A, b: B, c: C, d: D, ...args: T[]) => R,
                                      a: A,
                                      b: B,
                                      c: C,
                                      d: D,
                                      $?: null
                                     ) => (...args: T[]) => R)
                     & (<A,B,C,D,E,T,R>(f: (a: A, b: B, c: C, d: D, e: E, ...args: T[]) => R,
                                        a: A,
                                        b: B,
                                        c: C,
                                        d: D,
                                        e: E,
                                        $?: null
                                       ) => (...args: T[]) => R)

  declare var curry: (<A,R>( f: (a: A) => R
                           , $?: null
                           ) => (a: A) => R)
                   & (<A,B,R>( f: (a: A, b: B) => R
                             , b: B
                             , $?: null
                             ) => (a: A) => R)
                   & (<A,B,C,R>( f: (a: A, b: B, c: C) => R
                               , b: B
                               , c: C
                               , $?: null
                               ) => (a: A) => R)
                   & (<A,B,C,D,R>( f: (a: A, b: B, c: C, d: D) => R
                                 , b: B
                                 , c: C
                                 , d: D
                                 , $?: null
                                 ) => (a: A) => R)
                   & (<A,B,C,D,E,R>( f: (a: A, b: B, c: C, d: D, e: E) => R
                                   , b: B
                                   , c: C
                                   , d: D
                                   , e: E
                                   , $?: null
                                   ) => (a: A) => R)

  declare var fnil: (<A,T,R>(f: (a: ?A, ...args: T[]) => R,
                             a: A,
                             $?: null
                            ) => (a: A, ...args: T[]) => R)
                  & (<A,B,T,R>(f: (a: ?A, b: ?B, ...args: T[]) => R,
                             a: A,
                             b: B,
                             $?: null
                            ) => (a: A, b: B, ...args: T[]) => R)
                  & (<A,B,C,T,R>(f: (a: ?A, b: ?B, c: ?C, ...args: T[]) => R,
                                 a: A,
                                 b: B,
                                 c: C,
                                 $?: null
                                ) => (a: A, b: B, c: C, ...args: T[]) => R)
                  & (<A,B,C,D,T,R>(f: (a: ?A, b: ?B, c: ?C, d: ?D, ...args: T[]) => R,
                                   a: A,
                                   b: B,
                                   c: C,
                                   d: D,
                                   $?: null
                                  ) => (a: A, b: B, c: C, d: D, ...args: T[]) => R)
                  & (<A,B,C,D,E,T,R>(f: (a: ?A, b: ?B, c: ?C, d: ?D, e: ?E, ...args: T[]) => R,
                                     a: A,
                                     b: B,
                                     c: C,
                                     d: D,
                                     e: E,
                                     $?: null
                                    ) => (a: A, b: B, c: C, d: D, e: E, ...args: T[]) => R)

  declare var toClj: (<A,B>(x: A[]) => Vector<B>)
                   & (<A,B>(x: { [key: string]: A }) => Map<string,B>)

  declare var toJs: (<A,B>(x: Sequential<A> | Set<A>) => B[])
                  & (<K,V,B>(x: Map<K,V>) => { [key: string]: B })

  /* Configure */

  declare function configure(setting: 'print-length' | 'print-level', value: ?number): void
}
