

declare module 'jquery.elang' {
		declare interface IPageResource {
		lang?: IPageLangItems,
		selectedLang?: string
	}

	declare interface IPageLangItems {
		en?: IPageLabels,
		hu?: IPageLabels
	}

	declare interface IPageLabels {
		lblTitle?: string,
		lblPageHeader?: string,
		lblSearchField?: string,
		lblEditKeyField?: string,
		lblEditValueField?: string,
		lblFindedExpressionsHead?: string,
		lblEditedExpressionsHead?: string,
		lblFindHead?: string,
		lblEditHead?: string,
		lblFind?: string,
		lblAdd?: string,
		lblModify?: string,
		lblRemove?: string,
		lblSearchInExpressions?: string,
		lblSearchInMeanings?: string,
		lblSearchInExpressionsHlp?: string,
		lblSearchInMeaningsHlp?: string,
		lblTestHead?: string,
		lblOrderedTest?: string,
		lblRandomlyTest?: string,
		lblTypedTest?: string,
		lblSelectedTest?: string,
		lblWrittedTest?: string,
		lblVoicedTest?: string,
		lblStartTest?: string,
		lblStopTest?: string,
		lblTypedTestHlp?: string,
		lblSelectedTestHlp?: string,
		lblOrderedTestHlp?: string,
		lblRandomlyTestHlp?: string,
		lblWrittedTestHlp?: string,
		lblVoicedTestHlp?: string
	}

	declare interface ELangCommonStatic {
		resource: IPageResource,
		getLabel(labelid: string, langid?: string): string,
		setLang(langid: string, node?: JQuery): void
	}

	declare interface IELangDBOptions {
		autocompleteRows: number
	}

	declare interface IELangDBDelegates {
		selectHandler: Function,
		insertHandler: Function,
		modifyHandler: Function,
		removeHandler: Function
	}

	declare interface IELangDBEvents {
		select: JQueryDeferred<any>,
		insert: JQueryDeferred<any>,
		modify: JQueryDeferred<any>,
		remove: JQueryDeferred<any>
	}

	declare interface IELangDB {
		cache?: any,
		delegates?: IELangDBDelegates,
		events?: IELangDBEvents,
		isInitialized?: boolean,
		options?: IELangDBOptions,
		name?: string,
		description?: string,
		initialize(options?: IELangDBOptions): void,
		_onSelect(id: string, callback?: Function): void,
		_onInsert(id: string, value: string, callback?: Function): void,
		_onModify(id: string, value: string, callback?: Function): void,
		_onRemove(id: string, callback?: Function): void,
		select(id: string, callback?: Function): void,
		insert(id: string, value: string, callback?: Function): void,
		modify(id: string, value: string, callback?: Function): void,
		remove(id: string, callback?: Function): void,
		sort(): void,
		setOptions(options: IELangDBOptions): void,
		getIndexHash(id: string): string,
		getOptions(): IELangDBOptions
	}

	declare interface ELangStatic {
		getInstance(options?: IELangDBOptions): IELangDB
	}

	declare interface IELangBaseDefaults {
		contentCSS: string,
		contentInnerCSS: string,
		resultCSS: string,
		resultHeadCSS: string,
		contentInnerHtml: string,
		fluidRowHtml: string,
		radioGroupHtml: string,
		radioButtonHtml: string,
		submitButtonHtml: string,
		headLabelHtml: string,
		resultHeadLabelHtml: string,
		resultHtml: string,
		headLabel: string,
		resultHeadLabel: string
	}

	declare interface IELangBase {
		name: string,
		description: string,
		delegates: any,
		element: JQuery,
		events: any,
		options: any,
		defaults: IELangBaseDefaults,
		initialize(target: HTMLElement, options: any): void,
		createContent(): void,
		createRadioGroup(
		node: JQuery, isMethodAppend: boolean, buttonNumber: number, defaultButton: number, btnLabels: string[], clickHandler: Function, btnTooltips?: string[]
	): void,
		appendAsLastChild(node: JQuery, element: JQuery): JQuery,
		getLastChild(node: JQuery): JQuery,
		isRdoChecked(eSrc: HTMLElement, rdoId: string): boolean,
		processCommand(command: string): JQuery,
		setOptions(options: any): void
	}

