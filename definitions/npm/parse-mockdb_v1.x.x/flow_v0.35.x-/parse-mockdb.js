

declare module 'parse-mockdb' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ParseMockDB' {
	declare type HookType = "beforeSave" | "beforeDelete";

		declare function mockDB(): void

	declare function unMockDB(): void

	declare function cleanUp(): void

	declare function promiseResultSync<T>(promise: Parse.IPromise<T>): T

	declare function registerHook(
		className: string, hookType: HookType, hookFn: (request: Parse.Cloud.BeforeSaveRequest) => Parse.IPromise<any>
	): void

		
}