

declare module 'expect.js' {
			declare function expect(target?: any): Expect.Root

		declare module.exports: undefined


}

declare module 'npm$namespace$Expect' {
		declare interface Assertion {
		ok(): void,
		withArgs(...args: any[]): Root,
		throwError(fn?: (exception: any) => void): void,
		throwException(fn?: (exception: any) => void): void,
		throwError(regexp: RegExp): void,
		throwException(regexp: RegExp): void,
		empty(): Assertion,
		equal(obj: any): Assertion,
		eql(obj: any): Assertion,
		within(start: number, finish: number): Assertion,
		a(type: string): Assertion,
		a(type: Function): Assertion,
		an: An,
		greaterThan(n: number): Assertion,
		above(n: number): Assertion,
		lessThan(n: number): Assertion,
		below(n: number): Assertion,
		match(regexp: RegExp): Assertion,
		length(n: number): Assertion,
		property(name: string, val?: any): Assertion,
		contain(str: string): Assertion,
		string(str: string): Assertion,
		contain(obj: any): Assertion,
		string(obj: any): Assertion,
		key(keys: string[]): Assertion,
		key(...keys: string[]): Assertion,
		keys(keys: string[]): Assertion,
		keys(...keys: string[]): Assertion,
		fail(message?: string): Assertion
	}

	declare interface Root {
		not: Not,
		to: To,
		only: Only,
		have: Have,
		be: Be
	}

	declare interface Be {
		(obj: any): Assertion,
		an: An
	}

	declare interface An {
		(type: string): Assertion,
		(type: Function): Assertion
	}

	declare interface Not {
		to: Expect.ToBase
	}

	declare interface NotBase {
		be: Be,
		have: Have,
		include: Assertion,
		only: Only
	}

	declare interface To {
		not: Expect.NotBase
	}

	declare interface ToBase {
		be: Be,
		have: Have,
		include: Assertion,
		only: Only
	}

	declare interface Only {
		have: Have
	}

	declare interface Have {
		own: Assertion
	}

			
}