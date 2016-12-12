

declare module 'falcor' {
					declare module.exports: undefined


}

declare module 'npm$namespace$FalcorModel' {
		declare interface ModelOptions {
		source?: DataSource,
		cache?: JSONGraph,
		maxSize?: number,
		collectRatio?: number,
		errorSelector?: ModelErrorSelector,
		onChange?: ModelOnChange,
		comparator?: ModelComparator
	}

	declare interface ModelOnChange {
		(): void
	}

	declare interface ModelErrorSelector {
		(jsonGraphError: any): any
	}

	declare interface ModelComparator {
		(existingValue: any, newValue: any): boolean
	}

	declare interface Thenable<T> {
		then<U>(
		onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => U | Thenable<U>
	): Thenable<U>,
		then<U>(
		onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void
	): Thenable<U>
	}

	declare interface ObservableOnNextCallback<T> {
		(value: T): void
	}

	declare interface ObservableOnErrorCallback {
		(error: Error): void
	}

	declare interface ObservableOnCompletedCallback {
		(): void
	}

	declare interface Scheduler {
		catch(handler: (exception: any) => boolean): Scheduler,
		catchException(handler: (exception: any) => boolean): Scheduler
	}

		declare class DataSource  {
		get(pathSets: Array<PathSet>): Observable<JSONGraphEnvelope>;
		set(jsonGraphEnvelope: JSONGraphEnvelope): Observable<JSONGraphEnvelope>;
		call(
		functionPath: Path, args?: Array<any>, refSuffixes?: Array<PathSet>, thisPaths?: Array<PathSet>
	): Observable<JSONGraphEnvelope>
	}

	declare class Model  {
		constructor(options?: ModelOptions): this;
		get(...path: Array<string | PathSet>): ModelResponse<JSONEnvelope<any>>;
		get<T>(...path: Array<string | PathSet>): ModelResponse<JSONEnvelope<T>>;
		set(...args: Array<PathValue>): ModelResponse<JSONEnvelope<any>>;
		set<T>(...args: Array<PathValue>): ModelResponse<JSONEnvelope<T>>;
		set(jsonGraph: JSONGraph): ModelResponse<JSONEnvelope<any>>;
		set<T>(jsonGraph: JSONGraph): ModelResponse<JSONEnvelope<T>>;
		preload(...path: Array<PathSet>): void;
		call(
		functionPath: string | Path, args?: Array<any>, refPaths?: PathSet, thisPaths?: Array<PathSet>
	): ModelResponse<JSONEnvelope<any>>;
		call<T>(
		functionPath: string | Path, args?: Array<any>, refPaths?: PathSet, thisPaths?: Array<PathSet>
	): ModelResponse<JSONEnvelope<T>>;
		invalidate(...path: Array<PathSet>): void;
		deref(responseObject: any): Model;
		getValue(path: string | Path): ModelResponse<any>;
		getValue<T>(path: string | Path): ModelResponse<T>;
		setValue(path: string | Path, value: any): ModelResponse<any>;
		setValue<T>(path: string | Path, value: any): ModelResponse<T>;
		setCache(jsonGraph: JSONGraph): void;
		getCache(...path: Array<PathSet>): JSONGraph;
		getVersion(path?: Path): number;
		batch(schedulerOrDelay?: number | Scheduler): Model;
		unbatch(): Model;
		treatErrorsAsValues(): Model;
		asDataSource(): DataSource;
		boxValues(): Model;
		unboxValues(): Model;
		withoutDataSource(): Model;
		getPath(): Path
	}

	declare class ModelResponse<T> extends Observable<T> {
		constructor(observable: Observable<T>): this;
		progressively(): ModelResponse<JSONEnvelope<T>>;
		forEach(
		onNext: (value: T) => void, onError?: (error: Error) => void, onCompleted?: () => void
	): Subscription;
		then(
		onFulfilled?: (value: T) => any | Thenable<any>, onRejected?: (error: any) => void
	): Thenable<any>;
		then<U>(
		onFulfilled?: (value: T) => U | Thenable<U>, onRejected?: (error: any) => void
	): Thenable<U>
	}

	declare class Observable<T>  {
		forEach(
		onNext?: ObservableOnNextCallback<T>, onError?: ObservableOnErrorCallback, onCompleted?: ObservableOnCompletedCallback
	): Subscription;
		subscribe(
		onNext?: ObservableOnNextCallback<T>, onError?: ObservableOnErrorCallback, onCompleted?: ObservableOnCompletedCallback
	): Subscription
	}

	declare class Subscription  {
		dispose(): void
	}

	
}