

declare module 'node-form' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Validation' {
		declare interface IErrorCustomMessage {
		(config: any, args: any): string
	}

	declare interface IPropertyValidator {
		isAcceptable(s: any): boolean,
		customMessage?: IErrorCustomMessage,
		tagName?: string
	}

	declare interface IStringValidator {
		isAcceptable(s: string): boolean
	}

	declare interface IAsyncPropertyValidator {
		isAcceptable(s: any): Q.Promise<boolean>,
		customMessage?: IErrorCustomMessage,
		isAsync: boolean,
		tagName?: string
	}

	declare interface IAsyncStringPropertyValidator {
		isAcceptable(s: string): Q.Promise<boolean>
	}

	declare interface IError {
		HasError: boolean,
		ErrorMessage: string,
		TranslateArgs?: IErrorTranslateArgs
	}

	declare interface IErrorTranslateArgs {
		TranslateId: string,
		MessageArgs: any,
		CustomMessage?: IErrorCustomMessage
	}

	declare interface IOptional {
		(): boolean
	}

	declare interface IValidationFailure {
		IsAsync: boolean,
		Error: IError
	}

	declare interface IValidationResult {
		Name: string,
		Add(validationResult: IValidationResult): void,
		Remove(index: number): void,
		Children: IValidationResult[],
		HasErrors: boolean,
		HasErrorsDirty: boolean,
		ErrorMessage: string,
		ErrorCount: number,
		Optional?: IOptional,
		TranslateArgs?: IErrorTranslateArgs[]
	}

	declare interface IValidate {
		(args: IError): void
	}

	declare interface IAsyncValidate {
		(args: IError): Q.Promise<any>
	}

	declare interface IValidatorFce {
		Name: string,
		ValidationFce?: IValidate,
		AsyncValidationFce?: IAsyncValidate
	}

	declare interface IValidator {
		Validate(context: any): IValidationFailure,
		ValidateAsync(context: any): Q.Promise<IValidationFailure>,
		Error: IError
	}

	declare interface IAbstractValidator<T> {
		RuleFor(prop: string, validator: IPropertyValidator): any,
		ValidationFor(prop: string, validator: IValidatorFce): any,
		ValidatorFor<K>(prop: string, validator: IAbstractValidator<K>): any,
		CreateRule(name: string): IAbstractValidationRule<any>,
		CreateAbstractRule(name: string): IAbstractValidationRule<any>,
		CreateAbstractListRule(name: string): IAbstractValidationRule<any>,
		ForList: boolean
	}

	declare interface IAbstractValidationRule<T> {
		Validate(context: T): IValidationResult,
		ValidateAsync(context: T): Q.Promise<IValidationResult>,
		ValidateAll(context: T): void,
		ValidateField(context: T, propName: string): void,
		ValidationResult: IValidationResult,
		Rules: {
		[name: string]: IPropertyValidationRule<T>
	},
		Validators: {
		[name: string]: IValidator
	},
		Children: {
		[name: string]: AbstractValidationRule<any>
	}
	}

	declare interface IPropertyValidationRule<T> {
		Validators: {
		[name: string]: any
	},
		Validate(context: IValidationContext<T>): IValidationFailure[],
		ValidateAsync(context: IValidationContext<T>): Q.Promise<IValidationFailure[]>
	}

	declare interface IValidationContext<T> {
		Value: string,
		Key: string,
		Data: T
	}

		declare class StringFce  {
		format(s: string, args: any): string
	}

	declare class NumberFce  {
		GetNegDigits(value: string): number
	}

	declare class LettersOnlyValidator extends IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class ZipCodeValidator extends IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class EmailValidator extends IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class UrlValidator extends IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class RequiredValidator extends IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class DateValidator extends IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class DateISOValidator extends IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class NumberValidator extends IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class DigitValidator extends IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class SignedDigitValidator extends IStringValidator {
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class MinLengthValidator extends IStringValidator {
		MinLength: number;
		constructor(MinLength?: number): this;
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class MaxLengthValidator extends IStringValidator {
		MaxLength: number;
		constructor(MaxLength?: number): this;
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class RangeLengthValidator extends IStringValidator {
		RangeLength: number[];
		constructor(RangeLength?: number[]): this;
		isAcceptable(s: string): boolean;
		MinLength: number;
		MaxLength: number;
		tagName: string
	}

	declare class MinValidator extends IPropertyValidator {
		Min: number;
		constructor(Min?: number): this;
		isAcceptable(s: any): boolean;
		tagName: string
	}

	declare class MaxValidator extends IPropertyValidator {
		Max: number;
		constructor(Max?: number): this;
		isAcceptable(s: any): boolean;
		tagName: string
	}

	declare class RangeValidator extends IPropertyValidator {
		Range: number[];
		constructor(Range?: number[]): this;
		isAcceptable(s: any): boolean;
		Min: number;
		Max: number;
		tagName: string
	}

	declare class StepValidator extends IPropertyValidator {
		Step: string;
		constructor(Step?: string): this;
		isAcceptable(s: any): boolean;
		tagName: string
	}

	declare class PatternValidator extends IStringValidator {
		Pattern: string;
		constructor(Pattern?: string): this;
		isAcceptable(s: string): boolean;
		tagName: string
	}

	declare class ContainsValidator extends IAsyncPropertyValidator {
		Options: Q.Promise<any[]>;
		constructor(Options: Q.Promise<any[]>): this;
		isAcceptable(s: string): Q.Promise<boolean>;
		isAsync: boolean;
		tagName: string
	}

	declare class Error extends IError {
		HasError: boolean;
		ErrorMessage: string;
		constructor(): this
	}

	declare class ValidationFailure extends IError {
		Error: IError;
		IsAsync: boolean;
		constructor(Error: IError, IsAsync: boolean): this;
		HasError: boolean;
		ErrorMessage: string;
		TranslateArgs: IErrorTranslateArgs
	}

	declare class ValidationResult extends IValidationResult {
		Name: string;
		constructor(Name: string): this;
		IsDirty: boolean;
		Children: IValidationResult[];
		Add(error: IValidationResult): void;
		Remove(index: number): void;
		Optional: IOptional;
		TranslateArgs: IErrorTranslateArgs[];
		HasErrorsDirty: boolean;
		HasErrors: boolean;
		ErrorCount: number;
		ErrorMessage: string
	}

	declare class CompositeValidationResult extends IValidationResult {
		Name: string;
		Children: IValidationResult[];
		constructor(Name: string): this;
		Optional: IOptional;
		AddFirst(error: IValidationResult): void;
		Add(error: IValidationResult): void;
		Remove(index: number): void;
		HasErrorsDirty: boolean;
		HasErrors: boolean;
		ErrorCount: number;
		ErrorMessage: string;
		TranslateArgs: IErrorTranslateArgs[];
		LogErrors(headerMessage?: string): void;
		Errors: {
		[name: string]: IValidationResult
	};
		SetDirty(): void;
		SetPristine(): void
	}

	declare class AbstractValidator<T> extends IAbstractValidator<T> {
		Validators: {
		[name: string]: IPropertyValidator[]
	};
		AbstractValidators: {
		[name: string]: IAbstractValidator<any>
	};
		ValidationFunctions: {
		[name: string]: IValidatorFce[]
	};
		RuleFor(prop: string, validator: IPropertyValidator): void;
		ValidationFor(prop: string, fce: IValidatorFce): void;
		ValidatorFor<K>(prop: string, validator: IAbstractValidator<K>, forList?: boolean): void;
		CreateAbstractRule(name: string): AbstractValidationRule<T>;
		CreateAbstractListRule(name: string): AbstractListValidationRule<T>;
		CreateRule(name: string): AbstractValidationRule<T>;
		ForList: boolean
	}

	declare class AbstractValidationRule<T> extends IAbstractValidationRule<T> {
		Name: string;
		validator: AbstractValidator<T>;
		ValidationResult: IValidationResult;
		Rules: {
		[name: string]: IPropertyValidationRule<T>
	};
		Validators: {
		[name: string]: IValidator
	};
		Children: {
		[name: string]: AbstractValidationRule<any>
	};
		ForList: boolean;
		constructor(Name: string, validator: AbstractValidator<T>, forList?: boolean): this;
		addChildren(): void;
		SetOptional(fce: IOptional): void;
		Validate(context: T): IValidationResult;
		ValidateAsync(context: T): Q.Promise<IValidationResult>;
		ValidateAll(context: T): void;
		ValidateField(context: T, propName: string): void
	}

	declare class AbstractListValidationRule<T> extends AbstractValidationRule<T> {
		Name: string;
		validator: AbstractValidator<T>;
		constructor(Name: string, validator: AbstractValidator<T>): this;
		Validate(context: any): IValidationResult;
		ValidateAsync(context: any): Q.Promise<IValidationResult>;
		NotifyListChanged(list: any[]): void
	}

	declare class ValidationContext<T> extends IValidationContext<T> {
		Key: string;
		Data: T;
		constructor(Key: string, Data: T): this;
		Value: any
	}

	declare class MessageLocalization  {
		customMsg: string;
		defaultMessages: {
		required: string,
		remote: string,
		email: string,
		url: string,
		date: string,
		dateISO: string,
		number: string,
		digits: string,
		signedDigits: string,
		creditcard: string,
		equalTo: string,
		maxlength: string,
		minlength: string,
		rangelength: string,
		range: string,
		max: string,
		min: string,
		step: string,
		contains: string,
		mask: string,
		custom: string
	};
		ValidationMessages: {
		required: string,
		remote: string,
		email: string,
		url: string,
		date: string,
		dateISO: string,
		number: string,
		digits: string,
		signedDigits: string,
		creditcard: string,
		equalTo: string,
		maxlength: string,
		minlength: string,
		rangelength: string,
		range: string,
		max: string,
		min: string,
		step: string,
		contains: string,
		mask: string,
		custom: string
	};
		GetValidationMessage(validator: any): string
	}

	declare class PropertyValidationRule<T> extends ValidationResult, IPropertyValidationRule<T> {
		Name: string;
		Validators: {
		[name: string]: any
	};
		ValidationFailures: {
		[name: string]: IValidationFailure
	};
		constructor(Name: string, validatorsToAdd?: IPropertyValidator[]): this;
		AddValidator(validator: any): void;
		Errors: {
		[name: string]: IValidationFailure
	};
		HasErrors: boolean;
		ErrorCount: number;
		ErrorMessage: string;
		TranslateArgs: IErrorTranslateArgs[];
		Validate(context: IValidationContext<T>): IValidationFailure[];
		ValidateEx(value: any): IValidationFailure[];
		ValidateAsync(context: IValidationContext<T>): Q.Promise<IValidationFailure[]>;
		ValidateAsyncEx(value: string): Q.Promise<IValidationFailure[]>
	}

	declare class Validator extends ValidationResult, IValidator {
		Name: string;
		Error: IError;
		ValidationFailures: {
		[name: string]: IValidationFailure
	};
		constructor(Name: string, ValidateFce?: IValidate, AsyncValidationFce?: IAsyncValidate): this;
		Optional: IOptional;
		Validate(context: any): IValidationFailure;
		ValidateAsync(context: any): Q.Promise<IValidationFailure>;
		HasError: boolean;
		Errors: {
		[name: string]: IValidationFailure
	};
		HasErrors: boolean;
		ErrorCount: number;
		ErrorMessage: string;
		TranslateArgs: IErrorTranslateArgs[]
	}

	
}