

declare module 'react-daterange-picker' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReactDateRangePicker' {
		declare interface Props {
		bemBlock?: string,
		bemNamespace?: string,
		dateStates?: DateState[],
		defaultState?: string,
		disableNavigation?: boolean,
		firstOfWeek?: number,
		helpMessage?: string,
		initialFromValue?: boolean,
		initialDate?: Date,
		initialMonth?: number,
		initialYear?: number,
		initialRange?: {
		
	},
		maximumDate?: Date,
		minimumDate?: Date,
		numberOfCalendars?: number,
		onHighlightDate(date: Date): void,
		onHighlightRange(date: Date): void,
		onSelect(value: Props): void,
		onSelectStart(value: moment.Moment): void,
		paginationArrowComponent?: PaginationArrow,
		selectedLabel?: string,
		selectionType?: "single" | "range",
		singleDateRange?: boolean,
		showLegend?: boolean,
		stateDefinitions?: StateDefinitions,
		value?: moment.Moment | moment.Range
	}

	declare interface DateState {
		state: string,
		range: moment.Range
	}

	declare interface StateDefinitions {
		[key: string]: StateDefinition
	}

	declare interface StateDefinition {
		color: string,
		label: string,
		selectable?: boolean
	}

	declare interface PaginationArrowProps {
		disabled?: boolean,
		onTrigger(): void,
		direction?: "next" | "previous"
	}

		declare class PaginationArrow extends React$Component<PaginationArrowProps, {
		
	}> {
		
	}

	declare class DateRangePicker extends React$Component<Props, {
		
	}> {
		
	}

	
}