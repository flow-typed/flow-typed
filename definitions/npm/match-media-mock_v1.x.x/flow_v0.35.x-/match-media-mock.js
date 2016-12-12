

declare module 'match-media-mock' {
		declare interface ConfigOptions {
		type?: string,
		height?: number,
		width?: number
	}

	declare interface MatchMediaMock {
		setConfig(config: ConfigOptions): void,
		(query: string): MediaQueryList
	}

	declare export function create(): MatchMediaMock

		
}