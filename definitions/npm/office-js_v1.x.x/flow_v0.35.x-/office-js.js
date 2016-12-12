

declare module 'office-js' {
					
}

declare module 'npm$namespace$Office' {
		declare export interface AsyncResult {
		asyncContext: any,
		status: AsyncResultStatus,
		error: Error,
		value: any
	}

	declare export interface Context {
		contentLanguage: string,
		displayLanguage: string,
		license: string,
		touchEnabled: boolean,
		ui: UI,
		requirements: {
		isSetSupported(name: string, minVersion?: number): boolean
	}
	}

	declare export interface Error {
		message: string,
		name: string
	}

	declare export interface UI {
		displayDialogAsync(
		startAddress: string, options?: DialogOptions, callback?: (result: AsyncResult) => void
	): void,
		messageParent(messageObject: any): void
	}

	declare export interface DialogOptions {
		height?: number,
		width?: number,
		xFrameDenySafe?: boolean
	}

	declare export interface DialogHandler {
		close(): void,
		addEventHandler(eventType: Office.EventType, handler: Function): void
	}

	declare export interface Binding {
		document: Document,
		id: string,
		type: BindingType,
		addHandlerAsync(
		eventType: EventType, handler: any, options?: any, callback?: (result: AsyncResult) => void
	): void,
		getDataAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		removeHandlerAsync(
		eventType: EventType, options?: any, callback?: (result: AsyncResult) => void
	): void,
		setDataAsync(
		data: TableData | any, options?: any, callback?: (result: AsyncResult) => void
	): void
	}

	declare export interface Bindings {
		document: Document,
		addFromNamedItemAsync(
		itemName: string, bindingType: BindingType, options?: any, callback?: (result: AsyncResult) => void
	): void,
		addFromPromptAsync(
		bindingType: BindingType, options?: any, callback?: (result: AsyncResult) => void
	): void,
		addFromSelectionAsync(
		bindingType: BindingType, options?: any, callback?: (result: AsyncResult) => void
	): void,
		getAllAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		getByIdAsync(id: string, options?: any, callback?: (result: AsyncResult) => void): void,
		releaseByIdAsync(id: string, options?: any, callback?: (result: AsyncResult) => void): void
	}

	declare export interface Context {
		document: Document
	}

	declare export interface CustomXmlNode {
		baseName: string,
		namespaceUri: string,
		nodeType: string,
		getNodesAsync(xPath: string, options?: any, callback?: (result: AsyncResult) => void): void,
		getNodeValueAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		getTextAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		getXmlAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		setNodeValueAsync(value: string, options?: any, callback?: (result: AsyncResult) => void): void,
		setTextAsync(text: string, options?: any, callback?: (result: AsyncResult) => void): void,
		setXmlAsync(xml: string, options?: any, callback?: (result: AsyncResult) => void): void
	}

	declare export interface CustomXmlPart {
		builtIn: boolean,
		id: string,
		namespaceManager: CustomXmlPrefixMappings,
		addHandlerAsync(
		eventType: EventType, handler?: (result: any) => void, options?: any, callback?: (result: AsyncResult) => void
	): void,
		deleteAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		getNodesAsync(xPath: string, options?: any, callback?: (result: AsyncResult) => void): void,
		getXmlAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		removeHandlerAsync(
		eventType: EventType, options?: any, callback?: (result: AsyncResult) => void
	): void
	}

	declare export interface CustomXmlParts {
		addAsync(xml: string, options?: any, callback?: (result: AsyncResult) => void): void,
		getByIdAsync(id: string, options?: any, callback?: (result: AsyncResult) => void): void,
		getByNamespaceAsync(ns: string, options?: any, callback?: (result: AsyncResult) => void): void
	}

	declare export interface CustomXmlPrefixMappings {
		addNamespaceAsync(
		prefix: string, ns: string, options?: any, callback?: (result: AsyncResult) => void
	): void,
		getNamespaceAsync(prefix: string, options?: any, callback?: (result: AsyncResult) => void): void,
		getPrefixAsync(ns: string, options?: any, callback?: (result: AsyncResult) => void): void
	}

	declare export interface Document {
		bindings: Bindings,
		customXmlParts: CustomXmlParts,
		mode: DocumentMode,
		settings: Settings,
		url: string,
		addHandlerAsync(
		eventType: EventType, handler: any, options?: any, callback?: (result: AsyncResult) => void
	): void,
		getActiveViewAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		getFileAsync(
		fileType: FileType, options?: any, callback?: (result: AsyncResult) => void
	): void,
		getFilePropertiesAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		getSelectedDataAsync(
		coercionType: CoercionType, options?: any, callback?: (result: AsyncResult) => void
	): void,
		goToByIdAsync(
		id: string | number, goToType: GoToType, options?: any, callback?: (result: AsyncResult) => void
	): void,
		removeHandlerAsync(
		eventType: EventType, options?: any, callback?: (result: AsyncResult) => void
	): void,
		setSelectedDataAsync(
		data: string | TableData | any[][], options?: any, callback?: (result: AsyncResult) => void
	): void
	}

	declare export interface File {
		size: number,
		sliceCount: number,
		closeAsync(callback?: (result: AsyncResult) => void): void,
		getSliceAsync(sliceIndex: number, callback?: (result: AsyncResult) => void): void
	}

	declare export interface FileProperties {
		url: string
	}

	declare export interface MatrixBinding {
		columnCount: number,
		rowCount: number
	}

	declare export interface Settings {
		addHandlerAsync(
		eventType: EventType, handler: any, options?: any, callback?: (result: AsyncResult) => void
	): void,
		get(name: string): any,
		refreshAsync(callback?: (result: AsyncResult) => void): void,
		remove(name: string): void,
		removeHandlerAsync(
		eventType: EventType, options?: any, callback?: (result: AsyncResult) => void
	): void,
		saveAsync(callback?: (result: AsyncResult) => void): void,
		set(name: string, value: any): void
	}

	declare export interface Slice {
		data: any,
		index: number,
		size: number
	}

	declare export interface TableBinding {
		columnCount: number,
		hasHeaders: boolean,
		rowCount: number,
		addColumnsAsync(
		tableData: TableData | any[][], options?: any, callback?: (result: AsyncResult) => void
	): void,
		addRowsAsync(
		rows: TableData | any[][], options?: any, callback?: (result: AsyncResult) => void
	): void,
		deleteAllDataValuesAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		clearFormatsAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		getFormatsAsync(
		cellReference?: any, formats?: any[], options?: any, callback?: (result: AsyncResult) => void
	): void,
		setFormatsAsync(
		formatsInfo?: any[], options?: any, callback?: (result: AsyncResult) => void
	): void,
		setTableOptionsAsync(
		tableOptions: any, options?: any, callback?: (result: AsyncResult) => void
	): void
	}

	declare export interface TextBinding {
		
	}

	declare export interface Document {
		getProjectFieldAsync(fieldId: number, options?: any, callback?: (result: AsyncResult) => void): void,
		getResourceFieldAsync(
		resourceId: string, fieldId: number, options?: any, callback?: (result: AsyncResult) => void
	): void,
		getSelectedResourceAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		getSelectedTaskAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		getSelectedViewAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		getTaskAsync(taskId: string, options?: any, callback?: (result: AsyncResult) => void): void,
		getTaskFieldAsync(
		taskId: string, fieldId: number, options?: any, callback?: (result: AsyncResult) => void
	): void,
		getWSSUrlAsync(options?: any, callback?: (result: AsyncResult) => void): void
	}

	declare export interface AttachmentDetails {
		attachmentType: Office.MailboxEnums.AttachmentType,
		contentType: string,
		id: string,
		isInline: boolean,
		name: string,
		size: number
	}

	declare export interface Contact {
		personName: string,
		businessName: string,
		phoneNumbers: PhoneNumber[],
		emailAddresses: string[],
		urls: string[],
		addresses: string[],
		contactString: string
	}

	declare export interface Context {
		mailbox: Mailbox,
		roamingSettings: RoamingSettings
	}

	declare export interface CustomProperties {
		get(name: string): any,
		set(name: string, value: string): void,
		remove(name: string): void,
		saveAsync(callback?: (result: AsyncResult) => void, userContext?: any): void
	}

	declare export interface EmailAddressDetails {
		emailAddress: string,
		displayName: string,
		appointmentResponse: Office.MailboxEnums.ResponseType,
		recipientType: Office.MailboxEnums.RecipientType
	}

	declare export interface EmailUser {
		name: string,
		userId: string
	}

	declare export interface Entities {
		addresses: string[],
		taskSuggestions: string[],
		meetingSuggestions: MeetingSuggestion[],
		emailAddresses: string[],
		urls: string[],
		phoneNumbers: PhoneNumber[],
		contacts: Contact[]
	}

	declare export interface Item {
		dateTimeCreated: Date,
		dateTimeModified: Date,
		itemClass: string,
		itemId: string,
		itemType: Office.MailboxEnums.ItemType,
		loadCustomPropertiesAsync(callback?: (result: AsyncResult) => void, userContext?: any): void
	}

	declare export interface Appointment {
		
	}

	declare export interface Body {
		getTypeAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		prependAsync(data: string, options?: any, callback?: (result: AsyncResult) => void): void,
		setSelectedDataAsync(data: string, options?: any, callback?: (result: AsyncResult) => void): void
	}

	declare export interface Location {
		getAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		setAsync(
		location: string, options?: any, callback?: (result: AsyncResult) => void
	): void
	}

	declare export interface Mailbox {
		item: Item,
		userProfile: UserProfile,
		convertToLocalClientTime(timeValue: Date): any,
		convertToUtcClientTime(input: any): Date,
		displayAppointmentForm(itemId: any): void,
		displayMessageForm(itemId: any): void,
		displayNewAppointmentForm(
		requiredAttendees: any, optionalAttendees: any, start: Date, end: Date, location: string, resources: string[], subject: string, body: string
	): void,
		getCallbackTokenAsync(callback?: (result: AsyncResult) => void, userContext?: any): void,
		getUserIdentityTokenAsync(callback?: (result: AsyncResult) => void, userContext?: any): void,
		makeEwsRequestAsync(data: any, callback?: (result: AsyncResult) => void, userContext?: any): void
	}

	declare export interface Message {
		conversationId: string
	}

	declare export interface MeetingRequest {
		start: Date,
		end: Date,
		location: string,
		optionalAttendees: EmailAddressDetails[],
		requiredAttendees: EmailAddressDetails[]
	}

	declare export interface MeetingSuggestion {
		meetingString: string,
		attendees: EmailAddressDetails[],
		location: string,
		subject: string,
		start: Date,
		end: Date
	}

	declare export interface PhoneNumber {
		phoneString: string,
		originalPhoneString: string,
		type: string
	}

	declare export interface Recipients {
		addAsync(recipients: any, options?: any, callback?: (result: AsyncResult) => void): void,
		getAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		setAsync(recipients: any, options?: any, callback?: (result: AsyncResult) => void): void
	}

	declare export interface RoamingSettings {
		get(name: string): any,
		remove(name: string): void,
		saveAsync(callback?: (result: AsyncResult) => void): void,
		set(name: string, value: any): void
	}

	declare export interface Subject {
		getAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		setAsync(data: string, options?: any, callback?: (result: AsyncResult) => void): void
	}

	declare export interface TaskSuggestion {
		assignees: EmailUser[],
		taskString: string
	}

	declare export interface Time {
		getAsync(options?: any, callback?: (result: AsyncResult) => void): void,
		setAsync(dateTime: Date, options?: any, callback?: (result: AsyncResult) => void): void
	}

	declare export interface UserProfile {
		displayName: string,
		emailAddress: string,
		timeZone: string
	}

	declare export function initialize(reason: InitializationReason): void

	declare export function useShortNamespace(useShortNamespace: boolean): void

	declare export function select(expression: string, callback?: (result: AsyncResult) => void): Binding

	declare export class TableData  {
		constructor(rows: any[][], headers: any[]): this;
		constructor(): this;
		headers: any[];
		rows: any[][]
	}

	
}

