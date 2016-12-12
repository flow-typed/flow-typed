

declare module 'gulp-autoprefixer' {
			declare function autoPrefixer(opts?: autoPrefixer.Options): NodeJS.ReadWriteStream

		declare module.exports: undefined


}

declare module 'autoPrefixer' {
		declare interface Options {
		browsers?: string[],
		cascade?: boolean,
		remove?: boolean
	}

			
}