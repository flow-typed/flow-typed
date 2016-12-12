import type { SinonStatic } from 'npm$namespace$Sinon'

declare module 'sinon' {
		declare interface Event {
		
	}

	declare interface Document {
		
	}

			declare module.exports: SinonStatic


}

declare module 'npm$namespace$Sinon' {
		declare interface SinonSpyCallApi {
		thisValue: any,
		args: any[],
		exception: any,
		returnValue: any,
		calledOn(obj: any): boolean,
		calledWith(...args: any[]): boolean,
		calledWithExactly(...args: any[]): boolean,
		calledWithMatch(...args: any[]): boolean,
		notCalledWith(...args: any[]): boolean,
		notCalledWithMatch(...args: any[]): boolean,
		returned(value: any): boolean,
		threw(): boolean,
		threw(type: string): boolean,
		threw(obj: any): boolean,
		callArg(pos: number): void,
		callArgOn(pos: number, obj: any, ...args: any[]): void,
		callArgWith(pos: number, ...args: any[]): void,
		callArgOnWith(pos: number, obj: any, ...args: any[]): void,
		yield(...args: any[]): void,
		yieldOn(obj: any, ...args: any[]): void,
		yieldTo(property: string, ...args: any[]): void,
		yieldToOn(property: string, obj: any, ...args: any[]): void
	}

	declare interface SinonSpyCall {
		calledBefore(call: SinonSpyCall): boolean,
		calledAfter(call: SinonSpyCall): boolean,
		calledWithNew(call: SinonSpyCall): boolean
	}

	declare interface SinonSpy {
		callCount: number,
		called: boolean,
		notCalled: boolean,
		calledOnce: boolean,
		calledTwice: boolean,
		calledThrice: boolean,
		firstCall: SinonSpyCall,
		secondCall: SinonSpyCall,
		thirdCall: SinonSpyCall,
		lastCall: SinonSpyCall,
		thisValues: any[],
		args: any[][],
		exceptions: any[],
		returnValues: any[],
		(...args: any[]): any,
		calledBefore(anotherSpy: SinonSpy): boolean,
		calledAfter(anotherSpy: SinonSpy): boolean,
		calledWithNew(): boolean,
		withArgs(...args: any[]): SinonSpy,
		alwaysCalledOn(obj: any): boolean,
		alwaysCalledWith(...args: any[]): boolean,
		alwaysCalledWithExactly(...args: any[]): boolean,
		alwaysCalledWithMatch(...args: any[]): boolean,
		neverCalledWith(...args: any[]): boolean,
		neverCalledWithMatch(...args: any[]): boolean,
		alwaysThrew(): boolean,
		alwaysThrew(type: string): boolean,
		alwaysThrew(obj: any): boolean,
		alwaysReturned(): boolean,
		invokeCallback(...args: any[]): void,
		getCall(n: number): SinonSpyCall,
		reset(): void,
		printf(format: string, ...args: any[]): string,
		restore(): void
	}

	declare interface SinonSpyStatic {
		(): SinonSpy,
		(func: any): SinonSpy,
		(obj: any, method: string): SinonSpy
	}

	declare interface SinonStatic {
		spy: SinonSpyStatic
	}

	declare interface SinonStub {
		resetBehavior(): void,
		returns(obj: any): SinonStub,
		returnsArg(index: number): SinonStub,
		returnsThis(): SinonStub,
		throws(type?: string): SinonStub,
		throws(obj: any): SinonStub,
		callsArg(index: number): SinonStub,
		callsArgOn(index: number, context: any): SinonStub,
		callsArgWith(index: number, ...args: any[]): SinonStub,
		callsArgOnWith(index: number, context: any, ...args: any[]): SinonStub,
		callsArgAsync(index: number): SinonStub,
		callsArgOnAsync(index: number, context: any): SinonStub,
		callsArgWithAsync(index: number, ...args: any[]): SinonStub,
		callsArgOnWithAsync(index: number, context: any, ...args: any[]): SinonStub,
		onCall(n: number): SinonStub,
		onFirstCall(): SinonStub,
		onSecondCall(): SinonStub,
		onThirdCall(): SinonStub,
		yields(...args: any[]): SinonStub,
		yieldsOn(context: any, ...args: any[]): SinonStub,
		yieldsTo(property: string, ...args: any[]): SinonStub,
		yieldsToOn(property: string, context: any, ...args: any[]): SinonStub,
		yieldsAsync(...args: any[]): SinonStub,
		yieldsOnAsync(context: any, ...args: any[]): SinonStub,
		yieldsToAsync(property: string, ...args: any[]): SinonStub,
		yieldsToOnAsync(property: string, context: any, ...args: any[]): SinonStub,
		withArgs(...args: any[]): SinonStub
	}

	declare interface SinonStubStatic {
		(): SinonStub,
		(obj: any): SinonStub,
		(obj: any, method: string): SinonStub,
		(obj: any, method: string, func: any): SinonStub
	}

