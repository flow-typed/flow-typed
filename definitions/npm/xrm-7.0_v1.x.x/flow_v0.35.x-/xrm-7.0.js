

declare module 'xrm-7.0' {
			declare function GetGlobalContext(): Xrm.Context

		
}

declare module 'npm$namespace$Xrm' {
		declare export interface ClientContext {
		getClient(): string,
		getClientState(): string
	}

	declare export interface Context {
		client: ClientContext,
		getClientUrl(): string,
		getCurrentTheme(): string,
		getIsAutoSaveEnabled(): boolean,
		getOrgLcid(): number,
		getOrgUniqueName(): string,
		getQueryStringParameters(): {
		[index: string]: any
	},
		getUserId(): string,
		getUserLcid(): number,
		getUserName(): string,
		getUserRoles(): string[],
		prependOrgName(sPath: string): string
	}

			
}

declare module 'Async' {
	declare export type SuccessCallbackDelegate = () => void;

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
		declare export interface Process {
		getId(): string,
		getName(): string,
		getStages(): Collection.ItemCollection<Stage>,
		isRendered(): boolean
	}

	declare export interface Stage {
		getCategory(): {
		getValue(): StageCategory
	},
		getEntityName(): string,
		getId(): string,
		getName(): string,
		getStatus(): string,
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
		getEventSource(): Xrm.Page.Attribute | Xrm.Page.Entity,
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

	declare export interface LookupValue {
		id: string,
		name?: string,
		entityType: string
	}

	declare export interface OptionSetValue {
		text: string,
		value: string
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
		getRequiredLevel(): string,
		getSubmitMode(): string,
		getUserPrivilege(): Privilege,
		removeOnChange(handler: ContextSensitiveHandler): void,
		setRequiredLevel(requirementLevel: "none"): void,
		setRequiredLevel(requirementLevel: "required"): void,
		setRequiredLevel(requirementLevel: "recommended"): void,
		setRequiredLevel(requirementLevel: string): void,
		setSubmitMode(submitMode: "always"): void,
		setSubmitMode(submitMode: "never"): void,
		setSubmitMode(submitMode: "dirty"): void,
		setSubmitMode(submitMode: string): void,
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
		save(saveMode: "saveandclose"): void,
		save(saveMode: "saveandnew"): void,
		save(saveMode: string): void,
		attributes: Collection.ItemCollection<Attribute>
	}

	declare export interface SaveEventArguments {
		getSaveMode(): SaveMode,
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

	declare export interface DateControl {
		getAttribute(): DateAttribute,
		setShowTime(showTimeValue: boolean): void
	}

	declare export interface LookupControl {
		addPreSearch(handler: () => void): void,
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
		refresh(): void
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
		getDisplayState(): string,
		getName(): string,
		getParent(): typeof ui,
		setDisplayState(displayState: "collapsed"): void,
		setDisplayState(displayState: "expanded"): void,
		setDisplayState(displayState: string): void,
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

	declare export function getAttribute(): Attribute[]

	declare export function getAttribute<T>(attributeName: string): T

	declare export function getAttribute(attributeName: string): Attribute

	declare export function getAttribute(index: number): Attribute

	declare export function getAttribute(delegateFunction: Collection.MatchingDelegate<Attribute>): Attribute[]

	declare export function getControl(): Control[]

	declare export function getControl<T>(controlName: string): T

	declare export function getControl(controlName: string): Control

	declare export function getControl(index: number): Control

	declare export function getControl(delegateFunction: Collection.MatchingDelegate<Control>): Control[]

		
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
		addOnStageChange(handler: ContextSensitiveHandler): void,
		removeOnStageSelected(handler: ContextSensitiveHandler): void,
		moveNext(callbackFunction?: ProcessCallbackDelegate): void,
		movePrevious(callbackFunction?: ProcessCallbackDelegate): void
	}

	declare export function refresh(save: boolean): Async.XrmPromise

	declare export function save(): Async.XrmPromise

		
}

declare module 'ui' {
		declare export interface ProcessManager {
		setDisplayState(displayState: "collapsed"): void,
		setDisplayState(displayState: "expanded"): void,
		setDisplayState(displayState: string): void,
		setVisible(visible: boolean): void
	}

	declare export function clearFormNotification(uniqueId: string): boolean

	declare export function close(): void

	declare export function getFormType(): FormType

	declare export function getViewPortHeight(): number

	declare export function getViewPortWidth(): number

	declare export function refreshRibbon(): void

	declare export function setFormNotification(message: string, level: "ERROR", uniqueId: string): boolean

	declare export function setFormNotification(message: string, level: "WARNING", uniqueId: string): boolean

	declare export function setFormNotification(message: string, level: "INFO", uniqueId: string): boolean

	declare export function setFormNotification(message: string, level: string, uniqueId: string): boolean

		
}

declare module 'Url' {
		declare export interface FormOpenParameters {
		etn: string,
		extraqs?: string,
		cmdbar?: string,
		navbar?: string
	}

	declare export interface ViewOpenParameters {
		etn: string,
		viewid: string,
		viewtype: ViewType,
		cmdbar?: string,
		navbar?: string
	}

	declare export interface DialogOpenParameters {
		DialogId: string,
		EntityName: string,
		ObjectId: string
	}

	declare export interface ReportOpenParameters {
		action: string,
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
		navbar?: string,
		cmdbar?: string
	}

	declare export function alertDialog(message: string, onCloseCallback: () => void): void

	declare export function confirmDialog(
		message: string, yesCloseCallback: () => void, noCloseCallback: () => void
	): void

	declare export function isActivityType(entityType: string): boolean

	declare export function openEntityForm(name: string, id?: string, parameters?: FormOpenParameters): void

	declare export function openWebResource(
		webResourceName: string, webResourceData?: string, width?: number, height?: number
	): Window

		
}