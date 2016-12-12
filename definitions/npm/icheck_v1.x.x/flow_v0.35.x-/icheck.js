

declare module 'icheck' {
		declare interface ICheckOptions {
		handle?: string,
		checkboxClass?: string,
		radioClass?: string,
		checkedClass?: string,
		checkedCheckboxClass?: string,
		checkedRadioClass?: string,
		uncheckedClass?: string,
		uncheckedCheckboxClass?: string,
		uncheckedRadioClass?: string,
		disabledClass?: string,
		disabledCheckboxClass?: string,
		disabledRadioClass?: string,
		enabledClass?: string,
		enabledCheckboxClass?: string,
		enabledRadioClass?: string,
		hoverClass?: string,
		focusClass?: string,
		activeClass?: string,
		labelHover?: boolean,
		labelHoverClass?: string,
		increaseArea?: string,
		cursor?: boolean,
		inheritClass?: boolean,
		inheritID?: boolean,
		insert?: string
	}

	declare interface JQuery {
		iCheck(options?: ICheckOptions): JQuery,
		iCheck(command: string, callback?: () => void): void
	}

			
}