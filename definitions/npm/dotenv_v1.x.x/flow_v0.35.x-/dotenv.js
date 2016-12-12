

declare module 'dotenv' {
		declare interface dotenvOptions {
		silent?: boolean,
		path?: string,
		encoding?: string
	}

	declare export function config(options?: dotenvOptions): boolean

		
}