declare module 'Types' {
		declare export interface ItemRead {
		subject: any,
		displayReplyAllForm(htmlBody: string): void,
		displayReplyForm(htmlBody: string): void,
		getEntities(): Office.Entities,
		getEntitiesByType(entityType: Office.MailboxEnums.EntityType): Office.Entities,
		getFilteredEntitiesByName(name: string): Office.Entities,
		getRegExMatches(): string[],
		getRegExMatchesByName(name: string): string[]
	}

	declare export interface ItemCompose {
		body: Office.Body,
		subject: any,
		addFileAttachmentAsync(
		uri: string, attachmentName: string, options?: any, callback?: (result: AsyncResult) => void
	): void,
		addItemAttachmentAsync(
		itemId: any, attachmentName: string, options?: any, callback?: (result: AsyncResult) => void
	): void,
		removeAttachmentAsync(
		attachmentIndex: string, option?: any, callback?: (result: AsyncResult) => void
	): void
	}

	declare export interface MessageCompose {
		attachments: Office.AttachmentDetails[],
		body: Office.Body,
		bcc: Office.Recipients,
		cc: Office.Recipients,
		subject: Office.Subject,
		to: Office.Recipients,
		addFileAttachmentAsync(
		uri: string, attachmentName: string, options?: any, callback?: (result: AsyncResult) => void
	): void,
		addItemAttachmentAsync(
		itemId: any, attachmentName: string, options?: any, callback?: (result: AsyncResult) => void
	): void,
		removeAttachmentAsync(
		attachmentIndex: string, option?: any, callback?: (result: AsyncResult) => void
	): void
	}

	declare export interface MessageRead {
		cc: Office.EmailAddressDetails[],
		from: Office.EmailAddressDetails,
		internetMessageId: string,
		normalizedSubject: string,
		sender: Office.EmailAddressDetails,
		subject: string,
		to: Office.EmailAddressDetails,
		displayReplyAllForm(htmlBody: string): void,
		displayReplyForm(htmlBody: string): void,
		getEntities(): Office.Entities,
		getEntitiesByType(entityType: Office.MailboxEnums.EntityType): Office.Entities,
		getFilteredEntitiesByName(name: string): Office.Entities,
		getRegExMatches(): string[],
		getRegExMatchesByName(name: string): string[]
	}

	declare export interface AppointmentCompose {
		body: Office.Body,
		end: Office.Time,
		location: Office.Location,
		optionalAttendees: Office.Recipients,
		requiredAttendees: Office.Recipients,
		start: Office.Time,
		subject: Office.Subject,
		addFileAttachmentAsync(
		uri: string, attachmentName: string, options?: any, callback?: (result: AsyncResult) => void
	): void,
		addItemAttachmentAsync(
		itemId: any, attachmentName: string, options?: any, callback?: (result: AsyncResult) => void
	): void,
		removeAttachmentAsync(
		attachmentIndex: string, option?: any, callback?: (result: AsyncResult) => void
	): void
	}

	declare export interface AppointmentRead {
		attachments: Office.AttachmentDetails[],
		end: Date,
		location: string,
		normalizedSubject: string,
		optionalAttendees: Office.EmailAddressDetails,
		organizer: Office.EmailAddressDetails,
		requiredAttendees: Office.EmailAddressDetails,
		resources: string[],
		start: Date,
		subject: string,
		displayReplyAllForm(htmlBody: string): void,
		displayReplyForm(htmlBody: string): void,
		getEntities(): Office.Entities,
		getEntitiesByType(entityType: Office.MailboxEnums.EntityType): Office.Entities,
		getFilteredEntitiesByName(name: string): Office.Entities,
		getRegExMatches(): string[],
		getRegExMatchesByName(name: string): string[]
	}

			
}

declare module 'item' {
			declare function toAppointmentCompose(item: Office.Item): Office.Types.AppointmentCompose

	declare function toAppointmentRead(item: Office.Item): Office.Types.AppointmentRead

	declare function toAppointment(item: Office.Item): Office.Appointment

	declare function toMessageCompose(item: Office.Item): Office.Types.MessageCompose

	declare function toMessageRead(item: Office.Item): Office.Types.MessageRead

	declare function toMessage(item: Office.Item): Office.Message

	declare function toItemCompose(item: Office.Item): Office.Types.ItemCompose

	declare function toItemRead(item: Office.Item): Office.Types.ItemRead

		
}

declare module 'OfficeExtension' {
		declare interface LoadOption {
		select?: string | string[],
		expand?: string | string[],
		top?: number,
		skip?: number
	}

	declare interface IPromise<R> {
		then<U>(
		onFulfilled?: (value: R) => IPromise<U>, onRejected?: (error: any) => IPromise<U>
	): IPromise<U>,
		then<U>(
		onFulfilled?: (value: R) => IPromise<U>, onRejected?: (error: any) => U
	): IPromise<U>,
		then<U>(
		onFulfilled?: (value: R) => IPromise<U>, onRejected?: (error: any) => void
	): IPromise<U>,
		then<U>(
		onFulfilled?: (value: R) => U, onRejected?: (error: any) => IPromise<U>
	): IPromise<U>,
		then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): IPromise<U>,
		then<U>(
		onFulfilled?: (value: R) => U, onRejected?: (error: any) => void
	): IPromise<U>,
		catch<U>(onRejected?: (error: any) => IPromise<U>): IPromise<U>,
		catch<U>(onRejected?: (error: any) => U): IPromise<U>,
		catch<U>(onRejected?: (error: any) => void): IPromise<U>
	}

	declare export interface EventInfo<T> {
		registerFunc: (callback: (args: any) => void) => IPromise<any>,
		unregisterFunc: (callback: (args: any) => void) => IPromise<any>,
		eventArgsTransformFunc: (args: any) => IPromise<T>
	}

	declare interface RequestUrlAndHeaderInfo {
		url: string,
		headers?: {
		[name: string]: string
	}
	}

		declare class ClientObject  {
		context: ClientRequestContext;
		isNullObject: boolean
	}

	declare class ClientRequestContext  {
		constructor(url?: string): this;
		trackedObjects: TrackedObjects;
		requestHeaders: {
		[name: string]: string
	};
		load(object: ClientObject, option?: string | string[] | LoadOption): void;
		loadRecursive(
		object: ClientObject, options: {
		[typeName: string]: string | string[] | LoadOption
	}, maxDepth?: number
	): void;
		trace(message: string): void;
		sync<T>(passThroughValue?: T): IPromise<T>
	}

	declare class ClientResult<T>  {
		value: T
	}

	declare class Error  {
		name: string;
		message: string;
		stack: string;
		code: string;
		traceMessages: Array<string>;
		debugInfo: {
		errorLocation?: string
	}
	}

	declare class ErrorCodes  {
		accessDenied: string;
		generalException: string;
		activityLimitReached: string
	}

	declare export class Promise<R> extends IPromise<R> {
		constructor(func: (
		resolve: (value?: R | IPromise<R>) => void, reject: (error?: any) => void
	) => void): this;
		all<U>(promises: OfficeExtension.IPromise<U>[]): IPromise<U[]>;
		resolve<U>(value: U): IPromise<U>;
		reject<U>(error: any): IPromise<U>;
		then<U>(
		onFulfilled?: (value: R) => IPromise<U>, onRejected?: (error: any) => IPromise<U>
	): IPromise<U>;
		then<U>(
		onFulfilled?: (value: R) => IPromise<U>, onRejected?: (error: any) => U
	): IPromise<U>;
		then<U>(
		onFulfilled?: (value: R) => IPromise<U>, onRejected?: (error: any) => void
	): IPromise<U>;
		then<U>(
		onFulfilled?: (value: R) => U, onRejected?: (error: any) => IPromise<U>
	): IPromise<U>;
		then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): IPromise<U>;
		then<U>(
		onFulfilled?: (value: R) => U, onRejected?: (error: any) => void
	): IPromise<U>;
		catch<U>(onRejected?: (error: any) => IPromise<U>): IPromise<U>;
		catch<U>(onRejected?: (error: any) => U): IPromise<U>;
		catch<U>(onRejected?: (error: any) => void): IPromise<U>
	}

	declare class TrackedObjects  {
		add(object: ClientObject): void;
		add(objects: ClientObject[]): void;
		remove(object: ClientObject): void;
		remove(objects: ClientObject[]): void
	}

	declare export class EventHandlers<T>  {
		constructor(context: ClientRequestContext, parentObject: ClientObject, name: string, eventInfo: EventInfo<T>): this;
		add(handler: (args: T) => IPromise<any>): EventHandlerResult<T>;
		remove(handler: (args: T) => IPromise<any>): void;
		removeAll(): void
	}

	declare export class EventHandlerResult<T>  {
		constructor(context: ClientRequestContext, handlers: EventHandlers<T>, handler: (args: T) => IPromise<any>): this;
		remove(): void
	}

	
}

declare module 'Excel' {
		declare interface ThreeArrowsSet {
		[index: number]: Icon,
		redDownArrow: Icon,
		yellowSideArrow: Icon,
		greenUpArrow: Icon
	}

	declare interface ThreeArrowsGraySet {
		[index: number]: Icon,
		grayDownArrow: Icon,
		graySideArrow: Icon,
		grayUpArrow: Icon
	}

	declare interface ThreeFlagsSet {
		[index: number]: Icon,
		redFlag: Icon,
		yellowFlag: Icon,
		greenFlag: Icon
	}

	declare interface ThreeTrafficLights1Set {
		[index: number]: Icon,
		redCircleWithBorder: Icon,
		yellowCircle: Icon,
		greenCircle: Icon
	}

	declare interface ThreeTrafficLights2Set {
		[index: number]: Icon,
		redTrafficLight: Icon,
		yellowTrafficLight: Icon,
		greenTrafficLight: Icon
	}

	declare interface ThreeSignsSet {
		[index: number]: Icon,
		redDiamond: Icon,
		yellowTriangle: Icon,
		greenCircle: Icon
	}

	declare interface ThreeSymbolsSet {
		[index: number]: Icon,
		redCrossSymbol: Icon,
		yellowExclamationSymbol: Icon,
		greenCheckSymbol: Icon
	}

	declare interface ThreeSymbols2Set {
		[index: number]: Icon,
		redCross: Icon,
		yellowExclamation: Icon,
		greenCheck: Icon
	}

	declare interface FourArrowsSet {
		[index: number]: Icon,
		redDownArrow: Icon,
		yellowDownInclineArrow: Icon,
		yellowUpInclineArrow: Icon,
		greenUpArrow: Icon
	}

	declare interface FourArrowsGraySet {
		[index: number]: Icon,
		grayDownArrow: Icon,
		grayDownInclineArrow: Icon,
		grayUpInclineArrow: Icon,
		grayUpArrow: Icon
	}

	declare interface FourRedToBlackSet {
		[index: number]: Icon,
		blackCircle: Icon,
		grayCircle: Icon,
		pinkCircle: Icon,
		redCircle: Icon
	}

	declare interface FourRatingSet {
		[index: number]: Icon,
		oneBar: Icon,
		twoBars: Icon,
		threeBars: Icon,
		fourBars: Icon
	}

	declare interface FourTrafficLightsSet {
		[index: number]: Icon,
		blackCircleWithBorder: Icon,
		redCircleWithBorder: Icon,
		yellowCircle: Icon,
		greenCircle: Icon
	}

	declare interface FiveArrowsSet {
		[index: number]: Icon,
		redDownArrow: Icon,
		yellowDownInclineArrow: Icon,
		yellowSideArrow: Icon,
		yellowUpInclineArrow: Icon,
		greenUpArrow: Icon
	}

	declare interface FiveArrowsGraySet {
		[index: number]: Icon,
		grayDownArrow: Icon,
		grayDownInclineArrow: Icon,
		graySideArrow: Icon,
		grayUpInclineArrow: Icon,
		grayUpArrow: Icon
	}

