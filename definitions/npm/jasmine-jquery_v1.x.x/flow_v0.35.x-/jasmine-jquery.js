

declare module 'jasmine-jquery' {
			declare function sandbox(attributes?: any): string

	declare function readFixtures(...uls: string[]): string

	declare function preloadFixtures(...uls: string[]): void

	declare function loadFixtures(...uls: string[]): void

	declare function appendLoadFixtures(...uls: string[]): void

	declare function setFixtures(html: string): string

	declare function appendSetFixtures(html: string): void

	declare function preloadStyleFixtures(...uls: string[]): void

	declare function loadStyleFixtures(...uls: string[]): void

	declare function appendLoadStyleFixtures(...uls: string[]): void

	declare function setStyleFixtures(html: string): void

	declare function appendSetStyleFixtures(html: string): void

	declare function loadJSONFixtures(...uls: string[]): jasmine.JSONFixtures

	declare function getJSONFixture(url: string): any

	declare function spyOnEvent(selector: string, eventName: string): jasmine.JQueryEventSpy

		
}

declare module 'npm$namespace$jasmine' {
		declare interface Fixtures {
		fixturesPath: string,
		containerId: string,
		set(html: string): string,
		appendSet(html: string): void,
		preload(...uls: string[]): void,
		load(...uls: string[]): void,
		appendLoad(...uls: string[]): void,
		read(...uls: string[]): string,
		clearCache(): void,
		cleanUp(): void,
		sandbox(attributes?: any): string,
		createContainer_(html: string): string,
		addToContainer_(html: string): void,
		getFixtureHtml_(url: string): string,
		loadFixtureIntoCache_(relativeUrl: string): void,
		makeFixtureUrl_(relativeUrl: string): string,
		proxyCallTo_(methodName: string, passedArguments: any): any
	}

	declare interface StyleFixtures {
		fixturesPath: string,
		set(html: string): string,
		appendSet(html: string): void,
		preload(...uls: string[]): void,
		load(...uls: string[]): void,
		appendLoad(...uls: string[]): void,
		read_(...uls: string[]): string,
		clearCache(): void,
		cleanUp(): void,
		createStyle_(html: string): void,
		getFixtureHtml_(url: string): string,
		loadFixtureIntoCache_(relativeUrl: string): void,
		makeFixtureUrl_(relativeUrl: string): string,
		proxyCallTo_(methodName: string, passedArguments: any): any
	}

	declare interface JSONFixtures {
		fixturesPath: string,
		load(...uls: string[]): void,
		read(...uls: string[]): string,
		clearCache(): void,
		getFixtureData_(url: string): any,
		loadFixtureIntoCache_(relativeUrl: string): void,
		proxyCallTo_(methodName: string, passedArguments: any): any
	}

	declare interface Matchers {
		toHaveClass(className: string): boolean,
		toHaveCss(css: any): boolean,
		toBeVisible(): boolean,
		toBeHidden(): boolean,
		toBeSelected(): boolean,
		toBeChecked(): boolean,
		toBeEmpty(): boolean,
		toExist(): boolean,
		toHaveLength(length: number): boolean,
		toHaveAttr(attributeName: string, expectedAttributeValue?: any): boolean,
		toHaveProp(propertyName: string, expectedPropertyValue?: any): boolean,
		toHaveId(id: string): boolean,
		toHaveHtml(html: string): boolean,
		toContainHtml(html: string): boolean,
		toHaveText(text: string): boolean,
		toContainText(text: string): boolean,
		toHaveValue(value: string): boolean,
		toHaveData(key: string, expectedValue: string): boolean,
		toBe(selector: JQuery): boolean,
		toContain(selector: JQuery): boolean,
		toContainElement(selector: string): boolean,
		toBeMatchedBy(selector: string): boolean,
		toBeDisabled(): boolean,
		toBeFocused(): boolean,
		toHandle(eventName: string): boolean,
		toHandleWith(eventName: string, eventHandler: JQueryCallback): boolean,
		toHaveBeenTriggered(): boolean,
		toHaveBeenTriggeredOn(selector: string): boolean,
		toHaveBeenTriggeredOnAndWith(selector: string, ...args: any[]): boolean,
		toHaveBeenPrevented(): boolean,
		toHaveBeenPreventedOn(selector: string): boolean,
		toHaveBeenStopped(): boolean,
		toHaveBeenStoppedOn(selector: string): boolean,
		toBeInDOM(): boolean
	}

	declare interface JQueryEventSpy {
		selector: string,
		eventName: string,
		handler(eventObject: JQueryEventObject): any,
		reset(): any
	}

	declare interface JasmineJQuery {
		browserTagCaseIndependentHtml(html: string): string,
		elementToString(element: JQuery): string,
		matchersClass: any,
		events: JasmineJQueryEvents
	}

	declare interface JasmineJQueryEvents {
		spyOn(selector: string, eventName: string): JQueryEventSpy,
		args(selector: string, eventName: string): any,
		wasTriggered(selector: string, eventName: string): boolean,
		wasTriggeredWith(
		selector: string, eventName: string, expectedArgs: any, env: jasmine.Env
	): boolean,
		wasPrevented(selector: string, eventName: string): boolean,
		wasStopped(selector: string, eventName: string): boolean,
		cleanUp(): void
	}

	declare function spiedEventsKey(selector: JQuery, eventName: string): string

	declare function getFixtures(): Fixtures

	declare function getStyleFixtures(): StyleFixtures

	declare function getJSONFixtures(): JSONFixtures

		
}