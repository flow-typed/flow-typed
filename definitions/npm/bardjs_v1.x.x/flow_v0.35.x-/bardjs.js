

declare module 'bardjs' {
					
}

declare module 'npm$namespace$bard' {
			declare function $httpBackend($provide: angular.auto.IProvideService): any

	declare function $q($provide: angular.auto.IProvideService): any

	declare function addGlobals(...globals: any[]): void

	declare function appModule(...fns: (string | Function | Object)[]): () => void

	declare function assertFail(message: string): Chai.AssertionError

	declare function asyncModule(...fns: (string | Function | Object)[]): () => void

	declare function debugging(newFlag?: any): boolean

	declare function fakeLogger($provide: angular.auto.IProvideService): void

	declare function fakeRouteHelperProvider($provide: angular.auto.IProvideService): void

	declare function fakeRouteProvider($provide: angular.auto.IProvideService): void

	declare function fakeStateProvider($provide: angular.auto.IProvideService): void

	declare function fakeToastr($provide: angular.auto.IProvideService): void

	declare function inject(context?: Function, ...args: string[]): void

	declare function log(message: any): void

	declare function mochaRunnerListener(runner: Mocha.IRunner): void

	declare function mockService(service: any, config: any): any

	declare function replaceAccentChars(text: string): string

	declare function verifyNoOutstandingHttpRequests(): void

	declare function wrapWithDone(callback: Function, done: Function): Function

		
}