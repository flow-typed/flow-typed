

declare module 'ejson' {
		declare interface StringifyOptions {
		canonical: boolean,
		indent: boolean | number | string
	}

	declare interface CloneOptions {
		keyOrderSensitive: boolean
	}

	declare function clone<T>(obj: T): T

	declare function parse(str: string): any

	declare function stringify(obj: any, options?: StringifyOptions): string

	declare function toJSONValue(obj: any): string

	declare function fromJSONValue(obj: string): any

	declare function isBinary(value: any): boolean

	declare function newBinary(len: number): Uint8Array

	declare function equals(a: any, b: any, options?: CloneOptions): boolean

		
}