

declare module 'gulp-cheerio' {
					declare module.exports: Cheerio


}

declare module 'cheerio' {
		declare interface Cheerio {
		(callback: Callback): NodeJS.ReadWriteStream,
		(option: Option): NodeJS.ReadWriteStream
	}

	declare interface Callback {
		($: CheerioStatic, file: Vinyl, done?: Function): any
	}

	declare interface Option {
		run?: Callback,
		parserOptions?: CheerioOptionsInterface,
		cheerio?: CheerioStatic
	}

			
}