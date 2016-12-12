

declare module 'jquery.validation' {
		declare interface JQuery {
		removeAttrs(attributes: string): any,
		rules(): any,
		rules(command: string): any,
		rules(command: string, rules: string): any,
		rules(command: string, rules: JQueryValidation.RulesDictionary): any,
		valid(): boolean,
		validate(options?: JQueryValidation.ValidationOptions): JQueryValidation.Validator
	}

	declare interface JQueryStatic {
		format(template: string, ...arguments: string[]): string,
		validator: JQueryValidation.ValidatorStatic
	}

			
}

declare module 'npm$namespace$JQueryValidation' {
	declare type RulesDictionary = {
		[name: string]: any
	};

	declare type ShouldValidatePredicate = boolean | ((element: HTMLElement, event: JQueryEventObject) => void);

	declare interface ValidationOptions {
		debug?: boolean,
		errorClass?: string,
		errorContainer?: string,
		errorElement?: string,
		errorLabelContainer?: string,
		errorPlacement?: (error: JQuery, element: JQuery) => void,
		focusCleanup?: boolean,
		focusInvalid?: boolean,
		groups?: {
		[groupName: string]: string
	},
		highlight?: (element: HTMLElement, errorClass: string, validClass: string) => void,
		ignore?: string,
		ignoreTitle?: boolean,
		invalidHandler?: (event: JQueryEventObject, validator: Validator) => void,
		messages?: Object,
		meta?: string,
		onclick?: ShouldValidatePredicate,
		onfocusout?: ShouldValidatePredicate,
		onkeyup?: ShouldValidatePredicate,
		onsubmit?: boolean,
		rules?: RulesDictionary,
		showErrors?: (errorMap: ErrorDictionary, errorList: ErrorListItem[]) => void,
		submitHandler?: (form: HTMLFormElement) => void,
		success?: string | {
		($label: JQuery, validatedInput: HTMLElement): void
	},
		unhighlight?: (element: HTMLElement, errorClass: string, validClass: string) => void,
		validClass?: string,
		wrapper?: string
	}

	declare interface ErrorDictionary {
		[name: string]: string
	}

	declare interface ErrorListItem {
		message: string,
		element: HTMLElement
	}

	declare interface ValidatorStatic {
		addClassRules(name: string, rules: RulesDictionary): void,
		addClassRules(rules: RulesDictionary): void,
		addMethod(
		name: string, method: (value: any, element: HTMLElement, params: any) => boolean, message?: string
	): void,
		addMethod(
		name: string, method: (value: any, element: HTMLElement, params: any) => boolean, message?: (params: any, element: HTMLElement) => string
	): void,
		format(template: string): ((...args: any[]) => string),
		format(template: string, ...args: any[]): string,
		setDefaults(defaults: ValidationOptions): void,
		messages: {
		[index: string]: string
	},
		methods: {
		[index: string]: Function
	}
	}

	declare interface Validator {
		element(element: string | JQuery): boolean,
		form(): boolean,
		elementValue(element: Element): any,
		invalidElements(): HTMLElement[],
		numberOfInvalids(): number,
		resetForm(): void,
		settings: ValidationOptions,
		showErrors(errors: any): void,
		hideErrors(): void,
		valid(): boolean,
		validElements(): HTMLElement[],
		size(): number,
		focusInvalid(): void,
		errorMap: ErrorDictionary,
		errorList: ErrorListItem[]
	}

			
}