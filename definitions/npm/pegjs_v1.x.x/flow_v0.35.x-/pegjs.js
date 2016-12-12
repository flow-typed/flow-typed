

declare module 'pegjs' {
	declare type Location = PEG.Location;

	declare type LocationRange = PEG.LocationRange;

	declare type GrammarError = PegjsError;

	declare interface ExpectedItem {
		type: string,
		value?: string,
		description: string
	}

	declare interface PegjsError {
		name: string,
		message: string,
		location: LocationRange,
		found?: any,
		expected?: ExpectedItem[],
		stack?: any
	}

	declare interface ParserOptions {
		startRule: string,
		tracer: any
	}

	declare interface Parser {
		parse(input: string, options?: ParserOptions): any,
		SyntaxError: any
	}

	declare interface BuildOptionsBase {
		allowedStartRules?: string[],
		cache?: boolean,
		optimize?: "speed" | "size",
		plugins?: any[],
		trace?: boolean
	}

	declare interface ParserBuildOptions {
		output?: "parser"
	}

	declare interface OutputFormatAmdCommonjs {
		output: "source",
		format: "amd" | "commonjs",
		dependencies?: any
	}

	declare interface OutputFormatUmd {
		output: "source",
		format: "umd",
		dependencies?: any,
		exportVar?: any
	}

	declare interface OutputFormatGlobals {
		output: "source",
		format: "globals",
		exportVar?: any
	}

	declare interface OutputFormatBare {
		output: "source",
		format?: "bare"
	}

	declare function generate(grammar: string, options?: ParserBuildOptions): Parser

	declare function generate(grammar: string, options: OutputFormatAmdCommonjs): string

	declare function generate(grammar: string, options: OutputFormatUmd): string

	declare function generate(grammar: string, options: OutputFormatGlobals): string

	declare function generate(grammar: string, options: OutputFormatBare): string

		
}

declare module 'npm$namespace$PEG' {
		declare interface Location {
		line: number,
		column: number,
		offset: number
	}

	declare interface LocationRange {
		start: Location,
		end: Location
	}

	declare function parse(input: string): any

	declare class SyntaxError  {
		line: number;
		column: number;
		offset: number;
		location: LocationRange;
		expected: any[];
		found: any;
		name: string;
		message: string
	}

	
}

declare module 'parser' {
	declare type SyntaxError = PegjsError;

				
}