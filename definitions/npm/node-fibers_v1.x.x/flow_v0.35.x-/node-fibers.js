

declare module 'node-fibers' {
		declare interface Fiber {
		reset: () => any,
		run: (param?: any) => any,
		throwInto: (ex: any) => any
	}

			
}

declare module 'fibers' {
			declare function Fiber(fn: Function): Fiber

		declare module.exports: undefined


}

declare module 'Fiber' {
			declare export function yield(value?: any): any

		
}

declare module 'fibers/future' {
				declare class Future  {
		constructor(): this;
		detach(): void;
		get(): any;
		isResolved(): boolean;
		proxy(future: Future): void;
		proxyErrors(futureOrList: any): Future;
		resolver(): Function;
		resolve(fn: Function): void;
		resolveSuccess(fn: Function): void;
		return(result?: any): void;
		throw(error: any): void;
		wait(): void;
		wait(future: Future);
		wait(future_list: Future[]);
		wrap(fn: Function): Future
	}

	declare module.exports: undefined


}