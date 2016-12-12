

declare module 'html-minifier' {
					declare module.exports: undefined


}

declare module 'HTMLMinifier' {
		declare interface Options {
		removeComments?: boolean,
		removeCommentsFromCDATA?: boolean,
		removeCDATASectionsFromCDATA?: boolean,
		collapseWhitespace?: boolean,
		conservativeCollapse?: boolean,
		collapseInlineTagWhitespace?: boolean,
		preserveLineBreaks?: boolean,
		collapseBooleanAttributes?: boolean,
		removeAttributeQuotes?: boolean,
		removeRedundantAttributes?: boolean,
		preventAttributesEscaping?: boolean,
		useShortDoctype?: boolean,
		removeEmptyAttributes?: boolean,
		removeScriptTypeAttributes?: boolean,
		removeStyleLinkTypeAttributes?: boolean,
		removeOptionalTags?: boolean,
		removeEmptyElements?: boolean,
		lint?: boolean,
		keepClosingSlash?: boolean,
		caseSensitive?: boolean,
		minifyJS?: boolean | UglifyJS.MinifyOptions,
		minifyCSS?: boolean | CleanCSS.Options,
		minifyURLs?: boolean | RelateUrl.Options,
		ignoreCustomComments?: Array<RegExp>,
		ignoreCustomFragments?: Array<RegExp>,
		processScripts?: Array<string>,
		maxLineLength?: number,
		customAttrAssign?: Array<RegExp>,
		customAttrSurround?: Array<RegExp>,
		customAttrCollapse?: RegExp,
		quoteCharacter?: string
	}

	declare function minify(text: string, options?: Options): string

		
}