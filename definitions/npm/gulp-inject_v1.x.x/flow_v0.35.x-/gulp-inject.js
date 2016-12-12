

declare module 'gulp-inject' {
		declare interface ITagFunction {
		(targetExt: string, sourceExt: string): string
	}

	declare interface ITransformFunction {
		(filepath: string, file?: File, index?: number, length?: number, targetFile?: File): string
	}

	declare interface IOptions {
		ignorePath?: string | string[],
		relative?: boolean,
		addPrefix?: string,
		addSuffix?: string,
		addRootSlash?: boolean,
		name?: string,
		removeTags?: boolean,
		empty?: boolean,
		starttag?: string | ITagFunction,
		endtag?: string | ITagFunction,
		transform?: ITransformFunction,
		selfClosingTag?: boolean
	}

	declare function inject(sources: NodeJS.ReadableStream, options?: IOptions): NodeJS.ReadWriteStream

		declare module.exports: undefined


}