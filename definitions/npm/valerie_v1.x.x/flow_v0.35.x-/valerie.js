import type { Static } from 'npm$namespace$Valerie'

declare module 'valerie' {
		declare interface KnockoutObservable<T> {
		validate(
		validationOptions?: Valerie.ValidationOptions
	): Valerie.PropertyValidationState<KnockoutObservable<T>>
	}

	declare interface KnockoutComputed<T> {
		validate(
		validationOptions?: Valerie.ValidationOptions
	): Valerie.PropertyValidationState<KnockoutComputed<T>>
	}

	declare interface KnockoutObservableArray<T> {
		validate(
		validationOptions?: Valerie.ValidationOptions
	): Valerie.PropertyValidationState<KnockoutObservableArray<T>>
	}

	declare interface KnockoutObservableArrayFunctions<T> {
		validateAsModel(): Valerie.ValidatableModel<KnockoutObservableArray<T>>
	}

	declare interface KnockoutBindingHandlers {
		validatedChecked: KnockoutBindingHandler,
		validatedSelectedOptions: KnockoutBindingHandler,
		validatedValue: KnockoutBindingHandler,
		disabledWhenNotValid: KnockoutBindingHandler,
		disabledWhenTouchedAndNotValid: KnockoutBindingHandler,
		enabledWhenApplicable: KnockoutBindingHandler,
		formattedText: KnockoutBindingHandler,
		validationCss: KnockoutBindingHandler,
		validationMessage: KnockoutBindingHandler,
		validationMessageText: KnockoutBindingHandler,
		validationName: KnockoutBindingHandler,
		visibleWhenApplicable: KnockoutBindingHandler,
		visibleWhenFocused: KnockoutBindingHandler,
		visibleWhenInvalid: KnockoutBindingHandler,
		visibleWhenSummaryNotEmpty: KnockoutBindingHandler,
		visibleWhenTouched: KnockoutBindingHandler,
		visibleWhenUntouched: KnockoutBindingHandler,
		visibleWhenValid: KnockoutBindingHandler
	}

			
}

declare module 'npm$namespace$Valerie' {
		declare interface Static {
		mapApplicableModel(sourceModel: any): any,
		mapModel(
		sourceModel: any, includeWrappedFunction?: IncludePropertyCallback, includeUnwrappedFunction?: IncludePropertyCallback
	): any,
		validatableModel(model: any, options?: ValidationOptions): ModelValidationState,
		validatableProperty<T>(value: T, options?: ValidationOptions): PropertyValidationState<T>,
		ValidationResult: ValidationResultStatic,
		converters: ConvertersStatic,
		utils: UtilsStatic,
		validationState: ValidationState
	}

	declare interface ValidationResultStatic {
		passedInstance: ValidationResult,
		createFailedResult(message: string): ValidationResult
	}

	declare interface ConvertersStatic {
		passThrough: Valerie.IConverter
	}

	declare interface UtilsStatic {
		asArray<T>(value: any): any[],
		asFunction<T>(value: T): () => T,
		asFunction<T>(fn: () => T): () => T,
		isArray(value: any): boolean,
		isArrayOrObject(value: any): boolean,
		isFunction(value: any): boolean,
		isMissing(value: any): boolean,
		isObject(value: any): boolean,
		isString(value: any): boolean,
		mergeOptions(defaultOptions: ValidationOptions, options: any): ValidationOptions
	}

	declare interface IncludePropertyCallback {
		(value: any, sourceModel: any, index: any): boolean
	}

	declare interface ModelValidationState {
		new: (model: any, options?: ModelValidationStateOptions) => ModelValidationState,
		model: any,
		options?: ModelValidationStateOptions,
		addValidationStates(validationStateOrStates: any): ModelValidationState,
		applicable(valueOrFunction: any): ModelValidationState,
		clearSummary(valueOrFunction: any): ModelValidationState,
		failed(): boolean,
		failedStates(): Valerie.IValidationState[],
		getName(): string,
		isApplicable(): boolean,
		message(): string,
		passed(): boolean,
		paused(value: boolean): boolean,
		pending(): boolean,
		pendingStates(): IValidationState[],
		refresh(): void,
		result(): ValidationResult,
		summary(): summaryItem[],
		touched(value: boolean): boolean,
		validationStates(): IValidationState[],
		includeInSummary(): ModelValidationState,
		name(valueOrFunction: any): ModelValidationState,
		removeValidationStates(validationStateOrStates: any): ModelValidationState,
		startValidatingSubModel(validatableSubModel: any): ModelValidationState,
		stopValidatingSubModel(validatableSubModel: any): ModelValidationState,
		updateSummary(updateSubModelSummaries: boolean): ModelValidationState,
		validateAll(): ModelValidationState,
		validateAllProperties(): ModelValidationState,
		validateChildProperties(): ModelValidationState,
		validateChildPropertiesAndSubModels(): ModelValidationState,
		end(): any
	}

