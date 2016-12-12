

declare module 'inline-css' {
			declare function InlineCss(html: string, options: InlineCss.Options): Promise<string>

		declare module.exports: undefined


}

declare module 'InlineCss' {
		declare export interface Options {
		url: string,
		extraCss?: string,
		applyStyleTags?: boolean,
		applyLinkTags?: boolean,
		removeStyleTags?: boolean,
		removeLinkTags?: boolean,
		preserveMediaQueries?: boolean,
		applyWidthAttributes?: boolean,
		applyTableAttributes?: boolean
	}

			
}