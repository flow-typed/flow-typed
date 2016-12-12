import type { IBrowser, IProtractorLocatorStrategy, Element } from 'npm$namespace$protractor'

declare module 'angular-protractor' {
		declare interface selectorHelper {
		(cssLocator: string | Function | HTMLElement | Document | Array<any>): protractor.ElementFinder
	}

	declare interface cssArraySelectorHelper {
		(cssLocator: string): protractor.ElementArrayFinder
	}

			
}

declare module 'npm$namespace$protractor' {
		declare interface Element {
		(locator: webdriver.Locator): ElementFinder,
		all(locator: webdriver.Locator): ElementArrayFinder
	}

	declare interface ElementFinder {
		element(subLocator: webdriver.Locator): ElementFinder,
		all(subLocator: webdriver.Locator): ElementArrayFinder,
		$(selector: string): ElementFinder,
		$$(selector: string): ElementArrayFinder,
		isPresent(): webdriver.promise.Promise<boolean>,
		isElementPresent(subLocator: webdriver.Locator): webdriver.promise.Promise<boolean>,
		locator(): webdriver.Locator,
		getWebElement(): webdriver.WebElement,
		evaluate(expression: string): ElementFinder,
		allowAnimations(value: string): ElementFinder,
		clone(): ElementFinder
	}

	declare interface ElementArrayFinder {
		getWebElements(): webdriver.WebElement[],
		get(index: number): ElementFinder,
		first(): ElementFinder,
		last(): ElementFinder,
		count(): webdriver.promise.Promise<number>,
		each(fn: (element: ElementFinder, index: number) => void): void,
		map<T>(
		mapFn: (element: ElementFinder, index: number) => T
	): webdriver.promise.Promise<T[]>,
		map<T, T2>(
		mapFn: (element: ElementFinder, index: number) => T2
	): webdriver.promise.Promise<T[]>,
		filter(filterFn: (element: ElementFinder, index: number) => any): ElementArrayFinder,
		reduce<T>(
		reduceFn: (
		acc: T, element: ElementFinder, index: number, arr: ElementFinder[]
	) => webdriver.promise.Promise<T>, initialValue: T
	): webdriver.promise.Promise<T>,
		reduce<T>(
		reduceFn: (acc: T, element: ElementFinder, index: number, arr: ElementFinder[]) => T, initialValue: T
	): webdriver.promise.Promise<T>,
		asElementFinders_(): webdriver.promise.Promise<ElementFinder[]>,
		clone(): ElementArrayFinder,
		all(locator: webdriver.Locator): ElementArrayFinder,
		$$(selector: string): ElementArrayFinder,
		toElementFinder_(): ElementFinder,
		locator(): webdriver.Locator,
		evaluate(expression: string): ElementArrayFinder,
		allowAnimations(value: boolean): ElementArrayFinder,
		click(): webdriver.promise.Promise<void>,
		sendKeys(...var_args: string[]): webdriver.promise.Promise<void>,
		getTagName(): webdriver.promise.Promise<string[]>,
		getCssValue(cssStyleProperty: string): webdriver.promise.Promise<string[]>,
		getAttribute(attributeName: string): webdriver.promise.Promise<string[]>,
		getText(): webdriver.promise.Promise<string[]>,
		getSize(): webdriver.promise.Promise<webdriver.ISize[]>,
		getLocation(): webdriver.promise.Promise<webdriver.ILocation[]>,
		isEnabled(): webdriver.promise.Promise<boolean[]>,
		isSelected(): webdriver.promise.Promise<boolean[]>,
		submit(): webdriver.promise.Promise<void>,
		clear(): webdriver.promise.Promise<void>,
		isDisplayed(): webdriver.promise.Promise<boolean[]>,
		getOuterHtml(): webdriver.promise.Promise<string[]>,
		getId(): webdriver.promise.Promise<webdriver.IWebElementId[]>,
		getInnerHtml(): webdriver.promise.Promise<string[]>
	}

	declare interface LocatorWithColumn {
		column(index: number): webdriver.Locator,
		column(name: string): webdriver.Locator
	}

	declare interface RepeaterLocator {
		row(index: number): LocatorWithColumn
	}

	declare interface IProtractorLocatorStrategy {
		className: typeof undefined,
		css: typeof undefined,
		id: typeof undefined,
		linkText: typeof undefined,
		js: typeof undefined,
		name: typeof undefined,
		partialLinkText: typeof undefined,
		tagName: typeof undefined,
		xpath: typeof undefined,
		addLocator(name: string, script: string): void,
		addLocator(name: string, script: Function): void,
		binding(bindingDescriptor: string): webdriver.Locator,
		exactBinding(bindingDescriptor: string): webdriver.Locator,
		model(model: string): webdriver.Locator,
		buttonText(searchText: string): webdriver.Locator,
		partialButtonText(searchText: string): webdriver.Locator,
		repeater(repeatDescriptor: string): RepeaterLocator,
		cssContainingText(cssSelector: string, searchText: string): webdriver.Locator,
		options(optionsDescriptor: string): webdriver.Locator
	}

