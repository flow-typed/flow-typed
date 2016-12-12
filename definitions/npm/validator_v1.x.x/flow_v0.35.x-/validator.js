import type { ValidatorStatic } from 'npm$namespace$ValidatorJS'

declare module 'validator' {
		declare interface IValidatorStatic {
		
	}

	declare interface IURLoptions {
		
	}

	declare interface IFQDNoptions {
		
	}

	declare interface IEmailoptions {
		
	}

			declare module.exports: ValidatorStatic


}

declare module 'npm$namespace$ValidatorJS' {
	declare type AlphaLocale = "ar" | "ar-AE" | "ar-BH" | "ar-DZ" | "ar-EG" | "ar-IQ" | "ar-JO" | "ar-KW" | "ar-LB" | "ar-LY" | "ar-MA" | "ar-QA" | "ar-QM" | "ar-SA" | "ar-SD" | "ar-SY" | "ar-TN" | "ar-YE" | "cs-CZ" | "de-DE" | "en-AU" | "en-GB" | "en-HK" | "en-IN" | "en-NZ" | "en-US" | "en-ZA" | "en-ZM" | "es-ES" | "fr-FR" | "hu-HU" | "nl-NL" | "pl-PL" | "pt-BR" | "pt-PT" | "ru-RU" | "sr-RS" | "sr-RS@latin" | "tr-TR";

	declare type AlphanumericLocale = "ar" | "ar-AE" | "ar-BH" | "ar-DZ" | "ar-EG" | "ar-IQ" | "ar-JO" | "ar-KW" | "ar-LB" | "ar-LY" | "ar-MA" | "ar-QA" | "ar-QM" | "ar-SA" | "ar-SD" | "ar-SY" | "ar-TN" | "ar-YE" | "cs-CZ" | "de-DE" | "en-AU" | "en-GB" | "en-HK" | "en-IN" | "en-NZ" | "en-US" | "en-ZA" | "en-ZM" | "es-ES" | "fr-FR" | "fr-BE" | "hu-HU" | "nl-BE" | "nl-NL" | "pl-PL" | "pt-BR" | "pt-PT" | "ru-RU" | "sr-RS" | "sr-RS@latin" | "tr-TR";

	declare type MobilePhoneLocale = "ar-DZ" | "ar-SA" | "ar-SY" | "cs-CZ" | "de-DE" | "da-DK" | "el-GR" | "en-AU" | "en-GB" | "en-HK" | "en-IN" | "en-NZ" | "en-US" | "en-CA" | "en-ZA" | "en-ZM" | "es-ES" | "fi-FI" | "fr-FR" | "hu-HU" | "it-IT" | "ja-JP" | "ms-MY" | "nb-NO" | "nn-NO" | "pl-PL" | "pt-PT" | "ru-RU" | "sr-RS" | "tr-TR" | "vi-VN" | "zh-CN" | "zh-TW";