	declare interface ModelValidationStateOptions {
		applicable(): boolean,
		excludeFromSummary: boolean,
		failureMessage: string,
		name(): string,
		paused(): boolean
	}

	declare interface PropertyValidationState<T> {
		observableOrComputed: T,
		options: ValidationOptions,
		addRule(rule: IRule): PropertyValidationState<T>,
		applicable(value: boolean): PropertyValidationState<T>,
		applicable(fn: () => boolean): PropertyValidationState<T>,
		currencyMajor(options?: ValidationOptions): PropertyValidationState<T>,
		currencyMajorMinor(options?: ValidationOptions): PropertyValidationState<T>,
		date(): PropertyValidationState<T>,
		during(
		earliest: Date, latest: Date, options?: ValidationOptions
	): PropertyValidationState<T>,
		during(
		earliest: () => Date, latest: Date, options?: ValidationOptions
	): PropertyValidationState<T>,
		during(
		earliest: Date, latest: () => Date, options?: ValidationOptions
	): PropertyValidationState<T>,
		during(
		earliest: () => Date, latest: () => Date, options?: ValidationOptions
	): PropertyValidationState<T>,
		earliest(earliest: Date, options?: ValidationOptions): PropertyValidationState<T>,
		earliest(earliest: () => Date, options?: ValidationOptions): PropertyValidationState<T>,
		email(): PropertyValidationState<T>,
		entryFormat(format: string): PropertyValidationState<T>,
		excludeFromSummary(): PropertyValidationState<T>,
		expression(
		regularExpression: RegExp, options?: ValidationOptions
	): PropertyValidationState<T>,
		expression(
		regularExpressionString: string, options?: ValidationOptions
	): PropertyValidationState<T>,
		float(options?: ValidationOptions): PropertyValidationState<T>,
		integer(options?: ValidationOptions): PropertyValidationState<T>,
		latest(
		latestValueOrFunction: Date, options?: ValidationOptions
	): PropertyValidationState<T>,
		latest(
		latestValueOrFunction: () => Date, options?: ValidationOptions
	): PropertyValidationState<T>,
		lengthBetween(
		shortest: number, longest: number, options?: ValidationOptions
	): PropertyValidationState<T>,
		lengthBetween(
		shortest: number, longest: () => number, options?: ValidationOptions
	): PropertyValidationState<T>,
		lengthBetween(
		shortest: () => number, longest: number, options?: ValidationOptions
	): PropertyValidationState<T>,
		lengthBetween(
		shortest: () => number, longest: () => number, options?: ValidationOptions
	): PropertyValidationState<T>,
		matches(permitted: any, options?: ValidationOptions): PropertyValidationState<T>,
		matches(permitted: () => any, options?: ValidationOptions): PropertyValidationState<T>,
		maximum(maximum: any, options?: ValidationOptions): PropertyValidationState<T>,
		maximum(maximum: () => any, options?: ValidationOptions): PropertyValidationState<T>,
		maximumLength(longest: number, options?: ValidationOptions): PropertyValidationState<T>,
		maximumLength(longest: () => number, options?: ValidationOptions): PropertyValidationState<T>,
		maximumNumberOfItems(maximum: number, options?: ValidationOptions): PropertyValidationState<T>,
		maximumNumberOfItems(maximum: () => number, options?: ValidationOptions): PropertyValidationState<T>,
		minimum(
		minimumValueOrFunction: any, options?: ValidationOptions
	): PropertyValidationState<T>,
		minimumLength(shortest: number, options?: ValidationOptions): PropertyValidationState<T>,
		minimumLength(
		shortest: () => number, options?: ValidationOptions
	): PropertyValidationState<T>,
		minimumNumberOfItems(minimum: number, options?: ValidationOptions): PropertyValidationState<T>,
		minimumNumberOfItems(minimum: () => number, options?: ValidationOptions): PropertyValidationState<T>,
		name(value: string): PropertyValidationState<T>,
		name(value: () => string): PropertyValidationState<T>,
		noneOf(
		forbiddenValues: any[], options?: ValidationOptions
	): PropertyValidationState<T>,
		noneOf(
		forbiddenValues: () => any[], options?: ValidationOptions
	): PropertyValidationState<T>,
		not(
		forbiddenValueOrFunction: any, options?: ValidationOptions
	): PropertyValidationState<T>,
		number(): PropertyValidationState<T>,
		numberOfItems(
		minimumValueOrFunction: any, maximumValueOrFunction: any, options?: ValidationOptions
	): PropertyValidationState<T>,
		oneOf(
		permittedValues: any[], options?: ValidationOptions
	): PropertyValidationState<T>,
		oneOf(
		permittedValues: () => any[], options?: ValidationOptions
	): PropertyValidationState<T>,
		postcode(): PropertyValidationState<T>,
		range(
		minimumValueOrFunction: any, maximumValueOrFunction: any, options?: ValidationOptions
	): PropertyValidationState<T>,
		required(valueOrFunction?: any): PropertyValidationState<T>,
		rule(testFunction: () => any): PropertyValidationState<T>,
		ruleMessage(failureMessageFormat: string): PropertyValidationState<T>,
		string(): PropertyValidationState<T>,
		valueFormat(format: string): PropertyValidationState<T>,
		validateChildProperties(): PropertyValidationState<T>,
		end(): T,
		failed(): boolean,
		getName(): string,
		isApplicable(): boolean,
		isRequired(): boolean,
		message(): string,
		passed(): boolean,
		pending(): boolean,
		showMessage(): boolean,
		touched(): boolean,
		touched(value: boolean): boolean,
		result(): ValidationResult
	}

