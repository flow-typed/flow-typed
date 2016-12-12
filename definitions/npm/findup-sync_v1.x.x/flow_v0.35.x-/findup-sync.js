

declare module 'findup-sync' {
		declare interface IOptions {
		cwd?: string
	}

	declare function mod(pattern: string[] | string, opts?: IOptions): string

		declare module.exports: undefined


}