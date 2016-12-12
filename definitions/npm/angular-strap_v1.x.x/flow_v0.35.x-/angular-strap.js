

declare module 'angular-strap' {
					
}

declare module 'modal' {
		declare interface IModalService {
		(config?: IModalOptions): IModal
	}

	declare interface IModalProvider {
		defaults: IModalOptions
	}

	declare interface IModal {
		$promise: ng.IPromise<void>,
		show: () => void,
		hide: () => void,
		toggle: () => void
	}

	declare interface IModalOptions {
		animation?: string,
		backdropAnimation?: string,
		placement?: string,
		title?: string,
		content?: string,
		html?: boolean,
		backdrop?: boolean | string,
		keyboard?: boolean,
		show?: boolean,
		container?: string | boolean,
		template?: string,
		contentTemplate?: string,
		prefixEvent?: string,
		id?: string,
		scope?: ng.IScope
	}

	declare interface IModalScope {
		$show: () => void,
		$hide: () => void,
		$toggle: () => void
	}

			
}

declare module 'aside' {
		declare interface IAsideService {
		(config?: IAsideOptions): IAside
	}

	declare interface IAsideProvider {
		defaults: IAsideOptions
	}

	declare interface IAside {
		$promise: ng.IPromise<void>,
		show: () => void,
		hide: () => void,
		toggle: () => void
	}

	declare interface IAsideOptions {
		animation?: string,
		placement?: string,
		title?: string,
		content?: string,
		html?: boolean,
		backdrop?: boolean | string,
		keyboard?: boolean,
		show?: boolean,
		container?: string | boolean,
		template?: string,
		contentTemplate?: string,
		scope?: ng.IScope
	}

	declare interface IAsideScope {
		$show: () => void,
		$hide: () => void,
		$toggle: () => void
	}

			
}

declare module 'alert' {
		declare interface IAlertService {
		(config?: IAlertOptions): IAlert
	}

	declare interface IAlertProvider {
		defaults: IAlertOptions
	}

	declare interface IAlert {
		$promise: ng.IPromise<void>,
		show: () => void,
		hide: () => void,
		toggle: () => void
	}

	declare interface IAlertOptions {
		animation?: string,
		placement?: string,
		title?: string,
		content?: string,
		type?: string,
		keyboard?: boolean,
		show?: boolean,
		container?: string | boolean,
		template?: string,
		duration?: number | boolean,
		dismissable?: boolean
	}

	declare interface IAlertScope {
		$show: () => void,
		$hide: () => void,
		$toggle: () => void
	}

			
}

declare module 'tooltip' {
		declare interface ITooltipService {
		(element: ng.IAugmentedJQuery, config?: ITooltipOptions): ITooltip
	}

	declare interface ITooltipProvider {
		defaults: ITooltipOptions
	}

	declare interface ITooltip {
		$promise: ng.IPromise<void>,
		show: () => void,
		hide: () => void,
		toggle: () => void
	}

	declare interface ITooltipOptions {
		animation?: string,
		placement?: string,
		trigger?: string,
		title?: string,
		html?: boolean,
		delay?: number | {
		show: number,
		hide: number
	},
		container?: string | boolean,
		target?: string | ng.IAugmentedJQuery | boolean,
		template?: string,
		contentTemplate?: string,
		prefixEvent?: string,
		id?: string,
		viewport?: string | {
		selector: string,
		padding: string | number
	}
	}

	declare interface ITooltipScope {
		$show: () => void,
		$hide: () => void,
		$toggle: () => void,
		$setEnabled: (isEnabled: boolean) => void
	}

			
}

declare module 'popover' {
		declare interface IPopoverService {
		(element: ng.IAugmentedJQuery, config?: IPopoverOptions): IPopover
	}

	declare interface IPopoverProvider {
		defaults: IPopoverOptions
	}

	declare interface IPopover {
		$promise: ng.IPromise<void>,
		show: () => void,
		hide: () => void,
		toggle: () => void
	}

	declare interface IPopoverOptions {
		animation?: string,
		placement?: string,
		trigger?: string,
		title?: string,
		content?: string,
		html?: boolean,
		delay?: number | {
		show: number,
		hide: number
	},
		container?: string | boolean,
		target?: string | ng.IAugmentedJQuery | boolean,
		template?: string,
		contentTemplate?: string,
		autoClose?: boolean,
		id?: string,
		viewport?: string | {
		selector: string,
		padding: string | number
	}
	}

	declare interface IPopoverScope {
		$show: () => void,
		$hide: () => void,
		$toggle: () => void
	}

			
}

declare module 'typeahead' {
		declare interface ITypeaheadService {
		(element: ng.IAugmentedJQuery, controller: any, config?: ITypeaheadOptions): ITypeahead
	}

	declare interface ITypeaheadProvider {
		defaults: ITypeaheadOptions
	}

	declare interface ITypeahead {
		$promise: ng.IPromise<void>,
		show: () => void,
		hide: () => void,
		toggle: () => void
	}

	declare interface ITypeaheadOptions {
		animation?: string,
		placement?: string,
		trigger?: string,
		html?: boolean,
		delay?: number | {
		show: number,
		hide: number
	},
		container?: string | boolean,
		template?: string,
		limit?: number,
		minLength?: number,
		autoSelect?: boolean,
		comparator?: string,
		id?: string,
		watchOptions?: boolean
	}

			
}

declare module 'datepicker' {
		declare interface IDatepickerService {
		(element: ng.IAugmentedJQuery, controller: any, config?: IDatepickerOptions): IDatepicker
	}

	declare interface IDatepickerProvider {
		defaults: IDatepickerOptions
	}

