

declare module 'html-to-text' {
		declare interface HtmlToTextStatic {
		fromFile(file: string, options: HtmlToTextOptions, callback: Function): void,
		fromFile(file: string, callback: Function): void,
		fromString(str: string, options?: HtmlToTextOptions): string
	}

	declare interface HtmlToTextOptions {
		wordwrap?: number,
		tables?: Array<string> | boolean,
		hideLinkHrefIfSameAsText?: boolean,
		linkHrefBaseUrl?: string,
		ignoreHref?: boolean,
		ignoreImage?: boolean
	}

			declare module.exports: HtmlToTextStatic


}