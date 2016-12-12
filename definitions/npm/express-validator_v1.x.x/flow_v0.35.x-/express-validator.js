

declare module 'express-validator' {
			declare function ExpressValidator(middlewareOptions?: any): express.RequestHandler

		declare module.exports: undefined


}

declare module 'npm$namespace$Express' {
		declare interface Request {
		
	}

			
}

declare module 'npm$namespace$ExpressValidator' {
		declare export interface ValidationError {
		msg: string,
		param: string
	}

	declare interface ValidatorFunction {
		(item: string | {
		
	}, message?: string): Validator
	}

	declare interface ValidatorExtraFunction {
		(matchIndex: number, message?: string): Validator
	}

	declare interface SanitizerFunction {
		(item: string): Sanitizer
	}

	declare interface Dictionary<T> {
		[key: string]: T
	}

	declare export interface RequestValidation {
		assert: ValidatorExtraFunction,
		validate: ValidatorExtraFunction,
		check: ValidatorExtraFunction,
		checkBody: ValidatorFunction,
		checkFiles: ValidatorFunction,
		checkHeaders: ValidatorFunction,
		checkParams: ValidatorFunction,
		checkQuery: ValidatorFunction,
		filter: SanitizerFunction,
		sanitize: SanitizerFunction,
		sanitizeBody: SanitizerFunction,
		sanitizeQuery: SanitizerFunction,
		sanitizeParams: SanitizerFunction,
		sanitizeHeaders: SanitizerFunction,
		onValidationError(errback: (msg: string) => void): void,
		validationErrors(mapped?: boolean): Dictionary<MappedError> | MappedError[],
		validationErrors<T>(mapped?: boolean): Dictionary<T> | T[],
		asyncValidationErrors(mapped?: boolean): Promise<MappedError[] | Dictionary<MappedError>>,
		asyncValidationErrors<T>(mapped?: boolean): Promise<T[] | Dictionary<T>>
	}

	declare export interface Validator {
		is(): Validator,
		not(): Validator,
		isEmail(options?: {
		
	}): Validator,
		isURL(): Validator,
		isFQDN(options?: MinMaxOptions): Validator,
		isIP(): Validator,
		isIPv4(): Validator,
		isIPv6(): Validator,
		isMACAddress(): Validator,
		isISBN(version?: number): Validator,
		isISIN(): Validator,
		isISO8601(): Validator,
		isMobilePhone(locale: string): Validator,
		isMongoId(): Validator,
		isMultibyte(): Validator,
		isAlpha(locale?: string): Validator,
		isAlphanumeric(locale?: string): Validator,
		isAscii(): Validator,
		isBase64(): Validator,
		isBoolean(): Validator,
		isByteLength(options: MinMaxOptions): Validator,
		isCurrency(options: {
		
	}): Validator,
		isDataURI(): Validator,
		isDivisibleBy(num: number): Validator,
		isNumeric(): Validator,
		isHexadecimal(): Validator,
		isHexColor(): Validator,
		isInt(options?: MinMaxOptions): Validator,
		isLowercase(): Validator,
		isUppercase(): Validator,
		isDecimal(): Validator,
		isFloat(): Validator,
		isFullWidth(): Validator,
		isHalfWidth(): Validator,
		isVariableWidth(): Validator,
		isNull(): Validator,
		notEmpty(): Validator,
		equals(equals: any): Validator,
		contains(str: string): Validator,
		matches(pattern: string, modifiers?: string): Validator,
		matches(pattern: RegExp): Validator,
		len(min: number, max?: number): Validator,
		isUUID(version?: number): Validator,
		isUUIDv3(): Validator,
		isUUIDv4(): Validator,
		isUUIDv5(): Validator,
		isDate(): Validator,
		isAfter(date?: Date): Validator,
		isBefore(date?: Date): Validator,
		isIn(options: string): Validator,
		isIn(options: string[]): Validator,
		notIn(options: string): Validator,
		notIn(options: string[]): Validator,
		max(val: string): Validator,
		min(val: string): Validator,
		isJSON(): Validator,
		isLength(options: MinMaxOptions): Validator,
		isWhitelisted(chars: string): Validator,
		isCreditCard(): Validator,
		isSurrogatePar(): Validator,
		optional(options?: {
		checkFalsy?: boolean
	}): Validator,
		withMessage(message: string): Validator
	}

	declare interface Sanitizer {
		trim(...chars: string[]): Sanitizer,
		ltrim(...chars: string[]): Sanitizer,
		rtrim(...chars: string[]): Sanitizer,
		stripLow(keep_new_lines?: boolean): Sanitizer,
		toFloat(): Sanitizer,
		toInt(radix?: number): Sanitizer,
		toBoolean(strict?: boolean): Sanitizer,
		toDate(): Sanitizer,
		escape(): Sanitizer,
		unescape(): Sanitizer,
		blacklist(chars: string): Sanitizer,
		blacklist(chars: string[]): Sanitizer,
		whitelist(chars: string): Sanitizer,
		whitelist(chars: string[]): Sanitizer,
		normalizeEmail(
		options?: {
		lowercase?: boolean,
		remove_dots?: boolean,
		remove_extensions?: boolean
	}
	): Sanitizer
	}

	declare interface MappedError {
		param: string,
		msg: string,
		value: string
	}

	declare interface MinMaxOptions {
		min?: number,
		max?: number
	}

			
}