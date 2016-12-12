

declare module 'pluralize' {
		declare interface PluralizeStatic {
		(word: string, count?: number, inclusive?: boolean): string,
		plural(word: string): string,
		singular(word: string): string,
		addPluralRule(rule: string | RegExp, replacemant: string): void,
		addSingularRule(rule: string | RegExp, replacemant: string): void,
		addIrregularRule(single: string, plural: string): void,
		addUncountableRule(word: string | RegExp): void
	}

			declare module.exports: PluralizeStatic


}