	declare interface Protractor {
		driver: webdriver.WebDriver,
		element(locator: webdriver.Locator): ElementFinder,
		$(selector: string): ElementFinder,
		$$(selector: string): ElementArrayFinder,
		baseUrl: string,
		rootEl: string,
		ignoreSynchronization: boolean,
		getPageTimeout: number,
		params: any,
		resetUrl: string,
		waitForAngular(): webdriver.promise.Promise<any>,
		addMockModule(name: string, script: string, ...varArgs: any[]): void,
		addMockModule(name: string, script: Function, ...varArgs: any[]): void,
		clearMockModules(): void,
		removeMockModule(name: string): void,
		get(destination: string, opt_timeout?: number): webdriver.promise.Promise<void>,
		refresh(opt_timeout?: number): webdriver.promise.Promise<void>,
		setLocation(url: string): webdriver.promise.Promise<void>,
		getLocationAbsUrl(): webdriver.promise.Promise<string>,
		debugger(): void,
		pause(opt_debugPort?: number): void
	}

	declare interface IBrowser {
		forkNewDriverInstance(opt_useSameUrl?: boolean, opt_copyMockModules?: boolean): Protractor,
		getProcessedConfig(): webdriver.promise.Promise<any>
	}

	declare function wrapDriver(
		webdriver: webdriver.WebDriver, opt_baseUrl?: string, opt_rootElement?: string
	): Protractor

	declare class ActionSequence extends webdriver$ActionSequence {
		
	}

	declare class Builder extends webdriver$Builder {
		
	}

	declare class Capabilities extends webdriver$Capabilities {
		
	}

	declare class Command extends webdriver$Command {
		
	}

	declare class EventEmitter extends webdriver$EventEmitter {
		
	}

	declare class Session extends webdriver$Session {
		
	}

	declare class WebDriver extends webdriver$WebDriver {
		
	}

	declare class WebElement extends webdriver$WebElement {
		
	}

	declare class WebElementPromise extends webdriver$WebElementPromise {
		
	}

	
}

declare module 'error' {
				declare class Error extends undefined$Error {
		
	}

	
}

declare module 'logging' {
			declare function getLevel(nameOrValue: string): webdriver.logging.ILevel

	declare function getLevel(nameOrValue: number): webdriver.logging.ILevel

	declare class Preferences extends undefined$Preferences {
		
	}

	declare class Entry extends undefined$Entry {
		
	}

	
}

declare module 'promise' {
			declare function all(arr: webdriver.promise.Promise<any>[]): webdriver.promise.Promise<any[]>

	declare function asap(value: any, callback: Function, opt_errback?: Function): void

	declare function controlFlow(): webdriver.promise.ControlFlow

	declare function createFlow<R>(
		callback: (flow: webdriver.promise.ControlFlow) => R
	): webdriver.promise.Promise<R>

	declare function isPromise(value: any): boolean

	declare function isGenerator(fn: Function): boolean

	declare function delayed(ms: number): webdriver.promise.Promise<void>

	declare function filter<T>(
		arr: T[], fn: (element: T, index: number, array: T[]) => any, opt_self?: any
	): webdriver.promise.Promise<T[]>

	declare function filter<T>(
		arr: webdriver.promise.Promise<T[]>, fn: (element: T, index: number, array: T[]) => any, opt_self?: any
	): webdriver.promise.Promise<T[]>

	declare function defer<T>(): webdriver.promise.Deferred<T>

	declare function fulfilled<T>(opt_value?: T): webdriver.promise.Promise<T>

	declare function map<T>(
		arr: T[], fn: (element: T, index: number, array: T[]) => any, opt_self?: any
	): webdriver.promise.Promise<T[]>

	declare function map<T>(
		arr: webdriver.promise.Promise<T[]>, fn: (element: T, index: number, array: T[]) => any, opt_self?: any
	): webdriver.promise.Promise<T[]>

	declare function rejected(opt_reason?: any): webdriver.promise.Promise<void>

	declare function checkedNodeCall<T>(fn: Function, ...var_args: any[]): webdriver.promise.Promise<T>

	declare function consume<T>(
		generatorFn: Function, opt_self?: any, ...var_args: any[]
	): webdriver.promise.Promise<T>

	declare function when<T, R>(
		value: T, opt_callback?: (value: T) => any, opt_errback?: (error: any) => any
	): webdriver.promise.Promise<R>

	declare function when<T, R>(
		value: webdriver.promise.Promise<T>, opt_callback?: (value: T) => any, opt_errback?: (error: any) => any
	): webdriver.promise.Promise<R>