	declare interface FiveRatingSet {
		[index: number]: Icon,
		noBars: Icon,
		oneBar: Icon,
		twoBars: Icon,
		threeBars: Icon,
		fourBars: Icon
	}

	declare interface FiveQuartersSet {
		[index: number]: Icon,
		whiteCircleAllWhiteQuarters: Icon,
		circleWithThreeWhiteQuarters: Icon,
		circleWithTwoWhiteQuarters: Icon,
		circleWithOneWhiteQuarter: Icon,
		blackCircle: Icon
	}

	declare interface ThreeStarsSet {
		[index: number]: Icon,
		silverStar: Icon,
		halfGoldStar: Icon,
		goldStar: Icon
	}

	declare interface ThreeTrianglesSet {
		[index: number]: Icon,
		redDownTriangle: Icon,
		yellowDash: Icon,
		greenUpTriangle: Icon
	}

	declare interface FiveBoxesSet {
		[index: number]: Icon,
		noFilledBoxes: Icon,
		oneFilledBox: Icon,
		twoFilledBoxes: Icon,
		threeFilledBoxes: Icon,
		fourFilledBoxes: Icon
	}

	declare interface IconCollections {
		threeArrows: ThreeArrowsSet,
		threeArrowsGray: ThreeArrowsGraySet,
		threeFlags: ThreeFlagsSet,
		threeTrafficLights1: ThreeTrafficLights1Set,
		threeTrafficLights2: ThreeTrafficLights2Set,
		threeSigns: ThreeSignsSet,
		threeSymbols: ThreeSymbolsSet,
		threeSymbols2: ThreeSymbols2Set,
		fourArrows: FourArrowsSet,
		fourArrowsGray: FourArrowsGraySet,
		fourRedToBlack: FourRedToBlackSet,
		fourRating: FourRatingSet,
		fourTrafficLights: FourTrafficLightsSet,
		fiveArrows: FiveArrowsSet,
		fiveArrowsGray: FiveArrowsGraySet,
		fiveRating: FiveRatingSet,
		fiveQuarters: FiveQuartersSet,
		threeStars: ThreeStarsSet,
		threeTriangles: ThreeTrianglesSet,
		fiveBoxes: FiveBoxesSet
	}

	declare interface BindingSelectionChangedEventArgs {
		binding: Excel.Binding,
		columnCount: number,
		rowCount: number,
		startColumn: number,
		startRow: number
	}

	declare interface BindingDataChangedEventArgs {
		binding: Excel.Binding
	}

	declare interface SelectionChangedEventArgs {
		workbook: Excel.Workbook
	}

	declare interface WorksheetProtectionOptions {
		allowAutoFilter?: boolean,
		allowDeleteColumns?: boolean,
		allowDeleteRows?: boolean,
		allowFormatCells?: boolean,
		allowFormatColumns?: boolean,
		allowFormatRows?: boolean,
		allowInsertColumns?: boolean,
		allowInsertHyperlinks?: boolean,
		allowInsertRows?: boolean,
		allowPivotTables?: boolean,
		allowSort?: boolean
	}

	declare interface RangeReference {
		address: string
	}

	declare interface SortField {
		ascending?: boolean,
		color?: string,
		dataOption?: string,
		icon?: Excel.Icon,
		key: number,
		sortOn?: string
	}

	declare interface FilterCriteria {
		color?: string,
		criterion1?: string,
		criterion2?: string,
		dynamicCriteria?: string,
		filterOn: string,
		icon?: Excel.Icon,
		operator?: string,
		values?: Array<string | Excel.FilterDatetime>
	}

	declare interface FilterDatetime {
		date: string,
		specificity: string
	}

	declare interface Icon {
		index: number,
		set: string
	}

	declare function run<T>(
		batch: (context: Excel.RequestContext) => OfficeExtension.IPromise<T>
	): OfficeExtension.IPromise<T>

	declare function run<T>(
		requestInfo: OfficeExtension.RequestUrlAndHeaderInfo, batch: (context: Excel.RequestContext) => OfficeExtension.IPromise<T>
	): OfficeExtension.IPromise<T>

	declare function run<T>(
		object: OfficeExtension.ClientObject, batch: (context: Excel.RequestContext) => OfficeExtension.IPromise<T>
	): OfficeExtension.IPromise<T>

	declare function run<T>(
		requestInfo: OfficeExtension.RequestUrlAndHeaderInfo, object: OfficeExtension.ClientObject, batch: (context: Excel.RequestContext) => OfficeExtension.IPromise<T>
	): OfficeExtension.IPromise<T>

	declare function run<T>(
		objects: OfficeExtension.ClientObject[], batch: (context: Excel.RequestContext) => OfficeExtension.IPromise<T>
	): OfficeExtension.IPromise<T>

	declare function run<T>(
		requestInfo: OfficeExtension.RequestUrlAndHeaderInfo, objects: OfficeExtension.ClientObject[], batch: (context: Excel.RequestContext) => OfficeExtension.IPromise<T>
	): OfficeExtension.IPromise<T>

	declare class Application extends OfficeExtension$ClientObject {
		calculationMode: string;
		calculate(calculationType: string): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Application;
		toJSON(): {
		calculationMode: string
	}
	}

	declare class Workbook extends OfficeExtension$ClientObject {
		application: Excel.Application;
		bindings: Excel.BindingCollection;
		functions: Excel.Functions;
		names: Excel.NamedItemCollection;
		pivotTables: Excel.PivotTableCollection;
		tables: Excel.TableCollection;
		worksheets: Excel.WorksheetCollection;
		getSelectedRange(): Excel.Range;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Workbook;
		onSelectionChanged: OfficeExtension.EventHandlers<Excel.SelectionChangedEventArgs>;
		toJSON(): {
		
	}
	}

	declare class Worksheet extends OfficeExtension$ClientObject {
		charts: Excel.ChartCollection;
		pivotTables: Excel.PivotTableCollection;
		protection: Excel.WorksheetProtection;
		tables: Excel.TableCollection;
		id: string;
		name: string;
		position: number;
		visibility: string;
		activate(): void;
		delete(): void;
		getCell(row: number, column: number): Excel.Range;
		getRange(address?: string): Excel.Range;
		getUsedRange(valuesOnly?: boolean): Excel.Range;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Worksheet;
		toJSON(
		
	): {
		id: string,
		name: string,
		position: number,
		protection: WorksheetProtection,
		visibility: string
	}
	}

	declare class WorksheetCollection extends OfficeExtension$ClientObject {
		items: Array<Excel.Worksheet>;
		add(name?: string): Excel.Worksheet;
		getActiveWorksheet(): Excel.Worksheet;
		getItem(key: string): Excel.Worksheet;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.WorksheetCollection;
		toJSON(): {
		
	}
	}

	declare class WorksheetProtection extends OfficeExtension$ClientObject {
		options: Excel.WorksheetProtectionOptions;
		protected: boolean;
		protect(options?: Excel.WorksheetProtectionOptions): void;
		unprotect(): void;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.WorksheetProtection;
		toJSON(): {
		options: WorksheetProtectionOptions,
		protected: boolean
	}
	}

	declare class Range extends OfficeExtension$ClientObject {
		format: Excel.RangeFormat;
		sort: Excel.RangeSort;
		worksheet: Excel.Worksheet;
		address: string;
		addressLocal: string;
		cellCount: number;
		columnCount: number;
		columnHidden: boolean;
		columnIndex: number;
		formulas: Array<Array<any>>;
		formulasLocal: Array<Array<any>>;
		formulasR1C1: Array<Array<any>>;
		hidden: boolean;
		numberFormat: Array<Array<any>>;
		rowCount: number;
		rowHidden: boolean;
		rowIndex: number;
		text: Array<Array<any>>;
		valueTypes: Array<Array<string>>;
		values: Array<Array<any>>;
		clear(applyTo?: string): void;
		delete(shift: string): void;
		getBoundingRect(anotherRange: Excel.Range | string): Excel.Range;
		getCell(row: number, column: number): Excel.Range;
		getColumn(column: number): Excel.Range;
		getColumnsAfter(count?: number): Excel.Range;
		getColumnsBefore(count?: number): Excel.Range;
		getEntireColumn(): Excel.Range;
		getEntireRow(): Excel.Range;
		getIntersection(anotherRange: Excel.Range | string): Excel.Range;
		getLastCell(): Excel.Range;
		getLastColumn(): Excel.Range;
		getLastRow(): Excel.Range;
		getOffsetRange(rowOffset: number, columnOffset: number): Excel.Range;
		getResizedRange(deltaRows: number, deltaColumns: number): Excel.Range;
		getRow(row: number): Excel.Range;
		getRowsAbove(count?: number): Excel.Range;
		getRowsBelow(count?: number): Excel.Range;
		getUsedRange(valuesOnly?: boolean): Excel.Range;
		getVisibleView(): Excel.RangeView;
		insert(shift: string): Excel.Range;
		merge(across?: boolean): void;
		select(): void;
		unmerge(): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Range;
		track(): Excel.Range;
		untrack(): Excel.Range;
		toJSON(
		
	): {
		address: string,
		addressLocal: string,
		cellCount: number,
		columnCount: number,
		columnHidden: boolean,
		columnIndex: number,
		format: RangeFormat,
		formulas: any[][],
		formulasLocal: any[][],
		formulasR1C1: any[][],
		hidden: boolean,
		numberFormat: any[][],
		rowCount: number,
		rowHidden: boolean,
		rowIndex: number,
		text: any[][],
		values: any[][],
		valueTypes: string[][]
	}
	}

	declare class RangeView extends OfficeExtension$ClientObject {
		rows: Excel.RangeViewCollection;
		cellAddresses: Array<Array<any>>;
		columnCount: number;
		formulas: Array<Array<any>>;
		formulasLocal: Array<Array<any>>;
		formulasR1C1: Array<Array<any>>;
		index: number;
		numberFormat: Array<Array<any>>;
		rowCount: number;
		text: Array<Array<any>>;
		valueTypes: Array<Array<string>>;
		values: Array<Array<any>>;
		getRange(): Excel.Range;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeView;
		toJSON(
		
	): {
		cellAddresses: any[][],
		columnCount: number,
		formulas: any[][],
		formulasLocal: any[][],
		formulasR1C1: any[][],
		index: number,
		numberFormat: any[][],
		rowCount: number,
		text: any[][],
		values: any[][],
		valueTypes: string[][]
	}
	}

	declare class RangeViewCollection extends OfficeExtension$ClientObject {
		items: Array<Excel.RangeView>;
		getItemAt(index: number): Excel.RangeView;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.RangeViewCollection;
		toJSON(): {
		
	}
	}

	declare class Setting extends OfficeExtension$ClientObject {
		value: any;
		key: string;
		delete(): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Setting;
		toJSON(): {
		key: string
	}
	}

	declare class NamedItemCollection extends OfficeExtension$ClientObject {
		items: Array<Excel.NamedItem>;
		getItem(name: string): Excel.NamedItem;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.NamedItemCollection;
		toJSON(): {
		
	}
	}

	declare class NamedItem extends OfficeExtension$ClientObject {
		name: string;
		type: string;
		value: any;
		visible: boolean;
		getRange(): Excel.Range;
		getRangeOrNullObject(): Excel.Range;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.NamedItem;
		toJSON(): {
		name: string,
		type: string,
		value: any,
		visible: boolean
	}
	}

	declare class Binding extends OfficeExtension$ClientObject {
		id: string;
		type: string;
		delete(): void;
		getRange(): Excel.Range;
		getTable(): Excel.Table;
		getText(): OfficeExtension.ClientResult<string>;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Binding;
		onDataChanged: OfficeExtension.EventHandlers<Excel.BindingDataChangedEventArgs>;
		onSelectionChanged: OfficeExtension.EventHandlers<Excel.BindingSelectionChangedEventArgs>;
		toJSON(): {
		id: string,
		type: string
	}
	}

