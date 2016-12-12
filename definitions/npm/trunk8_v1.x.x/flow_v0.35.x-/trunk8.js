

declare module 'trunk8' {
		declare interface Trunk8Options {
		fill?: string,
		lines?: number,
		side?: string,
		tooltip?: boolean,
		width?: string
	}

	declare interface JQuery {
		trunk8(method: string, value?: string): any,
		trunk8(options?: Trunk8Options): any
	}

			
}