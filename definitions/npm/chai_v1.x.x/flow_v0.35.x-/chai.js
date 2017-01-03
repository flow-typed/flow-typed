// @flow
/**
 * Flowtype definitions for chai
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface Chai$ChaiStatic {
    expect: Chai$ExpectStatic,
        should(): Chai$Should,

        /**
         * Provides a way to extend the internals of Chai
         */
        use(fn: (chai: any, utils: any) => void): Chai$ChaiStatic,
        assert: Chai$AssertStatic,
        config: Chai$Config,
        AssertionError: typeof AssertionError
}

declare export type Chai$ExpectStatic = {
    fail(actual?: any, expected?: any, message?: string, operator?: string): void
} & Chai$AssertionStatic


declare export type Chai$AssertStatic = {} & Chai$Assert


declare export interface Chai$AssertionStatic {
    (target: any, message?: string): Chai$Assertion
}

declare interface Chai$ShouldAssertion {
    equal(value1: any, value2: any, message?: string): void,
        Throw: Chai$ShouldThrow,
        throw :Chai$ShouldThrow,
            exist(value: any, message?: string): void
}

declare type Chai$Should = {
    not: Chai$ShouldAssertion,
    fail(actual: any, expected: any, message?: string, operator?: string): void
} & Chai$ShouldAssertion


declare interface Chai$ShouldThrow {
    (actual: Function): void,
    (actual: Function, expected: string | RegExp, message?: string): void,
    (actual: Function, constructor: Error | Function, expected?: string | RegExp, message?: string): void
}

declare type Chai$Assertion = {
    not: Chai$Assertion,
    deep: Chai$Deep,
    any: Chai$KeyFilter,
    all: Chai$KeyFilter,
    a: Chai$TypeComparison,
    an: Chai$TypeComparison,
    include: Chai$Include,
    includes: Chai$Include,
    contain: Chai$Include,
    contains: Chai$Include,
    ok: Chai$Assertion,
    true: Chai$Assertion,
    false: Chai$Assertion,
    null: Chai$Assertion,
    undefined: Chai$Assertion,
    NaN: Chai$Assertion,
    exist: Chai$Assertion,
    empty: Chai$Assertion,
    arguments: Chai$Assertion,
    Arguments: Chai$Assertion,
    equal: Chai$Equal,
    equals: Chai$Equal,
    eq: Chai$Equal,
    eql: Chai$Equal,
    eqls: Chai$Equal,
    property: Chai$Property,
    ownProperty: Chai$OwnProperty,
    haveOwnProperty: Chai$OwnProperty,
    ownPropertyDescriptor: Chai$OwnPropertyDescriptor,
    haveOwnPropertyDescriptor: Chai$OwnPropertyDescriptor,
    length: Chai$Length,
    lengthOf: Chai$Length,
    match: Chai$Match,
    matches: Chai$Match,
    string(string: string, message?: string): Chai$Assertion,
    keys: Chai$Keys,
    key(string: string): Chai$Assertion,
    throw: Chai$Throw,
    throws: Chai$Throw,
    Throw: Chai$Throw,
    respondTo: Chai$RespondTo,
    respondsTo: Chai$RespondTo,
    itself: Chai$Assertion,
    satisfy: Chai$Satisfy,
    satisfies: Chai$Satisfy,
    closeTo: Chai$CloseTo,
    approximately: Chai$CloseTo,
    members: Chai$Members,
    increase: Chai$PropertyChange,
    increases: Chai$PropertyChange,
    decrease: Chai$PropertyChange,
    decreases: Chai$PropertyChange,
    change: Chai$PropertyChange,
    changes: Chai$PropertyChange,
    extensible: Chai$Assertion,
    sealed: Chai$Assertion,
    frozen: Chai$Assertion,
    oneOf(list: any[], message?: string): Chai$Assertion
} & Chai$LanguageChains & Chai$NumericComparison & Chai$TypeComparison


declare interface Chai$LanguageChains {
    to: Chai$Assertion,
        be: Chai$Assertion,
        been: Chai$Assertion,
        is: Chai$Assertion,
        that: Chai$Assertion,
        which: Chai$Assertion,
        and: Chai$Assertion,
        has: Chai$Assertion,
        have: Chai$Assertion,
        with: Chai$Assertion,
        at: Chai$Assertion, of: Chai$Assertion,
        same: Chai$Assertion
}

declare interface Chai$NumericComparison {
    above: Chai$NumberComparer,
        gt: Chai$NumberComparer,
        greaterThan: Chai$NumberComparer,
        least: Chai$NumberComparer,
        gte: Chai$NumberComparer,
        below: Chai$NumberComparer,
        lt: Chai$NumberComparer,
        lessThan: Chai$NumberComparer,
        most: Chai$NumberComparer,
        lte: Chai$NumberComparer,
        within(start: number, finish: number, message?: string): Chai$Assertion
}