	declare interface IDatepicker {
		update: (date: Date) => void,
		updateDisabledDates: (dateRanges: IDatepickerDateRange[]) => void,
		select: (dateConstructorArg: string | number | number[], keep: boolean) => void,
		setMode: (mode: any) => void,
		int: () => void,
		destroy: () => void,
		show: () => void,
		hide: () => void
	}

	declare interface IDatepickerDateRange {
		start: Date,
		end: Date
	}

	declare interface IDatepickerOptions {
		animation?: string,
		placement?: string,
		trigger?: string,
		html?: boolean,
		delay?: number | {
		show: number,
		hide: number
	},
		container?: string | boolean,
		template?: string,
		dateFormat?: string,
		modelDateFormat?: string,
		dateType?: string,
		timezone?: string,
		autoclose?: boolean,
		useNative?: boolean,
		minDate?: Date,
		maxDate?: Date,
		startView?: number,
		minView?: number,
		startWeek?: number,
		startDate?: Date,
		iconLeft?: string,
		iconRight?: string,
		daysOfWeekDisabled?: string,
		disabledDates?: IDatepickerDateRange[]
	}

			
}

declare module 'timepicker' {
		declare interface ITimepickerService {
		(element: ng.IAugmentedJQuery, controller: any, config?: ITimepickerOptions): ITimepicker
	}

	declare interface ITimepickerProvider {
		defaults: ITimepickerOptions
	}

	declare interface ITimepicker {
		
	}

	declare interface ITimepickerOptions {
		animation?: string,
		placement?: string,
		trigger?: string,
		html?: boolean,
		delay?: number | {
		show: number,
		hide: number
	},
		container?: string | boolean,
		template?: string,
		timeFormat?: string,
		modelTimeFormat?: string,
		timeType?: string,
		autoclose?: boolean,
		useNative?: boolean,
		minTime?: Date,
		maxTime?: Date,
		length?: number,
		hourStep?: number,
		minuteStep?: number,
		secondStep?: number,
		roundDisplay?: boolean,
		iconUp?: string,
		iconDown?: string,
		arrowBehaviour?: string
	}

			
}

declare module 'select' {
		declare interface ISelectService {
		(element: ng.IAugmentedJQuery, controller: any, config: ISelectOptions): ISelect
	}

	declare interface ISelectProvider {
		defaults: ISelectOptions
	}

	declare interface ISelect {
		update: (matches: any) => void,
		active: (index: number) => number,
		select: (index: number) => void,
		show: () => void,
		hide: () => void
	}

	declare interface ISelectOptions {
		animation?: string,
		placement?: string,
		trigger?: string,
		html?: boolean,
		delay?: number | {
		show: number,
		hide: number
	},
		container?: string | boolean,
		template?: string,
		multiple?: boolean,
		allNoneButtons?: boolean,
		allText?: string,
		noneText?: string,
		maxLength?: number,
		maxLengthHtml?: string,
		sort?: boolean,
		placeholder?: string,
		iconCheckmark?: string,
		id?: string
	}

			
}

declare module 'tab' {
		declare interface ITabProvider {
		defaults: ITabOptions
	}

	declare interface ITabService {
		defaults: ITabOptions,
		controller: any
	}

	declare interface ITabOptions {
		animation?: string,
		template?: string,
		navClass?: string,
		activeClass?: string
	}

			
}

declare module 'collapse' {
		declare interface ICollapseProvider {
		defaults: ICollapseOptions
	}

	declare interface ICollapseOptions {
		animation?: string,
		activeClass?: string,
		disallowToggle?: boolean,
		startCollapsed?: boolean,
		allowMultiple?: boolean
	}

			
}

declare module 'dropdown' {
		declare interface IDropdownProvider {
		defaults: IDropdownOptions
	}

	declare interface IDropdownService {
		(element: ng.IAugmentedJQuery, config: IDropdownOptions): IDropdown
	}

	declare interface IDropdown {
		show: () => void,
		hide: () => void,
		destroy: () => void
	}

	declare interface IDropdownOptions {
		animation?: string,
		placement?: string,
		trigger?: string,
		html?: boolean,
		delay?: number | {
		show: number,
		hide: number
	},
		container?: string | boolean,
		template?: string
	}

			
}

declare module 'navbar' {
		declare interface INavbarProvider {
		defaults: INavbarOptions
	}

	declare interface INavbarOptions {
		activeClass?: string,
		routeAttr?: string
	}

	declare interface INavbarService {
		defaults: INavbarOptions
	}

			
}

declare module 'scrollspy' {
		declare interface IScrollspyProvider {
		defaults: IScrollspyOptions
	}

	declare interface IScrollspyService {
		(element: ng.IAugmentedJQuery, options: IScrollspyOptions): IScrollspy
	}

	declare interface IScrollspy {
		checkOffsets: () => void,
		trackElement: (target: any, source: any) => void,
		untrackElement: (target: any, source: any) => void,
		activate: (index: number) => void
	}

	declare interface IScrollspyOptions {
		target?: string,
		offset?: number
	}

			
}

declare module 'affix' {
		declare interface IAffixProvider {
		defaults: IAffixOptions
	}

	declare interface IAffixService {
		(element: ng.IAugmentedJQuery, options: IAffixOptions): IAffix
	}

	declare interface IAffix {
		init: () => void,
		destroy: () => void,
		checkPositionWithEventLoop: () => void,
		checkPosition: () => void
	}

	declare interface IAffixOptions {
		offsetTop?: number,
		offsetBottom?: number,
		offsetParent?: number,
		offsetUnpin?: number
	}

			
}