

declare module 'jshamcrest' {
			declare function assertThat(
		actual: any, matcher?: JsHamcrest.Matcher, message?: any
	): JsHamcrest.Description

	declare function empty(): JsHamcrest.SimpleMatcher

	declare function everyItem(matcherOrValue: any): JsHamcrest.SimpleMatcher

	declare function hasItem(matcherOrValue: any): JsHamcrest.SimpleMatcher

	declare function hasItems(...matchersOrValues: any[]): JsHamcrest.SimpleMatcher

	declare function hasSize(matcherOrValue: any): JsHamcrest.SimpleMatcher

	declare function isIn(...items: any[]): JsHamcrest.SimpleMatcher

	declare function oneOf(...items: any[]): JsHamcrest.SimpleMatcher

	declare function allOf(...matchersOrValues: any[]): JsHamcrest.SimpleMatcher

	declare function anyOf(...matchersOrValues: any[]): JsHamcrest.SimpleMatcher

	declare function anything(): JsHamcrest.SimpleMatcher

	declare function both(matcherOrValue: any): JsHamcrest.CombinableMatcher

	declare function either(matcherOrValue: any): JsHamcrest.CombinableMatcher

	declare function equalTo(expected: any): JsHamcrest.SimpleMatcher

	declare function is(matcherOrValue: any): JsHamcrest.SimpleMatcher

	declare function nil(): JsHamcrest.SimpleMatcher

	declare function not(matcherOrValue: any): JsHamcrest.SimpleMatcher

	declare function raises(exceptionName: string): JsHamcrest.SimpleMatcher

	declare function raisesAnything(): JsHamcrest.SimpleMatcher

	declare function sameAs(expected: any): JsHamcrest.SimpleMatcher

	declare function truth(): JsHamcrest.SimpleMatcher

	declare function between(start: any): JsHamcrest.BetweenBuilder

	declare function closeTo(expected: number, delta?: number): JsHamcrest.SimpleMatcher

	declare function divisibleBy(divisor: number): JsHamcrest.SimpleMatcher

	declare function even(): JsHamcrest.SimpleMatcher

	declare function greaterThan(expected: any): JsHamcrest.SimpleMatcher

	declare function greaterThanOrEqualTo(expected: any): JsHamcrest.SimpleMatcher

	declare function lessThan(expected: any): JsHamcrest.SimpleMatcher

	declare function lessThanOrEqualTo(expected: any): JsHamcrest.SimpleMatcher

	declare function notANumber(): JsHamcrest.SimpleMatcher

	declare function odd(): JsHamcrest.SimpleMatcher

	declare function zero(): JsHamcrest.SimpleMatcher

	declare function bool(): JsHamcrest.SimpleMatcher

	declare function func(): JsHamcrest.SimpleMatcher

	declare function hasFunction(functionName: string): JsHamcrest.SimpleMatcher

	declare function hasMember(memberName: string, matcherOrValue?: any): JsHamcrest.SimpleMatcher

	declare function instanceOf(clazz: NO PRINT IMPLEMENTED: ConstructorType): JsHamcrest.SimpleMatcher

	declare function number(): JsHamcrest.SimpleMatcher

	declare function object(): JsHamcrest.SimpleMatcher

	declare function string(): JsHamcrest.SimpleMatcher

	declare function typeOf(typeName: string): JsHamcrest.SimpleMatcher

	declare function containsString(str: string): JsHamcrest.SimpleMatcher

	declare function emailAddress(): JsHamcrest.SimpleMatcher

	declare function endsWith(str: string): JsHamcrest.SimpleMatcher

	declare function equalIgnoringCase(str: string): JsHamcrest.SimpleMatcher

	declare function matches(regex: RegExp): JsHamcrest.SimpleMatcher

	declare function startsWith(str: string): JsHamcrest.SimpleMatcher

		
}

declare module 'npm$namespace$JsHamcrest' {
		declare interface DescribeTo {
		(description: Description): void
	}

	declare interface DescribeValueTo {
		(value: any, description: Description): void
	}

	declare export interface SelfDescribing {
		describeTo: DescribeTo
	}

	declare interface Matches {
		(value: any): boolean
	}

	declare export interface Matcher {
		matches: Matches,
		describeValueTo: DescribeValueTo
	}

	declare interface MatcherConfig {
		matches: Matches,
		describeTo: DescribeTo,
		describeValueTo?: DescribeValueTo
	}

	declare export function isMatcher(obj: any): boolean

	declare export function EqualTo(factory: (matcher: Matcher) => Matcher): (matcherOrValue: any) => Matcher

	declare export class Description  {
		append(text: any): Description;
		appendDescriptionOf(selfDescribingObject: SelfDescribing): Description;
		appendList(start: string, separator: string, end: string, list: any[]): Description;
		appendLiteral(literal: any): Description;
		appendValueList(
		start: string, separator: string, end: string, list: SelfDescribing[]
	): Description;
		get(): string
	}

	declare export class SimpleMatcher extends Matcher {
		matches: Matches;
		describeTo: DescribeTo;
		describeValueTo: DescribeValueTo;
		constructor(config: MatcherConfig): this
	}

	declare export class CombinableMatcher extends SimpleMatcher {
		and(matcherOrValue: any): CombinableMatcher;
		or(matcherOrValue: any): CombinableMatcher
	}

