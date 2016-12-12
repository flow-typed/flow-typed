

declare module 'react-input-calendar' {
					declare module.exports: undefined


}

declare module 'npm$namespace$reactInputCalendar' {
		declare export interface ReactInputCalendarProps {
		format?: string,
		date?: string | Date,
		minDate?: string | Date,
		maxDate?: string | Date,
		minView?: number,
		computableFormat?: string,
		onChange?: (computableDate: string) => void,
		onBlur?: (event: ___React.SyntheticEvent, computableDate: string) => void,
		onFocus?: (event: ___React.SyntheticEvent) => void,
		closeOnSelect?: boolean,
		openOnInputFocus?: boolean,
		placeholder?: string,
		inputFieldId?: string,
		inputFieldClass?: string,
		disabled?: boolean
	}

	declare interface ReactInputCalendarState {
		
	}

		declare export class ReactInputCalendar extends ___React$Component<ReactInputCalendarProps, ReactInputCalendarState> {
		
	}

	
}