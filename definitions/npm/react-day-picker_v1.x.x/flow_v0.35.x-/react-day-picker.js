

declare module 'react-day-picker' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReactDayPicker' {
		declare interface LocaleUtils {
		formatMonthTitle: (month: Date, locale: string) => string,
		formatWeekdayShort: (weekday: number, locale: string) => string,
		formatWeekdayLong: (weekday: number, locale: string) => string,
		getFirstDayOfWeek: (locale: string) => number,
		getMonths: (locale: string) => string[]
	}

	declare interface DayModifiers {
		selected?: boolean,
		disabled?: boolean,
		[name: string]: boolean
	}

	declare interface Modifiers {
		[name: string]: (date: Date) => boolean
	}

	declare interface CaptionElementProps {
		date?: Date,
		localeUtils?: LocaleUtils,
		locale?: string,
		onClick?: React.MouseEventHandler
	}

	declare interface NavbarElementProps {
		className?: string,
		previousMonth?: Date,
		nextMonth?: Date,
		showPreviousButton?: boolean,
		showNextButton?: boolean,
		onPreviousClick(): void,
		onNextClick(): void,
		dir?: string,
		localeUtils?: LocaleUtils,
		locale?: string
	}

	declare interface WeekdayElementProps {
		weekday?: number,
		className?: string,
		localeUtils?: LocaleUtils,
		locale?: string
	}

	declare interface Props {
		modifiers?: Modifiers,
		initialMonth?: Date,
		numberOfMonths?: number,
		renderDay?: (date: Date) => number | string | JSX.Element,
		enableOutsideDays?: boolean,
		canChangeMonth?: boolean,
		disabledDays?: (date: Date) => boolean,
		fixedWeeks?: boolean,
		fromMonth?: Date,
		reverseMonths?: boolean,
		toMonth?: Date,
		localeUtils?: LocaleUtils,
		locale?: string,
		captionElement?: React.ReactElement<CaptionElementProps>,
		navbarElement?: React.ReactElement<NavbarElementProps>,
		weekdayElement?: React.ReactElement<WeekdayElementProps>,
		onDayClick?: (e: React.SyntheticEvent, day: Date, modifiers: DayModifiers) => any,
		onDayKeyDown?: (e: React.SyntheticEvent, day: Date, modifiers: DayModifiers) => any,
		onDayMouseEnter?: (e: React.SyntheticEvent, day: Date, modifiers: DayModifiers) => any,
		onDayMouseLeave?: (e: React.SyntheticEvent, day: Date, modifiers: DayModifiers) => any,
		onDayTouchEnd?: (e: React.SyntheticEvent, day: Date, modifiers: DayModifiers) => any,
		onDayTouchStart?: (e: React.SyntheticEvent, day: Date, modifiers: DayModifiers) => any,
		onMonthChange?: (month: Date) => any,
		onCaptionClick?: (e: React.SyntheticEvent, month: Date) => any,
		className?: string,
		selectedDays?: (date: Date) => boolean,
		style?: React.CSSProperties,
		tabIndex?: number
	}

		declare class DayPicker extends React$Component<Props, {
		
	}> {
		showMonth(month: Date): void;
		showPreviousMonth(): void;
		showNextMonth(): void
	}

	
}

declare module 'DayPicker' {
					
}

declare module 'DateUtils' {
			declare function addMonths(d: Date, n: number): Date

	declare function clone(d: Date): Date

	declare function isSameDay(d1?: Date, d2?: Date): boolean

	declare function isPastDay(d: Date): boolean

	declare function isDayBetween(day: Date, startDate: Date, endDate: Date): boolean

	declare function addDayToRange(
		day: Date, range: {
		from?: Date,
		to?: Date
	}
	): {
		from?: Date,
		to?: Date
	}

	declare function isDayInRange(day: Date, range: {
		from?: Date,
		to?: Date
	}): boolean

		
}