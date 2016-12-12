

declare module 'Finch' {
		declare interface FinchCallback {
		(bindings?: any, childCallback?: () => void): any
	}

	declare interface ExpandedCallback {
		setup?: FinchCallback,
		load?: FinchCallback,
		unload?: FinchCallback,
		teardown?: FinchCallback
	}

	declare interface ObserveCallback {
		(...args: any[]): string
	}

	declare interface FinchOptions {
		CoerceParameterTypes?: boolean
	}

	declare interface FinchStatic {
		route(route: string, callback: FinchCallback): void,
		route(route: string, callbacks: ExpandedCallback): void,
		call(uri: string): void,
		observe(argN: string[], callback: (params: ObserveCallback) => void): void,
		observe(callback: (params: ObserveCallback) => void): void,
		observe(...args: any[]): void,
		navigate(uri: string, queryParams?: any, doUpdate?: boolean): void,
		navigate(uri: string, doUpdate: boolean): void,
		navigate(queryParams: any, doUpdate?: boolean): void,
		listen(): boolean,
		ignore(): boolean,
		abort(): void,
		options(options: FinchOptions): void
	}

			
}

declare module 'finch' {
					declare module.exports: undefined


}