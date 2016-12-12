

declare module 'react-big-calendar' {
	declare type stringOrDate = string | Date;

	declare interface BigCalendarProps {
		date?: stringOrDate,
		view?: string,
		events?: Object[],
		onNavigate?: Function,
		onView?: Function,
		onSelectSlot?: (
		slotInfo: {
		start: stringOrDate,
		end: stringOrDate,
		slots: Date[] | string[]
	}
	) => void,
		onSelectEvent?: (event: Object) => void,
		onSelecting?: (slotInfo: {
		start: stringOrDate,
		end: stringOrDate
	}) => boolean,
		views?: Object,
		toolbar?: boolean,
		popup?: boolean,
		popupOffset?: number | {
		x: number,
		y: number
	},
		selectable?: boolean,
		step?: number,
		rtl?: boolean,
		eventPropGetter?: (
		event: Object, start: stringOrDate, end: stringOrDate, isSelected: boolean
	) => void,
		titleAccessor?: string,
		allDayAccessor?: boolean,
		startAccessor?: stringOrDate,
		endAccessor?: stringOrDate,
		min?: stringOrDate,
		max?: stringOrDate,
		scrollToTime?: stringOrDate,
		formats?: Object,
		components?: Object,
		messages?: Object
	}

		declare export class BigCalendar extends React$Component<BigCalendarProps, {
		
	}> {
		momentLocalizer(momentInstance: Object): void;
		globalizeLocalizer(globalizeInstance: Object): void
	}

	declare module.exports: undefined


}