

declare module 'gulp-uglify' {
			declare function GulpUglify(options?: GulpUglify.Options): NodeJS.ReadWriteStream

		declare module.exports: undefined


}

declare module 'GulpUglify' {
		declare interface Options {
		mangle?: boolean,
		output?: UglifyJS.BeautifierOptions,
		compress?: UglifyJS.CompressorOptions | boolean,
		preserveComments?: string | ((node: any, comment: UglifyJS.Tokenizer) => boolean)
	}

			
}