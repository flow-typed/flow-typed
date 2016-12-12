

declare module 'argparse' {
		declare interface Namespace {
		
	}

	declare interface SubparserOptions {
		title?: string,
		description?: string,
		prog?: string,
		parserClass?: {
		new (): any
	},
		action?: string,
		dest?: string,
		help?: string,
		metavar?: string
	}

	declare interface SubArgumentParserOptions {
		aliases?: string[],
		help?: string
	}

	declare interface ArgumentParserOptions {
		description?: string,
		epilog?: string,
		addHelp?: boolean,
		argumentDefault?: any,
		parents?: ArgumentParser[],
		prefixChars?: string,
		formatterClass?: {
		new (
		
	): HelpFormatter | ArgumentDefaultsHelpFormatter | RawDescriptionHelpFormatter | RawTextHelpFormatter
	},
		prog?: string,
		usage?: string,
		version?: string
	}

	declare interface ArgumentGroupOptions {
		prefixChars?: string,
		argumentDefault?: any,
		title?: string,
		description?: string
	}

	declare interface ArgumentOptions {
		action?: string,
		optionStrings?: string[],
		dest?: string,
		nargs?: string | number,
		constant?: any,
		defaultValue?: any,
		type?: string | Function,
		choices?: string | string[],
		required?: boolean,
		help?: string,
		metavar?: string
	}

		declare export class ArgumentParser extends ArgumentGroup {
		constructor(options?: ArgumentParserOptions): this;
		addSubparsers(options?: SubparserOptions): SubParser;
		parseArgs(args?: string[], ns?: Namespace | Object): any;
		printUsage(): void;
		printHelp(): void;
		formatUsage(): string;
		formatHelp(): string;
		parseKnownArgs(args?: string[], ns?: Namespace | Object): any[];
		convertArgLineToArg(argLine: string): string[];
		exit(status: number, message: string): void;
		error(err: string | Error): void
	}

	declare class SubParser  {
		addParser(name: string, options?: SubArgumentParserOptions): ArgumentParser
	}

	declare class ArgumentGroup  {
		addArgument(args: string[], options?: ArgumentOptions): void;
		addArgumentGroup(options?: ArgumentGroupOptions): ArgumentGroup;
		addMutuallyExclusiveGroup(options?: {
		required: boolean
	}): ArgumentGroup;
		setDefaults(options?: {
		
	}): void;
		getDefault(dest: string): any
	}

	declare export class HelpFormatter  {
		
	}

	declare export class ArgumentDefaultsHelpFormatter  {
		
	}

	declare export class RawDescriptionHelpFormatter  {
		
	}

	declare export class RawTextHelpFormatter  {
		
	}

	
}