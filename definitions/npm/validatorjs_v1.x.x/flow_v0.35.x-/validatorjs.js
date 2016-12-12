import type { ValidatorStatic } from 'npm$namespace$ValidatorJS'

declare module 'validatorjs' {
					declare module.exports: ValidatorStatic


}

declare module 'npm$namespace$ValidatorJS' {
	declare type AttributeFormatter = (attribute: any) => any;

	declare interface ParsedRule {
		attribute: Array<{
		name: string,
		value: any
	}>
	}

	declare interface ValidationErrors {
		[field: string]: string
	}

	declare interface ErrorMessages {
		[key: string]: string
	}

	declare interface AttributeNames {
		[attribute: string]: string
	}

	declare interface Errors {
		errors: ValidationErrors,
		add(attribute: string, message: string): void,
		get(attribute: string): Array<string>,
		first(attribute: string): string | boolean,
		all(): ValidationErrors,
		has(attribute: string): boolean
	}

	declare interface ValidatorStatic {
		new <A>(data: A, rules: any, customMessages?: ErrorMessages): Validator<A>,
		setMessages(lang: string, messages: ErrorMessages): any,
		getMessages(lang: string): ErrorMessages,
		useLang(lang: string): void,
		getDefaultLang(): string,
		setAttributeFormatter(func: AttributeFormatter): void,
		stopOnError(attributes: boolean | Array<string>): void,
		register(name: string, fn: Function, message: string): void,
		registerAsync(name: string, fn: Function, message: string): void
	}

	declare interface Validator<A> {
		lang: string,
		input: A,
		messages: ErrorMessages,
		errors: Errors,
		errorCount: number,
		hasAsync: boolean,
		rules: any,
		numericRules: Array<string>,
		attributeFormatter: AttributeFormatter,
		check(): boolean,
		checkAsync(passes?: Function, fails?: Function): void,
		setAttributeNames(attributes: AttributeNames): void,
		setAttributeFormatter(func: AttributeFormatter): void,
		getRule(name: string): Function,
		stopOnError(passes?: Function): boolean | void,
		passes(passes?: Function): boolean | void,
		fails(fails?: Function): boolean | void
	}

			
}