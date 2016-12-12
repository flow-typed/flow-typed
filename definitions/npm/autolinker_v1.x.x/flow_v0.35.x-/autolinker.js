import type { Static } from 'npm$namespace$___Autolinker'

declare module 'autolinker' {
					declare module.exports: Static


}

declare module 'npm$namespace$___Autolinker' {
		declare interface ConfigOptions {
		className?: string,
		email?: boolean,
		hashtag?: boolean | string,
		newWindow?: boolean,
		phone?: boolean,
		replaceFn?: (autolinker: Autolinker, match: any) => string,
		stripPrefix?: boolean,
		truncate?: number | {
		length?: number,
		location?: string
	},
		twitter?: boolean,
		urls?: boolean | {
		schemeMatches: boolean,
		wwwMatches: boolean,
		tldMatches: boolean
	}
	}

	declare interface Autolinker {
		getTagBuilder(): any,
		link(textOrHtml: string): string,
		parse(textOrHtml: string): any[]
	}

	declare interface Static {
		new (cfg?: ConfigOptions): Autolinker,
		link(textOrHtml: string, options?: ConfigOptions): string
	}

			
}