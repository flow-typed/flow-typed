

declare module 'validate.js' {
					
}

declare module 'npm$namespace$ValidateJS' {
		declare export interface Validator {
		message?: string | ((
		value: any, attribute: any, validatorOptions: any, attributes: any, globalOptions: any
	) => string)
	}

	declare export interface Field {
		date?: Validator.Date | boolean | ((
		value: any, attributes: any, attributeName: any, options: any, constraints: any
	) => Validator.Date),
		datetime?: Validator.DateTime | boolean | ((
		value: any, attributes: any, attributeName: any, options: any, constraints: any
	) => Validator.DateTime),
		email?: Validator.Email | boolean | ((
		value: any, attributes: any, attributeName: any, options: any, constraints: any
	) => Validator.Email),
		equality?: Validator.Equality | string | ((
		value: any, attributes: any, attributeName: any, options: any, constraints: any
	) => Validator.Equality),
		exclusion?: Validator.Exclusion | any[] | {
		[key: string]: any
	} | ((
		value: any, attributes: any, attributeName: any, options: any, constraints: any
	) => Validator.Exclusion),
		format?: Validator.Format | string | RegExp | ((
		value: any, attributes: any, attributeName: any, options: any, constraints: any
	) => Validator.Format),
		inclusion?: Validator.Inclusion | any[] | {
		[key: string]: any
	} | ((
		value: any, attributes: any, attributeName: any, options: any, constraints: any
	) => Validator.Inclusion),
		length?: Validator.Length | ((
		value: any, attributes: any, attributeName: any, options: any, constraints: any
	) => Validator.Length),
		numericality?: Validator.Numericality | boolean | ((
		value: any, attributes: any, attributeName: any, options: any, constraints: any
	) => Validator.Numericality),
		presence?: Validator.Presence | boolean | ((
		value: any, attributes: any, attributeName: any, options: any, constraints: any
	) => Validator.Presence),
		url?: Validator.Url | boolean | ((
		value: any, attributes: any, attributeName: any, options: any, constraints: any
	) => Validator.Url)
	}

	declare export interface Constraints {
		[attribute: string]: Field | ((
		value: any, attributes: any, attributeName: any, options: any, constraints: any
	) => Field)
	}

			
}

declare module 'Validator' {
		declare export interface Date {
		earliest?: string,
		latest?: string,
		notValid?: string,
		tooEarly?: string,
		tooLate?: string
	}

	declare export interface DateTime {
		dateOnly?: boolean
	}

	declare export interface Email {
		
	}

	declare export interface Equality {
		attribute?: string,
		comparator?: (v1: any, v2: any) => boolean
	}

	declare export interface Exclusion {
		within: any[] | {
		[key: string]: any
	}
	}

	declare export interface Format {
		pattern: string | RegExp,
		flags?: string
	}

	declare export interface Inclusion {
		within: any[] | {
		[key: string]: any
	}
	}

	declare export interface Length {
		is?: number,
		minimum?: number,
		maximum?: number,
		notValid?: string,
		tooLong?: string,
		tooShort?: string,
		wrongLength?: string,
		tokenizer?: (value: string | any[]) => string | any[]
	}

	declare export interface Numericality {
		onlyInteger?: boolean,
		strict?: boolean,
		greaterThan?: number,
		greaterThanOrEqualTo?: number,
		equalTo?: number,
		lessThanOrEqualTo?: number,
		lessThan?: number,
		divisibleBy?: number,
		odd?: boolean,
		even?: boolean,
		notValid?: string,
		notInteger?: string,
		notGreaterThan?: string,
		notGreaterThanOrEqualTo?: string,
		notEqualTo?: string,
		notLessThanOrEqualTo?: string,
		notLessThan?: string,
		notDivisibleBy?: string,
		notOdd?: string,
		notEven?: string
	}

	declare export interface Presence {
		
	}

	declare export interface Url {
		schemes?: [string | RegExp],
		allowLocal?: boolean
	}

			
}