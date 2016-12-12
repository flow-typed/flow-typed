

declare module 'remote-redux-devtools' {
	declare type StringOrArray = string | string[];

	declare interface Config {
		name?: string,
		realtime?: boolean,
		hostname?: string,
		port?: number,
		secure?: boolean,
		filters?: {
		[key: string]: string[]
	},
		maxAge?: number,
		startOn?: StringOrArray,
		stopOn?: StringOrArray,
		sendOn?: StringOrArray,
		sendOnError?: number,
		sendTo?: string,
		id?: string
	}

	declare function devTools(config?: Config): Function

		declare module.exports: undefined


}