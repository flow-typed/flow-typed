

declare module 'optimist' {
		declare interface Opt {
		alias?: string | string[],
		default?: any,
		demand?: string | number | string[],
		describe?: string,
		type?: string
	}

	declare interface Parser {
		argv: any,
		(args: string[]): any,
		parse(args: string[]): any,
		alias(key: string, alias: string | string[]): Parser,
		alias(aliases: {
		[index: string]: string | string[]
	}): Parser,
		default(key: string, value: any): Parser,
		default(defaults: {
		[index: string]: any
	}): Parser,
		demand(key: string): Parser,
		demand(key: number): Parser,
		demand(key: string[]): Parser,
		describe(key: string, desc: string): Parser,
		describe(descriptions: {
		[index: string]: string
	}): Parser,
		options(key: string, opt: Opt): Parser,
		options(options: {
		[index: string]: Opt
	}): Parser,
		usage(message: string): Parser,
		check(fn: (argv: any) => any): Parser,
		boolean(key: string): Parser,
		boolean(key: string[]): Parser,
		string(key: string): Parser,
		string(key: string[]): Parser,
		wrap(columns: number): Parser,
		help(): string,
		showHelp(fn?: (message: string) => void): void
	}

			declare module.exports: Parser


}