

declare module 'bazinga-translator' {
		declare interface BazingaTranslator {
		locale: string,
		fallback: string,
		placeHolderPrefix: string,
		placeHolderSuffix: string,
		defaultDomain: string,
		pluralSeparator: string,
		add(id: string, message: string, domain: string, locale: string): BazingaTranslator,
		trans(id: string, parameters: any, domain: string, locale?: string): string,
		transChoice(
		id: string, number: number, parameters: any, domain: string, locale?: string
	): string,
		fromJSON(data: string): BazingaTranslator,
		reset(): void
	}

			
}