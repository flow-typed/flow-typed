

declare module 'jquery-steps' {
		declare interface JQuery {
		JQuerySteps(param?: JQuerySteps.Settings): JQuerySteps.JQuerySteps
	}

			
}

declare module 'JQuerySteps' {
		declare export interface JQuerySteps {
		add(step: Step): JQuerySteps,
		insert(index: number, step: Step): JQuerySteps,
		remove(index: number): boolean,
		getCurrentStep(): Step,
		getCurrentIndex(): number,
		getStep(index: number): Step,
		next(): boolean,
		previous(): boolean,
		finish(): void,
		destroy(): void,
		skip(count: number): boolean
	}

	declare export interface Settings {
		headerTag?: string,
		bodyTag?: string,
		contentContainerTag?: string,
		actionContainerTag?: string,
		stepsContainerTag?: string,
		cssClass?: string,
		stepsOrientation?: string | number,
		titleTemplate?: string,
		loadingTemplate?: string,
		autoFocus?: boolean,
		enableAllSteps?: boolean,
		enableKeyNavigation?: boolean,
		enablePagination?: boolean,
		suppressPaginationOnFocus?: boolean,
		enableContentCache?: boolean,
		enableCancelButton?: boolean,
		enableFinishButton?: boolean,
		showFinishButtonAlways?: boolean,
		forceMoveForward?: boolean,
		saveState?: boolean,
		startIndex?: number,
		transitionEffect?: string | number,
		transitionEffectSpeed?: number,
		onStepChanging?: FunctionOnStepChanging,
		onStepChanged?: FunctionOnStepChanged,
		onCanceled?: FunctionOnCancelled,
		onFinishing?: FunctionOnFinishing,
		onFinished?: FunctionOnFinished,
		onInit?: FunctionOnInit,
		onContentLoaded?: FunctionOnContentLoaded,
		labels?: LabelSettings
	}

	declare interface LabelSettings {
		cancel?: string,
		current?: string,
		pagination?: string,
		finish?: string,
		next?: string,
		previous?: string,
		loading?: string
	}

	declare interface FunctionOnStepChanging {
		(event: string, currentIndex: number, newIndex: number): boolean
	}

	declare interface FunctionOnStepChanged {
		(event: string, currentIndex: number, priorIndex: number): void
	}

	declare interface FunctionOnCancelled {
		(event: string): void
	}

	declare interface FunctionOnFinishing {
		(event: string, currentIndex: number): boolean
	}

	declare interface FunctionOnFinished {
		(event: string, currentIndex: number): void
	}

	declare interface FunctionOnInit {
		(event: string, currentIndex: number): void
	}

	declare interface FunctionOnContentLoaded {
		(event: string, currentIndex: number): void
	}

	declare interface Step {
		title?: string,
		content?: string,
		contentMode?: string | number,
		contentUrl?: string
	}

			
}