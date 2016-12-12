

declare module 'parallel' {
		declare interface ParallelOptions {
		evalPath?: string,
		maxWorkers?: number,
		synchronous?: boolean
	}

		declare class Parallel<T>  {
		constructor(data: T, opts?: ParallelOptions): this;
		data: T;
		spawn(fn: (data: T) => T): Parallel<T>;
		map<N>(fn: (data: N) => N): Parallel<T>;
		reduce<N>(fn: (data: N[]) => N): Parallel<T>;
		then(success: (data: T) => void, fail?: (e: Error) => void): Parallel<T>;
		require(file: string): Parallel<T>;
		require(fn: Function): Parallel<T>
	}

	
}

declare module 'paralleljs' {
					declare module.exports: undefined


}