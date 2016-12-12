

declare module 'baconjs' {
		declare interface JQuery {
		asEventStream(eventName: string): Bacon.EventStream<ErrorEvent, JQueryEventObject>,
		asEventStream(
		eventName: string, selector: string
	): Bacon.EventStream<ErrorEvent, JQueryEventObject>,
		asEventStream<A>(
		eventName: string, f: (event: JQueryEventObject, args: any[]) => A
	): Bacon.EventStream<ErrorEvent, A>,
		asEventStream<A>(
		eventName: string, selector: string, f: (event: JQueryEventObject, args: any[]) => A
	): Bacon.EventStream<ErrorEvent, A>
	}

			declare module.exports: undefined


}

declare module 'npm$namespace$Bacon' {
		declare interface More {
		
	}

	declare interface NoMore {
		
	}

	declare interface Observable<E, A> {
		onValue(f: (value: A) => void): () => void,
		onError(f: (error: E) => void): () => void,
		onEnd(f: () => void): () => void,
		toPromise(promiseCtr?: (value: A) => Promise<A>): Promise<A>,
		firstToPromise(promiseCtr?: (value: A) => Promise<A>): Promise<A>,
		bufferingThrottle(minimumInterval: number): EventStream<E, A>,
		flatMap<B>(
		f: (value: A) => B | Initial<B> | Next<B> | End<B> | Error<E> | Observable<E, B>
	): EventStream<E, B>,
		flatMapLatest<B>(
		f: (value: A) => B | Initial<B> | Next<B> | End<B> | Error<E> | Observable<E, B>
	): EventStream<E, B>,
		flatMapFirst<B>(
		f: (value: A) => B | Initial<B> | Next<B> | End<B> | Error<E> | Observable<E, B>
	): EventStream<E, B>,
		flatMapError<B>(
		f: (error: E) => B | Initial<B> | Next<B> | End<B> | Error<E> | Observable<E, B>
	): EventStream<E, B>,
		flatMapWithConcurrencyLimit<B>(
		limit: number, f: (value: A) => B | Initial<B> | Next<B> | End<B> | Error<E> | Observable<E, B>
	): EventStream<E, B>,
		flatMapConcat<B>(
		f: (value: A) => B | Initial<B> | Next<B> | End<B> | Error<E> | Observable<E, B>
	): EventStream<E, B>,
		scan<B>(seed: B, f: (acc: B, next: A) => B): Property<E, B>,
		fold<B>(seed: B, f: (acc: B, next: A) => B): Property<E, B>,
		reduce<B>(seed: B, f: (acc: B, next: A) => B): Property<E, B>,
		diff<B>(start: A, f: (a: A, b: A) => B): Property<E, B>,
		zip<B, C>(other: EventStream<E, B>, f: (a: A, b: B) => C): EventStream<E, C>,
		slidingWindow(max: number, min?: number): Property<E, A[]>,
		combine<B, C>(property2: Property<E, B>, f: (a: A, b: B) => C): Property<E, C>,
		withStateMachine<B, C>(
		initState: B, f: (
		state: B, event: Initial<A> | Next<A> | End<A> | Error<E>
	) => [B, (Initial<C> | Next<C> | End<C> | Error<E>)[]]
	): EventStream<E, C>,
		decode<B>(mapping: Object): Property<E, B>,
		awaiting<B>(otherObservable: Observable<E, B>): Property<E, boolean>
	}

