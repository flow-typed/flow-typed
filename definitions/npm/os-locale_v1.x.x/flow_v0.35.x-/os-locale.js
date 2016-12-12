

declare module 'os-locale' {
			declare function osLocale(options: {
		spawn?: boolean
	}, cb: (err: any, locale: string) => void): void

	declare function osLocale(cb: (err: any, locale: string) => void): void

	declare function osLocaleSync(): string

	declare function osLocaleSync(options: {
		spawn?: boolean
	}): string

		declare module.exports: undefined


}