	declare interface SinonStatic {
		stub: SinonStubStatic
	}

	declare interface SinonExpectation {
		atLeast(n: number): SinonExpectation,
		atMost(n: number): SinonExpectation,
		never(): SinonExpectation,
		once(): SinonExpectation,
		twice(): SinonExpectation,
		thrice(): SinonExpectation,
		exactly(n: number): SinonExpectation,
		withArgs(...args: any[]): SinonExpectation,
		withExactArgs(...args: any[]): SinonExpectation,
		on(obj: any): SinonExpectation,
		verify(): SinonExpectation,
		restore(): void
	}

	declare interface SinonExpectationStatic {
		create(methodName?: string): SinonExpectation
	}

	declare interface SinonMock {
		expects(method: string): SinonExpectation,
		restore(): void,
		verify(): void
	}

	declare interface SinonMockStatic {
		(): SinonExpectation,
		(obj: any): SinonMock
	}

	declare interface SinonStatic {
		expectation: SinonExpectationStatic,
		mock: SinonMockStatic
	}

	declare interface SinonFakeTimers {
		now: number,
		create(now: number): SinonFakeTimers,
		setTimeout(callback: (...args: any[]) => void, timeout: number, ...args: any[]): number,
		clearTimeout(id: number): void,
		setInterval(callback: (...args: any[]) => void, timeout: number, ...args: any[]): number,
		clearInterval(id: number): void,
		tick(ms: number): number,
		reset(): void,
		Date(): Date,
		Date(year: number): Date,
		Date(year: number, month: number): Date,
		Date(year: number, month: number, day: number): Date,
		Date(year: number, month: number, day: number, hour: number): Date,
		Date(year: number, month: number, day: number, hour: number, minute: number): Date,
		Date(
		year: number, month: number, day: number, hour: number, minute: number, second: number
	): Date,
		Date(
		year: number, month: number, day: number, hour: number, minute: number, second: number, ms: number
	): Date,
		restore(): void,
		setSystemTime(now: number): void,
		setSystemTime(date: Date): void
	}

	declare interface SinonFakeTimersStatic {
		(): SinonFakeTimers,
		(...timers: string[]): SinonFakeTimers,
		(now: number, ...timers: string[]): SinonFakeTimers
	}

	declare interface SinonStatic {
		useFakeTimers: SinonFakeTimersStatic,
		clock: SinonFakeTimers
	}

	declare interface SinonFakeUploadProgress {
		eventListeners: {
		progress: any[],
		load: any[],
		abort: any[],
		error: any[]
	},
		addEventListener(event: string, listener: (e: Event) => any): void,
		removeEventListener(event: string, listener: (e: Event) => any): void,
		dispatchEvent(event: Event): void
	}

	declare interface SinonFakeXMLHttpRequest {
		onCreate: (xhr: SinonFakeXMLHttpRequest) => void,
		url: string,
		method: string,
		requestHeaders: any,
		requestBody: string,
		status: number,
		statusText: string,
		async: boolean,
		username: string,
		password: string,
		withCredentials: boolean,
		upload: SinonFakeUploadProgress,
		responseXML: Document,
		getResponseHeader(header: string): string,
		getAllResponseHeaders(): any,
		restore(): void,
		useFilters: boolean,
		addFilter(
		filter: (
		method: string, url: string, async: boolean, username: string, password: string
	) => boolean
	): void,
		setResponseHeaders(headers: any): void,
		setResponseBody(body: string): void,
		respond(status: number, headers: any, body: string): void,
		autoRespond(ms: number): void
	}

	declare interface SinonFakeXMLHttpRequestStatic {
		(): SinonFakeXMLHttpRequest
	}

	declare interface SinonStatic {
		useFakeXMLHttpRequest: SinonFakeXMLHttpRequestStatic,
		FakeXMLHttpRequest: SinonFakeXMLHttpRequest
	}

	declare interface SinonFakeServer {
		autoRespond: boolean,
		autoRespondAfter: number,
		fakeHTTPMethods: boolean,
		getHTTPMethod: (request: SinonFakeXMLHttpRequest) => string,
		requests: SinonFakeXMLHttpRequest[],
		respondImmediately: boolean,
		respondWith(body: string): void,
		respondWith(response: any[]): void,
		respondWith(fn: (xhr: SinonFakeXMLHttpRequest) => void): void,
		respondWith(url: string, body: string): void,
		respondWith(url: string, response: any[]): void,
		respondWith(url: string, fn: (xhr: SinonFakeXMLHttpRequest) => void): void,
		respondWith(method: string, url: string, body: string): void,
		respondWith(method: string, url: string, response: any[]): void,
		respondWith(method: string, url: string, fn: (xhr: SinonFakeXMLHttpRequest) => void): void,
		respondWith(url: RegExp, body: string): void,
		respondWith(url: RegExp, response: any[]): void,
		respondWith(url: RegExp, fn: (xhr: SinonFakeXMLHttpRequest) => void): void,
		respondWith(method: string, url: RegExp, body: string): void,
		respondWith(method: string, url: RegExp, response: any[]): void,
		respondWith(method: string, url: RegExp, fn: (xhr: SinonFakeXMLHttpRequest) => void): void,
		respond(): void,
		restore(): void
	}

