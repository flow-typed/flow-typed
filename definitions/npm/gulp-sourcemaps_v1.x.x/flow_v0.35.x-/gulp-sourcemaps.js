

declare module 'gulp-sourcemaps' {
		declare interface InitOptions {
		loadMaps?: boolean,
		debug?: boolean
	}

	declare interface WriteMapper {
		(file: string): string
	}

	declare interface WriteOptions {
		addComment?: boolean,
		includeContent?: boolean,
		sourceRoot?: string | WriteMapper,
		sourceMappingURLPrefix?: string | WriteMapper
	}

	declare export function init(opts?: InitOptions): NodeJS.ReadWriteStream

	declare export function write(path?: string, opts?: WriteOptions): NodeJS.ReadWriteStream

	declare export function write(opts?: WriteOptions): NodeJS.ReadWriteStream

		
}