	declare class BindingCollection extends OfficeExtension$ClientObject {
		items: Array<Excel.Binding>;
		count: number;
		add(range: Excel.Range | string, bindingType: string, id: string): Excel.Binding;
		addFromNamedItem(name: string, bindingType: string, id: string): Excel.Binding;
		addFromSelection(bindingType: string, id: string): Excel.Binding;
		getItem(id: string): Excel.Binding;
		getItemAt(index: number): Excel.Binding;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.BindingCollection;
		toJSON(): {
		count: number
	}
	}

	declare class TableCollection extends OfficeExtension$ClientObject {
		items: Array<Excel.Table>;
		count: number;
		add(address: Excel.Range | string, hasHeaders: boolean): Excel.Table;
		getItem(key: number | string): Excel.Table;
		getItemAt(index: number): Excel.Table;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableCollection;
		toJSON(): {
		count: number
	}
	}

	declare class Table extends OfficeExtension$ClientObject {
		columns: Excel.TableColumnCollection;
		rows: Excel.TableRowCollection;
		sort: Excel.TableSort;
		worksheet: Excel.Worksheet;
		highlightFirstColumn: boolean;
		highlightLastColumn: boolean;
		id: number;
		name: string;
		showBandedColumns: boolean;
		showBandedRows: boolean;
		showFilterButton: boolean;
		showHeaders: boolean;
		showTotals: boolean;
		style: string;
		clearFilters(): void;
		convertToRange(): Excel.Range;
		delete(): void;
		getDataBodyRange(): Excel.Range;
		getHeaderRowRange(): Excel.Range;
		getRange(): Excel.Range;
		getTotalRowRange(): Excel.Range;
		reapplyFilters(): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Table;
		toJSON(
		
	): {
		highlightFirstColumn: boolean,
		highlightLastColumn: boolean,
		id: number,
		name: string,
		showBandedColumns: boolean,
		showBandedRows: boolean,
		showFilterButton: boolean,
		showHeaders: boolean,
		showTotals: boolean,
		style: string
	}
	}

	declare class TableColumnCollection extends OfficeExtension$ClientObject {
		items: Array<Excel.TableColumn>;
		count: number;
		add(
		index?: number, values?: Array<Array<boolean | string | number>> | boolean | string | number, name?: string
	): Excel.TableColumn;
		getItem(key: number | string): Excel.TableColumn;
		getItemAt(index: number): Excel.TableColumn;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.TableColumnCollection;
		toJSON(): {
		count: number
	}
	}

	declare class TableColumn extends OfficeExtension$ClientObject {
		filter: Excel.Filter;
		id: number;
		index: number;
		name: string;
		values: Array<Array<any>>;
		delete(): void;
		getDataBodyRange(): Excel.Range;
		getHeaderRowRange(): Excel.Range;
		getRange(): Excel.Range;
		getTotalRowRange(): Excel.Range;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableColumn;
		toJSON(): {
		id: number,
		index: number,
		name: string,
		values: any[][]
	}
	}

	declare class TableRowCollection extends OfficeExtension$ClientObject {
		items: Array<Excel.TableRow>;
		count: number;
		add(
		index?: number, values?: Array<Array<boolean | string | number>> | boolean | string | number
	): Excel.TableRow;
		getItemAt(index: number): Excel.TableRow;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.TableRowCollection;
		toJSON(): {
		count: number
	}
	}

	declare class TableRow extends OfficeExtension$ClientObject {
		index: number;
		values: Array<Array<any>>;
		delete(): void;
		getRange(): Excel.Range;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableRow;
		toJSON(): {
		index: number,
		values: any[][]
	}
	}

	declare class RangeFormat extends OfficeExtension$ClientObject {
		borders: Excel.RangeBorderCollection;
		fill: Excel.RangeFill;
		font: Excel.RangeFont;
		protection: Excel.FormatProtection;
		columnWidth: number;
		horizontalAlignment: string;
		rowHeight: number;
		verticalAlignment: string;
		wrapText: boolean;
		autofitColumns(): void;
		autofitRows(): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeFormat;
		toJSON(
		
	): {
		columnWidth: number,
		fill: RangeFill,
		font: RangeFont,
		horizontalAlignment: string,
		protection: FormatProtection,
		rowHeight: number,
		verticalAlignment: string,
		wrapText: boolean
	}
	}

	declare class FormatProtection extends OfficeExtension$ClientObject {
		formulaHidden: boolean;
		locked: boolean;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.FormatProtection;
		toJSON(): {
		formulaHidden: boolean,
		locked: boolean
	}
	}

	declare class RangeFill extends OfficeExtension$ClientObject {
		color: string;
		clear(): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeFill;
		toJSON(): {
		color: string
	}
	}

	declare class RangeBorder extends OfficeExtension$ClientObject {
		color: string;
		sideIndex: string;
		style: string;
		weight: string;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeBorder;
		toJSON(): {
		color: string,
		sideIndex: string,
		style: string,
		weight: string
	}
	}

	declare class RangeBorderCollection extends OfficeExtension$ClientObject {
		items: Array<Excel.RangeBorder>;
		count: number;
		getItem(index: string): Excel.RangeBorder;
		getItemAt(index: number): Excel.RangeBorder;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.RangeBorderCollection;
		toJSON(): {
		count: number
	}
	}

	declare class RangeFont extends OfficeExtension$ClientObject {
		bold: boolean;
		color: string;
		italic: boolean;
		name: string;
		size: number;
		underline: string;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.RangeFont;
		toJSON(
		
	): {
		bold: boolean,
		color: string,
		italic: boolean,
		name: string,
		size: number,
		underline: string
	}
	}

	declare class ChartCollection extends OfficeExtension$ClientObject {
		items: Array<Excel.Chart>;
		count: number;
		add(type: string, sourceData: Excel.Range, seriesBy?: string): Excel.Chart;
		getItem(name: string): Excel.Chart;
		getItemAt(index: number): Excel.Chart;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartCollection;
		toJSON(): {
		count: number
	}
	}

	declare class Chart extends OfficeExtension$ClientObject {
		axes: Excel.ChartAxes;
		dataLabels: Excel.ChartDataLabels;
		format: Excel.ChartAreaFormat;
		legend: Excel.ChartLegend;
		series: Excel.ChartSeriesCollection;
		title: Excel.ChartTitle;
		worksheet: Excel.Worksheet;
		height: number;
		left: number;
		name: string;
		top: number;
		width: number;
		delete(): void;
		getImage(
		width?: number, height?: number, fittingMode?: string
	): OfficeExtension.ClientResult<string>;
		setData(sourceData: Excel.Range, seriesBy?: string): void;
		setPosition(startCell: Excel.Range | string, endCell?: Excel.Range | string): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Chart;
		toJSON(
		
	): {
		axes: ChartAxes,
		dataLabels: ChartDataLabels,
		format: ChartAreaFormat,
		height: number,
		left: number,
		legend: ChartLegend,
		name: string,
		title: ChartTitle,
		top: number,
		width: number
	}
	}

	declare class ChartAreaFormat extends OfficeExtension$ClientObject {
		fill: Excel.ChartFill;
		font: Excel.ChartFont;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAreaFormat;
		toJSON(): {
		fill: ChartFill,
		font: ChartFont
	}
	}

	declare class ChartSeriesCollection extends OfficeExtension$ClientObject {
		items: Array<Excel.ChartSeries>;
		count: number;
		getItemAt(index: number): Excel.ChartSeries;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.ChartSeriesCollection;
		toJSON(): {
		count: number
	}
	}

	declare class ChartSeries extends OfficeExtension$ClientObject {
		format: Excel.ChartSeriesFormat;
		points: Excel.ChartPointsCollection;
		name: string;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartSeries;
		toJSON(): {
		format: ChartSeriesFormat,
		name: string
	}
	}

	declare class ChartSeriesFormat extends OfficeExtension$ClientObject {
		fill: Excel.ChartFill;
		line: Excel.ChartLineFormat;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.ChartSeriesFormat;
		toJSON(): {
		fill: ChartFill,
		line: ChartLineFormat
	}
	}

	declare class ChartPointsCollection extends OfficeExtension$ClientObject {
		items: Array<Excel.ChartPoint>;
		count: number;
		getItemAt(index: number): Excel.ChartPoint;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.ChartPointsCollection;
		toJSON(): {
		count: number
	}
	}

	declare class ChartPoint extends OfficeExtension$ClientObject {
		format: Excel.ChartPointFormat;
		value: any;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartPoint;
		toJSON(): {
		format: ChartPointFormat,
		value: any
	}
	}

	declare class ChartPointFormat extends OfficeExtension$ClientObject {
		fill: Excel.ChartFill;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.ChartPointFormat;
		toJSON(): {
		fill: ChartFill
	}
	}

	declare class ChartAxes extends OfficeExtension$ClientObject {
		categoryAxis: Excel.ChartAxis;
		seriesAxis: Excel.ChartAxis;
		valueAxis: Excel.ChartAxis;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxes;
		toJSON(
		
	): {
		categoryAxis: ChartAxis,
		seriesAxis: ChartAxis,
		valueAxis: ChartAxis
	}
	}

	declare class ChartAxis extends OfficeExtension$ClientObject {
		format: Excel.ChartAxisFormat;
		majorGridlines: Excel.ChartGridlines;
		minorGridlines: Excel.ChartGridlines;
		title: Excel.ChartAxisTitle;
		majorUnit: any;
		maximum: any;
		minimum: any;
		minorUnit: any;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxis;
		toJSON(
		
	): {
		format: ChartAxisFormat,
		majorGridlines: ChartGridlines,
		majorUnit: any,
		maximum: any,
		minimum: any,
		minorGridlines: ChartGridlines,
		minorUnit: any,
		title: ChartAxisTitle
	}
	}

	declare class ChartAxisFormat extends OfficeExtension$ClientObject {
		font: Excel.ChartFont;
		line: Excel.ChartLineFormat;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxisFormat;
		toJSON(): {
		font: ChartFont,
		line: ChartLineFormat
	}
	}

	declare class ChartAxisTitle extends OfficeExtension$ClientObject {
		format: Excel.ChartAxisTitleFormat;
		text: string;
		visible: boolean;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartAxisTitle;
		toJSON(): {
		format: ChartAxisTitleFormat,
		text: string,
		visible: boolean
	}
	}

	declare class ChartAxisTitleFormat extends OfficeExtension$ClientObject {
		font: Excel.ChartFont;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.ChartAxisTitleFormat;
		toJSON(): {
		font: ChartFont
	}
	}

	declare class ChartDataLabels extends OfficeExtension$ClientObject {
		format: Excel.ChartDataLabelFormat;
		position: string;
		separator: string;
		showBubbleSize: boolean;
		showCategoryName: boolean;
		showLegendKey: boolean;
		showPercentage: boolean;
		showSeriesName: boolean;
		showValue: boolean;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartDataLabels;
		toJSON(
		
	): {
		format: ChartDataLabelFormat,
		position: string,
		separator: string,
		showBubbleSize: boolean,
		showCategoryName: boolean,
		showLegendKey: boolean,
		showPercentage: boolean,
		showSeriesName: boolean,
		showValue: boolean
	}
	}

	declare class ChartDataLabelFormat extends OfficeExtension$ClientObject {
		fill: Excel.ChartFill;
		font: Excel.ChartFont;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.ChartDataLabelFormat;
		toJSON(): {
		fill: ChartFill,
		font: ChartFont
	}
	}

	declare class ChartGridlines extends OfficeExtension$ClientObject {
		format: Excel.ChartGridlinesFormat;
		visible: boolean;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartGridlines;
		toJSON(): {
		format: ChartGridlinesFormat,
		visible: boolean
	}
	}

	declare class ChartGridlinesFormat extends OfficeExtension$ClientObject {
		line: Excel.ChartLineFormat;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.ChartGridlinesFormat;
		toJSON(): {
		line: ChartLineFormat
	}
	}

	declare class ChartLegend extends OfficeExtension$ClientObject {
		format: Excel.ChartLegendFormat;
		overlay: boolean;
		position: string;
		visible: boolean;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartLegend;
		toJSON(
		
	): {
		format: ChartLegendFormat,
		overlay: boolean,
		position: string,
		visible: boolean
	}
	}

