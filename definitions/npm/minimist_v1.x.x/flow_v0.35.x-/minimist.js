

declare module 'minimist' {
		declare export interface Opts {
		string?: string | string[],
		boolean?: boolean | string | string[],
		alias?: {
		[key: string]: string | string[]
	},
		default?: {
		[key: string]: any
	},
		stopEarly?: boolean,
		unknown?: (arg: string) => boolean,
		--?: boolean
	}

	declare export interface ParsedArgs {
		[arg: string]: any,
		_: string[]
	}

	declare function minimist(args?: string[], opts?: minimist.Opts): minimist.ParsedArgs

		declare module.exports: undefined


}