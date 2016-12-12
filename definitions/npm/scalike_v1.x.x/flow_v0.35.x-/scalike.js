

declare module 'scalike' {
					declare module.exports: undefined


}

declare module 'npm$namespace$scalike' {
		declare export interface Either<A, B> {
		value: A | B,
		isLeft: boolean,
		isRight: boolean,
		left(): LeftProjection<A, B>,
		right(): RightProjection<A, B>,
		fold<X>(fa: (a: A) => X, fb: (b: B) => X): X,
		swap(): Either<B, A>
	}

	declare export interface Optional<A> {
		isEmpty: boolean,
		nonEmpty: boolean,
		get(): A,
		getOrElse<B>(a: B): A,
		map<B>(f: (a: A) => B): Optional<B>,
		fold<B>(ifEmpty: B, f: (a: A) => B): B,
		flatten(): Optional<A>,
		filter(f: (a: A) => boolean): Optional<A>,
		contains<B>(b: B): boolean,
		exists(f: (a: A) => boolean): boolean,
		forall(f: (a: A) => boolean): boolean,
		flatMap<B>(f: (a: A) => Optional<B>): Optional<B>,
		foreach(f: (a: A) => void): void,
		orElse<B>(ob: Optional<B>): Optional<A>,
		apply1<B, C>(ob: Optional<B>, f: (a: A, b: B) => C): Optional<C>,
		apply2<B, C, D>(
		ob: Optional<B>, oc: Optional<C>, f: (a: A, b: B, c: C) => D
	): Optional<D>,
		chain<B>(ob: Optional<B>): OptionalBuilder1<A, B>
	}

	declare export interface Try<A> {
		isSuccess: boolean,
		isFailure: boolean,
		get(): A,
		getError(): Error,
		fold<B>(fe: (e: Error) => B, ff: (a: A) => B): B,
		getOrElse<B>(a: B): A,
		orElse<B>(a: Try<B>): Try<A>,
		foreach<B>(f: (a: A) => void): void,
		flatMap<B>(f: (a: A) => Try<B>): Try<B>,
		map<B>(f: (a: A) => B): Try<B>,
		filter(f: (a: A) => boolean): Try<A>,
		toOptional(): Optional<A>,
		failed(): Try<A>,
		transform<B>(fs: (a: A) => Try<B>, ff: (e: Error) => Try<B>): Try<B>,
		recover<B>(f: (e: Error) => Optional<Try<B>>): Try<A>,
		apply1<B, C>(ob: Try<B>, f: (a: A, b: B) => C): Try<C>,
		apply2<B, C, D>(ob: Try<B>, oc: Try<C>, f: (a: A, b: B, c: C) => D): Try<D>,
		chain<B>(ob: Try<B>): TryBuilder1<A, B>
	}

	declare export interface Future<A> {
		getPromise(): Promise<A>,
		onComplete<B>(f: (t: Try<A>) => B): void,
		isCompleted(): boolean,
		value(): Optional<Try<A>>,
		failed(): Future<Error>,
		foreach<B>(f: (a: A) => B): void,
		transform<B>(f: (t: Try<A>) => Try<B>): Future<B>,
		transform1<B>(fs: (a: A) => B, ff: (e: Error) => Error): Future<B>,
		transformWith<B>(f: (t: Try<A>) => Future<B>): Future<B>,
		map<B>(f: (a: A) => B): Future<B>,
		flatMap<B>(f: (a: A) => Future<B>): Future<B>,
		filter(f: (a: A) => boolean): Future<A>,
		recover<B>(f: (e: Error) => Optional<B>): Future<A>,
		recoverWith<B>(f: (e: Error) => Optional<Future<B>>): Future<A>,
		zip<B>(fu: Future<B>): Future<[A, B]>,
		zipWith<B, C>(fu: Future<B>, f: (a: A, b: B) => C): Future<C>,
		fallbackTo<B>(fu: Future<B>): Future<A>,
		andThen<B>(f: (t: Try<A>) => B): Future<A>,
		apply1<B, C>(ob: Future<B>, f: (a: A, b: B) => C): Future<C>,
		apply2<B, C, D>(ob: Future<B>, oc: Future<C>, f: (a: A, b: B, c: C) => D): Future<D>,
		chain<B>(ob: Future<B>): FutureBuilder1<A, B>
	}