	declare class ChartLegendFormat extends OfficeExtension$ClientObject {
		fill: Excel.ChartFill;
		font: Excel.ChartFont;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.ChartLegendFormat;
		toJSON(): {
		fill: ChartFill,
		font: ChartFont
	}
	}

	declare class ChartTitle extends OfficeExtension$ClientObject {
		format: Excel.ChartTitleFormat;
		overlay: boolean;
		text: string;
		visible: boolean;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartTitle;
		toJSON(
		
	): {
		format: ChartTitleFormat,
		overlay: boolean,
		text: string,
		visible: boolean
	}
	}

	declare class ChartTitleFormat extends OfficeExtension$ClientObject {
		fill: Excel.ChartFill;
		font: Excel.ChartFont;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.ChartTitleFormat;
		toJSON(): {
		fill: ChartFill,
		font: ChartFont
	}
	}

	declare class ChartFill extends OfficeExtension$ClientObject {
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartFill;
		clear(): void;
		setSolidColor(color: string): void;
		toJSON(): {
		
	}
	}

	declare class ChartLineFormat extends OfficeExtension$ClientObject {
		color: string;
		clear(): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartLineFormat;
		toJSON(): {
		color: string
	}
	}

	declare class ChartFont extends OfficeExtension$ClientObject {
		bold: boolean;
		color: string;
		italic: boolean;
		name: string;
		size: number;
		underline: string;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.ChartFont;
		toJSON(
		
	): {
		bold: boolean,
		color: string,
		italic: boolean,
		name: string,
		size: number,
		underline: string
	}
	}

	declare class RangeSort extends OfficeExtension$ClientObject {
		apply(
		fields: Array<Excel.SortField>, matchCase?: boolean, hasHeaders?: boolean, orientation?: string, method?: string
	): void;
		toJSON(): {
		
	}
	}

	declare class TableSort extends OfficeExtension$ClientObject {
		fields: Array<Excel.SortField>;
		matchCase: boolean;
		method: string;
		apply(fields: Array<Excel.SortField>, matchCase?: boolean, method?: string): void;
		clear(): void;
		reapply(): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.TableSort;
		toJSON(): {
		fields: SortField[],
		matchCase: boolean,
		method: string
	}
	}

	declare class Filter extends OfficeExtension$ClientObject {
		criteria: Excel.FilterCriteria;
		apply(criteria: Excel.FilterCriteria): void;
		applyBottomItemsFilter(count: number): void;
		applyBottomPercentFilter(percent: number): void;
		applyCellColorFilter(color: string): void;
		applyCustomFilter(criteria1: string, criteria2?: string, oper?: string): void;
		applyDynamicFilter(criteria: string): void;
		applyFontColorFilter(color: string): void;
		applyIconFilter(icon: Excel.Icon): void;
		applyTopItemsFilter(count: number): void;
		applyTopPercentFilter(percent: number): void;
		applyValuesFilter(values: Array<string | Excel.FilterDatetime>): void;
		clear(): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.Filter;
		toJSON(): {
		criteria: FilterCriteria
	}
	}

	declare class PivotTableCollection extends OfficeExtension$ClientObject {
		items: Array<Excel.PivotTable>;
		getItem(name: string): Excel.PivotTable;
		refreshAll(): void;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Excel.PivotTableCollection;
		toJSON(): {
		
	}
	}

	declare class PivotTable extends OfficeExtension$ClientObject {
		worksheet: Excel.Worksheet;
		name: string;
		refresh(): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Excel.PivotTable;
		toJSON(): {
		name: string
	}
	}

	declare class FunctionResult<T> extends OfficeExtension$ClientObject {
		error: string;
		value: T;
		load(option?: string | string[] | OfficeExtension.LoadOption): FunctionResult<T>;
		toJSON(): {
		error: string,
		value: T
	}
	}

