

declare module 'pickadate' {
		declare interface JQuery {
		pickadate(keyword: "picker"): Pickadate.DatePicker,
		pickadate(objectName: "$node"): JQuery,
		pickadate(objectName: "$root"): JQuery,
		pickadate(objectName: "_hidden"): HTMLInputElement,
		pickadate(methodName: string, ...arguments: any[]): any,
		pickadate(options?: Pickadate.DateOptions): JQuery,
		pickatime(keyword: "picker"): Pickadate.TimePicker,
		pickatime(objectName: "$node"): JQuery,
		pickatime(objectName: "$root"): JQuery,
		pickatime(objectName: "_hidden"): HTMLInputElement,
		pickatime(methodName: string, ...arguments: any[]): any,
		pickatime(options?: Pickadate.TimeOptions): JQuery
	}

			
}

declare module 'npm$namespace$Pickadate' {
	declare type MinOrMaxDateOption = Date | [number, number, number] | number | boolean;

	declare type MinOrMaxTimeOption = Date | [number, number] | number | boolean;

	declare interface KlassOptions {
		input?: string,
		active?: string,
		picker?: string,
		opened?: string,
		focused?: string,
		holder?: string,
		frame?: string,
		wrap?: string,
		box?: string,
		disabled?: string,
		selected?: string,
		highlighted?: string,
		now?: string,
		buttonClear?: string
	}

	declare interface DateKlassOptions {
		header?: string,
		navPrev?: string,
		navNext?: string,
		navDisabled?: string,
		month?: string,
		year?: string,
		selectMonth?: string,
		selectYear?: string,
		table?: string,
		weekdays?: string,
		day?: string,
		infocus?: string,
		outfocus?: string,
		footer?: string,
		buttonClose?: string,
		buttonToday?: string
	}

	declare interface TimeKlassOptions {
		picker?: string,
		list?: string,
		listItem?: string,
		viewset?: string
	}

	declare interface Options {
		clear?: string,
		format?: string,
		formatSubmit?: string,
		hiddenPrefix?: string,
		hiddenSuffix?: string,
		hiddenName?: boolean,
		editable?: boolean,
		container?: string,
		containerHidden?: string,
		closeOnSelect?: boolean,
		closeOnClear?: boolean,
		onStart?: (event: any) => void,
		onRender?: (event: any) => void,
		onOpen?: (event: any) => void,
		onClose?: (event: any) => void,
		onSet?: (event: any) => void,
		onStop?: (event: any) => void
	}

	declare export interface DateOptions {
		monthsFull?: string[],
		monthsShort?: string[],
		weekdaysFull?: string[],
		weekdaysShort?: string[],
		showMonthsShort?: boolean,
		showWeekdaysFull?: boolean,
		today?: string,
		close?: string,
		labelMonthNext?: string,
		labelMonthPrev?: string,
		labelMonthSelect?: string,
		labelYearSelect?: string,
		selectYears?: boolean | number,
		selectMonths?: boolean,
		firstDay?: boolean | number,
		min?: MinOrMaxDateOption,
		max?: MinOrMaxDateOption,
		disable?: any[],
		klass?: DateKlassOptions
	}

	declare export interface TimeOptions {
		formatLabel?: string | ((time: TimeItem) => string),
		interval?: number,
		min?: MinOrMaxTimeOption,
		max?: MinOrMaxTimeOption,
		disable?: any[],
		klass?: TimeKlassOptions
	}

	declare interface Item {
		pick: number
	}

	declare export interface DateItem {
		year: number,
		month: number,
		date: number,
		day: number,
		obj: Date
	}

	declare export interface TimeItem {
		hour: number,
		mins: number
	}

	declare export interface CallbackObject {
		open?: () => void,
		close?: () => void,
		render?: () => void,
		start?: () => void,
		stop?: () => void,
		set?: (thingSet: any) => void
	}

	declare export interface SetObject {
		clear?: any,
		select?: any,
		highlight?: any,
		view?: any,
		min?: any,
		max?: any,
		disable?: any,
		enable?: any
	}

	declare export interface TimeSetObject {
		interval?: number
	}

	declare export interface SetOptions {
		muted?: boolean,
		format?: string
	}

	declare interface Picker<TPickerObject, TItemObject, TOptions> {
		$node: JQuery,
		$root: JQuery,
		_hidden: HTMLInputElement,
		open(withoutFocus?: boolean): TPickerObject,
		close(withFocus?: boolean): TPickerObject,
		start(): TPickerObject,
		stop(): TPickerObject,
		render(entirePicker?: boolean): TPickerObject,
		clear(): TPickerObject,
		get(): string,
		get(thing: string): any,
		get(thing: "value"): string,
		get(thing: "select"): TItemObject,
		get(thing: "highlight"): TItemObject,
		get(thing: "view"): TItemObject,
		get(thing: "min"): TItemObject,
		get(thing: "max"): TItemObject,
		get(thing: "open"): boolean,
		get(thing: "start"): boolean,
		get(thing: "id"): number,
		get(thing: "disable"): any[],
		get(thing: string, format: string): string,
		set(thing: string, value?: any, options?: SetOptions): TPickerObject,
		set(things: TOptions, options?: SetOptions): TPickerObject,
		on(methodName: string, callback: (data?: any) => void): TPickerObject,
		on(callbackObject: CallbackObject): TPickerObject,
		off(...methodName: string[]): TPickerObject,
		trigger(event: string, data?: any): TPickerObject
	}

	declare export interface DatePicker {
		
	}

	declare export interface TimePicker {
		
	}

			
}