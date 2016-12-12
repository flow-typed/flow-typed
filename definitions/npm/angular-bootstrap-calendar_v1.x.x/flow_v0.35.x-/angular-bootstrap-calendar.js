

declare module 'angular-bootstrap-calendar' {
					
}

declare module 'calendar' {
		declare interface IEvent {
		title: string,
		type: string,
		startsAt: Date,
		endsAt?: Date,
		editable?: boolean,
		deletable?: boolean,
		draggable?: boolean,
		resizable?: boolean,
		incrementsBadgeTotal?: boolean,
		recursOn?: string,
		cssClass?: string
	}

	declare interface ICalendarConfig {
		allDateFormats: {
		angular: IFormats,
		moment: IFormats
	},
		dateFormats: IDateFormats,
		titleFormats: ITitleFormats,
		dateFormatter: string,
		displayEventEndTimes: boolean,
		showTimesOnWeekView: boolean,
		displayAllMonthEvents: boolean,
		i18nStrings: {
		weekNumber: string
	},
		templates: {
		calendarDayView: string,
		calendarHourList: string,
		calendarMonthCell: string,
		calendarMonthCellEvents: string,
		calendarMonthView: string,
		calendarSlideBox: string,
		calendarWeekView: string,
		calendarYearView: string
	}
	}

	declare interface IFormats {
		date: IDateFormats,
		title: ITitleFormats
	}

	declare interface IDateFormats {
		hour: string,
		day: string,
		month: string,
		weekDay: string,
		time: string,
		datetime: string
	}

	declare interface ITitleFormats {
		day: string,
		week: string,
		month: string,
		year: string
	}

	declare interface ICalendarCell {
		label: number,
		date: moment.Moment,
		inMonth: boolean,
		isPast: boolean,
		isToday: boolean,
		isFuture: boolean,
		isWeekend: boolean,
		events: IEvent[],
		badgeTotal: number
	}

			
}

declare module 'events' {
		declare interface IOnEventClick {
		(calendarEvent: IEvent): void
	}

	declare interface IOnEventTimesChanged {
		(calendarEvent: IEvent, calendarNewEventStart: Date, calendarNewEventEnd: Date): void
	}

	declare interface IOnEditEventClick {
		(calendarEvent: IEvent): void
	}

	declare interface IOnDeleteEventClick {
		(calendarEvent: IEvent): void
	}

	declare interface IOnTimespanClick {
		(calendarDate: Date, calendarCell: ICalendarCell): void
	}

	declare interface IOnViewChangeClick {
		(calendarDate: Date, calendarNextView: string): void
	}

			
}