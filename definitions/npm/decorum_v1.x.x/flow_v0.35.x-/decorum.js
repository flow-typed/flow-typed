

declare module 'decorum' {
					declare module.exports: undefined


}

declare module 'npm$namespace$decorum' {
	declare export type ValidationDefinitions = {
		[field: string]: PropertyDecorator[]
	};

	declare export interface IFieldValidationError {
		field: string,
		fieldName: string,
		errors: string[]
	}

	declare export interface IValidationResult {
		isValid: boolean,
		errors: IFieldValidationError[]
	}

	declare export interface MessageHandler<TValidator> {
		(opts: IMessageOpts, validator: TValidator): string
	}

	declare export interface IMessageOpts {
		property: string,
		friendlyName: string,
		value: string
	}

	declare export interface IMessageHandlerMap {
		[key: string]: MessageHandler<any>
	}

	declare export function Validation<TModel>(
		message: string | MessageHandler<CustomValidator<TModel>>, predicate: (value: any, model: TModel) => boolean
	): PropertyDecorator

	declare export function Email(message?: string | MessageHandler<EmailValidator>): PropertyDecorator

	declare export function FieldName(name: string): PropertyDecorator

	declare export function Length(
		length: number, message?: string | MessageHandler<LengthValidator>
	): PropertyDecorator

	declare export function MaxLength(
		maxLength: number, message?: string | MessageHandler<MaxLengthValidator>
	): PropertyDecorator

	declare export function MinLength(
		minLength: number, message?: string | MessageHandler<MinLengthValidator>
	): PropertyDecorator

	declare export function Pattern(
		regex: RegExp, message?: string | MessageHandler<PatternValidator>
	): PropertyDecorator

	declare export function Required(message?: string | MessageHandler<RequiredFieldValidator>): PropertyDecorator

	declare export function Alpha(message?: string | MessageHandler<PatternValidator>): PropertyDecorator

	declare export function AlphaNumeric(message?: string | MessageHandler<PatternValidator>): PropertyDecorator

	declare export class Validator  {
		new(model: any): ModelValidator;
		decorate(objectType: any, definitions: ValidationDefinitions): void;
		validate(model: any): IValidationResult;
		addValidator(targetPrototype: Object, property: string, validator: BaseValidator): void
	}

	declare export class ModelValidator  {
		constructor(model: any): this;
		getValidationOptions(fieldKey: string): FieldOptions;
		validateField(fieldKey: string, proposedValue?: any): string[];
		validate(): IValidationResult
	}

	declare export class CustomValidator<TModel> extends BaseValidator {
		constructor(predicate: (value: any, model: TModel) => boolean, message: string | MessageHandler<CustomValidator<TModel>>): this;
		getMessage(opts: IMessageOpts): string;
		isValid(value: any, model: any): boolean
	}

	declare export class EmailValidator extends PatternValidator {
		EmailRegex: RegExp;
		constructor(message?: string | MessageHandler<EmailValidator>): this;
		getMessage(opts: IMessageOpts): string;
		getKey(): string
	}

	declare export class LengthValidator extends BaseValidator {
		length: number;
		constructor(length: number, message?: string | MessageHandler<LengthValidator>): this;
		getMessage(opts: IMessageOpts): string;
		isValid(value: any): boolean
	}

	declare export class MaxLengthValidator extends BaseValidator {
		maxLength: number;
		constructor(maxLength: number, message?: string | MessageHandler<MaxLengthValidator>): this;
		getMessage(opts: IMessageOpts): string;
		isValid(value: string): boolean
	}

	declare export class MinLengthValidator extends BaseValidator {
		minLength: number;
		constructor(minLength: number, message?: string | MessageHandler<MinLengthValidator>): this;
		getMessage(opts: IMessageOpts): string;
		isValid(value: string): boolean
	}

	declare export class PatternValidator extends BaseValidator {
		pattern: RegExp;
		constructor(pattern: RegExp, message?: string | MessageHandler<PatternValidator>): this;
		getMessage(opts: IMessageOpts): string;
		isValid(value: any): boolean
	}

	declare export class RequiredFieldValidator extends BaseValidator {
		constructor(message?: string | MessageHandler<RequiredFieldValidator>): this;
		validatesEmptyValue(): boolean;
		getMessage(opts: IMessageOpts): string;
		isValid(value: any): boolean
	}

	declare export class BaseValidator  {
		constructor(validatorKey: string, message: string | MessageHandler<any>): this;
		hasCustomMessage: boolean;
		validatesEmptyValue(): boolean;
		getCustomMessage(opts: IMessageOpts): string;
		getKey(): string;
		getMessage(opts: IMessageOpts): string;
		isValid(value: any, model: any): boolean
	}

	declare export class FieldOptions  {
		constructor(property: string): this;
		getFriendlyName(): string;
		setFriendlyName(name: string): void;
		addValidator(validator: BaseValidator): void;
		getValidators(): BaseValidator[];
		validateValue(value: any, model: any): string[]
	}

	
}