	declare export class BetweenBuilder  {
		and(end: any): SimpleMatcher
	}

	
}

declare module 'Operators' {
		declare interface AssertOptions {
		message?: any,
		pass?: (description: string) => void,
		fail?: (description: string) => void
	}

	declare export function assert(
		actual: any, matcherOrValue?: any, options?: AssertOptions
	): JsHamcrest.Description

	declare export function filter(array: any[], matcherOrValue: any): any[]

	declare export function callTo(func: (...args: any[]) => any, ...args: any[]): () => any

		
}

declare module 'Matchers' {
			declare export function empty(): JsHamcrest.SimpleMatcher

	declare export function everyItem(matcherOrValue: any): JsHamcrest.SimpleMatcher

	declare export function hasItem(matcherOrValue: any): JsHamcrest.SimpleMatcher

	declare export function hasItems(...matchersOrValues: any[]): JsHamcrest.SimpleMatcher

	declare export function hasSize(matcherOrValue: any): JsHamcrest.SimpleMatcher

	declare export function isIn(...items: any[]): JsHamcrest.SimpleMatcher

	declare export function oneOf(...items: any[]): JsHamcrest.SimpleMatcher

	declare export function allOf(...matchersOrValues: any[]): JsHamcrest.SimpleMatcher

	declare export function anyOf(...matchersOrValues: any[]): JsHamcrest.SimpleMatcher

	declare export function anything(): JsHamcrest.SimpleMatcher

	declare export function both(matcherOrValue: any): JsHamcrest.CombinableMatcher

	declare export function either(matcherOrValue: any): JsHamcrest.CombinableMatcher

	declare export function equalTo(expected: any): JsHamcrest.SimpleMatcher

	declare export function is(matcherOrValue: any): JsHamcrest.SimpleMatcher

	declare export function nil(): JsHamcrest.SimpleMatcher

	declare export function not(matcherOrValue: any): JsHamcrest.SimpleMatcher

	declare export function raises(exceptionName: string): JsHamcrest.SimpleMatcher

	declare export function raisesAnything(): JsHamcrest.SimpleMatcher

	declare export function sameAs(expected: any): JsHamcrest.SimpleMatcher

	declare export function truth(): JsHamcrest.SimpleMatcher

	declare export function between(start: any): JsHamcrest.BetweenBuilder

	declare export function closeTo(expected: number, delta?: number): JsHamcrest.SimpleMatcher

	declare export function divisibleBy(divisor: number): JsHamcrest.SimpleMatcher

	declare export function even(): JsHamcrest.SimpleMatcher

	declare export function greaterThan(expected: any): JsHamcrest.SimpleMatcher

	declare export function greaterThanOrEqualTo(expected: any): JsHamcrest.SimpleMatcher

	declare export function lessThan(expected: any): JsHamcrest.SimpleMatcher

	declare export function lessThanOrEqualTo(expected: any): JsHamcrest.SimpleMatcher

	declare export function notANumber(): JsHamcrest.SimpleMatcher

	declare export function odd(): JsHamcrest.SimpleMatcher

	declare export function zero(): JsHamcrest.SimpleMatcher

	declare export function bool(): JsHamcrest.SimpleMatcher

	declare export function func(): JsHamcrest.SimpleMatcher

	declare export function hasFunction(functionName: string): JsHamcrest.SimpleMatcher

	declare export function hasMember(memberName: string, matcherOrValue?: any): JsHamcrest.SimpleMatcher

	declare export function instanceOf(clazz: NO PRINT IMPLEMENTED: ConstructorType): JsHamcrest.SimpleMatcher

	declare export function number(): JsHamcrest.SimpleMatcher

	declare export function object(): JsHamcrest.SimpleMatcher

	declare export function string(): JsHamcrest.SimpleMatcher

	declare export function typeOf(typeName: string): JsHamcrest.SimpleMatcher

	declare export function containsString(str: string): JsHamcrest.SimpleMatcher

	declare export function emailAddress(): JsHamcrest.SimpleMatcher

	declare export function endsWith(str: string): JsHamcrest.SimpleMatcher

	declare export function equalIgnoringCase(str: string): JsHamcrest.SimpleMatcher

	declare export function matches(regex: RegExp): JsHamcrest.SimpleMatcher

	declare export function startsWith(str: string): JsHamcrest.SimpleMatcher

		
}

declare module 'Integration' {
			declare export function copyMembers(target: {
		
	}): void

	declare export function copyMembers(source: {
		
	}, target: {
		
	}): void

	declare export function installMatchers(source: {
		
	}): void

	declare export function installOperators(source: {
		
	}): void

	declare export function WebBrowser(): void

	declare export function Rhino(): void

	declare export function JsTestDriver(params?: {
		scope?: {
		
	}
	}): void

	declare export function Nodeunit(params?: {
		scope?: {
		
	}
	}): void

	declare export function JsUnitTest(params?: {
		scope?: {
		
	}
	}): void

	declare export function YUITest(params?: {
		scope?: {
		
	}
	}): void

	declare export function QUnit(params?: {
		scope?: {
		
	}
	}): void

	declare export function jsUnity(params?: {
		scope?: {
		
	},
		attachAssertions?: boolean
	}): void

	declare export function screwunit(params?: {
		scope?: {
		
	}
	}): void

	declare export function jasmine(params?: {
		scope?: {
		
	}
	}): void

		
}