import type { IExportedCommand } from 'npm$namespace$commander'

declare module 'commander' {
					declare module.exports: IExportedCommand


}

declare module 'npm$namespace$commander' {
		declare interface ICommandStatic {
		new (name?: string): ICommand
	}

	declare interface ICommand {
		args: string[],
		_args: {
		required: boolean,
		name: string
	}[],
		command(name: string, desc?: string, opts?: any): ICommand,
		addImplicitHelpCommand(): void,
		parseExpectedArgs(args: string[]): ICommand,
		action(fn: (...args: any[]) => void): ICommand,
		option(
		flags: string, description?: string, fn?: ((arg1: any, arg2: any) => void) | RegExp, defaultValue?: any
	): ICommand,
		option(flags: string, description?: string, defaultValue?: any): ICommand,
		allowUnknownOption(arg?: boolean): ICommand,
		parse(argv: string[]): ICommand,
		executeSubCommand(argv: string[], args: string[], unknown: string[]): any,
		normalize(args: string[]): string[],
		parseArgs(args: string[], unknown: string[]): ICommand,
		optionFor(arg: string): IOption,
		parseOptions(argv: string[]): {
		args: string[],
		unknown: string[]
	},
		opts(): any,
		missingArgument(name: string): void,
		optionMissingArgument(option: {
		flags: string
	}, flag?: string): void,
		unknownOption(flag: string): void,
		version(str: string, flags?: string): ICommand,
		description(str: string): ICommand,
		description(): string,
		alias(alias: string): ICommand,
		alias(): string,
		usage(str: string): ICommand,
		usage(): string,
		name(): string,
		largestOptionLength(): number,
		optionHelp(): string,
		commandHelp(): string,
		helpInformation(): string,
		outputHelp(): void,
		help(): void
	}

	declare interface IOptionStatic {
		new (flags: string, description?: string): IOption
	}

	declare interface IOption {
		flags: string,
		required: boolean,
		optional: boolean,
		bool: boolean,
		short?: string,
		long: string,
		description: string,
		name(): string,
		is(arg: string): boolean
	}

	declare interface IExportedCommand {
		Command: commander.ICommandStatic,
		Option: commander.IOptionStatic
	}

			
}