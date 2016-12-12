

declare module 'chai-things' {
		declare interface Array<T> {
		should: Chai.ArrayAssertion
	}

	declare function chaiThings(chai: any, utils: any): void

		declare module.exports: undefined


}

declare module 'npm$namespace$Chai' {
		declare interface ArrayAssertion {
		include: ArrayInclude,
		contain: ArrayInclude,
		not: ArrayAssertion,
		all: Assertion
	}

	declare interface ArrayInclude {
		(item: any): any,
		a: Item,
		an: Item,
		one: Something,
		some: Something,
		something: Something,
		any: Anything
	}

	declare interface Include {
		(item: any): any,
		a: Item,
		an: Item,
		one: Something,
		some: Something,
		something: Something
	}

	declare interface Anything {
		(): any,
		that: Assertion,
		with: Assertion
	}

	declare interface Something {
		(): any,
		that: Assertion,
		with: Assertion
	}

	declare interface Item {
		item: Something,
		thing: Something
	}

	declare interface Deep {
		equals: Equal
	}

			
}