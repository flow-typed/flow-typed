import type { XrmStatic } from 'npm$namespace$Xrm'

declare module 'xrm' {
		declare interface Window {
		Xrm: Xrm.XrmStatic,
		GetGlobalContext(): Xrm.Context
	}

	declare function GetGlobalContext(): Xrm.Context

		
}

declare module 'npm$namespace$Xrm' {
	declare export type Client = "Web" | "Outlook" | "Mobile";

	declare export type ClientState = "Online" | "Offline";

	declare export type Theme = "default" | "Office12Blue" | "Office14Silver";

	declare export interface XrmStatic {
		Page: {
		context: Context,
		data: Data,
		ui: Ui,
		getAttribute(): Page.Attribute[],
		getAttribute<T>(attributeName: string): T,
		getAttribute(attributeName: string): Page.Attribute,
		getAttribute(index: number): Page.Attribute,
		getAttribute(
		delegateFunction: Collection.MatchingDelegate<Page.Attribute>
	): Page.Attribute[],
		getControl(): Page.Control[],
		getControl<T>(controlName: string): T,
		getControl(controlName: string): Page.Control,
		getControl(index: number): Page.Control,
		getControl(delegateFunction: Collection.MatchingDelegate<Page.Control>): Page.Control[]
	},
		Utility: {
		alertDialog(message: string, onCloseCallback: () => void): void,
		confirmDialog(
		message: string, yesCloseCallback: () => void, noCloseCallback: () => void
	): void,
		isActivityType(entityType: string): boolean,
		openQuickCreate(
		entityLogicalName: string, createFromEntity?: Page.LookupValue, parameters?: Utility.OpenParameters
	): Async.XrmPromise,
		openEntityForm(
		name: string, id?: string, parameters?: Utility.FormOpenParameters, windowOptions?: Utility.WindowOptions
	): void,
		openWebResource(
		webResourceName: string, webResourceData?: string, width?: number, height?: number
	): Window
	}
	}

	declare export interface ClientContext {
		getClient(): Client,
		getClientState(): ClientState
	}

	declare interface Context {
		client: ClientContext,
		getClientUrl(): string,
		getCurrentTheme(): Theme,
		getIsAutoSaveEnabled(): boolean,
		getOrgLcid(): number,
		getOrgUniqueName(): string,
		getQueryStringParameters(): {
		[index: string]: any
	},
		getTimeZoneOffsetMinutes(): number,
		getUserId(): string,
		getUserLcid(): number,
		getUserName(): string,
		getUserRoles(): string[],
		prependOrgName(sPath: string): string
	}

	declare export interface Data {
		refresh(save: boolean): Async.XrmPromise,
		save(): Async.XrmPromise,
		entity: Page.Entity,
		process: Page.data.ProcessManager
	}

	declare export interface Ui {
		clearFormNotification(uniqueId: string): boolean,
		close(): void,
		getFormType(): XrmEnum.FormType,
		getViewPortHeight(): number,
		getViewPortWidth(): number,
		refreshRibbon(): void,
		setFormNotification(
		message: string, level: Page.ui.FormNotificationLevel | string, uniqueId: string
	): boolean,
		process: Page.data.ProcessManager,
		controls: Collection.ItemCollection<Page.Control>,
		formSelector: Page.FormSelector,
		navigation: Page.Navigation,
		tabs: Collection.ItemCollection<Page.Tab>
	}

			
}

declare module 'Async' {
	declare export type SuccessCallbackDelegate = (object: any) => void;

	declare export type ErrorCallbackDelegate = (errorCode: number, message: string) => void;

	declare export interface XrmPromise {
		then(
		successCallback: SuccessCallbackDelegate, errorCallback: ErrorCallbackDelegate
	): void
	}

			
}

declare module 'Collection' {
		declare export interface MatchingDelegate<T> {
		(item: T, index?: number): boolean
	}

	declare export interface IterativeDelegate<T> {
		(item: T, index?: number): void
	}

	declare export interface ItemCollection<T> {
		forEach(delegate: IterativeDelegate<T>): void,
		get(delegate: MatchingDelegate<T>): T[],
		get(itemNumber: number): T,
		get(itemName: string): T,
		get(): T[],
		getLength(): number
	}

			
}

declare module 'Page' {
	declare export type RequirementLevel = "none" | "recommended" | "required";

	declare export type SaveMode = "saveandclose" | "saveandnew";

	declare export type Status = "active" | "inactive";

	declare export type SubmitMode = "always" | "dirty" | "never";

	declare export interface Process {
		getId(): string,
		getName(): string,
		getStages(): Collection.ItemCollection<Stage>,
		isRendered(): boolean
	}

	declare export interface Stage {
		getCategory(): {
		getValue(): XrmEnum.StageCategory
	},
		getEntityName(): string,
		getId(): string,
		getName(): string,
		getStatus(): Status,
		getSteps(): Step[]
	}

	declare export interface Step {
		getAttribute(): string,
		getName(): string,
		isRequired(): boolean
	}