declare interface Chai$NumberComparer {
    (value: number, message?: string): Chai$Assertion
}

declare interface Chai$TypeComparison {
    (type: string, message?: string): Chai$Assertion,
    instanceof: Chai$InstanceOf,
        instanceOf: Chai$InstanceOf
}

declare interface Chai$InstanceOf {
    (constructor: Object, message?: string): Chai$Assertion
}

declare interface Chai$CloseTo {
    (expected: number, delta: number, message?: string): Chai$Assertion
}

declare interface Chai$Deep {
    equal: Chai$Equal,
        include: Chai$Include,
        property: Chai$Property,
        members: Chai$Members
}

declare interface Chai$KeyFilter {
    keys: Chai$Keys
}

declare interface Chai$Equal {
    (value: any, message?: string): Chai$Assertion
}

declare interface Chai$Property {
    (name: string, value?: any, message?: string): Chai$Assertion
}

declare interface Chai$OwnProperty {
    (name: string, message?: string): Chai$Assertion
}

declare interface Chai$OwnPropertyDescriptor {
    (name: string, descriptor: PropertyDescriptor, message?: string): Chai$Assertion,
    (name: string, message?: string): Chai$Assertion
}

declare type Chai$Length = {
    (length: number, message?: string): Chai$Assertion
} & Chai$LanguageChains & Chai$NumericComparison


declare interface Chai$Include {
    (value: Object, message?: string): Chai$Assertion,
    (value: string, message?: string): Chai$Assertion,
    (value: number, message?: string): Chai$Assertion,
    keys: Chai$Keys,
        members: Chai$Members,
        any: Chai$KeyFilter,
        all: Chai$KeyFilter
}

declare interface Chai$Match {
    (regexp: RegExp | string, message?: string): Chai$Assertion
}

declare interface Chai$Keys {
    (...keys: string[]): Chai$Assertion,
    (keys: any[]): Chai$Assertion,
    (keys: Object): Chai$Assertion
}

declare interface Chai$Throw {
    (): Chai$Assertion,
    (expected: string, message?: string): Chai$Assertion,
    (expected: RegExp, message?: string): Chai$Assertion,
    (constructor: Error, expected?: string, message?: string): Chai$Assertion,
    (constructor: Error, expected?: RegExp, message?: string): Chai$Assertion,
    (constructor: Function, expected?: string, message?: string): Chai$Assertion,
    (constructor: Function, expected?: RegExp, message?: string): Chai$Assertion
}

declare interface Chai$RespondTo {
    (method: string, message?: string): Chai$Assertion
}

declare interface Chai$Satisfy {
    (matcher: Function, message?: string): Chai$Assertion
}

declare interface Chai$Members {
    (set: any[], message?: string): Chai$Assertion
}

declare interface Chai$PropertyChange {
    (object: Object, prop: string, msg?: string): Chai$Assertion
}

declare export interface Chai$Assert {

    /**
     * 
     * @param expression Expression to test for truthiness.
     * @param message Message to display on error.
     */
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
        throw (fn: Function, msg?: string): void,
            throw (fn: Function, regExp: RegExp): void,
                throw (fn: Function, errType: Function, msg?: string): void,
                    throw (fn: Function, errType: Function, regExp: RegExp): void,
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
                        isExtensible(obj: {}, msg?: string): void,
                        extensible(obj: {}, msg?: string): void,
                        isNotExtensible(obj: {}, msg?: string): void,
                        notExtensible(obj: {}, msg?: string): void,
                        isSealed(obj: {}, msg?: string): void,
                        sealed(obj: {}, msg?: string): void,
                        isNotSealed(obj: {}, msg?: string): void,
                        notSealed(obj: {}, msg?: string): void,
                        isFrozen(obj: Object, msg?: string): void,
                        frozen(obj: Object, msg?: string): void,
                        isNotFrozen(obj: Object, msg?: string): void,
                        notFrozen(obj: Object, msg?: string): void,
                        oneOf(inList: any, list: any[], msg?: string): void
}

declare export interface Chai$Config {

    /**
     * Default: false
     */
    includeStack: boolean,

        /**
         * Default: true
         */
        showDiff: boolean,

        /**
         * Default: 40
         */
        truncateThreshold: number
}

declare export class AssertionError {
    constructor(message: string, _props?: any, ssf?: Function): this;
    name: string;
    message: string;
    showDiff: boolean;
    stack: string
}
declare var chai: Chai$ChaiStatic;
declare module 'chai' {
    declare module.exports: typeof chai
}
declare interface Object {
    should: Chai$Assertion
}