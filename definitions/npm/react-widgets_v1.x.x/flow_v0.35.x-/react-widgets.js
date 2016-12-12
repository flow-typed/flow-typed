

declare module 'react-widgets' {
					
}

declare module 'react-widgets/lib/Combobox' {
		declare interface ComboBoxMessages {
		open: string | ((props: ComboBoxProps) => string),
		emptyList: string | ((props: ComboBoxProps) => string),
		emptyFilter: string | ((props: ComboBoxProps) => string)
	}

	declare interface ComboBoxProps {
		value?: any,
		defaultValue?: any,
		onChange?: (value: any) => void,
		onSelect?: (value: any) => void,
		data?: any[],
		valueField?: string,
		textField?: string | ((dataItem: any) => string),
		itemComponent?: ___React.ReactType,
		disabled?: boolean | any[],
		readOnly?: boolean | any[],
		groupBy?: string | ((dataItem: any) => any),
		groupComponent?: ___React.ReactType,
		suggest?: boolean,
		filter?: boolean | string | ((dataItem: any, searchItem: any) => boolean),
		caseSensitive?: boolean,
		minLength?: number,
		open?: boolean,
		onToggle?: (isOpen: boolean) => void,
		busy?: boolean,
		duration?: number,
		isRtl?: boolean,
		messages?: ComboBoxMessages
	}

	declare interface ComboBox {
		
	}

	declare interface ComboBoxClass {
		
	}

			declare module.exports: ComboBoxClass


}

declare module 'react-widgets/lib/DateTimePicker' {
		declare interface DateTimePickerProps {
		calendar?: boolean,
		time?: boolean,
		min?: Date,
		max?: Date,
		currentDate?: Date,
		onCurrentDateChange?: (date?: Date) => void,
		format?: string,
		editFormat?: string,
		timeFormat?: string,
		step?: number | boolean,
		parse?: (str: string) => Date | string[],
		initialView?: "month" | "year" | "decade" | "century",
		finalView?: "month" | "year" | "decade" | "century",
		value?: Date,
		defaultValue?: Date,
		onChange?: (date?: Date, dateStr?: string) => void,
		onSelect?: (date?: Date) => void,
		open?: boolean | "calendar" | "time",
		onToggle?: (isOpen: boolean) => void,
		duration?: number,
		isRtl?: boolean,
		messages?: DateTimePickerMessages
	}

	declare interface DateTimePickerMessages {
		calendarButton?: string,
		timeButton?: string
	}

	declare interface DateTimePicker {
		
	}

	declare interface DateTimePickerClass {
		
	}

			declare module.exports: DateTimePickerClass


}

declare module 'react-widgets/lib/Multiselect' {
		declare interface MultiselectProps {
		value?: any[],
		defaultValue?: any[],
		onChange?: (values: any[]) => void,
		onSelect?: (value: any) => void,
		onCreate?: (searchTerm: string) => void,
		data?: any[],
		valueField?: string,
		textField?: string | ((dataItem: any) => string),
		tagComponent?: ___React.ReactType,
		itemComponent?: ___React.ReactType,
		groupBy?: string | ((dataItem: any) => any),
		groupComponent?: ___React.ReactType,
		placeholder?: string,
		searchTerm?: string,
		onSearch?: (searchTerm: string) => void,
		open?: boolean,
		onToggle?: (isOpen: boolean) => void,
		filter?: boolean | "startsWith" | "endsWith" | "contains" | ((dataItem: any, searchTerm: string) => boolean),
		caseSensitive?: boolean,
		minLength?: number,
		busy?: boolean,
		duration?: number,
		disabled?: boolean | any[],
		readOnly?: boolean | any[],
		isRtl?: boolean,
		messages?: MultiselectMessages
	}

	declare interface MultiselectMessages {
		createNew?: string | ((props: MultiselectProps) => string),
		emptyList?: string | ((props: MultiselectProps) => string),
		emptyFilter?: string | ((props: MultiselectProps) => string)
	}

	declare interface Multiselect {
		
	}

	declare interface MultiselectClass {
		
	}

			declare module.exports: MultiselectClass


}