	declare export interface EventContext {
		getContext(): Context,
		getDepth(): number,
		getEventArgs(): SaveEventArguments,
		getEventSource(): Attribute | Control | Entity,
		getSharedVariable<T>(key: string): T,
		setSharedVariable<T>(key: string, value: T): void
	}

	declare export interface ContextSensitiveHandler {
		(context?: EventContext): void
	}

	declare export interface UiElement {
		getLabel(): string,
		getVisible(): boolean,
		setLabel(label: string): void,
		setVisible(visible: boolean): void
	}

	declare export interface UiFocusable {
		setFocus(): void
	}

	declare export interface AutoCompleteResult {
		id: string | number,
		icon?: string,
		fields: string[]
	}

	declare export interface AutoCompleteCommand {
		id: string,
		icon?: string,
		label: string,
		action(): void
	}

	declare export interface AutoCompleteResultSet {
		results: AutoCompleteResult[],
		commands?: AutoCompleteCommand
	}

	declare export interface LookupValue {
		id: string,
		name?: string,
		entityType: string
	}

	declare export interface OptionSetValue {
		text: string,
		value: number
	}

	declare export interface Privilege {
		canRead: boolean,
		canUpdate: boolean,
		canCreate: boolean
	}

	declare export interface Attribute {
		addOnChange(handler: ContextSensitiveHandler): void,
		fireOnChange(): void,
		getAttributeType(): string,
		getFormat(): string,
		getIsDirty(): boolean,
		getName(): string,
		getParent(): Entity,
		getRequiredLevel(): RequirementLevel,
		getSubmitMode(): SubmitMode,
		getUserPrivilege(): Privilege,
		removeOnChange(handler: ContextSensitiveHandler): void,
		setRequiredLevel(requirementLevel: RequirementLevel | string): void,
		setSubmitMode(submitMode: SubmitMode | string): void,
		controls: Collection.ItemCollection<Control>
	}

	declare export interface NumberAttribute {
		getMax(): number,
		getMin(): number,
		getPrecision(): number,
		getValue(): number,
		setValue(value: number): void
	}

	declare export interface StringAttribute {
		getMaxLength(): number,
		getValue(): string,
		setValue(value: string): void
	}

	declare export interface EnumAttribute {
		getInitialValue(): number | boolean
	}

	declare export interface BooleanAttribute {
		getValue(): boolean,
		setValue(value: boolean): void
	}

	declare export interface DateAttribute {
		getValue(): Date,
		setValue(value: Date): void
	}

	declare export interface OptionSetAttribute {
		getOption(value: number): OptionSetValue,
		getOption(label: string): OptionSetValue,
		getOptions(): OptionSetValue[],
		getSelectedOption(): OptionSetValue,
		getText(): string,
		getValue(): number,
		setValue(value: number): void
	}

	declare export interface LookupAttribute {
		getIsPartyList(): boolean,
		getValue(): LookupValue[],
		setValue(value: LookupValue[]): void
	}

	declare export interface Entity {
		addOnSave(handler: ContextSensitiveHandler): void,
		getDataXml(): string,
		getEntityName(): string,
		getId(): string,
		getIsDirty(): boolean,
		getPrimaryAttributeValue(): string,
		removeOnSave(handler: ContextSensitiveHandler): void,
		save(): void,
		save(saveMode: SaveMode | string): void,
		attributes: Collection.ItemCollection<Attribute>
	}

	declare export interface SaveEventArguments {
		getSaveMode(): XrmEnum.SaveMode,
		isDefaultPrevented(): boolean,
		preventDefault(): void
	}

	declare export interface Control {
		clearNotification(uniqueId?: string): boolean,
		getControlType(): string,
		getDisabled(): boolean,
		getName(): string,
		getParent(): Section,
		setDisabled(disabled: boolean): void,
		setNotification(message: string, uniqueId: string): boolean
	}

	declare export interface StandardControl {
		getAttribute<T>(): T,
		getAttribute(): Attribute
	}

	declare export interface AutoLookupControl {
		addOnKeyPress(handler: ContextSensitiveHandler): void,
		fireOnKeyPress(): void,
		getValue(): string,
		hideAutoComplete(): void,
		removeOnKeyPress(handler: ContextSensitiveHandler): void,
		showAutoComplete(resultSet: AutoCompleteResultSet): void
	}

	declare export interface DateControl {
		getAttribute(): DateAttribute,
		getShowTime(): boolean,
		setShowTime(showTimeValue: boolean): void
	}

	declare export interface LookupControl {
		addPreSearch(handler: ContextSensitiveHandler): void,
		addCustomFilter(filter: string, entityLogicalName?: string): void,
		addCustomView(
		viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean
	): void,
		getAttribute(): LookupAttribute,
		getDefaultView(): string,
		removePreSearch(handler: () => void): void,
		setDefaultView(viewGuid: string): void
	}

