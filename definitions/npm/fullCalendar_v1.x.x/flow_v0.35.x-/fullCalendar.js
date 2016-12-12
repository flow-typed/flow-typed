

declare module 'fullCalendar' {
		declare interface JQuery {
		fullCalendar(method: "option", option: string, value?: any): void,
		fullCalendar(method: "render"): void,
		fullCalendar(method: "destroy"): void,
		fullCalendar(method: "getView"): FullCalendar.ViewObject,
		fullCalendar(method: "changeView", viewName: string): void,
		fullCalendar(method: "prev"): void,
		fullCalendar(method: "next"): void,
		fullCalendar(method: "prevYear"): void,
		fullCalendar(method: "nextYear"): void,
		fullCalendar(method: "today"): void,
		fullCalendar(method: "gotoDate", year: number, month?: number, date?: number): void,
		fullCalendar(method: "gotoDate", date: Date | string): void,
		fullCalendar(method: "incrementDate", year: number, month?: number, date?: number): void,
		fullCalendar(method: "getDate"): Date,
		fullCalendar(method: "select", startDate: Date, endDate: Date, allDay: boolean): void,
		fullCalendar(method: "unselect"): void,
		fullCalendar(method: "updateEvent", event: FullCalendar.EventObject): void,
		fullCalendar(method: "clientEvents", idOrfilter?: any): Array<FullCalendar.EventObject>,
		fullCalendar(
		method: "clientEvents", idOrfilter?: (e: FullCalendar.EventObject) => boolean
	): Array<FullCalendar.EventObject>,
		fullCalendar(method: "removeEvents", idOrfilter?: any): void,
		fullCalendar(
		method: "removeEvents", idOrfilter?: (e: FullCalendar.EventObject) => boolean
	): void,
		fullCalendar(method: "refetchEvents"): void,
		fullCalendar(method: "addEventSource", source: any): void,
		fullCalendar(method: "removeEventSource", source: any): void,
		fullCalendar(method: "renderEvent", event: FullCalendar.EventObject, stick?: boolean): void,
		fullCalendar(method: "rerenderEvents"): void,
		fullCalendar(options: FullCalendar.Options): JQuery,
		fullCalendar(method: string, arg1: any, arg2: any, arg3: any): void
	}

	declare interface JQueryStatic {
		fullCalendar: FullCalendar.Calendar
	}

			
}

declare module 'npm$namespace$FullCalendar' {
		declare export interface Calendar {
		formatDate(date: Date, format: string, options?: Options): string,
		formatDates(date1: Date, date2: Date, format: string, options?: Options): string,
		parseDate(dateString: string, ignoreTimezone?: boolean): Date,
		parseISO8601(dateString: string, ignoreTimezone?: boolean): Date,
		version: string
	}

	declare export interface BusinessHours {
		start: moment.Duration,
		end: moment.Duration,
		dow: Array<number>
	}

	declare export interface Timespan {
		start: moment.Moment,
		end: moment.Moment
	}

	declare export interface Options {
		header?: {
		left: string,
		center: string,
		right: string
	},
		theme?: boolean,
		buttonIcons?: {
		prev: string,
		next: string
	},
		firstDay?: number,
		isRTL?: boolean,
		weekends?: boolean,
		hiddenDays?: number[],
		weekMode?: string,
		weekNumbers?: boolean,
		weekNumberCalculation?: any,
		businessHours?: boolean | BusinessHours,
		height?: number,
		contentHeight?: number,
		aspectRatio?: number,
		handleWindowResize?: boolean,
		viewRender?: (view: ViewObject, element: JQuery) => void,
		viewDestroy?: (view: ViewObject, element: JQuery) => void,
		dayRender?: (date: Date, cell: HTMLTableDataCellElement) => void,
		windowResize?: (view: ViewObject) => void,
		timezone?: string | boolean,
		now?: moment.Moment | Date | string | (() => moment.Moment),
		defaultView?: string,
		defaultDate?: moment.Moment | Date | string,
		year?: number,
		month?: number,
		date?: number,
		timeFormat?: any,
		columnFormat?: any,
		titleFormat?: any,
		buttonText?: ButtonTextObject,
		monthNames?: Array<string>,
		monthNamesShort?: Array<string>,
		dayNames?: Array<string>,
		dayNamesShort?: Array<string>,
		weekNumberTitle?: string,
		dayClick?: (date: Date, allDay: boolean, jsEvent: MouseEvent, view: ViewObject) => void,
		eventClick?: (event: EventObject, jsEvent: MouseEvent, view: ViewObject) => any,
		eventMouseover?: (event: EventObject, jsEvent: MouseEvent, view: ViewObject) => void,
		eventMouseout?: (event: EventObject, jsEvent: MouseEvent, view: ViewObject) => void,
		events?: any,
		eventSources?: any[],
		allDayDefault?: boolean,
		ignoreTimezone?: boolean,
		startParam?: string,
		endParam?: string,
		lazyFetching?: boolean,
		eventDataTransform?: (eventData: any) => EventObject,
		loading?: (isLoading: boolean, view: ViewObject) => void,
		eventColor?: string,
		eventBackgroundColor?: string,
		eventBorderColor?: string,
		eventTextColor?: string,
		eventRender?: (event: EventObject, element: HTMLDivElement, view: ViewObject) => void,
		eventAfterRender?: (event: EventObject, element: HTMLDivElement, view: ViewObject) => void,
		eventAfterAllRender?: (view: ViewObject) => void,
		eventDestroy?: (event: EventObject, element: JQuery, view: ViewObject) => void
	}

