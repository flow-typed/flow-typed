import type { IExpectations } from 'npm$namespace$Expectations'

declare module 'expectations' {
					
}

declare module 'npm$namespace$Expectations' {
		declare interface IExpectations {
		(value: any): Expect,
		addAssertion(name: string, matcher: Function): void
	}

	declare interface IAssertions {
		pass(message?: string): any,
		fail(message: string): any
	}

		declare class Expect  {
		value: any;
		assertions: IAssertions;
		expr: any;
		parent: Expect;
		not: Expect;
		constructor(value: any, assertions?: IAssertions, expr?: any, parent?: Expect): this;
		generateMessage(value: any, expr: any, toDo: string, otherVal?: any): string;
		toEqual(val: any): any;
		toNotEqual(val: any): any;
		toBe(val: any): any;
		toBeTruthy(): any;
		toBeFalsey(): any;
		toBeFalsy(): any;
		toBeGreaterThan(val: any): any;
		toBeLessThan(val: any): any;
		toContain(val: any): any;
		toMatch(val: any): any;
		toBeDefined(): any;
		toBeUndefined(): any;
		toBeNull(): any;
		toThrow(): any;
		pass(): any;
		fail(why?: string, what?: any): any
	}

	
}