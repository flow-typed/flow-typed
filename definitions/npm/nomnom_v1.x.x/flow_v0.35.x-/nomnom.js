import type { Parser } from 'npm$namespace$NomnomInternal'

declare module 'nomnom' {
					declare module.exports: Parser


}

declare module 'Parser' {
		declare export interface Option {
		abbr?: string,
		full?: string,
		flag?: boolean,
		metavar?: string,
		string?: string,
		help?: string,
		default?: any,
		callback?: (option: any) => string,
		position?: number,
		list?: boolean,
		required?: boolean,
		choices?: string[],
		type?: string,
		hidden?: boolean
	}

	declare export interface Command {
		name: string,
		options(specs: {
		[index: string]: Option
	}): Command,
		option(name: string, spec: Option): Command,
		callback(func: (options: any) => void): Command,
		help(help: string): Command,
		usage(usage: string): Command
	}

			
}

declare module 'npm$namespace$NomnomInternal' {
		declare export interface Parser {
		(): Parser,
		command(name: string): Parser.Command,
		nocommand(): Parser.Command,
		options(specs: {
		[index: string]: Parser.Option
	}): Parser,
		option(name: string, spec: Parser.Option): Parser,
		usage(usage: string): Parser,
		printer(print: (message: string, code?: number) => void): Parser,
		script(script: string): Parser,
		help(help: string): Parser,
		nocolors(): Parser,
		nom(argv?: string[]): any,
		parse(argv?: string[]): any
	}

			
}