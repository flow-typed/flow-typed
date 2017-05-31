/*eslint no-unused-vars: 0, flowtype/no-types-missing-file-annotation: 0*/

// Warning: this should be improved...

class Validation<F, S> {}

class Applicative<F> {}

declare module 'data.either' {

  declare class IEither<L, R> {
    isLeft: boolean;
    isRight: boolean;
    isEqual<L, R>(m: IEither<L, R>): boolean;
    toString(): string;
    get(): R;
    getOrElse(value: R): R;
    merge(): R | L;
    ap<B>(f: Applicative<R>): Applicative<B>;
    map<B>(f: (v: R) => B): IEither<L, B>;
    chain<B>(f: (v: R) => IEither<L, B>): IEither<L, B>;
    fold<B>(fl: (left: L) => B, fr: (right: R) => B): B;
    cata<B>(patterns: {| Left: (v: L) => B, Right: (v: R) => B |}): B;
    swap(): IEither<R, L>;
    bimap<A, B>(fl: (left: L) => A, fr: (right: R) => B): IEither<A, B>;
    leftMap<A, R>(fl: (left: L) => A): IEither<A, R>;
    orElse<A, R>(f: (left: ?L) => IEither<A, R>): IEither<A, R>;
    static Left<L, R>(left: L): IEither<L, R>;
    static Right<L, R>(right: R): IEither<L, R>;
    static of<L, R>(value: R): IEither<L, R>;
    static fromNullable<L, R>(value: ?R): IEither<L, R>;
    static fromValidation<L, R>(m: Validation<L, R>): IEither<L, R>;
  }

  declare module.exports: typeof IEither;
}
