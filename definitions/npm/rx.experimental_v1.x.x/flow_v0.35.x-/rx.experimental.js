

declare module 'rx.experimental' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Rx' {
		declare interface Observable<T> {
		let<TResult>(
		selector: (source: Observable<T>) => Observable<TResult>
	): Observable<TResult>,
		letBind<TResult>(
		selector: (source: Observable<T>) => Observable<TResult>
	): Observable<TResult>,
		doWhile(condition: () => boolean): Observable<T>,
		expand(selector: (item: T) => Observable<T>, scheduler?: IScheduler): Observable<T>,
		forkJoin<TSecond, TResult>(
		second: Observable<TSecond>, resultSelector: (left: T, right: TSecond) => TResult
	): Observable<TResult>,
		forkJoin<TSecond, TResult>(
		second: IPromise<TSecond>, resultSelector: (left: T, right: TSecond) => TResult
	): Observable<TResult>,
		manySelect<TResult>(
		selector: (item: Observable<T>, index: number, source: Observable<T>) => TResult, scheduler?: IScheduler
	): Observable<TResult>
	}

	declare interface ObservableStatic {
		if<T>(
		condition: () => boolean, thenSource: Observable<T>, elseSource: Observable<T>
	): Observable<T>,
		if<T>(
		condition: () => boolean, thenSource: Observable<T>, elseSource: IPromise<T>
	): Observable<T>,
		if<T>(
		condition: () => boolean, thenSource: IPromise<T>, elseSource: Observable<T>
	): Observable<T>,
		if<T>(
		condition: () => boolean, thenSource: IPromise<T>, elseSource: IPromise<T>
	): Observable<T>,
		if<T>(
		condition: () => boolean, thenSource: Observable<T>, scheduler?: IScheduler
	): Observable<T>,
		if<T>(
		condition: () => boolean, thenSource: IPromise<T>, scheduler?: IScheduler
	): Observable<T>,
		ifThen<T>(
		condition: () => boolean, thenSource: Observable<T>, elseSource: Observable<T>
	): Observable<T>,
		ifThen<T>(
		condition: () => boolean, thenSource: Observable<T>, elseSource: IPromise<T>
	): Observable<T>,
		ifThen<T>(
		condition: () => boolean, thenSource: IPromise<T>, elseSource: Observable<T>
	): Observable<T>,
		ifThen<T>(
		condition: () => boolean, thenSource: IPromise<T>, elseSource: IPromise<T>
	): Observable<T>,
		ifThen<T>(
		condition: () => boolean, thenSource: Observable<T>, scheduler?: IScheduler
	): Observable<T>,
		ifThen<T>(
		condition: () => boolean, thenSource: IPromise<T>, scheduler?: IScheduler
	): Observable<T>,
		for<T, TResult>(
		sources: T[], resultSelector: (item: T) => Observable<TResult>
	): Observable<TResult>,
		forIn<T, TResult>(
		sources: T[], resultSelector: (item: T) => Observable<TResult>
	): Observable<TResult>,
		while<T>(condition: () => boolean, source: Observable<T>): Observable<T>,
		while<T>(condition: () => boolean, source: IPromise<T>): Observable<T>,
		whileDo<T>(condition: () => boolean, source: Observable<T>): Observable<T>,
		whileDo<T>(condition: () => boolean, source: IPromise<T>): Observable<T>,
		case<T>(
		selector: () => string, sources: {
		[key: string]: Observable<T>
	}, elseSource: Observable<T>
	): Observable<T>,
		case<T>(
		selector: () => string, sources: {
		[key: string]: IPromise<T>
	}, elseSource: Observable<T>
	): Observable<T>,
		case<T>(
		selector: () => string, sources: {
		[key: string]: Observable<T>
	}, elseSource: IPromise<T>
	): Observable<T>,
		case<T>(
		selector: () => string, sources: {
		[key: string]: IPromise<T>
	}, elseSource: IPromise<T>
	): Observable<T>,
		case<T>(
		selector: () => string, sources: {
		[key: string]: Observable<T>
	}, scheduler?: IScheduler
	): Observable<T>,
		case<T>(
		selector: () => string, sources: {
		[key: string]: IPromise<T>
	}, scheduler?: IScheduler
	): Observable<T>,
		case<T>(
		selector: () => number, sources: {
		[key: number]: Observable<T>
	}, elseSource: Observable<T>
	): Observable<T>,
		case<T>(
		selector: () => number, sources: {
		[key: number]: IPromise<T>
	}, elseSource: Observable<T>
	): Observable<T>,
		case<T>(
		selector: () => number, sources: {
		[key: number]: Observable<T>
	}, elseSource: IPromise<T>
	): Observable<T>,
		case<T>(
		selector: () => number, sources: {
		[key: number]: IPromise<T>
	}, elseSource: IPromise<T>
	): Observable<T>,
		case<T>(
		selector: () => number, sources: {
		[key: number]: Observable<T>
	}, scheduler?: IScheduler
	): Observable<T>,
		case<T>(
		selector: () => number, sources: {
		[key: number]: IPromise<T>
	}, scheduler?: IScheduler
	): Observable<T>,
		switchCase<T>(
		selector: () => string, sources: {
		[key: string]: Observable<T>
	}, elseSource: Observable<T>
	): Observable<T>,
		switchCase<T>(
		selector: () => string, sources: {
		[key: string]: IPromise<T>
	}, elseSource: Observable<T>
	): Observable<T>,
		switchCase<T>(
		selector: () => string, sources: {
		[key: string]: Observable<T>
	}, elseSource: IPromise<T>
	): Observable<T>,
		switchCase<T>(
		selector: () => string, sources: {
		[key: string]: IPromise<T>
	}, elseSource: IPromise<T>
	): Observable<T>,
		switchCase<T>(
		selector: () => string, sources: {
		[key: string]: Observable<T>
	}, scheduler?: IScheduler
	): Observable<T>,
		switchCase<T>(
		selector: () => string, sources: {
		[key: string]: IPromise<T>
	}, scheduler?: IScheduler
	): Observable<T>,
		switchCase<T>(
		selector: () => number, sources: {
		[key: number]: Observable<T>
	}, elseSource: Observable<T>
	): Observable<T>,
		switchCase<T>(
		selector: () => number, sources: {
		[key: number]: IPromise<T>
	}, elseSource: Observable<T>
	): Observable<T>,
		switchCase<T>(
		selector: () => number, sources: {
		[key: number]: Observable<T>
	}, elseSource: IPromise<T>
	): Observable<T>,
		switchCase<T>(
		selector: () => number, sources: {
		[key: number]: IPromise<T>
	}, elseSource: IPromise<T>
	): Observable<T>,
		switchCase<T>(
		selector: () => number, sources: {
		[key: number]: Observable<T>
	}, scheduler?: IScheduler
	): Observable<T>,
		switchCase<T>(
		selector: () => number, sources: {
		[key: number]: IPromise<T>
	}, scheduler?: IScheduler
	): Observable<T>,
		forkJoin<T>(sources: Observable<T>[]): Observable<T[]>,
		forkJoin<T>(sources: IPromise<T>[]): Observable<T[]>,
		forkJoin<T>(...args: Observable<T>[]): Observable<T[]>,
		forkJoin<T>(...args: IPromise<T>[]): Observable<T[]>
	}

			
}