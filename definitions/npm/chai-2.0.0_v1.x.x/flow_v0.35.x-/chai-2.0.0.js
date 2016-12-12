import type { ChaiStatic } from 'npm$namespace$Chai'

declare module 'chai-2.0.0' {
		declare interface Object {
		should: Chai.Assertion
	}

			
}

declare module 'npm$namespace$Chai' {
		declare interface ChaiStatic {
		expect: ExpectStatic,
		should(): Should,
		use(fn: (chai: any, utils: any) => void): any,
		assert: AssertStatic,
		config: Config
	}

	declare export interface ExpectStatic {
		
	}

	declare export interface AssertStatic {
		
	}

	declare export interface AssertionStatic {
		(target: any, message?: string): Assertion
	}

	declare interface ShouldAssertion {
		equal(value1: any, value2: any, message?: string): void,
		Throw: ShouldThrow,
		throw: ShouldThrow,
		exist(value: any, message?: string): void
	}

	declare interface Should {
		not: ShouldAssertion,
		fail(actual: any, expected: any, message?: string, operator?: string): void
	}

	declare interface ShouldThrow {
		(actual: Function): void,
		(actual: Function, expected: string | RegExp, message?: string): void,
		(actual: Function, constructor: Error | Function, expected?: string | RegExp, message?: string): void
	}

	declare interface Assertion {
		not: Assertion,
		deep: Deep,
		a: TypeComparison,
		an: TypeComparison,
		include: Include,
		contain: Include,
		ok: Assertion,
		true: Assertion,
		false: Assertion,
		null: Assertion,
		undefined: Assertion,
		exist: Assertion,
		empty: Assertion,
		arguments: Assertion,
		Arguments: Assertion,
		equal: Equal,
		equals: Equal,
		eq: Equal,
		eql: Equal,
		eqls: Equal,
		property: Property,
		ownProperty: OwnProperty,
		haveOwnProperty: OwnProperty,
		length: Length,
		lengthOf: Length,
		match(regexp: RegExp | string, message?: string): Assertion,
		string(string: string, message?: string): Assertion,
		keys: Keys,
		key(string: string): Assertion,
		throw: Throw,
		throws: Throw,
		Throw: Throw,
		respondTo(method: string, message?: string): Assertion,
		itself: Assertion,
		satisfy(matcher: Function, message?: string): Assertion,
		closeTo(expected: number, delta: number, message?: string): Assertion,
		members: Members
	}

	declare interface LanguageChains {
		to: Assertion,
		be: Assertion,
		been: Assertion,
		is: Assertion,
		that: Assertion,
		which: Assertion,
		and: Assertion,
		has: Assertion,
		have: Assertion,
		with: Assertion,
		at: Assertion,
		of: Assertion,
		same: Assertion
	}

	declare interface NumericComparison {
		above: NumberComparer,
		gt: NumberComparer,
		greaterThan: NumberComparer,
		least: NumberComparer,
		gte: NumberComparer,
		below: NumberComparer,
		lt: NumberComparer,
		lessThan: NumberComparer,
		most: NumberComparer,
		lte: NumberComparer,
		within(start: number, finish: number, message?: string): Assertion
	}

	declare interface NumberComparer {
		(value: number, message?: string): Assertion
	}

	declare interface TypeComparison {
		(type: string, message?: string): Assertion,
		instanceof: InstanceOf,
		instanceOf: InstanceOf
	}

	declare interface InstanceOf {
		(constructor: Object, message?: string): Assertion
	}

	declare interface Deep {
		equal: Equal,
		include: Include,
		property: Property
	}

	declare interface Equal {
		(value: any, message?: string): Assertion
	}

	declare interface Property {
		(name: string, value?: any, message?: string): Assertion
	}

	declare interface OwnProperty {
		(name: string, message?: string): Assertion
	}

	declare interface Length {
		(length: number, message?: string): Assertion
	}

	declare interface Include {
		(value: Object, message?: string): Assertion,
		(value: string, message?: string): Assertion,
		(value: number, message?: string): Assertion,
		keys: Keys,
		members: Members
	}

	declare interface Keys {
		(...keys: string[]): Assertion,
		(keys: any[]): Assertion
	}

	declare interface Throw {
		(): Assertion,
		(expected: string, message?: string): Assertion,
		(expected: RegExp, message?: string): Assertion,
		(constructor: Error, expected?: string, message?: string): Assertion,
		(constructor: Error, expected?: RegExp, message?: string): Assertion,
		(constructor: Function, expected?: string, message?: string): Assertion,
		(constructor: Function, expected?: RegExp, message?: string): Assertion
	}

