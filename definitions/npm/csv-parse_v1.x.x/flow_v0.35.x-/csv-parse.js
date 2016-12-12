

declare module 'csv-parse' {
					declare module.exports: parseIntf


}

declare module 'csv-parse/types' {
		declare interface callbackFn {
		(err: any, output: any): void
	}

	declare interface nameCallback {
		(line1: any[]): boolean | string[]
	}

	declare interface options {
		delimiter?: string,
		rowDelimiter?: string,
		quote?: string,
		escape?: string,
		columns?: any[] | boolean | nameCallback,
		comment?: string,
		objname?: string,
		relax?: boolean,
		relax_column_count?: boolean,
		skip_empty_lines?: boolean,
		max_limit_on_data_read?: number,
		trim?: boolean,
		ltrim?: boolean,
		rtrim?: boolean,
		auto_parse?: boolean,
		auto_parse_date?: boolean
	}

	declare interface Parser {
		___push(line: any): any,
		___write(chars: any, end: any, callback: any): any
	}

	declare interface ParserConstructor {
		new (options: options): Parser
	}

	declare interface parse {
		(input: string, options?: options, callback?: callbackFn): any,
		(options: options, callback: callbackFn): any,
		(callback: callbackFn): any,
		(options?: options): NodeJS.ReadWriteStream,
		Parser: ParserConstructor
	}

			
}

declare module 'csv-parse/lib/sync' {
			declare function parse(input: string, options?: options): any

		declare module.exports: undefined


}