

declare module 'inflected' {
		declare interface Inflected {
		pluralize(word: string, locale?: string): string,
		singularize(word: string, locale?: string): string,
		camelize(term: string, uppercaseFirstLetter?: boolean): string,
		underscore(camelCaseWord: string): string,
		humanize(lowerCaseAndUnderscoredWord: string, options?: Options.Humanize): string,
		titleize(sentence: string): string,
		tableize(className: string): string,
		classify(tableName: string): string,
		dasherize(underscoredWord: string): string,
		foreignKey(className: string, separateClassNameAndIdWithUnderscore?: boolean): string,
		ordinal(number: number): string,
		ordinalize(number: number): string,
		transliterate(sentence: string, options?: Options.Transliterate): string,
		parameterize(sentence: string, options?: Options.Parameterize): string
	}

			declare module.exports: Inflected


}

declare module 'Options' {
		declare interface Humanize {
		capitalize: boolean
	}

	declare interface Transliterate {
		locale: string,
		replacement: string
	}

	declare interface Parameterize {
		separator: string
	}

			
}