

declare module 'stampit' {
		declare interface Init {
		(ctx: Context): any | Promise<any>
	}

	declare interface Context {
		instance: any,
		stamp: Stamp,
		args: any[]
	}

	declare interface Fixed {
		methods: {
		
	},
		state: {
		
	},
		refs: {
		
	},
		enclose: Init[],
		init: Init[],
		props: {
		
	},
		static: {
		
	}
	}

	declare interface Options {
		methods?: {
		
	} | {
		
	}[],
		refs?: {
		
	} | {
		
	}[],
		init?: Init | Init[],
		props?: {
		
	} | {
		
	}[],
		static?: {
		
	} | {
		
	}[]
	}

	declare interface Stamp {
		(state?: {
		
	}, ...encloseArgs: any[]): any | Promise<any>,
		create(state?: {
		
	}, ...encloseArgs: any[]): any | Promise<any>,
		fixed: Fixed,
		methods(...methods: {
		
	}[]): Stamp,
		refs(...states: {
		
	}[]): Stamp,
		props(...objects: {
		
	}[]): Stamp,
		state(...states: {
		
	}[]): Stamp,
		enclose(...functions: Init[]): Stamp,
		enclose(...functions: {
		
	}[]): Stamp,
		init(...functions: Init[]): Stamp,
		init(...functions: {
		
	}[]): Stamp,
		static(...statics: {
		
	}[]): Stamp,
		compose(...stamps: Stamp[]): Stamp
	}

	declare function stampit(options?: Options): Stamp

		declare module.exports: undefined


}

declare module 'npm$namespace$stampit' {
			declare export function methods(...methods: {
		
	}[]): Stamp

	declare export function refs(...states: {
		
	}[]): Stamp

	declare export function props(...states: {
		
	}[]): Stamp

	declare export function init(...functions: Init[]): Stamp

	declare export function static(...statics: {
		
	}[]): Stamp

	declare export function compose(...stamps: Stamp[]): Stamp

	declare export function mixin(destination: any, ...source: any[]): any

	declare export function mixIn(destination: any, ...source: any[]): any

	declare export function extend(destination: any, ...source: any[]): any

	declare export function assign(destination: any, ...source: any[]): any

	declare export function isStamp(obj: any): boolean

	declare export function convertConstructor(Constructor: any): Stamp

		
}