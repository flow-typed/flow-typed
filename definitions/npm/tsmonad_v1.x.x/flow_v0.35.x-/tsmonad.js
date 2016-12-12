

declare module 'tsmonad' {
					declare module.exports: undefined


}

declare module 'npm$namespace$TsMonad' {
		declare interface EitherPatterns<L, R, T> {
		left: (l: L) => T,
		right: (r: R) => T
	}

	declare interface Eq<T> {
		equals(t: T): boolean
	}

	declare interface Monad<T> {
		unit<U>(t: U): Monad<U>,
		bind<U>(f: (t: T) => Monad<U>): Monad<U>,
		of<U>(t: U): Monad<U>,
		chain<U>(f: (t: T) => Monad<U>): Monad<U>
	}

	declare interface Functor<T> {
		fmap<U>(f: (t: T) => U): Functor<U>,
		lift<U>(f: (t: T) => U): Functor<U>,
		map<U>(f: (t: T) => U): Functor<U>
	}

	declare interface MaybePatterns<T, U> {
		just: (t: T) => U,
		nothing: () => U
	}

	declare interface WriterPatterns<S, T, U> {
		writer: (story: S[], value: T) => U
	}

	declare function either<L, R>(l?: L, r?: R): Either<L, R>

	declare function eq(a: any, b: any): any

	declare function maybe<T>(t: T): Maybe<T>

	declare function writer<S, T>(story: S[], value: T): Writer<S, T>

	declare class Either<L, R> extends Monad<R> {
		constructor(type: EitherType, l?: L, r?: R): this;
		left<L, R>(l: L): Either<L, R>;
		right<L, R>(r: R): Either<L, R>;
		unit<T>(t: T): Either<L, T>;
		bind<T>(f: (r: R) => Either<L, T>): Either<L, T>;
		of: <T>(t: T) => Either<L, T>;
		chain: <T>(f: (r: R) => Either<L, T>) => Either<L, T>;
		fmap<T>(f: (r: R) => T): Either<L, T>;
		lift: <T>(f: (r: R) => T) => Either<L, T>;
		map: <T>(f: (r: R) => T) => Either<L, T>;
		caseOf<T>(pattern: EitherPatterns<L, R, T>): T;
		equals(other: Either<L, R>): any
	}

	declare class Maybe<T> extends Monad<T> {
		constructor(type: MaybeType, value?: T): this;
		maybe<T>(t: T): Maybe<T>;
		just<T>(t: T): Maybe<T>;
		nothing<T>(): Maybe<T>;
		unit<U>(u: U): Maybe<U>;
		bind<U>(f: (t: T) => Maybe<U>): Maybe<U>;
		of: <U>(u: U) => Maybe<U>;
		chain: <U>(f: (t: T) => Maybe<U>) => Maybe<U>;
		fmap<U>(f: (t: T) => U): Maybe<U>;
		lift: <U>(f: (t: T) => U) => Maybe<U>;
		map: <U>(f: (t: T) => U) => Maybe<U>;
		caseOf<U>(patterns: MaybePatterns<T, U>): U;
		equals(other: Maybe<T>): any
	}

	declare class Writer<S, T> extends Monad<T> {
		constructor(story: S[], value: T): this;
		writer<S, T>(story: S[], value: T): Writer<S, T>;
		tell<S>(s: S): Writer<S, number>;
		unit<U>(u: U): Writer<any, U>;
		bind<U>(f: (t: T) => Writer<S, U>): Writer<S, U>;
		of: <U>(u: U) => Writer<any, U>;
		chain: <U>(f: (t: T) => Writer<S, U>) => Writer<S, U>;
		fmap<U>(f: (t: T) => U): Writer<S, U>;
		lift: <U>(f: (t: T) => U) => Writer<S, U>;
		map: <U>(f: (t: T) => U) => Writer<S, U>;
		caseOf<U>(patterns: WriterPatterns<S, T, U>): U;
		equals(other: Writer<S, T>): boolean
	}

	
}