	declare interface EventStream<E, A> {
		map<B>(f: (value: A) => B): EventStream<E, B>,
		map<B>(constant: B): EventStream<E, B>,
		map<B>(propertyExtractor: string): EventStream<E, B>,
		map<B>(property: Property<E, B>): EventStream<E, B>,
		mapError<B>(f: (error: E) => B): EventStream<E, A | B>,
		errors(): EventStream<E, A>,
		skipErrors(): EventStream<E, A>,
		mapEnd(f: () => A): EventStream<E, A>,
		mapEnd(value: A): EventStream<E, A>,
		filter(f: (value: A) => boolean): EventStream<E, A>,
		filter(bool: boolean): EventStream<E, A>,
		filter(propertyExtractor: string): EventStream<E, A>,
		filter(property: Property<E, boolean>): EventStream<E, A>,
		takeWhile(f: (value: A) => boolean): EventStream<E, A>,
		takeWhile(property: Property<E, boolean>): EventStream<E, A>,
		take(n: number): EventStream<E, A>,
		takeUntil<B>(stream: EventStream<E, B>): EventStream<E, A>,
		first(): EventStream<E, A>,
		last(): EventStream<E, A>,
		skip(n: number): EventStream<E, A>,
		delay(delay: number): EventStream<E, A>,
		throttle(delay: number): EventStream<E, A>,
		debounce(delay: number): EventStream<E, A>,
		debounceImmediate(delay: number): EventStream<E, A>,
		doAction(f: (value: A) => void): EventStream<E, A>,
		doAction(propertyExtractor: string): EventStream<E, A>,
		doError(f: (error: E) => void): EventStream<E, A>,
		not(): EventStream<E, boolean>,
		log(label?: string): EventStream<E, A>,
		doLog(): EventStream<E, A>,
		endOnError(): EventStream<E, A>,
		endOnError(f: (error: E) => boolean): EventStream<E, A>,
		withHandler(f: (event: Initial<A> | Next<A> | End<A> | Error<E>) => any): EventStream<E, A>,
		name(newName: string): EventStream<E, A>,
		withDescription(...param: any[]): EventStream<E, A>,
		groupBy<B>(keyF: (value: A) => B): EventStream<E, EventStream<E, A>>,
		groupBy<B, C>(
		keyF: (value: A) => B, limitF: (
		groupedStream: EventStream<E, A>, groupStartingEvent: Initial<A> | Next<A> | End<A> | Error<E>
	) => EventStream<E, C>
	): EventStream<E, EventStream<E, C>>,
		subscribe(f: (event: Event<A>) => void | NoMore): () => void,
		onValue(f: (value: A) => void): () => void,
		onValues(f: (...args: any[]) => void): () => void,
		skipDuplicates(isEqual?: (oldValue: A, newValue: A) => boolean): EventStream<E, A>,
		concat(otherStream: EventStream<E, A>): EventStream<E, A>,
		merge(otherStream: EventStream<E, A>): EventStream<E, A>,
		holdWhen<B>(valve: Observable<E, B>): EventStream<E, A>,
		startWith(value: A): EventStream<E, A>,
		skipWhile(f: (value: A) => boolean): EventStream<E, A>,
		skipWhile<B>(property: Property<E, B>): EventStream<E, A>,
		skipUntil<B>(stream2: EventStream<E, B>): EventStream<E, A>,
		bufferWithTime(delay: number): EventStream<E, A[]>,
		bufferWithTime(f: (defer: (...args: any[]) => void) => void): EventStream<E, A[]>,
		bufferWithCount(count: number): EventStream<E, A[]>,
		bufferWithTimeOrCount(delay: number, count: number): EventStream<E, A[]>,
		toProperty(initialValue?: A): Property<E, A>
	}

	declare interface Property<E, A> {
		map<B>(f: (value: A) => B): Property<E, B>,
		map<B>(constant: B): Property<E, B>,
		map<B>(propertyExtractor: string): Property<E, B>,
		mapError<B>(f: (error: E) => B): Property<E, A | B>,
		errors(): Property<E, A>,
		skipErrors(): Property<E, A>,
		mapEnd(f: () => A): Property<E, A>,
		mapEnd(value: A): Property<E, A>,
		filter(f: (value: A) => boolean): Property<E, A>,
		filter(bool: boolean): Property<E, A>,
		filter(propertyExtractor: string): Property<E, A>,
		filter(property: Property<E, boolean>): Property<E, A>,
		takeWhile(f: (value: A) => boolean): Property<E, A>,
		takeWhile(property: Property<E, boolean>): Property<E, A>,
		take(n: number): Property<E, A>,
		takeUntil<B>(stream: EventStream<E, B>): Property<E, A>,
		first(): Property<E, A>,
		last(): Property<E, A>,
		skip(n: number): Property<E, A>,
		delay(delay: number): Property<E, A>,
		throttle(delay: number): Property<E, A>,
		debounce(delay: number): Property<E, A>,
		debounceImmediate(delay: number): Property<E, A>,
		doAction(f: (value: A) => void): Property<E, A>,
		doAction(propertyExtractor: string): Property<E, A>,
		doError(f: (error: E) => void): Property<E, A>,
		not(): Property<E, boolean>,
		log(label?: string): Property<E, A>,
		doLog(): Property<E, A>,
		endOnError(): Property<E, A>,
		endOnError(f: (error: E) => boolean): Property<E, A>,
		withHandler(f: (event: Initial<A> | Next<A> | End<A> | Error<E>) => any): Property<E, A>,
		name(newName: string): Property<E, A>,
		withDescription(...param: any[]): Property<E, A>,
		toEventStream(): EventStream<E, A>,
		subscribe(f: (event: Event<A>) => void): () => void,
		onValue(f: (value: A) => void): () => void,
		onValues(f: (...args: any[]) => void): () => void,
		assign(obj: Object, method: string, ...params: any[]): void,
		sample(interval: number): EventStream<E, A>,
		sampledBy<B>(stream: EventStream<E, B>): EventStream<E, A>,
		sampledBy<B>(property: Property<E, B>): Property<E, A>,
		sampledBy<B, C>(
		streamOrProperty: Observable<E, B>, f: (propertyValue: A, samplerValue: B) => C
	): EventStream<E, C>,
		skipDuplicates(isEqual?: (oldValue: A, newValue: A) => boolean): Property<E, A>,
		changes(): EventStream<E, A>,
		and(other: Property<E, A>): Property<E, A>,
		or(other: Property<E, A>): Property<E, A>,
		startWith(value: A): Property<E, A>
	}

