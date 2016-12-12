

declare module 'del' {
			declare function Del(pattern: string): Promise<string[]>

	declare function Del(pattern: string, options: Del.Options): Promise<string[]>

	declare function Del(patterns: string[]): Promise<string[]>

	declare function Del(patterns: string[], options: Del.Options): Promise<string[]>

		declare module.exports: undefined


}

declare module 'Del' {
		declare interface Options {
		force?: boolean,
		dryRun?: boolean
	}

	declare function sync(pattern: string, options?: Options): string[]

	declare function sync(patterns: string[], options?: Options): string[]

		
}