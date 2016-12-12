

declare module 'asciify' {
		declare interface AsciifyOptions {
		font?: string,
		maxWidth?: number,
		color?: string
	}

	declare interface AsciifyCallback {
		(err: any, asciifiedText: string): void
	}

	declare function asciify(text: string, callback: AsciifyCallback): void

	declare function asciify(text: string, options: string, callback: AsciifyCallback): void

	declare function asciify(text: string, options: AsciifyOptions, callback: AsciifyCallback): void

	declare function getFonts(callback: (err: Error, fonts: string[]) => void): void

		declare module.exports: undefined


}