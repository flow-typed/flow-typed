

declare module 'angular-formly' {
					declare module.exports: undefined


}

declare module 'AngularFormly' {
					declare module.exports: undefined


}

declare module 'npm$namespace$AngularFormly' {
		declare interface IFieldArray {
		
	}

	declare interface IFieldGroup {
		data?: {
		[key: string]: any
	},
		className?: string,
		elementAttributes?: string,
		fieldGroup?: IFieldArray,
		form?: Object,
		hide?: boolean,
		hideExpression?: string | IExpressionFunction,
		key?: string | number,
		model?: string | {
		[key: string]: any
	},
		options?: IFormOptionsAPI,
		templateOptions?: ITemplateOptions,
		wrapper?: string | string[]
	}

	declare interface IFormOptionsAPI {
		data?: {
		[key: string]: any
	},
		fieldTransform?: Function,
		formState?: Object,
		removeChromeAutoComplete?: boolean,
		resetModel?: Function,
		templateManipulators?: ITemplateManipulators,
		updateInitialValue?: Function,
		wrapper?: string | string[]
	}

	declare interface IExpressionFunction {
		($viewValue: any, $modelValue: any, scope: ITemplateScope): any
	}

	declare interface IModelOptions {
		updateOn?: string,
		debounce?: number,
		allowInvalid?: boolean,
		getterSetter?: string,
		timezone?: string
	}

	declare interface ITemplateManipulator {
		(template: string | HTMLElement, options: Object, scope: ITemplateScope): string | HTMLElement
	}

	declare interface ITemplateManipulators {
		preWrapper?: ITemplateManipulator[],
		postWrapper?: ITemplateManipulator[]
	}

	declare interface ISelectOption {
		name: string,
		value?: string,
		group?: string
	}

	declare interface ITemplateOptions {
		disabled?: boolean,
		maxlength?: number,
		minlength?: number,
		pattern?: string,
		required?: boolean,
		max?: number,
		min?: number,
		placeholder?: number | string,
		tabindex?: number,
		type?: string,
		onBlur?: string | IExpressionFunction,
		onChange?: string | IExpressionFunction,
		onClick?: string | IExpressionFunction,
		onFocus?: string | IExpressionFunction,
		onKeydown?: string | IExpressionFunction,
		onKeypress?: string | IExpressionFunction,
		onKeyup?: string | IExpressionFunction,
		label?: string,
		description?: string,
		[key: string]: any,
		options?: Array<ISelectOption>,
		groupProp?: string,
		valueProp?: string,
		labelProp?: string
	}

	declare interface IValidator {
		expression: string | IExpressionFunction,
		message?: string | IExpressionFunction
	}

	declare interface IWatcher {
		deep?: boolean,
		expression?: string | {
		(field: string, scope: ITemplateScope): boolean
	},
		listener: (
		field: string, newValue: any, oldValue: any, scope: ITemplateScope, stopWatching: Function
	) => void,
		type?: string
	}

	declare interface IFieldConfigurationObject {
		asyncValidators?: {
		[key: string]: string | IExpressionFunction | IValidator
	},
		controller?: string | Function,
		data?: {
		[key: string]: any
	},
		defaultValue?: any,
		className?: string,
		elementAttributes?: {
		[key: string]: string
	},
		expressionProperties?: {
		[key: string]: string | IExpressionFunction | IValidator
	},
		hide?: boolean,
		hideExpression?: string | IExpressionFunction,
		id?: string,
		initialValue?: any,
		key?: string | number,
		link?: ng.IDirectiveLinkFn,
		model?: string | {
		[key: string]: any
	},
		modelOptions?: IModelOptions,
		name?: string,
		ngModelAttrs?: {
		attribute?: any,
		bound?: any,
		expression?: any,
		value?: any,
		[key: string]: any
	},
		ngModelElAttrs?: {
		[key: string]: string
	},
		noFormControl?: boolean,
		optionsTypes?: string | string[],
		template?: string | {
		(fieldConfiguration: IFieldConfigurationObject): string | ng.IPromise<string>
	},
		templateManipulators?: ITemplateManipulators,
		templateOptions?: ITemplateOptions,
		templateUrl?: string | {
		(fieldConfiguration: IFieldConfigurationObject): string | ng.IPromise<string>
	},
		type?: string,
		validation?: {
		errorExistsAndShouldBeVisible?: boolean,
		messages?: {
		[key: string]: IExpressionFunction | string
	},
		show?: boolean
	},
		validators?: {
		[key: string]: string | IExpressionFunction | IValidator
	},
		value(): any,
		value(val: any): void,
		watcher?: IWatcher | IWatcher[],
		wrapper?: string | string[],
		formControl?: ng.IFormController | ng.IFormController[],
		resetModel?: () => void,
		runExpressions?: () => void,
		updateInitialValue?: () => void
	}

	declare interface ITypeOptions {
		apiCheck?: {
		[key: string]: Function
	},
		apiCheckFunction?: string,
		apiCheckInstance?: any,
		apiCheckOptions?: Object,
		defaultOptions?: IFieldConfigurationObject | Function,
		controller?: Function | string | any[],
		data?: {
		[key: string]: any
	},
		extends?: string,
		link?: ng.IDirectiveLinkFn,
		overwriteOk?: boolean,
		name: string,
		template?: Function | string,
		templateUrl?: Function | string,
		validateOptions?: Function,
		wrapper?: string | string[]
	}

	declare interface IWrapperOptions {
		apiCheck?: {
		[key: string]: Function
	},
		apiCheckFunction?: string,
		apiCheckInstance?: any,
		apiCheckOptions?: Object,
		overwriteOk?: boolean,
		name?: string,
		template?: string,
		templateUrl?: string,
		types?: string[],
		validateOptions?: Function
	}

	declare interface IFormlyConfigExtras {
		disableNgModelAttrsManipulator: boolean,
		apiCheckInstance: any,
		ngModelAttrsManipulatorPreferUnbound: boolean,
		removeChromeAutoComplete: boolean,
		defaultHideDirective: string,
		errorExistsAndShouldBeVisibleExpression: any,
		getFieldId: Function,
		fieldTransform: Function,
		explicitAsync: boolean
	}

	declare interface IFormlyConfig {
		disableWarnings: boolean,
		extras: IFormlyConfigExtras,
		setType(typeOptions: ITypeOptions): void,
		setWrapper(wrapperOptions: IWrapperOptions): void,
		templateManipulators: ITemplateManipulators
	}

	declare interface ITemplateScopeOptions {
		formControl: ng.IFormController | ng.IFormController[],
		templateOptions: ITemplateOptions,
		validation: Object
	}

	declare interface ITemplateScope {
		options: ITemplateScopeOptions,
		fc: ng.IFormController | ng.IFormController[],
		fields: IFieldArray,
		form: any,
		formState: Object,
		id: string,
		index: number,
		model?: string | {
		[key: string]: any
	},
		showError: boolean,
		to: ITemplateOptions
	}

	declare interface IValidationMessages {
		addTemplateOptionValueMessage(
		name: string, prop: string, prefix: string, suffix: string, alternate: string
	): void,
		addStringMessage(name: string, string: string): void,
		messages: {
		[key: string]: ($viewValue: any, $modelValue: any, scope: ITemplateScope) => string
	}
	}

			
}