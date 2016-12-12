

declare module 'jsesc' {
		declare interface Opts {
		quotes?: string,
		wrap?: boolean,
		es6?: boolean,
		escapeEverything?: boolean,
		compact?: boolean,
		indent?: string,
		json?: boolean
	}

	declare function jsesc(str: string, opts?: any): string

		declare module.exports: undefined


}