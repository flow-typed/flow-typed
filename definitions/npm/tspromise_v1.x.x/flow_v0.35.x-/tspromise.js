

declare module 'tspromise' {
		declare interface NodeCallback<T> {
		(err: Error, value: T): void
	}

	declare function yield<T>(promise: Thenable<T>): T

	declare class Thenable<T>  {
		then<TR>(
		onFulfilled: (value: T) => Thenable<TR>, onRejected?: (error: Error) => TR
	): Thenable<TR>;
		then<TR>(
		onFulfilled: (value: T) => Thenable<TR>, onRejected?: (error: Error) => void
	): Thenable<TR>;
		then<TR>(
		onFulfilled: (value: T) => TR, onRejected?: (error: Error) => void
	): Thenable<TR>;
		then<TR>(
		onFulfilled: (value: T) => TR, onRejected?: (error: Error) => TR
	): Thenable<TR>;
		catch(onRejected: (error: Error) => T): Thenable<T>
	}

	declare class Promise<T> extends Thenable<T> {
		constructor(callback: (resolve: (value?: T) => void, reject?: (error: Error) => void) => void): this;
		resolve<T>(value?: T): Thenable<T>;
		resolve<T>(promise: Thenable<T>): Thenable<T>;
		reject<T>(error: Error): Thenable<T>;
		all(promises: Thenable<any>[]): Thenable<any[]>;
		async<TR>(callback: () => TR): () => Thenable<TR>;
		async<T1, TR>(callback: (p1: T1) => TR): (p1: T1) => Thenable<TR>;
		async<T1, T2, TR>(callback: (p1: T1, p2: T2) => TR): (p1: T1, p2: T2) => Thenable<TR>;
		async<T1, T2, T3, TR>(
		callback: (p1: T1, p2: T2, p3: T3) => TR
	): (p1: T1, p2: T2, p3: T3) => Thenable<TR>;
		async<T1, T2, T3, T4, TR>(
		callback: (p1: T1, p2: T2, p3: T3, p4: T4) => TR
	): (p1: T1, p2: T2, p3: T3, p4: T4) => Thenable<TR>;
		spawn<TR>(generatorFunction: () => TR): Thenable<TR>;
		rewriteFolderSync(path: string): void;
		waitAsync(time: number): Thenable<{
		
	}>;
		nfcall<T>(obj: any, methodName: String, ...args: any[]): Thenable<T>
	}

	declare module.exports: undefined


}