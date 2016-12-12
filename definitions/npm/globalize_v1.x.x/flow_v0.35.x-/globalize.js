

declare module 'globalize' {
		declare interface DateFormatterOptions {
		skeleton?: string,
		date?: "full" | "long" | "medium" | "short",
		time?: "full" | "long" | "medium" | "short",
		datetime?: "full" | "long" | "medium" | "short",
		raw?: string
	}

	declare interface CommonNumberFormatterOptions {
		minimumIntegerDigits?: number,
		minimumFractionDigits?: number,
		maximumFractionDigits?: number,
		minimumSignificantDigits?: number,
		maximumSignificantDigits?: number,
		round?: "ceil" | "floor" | "round" | "truncate",
		useGrouping?: boolean
	}

	declare interface NumberFormatterOptions {
		style?: "decimal" | "percent"
	}

	declare interface CurrencyFormatterOptions {
		style?: "symbol" | "accounting" | "code" | "name"
	}

	declare interface NumberParserOptions {
		style?: "decimal" | "percent"
	}

	declare interface PluralGeneratorOptions {
		type?: "cardinal" | "ordinal"
	}

	declare interface RelativeTimeFormatterOptions {
		form?: "short" | "narrow"
	}

	declare interface UnitFormatterOptions {
		form?: "long" | "short" | "narrow",
		numberFormatter?: NumberFormatterOptions
	}

	declare interface GlobalizeStatic {
		cldr: cldr.CldrStatic,
		load(json: Object): void,
		locale(): cldr.CldrStatic,
		locale(locale: string): cldr.CldrStatic,
		locale(cldr: cldr.CldrStatic): cldr.CldrStatic,
		dateFormatter(options?: DateFormatterOptions): (value: Date) => string,
		dateParser(options?: DateFormatterOptions): (value: string) => Date,
		formatDate(value: Date, options?: DateFormatterOptions): string,
		parseDate(value: string, options?: DateFormatterOptions): Date,
		loadMessages(json: Object): void,
		messageFormatter(path: string | string[]): (variables?: string | string[] | Object) => string,
		formatMessage(path: string | string[], variables?: string | string[] | Object): string,
		numberFormatter(options?: NumberFormatterOptions): (value: number) => string,
		numberParser(options?: NumberParserOptions): (value: string) => number,
		formatNumber(value: number, options?: NumberFormatterOptions): string,
		parseNumber(value: string, options?: NumberParserOptions): number,
		currencyFormatter(
		currency: string, options?: CurrencyFormatterOptions
	): (value: number) => string,
		formatCurrency(value: number, currency: string, options?: CurrencyFormatterOptions): string,
		pluralGenerator(options?: PluralGeneratorOptions): (value: number) => string,
		plural(value: number, options?: PluralGeneratorOptions): string,
		relativeTimeFormatter(
		unit: string, options?: RelativeTimeFormatterOptions
	): (value: number) => string,
		formatRelativeTime(value: number, unit: string, options?: RelativeTimeFormatterOptions): string,
		unitFormatter(unit: string, options?: UnitFormatterOptions): (value: number) => string,
		formatUnit(value: number, unit: string, options?: UnitFormatterOptions): string,
		new (locale: string): GlobalizeStatic,
		new (cldr: cldr.CldrStatic): GlobalizeStatic
	}

			
}