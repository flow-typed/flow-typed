

declare module 'business-rules-engine' {
					
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
		ValidationFor(prop: string, validatorFce: IValidatorFce): any,
		Validation(validatorFce: IValidatorFce): any,
		ValidatorFor<K>(prop: string, validator: IAbstractValidator<K>): any,
		CreateRule(name: string): IAbstractValidationRule<any>,
		CreateAbstractRule(name: string): IAbstractValidationRule<any>,
		CreateAbstractListRule(name: string): IAbstractValidationRule<any>,
		ForList: boolean
	}

	declare interface IAbstractValidationRule<T> {
		Validate(context: T): IValidationResult,
		ValidateAsync(context: T): Q.Promise<IValidationResult>,
		ValidateAll(context: T): Q.Promise<IValidationResult>,
		ValidateProperty(context: T, propName: string): void,
		ValidationResult: IValidationResult,
		Rules: {
		[name: string]: IPropertyValidationRule<T>
	},
		Validators: {
		[name: string]: IValidator
	},
		Children: {
		[name: string]: IAbstractValidationRule<any>
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
		Validation(fce: IValidatorFce): void;
		ValidatorFor<K>(prop: string, validator: IAbstractValidator<K>, forList?: boolean): void;
		CreateAbstractRule(name: string): IAbstractValidationRule<T>;
		CreateAbstractListRule(name: string): IAbstractValidationRule<T>;
		CreateRule(name: string): IAbstractValidationRule<T>;
		ForList: boolean
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

	
}

declare module 'business-rule-engine' {
					declare module.exports: undefined


}