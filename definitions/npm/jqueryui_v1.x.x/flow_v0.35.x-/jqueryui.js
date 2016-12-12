

declare module 'jqueryui' {
		declare interface JQuery {
		accordion(): JQuery,
		accordion(methodName: "destroy"): void,
		accordion(methodName: "disable"): void,
		accordion(methodName: "enable"): void,
		accordion(methodName: "refresh"): void,
		accordion(methodName: "widget"): JQuery,
		accordion(methodName: string): JQuery,
		accordion(options: JQueryUI.AccordionOptions): JQuery,
		accordion(optionLiteral: string, optionName: string): any,
		accordion(optionLiteral: string, options: JQueryUI.AccordionOptions): any,
		accordion(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		autocomplete(): JQuery,
		autocomplete(methodName: "close"): void,
		autocomplete(methodName: "destroy"): void,
		autocomplete(methodName: "disable"): void,
		autocomplete(methodName: "enable"): void,
		autocomplete(methodName: "search", value?: string): void,
		autocomplete(methodName: "widget"): JQuery,
		autocomplete(methodName: string): JQuery,
		autocomplete(options: JQueryUI.AutocompleteOptions): JQuery,
		autocomplete(optionLiteral: string, optionName: string): any,
		autocomplete(optionLiteral: string, options: JQueryUI.AutocompleteOptions): any,
		autocomplete(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		button(): JQuery,
		button(methodName: "destroy"): void,
		button(methodName: "disable"): void,
		button(methodName: "enable"): void,
		button(methodName: "refresh"): void,
		button(methodName: "widget"): JQuery,
		button(methodName: string): JQuery,
		button(options: JQueryUI.ButtonOptions): JQuery,
		button(optionLiteral: string, optionName: string): any,
		button(optionLiteral: string, options: JQueryUI.ButtonOptions): any,
		button(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		buttonset(): JQuery,
		buttonset(methodName: "destroy"): void,
		buttonset(methodName: "disable"): void,
		buttonset(methodName: "enable"): void,
		buttonset(methodName: "refresh"): void,
		buttonset(methodName: "widget"): JQuery,
		buttonset(methodName: string): JQuery,
		buttonset(options: JQueryUI.ButtonOptions): JQuery,
		buttonset(optionLiteral: string, optionName: string): any,
		buttonset(optionLiteral: string, options: JQueryUI.ButtonOptions): any,
		buttonset(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		datepicker(): JQuery,
		datepicker(methodName: "destroy"): JQuery,
		datepicker(
		methodName: "dialog", date: Date, onSelect?: () => void, settings?: JQueryUI.DatepickerOptions, pos?: number[]
	): JQuery,
		datepicker(
		methodName: "dialog", date: Date, onSelect?: () => void, settings?: JQueryUI.DatepickerOptions, pos?: MouseEvent
	): JQuery,
		datepicker(
		methodName: "dialog", date: string, onSelect?: () => void, settings?: JQueryUI.DatepickerOptions, pos?: number[]
	): JQuery,
		datepicker(
		methodName: "dialog", date: string, onSelect?: () => void, settings?: JQueryUI.DatepickerOptions, pos?: MouseEvent
	): JQuery,
		datepicker(methodName: "getDate"): Date,
		datepicker(methodName: "hide"): JQuery,
		datepicker(methodName: "isDisabled"): boolean,
		datepicker(methodName: "refresh"): JQuery,
		datepicker(methodName: "setDate", date: Date): JQuery,
		datepicker(methodName: "setDate", date: string): JQuery,
		datepicker(methodName: "show"): JQuery,
		datepicker(methodName: "widget"): JQuery,
		datepicker(methodName: "option", optionName: "altField"): any,
		datepicker(methodName: "option", optionName: "altField", altFieldValue: string): JQuery,
		datepicker(methodName: "option", optionName: "altField", altFieldValue: JQuery): JQuery,
		datepicker(methodName: "option", optionName: "altField", altFieldValue: Element): JQuery,
		datepicker(methodName: "option", optionName: "altFormat"): string,
		datepicker(methodName: "option", optionName: "altFormat", altFormatValue: string): JQuery,
		datepicker(methodName: "option", optionName: "appendText"): string,
		datepicker(
		methodName: "option", optionName: "appendText", appendTextValue: string
	): JQuery,
		datepicker(methodName: "option", optionName: "autoSize"): boolean,
		datepicker(methodName: "option", optionName: "autoSize", autoSizeValue: boolean): JQuery,
		datepicker(
		methodName: "option", optionName: "beforeShow"
	): (input: Element, inst: any) => JQueryUI.DatepickerOptions,
		datepicker(
		methodName: "option", optionName: "beforeShow", beforeShowValue: (input: Element, inst: any) => JQueryUI.DatepickerOptions
	): JQuery,
		datepicker(methodName: "option", optionName: "beforeShowDay"): (date: Date) => any[],
		datepicker(
		methodName: "option", optionName: "beforeShowDay", beforeShowDayValue: (date: Date) => any[]
	): JQuery,
		datepicker(methodName: "option", optionName: "buttonImage"): string,
		datepicker(
		methodName: "option", optionName: "buttonImage", buttonImageValue: string
	): JQuery,
		datepicker(methodName: "option", optionName: "buttonImageOnly"): boolean,
		datepicker(
		methodName: "option", optionName: "buttonImageOnly", buttonImageOnlyValue: boolean
	): JQuery,
		datepicker(methodName: "option", optionName: "buttonText"): string,
		datepicker(
		methodName: "option", optionName: "buttonText", buttonTextValue: string
	): JQuery,
		datepicker(methodName: "option", optionName: "calculateWeek"): (date: Date) => string,
		datepicker(
		methodName: "option", optionName: "calculateWeek", calculateWeekValue: (date: Date) => string
	): JQuery,
		datepicker(methodName: "option", optionName: "changeMonth"): boolean,
		datepicker(
		methodName: "option", optionName: "changeMonth", changeMonthValue: boolean
	): JQuery,
		datepicker(methodName: "option", optionName: "changeYear"): boolean,
		datepicker(
		methodName: "option", optionName: "changeYear", changeYearValue: boolean
	): JQuery,
		datepicker(methodName: "option", optionName: "closeText"): string,
		datepicker(methodName: "option", optionName: "closeText", closeTextValue: string): JQuery,
		datepicker(methodName: "option", optionName: "constrainInput"): boolean,
		datepicker(
		methodName: "option", optionName: "constrainInput", constrainInputValue: boolean
	): JQuery,
		datepicker(methodName: "option", optionName: "currentText"): string,
		datepicker(
		methodName: "option", optionName: "currentText", currentTextValue: string
	): JQuery,
		datepicker(methodName: "option", optionName: "dateFormat"): string,
		datepicker(
		methodName: "option", optionName: "dateFormat", dateFormatValue: string
	): JQuery,
		datepicker(methodName: "option", optionName: "dayNames"): string[],
		datepicker(methodName: "option", optionName: "dayNames", dayNamesValue: string[]): JQuery,
		datepicker(methodName: "option", optionName: "dayNamesMin"): string[],
		datepicker(
		methodName: "option", optionName: "dayNamesMin", dayNamesMinValue: string[]
	): JQuery,
		datepicker(methodName: "option", optionName: "dayNamesShort"): string[],
		datepicker(
		methodName: "option", optionName: "dayNamesShort", dayNamesShortValue: string[]
	): JQuery,
		datepicker(methodName: "option", optionName: "defaultDate"): any,
		datepicker(
		methodName: "option", optionName: "defaultDate", defaultDateValue: Date
	): JQuery,
		datepicker(
		methodName: "option", optionName: "defaultDate", defaultDateValue: number
	): JQuery,
		datepicker(
		methodName: "option", optionName: "defaultDate", defaultDateValue: string
	): JQuery,
		datepicker(methodName: "option", optionName: "duration"): string,
		datepicker(methodName: "option", optionName: "duration", durationValue: string): JQuery,
		datepicker(methodName: "option", optionName: "firstDay"): number,
		datepicker(methodName: "option", optionName: "firstDay", firstDayValue: number): JQuery,
		datepicker(methodName: "option", optionName: "gotoCurrent"): boolean,
		datepicker(
		methodName: "option", optionName: "gotoCurrent", gotoCurrentValue: boolean
	): JQuery,
		datepicker(methodName: "option", optionName: string): any,
		datepicker(methodName: "option", optionName: string, ...otherParams: any[]): any,
		datepicker(methodName: string, ...otherParams: any[]): any,
		datepicker(options: JQueryUI.DatepickerOptions): JQuery,
		dialog(): JQuery,
		dialog(methodName: "close"): JQuery,
		dialog(methodName: "destroy"): JQuery,
		dialog(methodName: "isOpen"): boolean,
		dialog(methodName: "moveToTop"): JQuery,
		dialog(methodName: "open"): JQuery,
		dialog(methodName: "widget"): JQuery,
		dialog(methodName: string): JQuery,
		dialog(options: JQueryUI.DialogOptions): JQuery,
		dialog(optionLiteral: string, optionName: string): any,
		dialog(optionLiteral: string, options: JQueryUI.DialogOptions): any,
		dialog(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		draggable(): JQuery,
		draggable(methodName: "destroy"): void,
		draggable(methodName: "disable"): void,
		draggable(methodName: "enable"): void,
		draggable(methodName: "widget"): JQuery,
		draggable(methodName: string): JQuery,
		draggable(options: JQueryUI.DraggableOptions): JQuery,
		draggable(optionLiteral: string, optionName: string): any,
		draggable(optionLiteral: string, options: JQueryUI.DraggableOptions): any,
		draggable(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		droppable(): JQuery,
		droppable(methodName: "destroy"): void,
		droppable(methodName: "disable"): void,
		droppable(methodName: "enable"): void,
		droppable(methodName: "widget"): JQuery,
		droppable(methodName: string): JQuery,
		droppable(options: JQueryUI.DroppableOptions): JQuery,
		droppable(optionLiteral: string, optionName: string): any,
		droppable(optionLiteral: string, options: JQueryUI.DraggableOptions): any,
		droppable(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		menu: {
		(): JQuery,
		(methodName: "blur"): void,
		(methodName: "collapse", event?: JQueryEventObject): void,
		(methodName: "collapseAll", event?: JQueryEventObject, all?: boolean): void,
		(methodName: "destroy"): void,
		(methodName: "disable"): void,
		(methodName: "enable"): void,
		(methodName: string, event: JQueryEventObject, item: JQuery): void,
		(methodName: "focus", event: JQueryEventObject, item: JQuery): void,
		(methodName: "isFirstItem"): boolean,
		(methodName: "isLastItem"): boolean,
		(methodName: "next", event?: JQueryEventObject): void,
		(methodName: "nextPage", event?: JQueryEventObject): void,
		(methodName: "previous", event?: JQueryEventObject): void,
		(methodName: "previousPage", event?: JQueryEventObject): void,
		(methodName: "refresh"): void,
		(methodName: "select", event?: JQueryEventObject): void,
		(methodName: "widget"): JQuery,
		(methodName: string): JQuery,
		(options: JQueryUI.MenuOptions): JQuery,
		(optionLiteral: string, optionName: string): any,
		(optionLiteral: string, options: JQueryUI.MenuOptions): any,
		(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		active: boolean
	},
		progressbar(): JQuery,
		progressbar(methodName: "destroy"): void,
		progressbar(methodName: "disable"): void,
		progressbar(methodName: "enable"): void,
		progressbar(methodName: "refresh"): void,
		progressbar(methodName: "value"): any,
		progressbar(methodName: "value", value: number): void,
		progressbar(methodName: "value", value: boolean): void,
		progressbar(methodName: "widget"): JQuery,
		progressbar(methodName: string): JQuery,
		progressbar(options: JQueryUI.ProgressbarOptions): JQuery,
		progressbar(optionLiteral: string, optionName: string): any,
		progressbar(optionLiteral: string, options: JQueryUI.ProgressbarOptions): any,
		progressbar(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		resizable(): JQuery,
		resizable(methodName: "destroy"): void,
		resizable(methodName: "disable"): void,
		resizable(methodName: "enable"): void,
		resizable(methodName: "widget"): JQuery,
		resizable(methodName: string): JQuery,
		resizable(options: JQueryUI.ResizableOptions): JQuery,
		resizable(optionLiteral: string, optionName: string): any,
		resizable(optionLiteral: string, options: JQueryUI.ResizableOptions): any,
		resizable(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		selectable(): JQuery,
		selectable(methodName: "destroy"): void,
		selectable(methodName: "disable"): void,
		selectable(methodName: "enable"): void,
		selectable(methodName: "widget"): JQuery,
		selectable(methodName: string): JQuery,
		selectable(options: JQueryUI.SelectableOptions): JQuery,
		selectable(optionLiteral: string, optionName: string): any,
		selectable(optionLiteral: string, options: JQueryUI.SelectableOptions): any,
		selectable(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		selectmenu(): JQuery,
		selectmenu(methodName: "close"): JQuery,
		selectmenu(methodName: "destroy"): JQuery,
		selectmenu(methodName: "disable"): JQuery,
		selectmenu(methodName: "enable"): JQuery,
		selectmenu(methodName: "instance"): any,
		selectmenu(methodName: "menuWidget"): JQuery,
		selectmenu(methodName: "open"): JQuery,
		selectmenu(methodName: "refresh"): JQuery,
		selectmenu(methodName: "widget"): JQuery,
		selectmenu(methodName: string): JQuery,
		selectmenu(options: JQueryUI.SelectMenuOptions): JQuery,
		selectmenu(optionLiteral: string, optionName: string): any,
		selectmenu(optionLiteral: string, options: JQueryUI.SelectMenuOptions): any,
		selectmenu(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		slider(): JQuery,
		slider(methodName: "destroy"): void,
		slider(methodName: "disable"): void,
		slider(methodName: "enable"): void,
		slider(methodName: "refresh"): void,
		slider(methodName: "value"): number,
		slider(methodName: "value", value: number): void,
		slider(methodName: "values"): Array<number>,
		slider(methodName: "values", index: number): number,
		slider(methodName: string, index: number, value: number): void,
		slider(methodName: "values", index: number, value: number): void,
		slider(methodName: string, values: Array<number>): void,
		slider(methodName: "values", values: Array<number>): void,
		slider(methodName: "widget"): JQuery,
		slider(methodName: string): JQuery,
		slider(options: JQueryUI.SliderOptions): JQuery,
		slider(optionLiteral: string, optionName: string): any,
		slider(optionLiteral: string, options: JQueryUI.SliderOptions): any,
		slider(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		sortable(): JQuery,
		sortable(methodName: "destroy"): void,
		sortable(methodName: "disable"): void,
		sortable(methodName: "enable"): void,
		sortable(methodName: "widget"): JQuery,
		sortable(methodName: "toArray"): string[],
		sortable(methodName: string): JQuery,
		sortable(options: JQueryUI.SortableOptions): JQuery,
		sortable(optionLiteral: string, optionName: string): any,
		sortable(
		methodName: "serialize", options?: {
		key?: string,
		attribute?: string,
		expression?: RegExp
	}
	): string,
		sortable(optionLiteral: string, options: JQueryUI.SortableOptions): any,
		sortable(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		spinner(): JQuery,
		spinner(methodName: "destroy"): void,
		spinner(methodName: "disable"): void,
		spinner(methodName: "enable"): void,
		spinner(methodName: "pageDown", pages?: number): void,
		spinner(methodName: "pageUp", pages?: number): void,
		spinner(methodName: "stepDown", steps?: number): void,
		spinner(methodName: "stepUp", steps?: number): void,
		spinner(methodName: "value"): number,
		spinner(methodName: "value", value: number): void,
		spinner(methodName: "widget"): JQuery,
		spinner(methodName: string): JQuery,
		spinner(options: JQueryUI.SpinnerOptions): JQuery,
		spinner(optionLiteral: string, optionName: string): any,
		spinner(optionLiteral: string, options: JQueryUI.SpinnerOptions): any,
		spinner(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		tabs(): JQuery,
		tabs(methodName: "destroy"): void,
		tabs(methodName: "disable"): void,
		tabs(methodName: "enable"): void,
		tabs(methodName: "load", index: number): void,
		tabs(methodName: "refresh"): void,
		tabs(methodName: "widget"): JQuery,
		tabs(methodName: string): JQuery,
		tabs(options: JQueryUI.TabsOptions): JQuery,
		tabs(optionLiteral: string, optionName: string): any,
		tabs(optionLiteral: string, options: JQueryUI.TabsOptions): any,
		tabs(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		tooltip(): JQuery,
		tooltip(methodName: "destroy"): void,
		tooltip(methodName: "disable"): void,
		tooltip(methodName: "enable"): void,
		tooltip(methodName: "open"): void,
		tooltip(methodName: "close"): void,
		tooltip(methodName: "widget"): JQuery,
		tooltip(methodName: string): JQuery,
		tooltip(options: JQueryUI.TooltipOptions): JQuery,
		tooltip(optionLiteral: string, optionName: string): any,
		tooltip(optionLiteral: string, options: JQueryUI.TooltipOptions): any,
		tooltip(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		addClass(classNames: string, speed?: number, callback?: Function): JQuery,
		addClass(classNames: string, speed?: string, callback?: Function): JQuery,
		addClass(
		classNames: string, speed?: number, easing?: string, callback?: Function
	): JQuery,
		addClass(
		classNames: string, speed?: string, easing?: string, callback?: Function
	): JQuery,
		removeClass(classNames: string, speed?: number, callback?: Function): JQuery,
		removeClass(classNames: string, speed?: string, callback?: Function): JQuery,
		removeClass(
		classNames: string, speed?: number, easing?: string, callback?: Function
	): JQuery,
		removeClass(
		classNames: string, speed?: string, easing?: string, callback?: Function
	): JQuery,
		switchClass(
		removeClassName: string, addClassName: string, duration?: number, easing?: string, complete?: Function
	): JQuery,
		switchClass(
		removeClassName: string, addClassName: string, duration?: string, easing?: string, complete?: Function
	): JQuery,
		toggleClass(
		className: string, duration?: number, easing?: string, complete?: Function
	): JQuery,
		toggleClass(
		className: string, duration?: string, easing?: string, complete?: Function
	): JQuery,
		toggleClass(
		className: string, aswitch?: boolean, duration?: number, easing?: string, complete?: Function
	): JQuery,
		toggleClass(
		className: string, aswitch?: boolean, duration?: string, easing?: string, complete?: Function
	): JQuery,
		effect(options: any): JQuery,
		effect(effect: string, options?: any, duration?: number, complete?: Function): JQuery,
		effect(effect: string, options?: any, duration?: string, complete?: Function): JQuery,
		hide(options: any): JQuery,
		hide(effect: string, options?: any, duration?: number, complete?: Function): JQuery,
		hide(effect: string, options?: any, duration?: string, complete?: Function): JQuery,
		show(options: any): JQuery,
		show(effect: string, options?: any, duration?: number, complete?: Function): JQuery,
		show(effect: string, options?: any, duration?: string, complete?: Function): JQuery,
		toggle(options: any): JQuery,
		toggle(effect: string, options?: any, duration?: number, complete?: Function): JQuery,
		toggle(effect: string, options?: any, duration?: string, complete?: Function): JQuery,
		position(options: JQueryUI.JQueryPositionOptions): JQuery,
		enableSelection(): JQuery,
		disableSelection(): JQuery,
		focus(delay: number, callback?: Function): JQuery,
		uniqueId(): JQuery,
		removeUniqueId(): JQuery,
		scrollParent(): JQuery,
		zIndex(): number,
		zIndex(zIndex: number): JQuery,
		widget: JQueryUI.Widget,
		jQuery: JQueryStatic
	}

	declare interface JQueryStatic {
		ui: JQueryUI.UI,
		datepicker: JQueryUI.Datepicker,
		widget: JQueryUI.Widget,
		Widget: JQueryUI.Widget
	}

	declare interface JQueryEasingFunctions {
		easeInQuad: JQueryEasingFunction,
		easeOutQuad: JQueryEasingFunction,
		easeInOutQuad: JQueryEasingFunction,
		easeInCubic: JQueryEasingFunction,
		easeOutCubic: JQueryEasingFunction,
		easeInOutCubic: JQueryEasingFunction,
		easeInQuart: JQueryEasingFunction,
		easeOutQuart: JQueryEasingFunction,
		easeInOutQuart: JQueryEasingFunction,
		easeInQuint: JQueryEasingFunction,
		easeOutQuint: JQueryEasingFunction,
		easeInOutQuint: JQueryEasingFunction,
		easeInExpo: JQueryEasingFunction,
		easeOutExpo: JQueryEasingFunction,
		easeInOutExpo: JQueryEasingFunction,
		easeInSine: JQueryEasingFunction,
		easeOutSine: JQueryEasingFunction,
		easeInOutSine: JQueryEasingFunction,
		easeInCirc: JQueryEasingFunction,
		easeOutCirc: JQueryEasingFunction,
		easeInOutCirc: JQueryEasingFunction,
		easeInElastic: JQueryEasingFunction,
		easeOutElastic: JQueryEasingFunction,
		easeInOutElastic: JQueryEasingFunction,
		easeInBack: JQueryEasingFunction,
		easeOutBack: JQueryEasingFunction,
		easeInOutBack: JQueryEasingFunction,
		easeInBounce: JQueryEasingFunction,
		easeOutBounce: JQueryEasingFunction,
		easeInOutBounce: JQueryEasingFunction
	}

			
}

declare module 'npm$namespace$JQueryUI' {
		declare interface AccordionOptions {
		active?: any,
		animate?: any,
		collapsible?: boolean,
		disabled?: boolean,
		event?: string,
		header?: string,
		heightStyle?: string,
		icons?: any
	}

	declare interface AccordionUIParams {
		newHeader: JQuery,
		oldHeader: JQuery,
		newPanel: JQuery,
		oldPanel: JQuery
	}

	declare interface AccordionEvent {
		(event: Event, ui: AccordionUIParams): void
	}

	declare interface AccordionEvents {
		activate?: AccordionEvent,
		beforeActivate?: AccordionEvent,
		create?: AccordionEvent
	}

	declare interface Accordion {
		
	}

	declare interface AutocompleteOptions {
		appendTo?: any,
		autoFocus?: boolean,
		delay?: number,
		disabled?: boolean,
		minLength?: number,
		position?: any,
		source?: any
	}

	declare interface AutocompleteUIParams {
		item?: any
	}

	declare interface AutocompleteEvent {
		(event: Event, ui: AutocompleteUIParams): void
	}

	declare interface AutocompleteEvents {
		change?: AutocompleteEvent,
		close?: AutocompleteEvent,
		create?: AutocompleteEvent,
		focus?: AutocompleteEvent,
		open?: AutocompleteEvent,
		response?: AutocompleteEvent,
		search?: AutocompleteEvent,
		select?: AutocompleteEvent
	}

	declare interface Autocomplete {
		escapeRegex: (value: string) => string,
		filter: (array: any, term: string) => any
	}

	declare interface ButtonOptions {
		disabled?: boolean,
		icons?: any,
		label?: string,
		text?: string | boolean,
		click?: (event?: Event) => void
	}

	declare interface Button {
		
	}

	declare interface DatepickerOptions {
		altField?: any,
		altFormat?: string,
		appendText?: string,
		autoSize?: boolean,
		beforeShow?: (input: Element, inst: any) => JQueryUI.DatepickerOptions,
		beforeShowDay?: (date: Date) => any[],
		buttonImage?: string,
		buttonImageOnly?: boolean,
		buttonText?: string,
		calculateWeek?: (date: Date) => string,
		changeMonth?: boolean,
		changeYear?: boolean,
		closeText?: string,
		constrainInput?: boolean,
		currentText?: string,
		dateFormat?: string,
		dayNames?: string[],
		dayNamesMin?: string[],
		dayNamesShort?: string[],
		defaultDate?: any,
		duration?: string,
		firstDay?: number,
		gotoCurrent?: boolean,
		hideIfNoPrevNext?: boolean,
		isRTL?: boolean,
		maxDate?: any,
		minDate?: any,
		monthNames?: string[],
		monthNamesShort?: string[],
		navigationAsDateFormat?: boolean,
		nextText?: string,
		numberOfMonths?: any,
		onChangeMonthYear?: (year: number, month: number, inst: any) => void,
		onClose?: (dateText: string, inst: any) => void,
		onSelect?: (dateText: string, inst: any) => void,
		prevText?: string,
		selectOtherMonths?: boolean,
		shortYearCutoff?: any,
		showAnim?: string,
		showButtonPanel?: boolean,
		showCurrentAtPos?: number,
		showMonthAfterYear?: boolean,
		showOn?: string,
		showOptions?: any,
		showOtherMonths?: boolean,
		showWeek?: boolean,
		stepMonths?: number,
		weekHeader?: string,
		yearRange?: string,
		yearSuffix?: string
	}

	declare interface DatepickerFormatDateOptions {
		dayNamesShort?: string[],
		dayNames?: string[],
		monthNamesShort?: string[],
		monthNames?: string[]
	}

	declare interface Datepicker {
		regional: {
		[languageCod3: string]: any
	},
		setDefaults(defaults: DatepickerOptions): void,
		formatDate(format: string, date: Date, settings?: DatepickerFormatDateOptions): string,
		parseDate(format: string, date: string, settings?: DatepickerFormatDateOptions): Date,
		iso8601Week(date: Date): number,
		noWeekends(date: Date): any[]
	}

	declare interface DialogOptions {
		autoOpen?: boolean,
		buttons?: {
		[buttonText: string]: (event?: Event) => void
	} | DialogButtonOptions[],
		closeOnEscape?: boolean,
		closeText?: string,
		appendTo?: string,
		dialogClass?: string,
		disabled?: boolean,
		draggable?: boolean,
		height?: number | string,
		hide?: boolean | number | string | DialogShowHideOptions,
		maxHeight?: number,
		maxWidth?: number,
		minHeight?: number,
		minWidth?: number,
		modal?: boolean,
		position?: any,
		resizable?: boolean,
		show?: boolean | number | string | DialogShowHideOptions,
		stack?: boolean,
		title?: string,
		width?: any,
		zIndex?: number,
		open?: DialogEvent,
		close?: DialogEvent
	}

	declare interface DialogButtonOptions {
		icons?: any,
		showText?: string | boolean,
		text?: string,
		click?: (eventObject: JQueryEventObject) => any,
		[attr: string]: any
	}

	declare interface DialogShowHideOptions {
		effect: string,
		delay?: number,
		duration?: number,
		easing?: string
	}

	declare interface DialogUIParams {
		
	}

	declare interface DialogEvent {
		(event: Event, ui: DialogUIParams): void
	}

	declare interface DialogEvents {
		beforeClose?: DialogEvent,
		close?: DialogEvent,
		create?: DialogEvent,
		drag?: DialogEvent,
		dragStart?: DialogEvent,
		dragStop?: DialogEvent,
		focus?: DialogEvent,
		open?: DialogEvent,
		resize?: DialogEvent,
		resizeStart?: DialogEvent,
		resizeStop?: DialogEvent
	}

	declare interface Dialog {
		
	}

	declare interface DraggableEventUIParams {
		helper: JQuery,
		position: {
		top: number,
		left: number
	},
		offset: {
		top: number,
		left: number
	}
	}

	declare interface DraggableEvent {
		(event: Event, ui: DraggableEventUIParams): void
	}

	declare interface DraggableOptions {
		disabled?: boolean,
		addClasses?: boolean,
		appendTo?: any,
		axis?: string,
		cancel?: string,
		connectToSortable?: Element | Element[] | JQuery | string,
		containment?: any,
		cursor?: string,
		cursorAt?: any,
		delay?: number,
		distance?: number,
		grid?: number[],
		handle?: any,
		helper?: any,
		iframeFix?: any,
		opacity?: number,
		refreshPositions?: boolean,
		revert?: any,
		revertDuration?: number,
		scope?: string,
		scroll?: boolean,
		scrollSensitivity?: number,
		scrollSpeed?: number,
		snap?: any,
		snapMode?: string,
		snapTolerance?: number,
		stack?: string,
		zIndex?: number
	}

	declare interface DraggableEvents {
		create?: DraggableEvent,
		start?: DraggableEvent,
		drag?: DraggableEvent,
		stop?: DraggableEvent
	}

	declare interface Draggable {
		
	}

	declare interface DroppableEventUIParam {
		draggable: JQuery,
		helper: JQuery,
		position: {
		top: number,
		left: number
	},
		offset: {
		top: number,
		left: number
	}
	}

	declare interface DroppableEvent {
		(event: Event, ui: DroppableEventUIParam): void
	}

	declare interface DroppableOptions {
		accept?: any,
		activeClass?: string,
		addClasses?: boolean,
		disabled?: boolean,
		greedy?: boolean,
		hoverClass?: string,
		scope?: string,
		tolerance?: string
	}

	declare interface DroppableEvents {
		create?: DroppableEvent,
		activate?: DroppableEvent,
		deactivate?: DroppableEvent,
		over?: DroppableEvent,
		out?: DroppableEvent,
		drop?: DroppableEvent
	}

	declare interface Droppable {
		
	}

	declare interface MenuOptions {
		disabled?: boolean,
		icons?: any,
		menus?: string,
		position?: any,
		role?: string
	}

	declare interface MenuUIParams {
		item?: JQuery
	}

	declare interface MenuEvent {
		(event: Event, ui: MenuUIParams): void
	}

	declare interface MenuEvents {
		blur?: MenuEvent,
		create?: MenuEvent,
		focus?: MenuEvent,
		select?: MenuEvent
	}

	declare interface Menu {
		
	}

	declare interface ProgressbarOptions {
		disabled?: boolean,
		value?: number | boolean,
		max?: number
	}

	declare interface ProgressbarUIParams {
		
	}

	declare interface ProgressbarEvent {
		(event: Event, ui: ProgressbarUIParams): void
	}

	declare interface ProgressbarEvents {
		change?: ProgressbarEvent,
		complete?: ProgressbarEvent,
		create?: ProgressbarEvent
	}

	declare interface Progressbar {
		
	}

	declare interface ResizableOptions {
		alsoResize?: any,
		animate?: boolean,
		animateDuration?: any,
		animateEasing?: string,
		aspectRatio?: any,
		autoHide?: boolean,
		cancel?: string,
		containment?: any,
		delay?: number,
		disabled?: boolean,
		distance?: number,
		ghost?: boolean,
		grid?: any,
		handles?: any,
		helper?: string,
		maxHeight?: number,
		maxWidth?: number,
		minHeight?: number,
		minWidth?: number
	}

	declare interface ResizableUIParams {
		element: JQuery,
		helper: JQuery,
		originalElement: JQuery,
		originalPosition: any,
		originalSize: any,
		position: any,
		size: any
	}

	declare interface ResizableEvent {
		(event: Event, ui: ResizableUIParams): void
	}

	declare interface ResizableEvents {
		resize?: ResizableEvent,
		start?: ResizableEvent,
		stop?: ResizableEvent,
		create?: ResizableEvents
	}

	declare interface Resizable {
		
	}

	declare interface SelectableOptions {
		autoRefresh?: boolean,
		cancel?: string,
		delay?: number,
		disabled?: boolean,
		distance?: number,
		filter?: string,
		tolerance?: string
	}

	declare interface SelectableEvents {
		selected(event: Event, ui: {
		selected?: Element
	}): void,
		selecting(event: Event, ui: {
		selecting?: Element
	}): void,
		start(event: Event, ui: any): void,
		stop(event: Event, ui: any): void,
		unselected(event: Event, ui: {
		unselected: Element
	}): void,
		unselecting(event: Event, ui: {
		unselecting: Element
	}): void
	}

	declare interface Selectable {
		
	}

	declare interface SelectMenuOptions {
		appendTo?: string,
		disabled?: boolean,
		icons?: any,
		position?: JQueryPositionOptions,
		width?: number
	}

	declare interface SelectMenuUIParams {
		item?: JQuery
	}

	declare interface SelectMenuEvent {
		(event: Event, ui: SelectMenuUIParams): void
	}

	declare interface SelectMenuEvents {
		change?: SelectMenuEvent,
		close?: SelectMenuEvent,
		create?: SelectMenuEvent,
		focus?: SelectMenuEvent,
		open?: SelectMenuEvent,
		select?: SelectMenuEvent
	}

	declare interface SelectMenu {
		
	}

	declare interface SliderOptions {
		animate?: any,
		disabled?: boolean,
		max?: number,
		min?: number,
		orientation?: string,
		range?: any,
		step?: number,
		value?: number,
		values?: number[],
		highlight?: boolean
	}

	declare interface SliderUIParams {
		handle?: JQuery,
		value?: number,
		values?: number[]
	}

	declare interface SliderEvent {
		(event: Event, ui: SliderUIParams): void
	}

	declare interface SliderEvents {
		change?: SliderEvent,
		create?: SliderEvent,
		slide?: SliderEvent,
		start?: SliderEvent,
		stop?: SliderEvent
	}

	declare interface Slider {
		
	}

	declare interface SortableOptions {
		appendTo?: any,
		axis?: string,
		cancel?: any,
		connectWith?: any,
		containment?: any,
		cursor?: string,
		cursorAt?: any,
		delay?: number,
		disabled?: boolean,
		distance?: number,
		dropOnEmpty?: boolean,
		forceHelperSize?: boolean,
		forcePlaceholderSize?: boolean,
		grid?: number[],
		helper?: string | ((event: Event, element: Sortable) => Element),
		handle?: any,
		items?: any,
		opacity?: number,
		placeholder?: string,
		revert?: any,
		scroll?: boolean,
		scrollSensitivity?: number,
		scrollSpeed?: number,
		tolerance?: string,
		zIndex?: number
	}

	declare interface SortableUIParams {
		helper: JQuery,
		item: JQuery,
		offset: any,
		position: any,
		originalPosition: any,
		sender: JQuery,
		placeholder: JQuery
	}

	declare interface SortableEvent {
		(event: JQueryEventObject, ui: SortableUIParams): void
	}

	declare interface SortableEvents {
		activate?: SortableEvent,
		beforeStop?: SortableEvent,
		change?: SortableEvent,
		deactivate?: SortableEvent,
		out?: SortableEvent,
		over?: SortableEvent,
		receive?: SortableEvent,
		remove?: SortableEvent,
		sort?: SortableEvent,
		start?: SortableEvent,
		stop?: SortableEvent,
		update?: SortableEvent
	}

	declare interface Sortable {
		
	}

	declare interface SpinnerOptions {
		culture?: string,
		disabled?: boolean,
		icons?: any,
		incremental?: any,
		max?: any,
		min?: any,
		numberFormat?: string,
		page?: number,
		step?: any
	}

	declare interface SpinnerUIParam {
		value: number
	}

	declare interface SpinnerEvent<T> {
		(event: Event, ui: T): void
	}

	declare interface SpinnerEvents {
		change?: SpinnerEvent<{
		
	}>,
		create?: SpinnerEvent<{
		
	}>,
		spin?: SpinnerEvent<SpinnerUIParam>,
		start?: SpinnerEvent<{
		
	}>,
		stop?: SpinnerEvent<{
		
	}>
	}

	declare interface Spinner {
		
	}

	declare interface TabsOptions {
		active?: any,
		collapsible?: boolean,
		disabled?: any,
		event?: string,
		heightStyle?: string,
		hide?: any,
		show?: any
	}

	declare interface TabsActivationUIParams {
		newTab: JQuery,
		oldTab: JQuery,
		newPanel: JQuery,
		oldPanel: JQuery
	}

	declare interface TabsBeforeLoadUIParams {
		tab: JQuery,
		panel: JQuery,
		jqXHR: JQueryXHR,
		ajaxSettings: any
	}

	declare interface TabsCreateOrLoadUIParams {
		tab: JQuery,
		panel: JQuery
	}

	declare interface TabsEvent<UI> {
		(event: Event, ui: UI): void
	}

	declare interface TabsEvents {
		activate?: TabsEvent<TabsActivationUIParams>,
		beforeActivate?: TabsEvent<TabsActivationUIParams>,
		beforeLoad?: TabsEvent<TabsBeforeLoadUIParams>,
		load?: TabsEvent<TabsCreateOrLoadUIParams>,
		create?: TabsEvent<TabsCreateOrLoadUIParams>
	}

	declare interface Tabs {
		
	}

	declare interface TooltipOptions {
		content?: any,
		disabled?: boolean,
		hide?: any,
		items?: string,
		position?: any,
		show?: any,
		tooltipClass?: string,
		track?: boolean
	}

	declare interface TooltipUIParams {
		
	}

	declare interface TooltipEvent {
		(event: Event, ui: TooltipUIParams): void
	}

	declare interface TooltipEvents {
		close?: TooltipEvent,
		open?: TooltipEvent
	}

	declare interface Tooltip {
		
	}

	declare interface EffectOptions {
		effect: string,
		easing?: string,
		duration?: number,
		complete: Function
	}

	declare interface BlindEffect {
		direction?: string
	}

	declare interface BounceEffect {
		distance?: number,
		times?: number
	}

	declare interface ClipEffect {
		direction?: number
	}

	declare interface DropEffect {
		direction?: number
	}

	declare interface ExplodeEffect {
		pieces?: number
	}

	declare interface FadeEffect {
		
	}

	declare interface FoldEffect {
		size?: any,
		horizFirst?: boolean
	}

	declare interface HighlightEffect {
		color?: string
	}

	declare interface PuffEffect {
		percent?: number
	}

	declare interface PulsateEffect {
		times?: number
	}

	declare interface ScaleEffect {
		direction?: string,
		origin?: string[],
		percent?: number,
		scale?: string
	}

	declare interface ShakeEffect {
		direction?: string,
		distance?: number,
		times?: number
	}

	declare interface SizeEffect {
		to?: any,
		origin?: string[],
		scale?: string
	}

	declare interface SlideEffect {
		direction?: string,
		distance?: number
	}

	declare interface TransferEffect {
		className?: string,
		to?: string
	}

	declare interface JQueryPositionOptions {
		my?: string,
		at?: string,
		of?: any,
		collision?: string,
		using?: Function,
		within?: any
	}

	declare interface MouseOptions {
		cancel?: string,
		delay?: number,
		distance?: number
	}

	declare interface KeyCode {
		BACKSPACE: number,
		COMMA: number,
		DELETE: number,
		DOWN: number,
		END: number,
		ENTER: number,
		ESCAPE: number,
		HOME: number,
		LEFT: number,
		NUMPAD_ADD: number,
		NUMPAD_DECIMAL: number,
		NUMPAD_DIVIDE: number,
		NUMPAD_ENTER: number,
		NUMPAD_MULTIPLY: number,
		NUMPAD_SUBTRACT: number,
		PAGE_DOWN: number,
		PAGE_UP: number,
		PERIOD: number,
		RIGHT: number,
		SPACE: number,
		TAB: number,
		UP: number
	}

	declare interface UI {
		mouse(method: string): JQuery,
		mouse(options: MouseOptions): JQuery,
		mouse(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		mouse(optionLiteral: string, optionValue: any): any,
		accordion: Accordion,
		autocomplete: Autocomplete,
		button: Button,
		buttonset: Button,
		datepicker: Datepicker,
		dialog: Dialog,
		keyCode: KeyCode,
		menu: Menu,
		progressbar: Progressbar,
		slider: Slider,
		spinner: Spinner,
		tabs: Tabs,
		tooltip: Tooltip,
		version: string
	}

	declare interface WidgetOptions {
		disabled?: boolean,
		hide?: any,
		show?: any
	}

	declare interface Widget {
		(methodName: string): JQuery,
		(options: WidgetOptions): JQuery,
		(options: AccordionOptions): JQuery,
		(optionLiteral: string, optionName: string): any,
		(optionLiteral: string, options: WidgetOptions): any,
		(optionLiteral: string, optionName: string, optionValue: any): JQuery,
		(name: string, prototype: any): JQuery,
		(name: string, base: Function, prototype: any): JQuery
	}

			
}