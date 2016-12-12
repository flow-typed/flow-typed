

declare module 'gulp-minify-html' {
			declare function minifyHtml(options?: minifyHtml.Options): NodeJS.ReadWriteStream

		declare module.exports: undefined


}

declare module 'minifyHtml' {
		declare interface Options {
		empty?: boolean,
		cdata?: boolean,
		comments?: boolean,
		conditionals?: boolean,
		spare?: boolean,
		quotes?: boolean,
		loose?: boolean
	}

			
}