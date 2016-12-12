

declare module 'bootstrap-datepicker' {
		declare interface DatepickerOptions {
		format?: string | DatepickerCustomFormatOptions,
		weekStart?: number,
		startDate?: any,
		endDate?: any,
		autoclose?: boolean,
		startView?: number,
		todayBtn?: any,
		todayHighlight?: boolean,
		keyboardNavigation?: boolean,
		language?: string,
		beforeShowDay?: (date: any) => any,
		calendarWeeks?: boolean,
		clearBtn?: boolean,
		daysOfWeekDisabled?: number[],
		forceParse?: boolean,
		inputs?: any[],
		minViewMode?: any,
		multidate?: any,
		multidateSeparator?: string,
		orientation?: string,
		assumeNearbyYear?: any,
		viewMode?: string
	}

	declare interface DatepickerCustomFormatOptions {
		toDisplay(date: string, format: any, language: any): string,
		toValue(date: string, format: any, language: any): Date
	}

	declare interface DatepickerEventObject {
		date: Date,
		format(format?: string): string
	}

	declare interface JQuery {
		datepicker(): JQuery,
		datepicker(methodName: string): any,
		datepicker(methodName: string, params: any): any,
		datepicker(options: DatepickerOptions): JQuery,
		off(
		events: "changeDate", selector?: string, handler?: (eventObject: DatepickerEventObject) => any
	): JQuery,
		off(
		events: "changeDate", handler: (eventObject: DatepickerEventObject) => any
	): JQuery,
		on(
		events: "changeDate", selector: string, data: any, handler?: (eventObject: DatepickerEventObject) => any
	): JQuery,
		on(
		events: "changeDate", selector: string, handler: (eventObject: DatepickerEventObject) => any
	): JQuery,
		on(
		events: "changeDate", handler: (eventObject: DatepickerEventObject) => any
	): JQuery
	}

			
}