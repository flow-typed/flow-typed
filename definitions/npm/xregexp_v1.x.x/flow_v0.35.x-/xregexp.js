

declare module 'xregexp' {
			declare function OuterXRegExp(pattern: string, flags?: string): RegExp

	declare function OuterXRegExp(pattern: RegExp): RegExp

		declare module.exports: undefined


}

declare module 'OuterXRegExp' {
		declare interface TokenOpts {
		scope?: string,
		trigger?: () => boolean,
		customFlags?: string
	}

	declare function XRegExp(pattern: string, flags?: string): RegExp

	declare function XRegExp(pattern: RegExp): RegExp

	declare function addToken(
		regex: RegExp, handler: (matchArr: RegExpExecArray, scope: string) => string, options?: TokenOpts
	): void

	declare function build(pattern: string, subs: string[], flags?: string): RegExp

	declare function cache(pattern: string, flags?: string): RegExp

	declare function escape(str: string): string

	declare function exec(str: string, regex: RegExp, pos?: number, sticky?: boolean): RegExpExecArray

	declare function forEach(
		str: string, regex: RegExp, callback: (
		matchArr: RegExpExecArray, index: number, input: string, regexp: RegExp
	) => void
	): any

	declare function globalize(regex: RegExp): RegExp

	declare function install(options: string): void

	declare function install(options: Object): void

	declare function isInstalled(feature: string): boolean

	declare function isRegExp(value: any): boolean

	declare function match(str: string, regex: RegExp, scope: string): any

	declare function match(str: string, regex: RegExp, scope: "one"): string

	declare function match(str: string, regex: RegExp, scope: "all"): string[]

	declare function match(str: string, regex: RegExp): string[]

	declare function matchChain(str: string, chain: RegExp[]): string[]

	declare function matchChain(str: string, chain: {
		regex: RegExp,
		backref: string
	}[]): string[]

	declare function matchChain(str: string, chain: {
		regex: RegExp,
		backref: number
	}[]): string[]

	declare function matchRecursive(
		str: string, left: string, right: string, flags?: string, options?: Object
	): string[]

	declare function replace(str: string, search: string, replacement: string, scope?: string): string

	declare function replace(str: string, search: string, replacement: Function, scope?: string): string

	declare function replace(str: string, search: RegExp, replacement: string, scope?: string): string

	declare function replace(str: string, search: RegExp, replacement: Function, scope?: string): string

	declare function replaceEach(str: string, replacements: Array<RegExp | string>[]): string

	declare function split(str: string, separator: string, limit?: number): string[]

	declare function split(str: string, separator: RegExp, limit?: number): string[]

	declare function test(str: string, regex: RegExp, pos?: number, sticky?: boolean): boolean

	declare function uninstall(options: Object): void

	declare function uninstall(options: string): void

	declare function union(patterns: string[], flags?: string): RegExp

		
}

declare module 'XRegExp' {
			declare function addToken(
		regex: RegExp, handler: (matchArr: RegExpExecArray, scope: string) => string, options?: TokenOpts
	): void

	declare function build(pattern: string, subs: string[], flags?: string): RegExp

	declare function cache(pattern: string, flags?: string): RegExp

	declare function escape(str: string): string

	declare function exec(str: string, regex: RegExp, pos?: number, sticky?: boolean): RegExpExecArray

	declare function forEach(
		str: string, regex: RegExp, callback: (
		matchArr: RegExpExecArray, index: number, input: string, regexp: RegExp
	) => void
	): any

	declare function globalize(regex: RegExp): RegExp

	declare function install(options: string): void

	declare function install(options: Object): void

	declare function isInstalled(feature: string): boolean

	declare function isRegExp(value: any): boolean

	declare function match(str: string, regex: RegExp, scope: string): any

	declare function match(str: string, regex: RegExp, scope: "one"): string

	declare function match(str: string, regex: RegExp, scope: "all"): string[]

	declare function match(str: string, regex: RegExp): string[]

	declare function matchChain(str: string, chain: RegExp[]): string[]

	declare function matchChain(str: string, chain: {
		regex: RegExp,
		backref: string
	}[]): string[]

	declare function matchChain(str: string, chain: {
		regex: RegExp,
		backref: number
	}[]): string[]

	declare function matchRecursive(
		str: string, left: string, right: string, flags?: string, options?: Object
	): string[]

	declare function replace(str: string, search: string, replacement: string, scope?: string): string

	declare function replace(str: string, search: string, replacement: Function, scope?: string): string

	declare function replace(str: string, search: RegExp, replacement: string, scope?: string): string

	declare function replace(str: string, search: RegExp, replacement: Function, scope?: string): string

	declare function replaceEach(str: string, replacements: Array<RegExp | string>[]): string

	declare function split(str: string, separator: string, limit?: number): string[]

	declare function split(str: string, separator: RegExp, limit?: number): string[]

	declare function test(str: string, regex: RegExp, pos?: number, sticky?: boolean): boolean

	declare function uninstall(options: Object): void

	declare function uninstall(options: string): void

	declare function union(patterns: string[], flags?: string): RegExp

		
}