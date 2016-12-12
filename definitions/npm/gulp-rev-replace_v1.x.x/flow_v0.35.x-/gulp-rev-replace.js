

declare module 'gulp-rev-replace' {
			declare function revReplace(options?: revReplace.Options): NodeJS.ReadWriteStream

		declare module.exports: undefined


}

declare module 'revReplace' {
		declare interface Options {
		canonicalUris?: boolean,
		replaceInExtensions?: Array<string>,
		prefix?: string,
		manifest?: NodeJS.ReadWriteStream,
		modifyUnreved?: Function,
		modifyReved?: Function
	}

			
}