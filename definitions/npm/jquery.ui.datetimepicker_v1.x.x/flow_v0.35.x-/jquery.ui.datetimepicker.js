

declare module 'jquery.ui.datetimepicker' {
		declare interface DateTimePickerOptions {
		showButtonPanel?: boolean,
		timeOnly?: boolean,
		onSelect?: () => any,
		alwaysSetTime?: boolean,
		separator?: string,
		pickerTimeFormat?: string,
		pickerTimeSuffix?: string,
		showTimepicker?: boolean,
		addSliderAccess?: boolean,
		sliderAccessArgs?: any,
		defaultValue?: string,
		minDateTime?: Date,
		maxDateTime?: Date,
		parse?: string,
		altFieldTimeOnly?: boolean,
		altSeparator?: string,
		altTimeSuffix?: string,
		altTimeFormat?: string,
		currentText?: string,
		closeText?: string,
		amNames?: string,
		pmNames?: string,
		timeFormat?: string,
		timeSuffix?: string,
		timeOnlyTitle?: string,
		timeText?: string,
		hourText?: string,
		minuteText?: string,
		secondText?: string,
		millisecText?: string,
		microsecText?: string,
		timezoneText?: string,
		isRTL?: boolean,
		controlType?: string,
		showHour?: boolean,
		showMinute?: boolean,
		showSecond?: boolean,
		showMillisec?: boolean,
		showMicrosec?: boolean,
		showTimezone?: boolean,
		showTime?: boolean,
		stepHour?: number,
		stepMinute?: number,
		stepSecond?: number,
		stepMillisec?: number,
		stepMicrosec?: number,
		hour?: number,
		minute?: number,
		second?: number,
		millisec?: number,
		microsec?: number,
		timezone?: number,
		hourMin?: number,
		minuteMin?: number,
		secondMin?: number,
		millisecMin?: number,
		microsecMin?: number,
		hourMax?: number,
		minuteMax?: number,
		secondMax?: number,
		millisecMax?: number,
		microsecMax?: number,
		hourGrid?: number,
		minuteGrid?: number,
		secondGrid?: number,
		millisecGrid?: number,
		microsecGrid?: number,
		timezoneList?: Array<TimezoneOptions>
	}

	declare interface TimezoneOptions {
		label: string,
		value: number
	}

	declare interface Time {
		hour?: number,
		minute?: number,
		second?: number,
		millisecond?: number,
		timezone?: string
	}

	declare interface formatTimeOptions {
		format: string,
		time: Time,
		options?: DateTimePickerOptions
	}

	declare interface parseTimeOptions {
		format: string,
		time: string,
		options?: DateTimePickerOptions
	}

	declare interface parseDateTimeOptions {
		dateFormat: string,
		timeFormat: string,
		dateTimeString: string,
		dateSettings: string,
		timeSettings: string
	}

	declare interface JQuery {
		datetimepicker(): JQuery,
		datetimepicker(options?: DateTimePickerOptions): JQuery,
		datetimepicker(method: string, methodParameter: any): any,
		datetimepicker(method: "formatTime", methodParameter: formatTimeOptions): string,
		datetimepicker(method: "parseTime", methodParameter: parseTimeOptions): Time,
		datetimepicker(method: "parseDateTime", methodParameter: parseDateTimeOptions): Date
	}

			
}