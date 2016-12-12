

declare module 'react-select' {
					


}

declare module 'npm$namespace$ReactSelect' {
		declare interface AutocompleteResult {
		data: Option[],
		complete: boolean
	}

	declare interface Option {
		label: string,
		value: string | number,
		clearableValue?: boolean
	}

	declare interface MenuRendererProps {
		focusedOption: Option,
		focusOption: (option: Option) => void,
		labelKey: string,
		options: Option[],
		selectValue: (option: Option) => void,
		valueArray: Option[]
	}

	declare interface ReactSelectProps {
		addLabelText?: string,
		autoBlur?: boolean,
		autofocus?: boolean,
		autosize?: boolean,
		backspaceRemoves?: boolean,
		backspaceToRemoveMessage?: string,
		className?: string,
		clearAllText?: string,
		clearValueText?: string,
		clearable?: boolean,
		delimiter?: string,
		disabled?: boolean,
		escapeClearsValue?: boolean,
		filterOption?: (option: Option, filter: string) => Option,
		filterOptions?: (
		options: Array<Option>, filter: string, currentValues: Array<Option>
	) => Array<Option>,
		ignoreAccents?: boolean,
		ignoreCase?: boolean,
		inputProps?: Object,
		isLoading?: boolean,
		joinValues?: boolean,
		labelKey?: string,
		matchPos?: string,
		matchProp?: string,
		menuBuffer?: number,
		menuContainerStyle?: {
		
	},
		menuRenderer?: (props: MenuRendererProps) => ___React.ReactElement<any>,
		menuStyle?: {
		
	},
		multi?: boolean,
		name?: string,
		noResultsText?: string,
		onBlur?: ___React.FocusEventHandler,
		onBlurResetsInput?: boolean,
		onChange?: (newValue: Option | Option[]) => void,
		onClose?: () => void,
		onFocus?: ___React.FocusEventHandler,
		onInputChange?: (inputValue: string) => void,
		onMenuScrollToBottom?: () => void,
		onOpen?: () => void,
		onOptionLabelClick?: (value: string, event: Event) => void,
		openAfterFocus?: boolean,
		openOnFocus?: boolean,
		optionComponent?: ___React.ComponentClass<any>,
		optionRenderer?: (option: Option) => JSX.Element,
		options?: Array<Option>,
		placeholder?: string | ___React.ReactElement<any>,
		required?: boolean,
		resetValue?: any,
		scrollMenuIntoView?: boolean,
		searchable?: boolean,
		tabSelectsValue?: boolean,
		value?: Option | Option[] | string | string[] | number | number[] | boolean,
		valueKey?: string,
		valueRenderer?: (option: Option) => JSX.Element,
		style?: any,
		tabIndex?: string,
		valueComponent?: ___React.ComponentClass<any>,
		wrapperStyle?: any,
		onValueClick?: (value: string, event: Event) => void,
		simpleValue?: boolean
	}

	declare interface ReactAsyncSelectProps {
		cache?: Object | boolean,
		ignoreAccents?: boolean,
		ignoreCase?: boolean,
		isLoading?: boolean,
		loadOptions: (input: string, callback: (err: any, result: AutocompleteResult) => any) => any,
		loadingPlaceholder?: string,
		minimumInput?: number,
		noResultsText?: string,
		placeholder?: string,
		searchPromptText?: string,
		searchingText?: string
	}

	declare interface ReactCreatableSelectProps {
		isOptionUnique?: (
		arg: {
		option: Option,
		options: Option[],
		labelKey: string,
		valueKey: string
	}
	) => boolean,
		isValidNewOption?: (arg: {
		label: string
	}) => boolean,
		newOptionCreator?: (input: string) => Option,
		promptTextCreator?: (filterText: string) => string,
		shouldKeyDownEventCreateNewOption?: (arg: {
		keyCode: number
	}) => boolean
	}

		declare class ReactSelectCreatableClass extends ___React$Component<ReactCreatableSelectProps, {
		
	}> {
		
	}

	declare class ReactSelectAsyncClass extends ___React$Component<ReactAsyncSelectProps, {
		
	}> {
		
	}

	declare class ReactSelectClass extends ___React$Component<ReactSelectProps, {
		
	}> {
		Async: ReactSelectAsyncClass;
		Creatable: ReactSelectCreatableClass
	}

	
}