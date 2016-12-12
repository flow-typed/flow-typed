

declare module 'gulp-filter' {
			declare function filter(
		pattern: string | string[] | filter.FileFunction, options?: filter.Options
	): filter.Filter

		declare module.exports: undefined


}

declare module 'filter' {
		declare interface FileFunction {
		(file: File): boolean
	}

	declare interface Options {
		restore?: boolean,
		passthrough?: boolean
	}

	declare interface Filter {
		restore: NodeJS.ReadWriteStream
	}

			
}