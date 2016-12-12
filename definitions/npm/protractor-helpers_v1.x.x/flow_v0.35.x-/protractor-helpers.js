

declare module 'protractor-helpers' {
			declare function $data(hook: string): protractor.ElementFinder

	declare function $$data(hook: string): protractor.ElementArrayFinder

	declare function not(arg: webdriver.promise.IThenable<any>): webdriver.promise.IThenable<boolean>

	declare function translate(
		translationId: string, interpolateParams?: any
	): webdriver.promise.IThenable<string>

	declare function translate(
		translationId: string[], interpolateParams?: any
	): webdriver.promise.IThenable<{
		[key: string]: string
	}>

	declare function safeGet(url: string): void

	declare function maximizeWindow(width?: number, height?: number): void

	declare function resetPosition(): void

	declare function moveToElement(hook: string): void

	declare function displayHover(element: protractor.ElementFinder): void

	declare function waitForElement(element: protractor.ElementFinder, timeout?: number): void

	declare function waitForElementToDisappear(element: protractor.ElementFinder, timeout?: number): void

	declare function selectOptionByText(select: protractor.ElementFinder, text: string): void

	declare function selectOptionByIndex(select: protractor.ElementFinder, index: number): void

	declare function selectOption(option: protractor.ElementFinder): void

	declare function isFirefox(): boolean

	declare function isIE(): boolean

	declare function createMessage(actual: string, message: string, isNot: any): string

	declare function createMessage(actual: protractor.ElementFinder, message: string, isNot: any): string

	declare function createMessage(actual: protractor.ElementArrayFinder, message: string, isNot: any): string

	declare function clearAndSetValue(input: protractor.ElementFinder, value: string): void

	declare function hasClass(
		element: protractor.ElementFinder, className: string
	): webdriver.promise.IThenable<boolean>

	declare function hasValue(
		element: protractor.ElementFinder, expectedValue: string
	): webdriver.promise.IThenable<boolean>

	declare function hasValue(
		element: protractor.ElementFinder, expectedValue: number
	): webdriver.promise.IThenable<boolean>

	declare function hasLink(
		element: protractor.ElementFinder, url: string
	): webdriver.promise.IThenable<boolean>

	declare function isDisabled(element: protractor.ElementFinder): webdriver.promise.IThenable<boolean>

	declare function isChecked(element: protractor.ElementFinder): webdriver.promise.IThenable<boolean>

	declare function getFilteredConsoleErrors(): webdriver.promise.IThenable<string[]>

		
}

declare module 'npm$namespace$protractor' {
		declare interface ElementArrayFinder {
		getByText(text: string): protractor.ElementFinder,
		$$data(hook: string): protractor.ElementArrayFinder
	}

	declare interface ElementFinder {
		$data(hook: string): protractor.ElementFinder
	}

	declare interface IProtractorLocatorStrategy {
		dataHook(
		hook: string, optParentElement?: protractor.ElementFinder, optRootSelector?: string
	): webdriver.Locator,
		dataHookAll(
		hook: string, optParentElement?: protractor.ElementFinder, optRootSelector?: string
	): webdriver.Locator
	}

			
}

declare module 'npm$namespace$jasmine' {
		declare interface Matchers {
		toBePresent(): boolean,
		toBeDisplayed(): boolean,
		toHaveCountOf(expectedCount: number): boolean,
		toHaveText(expectedText: string): boolean,
		toMatchRegex(regex: RegExp): boolean,
		toMatchMoney(expectedValue: number, currencySymbol?: string): boolean,
		toMatchMoneyWithFraction(expectedValue: number, currencySymbol?: string): boolean,
		toHaveValue(actual: string | number): boolean,
		toHaveClass(className: string): boolean,
		toHaveUrl(url: string): boolean,
		toBeDisabled(): boolean,
		toBeChecked(): boolean,
		toBeValid(): boolean,
		toBeInvalid(): boolean,
		toBeInvalidRequired(): boolean,
		toMatchTranslated(translationId: string, interpolateParams?: any): boolean,
		toMatchTranslated(translationId: string[], interpolateParams?: any): boolean
	}

			
}