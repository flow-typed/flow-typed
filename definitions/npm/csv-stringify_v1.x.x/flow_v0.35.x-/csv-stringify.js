

declare module 'csv-stringify' {
			declare function stringify(
		input: any[][], opts: stringify.StringifyOpts, callback: (error: Error, output: string) => void
	): void

	declare function stringify(input: any[][], callback: (error: Error, output: string) => void): void

	declare function stringify(opts: stringify.StringifyOpts): stringify.Stringifier

		declare module.exports: undefined


}

declare module 'stringify' {
		declare interface StringifyOpts {
		columns?: string[],
		delimiter?: string,
		eof?: boolean,
		escape?: boolean,
		header?: boolean,
		lineBreaks?: string,
		quote?: string,
		quoted?: boolean,
		quotedEmpty?: boolean,
		quotedString?: boolean,
		rowDelimiter?: string
	}

	declare interface Stringifier {
		write(line: string[] | Object): boolean,
		write(buffer: Buffer, cb?: Function): boolean,
		write(str: string, cb?: Function): boolean,
		write(str: string, encoding?: string, cb?: Function): boolean
	}

			
}