import type { RunFunctionWithDescription, RunFunction, PauseFunction, SleepFunction, UsingFunction, BindingFunction, AngularModel } from 'npm$namespace$angularScenario'

declare module 'angular-scenario-1.0' {
			declare function browser(): angularScenario.Browser

	declare function expect(expectation: angularScenario.Future): angularScenario.Expect

	declare function input(ngModelBinding: string): angularScenario.Input

	declare function repeater(selector: string, repeaterDescription?: string): angularScenario.Repeater

	declare function select(ngModelBinding: string): angularScenario.Select

	declare function element(selector: string, elementDescription?: string): angularScenario.Element

		
}

declare module 'npm$namespace$angularScenario' {
		declare export interface AngularModel {
		scenario: any
	}

	declare export interface RunFunction {
		(functionToRun: any): any
	}

	declare export interface RunFunctionWithDescription {
		(description: string, functionToRun: any): any
	}

	declare export interface PauseFunction {
		(): any
	}

	declare export interface SleepFunction {
		(seconds: number): any
	}

	declare export interface Future {
		
	}

	declare export interface testWindow {
		href(): Future,
		path(): Future,
		search(): Future,
		hash(): Future
	}

	declare export interface testLocation {
		url(): Future,
		path(): Future,
		search(): Future,
		hash(): Future
	}

	declare export interface Browser {
		navigateTo(url: string): void,
		navigateTo(urlDescription: string, urlFunction: () => string): void,
		reload(): void,
		window(): testWindow,
		location(): testLocation
	}

	declare export interface Matchers {
		toEqual(value: any): void,
		toBe(value: any): void,
		toBeDefined(): void,
		toBeTruthy(): void,
		toBeFalsy(): void,
		toMatch(regularExpression: any): void,
		toBeNull(): void,
		toContain(value: any): void,
		toBeLessThan(value: any): void,
		toBeGreaterThan(value: any): void
	}

	declare export interface CustomMatchers {
		
	}

	declare export interface Expect {
		not(): angularScenario.CustomMatchers
	}

	declare export interface UsingFunction {
		(selector: string, selectorDescription?: string): void
	}

	declare export interface BindingFunction {
		(bracketBindingExpression: string): Future
	}

	declare export interface Input {
		enter(value: any),
		check(): any,
		select(radioButtonValue: any): any,
		val(): Future
	}

	declare export interface Repeater {
		count(): Future,
		row(index: number): Future,
		column(ngBindingExpression: string): Future
	}

	declare export interface Select {
		option(value: any): any,
		option(...listOfValues: any[]): any
	}

	declare export interface Element {
		count(): Future,
		click(): any,
		query(
		callback: (
		selectedDOMElements: any[], callbackWhenDone: (objNull: any, futureValue: any) => any
	) => any
	): any,
		val(): Future,
		text(): Future,
		html(): Future,
		height(): Future,
		innerHeight(): Future,
		outerHeight(): Future,
		width(): Future,
		innerWidth(): Future,
		outerWidth(): Future,
		position(): Future,
		scrollLeft(): Future,
		scrollTop(): Future,
		offset(): Future,
		val(value: any): void,
		text(value: any): void,
		html(value: any): void,
		height(value: any): void,
		innerHeight(value: any): void,
		outerHeight(value: any): void,
		width(value: any): void,
		innerWidth(value: any): void,
		outerWidth(value: any): void,
		position(value: any): void,
		scrollLeft(value: any): void,
		scrollTop(value: any): void,
		offset(value: any): void,
		attr(key: any): Future,
		prop(key: any): Future,
		css(key: any): Future,
		attr(key: any, value: any): void,
		prop(key: any, value: any): void,
		css(key: any, value: any): void
	}

			
}