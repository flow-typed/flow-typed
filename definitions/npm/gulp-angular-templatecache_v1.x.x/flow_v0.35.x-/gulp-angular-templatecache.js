

declare module 'gulp-angular-templatecache' {
			declare function templatecache(): NodeJS.ReadWriteStream

	declare function templatecache(filename: string): NodeJS.ReadWriteStream

	declare function templatecache(options: templatecache.Options): NodeJS.ReadWriteStream

	declare function templatecache(filename: string, options: templatecache.Options): NodeJS.ReadWriteStream

		declare module.exports: undefined


}

declare module 'templatecache' {
		declare interface Options {
		filename?: string,
		root?: string,
		module?: string,
		standalone?: boolean,
		base?: string | Function,
		moduleSystem?: string,
		transformUrl?: Function,
		templateHeader?: string,
		templateBody?: string,
		templateFooter?: string
	}

			
}