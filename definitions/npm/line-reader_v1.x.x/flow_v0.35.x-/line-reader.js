

declare module 'line-reader' {
		declare interface LineReaderOptions {
		separator?: any,
		encoding?: string,
		bufferSize?: number
	}

	declare interface LineReader {
		eachLine(): Function,
		open(): Function,
		eachLine(
		file: string, cb: (line: string, last?: boolean, cb?: Function) => void
	): LineReader,
		eachLine(
		file: string, options: LineReaderOptions, cb: (line: string, last?: boolean, cb?: Function) => void
	): LineReader,
		open(file: string, cb: (err: Error, reader: LineReader) => void): void,
		open(
		file: string, options: LineReaderOptions, cb: (err: Error, reader: LineReader) => void
	): void,
		hasNextLine(): boolean,
		nextLine(cb: (err: Error, line: string) => void): void,
		close(cb: (err: Error) => void): void
	}

			declare module.exports: LineReader


}