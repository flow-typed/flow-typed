import type mocha, { IContextDefinition, ITestDefinition } from 'npm$namespace$Mocha'

declare module 'mocha' {
		declare interface MochaSetupOptions {
		slow?: number,
		timeout?: number,
		ui?: string,
		globals?: any[],
		reporter?: any,
		bail?: boolean,
		ignoreLeaks?: boolean,
		grep?: any
	}

	declare interface MochaDone {
		(error?: any): any
	}

	declare interface ActionFunction {
		(done: MochaDone): any | PromiseLike<any>
	}

	declare function run(): void

	declare function setup(action: ActionFunction): void

	declare function teardown(action: ActionFunction): void

	declare function suiteSetup(action: ActionFunction): void

	declare function suiteTeardown(action: ActionFunction): void

	declare function before(action: ActionFunction): void

	declare function before(description: string, action: ActionFunction): void

	declare function after(action: ActionFunction): void

	declare function after(description: string, action: ActionFunction): void

	declare function beforeEach(action: ActionFunction): void

	declare function beforeEach(description: string, action: ActionFunction): void

	declare function afterEach(action: ActionFunction): void

	declare function afterEach(description: string, action: ActionFunction): void

	declare class Mocha  {
		currentTest: Mocha.ITestDefinition;
		constructor(options?: {
		grep?: RegExp,
		ui?: string,
		reporter?: string,
		timeout?: number,
		bail?: boolean
	}): this;
		setup(options: MochaSetupOptions): Mocha;
		bail(value?: boolean): Mocha;
		addFile(file: string): Mocha;
		reporter(name: string): Mocha;
		reporter(reporter: (runner: Mocha.IRunner, options: any) => any): Mocha;
		ui(value: string): Mocha;
		grep(value: string): Mocha;
		grep(value: RegExp): Mocha;
		invert(): Mocha;
		ignoreLeaks(value: boolean): Mocha;
		checkLeaks(): Mocha;
		throwError(error: Error): void;
		growl(): Mocha;
		globals(value: string): Mocha;
		globals(values: string[]): Mocha;
		useColors(value: boolean): Mocha;
		useInlineDiffs(value: boolean): Mocha;
		timeout(value: number): Mocha;
		slow(value: number): Mocha;
		enableTimeouts(value: boolean): Mocha;
		asyncOnly(value: boolean): Mocha;
		noHighlighting(value: boolean): Mocha;
		run(onComplete?: (failures: number) => void): Mocha.IRunner
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$Mocha' {
		declare interface IRunnable {
		title: string,
		fn: Function,
		async: boolean,
		sync: boolean,
		timedOut: boolean
	}

	declare interface ISuite {
		parent: ISuite,
		title: string,
		fullTitle(): string
	}

	declare interface ITest {
		parent: ISuite,
		pending: boolean,
		fullTitle(): string
	}

	declare interface IRunner {
		
	}

	declare interface IContextDefinition {
		(description: string, spec: () => void): ISuite,
		only(description: string, spec: () => void): ISuite,
		skip(description: string, spec: () => void): void,
		timeout(ms: number): void
	}

	declare interface ITestDefinition {
		(expectation: string, assertion?: ActionFunction): ITest,
		only(expectation: string, assertion?: ActionFunction): ITest,
		skip(expectation: string, assertion?: ActionFunction): void,
		timeout(ms: number): void,
		state: "failed" | "passed"
	}

			
}

declare module 'reporters' {
				declare export class Base  {
		stats: {
		suites: number,
		tests: number,
		passes: number,
		pending: number,
		failures: number
	};
		constructor(runner: IRunner): this
	}

	declare export class Doc extends Base {
		
	}

	declare export class Dot extends Base {
		
	}

	declare export class HTML extends Base {
		
	}

	declare export class HTMLCov extends Base {
		
	}

	declare export class JSON extends Base {
		
	}

	declare export class JSONCov extends Base {
		
	}

	declare export class JSONStream extends Base {
		
	}

	declare export class Landing extends Base {
		
	}

	declare export class List extends Base {
		
	}

	declare export class Markdown extends Base {
		
	}

	declare export class Min extends Base {
		
	}

	declare export class Nyan extends Base {
		
	}

	declare export class Progress extends Base {
		constructor(runner: IRunner, options?: {
		open?: string,
		complete?: string,
		incomplete?: string,
		close?: string
	}): this
	}

	declare export class Spec extends Base {
		
	}

	declare export class TAP extends Base {
		
	}

	declare export class XUnit extends Base {
		constructor(runner: IRunner, options?: any): this
	}

	
}