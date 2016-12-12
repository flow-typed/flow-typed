

declare module 'orchestrator' {
	declare type Strings = string | string[];

			declare class Orchestrator  {
		add: Orchestrator.AddMethod;
		hasTask(name: string): boolean;
		start: Orchestrator.StartMethod;
		stop(): void;
		on(event: string, cb: (e: Orchestrator.OnCallbackEvent) => any): Orchestrator;
		onAll(cb: (e: Orchestrator.OnAllCallbackEvent) => any): void
	}

	declare module.exports: undefined


}

declare module 'Orchestrator' {
		declare interface AddMethodCallback {
		(callback?: Function): any,
		(): Q.Promise<any>,
		(): any
	}

	declare interface AddMethod {
		(name: string, deps?: string[], fn?: AddMethodCallback | Function): Orchestrator,
		(name: string, fn?: AddMethodCallback | Function): Orchestrator
	}

	declare interface StartMethod {
		(tasks: Strings, cb?: (error?: any) => any): Orchestrator,
		(...tasks: Strings[]): Orchestrator,
		(task1: Strings, task2: Strings, cb?: (error?: any) => any): Orchestrator,
		(task1: Strings, task2: Strings, task3: Strings, cb?: (error?: any) => any): Orchestrator,
		(task1: Strings, task2: Strings, task3: Strings, task4: Strings, cb?: (error?: any) => any): Orchestrator,
		(task1: Strings, task2: Strings, task3: Strings, task4: Strings, task5: Strings, cb?: (error?: any) => any): Orchestrator,
		(task1: Strings, task2: Strings, task3: Strings, task4: Strings, task5: Strings, task6: Strings, cb?: (error?: any) => any): Orchestrator
	}

	declare interface OnCallbackEvent {
		message: string,
		task: string,
		err: any,
		duration?: number
	}

	declare interface OnAllCallbackEvent {
		src: string
	}

			
}