

declare module 'coffeeify' {
		declare interface Coffeeify {
		isCoffee(file: string): boolean,
		isLiterate(file: string): boolean,
		sourceMap: boolean,
		compile(file: string, data: string, callback: Callback): void,
		(file: string): through.ThroughStream
	}

	declare interface Callback {
		(error: ParseError, compiled: string): void
	}

	declare interface ParseError {
		new (error: any, src: string, file: string): ParseError,
		message: string,
		line: number,
		column: number,
		annotated: string
	}

			declare module.exports: Coffeeify


}