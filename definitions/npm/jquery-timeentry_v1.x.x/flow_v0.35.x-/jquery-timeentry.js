

declare module 'jquery-timeentry' {
		declare interface ITimeEntryRegionalOptions {
		show24Hours?: boolean,
		separator?: string,
		ampmPrefix?: string,
		ampmNames?: string[],
		spinnerTexts?: string[]
	}

	declare interface ITimeEntryOptions {
		showSeconds?: boolean,
		unlimitedHours?: boolean,
		appendText?: string,
		timeSteps?: number[],
		initialField?: number,
		noSeparatorEntry?: boolean,
		tabToExit?: boolean,
		useMouseWheel?: boolean,
		defaultTime?: Date | number | string,
		minTime?: Date | number | number[] | string,
		maxTime?: Date | number | number[] | string,
		spinnerImage?: string,
		spinnerSize?: number[],
		spinnerBigImage?: string,
		spinnerBigSize?: number[],
		spinnerIncDecOnly?: boolean,
		spinnerRepeat?: number[],
		beforeShow?: Function,
		beforeSetTime?: Function
	}

	declare interface ITimeEntry {
		(configOrFnName?: ITimeEntryOptions | string, nameOrOption?: any, value?: any): any
	}

	declare interface ITimeEntryLocales {
		[index: string]: ITimeEntryRegionalOptions
	}

	declare interface ITimeEntryStatic {
		regionalOptions: ITimeEntryLocales,
		setDefaults(settings: ITimeEntryOptions): void
	}

	declare interface JQuery {
		timeEntry: ITimeEntry
	}

	declare interface JQueryStatic {
		timeEntry: ITimeEntryStatic
	}

			
}