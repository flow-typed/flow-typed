

declare module 'react-bootstrap-daterangepicker' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReactBootstrapDaterangepicker' {
		declare interface Picker {
		startDate: moment.Moment,
		endDate: moment.Moment
	}

	declare interface EventHandler {
		(event: ___React.SyntheticEvent, picker: Picker): void
	}

	declare interface Props {
		onShow?: EventHandler,
		onHide?: EventHandler,
		onShowCalendar?: EventHandler,
		onHideCalendar?: EventHandler,
		onApply?: EventHandler,
		onCancel?: EventHandler,
		onEvent?: EventHandler
	}

		declare export class DateRangePicker extends React$Component<Props, {
		
	}> {
		
	}

	
}