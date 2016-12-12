

declare module 'node-validator' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ValidatorOptions' {
	declare type Options = IsStringOptions | IsNumberOptions | IsDateOptions;

	declare interface IsStringOptions {
		regex?: RegExp,
		message?: String
	}

	declare interface IsNumberOptions {
		min?: Number,
		max?: Number
	}

	declare interface IsDateOptions {
		format?: String,
		message?: String
	}

			
}

declare module 'npm$namespace$Validator' {
	declare type ValidateFn = (
		value: any, onError: (message: String, childName: String, childValie: any) => void
	) => void;

	declare interface Validatable {
		validate: ValidateFn
	}

	declare interface IsObjectValidator {
		withRequired: (name: String, validator: Validatable) => IsObjectValidator,
		withOptional: (name: String, validator: Validatable) => IsObjectValidator,
		custom: (customValidator: Validatable) => IsObjectValidator,
		validate: ValidateFn
	}

	declare function express(validator: Validatable): any

	declare function bodyValidator(validator: Validatable): any

	declare function expressParams(validator: Validatable): any

	declare function paramsValidator(validator: Validatable): any

	declare function expressQuery(validator: Validatable): any

	declare function queryValidator(validator: Validatable): any

	declare function run(
		validator: Validatable, value: any, callback: (errorCount: Number, errors: Array<any>) => void
	): void

	declare function isObject(): IsObjectValidator

	declare function isString(options?: ValidatorOptions.IsStringOptions): Validatable

	declare function isStringOrNull(options?: ValidatorOptions.IsStringOptions): Validatable

	declare function isBoolean(): Validatable

	declare function isNumber(options?: ValidatorOptions.IsNumberOptions): Validatable

	declare function isInteger(options?: ValidatorOptions.IsNumberOptions): Validatable

	declare function isDate(options?: ValidatorOptions.IsDateOptions): Validatable

	declare function isIsoDate(options?: ValidatorOptions.IsDateOptions): Validatable

	declare function isIsoDateTime(options?: ValidatorOptions.IsDateOptions): Validatable

	declare function isArray(validator?: Validatable, options?: ValidatorOptions.Options): Validatable

	declare function isAnyObject(): IsObjectValidator

		
}