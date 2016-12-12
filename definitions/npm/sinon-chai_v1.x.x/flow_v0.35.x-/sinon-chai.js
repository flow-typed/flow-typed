

declare module 'sinon-chai' {
			declare function sinonChai(chai: any, utils: any): void

		declare module.exports: undefined


}

declare module 'npm$namespace$Chai' {
		declare interface LanguageChains {
		always: Assertion
	}

	declare interface Assertion {
		called: Assertion,
		callCount(count: number): Assertion,
		calledOnce: Assertion,
		calledTwice: Assertion,
		calledThrice: Assertion,
		calledBefore(anotherSpy: Sinon.SinonSpy): Assertion,
		calledAfter(anotherSpy: Sinon.SinonSpy): Assertion,
		calledWithNew: Assertion,
		calledOn(context: any): Assertion,
		calledWith(...args: any[]): Assertion,
		calledWithExactly(...args: any[]): Assertion,
		calledWithMatch(...args: any[]): Assertion,
		returned(obj: any): Assertion,
		thrown(obj?: Error | typeof Error | string): Assertion
	}

			
}