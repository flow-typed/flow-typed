

declare module 'pikaday' {
				declare class Pikaday  {
		el: HTMLElement;
		constructor(options: Pikaday.PikadayOptions): this;
		config(options: Pikaday.PikadayOptions): Pikaday.PikadayOptions;
		toString(format?: string): string;
		getDate(): Date;
		setDate(date: string | Date, triggerOnSelect?: boolean): void;
		getMoment(): moment.Moment;
		setMoment(moment: any): void;
		gotoDate(date: Date): void;
		gotoToday(): void;
		gotoMonth(monthIndex: number): void;
		nextMonth(): void;
		prevMonth(): void;
		gotoYear(year: number): void;
		setMinDate(date: Date): void;
		setMaxDate(date: Date): void;
		setStartRange(date: Date): void;
		setEndRange(date: Date): void;
		draw(force: boolean): void;
		isVisible(): boolean;
		show(): void;
		hide(): void;
		adjustPosition(): void;
		destroy(): void
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$Pikaday' {
		declare interface PikadayI18nConfig {
		previousMonth: string,
		nextMonth: string,
		months: string[],
		weekdays: string[],
		weekdaysShort: string[]
	}

	declare interface PikadayOptions {
		field?: HTMLElement,
		format?: string,
		trigger?: HTMLElement,
		bound?: boolean,
		position?: string,
		reposition?: boolean,
		container?: HTMLElement,
		defaultDate?: Date,
		setDefaultDate?: boolean,
		firstDay?: number,
		minDate?: Date,
		maxDate?: Date,
		disableWeekends?: boolean,
		disableDayFn?: (date: Date) => boolean,
		yearRange?: number | number[],
		showWeekNumber?: boolean,
		isRTL?: boolean,
		i18n?: PikadayI18nConfig,
		yearSuffix?: string,
		showMonthAfterYear?: boolean,
		showDaysInNextAndPreviousMonths?: boolean,
		numberOfMonths?: number,
		mainCalendar?: string,
		theme?: string,
		onSelect?: (date: Date) => void,
		onOpen?: () => void,
		onClose?: () => void,
		onDraw?: () => void
	}

			
}