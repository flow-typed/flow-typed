import type { IInjectStatic } from 'npm$namespace$angular'

declare module 'angular-mocks' {
					
}

declare module 'angular-mocks/ngMock' {
					declare module.exports: undefined


}

declare module 'angular-mocks/ngMockE2E' {
					declare module.exports: undefined


}

declare module 'angular-mocks/ngAnimateMock' {
					declare module.exports: undefined


}

declare module 'npm$namespace$angular' {
		declare interface IAngularStatic {
		mock: IMockStatic
	}

	declare interface IInjectStatic {
		(...fns: Function[]): any,
		(...inlineAnnotatedConstructor: any[]): any,
		strictDi(val?: boolean): void
	}

	declare interface IMockStatic {
		dump(obj: any): string,
		inject: IInjectStatic,
		module: {
		(...modules: any[]): any,
		sharedInjector(): void
	},
		TzDate(offset: number, timestamp: number): Date,
		TzDate(offset: number, timestamp: string): Date
	}

	declare interface IExceptionHandlerProvider {
		mode(mode: string): void
	}

	declare interface ITimeoutService {
		flush(delay?: number): void,
		flushNext(expectedDelay?: number): void,
		verifyNoPendingTasks(): void
	}

	declare interface IIntervalService {
		flush(millis?: number): number
	}

	declare interface ILogService {
		assertEmpty(): void,
		reset(): void
	}

	declare interface ILogCall {
		logs: string[]
	}

	declare interface IControllerService {
		(controllerConstructor: NO PRINT IMPLEMENTED: ConstructorType, locals?: any, bindings?: any): T,
		(controllerConstructor: Function, locals?: any, bindings?: any): T,
		(controllerName: string, locals?: any, bindings?: any): T
	}

	declare interface IComponentControllerService {
		(componentName: string, locals: {
		$scope: IScope,
		[key: string]: any
	}, bindings?: TBinding, ident?: string): T
	}

	declare interface IHttpBackendService {
		flush(count?: number): void,
		resetExpectations(): void,
		verifyNoOutstandingExpectation(): void,
		verifyNoOutstandingRequest(): void,
		expect(
		method: string, url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]
	): mock.IRequestHandler,
		expectDELETE(
		url: string | RegExp | ((url: string) => boolean), headers?: Object, keys?: Object[]
	): mock.IRequestHandler,
		expectGET(
		url: string | RegExp | ((url: string) => boolean), headers?: Object, keys?: Object[]
	): mock.IRequestHandler,
		expectHEAD(
		url: string | RegExp | ((url: string) => boolean), headers?: Object, keys?: Object[]
	): mock.IRequestHandler,
		expectJSONP(
		url: string | RegExp | ((url: string) => boolean), keys?: Object[]
	): mock.IRequestHandler,
		expectPATCH(
		url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object, keys?: Object[]
	): mock.IRequestHandler,
		expectPOST(
		url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object, keys?: Object[]
	): mock.IRequestHandler,
		expectPUT(
		url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object, keys?: Object[]
	): mock.IRequestHandler,
		when(
		method: string, url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]
	): mock.IRequestHandler,
		whenDELETE(
		url: string | RegExp | ((url: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]
	): mock.IRequestHandler,
		whenGET(
		url: string | RegExp | ((url: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]
	): mock.IRequestHandler,
		whenHEAD(
		url: string | RegExp | ((url: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]
	): mock.IRequestHandler,
		whenJSONP(
		url: string | RegExp | ((url: string) => boolean), keys?: Object[]
	): mock.IRequestHandler,
		whenPATCH(
		url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]
	): mock.IRequestHandler,
		whenPOST(
		url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]
	): mock.IRequestHandler,
		whenPUT(
		url: string | RegExp | ((url: string) => boolean), data?: string | RegExp | Object | ((data: string) => boolean), headers?: Object | ((object: Object) => boolean), keys?: Object[]
	): mock.IRequestHandler
	}

			
}

declare module 'mock' {
		declare interface IRequestHandler {
		respond(
		func: ((
		method: string, url: string, data: string | Object, headers: Object, params?: any
	) => [number, string | Object, Object, string])
	): IRequestHandler,
		respond(
		status: number, data: string | Object, headers?: Object, responseText?: string
	): IRequestHandler,
		respond(
		data: string | Object, headers?: Object, responseText?: string
	): IRequestHandler,
		passThrough(): IRequestHandler
	}

			
}