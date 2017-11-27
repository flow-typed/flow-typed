// @flow

import type Either from "data.either";

interface Functor<A> {
  map<B>(f: (a: A) => B): Functor<B>;
}

interface Apply<A> extends Functor<A> {
  ap<B>(fab: Apply<(a: A) => B>): Apply<B>;
}

interface Applicative<A> extends Apply<A> {
  static of<B>(b: B): Applicative<B>;
}

interface Chain<A> extends Apply<A> {
  chain<B>(f: (a: A) => Chain<B>): Chain<B>;
}

interface Monad<A> extends Applicative<A>, Chain<A> {}

interface Validation<F, S> extends Applicative<S> {}

declare module "data.maybe" {
  declare class IMaybe<T> {
    isNothing: boolean;
    isJust: boolean;
    isEqual(om: IMaybe<T>): boolean;
    toString(): string;
    toJSON(): Object;
    get(): T;
    getOrElse(defaultValue: T): T;
    map<B>(f: (v: T) => B): IMaybe<B>;
    ap<B>(fb: IMaybe<B> | Applicative<B>): IMaybe<B>;
    chain<B>(f: (v: T) => IMaybe<B>): IMaybe<B>;
    orElse<T>(f: () => IMaybe<T>): IMaybe<T>;
    cata<B>(patterns: {| Nothing: () => B, Just: (v: T) => B |}): B;
    static Nothing<T>(): IMaybe<T>;
    static Just<T>(value: T): IMaybe<T>;
    static of<T>(value: T): IMaybe<T>;
    static fromNullable(value: ?T): IMaybe<T>;
    static fromEither<L, R>(em: Either<L, R>): IMaybe<R>;
    static fromValidation<F, S>(vm: Validation<F, S>): IMaybe<S>;
  }

  declare var exports: typeof IMaybe;
}
