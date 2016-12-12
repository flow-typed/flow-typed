

declare module 'gulp-typedoc' {
		declare interface Options {
		out: string,
		mode?: string,
		json?: string,
		exclude?: string,
		includeDeclarations?: boolean,
		externalPattern?: string,
		excludeExternals?: boolean,
		module?: string,
		target?: string,
		theme?: string,
		name?: string,
		readme?: string,
		hideGenerator?: boolean,
		gaID?: string,
		gaSite?: string,
		verbose?: boolean
	}

	declare function typedoc(opts: Options): NodeJS.ReadWriteStream

		declare module.exports: undefined


}