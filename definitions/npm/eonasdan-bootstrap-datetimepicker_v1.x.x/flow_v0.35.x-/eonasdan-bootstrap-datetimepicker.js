

declare module 'eonasdan-bootstrap-datetimepicker' {
		declare interface JQuery {
		datetimepicker(): JQuery,
		datetimepicker(options: EonasdanBootstrapDatetimepicker.SetOptions): JQuery,
		data(key: "DateTimePicker"): EonasdanBootstrapDatetimepicker.Datetimepicker,
		off(
		events: "dp.change", selector?: string, handler?: (eventobject: EonasdanBootstrapDatetimepicker.ChangeEventObject) => any
	): JQuery,
		off(
		events: "dp.change", handler: (eventobject: EonasdanBootstrapDatetimepicker.ChangeEventObject) => any
	): JQuery,
		on(
		events: "dp.change", selector: string, data: any, handler?: (eventobject: EonasdanBootstrapDatetimepicker.ChangeEventObject) => any
	): JQuery,
		on(
		events: "dp.change", selector: string, handler: (eventobject: EonasdanBootstrapDatetimepicker.ChangeEventObject) => any
	): JQuery,
		on(
		events: "dp.change", handler: (eventObject: EonasdanBootstrapDatetimepicker.ChangeEventObject) => any
	): JQuery,
		off(
		events: "dp.show", selector?: string, handler?: (eventobject: JQueryEventObject) => any
	): JQuery,
		off(events: "dp.show", handler: (eventobject: JQueryEventObject) => any): JQuery,
		on(
		events: "dp.show", selector: string, data: any, handler?: (eventobject: JQueryEventObject) => any
	): JQuery,
		on(
		events: "dp.show", selector: string, handler: (eventobject: JQueryEventObject) => any
	): JQuery,
		on(events: "dp.show", handler: (eventObject: JQueryEventObject) => any): JQuery,
		off(
		events: "dp.hide", selector?: string, handler?: (eventobject: EonasdanBootstrapDatetimepicker.HideEventObject) => any
	): JQuery,
		off(
		events: "dp.hide", handler: (eventobject: EonasdanBootstrapDatetimepicker.HideEventObject) => any
	): JQuery,
		on(
		events: "dp.hide", selector: string, data: any, handler?: (eventobject: EonasdanBootstrapDatetimepicker.HideEventObject) => any
	): JQuery,
		on(
		events: "dp.hide", selector: string, handler: (eventobject: EonasdanBootstrapDatetimepicker.HideEventObject) => any
	): JQuery,
		on(
		events: "dp.hide", handler: (eventObject: EonasdanBootstrapDatetimepicker.HideEventObject) => any
	): JQuery,
		off(
		events: "dp.error", selector?: string, handler?: (eventobject: EonasdanBootstrapDatetimepicker.ErrorEventObject) => any
	): JQuery,
		off(
		events: "dp.error", handler: (eventobject: EonasdanBootstrapDatetimepicker.ErrorEventObject) => any
	): JQuery,
		on(
		events: "dp.error", selector: string, data: any, handler?: (eventobject: EonasdanBootstrapDatetimepicker.ErrorEventObject) => any
	): JQuery,
		on(
		events: "dp.error", selector: string, handler: (eventobject: EonasdanBootstrapDatetimepicker.ErrorEventObject) => any
	): JQuery,
		on(
		events: "dp.error", handler: (eventObject: EonasdanBootstrapDatetimepicker.ErrorEventObject) => any
	): JQuery,
		off(
		events: "dp.update", selector?: string, handler?: (eventobject: EonasdanBootstrapDatetimepicker.UpdateEventObject) => any
	): JQuery,
		off(
		events: "dp.update", handler: (eventobject: EonasdanBootstrapDatetimepicker.UpdateEventObject) => any
	): JQuery,
		on(
		events: "dp.update", selector: string, data: any, handler?: (eventobject: EonasdanBootstrapDatetimepicker.UpdateEventObject) => any
	): JQuery,
		on(
		events: "dp.update", selector: string, handler: (eventobject: EonasdanBootstrapDatetimepicker.UpdateEventObject) => any
	): JQuery,
		on(
		events: "dp.update", handler: (eventObject: EonasdanBootstrapDatetimepicker.UpdateEventObject) => any
	): JQuery
	}

			
}