	declare interface Members {
		(set: any[], message?: string): Assertion
	}

	declare export interface Assert {
		(expression: any, message?: string): void,
		fail(actual?: any, expected?: any, msg?: string, operator?: string): void,
		ok(val: any, msg?: string): void,
		notOk(val: any, msg?: string): void,
		equal(act: any, exp: any, msg?: string): void,
		notEqual(act: any, exp: any, msg?: string): void,
		strictEqual(act: any, exp: any, msg?: string): void,
		notStrictEqual(act: any, exp: any, msg?: string): void,
		deepEqual(act: any, exp: any, msg?: string): void,
		notDeepEqual(act: any, exp: any, msg?: string): void,
		isTrue(val: any, msg?: string): void,
		isFalse(val: any, msg?: string): void,
		isNull(val: any, msg?: string): void,
		isNotNull(val: any, msg?: string): void,
		isUndefined(val: any, msg?: string): void,
		isDefined(val: any, msg?: string): void,
		isFunction(val: any, msg?: string): void,
		isNotFunction(val: any, msg?: string): void,
		isObject(val: any, msg?: string): void,
		isNotObject(val: any, msg?: string): void,
		isArray(val: any, msg?: string): void,
		isNotArray(val: any, msg?: string): void,
		isString(val: any, msg?: string): void,
		isNotString(val: any, msg?: string): void,
		isNumber(val: any, msg?: string): void,
		isNotNumber(val: any, msg?: string): void,
		isBoolean(val: any, msg?: string): void,
		isNotBoolean(val: any, msg?: string): void,
		typeOf(val: any, type: string, msg?: string): void,
		notTypeOf(val: any, type: string, msg?: string): void,
		instanceOf(val: any, type: Function, msg?: string): void,
		notInstanceOf(val: any, type: Function, msg?: string): void,
		include(exp: string, inc: any, msg?: string): void,
		include(exp: any[], inc: any, msg?: string): void,
		notInclude(exp: string, inc: any, msg?: string): void,
		notInclude(exp: any[], inc: any, msg?: string): void,
		match(exp: any, re: RegExp, msg?: string): void,
		notMatch(exp: any, re: RegExp, msg?: string): void,
		property(obj: Object, prop: string, msg?: string): void,
		notProperty(obj: Object, prop: string, msg?: string): void,
		deepProperty(obj: Object, prop: string, msg?: string): void,
		notDeepProperty(obj: Object, prop: string, msg?: string): void,
		propertyVal(obj: Object, prop: string, val: any, msg?: string): void,
		propertyNotVal(obj: Object, prop: string, val: any, msg?: string): void,
		deepPropertyVal(obj: Object, prop: string, val: any, msg?: string): void,
		deepPropertyNotVal(obj: Object, prop: string, val: any, msg?: string): void,
		lengthOf(exp: any, len: number, msg?: string): void,
		throw(fn: Function, msg?: string): void,
		throw(fn: Function, regExp: RegExp): void,
		throw(fn: Function, errType: Function, msg?: string): void,
		throw(fn: Function, errType: Function, regExp: RegExp): void,
		throws(fn: Function, msg?: string): void,
		throws(fn: Function, regExp: RegExp): void,
		throws(fn: Function, errType: Function, msg?: string): void,
		throws(fn: Function, errType: Function, regExp: RegExp): void,
		Throw(fn: Function, msg?: string): void,
		Throw(fn: Function, regExp: RegExp): void,
		Throw(fn: Function, errType: Function, msg?: string): void,
		Throw(fn: Function, errType: Function, regExp: RegExp): void,
		doesNotThrow(fn: Function, msg?: string): void,
		doesNotThrow(fn: Function, regExp: RegExp): void,
		doesNotThrow(fn: Function, errType: Function, msg?: string): void,
		doesNotThrow(fn: Function, errType: Function, regExp: RegExp): void,
		operator(val: any, operator: string, val2: any, msg?: string): void,
		closeTo(act: number, exp: number, delta: number, msg?: string): void,
		sameMembers(set1: any[], set2: any[], msg?: string): void,
		includeMembers(set1: any[], set2: any[], msg?: string): void,
		ifError(val: any, msg?: string): void
	}

	declare export interface Config {
		includeStack: boolean
	}

		declare export class AssertionError  {
		constructor(message: string, _props?: any, ssf?: Function): this;
		name: string;
		message: string;
		showDiff: boolean;
		stack: string
	}

	
}

declare module 'chai' {
					declare module.exports: undefined


}