	declare interface Bus<E, A> {
		push(value: A): void,
		end(): void,
		error(error: E): void,
		plug(stream: EventStream<E, A>): () => void
	}

	declare function fromPromise<E, A>(promise: Promise<A> | JQueryXHR, abort?: boolean): EventStream<E, A>

	declare function fromPromise<E, A, B>(
		promise: Promise<A> | JQueryXHR, abort: boolean, eventTransformer: (value: A) => (Initial<B> | Next<B> | End<B> | Error<E>)[]
	): EventStream<E, B>

	declare function fromEvent<E, A>(
		target: EventTarget | NodeJS.EventEmitter | JQuery, eventName: string
	): EventStream<E, A>

	declare function fromEvent<E, A, B>(
		target: EventTarget | NodeJS.EventEmitter | JQuery, eventName: string, eventTransformer: (event: A) => B
	): EventStream<E, B>

	declare function fromCallback<E, A>(f: (callback: (...args: any[]) => void) => void): EventStream<E, A>

	declare function fromCallback<E, A>(f: (...args: any[]) => void, ...args: any[]): EventStream<E, A>

	declare function fromCallback<E, A>(object: Object, methodName: string, ...args: any[]): EventStream<E, A>

	declare function fromNodeCallback<E, A>(
		f: (callback: (error: E, data: A) => void) => void, ...args: any[]
	): EventStream<E, A>

	declare function fromNodeCallback<E, A>(object: Object, methodName: string, ...args: any[]): EventStream<E, A>

	declare function fromPoll<E, A>(interval: number, f: () => Next<A> | End<A>): EventStream<E, A>

	declare function once<E, A>(value: A | Error<E>): EventStream<E, A>

	declare function fromArray<E, A>(values: (A | Error<E>)[]): EventStream<E, A>

	declare function interval<E, A>(interval: number, value: A): EventStream<E, A>

	declare function sequentially<E, A>(interval: number, values: A[]): EventStream<E, A>

	declare function repeatedly<E, A>(interval: number, values: A[]): EventStream<E, A>

	declare function repeat<E, A>(f: (iteration: number) => boolean | Observable<E, A>): EventStream<E, A>

	declare function never<E, A>(): EventStream<E, A>

	declare function later<E, A>(delay: number, value: A): EventStream<E, A>

	declare function constant<E, A>(x: A): Property<E, A>

	declare function fromBinder<E, A>(
		subscribe: (
		sink: (
		value: More | NoMore | (A | Initial<A> | Next<A> | End<A> | Error<E>) | (A | Initial<A> | Next<A> | End<A> | Error<E>)[]
	) => void
	) => (() => void)
	): EventStream<E, A>

	declare function combineAsArray<E, A>(streams: (A | Observable<E, A>)[]): Property<E, A[]>

	declare function combineAsArray<E, A>(...streams: (A | Observable<E, A>)[]): Property<E, A[]>

	declare function combineWith<A, B>(
		f: (...args: A[]) => B, ...streams: (A | Observable<ErrorEvent, A>)[]
	): Property<ErrorEvent, B>

	declare function combineTemplate<E, A>(
		template: {
		[label: string]: number | boolean | string | Object | Observable<E, any>
	}
	): Property<E, A>

	declare function mergeAll<E, A>(streams: EventStream<E, A>[]): EventStream<E, A>

	declare function mergeAll<E, A>(...streams: EventStream<E, A>[]): EventStream<E, A>

	declare function zipAsArray<E, A>(streams: EventStream<E, A>[]): EventStream<E, A[]>

	declare function zipAsArray<E, A>(...streams: EventStream<E, A>[]): EventStream<E, A[]>

	declare function zipWith<E, A, B>(
		streams: EventStream<E, A>[], f: (...args: A[]) => B
	): EventStream<E, B>

	declare function zipWith<E, A, B>(
		f: (...args: A[]) => B, ...streams: EventStream<E, A>[]
	): EventStream<E, B>

