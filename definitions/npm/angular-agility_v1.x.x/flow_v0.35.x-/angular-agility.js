

declare module 'angular-agility' {
					
}

declare module 'npm$namespace$aa' {
		declare export interface ILabelStrategies {
		[strategyName: string]: (
		element: ng.IAugmentedJQueryStatic, labelText: string, isRequired: boolean
	) => void
	}

	declare export interface IFieldGroupStrategies {
		[strategyName: string]: (element: ng.IAugmentedJQueryStatic) => void
	}

	declare export interface IValMsgPlacementStrategies {
		[strategyName: string]: (
		formFieldElement: ng.IAugmentedJQueryStatic, formName: string, formFieldName: string
	) => void
	}

	declare export interface IValidIconStrategy {
		validIcon: string,
		invalidIcon: string,
		getContainer(element: ng.IAugmentedJQueryStatic): void
	}

	declare export interface ISpinnerClickStrategies {
		[strategyName: string]: (element: ng.IAugmentedJQueryStatic) => void
	}

	declare export interface IOnNavigateAwayStrategies {
		[strategyName: string]: (
		rootFormScope: ng.IScope, rootForm: ng.IAugmentedJQueryStatic, $injector: ng.auto.IInjectorService
	) => void
	}

	declare export interface IValidationMessages {
		[validationKey: string]: string
	}

	declare export interface IGlobalSettings {
		[settingName: string]: any
	}

	declare export interface IFormExtensionsProvider {
		defaultLabelStrategy: string,
		defaultFieldGroupStrategy: string,
		defaultValMsgPlacementStrategy: string,
		validIconStrategy: IValidIconStrategy,
		defaultSpinnerClickStrategy: string,
		defaultNotifyTarget: string,
		defaultOnNavigateAwayStrategy: string,
		validationMessages: IValidationMessages,
		valMsgForTemplate: string,
		confirmResetStrategy: () => boolean,
		globalSettings: IGlobalSettings,
		labelStrategies: ILabelStrategies,
		fieldGroupStrategies: IFieldGroupStrategies,
		valMsgPlacementStrategies: IValMsgPlacementStrategies,
		spinnerClickStrategies: ISpinnerClickStrategies,
		onNavigateAwayStrategies: IOnNavigateAwayStrategies
	}

	declare export interface INotifyPredicate {
		(message: string, options: any, notifier: any): any
	}

	declare export interface INotifyDefaults {
		success: INotifyPredicate,
		info: INotifyPredicate,
		warning: INotifyPredicate,
		danger: INotifyPredicate,
		error: INotifyPredicate
	}

	declare export interface INotifyConfig {
		name: string,
		template?: string,
		templateName?: string,
		options: INotifyOptions,
		namedDefaults: INotifyDefaults
	}

	declare export interface INotifyOptions {
		cssClasses?: string,
		messageType: string,
		allowHtml: boolean,
		message: string
	}

	declare export interface INotifyConfigProvider {
		notifyConfigs: any,
		defaultTargetContainerName: string,
		defaultNotifyConfig: string,
		addOrUpdateNotifyConfig(name: string, opts: INotifyConfig): void,
		optionsTransformer(options: INotifyOptions, $sce: ng.ISCEService): void
	}

	declare export interface IExternalFormValidationConfig {
		validations: any,
		ignore?: any,
		globals?: any,
		resolve?: any,
		resolveFn?: (modelValue: string) => string
	}

			
}