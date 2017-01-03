/**
 * Flowtype definitions for validator
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type ValidatorJS$AlphaLocale = "ar" |
    "ar-AE" |
    "ar-BH" |
    "ar-DZ" |
    "ar-EG" |
    "ar-IQ" |
    "ar-JO" |
    "ar-KW" |
    "ar-LB" |
    "ar-LY" |
    "ar-MA" |
    "ar-QA" |
    "ar-QM" |
    "ar-SA" |
    "ar-SD" |
    "ar-SY" |
    "ar-TN" |
    "ar-YE" |
    "cs-CZ" |
    "de-DE" |
    "en-AU" |
    "en-GB" |
    "en-HK" |
    "en-IN" |
    "en-NZ" |
    "en-US" |
    "en-ZA" |
    "en-ZM" |
    "es-ES" |
    "fr-FR" |
    "hu-HU" |
    "nl-NL" |
    "pl-PL" |
    "pt-BR" |
    "pt-PT" |
    "ru-RU" |
    "sr-RS" |
    "sr-RS@latin" |
    "tr-TR";

declare type ValidatorJS$AlphanumericLocale = "ar" |
    "ar-AE" |
    "ar-BH" |
    "ar-DZ" |
    "ar-EG" |
    "ar-IQ" |
    "ar-JO" |
    "ar-KW" |
    "ar-LB" |
    "ar-LY" |
    "ar-MA" |
    "ar-QA" |
    "ar-QM" |
    "ar-SA" |
    "ar-SD" |
    "ar-SY" |
    "ar-TN" |
    "ar-YE" |
    "cs-CZ" |
    "de-DE" |
    "en-AU" |
    "en-GB" |
    "en-HK" |
    "en-IN" |
    "en-NZ" |
    "en-US" |
    "en-ZA" |
    "en-ZM" |
    "es-ES" |
    "fr-FR" |
    "fr-BE" |
    "hu-HU" |
    "nl-BE" |
    "nl-NL" |
    "pl-PL" |
    "pt-BR" |
    "pt-PT" |
    "ru-RU" |
    "sr-RS" |
    "sr-RS@latin" |
    "tr-TR";

declare type ValidatorJS$MobilePhoneLocale = "ar-DZ" |
    "ar-SA" |
    "ar-SY" |
    "cs-CZ" |
    "de-DE" |
    "da-DK" |
    "el-GR" |
    "en-AU" |
    "en-GB" |
    "en-HK" |
    "en-IN" |
    "en-NZ" |
    "en-US" |
    "en-CA" |
    "en-ZA" |
    "en-ZM" |
    "es-ES" |
    "fi-FI" |
    "fr-FR" |
    "hu-HU" |
    "it-IT" |
    "ja-JP" |
    "ms-MY" |
    "nb-NO" |
    "nn-NO" |
    "pl-PL" |
    "pt-PT" |
    "ru-RU" |
    "sr-RS" |
    "tr-TR" |
    "vi-VN" |
    "zh-CN" |
    "zh-TW";

declare interface ValidatorJS$ValidatorStatic {
    contains(str: string, elem: any): boolean,
        equals(str: string, comparison: string): boolean,
        isAfter(str: string, date?: string): boolean,
        isAlpha(str: string, locale?: ValidatorJS$AlphaLocale): boolean,
        isAlphanumeric(str: string, locale?: ValidatorJS$AlphanumericLocale): boolean,
        isAscii(str: string): boolean,
        isBase64(str: string): boolean,
        isBefore(str: string, date?: string): boolean,
        isBoolean(str: string): boolean,
        isByteLength(str: string, options: ValidatorJS$IsByteLengthOptions): boolean,
        isByteLength(str: string, min: number, max?: number): boolean,
        isCreditCard(str: string): boolean,
        isCurrency(str: string, options?: ValidatorJS$IsCurrencyOptions): boolean,
        isDataURI(str: string): boolean,
        isDate(str: string): boolean,
        isDecimal(str: string): boolean,
        isDivisibleBy(str: string, number: number): boolean,
        isEmail(str: string, options?: ValidatorJS$IsEmailOptions): boolean,
        isEmpty(str: string): boolean,
        isFQDN(str: string, options?: ValidatorJS$IsFQDNOptions): boolean,
        isFloat(str: string, options?: ValidatorJS$IsFloatOptions): boolean,
        isFullWidth(str: string): boolean,
        isHalfWidth(str: string): boolean,
        isHexColor(str: string): boolean,
        isHexadecimal(str: string): boolean,
        isIP(str: string, version?: number): boolean,
        isISBN(str: string, version?: number): boolean,
        isISIN(str: string): boolean,
        isISO8601(str: string): boolean,
        isIn(str: string, values: any[]): boolean,
        isInt(str: string, options?: ValidatorJS$IsIntOptions): boolean,
        isJSON(str: string): boolean,
        isLength(str: string, options: ValidatorJS$IsLengthOptions): boolean,
        isLength(str: string, min: number, max?: number): boolean,
        isLowercase(str: string): boolean,
        isMACAddress(str: string): boolean,
        isMD5(str: string): boolean,
        isMobilePhone(str: string, locale: ValidatorJS$MobilePhoneLocale): boolean,
        isMongoId(str: string): boolean,
        isMultibyte(str: string): boolean,
        isNull(str: string): boolean,
        isNumeric(str: string): boolean,
        isSurrogatePair(str: string): boolean,
        isURL(str: string, options?: ValidatorJS$IsURLOptions): boolean,
        isUUID(str: string, version?: string | number): boolean,
        isUppercase(str: string): boolean,
        isVariableWidth(str: string): boolean,
        isWhitelisted(str: string, chars: string | string[]): boolean,
        matches(str: string, pattern: RegExp | string, modifiers?: string): boolean,
        blacklist(input: string, chars: string): string,
        escape(input: string): string,
        unescape(input: string): string,
        ltrim(input: string, chars?: string): string,
        normalizeEmail(email: string, options?: ValidatorJS$NormalizeEmailOptions): string,
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

declare interface ValidatorJS$IsByteLengthOptions {
    min?: number,
        max?: number
}

declare interface ValidatorJS$IsCurrencyOptions {
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

declare interface ValidatorJS$IsEmailOptions {
    allow_display_name?: boolean,
        allow_utf8_local_part?: boolean,
        require_tld?: boolean
}

declare interface ValidatorJS$IsFQDNOptions {
    require_tld?: boolean,
        allow_underscores?: boolean,
        allow_trailing_dot?: boolean
}

declare interface ValidatorJS$IsFloatOptions {
    min?: number,
        max?: number
}

declare interface ValidatorJS$IsIntOptions {
    min?: number,
        max?: number
}

declare interface ValidatorJS$IsLengthOptions {
    min?: number,
        max?: number
}

declare interface ValidatorJS$IsURLOptions {
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

declare interface ValidatorJS$NormalizeEmailOptions {
    lowercase?: boolean,
        remove_dots?: boolean,
        remove_extension?: boolean
}
declare var validator: ValidatorJS$ValidatorStatic;
declare module 'validator' {
    declare module.exports: typeof validator
}
declare module 'validator/lib/blacklist' {
    declare var blacklist: typeof undefined;
    declare module.exports: typeof blacklist
}
declare module 'validator/lib/contains' {
    declare var contains: typeof undefined;
    declare module.exports: typeof contains
}
declare module 'validator/lib/equals' {
    declare var equals: typeof undefined;
    declare module.exports: typeof equals
}
declare module 'validator/lib/escape' {
    declare var escape: typeof undefined;
    declare module.exports: typeof escape
}
declare module 'validator/lib/isAfter' {
    declare var isAfter: typeof undefined;
    declare module.exports: typeof isAfter
}
declare module 'validator/lib/isAlpha' {
    declare var isAlpha: typeof undefined;
    declare module.exports: typeof isAlpha
}
declare module 'validator/lib/isAlphanumeric' {
    declare var isAlphanumeric: typeof undefined;
    declare module.exports: typeof isAlphanumeric
}
declare module 'validator/lib/isAscii' {
    declare var isAscii: typeof undefined;
    declare module.exports: typeof isAscii
}
declare module 'validator/lib/isBase64' {
    declare var isBase64: typeof undefined;
    declare module.exports: typeof isBase64
}
declare module 'validator/lib/isBefore' {
    declare var isBefore: typeof undefined;
    declare module.exports: typeof isBefore
}
declare module 'validator/lib/isBoolean' {
    declare var isBoolean: typeof undefined;
    declare module.exports: typeof isBoolean
}
declare module 'validator/lib/isByteLength' {
    declare var isByteLength: typeof undefined;
    declare module.exports: typeof isByteLength
}
declare module 'validator/lib/isCreditCard' {
    declare var isCreditCard: typeof undefined;
    declare module.exports: typeof isCreditCard
}
declare module 'validator/lib/isCurrency' {
    declare var isCurrency: typeof undefined;
    declare module.exports: typeof isCurrency
}
declare module 'validator/lib/isDataURI' {
    declare var isDataURI: typeof undefined;
    declare module.exports: typeof isDataURI
}
declare module 'validator/lib/isDate' {
    declare var isDate: typeof undefined;
    declare module.exports: typeof isDate
}
declare module 'validator/lib/isDecimal' {
    declare var isDecimal: typeof undefined;
    declare module.exports: typeof isDecimal
}
declare module 'validator/lib/isDivisibleBy' {
    declare var isDivisibleBy: typeof undefined;
    declare module.exports: typeof isDivisibleBy
}
declare module 'validator/lib/isEmail' {
    declare var isEmail: typeof undefined;
    declare module.exports: typeof isEmail
}
declare module 'validator/lib/isEmpty' {
    declare var isEmpty: typeof undefined;
    declare module.exports: typeof isEmpty
}
declare module 'validator/lib/isFQDN' {
    declare var isFQDN: typeof undefined;
    declare module.exports: typeof isFQDN
}
declare module 'validator/lib/isFloat' {
    declare var isFloat: typeof undefined;
    declare module.exports: typeof isFloat
}
declare module 'validator/lib/isFullWidth' {
    declare var isFullWidth: typeof undefined;
    declare module.exports: typeof isFullWidth
}
declare module 'validator/lib/isHalfWidth' {
    declare var isHalfWidth: typeof undefined;
    declare module.exports: typeof isHalfWidth
}
declare module 'validator/lib/isHexColor' {
    declare var isHexColor: typeof undefined;
    declare module.exports: typeof isHexColor
}
declare module 'validator/lib/isHexadecimal' {
    declare var isHexadecimal: typeof undefined;
    declare module.exports: typeof isHexadecimal
}
declare module 'validator/lib/isIP' {
    declare var isIP: typeof undefined;
    declare module.exports: typeof isIP
}
declare module 'validator/lib/isISBN' {
    declare var isISBN: typeof undefined;
    declare module.exports: typeof isISBN
}
declare module 'validator/lib/isISIN' {
    declare var isISIN: typeof undefined;
    declare module.exports: typeof isISIN
}
declare module 'validator/lib/isISO8601' {
    declare var isISO8601: typeof undefined;
    declare module.exports: typeof isISO8601
}
declare module 'validator/lib/isIn' {
    declare var isIn: typeof undefined;
    declare module.exports: typeof isIn
}
declare module 'validator/lib/isInt' {
    declare var isInt: typeof undefined;
    declare module.exports: typeof isInt
}
declare module 'validator/lib/isJSON' {
    declare var isJSON: typeof undefined;
    declare module.exports: typeof isJSON
}
declare module 'validator/lib/isLength' {
    declare var isLength: typeof undefined;
    declare module.exports: typeof isLength
}
declare module 'validator/lib/isLowercase' {
    declare var isLowercase: typeof undefined;
    declare module.exports: typeof isLowercase
}
declare module 'validator/lib/isMACAddress' {
    declare var isMACAddress: typeof undefined;
    declare module.exports: typeof isMACAddress
}
declare module 'validator/lib/isMD5' {
    declare var isMD5: typeof undefined;
    declare module.exports: typeof isMD5
}
declare module 'validator/lib/isMobilePhone' {
    declare var isMobilePhone: typeof undefined;
    declare module.exports: typeof isMobilePhone
}
declare module 'validator/lib/isMongoId' {
    declare var isMongoId: typeof undefined;
    declare module.exports: typeof isMongoId
}
declare module 'validator/lib/isMultibyte' {
    declare var isMultibyte: typeof undefined;
    declare module.exports: typeof isMultibyte
}
declare module 'validator/lib/isNull' {
    declare var isNull: typeof undefined;
    declare module.exports: typeof isNull
}
declare module 'validator/lib/isNumeric' {
    declare var isNumeric: typeof undefined;
    declare module.exports: typeof isNumeric
}
declare module 'validator/lib/isSurrogatePair' {
    declare var isSurrogatePair: typeof undefined;
    declare module.exports: typeof isSurrogatePair
}
declare module 'validator/lib/isURL' {
    declare var isURL: typeof undefined;
    declare module.exports: typeof isURL
}
declare module 'validator/lib/isUUID' {
    declare var isUUID: typeof undefined;
    declare module.exports: typeof isUUID
}
declare module 'validator/lib/isUppercase' {
    declare var isUppercase: typeof undefined;
    declare module.exports: typeof isUppercase
}
declare module 'validator/lib/isVariableWidth' {
    declare var isVariableWidth: typeof undefined;
    declare module.exports: typeof isVariableWidth
}
declare module 'validator/lib/isWhitelisted' {
    declare var isWhitelisted: typeof undefined;
    declare module.exports: typeof isWhitelisted
}
declare module 'validator/lib/ltrim' {
    declare var ltrim: typeof undefined;
    declare module.exports: typeof ltrim
}
declare module 'validator/lib/matches' {
    declare var matches: typeof undefined;
    declare module.exports: typeof matches
}
declare module 'validator/lib/normalizeEmail' {
    declare var normalizeEmail: typeof undefined;
    declare module.exports: typeof normalizeEmail
}
declare module 'validator/lib/rtrim' {
    declare var rtrim: typeof undefined;
    declare module.exports: typeof rtrim
}
declare module 'validator/lib/stripLow' {
    declare var stripLow: typeof undefined;
    declare module.exports: typeof stripLow
}
declare module 'validator/lib/toBoolean' {
    declare var toBoolean: typeof undefined;
    declare module.exports: typeof toBoolean
}
declare module 'validator/lib/toDate' {
    declare var toDate: typeof undefined;
    declare module.exports: typeof toDate
}
declare module 'validator/lib/toFloat' {
    declare var toFloat: typeof undefined;
    declare module.exports: typeof toFloat
}
declare module 'validator/lib/toInt' {
    declare var toInt: typeof undefined;
    declare module.exports: typeof toInt
}
declare module 'validator/lib/trim' {
    declare var trim: typeof undefined;
    declare module.exports: typeof trim
}
declare module 'validator/lib/unescape' {
    declare var unescape: typeof undefined;
    declare module.exports: typeof unescape
}
declare module 'validator/lib/whitelist' {
    declare var whitelist: typeof undefined;
    declare module.exports: typeof whitelist
}
declare type IValidatorStatic = {}
declare type IURLoptions = {}
declare type IFQDNoptions = {}
declare type IEmailoptions = {}