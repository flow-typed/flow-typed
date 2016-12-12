

declare module 'selectize' {
		declare interface JQuery {
		selectize(options?: Selectize.IOptions<any, any>): JQuery
	}

	declare interface HTMLElement {
		selectize: Selectize.IApi<any, any>
	}

			
}

declare module 'npm$namespace$Selectize' {
		declare interface IOptions<T, U> {
		delimiter?: string,
		diacritics?: boolean,
		create?: any,
		createOnBlur?: boolean,
		createFilter?: any,
		highlight?: boolean,
		persist?: boolean,
		openOnFocus?: boolean,
		maxOptions?: number,
		maxItems?: number,
		hideSelected?: boolean,
		allowEmptyOption?: boolean,
		scrollDuration?: number,
		loadThrottle?: number,
		preload?: any,
		dropdownParent?: string,
		addPrecedence?: boolean,
		selectOnTab?: boolean,
		plugins?: string[],
		options?: U[],
		dataAttr?: string,
		valueField?: string,
		optgroups?: U[],
		optgroupValueField?: string,
		labelField?: string,
		optgroupLabelField?: string,
		optgroupField?: string,
		sortField?: any,
		searchField?: any,
		searchConjunction?: string,
		optgroupOrder?: string[],
		copyClassesToDropdown?: boolean,
		load(query: string, callback: Function): any,
		score(search: ISearch): (item: any) => number,
		onInitialize(): any,
		onChange(value: any): any,
		onItemAdd(value: T, item: JQuery): any,
		onItemRemove(value: T): any,
		onClear(): any,
		onDelete(values: T[]): any,
		onOptionAdd(value: T, data: U): any,
		onOptionRemove(value: T): any,
		onDropdownOpen(dropdown: JQuery): any,
		onDropdownClose(dropdown: JQuery): any,
		onType(srt: string): any,
		onLoad(data: U[]): any,
		render?: ICustomRenderers<U>
	}

	declare interface ICustomRenderers<U> {
		option(data: U, escape: (input: string) => string): string,
		item(data: U, escape: (input: string) => string): string,
		option_create(data: U, escape: (input: string) => string): string,
		optgroup_header(data: U, escape: (input: string) => string): string,
		optgroup(data: U, escape: (input: string) => string): string
	}

	declare interface IApi<T, U> {
		addOption(data: U): void,
		updateOption(value: T, data: U): void,
		removeOption(value: T): void,
		clearOptions(): void,
		getOption(value: T): any,
		getAdjacentOption(value: T, direction: number): void,
		refreshOptions(triggerDropdown: boolean): void,
		clear(): void,
		getItem(value: T): JQuery,
		addItem(value: T): void,
		removeItem(value: T): void,
		createItem(value: T): void,
		refreshItems(): void,
		addOptionGroup(id: string, data: U): void,
		on(eventName: string, handler: Function): void,
		off(eventName: string, handler?: Function): void,
		trigger(eventName: string, ...args: any[]): void,
		open(): void,
		close(): void,
		positionDropdown(): void,
		destroy(): void,
		load(callback: (results: any) => any): void,
		focus(): void,
		blur(): void,
		lock(): void,
		unlock(): void,
		disable(): void,
		enable(): void,
		getValue(): any,
		setValue(value: T): void,
		setValue(value: T[]): void,
		setCaret(index: number): void,
		isFull(): boolean,
		clearCache(template?: string): void,
		updatePlaceholder(): void
	}

	declare interface ISearchToken {
		regex: RegExp,
		string: string
	}

	declare interface ISearchResult {
		id: string,
		score: number
	}

	declare interface ISearch {
		options: any,
		query: string,
		tokens: ISearchToken[],
		total: number,
		items: ISearchResult[]
	}

			
}