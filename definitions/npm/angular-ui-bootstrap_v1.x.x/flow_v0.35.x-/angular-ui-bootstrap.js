

declare module 'angular-ui-bootstrap' {
					declare module.exports: undefined


}

declare module 'angular-bootstrap' {
					declare module.exports: undefined


}

declare module 'bootstrap' {
		declare interface IAccordionConfig {
		closeOthers?: boolean
	}

	declare interface IButtonConfig {
		activeClass?: string,
		toggleEvent?: string
	}

	declare interface IDatepickerConfig {
		formatDay?: string,
		formatMonth?: string,
		formatYear?: string,
		formatDayHeader?: string,
		formatDayTitle?: string,
		formatMonthTitle?: string,
		datepickerMode?: string,
		minMode?: string,
		maxMode?: string,
		showWeeks?: boolean,
		startingDay?: number,
		yearRange?: number,
		minDate?: any,
		maxDate?: any,
		shortcutPropagation?: boolean
	}

	declare interface IDatepickerPopupConfig {
		datepickerPopup?: string,
		datepickerPopupTemplateUrl?: string,
		datepickerTemplateUrl?: string,
		html5Types?: {
		date?: string,
		datetime-local?: string,
		month?: string
	},
		currentText?: string,
		clearText?: string,
		closeText?: string,
		closeOnDateSelection?: boolean,
		appendToBody?: boolean,
		showButtonBar?: boolean,
		onOpenFocus?: boolean
	}

	declare interface IModalProvider {
		options: IModalSettings
	}

	declare interface IModalService {
		open(options: IModalSettings): IModalServiceInstance
	}

	declare interface IModalServiceInstance {
		close(result?: any): void,
		dismiss(reason?: any): void,
		result: angular.IPromise<any>,
		opened: angular.IPromise<any>,
		rendered: angular.IPromise<any>,
		closed: angular.IPromise<any>
	}

	declare interface IModalScope {
		$dismiss(reason?: any): boolean,
		$close(result?: any): boolean
	}

	declare interface IModalSettings {
		templateUrl?: string | (() => string),
		template?: string,
		scope?: angular.IScope | IModalScope,
		controller?: string | Function | Array<string | Function>,
		controllerAs?: string,
		bindToController?: boolean,
		resolve?: {
		[key: string]: string | Function | Array<string | Function> | Object
	},
		animation?: boolean,
		backdrop?: boolean | string,
		keyboard?: boolean,
		backdropClass?: string,
		windowClass?: string,
		size?: string,
		windowTemplateUrl?: string,
		openedClass?: string,
		windowTopClass?: string,
		appendTo?: angular.IAugmentedJQuery,
		component?: string
	}

	declare interface IModalStackService {
		open(modalInstance: IModalServiceInstance, modal: any): void,
		close(modalInstance: IModalServiceInstance, result?: any): void,
		dismiss(modalInstance: IModalServiceInstance, reason?: any): void,
		dismissAll(reason?: any): void,
		getTop(): IModalStackedMapKeyValuePair
	}

	declare interface IModalStackedMapKeyValuePair {
		key: IModalServiceInstance,
		value: any
	}

	declare interface IPaginationConfig {
		totalItems?: number,
		itemsPerPage?: number,
		maxSize?: number,
		numPages?: number,
		rotate?: boolean,
		directionLinks?: boolean,
		previousText?: string,
		nextText?: string,
		boundaryLinks?: boolean,
		firstText?: string,
		lastText?: string,
		templateUrl?: string
	}

	declare interface IPagerConfig {
		align?: boolean,
		itemsPerPage?: number,
		previousText?: string,
		nextText?: string
	}

	declare interface IPositionCoordinates {
		width?: number,
		height?: number,
		top?: number,
		left?: number
	}

	declare interface IPositionService {
		position(element: JQuery): IPositionCoordinates,
		offset(element: JQuery): IPositionCoordinates
	}

	declare interface IProgressConfig {
		animate?: boolean,
		max?: number
	}

	declare interface IRatingConfig {
		max?: number,
		stateOn?: string,
		stateOff?: string,
		titles?: Array<string>
	}

	declare interface ITimepickerConfig {
		hourStep?: number,
		minuteStep?: number,
		showMeridian?: boolean,
		meridians?: Array<string>,
		readonlyInput?: boolean,
		mousewheel?: boolean,
		arrowkeys?: boolean,
		showSpinners?: boolean
	}

	declare interface ITooltipOptions {
		placement?: string,
		animation?: boolean,
		popupDelay?: number,
		appendToBody?: boolean,
		trigger?: string,
		useContentExp?: boolean
	}

	declare interface ITooltipProvider {
		options(value: ITooltipOptions): void,
		setTriggers(triggers: Object): void
	}

	declare interface ITransitionService {
		animationEndEventName: string,
		transitionEndEventName: string,
		(element: angular.IAugmentedJQuery, trigger: any, options?: ITransitionServiceOptions): angular.IPromise<angular.IAugmentedJQuery>
	}

	declare interface ITransitionServiceOptions {
		animation?: boolean
	}

			
}