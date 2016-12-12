

declare module 'strip-json-comments' {
		declare interface StripJsonOptions {
		whitespace?: boolean
	}

	declare function stripJsonComments(input: string, opts?: StripJsonOptions): string

		declare module.exports: undefined


}