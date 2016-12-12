

declare module 'knockout.punches' {
		declare interface KnockoutPunchesStatic {
		enableAll(): void
	}

	declare interface KnockoutPunchesFilters {
		uppercase(value: string): string,
		lowercase(value: string): string,
		replace(value: string, search: string, replace: string): string,
		fit(
		value: number | string, length?: number, replacement?: string, trimWhere?: string
	): string,
		json(rootObject: any, space?: any, replacer?: any): string,
		number(value: number | string): string,
		default(value: any, defaultValue?: any): any
	}

	declare interface KnockoutStatic {
		punches: KnockoutPunchesStatic,
		filters: KnockoutPunchesFilters
	}

			declare module.exports: KnockoutPunchesStatic


}