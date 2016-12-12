

declare module 'magicsuggest' {
		declare interface JQuery {
		magicSuggest(configurationObject?: MagicSuggest.Configuration): MagicSuggest.Instance
	}

			
}

declare module 'npm$namespace$MagicSuggest' {
		declare interface Configuration {
		allowFreeEntries?: boolean,
		allowDuplicates?: boolean,
		ajaxConfig?: JQueryAjaxSettings,
		autoSelect?: boolean,
		selectFirst?: boolean,
		queryParam?: string,
		beforeSend?: () => void,
		cls?: string,
		data?: any,
		dataUrlParams?: Object,
		disabled?: boolean,
		disabledField?: string,
		displayField?: string,
		editable?: boolean,
		expanded?: boolean,
		expandOnFocus?: boolean,
		groupBy?: string,
		hideTrigger?: boolean,
		highlight?: boolean,
		id?: string,
		infoMsgCls?: string,
		inputCfg?: any,
		invalidCls?: string,
		matchCase?: boolean,
		maxDropHeight?: number,
		maxEntryLength?: number,
		maxEntryRenderer?: (v?: number) => void,
		maxSuggestions?: number,
		maxSelection?: number,
		maxSelectionRenderer?: (v: number) => void,
		method?: string,
		minChars?: number,
		minCharsRenderer?: (v: number) => void,
		mode?: string,
		name?: string,
		noSuggestionText?: string,
		placeholder?: string,
		renderer?: (item: any) => void,
		required?: boolean,
		resultAsString?: boolean,
		resultAsStringDelimiter?: string,
		resultsField?: string,
		selectionCls?: string,
		selectionContainer?: JQuery,
		selectionPosition?: string,
		selectionRenderer?: (item: any) => void,
		selectionStacked?: boolean,
		sortDir?: string,
		sortOrder?: string,
		strictSuggest?: boolean,
		style?: string,
		toggleOnClick?: boolean,
		typeDelay?: number,
		useTabKey?: boolean,
		useCommaKey?: boolean,
		useZebraStyle?: boolean,
		value?: any,
		valueField?: string,
		vregex?: any,
		vtype?: any
	}

	declare interface Instance {
		addToSelection(objs: Array<any>, isSilent?: boolean): void,
		clear(isSilent?: boolean): void,
		collapse(): void,
		disable(): void,
		empty(): void,
		enable(): void,
		isDisabled(): boolean,
		isValid(): boolean,
		getDataUrlParams(): Object,
		getName(): string,
		getSelection(): Array<any>,
		getRawValue(): string,
		getValue(): Array<any>,
		removeFromSelection(items: any, isSilent: boolean): void,
		setData(data: any): void,
		getData(): any,
		setName(name: string): void,
		setSelection(items: Array<any>, isSilet?: boolean): void,
		setValue(values: Array<any>): void,
		setDataUrlParams(params: any): void
	}

			
}