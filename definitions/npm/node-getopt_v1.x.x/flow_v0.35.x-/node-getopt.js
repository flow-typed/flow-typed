

declare module 'node-getopt' {
		declare interface StringMap {
		[index: string]: string
	}

	declare interface EventCallback {
		(arguments: string[], options: StringMap): void
	}

	declare interface ErrorFunc {
		(exception: Error): void
	}

	declare interface OptionConfigurationArray {
		[index: number]: string[]
	}

		declare class ParsedOption  {
		argv: string[];
		options: StringMap;
		constructor(argv: string[], options: StringMap): this;
		empty(): boolean
	}

	declare class Getopt  {
		HAS_ARGUMENT: boolean;
		NO_ARGUMENT: boolean;
		MULTI_SUPPORTED: boolean;
		SINGLE_ONLY: boolean;
		VERSION: string;
		constructor(options: any[]): this;
		on(name: string, cb: EventCallback): Getopt;
		emit(name: string, cb: EventCallback): Getopt;
		parse(argv: string[]): ParsedOption;
		parse_system(): ParsedOption;
		parseSystem(): ParsedOption;
		setHelp(help: string): Getopt;
		showHelp(): Getopt;
		getHelp(): string;
		bindHelp(help?: string): Getopt;
		getVersion(): string;
		getVersion(): string;
		error(errorFunc: ErrorFunc): Getopt;
		create(options: string[]): Getopt
	}

	declare module.exports: undefined


}