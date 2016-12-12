

declare module 'datepicker' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare export interface DatePickerOptions {
		mode?: string,
		date?: Date | string | number,
		minDate?: Date | string | number,
		maxDate?: Date | string | number,
		titleText?: string,
		okText?: string,
		cancelText?: string,
		todayText?: string,
		nowText?: string,
		is24Hour?: boolean,
		androidTheme?: AndroidTheme,
		allowOldDates?: boolean,
		allowFutureDates?: boolean,
		doneButtonLabel?: string,
		doneButtonColor?: string,
		cancelButtonLabel?: string,
		cancelButtonColor?: string,
		x?: number,
		y?: number,
		minuteInterval?: number,
		popoverArrowDirection?: string,
		locale?: string
	}

	declare export interface IDatePickerService {
		show(options?: DatePickerOptions): ng.IPromise<Date>
	}

			
}