	declare export interface OptionSetControl {
		addOption(option: OptionSetValue, index?: number): void,
		clearOptions(): void,
		getAttribute(): OptionSetAttribute,
		removeOption(value: number): void
	}

	declare export interface GridControl {
		addOnLoad(handler: () => void): void,
		getContextType(): XrmEnum.GridControlContext,
		getEntityName(): string,
		getGrid(): ui.Grid,
		getViewSelector(): ui.ViewSelector,
		refresh(): void,
		removeOnLoad(handler: () => void): void
	}

	declare export interface FramedControl {
		getObject(): HTMLIFrameElement,
		getSrc(): string,
		setSrc(src: string): void
	}

	declare export interface IframeControl {
		getInitialUrl(): string
	}

	declare export interface SilverlightControl {
		getData(): string,
		setData(data: string): void,
		getObject(): HTMLObjectElement
	}

	declare export interface Tab {
		getDisplayState(): ui.DisplayState,
		getName(): string,
		getParent(): Ui,
		setDisplayState(displayState: ui.DisplayState | string): void,
		sections: Collection.ItemCollection<Section>
	}

	declare export interface Section {
		getName(): string,
		getParent(): Tab,
		controls: Collection.ItemCollection<Control>
	}

	declare export interface NavigationItem {
		getId(): string
	}

	declare export interface Navigation {
		items: Collection.ItemCollection<NavigationItem>
	}

	declare export interface FormItem {
		getId(): string,
		getLabel(): string,
		navigate(): void
	}

	declare export interface FormSelector {
		getCurrentItem(): FormItem,
		items: Collection.ItemCollection<FormItem>
	}

			
}

declare module 'data' {
	declare export type ProcessCallbackDelegate = (status: string) => void;

	declare export type ProcessDictionary = {
		[index: string]: string
	};

	declare export interface ProcessManager {
		getActiveProcess(): Process,
		setActiveProcess(processId: string, callbackFunction?: ProcessCallbackDelegate): void,
		getActiveStage(): Stage,
		setActiveStage(stageId: string, callbackFunction?: ProcessCallbackDelegate): void,
		getActivePath(): Collection.ItemCollection<Stage>,
		getEnabledProcesses(callbackFunction: (enabledProcesses: ProcessDictionary) => void): void,
		getSelectedStage(): Stage,
		addOnStageChange(handler: ContextSensitiveHandler): void,
		addOnStageSelected(handler: ContextSensitiveHandler): void,
		removeOnStageChange(handler: ContextSensitiveHandler): void,
		removeOnStageSelected(handler: ContextSensitiveHandler): void,
		moveNext(callbackFunction?: ProcessCallbackDelegate): void,
		movePrevious(callbackFunction?: ProcessCallbackDelegate): void
	}

			
}

declare module 'ui' {
	declare export type FormNotificationLevel = "ERROR" | "INFO" | "WARNING";

	declare export type DisplayState = "collapsed" | "expanded";

	declare export interface ProcessManager {
		setDisplayState(displayState: ui.DisplayState): void,
		setVisible(visible: boolean): void
	}

	declare export interface Grid {
		getRows(): Collection.ItemCollection<GridRow>,
		getSelectedRows(): Collection.ItemCollection<GridRow>,
		getTotalRecordCount(): number
	}

	declare export interface GridRow {
		getData(): GridRowData
	}

	declare export interface GridRowData {
		getEntity(): GridEntity
	}

	declare export interface GridEntity {
		getEntityName(): string,
		getEntityReference(): LookupValue,
		getId(): string,
		getPrimaryAttributeValue(): string
	}

	declare export interface ViewSelector {
		getCurrentView(): ViewSelectorItem,
		isVisible(): boolean,
		setCurrentView(viewSelectorItem: ViewSelectorItem): void
	}

	declare export interface ViewSelectorItem {
		getEntityReference(): LookupValue
	}

			
}

declare module 'Url' {
	declare export type CmdBarDisplay = "true" | "false";

	declare export type NavBarDisplay = "entity" | "off" | "on";

	declare export type ReportAction = "filter" | "run";

	declare export interface FormOpenParameters {
		etn: string,
		extraqs?: string,
		cmdbar?: CmdBarDisplay,
		navbar?: NavBarDisplay
	}

	declare export interface ViewOpenParameters {
		etn: string,
		viewid: string,
		viewtype: XrmEnum.ViewType,
		cmdbar?: CmdBarDisplay,
		navbar?: NavBarDisplay
	}

	declare export interface DialogOpenParameters {
		DialogId: string,
		EntityName: string,
		ObjectId: string
	}

	declare export interface ReportOpenParameters {
		action: ReportAction,
		helpID?: string,
		id: string
	}

			
}

declare module 'Utility' {
		declare export interface OpenParameters {
		[index: string]: string
	}

	declare export interface FormOpenParameters {
		formid: string,
		navbar?: Url.NavBarDisplay,
		cmdbar?: Url.CmdBarDisplay
	}

	declare export interface WindowOptions {
		openInNewWindow: boolean
	}

			
}