	declare interface ValidationResult {
		state: any,
		failed: boolean,
		passed: boolean,
		pending: boolean,
		message: string,
		new: (state: any, message?: string) => ValidationResult
	}

	declare interface IRule {
		defaultOptions: ValidationOptions,
		test(value: any): ValidationResult
	}

	declare interface IValidationState {
		failed(): boolean,
		getName(): string,
		isApplicable(): boolean,
		message(): string,
		passed(): boolean,
		pending(): boolean,
		result(): ValidationResult,
		touched(value?: boolean): boolean
	}

	declare interface ValidatableModel<T> {
		name: (value: string) => PropertyValidationState<T>,
		end: () => T
	}

	declare interface ValidationOptions {
		applicable(): any,
		converter?: IConverter,
		entryFormat?: string,
		excludeFromSummary?: boolean,
		invalidFailureMessage?: string,
		missingFailureMessage?: string,
		name?: () => any,
		required?: () => any,
		rules?: any,
		valueFormat?: string
	}

	declare interface IConverter {
		format: (value: any, format?: string) => string,
		parse: (value: string) => any
	}

	declare interface NumericHelper {
		addThousandsSeparator(numericString: string): string,
		format(value: number, format: string): string,
		init(
		decimalSeparator: string, thousandsSeparator: string, currencySign: string, currencyMinorUnitPlaces: number
	): NumericHelper,
		isCurrencyMajor(numericString: string): boolean,
		isCurrencyMajorMinor(numericString: string): boolean,
		isFloat(numericString: string): boolean,
		isInteger(numericString: string): boolean,
		parse(numericString: string): number,
		unformat(numericString: string): string
	}

	declare interface ValidationState {
		findIn(
		model: any, includeSubModels?: boolean, recurse?: boolean, validationStates?: IValidationState[]
	): IValidationState[],
		getFor(modelOrObservableOrComputed: any): IValidationState,
		has(modelOrObservableOrComputed: any): boolean,
		setFor(modelOrObservableOrComputed: any, state: IValidationState): void
	}

	declare interface summaryItem {
		name: string,
		message: string
	}

			
}