	declare function fullyResolved<T>(value: any): webdriver.promise.Promise<T>

	declare function setDefaultFlow(flow: webdriver.promise.ControlFlow): void

	declare class Thenable<T> extends undefined$Thenable<T> {
		
	}

	declare class Promise<T> extends undefined$Promise<T> {
		
	}

	declare class Deferred<T> extends undefined$Deferred<T> {
		
	}

	declare class ControlFlow extends undefined$ControlFlow {
		
	}

	declare class CancellationError extends undefined$CancellationError {
		
	}

	
}

declare module 'stacktrace' {
			declare function format(error: any): any

	declare function get(): webdriver.stacktrace.Frame[]

	declare class Frame extends undefined$Frame {
		
	}

	declare class Snapshot extends undefined$Snapshot {
		
	}

	
}

declare module 'until' {
			declare function ableToSwitchToFrame(frame: number): webdriver.until.Condition<boolean>

	declare function ableToSwitchToFrame(frame: webdriver.IWebElement): webdriver.until.Condition<boolean>

	declare function ableToSwitchToFrame(frame: webdriver.Locator): webdriver.until.Condition<boolean>

	declare function ableToSwitchToFrame(
		frame: (webdriver: webdriver.WebDriver) => webdriver.IWebElement
	): webdriver.until.Condition<boolean>

	declare function ableToSwitchToFrame(frame: any): webdriver.until.Condition<boolean>

	declare function alertIsPresent(): webdriver.until.Condition<webdriver.Alert>

	declare function elementIsDisabled(element: webdriver.IWebElement): webdriver.until.Condition<boolean>

	declare function elementIsEnabled(element: webdriver.IWebElement): webdriver.until.Condition<boolean>

	declare function elementIsNotSelected(element: webdriver.IWebElement): webdriver.until.Condition<boolean>

	declare function elementIsNotVisible(element: webdriver.IWebElement): webdriver.until.Condition<boolean>

	declare function elementIsSelected(element: webdriver.IWebElement): webdriver.until.Condition<boolean>

	declare function elementIsVisible(element: webdriver.IWebElement): webdriver.until.Condition<boolean>

	declare function elementLocated(locator: webdriver.Locator): webdriver.until.Condition<webdriver.IWebElement>

	declare function elementLocated(locator: any): webdriver.until.Condition<webdriver.IWebElement>

	declare function elementTextContains(
		element: webdriver.IWebElement, substr: string
	): webdriver.until.Condition<boolean>

	declare function elementTextIs(
		element: webdriver.IWebElement, text: string
	): webdriver.until.Condition<boolean>

	declare function elementTextMatches(
		element: webdriver.IWebElement, regex: RegExp
	): webdriver.until.Condition<boolean>

	declare function elementsLocated(locator: webdriver.Locator): webdriver.until.Condition<webdriver.IWebElement[]>

	declare function elementsLocated(locator: any): webdriver.until.Condition<webdriver.IWebElement[]>

	declare function stalenessOf(element: webdriver.IWebElement): webdriver.until.Condition<boolean>

	declare function titleContains(substr: string): webdriver.until.Condition<boolean>

	declare function titleIs(title: string): webdriver.until.Condition<boolean>

	declare function titleMatches(regex: RegExp): webdriver.until.Condition<boolean>

	declare class Condition<T> extends undefined$Condition<T> {
		
	}

	
}

declare module 'ExpectedConditions' {
			declare function not<T>(
		expectedCondition: webdriver.until.Condition<T>
	): webdriver.until.Condition<T>

	declare function and<T>(...fns: webdriver.until.Condition<T>[]): webdriver.until.Condition<T>

	declare function or<T>(...fns: webdriver.until.Condition<T>[]): webdriver.until.Condition<T>

	declare function alertIsPresent<T>(): webdriver.until.Condition<T>

	declare function elementToBeClickable<T>(element: ElementFinder): webdriver.until.Condition<T>

	declare function textToBePresentInElement<T>(element: ElementFinder, text: string): webdriver.until.Condition<T>

	declare function textToBePresentInElementValue<T>(element: ElementFinder, text: string): webdriver.until.Condition<T>

	declare function titleContains<T>(title: string): webdriver.until.Condition<T>

	declare function titleIs<T>(title: string): webdriver.until.Condition<T>

	declare function presenceOf<T>(element: ElementFinder): webdriver.until.Condition<T>

	declare function stalenessOf<T>(element: ElementFinder): webdriver.until.Condition<T>

	declare function visibilityOf<T>(element: ElementFinder): webdriver.until.Condition<T>

	declare function invisibilityOf<T>(element: ElementFinder): webdriver.until.Condition<T>

	declare function elementToBeSelected<T>(element: ElementFinder): webdriver.until.Condition<T>

		
}

declare module 'protractor' {
					declare module.exports: undefined


}