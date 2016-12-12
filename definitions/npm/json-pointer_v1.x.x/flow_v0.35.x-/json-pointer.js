

declare module 'json-pointer' {
			declare function JSON_Pointer(object: Object): JSON_Pointer.JSON_PointerWrap

		declare module.exports: undefined


}

declare module 'JSON_Pointer' {
		declare interface JSON_PointerWrap {
		get(pointer: string): any,
		set(pointer: string, value: any): void,
		remove(pointer: string): void,
		dict(): Object,
		walk(iterator: (value: any, key: string) => void): void,
		has(pointer: string): boolean
	}

	declare function get(object: Object, pointer: string): any

	declare function set(object: Object, pointer: string, value: any): void

	declare function remove(object: Object, pointer: string): void

	declare function dict(object: Object): Object

	declare function walk(object: Object, iterator: (value: any, key: string) => void): void

	declare function has(object: Object, pointer: string): boolean

	declare function escape(str: string): string

	declare function unescape(str: string): string

	declare function parse(str: string): string[]

	declare function compile(str: string[]): string

		
}