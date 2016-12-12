

declare module 'gulp-useref' {
		declare interface Options {
		searchPath?: string | string[],
		base?: string,
		noAssets?: boolean,
		noconcat?: boolean,
		additionalStreams?: Array<NodeJS.ReadWriteStream>,
		transformPath?: (filePath: string) => void
	}

	declare interface Useref {
		(options?: Options, ...transformStreams: NodeJS.ReadWriteStream[]): NodeJS.ReadWriteStream
	}

			declare module.exports: Useref


}