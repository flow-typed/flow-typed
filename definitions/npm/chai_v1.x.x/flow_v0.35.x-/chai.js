import type { ChaiStatic } from 'npm$namespace$Chai'

declare module 'chai' {
		declare interface Object {
		should: Chai.Assertion
	}

			declare module.exports: ChaiStatic


}

declare module 'npm$namespace$Chai' {
		declare interface ChaiStatic {
		expect: ExpectStatic,
		should(): Should,
		use(fn: (chai: any, utils: any) => void): ChaiStatic,
		assert: AssertStatic,
		config: Config,
		AssertionError: typeof AssertionError
	}

	declare export interface ExpectStatic {
		fail(actual?: any, expected?: any, message?: string, operator?: string): void
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
		any: KeyFilter,
		all: KeyFilter,
		a: TypeComparison,
		an: TypeComparison,
		include: Include,
		includes: Include,
		contain: Include,
		contains: Include,
		ok: Assertion,
		true: Assertion,
		false: Assertion,
		null: Assertion,
		undefined: Assertion,
		NaN: Assertion,
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
		ownPropertyDescriptor: OwnPropertyDescriptor,
		haveOwnPropertyDescriptor: OwnPropertyDescriptor,
		length: Length,
		lengthOf: Length,
		match: Match,
		matches: Match,
		string(string: string, message?: string): Assertion,
		keys: Keys,
		key(string: string): Assertion,
		throw: Throw,
		throws: Throw,
		Throw: Throw,
		respondTo: RespondTo,
		respondsTo: RespondTo,
		itself: Assertion,
		satisfy: Satisfy,
		satisfies: Satisfy,
		closeTo: CloseTo,
		approximately: CloseTo,
		members: Members,
		increase: PropertyChange,
		increases: PropertyChange,
		decrease: PropertyChange,
		decreases: PropertyChange,
		change: PropertyChange,
		changes: PropertyChange,
		extensible: Assertion,
		sealed: Assertion,
		frozen: Assertion,
		oneOf(list: any[], message?: string): Assertion
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

	declare interface CloseTo {
		(expected: number, delta: number, message?: string): Assertion
	}

	declare interface Deep {
		equal: Equal,
		include: Include,
		property: Property,
		members: Members
	}

	declare interface KeyFilter {
		keys: Keys
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

	declare interface OwnPropertyDescriptor {
		(name: string, descriptor: PropertyDescriptor, message?: string): Assertion,
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
		members: Members,
		any: KeyFilter,
		all: KeyFilter
	}

	declare interface Match {
		(regexp: RegExp | string, message?: string): Assertion
	}

	declare interface Keys {
		(...keys: string[]): Assertion,
		(keys: any[]): Assertion,
		(keys: Object): Assertion
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

	declare interface RespondTo {
		(method: string, message?: string): Assertion
	}

	declare interface Satisfy {
		(matcher: Function, message?: string): Assertion
	}

	declare interface Members {
		(set: any[], message?: string): Assertion
	}

	declare interface PropertyChange {
		(object: Object, prop: string, msg?: string): Assertion
	}

	declare export interface Assert {
		(expression: any, message?: string): void,
		fail(actual?: any, expected?: any, msg?: string, operator?: string): void,
		ok(val: any, msg?: string): void,
		isOk(val: any, msg?: string): void,
		notOk(val: any, msg?: string): void,
		isNotOk(val: any, msg?: string): void,
		equal(act: any, exp: any, msg?: string): void,
		notEqual(act: any, exp: any, msg?: string): void,
		strictEqual(act: any, exp: any, msg?: string): void,
		notStrictEqual(act: any, exp: any, msg?: string): void,
		deepEqual(act: any, exp: any, msg?: string): void,
		notDeepEqual(act: any, exp: any, msg?: string): void,
		isTrue(val: any, msg?: string): void,
		isFalse(val: any, msg?: string): void,
		isNotTrue(val: any, msg?: string): void,
		isNotFalse(val: any, msg?: string): void,
		isNull(val: any, msg?: string): void,
		isNotNull(val: any, msg?: string): void,
		isUndefined(val: any, msg?: string): void,
		isDefined(val: any, msg?: string): void,
		isNaN(val: any, msg?: string): void,
		isNotNaN(val: any, msg?: string): void,
		isAbove(val: number, abv: number, msg?: string): void,
		isBelow(val: number, blw: number, msg?: string): void,
		isAtLeast(val: number, atlst: number, msg?: string): void,
		isAtMost(val: number, atmst: number, msg?: string): void,
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
		approximately(act: number, exp: number, delta: number, msg?: string): void,
		sameMembers(set1: any[], set2: any[], msg?: string): void,
		sameDeepMembers(set1: any[], set2: any[], msg?: string): void,
		includeMembers(superset: any[], subset: any[], msg?: string): void,
		ifError(val: any, msg?: string): void,
		isExtensible(obj: {
		
	}, msg?: string): void,
		extensible(obj: {
		
	}, msg?: string): void,
		isNotExtensible(obj: {
		
	}, msg?: string): void,
		notExtensible(obj: {
		
	}, msg?: string): void,
		isSealed(obj: {
		
	}, msg?: string): void,
		sealed(obj: {
		
	}, msg?: string): void,
		isNotSealed(obj: {
		
	}, msg?: string): void,
		notSealed(obj: {
		
	}, msg?: string): void,
		isFrozen(obj: Object, msg?: string): void,
		frozen(obj: Object, msg?: string): void,
		isNotFrozen(obj: Object, msg?: string): void,
		notFrozen(obj: Object, msg?: string): void,
		oneOf(inList: any, list: any[], msg?: string): void
	}

	declare export interface Config {
		includeStack: boolean,
		showDiff: boolean,
		truncateThreshold: number
	}

		declare export class AssertionError  {
		constructor(message: string, _props?: any, ssf?: Function): this;
		name: string;
		message: string;
		showDiff: boolean;
		stack: string
	}

	
}