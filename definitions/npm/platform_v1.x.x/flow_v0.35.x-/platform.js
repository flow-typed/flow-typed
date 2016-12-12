

declare module 'platform' {
		declare interface PlatformStatic {
		description?: string,
		layout?: string,
		manufacturer?: string,
		name?: string,
		prerelease?: string,
		product?: string,
		ua?: string,
		version?: string,
		os?: PlatformOS,
		parse(ua: string): PlatformStatic,
		toString(): string
	}

	declare interface PlatformOS {
		architecture?: number,
		family?: string,
		version?: string,
		toString(): string
	}

			
}