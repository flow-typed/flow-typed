

declare module 'chai-datetime' {
		declare interface Date {
		should: Chai.Assertion
	}

	declare function chaiDateTime(chai: any, utils: any): void

		declare module.exports: undefined


}

declare module 'npm$namespace$Chai' {
		declare interface Assertion {
		afterDate(date: Date): Assertion,
		beforeDate(date: Date): Assertion,
		equalDate(date: Date): Assertion,
		afterTime(date: Date): Assertion,
		beforeTime(date: Date): Assertion,
		equalTime(date: Date): Assertion
	}

	declare interface Assert {
		equalTime(val: Date, exp: Date, msg?: string): void,
		notEqualTime(val: Date, exp: Date, msg?: string): void,
		beforeTime(val: Date, exp: Date, msg?: string): void,
		notBeforeTime(val: Date, exp: Date, msg?: string): void,
		afterTime(val: Date, exp: Date, msg?: string): void,
		notAfterTime(val: Date, exp: Date, msg?: string): void,
		equalDate(val: Date, exp: Date, msg?: string): void,
		notEqualDate(val: Date, exp: Date, msg?: string): void,
		beforeDate(val: Date, exp: Date, msg?: string): void,
		notBeforeDate(val: Date, exp: Date, msg?: string): void,
		afterDate(val: Date, exp: Date, msg?: string): void,
		notAfterDate(val: Date, exp: Date, msg?: string): void
	}

			
}