	declare function onValues(...args: any[]): void

	declare function retry<E, A>(
		options: {
		source: () => EventStream<E, A>,
		retries: number,
		isRetryable?: (error: E) => boolean,
		delay?: (context: {
		error: E,
		retriesDone: number
	}) => number
	}
	): EventStream<E, A>

	declare function retry<E, A>(
		options: {
		source: () => Property<E, A>,
		retries: number,
		isRetryable?: (error: E) => boolean,
		delay?: (context: {
		error: E,
		retriesDone: number
	}) => number
	}
	): Property<E, A>

	declare function when<E, A1, B>(
		pattern1: Observable<E, A1>[], f1: (...args: A1[]) => B
	): EventStream<E, B>

	declare function when<E, A1, A2, B>(
		pattern1: Observable<E, A1>[], f1: (...args: A1[]) => B, pattern2: Observable<E, A2>[], f2: (...args: A2[]) => B
	): EventStream<E, B>

	declare function when<E, A1, A2, A3, B>(
		pattern1: Observable<E, A1>[], f1: (...args: A1[]) => B, pattern2: Observable<E, A2>[], f2: (...args: A2[]) => B, pattern3: Observable<E, A3>[], f3: (...args: A3[]) => B
	): EventStream<E, B>

	declare function when<E, A1, A2, A3, A4, B>(
		pattern1: Observable<E, A1>[], f1: (...args: A1[]) => B, pattern2: Observable<E, A2>[], f2: (...args: A2[]) => B, pattern3: Observable<E, A3>[], f3: (...args: A3[]) => B, pattern4: Observable<E, A4>[], f4: (...args: A4[]) => B
	): EventStream<E, B>

	declare function when<E, A1, A2, A3, A4, A5, B>(
		pattern1: Observable<E, A1>[], f1: (...args: A1[]) => B, pattern2: Observable<E, A2>[], f2: (...args: A2[]) => B, pattern3: Observable<E, A3>[], f3: (...args: A3[]) => B, pattern4: Observable<E, A4>[], f4: (...args: A4[]) => B, pattern5: Observable<E, A5>[], f5: (...args: A5[]) => B
	): EventStream<E, B>

	declare function update<E, A1, B>(
		initial: B, pattern1: Observable<E, A1>[], f1: (initial: B, ...args: A1[]) => B
	): Property<E, B>

	declare function update<E, A1, A2, B>(
		initial: B, pattern1: Observable<E, A1>[], f1: (initial: B, ...args: A1[]) => B, pattern2: Observable<E, A2>[], f2: (initial: B, ...args: A2[]) => B
	): Property<E, B>

	declare function update<E, A1, A2, A3, B>(
		initial: B, pattern1: Observable<E, A1>[], f1: (initial: B, ...args: A1[]) => B, pattern2: Observable<E, A2>[], f2: (initial: B, ...args: A2[]) => B, pattern3: Observable<E, A3>[], f3: (initial: B, ...args: A3[]) => B
	): Property<E, B>

	declare function update<E, A1, A2, A3, A4, B>(
		initial: B, pattern1: Observable<E, A1>[], f1: (initial: B, ...args: A1[]) => B, pattern2: Observable<E, A2>[], f2: (initial: B, ...args: A2[]) => B, pattern3: Observable<E, A3>[], f3: (initial: B, ...args: A3[]) => B, pattern4: Observable<E, A4>[], f4: (initial: B, ...args: A4[]) => B
	): Property<E, B>

	declare function update<E, A1, A2, A3, A4, A5, B>(
		initial: B, pattern1: Observable<E, A1>[], f1: (initial: B, ...args: A1[]) => B, pattern2: Observable<E, A2>[], f2: (initial: B, ...args: A2[]) => B, pattern3: Observable<E, A3>[], f3: (initial: B, ...args: A3[]) => B, pattern4: Observable<E, A4>[], f4: (initial: B, ...args: A4[]) => B, pattern5: Observable<E, A5>[], f5: (initial: B, ...args: A5[]) => B
	): Property<E, B>

	declare class Event<A>  {
		value(): A;
		hasValue(): boolean;
		isInitial(): boolean;
		isNext(): boolean;
		isError(): boolean;
		isEnd(): boolean
	}

	declare class Error<E> extends Event<E> {
		constructor(error: E): this;
		error: E
	}

	declare class End<A> extends Event<A> {
		constructor(): this
	}

	declare class Initial<A> extends Event<A> {
		constructor(value: A): this
	}

	declare class Next<A> extends Event<A> {
		constructor(value: A): this;
		constructor(f: () => A): this
	}

	
}