	declare export interface ViewOptionHash {
		month?: any,
		week?: any,
		day?: any,
		agenda?: any,
		agendaDay?: any,
		agendaWeek?: any,
		basic?: any,
		basicDay?: any,
		basicWeek?: any,
		?: any
	}

	declare export interface AgendaOptions {
		allDaySlot?: boolean,
		allDayText?: string,
		slotDuration?: moment.Duration,
		slotLabelFormat?: string,
		slotLabelInterval?: moment.Duration,
		snapDuration?: moment.Duration,
		scrollTime?: moment.Duration,
		minTime?: moment.Duration,
		maxTime?: moment.Duration,
		slotEventOverlap?: boolean
	}

	declare export interface EventDraggingResizingOptions {
		editable?: boolean,
		eventStartEditable?: boolean,
		eventDurationEditable?: boolean,
		dragRevertDuration?: number,
		dragOpacity?: number,
		dragScroll?: boolean,
		eventOverlap?: boolean | ((stillEvent: EventObject, movingEvent: EventObject) => boolean),
		eventConstraint?: BusinessHours | Timespan,
		eventDragStart?: (event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject) => void,
		eventDragStop?: (event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject) => void,
		eventDrop?: (
		event: EventObject, delta: moment.Duration, revertFunc: Function, jsEvent: Event, ui: any, view: ViewObject
	) => void,
		eventResizeStart?: (event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject) => void,
		eventResizeStop?: (event: EventObject, jsEvent: MouseEvent, ui: any, view: ViewObject) => void,
		eventResize?: (
		event: EventObject, delta: moment.Duration, revertFunc: Function, jsEvent: Event, ui: any, view: ViewObject
	) => void
	}

	declare export interface SelectionOptions {
		selectable?: boolean,
		selectHelper?: boolean | ((start: moment.Moment, end: moment.Moment) => HTMLElement),
		unselectAuto?: boolean,
		unselectCancel?: string,
		selectOverlap?: boolean | ((event: EventObject) => boolean),
		selectConstraint?: Timespan | BusinessHours,
		select?: (
		start: moment.Moment, end: moment.Moment, jsEvent: MouseEvent, view: ViewObject, resource?: any
	) => void,
		unselect?: (view: ViewObject, jsEvent: Event) => void
	}

	declare export interface DroppingExternalElementsOptions {
		droppable?: boolean,
		dropAccept?: string | ((draggable: any) => boolean),
		drop?: (date: moment.Moment, jsEvent: MouseEvent, ui: any) => void,
		eventReceive?: (event: EventObject) => void
	}

	declare export interface ButtonTextObject {
		prev?: string,
		next?: string,
		prevYear?: string,
		nextYear?: string,
		today?: string,
		month?: string,
		week?: string,
		day?: string
	}

	declare export interface EventObject {
		id?: any,
		title: string,
		allDay?: boolean,
		url?: string,
		className?: any,
		editable?: boolean,
		source?: EventSource,
		color?: string,
		backgroundColor?: string,
		borderColor?: string,
		textColor?: string,
		rendering?: string
	}

	declare export interface ViewObject {
		name: string,
		title: string,
		intervalStart: moment.Moment,
		intervalEnd: moment.Moment
	}

	declare export interface EventSource {
		events?: any,
		color?: string,
		backgroundColor?: string,
		borderColor?: string,
		textColor?: string,
		className?: any,
		editable?: boolean,
		allDayDefault?: boolean,
		ignoreTimezone?: boolean,
		eventTransform?: any,
		startParam?: string,
		endParam?: string
	}

			
}