	declare interface ValidatorStatic {
		contains(str: string, elem: any): boolean,
		equals(str: string, comparison: string): boolean,
		isAfter(str: string, date?: string): boolean,
		isAlpha(str: string, locale?: AlphaLocale): boolean,
		isAlphanumeric(str: string, locale?: AlphanumericLocale): boolean,
		isAscii(str: string): boolean,
		isBase64(str: string): boolean,
		isBefore(str: string, date?: string): boolean,
		isBoolean(str: string): boolean,
		isByteLength(str: string, options: IsByteLengthOptions): boolean,
		isByteLength(str: string, min: number, max?: number): boolean,
		isCreditCard(str: string): boolean,
		isCurrency(str: string, options?: IsCurrencyOptions): boolean,
		isDataURI(str: string): boolean,
		isDate(str: string): boolean,
		isDecimal(str: string): boolean,
		isDivisibleBy(str: string, number: number): boolean,
		isEmail(str: string, options?: IsEmailOptions): boolean,
		isEmpty(str: string): boolean,
		isFQDN(str: string, options?: IsFQDNOptions): boolean,
		isFloat(str: string, options?: IsFloatOptions): boolean,
		isFullWidth(str: string): boolean,
		isHalfWidth(str: string): boolean,
		isHexColor(str: string): boolean,
		isHexadecimal(str: string): boolean,
		isIP(str: string, version?: number): boolean,
		isISBN(str: string, version?: number): boolean,
		isISIN(str: string): boolean,
		isISO8601(str: string): boolean,
		isIn(str: string, values: any[]): boolean,
		isInt(str: string, options?: IsIntOptions): boolean,
		isJSON(str: string): boolean,
		isLength(str: string, options: IsLengthOptions): boolean,
		isLength(str: string, min: number, max?: number): boolean,
		isLowercase(str: string): boolean,
		isMACAddress(str: string): boolean,
		isMD5(str: string): boolean,
		isMobilePhone(str: string, locale: MobilePhoneLocale): boolean,
		isMongoId(str: string): boolean,
		isMultibyte(str: string): boolean,
		isNull(str: string): boolean,
		isNumeric(str: string): boolean,
		isSurrogatePair(str: string): boolean,
		isURL(str: string, options?: IsURLOptions): boolean,
		isUUID(str: string, version?: string | number): boolean,
		isUppercase(str: string): boolean,
		isVariableWidth(str: string): boolean,
		isWhitelisted(str: string, chars: string | string[]): boolean,
		matches(str: string, pattern: RegExp | string, modifiers?: string): boolean,
		blacklist(input: string, chars: string): string,
		escape(input: string): string,
		unescape(input: string): string,
		ltrim(input: string, chars?: string): string,
		normalizeEmail(email: string, options?: NormalizeEmailOptions): string,
		rtrim(input: string, chars?: string): string,
		stripLow(input: string, keep_new_lines?: boolean): string,
		toBoolean(input: string, strict?: boolean): boolean,
		toDate(input: string): Date,
		toFloat(input: string): number,
		toInt(input: string, radix?: number): number,
		trim(input: string, chars?: string): string,
		whitelist(input: string, chars: string): string,
		toString(input: any | any[]): string,
		version: string,
		extend<T>(name: string, fn: T): void
	}

	declare interface IsByteLengthOptions {
		min?: number,
		max?: number
	}

	declare interface IsCurrencyOptions {
		symbol?: string,
		require_symbol?: boolean,
		allow_space_after_symbol?: boolean,
		symbol_after_digits?: boolean,
		allow_negatives?: boolean,
		parens_for_negatives?: boolean,
		negative_sign_before_digits?: boolean,
		negative_sign_after_digits?: boolean,
		allow_negative_sign_placeholder?: boolean,
		thousands_separator?: string,
		decimal_separator?: string,
		allow_space_after_digits?: boolean
	}

	declare interface IsEmailOptions {
		allow_display_name?: boolean,
		allow_utf8_local_part?: boolean,
		require_tld?: boolean
	}

	declare interface IsFQDNOptions {
		require_tld?: boolean,
		allow_underscores?: boolean,
		allow_trailing_dot?: boolean
	}

	declare interface IsFloatOptions {
		min?: number,
		max?: number
	}

	declare interface IsIntOptions {
		min?: number,
		max?: number
	}

	declare interface IsLengthOptions {
		min?: number,
		max?: number
	}

	declare interface IsURLOptions {
		protocols?: string[],
		require_tld?: boolean,
		require_protocol?: boolean,
		require_host: boolean,
		require_valid_protocol?: boolean,
		allow_underscores?: boolean,
		host_whitelist?: (string | RegExp)[],
		host_blacklist?: (string | RegExp)[],
		allow_trailing_dot?: boolean,
		allow_protocol_relative_urls?: boolean
	}

	declare interface NormalizeEmailOptions {
		lowercase?: boolean,
		remove_dots?: boolean,
		remove_extension?: boolean
	}

			
}

declare module 'validator/lib/blacklist' {
					declare module.exports: undefined


}

declare module 'validator/lib/contains' {
					declare module.exports: undefined


}

declare module 'validator/lib/equals' {
					declare module.exports: undefined


}

declare module 'validator/lib/escape' {
					declare module.exports: undefined


}

declare module 'validator/lib/isAfter' {
					declare module.exports: undefined


}

declare module 'validator/lib/isAlpha' {
					declare module.exports: undefined


}

declare module 'validator/lib/isAlphanumeric' {
					declare module.exports: undefined


}

declare module 'validator/lib/isAscii' {
					declare module.exports: undefined


}

