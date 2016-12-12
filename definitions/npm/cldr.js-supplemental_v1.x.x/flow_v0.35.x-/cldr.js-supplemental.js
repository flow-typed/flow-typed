

declare module 'cldr.js-supplemental' {
					
}

declare module 'npm$namespace$cldr' {
		declare interface TimeDataStatic {
		allowed(): string,
		preferred(): string
	}

	declare interface WeekDataStatic {
		firstDay(): string,
		minDays(): number
	}

	declare interface SupplementalStatic {
		timeData: TimeDataStatic,
		weekData: WeekDataStatic,
		(path: string): any,
		(paths: string[]): any
	}

	declare interface CldrStatic {
		supplemental: SupplementalStatic
	}

			
}

declare module 'cldr/supplemental' {
					declare module.exports: undefined


}