	declare interface SinonFakeServerStatic {
		create(): SinonFakeServer
	}

	declare interface SinonStatic {
		fakeServer: SinonFakeServerStatic,
		fakeServerWithClock: SinonFakeServerStatic
	}

	declare interface SinonExposeOptions {
		prefix?: string,
		includeFail?: boolean
	}

	declare interface SinonAssert {
		failException: string,
		fail: (message?: string) => void,
		pass: (assertion: any) => void,
		notCalled(spy: SinonSpy): void,
		called(spy: SinonSpy): void,
		calledOnce(spy: SinonSpy): void,
		calledTwice(spy: SinonSpy): void,
		calledThrice(spy: SinonSpy): void,
		callCount(spy: SinonSpy, count: number): void,
		callOrder(...spies: SinonSpy[]): void,
		calledOn(spy: SinonSpy, obj: any): void,
		alwaysCalledOn(spy: SinonSpy, obj: any): void,
		calledWith(spy: SinonSpy, ...args: any[]): void,
		alwaysCalledWith(spy: SinonSpy, ...args: any[]): void,
		neverCalledWith(spy: SinonSpy, ...args: any[]): void,
		calledWithExactly(spy: SinonSpy, ...args: any[]): void,
		alwaysCalledWithExactly(spy: SinonSpy, ...args: any[]): void,
		calledWithMatch(spy: SinonSpy, ...args: any[]): void,
		alwaysCalledWithMatch(spy: SinonSpy, ...args: any[]): void,
		neverCalledWithMatch(spy: SinonSpy, ...args: any[]): void,
		threw(spy: SinonSpy): void,
		threw(spy: SinonSpy, exception: string): void,
		threw(spy: SinonSpy, exception: any): void,
		alwaysThrew(spy: SinonSpy): void,
		alwaysThrew(spy: SinonSpy, exception: string): void,
		alwaysThrew(spy: SinonSpy, exception: any): void,
		expose(obj: any, options?: SinonExposeOptions): void
	}

	declare interface SinonStatic {
		assert: SinonAssert
	}

	declare interface SinonMatcher {
		and(expr: SinonMatcher): SinonMatcher,
		or(expr: SinonMatcher): SinonMatcher
	}

	declare interface SinonMatch {
		(value: number): SinonMatcher,
		(value: string): SinonMatcher,
		(expr: RegExp): SinonMatcher,
		(obj: any): SinonMatcher,
		(callback: (value: any) => boolean): SinonMatcher,
		any: SinonMatcher,
		defined: SinonMatcher,
		truthy: SinonMatcher,
		falsy: SinonMatcher,
		bool: SinonMatcher,
		number: SinonMatcher,
		string: SinonMatcher,
		object: SinonMatcher,
		func: SinonMatcher,
		array: SinonMatcher,
		regexp: SinonMatcher,
		date: SinonMatcher,
		same(obj: any): SinonMatcher,
		typeOf(type: string): SinonMatcher,
		instanceOf(type: any): SinonMatcher,
		has(property: string, expect?: any): SinonMatcher,
		hasOwn(property: string, expect?: any): SinonMatcher
	}

	declare interface SinonStatic {
		match: SinonMatch
	}

	declare interface SinonSandboxConfig {
		injectInto?: any,
		properties?: string[],
		useFakeTimers?: any,
		useFakeServer?: any
	}

	declare interface SinonSandbox {
		clock: SinonFakeTimers,
		requests: SinonFakeXMLHttpRequest,
		server: SinonFakeServer,
		spy: SinonSpyStatic,
		stub: SinonStubStatic,
		mock: SinonMockStatic,
		useFakeTimers: SinonFakeTimersStatic,
		useFakeXMLHttpRequest: SinonFakeXMLHttpRequestStatic,
		useFakeServer(): SinonFakeServer,
		restore(): void
	}

	declare interface SinonSandboxStatic {
		create(): SinonSandbox,
		create(config: SinonSandboxConfig): SinonSandbox
	}

	declare interface SinonStatic {
		sandbox: SinonSandboxStatic
	}

	declare interface SinonTestConfig {
		injectIntoThis?: boolean,
		injectInto?: any,
		properties?: string[],
		useFakeTimers?: boolean,
		useFakeServer?: boolean
	}

	declare interface SinonTestWrapper {
		(...args: any[]): any
	}

	declare interface SinonStatic {
		config: SinonTestConfig,
		test(fn: (...args: any[]) => any): SinonTestWrapper,
		testCase(tests: any): any
	}

	declare interface SinonStatic {
		createStubInstance(constructor: any): SinonStub,
		format(obj: any): string,
		log(message: string): void,
		restore(object: any): void
	}

			
}