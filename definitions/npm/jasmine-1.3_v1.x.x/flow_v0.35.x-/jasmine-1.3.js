/**
 * Flowtype definitions for jasmine-1.3
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare
function describe(description: string, specDefinitions: () => void): voiddeclare
function xdescribe(description: string, specDefinitions: () => void): voiddeclare
function it(expectation: string, assertion: () => void): voiddeclare
function xit(expectation: string, assertion: () => void): voiddeclare
function beforeEach(action: () => void): voiddeclare
function afterEach(action: () => void): voiddeclare
function expect(spy: Function): jasmine$Matchersdeclare
function spyOn(object: any, method: string): jasmine$Spydeclare
function runs(asyncMethod: Function): voiddeclare
function waitsFor(latchMethod: () => boolean, failureMessage?: string, timeout?: number): voiddeclare
function waits(timeout?: number): void
declare
var npm$namespace$jasmine: {
    any: typeof jasmine$any,
    objectContaining: typeof jasmine$objectContaining,
    createSpy: typeof jasmine$createSpy,
    createSpyObj: typeof jasmine$createSpyObj,
    pp: typeof jasmine$pp,
    getEnv: typeof jasmine$getEnv,
}
declare
var Clock: jasmine$Clock;

declare
function jasmine$any(aclass: any): jasmine$Any

declare
function jasmine$objectContaining(sample: any): jasmine$ObjectContaining

declare
function jasmine$createSpy(name: string, originalFn?: Function): jasmine$Spy

declare
function jasmine$createSpyObj(baseName: string, methodNames: any[]): any

declare
function jasmine$pp(value: any): string

declare
function jasmine$getEnv(): jasmine$Env

declare interface jasmine$Any {
    new(expectedClass: any): any,
    jasmineMatches(other: any): boolean,
        jasmineToString(): string
}

declare interface jasmine$ObjectContaining {
    new(sample: any): any,
    jasmineMatches(other: any, mismatchKeys: any[], mismatchValues: any[]): boolean,
        jasmineToString(): string
}

declare interface jasmine$Block {
    new(env: jasmine$Env, func: jasmine$SpecFunction, spec: jasmine$Spec): any,
    execute(onComplete: () => void): void
}

declare type jasmine$WaitsBlock = {
    new(env: jasmine$Env, timeout: number, spec: jasmine$Spec): any
} & jasmine$Block


declare type jasmine$WaitsForBlock = {
    new(
        env: jasmine$Env,
        timeout: number,
        latchFunction: jasmine$SpecFunction,
        message: string,
        spec: jasmine$Spec): any
} & jasmine$Block


declare interface jasmine$Clock {
    reset(): void,
        tick(millis: number): void,
        runFunctionsWithinRange(oldMillis: number, nowMillis: number): void,
        scheduleFunction(
            timeoutKey: any,
            funcToCall: () => void,
            millis: number,
            recurring: boolean): void,
        useMock(): void,
        installMock(): void,
        uninstallMock(): void,
        real: void,
        assertInstalled(): void,
        isInstalled(): boolean,
        installed: any
}

declare interface jasmine$Env {
    setTimeout: any,
        clearTimeout: void,
        setInterval: any,
        clearInterval: void,
        updateInterval: number,
        currentSpec: jasmine$Spec,
        matchersClass: jasmine$Matchers,
        version(): any,
        versionString(): string,
        nextSpecId(): number,
        addReporter(reporter: jasmine$Reporter): void,
        execute(): void,
        describe(description: string, specDefinitions: () => void): jasmine$Suite,
        beforeEach(beforeEachFunction: () => void): void,
        currentRunner(): jasmine$Runner,
        afterEach(afterEachFunction: () => void): void,
        xdescribe(desc: string, specDefinitions: () => void): jasmine$XSuite,
        it(description: string, func: () => void): jasmine$Spec,
        xit(desc: string, func: () => void): jasmine$XSpec,
        compareRegExps_(
            a: RegExp,
            b: RegExp,
            mismatchKeys: string[],
            mismatchValues: string[]): boolean,
        compareObjects_(a: any, b: any, mismatchKeys: string[], mismatchValues: string[]): boolean,
        equals_(a: any, b: any, mismatchKeys: string[], mismatchValues: string[]): boolean,
        contains_(haystack: any, needle: any): boolean,
        addEqualityTester(
            equalityTester: (
                a: any,
                b: any,
                env: jasmine$Env,
                mismatchKeys: string[],
                mismatchValues: string[]) => boolean): void,
        specFilter(spec: jasmine$Spec): boolean
}

declare interface jasmine$FakeTimer {
    new(): any,
    reset(): void,
        tick(millis: number): void,
        runFunctionsWithinRange(oldMillis: number, nowMillis: number): void,
        scheduleFunction(
            timeoutKey: any,
            funcToCall: () => void,
            millis: number,
            recurring: boolean): void
}

declare interface jasmine$HtmlReporter {
    new(): any
}

declare interface jasmine$Result {
    type: string
}

declare type jasmine$NestedResults = {
    description: string,
    totalCount: number,
    passedCount: number,
    failedCount: number,
    skipped: boolean,
    rollupCounts(result: jasmine$NestedResults): void,
    log(values: any): void,
    getItems(): jasmine$Result[],
    addResult(result: jasmine$Result): void,
    passed(): boolean
} & jasmine$Result


declare type jasmine$MessageResult = {
    values: any,
    trace: jasmine$Trace
} & jasmine$Result


declare type jasmine$ExpectationResult = {
    matcherName: string,
    passed(): boolean,
    expected: any,
    actual: any,
    message: string,
    trace: jasmine$Trace
} & jasmine$Result


declare interface jasmine$Trace {
    name: string,
        message: string,
        stack: any
}

declare interface jasmine$PrettyPrinter {
    new(): any,
    format(value: any): void,
        iterateObject(obj: any, fn: (property: string, isGetter: boolean) => void): void,
        emitScalar(value: any): void,
        emitString(value: string): void,
        emitArray(array: any[]): void,
        emitObject(obj: any): void,
        append(value: any): void
}

declare type jasmine$StringPrettyPrinter = {} & jasmine$PrettyPrinter


declare interface jasmine$Queue {
    new(env: any): any,
    env: jasmine$Env,
        ensured: boolean[],
        blocks: jasmine$Block[],
        running: boolean,
        index: number,
        offset: number,
        abort: boolean,
        addBefore(block: jasmine$Block, ensure?: boolean): void,
        add(block: any, ensure?: boolean): void,
        insertNext(block: any, ensure?: boolean): void,
        start(onComplete?: () => void): void,
        isRunning(): boolean,
        next_(): void,
        results(): jasmine$NestedResults
}

declare interface jasmine$Matchers {
    new(env: jasmine$Env, actual: any, spec: jasmine$Env, isNot?: boolean): any,
    env: jasmine$Env,
        actual: any,
        spec: jasmine$Env,
        isNot?: boolean,
        message(): any,
        toBe(expected: any): boolean,
        toEqual(expected: any): boolean,
        toMatch(expected: any): boolean,
        toBeDefined(): boolean,
        toBeUndefined(): boolean,
        toBeNull(): boolean,
        toBeNaN(): boolean,
        toBeTruthy(): boolean,
        toBeFalsy(): boolean,
        toHaveBeenCalled(): boolean,
        toHaveBeenCalledWith(...params: any[]): boolean,
        toContain(expected: any): boolean,
        toBeLessThan(expected: any): boolean,
        toBeGreaterThan(expected: any): boolean,
        toBeCloseTo(expected: any, precision: any): boolean,
        toContainHtml(expected: string): boolean,
        toContainText(expected: string): boolean,
        toThrow(expected?: any): boolean,
        not: jasmine$Matchers,
        Any: jasmine$Any
}

declare interface jasmine$Reporter {
    reportRunnerStarting(runner: jasmine$Runner): void,
        reportRunnerResults(runner: jasmine$Runner): void,
        reportSuiteResults(suite: jasmine$Suite): void,
        reportSpecStarting(spec: jasmine$Spec): void,
        reportSpecResults(spec: jasmine$Spec): void,
        log(str: string): void
}

declare type jasmine$MultiReporter = {
    addReporter(reporter: jasmine$Reporter): void
} & jasmine$Reporter


declare interface jasmine$Runner {
    new(env: jasmine$Env): any,
    execute(): void,
        beforeEach(beforeEachFunction: jasmine$SpecFunction): void,
        afterEach(afterEachFunction: jasmine$SpecFunction): void,
        finishCallback(): void,
        addSuite(suite: jasmine$Suite): void,
        add(block: jasmine$Block): void,
        specs(): jasmine$Spec[],
        suites(): jasmine$Suite[],
        topLevelSuites(): jasmine$Suite[],
        results(): jasmine$NestedResults
}

declare interface jasmine$SpecFunction {
    (spec?: jasmine$Spec): void
}

declare interface jasmine$SuiteOrSpec {
    id: number,
        env: jasmine$Env,
        description: string,
        queue: jasmine$Queue
}

declare type jasmine$Spec = {
    new(env: jasmine$Env, suite: jasmine$Suite, description: string): any,
    suite: jasmine$Suite,
    afterCallbacks: jasmine$SpecFunction[],
    spies_: jasmine$Spy[],
    results_: jasmine$NestedResults,
    matchersClass: jasmine$Matchers,
    getFullName(): string,
    results(): jasmine$NestedResults,
    log(arguments: any): any,
    runs(func: jasmine$SpecFunction): jasmine$Spec,
    addToQueue(block: jasmine$Block): void,
    addMatcherResult(result: jasmine$Result): void,
    expect(actual: any): any,
    waits(timeout: number): jasmine$Spec,
    waitsFor(
        latchFunction: jasmine$SpecFunction,
        timeoutMessage?: string,
        timeout?: number): jasmine$Spec,
    fail(e?: any): void,
    getMatchersClass_(): jasmine$Matchers,
    addMatchers(matchersPrototype: any): void,
    finishCallback(): void,
    finish(onComplete?: () => void): void,
    after(doAfter: jasmine$SpecFunction): void,
    execute(onComplete?: () => void): any,
    addBeforesAndAftersToQueue(): void,
    explodes(): void,
    spyOn(obj: any, methodName: string, ignoreMethodDoesntExist: boolean): jasmine$Spy,
    removeAllSpies(): void
} & jasmine$SuiteOrSpec


declare interface jasmine$XSpec {
    id: number,
        runs(): void
}

declare type jasmine$Suite = {
    new(
        env: jasmine$Env,
        description: string,
        specDefinitions: () => void,
        parentSuite: jasmine$Suite): any,
    parentSuite: jasmine$Suite,
    getFullName(): string,
    finish(onComplete?: () => void): void,
    beforeEach(beforeEachFunction: jasmine$SpecFunction): void,
    afterEach(afterEachFunction: jasmine$SpecFunction): void,
    results(): jasmine$NestedResults,
    add(suiteOrSpec: jasmine$SuiteOrSpec): void,
    specs(): jasmine$Spec[],
    suites(): jasmine$Suite[],
    children(): any[],
    execute(onComplete?: () => void): void
} & jasmine$SuiteOrSpec


declare interface jasmine$XSuite {
    execute(): void
}

declare interface jasmine$Spy {
    (...params: any[]): any,
    identity: string,
        calls: any[],
        mostRecentCall: {
            args: any[]
        },
        argsForCall: any[],
        wasCalled: boolean,
        callCount: number,
        andReturn(value: any): jasmine$Spy,
        andCallThrough(): jasmine$Spy,
        andCallFake(fakeFunc: Function): jasmine$Spy
}

declare interface jasmine$Util {
    inherit(childClass: Function, parentClass: Function): any,
        formatException(e: any): any,
        htmlEscape(str: string): string,
        argsToArray(args: any): any,
        extend(destination: any, source: any): any
}

declare type jasmine$JsApiReporter = {
    started: boolean,
    finished: boolean,
    result: any,
    messages: any,
    new(): any,
    suites(): jasmine$Suite[],
    summarize_(suiteOrSpec: jasmine$SuiteOrSpec): any,
    results(): any,
    resultsForSpec(specId: any): any,
    log(str: any): any,
    resultsForSpecs(specIds: any): any,
    summarizeResult_(result: any): any
} & jasmine$Reporter


declare interface jasmine$Jasmine {
    Spec: jasmine$Spec,
        Clock: jasmine$Clock,
        util: jasmine$Util
}

declare
export var HtmlReporter: any;