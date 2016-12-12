

declare module 'async' {
		declare interface Dictionary<T> {
		[key: string]: T
	}

	declare interface ErrorCallback<T> {
		(err?: T): void
	}

	declare interface AsyncWaterfallCallback<E> {
		(err: E, ...args: any[]): void
	}

	declare interface AsyncBooleanResultCallback<E> {
		(err: E, truthValue: boolean): void
	}

	declare interface AsyncResultCallback<T, E> {
		(err: E, result: T): void
	}

	declare interface AsyncResultArrayCallback<T, E> {
		(err: E, results: T[]): void
	}

	declare interface AsyncResultObjectCallback<T, E> {
		(err: E, results: Dictionary<T>): void
	}

	declare interface AsyncFunction<T, E> {
		(callback: (err?: E, result?: T) => void): void
	}

	declare interface AsyncIterator<T, E> {
		(item: T, callback: ErrorCallback<E>): void
	}

	declare interface AsyncForEachOfIterator<T, E> {
		(item: T, key: number | string, callback: ErrorCallback<E>): void
	}

	declare interface AsyncResultIterator<T, R, E> {
		(item: T, callback: AsyncResultCallback<R, E>): void
	}

	declare interface AsyncMemoIterator<T, R, E> {
		(memo: R, item: T, callback: AsyncResultCallback<R, E>): void
	}

	declare interface AsyncBooleanIterator<T, E> {
		(item: T, callback: AsyncBooleanResultCallback<E>): void
	}

	declare interface AsyncWorker<T, E> {
		(task: T, callback: ErrorCallback<E>): void
	}

	declare interface AsyncVoidFunction<E> {
		(callback: ErrorCallback<E>): void
	}

	declare interface AsyncQueue<T> {
		length(): number,
		started: boolean,
		running(): number,
		idle(): boolean,
		concurrency: number,
		push<E>(task: T, callback?: ErrorCallback<E>): void,
		push<E>(task: T[], callback?: ErrorCallback<E>): void,
		unshift<E>(task: T, callback?: ErrorCallback<E>): void,
		unshift<E>(task: T[], callback?: ErrorCallback<E>): void,
		saturated: () => any,
		empty: () => any,
		drain: () => any,
		paused: boolean,
		pause(): void,
		resume(): void,
		kill(): void,
		workersList(): {
		data: T,
		callback: Function
	}[],
		error(error: Error, data: any): void,
		unsaturated(): void,
		buffer: number
	}

	declare interface AsyncPriorityQueue<T> {
		length(): number,
		concurrency: number,
		started: boolean,
		paused: boolean,
		push<E>(task: T, priority: number, callback?: AsyncResultArrayCallback<T, E>): void,
		push<E>(
		task: T[], priority: number, callback?: AsyncResultArrayCallback<T, E>
	): void,
		saturated: () => any,
		empty: () => any,
		drain: () => any,
		running(): number,
		idle(): boolean,
		pause(): void,
		resume(): void,
		kill(): void,
		workersList(): {
		data: T,
		priority: number,
		callback: Function
	}[],
		error(error: Error, data: any): void,
		unsaturated(): void,
		buffer: number
	}

	declare interface AsyncCargo {
		length(): number,
		payload: number,
		push(task: any, callback?: Function): void,
		push(task: any[], callback?: Function): void,
		saturated(): void,
		empty(): void,
		drain(): void,
		idle(): boolean,
		pause(): void,
		resume(): void,
		kill(): void
	}

