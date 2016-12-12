

declare module 'loggly' {
		declare interface LogglyOptions {
		token: string,
		subdomain: string,
		tags?: string[],
		json?: boolean,
		host?: string,
		auth?: {
		username: string,
		password: string
	}
	}

	declare interface Loggly {
		log(
		message: any, tags?: string[], callback?: (err: any, results: any) => void
	): void,
		log(message: any, callback?: (err: any, results: any) => void): void
	}

	declare function createClient(options: LogglyOptions): Loggly

		
}