declare module 'npm$namespace$EonasdanBootstrapDatetimepicker' {
	declare type DateComparable = string | Date | moment.Moment;

	declare type UseCurrent = "year" | "month" | "day" | "hour" | "minute";

	declare type ViewMode = "days" | "months" | "years" | "decades";

	declare type ToolbarPlacement = "default" | "top" | "bottom";

	declare type FromTo = [moment.Moment, moment.Moment];

	declare type ParseInputDateFunction = (inputDate: string) => moment.Moment;

	declare type IndexedDates = {
		[date: string]: boolean
	};

	declare type IndexedHours = {
		[hour: string]: boolean
	};

	declare interface Icons {
		time?: string,
		date?: string,
		up?: string,
		down?: string,
		previous?: string,
		next?: string,
		today?: string,
		clear?: string,
		close?: string
	}

	declare interface WidgetPositioning {
		horizontal?: "auto" | "left" | "right",
		vertical?: "auto" | "top" | "bottom"
	}

	declare interface KeyBinds {
		up?: (widget: JQuery | boolean) => any,
		down?: (widget: JQuery | boolean) => any,
		control up?: (widget: JQuery | boolean) => any,
		control down?: (widget: JQuery | boolean) => any,
		left?: (widget: JQuery | boolean) => any,
		right?: (widget: JQuery | boolean) => any,
		pageUp?: (widget: JQuery | boolean) => any,
		pageDown?: (widget: JQuery | boolean) => any,
		enter?: () => any,
		escape?: () => any,
		control space?: (widget: JQuery) => any,
		t?: () => any,
		delete?: () => any
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
		pickHour?: string,
		incrementHour?: string,
		decrementHour?: string,
		pickMinute?: string,
		incrementMinute?: string,
		decrementMinute?: string,
		pickSecond?: string,
		incrementSecond?: string,
		decrementSecond?: string,
		togglePeriod?: string,
		selectTime?: string
	}

	declare interface OptionsBase {
		timeZone?: string,
		format?: string | boolean,
		dayViewHeaderFormat?: string,
		extraFormats?: string[] | boolean,
		stepping?: number,
		minDate?: DateComparable | boolean,
		maxDate?: DateComparable | boolean,
		useCurrent?: boolean | UseCurrent,
		collapse?: boolean,
		locale?: string,
		defaultDate?: DateComparable | boolean,
		icons?: Icons,
		useStrict?: boolean,
		sideBySide?: boolean,
		daysOfWeekDisabled?: DayOfWeek[] | boolean,
		calendarWeeks?: boolean,
		viewMode?: ViewMode,
		toolbarPlacement?: ToolbarPlacement,
		showTodayButton?: boolean,
		showClear?: boolean,
		showClose?: boolean,
		widgetPositioning?: WidgetPositioning,
		widgetParent?: string | JQuery,
		keepOpen?: boolean,
		inline?: boolean,
		datepickerInput?: string,
		keepInvalid?: boolean,
		keyBinds?: KeyBinds,
		debug?: boolean,
		ignoreReadonly?: boolean,
		disabledTimeIntervals?: boolean | FromTo[],
		allowInputToggle?: boolean,
		focusOnShow?: boolean,
		viewDate?: DateComparable | boolean,
		tooltips?: Tooltips,
		parseInputDate?: ParseInputDateFunction
	}

	declare interface GetOptions {
		disabledDates?: IndexedDates | boolean,
		enabledDates?: IndexedDates | boolean,
		enabledHours?: IndexedHours | boolean,
		disabledHours?: IndexedHours | boolean
	}

	declare interface SetOptions {
		disabledDates?: DateComparable[] | boolean,
		enabledDates?: DateComparable[] | boolean,
		enabledHours?: number[] | boolean,
		disabledHours?: number[] | boolean
	}

