/**
 * Flowtype definitions for express-validator
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type Express$Request = {}
declare module 'express-validator' {
    declare module.exports: typeof ExpressValidator
}
declare export interface ExpressValidator$ValidationError {
    msg: string,
        param: string
}

declare interface ExpressValidator$ValidatorFunction {
    (item: string | {}, message?: string): ExpressValidator$Validator
}

declare type ExpressValidator$ValidatorExtraFunction = {
    (matchIndex: number, message?: string): ExpressValidator$Validator
} & ExpressValidator$ValidatorFunction


declare interface ExpressValidator$SanitizerFunction {
    (item: string): ExpressValidator$Sanitizer
}

declare interface ExpressValidator$Dictionary<T>{
    [key: string]: T
}

declare export interface ExpressValidator$RequestValidation {
    assert: ExpressValidator$ValidatorExtraFunction,
        validate: ExpressValidator$ValidatorExtraFunction,
        check: ExpressValidator$ValidatorExtraFunction,
        checkBody: ExpressValidator$ValidatorFunction,
        checkFiles: ExpressValidator$ValidatorFunction,
        checkHeaders: ExpressValidator$ValidatorFunction,
        checkParams: ExpressValidator$ValidatorFunction,
        checkQuery: ExpressValidator$ValidatorFunction,
        filter: ExpressValidator$SanitizerFunction,
        sanitize: ExpressValidator$SanitizerFunction,
        sanitizeBody: ExpressValidator$SanitizerFunction,
        sanitizeQuery: ExpressValidator$SanitizerFunction,
        sanitizeParams: ExpressValidator$SanitizerFunction,
        sanitizeHeaders: ExpressValidator$SanitizerFunction,
        onValidationError(errback: (msg: string) => void): void,
        validationErrors(
            mapped?: boolean): ExpressValidator$Dictionary<ExpressValidator$MappedError>| ExpressValidator$MappedError[],
        validationErrors<T>(mapped?: boolean): ExpressValidator$Dictionary<T>| T[],
        asyncValidationErrors(
            mapped?: boolean): Promise<ExpressValidator$MappedError[] | ExpressValidator$Dictionary<ExpressValidator$MappedError >> ,
        asyncValidationErrors<T>(mapped?: boolean): Promise<T[] | ExpressValidator$Dictionary<T >>
}

declare export interface ExpressValidator$Validator {

    /**
     * Alias for regex()
     */
    is(): ExpressValidator$Validator,

        /**
         * Alias for notRegex()
         */
        not(): ExpressValidator$Validator,
        isEmail(options?: {}): ExpressValidator$Validator,

        /**
         * Accepts http, https, ftp
         */
        isURL(): ExpressValidator$Validator,
        isFQDN(options?: ExpressValidator$MinMaxOptions): ExpressValidator$Validator,

        /**
         * Combines isIPv4 and isIPv6
         */
        isIP(): ExpressValidator$Validator,
        isIPv4(): ExpressValidator$Validator,
        isIPv6(): ExpressValidator$Validator,
        isMACAddress(): ExpressValidator$Validator,
        isISBN(version?: number): ExpressValidator$Validator,
        isISIN(): ExpressValidator$Validator,
        isISO8601(): ExpressValidator$Validator,
        isMobilePhone(locale: string): ExpressValidator$Validator,
        isMongoId(): ExpressValidator$Validator,
        isMultibyte(): ExpressValidator$Validator,
        isAlpha(locale?: string): ExpressValidator$Validator,
        isAlphanumeric(locale?: string): ExpressValidator$Validator,
        isAscii(): ExpressValidator$Validator,
        isBase64(): ExpressValidator$Validator,
        isBoolean(): ExpressValidator$Validator,
        isByteLength(options: ExpressValidator$MinMaxOptions): ExpressValidator$Validator,
        isCurrency(options: {}): ExpressValidator$Validator,
        isDataURI(): ExpressValidator$Validator,
        isDivisibleBy(num: number): ExpressValidator$Validator,
        isNumeric(): ExpressValidator$Validator,
        isHexadecimal(): ExpressValidator$Validator,

        /**
         * Accepts valid hexcolors with or without # prefix
         */
        isHexColor(): ExpressValidator$Validator,

        /**
         * isNumeric accepts zero padded numbers, e.g. '001', isInt doesn't
         */
        isInt(options?: ExpressValidator$MinMaxOptions): ExpressValidator$Validator,
        isLowercase(): ExpressValidator$Validator,
        isUppercase(): ExpressValidator$Validator,
        isDecimal(): ExpressValidator$Validator,

        /**
         * Alias for isDecimal
         */
        isFloat(): ExpressValidator$Validator,
        isFullWidth(): ExpressValidator$Validator,
        isHalfWidth(): ExpressValidator$Validator,
        isVariableWidth(): ExpressValidator$Validator,

        /**
         * Check if length is 0
         */
        isNull(): ExpressValidator$Validator,

        /**
         * Not just whitespace (input.trim().length !== 0)
         */
        notEmpty(): ExpressValidator$Validator,
        equals(equals: any): ExpressValidator$Validator,
        contains(str: string): ExpressValidator$Validator,

        /**
         * Usage: matches(/[a-z]/i) or matches('[a-z]','i')
         */
        matches(pattern: string, modifiers?: string): ExpressValidator$Validator,
        matches(pattern: RegExp): ExpressValidator$Validator,

        /**
         * max is optional
         */
        len(min: number, max?: number): ExpressValidator$Validator,

        /**
         * Version can be 3, 4 or 5 or empty, see http://en.wikipedia.org/wiki/Universally_unique_identifier
         */
        isUUID(version?: number): ExpressValidator$Validator,

        /**
         * Alias for isUUID(3)
         */
        isUUIDv3(): ExpressValidator$Validator,

        /**
         * Alias for isUUID(4)
         */
        isUUIDv4(): ExpressValidator$Validator,

        /**
         * Alias for isUUID(5)
         */
        isUUIDv5(): ExpressValidator$Validator,

        /**
         * Uses Date.parse() - regex is probably a better choice
         */
        isDate(): ExpressValidator$Validator,

        /**
         * Argument is optional and defaults to today. Comparison is non-inclusive
         */
        isAfter(date?: Date): ExpressValidator$Validator,

        /**
         * Argument is optional and defaults to today. Comparison is non-inclusive
         */
        isBefore(date?: Date): ExpressValidator$Validator,
        isIn(options: string): ExpressValidator$Validator,
        isIn(options: string[]): ExpressValidator$Validator,
        notIn(options: string): ExpressValidator$Validator,
        notIn(options: string[]): ExpressValidator$Validator,
        max(val: string): ExpressValidator$Validator,
        min(val: string): ExpressValidator$Validator,
        isJSON(): ExpressValidator$Validator,
        isLength(options: ExpressValidator$MinMaxOptions): ExpressValidator$Validator,
        isWhitelisted(chars: string): ExpressValidator$Validator,

        /**
         * Will work against Visa, MasterCard, American Express, Discover, Diners Club, and JCB card numbering formats
         */
        isCreditCard(): ExpressValidator$Validator,

        /**
         * Check an input only when the input exists
         */
        isSurrogatePar(): ExpressValidator$Validator,
        optional(options?: {
            checkFalsy?: boolean
        }): ExpressValidator$Validator,
        withMessage(message: string): ExpressValidator$Validator
}

