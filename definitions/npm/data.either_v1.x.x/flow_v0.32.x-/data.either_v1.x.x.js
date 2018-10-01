// /*eslint no-unused-vars: 0, flowtype/no-types-missing-file-annotation: 0*/

interface Functor<A> {
  map<B>(f: (a: A) => B): Functor<B>;
}

interface Apply<A> extends Functor<A> {
  ap<B>(fab: Apply<(a: A) => B>): Apply<B>;
}

interface Applicative<A> extends Apply<A> {
  of<B>(b: B): Applicative<B>;
}

interface Chain<A> extends Apply<A> {
  chain<B>(f: (a: A) => Chain<B>): Chain<B>;
}

interface Monad<A> extends Applicative<A>, Chain<A> {}

interface Semigroup<T> {
  concat(s: T): T
}

interface Monoid<T> extends Semigroup<T> {
  empty(): T
}

interface Validation<F, S> extends Applicative<S> {}

declare module 'data.either' {

  declare class Either<L, A> {
    isLeft: boolean;
    isRight: boolean;
    isEqual<L, A>(m: Either<L, A>): boolean;
    toString(): string;
    get(): A;
    getOrElse(v: A): A;
    merge(): A | L;
    ap<B>(fab: Either<L, B> | Applicative<B>): Either<L, B>;
    map<B>(f: (r: A) => B): Either<L, B>;
    chain<B>(f: (r: A) => Either<L, B>): Either<L, B>;
    fold<B>(fl: (l: L) => B, fr: (r: A) => B): B;
    cata<B>(p: {| Left: (l: L) => B, Right: (r: A) => B |}): B;
    swap(): Either<A, L>;
    bimap<L1, B>(fl: (l: L) => L1, fr: (r: A) => B): Either<L1, B>;
    leftMap<L1, A>(fl: (l: L) => L1): Either<L1, A>;
    orElse<L1, A>(f: (l: ?L) => Either<L1, A>): Either<L1, A>;
    concat<L, Monoid>(m: Either<L, A>): Either<L, Monoid>;
    static Left<L, A>(l: L): Either<L, A>;
    static Right<L, A>(r: A): Either<L, A>;
    static of<L, A>(r: A): Either<L, A>;
    static fromNullable<L, A>(r: ?A): Either<L, A>;
    static fromValidation<L, A>(m: Validation<L, A>): Either<L, A>;
  }

  declare module.exports: typeof Either;
}
