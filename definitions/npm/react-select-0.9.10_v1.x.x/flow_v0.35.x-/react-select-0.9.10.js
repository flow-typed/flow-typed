

declare module 'react-select-0.9.10' {
					
}

declare module 'react-select' {
		declare interface Option {
		label: string,
		value: string
	}

	declare interface ReactSelectProps {
		addLabelText?: string,
		allowCreate?: boolean,
		autoload?: boolean,
		backspaceRemoves?: boolean,
		cacheAsyncResults?: boolean,
		className?: string,
		clearable?: boolean,
		clearAllText?: string,
		clearValueText?: string,
		delimiter?: string,
		disabled?: boolean,
		filterOption?: (option: Option, filterString: string) => Option,
		filterOptions?: (
		options: Array<Option>, filterString: string, values: Array<Object>
	) => Array<Option>,
		ignoreCase?: boolean,
		inputProps?: Object,
		isLoading?: boolean,
		labelKey?: string,
		matchPos?: string,
		matchProp?: string,
		multi?: boolean,
		name?: string,
		newOptionCreator?: () => Option,
		noResultsText?: string,
		onBlur?: (event: Event) => void,
		onChange?: (newValue: string) => void,
		onFocus?: (event: Event) => void,
		onInputChange?: (inputValue: string) => void,
		onOptionLabelClick?: (value: string, event: Event) => void,
		optionRenderer?: () => void,
		options?: Array<Option>,
		placeholder?: string,
		searchable?: boolean,
		searchingText?: string,
		searchPromptText?: string,
		value?: Option,
		valueKey?: string,
		valueRenderer?: () => void
	}

	declare interface ReactAsyncSelectProps {
		cache?: any,
		loadOptions?: () => void,
		ignoreAccents?: boolean,
		isLoading?: boolean,
		loadingPlaceholder?: string
	}

	declare interface ReactSelect {
		
	}

	declare interface ReactSelectClass {
		
	}

	declare interface SelectWithAsync {
		Async?: ReactAsyncSelectProps
	}

			declare module.exports: SelectWithAsync


}