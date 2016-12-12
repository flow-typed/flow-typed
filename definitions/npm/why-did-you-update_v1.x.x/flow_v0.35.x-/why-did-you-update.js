

declare module 'why-did-you-update' {
		declare interface Options {
		include?: RegExp,
		exclude?: RegExp
	}

	declare export function whyDidYouUpdate(react: typeof ___React, options?: Options): void

		
}