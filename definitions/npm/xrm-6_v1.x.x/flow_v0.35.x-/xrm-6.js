

declare module 'xrm-6' {
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
		declare export interface SuccessCallbackDelegate {
		(): void
	}

	declare export interface ErrorCallbackDelegate {
		(errorCode: number, message: string): void
	}

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
		controls: Collection.ItemCollection<Control>,
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
		setSubmitMode(submitMode: string): void
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
		attributes: Collection.ItemCollection<Attribute>,
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
		save(saveMode: string): void
	}

	declare export interface SaveEventArguments {
		getSaveMode(): SaveMode,
		isDefaultPrevented(): boolean,
		preventDefault(): void
	}

	declare export interface Data {
		entity: Entity,
		refresh(save: boolean): Async.XrmPromise,
		save(): Async.XrmPromise
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
		sections: Collection.ItemCollection<Section>,
		getDisplayState(): string,
		getName(): string,
		getParent(): Ui,
		setDisplayState(displayState: "collapsed"): void,
		setDisplayState(displayState: "expanded"): void,
		setDisplayState(displayState: string): void
	}

	declare export interface Section {
		controls: Collection.ItemCollection<Control>,
		getName(): string,
		getParent(): Tab
	}

	declare export interface Ui {
		controls: Collection.ItemCollection<Control>,
		formSelector: FormSelector,
		navigation: Navigation,
		tabs: Collection.ItemCollection<Tab>,
		clearFormNotification(uniqueId: string): boolean,
		close(): void,
		getFormType(): FormType,
		getViewPortHeight(): number,
		getViewPortWidth(): number,
		refreshRibbon(): void,
		setFormNotification(message: string, level: "ERROR", uniqueId: string): boolean,
		setFormNotification(message: string, level: "WARNING", uniqueId: string): boolean,
		setFormNotification(message: string, level: "INFO", uniqueId: string): boolean,
		setFormNotification(message: string, level: string, uniqueId: string): boolean
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
		declare export interface FormOpenParameters {
		formid: string,
		navbar?: string,
		cmdbar?: string,
		[index: string]: string
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