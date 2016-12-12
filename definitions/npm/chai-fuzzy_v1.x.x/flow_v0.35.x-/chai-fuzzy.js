

declare module 'chai-fuzzy' {
			declare function chaiFuzzy(chai: any, utils: any): void

		declare module.exports: undefined


}

declare module 'npm$namespace$Chai' {
		declare interface Assertion {
		like(expected: any, message?: string): Assertion,
		notLike(expected: any, message?: string): Assertion,
		containOneLike(expected: any, message?: string): Assertion,
		notContainOneLike(expected: any, message?: string): Assertion,
		jsonOf(expected: any, message?: string): Assertion,
		notJsonOf(expected: any, message?: string): Assertion
	}

	declare export interface Assert {
		like(actual: any, expected: any, message?: string): void,
		notLike(actual: any, expected: any, message?: string): void,
		containOneLike(actual: any, expected: any, message?: string): void,
		notContainOneLike(actual: any, expected: any, message?: string): void,
		jsonOf(actual: any, expected: any, message?: string): void,
		notJsonOf(actual: any, expected: any, message?: string): void
	}

			
}