	declare interface IELangSearchDefaults {
		expressionsLabel: string,
		expressionsTooltip: string,
		meaningsLabel: string,
		meaningsTooltip: string,
		searchFormHtml: string,
		searchFieldHtml: string,
		searchButtonLabel: string
	}

	declare interface IELangSearchDelegates {
		selectHandler: Function,
		selectCallback: Function,
		langDirectionHandler: Function,
		langDirectionClickHandler: Function,
		searchHandler: Function,
		searchClickHandler: Function
	}

	declare interface IELangSearchEvents {
		select: JQueryDeferred<any>
	}

	declare interface IELangSearch {
		defaults: IELangSearchDefaults,
		delegates: IELangSearchDelegates,
		events: IELangSearchEvents,
		isSearchInExp: boolean,
		initialize(target: HTMLElement, options: any): void,
		createContent(): void,
		_onDirectionClick(eSrc: HTMLElement): void,
		_onSelect(eSrc: HTMLInputElement): void,
		_onSelectCallback(): void,
		_select(eSrc: HTMLInputElement): void
	}

	declare interface IELangEditDelegates {
		insertHandler: Function,
		modifyHandler: Function,
		removeHandler: Function,
		selectHandler: Function,
		btnAddHandler: Function,
		btnAddClickHandler: Function,
		insertCallback: Function,
		modifyCallback: Function,
		removeCallback: Function,
		selectCallback: Function
	}

	declare interface IELangEditEvents {
		insert: JQueryDeferred<any>,
		modify: JQueryDeferred<any>,
		remove: JQueryDeferred<any>,
		select: JQueryDeferred<any>
	}

	declare interface IELangEditDefaults {
		editFormHtml: string,
		editFieldHtml: string,
		addButtonHtml: string,
		addButtonLabel: string,
		editKeyLabel: string,
		editValueLabel: string
	}

	declare interface IELangEdit {
		defaults: IELangEditDefaults,
		delegates: IELangEditDelegates,
		events: IELangEditEvents,
		initialize(target: HTMLElement, options: any): void,
		createContent(): void,
		_onAddClick(key: HTMLInputElement, value: HTMLInputElement): void,
		_onInsert(): void,
		_onInsertCallback(): void,
		_onModify(): void,
		_onModifyCallback(): void,
		_onRemove(): void,
		_onRemoveCallback(): void,
		_onSelect(): void,
		_onSelectCallback(): void,
		_insert(): void,
		_modify(): void,
		_remove(): void,
		_select(): void
	}

	declare interface IELangTestDefaults {
		formHtml: string,
		startButtonLabel: string,
		stopButtonLabel: string,
		rdoTypedLabel: string,
		rdoSelectedLabel: string,
		rdoOrderedLabel: string,
		rdoRandomlyLabel: string,
		rdoWrittedLabel: string,
		rdoVoicedLabel: string,
		rdoTypedTooltip: string,
		rdoSelectedTooltip: string,
		rdoOrderedTooltip: string,
		rdoRandomlyTooltip: string,
		rdoWrittedTooltip: string,
		rdoVoicedTooltip: string
	}

	declare interface IELangTestDelegates {
		startStopHandler: Function,
		rdoVariantHandler: Function,
		rdoModeHandler: Function,
		rdoQuestionHandler: Function,
		rdoVariantClickHandler: Function,
		rdoModeClickHandler: Function,
		rdoQuestionClickHandler: Function
	}

	declare interface IELangTest {
		defaults: IELangTestDefaults,
		delegates: IELangTestDelegates,
		initialize(target: HTMLElement, options: any): void,
		createContent(): void,
		_onRdoVariantClick(eSrc: HTMLElement): void,
		_onRdoModeClick(eSrc: HTMLElement): void,
		_onRdoQuestionClick(eSrc: HTMLElement): void,
		_onStartStopClick(): void
	}

	declare interface IFnNewInstance {
		createInstance(el: HTMLElement, options: any, pluginName: string): JQuery
	}

	declare interface IFnJQuery {
		fnPlugin(
		context: JQuery, options: any, command: string, pluginName: string, pluginDataAttribute: string
	): JQuery
	}

			
}