declare module 'validator/lib/isBase64' {
					declare module.exports: undefined


}

declare module 'validator/lib/isBefore' {
					declare module.exports: undefined


}

declare module 'validator/lib/isBoolean' {
					declare module.exports: undefined


}

declare module 'validator/lib/isByteLength' {
					declare module.exports: undefined


}

declare module 'validator/lib/isCreditCard' {
					declare module.exports: undefined


}

declare module 'validator/lib/isCurrency' {
					declare module.exports: undefined


}

declare module 'validator/lib/isDataURI' {
					declare module.exports: undefined


}

declare module 'validator/lib/isDate' {
					declare module.exports: undefined


}

declare module 'validator/lib/isDecimal' {
					declare module.exports: undefined


}

declare module 'validator/lib/isDivisibleBy' {
					declare module.exports: undefined


}

declare module 'validator/lib/isEmail' {
					declare module.exports: undefined


}

declare module 'validator/lib/isEmpty' {
					declare module.exports: undefined


}

declare module 'validator/lib/isFQDN' {
					declare module.exports: undefined


}

declare module 'validator/lib/isFloat' {
					declare module.exports: undefined


}

declare module 'validator/lib/isFullWidth' {
					declare module.exports: undefined


}

declare module 'validator/lib/isHalfWidth' {
					declare module.exports: undefined


}

declare module 'validator/lib/isHexColor' {
					declare module.exports: undefined


}

declare module 'validator/lib/isHexadecimal' {
					declare module.exports: undefined


}

declare module 'validator/lib/isIP' {
					declare module.exports: undefined


}

declare module 'validator/lib/isISBN' {
					declare module.exports: undefined


}

declare module 'validator/lib/isISIN' {
					declare module.exports: undefined


}

declare module 'validator/lib/isISO8601' {
					declare module.exports: undefined


}

declare module 'validator/lib/isIn' {
					declare module.exports: undefined


}

declare module 'validator/lib/isInt' {
					declare module.exports: undefined


}

declare module 'validator/lib/isJSON' {
					declare module.exports: undefined


}

declare module 'validator/lib/isLength' {
					declare module.exports: undefined


}

declare module 'validator/lib/isLowercase' {
					declare module.exports: undefined


}

declare module 'validator/lib/isMACAddress' {
					declare module.exports: undefined


}

declare module 'validator/lib/isMD5' {
					declare module.exports: undefined


}

declare module 'validator/lib/isMobilePhone' {
					declare module.exports: undefined


}

declare module 'validator/lib/isMongoId' {
					declare module.exports: undefined


}

declare module 'validator/lib/isMultibyte' {
					declare module.exports: undefined


}

declare module 'validator/lib/isNull' {
					declare module.exports: undefined


}

declare module 'validator/lib/isNumeric' {
					declare module.exports: undefined


}

declare module 'validator/lib/isSurrogatePair' {
					declare module.exports: undefined


}

declare module 'validator/lib/isURL' {
					declare module.exports: undefined


}

declare module 'validator/lib/isUUID' {
					declare module.exports: undefined


}

declare module 'validator/lib/isUppercase' {
					declare module.exports: undefined


}

declare module 'validator/lib/isVariableWidth' {
					declare module.exports: undefined


}

declare module 'validator/lib/isWhitelisted' {
					declare module.exports: undefined


}

declare module 'validator/lib/ltrim' {
					declare module.exports: undefined


}

declare module 'validator/lib/matches' {
					declare module.exports: undefined


}

declare module 'validator/lib/normalizeEmail' {
					declare module.exports: undefined


}

declare module 'validator/lib/rtrim' {
					declare module.exports: undefined


}

declare module 'validator/lib/stripLow' {
					declare module.exports: undefined


}

declare module 'validator/lib/toBoolean' {
					declare module.exports: undefined


}

declare module 'validator/lib/toDate' {
					declare module.exports: undefined


}

declare module 'validator/lib/toFloat' {
					declare module.exports: undefined


}

declare module 'validator/lib/toInt' {
					declare module.exports: undefined


}

declare module 'validator/lib/trim' {
					declare module.exports: undefined


}

declare module 'validator/lib/unescape' {
					declare module.exports: undefined


}

declare module 'validator/lib/whitelist' {
					declare module.exports: undefined


}