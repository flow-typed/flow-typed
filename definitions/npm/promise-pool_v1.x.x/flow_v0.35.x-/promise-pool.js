

declare module 'promise-pool' {
		declare export interface IResult {
		fulfilled: number,
		rejected: number,
		total: number
	}

	declare export interface IProgress {
		index: number,
		success: boolean,
		error: any,
		retries: number,
		fulfilled: number,
		rejected: number,
		pending: number,
		total: number
	}

		declare export class Pool<T>  {
		concurrency: number;
		processor: (data: T, index: number) => Q.IPromise<void>;
		fulfilled: number;
		rejected: number;
		pending: number;
		total: number;
		endless: boolean;
		retries: number;
		retryInterval: number;
		maxRetryInterval: number;
		retryIntervalMultiplier: number;
		onProgress: (progress: IProgress) => void;
		constructor(processor: (data: T, index: number) => Q.IPromise<void>, concurrency: number, endless?: boolean, tasksData?: T[]): this;
		add(taskData: T): void;
		add(tasksData: T[]): void;
		start(onProgress?: (progress: IProgress) => void): Q.Promise<IResult>;
		pause(): Q.Promise<void>;
		resume(): void;
		reset(): Q.Promise<void>
	}

	
}