	declare export function Right<A, B>(b: B): Either<A, B>

	declare export function Left<A, B>(a: A): Either<A, B>

	declare export function Optional<A>(a: A): Optional<A>

	declare export function Some<A>(a: A): Optional<A>

	declare export function Try<A>(f: () => A): Try<A>

	declare export function Success<A>(a: A): Try<A>

	declare export function Failure<A>(e: Error): Try<A>

	declare export function Future<A>(f: Promise<A> | (() => A)): Future<A>

	declare export class LeftProjection<A, B>  {
		constructor(self: Either<A, B>): this;
		toString(): string;
		get(): A;
		foreach(f: (a: A) => void): void;
		getOrElse<X>(x: X): A;
		forall(f: (a: A) => boolean): boolean;
		exists(f: (a: A) => boolean): boolean;
		filter(f: (a: A) => boolean): Optional<Either<A, B>>;
		map<X>(f: (a: A) => X): Either<X | A, B>;
		flatMap<X>(f: (a: A) => Either<X, B>): Either<X | A, B>;
		toOptional(): Optional<A>
	}

	declare export class RightProjection<A, B>  {
		constructor(self: Either<A, B>): this;
		toString(): string;
		get(): B;
		foreach(f: (b: B) => void): void;
		getOrElse<X>(x: X): B;
		forall(f: (b: B) => boolean): boolean;
		exists(f: (b: B) => boolean): boolean;
		filter(f: (b: B) => boolean): Optional<Either<A, B>>;
		map<X>(f: (b: B) => X): Either<A, X | B>;
		flatMap<X>(f: (a: B) => Either<A, X>): Either<A, X | B>;
		toOptional(): Optional<B>
	}

	declare export class OptionalBuilder1<A, B>  {
		constructor(oa: Optional<A>, ob: Optional<B>): this;
		run<C>(f: (a: A, b: B) => C): Optional<C>;
		chain<C>(oc: Optional<C>): OptionalBuilder2<A, B, C>
	}

	declare export class OptionalBuilder2<A, B, C>  {
		constructor(oa: Optional<A>, ob: Optional<B>, oc: Optional<C>): this;
		run<D>(f: (a: A, b: B, c: C) => D): Optional<D>;
		chain<D>(od: Optional<D>): OptionalBuilder3<A, B, C, D>
	}

	declare export class OptionalBuilder3<A, B, C, D>  {
		constructor(oa: Optional<A>, ob: Optional<B>, oc: Optional<C>, od: Optional<D>): this;
		run<E>(f: (a: A, b: B, c: C, d: D) => E): Optional<E>;
		chain<E>(oe: Optional<E>): OptionalBuilder4<A, B, C, D, E>
	}

	declare export class OptionalBuilder4<A, B, C, D, E>  {
		constructor(oa: Optional<A>, ob: Optional<B>, oc: Optional<C>, od: Optional<D>, oe: Optional<E>): this;
		run<F>(f: (a: A, b: B, c: C, d: D, e: E) => F): Optional<F>;
		chain<F>(of: Optional<F>): OptionalBuilder5<A, B, C, D, E, F>
	}

	declare export class OptionalBuilder5<A, B, C, D, E, F>  {
		constructor(oa: Optional<A>, ob: Optional<B>, oc: Optional<C>, od: Optional<D>, oe: Optional<E>, of: Optional<F>): this;
		run<G>(f: (a: A, b: B, c: C, d: D, e: E, f: F) => G): Optional<G>
	}

	declare export class TryBuilder1<A, B>  {
		constructor(oa: Try<A>, ob: Try<B>): this;
		run<C>(f: (a: A, b: B) => C): Try<C>;
		chain<C>(oc: Try<C>): TryBuilder2<A, B, C>
	}

