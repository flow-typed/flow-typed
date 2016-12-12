

declare module 'bootstrap.v3.datetimepicker' {
		declare interface JQuery {
		datetimepicker(): JQuery,
		datetimepicker(options: BootstrapV3DatetimePicker.DatetimepickerOptions): JQuery,
		data(key: "DateTimePicker"): BootstrapV3DatetimePicker.Datetimepicker,
		on(
		events: "dp.change", handler: (eventObject: BootstrapV3DatetimePicker.ChangeEvent) => any
	): JQuery,
		on(
		events: "dp.change", selector: string, handler: (eventobject: BootstrapV3DatetimePicker.ChangeEvent) => any
	): JQuery,
		on(
		events: "dp.change", selector: string, data: any, handler?: (eventobject: BootstrapV3DatetimePicker.ChangeEvent) => any
	): JQuery,
		off(
		events: "dp.change", handler: (eventobject: BootstrapV3DatetimePicker.ChangeEvent) => any
	): JQuery,
		off(
		events: "dp.change", selector?: string, handler?: (eventobject: BootstrapV3DatetimePicker.ChangeEvent) => any
	): JQuery,
		on(
		events: "dp.show", handler: (eventObject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		on(
		events: "dp.show", selector: string, handler: (eventobject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		on(
		events: "dp.show", selector: string, data: any, handler?: (eventobject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		off(
		events: "dp.show", handler: (eventobject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		off(
		events: "dp.show", selector?: string, handler?: (eventobject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		on(
		events: "dp.hide", handler: (eventObject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		on(
		events: "dp.hide", selector: string, handler: (eventobject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		on(
		events: "dp.hide", selector: string, data: any, handler?: (eventobject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		off(
		events: "dp.hide", handler: (eventobject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		off(
		events: "dp.hide", selector?: string, handler?: (eventobject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		on(
		events: "dp.error", handler: (eventObject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		on(
		events: "dp.error", selector: string, handler: (eventobject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		on(
		events: "dp.error", selector: string, data: any, handler?: (eventobject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		off(
		events: "dp.error", handler: (eventobject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		off(
		events: "dp.error", selector?: string, handler?: (eventobject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		on(
		events: "dp.update", handler: (eventObject: BootstrapV3DatetimePicker.UpdateEvent) => any
	): JQuery,
		on(
		events: "dp.update", selector: string, handler: (eventobject: BootstrapV3DatetimePicker.UpdateEvent) => any
	): JQuery,
		on(
		events: "dp.update", selector: string, data: any, handler?: (eventobject: BootstrapV3DatetimePicker.UpdateEvent) => any
	): JQuery,
		off(
		events: "dp.update", handler: (eventobject: BootstrapV3DatetimePicker.Event) => any
	): JQuery,
		off(
		events: "dp.update", selector?: string, handler?: (eventobject: BootstrapV3DatetimePicker.UpdateEvent) => any
	): JQuery
	}

			
}

declare module 'npm$namespace$BootstrapV3DatetimePicker' {
		declare interface Datetimepicker {
		clear(): void,
		date(): moment.Moment,
		date(date: moment.Moment | Date | string): void,
		destroy(): void,
		disable(): void,
		enable(): void,
		hide(): void,
		options(): DatetimepickerOptions,
		options(options: DatetimepickerOptions): void,
		show(): void,
		toggle(): void,
		allowInputToggle(): boolean,
		allowInputToggle(value: boolean): void,
		calendarWeeks(): boolean,
		calendarWeeks(value: boolean): void,
		collapse(): boolean,
		collapse(value: boolean): void,
		daysOfWeekDisabled(): Array<number>,
		daysOfWeekDisabled(days: Array<number>): void,
		dayViewHeaderFormat(): string,
		dayViewHeaderFormat(value: string): void,
		defaultDate(): moment.Moment | boolean,
		defaultDate(date: string | Date | moment.Moment | boolean): void,
		disabledDates(): boolean | any,
		disabledDates(dates: boolean | Array<string | Date | moment.Moment>): void,
		disabledHours(): boolean | any,
		disabledHours(value: boolean | Array<number>): void,
		disabledTimeIntervals(): boolean | Array<Array<moment.Moment>>,
		disabledTimeIntervals(value: boolean | Array<Array<moment.Moment>>): void,
		enabledDates(): boolean | any,
		enabledDates(dates: boolean | Array<string | Date | moment.Moment>): void,
		enabledHours(): boolean | any,
		enabledHours(value: boolean | Array<number>): void,
		extraFormats(): boolean | Array<string>,
		extraFormats(formats: boolean | Array<string>): void,
		focusOnShow(): boolean,
		focusOnShow(value: boolean): void,
		format(): boolean | string,
		format(format: boolean | string): void,
		icons(): Icons,
		icons(icons: Icons): void,
		ignoreReadonly(): boolean,
		ignoreReadonly(value: boolean): void,
		inline(): boolean,
		inline(value: boolean): void,
		keepInvalid(): boolean,
		keepInvalid(value: boolean): void,
		keyBinds(): any,
		keyBinds(value: any): void,
		locale(): string,
		locale(newLocale: string): void,
		maxDate(): moment.Moment | boolean,
		maxDate(date: moment.Moment | Date | string | boolean): void,
		minDate(): moment.Moment | boolean,
		minDate(date: moment.Moment | Date | string | boolean): void,
		parseInputDate(): Function,
		parseInputDate(value: (input: string) => moment.Moment): void,
		showClear(): boolean,
		showClear(value: boolean): void,
		showClose(): boolean,
		showClose(value: boolean): void,
		showTodayButton(): boolean,
		showTodayButton(value: boolean): void,
		sideBySide(): boolean,
		sideBySide(value: boolean): void,
		stepping(): number,
		stepping(step: number): void,
		toolbarPlacement(): string,
		toolbarPlacement(value: string): void,
		tooltips(): Tooltips,
		tooltips(value: Tooltips): void,
		useCurrent(): boolean | string,
		useCurrent(value: boolean | string): void,
		useStrict(): boolean,
		useStrict(value: boolean): void,
		viewDate(): boolean | moment.Moment,
		viewDate(value: string | Date | moment.Moment | boolean): void,
		viewMode(): string,
		viewMode(value: string): void,
		widgetPositioning(): WidgetPositioningOptions,
		widgetPositioning(value: WidgetPositioningOptions): void
	}

	declare interface DatetimepickerOptions {
		allowInputToggle?: boolean,
		calendarWeeks?: boolean,
		collapse?: boolean,
		daysOfWeekDisabled?: Array<number> | boolean,
		dayViewHeaderFormat?: string,
		debug?: boolean,
		defaultDate?: boolean | moment.Moment | Date | string,
		disabledDates?: boolean | Array<moment.Moment | Date | string> | any,
		disabledHours?: boolean | Array<number> | any,
		disabledTimeIntervals?: boolean | Array<Array<moment.Moment>>,
		enabledDates?: boolean | Array<moment.Moment | Date | string> | any,
		enabledHours?: boolean | Array<number>,
		extraFormats?: boolean | Array<string>,
		focusOnShow?: boolean,
		format?: boolean | string,
		icons?: Icons,
		ignoreReadonly?: boolean,
		inline?: boolean,
		keyBinds?: {
		[key: string]: (widget: boolean | JQuery) => void
	},
		keepInvalid?: boolean,
		keepOpen?: boolean,
		locale?: string,
		maxDate?: boolean | moment.Moment | Date | string,
		minDate?: boolean | moment.Moment | Date | string,
		parseInputDate?: (input: string) => moment.Moment,
		showClear?: boolean,
		showClose?: boolean,
		showTodayButton?: boolean,
		sideBySide?: boolean,
		stepping?: number,
		toolbarPlacement?: "default" | "top" | "bottom",
		tooltips?: Tooltips,
		useCurrent?: boolean,
		useStrict?: boolean,
		viewDate?: boolean | moment.Moment | Date | string,
		viewMode?: "decades" | "years" | "months" | "days",
		widgetParent?: string | JQuery,
		widgetPositioning?: WidgetPositioningOptions
	}

	declare interface Icons {
		clear?: string,
		close?: string,
		date?: string,
		down?: string,
		next?: string,
		previous?: string,
		time?: string,
		today?: string,
		up?: string
	}

	declare interface Tooltips {
		today?: string,
		clear?: string,
		close?: string,
		selectMonth?: string,
		prevMonth?: string,
		nextMonth?: string,
		selectYear?: string,
		prevYear?: string,
		nextYear?: string,
		selectDecade?: string,
		prevDecade?: string,
		nextDecade?: string,
		prevCentury?: string,
		nextCentury?: string,
		selectTime?: string,
		pickHour?: string,
		incrementHour?: string,
		decrementHour?: string,
		pickMinute?: string,
		incrementMinute?: string,
		decrementMinute?: string,
		togglePeriod?: string,
		pickSecond?: string,
		incrementSecond?: string,
		decrementSecond?: string
	}

	declare interface WidgetPositioningOptions {
		horizontal?: "auto" | "left" | "right",
		vertical?: "auto" | "top" | "bottom"
	}

	declare interface Event {
		date: moment.Moment
	}

	declare interface ChangeEvent {
		oldDate: moment.Moment | boolean
	}

	declare interface UpdateEvent {
		change: string,
		viewDate: moment.Moment
	}

			
}