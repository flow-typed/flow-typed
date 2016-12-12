

declare module 'daterangepicker' {
		declare interface JQuery {
		daterangepicker(settings?: daterangepicker.Settings): JQuery,
		daterangepicker(
		settings?: daterangepicker.Settings, callback?: (
		start?: string | Date | moment.Moment, end?: string | Date | moment.Moment, label?: string
	) => any
	): JQuery
	}

			declare module.exports: undefined


}

declare module 'npm$namespace$daterangepicker' {
		declare interface DatepickerEventObject {
		date: Date,
		format(format?: string): string
	}

	declare interface Settings {
		startDate?: string | moment.Moment | Date,
		endDate?: string | moment.Moment | Date,
		minDate?: string | moment.Moment | Date,
		maxDate?: string | moment.Moment | Date,
		dateLimit?: any,
		showDropdowns?: boolean,
		showWeekNumbers?: boolean,
		showISOWeekNumbers?: boolean,
		timePicker?: boolean,
		timePickerIncrement?: number,
		timePicker24Hour?: boolean,
		timePickerSeconds?: boolean,
		ranges?: any,
		opens?: string,
		drops?: string,
		buttonClasses?: string[],
		applyClass?: string,
		cancelClass?: string,
		locale?: Locale,
		singleDatePicker?: boolean,
		autoApply?: boolean,
		linkedCalendars?: boolean,
		parentEl?: string,
		isInvalidDate(
		startDate: string | moment.Moment | Date, endDate?: string | moment.Moment | Date
	): boolean,
		autoUpdateInput?: boolean,
		alwaysShowCalendars?: boolean
	}

	declare interface Locale {
		cancelLabel?: string,
		applyLabel?: string,
		format?: string,
		separator?: string,
		weekLabel?: string,
		customRangeLabel?: string,
		firstDay?: number,
		daysOfWeek?: string[],
		monthNames?: string[]
	}

			
}