	declare export class TryBuilder2<A, B, C>  {
		constructor(oa: Try<A>, ob: Try<B>, oc: Try<C>): this;
		run<D>(f: (a: A, b: B, c: C) => D): Try<D>;
		chain<D>(od: Try<D>): TryBuilder3<A, B, C, D>
	}

	declare export class TryBuilder3<A, B, C, D>  {
		constructor(oa: Try<A>, ob: Try<B>, oc: Try<C>, od: Try<D>): this;
		run<E>(f: (a: A, b: B, c: C, d: D) => E): Try<E>;
		chain<E>(oe: Try<E>): TryBuilder4<A, B, C, D, E>
	}

	declare export class TryBuilder4<A, B, C, D, E>  {
		constructor(oa: Try<A>, ob: Try<B>, oc: Try<C>, od: Try<D>, oe: Try<E>): this;
		run<F>(f: (a: A, b: B, c: C, d: D, e: E) => F): Try<F>;
		chain<F>(of: Try<F>): TryBuilder5<A, B, C, D, E, F>
	}

	declare export class TryBuilder5<A, B, C, D, E, F>  {
		constructor(oa: Try<A>, ob: Try<B>, oc: Try<C>, od: Try<D>, oe: Try<E>, of: Try<F>): this;
		run<G>(f: (a: A, b: B, c: C, d: D, e: E, f: F) => G): Try<G>
	}

	declare export class FutureBuilder1<A, B>  {
		constructor(oa: Future<A>, ob: Future<B>): this;
		run<C>(f: (a: A, b: B) => C): Future<C>;
		chain<C>(oc: Future<C>): FutureBuilder2<A, B, C>
	}

	declare export class FutureBuilder2<A, B, C>  {
		constructor(oa: Future<A>, ob: Future<B>, oc: Future<C>): this;
		run<D>(f: (a: A, b: B, c: C) => D): Future<D>;
		chain<D>(od: Future<D>): FutureBuilder3<A, B, C, D>
	}

	declare export class FutureBuilder3<A, B, C, D>  {
		constructor(oa: Future<A>, ob: Future<B>, oc: Future<C>, od: Future<D>): this;
		run<E>(f: (a: A, b: B, c: C, d: D) => E): Future<E>;
		chain<E>(oe: Future<E>): FutureBuilder4<A, B, C, D, E>
	}

	declare export class FutureBuilder4<A, B, C, D, E>  {
		constructor(oa: Future<A>, ob: Future<B>, oc: Future<C>, od: Future<D>, oe: Future<E>): this;
		run<F>(f: (a: A, b: B, c: C, d: D, e: E) => F): Future<F>;
		chain<F>(of: Future<F>): FutureBuilder5<A, B, C, D, E, F>
	}

	declare export class FutureBuilder5<A, B, C, D, E, F>  {
		constructor(oa: Future<A>, ob: Future<B>, oc: Future<C>, od: Future<D>, oe: Future<E>, of: Future<F>): this;
		run<G>(f: (a: A, b: B, c: C, d: D, e: E, f: F) => G): Future<G>
	}

	
}

declare module 'Future' {
			declare function fromPromise<A>(p: Promise<A>): Future<A>

	declare function unit(): Future<void>

	declare function failed<A>(e: Error): Future<A>

	declare function successful<A>(a: A): Future<A>

	declare function fromTry<A>(t: Try<A>): Future<A>

	declare function sequence<A>(fus: Array<Future<A>>): Future<Array<A>>

	declare function firstCompletedOf<A>(fus: Array<Future<A>>): Future<A>

	declare function find<A>(fus: Array<Future<A>>, f: (a: A) => boolean): Future<Optional<A>>

	declare function foldLeft<A, B>(fu: Array<Future<A>>, zero: B, f: (b: B, a: A) => B): Future<B>

	declare function reduceLeft<A, B>(fu: Array<Future<A>>, f: (b: B, a: A) => B): Future<B>

	declare function traverse<A, B>(fu: Array<A>, f: (a: A) => Future<B>): Future<Array<B>>

		
}