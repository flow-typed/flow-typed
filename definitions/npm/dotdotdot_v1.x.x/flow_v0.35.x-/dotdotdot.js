

declare module 'dotdotdot' {
		declare interface JQuery {
		dotdotdot(options?: JQueryDotDotDot.IDotDotDotOptions): JQuery
	}

			
}

declare module 'npm$namespace$JQueryDotDotDot' {
		declare interface IDotDotDotOptions {
		ellipsis?: string,
		wrap?: string,
		fallbackToLetter?: boolean,
		after?: string | JQuery,
		watch?: boolean,
		height?: number,
		tolerance?: number,
		callback(isTruncated: boolean, orgContent: any): void,
		lastCharacter?: IDotDotDotOptionsLastCharacter
	}

	declare interface IDotDotDotOptionsLastCharacter {
		remove?: string[],
		noEllipsis?: string[]
	}

			
}