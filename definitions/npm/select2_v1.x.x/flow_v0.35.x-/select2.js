

declare module 'select2' {
		declare interface Select2QueryOptions {
		term?: string,
		page?: number,
		context?: any,
		callback?: (result: {
		results: any,
		more?: boolean,
		context?: any
	}) => void
	}

	declare interface AjaxFunction {
		(settings: JQueryAjaxSettings): JQueryXHR,
		(url: string, settings?: JQueryAjaxSettings): JQueryXHR
	}

	declare interface Select2AjaxOptions {
		transport?: AjaxFunction,
		url?: any,
		dataType?: string,
		delay?: number,
		cache?: boolean,
		data?: (term: string, page: number, context: any) => any,
		results?: (term: any, page: number, context: any) => any,
		processResults?: (data: any, params: any) => any
	}

	declare interface IdTextPair {
		id: any,
		text: string
	}

	declare interface Select2Options {
		width?: string,
		dropdownAutoWidth?: boolean,
		minimumInputLength?: number,
		minimumResultsForSearch?: number,
		maximumSelectionSize?: number,
		placeholder?: string | IdTextPair,
		separator?: string,
		allowClear?: boolean,
		multiple?: boolean,
		closeOnSelect?: boolean,
		openOnEnter?: boolean,
		id?: (object: any) => string,
		matcher?: (term: string, text: string, option: any) => boolean,
		formatSelection?: (
		object: any, container: JQuery, escapeMarkup: (markup: string) => string
	) => string,
		formatResult?: (
		object: any, container: JQuery, query: any, escapeMarkup: (markup: string) => string
	) => string,
		formatResultCssClass?: (object: any) => string,
		formatNoMatches?: (term: string) => string,
		formatSearching?: () => string,
		formatInputTooShort?: (term: string, minLength: number) => string,
		formatSelectionTooBig?: (maxSize: number) => string,
		formatLoadMore?: (pageNumber: number) => string,
		createSearchChoice?: (term: string, data: any) => any,
		initSelection?: (element: JQuery, callback: (data: any) => void) => void,
		tokenizer?: (
		input: string, selection: any[], selectCallback: () => void, options: Select2Options
	) => string,
		tokenSeparators?: string[],
		query?: (options: Select2QueryOptions) => void,
		ajax?: Select2AjaxOptions,
		data?: any,
		tags?: any,
		containerCss?: any,
		containerCssClass?: any,
		dropdownCss?: any,
		dropdownCssClass?: any,
		escapeMarkup?: (markup: string) => string,
		theme?: string,
		templateSelection?: (object: Select2SelectionObject) => any,
		templateResult?: (object: Select2SelectionObject) => any,
		language?: string | string[] | {
		
	},
		selectOnClose?: boolean,
		sorter?: (data: any[]) => any[]
	}

	declare interface Select2JQueryEventObject {
		val: any,
		added: any,
		removed: any,
		choice: {
		id: any,
		text: string
	}
	}

	declare interface Select2SelectionObject {
		loading: boolean,
		disabled: boolean,
		element: HTMLOptionElement,
		id: string,
		selected: boolean,
		text: string,
		title: string
	}

	declare interface JQuery {
		off(
		events?: "change", selector?: any, handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "change", selector?: string, data?: any, handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "change", selector?: string, handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "change", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-opening", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-open", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-close", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-highlight", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-selecting", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-removing", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-removed", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-loaded", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-focus", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-blur", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-opening", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-open", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-close", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-highlight", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-selecting", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-removing", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-removed", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-loaded", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-focus", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		on(
		events: "select2-blur", handler?: (eventObject: Select2JQueryEventObject) => any
	): JQuery,
		select2(): JQuery,
		select2(it: IdTextPair): JQuery,
		select2(method: "val"): any,
		select2(method: "val", value: any, triggerChange?: boolean): any,
		select2(method: "data"): any,
		select2(method: "data", value: any, triggerChange?: boolean): any,
		select2(method: "destroy"): JQuery,
		select2(method: "open"): JQuery,
		select2(method: "close"): JQuery,
		select2(method: "enable", value: boolean): JQuery,
		select2(method: "readonly", value: boolean): JQuery,
		select2(method: "container"): JQuery,
		select2(method: "onSortStart"): JQuery,
		select2(method: "onSortEnd"): JQuery,
		select2(method: string): any,
		select2(method: string, value: any, trigger?: boolean): any,
		select2(options: Select2Options): JQuery
	}

			
}