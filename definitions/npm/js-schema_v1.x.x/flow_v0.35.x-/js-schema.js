

declare module 'js-schema' {
		declare export interface Schema {
		(obj: any): boolean
	}

	declare interface NumberConstructor {
		min(n: number): NumberConstructor,
		max(n: number): NumberConstructor,
		below(n: number): NumberConstructor,
		above(n: number): NumberConstructor,
		step(n: number): NumberConstructor
	}

	declare interface StringConstructor {
		of(charset: string): StringConstructor,
		of(length: number, charset: string): StringConstructor,
		of(minLength: number, maxLength: number, charset: string): StringConstructor
	}

	declare interface ArrayConstructor {
		like(arr: Array<any>): ArrayConstructor,
		of(pattern: any): ArrayConstructor,
		of(length: number, pattern: any): ArrayConstructor,
		of(minLength: number, maxLength: number, pattern: any): ArrayConstructor
	}

	declare interface ObjectConstructor {
		like(obj: any): ObjectConstructor,
		reference(obj: any): ObjectConstructor
	}

	declare interface FunctionConstructor {
		reference(func: Function): FunctionConstructor
	}

	declare export default function schema(definition: any): Schema

		
}