	declare interface Datetimepicker {
		destroy(): void,
		toggle(): Datetimepicker,
		show(): Datetimepicker,
		hide(): Datetimepicker,
		disable(): Datetimepicker,
		enable(): Datetimepicker,
		date(): moment.Moment,
		date(date: DateComparable): Datetimepicker,
		clear(): Datetimepicker,
		debug(): Datetimepicker,
		options(): GetOptions,
		options(options: SetOptions): Datetimepicker,
		timeZone(): string,
		timeZone(newZone: string): Datetimepicker,
		disabledDates(): IndexedDates | boolean,
		disabledDates(dates: DateComparable[] | boolean): Datetimepicker,
		enabledDates(): IndexedDates | boolean,
		enabledDates(dates: DateComparable[] | boolean): Datetimepicker,
		defaultDate(): moment.Moment | boolean,
		defaultDate(dates: DateComparable | boolean): Datetimepicker,
		useCurrent(): boolean | UseCurrent,
		useCurrent(useCurrent: boolean | UseCurrent): Datetimepicker,
		minDate(): moment.Moment | boolean,
		minDate(minDate: DateComparable | boolean): Datetimepicker,
		maxDate(): moment.Moment | boolean,
		maxDate(maxDate: DateComparable | boolean): Datetimepicker,
		daysOfWeekDisabled(): DayOfWeek[],
		daysOfWeekDisabled(daysOfWeek: DayOfWeek[]): Datetimepicker,
		format(): string | boolean,
		format(format: string | boolean): Datetimepicker,
		extraFormats(): string[] | boolean,
		extraFormats(formats: string[] | boolean): Datetimepicker,
		locale(): string,
		locale(newLocale: string): Datetimepicker,
		stepping(): number,
		stepping(step: number): Datetimepicker,
		sideBySide(): boolean,
		sideBySide(sideBySide: boolean): Datetimepicker,
		collapse(): boolean,
		collapse(collapse: boolean): Datetimepicker,
		icons(): Icons,
		icons(icons: Icons): Datetimepicker,
		useStrict(): boolean,
		useStrict(useStrict: boolean): Datetimepicker,
		widgetPositioning(): WidgetPositioning,
		widgetPositioning(positioningObject: WidgetPositioning): Datetimepicker,
		viewMode(): ViewMode,
		viewMode(newViewMode: ViewMode): Datetimepicker,
		calendarWeeks(): boolean,
		calendarWeeks(calendarWeeks: boolean): Datetimepicker,
		showClear(): boolean,
		showClear(showClear: boolean): Datetimepicker,
		showTodayButton(): boolean,
		showTodayButton(showTodayButton: boolean): Datetimepicker,
		toolbarPlacement(): ToolbarPlacement,
		toolbarPlacement(toolbarPlacement: ToolbarPlacement): Datetimepicker,
		dayViewHeaderFormat(): string,
		dayViewHeaderFormat(dayViewHeaderFormat: string): Datetimepicker,
		keyBinds(): KeyBinds,
		keyBinds(keyBinds: KeyBinds): Datetimepicker,
		inline(): boolean,
		inline(inline: boolean): Datetimepicker,
		ignoreReadonly(): boolean,
		ignoreReadonly(ignoreReadonly: boolean): Datetimepicker,
		showClose(): boolean,
		showClose(showClose: boolean): Datetimepicker,
		keepInvalid(): boolean,
		keepInvalid(keepInvalid: boolean): Datetimepicker,
		datepickerInput(): string,
		datepickerInput(datepickerInput: string): Datetimepicker,
		allowInputToggle(): boolean,
		allowInputToggle(allowInputToggle: boolean): Datetimepicker,
		focusOnShow(): boolean,
		focusOnShow(focusOnShow: boolean): Datetimepicker,
		disabledTimeIntervals(): FromTo[] | boolean,
		disabledTimeIntervals(disabledTimeIntervals: FromTo[] | boolean): Datetimepicker,
		disabledHours(): IndexedHours | boolean,
		disabledHours(disabledHours: number[] | boolean): Datetimepicker,
		enabledHours(): IndexedHours | boolean,
		enabledHours(enabledHours: number[] | boolean): Datetimepicker,
		viewDate(): moment.Moment | boolean,
		viewDate(viewDate: DateComparable | boolean): Datetimepicker,
		parseInputDate(): ParseInputDateFunction,
		parseInputDate(parseInputDate: ParseInputDateFunction): Datetimepicker,
		tooltips(): Tooltips,
		tooltips(tooltips: Tooltips): Datetimepicker
	}

	declare interface HideEventObject {
		date: moment.Moment
	}

	declare interface ChangeEventObject {
		date: moment.Moment,
		oldDate: moment.Moment | boolean
	}

	declare interface ErrorEventObject {
		date: moment.Moment
	}

	declare interface UpdateEventObject {
		change: string,
		viewDate: moment.Moment
	}

			
}