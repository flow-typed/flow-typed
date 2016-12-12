

declare module 'Globalization' {
		declare interface Navigator {
		globalization: Globalization
	}

	declare interface Globalization {
		getPreferredLanguage(
		onSuccess: (language: {
		value: string
	}) => void, onError: (error: GlobalizationError) => void
	): void,
		getLocaleName(
		onSuccess: (locale: {
		value: string
	}) => void, onError: (error: GlobalizationError) => void
	): void,
		dateToString(
		date: Date, onSuccess: (date: {
		value: string
	}) => void, onError: (error: GlobalizationError) => void, options?: {
		formatLength?: string,
		selector?: string
	}
	): void,
		stringToDate(
		dateString: string, onSuccess: (date: GlobalizationDate) => void, onError: (error: GlobalizationError) => void, options?: {
		type?: string,
		item?: string
	}
	): void,
		getDatePattern(
		onSuccess: (datePattern: GlobalizationDatePattern) => void, onError: (error: GlobalizationError) => void, options?: {
		type?: string,
		item?: string
	}
	): void,
		getDateNames(
		onSuccess: (names: {
		value: string[]
	}) => void, onError: (error: GlobalizationError) => void, options?: {
		type?: string,
		item?: string
	}
	): void,
		isDaylightSavingsTime(
		date: Date, onSuccess: (result: {
		dst: boolean
	}) => void, onError: (error: GlobalizationError) => void
	): void,
		getFirstDayOfWeek(
		onSuccess: (day: {
		value: number
	}) => void, onError: (error: GlobalizationError) => void
	): void,
		nubmerToString(
		value: number, onSuccess: (result: {
		value: string
	}) => void, onError: (error: GlobalizationError) => void, format?: {
		type?: string
	}
	): void,
		stringToNumber(
		value: string, onSuccess: (result: {
		value: number
	}) => void, onError: (error: GlobalizationError) => void, format?: {
		type?: string
	}
	): void,
		getNumberPattern(
		onSuccess: (result: GlobalizationNumberPattern) => void, onError: (error: GlobalizationError) => void, format?: {
		type?: string
	}
	): void,
		getCurrencyPattern(
		currencyCode: string, onSuccess: (result: GlobalizationCurrencyPattern) => void, onError: (error: GlobalizationError) => void
	): void
	}

	declare interface GlobalizationDate {
		year: number,
		month: number,
		day: number,
		hour: number,
		minute: number,
		second: number,
		millisecond: number
	}

	declare interface GlobalizationDatePattern {
		pattern: string,
		timezone: string,
		utc_offset: number,
		dst_offset: number
	}

	declare interface GlobalizationDateNameOptions {
		type?: string,
		item?: string
	}

	declare interface GlobalizationNumberPattern {
		pattern: string,
		symbol: string,
		fraction: number,
		rounding: number,
		positive: string,
		negative: string,
		decimal: string,
		grouping: string
	}

	declare interface GlobalizationCurrencyPattern {
		pattern: string,
		code: string,
		fraction: number,
		rounding: number,
		decimal: string,
		grouping: string
	}

	declare interface GlobalizationError {
		code: number,
		message: string
	}

			
}