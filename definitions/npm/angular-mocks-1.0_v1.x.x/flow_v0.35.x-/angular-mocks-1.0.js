

declare module 'angular-mocks-1.0' {
					
}

declare module 'npm$namespace$ng' {
		declare interface IAngularStatic {
		mock: IMockStatic
	}

	declare interface IMockStatic {
		debug(obj: any): string,
		inject(...fns: Function[]): any,
		module(...modules: any[]): any,
		TzDate(offset: number, timestamp: number): Date,
		TzDate(offset: number, timestamp: string): Date
	}

	declare interface IExceptionHandlerProvider {
		mode(mode: string): void
	}

	declare interface ITimeoutService {
		flush(): void
	}

	declare interface ILogService {
		assertEmpty(): void,
		reset(): void
	}

	declare interface LogCall {
		logs: string[]
	}

	declare interface IHttpBackendService {
		flush(count?: number): void,
		resetExpectations(): void,
		verifyNoOutstandingExpectation(): void,
		verifyNoOutstandingRequest(): void,
		expect(method: string, url: string, data?: any, headers?: any): mock.IRequestHandler,
		expect(method: string, url: RegExp, data?: any, headers?: any): mock.IRequestHandler,
		expect(method: RegExp, url: string, data?: any, headers?: any): mock.IRequestHandler,
		expect(method: RegExp, url: RegExp, data?: any, headers?: any): mock.IRequestHandler,
		when(
		method: string, url: string, data?: string, headers?: any
	): mock.IRequestHandler,
		when(
		method: string, url: RegExp, data?: string, headers?: any
	): mock.IRequestHandler,
		when(
		method: string, url: string, data?: RegExp, headers?: any
	): mock.IRequestHandler,
		when(
		method: string, url: RegExp, data?: RegExp, headers?: any
	): mock.IRequestHandler,
		when(
		method: RegExp, url: string, data?: string, headers?: any
	): mock.IRequestHandler,
		when(
		method: RegExp, url: RegExp, data?: string, headers?: any
	): mock.IRequestHandler,
		when(
		method: RegExp, url: string, data?: RegExp, headers?: any
	): mock.IRequestHandler,
		when(
		method: RegExp, url: RegExp, data?: RegExp, headers?: any
	): mock.IRequestHandler,
		expectDELETE(url: string, headers?: any): mock.IRequestHandler,
		expectDELETE(url: RegExp, headers?: any): mock.IRequestHandler,
		expectGET(url: string, headers?: any): mock.IRequestHandler,
		expectGET(url: RegExp, headers?: any): mock.IRequestHandler,
		expectHEAD(url: string, headers?: any): mock.IRequestHandler,
		expectHEAD(url: RegExp, headers?: any): mock.IRequestHandler,
		expectJSONP(url: string): mock.IRequestHandler,
		expectJSONP(url: RegExp): mock.IRequestHandler,
		expectPATCH(url: string, data?: any, headers?: any): mock.IRequestHandler,
		expectPATCH(url: RegExp, data?: any, headers?: any): mock.IRequestHandler,
		expectPOST(url: string, data?: any, headers?: any): mock.IRequestHandler,
		expectPOST(url: RegExp, data?: any, headers?: any): mock.IRequestHandler,
		expectPUT(url: string, data?: any, headers?: any): mock.IRequestHandler,
		expectPUT(url: RegExp, data?: any, headers?: any): mock.IRequestHandler,
		whenDELETE(url: string, headers?: any): mock.IRequestHandler,
		whenDELETE(url: RegExp, headers?: any): mock.IRequestHandler,
		whenGET(url: string, headers?: any): mock.IRequestHandler,
		whenGET(url: RegExp, headers?: any): mock.IRequestHandler,
		whenHEAD(url: string, headers?: any): mock.IRequestHandler,
		whenHEAD(url: RegExp, headers?: any): mock.IRequestHandler,
		whenJSONP(url: string): mock.IRequestHandler,
		whenJSONP(url: RegExp): mock.IRequestHandler,
		whenPATCH(url: string, data?: string, headers?: any): mock.IRequestHandler,
		whenPATCH(url: RegExp, data?: string, headers?: any): mock.IRequestHandler,
		whenPATCH(url: string, data?: RegExp, headers?: any): mock.IRequestHandler,
		whenPATCH(url: RegExp, data?: RegExp, headers?: any): mock.IRequestHandler,
		whenPOST(url: string, data?: string, headers?: any): mock.IRequestHandler,
		whenPOST(url: RegExp, data?: string, headers?: any): mock.IRequestHandler,
		whenPOST(url: string, data?: RegExp, headers?: any): mock.IRequestHandler,
		whenPOST(url: RegExp, data?: RegExp, headers?: any): mock.IRequestHandler,
		whenPUT(url: string, data?: string, headers?: any): mock.IRequestHandler,
		whenPUT(url: RegExp, data?: string, headers?: any): mock.IRequestHandler,
		whenPUT(url: string, data?: RegExp, headers?: any): mock.IRequestHandler,
		whenPUT(url: RegExp, data?: RegExp, headers?: any): mock.IRequestHandler
	}

			
}

declare module 'mock' {
		declare interface IRequestHandler {
		respond(func: Function): void,
		respond(status: number, data?: any, headers?: any): void,
		respond(data: any, headers?: any): void,
		passThrough(): void
	}

			
}