

declare module 'express-brute' {
		declare interface MemoryStoreOptions {
		prefix: string
	}

	declare interface ExpressBruteMiddleware {
		failCallback: Function,
		ignoreIP: boolean,
		key: any
	}

	declare interface ExpressBruteOptions {
		freeRetries?: number,
		proxyDepth?: number,
		attachResetToRequest?: boolean,
		refreshTimeoutOnRequest?: boolean,
		minWait?: number,
		maxWait?: number,
		lifetime?: number,
		failCallback?: (
		req: express.Request, res: express.Response, next: Function, nextValidRequestDate: any
	) => void,
		handleStoreError?: any
	}

		declare class ExpressBrute  {
		constructor(store: any, options?: ExpressBruteOptions): this;
		getMiddleware(options: ExpressBruteMiddleware): express.RequestHandler;
		getIPFromRequest(request: express.Request): express.RequestHandler;
		prevent(
		request: express.Request, response: express.Response, next: Function
	): express.RequestHandler;
		reset(ip: string, key: string, next: Function): express.RequestHandler
	}

	declare module.exports: undefined


}

declare module 'ExpressBrute' {
				declare export class MemoryStore  {
		constructor(options?: MemoryStoreOptions): this;
		get(key: string, callback: (error: any, data: Object) => void): void;
		set(
		key: string, value: any, lifetime: number, callback: (error: any) => void
	): void;
		reset(key: string, callback: (error: any) => void): void
	}

	
}