declare interface ExpressValidator$Sanitizer {

    /**
     * Trim optional `chars`, default is to trim whitespace (\r\n\t )
     */
    trim(...chars: string[]): ExpressValidator$Sanitizer,
        ltrim(...chars: string[]): ExpressValidator$Sanitizer,
        rtrim(...chars: string[]): ExpressValidator$Sanitizer,
        stripLow(keep_new_lines?: boolean): ExpressValidator$Sanitizer,
        toFloat(): ExpressValidator$Sanitizer,
        toInt(radix?: number): ExpressValidator$Sanitizer,

        /**
         * True unless str = '0', 'false', or str.length == 0. In strict mode only '1' and 'true' return true.
         */
        toBoolean(strict?: boolean): ExpressValidator$Sanitizer,

        /**
         * Convert the input string to a date, or null if the input is not a date.
         */
        toDate(): ExpressValidator$Sanitizer,

        /**
         * Escape &, <, >, and "
         */
        escape(): ExpressValidator$Sanitizer,

        /**
         * Replaces HTML encoded entities with <, >, &, ', " and /.
         */
        unescape(): ExpressValidator$Sanitizer,
        blacklist(chars: string): ExpressValidator$Sanitizer,
        blacklist(chars: string[]): ExpressValidator$Sanitizer,
        whitelist(chars: string): ExpressValidator$Sanitizer,
        whitelist(chars: string[]): ExpressValidator$Sanitizer,
        normalizeEmail(
            options?: {
                lowercase?: boolean,
                remove_dots?: boolean,
                remove_extensions?: boolean
            }): ExpressValidator$Sanitizer
}

declare interface ExpressValidator$MappedError {
    param: string,
        msg: string,
        value: string
}

declare interface ExpressValidator$MinMaxOptions {
    min?: number,
        max?: number
}