	declare interface Async {
		each<T, E>(
		arr: T[], iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>
	): void,
		each<T, E>(
		arr: Dictionary<T>, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>
	): void,
		eachSeries: typeof undefined,
		eachLimit<T, E>(
		arr: T[], limit: number, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>
	): void,
		eachLimit<T, E>(
		arr: Dictionary<T>, limit: number, iterator: AsyncIterator<T, E>, callback?: ErrorCallback<E>
	): void,
		forEach: typeof undefined,
		forEachSeries: typeof undefined,
		forEachLimit: typeof undefined,
		forEachOf<T, E>(
		obj: T[], iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>
	): void,
		forEachOf<T, E>(
		obj: Dictionary<T>, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>
	): void,
		forEachOfSeries: typeof undefined,
		forEachOfLimit<T, E>(
		obj: T[], limit: number, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>
	): void,
		forEachOfLimit<T, E>(
		obj: Dictionary<T>, limit: number, iterator: AsyncForEachOfIterator<T, E>, callback?: ErrorCallback<E>
	): void,
		eachOf: typeof undefined,
		eachOfSeries: typeof undefined,
		eachOfLimit: typeof undefined,
		map<T, R, E>(
		arr: T[], iterator: AsyncResultIterator<T, R, E>, callback?: AsyncResultArrayCallback<R, E>
	): void,
		map<T, R, E>(
		arr: Dictionary<T>, iterator: AsyncResultIterator<T, R, E>, callback?: AsyncResultArrayCallback<R, E>
	): void,
		mapSeries: typeof undefined,
		mapLimit<T, R, E>(
		arr: T[], limit: number, iterator: AsyncResultIterator<T, R, E>, callback?: AsyncResultArrayCallback<R, E>
	): void,
		mapLimit<T, R, E>(
		arr: Dictionary<T>, limit: number, iterator: AsyncResultIterator<T, R, E>, callback?: AsyncResultArrayCallback<R, E>
	): void,
		mapValuesLimit<T, R, E>(
		obj: Dictionary<T>, limit: number, iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void, callback: AsyncResultCallback<R[], E>
	): void,
		mapValues<T, R, E>(
		obj: Dictionary<T>, iteratee: (value: T, key: string, callback: AsyncResultCallback<R, E>) => void, callback: AsyncResultCallback<R[], E>
	): void,
		mapValuesSeries: typeof undefined,
		filter<T, E>(
		arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>
	): void,
		filter<T, E>(
		arr: Dictionary<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>
	): void,
		filterSeries: typeof undefined,
		filterLimit<T, E>(
		arr: T[], limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>
	): void,
		filterLimit<T, E>(
		arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultArrayCallback<T, E>
	): void,
		select: typeof undefined,
		selectSeries: typeof undefined,
		selectLimit: typeof undefined,
		reject: typeof undefined,
		rejectSeries: typeof undefined,
		rejectLimit: typeof undefined,
		reduce<T, R, E>(
		arr: T[], memo: R, iterator: AsyncMemoIterator<T, R, E>, callback?: AsyncResultCallback<R, E>
	): void,
		inject: typeof undefined,
		foldl: typeof undefined,
		reduceRight: typeof undefined,
		foldr: typeof undefined,
		detect<T, E>(
		arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>
	): void,
		detect<T, E>(
		arr: Dictionary<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>
	): void,
		detectSeries: typeof undefined,
		detectLimit<T, E>(
		arr: T[], limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>
	): void,
		detectLimit<T, E>(
		arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncResultCallback<T, E>
	): void,
		find: typeof undefined,
		findSeries: typeof undefined,
		findLimit: typeof undefined,
		sortBy<T, V, E>(
		arr: T[], iterator: AsyncResultIterator<T, V, E>, callback?: AsyncResultArrayCallback<T, E>
	): void,
		some<T, E>(
		arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>
	): void,
		some<T, E>(
		arr: Dictionary<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>
	): void,
		someSeries: typeof undefined,
		someLimit<T, E>(
		arr: T[], limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>
	): void,
		someLimit<T, E>(
		arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>
	): void,
		any: typeof undefined,
		anySeries: typeof undefined,
		anyLimit: typeof undefined,
		every<T, E>(
		arr: T[], iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>
	): void,
		every<T, E>(
		arr: Dictionary<T>, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>
	): void,
		everySeries: typeof undefined,
		everyLimit<T, E>(
		arr: T[], limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>
	): void,
		everyLimit<T, E>(
		arr: Dictionary<T>, limit: number, iterator: AsyncBooleanIterator<T, E>, callback?: AsyncBooleanResultCallback<E>
	): void,
		all: typeof undefined,
		allSeries: typeof undefined,
		allLimit: typeof undefined,
		concat<T, R, E>(
		arr: T[], iterator: AsyncResultIterator<T, R[], E>, callback?: AsyncResultArrayCallback<R, E>
	): void,
		concat<T, R, E>(
		arr: Dictionary<T>, iterator: AsyncResultIterator<T, R[], E>, callback?: AsyncResultArrayCallback<R, E>
	): void,
		concatSeries: typeof undefined,
		series<T, E>(
		tasks: AsyncFunction<T, E>[], callback?: AsyncResultArrayCallback<T, E>
	): void,
		series<T, E>(
		tasks: Dictionary<AsyncFunction<T, E>>, callback?: AsyncResultObjectCallback<T, E>
	): void,
		parallel<T, E>(
		tasks: Array<AsyncFunction<T, E>>, callback?: AsyncResultArrayCallback<T, E>
	): void,
		parallel<T, E>(
		tasks: Dictionary<AsyncFunction<T, E>>, callback?: AsyncResultObjectCallback<T, E>
	): void,
		parallelLimit<T, E>(
		tasks: Array<AsyncFunction<T, E>>, limit: number, callback?: AsyncResultArrayCallback<T, E>
	): void,
		parallelLimit<T, E>(
		tasks: Dictionary<AsyncFunction<T, E>>, limit: number, callback?: AsyncResultObjectCallback<T, E>
	): void,
		whilst<E>(
		test: () => boolean, fn: AsyncVoidFunction<E>, callback: ErrorCallback<E>
	): void,
		doWhilst<E>(
		fn: AsyncVoidFunction<E>, test: () => boolean, callback: ErrorCallback<E>
	): void,
		until<E>(
		test: () => boolean, fn: AsyncVoidFunction<E>, callback: ErrorCallback<E>
	): void,
		doUntil<E>(
		fn: AsyncVoidFunction<E>, test: () => boolean, callback: ErrorCallback<E>
	): void,
		during<E>(
		test: (testCallback: AsyncBooleanResultCallback<E>) => void, fn: AsyncVoidFunction<E>, callback: ErrorCallback<E>
	): void,
		doDuring<E>(
		fn: AsyncVoidFunction<E>, test: (testCallback: AsyncBooleanResultCallback<E>) => void, callback: ErrorCallback<E>
	): void,
		forever<E>(next: (next: ErrorCallback<E>) => void, errBack: ErrorCallback<E>): void,
		waterfall<T, E>(tasks: Function[], callback?: AsyncResultCallback<T, E>): void,
		compose(...fns: Function[]): Function,
		seq(...fns: Function[]): Function,
		applyEach(fns: Function[], argsAndCallback: any[]): void,
		applyEachSeries(fns: Function[], argsAndCallback: any[]): void,
		queue<T, E>(worker: AsyncWorker<T, E>, concurrency?: number): AsyncQueue<T>,
		priorityQueue<T, E>(worker: AsyncWorker<T, E>, concurrency: number): AsyncPriorityQueue<T>,
		cargo<E>(
		worker: (tasks: any[], callback: ErrorCallback<E>) => void, payload?: number
	): AsyncCargo,
		auto<E>(
		tasks: any, concurrency?: number, callback?: AsyncResultCallback<any, E>
	): void,
		autoInject<E>(tasks: any, callback?: AsyncResultCallback<any, E>): void,
		retry<T, E>(
		opts: number, task: (callback: AsyncResultCallback<T, E>, results: any) => void, callback: AsyncResultCallback<any, E>
	): void,
		retry<T, E>(
		opts: {
		times: number,
		interval: number | ((retryCount: number) => number)
	}, task: (callback: AsyncResultCallback<T, E>, results: any) => void, callback: AsyncResultCallback<any, E>
	): void,
		retryable<T, E>(
		opts: number | {
		times: number,
		interval: number
	}, task: AsyncFunction<T, E>
	): AsyncFunction<T, E>,
		apply<E>(fn: Function, ...arguments: any[]): AsyncFunction<any, E>,
		nextTick(callback: Function, ...args: any[]): void,
		setImmediate: typeof undefined,
		reflect<T, E>(
		fn: AsyncFunction<T, E>
	): (
		callback: (err: void, result: {
		error?: Error,
		value?: T
	}) => void
	) => void,
		reflectAll<T, E>(
		tasks: AsyncFunction<T, E>[]
	): ((
		callback: (err: void, result: {
		error?: Error,
		value?: T
	}) => void
	) => void)[],
		timeout<T, E>(
		fn: AsyncFunction<T, E>, milliseconds: number, info: any
	): AsyncFunction<T, E>,
		times<T, E>(
		n: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>
	): void,
		timesSeries<T, E>(
		n: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>
	): void,
		timesLimit<T, E>(
		n: number, limit: number, iterator: AsyncResultIterator<number, T, E>, callback: AsyncResultArrayCallback<T, E>
	): void,
		transform<T, R, E>(
		arr: T[], iteratee: (acc: R[], item: T, key: string, callback: (error?: E) => void) => void
	): void,
		transform<T, R, E>(
		arr: T[], acc: R[], iteratee: (acc: R[], item: T, key: string, callback: (error?: E) => void) => void
	): void,
		transform<T, R, E>(
		arr: {
		[key: string]: T
	}, iteratee: (
		acc: {
		[key: string]: R
	}, item: T, key: string, callback: (error?: E) => void
	) => void
	): void,
		transform<T, R, E>(
		arr: {
		[key: string]: T
	}, acc: {
		[key: string]: R
	}, iteratee: (
		acc: {
		[key: string]: R
	}, item: T, key: string, callback: (error?: E) => void
	) => void
	): void,
		race<T, E>(
		tasks: (AsyncFunction<T, E>)[], callback: AsyncResultCallback<T, E>
	): void,
		memoize(fn: Function, hasher?: Function): Function,
		unmemoize(fn: Function): Function,
		ensureAsync(fn: (...argsAndCallback: any[]) => void): Function,
		constant(...values: any[]): Function,
		asyncify(fn: Function): Function,
		wrapSync(fn: Function): Function,
		log(fn: Function, ...arguments: any[]): void,
		dir(fn: Function, ...arguments: any[]): void
	}

			declare module.exports: Async


}