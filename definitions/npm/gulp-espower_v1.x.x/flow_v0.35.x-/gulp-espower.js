

declare module 'gulp-espower' {
					declare module.exports: Espower


}

declare module 'espower' {
		declare interface Espower {
		(options?: Options): NodeJS.ReadWriteStream
	}

	declare interface Options {
		patterns: string[]
	}

			
}