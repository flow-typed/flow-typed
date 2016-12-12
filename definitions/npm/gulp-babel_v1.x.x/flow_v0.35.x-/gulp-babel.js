

declare module 'gulp-babel' {
			declare function babel(
		options?: {
		filename?: string,
		filenameRelative?: string,
		presets?: string[],
		plugins?: string[],
		highlightCode?: boolean,
		only?: string | string[],
		ignore?: string | string[],
		auxiliaryCommentBefore?: any,
		auxiliaryCommentAfter?: any,
		sourceMaps?: any,
		inputSourceMap?: any,
		sourceMapTarget?: any,
		sourceFileName?: any,
		sourceRoot?: any,
		moduleRoot?: any,
		moduleIds?: any,
		moduleId?: any,
		getModuleId?: any,
		resolveModuleSource?: any,
		keepModuleIdExtesions?: boolean,
		code?: boolean,
		ast?: boolean,
		compact?: any,
		comments?: boolean,
		shouldPrintComment?: any,
		env?: any,
		retainLines?: boolean
	}
	): NodeJS.ReadWriteStream

		declare module.exports: undefined


}