	declare class Functions extends OfficeExtension$ClientObject {
		abs(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		accrInt(
		issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstInterest: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, par: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, calcMethod?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		accrIntM(
		issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, par: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		acos(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		acosh(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		acot(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		acoth(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		amorDegrc(
		cost: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, datePurchased: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, period: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		amorLinc(
		cost: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, datePurchased: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, period: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		and(
		...values: Array<boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<boolean>;
		arabic(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		areas(
		reference: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		asc(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		asin(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		asinh(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		atan(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		atan2(
		xNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		atanh(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		aveDev(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		average(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		averageA(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		averageIf(
		range: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, averageRange?: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		averageIfs(
		averageRange: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<Excel.Range | Excel.RangeReference | Excel.FunctionResult<any> | number | string | boolean>
	): FunctionResult<number>;
		bahtText(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		base(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, radix: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, minLength?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		besselI(
		x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		besselJ(
		x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		besselK(
		x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		besselY(
		x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		beta_Dist(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, A?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, B?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		beta_Inv(
		probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, A?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, B?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		bin2Dec(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		bin2Hex(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		bin2Oct(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		binom_Dist(
		numberS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, trials: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, probabilityS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		binom_Dist_Range(
		trials: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, probabilityS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberS2?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		binom_Inv(
		trials: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, probabilityS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		bitand(
		number1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		bitlshift(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, shiftAmount: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		bitor(
		number1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		bitrshift(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, shiftAmount: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		bitxor(
		number1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		ceiling_Math(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mode?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		ceiling_Precise(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		char(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		chiSq_Dist(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		chiSq_Dist_RT(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		chiSq_Inv(
		probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		chiSq_Inv_RT(
		probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		choose(
		indexNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number | string | boolean>;
		clean(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		code(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		columns(
		array: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		combin(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberChosen: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		combina(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberChosen: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		complex(
		realNum: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, iNum: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, suffix?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		concatenate(
		...values: Array<string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<string>;
		confidence_Norm(
		alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, size: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		confidence_T(
		alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, size: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		convert(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fromUnit: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, toUnit: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		cos(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		cosh(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		cot(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		coth(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		count(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		countA(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		countBlank(
		range: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		countIf(
		range: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		countIfs(
		...values: Array<Excel.Range | Excel.RangeReference | Excel.FunctionResult<any> | number | string | boolean>
	): FunctionResult<number>;
		coupDayBs(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		coupDays(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		coupDaysNc(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		coupNcd(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		coupNum(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		coupPcd(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		csc(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		csch(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		cumIPmt(
		rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		cumPrinc(
		rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endPeriod: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		daverage(
		database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dcount(
		database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dcountA(
		database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dget(
		database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number | boolean | string>;
		dmax(
		database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dmin(
		database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dproduct(
		database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dstDev(
		database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dstDevP(
		database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dsum(
		database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dvar(
		database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dvarP(
		database: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, field: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		date(
		year: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, month: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, day: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		datevalue(
		dateText: string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		day(
		serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		days(
		endDate: string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startDate: string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		days360(
		startDate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endDate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, method?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		db(
		cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, period: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, month?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dbcs(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		ddb(
		cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, period: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, factor?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dec2Bin(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dec2Hex(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dec2Oct(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		decimal(
		number: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, radix: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		degrees(
		angle: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		delta(
		number1: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number2?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		devSq(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		disc(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dollar(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, decimals?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		dollarDe(
		fractionalDollar: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fraction: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		dollarFr(
		decimalDollar: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fraction: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		duration(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, coupon: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		ecma_Ceiling(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		edate(
		startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, months: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		effect(
		nominalRate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, npery: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		eoMonth(
		startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, months: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		erf(
		lowerLimit: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, upperLimit?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		erfC(
		x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		erfC_Precise(
		X: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		erf_Precise(
		X: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		error_Type(
		errorVal: string | number | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		even(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		exact(
		text1: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, text2: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<boolean>;
		exp(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		expon_Dist(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lambda: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		fvschedule(
		principal: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, schedule: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		f_Dist(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		f_Dist_RT(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		f_Inv(
		probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		f_Inv_RT(
		probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom1: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom2: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		fact(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		factDouble(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		false(): FunctionResult<boolean>;
		find(
		findText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, withinText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		findB(
		findText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, withinText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		fisher(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		fisherInv(
		y: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		fixed(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, decimals?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, noCommas?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		floor_Math(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mode?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		floor_Precise(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		fv(
		rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pmt: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		gamma(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		gammaLn(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		gammaLn_Precise(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		gamma_Dist(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		gamma_Inv(
		probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		gauss(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		gcd(
		...values: Array<number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		geStep(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, step?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		geoMean(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		hlookup(
		lookupValue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, tableArray: Excel.Range | number | Excel.RangeReference | Excel.FunctionResult<any>, rowIndexNum: Excel.Range | number | Excel.RangeReference | Excel.FunctionResult<any>, rangeLookup?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number | string | boolean>;
		harMean(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		hex2Bin(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		hex2Dec(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		hex2Oct(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		hour(
		serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		hypGeom_Dist(
		sampleS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberSample: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, populationS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberPop: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		hyperlink(
		linkLocation: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, friendlyName?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number | string | boolean>;
		iso_Ceiling(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		if(
		logicalTest: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, valueIfTrue?: Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>, valueIfFalse?: Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number | string | boolean>;
		imAbs(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imArgument(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imConjugate(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imCos(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imCosh(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imCot(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imCsc(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imCsch(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imDiv(
		inumber1: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, inumber2: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imExp(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imLn(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imLog10(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imLog2(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imPower(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imProduct(
		...values: Array<Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		imReal(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imSec(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imSech(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imSin(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imSinh(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imSqrt(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imSub(
		inumber1: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, inumber2: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imSum(
		...values: Array<Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		imTan(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		imaginary(
		inumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		int(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		intRate(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, investment: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		ipmt(
		rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, per: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		irr(
		values: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, guess?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		isErr(
		value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<boolean>;
		isError(
		value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<boolean>;
		isEven(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		isFormula(
		reference: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<boolean>;
		isLogical(
		value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<boolean>;
		isNA(
		value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<boolean>;
		isNonText(
		value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<boolean>;
		isNumber(
		value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<boolean>;
		isOdd(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		isText(
		value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<boolean>;
		isoWeekNum(
		date: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		ispmt(
		rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, per: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		isref(
		value: Excel.Range | number | string | boolean | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<boolean>;
		kurt(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		large(
		array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, k: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		lcm(
		...values: Array<number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		left(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numChars?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		leftb(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numBytes?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		len(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		lenb(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		ln(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		log(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, base?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		log10(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		logNorm_Dist(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		logNorm_Inv(
		probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		lookup(
		lookupValue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lookupVector: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, resultVector?: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number | string | boolean>;
		lower(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		mduration(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, coupon: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		mirr(
		values: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, financeRate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, reinvestRate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		mround(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, multiple: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		match(
		lookupValue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lookupArray: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, matchType?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		max(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		maxA(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		median(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		mid(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numChars: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		midb(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numBytes: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		min(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		minA(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		minute(
		serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		mod(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, divisor: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		month(
		serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		multiNomial(
		...values: Array<number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		n(
		value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		nper(
		rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pmt: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		na(): FunctionResult<number | string>;
		negBinom_Dist(
		numberF: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, probabilityS: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		networkDays(
		startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, holidays?: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		networkDays_Intl(
		startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, weekend?: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, holidays?: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		nominal(
		effectRate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, npery: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		norm_Dist(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		norm_Inv(
		probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		norm_S_Dist(
		z: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		norm_S_Inv(
		probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		not(
		logical: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<boolean>;
		now(): FunctionResult<number>;
		npv(
		rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		numberValue(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, decimalSeparator?: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, groupSeparator?: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		oct2Bin(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		oct2Dec(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		oct2Hex(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, places?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		odd(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		oddFPrice(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstCoupon: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		oddFYield(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, firstCoupon: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		oddLPrice(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lastInterest: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		oddLYield(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, lastInterest: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		or(
		...values: Array<boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<boolean>;
		pduration(
		rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		percentRank_Exc(
		array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		percentRank_Inc(
		array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, significance?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		percentile_Exc(
		array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, k: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		percentile_Inc(
		array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, k: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		permut(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberChosen: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		permutationa(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberChosen: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		phi(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		pi(): FunctionResult<number>;
		pmt(
		rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		poisson_Dist(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		power(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, power: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		ppmt(
		rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, per: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		price(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		priceDisc(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, discount: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		priceMat(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, yld: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		product(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		proper(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		pv(
		rate: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pmt: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		quartile_Exc(
		array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, quart: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		quartile_Inc(
		array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, quart: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		quotient(
		numerator: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, denominator: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		radians(
		angle: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		rand(): FunctionResult<number>;
		randBetween(
		bottom: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, top: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		rank_Avg(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ref: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, order?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		rank_Eq(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ref: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, order?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		rate(
		nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pmt: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, type?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, guess?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		received(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, investment: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, discount: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		replace(
		oldText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numChars: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, newText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		replaceB(
		oldText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numBytes: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, newText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		rept(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numberTimes: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		right(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numChars?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		rightb(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numBytes?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		roman(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, form?: boolean | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		round(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numDigits: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		roundDown(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numDigits: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		roundUp(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numDigits: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		rows(
		array: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		rri(
		nper: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, fv: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		sec(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		sech(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		second(
		serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		seriesSum(
		x: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, n: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, m: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, coefficients: Excel.Range | string | number | boolean | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		sheet(
		value?: Excel.Range | string | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		sheets(
		reference?: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		sign(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		sin(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		sinh(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		skew(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		skew_p(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		sln(
		cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		small(
		array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, k: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		sqrt(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		sqrtPi(
		number: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		stDevA(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		stDevPA(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		stDev_P(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		stDev_S(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		standardize(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, mean: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, standardDev: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		substitute(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, oldText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, newText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, instanceNum?: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		subtotal(
		functionNum: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		sum(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		sumIf(
		range: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, criteria: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, sumRange?: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		sumIfs(
		sumRange: Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, ...values: Array<Excel.Range | Excel.RangeReference | Excel.FunctionResult<any> | number | string | boolean>
	): FunctionResult<number>;
		sumSq(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		syd(
		cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, per: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		t(
		value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		tbillEq(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, discount: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		tbillPrice(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, discount: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		tbillYield(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		t_Dist(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		t_Dist_2T(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		t_Dist_RT(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		t_Inv(
		probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		t_Inv_2T(
		probability: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, degFreedom: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		tan(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		tanh(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		text(
		value: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, formatText: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		time(
		hour: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, minute: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, second: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		timevalue(
		timeText: string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		today(): FunctionResult<number>;
		trim(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		trimMean(
		array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, percent: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		true(): FunctionResult<boolean>;
		trunc(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, numDigits?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		type(
		value: boolean | string | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		usdollar(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, decimals?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		unichar(
		number: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		unicode(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		upper(
		text: string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<string>;
		vlookup(
		lookupValue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, tableArray: Excel.Range | number | Excel.RangeReference | Excel.FunctionResult<any>, colIndexNum: Excel.Range | number | Excel.RangeReference | Excel.FunctionResult<any>, rangeLookup?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number | string | boolean>;
		value(
		text: string | boolean | number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		varA(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		varPA(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		var_P(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		var_S(
		...values: Array<number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<number>;
		vdb(
		cost: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, salvage: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, life: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, startPeriod: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endPeriod: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, factor?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, noSwitch?: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		weekNum(
		serialNumber: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, returnType?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		weekday(
		serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, returnType?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		weibull_Dist(
		x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, alpha: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, beta: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, cumulative: boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		workDay(
		startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, days: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, holidays?: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		workDay_Intl(
		startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, days: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, weekend?: number | string | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, holidays?: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		xirr(
		values: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>, dates: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>, guess?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		xnpv(
		rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, values: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>, dates: number | string | Excel.Range | boolean | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		xor(
		...values: Array<boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>>
	): FunctionResult<boolean>;
		year(
		serialNumber: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		yearFrac(
		startDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, endDate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		yield(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, frequency: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		yieldDisc(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, redemption: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		yieldMat(
		settlement: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, maturity: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, issue: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, rate: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, pr: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, basis?: number | string | boolean | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		z_Test(
		array: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, x: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>, sigma?: number | Excel.Range | Excel.RangeReference | Excel.FunctionResult<any>
	): FunctionResult<number>;
		toJSON(): {
		
	}
	}

	declare class RequestContext extends OfficeExtension$ClientRequestContext {
		constructor(url?: string): this;
		workbook: Workbook
	}

	
}

declare module 'npm$namespace$Word' {
			declare function run<T>(
		batch: (context: Word.RequestContext) => OfficeExtension.IPromise<T>
	): OfficeExtension.IPromise<T>

	declare class Application extends OfficeExtension$ClientObject {
		createDocument(base64File?: string): Word.Document;
		newObject(context: OfficeExtension.ClientRequestContext): Word.Application
	}

	declare class Body extends OfficeExtension$ClientObject {
		contentControls: Word.ContentControlCollection;
		font: Word.Font;
		inlinePictures: Word.InlinePictureCollection;
		lists: Word.ListCollection;
		paragraphs: Word.ParagraphCollection;
		parentBody: Word.Body;
		parentContentControl: Word.ContentControl;
		tables: Word.TableCollection;
		style: string;
		text: string;
		type: string;
		clear(): void;
		getHtml(): OfficeExtension.ClientResult<string>;
		getOoxml(): OfficeExtension.ClientResult<string>;
		getRange(rangeLocation?: string): Word.Range;
		insertBreak(breakType: string, insertLocation: string): void;
		insertContentControl(): Word.ContentControl;
		insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
		insertHtml(html: string, insertLocation: string): Word.Range;
		insertInlinePictureFromBase64(base64EncodedImage: string, insertLocation: string): Word.InlinePicture;
		insertOoxml(ooxml: string, insertLocation: string): Word.Range;
		insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
		insertTable(
		rowCount: number, columnCount: number, insertLocation: string, values?: Array<Array<string>>
	): Word.Table;
		insertText(text: string, insertLocation: string): Word.Range;
		search(
		searchText: string, searchOptions?: Word.SearchOptions | {
		ignorePunct?: boolean,
		ignoreSpace?: boolean,
		matchCase?: boolean,
		matchPrefix?: boolean,
		matchSoundsLike?: boolean,
		matchSuffix?: boolean,
		matchWholeWord?: boolean,
		matchWildcards?: boolean
	}
	): Word.SearchResultCollection;
		select(selectionMode?: string): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.Body
	}

	declare class ContentControl extends OfficeExtension$ClientObject {
		contentControls: Word.ContentControlCollection;
		font: Word.Font;
		inlinePictures: Word.InlinePictureCollection;
		lists: Word.ListCollection;
		paragraphs: Word.ParagraphCollection;
		parentContentControl: Word.ContentControl;
		parentTable: Word.Table;
		parentTableCell: Word.TableCell;
		tables: Word.TableCollection;
		appearance: string;
		cannotDelete: boolean;
		cannotEdit: boolean;
		color: string;
		id: number;
		placeholderText: string;
		removeWhenEdited: boolean;
		style: string;
		subtype: string;
		tag: string;
		text: string;
		title: string;
		type: string;
		clear(): void;
		delete(keepContent: boolean): void;
		getHtml(): OfficeExtension.ClientResult<string>;
		getOoxml(): OfficeExtension.ClientResult<string>;
		getRange(rangeLocation?: string): Word.Range;
		getTextRanges(punctuationMarks: Array<string>, trimSpacing?: boolean): Word.RangeCollection;
		insertBreak(breakType: string, insertLocation: string): void;
		insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
		insertHtml(html: string, insertLocation: string): Word.Range;
		insertInlinePictureFromBase64(base64EncodedImage: string, insertLocation: string): Word.InlinePicture;
		insertOoxml(ooxml: string, insertLocation: string): Word.Range;
		insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
		insertTable(
		rowCount: number, columnCount: number, insertLocation: string, values?: Array<Array<string>>
	): Word.Table;
		insertText(text: string, insertLocation: string): Word.Range;
		search(
		searchText: string, searchOptions?: Word.SearchOptions | {
		ignorePunct?: boolean,
		ignoreSpace?: boolean,
		matchCase?: boolean,
		matchPrefix?: boolean,
		matchSoundsLike?: boolean,
		matchSuffix?: boolean,
		matchWholeWord?: boolean,
		matchWildcards?: boolean
	}
	): Word.SearchResultCollection;
		select(selectionMode?: string): void;
		split(
		delimiters: Array<string>, multiParagraphs?: boolean, trimDelimiters?: boolean, trimSpacing?: boolean
	): Word.RangeCollection;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.ContentControl
	}

	declare class ContentControlCollection extends OfficeExtension$ClientObject {
		first: Word.ContentControl;
		items: Array<Word.ContentControl>;
		getById(id: number): Word.ContentControl;
		getByTag(tag: string): Word.ContentControlCollection;
		getByTitle(title: string): Word.ContentControlCollection;
		getByTypes(types: Array<string>): Word.ContentControlCollection;
		getItem(index: number): Word.ContentControl;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Word.ContentControlCollection
	}

	declare class Document extends OfficeExtension$ClientObject {
		body: Word.Body;
		contentControls: Word.ContentControlCollection;
		sections: Word.SectionCollection;
		saved: boolean;
		getSelection(): Word.Range;
		open(): void;
		save(): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.Document
	}

	declare class Font extends OfficeExtension$ClientObject {
		bold: boolean;
		color: string;
		doubleStrikeThrough: boolean;
		highlightColor: string;
		italic: boolean;
		name: string;
		size: number;
		strikeThrough: boolean;
		subscript: boolean;
		superscript: boolean;
		underline: string;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.Font
	}

	declare class InlinePicture extends OfficeExtension$ClientObject {
		next: Word.InlinePicture;
		paragraph: Word.Paragraph;
		parentContentControl: Word.ContentControl;
		parentTable: Word.Table;
		parentTableCell: Word.TableCell;
		altTextDescription: string;
		altTextTitle: string;
		height: number;
		hyperlink: string;
		imageFormat: string;
		lockAspectRatio: boolean;
		width: number;
		delete(): void;
		getBase64ImageSrc(): OfficeExtension.ClientResult<string>;
		getRange(rangeLocation?: string): Word.Range;
		insertBreak(breakType: string, insertLocation: string): void;
		insertContentControl(): Word.ContentControl;
		insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
		insertHtml(html: string, insertLocation: string): Word.Range;
		insertInlinePictureFromBase64(base64EncodedImage: string, insertLocation: string): Word.InlinePicture;
		insertOoxml(ooxml: string, insertLocation: string): Word.Range;
		insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
		insertText(text: string, insertLocation: string): Word.Range;
		select(selectionMode?: string): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.InlinePicture
	}

	declare class InlinePictureCollection extends OfficeExtension$ClientObject {
		first: Word.InlinePicture;
		items: Array<Word.InlinePicture>;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Word.InlinePictureCollection
	}

	declare class List extends OfficeExtension$ClientObject {
		format: Word.ListFormat;
		id: number;
		getParagraphs(topLevelOnly?: boolean): Word.ParagraphCollection;
		insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.List
	}

	declare class ListCollection extends OfficeExtension$ClientObject {
		first: Word.List;
		items: Array<Word.List>;
		getById(id: number): Word.List;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.ListCollection
	}

	declare class ListFormat extends OfficeExtension$ClientObject {
		levelTypes: Array<string>;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.ListFormat
	}

	declare class ListItem extends OfficeExtension$ClientObject {
		listString: string;
		siblingIndex: number;
		getAncestor(parentOnly?: boolean): Word.Paragraph;
		getDescendants(directChildrenOnly?: boolean): Word.ParagraphCollection;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.ListItem
	}

	declare class Paragraph extends OfficeExtension$ClientObject {
		contentControls: Word.ContentControlCollection;
		font: Word.Font;
		inlinePictures: Word.InlinePictureCollection;
		list: Word.List;
		listItem: Word.ListItem;
		next: Word.Paragraph;
		parentBody: Word.Body;
		parentContentControl: Word.ContentControl;
		parentTable: Word.Table;
		parentTableCell: Word.TableCell;
		previous: Word.Paragraph;
		alignment: string;
		firstLineIndent: number;
		leftIndent: number;
		lineSpacing: number;
		lineUnitAfter: number;
		lineUnitBefore: number;
		listLevel: number;
		outlineLevel: number;
		rightIndent: number;
		spaceAfter: number;
		spaceBefore: number;
		style: string;
		tableNestingLevel: number;
		text: string;
		clear(): void;
		delete(): void;
		getHtml(): OfficeExtension.ClientResult<string>;
		getOoxml(): OfficeExtension.ClientResult<string>;
		getRange(rangeLocation?: string): Word.Range;
		getTextRanges(punctuationMarks: Array<string>, trimSpacing?: boolean): Word.RangeCollection;
		insertBreak(breakType: string, insertLocation: string): void;
		insertContentControl(): Word.ContentControl;
		insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
		insertHtml(html: string, insertLocation: string): Word.Range;
		insertInlinePictureFromBase64(base64EncodedImage: string, insertLocation: string): Word.InlinePicture;
		insertOoxml(ooxml: string, insertLocation: string): Word.Range;
		insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
		insertTable(
		rowCount: number, columnCount: number, insertLocation: string, values?: Array<Array<string>>
	): Word.Table;
		insertText(text: string, insertLocation: string): Word.Range;
		search(
		searchText: string, searchOptions?: Word.SearchOptions | {
		ignorePunct?: boolean,
		ignoreSpace?: boolean,
		matchCase?: boolean,
		matchPrefix?: boolean,
		matchSoundsLike?: boolean,
		matchSuffix?: boolean,
		matchWholeWord?: boolean,
		matchWildcards?: boolean
	}
	): Word.SearchResultCollection;
		select(selectionMode?: string): void;
		split(
		delimiters: Array<string>, trimDelimiters?: boolean, trimSpacing?: boolean
	): Word.RangeCollection;
		startNewList(): Word.List;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.Paragraph
	}

	declare class ParagraphCollection extends OfficeExtension$ClientObject {
		first: Word.Paragraph;
		last: Word.Paragraph;
		items: Array<Word.Paragraph>;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Word.ParagraphCollection
	}

	declare class Range extends OfficeExtension$ClientObject {
		contentControls: Word.ContentControlCollection;
		font: Word.Font;
		inlinePictures: Word.InlinePictureCollection;
		lists: Word.ListCollection;
		paragraphs: Word.ParagraphCollection;
		parentBody: Word.Body;
		parentContentControl: Word.ContentControl;
		parentTable: Word.Table;
		parentTableCell: Word.TableCell;
		tables: Word.TableCollection;
		hyperlink: string;
		isEmpty: boolean;
		style: string;
		text: string;
		clear(): void;
		compareLocationWith(range: Word.Range): OfficeExtension.ClientResult<string>;
		delete(): void;
		expandTo(range: Word.Range): void;
		getHtml(): OfficeExtension.ClientResult<string>;
		getHyperlinkRanges(): Word.RangeCollection;
		getNextTextRange(punctuationMarks: Array<string>, trimSpacing?: boolean): Word.Range;
		getOoxml(): OfficeExtension.ClientResult<string>;
		getRange(rangeLocation?: string): Word.Range;
		getTextRanges(punctuationMarks: Array<string>, trimSpacing?: boolean): Word.RangeCollection;
		insertBreak(breakType: string, insertLocation: string): void;
		insertContentControl(): Word.ContentControl;
		insertFileFromBase64(base64File: string, insertLocation: string): Word.Range;
		insertHtml(html: string, insertLocation: string): Word.Range;
		insertInlinePictureFromBase64(base64EncodedImage: string, insertLocation: string): Word.InlinePicture;
		insertOoxml(ooxml: string, insertLocation: string): Word.Range;
		insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
		insertTable(
		rowCount: number, columnCount: number, insertLocation: string, values?: Array<Array<string>>
	): Word.Table;
		insertText(text: string, insertLocation: string): Word.Range;
		intersectWith(range: Word.Range): void;
		search(
		searchText: string, searchOptions?: Word.SearchOptions | {
		ignorePunct?: boolean,
		ignoreSpace?: boolean,
		matchCase?: boolean,
		matchPrefix?: boolean,
		matchSoundsLike?: boolean,
		matchSuffix?: boolean,
		matchWholeWord?: boolean,
		matchWildcards?: boolean
	}
	): Word.SearchResultCollection;
		select(selectionMode?: string): void;
		split(
		delimiters: Array<string>, multiParagraphs?: boolean, trimDelimiters?: boolean, trimSpacing?: boolean
	): Word.RangeCollection;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.Range
	}

	declare class RangeCollection extends OfficeExtension$ClientObject {
		first: Word.Range;
		items: Array<Word.Range>;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.RangeCollection
	}

	declare class SearchOptions extends OfficeExtension$ClientObject {
		matchWildCards: boolean;
		ignorePunct: boolean;
		ignoreSpace: boolean;
		matchCase: boolean;
		matchPrefix: boolean;
		matchSoundsLike: boolean;
		matchSuffix: boolean;
		matchWholeWord: boolean;
		matchWildcards: boolean;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.SearchOptions;
		newObject(context: OfficeExtension.ClientRequestContext): Word.SearchOptions
	}

	declare class SearchResultCollection extends OfficeExtension$ClientObject {
		first: Word.Range;
		items: Array<Word.Range>;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Word.SearchResultCollection
	}

	declare class Section extends OfficeExtension$ClientObject {
		body: Word.Body;
		next: Word.Section;
		getFooter(type: string): Word.Body;
		getHeader(type: string): Word.Body;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.Section
	}

	declare class SectionCollection extends OfficeExtension$ClientObject {
		first: Word.Section;
		items: Array<Word.Section>;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Word.SectionCollection
	}

	declare class Table extends OfficeExtension$ClientObject {
		font: Word.Font;
		next: Word.Table;
		paragraphAfter: Word.Paragraph;
		paragraphBefore: Word.Paragraph;
		parentContentControl: Word.ContentControl;
		parentTable: Word.Table;
		parentTableCell: Word.TableCell;
		rows: Word.TableRowCollection;
		tables: Word.TableCollection;
		cellPaddingBottom: number;
		cellPaddingLeft: number;
		cellPaddingRight: number;
		cellPaddingTop: number;
		headerRowCount: number;
		height: number;
		isUniform: boolean;
		nestingLevel: number;
		rowCount: number;
		shadingColor: string;
		style: string;
		styleBandedColumns: boolean;
		styleBandedRows: boolean;
		styleFirstColumn: boolean;
		styleLastColumn: boolean;
		styleTotalRow: boolean;
		values: Array<Array<string>>;
		verticalAlignment: string;
		width: number;
		addColumns(
		insertLocation: string, columnCount: number, values?: Array<Array<string>>
	): void;
		addRows(insertLocation: string, rowCount: number, values?: Array<Array<string>>): void;
		autoFitContents(): void;
		autoFitWindow(): void;
		clear(): void;
		delete(): void;
		deleteColumns(columnIndex: number, columnCount?: number): void;
		deleteRows(rowIndex: number, rowCount?: number): void;
		distributeColumns(): void;
		distributeRows(): void;
		getBorderStyle(borderLocation: string): Word.TableBorderStyle;
		getCell(rowIndex: number, cellIndex: number): Word.TableCell;
		getRange(rangeLocation: string): Word.Range;
		insertContentControl(): Word.ContentControl;
		insertParagraph(paragraphText: string, insertLocation: string): Word.Paragraph;
		insertTable(
		rowCount: number, columnCount: number, insertLocation: string, values?: Array<Array<string>>
	): Word.Table;
		mergeCells(
		topRow: number, firstCell: number, bottomRow: number, lastCell: number
	): Word.TableCell;
		search(
		searchText: string, searchOptions?: Word.SearchOptions | {
		ignorePunct?: boolean,
		ignoreSpace?: boolean,
		matchCase?: boolean,
		matchPrefix?: boolean,
		matchSoundsLike?: boolean,
		matchSuffix?: boolean,
		matchWholeWord?: boolean,
		matchWildcards?: boolean
	}
	): Word.SearchResultCollection;
		select(selectionMode?: string): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.Table
	}

	declare class TableCollection extends OfficeExtension$ClientObject {
		first: Word.Table;
		items: Array<Word.Table>;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.TableCollection
	}

	declare class TableRow extends OfficeExtension$ClientObject {
		cells: Word.TableCellCollection;
		font: Word.Font;
		next: Word.TableRow;
		parentTable: Word.Table;
		cellCount: number;
		cellPaddingBottom: number;
		cellPaddingLeft: number;
		cellPaddingRight: number;
		cellPaddingTop: number;
		isHeader: boolean;
		preferredHeight: number;
		rowIndex: number;
		shadingColor: string;
		values: Array<string>;
		verticalAlignment: string;
		clear(): void;
		delete(): void;
		getBorderStyle(borderLocation: string): Word.TableBorderStyle;
		insertRows(insertLocation: string, rowCount: number, values?: Array<Array<string>>): void;
		merge(): Word.TableCell;
		search(
		searchText: string, searchOptions?: Word.SearchOptions | {
		ignorePunct?: boolean,
		ignoreSpace?: boolean,
		matchCase?: boolean,
		matchPrefix?: boolean,
		matchSoundsLike?: boolean,
		matchSuffix?: boolean,
		matchWholeWord?: boolean,
		matchWildcards?: boolean
	}
	): Word.SearchResultCollection;
		select(selectionMode?: string): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.TableRow
	}

	declare class TableRowCollection extends OfficeExtension$ClientObject {
		first: Word.TableRow;
		items: Array<Word.TableRow>;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Word.TableRowCollection
	}

	declare class TableCell extends OfficeExtension$ClientObject {
		body: Word.Body;
		next: Word.TableCell;
		parentRow: Word.TableRow;
		parentTable: Word.Table;
		cellIndex: number;
		cellPaddingBottom: number;
		cellPaddingLeft: number;
		cellPaddingRight: number;
		cellPaddingTop: number;
		columnWidth: number;
		rowIndex: number;
		shadingColor: string;
		value: string;
		verticalAlignment: string;
		width: number;
		deleteColumn(): void;
		deleteRow(): void;
		getBorderStyle(borderLocation: string): Word.TableBorderStyle;
		insertColumns(
		insertLocation: string, columnCount: number, values?: Array<Array<string>>
	): void;
		insertRows(insertLocation: string, rowCount: number, values?: Array<Array<string>>): void;
		split(rowCount: number, columnCount: number): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.TableCell
	}

	declare class TableCellCollection extends OfficeExtension$ClientObject {
		first: Word.TableCell;
		items: Array<Word.TableCell>;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): Word.TableCellCollection
	}

	declare class TableBorderStyle extends OfficeExtension$ClientObject {
		color: string;
		type: string;
		width: number;
		load(option?: string | string[] | OfficeExtension.LoadOption): Word.TableBorderStyle
	}

	declare class RequestContext extends OfficeExtension$ClientRequestContext {
		constructor(url?: string): this;
		document: Document
	}

	
}

declare module 'npm$namespace$OneNote' {
		declare interface ImageOcrData {
		ocrLanguageId: string,
		ocrText: string
	}

	declare interface InkStrokePointer {
		contentId: string,
		inkStrokeId: string
	}

	declare function run<T>(
		batch: (context: OneNote.RequestContext) => OfficeExtension.IPromise<T>
	): OfficeExtension.IPromise<T>

	declare class Application extends OfficeExtension$ClientObject {
		notebooks: OneNote.NotebookCollection;
		getActiveNotebook(): OneNote.Notebook;
		getActiveNotebookOrNull(): OneNote.Notebook;
		getActiveOutline(): OneNote.Outline;
		getActiveOutlineOrNull(): OneNote.Outline;
		getActivePage(): OneNote.Page;
		getActivePageOrNull(): OneNote.Page;
		getActiveSection(): OneNote.Section;
		getActiveSectionOrNull(): OneNote.Section;
		navigateToPage(page: OneNote.Page): void;
		navigateToPageWithClientUrl(url: string): OneNote.Page;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Application
	}

	declare class InkAnalysis extends OfficeExtension$ClientObject {
		page: OneNote.Page;
		paragraphs: OneNote.InkAnalysisParagraphCollection;
		id: string;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkAnalysis
	}

	declare class InkAnalysisParagraph extends OfficeExtension$ClientObject {
		inkAnalysis: OneNote.InkAnalysis;
		lines: OneNote.InkAnalysisLineCollection;
		id: string;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.InkAnalysisParagraph
	}

	declare class InkAnalysisParagraphCollection extends OfficeExtension$ClientObject {
		items: Array<OneNote.InkAnalysisParagraph>;
		count: number;
		getItem(index: number | string): OneNote.InkAnalysisParagraph;
		getItemAt(index: number): OneNote.InkAnalysisParagraph;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.InkAnalysisParagraphCollection
	}

	declare class InkAnalysisLine extends OfficeExtension$ClientObject {
		paragraph: OneNote.InkAnalysisParagraph;
		words: OneNote.InkAnalysisWordCollection;
		id: string;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.InkAnalysisLine
	}

	declare class InkAnalysisLineCollection extends OfficeExtension$ClientObject {
		items: Array<OneNote.InkAnalysisLine>;
		count: number;
		getItem(index: number | string): OneNote.InkAnalysisLine;
		getItemAt(index: number): OneNote.InkAnalysisLine;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.InkAnalysisLineCollection
	}

	declare class InkAnalysisWord extends OfficeExtension$ClientObject {
		line: OneNote.InkAnalysisLine;
		id: string;
		languageId: string;
		strokePointers: Array<OneNote.InkStrokePointer>;
		wordAlternates: Array<string>;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.InkAnalysisWord
	}

	declare class InkAnalysisWordCollection extends OfficeExtension$ClientObject {
		items: Array<OneNote.InkAnalysisWord>;
		count: number;
		getItem(index: number | string): OneNote.InkAnalysisWord;
		getItemAt(index: number): OneNote.InkAnalysisWord;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.InkAnalysisWordCollection
	}

	declare class FloatingInk extends OfficeExtension$ClientObject {
		inkStrokes: OneNote.InkStrokeCollection;
		pageContent: OneNote.PageContent;
		id: string;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.FloatingInk
	}

	declare class InkStroke extends OfficeExtension$ClientObject {
		floatingInk: OneNote.FloatingInk;
		id: string;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkStroke
	}

	declare class InkStrokeCollection extends OfficeExtension$ClientObject {
		items: Array<OneNote.InkStroke>;
		count: number;
		getItem(index: number | string): OneNote.InkStroke;
		getItemAt(index: number): OneNote.InkStroke;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.InkStrokeCollection
	}

	declare class InkWord extends OfficeExtension$ClientObject {
		paragraph: OneNote.Paragraph;
		id: string;
		languageId: string;
		wordAlternates: Array<string>;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.InkWord
	}

	declare class InkWordCollection extends OfficeExtension$ClientObject {
		items: Array<OneNote.InkWord>;
		count: number;
		getItem(index: number | string): OneNote.InkWord;
		getItemAt(index: number): OneNote.InkWord;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.InkWordCollection
	}

	declare class Notebook extends OfficeExtension$ClientObject {
		sectionGroups: OneNote.SectionGroupCollection;
		sections: OneNote.SectionCollection;
		clientUrl: string;
		id: string;
		name: string;
		addSection(name: string): OneNote.Section;
		addSectionGroup(name: string): OneNote.SectionGroup;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Notebook
	}

	declare class NotebookCollection extends OfficeExtension$ClientObject {
		items: Array<OneNote.Notebook>;
		count: number;
		getByName(name: string): OneNote.NotebookCollection;
		getItem(index: number | string): OneNote.Notebook;
		getItemAt(index: number): OneNote.Notebook;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.NotebookCollection
	}

	declare class SectionGroup extends OfficeExtension$ClientObject {
		notebook: OneNote.Notebook;
		parentSectionGroup: OneNote.SectionGroup;
		parentSectionGroupOrNull: OneNote.SectionGroup;
		sectionGroups: OneNote.SectionGroupCollection;
		sections: OneNote.SectionCollection;
		clientUrl: string;
		id: string;
		name: string;
		addSection(title: string): OneNote.Section;
		addSectionGroup(name: string): OneNote.SectionGroup;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.SectionGroup
	}

	declare class SectionGroupCollection extends OfficeExtension$ClientObject {
		items: Array<OneNote.SectionGroup>;
		count: number;
		getByName(name: string): OneNote.SectionGroupCollection;
		getItem(index: number | string): OneNote.SectionGroup;
		getItemAt(index: number): OneNote.SectionGroup;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.SectionGroupCollection
	}

	declare class Section extends OfficeExtension$ClientObject {
		notebook: OneNote.Notebook;
		pages: OneNote.PageCollection;
		parentSectionGroup: OneNote.SectionGroup;
		parentSectionGroupOrNull: OneNote.SectionGroup;
		clientUrl: string;
		id: string;
		name: string;
		addPage(title: string): OneNote.Page;
		copyToNotebook(destinationNotebook: OneNote.Notebook): OneNote.Section;
		copyToSectionGroup(destinationSectionGroup: OneNote.SectionGroup): OneNote.Section;
		insertSectionAsSibling(location: string, title: string): OneNote.Section;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Section
	}

	declare class SectionCollection extends OfficeExtension$ClientObject {
		items: Array<OneNote.Section>;
		count: number;
		getByName(name: string): OneNote.SectionCollection;
		getItem(index: number | string): OneNote.Section;
		getItemAt(index: number): OneNote.Section;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.SectionCollection
	}

	declare class Page extends OfficeExtension$ClientObject {
		contents: OneNote.PageContentCollection;
		inkAnalysisOrNull: OneNote.InkAnalysis;
		parentSection: OneNote.Section;
		clientUrl: string;
		id: string;
		pageLevel: number;
		title: string;
		webUrl: string;
		addOutline(left: number, top: number, html: string): OneNote.Outline;
		copyToSection(destinationSection: OneNote.Section): OneNote.Page;
		insertPageAsSibling(location: string, title: string): OneNote.Page;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Page
	}

	declare class PageCollection extends OfficeExtension$ClientObject {
		items: Array<OneNote.Page>;
		count: number;
		getByTitle(title: string): OneNote.PageCollection;
		getItem(index: number | string): OneNote.Page;
		getItemAt(index: number): OneNote.Page;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.PageCollection
	}

	declare class PageContent extends OfficeExtension$ClientObject {
		image: OneNote.Image;
		ink: OneNote.FloatingInk;
		outline: OneNote.Outline;
		parentPage: OneNote.Page;
		id: string;
		left: number;
		top: number;
		type: string;
		delete(): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.PageContent
	}

	declare class PageContentCollection extends OfficeExtension$ClientObject {
		items: Array<OneNote.PageContent>;
		count: number;
		getItem(index: number | string): OneNote.PageContent;
		getItemAt(index: number): OneNote.PageContent;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.PageContentCollection
	}

	declare class Outline extends OfficeExtension$ClientObject {
		pageContent: OneNote.PageContent;
		paragraphs: OneNote.ParagraphCollection;
		id: string;
		appendHtml(html: string): void;
		appendImage(base64EncodedImage: string, width: number, height: number): OneNote.Image;
		appendRichText(paragraphText: string): OneNote.RichText;
		appendTable(
		rowCount: number, columnCount: number, values?: Array<Array<string>>
	): OneNote.Table;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Outline
	}

	declare class Paragraph extends OfficeExtension$ClientObject {
		image: OneNote.Image;
		inkWords: OneNote.InkWordCollection;
		outline: OneNote.Outline;
		paragraphs: OneNote.ParagraphCollection;
		parentParagraph: OneNote.Paragraph;
		parentParagraphOrNull: OneNote.Paragraph;
		parentTableCell: OneNote.TableCell;
		parentTableCellOrNull: OneNote.TableCell;
		richText: OneNote.RichText;
		table: OneNote.Table;
		id: string;
		type: string;
		delete(): void;
		insertHtmlAsSibling(insertLocation: string, html: string): void;
		insertImageAsSibling(
		insertLocation: string, base64EncodedImage: string, width: number, height: number
	): OneNote.Image;
		insertRichTextAsSibling(insertLocation: string, paragraphText: string): OneNote.RichText;
		insertTableAsSibling(
		insertLocation: string, rowCount: number, columnCount: number, values?: Array<Array<string>>
	): OneNote.Table;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Paragraph
	}

	declare class ParagraphCollection extends OfficeExtension$ClientObject {
		items: Array<OneNote.Paragraph>;
		count: number;
		getItem(index: number | string): OneNote.Paragraph;
		getItemAt(index: number): OneNote.Paragraph;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.ParagraphCollection
	}

	declare class RichText extends OfficeExtension$ClientObject {
		paragraph: OneNote.Paragraph;
		id: string;
		text: string;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.RichText
	}

	declare class Image extends OfficeExtension$ClientObject {
		pageContent: OneNote.PageContent;
		paragraph: OneNote.Paragraph;
		description: string;
		height: number;
		hyperlink: string;
		id: string;
		ocrData: OneNote.ImageOcrData;
		width: number;
		getBase64Image(): OfficeExtension.ClientResult<string>;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Image
	}

	declare class Table extends OfficeExtension$ClientObject {
		paragraph: OneNote.Paragraph;
		rows: OneNote.TableRowCollection;
		borderVisible: boolean;
		columnCount: number;
		id: string;
		rowCount: number;
		appendColumn(values?: Array<string>): void;
		appendRow(values?: Array<string>): OneNote.TableRow;
		clear(): void;
		getCell(rowIndex: number, cellIndex: number): OneNote.TableCell;
		insertColumn(index: number, values?: Array<string>): void;
		insertRow(index: number, values?: Array<string>): OneNote.TableRow;
		setShadingColor(colorCode: string): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.Table
	}

	declare class TableRow extends OfficeExtension$ClientObject {
		cells: OneNote.TableCellCollection;
		parentTable: OneNote.Table;
		cellCount: number;
		id: string;
		rowIndex: number;
		clear(): void;
		insertRowAsSibling(insertLocation: string, values?: Array<string>): OneNote.TableRow;
		setShadingColor(colorCode: string): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.TableRow
	}

	declare class TableRowCollection extends OfficeExtension$ClientObject {
		items: Array<OneNote.TableRow>;
		count: number;
		getItem(index: number | string): OneNote.TableRow;
		getItemAt(index: number): OneNote.TableRow;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.TableRowCollection
	}

	declare class TableCell extends OfficeExtension$ClientObject {
		paragraphs: OneNote.ParagraphCollection;
		parentRow: OneNote.TableRow;
		cellIndex: number;
		id: string;
		rowIndex: number;
		shadingColor: string;
		appendHtml(html: string): void;
		appendImage(base64EncodedImage: string, width: number, height: number): OneNote.Image;
		appendRichText(paragraphText: string): OneNote.RichText;
		appendTable(
		rowCount: number, columnCount: number, values?: Array<Array<string>>
	): OneNote.Table;
		clear(): void;
		load(option?: string | string[] | OfficeExtension.LoadOption): OneNote.TableCell
	}

	declare class TableCellCollection extends OfficeExtension$ClientObject {
		items: Array<OneNote.TableCell>;
		count: number;
		getItem(index: number | string): OneNote.TableCell;
		getItemAt(index: number): OneNote.TableCell;
		load(
		option?: string | string[] | OfficeExtension.LoadOption
	): OneNote.TableCellCollection
	}

	declare class RequestContext extends OfficeExtension$ClientRequestContext {
		constructor(url?: string): this;
		application: Application
	}

	
}