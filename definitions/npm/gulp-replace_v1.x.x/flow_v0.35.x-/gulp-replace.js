

declare module 'gulp-replace' {
		declare interface Options {
		skipBinary?: boolean
	}

	declare interface Replacer {
		(match: string): string
	}

	declare function replace(
		pattern: string, replacement: string | Replacer, opts?: Options
	): NodeJS.ReadWriteStream

	declare function replace(
		pattern: RegExp, replacement: string | Replacer, opts?: Options
	): NodeJS.ReadWriteStream

		declare module.exports: undefined


}