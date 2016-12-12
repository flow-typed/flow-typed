

declare module 'glob-expand' {
		declare interface Option {
		filter?: string | ((filePath: string) => boolean),
		cwd?: string
	}

	declare function expand(opts: Option, patterns: (string | RegExp)[]): string[]

	declare function expand(opts: Option, ...patterns: (string | RegExp)[]): string[]

	declare function expand(patterns: (string | RegExp)[]): string[]

	declare function expand(...patterns: (string | RegExp)[]): string[]

		declare module.exports: undefined


}