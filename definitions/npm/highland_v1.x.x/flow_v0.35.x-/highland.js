

declare module 'highland' {
		declare interface HighlandStatic {
		(): Highland.Stream<R>,
		(xs: R[]): Highland.Stream<R>,
		(xs: (push: (err: Error, x?: R) => void, next: () => void) => void): Highland.Stream<R>,
		(xs: Highland.Stream<R>): Highland.Stream<R>,
		(xs: NodeJS.ReadableStream): Highland.Stream<R>,
		(xs: NodeJS.EventEmitter): Highland.Stream<R>,
		(xs: Highland.Thenable<Highland.Stream<R>>): Highland.Stream<R>,
		(xs: Highland.Thenable<R>): Highland.Stream<R>,
		nil: Highland.Nil,
		curry(fn: Function, ...args: any[]): Function,
		ncurry(n: number, fn: Function, ...args: any[]): Function,
		partial(f: Function, ...args: any[]): Function,
		flip(fn: Function, ...args: any[]): Function,
		compose(...functions: Function[]): Function,
		seq(...functions: Function[]): Function,
		isStream(x: any): boolean,
		isStreamError(x: any): boolean,
		isStreamRedirect(x: any): boolean,
		values(obj: Object): Highland.Stream<any>,
		keys(obj: Object): Highland.Stream<string>,
		pairs(obj: Object): Highland.Stream<any[]>,
		pairs(obj: any[]): Highland.Stream<any[]>,
		extend(extensions: Object, target: Object): Object,
		extend(target: Object): (extensions: Object) => Object,
		get(prop: string, obj: Object): string,
		get(prop: string): (obj: Object) => Object,
		set(prop: string, val: any, obj: Object): Object,
		set(prop: string, val: any): (obj: Object) => Object,
		log(x: any, ...args: any[]): void,
		wrapCallback(f: Function): Function,
		add(a: number, b: number): number,
		add(a: number): (b: number) => number,
		not<R>(a: any): boolean
	}

			declare module.exports: HighlandStatic


}

declare module 'npm$namespace$Highland' {
		declare interface Thenable<R> {
		then<U>(
		onFulfilled: (value: R) => Thenable<U>, onRejected: (error: any) => Thenable<U>
	): Thenable<U>,
		then<U>(
		onFulfilled: (value: R) => Thenable<U>, onRejected?: (error: any) => U
	): Thenable<U>,
		then<U>(
		onFulfilled: (value: R) => U, onRejected: (error: any) => Thenable<U>
	): Thenable<U>,
		then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): Thenable<U>
	}

	declare interface Nil {
		Highland_NIL: Nil
	}

	declare interface Stream<R> {
		pause(): void,
		resume(): void,
		end(): void,
		pipe<U>(dest: Stream<U>): Stream<U>,
		pipe<U>(dest: NodeJS.ReadWriteStream): Stream<U>,
		pipe(dest: NodeJS.WritableStream): void,
		destroy(): void,
		consume<U>(
		f: (
		err: Error, x: R, push: (err: Error, value?: U) => void, next: () => void
	) => void
	): Stream<U>,
		pull(f: (err: Error, x: R) => void): void,
		write(x: R): boolean,
		fork(): Stream<R>,
		observe(): Stream<R>,
		errors(f: (err: Error, push: (err: Error, x?: R) => void) => void): Stream<R>,
		stopOnError(f: (err: Error) => void): Stream<R>,
		each(f: (x: R) => void): void,
		apply(f: Function): void,
		toArray(f: (arr: R[]) => void): void,
		map<U>(f: (x: R) => U): Stream<U>,
		flatMap<U>(f: (x: R) => Stream<U>): Stream<U>,
		flatMap<U>(f: (x: R) => U): Stream<U>,
		pluck<U>(prop: string): Stream<U>,
		filter(f: (x: R) => boolean): Stream<R>,
		flatFilter(f: (x: R) => Stream<boolean>): Stream<R>,
		reject(f: (x: R) => boolean): Stream<R>,
		find(f: (x: R) => boolean): Stream<R>,
		group(f: (x: R) => string): Stream<{
		[prop: string]: R[]
	}>,
		group(prop: string): Stream<{
		[prop: string]: R[]
	}>,
		compact(): Stream<R>,
		where(props: Object): Stream<R>,
		zip(ys: R[]): Stream<R>,
		zip(ys: Stream<R>): Stream<R>,
		take(n: number): Stream<R>,
		head(): Stream<R>,
		last(): Stream<R>,
		sequence<U>(): Stream<U>,
		series<U>(): Stream<U>,
		flatten<U>(): Stream<U>,
		flatten(): Stream<R>,
		parallel(n: number): Stream<R>,
		otherwise(ys: Stream<R>): Stream<R>,
		append(y: R): Stream<R>,
		reduce<U>(memo: U, f: (memo: U, x: R) => U): Stream<U>,
		reduce1<U>(memo: U, f: (memo: U, x: R) => U): Stream<U>,
		collect(): Stream<R[]>,
		scan<U>(memo: U, x: (memo: U, x: R) => U): Stream<U>,
		scan1<U>(memo: U, x: (memo: U, x: R) => U): Stream<U>,
		concat(ys: Stream<R>): Stream<R>,
		concat(ys: R[]): Stream<R>,
		merge(ys: Stream<Stream<R>>): Stream<R>,
		invoke<U>(method: string, args: any[]): Stream<U>,
		throttle(ms: number): Stream<R>,
		debounce(ms: number): Stream<R>,
		latest(): Stream<R>
	}

		declare class StreamError  {
		constructor(err: Error): this;
		error: Error
	}

	declare class StreamRedirect<R>  {
		constructor(to: Stream<R>): this;
		to: Stream<R>
	}

	
}