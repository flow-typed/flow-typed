

declare module 'bootstrap.timepicker' {
		declare interface TimeickerOptions {
		defaultTime?: string,
		disableFocus?: boolean,
		isOpen?: boolean,
		minuteStep?: number,
		modalBackdrop?: boolean,
		secondStep?: number,
		showSeconds?: boolean,
		showInputs?: boolean,
		showMeridian?: boolean,
		template?: string,
		appendWidgetTo?: string
	}

	declare interface JQuery {
		timepicker(): JQuery,
		timepicker(methodName: string): JQuery,
		timepicker(methodName: string, params: any): JQuery,
		timepicker(options: TimeickerOptions): JQuery
	}

			
}