declare module 'react-widgets/lib/NumberPicker' {
		declare interface NumberPickerProps {
		value?: number,
		defaultValue?: number,
		onChange?: (value?: number) => void,
		format?: any,
		parse?: string[] | ((str: string, culture: string) => number),
		min?: number,
		max?: number,
		step?: number,
		precision?: number,
		isRtl?: boolean,
		messages?: NumberPickerMessages
	}

	declare interface NumberPickerMessages {
		increment?: string,
		decrement?: string
	}

	declare interface NumberPicker {
		
	}

	declare interface NumberPickerClass {
		
	}

			declare module.exports: NumberPickerClass


}

declare module 'react-widgets/lib/SelectList' {
		declare interface SelectListProps {
		value?: any | any[],
		defaultValue?: any | any[],
		onChange?: (values: any | any[]) => void,
		data?: any[],
		valueField?: string,
		textField?: string | ((dataItem: any) => string),
		multiple?: boolean,
		itemComponent?: ___React.ReactType,
		groupBy?: string | ((dataItem: any) => any),
		groupComponent?: ___React.ReactType,
		onMove?: (list: HTMLElement, focusedNode: HTMLElement, focusedItem: any) => void,
		busy?: boolean,
		disabled?: boolean | any[],
		readOnly?: boolean | any[],
		isRtl?: boolean,
		messages?: SelectListMessages
	}

	declare interface SelectListMessages {
		emptyList?: string | ((props: SelectListProps) => string)
	}

	declare interface SelectList {
		
	}

	declare interface SelectListClass {
		
	}

			declare module.exports: SelectListClass


}

declare module 'react-widgets/lib/Calendar' {
		declare interface CalendarProps {
		value?: Date,
		defaultValue?: Date,
		onChange?: (date?: Date) => void,
		onNavigate?: (date: Date, direction: string, view: string) => void,
		min?: Date,
		max?: Date,
		currentDate?: Date,
		onCurrentDateChange?: (date?: Date) => void,
		footer?: boolean,
		dayComponent?: ___React.ReactType,
		initialView?: "month" | "year" | "decade" | "century",
		finalView?: "month" | "year" | "decade" | "century",
		headerFormat?: string | ((day: Date) => string),
		footerFormat?: string | ((day: Date) => string),
		dayFormat?: string | ((day: Date) => string),
		dateFormat?: string | ((day: Date) => string),
		monthFormat?: string | ((day: Date) => string),
		yearFormat?: string | ((day: Date) => string),
		decadeFormat?: string | ((day: Date) => string),
		centuryFormat?: string | ((day: Date) => string),
		isRtl?: boolean,
		messages?: CalendarMessages
	}

	declare interface CalendarMessages {
		moveBack?: string,
		moveForward?: string
	}

	declare interface Calendar {
		
	}

	declare interface CalendarClass {
		
	}

			declare module.exports: CalendarClass


}

declare module 'react-widgets/lib/DropdownList' {
		declare interface DropdownListProps {
		value?: any,
		defaultValue?: any,
		onChange?: (value: any) => void,
		onSelect?: (value: any) => void,
		data?: any[],
		valueField?: string,
		textField?: string | ((dataItem: any) => string),
		valueComponent?: ___React.ReactType,
		itemComponent?: ___React.ReactType,
		disabled?: boolean | any[],
		readOnly?: boolean | any[],
		groupBy?: string | ((dataItem: any) => any),
		groupComponent?: ___React.ReactType,
		placeholder?: string,
		searchTerm?: string,
		onSearch?: (searchTerm: string) => void,
		open?: boolean,
		onToggle?: (isOpen: boolean) => void,
		filter?: boolean | "startsWith" | "endsWith" | "contains" | ((dataItem: any, str: string) => boolean),
		caseSensitive?: boolean,
		minLength?: number,
		busy?: boolean,
		duration?: number,
		isRtl?: boolean,
		messages?: DropdownListMessages
	}

	declare interface DropdownListMessages {
		open?: string | ((props: DropdownListProps) => string),
		filterPlaceholder?: string | ((props: DropdownListProps) => string),
		emptyList?: string | ((props: DropdownListProps) => string),
		emptyFilter?: string | ((props: DropdownListProps) => string)
	}

	declare interface DropdownList {
		
	}

	declare interface DropdownListClass {
		
	}

			declare module.exports: DropdownListClass


}