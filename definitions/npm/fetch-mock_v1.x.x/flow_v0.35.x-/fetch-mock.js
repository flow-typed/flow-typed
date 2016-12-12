

declare module 'fetch-mock' {
	declare type MockRequest = Request | RequestInit;

	declare type MockMatcherFunction = (url: string, opts: MockRequest) => boolean;

	declare type MockMatcher = string | RegExp | MockMatcherFunction;

	declare type MockResponse = Response | Promise<Response> | number | Promise<number> | string | Promise<string> | Object | Promise<Object> | MockResponseObject | Promise<MockResponseObject>;

	declare type MockResponseFunction = (url: string, opts: MockRequest) => MockResponse;

	declare type MockCall = [string, MockRequest];

	declare interface MockResponseObject {
		body?: string | {
		
	},
		status?: number,
		headers?: {
		[key: string]: string
	},
		throws?: boolean,
		sendAsJson?: boolean
	}

	declare interface MockOptions {
		name?: string,
		method?: string,
		matcher?: MockMatcher,
		response?: MockResponse | MockResponseFunction
	}

	declare interface MatchedRoutes {
		matched: Array<MockCall>,
		unmatched: Array<MockCall>
	}

	declare interface MockOptionsMethodGet {
		method: "GET"
	}

	declare interface MockOptionsMethodPost {
		method: "POST"
	}

	declare interface MockOptionsMethodPut {
		method: "PUT"
	}

	declare interface MockOptionsMethodDelete {
		method: "DELETE"
	}

	declare interface MockOptionsMethodHead {
		method: "HEAD"
	}

	declare interface FetchMockStatic {
		mock(matcher: MockMatcher, response: MockResponse | MockResponseFunction): this,
		mock(
		matcher: MockMatcher, response: MockResponse | MockResponseFunction, options: MockOptions
	): this,
		mock(options: MockOptions): this,
		get(
		matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodGet
	): this,
		post(
		matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodPost
	): this,
		put(
		matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodPut
	): this,
		delete(
		matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodDelete
	): this,
		head(
		matcher: MockMatcher, reponse: MockResponse | MockResponseFunction, options?: MockOptionsMethodHead
	): this,
		restore(): this,
		reset(): this,
		calls(): MatchedRoutes,
		calls(matcherName?: string): Array<MockCall>,
		called(): boolean,
		called(matcherName?: string): boolean,
		lastCall(): MockCall,
		lastCall(matcherName?: string): MockCall,
		lastUrl(): string,
		lastUrl(matcherName?: string): string,
		lastOptions(): MockRequest,
		lastOptions(matcherName?: string): MockRequest,
		configure(opts: Object): void
	}

			declare module.exports: FetchMockStatic


}