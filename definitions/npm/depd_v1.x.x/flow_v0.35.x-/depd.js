

declare module 'depd' {
		declare interface Deprecate {
		(message: string): void,
		function(fn: Function, message?: string): Function,
		property(obj: Object, prop: string, message: string): void
	}

	declare function depd(namespace: string): Deprecate

		declare module.exports: undefined


}