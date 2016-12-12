

declare module 'knockout.validation' {
		declare interface KnockoutValidationGroupingOptions {
		deep?: boolean,
		observable?: boolean,
		live?: boolean
	}

	declare interface KnockoutValidationValidateOptions {
		throttle?: number
	}

	declare interface KnockoutValidationConfiguration {
		allowHtmlMessages?: boolean,
		decorateElementOnModified?: boolean,
		decorateInputElement?: boolean,
		errorClass?: string,
		errorElementClass?: string,
		errorMessageClass?: string,
		errorsAsTitle?: boolean,
		errorsAsTitleOnModified?: boolean,
		grouping?: KnockoutValidationGroupingOptions,
		insertMessages?: boolean,
		messagesOnModified?: boolean,
		messageTemplate?: string,
		parseInputAttributes?: boolean,
		registerExtenders?: boolean,
		validate?: KnockoutValidationValidateOptions,
		writeInputAttributes?: boolean
	}

	declare interface KnockoutValidationUtils {
		isArray(o: any): boolean,
		isObject(o: any): boolean,
		values(o: any): any[],
		getValue(o: any): any,
		hasAttribute(node: Element, attr: string): boolean,
		isValidatable(o: any): boolean,
		insertAfter(node: Element, newNode: Element): void,
		newId(): number,
		getConfigOptions(element: Element): KnockoutValidationConfiguration,
		setDomData(node: Element, data: KnockoutValidationConfiguration): void,
		getDomData(node: Element): KnockoutValidationConfiguration,
		contextFor(node: Element): KnockoutValidationConfiguration,
		isEmptyVal(val: any): boolean
	}

	declare interface KnockoutValidationAsyncCallbackArgs {
		isValid: boolean,
		message: string
	}

	declare interface KnockoutValidationAsyncCallback {
		(result: boolean): void,
		(result: KnockoutValidationAsyncCallbackArgs): void
	}

	declare interface KnockoutValidationRuleBase {
		message: string
	}

	declare interface KnockoutValidationRuleDefinition {
		validator(value: any, params: any): boolean
	}

	declare interface KnockoutValidationAsyncRuleDefinition {
		async: boolean,
		validator(value: any, params: any, callback: KnockoutValidationAsyncCallback): void
	}

	declare interface KnockoutValidationAnonymousRuleDefinition {
		validation: KnockoutValidationRuleDefinition
	}

	declare interface KnockoutValidationRuleDefinitions {
		date: KnockoutValidationRuleDefinition,
		dateISO: KnockoutValidationRuleDefinition,
		digit: KnockoutValidationRuleDefinition,
		email: KnockoutValidationRuleDefinition,
		equal: KnockoutValidationRuleDefinition,
		max: KnockoutValidationRuleDefinition,
		maxLength: KnockoutValidationRuleDefinition,
		min: KnockoutValidationRuleDefinition,
		minLength: KnockoutValidationRuleDefinition,
		notEqual: KnockoutValidationRuleDefinition,
		number: KnockoutValidationRuleDefinition,
		pattern: KnockoutValidationRuleDefinition,
		phoneUS: KnockoutValidationRuleDefinition,
		required: KnockoutValidationRuleDefinition,
		step: KnockoutValidationRuleDefinition,
		unique: KnockoutValidationRuleDefinition
	}

	declare interface KnockoutValidationRule {
		rule: string,
		params: any,
		message?: string,
		condition?: () => boolean
	}

	declare interface KnockoutValidationErrors {
		(): string[],
		showAllMessages(): void,
		showAllMessages(show: boolean): void
	}

	declare interface KnockoutValidationGroup {
		errors?: KnockoutValidationErrors,
		isValid?: () => boolean,
		isAnyMessageShown?: () => boolean
	}

	declare interface KnockoutValidationLocalizationDictionary {
		[key: string]: string
	}

	declare interface KnockoutValidationStatic {
		init(options?: KnockoutValidationConfiguration, force?: boolean): void,
		reset(): void,
		group(obj: any, options?: any): KnockoutValidationErrors,
		formatMessage(message: string, params: string): string,
		addRule<T>(
		observable: KnockoutObservable<T>, rule: KnockoutValidationRule
	): KnockoutObservable<T>,
		addAnonymousRule(
		observable: KnockoutObservable<any>, ruleObj: KnockoutValidationAnonymousRuleDefinition
	): void,
		insertValidationMessage(element: Element): Element,
		parseInputValidationAttributes(element: Element, valueAccessor: () => KnockoutObservable<any>): void,
		rules: KnockoutValidationRuleDefinitions,
		addExtender(ruleName: string): void,
		registerExtenders(): void,
		utils: KnockoutValidationUtils,
		localize(msgTranslations: KnockoutValidationLocalizationDictionary): void,
		defineLocale(
		newLocale: string, msgTranslations: KnockoutValidationLocalizationDictionary
	): KnockoutValidationLocalizationDictionary,
		locale(newLocale: string): string,
		validateObservable(observable: KnockoutObservable<any>): boolean
	}

	declare interface KnockoutStatic {
		validation: KnockoutValidationStatic,
		validatedObservable<T>(initialValue?: T): KnockoutObservable<T>,
		applyBindingsWithValidation(
		viewModel: any, rootNode?: any, options?: KnockoutValidationConfiguration
	): void
	}

	declare interface KnockoutSubscribableFunctions<T> {
		isValid: KnockoutComputed<boolean>,
		isValidating: KnockoutObservable<boolean>,
		rules: KnockoutObservableArray<KnockoutValidationRule>,
		isModified: KnockoutObservable<boolean>,
		error: KnockoutComputed<string>,
		setError(error: string): void,
		clearError(): void
	}

			declare module.exports: KnockoutValidationStatic


}