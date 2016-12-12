

declare module 'SharePoint' {
		declare interface ContextInfo {
		AllowGridMode: boolean,
		BasePermissions: any,
		BaseViewID: any,
		CascadeDeleteWarningMessage: string,
		ContentTypesEnabled: boolean,
		CurrentSelectedItems: boolean,
		CurrentUserId: number,
		EnableMinorVersions: boolean,
		ExternalDataList: boolean,
		HasRelatedCascadeLists: boolean,
		HttpPath: string,
		HttpRoot: string,
		LastSelectableRowIdx: number,
		LastSelectedItemIID: number,
		LastRowIndexSelected: number,
		RowFocusTimerID: number,
		ListData: any,
		ListSchema: SPClientTemplates.ListSchema,
		ModerationStatus: number,
		PortalUrl: string,
		RecycleBinEnabled: number,
		SelectAllCbx: HTMLElement,
		SendToLocationName: string,
		SendToLocationUrl: string,
		StateInitDone: boolean,
		TableCbxFocusHandler: Function,
		TableMouseoverHandler: Function,
		TotalListItems: number,
		WorkflowsAssociated: boolean,
		clvp: any,
		ctxId: number,
		ctxType: any,
		dictSel: any,
		displayFormUrl: string,
		editFormUrl: string,
		imagesPath: string,
		inGridMode: boolean,
		inGridFullRender: boolean,
		isForceCheckout: boolean,
		isModerated: boolean,
		isPortalTemplate: boolean,
		isVersions: boolean,
		isWebEditorPreview: boolean,
		leavingGridMode: boolean,
		loadingAsyncData: boolean,
		listBaseType: number,
		listName: string,
		listTemplate: string,
		listUrlDir: string,
		newFormUrl: string,
		onRefreshFailed: Function,
		overrideDeleteConfirmation: string,
		overrideFilterQstring: string,
		recursiveView: boolean,
		rootFolderForDisplay: string,
		serverUrl: string,
		verEnabled: boolean,
		view: string,
		queryString: string,
		IsClientRendering: boolean,
		wpq: string,
		rootFolder: string,
		IsAppWeb: boolean,
		NewWOPIDocumentEnabled: boolean,
		NewWOPIDocumentUrl: string,
		AllowCreateFolder: boolean,
		CanShareLinkForNewDocument: boolean,
		noGroupCollapse: boolean,
		SiteTemplateId: number,
		ExcludeFromOfflineClient: boolean
	}

	declare interface MQuery {
		(selector: string, context?: any): MQueryResultSetElements,
		(element: HTMLElement): MQueryResultSetElements,
		(object: MQueryResultSetElements): MQueryResultSetElements,
		(object: MQueryResultSet<T>): MQueryResultSet<T>,
		(object: T): MQueryResultSet<T>,
		(elementArray: HTMLElement[]): MQueryResultSetElements,
		(array: T[]): MQueryResultSet<T>,
		(): MQueryResultSet<T>,
		throttle(fn: Function, interval: number, shouldOverrideThrottle: boolean): Function,
		extend(target: any, ...objs: any[]): Object,
		extend(deep: boolean, target: any, ...objs: any[]): Object,
		makeArray<T>(obj: any): any[],
		isDefined(obj: any): boolean,
		isNotNull(obj: any): boolean,
		isUndefined(obj: any): boolean,
		isNull(obj: any): boolean,
		isUndefinedOrNull(obj: any): boolean,
		isDefinedAndNotNull(obj: any): boolean,
		isString(obj: any): boolean,
		isBoolean(obj: any): boolean,
		isFunction(obj: any): boolean,
		isArray(obj: any): boolean,
		isNode(obj: any): boolean,
		isElement(obj: any): boolean,
		isMQueryResultSet(obj: any): boolean,
		isNumber(obj: any): boolean,
		isObject(obj: any): boolean,
		isEmptyObject(obj: any): boolean,
		ready(callback: () => void): void,
		contains(container: HTMLElement, contained: HTMLElement): boolean,
		proxy(fn: (...args: any[]) => any, context: any, ...args: any[]): Function,
		proxy(context: any, name: string, ...args: any[]): any,
		every<T>(
		obj: T[], fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any
	): boolean,
		every<T>(
		obj: MQueryResultSet<T>, fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any
	): boolean,
		every<T>(obj: T[], fn: (elementOfArray: T) => boolean, context?: any): boolean,
		every<T>(
		obj: MQueryResultSet<T>, fn: (elementOfArray: any) => boolean, context?: any
	): boolean,
		some<T>(
		obj: T[], fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any
	): boolean,
		some<T>(
		obj: MQueryResultSet<T>, fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any
	): boolean,
		some<T>(obj: T[], fn: (elementOfArray: T) => boolean, context?: any): boolean,
		some<T>(
		obj: MQueryResultSet<T>, fn: (elementOfArray: T) => boolean, context?: any
	): boolean,
		filter<T>(
		obj: T[], fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any
	): T[],
		filter<T>(
		obj: MQueryResultSet<T>, fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any
	): MQueryResultSet<T>,
		filter<T>(obj: T[], fn: (elementOfArray: T) => boolean, context?: any): T[],
		filter<T>(
		obj: MQueryResultSet<T>, fn: (elementOfArray: T) => boolean, context?: any
	): MQueryResultSet<T>,
		forEach<T>(
		obj: T[], fn: (elementOfArray: T, indexInArray: number) => void, context?: any
	): void,
		forEach<T>(
		obj: MQueryResultSet<T>, fn: (elementOfArray: T, indexInArray: number) => void, context?: any
	): void,
		forEach<T>(obj: T[], fn: (elementOfArray: T) => void, context?: any): void,
		forEach<T>(
		obj: MQueryResultSet<T>, fn: (elementOfArray: T) => void, context?: any
	): void,
		map<T, U>(
		array: T[], callback: (elementOfArray: T, indexInArray: number) => U
	): U[],
		map<T, U>(
		array: MQueryResultSet<T>, callback: (elementOfArray: T, indexInArray: number) => U
	): MQueryResultSet<U>,
		map<T, U>(array: T[], callback: (elementOfArray: T) => U): U[],
		map<T, U>(
		array: MQueryResultSet<T>, callback: (elementOfArray: T) => U
	): MQueryResultSet<U>,
		indexOf<T>(obj: T[], object: T, startIndex?: number): number,
		lastIndexOf<T>(obj: T[], object: T, startIndex?: number): number,
		data(element: HTMLElement, key: string, value: any): any,
		data(element: HTMLElement, key: string): any,
		data(element: HTMLElement): any,
		removeData(element: HTMLElement, name?: string): MQueryResultSetElements,
		hasData(element: HTMLElement): boolean
	}

	declare interface MQueryResultSetElements {
		append(node: HTMLElement): MQueryResultSetElements,
		append(mQuerySet: MQueryResultSetElements): MQueryResultSetElements,
		append(html: string): MQueryResultSetElements,
		bind(
		eventType: string, handler: (eventObject: MQueryEvent) => any
	): MQueryResultSetElements,
		unbind(
		eventType: string, handler: (eventObject: MQueryEvent) => any
	): MQueryResultSetElements,
		trigger(eventType: string): MQueryResultSetElements,
		one(
		eventType: string, handler: (eventObject: MQueryEvent) => any
	): MQueryResultSetElements,
		detach(): MQueryResultSetElements,
		find(selector: string): MQueryResultSetElements,
		closest(selector: string, context?: any): MQueryResultSetElements,
		offset(): {
		left: number,
		top: number
	},
		offset(coordinates: {
		left: any,
		top: any
	}): MQueryResultSetElements,
		filter(selector: string): MQueryResultSetElements,
		filter(
		fn: (elementOfArray: HTMLElement, indexInArray: number) => boolean, context?: any
	): MQueryResultSetElements,
		filter(
		fn: (elementOfArray: HTMLElement) => boolean, context?: any
	): MQueryResultSetElements,
		not(selector: string): MQueryResultSetElements,
		parent(selector?: string): MQueryResultSetElements,
		offsetParent(selector?: string): MQueryResultSetElements,
		parents(selector?: string): MQueryResultSetElements,
		parentsUntil(selector?: string, filter?: string): MQueryResultSetElements,
		parentsUntil(element?: HTMLElement, filter?: string): MQueryResultSetElements,
		position(): {
		top: number,
		left: number
	},
		attr(attributeName: string): string,
		attr(attributeName: string, value: any): MQueryResultSetElements,
		attr(map: {
		[key: string]: any
	}): MQueryResultSetElements,
		attr(
		attributeName: string, func: (index: number, attr: any) => any
	): MQueryResultSetElements,
		addClass(classNames: string): MQueryResultSetElements,
		removeClass(classNames: string): MQueryResultSetElements,
		css(propertyName: string): string,
		css(propertyNames: string[]): string,
		css(properties: any): MQueryResultSetElements,
		css(propertyName: string, value: any): MQueryResultSetElements,
		css(propertyName: any, value: any): MQueryResultSetElements,
		remove(selector?: string): MQueryResultSetElements,
		children(selector?: string): MQueryResultSetElements,
		empty(): MQueryResultSetElements,
		first(): MQueryResultSetElements,
		data(key: string, value: any): MQueryResultSetElements,
		data(obj: {
		[key: string]: any
	}): MQueryResultSetElements,
		data(key: string): any,
		removeData(key: string): MQueryResultSetElements,
		map(
		callback: (elementOfArray: HTMLElement, indexInArray: number) => any
	): MQueryResultSetElements,
		map(callback: (elementOfArray: HTMLElement) => any): MQueryResultSetElements,
		blur(): MQueryResultSetElements,
		blur(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		change(): MQueryResultSetElements,
		change(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		click(): MQueryResultSetElements,
		click(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		dblclick(): MQueryResultSetElements,
		dblclick(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		error(): MQueryResultSetElements,
		error(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		focus(): MQueryResultSetElements,
		focus(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		focusin(): MQueryResultSetElements,
		focusin(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		focusout(): MQueryResultSetElements,
		focusout(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		keydown(): MQueryResultSetElements,
		keydown(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		keypress(): MQueryResultSetElements,
		keypress(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		keyup(): MQueryResultSetElements,
		keyup(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		load(): MQueryResultSetElements,
		load(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		mousedown(): MQueryResultSetElements,
		mousedown(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		mouseenter(): MQueryResultSetElements,
		mouseenter(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		mouseleave(): MQueryResultSetElements,
		mouseleave(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		mousemove(): MQueryResultSetElements,
		mousemove(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		mouseout(): MQueryResultSetElements,
		mouseout(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		mouseover(): MQueryResultSetElements,
		mouseover(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		mouseup(): MQueryResultSetElements,
		mouseup(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		resize(): MQueryResultSetElements,
		resize(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		scroll(): MQueryResultSetElements,
		scroll(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		select(): MQueryResultSetElements,
		select(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		submit(): MQueryResultSetElements,
		submit(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements,
		unload(): MQueryResultSetElements,
		unload(handler: (eventObject: MQueryEvent) => any): MQueryResultSetElements
	}

	declare interface MQueryResultSet<T> {
		[index: number]: T,
		contains(contained: T): boolean,
		filter(
		fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any
	): MQueryResultSet<T>,
		filter(fn: (elementOfArray: T) => boolean, context?: any): MQueryResultSet<T>,
		every(
		fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any
	): boolean,
		every(fn: (elementOfArray: T) => boolean, context?: any): boolean,
		some(
		fn: (elementOfArray: T, indexInArray: number) => boolean, context?: any
	): boolean,
		some(fn: (elementOfArray: T) => boolean, context?: any): boolean,
		map(callback: (elementOfArray: T, indexInArray: number) => any): MQueryResultSet<T>,
		map(callback: (elementOfArray: T) => any): MQueryResultSet<T>,
		forEach(fn: (elementOfArray: T, indexInArray: number) => void, context?: any): void,
		forEach(fn: (elementOfArray: T) => void, context?: any): void,
		indexOf(object: any, startIndex?: number): number,
		lastIndexOf(object: any, startIndex?: number): number
	}

	declare interface MQueryEvent {
		altKey: boolean,
		attrChange: number,
		attrName: string,
		bubbles: boolean,
		button: number,
		cancelable: boolean,
		ctrlKey: boolean,
		defaultPrevented: boolean,
		detail: number,
		eventPhase: number,
		newValue: string,
		prevValue: string,
		relatedNode: HTMLElement,
		screenX: number,
		screenY: number,
		shiftKey: boolean,
		view: any
	}

	declare interface IEnumerator<T> {
		get_current(): T,
		moveNext(): boolean,
		reset(): void
	}

	declare interface IEnumerable<T> {
		getEnumerator(): IEnumerator<T>
	}

	declare interface ISPClientAutoFillData {
		AutoFillKey?: any,
		AutoFillDisplayText?: string,
		AutoFillSubDisplayText?: string,
		AutoFillTitleText?: string,
		AutoFillMenuOptionType?: number
	}

	declare interface ISPClientPeoplePickerSchema {
		TopLevelElementId?: string,
		EditorElementId?: string,
		AutoFillElementId?: string,
		ResolvedListElementId?: string,
		InitialHelpTextElementId?: string,
		WaitImageId?: string,
		HiddenInputId?: string,
		AllowMultipleValues?: boolean,
		Required?: boolean,
		AutoFillEnabled?: boolean,
		ForceClaims?: boolean,
		AllowEmailAddresses?: boolean,
		AllUrlZones?: boolean,
		UseLocalSuggestionCache?: boolean,
		UserNoQueryPermission?: boolean,
		VisibleSuggestions?: number,
		MaximumEntitySuggestions?: number,
		ErrorMessage?: string,
		InitialHelpText?: string,
		InitialSuggestions?: ISPClientPeoplePickerEntity[],
		UrlZone?: SP.UrlZone,
		WebApplicationID?: SP.Guid,
		SharePointGroupID?: number,
		PrincipalAccountType?: string,
		EnabledClaimProvider?: string,
		ResolvePrincipalSource?: SP.Utilities.PrincipalSource,
		SearchPrincipalSource?: SP.Utilities.PrincipalSource,
		OnUserResolvedClientScript?: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void,
		OnValueChangedClientScript?: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void,
		Width?: any,
		Rows?: number
	}

	declare interface ISPClientPeoplePickerEntity {
		Key?: string,
		Description?: string,
		DisplayText?: string,
		EntityType?: string,
		ProviderDisplayName?: string,
		ProviderName?: string,
		IsResolved?: boolean,
		EntityData?: {
		Title: string,
		MobilePhone: string,
		Department: string,
		Email: string
	},
		MultipleMatches: ISPClientPeoplePickerEntity[],
		DomainText?: string,
		[key: string]: any
	}

	declare interface IListItem {
		ID: number,
		ContentTypeId: string
	}

	declare function ExecuteOrDelayUntilBodyLoaded(initFunc: () => void): void

	declare function ExecuteOrDelayUntilScriptLoaded(func: () => void, depScriptFileName: string): boolean

	declare function ExecuteOrDelayUntilEventNotified(func: Function, eventName: string): boolean

	declare function RegisterModuleInit(scriptFileName: string, initFunc: () => void): void

	declare function STSHtmlEncode(value: string): string

	declare function STSHtmlDecode(value: string): string

	declare function AddEvtHandler(element: HTMLElement, event: string, func: EventListener): void

	declare function GetUrlKeyValue(key: string): string

	declare function GetCurrentCtx(): ContextInfo

	declare function SetFullScreenMode(fullscreen: boolean): void

	declare function GenerateIID(renderCtx: SPClientTemplates.RenderContext_ItemInView): string

	declare function GenerateIIDForListItem(
		renderCtx: SPClientTemplates.RenderContext_InView, listItem: SPClientTemplates.Item
	): string

	declare function SPFormControl_AppendValidationErrorMessage(nodeId: string, errorResult: any): void

	declare function CoreRender(template: any, context: any): string

	declare function SPField_FormDisplay_Default(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPField_FormDisplay_DefaultNoEncode(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPField_FormDisplay_Empty(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldText_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldNumber_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldBoolean_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldNote_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldNote_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldFile_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldFile_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldChoice_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldChoice_Dropdown_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldChoice_Radio_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldMultiChoice_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldDateTime_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldDateTime_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldUrl_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldUrl_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldUser_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldUserMulti_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPClientPeoplePickerCSRTemplate(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldLookup_Display(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldLookup_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldLookupMulti_Edit(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function SPFieldAttachments_Default(ctx: SPClientTemplates.RenderContext_FieldInForm): string

	declare function RefreshCommandUI(): void

	declare function $isEmptyString(value: string): boolean

	declare function $isNull(value: any): boolean

	declare function $isInArray(array: any[], item: any): boolean

	declare function $isEmptyArray(array: any[]): boolean

	declare function $htmlEncode(s: string): string

	declare function $scriptEncode(s: string): string

	declare function $urlKeyValueEncode(s: string): string

	declare function $urlPathEncode(s: string): string

	declare function $urlHtmlEncode(s: string): string

	declare function $imgSrcUrl(p: any): string

	declare function $contentLineText(p: any): any

	declare function $getClientControl(e: Element): Srch.ClientControl

	declare function $getResultItem(id: string): any

	declare function $setResultItem(id: string, resultObject: any): void

	declare function $getResultObject(id: string): any

	declare function $setResultObject(id: string, resultObject: any): void

	declare function $findResultObjectFromDOM(e: Element, type: string): void

	declare function $getItemValue(ctx: any, nameToLookup: string): any

	declare function $getCachedItemValue(ctx: any, nameToLookup: string): any

	declare function $includeScript(templateLink: string, relativeLink: string): void

	declare function $includeCSS(templateLink: string, scriptLink: string): void

	declare function $includeLanguageScript(templateLink: string, scriptLink: string): any

	declare function $registerResourceDictionary(locale: string, dict: {
		[key: string]: string
	}): void

	declare function $resource(id: string): string

	declare function $setItemWrapperCallback(renderCtx: any, itemWrapperFunction: any): void

	declare function $addRenderContextCallback(renderCtx: any, itemWrapperFunction: any): void

	declare class JSRequest  {
		QueryString: {
		[parameter: string]: string
	};
		EnsureSetup(): void;
		FileName: string;
		PathName: string
	}

	declare class _spPageContextInfo  {
		alertsEnabled: boolean;
		allowSilverlightPrompt: string;
		clientServerTimeDelta: number;
		crossDomainPhotosEnabled: boolean;
		currentCultureName: string;
		currentLanguage: number;
		currentUICultureName: string;
		layoutsUrl: string;
		pageListId: string;
		pageItemId: number;
		pagePersonalizationScope: string;
		serverRequestPath: string;
		siteAbsoluteUrl: string;
		siteClientTag: string;
		siteServerRelativeUrl: string;
		systemUserKey: string;
		tenantAppVersion: string;
		userId: number;
		webAbsoluteUrl: string;
		webLanguage: number;
		webLogoUrl: string;
		webPermMasks: {
		High: number,
		Low: number
	};
		webServerRelativeUrl: string;
		webTemplate: string;
		webTitle: string;
		webUIVersion: number
	}

	declare class AjaxNavigate  {
		update(
		url: string, updateParts: Object, fullNavigate: boolean, anchorName: string
	): void;
		add_navigate(handler: Function): void;
		remove_navigate(handler: Function): void;
		submit(formToSubmit: HTMLFormElement): void;
		getParam(paramName: string): string;
		getSavedFormAction(): string;
		get_href(): string;
		get_hash(): string;
		get_search(): string;
		convertMDSURLtoRegularURL(mdsPath: string): string
	}

	declare class Browseris  {
		firefox: boolean;
		firefox36up: boolean;
		firefox3up: boolean;
		firefox4up: boolean;
		ie: boolean;
		ie55up: boolean;
		ie5up: boolean;
		ie7down: boolean;
		ie8down: boolean;
		ie9down: boolean;
		ie8standard: boolean;
		ie8standardUp: boolean;
		ie9standardUp: boolean;
		ipad: boolean;
		windowsphone: boolean;
		chrome: boolean;
		chrome7up: boolean;
		chrome8up: boolean;
		chrome9up: boolean;
		iever: boolean;
		mac: boolean;
		major: boolean;
		msTouch: boolean;
		isTouch: boolean;
		nav: boolean;
		nav6: boolean;
		nav6up: boolean;
		nav7up: boolean;
		osver: boolean;
		safari: boolean;
		safari125up: boolean;
		safari3up: boolean;
		verIEFull: boolean;
		w3c: boolean;
		webKit: boolean;
		win: boolean;
		win8AppHost: boolean;
		win32: boolean;
		win64bit: boolean;
		winnt: boolean;
		armProcessor: boolean
	}

	declare class CalloutActionOptions  {
		text: string;
		tooltip: string;
		disabledTooltip: string;
		onClickCallback: (event: Event, action: CalloutAction) => any;
		isEnabledCallback: (action: CalloutAction) => boolean;
		isVisibleCallback: (action: CalloutAction) => boolean;
		menuEntries: CalloutActionMenuEntry[]
	}

	declare class CalloutActionMenuEntry  {
		constructor(text: string, onClickCallback: (actionMenuEntry: CalloutActionMenuEntry, actionMenuEntryIndex: number) => void, wzISrc: string, wzIAlt: string, wzISeq: number, wzDesc: string): this
	}

	declare class CalloutActionMenu  {
		constructor(actionsId: any): this;
		addAction(action: CalloutAction): void;
		getActions(): CalloutAction[];
		render(): void;
		refreshActions(): void;
		calculateActionWidth(): void
	}

	declare class CalloutAction  {
		constructor(options: CalloutActionOptions): this;
		getText(): string;
		getToolTop(): string;
		getDisabledToolTip(): string;
		getOnClickCallback(event: any, action: CalloutAction): any;
		getIsDisabledCallback(action: CalloutAction): boolean;
		getIsVisibleCallback(action: CalloutAction): boolean;
		getIsMenu(): boolean;
		getMenuEntries(): CalloutActionMenuEntry[];
		render(): void;
		isEnabled(): boolean;
		isVisible(): boolean;
		set(options: CalloutActionOptions): void
	}

	declare class Callout  {
		set(options: CalloutOptions): any;
		addEventCallback(eventName: string, callback: (callout: Callout) => void): void;
		getLaunchPoint(): HTMLElement;
		getID(): string;
		getTitle(): string;
		getContent(): string;
		getContentElement(): HTMLElement;
		getBoundingBox(): HTMLElement;
		getContentWidth(): number;
		getOpenOptions(): CalloutOpenOptions;
		getBeakOrientation(): string;
		getPositionAlgorithm(): any;
		isOpen(): boolean;
		isOpening(): boolean;
		isOpenOrOpening(): boolean;
		isClosing(): boolean;
		isClosed(): boolean;
		getActionMenu(): CalloutActionMenu;
		addAction(action: CalloutAction): void;
		refreshActions(): void;
		open(useAnimation: boolean): void;
		close(useAnimation: boolean): void;
		toggle(): void;
		destroy(): void
	}

	declare class CalloutOpenOptions  {
		event: string;
		closeCalloutOnBlur: boolean;
		showCloseButton: boolean
	}

	declare class CalloutOptions  {
		ID: string;
		launchPoint: HTMLElement;
		beakOrientation: string;
		content: string;
		title: string;
		contentElement: HTMLElement;
		boundingBox: HTMLElement;
		contentWidth: number;
		openOptions: CalloutOpenOptions;
		onOpeningCallback: (callout: Callout) => void;
		onOpenedCallback: (callout: Callout) => void;
		onClosingCallback: (callout: Callout) => void;
		onClosedCallback: (callout: Callout) => void;
		positionAlgorithm: (callout: Callout) => void
	}

	declare class CalloutManager  {
		createNew(options: CalloutOptions): Callout;
		createNewIfNecessary(options: CalloutOptions): Callout;
		remove(callout: Callout): void;
		getFromLaunchPoint(launchPoint: HTMLElement): Callout;
		getFromLaunchPointIfExists(launchPoint: HTMLElement): Callout;
		containsOneCalloutOpen(ancestor: HTMLElement): boolean;
		getFromCalloutDescendant(descendant: HTMLElement): Callout;
		forEach(callback: (callout: Callout) => void): void;
		closeAll(): boolean;
		isAtLeastOneCalloutOpen(): boolean;
		isAtLeastOneCalloutOn(): boolean
	}

	declare class SPMgr  {
		NewGroup(listItem: Object, fieldName: string): boolean;
		RenderHeader(
		renderCtx: SPClientTemplates.RenderContext, field: SPClientTemplates.FieldSchema
	): string;
		RenderField(
		renderCtx: SPClientTemplates.RenderContext, field: SPClientTemplates.FieldSchema, listItem: Object, listSchema: SPClientTemplates.ListSchema
	): string;
		RenderFieldByName(
		renderCtx: SPClientTemplates.RenderContext, fieldName: string, listItem: Object, listSchema: SPClientTemplates.ListSchema
	): string
	}

	declare class SPStatusNotificationData  {
		constructor(text: string, subText: string, imageUrl: string, sip: string): this
	}

	declare class SPClientAutoFill  {
		MenuOptionType: {
		Option: number,
		Footer: number,
		Separator: number,
		Loading: number
	};
		KeyProperty: string;
		DisplayTextProperty: string;
		SubDisplayTextProperty: string;
		TitleTextProperty: string;
		MenuOptionTypeProperty: string;
		GetAutoFillObjFromInput(elmText: HTMLInputElement): SPClientAutoFill;
		GetAutoFillObjFromContainer(elmChild: HTMLElement): SPClientAutoFill;
		GetAutoFillMenuItemFromOption(elmChild: HTMLElement): HTMLElement;
		constructor(elmTextId: string, elmContainerId: string, fnPopulateAutoFill: (targetElement: HTMLInputElement) => void): this;
		TextElementId: string;
		AutoFillContainerId: string;
		AutoFillMenuId: string;
		VisibleItemCount: number;
		CurrentFocusOption: number;
		AutoFillMinTextLength: number;
		AutoFillTimeout: number;
		AutoFillCallbackTimeoutID: string;
		FuncOnAutoFillClose: (elmTextId: string, ojData: ISPClientAutoFillData) => void;
		FuncPopulateAutoFill: (targetElement: HTMLElement) => void;
		AllOptionData: {
		[key: string]: ISPClientAutoFillData
	};
		PopulateAutoFill(
		jsonObjSuggestions: ISPClientAutoFillData[], fnOnAutoFillCloseFuncName: (elmTextId: string, objData: ISPClientAutoFillData) => void
	): void;
		IsAutoFillOpen(): boolean;
		SetAutoFillHeight(): void;
		SelectAutoFillOption(elemOption: HTMLElement): void;
		FocusAutoFill(): void;
		BlurAutoFill(): void;
		CloseAutoFill(ojData: ISPClientAutoFillData): void;
		UpdateAutoFillMenuFocus(bMoveNextLink: boolean): void;
		UpdateAutoFillPosition(): void
	}

	declare class SPClientPeoplePicker  {
		ValueName: string;
		DisplayTextName: string;
		SubDisplayTextName: string;
		DescriptionName: string;
		SIPAddressName: string;
		SuggestionsName: string;
		UnvalidatedEmailAddressKey: string;
		KeyProperty: string;
		DisplayTextProperty: string;
		SubDisplayTextProperty: string;
		TitleTextProperty: string;
		DomainProperty: string;
		SPClientPeoplePickerDict: {
		[pickerIelementId: string]: SPClientPeoplePicker
	};
		InitializeStandalonePeoplePicker(
		clientId: string, value: ISPClientPeoplePickerEntity[], schema: ISPClientPeoplePickerSchema
	): void;
		ParseUserKeyPaste(userKey: string): string;
		GetTopLevelControl(elmChild: HTMLElement): HTMLElement;
		AugmentEntity(entity: ISPClientPeoplePickerEntity): ISPClientPeoplePickerEntity;
		AugmentEntitySuggestions(
		pickerObj: SPClientPeoplePicker, allEntities: ISPClientPeoplePickerEntity[], mergeLocal?: boolean
	): ISPClientPeoplePickerEntity[];
		PickerObjectFromSubElement(elmSubElement: HTMLElement): SPClientPeoplePicker;
		TestLocalMatch(strSearchLower: string, dataEntity: ISPClientPeoplePickerEntity): boolean;
		BuildUnresolvedEntity(key: string, dispText: string): ISPClientPeoplePickerEntity;
		AddAutoFillMetaData(
		pickerObj: SPClientPeoplePicker, options: ISPClientPeoplePickerEntity[], numOpts: number
	): ISPClientPeoplePickerEntity[];
		BuildAutoFillMenuItems(
		pickerObj: SPClientPeoplePicker, options: ISPClientPeoplePickerEntity[]
	): ISPClientPeoplePickerEntity[];
		IsUserEntity(entity: ISPClientPeoplePickerEntity): boolean;
		CreateSPPrincipalType(acctStr: string): number;
		TopLevelElementId: string;
		EditorElementId: string;
		AutoFillElementId: string;
		ResolvedListElementId: string;
		InitialHelpTextElementId: string;
		WaitImageId: string;
		HiddenInputId: string;
		AllowEmpty: boolean;
		ForceClaims: boolean;
		AutoFillEnabled: boolean;
		AllowMultipleUsers: boolean;
		OnValueChangedClientScript: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
		OnUserResolvedClientScript: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
		OnControlValidateClientScript: (pickerElementId: string, users: ISPClientPeoplePickerEntity[]) => void;
		UrlZone: SP.UrlZone;
		AllUrlZones: boolean;
		SharePointGroupID: number;
		AllowEmailAddresses: boolean;
		PPMRU: SPClientPeoplePickerMRU;
		UseLocalSuggestionCache: boolean;
		CurrentQueryStr: string;
		LatestSearchQueryStr: string;
		InitialSuggestions: ISPClientPeoplePickerEntity[];
		CurrentLocalSuggestions: ISPClientPeoplePickerEntity[];
		CurrentLocalSuggestionsDict: ISPClientPeoplePickerEntity;
		VisibleSuggestions: number;
		PrincipalAccountType: string;
		PrincipalAccountTypeEnum: SP.Utilities.PrincipalType;
		EnabledClaimProviders: string;
		SearchPrincipalSource: SP.Utilities.PrincipalSource;
		ResolvePrincipalSource: SP.Utilities.PrincipalSource;
		MaximumEntitySuggestions: number;
		EditorWidthSet: boolean;
		QueryScriptInit: boolean;
		AutoFillControl: SPClientAutoFill;
		TotalUserCount: number;
		UnresolvedUserCount: number;
		UserQueryDict: {
		[index: string]: SP.StringResult
	};
		ProcessedUserList: {
		[index: string]: SPClientPeoplePickerProcessedUser
	};
		HasInputError: boolean;
		HasServerError: boolean;
		ShowUserPresence: boolean;
		TerminatingCharacter: string;
		UnresolvedUserElmIdToReplace: string;
		WebApplicationID: SP.Guid;
		GetAllUserInfo(): ISPClientPeoplePickerEntity[];
		SetInitialValue(entities: ISPClientPeoplePickerEntity[], initialErrorMsg?: string): void;
		AddUserKeys(userKeys: string, bSearch: boolean): void;
		BatchAddUserKeysOperation(allKeys: string[], numProcessed: number): void;
		ResolveAllUsers(fnContinuation: () => void): void;
		ExecutePickerQuery(
		queryIds: string, onSuccess: (queryId: string, result: SP.StringResult) => void, onFailure: (queryId: string, result: SP.StringResult) => void, fnContinuation: () => void
	): void;
		AddUnresolvedUserFromEditor(bRunQuery?: boolean): void;
		AddUnresolvedUser(unresolvedUserObj: ISPClientPeoplePickerEntity, bRunQuery?: boolean): void;
		UpdateUnresolvedUser(results: SP.StringResult, user: ISPClientPeoplePickerEntity): void;
		AddPickerSearchQuery(queryStr: string): string;
		AddPickerResolveQuery(queryStr: string): string;
		GetPeoplePickerQueryParameters(): SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters;
		AddProcessedUser(userObject: ISPClientPeoplePickerEntity, fResolved?: boolean): string;
		DeleteProcessedUser(elmToRemove: HTMLElement): void;
		OnControlValueChanged(): void;
		OnControlResolvedUserChanged(): void;
		EnsureAutoFillControl(): void;
		ShowAutoFill(resultsTable: ISPClientAutoFillData[]): void;
		FocusAutoFill(): void;
		BlurAutoFill(): void;
		IsAutoFillOpen(): boolean;
		EnsureEditorWidth(): void;
		SetFocusOnEditorEnd(): void;
		ToggleWaitImageDisplay(bShowImage?: boolean): void;
		SaveAllUserKeysToHiddenInput(): void;
		GetCurrentEditorValue(): string;
		GetControlValueAsJSObject(): ISPClientPeoplePickerEntity[];
		GetAllUserKeys(): string;
		GetControlValueAsText(): string;
		IsEmpty(): boolean;
		IterateEachProcessedUser(
		fnCallback: (index: number, user: SPClientPeoplePickerProcessedUser) => void
	): void;
		HasResolvedUsers(): boolean;
		Validate(): void;
		ValidateCurrentState(): void;
		GetUnresolvedEntityErrorMessage(): string;
		ShowErrorMessage(msg: string): void;
		ClearServerError(): void;
		SetServerError(): void;
		OnControlValidate(): void;
		SetEnabledState(bEnabled: boolean): void;
		DisplayLocalSuggestions(): void;
		CompileLocalSuggestions(input: string): void;
		PlanningGlobalSearch(): boolean;
		AddLoadingSuggestionMenuOption(): void;
		ShowingLocalSuggestions(): boolean;
		ShouldUsePPMRU(): boolean;
		AddResolvedUserToLocalCache(resolvedEntity: ISPClientPeoplePickerEntity, resolveText: string): void
	}

	declare class SPClientPeoplePickerMRU  {
		PPMRUVersion: number;
		MaxPPMRUItems: number;
		PPMRUDomLocalStoreKey: string;
		GetSPClientPeoplePickerMRU(): SPClientPeoplePickerMRU;
		GetItems(strKey: string): Object[];
		SetItem(strSearchTerm: string, objEntity: Object): void;
		ResetCache(): void
	}

	declare class SPClientPeoplePickerProcessedUser  {
		UserContainerElementId: string;
		DisplayElementId: string;
		PresenceElementId: string;
		DeleteUserElementId: string;
		SID: string;
		DisplayName: string;
		SIPAddress: string;
		UserInfo: ISPClientPeoplePickerEntity;
		ResolvedUser: boolean;
		Suggestions: ISPClientAutoFillData[];
		ErrorDescription: string;
		ResolveText: string;
		UpdateResolvedUser(newUserInfo: ISPClientPeoplePickerEntity, strNewElementId: string): void;
		UpdateSuggestions(entity: ISPClientPeoplePickerEntity): void;
		BuildUserHTML(): string;
		UpdateUserMaxWidth(): void;
		ResolvedAsUnverifiedEmail(): string;
		BuildUserPresenceHtml(elmId: string, strSip: string, bResolved?: boolean): string;
		GetUserContainerElement(elmChild: HTMLElement): HTMLElement;
		HandleProcessedUserClick(ndClicked: HTMLElement): void;
		DeleteProcessedUser(elmToRemove: HTMLElement): void;
		HandleDeleteProcessedUserKey(e: Event): void;
		HandleResolveProcessedUserKey(e: Event): void
	}

	
}

declare module 'npm$namespace$SP' {
		declare export interface RequestInfo {
		url: string,
		method?: string,
		headers?: {
		[key: string]: string
	},
		body?: string | Uint8Array,
		binaryStringRequestBody?: boolean,
		binaryStringResponseBody?: boolean,
		timeout?: number,
		success?: (response: ResponseInfo) => void,
		error?: (
		response: ResponseInfo, error: RequestExecutorErrors, statusText: string
	) => void,
		state?: any
	}

	declare export interface ResponseInfo {
		statusCode?: number,
		statusText?: string,
		responseAvailable: boolean,
		allResponseHeaders?: string,
		headers?: {
		[key: string]: string
	},
		contentType?: string,
		body?: string | Uint8Array,
		state?: any
	}

	declare export interface IFromJson {
		fromJson(initValue: any): void,
		customFromJson(initValue: any): boolean
	}

	declare export interface IWebRequestExecutorFactory {
		createWebRequestExecutor(): Sys.Net.WebRequestExecutor
	}

		declare export class SOD  {
		execute(fileName: string, functionName: string, ...args: any[]): void;
		executeFunc(fileName: string, typeName: string, fn: () => void): void;
		executeOrDelayUntilEventNotified(func: Function, eventName: string): boolean;
		executeOrDelayUntilScriptLoaded(func: () => void, depScriptFileName: string): boolean;
		notifyScriptLoadedAndExecuteWaitingJobs(scriptFileName: string): void;
		notifyEventAndExecuteWaitingJobs(eventName: string, args?: any[]): void;
		registerSod(fileName: string, url: string): void;
		registerSodDep(fileName: string, dependentFileName: string): void;
		loadMultiple(keys: string[], fn: () => void, bSync?: boolean): void;
		delayUntilEventNotified(func: Function, eventName: string): void;
		get_prefetch(): boolean;
		set_prefetch(value: boolean): void;
		get_ribbonImagePrefetchEnabled(): boolean;
		set_ribbonImagePrefetchEnabled(value: boolean): void
	}

	declare export class HtmlBuilder  {
		constructor(): this;
		addAttribute(name: string, value: string): void;
		addCssClass(cssClassName: string): void;
		addCommunitiesCssClass(cssClassName: string): void;
		renderBeginTag(tagName: string): void;
		renderEndTag(): void;
		write(s: string): void;
		writeEncoded(s: string): void;
		toString(): string
	}

	declare export class ScriptHelpers  {
		disableWebpartSelection(context: SPClientTemplates.RenderContext): void;
		getDocumentQueryPairs(): {
		[index: string]: string
	};
		getFieldFromSchema(
		schema: SPClientTemplates.ListSchema, fieldName: string
	): SPClientTemplates.FieldSchema;
		getLayoutsPageUrl(pageName: string, webServerRelativeUrl: string): string;
		getListLevelPermissionMask(jsonItem: string): number;
		getTextAreaElementValue(textAreaElement: HTMLTextAreaElement): string;
		getUrlQueryPairs(docUrl: string): {
		[index: string]: string
	};
		getUserFieldProperty(item: ListItem, fieldName: string, propertyName: string): any;
		hasPermission(listPermissionMask: number, listPermission: ListLevelPermissionMask): boolean;
		newGuid(): SP.Guid;
		isNullOrEmptyString(str: string): boolean;
		isNullOrUndefined(obj: any): boolean;
		isNullOrUndefinedOrEmpty(str: string): boolean;
		isUndefined(obj: any): boolean;
		replaceOrAddQueryString(url: string, key: string, value: string): string;
		removeHtml(str: string): string;
		removeStyleChildren(element: HTMLElement): void;
		removeHtmlAndTrimStringWithEllipsis(str: string, maxLength: number): string;
		setTextAreaElementValue(textAreaElement: HTMLTextAreaElement, newValue: string): void;
		truncateToInt(n: number): number;
		urlCombine(path1: string, path2: string): string;
		resizeImageToSquareLength(imgElement: HTMLImageElement, squareLength: number): void
	}

	declare export class PageContextInfo  {
		get_siteServerRelativeUrl(): string;
		get_webServerRelativeUrl(): string;
		get_webAbsoluteUrl(): string;
		get_serverRequestPath(): string;
		get_siteAbsoluteUrl(): string;
		get_webTitle(): string;
		get_tenantAppVersion(): string;
		get_webLogoUrl(): string;
		get_webLanguage(): number;
		get_currentLanguage(): number;
		get_pageItemId(): number;
		get_pageListId(): string;
		get_webPermMasks(): {
		High: number,
		Low: number
	};
		get_currentCultureName(): string;
		get_currentUICultureName(): string;
		get_clientServerTimeDelta(): number;
		get_userLoginName(): string;
		get_webTemplate(): string;
		get_pagePersonalizationScope(): string
	}

	declare export class ContextPermissions  {
		has(perm: number): boolean;
		hasPermissions(high: number, low: number): boolean;
		fromJson(json: {
		High: number,
		Low: number
	}): void
	}

	declare export class RequestExecutor  {
		constructor(url: string, options?: any): this;
		get_formDigestHandlingEnabled(): boolean;
		set_formDigestHandlingEnabled(value: boolean): void;
		get_iFrameSourceUrl(): string;
		set_iFrameSourceUrl(value: string): void;
		executeAsync(requestInfo: RequestInfo): void;
		attemptLogin(
		returnUrl: string, success: (response: ResponseInfo) => void, error?: (
		response: ResponseInfo, error: RequestExecutorErrors, statusText: string
	) => void
	): void
	}

	declare export class ProxyWebRequestExecutor extends undefined$WebRequestExecutor {
		constructor(url: string, options?: any): this
	}

	declare export class ProxyWebRequestExecutorFactory extends SP$IWebRequestExecutorFactory {
		constructor(url: string, options?: any): this;
		createWebRequestExecutor(): ProxyWebRequestExecutor
	}

	declare export class ScriptUtility  {
		isNullOrEmptyString(str: string): boolean;
		isNullOrUndefined(obj: any): boolean;
		isUndefined(obj: any): boolean;
		truncateToInt(n: number): number
	}

	declare export class Guid  {
		constructor(guidText: string): this;
		get_empty(): SP.Guid;
		newGuid(): SP.Guid;
		isValid(uuid: string): boolean;
		toString(): string;
		toString(format: string): string;
		equals(uuid: SP.Guid): boolean;
		toSerialized(): string
	}

	declare export class BaseCollection<T> extends IEnumerable<T> {
		getEnumerator(): IEnumerator<T>;
		get_count(): number;
		itemAtIndex(index: number): T;
		constructor(): this
	}

	declare export class Base64EncodedByteArray  {
		constructor(): this;
		constructor(base64Str: string): this;
		get_length(): number;
		toBase64String(): string;
		append(b: any): void;
		getByteAt(index: number): any;
		setByteAt(index: number, b: any): void
	}

	declare export class ConditionalScopeBase  {
		startScope(): any;
		startIfTrue(): any;
		startIfFalse(): any;
		get_testResult(): boolean;
		fromJson(initValue: any): void;
		customFromJson(initValue: any): boolean
	}

	declare export class ClientObjectPropertyConditionalScope extends SP$ConditionalScopeBase {
		constructor(clientObject: SP.ClientObject, propertyName: string, comparisonOperator: string, valueToCompare: any): this;
		constructor(clientObject: SP.ClientObject, propertyName: string, comparisonOperator: string, valueToCompare: any, allowAllActions: boolean): this
	}

	declare export class ClientResult<T>  {
		get_value(): T;
		setValue(value: T): void;
		constructor(): this
	}

	declare export class BooleanResult  {
		get_value(): boolean;
		constructor(): this
	}

	declare export class CharResult  {
		get_value(): any;
		constructor(): this
	}

	declare export class IntResult  {
		get_value(): number;
		constructor(): this
	}

	declare export class DoubleResult  {
		get_value(): number;
		constructor(): this
	}

	declare export class StringResult  {
		get_value(): string;
		constructor(): this
	}

	declare export class DateTimeResult  {
		get_value(): Date;
		constructor(): this
	}

	declare export class GuidResult  {
		get_value(): SP.Guid;
		constructor(): this
	}

	declare export class JsonObjectResult  {
		get_value(): any;
		constructor(): this
	}

	declare export class ClientDictionaryResultHandler<T>  {
		constructor(dict: SP.ClientResult<T>): this
	}

	declare export class ClientUtility  {
		urlPathEncodeForXmlHttpRequest(url: string): string;
		getOrCreateObjectPathForConstructor(context: SP.ClientRuntimeContext, typeId: string, args: any[]): SP.ObjectPath
	}

	declare export class XElement  {
		get_name(): string;
		set_name(value: string): void;
		get_attributes(): any;
		set_attributes(value: any): void;
		get_children(): any;
		set_children(value: any): void;
		constructor(): this
	}

	declare export class ClientXElement  {
		get_element(): SP.XElement;
		set_element(value: SP.XElement): void;
		constructor(): this
	}

	declare export class ClientXDocument  {
		get_root(): SP.XElement;
		set_root(value: SP.XElement): void;
		constructor(): this
	}

	declare export class DataConvert  {
		writePropertiesToXml(
		writer: SP.XmlWriter, obj: any, propNames: string[], serializationContext: SP.SerializationContext
	): void;
		populateDictionaryFromObject(dict: any, parentNode: any): void;
		fixupTypes(context: SP.ClientRuntimeContext, dict: any): void;
		populateArray(context: SP.ClientRuntimeContext, dest: any, jsonArrayFromServer: any): void;
		fixupType(context: SP.ClientRuntimeContext, obj: any): any;
		writeDictionaryToXml(
		writer: SP.XmlWriter, dict: any, topLevelElementTagName: string, keys: any, serializationContext: SP.SerializationContext
	): void;
		writeValueToXmlElement(
		writer: SP.XmlWriter, objValue: any, serializationContext: SP.SerializationContext
	): void;
		invokeSetProperty(obj: any, propName: string, propValue: any): void;
		invokeGetProperty(obj: any, propName: string): any;
		specifyDateTimeKind(datetime: Date, kind: SP.DateTimeKind): void;
		getDateTimeKind(datetime: Date): SP.DateTimeKind;
		createUnspecifiedDateTime(
		year: number, month: number, day: number, hour: number, minute: number, second: number, milliseconds: number
	): Date;
		createUtcDateTime(milliseconds: number): Date;
		createLocalDateTime(milliseconds: number): Date
	}

	declare export class PageRequestFailedEventArgs extends Sys$EventArgs {
		get_executor(): Sys.Net.WebRequestExecutor;
		get_errorMessage(): string;
		get_isErrorPage(): boolean
	}

	declare export class PageRequestSucceededEventArgs extends Sys$EventArgs {
		get_executor(): Sys.Net.WebRequestExecutor
	}

	declare export class PageRequest  {
		get_request(): Sys.Net.WebRequest;
		get_url(): string;
		set_url(value: string): void;
		get_expectedContentType(): string;
		set_expectedContentType(value: string): void;
		post(body: string): void;
		get(): void;
		doPost(
		url: string, body: string, expectedContentType: string, succeededHandler: (sender: any, args: SP.PageRequestSucceededEventArgs) => void, failedHandler: (sender: any, args: SP.PageRequestFailedEventArgs) => void
	): void;
		doGet(
		url: string, expectedContentType: string, succeededHandler: (sender: any, args: SP.PageRequestSucceededEventArgs) => void, failedHandler: (sender: any, args: SP.PageRequestFailedEventArgs) => void
	): void;
		add_succeeded(value: (sender: any, args: SP.PageRequestSucceededEventArgs) => void): void;
		remove_succeeded(value: (sender: any, args: SP.PageRequestSucceededEventArgs) => void): void;
		add_failed(value: (sender: any, args: SP.PageRequestFailedEventArgs) => void): void;
		remove_failed(value: (sender: any, args: SP.PageRequestFailedEventArgs) => void): void;
		constructor(): this
	}

	declare export class ResResources  {
		getString(resourceId: string, args: any[]): string
	}

	declare export class XmlWriter  {
		create(sb: Sys.StringBuilder): SP.XmlWriter;
		writeStartElement(tagName: string): void;
		writeElementString(tagName: string, value: string): void;
		writeEndElement(): void;
		writeAttributeString(localName: string, value: string): void;
		writeStartAttribute(localName: string): void;
		writeEndAttribute(): void;
		writeString(value: string): void;
		writeRaw(xml: string): void;
		close(): void
	}

	declare export class ClientConstants  {
		AddExpandoFieldTypeSuffix: string;
		Actions: string;
		ApplicationName: string;
		Body: string;
		CatchScope: string;
		ChildItemQuery: string;
		ChildItems: string;
		ConditionalScope: string;
		Constructor: string;
		Context: string;
		ErrorInfo: string;
		ErrorMessage: string;
		ErrorStackTrace: string;
		ErrorCode: string;
		ErrorTypeName: string;
		ErrorValue: string;
		ErrorDetails: string;
		ErrorTraceCorrelationId: string;
		ExceptionHandlingScope: string;
		ExceptionHandlingScopeSimple: string;
		QueryableExpression: string;
		FinallyScope: string;
		HasException: string;
		Id: string;
		Identity: string;
		IfFalseScope: string;
		IfTrueScope: string;
		IsNull: string;
		LibraryVersion: string;
		TraceCorrelationId: string;
		Count: string;
		Method: string;
		Methods: string;
		Name: string;
		Object: string;
		ObjectPathId: string;
		ObjectPath: string;
		ObjectPaths: string;
		ObjectType: string;
		ObjectIdentity: string;
		ObjectIdentityQuery: string;
		ObjectVersion: string;
		Parameter: string;
		Parameters: string;
		ParentId: string;
		Processed: string;
		Property: string;
		Properties: string;
		Query: string;
		QueryResult: string;
		Request: string;
		Results: string;
		ScalarProperty: string;
		SchemaVersion: string;
		ScopeId: string;
		SelectAll: string;
		SelectAllProperties: string;
		SetProperty: string;
		SetStaticProperty: string;
		StaticMethod: string;
		StaticProperty: string;
		SuffixChar: string;
		SuffixByte: string;
		SuffixInt16: string;
		SuffixUInt16: string;
		SuffixInt32: string;
		SuffixUInt32: string;
		SuffixInt64: string;
		SuffixUInt64: string;
		SuffixSingle: string;
		SuffixDouble: string;
		SuffixDecimal: string;
		SuffixTimeSpan: string;
		SuffixArray: string;
		Test: string;
		TryScope: string;
		Type: string;
		TypeId: string;
		Update: string;
		Version: string;
		XmlElementName: string;
		XmlElementAttributes: string;
		XmlElementChildren: string;
		XmlNamespace: string;
		FieldValuesMethodName: string;
		RequestTokenHeader: string;
		FormDigestHeader: string;
		useWebLanguageHeader: string;
		useWebLanguageHeaderValue: string;
		ClientTagHeader: string;
		TraceCorrelationIdRequestHeader: string;
		TraceCorrelationIdResponseHeader: string;
		greaterThan: string;
		lessThan: string;
		equal: string;
		notEqual: string;
		greaterThanOrEqual: string;
		lessThanOrEqual: string;
		andAlso: string;
		orElse: string;
		not: string;
		expressionParameter: string;
		expressionProperty: string;
		expressionStaticProperty: string;
		expressionMethod: string;
		expressionStaticMethod: string;
		expressionConstant: string;
		expressionConvert: string;
		expressionTypeIs: string;
		ofType: string;
		take: string;
		where: string;
		orderBy: string;
		orderByDescending: string;
		thenBy: string;
		thenByDescending: string;
		queryableObject: string;
		ServiceFileName: string;
		ServiceMethodName: string;
		fluidApplicationInitParamUrl: string;
		fluidApplicationInitParamViaUrl: string;
		fluidApplicationInitParamRequestToken: string;
		fluidApplicationInitParamFormDigestTimeoutSeconds: string;
		fluidApplicationInitParamFormDigest: string
	}

	declare export class ClientSchemaVersions  {
		version14: string;
		version15: string;
		currentVersion: string
	}

	declare export class ClientErrorCodes  {
		genericError: number;
		accessDenied: number;
		docAlreadyExists: number;
		versionConflict: number;
		listItemDeleted: number;
		invalidFieldValue: number;
		notSupported: number;
		redirect: number;
		notSupportedRequestVersion: number;
		fieldValueFailedValidation: number;
		itemValueFailedValidation: number
	}

	declare export class ClientAction  {
		get_id(): number;
		get_path(): SP.ObjectPath;
		get_name(): string
	}

	declare export class ClientActionSetProperty extends SP$ClientAction {
		constructor(obj: SP.ClientObject, propName: string, propValue: any): this
	}

	declare export class ClientActionSetStaticProperty extends SP$ClientAction {
		constructor(context: SP.ClientRuntimeContext, typeId: string, propName: string, propValue: any): this
	}

	declare export class ClientActionInvokeMethod extends SP$ClientAction {
		constructor(obj: SP.ClientObject, methodName: string, parameters: any[]): this
	}

	declare export class ClientActionInvokeStaticMethod extends SP$ClientAction {
		constructor(context: SP.ClientRuntimeContext, typeId: string, methodName: string, parameters: any[]): this
	}

	declare export class ClientObject  {
		get_context(): SP.ClientRuntimeContext;
		get_path(): SP.ObjectPath;
		get_objectVersion(): string;
		set_objectVersion(value: string): void;
		fromJson(initValue: any): void;
		customFromJson(initValue: any): boolean;
		retrieve(): void;
		refreshLoad(): void;
		retrieve(propertyNames: string[]): void;
		isPropertyAvailable(propertyName: string): boolean;
		isObjectPropertyInstantiated(propertyName: string): boolean;
		get_serverObjectIsNull(): boolean;
		get_typedObject(): SP.ClientObject
	}

	declare export class ClientObjectData  {
		get_properties(): any;
		get_clientObjectProperties(): any;
		get_methodReturnObjects(): any;
		constructor(): this
	}

	declare export class ClientObjectCollection<T> extends SP$ClientObject, IEnumerable<T> {
		get_areItemsAvailable(): boolean;
		retrieveItems(): SP.ClientObjectPrototype;
		getEnumerator(): IEnumerator<T>;
		get_count(): number;
		get_data(): T[];
		addChild(obj: T): void;
		getItemAtIndex(index: number): T;
		fromJson(obj: any): void
	}

	declare export class ClientObjectList<T> extends SP$ClientObjectCollection<T> {
		constructor(context: SP.ClientRuntimeContext, objectPath: SP.ObjectPath, childItemType: any): this;
		fromJson(initValue: any): void;
		customFromJson(initValue: any): boolean
	}

	declare export class ClientObjectPrototype  {
		retrieve(): void;
		retrieve(propertyNames: string[]): void;
		retrieveObject(propertyName: string): SP.ClientObjectPrototype;
		retrieveCollectionObject(propertyName: string): SP.ClientObjectCollectionPrototype
	}

	declare export class ClientObjectCollectionPrototype extends SP$ClientObjectPrototype {
		retrieveItems(): SP.ClientObjectPrototype
	}

	declare export class WebRequestEventArgs extends Sys$EventArgs {
		constructor(webRequest: Sys.Net.WebRequest): this;
		get_webRequest(): Sys.Net.WebRequest
	}

	declare export class ClientRequest  {
		get_nextSequenceId(): number;
		get_webRequest(): Sys.Net.WebRequest;
		add_requestSucceeded(value: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
		remove_requestSucceeded(value: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
		add_requestFailed(value: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
		remove_requestFailed(value: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
		get_navigateWhenServerRedirect(): boolean;
		set_navigateWhenServerRedirect(value: boolean): void
	}

	declare export class ClientRequestEventArgs extends Sys$EventArgs {
		get_request(): SP.ClientRequest
	}

	declare export class ClientRequestFailedEventArgs extends SP$ClientRequestEventArgs {
		constructor(request: SP.ClientRequest, message: string, stackTrace: string, errorCode: number, errorValue: string, errorTypeName: string, errorDetails: any): this;
		constructor(request: SP.ClientRequest, message: string, stackTrace: string, errorCode: number, errorValue: string, errorTypeName: string, errorDetails: any, errorTraceCorrelationId: string): this;
		get_message(): string;
		get_stackTrace(): string;
		get_errorCode(): number;
		get_errorValue(): string;
		get_errorTypeName(): string;
		get_errorDetails(): any;
		get_errorTraceCorrelationId(): string
	}

	declare export class ClientRequestSucceededEventArgs extends SP$ClientRequestEventArgs {
		
	}

	declare export class ClientRuntimeContext extends Sys$IDisposable {
		constructor(serverRelativeUrlOrFullUrl: string): this;
		get_url(): string;
		get_viaUrl(): string;
		set_viaUrl(value: string): void;
		get_formDigestHandlingEnabled(): boolean;
		set_formDigestHandlingEnabled(value: boolean): void;
		get_applicationName(): string;
		set_applicationName(value: string): void;
		get_clientTag(): string;
		set_clientTag(value: string): void;
		get_webRequestExecutorFactory(): SP.IWebRequestExecutorFactory;
		set_webRequestExecutorFactory(value: SP.IWebRequestExecutorFactory): void;
		get_pendingRequest(): SP.ClientRequest;
		get_hasPendingRequest(): boolean;
		add_executingWebRequest(value: (sender: any, args: SP.WebRequestEventArgs) => void): void;
		remove_executingWebRequest(value: (sender: any, args: SP.WebRequestEventArgs) => void): void;
		add_requestSucceeded(value: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
		remove_requestSucceeded(value: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void): void;
		add_requestFailed(value: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
		remove_requestFailed(value: (sender: any, args: SP.ClientRequestFailedEventArgs) => void): void;
		add_beginningRequest(value: (sender: any, args: SP.ClientRequestEventArgs) => void): void;
		remove_beginningRequest(value: (sender: any, args: SP.ClientRequestEventArgs) => void): void;
		get_requestTimeout(): number;
		set_requestTimeout(value: number): void;
		executeQueryAsync(
		succeededCallback: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void, failedCallback: (sender: any, args: SP.ClientRequestFailedEventArgs) => void
	): void;
		executeQueryAsync(
		succeededCallback: (sender: any, args: SP.ClientRequestSucceededEventArgs) => void
	): void;
		executeQueryAsync(): void;
		get_staticObjects(): any;
		castTo(obj: SP.ClientObject, type: any): SP.ClientObject;
		addQuery(query: SP.ClientAction): void;
		addQueryIdAndResultObject(id: number, obj: any): void;
		parseObjectFromJsonString(json: string): any;
		parseObjectFromJsonString(json: string, skipTypeFixup: boolean): any;
		load(clientObject: SP.ClientObject): void;
		loadQuery<T>(clientObjectCollection: SP.ClientObjectCollection<T>, exp: string): any;
		load(clientObject: SP.ClientObject, ...exps: string[]): void;
		loadQuery<T>(clientObjectCollection: SP.ClientObjectCollection<T>): any;
		get_serverSchemaVersion(): string;
		get_serverLibraryVersion(): string;
		get_traceCorrelationId(): string;
		set_traceCorrelationId(value: string): void;
		dispose(): void
	}

	declare export class SimpleDataTable  {
		get_rows(): any[];
		constructor(): this
	}

	declare export class ClientValueObject  {
		fromJson(obj: any): void;
		customFromJson(obj: any): boolean;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		customWriteToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): boolean;
		get_typeId(): string
	}

	declare export class ClientValueObjectCollection<T> extends SP$ClientValueObject, IEnumerable<T> {
		get_count(): number;
		getEnumerator(): IEnumerator<T>;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void
	}

	declare export class ExceptionHandlingScope  {
		constructor(context: SP.ClientRuntimeContext): this;
		startScope(): any;
		startTry(): any;
		startCatch(): any;
		startFinally(): any;
		get_processed(): boolean;
		get_hasException(): boolean;
		get_errorMessage(): string;
		get_serverStackTrace(): string;
		get_serverErrorCode(): number;
		get_serverErrorValue(): string;
		get_serverErrorTypeName(): string;
		get_serverErrorDetails(): any
	}

	declare export class ObjectIdentityQuery extends SP$ClientAction {
		constructor(objectPath: SP.ObjectPath): this
	}

	declare export class ObjectPath  {
		setPendingReplace(): void
	}

	declare export class ObjectPathProperty extends SP$ObjectPath {
		constructor(context: SP.ClientRuntimeContext, parent: SP.ObjectPath, propertyName: string): this
	}

	declare export class ObjectPathStaticProperty extends SP$ObjectPath {
		constructor(context: SP.ClientRuntimeContext, typeId: string, propertyName: string): this
	}

	declare export class ObjectPathMethod extends SP$ObjectPath {
		constructor(context: SP.ClientRuntimeContext, parent: SP.ObjectPath, methodName: string, parameters: any[]): this
	}

	declare export class ObjectPathStaticMethod extends SP$ObjectPath {
		constructor(context: SP.ClientRuntimeContext, typeId: string, methodName: string, parameters: any[]): this
	}

	declare export class ObjectPathConstructor extends SP$ObjectPath {
		constructor(context: SP.ClientRuntimeContext, typeId: string, parameters: any[]): this
	}

	declare export class SerializationContext  {
		addClientObject(obj: SP.ClientObject): void;
		addObjectPath(path: SP.ObjectPath): void
	}

	declare export class ResourceStrings  {
		argumentExceptionMessage: string;
		argumentNullExceptionMessage: string;
		cC_AppIconAlt: string;
		cC_AppWebUrlNotSet: string;
		cC_ArrowImageAlt: string;
		cC_BackToSite: string;
		cC_ErrorGettingThemeInfo: string;
		cC_HelpLinkToolTip: string;
		cC_HostSiteUrlNotSet: string;
		cC_InvalidArgument: string;
		cC_InvalidJSON: string;
		cC_InvalidOperation: string;
		cC_PlaceHolderElementNotFound: string;
		cC_RequiredScriptNotLoaded: string;
		cC_SendFeedback: string;
		cC_SettingsLinkToolTip: string;
		cC_TimeoutGettingThemeInfo: string;
		cC_Welcome: string;
		cannotFindContextWebServerRelativeUrl: string;
		collectionHasNotBeenInitialized: string;
		collectionModified: string;
		invalidUsageOfConditionalScope: string;
		invalidUsageOfConditionalScopeNowAllowedAction: string;
		invalidUsageOfExceptionHandlingScope: string;
		namedPropertyHasNotBeenInitialized: string;
		namedServerObjectIsNull: string;
		noObjectPathAssociatedWithObject: string;
		notSameClientContext: string;
		notSupportedQueryExpressionWithExpressionDetail: string;
		objectNameIdentity: string;
		objectNameMethod: string;
		objectNameProperty: string;
		objectNameType: string;
		propertyHasNotBeenInitialized: string;
		rE_BrowserBinaryDataNotSupported: string;
		rE_BrowserNotSupported: string;
		rE_CannotAccessSite: string;
		rE_CannotAccessSiteCancelled: string;
		rE_CannotAccessSiteOpenWindowFailed: string;
		rE_DismissOpenWindowMessageLinkText: string;
		rE_DomainDoesNotMatch: string;
		rE_FixitHelpMessage: string;
		rE_InvalidArgumentOrField: string;
		rE_InvalidOperation: string;
		rE_NoTrustedOrigins: string;
		rE_OpenWindowButtonText: string;
		rE_OpenWindowMessage: string;
		rE_RequestAbortedOrTimedout: string;
		rE_RequestUnexpectedResponse: string;
		rE_RequestUnexpectedResponseWithContentTypeAndStatus: string;
		requestAbortedOrTimedOut: string;
		requestEmptyQueryName: string;
		requestHasBeenExecuted: string;
		requestUnexpectedResponse: string;
		requestUnexpectedResponseWithContentTypeAndStatus: string;
		requestUnexpectedResponseWithStatus: string;
		requestUnknownResponse: string;
		serverObjectIsNull: string;
		unknownError: string;
		unknownResponseData: string
	}

	declare export class RuntimeRes  {
		cC_PlaceHolderElementNotFound: string;
		rE_CannotAccessSiteOpenWindowFailed: string;
		noObjectPathAssociatedWithObject: string;
		cC_TimeoutGettingThemeInfo: string;
		unknownResponseData: string;
		requestUnexpectedResponseWithStatus: string;
		objectNameProperty: string;
		requestUnknownResponse: string;
		rE_RequestUnexpectedResponseWithContentTypeAndStatus: string;
		rE_BrowserNotSupported: string;
		argumentExceptionMessage: string;
		namedServerObjectIsNull: string;
		objectNameType: string;
		requestUnexpectedResponseWithContentTypeAndStatus: string;
		cC_InvalidJSON: string;
		invalidUsageOfExceptionHandlingScope: string;
		serverObjectIsNull: string;
		cC_AppWebUrlNotSet: string;
		rE_OpenWindowMessage: string;
		argumentNullExceptionMessage: string;
		cC_HelpLinkToolTip: string;
		propertyHasNotBeenInitialized: string;
		rE_RequestAbortedOrTimedout: string;
		invalidUsageOfConditionalScope: string;
		cC_ErrorGettingThemeInfo: string;
		rE_DismissOpenWindowMessageLinkText: string;
		rE_CannotAccessSiteCancelled: string;
		objectNameIdentity: string;
		cC_HostSiteUrlNotSet: string;
		rE_FixitHelpMessage: string;
		notSupportedQueryExpressionWithExpressionDetail: string;
		rE_RequestUnexpectedResponse: string;
		rE_DomainDoesNotMatch: string;
		cC_BackToSite: string;
		rE_NoTrustedOrigins: string;
		rE_InvalidOperation: string;
		collectionModified: string;
		cC_Welcome: string;
		cC_AppIconAlt: string;
		cC_SendFeedback: string;
		cC_ArrowImageAlt: string;
		cC_InvalidOperation: string;
		requestAbortedOrTimedOut: string;
		invalidUsageOfConditionalScopeNowAllowedAction: string;
		cannotFindContextWebServerRelativeUrl: string;
		rE_OpenWindowButtonText: string;
		unknownError: string;
		cC_InvalidArgument: string;
		rE_InvalidArgumentOrField: string;
		cC_SettingsLinkToolTip: string;
		requestEmptyQueryName: string;
		cC_RequiredScriptNotLoaded: string;
		rE_CannotAccessSite: string;
		notSameClientContext: string;
		requestUnexpectedResponse: string;
		rE_BrowserBinaryDataNotSupported: string;
		collectionHasNotBeenInitialized: string;
		namedPropertyHasNotBeenInitialized: string;
		requestHasBeenExecuted: string;
		objectNameMethod: string
	}

	declare export class ParseJSONUtil  {
		parseObjectFromJsonString(json: string): any;
		validateJson(text: string): boolean
	}

	declare export class OfficeVersion  {
		majorBuildVersion: number;
		previousMajorBuildVersion: number;
		majorVersion: string;
		previousVersion: string;
		majorVersionDotZero: string;
		previousVersionDotZero: string;
		assemblyVersion: string;
		wssMajorVersion: string
	}

	declare export class ClientContext extends SP$ClientRuntimeContext {
		constructor(serverRelativeUrlOrFullUrl: string): this;
		get_current(): SP.ClientContext;
		constructor(): this;
		get_web(): SP.Web;
		get_site(): SP.Site;
		get_serverVersion(): string
	}

	declare export class ULS  {
		get_enabled(): boolean;
		set_enabled(value: boolean): void;
		log(debugMessage: string): void;
		increaseIndent(): void;
		decreaseIndent(): void;
		traceApiEnter(functionName: string, args: any[]): void;
		traceApiEnter(functionName: string): void;
		traceApiLeave(): void
	}

	declare export class AccessRequests  {
		changeRequestStatus(
		context: SP.ClientRuntimeContext, itemId: number, newStatus: number, convStr: string, permType: string, permissionLevel: number
	): void;
		changeRequestStatusBulk(
		context: SP.ClientRuntimeContext, requestIds: number[], newStatus: number
	): void
	}

	declare export class AlternateUrl extends SP$ClientObject {
		get_uri(): string;
		get_urlZone(): SP.UrlZone
	}

	declare export class App extends SP$ClientObject {
		get_assetId(): string;
		get_contentMarket(): string;
		get_versionString(): string
	}

	declare export class AppCatalog  {
		getAppInstances(
		context: SP.ClientRuntimeContext, web: SP.Web
	): SP.ClientObjectList<SP.AppInstance>;
		getDeveloperSiteAppInstancesByIds(
		context: SP.ClientRuntimeContext, site: SP.Site, appInstanceIds: SP.Guid[]
	): SP.ClientObjectList<SP.AppInstance>;
		isAppSideloadingEnabled(context: SP.ClientRuntimeContext): SP.BooleanResult
	}

	declare export class AppContextSite extends SP$ClientObject {
		constructor(context: SP.ClientRuntimeContext, siteUrl: string): this;
		get_site(): SP.Site;
		get_web(): SP.Web;
		newObject(context: SP.ClientRuntimeContext, siteUrl: string): SP.AppContextSite
	}

	declare export class AppInstance extends SP$ClientObject {
		get_appPrincipalId(): string;
		get_appWebFullUrl(): string;
		get_id(): SP.Guid;
		get_inError(): boolean;
		get_startPage(): string;
		get_remoteAppUrl(): string;
		get_settingsPageUrl(): string;
		get_siteId(): SP.Guid;
		get_status(): SP.AppInstanceStatus;
		get_title(): string;
		get_webId(): SP.Guid;
		getErrorDetails(): SP.ClientObjectList<SP.AppInstanceErrorDetails>;
		uninstall(): SP.GuidResult;
		upgrade(appPackageStream: SP.Base64EncodedByteArray): void;
		cancelAllJobs(): SP.BooleanResult;
		install(): SP.GuidResult;
		getPreviousAppVersion(): SP.App;
		retryAllJobs(): void
	}

	declare export class AppInstanceErrorDetails extends SP$ClientObject {
		get_correlationId(): SP.Guid;
		set_correlationId(value: SP.Guid): void;
		get_errorDetail(): string;
		get_errorType(): SP.AppInstanceErrorType;
		set_errorType(value: SP.AppInstanceErrorType): void;
		get_errorTypeName(): string;
		get_exceptionMessage(): string;
		get_source(): SP.AppInstanceErrorSource;
		set_source(value: SP.AppInstanceErrorSource): void;
		get_sourceName(): string
	}

	declare export class AppLicense extends SP$ClientValueObject {
		get_rawXMLLicenseToken(): string;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class AppLicenseCollection extends SP$ClientValueObjectCollection<AppLicense> {
		add(item: SP.AppLicense): void;
		get_item(index: number): SP.AppLicense;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class Attachment extends SP$ClientObject {
		get_fileName(): string;
		get_serverRelativeUrl(): string;
		deleteObject(): void
	}

	declare export class AttachmentCollection extends SP$ClientObjectCollection<Attachment> {
		itemAt(index: number): SP.Attachment;
		get_item(index: number): SP.Attachment;
		getByFileName(fileName: string): SP.Attachment
	}

	declare export class AttachmentCreationInformation extends SP$ClientValueObject {
		get_contentStream(): SP.Base64EncodedByteArray;
		set_contentStream(value: SP.Base64EncodedByteArray): void;
		get_fileName(): string;
		set_fileName(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class BasePermissions extends SP$ClientValueObject {
		set(perm: SP.PermissionKind): void;
		clear(perm: SP.PermissionKind): void;
		clearAll(): void;
		has(perm: SP.PermissionKind): boolean;
		equals(perm: SP.BasePermissions): boolean;
		hasPermissions(high: number, low: number): boolean;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class CamlQuery extends SP$ClientValueObject {
		constructor(): this;
		createAllItemsQuery(): SP.CamlQuery;
		createAllFoldersQuery(): SP.CamlQuery;
		get_datesInUtc(): boolean;
		set_datesInUtc(value: boolean): void;
		get_folderServerRelativeUrl(): string;
		set_folderServerRelativeUrl(value: string): void;
		get_listItemCollectionPosition(): SP.ListItemCollectionPosition;
		set_listItemCollectionPosition(value: SP.ListItemCollectionPosition): void;
		get_viewXml(): string;
		set_viewXml(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void
	}

	declare export class Change extends SP$ClientObject {
		get_changeToken(): SP.ChangeToken;
		get_changeType(): SP.ChangeType;
		get_siteId(): SP.Guid;
		get_time(): Date
	}

	declare export class ChangeAlert extends SP$Change {
		get_alertId(): SP.Guid;
		get_webId(): SP.Guid
	}

	declare export class ChangeCollection extends SP$ClientObjectCollection<Change> {
		itemAt(index: number): SP.Change;
		get_item(index: number): SP.Change
	}

	declare export class ChangeContentType extends SP$Change {
		get_contentTypeId(): SP.ContentTypeId;
		get_webId(): SP.Guid
	}

	declare export class ChangeField extends SP$Change {
		get_fieldId(): SP.Guid;
		get_webId(): SP.Guid
	}

	declare export class ChangeFile extends SP$Change {
		get_uniqueId(): SP.Guid;
		get_webId(): SP.Guid
	}

	declare export class ChangeFolder extends SP$Change {
		get_uniqueId(): SP.Guid;
		get_webId(): SP.Guid
	}

	declare export class ChangeGroup extends SP$Change {
		get_groupId(): number
	}

	declare export class ChangeItem extends SP$Change {
		get_itemId(): number;
		get_listId(): SP.Guid;
		get_webId(): SP.Guid
	}

	declare export class ChangeList extends SP$Change {
		get_listId(): SP.Guid;
		get_webId(): SP.Guid
	}

	declare export class ChangeLogItemQuery extends SP$ClientValueObject {
		get_changeToken(): string;
		set_changeToken(value: string): void;
		get_contains(): string;
		set_contains(value: string): void;
		get_query(): string;
		set_query(value: string): void;
		get_queryOptions(): string;
		set_queryOptions(value: string): void;
		get_rowLimit(): string;
		set_rowLimit(value: string): void;
		get_viewFields(): string;
		set_viewFields(value: string): void;
		get_viewName(): string;
		set_viewName(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ChangeQuery extends SP$ClientValueObject {
		constructor(): this;
		constructor(allChangeObjectTypes: boolean, allChangeTypes: boolean): this;
		get_add(): boolean;
		set_add(value: boolean): void;
		get_alert(): boolean;
		set_alert(value: boolean): void;
		get_changeTokenEnd(): SP.ChangeToken;
		set_changeTokenEnd(value: SP.ChangeToken): void;
		get_changeTokenStart(): SP.ChangeToken;
		set_changeTokenStart(value: SP.ChangeToken): void;
		get_contentType(): boolean;
		set_contentType(value: boolean): void;
		get_deleteObject(): boolean;
		set_deleteObject(value: boolean): void;
		get_field(): boolean;
		set_field(value: boolean): void;
		get_file(): boolean;
		set_file(value: boolean): void;
		get_folder(): boolean;
		set_folder(value: boolean): void;
		get_group(): boolean;
		set_group(value: boolean): void;
		get_groupMembershipAdd(): boolean;
		set_groupMembershipAdd(value: boolean): void;
		get_groupMembershipDelete(): boolean;
		set_groupMembershipDelete(value: boolean): void;
		get_item(): boolean;
		set_item(value: boolean): void;
		get_list(): boolean;
		set_list(value: boolean): void;
		get_move(): boolean;
		set_move(value: boolean): void;
		get_navigation(): boolean;
		set_navigation(value: boolean): void;
		get_rename(): boolean;
		set_rename(value: boolean): void;
		get_restore(): boolean;
		set_restore(value: boolean): void;
		get_roleAssignmentAdd(): boolean;
		set_roleAssignmentAdd(value: boolean): void;
		get_roleAssignmentDelete(): boolean;
		set_roleAssignmentDelete(value: boolean): void;
		get_roleDefinitionAdd(): boolean;
		set_roleDefinitionAdd(value: boolean): void;
		get_roleDefinitionDelete(): boolean;
		set_roleDefinitionDelete(value: boolean): void;
		get_roleDefinitionUpdate(): boolean;
		set_roleDefinitionUpdate(value: boolean): void;
		get_securityPolicy(): boolean;
		set_securityPolicy(value: boolean): void;
		get_site(): boolean;
		set_site(value: boolean): void;
		get_systemUpdate(): boolean;
		set_systemUpdate(value: boolean): void;
		get_update(): boolean;
		set_update(value: boolean): void;
		get_user(): boolean;
		set_user(value: boolean): void;
		get_view(): boolean;
		set_view(value: boolean): void;
		get_web(): boolean;
		set_web(value: boolean): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void
	}

	declare export class ChangeSite extends SP$Change {
		
	}

	declare export class ChangeToken extends SP$ClientValueObject {
		get_stringValue(): string;
		set_stringValue(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ChangeUser extends SP$Change {
		get_activate(): boolean;
		get_userId(): number
	}

	declare export class ChangeView extends SP$Change {
		get_viewId(): SP.Guid;
		get_listId(): SP.Guid;
		get_webId(): SP.Guid
	}

	declare export class ChangeWeb extends SP$Change {
		get_webId(): SP.Guid
	}

	declare export class CompatibilityRange extends SP$ClientObject {
		
	}

	declare export class ContentType extends SP$ClientObject {
		get_description(): string;
		set_description(value: string): void;
		get_displayFormTemplateName(): string;
		set_displayFormTemplateName(value: string): void;
		get_displayFormUrl(): string;
		set_displayFormUrl(value: string): void;
		get_documentTemplate(): string;
		set_documentTemplate(value: string): void;
		get_documentTemplateUrl(): string;
		get_editFormTemplateName(): string;
		set_editFormTemplateName(value: string): void;
		get_editFormUrl(): string;
		set_editFormUrl(value: string): void;
		get_fieldLinks(): SP.FieldLinkCollection;
		get_fields(): SP.FieldCollection;
		get_group(): string;
		set_group(value: string): void;
		get_hidden(): boolean;
		set_hidden(value: boolean): void;
		get_id(): SP.ContentTypeId;
		get_jsLink(): string;
		set_jsLink(value: string): void;
		get_name(): string;
		set_name(value: string): void;
		get_newFormTemplateName(): string;
		set_newFormTemplateName(value: string): void;
		get_newFormUrl(): string;
		set_newFormUrl(value: string): void;
		get_parent(): SP.ContentType;
		get_readOnly(): boolean;
		set_readOnly(value: boolean): void;
		get_schemaXml(): string;
		get_schemaXmlWithResourceTokens(): string;
		set_schemaXmlWithResourceTokens(value: string): void;
		get_scope(): string;
		get_sealed(): boolean;
		set_sealed(value: boolean): void;
		get_stringId(): string;
		get_workflowAssociations(): SP.Workflow.WorkflowAssociationCollection;
		update(updateChildren: boolean): void;
		deleteObject(): void
	}

	declare export class ContentTypeCollection extends SP$ClientObjectCollection<ContentType> {
		itemAt(index: number): SP.ContentType;
		get_item(index: number): SP.ContentType;
		getById(contentTypeId: string): SP.ContentType;
		addExistingContentType(contentType: SP.ContentType): SP.ContentType;
		add(parameters: SP.ContentTypeCreationInformation): SP.ContentType
	}

	declare export class ContentTypeCreationInformation extends SP$ClientValueObject {
		get_description(): string;
		set_description(value: string): void;
		get_group(): string;
		set_group(value: string): void;
		get_name(): string;
		set_name(value: string): void;
		get_parentContentType(): SP.ContentType;
		set_parentContentType(value: SP.ContentType): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ContentTypeId extends SP$ClientValueObject {
		toString(): string;
		get_stringValue(): string;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class EventReceiverDefinition extends SP$ClientObject {
		get_receiverAssembly(): string;
		get_receiverClass(): string;
		get_receiverId(): SP.Guid;
		get_receiverName(): string;
		get_sequenceNumber(): number;
		get_synchronization(): SP.EventReceiverSynchronization;
		get_eventType(): SP.EventReceiverType;
		get_receiverUrl(): string;
		update(): void;
		deleteObject(): void
	}

	declare export class EventReceiverDefinitionCollection extends SP$ClientObjectCollection<EventReceiverDefinition> {
		itemAt(index: number): SP.EventReceiverDefinition;
		get_item(index: number): SP.EventReceiverDefinition;
		getById(eventReceiverId: SP.Guid): SP.EventReceiverDefinition;
		add(
		eventReceiverCreationInformation: SP.EventReceiverDefinitionCreationInformation
	): SP.EventReceiverDefinition
	}

	declare export class EventReceiverDefinitionCreationInformation extends SP$ClientValueObject {
		get_receiverAssembly(): string;
		set_receiverAssembly(value: string): void;
		get_receiverClass(): string;
		set_receiverClass(value: string): void;
		get_receiverName(): string;
		set_receiverName(value: string): void;
		get_sequenceNumber(): number;
		set_sequenceNumber(value: number): void;
		get_synchronization(): SP.EventReceiverSynchronization;
		set_synchronization(value: SP.EventReceiverSynchronization): void;
		get_eventType(): SP.EventReceiverType;
		set_eventType(value: SP.EventReceiverType): void;
		get_receiverUrl(): string;
		set_receiverUrl(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class Feature extends SP$ClientObject {
		get_definitionId(): SP.Guid
	}

	declare export class FeatureCollection extends SP$ClientObjectCollection<Feature> {
		itemAt(index: number): SP.Feature;
		get_item(index: number): SP.Feature;
		getById(featureId: SP.Guid): SP.Feature;
		add(
		featureId: SP.Guid, force: boolean, featdefScope: SP.FeatureDefinitionScope
	): SP.Feature;
		remove(featureId: SP.Guid, force: boolean): void
	}

	declare export class Field extends SP$ClientObject {
		get_canBeDeleted(): boolean;
		get_defaultValue(): string;
		set_defaultValue(value: string): void;
		get_description(): string;
		set_description(value: string): void;
		get_direction(): string;
		set_direction(value: string): void;
		get_enforceUniqueValues(): boolean;
		set_enforceUniqueValues(value: boolean): void;
		get_entityPropertyName(): string;
		get_filterable(): boolean;
		get_fromBaseType(): boolean;
		get_group(): string;
		set_group(value: string): void;
		get_hidden(): boolean;
		set_hidden(value: boolean): void;
		get_id(): SP.Guid;
		get_indexed(): boolean;
		set_indexed(value: boolean): void;
		get_internalName(): string;
		get_jsLink(): string;
		set_jsLink(value: string): void;
		get_readOnlyField(): boolean;
		set_readOnlyField(value: boolean): void;
		get_required(): boolean;
		set_required(value: boolean): void;
		get_schemaXml(): string;
		set_schemaXml(value: string): void;
		get_schemaXmlWithResourceTokens(): string;
		get_scope(): string;
		get_sealed(): boolean;
		get_sortable(): boolean;
		get_staticName(): string;
		set_staticName(value: string): void;
		get_title(): string;
		set_title(value: string): void;
		get_fieldTypeKind(): SP.FieldType;
		set_fieldTypeKind(value: SP.FieldType): void;
		get_typeAsString(): string;
		set_typeAsString(value: string): void;
		get_typeDisplayName(): string;
		get_typeShortDescription(): string;
		get_validationFormula(): string;
		set_validationFormula(value: string): void;
		get_validationMessage(): string;
		set_validationMessage(value: string): void;
		validateSetValue(item: SP.ListItem, value: string): void;
		updateAndPushChanges(pushChangesToLists: boolean): void;
		update(): void;
		deleteObject(): void;
		setShowInDisplayForm(value: boolean): void;
		setShowInEditForm(value: boolean): void;
		setShowInNewForm(value: boolean): void
	}

	declare export class FieldCalculated extends SP$Field {
		get_dateFormat(): SP.DateTimeFieldFormatType;
		set_dateFormat(value: SP.DateTimeFieldFormatType): void;
		get_formula(): string;
		set_formula(value: string): void;
		get_outputType(): SP.FieldType;
		set_outputType(value: SP.FieldType): void
	}

	declare export class FieldCalculatedErrorValue extends SP$ClientValueObject {
		get_errorMessage(): string;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class FieldMultiChoice extends SP$Field {
		get_fillInChoice(): boolean;
		set_fillInChoice(value: boolean): void;
		get_mappings(): string;
		get_choices(): string[];
		set_choices(value: string[]): void
	}

	declare export class FieldChoice extends SP$FieldMultiChoice {
		get_editFormat(): SP.ChoiceFormatType;
		set_editFormat(value: SP.ChoiceFormatType): void
	}

	declare export class FieldCollection extends SP$ClientObjectCollection<Field> {
		itemAt(index: number): SP.Field;
		get_item(index: number): SP.Field;
		get_schemaXml(): string;
		getByTitle(title: string): SP.Field;
		getById(id: SP.Guid): SP.Field;
		add(field: SP.Field): SP.Field;
		addDependentLookup(
		displayName: string, primaryLookupField: SP.Field, lookupField: string
	): SP.Field;
		addFieldAsXml(
		schemaXml: string, addToDefaultView: boolean, options: SP.AddFieldOptions
	): SP.Field;
		getByInternalNameOrTitle(strName: string): SP.Field
	}

	declare export class FieldComputed extends SP$Field {
		get_enableLookup(): boolean;
		set_enableLookup(value: boolean): void
	}

	declare export class FieldNumber extends SP$Field {
		get_maximumValue(): number;
		set_maximumValue(value: number): void;
		get_minimumValue(): number;
		set_minimumValue(value: number): void
	}

	declare export class FieldCurrency extends SP$FieldNumber {
		get_currencyLocaleId(): number;
		set_currencyLocaleId(value: number): void
	}

	declare export class FieldDateTime extends SP$Field {
		get_dateTimeCalendarType(): SP.CalendarType;
		set_dateTimeCalendarType(value: SP.CalendarType): void;
		get_displayFormat(): SP.DateTimeFieldFormatType;
		set_displayFormat(value: SP.DateTimeFieldFormatType): void;
		get_friendlyDisplayFormat(): SP.DateTimeFieldFriendlyFormatType;
		set_friendlyDisplayFormat(value: SP.DateTimeFieldFriendlyFormatType): void
	}

	declare export class FieldGeolocation extends SP$Field {
		
	}

	declare export class FieldGeolocationValue extends SP$ClientValueObject {
		get_altitude(): number;
		set_altitude(value: number): void;
		get_latitude(): number;
		set_latitude(value: number): void;
		get_longitude(): number;
		set_longitude(value: number): void;
		get_measure(): number;
		set_measure(value: number): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class FieldGuid extends SP$Field {
		
	}

	declare export class FieldLink extends SP$ClientObject {
		get_hidden(): boolean;
		set_hidden(value: boolean): void;
		get_id(): SP.Guid;
		get_name(): string;
		get_required(): boolean;
		set_required(value: boolean): void;
		deleteObject(): void
	}

	declare export class FieldLinkCollection extends SP$ClientObjectCollection<FieldLink> {
		itemAt(index: number): SP.FieldLink;
		get_item(index: number): SP.FieldLink;
		getById(id: SP.Guid): SP.FieldLink;
		add(parameters: SP.FieldLinkCreationInformation): SP.FieldLink;
		reorder(internalNames: string[]): void
	}

	declare export class FieldLinkCreationInformation extends SP$ClientValueObject {
		get_field(): SP.Field;
		set_field(value: SP.Field): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class FieldLookup extends SP$Field {
		get_allowMultipleValues(): boolean;
		set_allowMultipleValues(value: boolean): void;
		get_isRelationship(): boolean;
		set_isRelationship(value: boolean): void;
		get_lookupField(): string;
		set_lookupField(value: string): void;
		get_lookupList(): string;
		set_lookupList(value: string): void;
		get_lookupWebId(): SP.Guid;
		set_lookupWebId(value: SP.Guid): void;
		get_primaryFieldId(): string;
		set_primaryFieldId(value: string): void;
		get_relationshipDeleteBehavior(): SP.RelationshipDeleteBehaviorType;
		set_relationshipDeleteBehavior(value: SP.RelationshipDeleteBehaviorType): void
	}

	declare export class FieldLookupValue extends SP$ClientValueObject {
		get_lookupId(): number;
		set_lookupId(value: number): void;
		get_lookupValue(): string;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class FieldMultiLineText extends SP$Field {
		get_allowHyperlink(): boolean;
		set_allowHyperlink(value: boolean): void;
		get_appendOnly(): boolean;
		set_appendOnly(value: boolean): void;
		get_numberOfLines(): number;
		set_numberOfLines(value: number): void;
		get_restrictedMode(): boolean;
		set_restrictedMode(value: boolean): void;
		get_richText(): boolean;
		set_richText(value: boolean): void;
		get_wikiLinking(): boolean
	}

	declare export class FieldRatingScale extends SP$FieldMultiChoice {
		get_gridEndNumber(): number;
		set_gridEndNumber(value: number): void;
		get_gridNAOptionText(): string;
		set_gridNAOptionText(value: string): void;
		get_gridStartNumber(): number;
		set_gridStartNumber(value: number): void;
		get_gridTextRangeAverage(): string;
		set_gridTextRangeAverage(value: string): void;
		get_gridTextRangeHigh(): string;
		set_gridTextRangeHigh(value: string): void;
		get_gridTextRangeLow(): string;
		set_gridTextRangeLow(value: string): void;
		get_rangeCount(): number
	}

	declare export class FieldRatingScaleQuestionAnswer extends SP$ClientValueObject {
		get_answer(): number;
		set_answer(value: number): void;
		get_question(): string;
		set_question(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class FieldStringValues extends SP$ClientObject {
		get_fieldValues(): any;
		get_item(fieldName: string): string;
		refreshLoad(): void
	}

	declare export class FieldText extends SP$Field {
		get_maxLength(): number;
		set_maxLength(value: number): void
	}

	declare export class FieldUrl extends SP$Field {
		get_displayFormat(): SP.UrlFieldFormatType;
		set_displayFormat(value: SP.UrlFieldFormatType): void
	}

	declare export class FieldUrlValue extends SP$ClientValueObject {
		get_description(): string;
		set_description(value: string): void;
		get_url(): string;
		set_url(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class FieldUser extends SP$FieldLookup {
		get_allowDisplay(): boolean;
		set_allowDisplay(value: boolean): void;
		get_presence(): boolean;
		set_presence(value: boolean): void;
		get_selectionGroup(): number;
		set_selectionGroup(value: number): void;
		get_selectionMode(): SP.FieldUserSelectionMode;
		set_selectionMode(value: SP.FieldUserSelectionMode): void
	}

	declare export class FieldUserValue extends SP$FieldLookupValue {
		fromUser(userName: string): SP.FieldUserValue;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class File extends SP$ClientObject {
		get_author(): SP.User;
		get_checkedOutByUser(): SP.User;
		get_checkInComment(): string;
		get_checkOutType(): SP.CheckOutType;
		get_contentTag(): string;
		get_customizedPageStatus(): SP.CustomizedPageStatus;
		get_eTag(): string;
		get_exists(): boolean;
		get_length(): number;
		get_level(): SP.FileLevel;
		get_listItemAllFields(): SP.ListItem;
		get_lockedByUser(): SP.User;
		get_majorVersion(): number;
		get_minorVersion(): number;
		get_modifiedBy(): SP.User;
		get_name(): string;
		get_serverRelativeUrl(): string;
		get_timeCreated(): Date;
		get_timeLastModified(): Date;
		get_title(): string;
		get_uIVersion(): number;
		get_uIVersionLabel(): string;
		get_versions(): SP.FileVersionCollection;
		undoCheckOut(): void;
		checkIn(comment: string, checkInType: SP.CheckinType): void;
		publish(comment: string): void;
		unPublish(comment: string): void;
		approve(comment: string): void;
		deny(comment: string): void;
		getContentVerFromTag(context: SP.ClientRuntimeContext, contentTag: string): SP.IntResult;
		getLimitedWebPartManager(scope: SP.WebParts.PersonalizationScope): SP.WebParts.LimitedWebPartManager;
		moveTo(newUrl: string, flags: SP.MoveOperations): void;
		copyTo(strNewUrl: string, bOverWrite: boolean): void;
		saveBinary(parameters: SP.FileSaveBinaryInformation): void;
		deleteObject(): void;
		recycle(): SP.GuidResult;
		checkOut(): void
	}

	declare export class FileCollection extends SP$ClientObjectCollection<File> {
		itemAt(index: number): SP.File;
		get_item(index: number): SP.File;
		getByUrl(url: string): SP.File;
		add(parameters: SP.FileCreationInformation): SP.File;
		addTemplateFile(urlOfFile: string, templateFileType: SP.TemplateFileType): SP.File
	}

	declare export class FileCreationInformation extends SP$ClientValueObject {
		get_content(): SP.Base64EncodedByteArray;
		set_content(value: SP.Base64EncodedByteArray): void;
		get_overwrite(): boolean;
		set_overwrite(value: boolean): void;
		get_url(): string;
		set_url(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class FileSaveBinaryInformation extends SP$ClientValueObject {
		get_checkRequiredFields(): boolean;
		set_checkRequiredFields(value: boolean): void;
		get_content(): SP.Base64EncodedByteArray;
		set_content(value: SP.Base64EncodedByteArray): void;
		get_eTag(): string;
		set_eTag(value: string): void;
		get_fieldValues(): any;
		set_fieldValues(value: any): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class FileVersion extends SP$ClientObject {
		get_checkInComment(): string;
		get_created(): Date;
		get_createdBy(): SP.User;
		get_iD(): number;
		get_isCurrentVersion(): boolean;
		get_size(): number;
		get_url(): string;
		get_versionLabel(): string;
		deleteObject(): void
	}

	declare export class FileVersionCollection extends SP$ClientObjectCollection<FileVersion> {
		itemAt(index: number): SP.FileVersion;
		get_item(index: number): SP.FileVersion;
		getById(versionid: number): SP.FileVersion;
		deleteByID(vid: number): void;
		deleteByLabel(versionlabel: string): void;
		deleteAll(): void;
		restoreByLabel(versionlabel: string): void
	}

	declare export class Folder extends SP$ClientObject {
		get_contentTypeOrder(): SP.ContentTypeId[];
		get_files(): SP.FileCollection;
		get_listItemAllFields(): SP.ListItem;
		get_itemCount(): number;
		get_name(): string;
		get_parentFolder(): SP.Folder;
		get_properties(): SP.PropertyValues;
		get_serverRelativeUrl(): string;
		get_folders(): SP.FolderCollection;
		get_uniqueContentTypeOrder(): SP.ContentTypeId[];
		set_uniqueContentTypeOrder(value: SP.ContentTypeId[]): void;
		get_welcomePage(): string;
		set_welcomePage(value: string): void;
		update(): void;
		deleteObject(): void;
		recycle(): SP.GuidResult
	}

	declare export class FolderCollection extends SP$ClientObjectCollection<Folder> {
		itemAt(index: number): SP.Folder;
		get_item(index: number): SP.Folder;
		getByUrl(url: string): SP.Folder;
		add(url: string): SP.Folder
	}

	declare export class Form extends SP$ClientObject {
		get_id(): SP.Guid;
		get_serverRelativeUrl(): string;
		get_formType(): SP.PageType
	}

	declare export class FormCollection extends SP$ClientObjectCollection<Form> {
		itemAt(index: number): SP.Form;
		get_item(index: number): SP.Form;
		getByPageType(formType: SP.PageType): SP.Form;
		getById(id: SP.Guid): SP.Form
	}

	declare export class Principal extends SP$ClientObject {
		get_id(): number;
		get_isHiddenInUI(): boolean;
		get_loginName(): string;
		get_title(): string;
		set_title(value: string): void;
		get_principalType(): SP.Utilities.PrincipalType
	}

	declare export class Group extends SP$Principal {
		get_allowMembersEditMembership(): boolean;
		set_allowMembersEditMembership(value: boolean): void;
		get_allowRequestToJoinLeave(): boolean;
		set_allowRequestToJoinLeave(value: boolean): void;
		get_autoAcceptRequestToJoinLeave(): boolean;
		set_autoAcceptRequestToJoinLeave(value: boolean): void;
		get_canCurrentUserEditMembership(): boolean;
		get_canCurrentUserManageGroup(): boolean;
		get_canCurrentUserViewMembership(): boolean;
		get_description(): string;
		set_description(value: string): void;
		get_onlyAllowMembersViewMembership(): boolean;
		set_onlyAllowMembersViewMembership(value: boolean): void;
		get_owner(): SP.Principal;
		set_owner(value: SP.Principal): void;
		get_ownerTitle(): string;
		get_requestToJoinLeaveEmailSetting(): string;
		set_requestToJoinLeaveEmailSetting(value: string): void;
		get_users(): SP.UserCollection;
		update(): void
	}

	declare export class GroupCollection extends SP$ClientObjectCollection<Group> {
		itemAt(index: number): SP.Group;
		get_item(index: number): SP.Group;
		getByName(name: string): SP.Group;
		getById(id: number): SP.Group;
		add(parameters: SP.GroupCreationInformation): SP.Group;
		removeByLoginName(loginName: string): void;
		removeById(id: number): void;
		remove(group: SP.Group): void
	}

	declare export class GroupCreationInformation extends SP$ClientValueObject {
		get_description(): string;
		set_description(value: string): void;
		get_title(): string;
		set_title(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class InformationRightsManagementSettings extends SP$ClientObject {
		get_allowPrint(): boolean;
		set_allowPrint(value: boolean): void;
		get_allowScript(): boolean;
		set_allowScript(value: boolean): void;
		get_allowWriteCopy(): boolean;
		set_allowWriteCopy(value: boolean): void;
		get_disableDocumentBrowserView(): boolean;
		set_disableDocumentBrowserView(value: boolean): void;
		get_documentAccessExpireDays(): number;
		set_documentAccessExpireDays(value: number): void;
		get_documentLibraryProtectionExpireDate(): Date;
		set_documentLibraryProtectionExpireDate(value: Date): void;
		get_enableDocumentAccessExpire(): boolean;
		set_enableDocumentAccessExpire(value: boolean): void;
		get_enableDocumentBrowserPublishingView(): boolean;
		set_enableDocumentBrowserPublishingView(value: boolean): void;
		get_enableGroupProtection(): boolean;
		set_enableGroupProtection(value: boolean): void;
		get_enableLicenseCacheExpire(): boolean;
		set_enableLicenseCacheExpire(value: boolean): void;
		get_groupName(): string;
		set_groupName(value: string): void;
		get_licenseCacheExpireDays(): number;
		set_licenseCacheExpireDays(value: number): void;
		get_policyDescription(): string;
		set_policyDescription(value: string): void;
		get_policyTitle(): string;
		set_policyTitle(value: string): void;
		reset(): void;
		update(): void
	}

	declare export class Language extends SP$ClientValueObject {
		get_displayName(): string;
		get_languageTag(): string;
		get_lcid(): number;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class SecurableObject extends SP$ClientObject {
		get_firstUniqueAncestorSecurableObject(): SP.SecurableObject;
		get_hasUniqueRoleAssignments(): boolean;
		get_roleAssignments(): SP.RoleAssignmentCollection;
		resetRoleInheritance(): void;
		breakRoleInheritance(copyRoleAssignments: boolean, clearSubscopes: boolean): void
	}

	declare export class List extends SP$SecurableObject {
		getItemById(id: number): SP.ListItem;
		get_allowContentTypes(): boolean;
		get_baseTemplate(): number;
		get_baseType(): SP.BaseType;
		get_browserFileHandling(): SP.BrowserFileHandling;
		get_contentTypes(): SP.ContentTypeCollection;
		get_contentTypesEnabled(): boolean;
		set_contentTypesEnabled(value: boolean): void;
		get_created(): Date;
		get_dataSource(): SP.ListDataSource;
		get_defaultContentApprovalWorkflowId(): SP.Guid;
		set_defaultContentApprovalWorkflowId(value: SP.Guid): void;
		get_defaultDisplayFormUrl(): string;
		set_defaultDisplayFormUrl(value: string): void;
		get_defaultEditFormUrl(): string;
		set_defaultEditFormUrl(value: string): void;
		get_defaultNewFormUrl(): string;
		set_defaultNewFormUrl(value: string): void;
		get_defaultView(): SP.View;
		get_defaultViewUrl(): string;
		get_description(): string;
		set_description(value: string): void;
		get_direction(): string;
		set_direction(value: string): void;
		get_documentTemplateUrl(): string;
		set_documentTemplateUrl(value: string): void;
		get_draftVersionVisibility(): SP.DraftVisibilityType;
		set_draftVersionVisibility(value: SP.DraftVisibilityType): void;
		get_effectiveBasePermissions(): SP.BasePermissions;
		get_effectiveBasePermissionsForUI(): SP.BasePermissions;
		get_enableAttachments(): boolean;
		set_enableAttachments(value: boolean): void;
		get_enableFolderCreation(): boolean;
		set_enableFolderCreation(value: boolean): void;
		get_enableMinorVersions(): boolean;
		set_enableMinorVersions(value: boolean): void;
		get_enableModeration(): boolean;
		set_enableModeration(value: boolean): void;
		get_enableVersioning(): boolean;
		set_enableVersioning(value: boolean): void;
		get_entityTypeName(): string;
		get_eventReceivers(): SP.EventReceiverDefinitionCollection;
		get_fields(): SP.FieldCollection;
		get_forceCheckout(): boolean;
		set_forceCheckout(value: boolean): void;
		get_forms(): SP.FormCollection;
		get_hasExternalDataSource(): boolean;
		get_hidden(): boolean;
		set_hidden(value: boolean): void;
		get_id(): SP.Guid;
		get_imageUrl(): string;
		set_imageUrl(value: string): void;
		get_informationRightsManagementSettings(): SP.InformationRightsManagementSettings;
		get_irmEnabled(): boolean;
		set_irmEnabled(value: boolean): void;
		get_irmExpire(): boolean;
		set_irmExpire(value: boolean): void;
		get_irmReject(): boolean;
		set_irmReject(value: boolean): void;
		get_isApplicationList(): boolean;
		set_isApplicationList(value: boolean): void;
		get_isCatalog(): boolean;
		get_isPrivate(): boolean;
		get_isSiteAssetsLibrary(): boolean;
		get_itemCount(): number;
		get_lastItemDeletedDate(): Date;
		get_lastItemModifiedDate(): Date;
		set_lastItemModifiedDate(value: Date): void;
		get_listItemEntityTypeFullName(): string;
		get_multipleDataList(): boolean;
		set_multipleDataList(value: boolean): void;
		get_noCrawl(): boolean;
		set_noCrawl(value: boolean): void;
		get_onQuickLaunch(): boolean;
		set_onQuickLaunch(value: boolean): void;
		get_parentWeb(): SP.Web;
		get_parentWebUrl(): string;
		get_rootFolder(): SP.Folder;
		get_schemaXml(): string;
		get_serverTemplateCanCreateFolders(): boolean;
		get_templateFeatureId(): SP.Guid;
		get_title(): string;
		set_title(value: string): void;
		get_userCustomActions(): SP.UserCustomActionCollection;
		get_validationFormula(): string;
		set_validationFormula(value: string): void;
		get_validationMessage(): string;
		set_validationMessage(value: string): void;
		get_views(): SP.ViewCollection;
		get_workflowAssociations(): SP.Workflow.WorkflowAssociationCollection;
		getChanges(query: SP.ChangeQuery): SP.ChangeCollection;
		getListItemChangesSinceToken(query: SP.ChangeLogItemQuery): any[];
		getUserEffectivePermissions(userName: string): SP.BasePermissions;
		saveAsNewView(
		oldName: string, newName: string, privateView: boolean, uri: string
	): SP.StringResult;
		getRelatedFields(): SP.RelatedFieldCollection;
		getRelatedFieldsExtendedData(): SP.RelatedFieldExtendedDataCollection;
		renderListFormData(itemId: number, formId: string, mode: SP.ControlMode): SP.StringResult;
		renderListData(viewXml: string): SP.StringResult;
		reserveListItemId(): SP.IntResult;
		update(): void;
		getView(viewGuid: SP.Guid): SP.View;
		deleteObject(): void;
		recycle(): SP.GuidResult;
		getItems(query: SP.CamlQuery): SP.ListItemCollection;
		addItem(parameters: SP.ListItemCreationInformation): SP.ListItem
	}

	declare export class ListCollection extends SP$ClientObjectCollection<List> {
		itemAt(index: number): SP.List;
		get_item(index: number): SP.List;
		getByTitle(title: string): SP.List;
		getById(id: SP.Guid): SP.List;
		getById(id: string): SP.List;
		add(parameters: SP.ListCreationInformation): SP.List;
		ensureSitePagesLibrary(): SP.List;
		ensureSiteAssetsLibrary(): SP.List
	}

	declare export class ListCreationInformation extends SP$ClientValueObject {
		get_customSchemaXml(): string;
		set_customSchemaXml(value: string): void;
		get_dataSourceProperties(): any;
		set_dataSourceProperties(value: any): void;
		get_description(): string;
		set_description(value: string): void;
		get_documentTemplateType(): number;
		set_documentTemplateType(value: number): void;
		get_quickLaunchOption(): SP.QuickLaunchOptions;
		set_quickLaunchOption(value: SP.QuickLaunchOptions): void;
		get_templateFeatureId(): SP.Guid;
		set_templateFeatureId(value: SP.Guid): void;
		get_templateType(): number;
		set_templateType(value: number): void;
		get_title(): string;
		set_title(value: string): void;
		get_url(): string;
		set_url(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ListDataSource extends SP$ClientValueObject {
		get_properties(): any;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ListDataValidationExceptionValue extends SP$ClientValueObject {
		get_fieldFailures(): SP.ListDataValidationFailure[];
		get_itemFailure(): SP.ListDataValidationFailure;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ListDataValidationFailure extends SP$ClientValueObject {
		get_displayName(): string;
		get_message(): string;
		get_name(): string;
		get_reason(): SP.ListDataValidationFailureReason;
		get_validationType(): SP.ListDataValidationType;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ListItem extends SP$SecurableObject {
		get_fieldValues(): any;
		get_item(fieldInternalName: string): any;
		set_item(fieldInternalName: string, value: any): void;
		get_attachmentFiles(): SP.AttachmentCollection;
		get_contentType(): SP.ContentType;
		get_displayName(): string;
		get_effectiveBasePermissions(): SP.BasePermissions;
		get_effectiveBasePermissionsForUI(): SP.BasePermissions;
		get_fieldValuesAsHtml(): SP.FieldStringValues;
		get_fieldValuesAsText(): SP.FieldStringValues;
		get_fieldValuesForEdit(): SP.FieldStringValues;
		get_file(): SP.File;
		get_fileSystemObjectType(): SP.FileSystemObjectType;
		get_folder(): SP.Folder;
		get_id(): number;
		get_parentList(): SP.List;
		refreshLoad(): void;
		getWOPIFrameUrl(action: SP.Utilities.SPWOPIFrameAction): SP.StringResult;
		update(): void;
		deleteObject(): void;
		recycle(): SP.GuidResult;
		getUserEffectivePermissions(userName: string): SP.BasePermissions;
		parseAndSetFieldValue(fieldInternalName: string, value: string): void;
		validateUpdateListItem(
		formValues: SP.ListItemFormUpdateValue[], bNewDocumentUpdate: boolean
	): SP.ListItemFormUpdateValue[]
	}

	declare export class ListItemCollection extends SP$ClientObjectCollection<ListItem> {
		itemAt(index: number): SP.ListItem;
		get_item(index: number): SP.ListItem;
		getById(id: number): SP.ListItem;
		getById(id: string): SP.ListItem;
		get_listItemCollectionPosition(): SP.ListItemCollectionPosition
	}

	declare export class ListItemCollectionPosition extends SP$ClientValueObject {
		get_pagingInfo(): string;
		set_pagingInfo(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ListItemCreationInformation extends SP$ClientValueObject {
		get_folderUrl(): string;
		set_folderUrl(value: string): void;
		get_leafName(): string;
		set_leafName(value: string): void;
		get_underlyingObjectType(): SP.FileSystemObjectType;
		set_underlyingObjectType(value: SP.FileSystemObjectType): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ListItemEntityCollection extends SP$ClientObjectCollection<ListItem> {
		itemAt(index: number): SP.ListItem;
		get_item(index: number): SP.ListItem
	}

	declare export class ListItemFormUpdateValue extends SP$ClientValueObject {
		get_errorMessage(): string;
		set_errorMessage(value: string): void;
		get_fieldName(): string;
		set_fieldName(value: string): void;
		get_fieldValue(): string;
		set_fieldValue(value: string): void;
		get_hasException(): boolean;
		set_hasException(value: boolean): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ListTemplate extends SP$ClientObject {
		get_allowsFolderCreation(): boolean;
		get_baseType(): SP.BaseType;
		get_description(): string;
		get_featureId(): SP.Guid;
		get_hidden(): boolean;
		get_imageUrl(): string;
		get_internalName(): string;
		get_isCustomTemplate(): boolean;
		get_name(): string;
		get_onQuickLaunch(): boolean;
		get_listTemplateTypeKind(): number;
		get_unique(): boolean
	}

	declare export class ListTemplateCollection extends SP$ClientObjectCollection<ListTemplate> {
		itemAt(index: number): SP.ListTemplate;
		get_item(index: number): SP.ListTemplate;
		getByName(name: string): SP.ListTemplate
	}

	declare export class Navigation extends SP$ClientObject {
		get_quickLaunch(): SP.NavigationNodeCollection;
		get_topNavigationBar(): SP.NavigationNodeCollection;
		get_useShared(): boolean;
		set_useShared(value: boolean): void;
		getNodeById(id: number): SP.NavigationNode
	}

	declare export class NavigationNode extends SP$ClientObject {
		get_children(): SP.NavigationNodeCollection;
		get_id(): number;
		get_isDocLib(): boolean;
		get_isExternal(): boolean;
		get_isVisible(): boolean;
		set_isVisible(value: boolean): void;
		get_title(): string;
		set_title(value: string): void;
		get_url(): string;
		set_url(value: string): void;
		update(): void;
		deleteObject(): void
	}

	declare export class NavigationNodeCollection extends SP$ClientObjectCollection<NavigationNode> {
		itemAt(index: number): SP.NavigationNode;
		get_item(index: number): SP.NavigationNode;
		add(parameters: SP.NavigationNodeCreationInformation): SP.NavigationNode
	}

	declare export class NavigationNodeCreationInformation extends SP$ClientValueObject {
		get_asLastNode(): boolean;
		set_asLastNode(value: boolean): void;
		get_isExternal(): boolean;
		set_isExternal(value: boolean): void;
		get_previousNode(): SP.NavigationNode;
		set_previousNode(value: SP.NavigationNode): void;
		get_title(): string;
		set_title(value: string): void;
		get_url(): string;
		set_url(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ObjectSharingInformation extends SP$ClientObject {
		get_anonymousEditLink(): string;
		get_anonymousViewLink(): string;
		get_canManagePermissions(): boolean;
		get_hasPendingAccessRequests(): boolean;
		get_hasPermissionLevels(): boolean;
		get_isSharedWithCurrentUser(): boolean;
		get_isSharedWithGuest(): boolean;
		get_isSharedWithMany(): boolean;
		get_isSharedWithSecurityGroup(): boolean;
		get_pendingAccessRequestsLink(): string;
		getSharedWithUsers(): SP.ClientObjectList<SP.ObjectSharingInformationUser>;
		getListItemSharingInformation(
		context: SP.ClientRuntimeContext, listID: SP.Guid, itemID: number, excludeCurrentUser: boolean, excludeSiteAdmin: boolean, excludeSecurityGroups: boolean, retrieveAnonymousLinks: boolean, retrieveUserInfoDetails: boolean, checkForAccessRequests: boolean
	): SP.ObjectSharingInformation;
		getWebSharingInformation(
		context: SP.ClientRuntimeContext, excludeCurrentUser: boolean, excludeSiteAdmin: boolean, excludeSecurityGroups: boolean, retrieveAnonymousLinks: boolean, retrieveUserInfoDetails: boolean, checkForAccessRequests: boolean
	): SP.ObjectSharingInformation;
		getObjectSharingInformation(
		context: SP.ClientRuntimeContext, securableObject: SP.SecurableObject, excludeCurrentUser: boolean, excludeSiteAdmin: boolean, excludeSecurityGroups: boolean, retrieveAnonymousLinks: boolean, retrieveUserInfoDetails: boolean, checkForAccessRequests: boolean, retrievePermissionLevels: boolean
	): SP.ObjectSharingInformation
	}

	declare export class ObjectSharingInformationUser extends SP$ClientObject {
		get_customRoleNames(): string;
		get_department(): string;
		get_email(): string;
		get_hasEditPermission(): boolean;
		get_hasViewPermission(): boolean;
		get_id(): number;
		get_isSiteAdmin(): boolean;
		get_jobTitle(): string;
		get_loginName(): string;
		get_name(): string;
		get_picture(): string;
		get_principal(): SP.Principal;
		get_sipAddress(): string;
		get_user(): SP.User
	}

	declare export class PropertyValues extends SP$ClientObject {
		get_fieldValues(): any;
		get_item(fieldName: string): any;
		set_item(fieldName: string, value: any): void;
		refreshLoad(): void
	}

	declare export class PushNotificationSubscriber extends SP$ClientObject {
		get_customArgs(): string;
		set_customArgs(value: string): void;
		get_deviceAppInstanceId(): SP.Guid;
		get_lastModifiedTimeStamp(): Date;
		get_registrationTimeStamp(): Date;
		get_serviceToken(): string;
		set_serviceToken(value: string): void;
		get_subscriberType(): string;
		set_subscriberType(value: string): void;
		get_user(): SP.User;
		update(): void
	}

	declare export class PushNotificationSubscriberCollection extends SP$ClientObjectCollection<PushNotificationSubscriber> {
		itemAt(index: number): SP.PushNotificationSubscriber;
		get_item(index: number): SP.PushNotificationSubscriber;
		getByStoreId(id: string): SP.PushNotificationSubscriber
	}

	declare export class RecycleBinItem extends SP$ClientObject {
		get_author(): SP.User;
		get_deletedBy(): SP.User;
		get_deletedDate(): Date;
		get_dirName(): string;
		get_id(): SP.Guid;
		get_itemState(): SP.RecycleBinItemState;
		get_itemType(): SP.RecycleBinItemType;
		get_leafName(): string;
		get_size(): number;
		get_title(): string;
		deleteObject(): void;
		restore(): void
	}

	declare export class RecycleBinItemCollection extends SP$ClientObjectCollection<RecycleBinItem> {
		itemAt(index: number): SP.RecycleBinItem;
		get_item(index: number): SP.RecycleBinItem;
		getById(id: SP.Guid): SP.RecycleBinItem;
		deleteAll(): void;
		restoreAll(): void
	}

	declare export class RegionalSettings extends SP$ClientObject {
		get_adjustHijriDays(): number;
		get_alternateCalendarType(): number;
		get_aM(): string;
		get_calendarType(): number;
		get_collation(): number;
		get_collationLCID(): number;
		get_dateFormat(): number;
		get_dateSeparator(): string;
		get_decimalSeparator(): string;
		get_digitGrouping(): string;
		get_firstDayOfWeek(): number;
		get_firstWeekOfYear(): number;
		get_isEastAsia(): boolean;
		get_isRightToLeft(): boolean;
		get_isUIRightToLeft(): boolean;
		get_listSeparator(): string;
		get_localeId(): number;
		get_negativeSign(): string;
		get_negNumberMode(): number;
		get_pM(): string;
		get_positiveSign(): string;
		get_showWeeks(): boolean;
		get_thousandSeparator(): string;
		get_time24(): boolean;
		get_timeMarkerPosition(): number;
		get_timeSeparator(): string;
		get_timeZone(): SP.TimeZone;
		get_timeZones(): SP.TimeZoneCollection;
		get_workDayEndHour(): number;
		get_workDays(): number;
		get_workDayStartHour(): number
	}

	declare export class RelatedField extends SP$ClientObject {
		get_fieldId(): SP.Guid;
		get_listId(): SP.Guid;
		get_lookupList(): SP.List;
		get_relationshipDeleteBehavior(): SP.RelationshipDeleteBehaviorType;
		get_webId(): SP.Guid
	}

	declare export class RelatedFieldCollection extends SP$ClientObjectCollection<RelatedField> {
		itemAt(index: number): SP.RelatedField;
		get_item(index: number): SP.RelatedField
	}

	declare export class RelatedFieldExtendedData extends SP$ClientObject {
		get_fieldId(): SP.Guid;
		get_listId(): SP.Guid;
		get_listImageUrl(): string;
		get_resolvedListTitle(): string;
		get_toolTipDescription(): string;
		get_webId(): SP.Guid
	}

	declare export class RelatedFieldExtendedDataCollection extends SP$ClientObjectCollection<RelatedFieldExtendedData> {
		itemAt(index: number): SP.RelatedFieldExtendedData;
		get_item(index: number): SP.RelatedFieldExtendedData
	}

	declare export class RelatedItem extends SP$ClientValueObject {
		get_iconUrl(): string;
		set_iconUrl(value: string): void;
		get_itemId(): number;
		set_itemId(value: number): void;
		get_listId(): string;
		set_listId(value: string): void;
		get_title(): string;
		set_title(value: string): void;
		get_url(): string;
		set_url(value: string): void;
		get_webId(): string;
		set_webId(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class RelatedItemManager extends SP$ClientObject {
		getRelatedItems(
		context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number
	): SP.RelatedItem[];
		getPageOneRelatedItems(
		context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number
	): SP.RelatedItem[];
		addSingleLink(
		context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number, SourceWebUrl: string, TargetListName: string, TargetItemID: number, TargetWebUrl: string, TryAddReverseLink: boolean
	): void;
		addSingleLinkToUrl(
		context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number, TargetItemUrl: string, TryAddReverseLink: boolean
	): void;
		addSingleLinkFromUrl(
		context: SP.ClientRuntimeContext, SourceItemUrl: string, TargetListName: string, TargetItemID: number, TryAddReverseLink: boolean
	): void;
		deleteSingleLink(
		context: SP.ClientRuntimeContext, SourceListName: string, SourceItemID: number, SourceWebUrl: string, TargetListName: string, TargetItemID: number, TargetWebUrl: string, TryDeleteReverseLink: boolean
	): void
	}

	declare export class RequestVariable extends SP$ClientObject {
		constructor(context: SP.ClientRuntimeContext): this;
		get_value(): string;
		newObject(context: SP.ClientRuntimeContext): SP.RequestVariable;
		append(value: string): void;
		set(value: string): void
	}

	declare export class RoleAssignment extends SP$ClientObject {
		get_member(): SP.Principal;
		get_principalId(): number;
		get_roleDefinitionBindings(): SP.RoleDefinitionBindingCollection;
		importRoleDefinitionBindings(roleDefinitionBindings: SP.RoleDefinitionBindingCollection): void;
		update(): void;
		deleteObject(): void
	}

	declare export class RoleAssignmentCollection extends SP$ClientObjectCollection<RoleAssignment> {
		itemAt(index: number): SP.RoleAssignment;
		get_item(index: number): SP.RoleAssignment;
		get_groups(): SP.GroupCollection;
		getByPrincipal(principalToFind: SP.Principal): SP.RoleAssignment;
		getByPrincipalId(principalId: number): SP.RoleAssignment;
		add(
		principal: SP.Principal, roleBindings: SP.RoleDefinitionBindingCollection
	): SP.RoleAssignment
	}

	declare export class RoleDefinition extends SP$ClientObject {
		get_basePermissions(): SP.BasePermissions;
		set_basePermissions(value: SP.BasePermissions): void;
		get_description(): string;
		set_description(value: string): void;
		get_hidden(): boolean;
		get_id(): number;
		get_name(): string;
		set_name(value: string): void;
		get_order(): number;
		set_order(value: number): void;
		get_roleTypeKind(): SP.RoleType;
		update(): void;
		deleteObject(): void
	}

	declare export class RoleDefinitionBindingCollection extends SP$ClientObjectCollection<RoleDefinition> {
		itemAt(index: number): SP.RoleDefinition;
		get_item(index: number): SP.RoleDefinition;
		constructor(context: SP.ClientRuntimeContext): this;
		newObject(context: SP.ClientRuntimeContext): SP.RoleDefinitionBindingCollection;
		add(roleDefinition: SP.RoleDefinition): void;
		remove(roleDefinition: SP.RoleDefinition): void;
		removeAll(): void
	}

	declare export class RoleDefinitionCollection extends SP$ClientObjectCollection<RoleDefinition> {
		itemAt(index: number): SP.RoleDefinition;
		get_item(index: number): SP.RoleDefinition;
		getByName(name: string): SP.RoleDefinition;
		add(parameters: SP.RoleDefinitionCreationInformation): SP.RoleDefinition;
		getById(id: number): SP.RoleDefinition;
		getByType(roleType: SP.RoleType): SP.RoleDefinition
	}

	declare export class RoleDefinitionCreationInformation extends SP$ClientValueObject {
		get_basePermissions(): SP.BasePermissions;
		set_basePermissions(value: SP.BasePermissions): void;
		get_description(): string;
		set_description(value: string): void;
		get_name(): string;
		set_name(value: string): void;
		get_order(): number;
		set_order(value: number): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ServerSettings  {
		getAlternateUrls(context: SP.ClientRuntimeContext): SP.ClientObjectList<SP.AlternateUrl>;
		getGlobalInstalledLanguages(context: SP.ClientRuntimeContext, compatibilityLevel: number): SP.Language[]
	}

	declare export class Site extends SP$ClientObject {
		get_allowDesigner(): boolean;
		set_allowDesigner(value: boolean): void;
		get_allowMasterPageEditing(): boolean;
		set_allowMasterPageEditing(value: boolean): void;
		get_allowRevertFromTemplate(): boolean;
		set_allowRevertFromTemplate(value: boolean): void;
		get_allowSelfServiceUpgrade(): boolean;
		set_allowSelfServiceUpgrade(value: boolean): void;
		get_allowSelfServiceUpgradeEvaluation(): boolean;
		set_allowSelfServiceUpgradeEvaluation(value: boolean): void;
		get_canUpgrade(): boolean;
		get_compatibilityLevel(): number;
		get_eventReceivers(): SP.EventReceiverDefinitionCollection;
		get_features(): SP.FeatureCollection;
		get_id(): SP.Guid;
		get_lockIssue(): string;
		get_maxItemsPerThrottledOperation(): number;
		get_owner(): SP.User;
		set_owner(value: SP.User): void;
		get_primaryUri(): string;
		get_readOnly(): boolean;
		get_recycleBin(): SP.RecycleBinItemCollection;
		get_rootWeb(): SP.Web;
		get_serverRelativeUrl(): string;
		get_shareByLinkEnabled(): boolean;
		get_showUrlStructure(): boolean;
		set_showUrlStructure(value: boolean): void;
		get_uIVersionConfigurationEnabled(): boolean;
		set_uIVersionConfigurationEnabled(value: boolean): void;
		get_upgradeInfo(): SP.UpgradeInfo;
		get_upgradeReminderDate(): Date;
		get_upgrading(): boolean;
		get_url(): string;
		get_usage(): SP.UsageInfo;
		get_userCustomActions(): SP.UserCustomActionCollection;
		updateClientObjectModelUseRemoteAPIsPermissionSetting(requireUseRemoteAPIs: boolean): void;
		needsUpgradeByType(versionUpgrade: boolean, recursive: boolean): SP.BooleanResult;
		runHealthCheck(
		ruleId: SP.Guid, bRepair: boolean, bRunAlways: boolean
	): SP.SiteHealth.SiteHealthSummary;
		createPreviewSPSite(upgrade: boolean, sendemail: boolean): void;
		runUpgradeSiteSession(versionUpgrade: boolean, queueOnly: boolean, sendEmail: boolean): void;
		getChanges(query: SP.ChangeQuery): SP.ChangeCollection;
		openWeb(strUrl: string): SP.Web;
		openWebById(gWebId: SP.Guid): SP.Web;
		getWebTemplates(LCID: number, overrideCompatLevel: number): SP.WebTemplateCollection;
		getCustomListTemplates(web: SP.Web): SP.ListTemplateCollection;
		getCatalog(typeCatalog: number): SP.List;
		extendUpgradeReminderDate(): void;
		invalidate(): void
	}

	declare export class SiteUrl extends SP$ClientObject {
		
	}

	declare export class SubwebQuery extends SP$ClientValueObject {
		get_configurationFilter(): number;
		set_configurationFilter(value: number): void;
		get_webTemplateFilter(): number;
		set_webTemplateFilter(value: number): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ThemeInfo extends SP$ClientObject {
		get_accessibleDescription(): string;
		get_themeBackgroundImageUri(): string;
		getThemeShadeByName(name: string): SP.StringResult;
		getThemeFontByName(name: string, lcid: number): SP.StringResult
	}

	declare export class TimeZone extends SP$ClientObject {
		get_description(): string;
		get_id(): number;
		get_information(): SP.TimeZoneInformation;
		localTimeToUTC(date: Date): SP.DateTimeResult;
		utcToLocalTime(date: Date): SP.DateTimeResult
	}

	declare export class TimeZoneCollection extends SP$ClientObjectCollection<TimeZone> {
		itemAt(index: number): SP.TimeZone;
		get_item(index: number): SP.TimeZone;
		getById(id: number): SP.TimeZone
	}

	declare export class TimeZoneInformation extends SP$ClientValueObject {
		get_bias(): number;
		get_daylightBias(): number;
		get_standardBias(): number;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class UpgradeInfo extends SP$ClientValueObject {
		get_errorFile(): string;
		get_errors(): number;
		get_lastUpdated(): Date;
		get_logFile(): string;
		get_requestDate(): Date;
		get_retryCount(): number;
		get_startTime(): Date;
		get_status(): SP.UpgradeStatus;
		get_upgradeType(): SP.UpgradeType;
		get_warnings(): number;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class UsageInfo extends SP$ClientValueObject {
		get_bandwidth(): number;
		get_discussionStorage(): number;
		get_hits(): number;
		get_storage(): number;
		get_storagePercentageUsed(): number;
		get_visits(): number;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class User extends SP$Principal {
		get_email(): string;
		set_email(value: string): void;
		get_groups(): SP.GroupCollection;
		get_isSiteAdmin(): boolean;
		set_isSiteAdmin(value: boolean): void;
		get_userId(): SP.UserIdInfo;
		update(): void
	}

	declare export class UserCollection extends SP$ClientObjectCollection<User> {
		itemAt(index: number): SP.User;
		get_item(index: number): SP.User;
		getByLoginName(loginName: string): SP.User;
		getById(id: number): SP.User;
		getByEmail(emailAddress: string): SP.User;
		removeByLoginName(loginName: string): void;
		removeById(id: number): void;
		remove(user: SP.User): void;
		add(parameters: SP.UserCreationInformation): SP.User;
		addUser(user: SP.User): SP.User
	}

	declare export class UserCreationInformation extends SP$ClientValueObject {
		get_email(): string;
		set_email(value: string): void;
		get_loginName(): string;
		set_loginName(value: string): void;
		get_title(): string;
		set_title(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class UserCustomAction extends SP$ClientObject {
		get_commandUIExtension(): string;
		set_commandUIExtension(value: string): void;
		get_description(): string;
		set_description(value: string): void;
		get_group(): string;
		set_group(value: string): void;
		get_id(): SP.Guid;
		get_imageUrl(): string;
		set_imageUrl(value: string): void;
		get_location(): string;
		set_location(value: string): void;
		get_name(): string;
		set_name(value: string): void;
		get_registrationId(): string;
		set_registrationId(value: string): void;
		get_registrationType(): SP.UserCustomActionRegistrationType;
		set_registrationType(value: SP.UserCustomActionRegistrationType): void;
		get_rights(): SP.BasePermissions;
		set_rights(value: SP.BasePermissions): void;
		get_scope(): SP.UserCustomActionScope;
		get_scriptBlock(): string;
		set_scriptBlock(value: string): void;
		get_scriptSrc(): string;
		set_scriptSrc(value: string): void;
		get_sequence(): number;
		set_sequence(value: number): void;
		get_title(): string;
		set_title(value: string): void;
		get_url(): string;
		set_url(value: string): void;
		get_versionOfUserCustomAction(): string;
		update(): void;
		deleteObject(): void
	}

	declare export class UserCustomActionCollection extends SP$ClientObjectCollection<UserCustomAction> {
		itemAt(index: number): SP.UserCustomAction;
		get_item(index: number): SP.UserCustomAction;
		getById(id: SP.Guid): SP.UserCustomAction;
		clear(): void;
		add(): SP.UserCustomAction
	}

	declare export class UserIdInfo extends SP$ClientValueObject {
		get_nameId(): string;
		get_nameIdIssuer(): string;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class View extends SP$ClientObject {
		get_aggregations(): string;
		set_aggregations(value: string): void;
		get_aggregationsStatus(): string;
		set_aggregationsStatus(value: string): void;
		get_baseViewId(): string;
		get_contentTypeId(): SP.ContentTypeId;
		set_contentTypeId(value: SP.ContentTypeId): void;
		get_defaultView(): boolean;
		set_defaultView(value: boolean): void;
		get_defaultViewForContentType(): boolean;
		set_defaultViewForContentType(value: boolean): void;
		get_editorModified(): boolean;
		set_editorModified(value: boolean): void;
		get_formats(): string;
		set_formats(value: string): void;
		get_hidden(): boolean;
		set_hidden(value: boolean): void;
		get_htmlSchemaXml(): string;
		get_id(): SP.Guid;
		get_imageUrl(): string;
		get_includeRootFolder(): boolean;
		set_includeRootFolder(value: boolean): void;
		get_viewJoins(): string;
		set_viewJoins(value: string): void;
		get_jsLink(): string;
		set_jsLink(value: string): void;
		get_listViewXml(): string;
		set_listViewXml(value: string): void;
		get_method(): string;
		set_method(value: string): void;
		get_mobileDefaultView(): boolean;
		set_mobileDefaultView(value: boolean): void;
		get_mobileView(): boolean;
		set_mobileView(value: boolean): void;
		get_moderationType(): string;
		get_orderedView(): boolean;
		get_paged(): boolean;
		set_paged(value: boolean): void;
		get_personalView(): boolean;
		get_viewProjectedFields(): string;
		set_viewProjectedFields(value: string): void;
		get_viewQuery(): string;
		set_viewQuery(value: string): void;
		get_readOnlyView(): boolean;
		get_requiresClientIntegration(): boolean;
		get_rowLimit(): number;
		set_rowLimit(value: number): void;
		get_scope(): SP.ViewScope;
		set_scope(value: SP.ViewScope): void;
		get_serverRelativeUrl(): string;
		get_styleId(): string;
		get_threaded(): boolean;
		get_title(): string;
		set_title(value: string): void;
		get_toolbar(): string;
		set_toolbar(value: string): void;
		get_toolbarTemplateName(): string;
		get_viewType(): string;
		get_viewData(): string;
		set_viewData(value: string): void;
		get_viewFields(): SP.ViewFieldCollection;
		deleteObject(): void;
		renderAsHtml(): SP.StringResult;
		update(): void
	}

	declare export class ViewCollection extends SP$ClientObjectCollection<View> {
		itemAt(index: number): SP.View;
		get_item(index: number): SP.View;
		getByTitle(strTitle: string): SP.View;
		getById(guidId: SP.Guid): SP.View;
		add(parameters: SP.ViewCreationInformation): SP.View
	}

	declare export class ViewCreationInformation extends SP$ClientValueObject {
		get_paged(): boolean;
		set_paged(value: boolean): void;
		get_personalView(): boolean;
		set_personalView(value: boolean): void;
		get_query(): string;
		set_query(value: string): void;
		get_rowLimit(): number;
		set_rowLimit(value: number): void;
		get_setAsDefaultView(): boolean;
		set_setAsDefaultView(value: boolean): void;
		get_title(): string;
		set_title(value: string): void;
		get_viewFields(): string[];
		set_viewFields(value: string[]): void;
		get_viewTypeKind(): SP.ViewType;
		set_viewTypeKind(value: SP.ViewType): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ViewFieldCollection extends SP$ClientObjectCollection<string> {
		itemAt(index: number): string;
		get_item(index: number): string;
		get_schemaXml(): string;
		moveFieldTo(field: string, index: number): void;
		add(strField: string): void;
		remove(strField: string): void;
		removeAll(): void
	}

	declare export class Web extends SP$SecurableObject {
		get_allowDesignerForCurrentUser(): boolean;
		get_allowMasterPageEditingForCurrentUser(): boolean;
		get_allowRevertFromTemplateForCurrentUser(): boolean;
		get_allowRssFeeds(): boolean;
		get_allProperties(): SP.PropertyValues;
		get_appInstanceId(): SP.Guid;
		get_associatedMemberGroup(): SP.Group;
		set_associatedMemberGroup(value: SP.Group): void;
		get_associatedOwnerGroup(): SP.Group;
		set_associatedOwnerGroup(value: SP.Group): void;
		get_associatedVisitorGroup(): SP.Group;
		set_associatedVisitorGroup(value: SP.Group): void;
		get_availableContentTypes(): SP.ContentTypeCollection;
		get_availableFields(): SP.FieldCollection;
		get_configuration(): number;
		get_contentTypes(): SP.ContentTypeCollection;
		get_created(): Date;
		get_currentUser(): SP.User;
		get_customMasterUrl(): string;
		set_customMasterUrl(value: string): void;
		get_description(): string;
		set_description(value: string): void;
		get_documentLibraryCalloutOfficeWebAppPreviewersDisabled(): boolean;
		get_effectiveBasePermissions(): SP.BasePermissions;
		get_enableMinimalDownload(): boolean;
		set_enableMinimalDownload(value: boolean): void;
		get_eventReceivers(): SP.EventReceiverDefinitionCollection;
		get_features(): SP.FeatureCollection;
		get_fields(): SP.FieldCollection;
		get_folders(): SP.FolderCollection;
		get_id(): SP.Guid;
		get_language(): number;
		get_lastItemModifiedDate(): Date;
		get_lists(): SP.ListCollection;
		get_listTemplates(): SP.ListTemplateCollection;
		get_masterUrl(): string;
		set_masterUrl(value: string): void;
		get_navigation(): SP.Navigation;
		get_parentWeb(): SP.WebInformation;
		get_pushNotificationSubscribers(): SP.PushNotificationSubscriberCollection;
		get_quickLaunchEnabled(): boolean;
		set_quickLaunchEnabled(value: boolean): void;
		get_recycleBin(): SP.RecycleBinItemCollection;
		get_recycleBinEnabled(): boolean;
		get_regionalSettings(): SP.RegionalSettings;
		get_roleDefinitions(): SP.RoleDefinitionCollection;
		get_rootFolder(): SP.Folder;
		get_saveSiteAsTemplateEnabled(): boolean;
		set_saveSiteAsTemplateEnabled(value: boolean): void;
		get_serverRelativeUrl(): string;
		set_serverRelativeUrl(value: string): void;
		get_showUrlStructureForCurrentUser(): boolean;
		get_siteGroups(): SP.GroupCollection;
		get_siteUserInfoList(): SP.List;
		get_siteUsers(): SP.UserCollection;
		get_supportedUILanguageIds(): number[];
		get_syndicationEnabled(): boolean;
		set_syndicationEnabled(value: boolean): void;
		get_themeInfo(): SP.ThemeInfo;
		get_title(): string;
		set_title(value: string): void;
		get_treeViewEnabled(): boolean;
		set_treeViewEnabled(value: boolean): void;
		get_uIVersion(): number;
		set_uIVersion(value: number): void;
		get_uIVersionConfigurationEnabled(): boolean;
		set_uIVersionConfigurationEnabled(value: boolean): void;
		get_url(): string;
		get_userCustomActions(): SP.UserCustomActionCollection;
		get_webs(): SP.WebCollection;
		get_webTemplate(): string;
		get_workflowAssociations(): SP.Workflow.WorkflowAssociationCollection;
		get_workflowTemplates(): SP.Workflow.WorkflowTemplateCollection;
		doesUserHavePermissions(permissionMask: SP.BasePermissions): SP.BooleanResult;
		getUserEffectivePermissions(userName: string): SP.BasePermissions;
		mapToIcon(fileName: string, progId: string, size: SP.Utilities.IconSize): SP.StringResult;
		registerPushNotificationSubscriber(
		deviceAppInstanceId: SP.Guid, serviceToken: string
	): SP.PushNotificationSubscriber;
		unregisterPushNotificationSubscriber(deviceAppInstanceId: SP.Guid): void;
		getPushNotificationSubscribersByArgs(customArgs: string): SP.PushNotificationSubscriberCollection;
		getPushNotificationSubscribersByUser(userName: string): SP.PushNotificationSubscriberCollection;
		doesPushNotificationSubscriberExist(deviceAppInstanceId: SP.Guid): SP.BooleanResult;
		getPushNotificationSubscriber(deviceAppInstanceId: SP.Guid): SP.PushNotificationSubscriber;
		getUserById(userId: number): SP.User;
		getAvailableWebTemplates(lcid: number, doIncludeCrossLanguage: boolean): SP.WebTemplateCollection;
		getCatalog(typeCatalog: number): SP.List;
		getChanges(query: SP.ChangeQuery): SP.ChangeCollection;
		applyWebTemplate(webTemplate: string): void;
		deleteObject(): void;
		update(): void;
		getFileByServerRelativeUrl(serverRelativeUrl: string): SP.File;
		getFolderByServerRelativeUrl(serverRelativeUrl: string): SP.Folder;
		getEntity(namespace: string, name: string): SP.BusinessData.Entity;
		getAppBdcCatalogForAppInstance(appInstanceId: SP.Guid): SP.BusinessData.AppBdcCatalog;
		getAppBdcCatalog(): SP.BusinessData.AppBdcCatalog;
		getSubwebsForCurrentUser(query: SP.SubwebQuery): SP.WebCollection;
		getAppInstanceById(appInstanceId: SP.Guid): SP.AppInstance;
		getAppInstancesByProductId(productId: SP.Guid): SP.ClientObjectList<SP.AppInstance>;
		loadAndInstallAppInSpecifiedLocale(
		appPackageStream: SP.Base64EncodedByteArray, installationLocaleLCID: number
	): SP.AppInstance;
		loadApp(
		appPackageStream: SP.Base64EncodedByteArray, installationLocaleLCID: number
	): SP.AppInstance;
		loadAndInstallApp(appPackageStream: SP.Base64EncodedByteArray): SP.AppInstance;
		ensureUser(logonName: string): SP.User;
		applyTheme(
		colorPaletteUrl: string, fontSchemeUrl: string, backgroundImageUrl: string, shareGenerated: boolean
	): void;
		getList(url: string): List
	}

	declare export class WebCollection extends SP$ClientObjectCollection<Web> {
		itemAt(index: number): SP.Web;
		get_item(index: number): SP.Web;
		add(parameters: SP.WebCreationInformation): SP.Web
	}

	declare export class WebCreationInformation extends SP$ClientValueObject {
		get_description(): string;
		set_description(value: string): void;
		get_language(): number;
		set_language(value: number): void;
		get_title(): string;
		set_title(value: string): void;
		get_url(): string;
		set_url(value: string): void;
		get_useSamePermissionsAsParentSite(): boolean;
		set_useSamePermissionsAsParentSite(value: boolean): void;
		get_webTemplate(): string;
		set_webTemplate(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class WebInformation extends SP$ClientObject {
		get_configuration(): number;
		get_created(): Date;
		get_description(): string;
		get_id(): SP.Guid;
		get_language(): number;
		get_lastItemModifiedDate(): Date;
		get_serverRelativeUrl(): string;
		get_title(): string;
		get_webTemplate(): string;
		get_webTemplateId(): number
	}

	declare export class WebProxy  {
		invoke(
		context: SP.ClientRuntimeContext, requestInfo: SP.WebRequestInfo
	): SP.WebResponseInfo
	}

	declare export class WebRequestInfo extends SP$ClientValueObject {
		get_body(): string;
		set_body(value: string): void;
		get_headers(): any;
		set_headers(value: any): void;
		get_method(): string;
		set_method(value: string): void;
		get_url(): string;
		set_url(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class WebResponseInfo extends SP$ClientValueObject {
		get_body(): string;
		set_body(value: string): void;
		get_headers(): any;
		set_headers(value: any): void;
		get_statusCode(): number;
		set_statusCode(value: number): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class WebTemplate extends SP$ClientObject {
		get_description(): string;
		get_displayCategory(): string;
		get_id(): number;
		get_imageUrl(): string;
		get_isHidden(): boolean;
		get_isRootWebOnly(): boolean;
		get_isSubWebOnly(): boolean;
		get_lcid(): number;
		get_name(): string;
		get_title(): string
	}

	declare export class WebTemplateCollection extends SP$ClientObjectCollection<WebTemplate> {
		itemAt(index: number): SP.WebTemplate;
		get_item(index: number): SP.WebTemplate;
		getByName(name: string): SP.WebTemplate
	}

	declare export class GanttControl  {
		WaitForGanttCreation(callack: (control: GanttControl) => void): void;
		Instances: GanttControl[];
		FnGanttCreationCallback: {
		(control: GanttControl): void
	}[];
		get_Columns(): SP.JsGrid.ColumnInfo[]
	}

	
}

declare module 'ViewOperation' {
			declare export function getSelectedView(): string

	declare export function navigateUp(viewId: string): void

	declare export function refreshView(viewId: string): void

		
}

declare module 'Selection' {
			declare export function selectListItem(iid: string, bSelect: boolean): void

	declare export function getSelectedItems(): {
		id: number,
		fsObjType: FileSystemObjectType
	}[]

	declare export function getSelectedList(): string

	declare export function getSelectedView(): string

	declare export function navigateUp(viewId: string): void

	declare export function deselectAllListItems(iid: string): void

		
}

declare module 'Overrides' {
			declare export function overrideDeleteConfirmation(listId: string, overrideText: string): void

		
}

declare module 'npm$namespace$SPClientTemplates' {
	declare type RenderCallback = (ctx: RenderContext) => void;

	declare export interface FieldSchema_InForm_Choice {
		Choices: string[],
		FormatType: ChoiceFormatType
	}

	declare export interface FieldSchema_InForm_Lookup {
		AllowMultipleValues: boolean,
		BaseDisplayFormUrl: string,
		DependentLookup: boolean,
		Throttled: boolean,
		MaxQueryResult: string,
		Choices: {
		LookupId: number,
		LookupValue: string
	}[],
		ChoiceCount: number,
		LookupListId: string
	}

	declare export interface FieldSchema_InForm_DateTime {
		CalendarType: DateTimeCalendarType,
		DisplayFormat: DateTimeDisplayFormat,
		ShowWeekNumber: boolean,
		TimeSeparator: string,
		TimeZoneDifference: string,
		FirstDayOfWeek: number,
		FirstWeekOfYear: number,
		HijriAdjustment: number,
		WorkWeek: string,
		LocaleId: string,
		LanguageId: string,
		MinJDay: number,
		MaxJDay: number,
		HoursMode24: boolean,
		HoursOptions: string[]
	}

	declare export interface FieldSchema_InForm_Geolocation {
		BingMapsKey: string,
		IsBingMapBlockedInCurrentRegion: boolean
	}

	declare export interface FieldSchema_InForm_MultiChoice {
		MultiChoices: string[],
		FillInChoice: boolean
	}

	declare export interface FieldSchema_InForm_MultiLineText {
		RichText: boolean,
		AppendOnly: boolean,
		RichTextMode: RichTextMode,
		NumberOfLines: number,
		AllowHyperlink: boolean,
		ScriptEditorAdderId: string
	}

	declare export interface FieldSchema_InForm_Number {
		ShowAsPercentage: boolean
	}

	declare export interface FieldSchema_InForm_Text {
		MaxLength: number
	}

	declare export interface FieldSchema_InForm_Url {
		DisplayFormat: UrlFormatType
	}

	declare export interface FieldSchema_InForm_User {
		Presence: boolean,
		WithPicture: boolean,
		DefaultRender: boolean,
		WithPictureDetail: boolean,
		ListFormUrl: string,
		UserDisplayUrl: string,
		EntitySeparator: string,
		PictureOnly: boolean,
		PictureSize: string
	}

	declare export interface FieldSchema {
		AllowGridEditing: boolean,
		FieldType: string,
		Name: string,
		Type: string
	}

	declare export interface FieldSchema_InForm {
		Description: string,
		Direction: string,
		Hidden: boolean,
		Id: string,
		IMEMode: any,
		ReadOnlyField: boolean,
		Required: boolean,
		RestrictedMode: boolean,
		Title: string,
		UseMinWidth: boolean
	}

	declare export interface ListSchema {
		Field: FieldSchema[]
	}

	declare export interface ListSchema_InForm {
		Field: FieldSchema_InForm[]
	}

	declare export interface ListData_InForm {
		Items: Item[]
	}

	declare export interface RenderContext_FieldInForm {
		CurrentGroupIdx: number,
		CurrentGroup: Group,
		CurrentItems: Item[],
		CurrentFieldSchema: FieldSchema_InForm,
		CurrentFieldValue: any
	}

	declare export interface RenderContext_Form {
		CurrentItem: Item,
		FieldControlModes: {
		[fieldInternalName: string]: ClientControlMode
	},
		FormContext: ClientFormContext,
		FormUniqueId: string,
		ListData: ListData_InForm,
		ListSchema: ListSchema_InForm,
		CSRCustomLayout?: boolean
	}

	declare export interface FieldSchema_InView_LookupField {
		AllowMultipleValues: string,
		DispFormUrl: string,
		HasPrefix: string
	}

	declare export interface FieldSchema_InView_UserField {
		AllowMultipleValues: string,
		ImnHeader: string,
		HasPrefix: string,
		HasUserLink: string,
		DefaultRender: string
	}

	declare export interface FieldSchema_InView {
		CalloutMenu: string,
		ClassInfo: string,
		css: string,
		DisplayName: string,
		Explicit: string,
		fieldRenderer: any,
		FieldTitle: string,
		Filterable: string,
		GroupField: string,
		GridActiveAndReadOnly: string,
		ID: string,
		listItemMenu: string,
		RealFieldName: string,
		ReadOnly: string,
		ResultType: string,
		Sortable: string
	}

	declare export interface ListSchema_InView {
		Aggregate: {
		[name: string]: string
	},
		Collapse: string,
		DefaultItemOpen: string,
		Direction: string,
		EffectivePresenceEnabled: string,
		FieldSortParam: string,
		Filter: any,
		ForceCheckout: string,
		group1: string,
		group2: string,
		HasTitle: string,
		HttpVDir: string,
		InplaceSearchEnabled: string,
		IsDocLib: string,
		LCID: string,
		ListRight_AddListItems: string,
		NoListItem: string,
		NoListItemHowTo: string,
		PagePath: string,
		ParentHierarchyDisplayField: string,
		PresenceAlt: string,
		PropertyBag: {
		[key: string]: string
	},
		RenderSaveAsNewViewButton: string,
		RenderViewSelectorPivotMenu: string,
		RenderViewSelectorPivotMenuAsync: string,
		RootFolderParam: string,
		SelectedID: string,
		ShowWebPart: string,
		StrikeThroughOnCompletedEnabled: string,
		TabularView: string,
		Toolbar: string,
		UIVersion: string,
		Userid: string,
		UserVanilla: any,
		UserDispUrl: string,
		UseParentHierarchy: string,
		View: string,
		ViewSelectorPivotMenuOptions: string,
		ViewSelector_ViewParameters: string
	}

	declare export interface ListData_InView {
		FilterLink: string,
		FilterFields: string,
		FirstRow: number,
		ForceNoHierarchy: string,
		HierarchyHasIndention: string,
		PrevHref: string,
		NextHref: string,
		SortField: string,
		SortDir: string,
		LastRow: number,
		Row: Item[]
	}

	declare export interface RenderContext_GroupInView {
		CurrentGroupIdx: number,
		CurrentGroup: Group,
		CurrentItems: Item[]
	}

	declare export interface RenderContext_InView {
		AllowCreateFolder: boolean,
		AllowGridMode: boolean,
		BasePermissions: {
		[PermissionName: string]: boolean
	},
		bInitialRender: boolean,
		CanShareLinkForNewDocument: boolean,
		CascadeDeleteWarningMessage: string,
		clvp: HTMLElement,
		ContentTypesEnabled: boolean,
		ctxId: number,
		ctxType: any,
		CurrentUserId: number,
		CurrentUserIsSiteAdmin: boolean,
		dictSel: any,
		displayFormUrl: string,
		editFormUrl: string,
		EnableMinorVersions: boolean,
		ExternalDataList: boolean,
		enteringGridMode: boolean,
		existingServerFilterHash: any,
		HasRelatedCascadeLists: number,
		heroId: string,
		HttpPath: string,
		HttpRoot: string,
		imagesPath: string,
		inGridFullRender: any,
		inGridMode: boolean,
		IsAppWeb: boolean,
		IsClientRendering: boolean,
		isForceCheckout: boolean,
		isModerated: boolean,
		isPortalTemplate: any,
		isWebEditorPreview: number,
		isVersions: number,
		isXslView: boolean,
		LastRowIndexSelected: any,
		LastSelectableRowIdx: any,
		LastSelectedItemId: any,
		leavingGridMode: boolean,
		listBaseType: number,
		ListData: ListData_InView,
		ListDataJSONItemsKey: string,
		listName: string,
		ListSchema: ListSchema_InView,
		listTemplate: string,
		ListTitle: string,
		listUrlDir: string,
		loadingAsyncData: boolean,
		ModerationStatus: number,
		NavigateForFormsPages: boolean,
		newFormUrl: string,
		NewWOPIDocumentEnabled: any,
		NewWOPIDocumentUrl: any,
		noGroupCollapse: boolean,
		OfficialFileName: string,
		OfficialFileNames: string,
		overrideDeleteConfirmation: string,
		overrideFilterQstring: string,
		PortalUrl: string,
		queryString: any,
		recursiveView: boolean,
		RecycleBinEnabled: number,
		RegionalSettingsTimeZoneBias: string,
		rootFolder: string,
		rootFolderForDisplay: any,
		RowFocusTimerID: any,
		SelectAllCbx: any,
		SendToLocationName: string,
		SendToLocationUrl: string,
		serverUrl: any,
		SiteTitle: string,
		StateInitDone: boolean,
		TableCbxFocusHandler: any,
		TableMouseOverHandler: any,
		TotalListItems: number,
		verEnabled: number,
		view: string,
		viewTitle: string,
		WorkflowAssociated: boolean,
		wpq: string,
		WriteSecurity: string
	}

	declare export interface RenderContext_ItemInView {
		CurrentItem: Item,
		CurrentItemIdx: number
	}

	declare export interface RenderContext_FieldInView {
		CurrentFieldSchema: FieldSchema_InForm | FieldSchema_InView,
		CurrentFieldValue: any,
		FieldControlsModes: {
		[fieldInternalName: string]: ClientControlMode
	},
		FormContext: ClientFormContext,
		FormUniqueId: string
	}

	declare export interface Item {
		[fieldInternalName: string]: any
	}

	declare export interface Group {
		Items: Item[]
	}

	declare export interface RenderContext {
		BaseViewID?: number,
		ControlMode?: ClientControlMode,
		CurrentCultureName?: string,
		CurrentLanguage?: number,
		CurrentSelectedItems?: any,
		CurrentUICultureName?: string,
		ListTemplateType?: number,
		OnPostRender?: RenderCallback | RenderCallback[],
		OnPreRender?: RenderCallback | RenderCallback[],
		onRefreshFailed?: any,
		RenderBody?: (renderContext: RenderContext) => string,
		RenderFieldByName?: (renderContext: RenderContext, fieldName: string) => string,
		RenderFields?: (renderContext: RenderContext) => string,
		RenderFooter?: (renderContext: RenderContext) => string,
		RenderGroups?: (renderContext: RenderContext) => string,
		RenderHeader?: (renderContext: RenderContext) => string,
		RenderItems?: (renderContext: RenderContext) => string,
		RenderView?: (renderContext: RenderContext) => string,
		SiteClientTag?: string,
		Templates?: Templates
	}

	declare export interface SingleTemplateCallback {
		(renderContext: RenderContext_InView): string
	}

	declare export interface GroupCallback {
		(renderContext: RenderContext_GroupInView): string
	}

	declare export interface ItemCallback {
		(renderContext: RenderContext): string
	}

	declare export interface FieldCallback {
		(renderContext: RenderContext): string
	}

	declare export interface FieldInFormCallback {
		(renderContext: RenderContext_FieldInForm): string
	}

	declare export interface FieldInViewCallback {
		(renderContext: RenderContext_FieldInView): string
	}

	declare export interface FieldTemplateOverrides {
		DisplayForm?: FieldInFormCallback,
		EditForm?: FieldInFormCallback,
		NewForm?: FieldInFormCallback,
		View?: FieldInViewCallback
	}

	declare export interface FieldTemplates {
		[fieldInternalName: string]: FieldCallback
	}

	declare export interface Templates {
		View?: RenderCallback | string,
		Body?: RenderCallback | string,
		Group?: GroupCallback | string,
		Item?: ItemCallback | string,
		Header?: SingleTemplateCallback | string,
		Footer?: SingleTemplateCallback | string,
		Fields?: FieldTemplates
	}

	declare export interface FieldTemplateMap {
		[fieldInternalName: string]: FieldTemplateOverrides
	}

	declare export interface TemplateOverrides {
		View?: RenderCallback | string,
		Body?: RenderCallback | string,
		Group?: GroupCallback | string,
		Item?: ItemCallback | string,
		Header?: SingleTemplateCallback | string,
		Footer?: SingleTemplateCallback | string,
		Fields?: FieldTemplateMap
	}

	declare export interface TemplateOverridesOptions {
		Templates?: TemplateOverrides,
		OnPreRender?: RenderCallback | RenderCallback[],
		OnPostRender?: RenderCallback | RenderCallback[],
		ViewStyle?: number,
		ListTemplateType?: number,
		BaseViewID?: number | string
	}

	declare export interface ClientUserValue {
		lookupId: number,
		lookupValue: string,
		displayStr: string,
		email: string,
		sip: string,
		title: string,
		picture: string,
		department: string,
		jobTitle: string
	}

	declare export interface ClientLookupValue {
		LookupId: number,
		LookupValue: string
	}

	declare export interface ClientUrlValue {
		URL: string,
		Description: string
	}

		declare export class TemplateManager  {
		RegisterTemplateOverrides(renderCtx: TemplateOverridesOptions): void;
		GetTemplates(renderCtx: RenderContext): Templates
	}

	declare export class Utility  {
		ComputeRegisterTypeInfo(renderCtx: TemplateOverridesOptions): any;
		ControlModeToString(mode: SPClientTemplates.ClientControlMode): string;
		FileSystemObjectTypeToString(fileSystemObjectType: SPClientTemplates.FileSystemObjectType): string;
		ChoiceFormatTypeToString(fileSystemObjectType: SPClientTemplates.ChoiceFormatType): string;
		RichTextModeToString(fileSystemObjectType: SPClientTemplates.RichTextMode): string;
		IsValidControlMode(mode: number): boolean;
		Trim(str: string): string;
		InitContext(webUrl: string): SP.ClientContext;
		GetControlOptions(control: HTMLElement): any;
		TryParseInitialUserValue(userStr: string): ClientUserValue[];
		TryParseUserControlValue(userStr: string, separator: string): any[];
		GetPropertiesFromPageContextInfo(context: RenderContext): void;
		ReplaceUrlTokens(tokenUrl: string): string;
		ParseLookupValue(valueStr: string): ClientLookupValue;
		ParseMultiLookupValues(valueStr: string): ClientLookupValue[];
		BuildLookupValuesAsString(
		choiceArray: ClientLookupValue[], isMultiLookup: boolean, setGroupDesc: boolean
	): string;
		ParseURLValue(value: string): ClientUrlValue;
		GetFormContextForCurrentField(context: RenderContext_Form): ClientFormContext;
		UserLookupDelimitString: string;
		UserMultiValueDelimitString: string
	}

	declare export class ClientFormContext  {
		fieldValue: any;
		fieldSchema: SPClientTemplates.FieldSchema_InForm;
		fieldName: string;
		controlMode: number;
		webAttributes: {
		AllowScriptableWebParts: boolean,
		CurrentUserId: number,
		EffectivePresenceEnabled: boolean,
		LCID: string,
		PermissionCustomizePages: boolean,
		WebUrl: string
	};
		itemAttributes: {
		ExternalListItem: boolean,
		FsObjType: number,
		Id: number,
		Url: string
	};
		listAttributes: {
		BaseType: number,
		DefaultItemOpen: number,
		Direction: string,
		EnableVesioning: boolean,
		Id: string
	};
		registerInitCallback(fieldname: string, callback: () => void): void;
		registerFocusCallback(fieldname: string, callback: () => void): void;
		registerValidationErrorCallback(fieldname: string, callback: (error: any) => void): void;
		registerGetValueCallback(fieldname: string, callback: () => any): void;
		updateControlValue(fieldname: string, value: any): void;
		registerClientValidator(
		fieldname: string, validator: SPClientForms.ClientValidation.ValidatorSet
	): void;
		registerHasValueChangedCallback(fieldname: string, callback: (eventArg?: any) => void): void
	}

	
}

declare module 'ClientValidation' {
		declare export interface IValidator {
		Validate(value: any): ValidationResult
	}

		declare export class ValidationResult  {
		constructor(hasErrors: boolean, errorMsg: string): this
	}

	declare export class ValidatorSet  {
		RegisterValidator(validator: IValidator): void
	}

	declare export class RequiredValidator extends IValidator {
		Validate(value: any): ValidationResult
	}

	declare export class RequiredFileValidator extends IValidator {
		Validate(value: any): ValidationResult
	}

	declare export class RequiredRichTextValidator extends IValidator {
		Validate(value: any): ValidationResult
	}

	declare export class MaxLengthUrlValidator extends IValidator {
		Validate(value: any): ValidationResult
	}

	
}

declare module 'npm$namespace$SPClientForms' {
				declare export class ClientForm  {
		constructor(qualifier: string): this;
		RenderClientForm(): void;
		SubmitClientForm(): boolean;
		NotifyControlEvent(eventName: FormManagerEvents, fldName: string, eventArg: any): void
	}

	declare export class ClientFormManager  {
		GetClientForm(qualifier: string): ClientForm;
		RegisterClientForm(qualifier: string): void;
		SubmitClientForm(qualifier: string): boolean
	}

	
}

declare module 'npm$namespace$SPAnimation' {
				declare export class Settings  {
		DisableAnimation(): void;
		DisableSessionAnimation(): void;
		IsAnimationEnabled(): boolean
	}

	declare export class State  {
		SetAttribute(attributeId: Attribute, value: number): void;
		GetAttribute(attributeId: Attribute): number;
		GetDataIndex(attributeId: Attribute): number
	}

	declare export class Object  {
		constructor(animationID: ID, delay: number, element: HTMLElement, finalState: State, finishFunc?: (data: any) => void, data?: any): this;
		constructor(animationID: ID, delay: number, element: HTMLElement[], finalState: State, finishFunc?: (data: any) => void, data?: any): this;
		RunAnimation(): void
	}

	
}

declare module 'npm$namespace$SPAnimationUtility' {
				declare export class BasicAnimator  {
		FadeIn(element: HTMLElement, finishFunc?: (data: any) => void, data?: any): void;
		FadeOut(element: HTMLElement, finishFunc?: (data: any) => void, data?: any): void;
		Move(
		element: HTMLElement, posX: number, posY: number, finishFunc?: (data: any) => void, data?: any
	): void;
		StrikeThrough(
		element: HTMLElement, strikeThroughWidth: number, finishFunc?: (data: any) => void, data?: any
	): void;
		Resize(
		element: HTMLElement, newHeight: number, newWidth: number, finishFunc?: (data: any) => void, data?: any
	): void;
		CommonResize(
		element: HTMLElement, newHeight: number, newWidth: number, finishFunc: (data: any) => void, data: any, animationId: SPAnimation.ID
	): void;
		QuickResize(
		element: HTMLElement, newHeight: number, newWidth: number, finishFunc?: (data: any) => void, data?: any
	): void;
		ResizeContainerAndFillContent(
		element: HTMLElement, newHeight: number, newWidth: number, finishFunc: () => void, fAddToEnd: boolean
	): void;
		GetWindowScrollPosition(): {
		x: number,
		y: number
	};
		GetLeftOffset(element: HTMLElement): number;
		GetTopOffset(element: HTMLElement): number;
		GetRightOffset(element: HTMLElement): number;
		PositionElement(
		element: HTMLElement, topValue: number, leftValue: number, heightValue: number, widthValue: number
	): void;
		PositionAbsolute(element: HTMLElement): void;
		PositionRelative(element: HTMLElement): void;
		PositionRelativeExact(
		element: HTMLElement, topValue: number, leftValue: number, heightValue: number, widthValue: number
	): void;
		PositionAbsoluteExact(
		element: HTMLElement, topValue: number, leftValue: number, heightValue: number, widthValue: number
	): void;
		IsPositioned(element: HTMLElement): boolean
	}

	
}

declare module 'UI' {
		declare export interface DefaultFormsInformationRequestor {
		onDefaultFormsInformationRetrieveSuccess(defaultForms: SP.Application.UI.DefaultFormsInformation): void,
		onDefaultFormsInformationRetrieveFailure(): void
	}

	declare export interface ViewInformationRequestor {
		onViewInformationReturned(viewGroups: SP.Application.UI.ViewSelectorGroups): void
	}

	declare export interface DialogReturnValueCallback {
		(dialogResult: DialogResult, returnValue: any): void
	}

	declare export interface IDialogOptions {
		title?: string,
		x?: number,
		y?: number,
		showMaximized?: boolean,
		url?: string,
		showClose?: boolean,
		allowMaximize?: boolean,
		dialogReturnValueCallback?: DialogReturnValueCallback,
		autoSize?: boolean,
		autoSizeStartWidth?: number,
		includeScrollBarPadding?: boolean,
		width?: number,
		height?: number,
		html?: HTMLElement,
		args?: any
	}

	declare export function $create_DialogOptions(): DialogOptions

	declare export class FormsInfo  {
		ContentTypeName: string;
		NewFormUrl: string;
		DisplayFormUrl: string;
		EditFormUrl: string;
		constructor(): this
	}

	declare export class DefaultFormsInformation  {
		DefaultForms: SP.Application.UI.FormsInfo;
		OtherForms: any;
		constructor(): this
	}

	declare export class DefaultFormsMenuBuilder  {
		getDefaultFormsInformation(
		requestor: SP.Application.UI.DefaultFormsInformationRequestor, listId: SP.Guid
	): void
	}

	declare export class ViewSelectorMenuOptions  {
		showRepairView: boolean;
		showMergeView: boolean;
		showEditView: boolean;
		showCreateView: boolean;
		showApproverView: boolean;
		listId: string;
		viewId: string;
		viewParameters: string;
		constructor(): this
	}

	declare export class ViewSelectorGroups  {
		ModeratedViews: any;
		PublicViews: any;
		PersonalViews: any;
		OtherViews: any;
		DefaultView: SP.Application.UI.ViewSelectorMenuItem;
		ViewCreation: any;
		constructor(): this
	}

	declare export class ViewSelectorMenuItem  {
		Text: string;
		ActionScriptText: string;
		NavigateUrl: string;
		ImageSourceUrl: string;
		Description: string;
		Id: string;
		Sequence: number;
		ItemType: string;
		GroupId: number;
		constructor(): this
	}

	declare export class ViewSelectorSubMenu  {
		Text: string;
		ImageSourceUrl: string;
		SubMenuItems: any;
		constructor(): this
	}

	declare export class ViewSelectorMenuBuilder  {
		get_filterMenuItemsCallback(): (menuItems: any) => any;
		set_filterMenuItemsCallback(value: (menuItems: any) => any): void;
		showMenu(elem: HTMLElement, options: SP.Application.UI.ViewSelectorMenuOptions): void;
		getViewInformation(
		requestor: SP.Application.UI.ViewInformationRequestor, options: SP.Application.UI.ViewSelectorMenuOptions
	): void
	}

	declare export class MoreColorsPicker extends undefined$Control {
		constructor(e: HTMLElement): this;
		initialize(): void;
		dispose(): void;
		get_colorValue(): string;
		set_colorValue(value: string): void
	}

	declare export class MoreColorsPage extends undefined$Control {
		constructor(e: HTMLElement): this;
		initialize(): void;
		dispose(): void;
		get_moreColorsPicker(): SP.Application.UI.MoreColorsPicker;
		set_moreColorsPicker(value: SP.Application.UI.MoreColorsPicker): void
	}

	declare export class ThemeWebPage extends undefined$Control {
		add_themeDisplayUpdated(value: (sender: any, e: Sys.EventArgs) => void): void;
		remove_themeDisplayUpdated(value: (sender: any, e: Sys.EventArgs) => void): void;
		constructor(e: HTMLElement): this;
		initialize(): void;
		dispose(): void;
		onThemeSelectionChanged(evt: Sys.UI.DomEvent): void;
		updateThemeDisplay(): void;
		get_thmxThemes(): any;
		set_thmxThemes(value: any): void
	}

	declare export class WikiPageNameInPlaceEditor  {
		constructor(ownerDoc: any, displayElemId: string, editElemId: string, editTextBoxId: string): this;
		editingPageCallback(): void;
		savingPageCallback(): void
	}

	declare export class PopoutMenu extends Sys$IDisposable {
		constructor(launcherId: string, menuId: string, iconId: string, launcherOpenCssClass: string, textDirection: string, closeIconUrl: string, isClustered: boolean, closeIconOffsetLeft: number, closeIconOffsetTop: number, closeIconHeight: number, closeIconWidth: number): this;
		launchMenu(): void;
		closeMenu(): void;
		createPopoutMenuInstanceAndLaunch(
		anchorId: string, menuId: string, iconId: string, anchorOpenCss: string, textDirection: string, closeIconUrl: string, isClustered: boolean, x: number, y: number, height: number, width: number
	): void;
		closeActivePopoutMenuInstance(): void;
		dispose(): void
	}

	declare export class AttractModeControl extends undefined$Control {
		defaultAttractModeIcon: string;
		cssAttractMode: string;
		cssAttractModeBackground: string;
		cssAttractModeCell: string;
		cssAttractModeWrapper: string;
		cssAttractModeIcon: string;
		cssAttractModeText: string;
		get_imageElement(): any;
		get_textElement(): HTMLElement;
		constructor(): this
	}

	declare export class Status  {
		addStatus(strTitle: string, strHtml?: string, atBegining?: boolean): string;
		appendStatus(sid: string, strTitle: string, strHtml: string): string;
		updateStatus(sid: string, strHtml: string): void;
		setStatusPriColor(sid: string, strColor: string): void;
		removeStatus(sid: string): void;
		removeAllStatus(hide: boolean): void;
		constructor(): this
	}

	declare export class Menu  {
		create(id: string): SP.UI.Menu;
		addMenuItem(
		text: string, actionScriptText: string, imageSourceUrl: string, imageAlternateText: string, sequenceNumber: number, description: string, id: string
	): HTMLElement;
		addSeparator(): void;
		addSubMenu(
		text: string, imageSourceUrl: string, imageAlternateText: string, sequenceNumber: number, description: string, id: string
	): SP.UI.Menu;
		show(
		relativeElement: HTMLElement, forceRefresh: boolean, flipTopLevelMenu: boolean, yOffset: number
	): void;
		showFilterMenu(
		relativeElement: HTMLElement, forceRefresh: boolean, flipTopLevelMenu: boolean, yOffset: number, fShowClose: boolean, fShowCheckBoxes: boolean
	): void;
		hideIcons(): void;
		showIcons(): void
	}

	declare export class MenuTest  {
		setup(relativeElement: HTMLElement): void;
		constructor(): this
	}

	declare export class DialogOptions extends IDialogOptions {
		title: string;
		x: number;
		y: number;
		showMaximized: boolean;
		url: string;
		showClose: boolean;
		allowMaximize: boolean;
		dialogReturnValueCallback: DialogReturnValueCallback;
		autoSize: boolean;
		autoSizeStartWidth: number;
		includeScrollBarPadding: boolean;
		width: number;
		height: number;
		html: HTMLElement;
		args: any
	}

	declare export class Dialog  {
		get_firstTabStop(): HTMLElement;
		get_lastTabStop(): HTMLElement;
		get_url(): string;
		get_html(): string;
		get_title(): string;
		get_args(): any;
		get_allowMaximize(): boolean;
		get_showClose(): boolean;
		get_returnValue(): any;
		set_returnValue(value: any): void;
		get_frameElement(): HTMLFrameElement;
		get_dialogElement(): HTMLElement;
		get_isMaximized(): boolean;
		get_closed(): boolean;
		autoSizeSuppressScrollbar(resizePageCallBack: any): void;
		autoSize(): void
	}

	declare export class ModalDialog extends undefined$Dialog {
		showModalDialog(options: SP.UI.IDialogOptions): SP.UI.ModalDialog;
		commonModalDialogClose(dialogResult: SP.UI.DialogResult, returnValue: any): void;
		commonModalDialogOpen(
		url: string, options: SP.UI.IDialogOptions, callback?: SP.UI.DialogReturnValueCallback, args?: any
	): void;
		RefreshPage(dialogResult: SP.UI.DialogResult): void;
		ShowPopupDialog(url: string): void;
		OpenPopUpPage(
		url: string, callback: SP.UI.DialogReturnValueCallback, width?: number, height?: number
	): void;
		showWaitScreenWithNoClose(
		title: string, message?: string, height?: number, width?: number
	): SP.UI.ModalDialog;
		showWaitScreenSize(
		title: string, message?: string, callbackFunc?: SP.UI.DialogReturnValueCallback, height?: number, width?: number
	): SP.UI.ModalDialog;
		showPlatformFirstRunDialog(url: string, callbackFunc: SP.UI.DialogReturnValueCallback): SP.UI.ModalDialog;
		get_childDialog(): SP.UI.ModalDialog;
		close(dialogResult: SP.UI.DialogResult): void
	}

	declare export class Command  {
		constructor(name: string, displayName: string): this;
		get_displayName(): string;
		set_displayName(value: string): string;
		get_tooltip(): string;
		set_tooltip(value: string): string;
		get_isEnabled(): boolean;
		set_isEnabled(value: boolean): boolean;
		get_href(): string;
		get_name(): string;
		get_elementIDPrefix(): string;
		set_elementIDPrefix(value: string): string;
		get_linkElement(): HTMLAnchorElement;
		get_isDropDownCommand(): boolean;
		set_isDropDownCommand(value: boolean): boolean;
		attachEvents(): void;
		render(builder: HtmlBuilder): void;
		onClick(): void
	}

	declare export class CommandBar  {
		constructor(): this;
		get_commands(): Command[];
		get_dropDownThreshold(): number;
		set_dropDownThreshold(value: number): number;
		get_elementID(): string;
		get_overrideClass(): string;
		set_overrideClass(value: string): string;
		addCommand(action: Command): void;
		insertCommand(action: Command, position: number): void;
		render(builder: HtmlBuilder): void;
		attachEvents(): void;
		findCommandByName(name: string): Command
	}

	declare export class PagingControl  {
		constructor(id: string): this;
		render(innerContent: string): string;
		postRender(): void;
		get_innerContent(): HTMLSpanElement;
		get_innerContentClass(): string;
		setButtonState(buttonId: number, state: number): void;
		getButtonState(buttonId: number): number;
		onWindowResized(): void;
		onPrev(): void;
		onNext(): void;
		ButtonIDs: {
		prev: number,
		next: number
	};
		ButtonState: {
		hidden: number,
		disabled: number,
		enabled: number
	}
	}

	
}

declare module 'Analytics' {
				declare export class AnalyticsUsageEntry extends SP$ClientObject {
		logAnalyticsEvent(context: SP.ClientRuntimeContext, eventTypeId: number, itemId: string): void;
		logAnalyticsEvent2(
		context: SP.ClientRuntimeContext, eventTypeId: number, itemId: string, rollupScopeId: SP.Guid, siteId: SP.Guid, userId: string
	): void;
		logAnalyticsAppEvent(
		context: SP.ClientRuntimeContext, appEventTypeId: SP.Guid, itemId: string
	): void;
		logAnalyticsAppEvent2(
		context: SP.ClientRuntimeContext, appEventTypeId: SP.Guid, itemId: string, rollupScopeId: SP.Guid, siteId: SP.Guid, userId: string
	): void
	}

	declare export class AnalyticsItemData extends SP$ClientObject {
		get_lastProcessingTime: () => Date;
		get_totalHits: () => number;
		get_totalUniqueUsers: () => number;
		getHitCountForDay: (day: Date) => number;
		getUniqueUsersCountForDay: (day: Date) => number;
		getHitCountForMonth: (day: Date) => number;
		getUniqueUsersCountForMonth: (day: Date) => number
	}

	declare export class UsageAnalytics extends SP$ClientObject {
		getAnalyticsItemData: (eventType: number, listItem: SP.ListItem) => AnalyticsItemData;
		getAnalyticsItemDataForApplicationEventType: (appEventType: SP.Guid, listItem: SP.ListItem) => AnalyticsItemData;
		deleteStandardEventUsageData: (eventType: number) => void;
		deleteCustomEventUsageData: (appEventTypeId: SP.Guid) => void
	}

	
}

declare module 'SiteHealth' {
				declare export class SiteHealthResult extends SP$ClientValueObject {
		get_messageAsText(): string;
		get_ruleHelpLink(): string;
		get_ruleId(): SP.Guid;
		get_ruleIsRepairable(): boolean;
		get_ruleName(): string;
		get_status(): SP.SiteHealth.SiteHealthStatusType;
		set_status(value: SP.SiteHealth.SiteHealthStatusType): void;
		get_timeStamp(): Date;
		set_timeStamp(value: Date): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class SiteHealthSummary extends SP$ClientObject {
		get_failedErrorCount(): number;
		get_failedWarningCount(): number;
		get_passedCount(): number;
		get_results(): SP.SiteHealth.SiteHealthResult[]
	}

	
}

declare module 'Query' {
				declare export class Query extends SP$ClientObject {
		get_blockDedupeMode: () => number;
		set_blockDedupeMode: (value: number) => void;
		get_bypassResultTypes: () => boolean;
		set_bypassResultTypes: (value: boolean) => void;
		get_clientType: () => string;
		set_clientType: (value: string) => void;
		get_culture: () => number;
		set_culture: (value: number) => void;
		get_desiredSnippetLength: () => number;
		set_desiredSnippetLength: (value: number) => void;
		get_enableInterleaving: () => boolean;
		set_enableInterleaving: (value: boolean) => void;
		get_enableNicknames: () => boolean;
		set_enableNicknames: (value: boolean) => void;
		get_enableOrderingHitHighlightedProperty: () => boolean;
		set_enableOrderingHitHighlightedProperty: (value: boolean) => void;
		get_enablePhonetic: () => boolean;
		set_enablePhonetic: (value: boolean) => void;
		get_enableQueryRules: () => boolean;
		set_enableQueryRules: (value: boolean) => void;
		get_enableStemming: () => boolean;
		set_enableStemming: (value: boolean) => void;
		get_generateBlockRankLog: () => boolean;
		set_generateBlockRankLog: (value: boolean) => void;
		get_hitHighlightedMultivaluePropertyLimit: () => number;
		set_hitHighlightedMultivaluePropertyLimit: (value: number) => void;
		get_hitHighlightedProperties: () => StringCollection;
		get_ignoreSafeQueryPropertiesTemplateUrl: () => boolean;
		set_ignoreSafeQueryPropertiesTemplateUrl: (value: boolean) => void;
		get_impressionID: () => string;
		set_impressionID: (value: string) => void;
		get_maxSnippetLength: () => number;
		set_maxSnippetLength: (value: number) => void;
		get_personalizationData: () => QueryPersonalizationData;
		set_personalizationData: (value: QueryPersonalizationData) => void;
		get_processBestBets: () => boolean;
		set_processBestBets: (value: boolean) => void;
		get_processPersonalFavorites: () => boolean;
		set_processPersonalFavorites: (value: boolean) => void;
		get_queryTag: () => string;
		set_queryTag: (value: string) => void;
		get_queryTemplate: () => string;
		set_queryTemplate: (value: string) => void;
		get_queryTemplateParameters: () => {
		[key: string]: boolean
	};
		get_queryText: () => string;
		set_queryText: (value: string) => void;
		get_rankingModelId: () => string;
		set_rankingModelId: (value: string) => void;
		get_resultsUrl: () => string;
		set_resultsUrl: (value: string) => void;
		get_rowLimit: () => number;
		set_rowLimit: (value: number) => void;
		get_rowsPerPage: () => number;
		set_rowsPerPage: (value: number) => void;
		get_safeQueryPropertiesTemplateUrl: () => string;
		set_safeQueryPropertiesTemplateUrl: (value: string) => void;
		get_showPeopleNameSuggestions: () => boolean;
		set_showPeopleNameSuggestions: (value: boolean) => void;
		get_sourceId: () => SP.Guid;
		set_sourceId: (value: SP.Guid) => void;
		get_startRow: () => number;
		set_startRow: (value: number) => void;
		get_summaryLength: () => number;
		set_summaryLength: (value: number) => void;
		get_timeout: () => number;
		set_timeout: (value: number) => void;
		get_totalRowsExactMinimum: () => number;
		set_totalRowsExactMinimum: (value: number) => void;
		get_trimDuplicates: () => boolean;
		set_trimDuplicates: (value: boolean) => void;
		get_uiLanguage: () => number;
		set_uiLanguage: (value: number) => void;
		getQuerySuggestionsWithResults: (
		iNumberOfQuerySuggestions: number, iNumberOfResultSuggestions: number, fPreQuerySuggestions: boolean, fHitHighlighting: boolean, fCapitalizeFirstLetters: boolean, fPrefixMatchAllTerms: boolean
	) => QuerySuggestionResults
	}

	declare export class KeywordQuery extends Query {
		constructor(context: SP.ClientContext): this;
		get_collapseSpecification: () => string;
		set_collapseSpecification: (value: string) => void;
		get_enableSorting: () => boolean;
		set_enableSorting: (value: boolean) => void;
		get_hiddenConstraints: () => string;
		set_hiddenConstraints: (value: string) => void;
		get_properties: () => KeywordQueryProperties;
		get_refinementFilters: () => StringCollection;
		set_refinementFilters: (value: StringCollection) => void;
		get_refiners: () => string;
		set_refiners: (value: string) => void;
		get_reorderingRules: () => ReorderingRuleCollection;
		set_reorderingRules: (value: ReorderingRuleCollection) => void;
		get_selectProperties: () => StringCollection;
		get_sortList: () => SortCollection;
		get_trimDuplicatesIncludeId: () => number;
		set_trimDuplicatesIncludeId: (value: number) => void
	}

	declare export class SearchExecutor extends SP$ClientObject {
		constructor(context: SP.ClientContext): this;
		executeQuery: (query: Query) => SP.JsonObjectResult;
		executeQueries: (
		queryIds: string[], queries: Query[], handleExceptions: boolean
	) => SP.JsonObjectResult;
		recordPageClick: (
		pageInfo: string, clickType: string, blockType: number, clickedResultId: string, subResultIndex: number, immediacySourceId: string, immediacyQueryString: string, immediacyTitle: string, immediacyUrl: string
	) => void;
		exportPopularQueries: (web: SP.Web, sourceId: SP.Guid) => SP.JsonObjectResult
	}

	declare export class StringCollection extends SP$ClientObjectCollection<string> {
		constructor(context: SP.ClientContext): this;
		itemAt: (index: number) => string;
		get_item: (index: number) => string;
		get_childItemType: () => Object;
		add: (property: string) => void;
		clear: () => void
	}

	declare export class QueryPersonalizationData extends SP$ClientObject {
		
	}

	declare export class QuerySuggestionResults extends SP$ClientValueObject {
		get_peopleNames: () => string[];
		set_peopleNames: (value: string[]) => void;
		get_personalResults: () => PersonalResultSuggestion[];
		set_personalResults: (value: PersonalResultSuggestion[]) => void;
		get_queries: () => QuerySuggestionQuery[];
		set_queries: (value: QuerySuggestionQuery[]) => void
	}

	declare export class PersonalResultSuggestion extends SP$ClientValueObject {
		get_highlightedTitle: () => string;
		set_highlightedTitle: (value: string) => void;
		get_isBestBet: () => boolean;
		set_isBestBet: (value: boolean) => void;
		get_title: () => string;
		set_title: (value: string) => void;
		get_url: () => string;
		set_url: (value: string) => void
	}

	declare export class QuerySuggestionQuery extends SP$ClientValueObject {
		get_isPersonal: () => boolean;
		set_isPersonal: (value: boolean) => void;
		get_query: () => string;
		set_query: (value: string) => void
	}

	declare export class KeywordQueryProperties extends SP$ClientObject {
		get_item: (key: string) => any;
		set_item: (key: string, value: any) => void;
		setQueryPropertyValue: (name: string) => QueryPropertyValue;
		getQueryPropertyValue: (name: string, value: QueryPropertyValue) => void
	}

	declare export class QueryPropertyValue extends SP$ClientValueObject {
		get_boolVal: () => boolean;
		set_boolVal: (value: boolean) => boolean;
		get_intVal: () => number;
		set_intVal: (value: number) => number;
		get_queryPropertyValueTypeIndex: () => number;
		set_queryPropertyValueTypeIndex: (value: number) => void;
		get_strArray: () => string[];
		set_strArray: (value: string[]) => string[];
		get_strVal: () => string;
		set_strVal: (value: string) => string
	}

	declare export class QueryUtility  {
		create: (name: string, val: any) => QueryPropertyValue;
		getQueryPropertyValueType: (val: QueryPropertyValue) => QueryPropertyValueType;
		queryPropertyValueToObject: (val: QueryPropertyValue) => any
	}

	declare export class ReorderingRuleCollection extends SP$ClientObjectCollection<ReorderingRule> {
		itemAt: (index: number) => ReorderingRule;
		get_item: (index: number) => ReorderingRule;
		get_childItemType: () => Object;
		add: (property: ReorderingRule) => void;
		clear: () => void
	}

	declare export class ReorderingRule extends SP$ClientValueObject {
		get_boost: () => number;
		set_boost: (value: number) => void;
		get_matchType: () => ReorderingRuleMatchType;
		set_matchType: (value: ReorderingRuleMatchType) => void;
		get_matchValue: () => string;
		set_matchValue: (value: string) => void
	}

	declare export class SortCollection extends SP$ClientObjectCollection<Sort> {
		itemAt: (index: number) => Sort;
		get_item: (index: number) => Sort;
		get_childItemType: () => Object;
		add: (strProperty: string, sortDirection: SortDirection) => void;
		clear: () => void
	}

	declare export class Sort extends SP$ClientValueObject {
		get_direction: () => SortDirection;
		set_direction: (value: SortDirection) => void;
		get_property: () => string;
		set_property: (value: string) => void
	}

	declare export class ResultTableCollection extends SP$ClientValueObjectCollection<ResultTable> {
		get_item: (index: number) => ResultTable;
		get_elapsedTime: () => number;
		set_elapsedTime: (value: number) => void;
		get_properties: () => {
		[key: string]: any
	};
		get_queryErrors: () => {
		[key: string]: WebControls.ControlMessage
	};
		get_queryId: () => string;
		get_spellingSuggestion: () => string;
		get_triggeredRules: () => SP.Guid[];
		initPropertiesFromJson: (parentNode: any) => void
	}

	declare export class ResultTable extends SP$ClientValueObject {
		get_groupTemplateId: () => string;
		get_itemTemplateId: () => string;
		get_properties: () => {
		[key: string]: any
	};
		get_queryId: () => string;
		get_queryRuleId: () => string;
		get_resultRows: () => {
		[key: string]: any
	}[];
		get_resultTitle: () => string;
		get_resultTitleUrl: () => string;
		get_rowCount: () => number;
		get_tableType: () => string;
		get_totalRows: () => number;
		get_totalRowsIncludingDuplicates: () => number;
		initPropertiesFromJson: (parentNode: any) => void
	}

	declare export class RankingLabeling extends SP$ClientObject {
		constructor(context: SP.ClientContext): this;
		getJudgementsForQuery: (query: string) => SP.JsonObjectResult;
		addJudgment: (userQuery: string, url: string, labelId: number) => void;
		normalizeResultUrl: (url: string) => SP.JsonObjectResult
	}

	declare export class PopularQuery extends SP$ClientValueObject {
		get_clickCount: () => number;
		set_clickCount: (value: number) => void;
		get_LCID: () => number;
		set_LCID: (value: number) => void;
		get_queryCount: () => number;
		set_queryCount: (value: number) => void;
		get_queryText: () => string;
		set_queryText: (value: string) => void
	}

	declare export class QueryPropertyNames  {
		blockDedupeMode: string;
		bypassResultTypes: string;
		clientType: string;
		culture: string;
		desiredSnippetLength: string;
		enableInterleaving: string;
		enableNicknames: string;
		enableOrderingHitHighlightedProperty: string;
		enablePhonetic: string;
		enableQueryRules: string;
		enableStemming: string;
		generateBlockRankLog: string;
		hitHighlightedMultivaluePropertyLimit: string;
		ignoreSafeQueryPropertiesTemplateUrl: string;
		impressionID: string;
		maxSnippetLength: string;
		processBestBets: string;
		processPersonalFavorites: string;
		queryTag: string;
		queryTemplate: string;
		queryTemplateParameters: string;
		queryText: string;
		rankingModelId: string;
		resultsUrl: string;
		rowLimit: string;
		rowsPerPage: string;
		safeQueryPropertiesTemplateUrl: string;
		showPeopleNameSuggestions: string;
		sourceId: string;
		startRow: string;
		summaryLength: string;
		timeout: string;
		totalRowsExactMinimum: string;
		trimDuplicates: string;
		uiLanguage: string
	}

	declare export class QueryObjectPropertyNames  {
		hitHighlightedProperties: string;
		personalizationData: string
	}

	declare export class KeywordQueryPropertyNames  {
		collapseSpecification: string;
		enableSorting: string;
		hiddenConstraints: string;
		refiners: string;
		trimDuplicatesIncludeId: string
	}

	declare export class KeywordQueryObjectPropertyNames  {
		properties: string;
		refinementFilters: string;
		reorderingRules: string;
		selectProperties: string;
		sortList: string
	}

	
}

declare module 'WebControls' {
				declare export class ControlMessage extends SP$ClientValueObject {
		get_code: () => number;
		get_correlationID: () => string;
		get_encodeDetails: () => boolean;
		get_header: () => string;
		get_level: () => MessageLevel;
		get_messageDetails: () => string;
		get_messageDetailsForViewers: () => string;
		get_serverTypeId: () => string;
		get_showForViewerUsers: () => boolean;
		get_showInEditModeOnly: () => boolean;
		get_stackTrace: () => string;
		get_type: () => string
	}

	
}

declare module 'Administration' {
				declare export class DocumentCrawlLog extends SP$ClientObject {
		constructor(context: SP.ClientContext, site: SP.Site): this;
		getCrawledUrls: (
		getCountOnly: boolean, maxRows: {
		High: number,
		Low: number
	}, queryString: string, isLike: boolean, contentSourceID: number, errorLevel: number, errorID: number, startDateTime: Date, endDateTime: Date
	) => SP.JsonObjectResult
	}

	declare export class SearchObjectOwner extends SP$ClientObject {
		constructor(context: SP.ClientContext, lowestCurrentLevelToUse: SearchObjectLevel): this
	}

	
}

declare module 'Portability' {
				declare export class SearchConfigurationPortability extends SP$ClientObject {
		constructor(context: SP.ClientContext): this;
		get_importWarnings: () => string;
		exportSearchConfiguration: (owningScope: Administration.SearchObjectOwner) => SP.JsonObjectResult;
		importSearchConfiguration: (
		owningScope: Administration.SearchObjectOwner, searchConfiguration: string
	) => void;
		deleteSearchConfiguration: (
		owningScope: Administration.SearchObjectOwner, searchConfiguration: string
	) => void
	}

	declare export class SearchConfigurationPortabilityPropertyNames  {
		importWarnings: string
	}

	
}

declare module 'BusinessData' {
				declare export class AppBdcCatalog extends SP$ClientObject {
		getEntity(namespace: string, name: string): SP.BusinessData.Entity;
		getLobSystemProperty(lobSystemName: string, propertyName: string): SP.StringResult;
		setLobSystemProperty(lobSystemName: string, propertyName: string, propertyValue: string): void;
		getLobSystemInstanceProperty(
		lobSystemName: string, lobSystemInstanceName: string, propertyName: string
	): SP.StringResult;
		setLobSystemInstanceProperty(
		lobSystemName: string, lobSystemInstanceName: string, propertyName: string, propertyValue: string
	): void;
		getConnectionId(lobSystemName: string, lobSystemInstanceName: string): SP.StringResult;
		setConnectionId(
		lobSystemName: string, lobSystemInstanceName: string, connectionId: string
	): void;
		getPermissibleConnections(): string[]
	}

	declare export class Entity extends SP$ClientObject {
		get_estimatedInstanceCount(): number;
		get_name(): string;
		get_namespace(): string;
		getIdentifiers(): SP.BusinessData.Collections.EntityIdentifierCollection;
		getIdentifierCount(): SP.IntResult;
		getLobSystem(): SP.BusinessData.LobSystem;
		getCreatorView(methodInstanceName: string): SP.BusinessData.EntityView;
		getUpdaterView(updaterName: string): SP.BusinessData.EntityView;
		getFinderView(methodInstanceName: string): SP.BusinessData.EntityView;
		getSpecificFinderView(specificFinderName: string): SP.BusinessData.EntityView;
		getDefaultSpecificFinderView(): SP.BusinessData.EntityView;
		findSpecificDefault(
		identity: SP.BusinessData.Runtime.EntityIdentity, lobSystemInstance: SP.BusinessData.LobSystemInstance
	): SP.BusinessData.Runtime.EntityInstance;
		findSpecific(
		identity: SP.BusinessData.Runtime.EntityIdentity, specificFinderName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance
	): SP.BusinessData.Runtime.EntityInstance;
		findSpecificDefaultByBdcId(
		bdcIdentity: string, lobSystemInstance: SP.BusinessData.LobSystemInstance
	): SP.BusinessData.Runtime.EntityInstance;
		findSpecificByBdcId(
		bdcIdentity: string, specificFinderName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance
	): SP.BusinessData.Runtime.EntityInstance;
		findFiltered(
		filterList: SP.BusinessData.Collections.FilterCollection, nameOfFinder: string, lobSystemInstance: SP.BusinessData.LobSystemInstance
	): SP.BusinessData.Collections.EntityInstanceCollection;
		findAssociated(
		entityInstance: SP.BusinessData.Runtime.EntityInstance, associationName: string, filterList: SP.BusinessData.Collections.FilterCollection, lobSystemInstance: SP.BusinessData.LobSystemInstance
	): SP.BusinessData.Collections.EntityInstanceCollection;
		getFilters(methodInstanceName: string): SP.BusinessData.Collections.FilterCollection;
		execute(
		methodInstanceName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance, inputParams: any[]
	): SP.BusinessData.MethodExecutionResult;
		getAssociationView(associationName: string): SP.BusinessData.EntityView;
		create(
		fieldValues: SP.BusinessData.Runtime.EntityFieldValueDictionary, lobSystemInstance: SP.BusinessData.LobSystemInstance
	): SP.BusinessData.Runtime.EntityIdentity;
		subscribe(
		eventType: SP.BusinessData.Runtime.EntityEventType, notificationCallback: SP.BusinessData.Runtime.NotificationCallback, onBehalfOfUser: string, subscriberName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance
	): SP.BusinessData.Runtime.Subscription;
		unsubscribe(
		subscription: SP.BusinessData.Runtime.Subscription, onBehalfOfUser: string, unsubscriberName: string, lobSystemInstance: SP.BusinessData.LobSystemInstance
	): void
	}

	declare export class EntityField extends SP$ClientObject {
		get_containsLocalizedDisplayName(): boolean;
		get_defaultDisplayName(): string;
		get_localizedDisplayName(): string;
		get_name(): string
	}

	declare export class EntityIdentifier extends SP$ClientObject {
		get_identifierType(): string;
		get_name(): string;
		getDefaultDisplayName(): SP.StringResult;
		containsLocalizedDisplayName(): SP.BooleanResult;
		getLocalizedDisplayName(): SP.StringResult
	}

	declare export class EntityView extends SP$ClientObject {
		get_fields(): SP.BusinessData.Collections.EntityFieldCollection;
		get_name(): string;
		get_relatedSpecificFinderName(): string;
		getDefaultValues(): SP.BusinessData.Runtime.EntityFieldValueDictionary;
		getXmlSchema(): SP.StringResult;
		getTypeDescriptor(fieldDotNotation: string): SP.BusinessData.TypeDescriptor;
		getType(fieldDotNotation: string): SP.StringResult
	}

	declare export class Filter extends SP$ClientObject {
		get_defaultDisplayName(): string;
		get_filterField(): string;
		get_filterType(): string;
		get_localizedDisplayName(): string;
		get_name(): string;
		get_valueCount(): number
	}

	declare export class LobSystem extends SP$ClientObject {
		get_name(): string;
		getLobSystemInstances(): SP.BusinessData.Collections.LobSystemInstanceCollection
	}

	declare export class LobSystemInstance extends SP$ClientObject {
		get_name(): string
	}

	declare export class MethodExecutionResult extends SP$ClientObject {
		get_returnParameterCollection(): SP.BusinessData.ReturnParameterCollection
	}

	declare export class ReturnParameterCollection extends SP$ClientObjectCollection<SP.BusinessData.Runtime.EntityFieldValueDictionary> {
		itemAt(index: number): SP.BusinessData.Runtime.EntityFieldValueDictionary;
		get_item(index: number): SP.BusinessData.Runtime.EntityFieldValueDictionary
	}

	declare export class TypeDescriptor extends SP$ClientObject {
		get_containsReadOnly(): boolean;
		get_isCollection(): boolean;
		get_isReadOnly(): boolean;
		get_name(): string;
		get_typeName(): string;
		containsLocalizedDisplayName(): SP.BooleanResult;
		getLocalizedDisplayName(): SP.StringResult;
		getDefaultDisplayName(): SP.StringResult;
		isRoot(): SP.BooleanResult;
		isLeaf(): SP.BooleanResult;
		getChildTypeDescriptors(): SP.BusinessData.Collections.TypeDescriptorCollection;
		getParentTypeDescriptor(): SP.BusinessData.TypeDescriptor
	}

	
}

declare module 'Collections' {
				declare export class EntityFieldCollection extends SP$ClientObjectCollection<SP.BusinessData.EntityField> {
		itemAt(index: number): SP.BusinessData.EntityField;
		get_item(index: number): SP.BusinessData.EntityField
	}

	declare export class EntityIdentifierCollection extends SP$ClientObjectCollection<SP.BusinessData.EntityIdentifier> {
		itemAt(index: number): SP.BusinessData.EntityIdentifier;
		get_item(index: number): SP.BusinessData.EntityIdentifier
	}

	declare export class EntityInstanceCollection extends SP$ClientObjectCollection<SP.BusinessData.Runtime.EntityInstance> {
		itemAt(index: number): SP.BusinessData.Runtime.EntityInstance;
		get_item(index: number): SP.BusinessData.Runtime.EntityInstance
	}

	declare export class FilterCollection extends SP$ClientObjectCollection<SP.BusinessData.Filter> {
		itemAt(index: number): SP.BusinessData.Filter;
		get_item(index: number): SP.BusinessData.Filter;
		setFilterValue(inputFilterName: string, valueIndex: number, value: any): void
	}

	declare export class LobSystemInstanceCollection extends SP$ClientObjectCollection<SP.BusinessData.LobSystemInstance> {
		itemAt(index: number): SP.BusinessData.LobSystemInstance;
		get_item(index: number): SP.BusinessData.LobSystemInstance
	}

	declare export class TypeDescriptorCollection extends SP$ClientObjectCollection<SP.BusinessData.TypeDescriptor> {
		itemAt(index: number): SP.BusinessData.TypeDescriptor;
		get_item(index: number): SP.BusinessData.TypeDescriptor
	}

	
}

declare module 'Infrastructure' {
				declare export class ExternalSubscriptionStore extends SP$ClientObject {
		constructor(context: SP.ClientRuntimeContext, web: SP.Web): this;
		newObject(
		context: SP.ClientRuntimeContext, web: SP.Web
	): SP.BusinessData.Infrastructure.ExternalSubscriptionStore;
		indexStore(): void
	}

	
}

declare module 'Runtime' {
				declare export class EntityFieldValueDictionary extends SP$ClientObject {
		get_fieldValues(): any;
		get_item(fieldName: string): any;
		set_item(fieldName: string, value: any): void;
		refreshLoad(): void;
		fromXml(xml: string): void;
		toXml(): SP.StringResult;
		createInstance(fieldInstanceDotNotation: string, fieldDotNotation: string): void;
		createCollectionInstance(fieldDotNotation: string, size: number): void;
		getCollectionSize(fieldDotNotation: string): SP.IntResult
	}

	declare export class EntityIdentity extends SP$ClientObject {
		get_fieldValues(): any;
		get_item(fieldName: string): any;
		constructor(context: SP.ClientRuntimeContext, identifierValues: any[]): this;
		get_identifierCount(): number;
		newObject(
		context: SP.ClientRuntimeContext, identifierValues: any[]
	): SP.BusinessData.Runtime.EntityIdentity;
		refreshLoad(): void
	}

	declare export class EntityInstance extends SP$ClientObject {
		get_fieldValues(): any;
		get_item(fieldName: string): any;
		set_item(fieldName: string, value: any): void;
		refreshLoad(): void;
		createInstance(fieldInstanceDotNotation: string, fieldDotNotation: string): void;
		createCollectionInstance(fieldDotNotation: string, size: number): void;
		getIdentity(): SP.BusinessData.Runtime.EntityIdentity;
		deleteObject(): void;
		update(): void;
		fromXml(xml: string): void;
		toXml(): SP.StringResult
	}

	declare export class NotificationCallback extends SP$ClientObject {
		constructor(context: SP.ClientRuntimeContext, notificationEndpoint: string): this;
		get_notificationContext(): string;
		set_notificationContext(value: string): void;
		get_notificationEndpoint(): string;
		get_notificationForwarderType(): string;
		set_notificationForwarderType(value: string): void;
		newObject(
		context: SP.ClientRuntimeContext, notificationEndpoint: string
	): SP.BusinessData.Runtime.NotificationCallback
	}

	declare export class Subscription extends SP$ClientObject {
		constructor(context: SP.ClientRuntimeContext, id: any, hash: string): this;
		get_hash(): string;
		get_iD(): any;
		newObject(
		context: SP.ClientRuntimeContext, id: any, hash: string
	): SP.BusinessData.Runtime.Subscription
	}

	
}

declare module 'Sharing' {
				declare export class DocumentSharingManager  {
		getRoleDefinition(context: SP.ClientRuntimeContext, role: SP.Sharing.Role): SP.RoleDefinition;
		isDocumentSharingEnabled(context: SP.ClientRuntimeContext, list: SP.List): SP.BooleanResult;
		updateDocumentSharingInfo(
		context: SP.ClientRuntimeContext, resourceAddress: string, userRoleAssignments: SP.Sharing.UserRoleAssignment[], validateExistingPermissions: boolean, additiveMode: boolean, sendServerManagedNotification: boolean, customMessage: string, includeAnonymousLinksInNotification: boolean
	): SP.Sharing.UserSharingResult[]
	}

	declare export class UserRoleAssignment extends SP$ClientValueObject {
		get_role(): SP.Sharing.Role;
		set_role(value: SP.Sharing.Role): void;
		get_userId(): string;
		set_userId(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class UserSharingResult extends SP$ClientValueObject {
		get_allowedRoles(): SP.Sharing.Role[];
		get_currentRole(): SP.Sharing.Role;
		get_isUserKnown(): boolean;
		get_message(): string;
		get_status(): boolean;
		get_user(): string;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	
}

declare module 'Social' {
				declare export class SocialActor extends SP$ClientValueObject {
		get_accountName(): string;
		get_actorType(): SocialActorType;
		get_canFollow(): boolean;
		get_contentUri(): string;
		get_emailAddress(): string;
		get_followedContentUri(): string;
		get_id(): string;
		get_imageUri(): string;
		get_isFollowed(): boolean;
		get_libraryUri(): string;
		get_name(): string;
		get_personalSiteUri(): string;
		get_status(): SocialStatusCode;
		get_statusText(): string;
		get_tagGuid(): string;
		get_title(): string;
		get_uri(): string
	}

	declare export class SocialActorInfo extends SP$ClientValueObject {
		get_accountName(): string;
		set_accountName(value: string): string;
		get_actorType(): SocialActorType;
		set_actorType(value: SocialActorType): SocialActorType;
		get_contentUri(): string;
		set_contentUri(value: string): string;
		get_id(): string;
		set_id(value: string): string;
		get_tagGuid(): string;
		set_tagGuid(value: string): string
	}

	declare export class SocialAttachment extends SP$ClientValueObject {
		get_attachmentKind(): SocialAttachmentKind;
		set_attachmentKind(value: SocialAttachmentKind): SocialAttachmentKind;
		get_clickAction(): SocialAttachmentAction;
		set_clickAction(value: SocialAttachmentAction): SocialAttachmentAction;
		get_contentUri(): string;
		set_contentUri(value: string): string;
		get_description(): string;
		set_description(value: string): string;
		get_height(): number;
		set_height(value: number): number;
		get_length(): number;
		set_length(value: number): number;
		get_name(): string;
		set_name(value: string): string;
		get_previewUri(): string;
		set_previewUri(value: string): string;
		get_uri(): string;
		set_uri(value: string): string;
		get_width(): number;
		set_width(value: number): number
	}

	declare export class SocialAttachmentAction extends SP$ClientValueObject {
		get_actionKind(): SocialAttachmentActionKind;
		set_actionKind(value: SocialAttachmentActionKind): SocialAttachmentActionKind;
		get_actionUri(): string;
		set_actionUri(value: string): string
	}

	declare export class SocialDataItem extends SP$ClientValueObject {
		get_accountName(): string;
		set_accountName(value: string): string;
		get_itemType(): SocialDataItemType;
		set_itemType(value: SocialDataItemType): SocialDataItemType;
		get_tagGuid(): string;
		set_tagGuid(value: string): string;
		get_text(): string;
		set_text(value: string): string;
		get_uri(): string;
		set_uri(value: string): string
	}

	declare export class SocialDataOverlay extends SP$ClientValueObject {
		get_actorIndexes(): number[];
		get_index(): number;
		get_length(): number;
		get_linkUri(): string;
		get_overlayType(): SocialDataOverlayType
	}

	declare export class SocialExceptionDetails extends SP$ClientValueObject {
		get_internalErrorCode(): number;
		get_internalMessage(): string;
		get_internalStackTrace(): string;
		get_internalTypeName(): string;
		get_status(): SocialStatusCode
	}

	declare export class SocialFeed extends SP$ClientValueObject {
		get_attributes(): SocialFeedAttributes;
		get_newestProcessed(): string;
		get_oldestProcessed(): string;
		get_threads(): SocialThread[];
		get_unreadMentionCount(): number
	}

	declare export class SocialFeedManager extends SP$ClientObject {
		constructor(context: SP.ClientRuntimeContext): this;
		get_owner(): SocialActor;
		get_personalSitePortalUri(): string;
		createPost(targetId: string, creationData: SocialPostCreationData): SocialThread;
		deletePost(postId: string): SocialThread;
		getAllLikers(postId: string): SocialActor[];
		getFeed(type: SocialFeedType, options: SocialFeedOptions): SocialFeed;
		getFeedFor(actorId: string, options: SocialFeedOptions): SocialFeed;
		getFullThread(threadId: string): SocialThread;
		getMentions(clearUnreadMentions: boolean, options: SocialFeedOptions): SocialFeed;
		getUnreadMentionCount(): SP.IntResult;
		likePost(postId: string): SocialThread;
		unlikePost(postId: string): SocialThread;
		lockThread(threadId: string): SocialThread;
		unlockThread(threadId: string): SocialThread;
		suppressThreadNotifications(threadId: string): void;
		createImageAttachment(name: string, description: string, imageData: any): SocialAttachment;
		getPreview(itemUrl: string): SocialAttachment;
		getPreviewImage(url: string, key: string, iv: string): any
	}

	declare export class SocialFeedOptions extends SP$ClientObject {
		get_maxThreadCount(): number;
		set_maxThreadCount(value: number): number;
		get_newerThan(): string;
		set_newerThan(value: string): string;
		get_olderThan(): string;
		set_olderThan(value: string): string;
		get_sortOrder(): SocialFeedSortOrder;
		set_sortOrder(value: SocialFeedSortOrder): SocialFeedSortOrder
	}

	declare export class SocialFollowingManager extends SP$ClientObject {
		constructor(context: SP.ClientRuntimeContext): this;
		get_followedDocumentsUri(): string;
		get_followedSitesUri(): string;
		follow(actor: SocialActorInfo): SP.IntResult;
		stopFollowing(actor: SocialActorInfo): SP.BooleanResult;
		isFollowed(actor: SocialActorInfo): SP.BooleanResult;
		getFollowed(types: SocialActorTypes): SocialActor[];
		getFollowedCount(types: SocialActorTypes): SP.IntResult;
		getFollowers(): SocialActor[];
		getSuggestions(): SocialActor[]
	}

	declare export class SocialLink extends SP$ClientValueObject {
		get_text(): string;
		set_text(value: string): string;
		get_uri(): string;
		set_uri(value: string): string
	}

	declare export class SocialPost extends SP$ClientValueObject {
		get_attachment(): SocialAttachment;
		get_attributes(): SocialPostAttributes;
		get_authorIndex(): number;
		get_createdTime(): string;
		get_id(): string;
		get_likerInfo(): SocialPostActorInfo;
		get_modifiedTime(): string;
		get_overlays(): SocialDataOverlay[];
		get_postType(): SocialPostType;
		get_preferredImageUri(): string;
		get_source(): SocialLink;
		get_text(): string
	}

	declare export class SocialPostActorInfo extends SP$ClientValueObject {
		get_includesCurrentUser(): boolean;
		get_indexes(): number[];
		get_totalCount(): number
	}

	declare export class SocialPostCreationData extends SP$ClientValueObject {
		get_attachment(): SocialAttachment;
		set_attachment(value: SocialAttachment): SocialAttachment;
		get_contentItems(): SocialDataItem;
		set_contentItems(value: SocialDataItem): SocialDataItem;
		get_contentText(): string;
		set_contentText(value: string): string;
		get_definitionData(): SocialPostDefinitionData;
		set_definitionData(value: SocialPostDefinitionData): SocialPostDefinitionData;
		get_source(): SocialLink;
		set_source(value: SocialLink): SocialLink;
		get_securityUris(): string[];
		set_securityUris(value: string[]): string[];
		get_updateStatusText(): boolean;
		set_updateStatusText(value: boolean): boolean
	}

	declare export class SocialPostDefinitionData extends SP$ClientValueObject {
		get_items(): SocialPostDefinitionDataItem[];
		set_items(value: SocialPostDefinitionDataItem[]): SocialPostDefinitionDataItem[];
		get_name(): string;
		set_name(value: string): string
	}

	declare export class SocialPostDefinitionDataItem extends SP$ClientValueObject {
		get_accountName(): string;
		set_accountName(value: string): string;
		get_itemType(): SocialPostDefinitionDataItemType;
		set_itemType(value: SocialPostDefinitionDataItemType): SocialPostDefinitionDataItemType;
		get_placeholderName(): string;
		set_placeholderName(value: string): string;
		get_tagGuid(): string;
		set_tagGuid(value: string): string;
		get_text(): string;
		set_text(value: string): string;
		get_uri(): string;
		set_uri(value: string): string
	}

	declare export class SocialPostReference extends SP$ClientValueObject {
		get_digest(): SocialThread;
		get_post(): SocialPost;
		get_threadId(): string;
		get_threadOwnerIndex(): number
	}

	declare export class SocialThread extends SP$ClientValueObject {
		get_actors(): SocialActor[];
		get_attributes(): SocialThreadAttributes;
		get_id(): string;
		get_ownerIndex(): number;
		get_permalink(): string;
		get_postReference(): SocialPostReference;
		get_replies(): SocialPost[];
		get_rootPost(): SocialPost;
		get_status(): SocialStatusCode;
		get_threadType(): SocialThreadType;
		get_totalReplyCount(): number
	}

	
}

declare module 'Taxonomy' {
				declare export class TaxonomySession extends SP$ClientObject {
		getTaxonomySession(context: SP.ClientContext): TaxonomySession;
		get_offlineTermStoreNames(): string[];
		get_termStores(): TermStoreCollection;
		getTerms(labelMatchInformation: LabelMatchInformation): TermCollection;
		updateCache(): void;
		getTerm(guid: SP.Guid): Term;
		getTermsById(termIds: SP.Guid[]): TermCollection;
		getTermsInDefaultLanguage(
		termLabel: string, defaultLabelOnly: boolean, stringMatchOption: StringMatchOption, resultCollectionSize: number, trimUnavailable: boolean, trimDeprecated: boolean
	): TermCollection;
		getTermsInWorkingLocale(
		termLabel: string, defaultLabelOnly: boolean, stringMatchOption: StringMatchOption, resultCollectionSize: number, trimUnavailable: boolean, trimDeprecated: boolean
	): TermCollection;
		getTermsWithCustomProperty(customPropertyName: string, trimUnavailable: boolean): TermCollection;
		getTermsWithCustomProperty(customPropertyMatchInformation: CustomPropertyMatchInformation): TermCollection;
		getTermSetsByName(termSetName: string, lcid: number): TermSetCollection;
		getTermSetsByTermLabel(requiredTermLabels: string[], lcid: number): TermSetCollection;
		getDefaultKeywordsTermStore(): TermStore;
		getDefaultSiteCollectionTermStore(): TermStore
	}

	declare export class TermStoreCollection extends SP$ClientObjectCollection<TermStore> {
		itemAt(index: number): TermStore;
		get_item(index: number): TermStore;
		getById(id: SP.Guid): TermStore;
		getByName(name: string): TermStore
	}

	declare export class TermStore extends SP$ClientObject {
		get_contentTypePublishingHub(): string;
		get_defaultLanguage(): number;
		set_defaultLanguage(value: number): void;
		get_groups(): TermGroupCollection;
		get_hashTagsTermSet(): TermSet;
		get_id(): SP.Guid;
		get_isOnline(): boolean;
		get_keywordsTermSet(): TermSet;
		get_languages(): number[];
		get_name(): string;
		get_orphanedTermsTermSet(): TermSet;
		get_systemGroup(): TermGroup;
		get_workingLanguage(): number;
		set_workingLanguage(value: number): void;
		addLanguage(lcid: number): void;
		commitAll(): void;
		createGroup(name: string): TermGroup;
		createGroup(name: string, groupId: SP.Guid): TermGroup;
		deleteLanguage(lcid: number): void;
		getChanges(changeInformation: ChangeInformation): ChangedItemCollection;
		getGroup(id: SP.Guid): TermGroup;
		getTerm(termId: SP.Guid): Term;
		getTermInTermSet(termSetId: SP.Guid, termId: SP.Guid): Term;
		getTermsById(termIds: SP.Guid[]): TermCollection;
		getTerms(termLabel: string, trimUnavailable: boolean): TermCollection;
		getTerms(labelMatchInformation: LabelMatchInformation): TermCollection;
		getTermSetsByName(termSetName: string, lcid: number): TermSetCollection;
		getTermSetsByTermLabel(requiredTermLabels: string[], lcid: number): TermSetCollection;
		getTermsWithCustomProperty(customPropertyName: string, trimUnavailable: boolean): TermCollection;
		getTermsWithCustomProperty(customPropertyMatchInformation: CustomPropertyMatchInformation): TermCollection;
		getTermSet(termSetId: SP.Guid): TermSet;
		getTermSetsWithCustomProperty(
		customPropertyMatchInformation: CustomPropertyMatchInformation
	): TermSetCollection;
		rollbackAll(): void;
		updateCache(): void;
		getSiteCollectionGroup(currentSite: SP.Site, createIfMissing: boolean): TermGroup;
		updateUsedTermsOnSite(currentSite: SP.Site): void
	}

	declare export class TaxonomyItem extends SP$ClientObject {
		normalizeName(context: SP.ClientContext, name: string): SP.StringResult;
		get_createdDate(): Date;
		get_id(): SP.Guid;
		get_lastModifiedDate(): Date;
		get_name(): string;
		set_name(value: string): void;
		get_termStore(): TermStore;
		deleteObject(): void
	}

	declare export class TermGroupCollection extends SP$ClientObjectCollection<TermGroup> {
		itemAt(index: number): TermGroup;
		get_item(index: number): TermGroup;
		getById(id: SP.Guid): TermGroup;
		getByName(name: string): TermGroup
	}

	declare export class TermGroup extends TaxonomyItem {
		get_description(): string;
		set_description(value: string): void;
		get_isSiteCollectionGroup(): boolean;
		get_isSystemGroup(): boolean;
		get_termSets(): TermSetCollection;
		createTermSet(name: string, newTermSetId: SP.Guid, lcid: number): TermSet;
		exportObject(): SP.StringResult;
		getChanges(changeInformation: ChangeInformation): ChangedItemCollection;
		getTermSetsWithCustomProperty(
		customPropertyMatchInformation: CustomPropertyMatchInformation
	): TermSetCollection
	}

	declare export class TermSetItem extends TaxonomyItem {
		get_customProperties(): {
		[key: string]: string
	};
		get_customSortOrder(): string;
		set_customSortOrder(value: string): void;
		get_isAvailableForTagging(): boolean;
		set_isAvailableForTagging(value: boolean): void;
		get_owner(): string;
		set_owner(value: string): void;
		get_terms(): TermCollection;
		createTerm(name: string, lcid: number, newTermId: SP.Guid): Term;
		reuseTerm(sourceTerm: Term, reuseBranch: boolean): Term;
		reuseTermWithPinning(sourceTerm: Term): Term;
		deleteCustomProperty(name: string): void;
		deleteAllCustomProperties(): void;
		setCustomProperty(name: string, value: string): void
	}

	declare export class TermSetCollection extends SP$ClientObjectCollection<TermSet> {
		itemAt(index: number): TermSet;
		get_item(index: number): TermSet;
		getById(id: SP.Guid): TermSet;
		getByName(name: string): TermSet
	}

	declare export class TermSet extends TermSetItem {
		get_contact(): string;
		set_contact(value: string): void;
		get_description(): string;
		set_description(value: string): void;
		get_group(): TermGroup;
		get_isOpenForTermCreation(): boolean;
		set_isOpenForTermCreation(value: boolean): void;
		get_stakeholders(): string[];
		addStakeholder(stakeholderName: string): void;
		copy(): TermSet;
		deleteStakeholder(stakeholderName: string): void;
		exportObject(): SP.StringResult;
		getAllTerms(): TermCollection;
		getChanges(changeInformation: ChangeInformation): ChangedItemCollection;
		getTerm(termId: SP.Guid): Term;
		getTerms(pagingLimit: number): TermCollection;
		getTerms(termLabel: string, trimUnavailable: boolean): TermCollection;
		getTerms(labelMatchInformation: LabelMatchInformation): TermCollection;
		getTermsWithCustomProperty(customPropertyName: string, trimUnavailable: boolean): TermCollection;
		getTermsWithCustomProperty(customPropertyMatchInformation: CustomPropertyMatchInformation): TermCollection;
		move(targetGroup: TermGroup): void
	}

	declare export class TermCollection extends SP$ClientObjectCollection<Term> {
		itemAt(index: number): Term;
		get_item(index: number): Term;
		getById(id: SP.Guid): Term;
		getByName(name: string): Term
	}

	declare export class Term extends TermSetItem {
		get_description(): string;
		get_isDeprecated(): boolean;
		get_isKeyword(): boolean;
		get_isPinned(): boolean;
		get_isPinnedRoot(): boolean;
		get_isReused(): boolean;
		get_isRoot(): boolean;
		get_isSourceTerm(): boolean;
		get_labels(): LabelCollection;
		get_localCustomProperties(): {
		[key: string]: string
	};
		get_mergedTermIds(): SP.Guid[];
		get_parent(): Term;
		get_pathOfTerm(): string;
		get_pinSourceTermSet(): TermSet;
		get_reusedTerms(): TermCollection;
		get_sourceTerm(): Term;
		get_termsCount(): number;
		get_termSet(): TermSet;
		get_termSets(): TermSetCollection;
		copy(doCopyChildren: boolean): Term;
		createLabel(labelName: string, lcid: number, isDefault: boolean): Label;
		deleteLocalCustomProperty(name: string): void;
		deleteAllLocalCustomProperties(): void;
		deprecate(doDepricate: boolean): void;
		getAllLabels(lcid: number): LabelCollection;
		getDefaultLabel(lcid: number): Label;
		getDescription(lcid: number): SP.StringResult;
		getTerms(pagingLimit: number): TermCollection;
		getTerms(
		termLabel: string, lcid: number, defaultLabelOnly: boolean, stringMatchOption: StringMatchOption, resultCollectionSize: number, trimUnavailable: boolean
	): TermCollection;
		merge(termToMerge: Term): void;
		move(newParnt: TermSetItem): void;
		reassignSourceTerm(reusedTerm: Term): void;
		setDescription(description: string, lcid: number): void;
		setLocalCustomProperty(name: string, value: string): void;
		getIsDescendantOf(ancestorTerm: Term): SP.BooleanResult;
		getPath(lcid: number): SP.StringResult
	}

	declare export class LabelCollection extends SP$ClientObjectCollection<Label> {
		itemAt(index: number): Label;
		get_item(index: number): Label;
		getByValue(name: string): Label
	}

	declare export class Label extends SP$ClientObject {
		get_isDefaultForLanguage(): boolean;
		get_language(): number;
		set_language(value: number): void;
		get_term(): Term;
		get_value(): string;
		set_value(value: string): void;
		deleteObject(): void;
		setAsDefaultForLanguage(): void
	}

	declare export class LabelMatchInformation extends SP$ClientObject {
		constructor(context: SP.ClientContext): this;
		get_defaultLabelOnly(): boolean;
		set_defaultLabelOnly(value: boolean): void;
		get_excludeKeyword(): boolean;
		set_excludeKeyword(value: boolean): void;
		get_lcid(): number;
		set_lcid(value: number): void;
		get_resultCollectionSize(): number;
		set_resultCollectionSize(value: number): void;
		get_stringMatchOption(): StringMatchOption;
		set_stringMatchOption(value: StringMatchOption): void;
		get_termLabel(): string;
		set_termLabel(value: string): void;
		get_trimDeprecated(): boolean;
		set_trimDeprecated(value: boolean): void;
		get_trimUnavailable(): boolean;
		set_trimUnavailable(value: boolean): void
	}

	declare export class CustomPropertyMatchInformation extends SP$ClientObject {
		constructor(context: SP.ClientContext): this;
		get_customPropertyName(): string;
		set_customPropertyName(value: string): void;
		get_customPropertyValue(): string;
		set_customPropertyValue(value: string): void;
		get_resultCollectionSize(): number;
		set_resultCollectionSize(value: number): void;
		get_stringMatchOption(): StringMatchOption;
		set_stringMatchOption(value: StringMatchOption): void;
		get_trimUnavailable(): boolean;
		set_trimUnavailable(value: boolean): void
	}

	declare export class ChangeInformation extends SP$ClientObject {
		constructor(context: SP.ClientContext): this;
		get_itemType(): ChangeItemType;
		set_itemType(value: ChangeItemType): void;
		get_operationType(): ChangeOperationType;
		set_operationType(value: ChangeOperationType): void;
		get_startTime(): Date;
		set_startTime(value: Date): void;
		get_withinTimeSpan(): number;
		set_withinTimeSpan(value: number): void
	}

	declare export class ChangedItemCollection extends SP$ClientObjectCollection<ChangedItem> {
		itemAt(index: number): ChangedItem;
		get_item(index: number): ChangedItem
	}

	declare export class ChangedItem extends SP$ClientObject {
		get_changedBy(): string;
		get_changedTime(): Date;
		get_id(): SP.Guid;
		get_itemType(): ChangeItemType;
		get_operation(): ChangeOperationType
	}

	declare export class ChangedSite extends ChangedItem {
		get_siteId(): SP.Guid;
		get_termId(): SP.Guid;
		get_termSetId(): SP.Guid
	}

	declare export class ChangedGroup extends ChangedItem {
		
	}

	declare export class ChangedTerm extends ChangedItem {
		get_changedCustomProperties(): string[];
		get_changedLocalCustomProperties(): string[];
		get_groupId(): SP.Guid;
		get_lcidsForChangedDescriptions(): number[];
		get_lcidsForChangedLabels(): number[];
		get_termSetId(): SP.Guid
	}

	declare export class ChangedTermSet extends ChangedItem {
		get_fromGroupId(): SP.Guid;
		get_groupId(): SP.Guid
	}

	declare export class ChangedTermStore extends ChangedItem {
		get_changedLanguage(): number;
		get_isDefaultLanguageChanged(): boolean;
		get_isFullFarmRestore(): boolean
	}

	declare export class TaxonomyField extends SP$FieldLookup {
		constructor(context: SP.ClientContext, fields: SP.FieldCollection, filedName: string): this;
		get_anchorId(): SP.Guid;
		set_anchorId(value: SP.Guid): void;
		get_createValuesInEditForm(): boolean;
		set_createValuesInEditForm(value: boolean): void;
		get_isAnchorValid(): boolean;
		get_isKeyword(): boolean;
		set_isKeyword(value: boolean): void;
		get_isPathRendered(): boolean;
		set_isPathRendered(value: boolean): void;
		get_isTermSetValid(): boolean;
		get_open(): boolean;
		set_open(value: boolean): void;
		get_sspId(): SP.Guid;
		set_sspId(value: SP.Guid): void;
		get_targetTemplate(): string;
		set_targetTemplate(value: string): void;
		get_termSetId(): SP.Guid;
		set_termSetId(value: SP.Guid): void;
		get_textField(): SP.Guid;
		get_userCreated(): SP.Guid;
		set_userCreated(value: SP.Guid): void;
		getFieldValueAsText(value: TaxonomyFieldValue): SP.StringResult;
		getFieldValueAsTaxonomyFieldValue(value: string): TaxonomyFieldValue;
		getFieldValueAsTaxonomyFieldValueCollection(value: string): TaxonomyFieldValueCollection;
		setFieldValueByTerm(listItem: SP.ListItem, term: Term, lcid: number): void;
		setFieldValueByTermCollection(listItem: SP.ListItem, terms: TermCollection, lcid: number): void;
		setFieldValueByCollection(listItem: SP.ListItem, terms: Term[], lcid: number): void;
		setFieldValueByValue(listItem: SP.ListItem, taxValue: TaxonomyFieldValue): void;
		setFieldValueByValueCollection(listItem: SP.ListItem, taxValueCollection: TaxonomyFieldValueCollection): void;
		getFieldValueAsHtml(value: TaxonomyFieldValue): SP.StringResult;
		getValidatedString(value: TaxonomyFieldValue): SP.StringResult
	}

	declare export class TaxonomyFieldValueCollection extends SP$ClientObjectCollection<TaxonomyFieldValue> {
		constructor(context: SP.ClientContext, fieldValue: string, creatingField: SP.Field): this;
		itemAt(index: number): TaxonomyFieldValue;
		get_item(index: number): TaxonomyFieldValue;
		populateFromLabelGuidPairs(text: string): void
	}

	declare export class TaxonomyFieldValue extends SP$ClientValueObject {
		get_label(): string;
		set_label(value: string): void;
		get_termGuid(): SP.Guid;
		set_termGuid(value: SP.Guid): void;
		get_wssId(): number;
		set_wssId(value: number): void
	}

	declare export class MobileTaxonomyField extends SP$ClientObject {
		get_readOnly(): boolean
	}

	
}

declare module 'DocumentSet' {
				declare export class DocumentSet extends ClientObject {
		create(
		context: ClientContext, parentFolder: Folder, name: string, ctid: ContentTypeId
	): StringResult
	}

	
}

declare module 'Video' {
				declare export class EmbedCodeConfiguration extends ClientValueObject {
		get_autoPlay(): boolean;
		set_autoPlay(value: boolean): boolean;
		get_displayTitle(): boolean;
		set_displayTitle(value: boolean): boolean;
		get_linkToOwnerProfilePage(): boolean;
		set_linkToOwnerProfilePage(value: boolean): boolean;
		get_linkToVideoHomePage(): boolean;
		set_linkToVideoHomePage(value: boolean): boolean;
		get_loop(): boolean;
		set_loop(value: boolean): boolean;
		get_pixelHeight(): number;
		set_pixelHeight(value: number): number;
		get_pixelWidth(): number;
		set_pixelWidth(value: number): number;
		get_startTime(): number;
		set_startTime(value: number): number;
		get_previewImagePath(): string;
		set_previewImagePath(value: string): string
	}

	declare export class VideoSet extends DocumentSet$DocumentSet {
		createVideo(
		context: ClientContext, parentFolder: Folder, name: string, ctid: ContentTypeId
	): StringResult;
		uploadVideo(
		context: ClientContext, list: List, fileName: string, file: any[], overwriteIfExists: boolean, parentFolderPath: string
	): StringResult;
		getEmbedCode(
		context: ClientContext, videoPath: string, properties: EmbedCodeConfiguration
	): StringResult;
		migrateVideo(context: ClientContext, videoFile: File): SP.ListItem
	}

	
}

declare module 'ApplicationPages' {
		declare export interface ISelectorComponent {
		get_selectedEntities(): any,
		set_selectedEntities(value: any): void,
		get_callback(): (sender: any, e: Sys.EventArgs) => void,
		set_callback(value: (sender: any, e: Sys.EventArgs) => void): void,
		get_scopeKey(): string,
		get_componentType(): SP.UI.ApplicationPages.SelectorType,
		revertTo(ent: SP.UI.ApplicationPages.ResolveEntity): void,
		removeEntity(ent: SP.UI.ApplicationPages.ResolveEntity): void,
		setEntity(ent: SP.UI.ApplicationPages.ResolveEntity): void
	}

	declare export interface ICalendarController {
		moveToDate(date: string): void,
		moveToViewType(viewType: string): void,
		moveToViewDate(scope: SP.UI.ApplicationPages.CalendarScope, date: string): void,
		moveToView(scope: SP.UI.ApplicationPages.CalendarScope): void,
		expandAll(): void,
		collapseAll(): void,
		refreshItems(): void,
		getActiveScope(): SP.UI.ApplicationPages.CalendarScope,
		newItemDialog(contentTypeId: string): void,
		deleteItem(itemId: string): void
	}

		declare export class SelectorSelectionEventArgs extends Sys$EventArgs {
		constructor(entities: any): this;
		get_entities(): any
	}

	declare export class CalendarSelector extends Sys$Component {
		instance(): SP.UI.ApplicationPages.CalendarSelector;
		registerSelector(selector: SP.UI.ApplicationPages.ISelectorComponent): void;
		getSelector(
		type: SP.UI.ApplicationPages.SelectorType, scopeKey: string
	): SP.UI.ApplicationPages.ISelectorComponent;
		addHandler(
		scopeKey: string, people: boolean, resource: boolean, handler: (
		sender: any, selection: SP.UI.ApplicationPages.SelectorSelectionEventArgs
	) => void
	): void;
		revertTo(scopeKey: string, ent: SP.UI.ApplicationPages.ResolveEntity): void;
		removeEntity(scopeKey: string, ent: SP.UI.ApplicationPages.ResolveEntity): void;
		constructor(): this
	}

	declare export class BaseSelectorComponent extends undefined$ISelectorComponent {
		constructor(key: string, type: SP.UI.ApplicationPages.SelectorType): this;
		get_scopeKey(): string;
		get_componentType(): SP.UI.ApplicationPages.SelectorType;
		get_selectedEntities(): any;
		set_selectedEntities(value: any): void;
		get_callback(): (sender: any, e: Sys.EventArgs) => void;
		set_callback(value: (sender: any, e: Sys.EventArgs) => void): void;
		revertTo(ent: SP.UI.ApplicationPages.ResolveEntity): void;
		removeEntity(ent: SP.UI.ApplicationPages.ResolveEntity): void;
		setEntity(ent: SP.UI.ApplicationPages.ResolveEntity): void
	}

	declare export class CalendarInstanceRepository  {
		registerInstance(
		instanceId: string, contoller: SP.UI.ApplicationPages.ICalendarController
	): void;
		lookupInstance(instanceId: string): SP.UI.ApplicationPages.ICalendarController;
		firstInstance(): SP.UI.ApplicationPages.ICalendarController
	}

	declare export class ResolveEntity  {
		tYPE_EVENT: string;
		tYPE_USER: string;
		tYPE_RESOURCE: string;
		tYPE_EXCHANGE: string;
		entityType: string;
		displayName: string;
		email: string;
		accountName: string;
		id: string;
		members: SP.UI.ApplicationPages.ResolveEntity[];
		needResolve: boolean;
		isGroup: boolean;
		get_key(): string;
		constructor(): this
	}

	declare export class ClientPeoplePickerQueryParameters extends SP$ClientValueObject {
		get_allowEmailAddresses(): boolean;
		set_allowEmailAddresses(value: boolean): void;
		get_allowMultipleEntities(): boolean;
		set_allowMultipleEntities(value: boolean): void;
		get_allUrlZones(): boolean;
		set_allUrlZones(value: boolean): void;
		get_enabledClaimProviders(): string;
		set_enabledClaimProviders(value: string): void;
		get_forceClaims(): boolean;
		set_forceClaims(value: boolean): void;
		get_maximumEntitySuggestions(): number;
		set_maximumEntitySuggestions(value: number): void;
		get_principalSource(): SP.Utilities.PrincipalSource;
		set_principalSource(value: SP.Utilities.PrincipalSource): void;
		get_principalType(): SP.Utilities.PrincipalType;
		set_principalType(value: SP.Utilities.PrincipalType): void;
		get_queryString(): string;
		set_queryString(value: string): void;
		get_required(): boolean;
		set_required(value: boolean): void;
		get_sharePointGroupID(): number;
		set_sharePointGroupID(value: number): void;
		get_urlZone(): SP.UrlZone;
		set_urlZone(value: SP.UrlZone): void;
		get_urlZoneSpecified(): boolean;
		set_urlZoneSpecified(value: boolean): void;
		get_web(): SP.Web;
		set_web(value: SP.Web): void;
		get_webApplicationID(): SP.Guid;
		set_webApplicationID(value: SP.Guid): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class ClientPeoplePickerWebServiceInterface  {
		clientPeoplePickerSearchUser(
		context: SP.ClientRuntimeContext, queryParams: SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters
	): SP.StringResult;
		clientPeoplePickerResolveUser(
		context: SP.ClientRuntimeContext, queryParams: SP.UI.ApplicationPages.ClientPeoplePickerQueryParameters
	): SP.StringResult
	}

	declare export class PeoplePickerWebServiceInterface  {
		getSearchResultsByHierarchy(
		context: SP.ClientRuntimeContext, providerID: string, hierarchyNodeID: string, entityTypes: string, contextUrl: string
	): SP.StringResult;
		getSearchResults(
		context: SP.ClientRuntimeContext, searchPattern: string, providerID: string, hierarchyNodeID: string, entityTypes: string
	): SP.StringResult
	}

	
}

declare module 'Notify' {
			declare export function addNotification(strHtml: string, bSticky: boolean): string

	declare export function removeNotification(nid: string): void

	declare export function showLoadingNotification(bSticky: boolean): string

	declare export class Notification  {
		constructor(containerId: SPNotifications.ContainerID, strHtml: string, bSticky?: boolean, strTooltip?: string, onclickHandler?: () => void, extraData?: SPStatusNotificationData): this;
		get_id(): string;
		Show(bNoAnimate: boolean): void;
		Hide(bNoAnimate: boolean): void
	}

	declare export class NotificationContainer  {
		constructor(id: number, element: any, layer: number, notificationLimit?: number): this;
		Clear(): void;
		GetCount(): number;
		SetEventHandler(eventId: SPNotifications.EventID, eventHandler: any): void
	}

	
}

declare module 'Workspace' {
			declare export function add_resized(handler: () => void): void

	declare export function remove_resized(handler: () => void): void

		
}

declare module 'Workplace' {
			declare export function add_resized(handler: Function): void

	declare export function remove_resized(handler: Function): void

		
}

declare module 'UIUtility' {
			declare export function generateRandomElementId(): string

	declare export function cancelEvent(evt: Event): void

	declare export function clearChildNodes(elem: HTMLElement): void

	declare export function hideElement(elem: HTMLElement): void

	declare export function showElement(elem: HTMLElement): void

	declare export function insertBefore(elem: HTMLElement, targetElement: HTMLElement): void

	declare export function insertAfter(elem: HTMLElement, targetElement: HTMLElement): void

	declare export function removeNode(elem: HTMLElement): void

	declare export function calculateOffsetLeft(elem: HTMLElement): number

	declare export function calculateOffsetTop(elem: HTMLElement): number

	declare export function createHtmlInputText(text: string): HTMLInputElement

	declare export function createHtmlInputCheck(isChecked: boolean): HTMLInputElement

	declare export function setInnerText(elem: HTMLElement, value: string): void

	declare export function getInnerText(elem: HTMLElement): string

	declare export function isTextNode(elem: HTMLElement): boolean

	declare export function isSvgNode(elem: HTMLElement): boolean

	declare export function isNodeOfType(elem: HTMLElement, tagNames: string[]): boolean

	declare export function focusValidOnThisNode(elem: HTMLElement): boolean

		
}

declare module 'Controls' {
		declare export interface INavigationOptions {
		assetId?: string,
		siteTitle?: string,
		siteUrl?: string,
		appTitle?: string,
		appTitleIconUrl?: string,
		rightToLeft?: boolean,
		appStartPage?: string,
		appIconUrl?: string,
		appHelpPageUrl?: string,
		appHelpPageOnClick?: string,
		settingsLinks?: ISettingsLink[],
		language?: string,
		clientTag?: string,
		appWebUrl?: string,
		onCssLoaded?: string,
		bottomHeaderVisible?: boolean,
		topHeaderVisible?: boolean
	}

	declare export interface ISettingsLink {
		linkUrl: string,
		displayName: string
	}

		declare export class NavigationOptions extends INavigationOptions {
		
	}

	declare export class SettingsLink extends ISettingsLink {
		linkUrl: string;
		displayName: string
	}

	declare export class Navigation  {
		constructor(placeholderDOMElementId: string, options: INavigationOptions): this;
		get_assetId(): string;
		get_siteTitle(): string;
		get_siteUrl(): string;
		get_appTitle(): string;
		set_appTitle(value: string): string;
		get_appTitleIconUrl(): string;
		set_appTitleIconUrl(value: string): string;
		get_rightToLeft(): boolean;
		set_rightToLeft(value: boolean): boolean;
		get_appStartPage(): string;
		set_appStartPage(value: string): string;
		get_appIconUrl(): string;
		set_appIconUrl(value: string): string;
		get_appHelpPageUrl(): string;
		set_appHelpPageUrl(value: string): string;
		get_appHelpPageOnClick(): string;
		set_appHelpPageOnClick(value: string): string;
		get_settingsLinks(): ISettingsLink[];
		set_settingsLinks(value: ISettingsLink[]): ISettingsLink[];
		setVisible(value: boolean): void;
		setTopHeaderVisible(value: boolean): void;
		setBottomHeaderVisible(value: boolean): void;
		remove(): void;
		getVersionedLayoutsUrl(pageName: string): string
	}

	declare export class ControlManager  {
		getControl(placeHolderId: string): any
	}

	
}

declare module 'UserProfiles' {
				declare export class HashTag extends ClientValueObject {
		get_name(): string;
		get_useCount(): number
	}

	declare export class HashTagCollection extends SP$ClientObjectCollection<HashTag> {
		itemAt(index: number): HashTag;
		get_item(index: number): HashTag
	}

	declare export class PeopleManager extends SP$ClientObject {
		constructor(context: SP.ClientRuntimeContext): this;
		getTrendingTags(context: SP.ClientRuntimeContext): HashTagCollection;
		isFollowing(
		context: SP.ClientRuntimeContext, possibleFollowerAccountName: string, possibleFolloweeAccountName: string
	): SP.BooleanResult;
		get_editProfileLink(): string;
		get_isMyPeopleListPublic(): boolean;
		getFollowedTags(numberOfTagsToFetch: number): string[];
		getMyProperties(): PersonProperties;
		getPropertiesFor(accountName: string): PersonProperties;
		getUserProfilePropertyFor(accountName: string, propertyName: string): string;
		getUserProfilePropertiesFor(propertiesForUser: UserProfilePropertiesForUser): any[];
		getMySuggestions(): SP.ClientObjectList<PersonProperties>;
		hideSuggestion(accountName: string): void;
		follow(accountName: string): void;
		stopFollowing(accountName: string): void;
		followTag(tagId: string): void;
		stopFollowingTag(tagId: string): void;
		amIFollowing(accountName: string): SP.BooleanResult;
		getPeopleFollowedByMe(): SP.ClientObjectList<PersonProperties>;
		getPeopleFollowedBy(accountName: string): SP.ClientObjectList<PersonProperties>;
		getMyFollowers(): SP.ClientObjectList<PersonProperties>;
		getFollowersFor(accountName: string): SP.ClientObjectList<PersonProperties>;
		amIFollowedBy(accountName: string): SP.BooleanResult;
		setMyProfilePicture(data: SP.Base64EncodedByteArray): void
	}

	declare export class PersonProperties extends SP$ClientObject {
		get_accountName(): string;
		get_directReports(): string[];
		get_displayName(): string;
		get_email(): string;
		get_extendedManagers(): string[];
		get_extendedReports(): string[];
		get_isFollowed(): boolean;
		get_latestPost(): string;
		get_peers(): string[];
		get_personalUrl(): string;
		get_pictureUrl(): string;
		get_title(): string;
		get_userProfileProperties(): {
		[name: string]: string
	};
		get_userUrl(): string
	}

	declare export class ProfileLoader extends SP$ClientObject {
		getProfileLoader(context: SP.ClientRuntimeContext): ProfileLoader;
		getUserProfile(): UserProfile
	}

	declare export class UserProfile extends SP$ClientObject {
		constructor(): this;
		get_followedContent(): FollowedContent;
		get_personalSite(): SP.Site;
		get_personalSiteCapabilities(): PersonalSiteCapabilities;
		get_personalSiteInstantiationState(): PersonalSiteInstantiationState;
		get_pictureImportEnabled(): boolean;
		get_urlToCreatePersonalSite(): string;
		shareAllSocialData(shareAll: boolean): void;
		createPersonalSite(lcid: number): void;
		createPersonalSiteEnque(isInteractive: boolean): void
	}

	declare export class FollowedContent extends SP$ClientObject {
		constructor(context: SP.ClientRuntimeContext): this;
		newObject(context: SP.ClientRuntimeContext): FollowedContent;
		get_followedDocumentsUrl(): string;
		get_followedSitesUrl(): string;
		follow(url: string, data?: FollowedItemData): FollowResult;
		followItem(item: FollowedItem): FollowResult;
		stopFollowing(url: string): void;
		isFollowed(url: string): SP.BooleanResult;
		getFollowedStatus(url: string): SP.IntResult;
		getItem(url: string): FollowedItem;
		getItems(options: FollowedContentQueryOptions, subtype: number): FollowedItem[];
		updateData(url: string, data: FollowedItemData): void;
		refreshFollowedItem(item: FollowedItem): FollowedItem;
		findAndUpdateFollowedItem(url: string): FollowedItem
	}

	declare export class FollowedItem extends SP$ClientValueObject {
		get_data(): {
		[name: string]: any
	};
		set_data(value: {
		[name: string]: any
	}): {
		[name: string]: any
	};
		get_fileType(): string;
		set_fileType(value: string): string;
		get_fileTypeProgid(): string;
		set_fileTypeProgid(value: string): string;
		get_flags(): string;
		set_flags(value: string): string;
		get_hasFeed(): boolean;
		set_hasFeed(value: boolean): boolean;
		get_hidden(): boolean;
		set_hidden(value: boolean): boolean;
		get_iconUrl(): string;
		set_iconUrl(value: string): string;
		get_itemId(): number;
		set_itemId(value: number): number;
		get_itemType(): FollowedItemType;
		set_itemType(value: FollowedItemType): FollowedItemType;
		get_listId(): string;
		set_listId(value: string): string;
		get_parentUrl(): string;
		set_parentUrl(value: string): string;
		get_serverUrlProgid(): string;
		set_serverUrlProgid(value: string): string;
		get_siteId(): string;
		set_siteId(value: string): string;
		get_subtype(): number;
		set_subtype(value: number): number;
		get_title(): string;
		set_title(value: string): string;
		get_uniqueId(): SP.Guid;
		set_uniqueId(value: SP.Guid): SP.Guid;
		get_url(): string;
		set_url(value: string): string;
		get_webId(): SP.Guid;
		set_webId(value: SP.Guid): any
	}

	declare export class FollowedItemData extends SP$ClientObject {
		get_properties(): {
		[name: string]: any
	}
	}

	declare export class FollowResult extends SP$ClientValueObject {
		get_item(): FollowedItem;
		get_resultType(): FollowResultType
	}

	declare export class UserProfilePropertiesForUser extends SP$ClientObject {
		constructor(context: SP.ClientContext, accountName: string, propertyNames: string[]): this;
		get_accountName(): string;
		set_accountName(value: string): string;
		getPropertyNames(): string[]
	}

	
}

declare module 'Utilities' {
				declare export class Utility  {
		lAYOUTS_LATESTVERSION_RELATIVE_URL: string;
		lAYOUTS_LATESTVERSION_URL: string;
		get_layoutsLatestVersionRelativeUrl(): string;
		get_layoutsLatestVersionUrl(): string;
		getLayoutsPageUrl(pageName: string): string;
		getImageUrl(imageName: string): string;
		createWikiPageInContextWeb(
		context: SP.ClientRuntimeContext, parameters: SP.Utilities.WikiPageCreationInformation
	): SP.File;
		localizeWebPartGallery(
		context: SP.ClientRuntimeContext, items: SP.ListItemCollection
	): SP.ClientObjectList<SP.ListItem>;
		getAppLicenseInformation(context: SP.ClientRuntimeContext, productId: SP.Guid): SP.AppLicenseCollection;
		importAppLicense(
		context: SP.ClientRuntimeContext, licenseTokenToImport: string, contentMarket: string, billingMarket: string, appName: string, iconUrl: string, providerName: string, appSubtype: number
	): void;
		getAppLicenseDeploymentId(context: SP.ClientRuntimeContext): SP.GuidResult;
		logCustomAppError(context: SP.ClientRuntimeContext, error: string): SP.IntResult;
		logCustomRemoteAppError(
		context: SP.ClientRuntimeContext, productId: SP.Guid, error: string
	): SP.IntResult;
		getLocalizedString(
		context: SP.ClientRuntimeContext, source: string, defaultResourceFile: string, language: number
	): SP.StringResult;
		createNewDiscussion(context: SP.ClientRuntimeContext, list: SP.List, title: string): SP.ListItem;
		createNewDiscussionReply(context: SP.ClientRuntimeContext, parent: SP.ListItem): SP.ListItem;
		markDiscussionAsFeatured(context: SP.ClientRuntimeContext, listID: string, topicIDs: string): void;
		unmarkDiscussionAsFeatured(context: SP.ClientRuntimeContext, listID: string, topicIDs: string): void;
		searchPrincipals(
		context: SP.ClientRuntimeContext, web: SP.Web, input: string, scopes: SP.Utilities.PrincipalType, sources: SP.Utilities.PrincipalSource, usersContainer: SP.UserCollection, maxCount: number
	): SP.Utilities.PrincipalInfo[];
		getCurrentUserEmailAddresses(context: SP.ClientRuntimeContext): SP.StringResult;
		createEmailBodyForInvitation(context: SP.ClientRuntimeContext, pageAddress: string): SP.StringResult;
		getPeoplePickerURL(
		context: SP.ClientRuntimeContext, web: SP.Web, fieldUser: SP.FieldUser
	): SP.StringResult;
		resolvePrincipal(
		context: SP.ClientRuntimeContext, web: SP.Web, input: string, scopes: SP.Utilities.PrincipalType, sources: SP.Utilities.PrincipalSource, usersContainer: SP.UserCollection, inputIsEmailOnly: boolean
	): SP.Utilities.PrincipalInfo;
		getLowerCaseString(
		context: SP.ClientRuntimeContext, sourceValue: string, lcid: number
	): SP.StringResult;
		formatDateTime(
		context: SP.ClientRuntimeContext, web: SP.Web, datetime: Date, format: SP.Utilities.DateTimeFormat
	): SP.StringResult;
		isUserLicensedForEntityInContext(context: SP.ClientRuntimeContext, licensableEntity: string): SP.BooleanResult
	}

	declare export class EmailProperties extends SP$ClientValueObject {
		get_additionalHeaders(): any;
		set_additionalHeaders(value: any): void;
		get_bCC(): string[];
		set_bCC(value: string[]): void;
		get_body(): string;
		set_body(value: string): void;
		get_cC(): string[];
		set_cC(value: string[]): void;
		get_from(): string;
		set_from(value: string): void;
		get_subject(): string;
		set_subject(value: string): void;
		get_to(): string[];
		set_to(value: string[]): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class PrincipalInfo extends SP$ClientValueObject {
		get_department(): string;
		get_displayName(): string;
		get_email(): string;
		get_jobTitle(): string;
		get_loginName(): string;
		get_mobile(): string;
		get_principalId(): number;
		get_principalType(): SP.Utilities.PrincipalType;
		get_sIPAddress(): string;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class WikiPageCreationInformation extends SP$ClientValueObject {
		get_serverRelativeUrl(): string;
		set_serverRelativeUrl(value: string): void;
		get_wikiHtmlContent(): string;
		set_wikiHtmlContent(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class DateUtility  {
		isLeapYear(year: number): boolean;
		dateToJulianDay(year: number, month: number, day: number): number;
		julianDayToDate(julianDay: number): SP.DateTimeUtil.SimpleDate;
		daysInMonth(year: number, month: number): number
	}

	declare export class HttpUtility  {
		htmlEncode(stringToEncode: string): string;
		urlPathEncode(stringToEncode: string): string;
		urlKeyValueEncode(keyOrValueToEncode: string): string;
		ecmaScriptStringLiteralEncode(scriptLiteralToEncode: string): string;
		navigateTo(url: string): void;
		appendSourceAndNavigateTo(url: string): void;
		escapeXmlText(stringToEscape: string): string;
		navigateHttpFolder(urlSrc: string, frameTarget: string): void
	}

	declare export class UrlBuilder  {
		constructor(path: string): this;
		urlCombine(path1: string, path2: string): string;
		replaceOrAddQueryString(url: string, key: string, value: string): string;
		removeQueryString(url: string, key: string): string;
		combinePath(path: string): void;
		addKeyValueQueryString(key: string, value: string): void;
		get_url(): string;
		toString(): string
	}

	declare export class LocUtility  {
		getLocalizedCountValue(locText: string, intervals: string, count: number): string
	}

	declare export class VersionUtility  {
		get_layoutsLatestVersionRelativeUrl(): string;
		get_layoutsLatestVersionUrl(): string;
		getLayoutsPageUrl(pageName: string): string;
		getImageUrl(imageName: string): string
	}

	declare export class Set  {
		constructor(items?: {
		[item: string]: number
	}): this;
		constructor(items?: {
		[item: number]: number
	}): this;
		IsEmpty(): boolean;
		First(): any;
		GetCollection(): any;
		ToArray(): any[];
		AddArray(array: any[]): SP.Utilities.Set;
		Add(item: any): any;
		Remove(item: any): any;
		Clear(): SP.Utilities.Set;
		Contains(item: any): boolean;
		Clone(): SP.Utilities.Set;
		SymmetricDifference(otherSet: SP.Utilities.Set): SP.Utilities.Set;
		Difference(otherSet: SP.Utilities.Set): SP.Utilities.Set;
		Union(otherSet: SP.Utilities.Set): SP.Utilities.Set;
		UnionWith(otherSet: SP.Utilities.Set): SP.Utilities.Set;
		Intersection(otherSet: SP.Utilities.Set): SP.Utilities.Set
	}

	
}

declare module 'DateTimeUtil' {
				declare export class SimpleDate  {
		constructor(year: number, month: number, day: number, era: number): this;
		get_year(): number;
		set_year(value: number): void;
		get_month(): number;
		set_month(value: number): void;
		get_day(): number;
		set_day(value: number): void;
		get_era(): number;
		set_era(value: number): void;
		dateEquals(date1: SimpleDate, date2: SimpleDate): boolean;
		dateLessEqual(date1: SimpleDate, date2: SimpleDate): boolean;
		dateGreaterEqual(date1: SimpleDate, date2: SimpleDate): boolean;
		dateLess(date1: SimpleDate, date2: SimpleDate): boolean;
		dateGreater(date1: SimpleDate, date2: SimpleDate): boolean
	}

	
}

declare module 'WebParts' {
				declare export class LimitedWebPartManager extends SP$ClientObject {
		get_hasPersonalizedParts(): boolean;
		get_scope(): SP.WebParts.PersonalizationScope;
		get_webParts(): SP.WebParts.WebPartDefinitionCollection;
		addWebPart(
		webPart: SP.WebParts.WebPart, zoneId: string, zoneIndex: number
	): SP.WebParts.WebPartDefinition;
		importWebPart(webPartXml: string): SP.WebParts.WebPartDefinition
	}

	declare export class TileData extends SP$ClientValueObject {
		get_backgroundImageLocation(): string;
		set_backgroundImageLocation(value: string): void;
		get_description(): string;
		set_description(value: string): void;
		get_iD(): number;
		set_iD(value: number): void;
		get_linkLocation(): string;
		set_linkLocation(value: string): void;
		get_tileOrder(): number;
		set_tileOrder(value: number): void;
		get_title(): string;
		set_title(value: string): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class WebPart extends SP$ClientObject {
		get_hidden(): boolean;
		set_hidden(value: boolean): void;
		get_isClosed(): boolean;
		get_properties(): SP.PropertyValues;
		get_subtitle(): string;
		get_title(): string;
		set_title(value: string): void;
		get_titleUrl(): string;
		set_titleUrl(value: string): void;
		get_zoneIndex(): number
	}

	declare export class WebPartDefinition extends SP$ClientObject {
		get_id(): SP.Guid;
		get_webPart(): SP.WebParts.WebPart;
		saveWebPartChanges(): void;
		closeWebPart(): void;
		openWebPart(): void;
		deleteWebPart(): void;
		moveWebPartTo(zoneID: string, zoneIndex: number): void
	}

	declare export class WebPartDefinitionCollection extends SP$ClientObjectCollection<WebPartDefinition> {
		itemAt(index: number): SP.WebParts.WebPartDefinition;
		get_item(index: number): SP.WebParts.WebPartDefinition;
		getById(id: SP.Guid): SP.WebParts.WebPartDefinition;
		getByControlId(controlId: string): SP.WebParts.WebPartDefinition
	}

	
}

declare module 'Workflow' {
				declare export class WorkflowAssociation extends SP$ClientObject {
		get_allowManual(): boolean;
		set_allowManual(value: boolean): void;
		get_associationData(): string;
		set_associationData(value: string): void;
		get_autoStartChange(): boolean;
		set_autoStartChange(value: boolean): void;
		get_autoStartCreate(): boolean;
		set_autoStartCreate(value: boolean): void;
		get_baseId(): SP.Guid;
		get_created(): Date;
		get_description(): string;
		set_description(value: string): void;
		get_enabled(): boolean;
		set_enabled(value: boolean): void;
		get_historyListTitle(): string;
		set_historyListTitle(value: string): void;
		get_id(): SP.Guid;
		get_instantiationUrl(): string;
		get_internalName(): string;
		get_isDeclarative(): boolean;
		get_listId(): SP.Guid;
		get_modified(): Date;
		get_name(): string;
		set_name(value: string): void;
		get_taskListTitle(): string;
		set_taskListTitle(value: string): void;
		get_webId(): SP.Guid;
		update(): void;
		deleteObject(): void
	}

	declare export class WorkflowAssociationCollection extends SP$ClientObjectCollection<WorkflowAssociation> {
		itemAt(index: number): SP.Workflow.WorkflowAssociation;
		get_item(index: number): SP.Workflow.WorkflowAssociation;
		getById(associationId: SP.Guid): SP.Workflow.WorkflowAssociation;
		add(
		parameters: SP.Workflow.WorkflowAssociationCreationInformation
	): SP.Workflow.WorkflowAssociation;
		getByName(name: string): SP.Workflow.WorkflowAssociation
	}

	declare export class WorkflowAssociationCreationInformation extends SP$ClientValueObject {
		get_contentTypeAssociationHistoryListName(): string;
		set_contentTypeAssociationHistoryListName(value: string): void;
		get_contentTypeAssociationTaskListName(): string;
		set_contentTypeAssociationTaskListName(value: string): void;
		get_historyList(): SP.List;
		set_historyList(value: SP.List): void;
		get_name(): string;
		set_name(value: string): void;
		get_taskList(): SP.List;
		set_taskList(value: SP.List): void;
		get_template(): SP.Workflow.WorkflowTemplate;
		set_template(value: SP.Workflow.WorkflowTemplate): void;
		get_typeId(): string;
		writeToXml(writer: SP.XmlWriter, serializationContext: SP.SerializationContext): void;
		constructor(): this
	}

	declare export class WorkflowTemplate extends SP$ClientObject {
		get_allowManual(): boolean;
		get_associationUrl(): string;
		get_autoStartChange(): boolean;
		get_autoStartCreate(): boolean;
		get_description(): string;
		get_id(): SP.Guid;
		get_isDeclarative(): boolean;
		get_name(): string;
		get_permissionsManual(): SP.BasePermissions
	}

	declare export class WorkflowTemplateCollection extends SP$ClientObjectCollection<WorkflowTemplate> {
		itemAt(index: number): SP.Workflow.WorkflowTemplate;
		get_item(index: number): SP.Workflow.WorkflowTemplate;
		getById(templateId: SP.Guid): SP.Workflow.WorkflowTemplate;
		getByName(name: string): SP.Workflow.WorkflowTemplate
	}

	
}

declare module 'WorkflowServices' {
				declare export class InteropService extends SP$ClientObject {
		constructor(context: SP.ClientRuntimeContext, objectPath: SP.ObjectPathStaticProperty): this;
		getCurrent(context: SP.ClientRuntimeContext): InteropService;
		enableEvents(listId: SP.Guid, itemGuid: SP.Guid): void;
		disableEvents(listId: SP.Guid, itemGuid: SP.Guid): void;
		startWorkflow(
		associationName: string, correlationId: SP.Guid, listId: SP.Guid, itemGuid: SP.Guid, workflowParameters: any
	): SP.GuidResult;
		cancelWorkflow(instanceId: SP.Guid): void
	}

	declare export class WorkflowDefinition extends SP$ClientObject {
		constructor(context: SP.ClientRuntimeContext): this;
		get_associationUrl(): string;
		set_associationUrl(value: string): string;
		get_description(): string;
		set_description(value: string): string;
		get_displayName(): string;
		set_displayName(value: string): string;
		get_draftVersion(): string;
		set_draftVersion(value: string): string;
		get_formField(): string;
		set_formField(value: string): string;
		get_id(): string;
		set_id(value: string): string;
		get_initiationUrl(): string;
		set_initiationUrl(value: string): string;
		get_properties(): {
		[propertyName: string]: any
	};
		get_published(): boolean;
		get_requiresAssociationForm(): boolean;
		set_requiresAssociationForm(value: boolean): boolean;
		get_requiresInitiationForm(): boolean;
		set_requiresInitiationForm(value: boolean): boolean;
		get_restrictToScope(): string;
		set_restrictToScope(value: string): string;
		get_restrictToType(): string;
		set_restrictToType(value: string): string;
		get_xaml(): string;
		set_xaml(value: string): string;
		setProperty(propertyName: string, value: string): void;
		initPropertiesFromJson(parentNode: any): void
	}

	declare export class WorkflowDefinitionCollection extends SP$ClientObjectCollection<WorkflowDefinition> {
		itemAt(index: number): WorkflowDefinition;
		get_item(index: number): WorkflowDefinition;
		get_childItemType(): any
	}

	declare export class WorkflowDeploymentService extends SP$ClientObject {
		getDesignerActions(web: SP.Web): SP.StringResult;
		getActivitySignatures(lastChanged: string): SP.ClientResult<any>;
		saveDefinition(definition: WorkflowDefinition): SP.GuidResult;
		validateActivity(activityXaml: string): SP.StringResult;
		publishDefinition(definitionId: string): void;
		deprecateDefinition(definitionId: string): void;
		deleteDefinition(definitionId: string): void;
		enumerateDefinitions(publishedOnly: boolean): WorkflowDefinitionCollection;
		getDefinition(definitionId: string): WorkflowDefinition;
		saveCollateral(
		workflowDefinitionId: string, leafFileName: string, fileContent: Base64EncodedByteArray
	): void;
		deleteCollateral(workflowDefinitionId: string, leafFileName: string): void;
		getCollateralUri(workflowDefinitionId: string, leafFileName: string): SP.StringResult;
		packageDefinition(
		definitionId: SP.Guid, packageDefaultFilename: string, packageTitle: string, packageDescription: string
	): SP.StringResult
	}

	declare export class WorkflowInstance extends SP$ClientObject {
		get_faultInfo(): string;
		get_id(): string;
		get_instanceCreated(): string;
		get_lastUpdated(): string;
		get_properties(): {
		[name: string]: string
	};
		get_status(): WorkflowStatus;
		get_userStatus(): string;
		set_userStatus(value: string): string;
		get_workflowSubscriptionId(): SP.Guid;
		initPropertiesFromJson(parentNode: any): void
	}

	declare export class WorkflowInstanceCollection extends SP$ClientObjectCollection<WorkflowInstance> {
		itemAt(index: number): WorkflowInstance;
		get_item(index: number): WorkflowInstance;
		get_childItemType(): any
	}

	declare export class WorkflowInstanceService extends SP$ClientObject {
		startWorkflow(
		subscription: WorkflowSubscription, payload: {
		[name: string]: any
	}
	): SP.GuidResult;
		startWorkflowOnListItem(
		subscription: WorkflowSubscription, itemId: number, payload: {
		[name: string]: any
	}
	): SP.GuidResult;
		getInstance(instanceId: string): WorkflowInstance;
		enumerate(parentSubscription: WorkflowSubscription): WorkflowInstanceCollection;
		enumerateWithOffset(
		parentSubscription: WorkflowSubscription, offset: number
	): WorkflowInstanceCollection;
		enumerateInstancesForListItem(listId: string, itemId: number): WorkflowInstanceCollection;
		enumerateInstancesForListItemWithOffset(listId: string, itemId: number, offset: number): WorkflowInstanceCollection;
		enumerateInstancesForSite(): WorkflowInstanceCollection;
		enumerateInstancesForSiteWithOffset(offset: number): WorkflowInstanceCollection;
		countInstances(parentSubscription: WorkflowSubscription): SP.IntResult;
		countInstancesWithStatus(parentSubscription: WorkflowSubscription, status: WorkflowStatus): SP.IntResult;
		cancelWorkflow(instance: WorkflowInstance): void;
		terminateWorkflow(instance: WorkflowInstance): void;
		suspendWorkflow(instance: WorkflowInstance): void;
		resumeWorkflow(instance: WorkflowInstance): void;
		publishCustomEvent(instance: WorkflowInstance, eventName: string, payload: string): void;
		getDebugInfo(instance: WorkflowInstance): SP.StringResult
	}

	declare export class WorkflowServicesManager extends SP$ClientObject {
		constructor(context: SP.ClientRuntimeContext, web: SP.Web): this;
		newObject(context: SP.ClientRuntimeContext, web: SP.Web): WorkflowServicesManager;
		get_appId(): string;
		get_isConnected(): boolean;
		get_scopePath(): string;
		getWorkflowDeploymentService(): WorkflowDeploymentService;
		getWorkflowInstanceService(): WorkflowInstanceService;
		getWorkflowInteropService(): InteropService;
		getWorkflowSubscriptionService(): WorkflowSubscriptionService;
		initPropertiesFromJson(parentNode: any): void
	}

	declare export class WorkflowSubscription extends SP$ClientObject {
		get_definitionId(): SP.Guid;
		set_definitionId(value: SP.Guid): SP.Guid;
		get_enabled(): boolean;
		set_enabled(value: boolean): boolean;
		get_eventSourceId(): string;
		set_eventSourceId(value: string): string;
		get_eventTypes(): string[];
		set_eventTypes(value: string[]): string[];
		get_id(): string;
		set_id(value: string): string;
		get_manualStartBypassesActivationLimit(): boolean;
		set_manualStartBypassesActivationLimit(value: boolean): boolean;
		get_name(): string;
		set_name(value: string): string;
		get_propertyDefinitions(): any;
		get_statusFieldName(): string;
		set_statusFieldName(value: string): string;
		setProperty(propertyName: string, value: string): void;
		initPropertiesFromJson(parentNode: any): void
	}

	declare export class WorkflowSubscriptionCollection extends SP$ClientObjectCollection<WorkflowSubscription> {
		itemAt(index: number): WorkflowSubscription;
		get_item(index: number): WorkflowSubscription;
		get_childItemType(): any
	}

	declare export class WorkflowSubscriptionService extends SP$ClientObject {
		constructor(context: SP.ClientRuntimeContext, objectPath: SP.ObjectPathStaticProperty): this;
		getCurrent(context: SP.ClientRuntimeContext): WorkflowSubscriptionService;
		publishSubscription(subscription: WorkflowSubscription): SP.GuidResult;
		publishSubscriptionForList(subscription: WorkflowSubscription, listId: string): SP.GuidResult;
		registerInterestInList(listId: string, eventName: string): void;
		unregisterInterestInList(listId: string, eventName: string): void;
		getSubscription(subscriptionId: SP.Guid): WorkflowSubscription;
		deleteSubscription(subscriptionId: SP.Guid): WorkflowSubscription;
		enumerateSubscriptions(): WorkflowSubscriptionCollection;
		enumerateSubscriptionsByDefinition(definitionId: string): WorkflowSubscriptionCollection;
		enumerateSubscriptionsByEventSource(eventSourceId: string): WorkflowSubscriptionCollection;
		enumerateSubscriptionsByList(listId: string): WorkflowSubscriptionCollection
	}

	
}

declare module 'Publishing' {
				declare export class PublishingWeb extends ClientObject {
		getPublishingWeb(context: ClientContext, web: Web): PublishingWeb;
		get_web(): Web;
		addPublishingPage(pageInformation: PublishingPageInformation): PublishingPage
	}

	declare export class PublishingPageInformation extends ClientValueObject {
		get_folder(): Folder;
		set_folder(value: Folder): Folder;
		get_name(): string;
		set_name(value: string): string;
		get_pageLayoutListItem(): ListItem;
		set_pageLayoutListItem(value: ListItem): ListItem
	}

	declare export class PublishingPage extends ScheduledItem {
		getPublishingPage(context: ClientContext, sourceListItem: ListItem): PublishingPage;
		addFriendlyUrl(
		friendlyUrlSegment: string, editableParent: Navigation.NavigationTermSetItem, doAddToNavigation: boolean
	): StringResult
	}

	declare export class ScheduledItem extends ClientObject {
		get_listItem(): ListItem;
		get_startDate(): Date;
		set_startDate(value: Date): Date;
		get_endDate(): Date;
		set_endDate(value: Date): Date;
		schedule(approvalComment: string): void
	}

	declare export class PublishingSite extends ClientObject {
		createPageLayout(context: ClientContext, parameters: PageLayoutCreationInformation): void
	}

	declare export class PageLayoutCreationInformation extends ClientValueObject {
		get_web(): Web;
		set_web(value: Web): Web;
		get_associatedContentTypeId(): string;
		set_associatedContentTypeId(value: string): string;
		get_masterPageUrl(): string;
		set_masterPageUrl(value: string): string;
		get_newPageLayoutNameWithoutExtension(): string;
		set_newPageLayoutNameWithoutExtension(value: string): string;
		get_newPageLayoutEditablePath(): string;
		set_newPageLayoutEditablePath(value: string): string
	}

	declare export class SiteServicesAddins  {
		getSettings(context: ClientContext, addinId: Guid): AddinSettings;
		setSettings(context: ClientContext, addin: AddinSettings): void;
		deleteSettings(context: ClientContext, addinId: Guid): void;
		getPlugin(context: ClientContext, pluginName: string): AddinPlugin;
		setPlugin(context: ClientContext, addin: AddinPlugin): void;
		deletePlugin(context: ClientContext, pluginName: string): void
	}

	declare export class AddinSettings extends ClientObject {
		constructor(ctx: ClientContext, id: Guid): this;
		get_id(): Guid;
		get_title(): string;
		set_title(value: string): string;
		get_description(): string;
		set_description(value: string): string;
		get_enabled(): boolean;
		set_enabled(value: boolean): boolean;
		get_namespace(): boolean;
		set_namespace(value: boolean): boolean;
		get_headScript(): string;
		set_headScript(value: string): string;
		get_htmlStartBody(): string;
		set_htmlStartBody(value: string): string;
		get_htmlEndBody(): string;
		set_htmlEndBody(value: string): string;
		get_metaTagPagePropertyMappings(): {
		[key: string]: string
	};
		set_metaTagPagePropertyMappings(value: {
		[key: string]: string
	}): {
		[key: string]: string
	}
	}

	declare export class AddinPlugin extends ClientObject {
		constructor(ctx: ClientContext): this;
		get_description(): string;
		set_description(value: string): string;
		get_markup(): string;
		set_markup(value: string): string;
		get_title(): string;
		set_title(value: string): string
	}

	declare export class DesignPackage  {
		install(
		context: ClientContext, site: Site, info: DesignPackageInfo, path: string
	): void;
		uninstall(context: ClientContext, site: Site, info: DesignPackageInfo): void;
		apply(context: ClientContext, site: Site, info: DesignPackageInfo): void;
		exportEnterprise(
		context: ClientContext, site: Site, includeSearchConfiguration: boolean
	): ClientResult<DesignPackageInfo>;
		exportSmallBusiness(
		context: ClientContext, site: Site, packageName: string, includeSearchConfiguration: boolean
	): ClientResult<DesignPackageInfo>
	}

	declare export class DesignPackageInfo extends ClientValueObject {
		get_packageName(): string;
		set_packageName(value: string): string;
		get_packageGuid(): Guid;
		set_packageGuid(value: Guid): Guid;
		get_majorVersion(): number;
		set_majorVersion(value: number): number;
		get_minorVersion(): number;
		set_minorVersion(value: number): number
	}

	declare export class SiteImageRenditions  {
		getRenditions(context: ClientContext): ImageRendition[];
		setRenditions(context: ClientContext, renditions: ImageRendition[]): void
	}

	declare export class ImageRendition extends ClientValueObject {
		get_id(): number;
		get_version(): number;
		get_name(): string;
		set_name(value: string): string;
		get_width(): number;
		set_width(value: number): number;
		get_height(): number;
		set_height(value: number): number
	}

	declare export class Variations extends ClientObject {
		getLabels(context: ClientContext): ClientObjectList<VariationLabel>;
		getPeerUrl(context: ClientContext, currentUrl: string, labelTitle: string): StringResult;
		updateListItems(context: ClientContext, listId: Guid, itemIds: number[]): void
	}

	declare export class VariationLabel extends ClientObject {
		get_displayName(): string;
		set_displayName(value: string): string;
		get_isSource(): boolean;
		set_isSource(value: boolean): boolean;
		get_language(): string;
		set_language(value: string): string;
		get_locale(): string;
		set_locale(value: string): string;
		get_title(): string;
		set_title(value: string): string;
		get_topWebUrl(): string;
		set_topWebUrl(value: string): string
	}

	declare export class CustomizableString extends ClientObject {
		get_defaultValue(): string;
		get_value(): string;
		set_value(value: string): string;
		get_usesDefaultValue(): boolean;
		set_usesDefaultValue(value: boolean): boolean
	}

	
}

declare module 'Navigation' {
				declare export class NavigationTermSetItem extends ClientObject {
		get_id(): Guid;
		get_isReadOnly(): boolean;
		get_linkType(): NavigationLinkType;
		set_linkType(value: NavigationLinkType): NavigationLinkType;
		get_targetUrlForChildTerms(): CustomizableString;
		get_catalogTargetUrlForChildTerms(): CustomizableString;
		get_taxonomyName(): string;
		get_title(): CustomizableString;
		get_terms(): NavigationTermCollection;
		get_view(): NavigationTermSetView;
		createTerm(termName: string, linkType: NavigationLinkType, termId: Guid): Taxonomy.Term;
		getTaxonomyTermStore(): Taxonomy.TermStore;
		getResolvedDisplayUrl(browserQueryString: string): StringResult
	}

	declare export class NavigationTermCollection extends ClientObjectCollection<NavigationTerm> {
		
	}

	declare export class NavigationTerm extends NavigationTermSetItem {
		get_associatedFolderUrl(): string;
		set_associatedFolderUrl(value: string): string;
		get_catalogTargetUrl(): CustomizableString;
		get_categoryImageUrl(): string;
		set_categoryImageUrl(value: string): string;
		get_excludedProviders(): NavigationTermProviderNameCollection;
		get_excludeFromCurrentNavigation(): boolean;
		set_excludeFromCurrentNavigation(value: boolean): boolean;
		get_excludeFromGlobalNavigation(): boolean;
		set_excludeFromGlobalNavigation(value: boolean): boolean;
		get_friendlyUrlSegment(): CustomizableString;
		get_hoverText(): string;
		set_hoverText(value: string): string;
		get_isDeprecated(): boolean;
		get_isPinned(): boolean;
		get_isPinnedRoot(): boolean;
		get_parent(): NavigationTerm;
		get_simpleLinkUrl(): string;
		set_simpleLinkUrl(value: string): string;
		get_targetUrl(): CustomizableString;
		get_termSet(): NavigationTermSet;
		getAsEditable(taxonomySession: Taxonomy.TaxonomySession): NavigationTerm;
		getWithNewView(newView: NavigationTermSetView): NavigationTerm;
		getResolvedTargetUrl(browserQueryString: string, remainingUrlSegments: string[]): StringResult;
		getResolvedTargetUrlWithoutQuery(): StringResult;
		getResolvedAssociatedFolderUrl(): StringResult;
		getWebRelativeFriendlyUrl(): StringResult;
		getAllParentTerms(): NavigationTermCollection;
		getTaxonomyTerm(): Taxonomy.Term;
		move(newParent: NavigationTermSetItem): void;
		deleteObject(): void;
		getAsResolvedByWeb(
		context: ClientContext, term: Taxonomy.Term, web: Web, siteMapProviderName: string
	): NavigationTerm;
		getAsResolvedByView(
		context: ClientContext, term: Taxonomy.Term, view: NavigationTermSetView
	): NavigationTerm
	}

	declare export class NavigationTermSet extends NavigationTermSetItem {
		get_isNavigationTermSet(): boolean;
		set_isNavigationTermSet(value: boolean): boolean;
		get_lcid(): number;
		get_loadedFromPersistedData(): boolean;
		get_termGroupId(): Guid;
		get_termStoreId(): Guid;
		getAsEditable(taxonomySession: Taxonomy.TaxonomySession): NavigationTermSet;
		getWithNewView(newView: NavigationTermSetView): NavigationTermSet;
		getTaxonomyTermSet(): Taxonomy.TermSet;
		getAllTerms(): NavigationTermCollection;
		findTermForUrl(url: string): NavigationTerm;
		getAsResolvedByWeb(
		context: ClientContext, termSet: Taxonomy.TermSet, web: Web, siteMapProviderName: string
	): NavigationTermSet;
		getAsResolvedByView(
		context: ClientContext, termSet: Taxonomy.TermSet, view: NavigationTermSetView
	): NavigationTermSet
	}

	declare export class NavigationTermProviderNameCollection extends ClientObjectCollection<string> {
		Add(item: string): void;
		Clear(): void;
		Remove(item: string): BooleanResult
	}

	declare export class NavigationTermSetView extends ClientObject {
		constructor(context: ClientContext, web: Web, siteMapProviderName: string): this;
		get_excludeDeprecatedTerms(): boolean;
		set_excludeDeprecatedTerms(value: boolean): boolean;
		get_excludeTermsByPermissions(): boolean;
		set_excludeTermsByPermissions(value: boolean): boolean;
		get_excludeTermsByProvider(): boolean;
		set_excludeTermsByProvider(value: boolean): boolean;
		get_serverRelativeSiteUrl(): string;
		get_serverRelativeWebUrl(): string;
		get_siteMapProviderName(): string;
		set_siteMapProviderName(value: string): string;
		get_webId(): Guid;
		get_webTitle(): string;
		getCopy(): NavigationTermSetView;
		createEmptyInstance(context: ClientContext): NavigationTermSetView
	}

	declare export class TaxonomyNavigation  {
		getWebNavigationSettings(context: ClientContext, web: Web): WebNavigationSettings;
		getTermSetForWeb(
		context: ClientContext, web: Web, siteMapProviderName: string, includeInheritedSettings: boolean
	): NavigationTermSet;
		setCrawlAsFriendlyUrlPage(
		context: ClientContext, navigationTerm: Taxonomy.Term, crawlAsFriendlyUrlPage: boolean
	): BooleanResult;
		getNavigationLcidForWeb(context: ClientContext, web: Web): IntResult;
		flushSiteFromCache(context: ClientContext, site: Site): void;
		flushWebFromCache(context: ClientContext, web: Web): void;
		flushTermSetFromCache(
		context: ClientContext, webForPermissions: Web, termStoreId: Guid, termSetId: Guid
	): void
	}

	declare export class WebNavigationSettings extends ClientObject {
		constructor(context: ClientContext, web: Web): this;
		get_addNewPagesToNavigation(): boolean;
		set_addNewPagesToNavigation(value: boolean): boolean;
		get_createFriendlyUrlsForNewPages(): boolean;
		set_createFriendlyUrlsForNewPages(value: boolean): boolean;
		get_currentNavigation(): StandardNavigationSettings;
		get_globalNavigation(): StandardNavigationSettings;
		update(taxonomySession: Taxonomy.TaxonomySession): void;
		resetToDefaults(): void
	}

	declare export class StandardNavigationSettings extends ClientObject {
		get_termSetId(): Guid;
		set_termSetId(value: Guid): Guid;
		get_termStoreId(): Guid;
		set_termStoreId(value: Guid): Guid;
		get_source(): StandardNavigationSource;
		set_source(value: StandardNavigationSource): StandardNavigationSource
	}

	
}

declare module 'CompliancePolicy' {
				declare export class SPContainerId extends ClientObject {
		createFromList(context: ClientRuntimeContext, list: List): SPContainerId;
		createFromWeb(context: ClientRuntimeContext, web: Web): SPContainerId;
		createFromSite(context: ClientRuntimeContext, site: Site): SPContainerId;
		create(context: ClientRuntimeContext, containerId: any): SPContainerId;
		get_containerType(): ContentType;
		set_containerType(value: ContentType): ContentType;
		get_listId(): SP.Guid;
		set_listId(value: SP.Guid): SP.Guid;
		get_siteId(): SP.Guid;
		set_siteId(value: SP.Guid): SP.Guid;
		get_siteUrl(): string;
		set_siteUrl(value: string): string;
		get_tenantId(): SP.Guid;
		set_tenantId(value: SP.Guid): SP.Guid;
		get_title(): string;
		set_title(value: string): string;
		get_version(): any;
		set_version(value: any): any;
		get_webId(): SP.Guid;
		set_webId(value: SP.Guid): SP.Guid;
		serialize(): SP.StringResult
	}

	declare export class SPPolicyAssociation extends ClientObject {
		get_allowOverride(): boolean;
		set_allowOverride(value: boolean): boolean;
		get_comment(): string;
		set_comment(value: string): string;
		get_defaultPolicyDefinitionConfigId(): any[];
		set_defaultPolicyDefinitionConfigId(value: any[]): any[];
		get_description(): string;
		set_description(value: string): string;
		get_identity(): boolean;
		set_identity(value: boolean): boolean;
		get_name(): string;
		set_name(value: string): string;
		get_policyApplyStatus(): any;
		set_policyApplyStatus(value: any): any;
		get_policyDefinitionConfigIds(): any[];
		set_policyDefinitionConfigIds(value: any[]): any[];
		get_scope(): any;
		set_scope(value: any): any;
		get_source(): any;
		set_source(value: any): any;
		get_version(): any;
		set_version(value: any): any;
		get_whenAppliedUTC(): Date;
		set_whenAppliedUTC(value: Date): Date;
		get_whenChangedUTC(): Date;
		set_whenChangedUTC(value: Date): Date;
		get_whenCreatedUTC(): Date;
		set_whenCreatedUTC(value: Date): Date
	}

	declare export class SPPolicyBinding extends ClientObject {
		get_identity(): any;
		set_identity(value: any): any;
		get_isExempt(): boolean;
		set_isExempt(value: boolean): boolean;
		get_mode(): any;
		set_mode(value: any): any;
		get_name(): string;
		set_name(value: string): string;
		get_policyApplyStatus(): any;
		set_policyApplyStatus(value: any): any;
		get_policyAssociationConfigId(): any;
		set_policyAssociationConfigId(value: any): any;
		get_policyDefinitionConfigId(): any;
		set_policyDefinitionConfigId(value: any): any;
		get_policyRuleConfigId(): any;
		set_policyRuleConfigId(value: any): any;
		get_scope(): any;
		set_scope(value: any): any;
		get_source(): any;
		set_source(value: any): any;
		get_version(): any;
		set_version(value: any): any;
		get_whenAppliedUTC(): Date;
		set_whenAppliedUTC(value: Date): Date;
		get_whenChangedUTC(): Date;
		set_whenChangedUTC(value: Date): Date;
		get_whenCreatedUTC(): Date;
		set_whenCreatedUTC(value: Date): Date
	}

	declare export class SPPolicyDefinition extends ClientObject {
		get_comment(): string;
		set_comment(value: string): string;
		get_createdBy(): any;
		set_createdBy(value: any): any;
		get_defaultPolicyRuleConfigId(): any;
		set_defaultPolicyRuleConfigId(value: any): any;
		get_description(): string;
		set_description(value: string): string;
		get_enabled(): boolean;
		set_enabled(value: boolean): boolean;
		get_identity(): any;
		set_identity(value: any): any;
		get_lastModifiedBy(): any;
		set_lastModifiedBy(value: any): any;
		get_name(): string;
		set_name(value: string): string;
		get_mode(): any;
		set_mode(value: any): any;
		get_scenario(): any;
		set_scenario(value: any): any;
		get_source(): any;
		set_source(value: any): any;
		get_version(): any;
		set_version(value: any): any;
		get_whenChangedUTC(): Date;
		set_whenChangedUTC(value: Date): Date;
		get_whenCreatedUTC(): Date;
		set_whenCreatedUTC(value: Date): Date
	}

	declare export class SPPolicyRule extends ClientObject {
		get_comment(): string;
		set_comment(value: string): string;
		get_createdBy(): any;
		set_createdBy(value: any): any;
		get_description(): string;
		set_description(value: string): string;
		get_enabled(): boolean;
		set_enabled(value: boolean): boolean;
		get_identity(): any;
		set_identity(value: any): any;
		get_lastModifiedBy(): any;
		set_lastModifiedBy(value: any): any;
		get_mode(): any;
		set_mode(value: any): any;
		get_name(): string;
		set_name(value: string): string;
		get_policyDefinitionConfigId(): any;
		set_policyDefinitionConfigId(value: any): any;
		get_priority(): any;
		set_priority(value: any): any;
		get_ruleBlob(): any;
		set_ruleBlob(value: any): any;
		get_whenChangedUTC(): Date;
		set_whenChangedUTC(value: Date): Date;
		get_whenCreatedUTC(): Date;
		set_whenCreatedUTC(value: Date): Date
	}

	declare export class SPPolicyStore extends ClientObject {
		constructor(context: ClientRuntimeContext, web: Web): this;
		createPolicyDefinition(context: ClientRuntimeContext): SPPolicyDefinition;
		createPolicyBinding(context: ClientRuntimeContext): SPPolicyBinding;
		createPolicyAssociation(context: ClientRuntimeContext): SPPolicyAssociation;
		createPolicyRule(context: ClientRuntimeContext): SPPolicyRule;
		updatePolicyRule(policyRule: SPPolicyRule): void;
		getPolicyRule(policyRuleId: any, throwIfNull: boolean): SPPolicyRule;
		deletePolicyRule(policyRuleId: any): void;
		notifyUnifiedPolicySync(
		notificationId: any, syncSvcUrl: string, changeInfos: any, syncNow: boolean, fullSyncForTenant: boolean
	): void;
		updatePolicyDefinition(policyDefinition: SPPolicyDefinition): void;
		getPolicyDefinition(policyDefinitionId: any): SPPolicyDefinition;
		deletePolicyDefinition(policyDefinitionId: any): void;
		getPolicyDefinitions(scenario: any): ClientObjectList<SPPolicyDefinition>;
		updatePolicyBinding(policyBinding: SPPolicyBinding): void;
		getPolicyBinding(policyBindingId: any): SPPolicyBinding;
		deletePolicyBinding(policyBindingId: any): void;
		updatePolicyAssociation(policyAssociation: SPPolicyAssociation): void;
		getPolicyAssociation(policyAssociationId: any): SPPolicyAssociation;
		getPolicyAssociationForContainer(containerId: SPContainerId): SPPolicyAssociation;
		deletePolicyAssociation(policyAssociationId: any): void
	}

	declare export class SPPolicyStoreProxy extends ClientObject {
		constructor(context: ClientRuntimeContext, web: Web): this;
		get_policyStoreUrl(): string
	}

	
}

declare module 'Discovery' {
				declare export class Case extends ClientObject {
		constructor(context: ClientRuntimeContext, web: Web): this;
		getExportContent(sourceIds: number[]): SP.StringResult
	}

	declare export class Export extends ClientObject {
		constructor(context: ClientRuntimeContext, item: ListItem): this;
		get_status(): ExportStatus;
		set_status(value: ExportStatus): ExportStatus;
		update(): void;
		getExportContent(): SP.StringResult
	}

	
}

declare module 'InformationPolicy' {
				declare export class ProjectPolicy extends SP$ClientObject {
		constructor(context: ClientRuntimeContext, objectPath: ObjectPath): this;
		get_description(): string;
		get_emailBody(): string;
		set_emailBody(value: string): string;
		get_emailBodyWithTeamMailbox(): string;
		set_emailBodyWithTeamMailbox(value: string): string;
		get_emailSubject(): string;
		set_emailSubject(value: string): string;
		get_name(): string;
		savePolicy(): void;
		getProjectPolicies(context: ClientRuntimeContext, web: Web): ClientObjectList<ProjectPolicy>;
		getCurrentlyAppliedProject(context: ClientRuntimeContext, web: Web): ProjectPolicy;
		applyProjectPolicy(context: ClientRuntimeContext, web: Web, projectPolicy: ProjectPolicy): void;
		openProject(context: ClientRuntimeContext, web: Web): void;
		closeProject(context: ClientRuntimeContext, web: Web): void;
		postponeProject(context: ClientRuntimeContext, web: Web): void;
		doesProjectHavePolicy(context: ClientRuntimeContext, web: Web): SP.BooleanResult;
		isProjectClosed(context: ClientRuntimeContext, web: Web): SP.BooleanResult;
		getProjectCloseDate(context: ClientRuntimeContext, web: Web): SP.DateTimeResult;
		getProjectExpirationDate(context: ClientRuntimeContext, web: Web): SP.DateTimeResult
	}

	
}

declare module 'ReputationModel' {
				declare export class Reputation  {
		constructor(): this;
		setLike(context: SP.ClientContext, listId: string, itemId: number, like: boolean): void;
		setRating(
		context: SP.ClientContext, listId: string, itemId: number, rating: number
	): void
	}

	
}

declare module 'npm$namespace$Define' {
			declare export function loadScript(url: string, successCallback: () => void, errCallback: () => void): void

	declare export function require(req: string, callback: Function): void

	declare export function require(req: string[], callback: Function): void

	declare export function define(name: string, deps: string[], def: Function): void

		
}

declare module 'npm$namespace$Verify' {
			declare export function ArgumentType(arg: string, expected: any): void

		
}

declare module 'npm$namespace$BrowserStorage' {
		declare interface CachedStorage {
		getItem(key: string): string,
		setItem(key: string, value: string): void,
		removeItem(key: string): void,
		clead(): void,
		length: number
	}

			
}

declare module 'npm$namespace$BrowserDetection' {
					
}

declare module 'npm$namespace$CSSUtil' {
			declare export function HasClass(elem: HTMLElement, className: string): boolean

	declare export function AddClass(elem: HTMLElement, className: string): void

	declare export function RemoveClass(elem: HTMLElement, className: string): void

	declare export function pxToFloat(pxString: string): number

	declare export function pxToNum(px: string): number

	declare export function numToPx(n: number): string

	declare export function getCurrentEltStyleByNames(elem: HTMLElement, styleNames: string[]): string

	declare export function getCurrentStyle(elem: HTMLElement, cssStyle: string): string

	declare export function getCurrentStyleCorrect(element: HTMLElement, camelStyleName: string, dashStyleName: string): string

	declare export function getOpacity(element: HTMLElement): number

	declare export function setOpacity(element: HTMLElement, value: number): void

		
}

declare module 'npm$namespace$DOM' {
			declare export function cancelDefault(evt: Event): void

	declare export function AbsLeft(el: HTMLElement): number

	declare export function AbsTop(el: HTMLElement): number

	declare export function CancelEvent(evt: Event): void

	declare export function GetElementsByName(nae: string): NodeList

	declare export function GetEventCoords(evt: Event): {
		x: number,
		y: number
	}

	declare export function GetEventSrcElement(evt: Event): HTMLElement

	declare export function GetInnerText(el: HTMLElement): string

	declare export function PreventDefaultNavigation(evt: Event): void

	declare export function SetEvent(eventName: string, eventFunc: Function, el: HTMLElement): void

		
}

declare module 'npm$namespace$Encoding' {
			declare export function EncodeScriptQuote(str: string): string

	declare export function HtmlEncode(str: string): string

	declare export function HtmlDecode(str: string): string

	declare export function AttrQuote(str: string): string

	declare export function ScriptEncode(str: string): string

	declare export function ScriptEncodeWithQuote(str: string): string

	declare export function CanonicalizeUrlEncodingCase(str: string): string

		
}

declare module 'npm$namespace$IE8Support' {
			declare export function arrayIndexOf<T>(array: T[], item: T, startIdx?: number): number

	declare export function attachDOMContentLoaded(handler: Function): void

	declare export function getComputedStyle(domObj: HTMLElement, camelStyleName: string, dashStyleName: string): string

	declare export function stopPropagation(evt: Event): void

		
}

declare module 'npm$namespace$StringUtil' {
			declare export function BuildParam(stPattern: string, ...params: any[]): string

	declare export function ApplyStringTemplate(str: string, ...params: any[]): string

		
}

declare module 'npm$namespace$TypeUtil' {
			declare export function IsArray(value: any): boolean

	declare export function IsNullOrUndefined(value: any): boolean

		
}

declare module 'npm$namespace$Nav' {
			declare export function convertRegularURLtoMDSURL(webUrl: string, fullPath: string): string

	declare export function isMDSUrl(url: string): boolean

	declare export function isPageUrlValid(url: string): boolean

	declare export function isPortalTemplatePage(url: string): boolean

	declare export function getAjaxLocationWindow(): string

	declare export function getSource(defaultSource?: string): string

	declare export function getUrlKeyValue(
		keyName: string, bNoDecode: boolean, url: string, bCaseInsensitive: boolean
	): string

	declare export function getWindowLocationNoHash(hre: string): string

	declare export function goToHistoryLink(el: HTMLAnchorElement, strVersion: string): void

	declare export function getGoToLinkUrl(el: HTMLAnchorElement): string

	declare export function goToLink(el: HTMLAnchorElement): void

	declare export function goToLinkOrDialogNewWindow(el: HTMLAnchorElement): void

	declare export function goToDiscussion(url: string): void

	declare export function onClickHook(evt: Event, topElm: HTMLElement): void

	declare export function pageUrlValidation(url: string, alertString: string): string

	declare export function parseHash(hash: string): Object

	declare export function navigate(url: string): void

	declare export function removeMDSQueryParametersFromUrl(url: string): string

	declare export function urlFromHashBag(hashObject: Object): string

	declare export function wantsNewTab(evt: Event): boolean

		
}

declare module 'npm$namespace$URI_Encoding' {
			declare export function encodeURIComponent(
		str: string, bAsUrl?: boolean, bForFilterQuery?: boolean, bForCallback?: boolean
	): string

	declare export function escapeUrlForCallback(str: string): string

		
}

declare module 'Util' {
			declare export function createViewEditUrl(
		renderCtx: SPClientTemplates.RenderContext, listItem: IListItem, useEditFormUrl?: boolean, appendSource?: boolean
	): string

	declare export function createItemPropertiesTitle(renderCtx: SPClientTemplates.RenderContext, listItem: IListItem): string

	declare export function clearSelectedItemsDict(context: any): void

	declare export function ctxInitItemState(context: any): void

	declare export function getAttributeFromItemTable(
		itemTableParam: HTMLElement, strAttributeName: string, strAttributeOldName: string
	): string

	declare export function getSelectedItemsDict(context: any): any

	declare export function removeOnlyPagingArgs(url: string): string

	declare export function removePagingArgs(url: string): string

	declare export function showAttachmentRows(): void

		
}

declare module 'npm$namespace$SPThemeUtils' {
			declare export function ApplyCurrentTheme(): void

	declare export function WithCurrentTheme(resultCallback: Function): void

	declare export function UseClientSideTheming(): boolean

	declare export function Suspend(): void

		
}

declare module 'JsGrid' {
		declare export interface IValue {
		data?: any,
		localized?: string
	}

	declare export interface IChangeKey {
		Reserve(): void,
		Release(): void,
		GetVersionNumber(): number,
		CompareTo(changeKey: IChangeKey): number
	}

	declare export interface IEventArgs {
		
	}

	declare export interface IStyleManager {
		gridPaneStyle: IStyleType.GridPane,
		columnHeaderStyleCollection: {
		normal: IStyleType.Header,
		normalHover: IStyleType.Header,
		partSelected: IStyleType.Header,
		partSelectedHover: IStyleType.Header,
		allSelected: IStyleType.Header,
		allSelectedHover: IStyleType.Header
	},
		rowHeaderStyleCollection: {
		normal: IStyleType.Header,
		normalHover: IStyleType.Header,
		partSelected: IStyleType.Header,
		partSelectedHover: IStyleType.Header,
		allSelected: IStyleType.Header,
		allSelectedHover: IStyleType.Header
	},
		splitterStyleCollection: {
		normal: IStyleType.Splitter,
		normalHandle: IStyleType.SplitterHandle,
		hover: IStyleType.Splitter,
		hoverHandle: IStyleType.SplitterHandle,
		dra: IStyleType.Splitter,
		dragHandle: IStyleType.SplitterHandle
	},
		defaultCellStyle: IStyleType.Cell,
		readOnlyCellStyle: IStyleType.Cell,
		readOnlyFocusedCellStyle: IStyleType.Cell,
		timescaleTierStyle: IStyleType.TimescaleTier,
		groupingStyles: any[],
		widgetDockStyle: IStyleType.Widget,
		widgetDockHoverStyle: IStyleType.Widget,
		widgetDockPressedStyle: IStyleType.Widget,
		RegisterCellStyle(styleId: string, cellStyle: IStyleType.Cell): void,
		GetCellStyle(styleId: string): IStyleType.Cell,
		UpdateSplitterStyleFromCss(styleObject: IStyleType.Splitter, splitterStyleNameCollection: any): void,
		UpdateHeaderStyleFromCss(styleObject: IStyleType.Header, headerStyleNameCol: any): void,
		UpdateGridPaneStyleFromCss(styleObject: IStyleType.GridPane, gridStyleNameCollection: any): void,
		UpdateDefaultCellStyleFromCss(styleObject: IStyleType.Cell, cssClass: string): void,
		UpdateGroupStylesFromCss(styleObject: IStyleType.Cell, prefix: string): void
	}

	declare export interface IStyleType {
		
	}

	declare export interface IRecord {
		bIsNewRow: boolean,
		properties: {
		[fieldKey: string]: IPropertyBase
	},
		key(): number,
		GetDataValue(fieldKey: string): any,
		GetLocalizedValue(fieldKey: string): string,
		HasDataValue(fieldKey: string): boolean,
		HasLocalizedValue(fieldKey: string): boolean,
		GetProp(fieldKey: string): IPropertyBase,
		SetProp(fieldKey: string, prop: IPropertyBase): void,
		AddFieldValue(fieldKey: string, value: any): void,
		RemoveFieldValue(fieldKey: string): void
	}

	declare export interface IPropertyBase {
		HasLocalizedValue(): boolean,
		HasDataValue(): boolean,
		Clone(): IPropertyBase,
		Update(dataValue: any, localizedValue: string): void,
		GetLocalized(): string,
		GetData(): any
	}

	declare export interface IEditActorGridContext {
		jsGridObj: JsGridControl,
		parentNode: HTMLElement,
		styleManager: IStyleManager,
		RTL: any,
		emptyValue: any,
		bLightFocus: boolean,
		OnKeyDown: {
		(domEvent: Sys.UI.DomEvent): void
	}
	}

	declare export interface IEditControlGridContext {
		OnActivateActor(): void,
		OnDeactivateActor(): void
	}

	declare export interface IPropertyType {
		ID: string,
		BeginValidateNormalizeConvert(
		recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: {
		(args: {
		isValid: boolean,
		dataValue: any,
		normalizedLocValue: string
	}): void
	}, fnError: any
	): void
	}

	declare export interface ILookupPropertyType {
		GetItems(fnCallback: any): void,
		DataToLocalized(dataValue: any): string,
		LocalizedToData(localized: string): any,
		GetImageSource(record: IRecord, dataValue: any): string,
		GetStyleId(dataValue: any): string,
		GetIsLimitedToList(): boolean,
		GetSerializableLookupPropType(): {
		items: any[],
		id: string,
		bLimitToList: boolean
	}
	}

	declare export interface IMultiValuePropertyType {
		bMultiValue: boolean,
		separator: string,
		singleValuePropType: string,
		GetSerializableMultiValuePropType(
		
	): {
		singleValuePropTypeID: string,
		separatorChar: string,
		bDelayInit: boolean
	},
		InitSingleValuePropType(): void,
		LocStrToLocStrArray(locStr: string): string[],
		LocStrArrayToLocStr(locStrArray: string[]): string
	}

	declare export interface IEditActorCellContext {
		propType: IPropertyType,
		originalValue: IValue,
		record: IRecord,
		column: ColumnInfo,
		field: GridField,
		fieldKey: string,
		cellExpandSpace: {
		left: number,
		top: number,
		fight: number,
		bottom: number
	},
		SetCurrentValue(value: any): void
	}

	declare export interface IEditControlCellContext {
		cellWidth: number,
		cellHeight: number,
		cellStyle: any,
		cellRect: any,
		NotifyExpandControl(): void,
		NotifyEditComplete(): void,
		Show(element: HTMLElement): void,
		Hide(element: HTMLElement): void
	}

	declare export interface IEditControl {
		SupportedWriteMode?: SP.JsGrid.EditActorWriteType,
		SupportedReadMode?: SP.JsGrid.EditActorReadType,
		GetCellContext(): IEditControlCellContext,
		GetOriginalValue(): IValue,
		SetValue(value: IValue): void,
		Dispose(): void,
		GetInputElement(): HTMLElement,
		Focus(eventInfo: Sys.UI.DomEvent): void,
		BindToCell(cellContext: IEditControlCellContext): void,
		OnBeginEdit(eventInfo: Sys.UI.DomEvent): void,
		Unbind(): void,
		OnEndEdit(): void,
		OnCellMove(): void,
		OnValueChanged(newValue: IValue): void,
		IsCurrentlyUsingGridTextInputElement(): boolean,
		SetSize(width: number, height: number): void
	}

	declare export interface IGridData {
		MetaData: IGridMetadata,
		Fields: IFieldInfo[],
		Columns: IColumnInfo[],
		LocalizedTable: any[],
		UnlocalizedTable: any[],
		ViewInfo: any[],
		MultiValueSeparator?: string,
		LookupTableInfo?: ILookupTableInfo[],
		PivotedColumns?: ColumnInfo[],
		PaneLayout?: PaneLayout,
		GanttInfo?: any,
		AutoFilterableColumns?: boolean,
		AutoFilterState?: any,
		SortState?: any[],
		HierarchyState?: any,
		TopRecord?: number,
		RecordCount?: number,
		AdditionalParams?: any,
		CellStyles?: any,
		GroupingGridRowStyleIds?: any[],
		UnfilteredHierarchy?: any,
		AutoFilterEntries?: any,
		ViewDepKeys?: any[]
	}

	declare export interface IColumnInfo {
		name: string,
		imgSrc?: string,
		columnKey: string,
		fieldKey: string,
		fieldKeys: string[],
		width: number,
		isVisible?: boolean,
		isHidable?: boolean,
		isResizable?: boolean,
		isSortable?: boolean,
		isAutoFilterable?: boolean,
		isFooter?: boolean
	}

	declare export interface IGridMetadata {
		KeyColumnName: string,
		IsGanttEnabled?: boolean,
		IsHierarchyEnabled?: boolean,
		IsSorted?: boolean,
		GroupingLevel?: number,
		GroupingPrefix?: string,
		RecordKeyHash?: string,
		RecordKeyOrderChanged?: any,
		GridOperationalConstantsFieldKeyMap?: {
		[index: number]: string
	}
	}

	declare export interface IFieldInfo {
		fieldKey: string,
		propertyTypeId: string,
		editMode?: EditMode,
		hasDataValue?: boolean,
		hasLocalizedValue?: boolean,
		multiValue?: boolean,
		textDirection?: TextDirection,
		dateOnly?: boolean,
		defaultCellStyleId?: any
	}

	declare export interface ILookupTableInfo {
		id: string,
		showImage?: boolean,
		showText?: boolean,
		limitToList?: boolean,
		lookup: ILookupInfo[]
	}

	declare export interface ILookupInfo {
		localString: string,
		value: number
	}

		declare export class JsGridControl  {
		constructor(parentNode: HTMLElement, bShowLoadingBanner: boolean): this;
		IsInitialized(): boolean;
		ResetData(cache: SP.JsGrid.TableCache): void;
		Init(parameters: SP.JsGrid.JsGridControl.Parameters): void;
		Cleanup(): void;
		Dispose(): void;
		NotifyDataAvailable(): void;
		NotifySave(): void;
		NotifyHide(): void;
		NotifyResize(): void;
		ClearTableView(): void;
		HideInitialLoadingBanner(): void;
		ShowInitialGridErrorMsg(errorMsg: string): void;
		ShowGridErrorMsg(errorMsg: string): void;
		LaunchPrintView(
		additionalScriptFiles: any, beforeInitFnName: any, beforeInitFnArgsObj: any, title: string, bEnableGantt: boolean, optGanttDelegateNames?: any, optInitTableViewParamsFnName?: any, optInitTableViewParamsFnArgsObj?: any, optInitGanttStylesFnName?: any, optInitGanttStylesFnArgsObj?: any
	): void;
		GetAllDataJson(fnOnFinished: any, optFnGetCellStyleID?: any): void;
		SetTableView(tableViewParams: any): void;
		SetRowView(rowViewParam: any): void;
		Enable(): void;
		Disable(optMsg?: string): void;
		EnableEditing(): void;
		DisableEditing(): void;
		TryBeginEdit(): boolean;
		FinalizeEditing(fnContinue: Function, fnError: Function): void;
		GetDiffTracker(): SP.JsGrid.Internal.DiffTracker;
		Focus(): void;
		TryCommitFirstEntryRecords(fnCommitComplete: {
		(): void
	}): void;
		ClearUncommitedEntryRecords(): void;
		AnyUncommitedEntryRecords(): boolean;
		AnyUncomittedProvisionalRecords(): boolean;
		GetRecord(recordKey: number): IRecord;
		GetEntryRecord(key: any): any;
		IsEntryRecord(recordKey: number): boolean;
		IsCellEditable(record: IRecord, fieldKey: string, optPaneId?: any): boolean;
		AddBuiltInRowHeaderState(recordKey: number, rowHeaderStateId: string): void;
		AddRowHeaderState(recordKey: number, rowHeaderState: SP.JsGrid.RowHeaderState): void;
		RemoveRowHeaderState(recordKey: number, rowHeaderStateId: string): void;
		GetCheckSelectionManager(): any;
		UpdateProperties(propertyUpdates: any, changeName: any, optChangeKey?: any): any;
		GetLastRecordKey(): string;
		InsertProvisionalRecordBefore(beforeRecordKey: number, newRecord: any, initialValues: any): any;
		InsertProvisionalRecordAfter(afterRecordKey: number, newRecord: any, initialValues: any): any;
		IsProvisionalRecordKey(recordKey: number): boolean;
		InsertRecordBefore(beforeRecordKey: number, newRecord: any, optChangeKey?: any): any;
		InsertRecordAfter(afterRecordKey: number, newRecord: any, optChangeKey?: any): any;
		InsertHiddenRecord(recordKey: number, changeKey: any, optAfterRecordKey?: any): any;
		DeleteRecords(recordKeys: any, optChangeKey?: any): any;
		IndentRecords(recordKeys: any, optChangeKey?: any): any;
		OutdentRecords(recordKeys: any, optChangeKey?: any): any;
		ReorderRecords(
		beginRecordKey: number, endRecordKey: number, afterRecordKey: number, bSelectAfterwards: boolean
	): any;
		GetContiguousRowSelectionWithoutEntryRecords(): {
		begin: any,
		end: any,
		keys: any
	};
		CanMoveRecordsUpByOne(recordKeys: any): boolean;
		CanMoveRecordsDownByOne(recordKeys: any): boolean;
		MoveRecordsUpByOne(recordKeys: any): any;
		MoveRecordsDownByOne(recordKeys: any): any;
		GetReorderRange(recordKeys: any): any;
		GetNodeExpandCollapseState(recordKey: number): any;
		ToggleExpandCollapse(recordKey: number): void;
		AttachEvent(eventType: JsGrid.EventType, fnOnEvent: {
		(args: IEventArgs): void
	}): void;
		DetachEvent(eventType: JsGrid.EventType, fnOnEvent: any): void;
		SetDelegate(delegateKey: JsGrid.DelegateType, fn: any): void;
		GetDelegate(delegateKey: JsGrid.DelegateType): any;
		RefreshRow(recordKey: number): void;
		RefreshAllRows(): void;
		ClearChanges(): void;
		GetGanttZoomLevel(): any;
		SetGanttZoomLevel(level: any): void;
		ScrollGanttToDate(date: any): void;
		GetTopRecordIndex(): number;
		GetViewRecordCount(): number;
		GetRecordKeyByViewIndex(viewIdx: number): number;
		GetViewIndexOfRecord(recordKey: number): number;
		GetTopRowIndex(): number;
		GetOutlineLevel(record: any): any;
		GetSplitterPosition(): any;
		SetSplitterPosition(pos: any): void;
		GetLeftColumnIndex(optPaneId?: any): any;
		EnsurePaneWidth(): void;
		ShowColumn(columnKey: string, atIdx?: number): void;
		HideColumn(columnKey: string): void;
		UpdateColumns(columnInfoCollection: ColumnInfoCollection): void;
		GetColumns(optPaneId?: string): ColumnInfo[];
		GetColumnByFieldKey(fieldKey: string, optPaneId?: any): ColumnInfo;
		AddColumn(columnInfo: ColumnInfo, gridField: GridField): void;
		RenameColumn(columnKey: string): void;
		ShowColumnConfigurationDialog(): void;
		AnyErrors(): boolean;
		AnyErrorsInRecord(recordKey: number): boolean;
		SetCellError(recordKey: number, fieldKey: string, errorMessage: string): number;
		SetRowError(recordKey: number, errorMessage: string): number;
		ClearCellError(recordKey: number, fieldKey: string, id: number): void;
		ClearAllErrorsOnCell(recordKey: number, fieldKey: string): void;
		ClearRowError(recordKey: number, id: number): void;
		ClearAllErrorsOnRow(recordKey: number): void;
		GetCellErrorMessage(recordKey: number, fieldKey: string): string;
		GetRowErrorMessage(recordKey: number): string;
		ScrollToAndExpandNextError(
		minId?: number, fnFilter?: {
		(recordKey: number, fieldKey: string, id: number): boolean
	}
	): any;
		ScrollToAndExpandNextErrorOnRecord(
		minId?: number, recordKey?: number, fnFilter?: {
		(recordKey: number, fieldKey: string, id: number): boolean
	}, bDontExpand?: boolean
	): any;
		GetFocusedItem(): any;
		SendKeyDownEvent(eventInfo: Sys.UI.DomEvent): any;
		JumpToEntryRecord(): void;
		SelectRowRange(rowIdx1: number, rowIdx2: number, bAppend: boolean, optPaneId?: string): void;
		SelectColumnRange(colIdx1: number, colIdx2: number, bAppend: boolean, optPaneId?: string): void;
		SelectCellRange(
		rowIdx1: number, rowIdx2: number, colIdx1: number, colIdx2: number, bAppend: boolean, optPaneId?: string
	): void;
		SelectRowRangeByKey(rowKey1: any, rowKey2: any, bAppend: boolean, optPaneId?: string): void;
		SelectColumnRangeByKey(colKey1: any, colKey2: any, bAppend: boolean, optPaneId?: string): void;
		SelectCellRangeByKey(
		recordKey1: string, recordKey2: string, colKey1: any, colKey2: any, bAppend: boolean, optPaneId?: string
	): void;
		ChangeKeys(oldKey: any, newKey: any): void;
		GetSelectedRowRanges(optPaneId?: any): any;
		GetSelectedColumnRanges(optPaneId?: any): any;
		GetSelectedRanges(optPaneId?: any): any;
		MarkPropUpdateInvalid(recordKey: number, fieldKey: any, changeKey: any, optErrorMsg?: any): any;
		GetCurrentChangeKey(): any;
		CreateAndSynchronizeToNewChangeKey(): any;
		CreateDataUpdateCmd(bUseCustomInitialUpdate: boolean): any;
		IsChangeKeyApplied(changeKey: any): any;
		GetChangeKeyForVersion(version: any): any;
		TryReadPropForChangeKey(recordKey: number, fieldKey: any, changeKey: any): any;
		GetUnfilteredHierarchyMap(): any;
		GetHierarchyState(bDecompressGuidKeys: boolean): any;
		IsGroupingRecordKey(recordKey: number): boolean;
		IsGroupingColumnKey(recordKey: number): boolean;
		GetSelectedRecordKeys(bDuplicatesAllowed: boolean): any;
		CutToClipboard(): void;
		CopyToClipboard(): void;
		PasteFromClipboard(): void;
		TryRestoreFocusAfterInsertOrDeleteColumns(origFocus: any): void;
		GetUndoManager(): SP.JsGrid.CommandManager;
		GetVisibleRecordCount(): number;
		GetRecordIndicatorCheckBoxColumnIndex(): number;
		IsRecordVisibleInView(recordKey: number): boolean;
		GetHierarchyQueryObject(): any;
		GetSpCsrRenderCtx(): any
	}

	declare export class RowHeaderState  {
		constructor(id: string, img: SP.JsGrid.Image, priority: SP.JsGrid.RowHeaderStatePriorities, tooltip: string, fnOnClick: {
		(eventInfo: Sys.UI.DomEvent, recordKey: number): void
	}): this;
		GetId(): string;
		GetImg(): SP.JsGrid.Image;
		GetPriority(): SP.JsGrid.RowHeaderStatePriorities;
		GetOnClick(): {
		(eventInfo: Sys.UI.DomEvent, recordKey: number): void
	};
		GetTooltip(): string;
		toString(): string
	}

	declare export class Image  {
		constructor(imgSrc: string, bIsClustered: boolean, optOuterCssNames: string, optImgCssNames: string, bIsAnimated: boolean): this;
		imgSrc: string;
		bIsClustered: boolean;
		optOuterCssNames: string;
		imgCssNames: string;
		bIsAnimated: boolean;
		Render(
		altText: string, clickFn: {
		(eventInfo: Sys.UI.DomEvent): void
	}, bHideTooltip: boolean
	): HTMLElement
	}

	declare export class CommandManager  {
		
	}

	declare export class TableCache  {
		
	}

	declare export class Style  {
		Type: {
		Splitter: IStyleType.Splitter,
		SplitterHandle: IStyleType.SplitterHandle,
		GridPane: IStyleType.GridPane,
		Header: IStyleType.Header,
		RowHeaderStyle: IStyleType.RowHeaderStyle,
		TimescaleTier: IStyleType.TimescaleTier,
		Cell: IStyleType.Cell,
		Widget: IStyleType.Widget
	};
		SetRTL: {
		(rtlObject: any): void
	};
		MakeJsGridStyleManager: {
		(): IStyleManager
	};
		CreateStyleFromCss: {
		(styleType: IStyleType, cssStyleName: string, optExistingStyle?: any, optClassId?: any): any
	};
		CreateStyle: {
		(styleType: IStyleType, styleProps: any): any
	};
		MergeCellStyles: {
		(majorStyle: any, minorStyle: any): any
	};
		ApplyCellStyle: {
		(td: HTMLTableCellElement, style: any): void
	};
		ApplyRowHeaderStyle: {
		(domObj: HTMLElement, style: any, fnGetHeaderSibling: Function): void
	};
		ApplyCornerHeaderBorderStyle: {
		(domObj: HTMLElement, colStyle: any, rowStyle: any): void
	};
		ApplyHeaderInnerBorderStyle: {
		(domObj: HTMLElement, bIsRowHeader: any, headerObject: any): void
	};
		ApplyColumnContextMenuStyle: {
		(domObj: HTMLElement, style: any): void
	};
		ApplySplitterStyle: {
		(domObj: HTMLElement, style: any): void
	};
		MakeBorderString: {
		(width: number, style: string, color: string): string
	};
		GetCellStyleDefaultBackgroundColor: {
		(): string
	}
	}

	declare export class ColumnInfoCollection  {
		constructor(colInfoArray: any[]): this;
		GetColumnByKey(key: string): any;
		GetColumnArray(bVisibleOnly?: boolean): any[];
		GetColumnMap(): {
		[key: string]: any
	};
		AppendColumn(colInfo: any): void;
		InsertColumnAt(idx: number, colInfo: any): void;
		RemoveColumn(key: string): void;
		GetColumnPosition(key: string): number
	}

	declare export class ColumnInfo  {
		constructor(name: string, imgSrc: string, key: string, width: number): this;
		name: string;
		imgSrc: string;
		imgRawSrc: string;
		columnKey: string;
		fieldKeys: string[];
		width: number;
		bOpenMenuOnContentClick: boolean;
		ColumnType(): string;
		isVisible: boolean;
		isHidable: boolean;
		isResizable: boolean;
		isSortable: boolean;
		isAutoFilterable: boolean;
		isFooter: boolean;
		fnShouldLinkSingleValue: {
		(record: IRecord, fieldKey: string, dataValue: any, localizedValue: any): boolean
	};
		fnSingleValueClicked: {
		(record: IRecord, fieldKey: string, dataValue: any, localizedValue: any): void
	};
		fnGetCellEditMode: {
		(record: IRecord, fieldKey: string): JsGrid.EditMode
	};
		fnGetDisplayControlName: {
		(record: IRecord, fieldKey: string): string
	};
		fnGetEditControlName: {
		(record: IRecord, fieldKey: string): string
	};
		fnGetWidgetControlNames: {
		(record: IRecord, fieldKey: string): string[]
	};
		fnGetCellStyleId: {
		(record: IRecord, fieldKey: string, dataValue: any): string
	};
		fnGetSingleValueTooltip: {
		(record: IRecord, fieldKey: string, dataValue: any, localizedValue: any): string
	}
	}

	declare export class RecordFactory  {
		constructor(gridFieldMap: any, keyColumnName: string, fnGetPropType: any): this;
		gridFieldMap: any;
		MakeRecord(dataPropMap: any, localizedPropMap: any, bKeepRawData: boolean): IRecord
	}

	declare export class Property  {
		MakeProperty(
		dataValue: any, localizedValue: string, bHasDataValue: boolean, bHasLocalizedValue: boolean, propType: any
	): IPropertyBase;
		MakePropertyFromGridField(
		gridField: any, dataValue: any, localizedVal: string, optPropType?: any
	): IPropertyBase
	}

	declare export class GridField  {
		constructor(key: string, hasDataValue: boolean, hasLocalizedValue: boolean, textDirection: TextDirection, defaultCellStyleId?: any, editMode?: EditMode, dateOnly?: boolean, csrInfo?: any): this;
		key: string;
		hasDataValue: boolean;
		hasLocalizedValue: boolean;
		textDirection: TextDirection;
		dateOnly: boolean;
		csrInfo: any;
		GetEditMode(): EditMode;
		SetEditMode(mode: EditMode): void;
		GetDefaultCellStyleId(): any;
		CompareSingleDataEqual(dataValue1: any, dataValue2: any): boolean;
		GetPropType(): any;
		GetSingleValuePropType(): any;
		GetMultiValuePropType(): any;
		SetSingleValuePropType(svPropType: any): void;
		SetIsMultiValue(listSeparator: any): void;
		GetIsMultiValue(): boolean
	}

	declare export class PropertyType  {
		RegisterNewLookupPropType(id: string, items: any[], displayCtrlName: string, bLimitToList: boolean): void;
		RegisterNewCustomPropType(
		propType: IPropertyType, displayCtrlName: string, editControlName: string, widgetControlNames: string[]
	): void;
		RegisterNewDerivedCustomPropType(propType: IPropertyType, baseTypeName: string): void
	}

	declare export class StaticDataSource  {
		constructor(jsGridData: IGridData, optFnGetPropType?: Function): this;
		AddColumn(gridField: SP.JsGrid.GridField, values: IValue[]): void;
		RemoveColumn(fieldKey: string): void;
		InitJsGridParams(optGridParams?: JsGridControl.Parameters): JsGridControl.Parameters
	}

	
}

declare module 'EventArgs' {
				declare export class OnEntryRecordAdded extends IEventArgs {
		constructor(recordKey: number): this;
		recordKey: number
	}

	declare export class CellFocusChanged extends IEventArgs {
		constructor(newRecordKey: number, newFieldKey: string, oldRecordKey: number, oldFieldKey: string): this;
		newRecordKey: number;
		newFieldKey: string;
		oldRecordKey: number;
		oldFieldKey: string
	}

	declare export class RowFocusChanged extends IEventArgs {
		constructor(newRecordKey: number, oldRecordKey: number): this;
		newRecordKey: number;
		oldRecordKey: number
	}

	declare export class CellEditBegin extends IEventArgs {
		constructor(recordKey: number, fieldKey: string): this;
		recordKey: number;
		fieldKey: string
	}

	declare export class CellEditCompleted extends IEventArgs {
		constructor(recordKey: number, fieldKey: string, changeKey: JsGrid.IChangeKey, bCancelled: boolean): this;
		recordKey: number;
		fieldKey: string;
		changeKey: JsGrid.IChangeKey;
		bCancelled: boolean
	}

	declare export class Click extends IEventArgs {
		constructor(eventInfo: Sys.UI.DomEvent, context: JsGrid.ClickContext, recordKey: number, fieldKey: string): this;
		eventInfo: Sys.UI.DomEvent;
		context: JsGrid.ClickContext;
		recordKey: number;
		fieldKey: string
	}

	declare export class PropertyChanged extends IEventArgs {
		constructor(recordKey: number, fieldKey: string, oldProp: SP.JsGrid.Internal.PropertyUpdate, newProp: SP.JsGrid.Internal.PropertyUpdate, propType: SP.JsGrid.IPropertyType, changeKey: SP.JsGrid.IChangeKey, validationState: SP.JsGrid.ValidationState): this;
		recordKey: number;
		fieldKey: string;
		oldProp: SP.JsGrid.Internal.PropertyUpdate;
		newProp: SP.JsGrid.Internal.PropertyUpdate;
		propType: SP.JsGrid.IPropertyType;
		changeKey: SP.JsGrid.IChangeKey;
		validationState: SP.JsGrid.ValidationState
	}

	declare export class RecordInserted extends IEventArgs {
		constructor(recordKey: number, recordIdx: number, afterRecordKey: number, changeKey: JsGrid.IChangeKey): this;
		recordKey: number;
		recordIdx: number;
		afterRecordKey: number;
		changeKey: JsGrid.IChangeKey
	}

	declare export class RecordDeleted extends IEventArgs {
		constructor(recordKey: number, recordIdx: number, changeKey: JsGrid.IChangeKey): this;
		recordKey: number;
		recordIdx: number;
		changeKey: JsGrid.IChangeKey
	}

	declare export class RecordChecked extends IEventArgs {
		constructor(recordKeySet: SP.Utilities.Set, bChecked: boolean): this;
		recordKeySet: SP.Utilities.Set;
		bChecked: boolean
	}

	declare export class OnCellErrorStateChanged extends IEventArgs {
		constructor(recordKey: number, fieldKey: string, bAddingError: boolean, bCellCurrentlyHasError: boolean, bCellHadError: boolean, errorId: number): this;
		recordKey: number;
		fieldKey: string;
		bAddingError: boolean;
		bCellCurrentlyHasError: boolean;
		bCellHadError: boolean;
		errorId: number
	}

	declare export class OnRowErrorStateChanged extends IEventArgs {
		constructor(recordKey: number, bAddingError: boolean, bErrorCurrentlyInRow: boolean, bRowHadError: boolean, errorId: number, message: string): this;
		recordKey: number;
		bAddingError: boolean;
		bErrorCurrentlyInRow: boolean;
		bRowHadError: boolean;
		errorId: number;
		message: string
	}

	declare export class OnEntryRecordCommitted extends IEventArgs {
		constructor(origRecKey: string, recordKey: number, changeKey: JsGrid.IChangeKey): this;
		originalRecordKey: number;
		recordKey: number;
		changeKey: JsGrid.IChangeKey
	}

	declare export class SingleCellClick extends IEventArgs {
		constructor(eventInfo: Sys.UI.DomEvent, recordKey: number, fieldKey: string): this;
		eventInfo: Sys.UI.DomEvent;
		recordKey: number;
		fieldKey: string
	}

	declare export class PendingChangeKeyInitiallyComplete extends IEventArgs {
		constructor(changeKey: JsGrid.IChangeKey): this;
		changeKey: JsGrid.IChangeKey
	}

	declare export class VacateChange extends IEventArgs {
		constructor(changeKey: JsGrid.IChangeKey): this;
		changeKey: JsGrid.IChangeKey
	}

	declare export class GridErrorStateChanged extends IEventArgs {
		constructor(bAnyErrors: boolean): this;
		bAnyErrors: boolean
	}

	declare export class SingleCellKeyDown extends IEventArgs {
		constructor(eventInfo: Sys.UI.DomEvent, recordKey: number, fieldKey: string): this;
		eventInfo: Sys.UI.DomEvent;
		recordKey: number;
		fieldKey: string
	}

	declare export class OnRecordsReordered extends IEventArgs {
		constructor(recordKeys: string[], changeKey: JsGrid.IChangeKey): this;
		reorderedKeys: string[];
		changeKey: JsGrid.IChangeKey
	}

	declare export class OnRowEscape extends IEventArgs {
		constructor(recordKey: number): this;
		recordKey: number
	}

	declare export class OnEndRenameColumn extends IEventArgs {
		constructor(columnKey: string, originalColumnTitle: string, newColumnTitle: string): this;
		columnKey: string;
		originalColumnTitle: string;
		newColumnTitle: string
	}

	declare export class OnBeginRedoDataUpdateChange extends IEventArgs {
		constructor(changeKey: JsGrid.IChangeKey): this;
		changeKey: JsGrid.IChangeKey
	}

	declare export class OnBeginUndoDataUpdateChange extends IEventArgs {
		constructor(changeKey: JsGrid.IChangeKey): this;
		changeKey: JsGrid.IChangeKey
	}

	
}

declare module 'JsGridControl' {
				declare export class Parameters  {
		tableCache: SP.JsGrid.TableCache;
		name: any;
		bNotificationsEnabled: boolean;
		styleManager: IStyleManager;
		minHeaderHeight: number;
		minRowHeight: number;
		commandMgr: SP.JsGrid.CommandManager;
		enabledRowHeaderAutoStates: SP.Utilities.Set;
		tableViewParams: TableViewParameters;
		bEnableDiffTracking: boolean;
		isRTL: boolean
	}

	declare export class TableViewParameters  {
		paneLayout: SP.JsGrid.PaneLayout;
		defaultEditMode: SP.JsGrid.EditMode;
		allowedSelectionTypes: SP.JsGrid.SelectionTypeFlags;
		bMovableColumns: boolean;
		bResizableColumns: boolean;
		bHidableColumns: boolean;
		bSortableColumns: boolean;
		bAutoFilterableColumns: boolean;
		bRowHeadersEnabled: boolean;
		bRecordIndicatorCheckboxesEnabled: boolean;
		bFillControlEnabled: boolean;
		bEditingEnabled: boolean;
		bNewRowEnabled: boolean;
		checkSelectionCheckboxHiddenRecordKeys: string[];
		checkSelectionCheckboxDisabledRecordKeys: string[];
		checkSelectionCheckedRecordKeys: string[];
		keyFieldName: string;
		gridFieldMap: {
		[name: string]: GridField
	};
		columns: ColumnInfoCollection;
		messageOverrides: any;
		operationalConstantsFieldKeyMap: any;
		ganttParams: GanttParameters;
		pivotedGridParams: PivotedGridParameters;
		rowViewParams: RowViewParameters
	}

	declare export class PivotedGridParameters  {
		
	}

	declare export class GanttParameters  {
		columns: ColumnInfoCollection
	}

	declare export class RowViewParameters  {
		hierarchyMode: SP.JsGrid.HierarchyMode;
		view: any;
		topViewIdx: number;
		groupingLevel: any;
		groupingRecordKeyPrefix: any;
		autoFilterState: any;
		unfilteredHierarchyMgr: any;
		hierarchyDelayLoadKeys: any;
		hierarchyState: any;
		sortState: any;
		filterState: any;
		autoFilterEntries: any;
		filteredDescCounts: any
	}

	
}

declare module 'IStyleType' {
		declare export interface Splitter {
		outerBorderColor: any,
		leftInnerBorderColor: any,
		innerBorderColor: any,
		backgroundColor: any
	}

	declare export interface SplitterHandle {
		outerBorderColor: any,
		leftInnerBorderColor: any,
		innerBorderColor: any,
		backgroundColor: any,
		gripUpperColor: any,
		gripLowerColor: any
	}

	declare export interface GridPane {
		verticalBorderColor: any,
		verticalBorderStyle: any,
		horizontalBorderColor: any,
		horizontalBorderStyle: any,
		backgroundColor: any,
		columnDropIndicatorColor: any,
		rowDropIndicatorColor: any,
		linkColor: any,
		visitedLinkColor: any,
		copyRectForeBorderColor: any,
		copyRectBackBorderColor: any,
		focusRectBorderColor: any,
		selectionRectBorderColor: any,
		selectedCellBgColor: any,
		readonlySelectionRectBorderColor: any,
		changeHighlightCellBgColor: any,
		fillRectBorderColor: any,
		errorRectBorderColor: any
	}

	declare export interface Header {
		font: any,
		fontSize: any,
		fontWeight: any,
		textColor: any,
		backgroundColor: any,
		outerBorderColor: any,
		innerBorderColor: any,
		eyeBrowBorderColor: any,
		eyeBrowColor: any,
		menuColor: any,
		menuBorderColor: any,
		resizeColor: any,
		resizeBorderColor: any,
		menuHoverColor: any,
		menuHoverBorderColor: any,
		resizeHoverColor: any,
		resizeHoverBorderColor: any,
		eyeBrowHoverColor: any,
		eyeBrowHoverBorderColor: any,
		elementClickColor: any,
		elementClickBorderColor: any
	}

	declare export interface Cell {
		font: any,
		fontSize: any,
		fontWeight: any,
		fontStyle: any,
		textColor: any,
		backgroundColor: any,
		textAlign: any
	}

	declare export interface Widget {
		backgroundColor: any,
		borderColor: any
	}

	declare export interface RowHeaderStyle {
		backgroundColor: any,
		outerBorderColor: any,
		innerBorderColor: any
	}

	declare export interface TimescaleTier {
		font: any,
		fontSize: any,
		fontWeight: any,
		textColor: any,
		backgroundColor: any,
		verticalBorderColor: any,
		verticalBorderStyle: any,
		horizontalBorderColor: any,
		horizontalBorderStyle: any,
		outerBorderColor: any,
		todayLineColor: any
	}

			
}

declare module 'PropertyType' {
				declare export class String extends IPropertyType {
		constructor(): this;
		ID: string;
		BeginValidateNormalizeConvert(
		recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: {
		(args: {
		isValid: boolean,
		dataValue: any,
		normalizedLocValue: string
	}): void
	}, fnError: any
	): void;
		toString(): string
	}

	declare export class LookupTable extends ILookupPropertyType {
		constructor(items: any[], id: string, bLimitToList: boolean): this;
		ID: string;
		BeginValidateNormalizeConvert(
		recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: {
		(args: {
		isValid: boolean,
		dataValue: any,
		normalizedLocValue: string
	}): void
	}, fnError: any
	): void;
		GetItems(fnCallback: any): void;
		DataToLocalized(dataValue: any): string;
		LocalizedToData(localized: string): any;
		GetImageSource(record: IRecord, dataValue: any): string;
		GetStyleId(dataValue: any): string;
		GetIsLimitedToList(): boolean;
		GetSerializableLookupPropType(): {
		items: any[],
		id: string,
		bLimitToList: boolean
	}
	}

	declare export class CheckBoxBoolean extends IPropertyType {
		constructor(): this;
		ID: string;
		BeginValidateNormalizeConvert(
		recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: {
		(args: {
		isValid: boolean,
		dataValue: any,
		normalizedLocValue: string
	}): void
	}, fnError: any
	): void;
		DataToLocalized(dataValue: any): string;
		GetBool(dataValue: any): boolean;
		toString(): string
	}

	declare export class DropDownBoolean extends IPropertyType {
		constructor(): this;
		ID: string;
		BeginValidateNormalizeConvert(
		recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: {
		(args: {
		isValid: boolean,
		dataValue: any,
		normalizedLocValue: string
	}): void
	}, fnError: any
	): void;
		DataToLocalized(dataValue: any): string;
		GetBool(dataValue: any): boolean;
		toString(): string
	}

	declare export class MultiValuePropType extends IMultiValuePropertyType {
		ID: string;
		BeginValidateNormalizeConvert(
		recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: {
		(args: {
		isValid: boolean,
		dataValue: any,
		normalizedLocValue: string
	}): void
	}, fnError: any
	): void;
		bMultiValue: boolean;
		separator: string;
		singleValuePropType: string;
		GetSerializableMultiValuePropType(
		
	): {
		singleValuePropTypeID: string,
		separatorChar: string,
		bDelayInit: boolean
	};
		InitSingleValuePropType(): void;
		LocStrToLocStrArray(locStr: string): string[];
		LocStrArrayToLocStr(locStrArray: string[]): string
	}

	declare export class HyperLink extends IPropertyType {
		ID: string;
		BeginValidateNormalizeConvert(
		recordKey: number, fieldKey: string, newValue: any, bIsLocalized: boolean, fnCallback: {
		(args: {
		isValid: boolean,
		dataValue: any,
		normalizedLocValue: string
	}): void
	}, fnError: any
	): void;
		bHyperlink: boolean;
		DataToLocalized(dataValue: any): string;
		GetAddress(dataValue: any): string;
		GetCopyValue(record: IRecord, dataValue: any, locValue: string): string;
		toString(): string
	}

	declare export class Utils  {
		RegisterDisplayControl(name: string, singleton: any, requiredFunctionNames: string[]): void;
		RegisterEditControl(
		name: string, factory: (
		gridContext: IEditControlGridContext, gridTextInputElement: HTMLElement
	) => IEditControl, requiredFunctionNames: string[]
	): void;
		RegisterWidgetControl(
		name: string, factory: {
		(ddContext: any): IPropertyType
	}, requiredFunctionNames: string[]
	): void;
		UpdateDisplayControlForPropType(propTypeName: string, displayControlType: string): void
	}

	
}

declare module 'WidgetControl' {
				declare export class Type  {
		Demo: string;
		Date: string;
		AddressBook: string;
		Hyperlink: string
	}

	
}

declare module 'Internal' {
				declare export class DiffTracker  {
		constructor(objBag: any, fnGetChange: Function): this;
		ExternalAPI: {
		AnyChanges(): boolean,
		ChangeKeySliceInfo(): any,
		ChangeQuery(): any,
		EventSliceInfo(): any,
		GetChanges(
		optStartEvent: any, optEndEvent: any, optRecordKeys: any, bFirstStartEvent: boolean, bStartInclusive: boolean, bEndInclusive: boolean, bIncludeInvalidPropUpdates: boolean, bLastEndEvent: boolean
	): any,
		GetChangesAsJson(changeQuery: any, optfnPreProcessUpdateForSerialize?: any): string,
		GetUniquePropertyChanges(changeQuery: any, optfnFilter?: any): any,
		RegisterEvent(changeKey: IChangeKey, eventObject: any): void,
		UnregisterEvent(changeKey: IChangeKey, eventObject: any): void
	};
		Clear(): void;
		NotifySynchronizeToChange(changeKey: IChangeKey): void;
		NotifyRollbackChange(changeKey: IChangeKey): void;
		NotifyVacateChange(changeKey: IChangeKey): void
	}

	declare export class PropertyUpdate extends IValue {
		constructor(data: any, localized: string): this;
		data: any;
		localized: string
	}

	
}

declare module 'npm$namespace$Srch' {
				declare export class ClientControl extends undefined$Control {
		constructor(elem: Element): this;
		toggleMessageDetails(messageContainer: Element): void;
		alternateRenderer: any;
		alternateRenderContext: any;
		loaded: boolean;
		get_nextUniqueId(): string;
		get_renderTemplateId(): string;
		set_renderTemplateId(value: string): string;
		get_delayLoadTemplateScripts(): boolean;
		set_delayLoadTemplateScripts(value: boolean): boolean;
		get_states(): any;
		set_states(value: any): any;
		get_messages(): any[];
		set_messages(value: any[]): any[];
		get_showDataErrors(): boolean;
		set_showDataErrors(value: boolean): boolean;
		get_alternateErrorMessage(): string;
		set_alternateErrorMessage(value: string): string;
		get_isInitialLoad(): boolean;
		initialize(): void;
		dispose(): void;
		renderControl(listData: any, dataProvider: any): void;
		processDataProviderErrors(dataProviderToProcess: any): void;
		scriptApplication_PreLoad(sender: any, e: any): void;
		scriptApplication_Load(sender: any, e: any): void;
		scriptApplication_PostLoad(sender: any, e: any): void;
		loadServerTemplateScripts(): void;
		serverTemplateScriptsToLoad: any[];
		serverTemplateScriptsCallback(): void;
		loadRenderTemplateScripts(
		scriptReferences: any, success: any, failure: any, timeout: any, loadStandAloneCustomScripts: any
	): boolean;
		invokeAlternateRender(callback: any, container: any, ctx: any): any;
		invokeClientRenderer(node: any, ctx: any): any;
		processDataErrorMessages(dataErrorsList: any): any;
		processRenderingErrorMessages(ctx: any): any;
		hasMessages(): any;
		updateDisplayControlWithNewMessages(): any;
		setControlElementVisibility(showElement: boolean): any;
		clickHandler(e: Event): any
	}

	declare export class DataProvider extends ClientControl {
		constructor(elem: Element): this;
		get_currentQueryState(): any;
		get_sourceID(): string;
		set_sourceID(value: string): string;
		get_sourceName(): string;
		set_sourceName(value: string): string;
		get_sourceLevel(): string;
		set_sourceLevel(value: string): string;
		get_collapseSpecification(): string;
		set_collapseSpecification(value: string): string;
		get_queryGroupName(): string;
		set_queryGroupName(value: string): string;
		get_queryPropertiesTemplateUrl(): string;
		set_queryPropertiesTemplateUrl(value: string): string;
		get_queryTemplate(): any;
		set_queryTemplate(value: any): any;
		get_fallbackSort(): any;
		set_fallbackSort(value: any): any;
		get_rankRules(): any;
		set_rankRules(value: any): any;
		get_initialQueryState(): any;
		set_initialQueryState(value: any): any;
		get_initialResult(): string;
		set_initialResult(value: string): string;
		get_initialResultRef(): any;
		set_initialResultRef(value: any): any;
		get_initialResultObject(): any;
		get_batched(): boolean;
		set_batched(value: boolean): boolean;
		get_active(): boolean;
		set_active(value: boolean): boolean;
		get_bypassResultTypes(): boolean;
		set_bypassResultTypes(value: boolean): boolean;
		get_processBestBets(): boolean;
		set_processBestBets(value: boolean): boolean;
		get_processPersonalFavorites(): boolean;
		set_processPersonalFavorites(value: boolean): boolean;
		get_resultsPerPage(): number;
		set_resultsPerPage(value: number): number;
		get_selectedRefiners(): any;
		set_selectedRefiners(value: any): any;
		get_selectedProperties(): any;
		set_selectedProperties(value: any): any;
		get_hitHighlightedProperties(): any;
		set_hitHighlightedProperties(value: any): any;
		get_fallbackLanguage(): any;
		set_fallbackLanguage(value: any): any;
		get_fallbackRankingModelID(): string;
		set_fallbackRankingModelID(value: string): string;
		get_fallbackRefinementFilters(): any;
		set_fallbackRefinementFilters(value: any): any;
		get_availableSorts(): any;
		set_availableSorts(value: any): any;
		get_contextualScopeUrl(): string;
		set_contextualScopeUrl(value: string): string;
		get_totalRows(): number;
		set_totalRows(value: number): number;
		get_rowCount(): number;
		set_rowCount(value: number): number;
		get_refinementInfo(): any;
		get_entityInfo(): any;
		get_enableStemming(): boolean;
		set_enableStemming(value: boolean): boolean;
		get_enablePhonetic(): boolean;
		set_enablePhonetic(value: boolean): boolean;
		get_enableNicknames(): boolean;
		set_enableNicknames(value: boolean): boolean;
		get_trimDuplicates(): boolean;
		set_trimDuplicates(value: boolean): boolean;
		get_enableInterleaving(): boolean;
		set_enableInterleaving(value: boolean): boolean;
		get_enableQueryRules(): boolean;
		set_enableQueryRules(value: boolean): boolean;
		get_enableOrderingHitHighlightedProperty(): boolean;
		set_enableOrderingHitHighlightedProperty(value: boolean): boolean;
		get_hitHighlightedMultivaluePropertyLimit(): number;
		set_hitHighlightedMultivaluePropertyLimit(value: number): number;
		get_properties(): any;
		set_properties(value: any): any;
		get_clientType(): string;
		set_clientType(value: string): string;
		get_maxPagesAfterCurrent(): number;
		set_maxPagesAfterCurrent(value: number): number;
		get_userAction(): any;
		set_userAction(value: any): any;
		get_queryCount(): number;
		set_queryCount(value: number): number;
		get_resultsUrl(): any;
		set_resultsUrl(value: any): any;
		get_upScopeUrl(): any;
		get_effectiveQueryLanguage(): any;
		get_parentImpressionID(): any;
		set_parentImpressionID(value: any): any;
		get_updateAjaxNavigate(): boolean;
		set_updateAjaxNavigate(value: boolean): boolean;
		get_summaryLength(): number;
		set_summaryLength(value: number): number;
		get_desiredSnippetLength(): number;
		set_desiredSnippetLength(value: number): number;
		get_personalizedQuery(): boolean;
		set_personalizedQuery(value: boolean): boolean;
		initialize(): void;
		dispose(): void;
		scriptApplication_PreLoad(sender: any, e: any): void;
		scriptApplication_Load(sender: any, e: any): void;
		scriptApplication_PostLoad(sender: any, e: any): void;
		serverTemplateScriptsCallback(): void;
		add_queryIssuing(value: any): void;
		remove_queryIssuing(value: any): void;
		raiseQueryIssuingEvent(arg: any): void;
		add_resultReady(value: any): void;
		remove_resultReady(value: any): void;
		raiseResultReadyEvent(arg: any): void;
		add_queryStateChanged(value: any): void;
		raiseQueryStateChangedEvent(arg: any): void;
		displayControl_QueryReady(sender: any, e: any): void;
		searchBox_QueryReady(sender: any, e: any): void;
		searchBox_BatchQueryIssuing(sender: any, e: any): void;
		searchBox_BatchResultReady(sender: any, e: any): void;
		processInitial(): void;
		issueQuery(): void;
		displayControlMessages(): void;
		raiseEmptyResultReadyEvent(): void;
		getSortRankName(): string;
		getSortName(): string
	}

	declare export class DisplayControl extends ClientControl {
		get_queryGroupName(): string;
		set_queryGroupName(value: string): string;
		get_dataProvider(): DataProvider;
		get_renderedResult(): boolean;
		set_renderedResult(value: boolean): boolean;
		get_shouldShowNoResultMessage(): boolean;
		set_shouldShowNoResultMessage(value: boolean): boolean;
		get_currentResultTableCollection(): any;
		set_currentResultTableCollection(value: any): any;
		get_emptyMessage(): string;
		set_emptyMessage(value: string): string;
		scriptApplication_PreLoad(sender: any, e: any): void;
		scriptApplication_PostLoad(sender: any, e: any): void;
		serverTemplateScriptsCallback(): void;
		add_queryReady(value: any): void;
		remove_queryReady(value: any): void;
		raiseQueryReadyEvent(arg: any): void;
		add_resultRendered(value: any): void;
		remove_resultRendered(value: any): void;
		raiseResultRenderedEvent(arg: any): void;
		add_oneTimeResultRendered(value: any): void;
		remove_oneTimeResultRendered(value: any): void;
		raiseOneTimeResultRenderedEvent(arg: any): void;
		refresh(queryState: any): void;
		dataProvider_QueryIssuing(sender: any, e: any): void;
		dataProvider_ResultReady(sender: any, e: any): void;
		processQueryIssuing(queryState: any): void;
		processResultReady(resultTableCollection: any): void;
		render(): void
	}

	declare export class Refinement extends DisplayControl {
		createRefinementTextbox(name: string): Element;
		submitMultiRefinement(name: string, control: Refinement, useContains: boolean, useKQL: boolean): void;
		ensureUserSpecifiedRefinerValueHasWhiteSpaceQuotes(inputText: string): string;
		getRefinementLocalizedTitle(propertyName: string): string;
		getRefinementTitle(currentRefinemntControl: Refinement): string;
		getExpanded(filterName: string): string;
		setExpanded(filterName: string, value: string): void;
		multiRefinerSpecifyOtherFilterValue(
		refinerName: string, clientControl: Refinement, useContains: boolean, useKQL: boolean
	): void;
		constructor(elem: Element): this;
		get_selectedRefinementControls(): RefinementControl[];
		set_selectedRefinementControls(value: RefinementControl[]): RefinementControl[];
		get_useManagedNavigationRefiners(): boolean;
		set_useManagedNavigationRefiners(value: boolean): boolean;
		get_emptyRefinementMessageId(): string;
		set_emptyRefinementMessageId(value: string): string;
		scriptApplication_PreLoad(sender: any, e: any): void;
		render(): void;
		addRefinementFilter(filterName: string, filterToken: any): void;
		addRefinementFiltersJSON(refinersJSON: string): void;
		addRefinementFiltersJSONWithOr(refinersJSON: string): void;
		addRefinementFilters(refiners: any[]): void;
		addRefinementFiltersWithOp(refiners: any[], op: string): void;
		removeRefinementFilter(filterName: string, filterToken: string): void;
		removeRefinementFiltersJSON(refinersJSON: string): void;
		updateRefinementFilters(
		filterName: string, filterTokens: string[], op: string, useKQL: boolean, tokenToDisplayValueMap: any
	): void;
		updateRefinersJSON(refinersJSON: string): void;
		updateRefiners(
		refiners: any[], op: string, useKQL: boolean, tokenToDisplayValueMap: any
	): void;
		removeRefinementCategory(rcs: any, filterName: string): void;
		replaceRefinementFilter(oldRefinementFilter: any, newRefinementFilter: any): void;
		hasRefinementFilter(filterName: string, filterToken: string): boolean;
		hasAllRefinementFilters(filterName: string, filterTokens: string[]): boolean;
		hasRefinementCategory(refinementName: string): boolean;
		getCurrentRefinementCategory(refinementName: string): any;
		getRefinementControl(refinerName: string): RefinementControl;
		hasRefiner(refinerName: string): boolean;
		updateRefinementControls(newControls: RefinementControl[]): void
	}

	declare export class RefinementControl  {
		constructor(propertyName: string, spec: string, renderTemplateId: string): this;
		propertyName: string;
		spec: string;
		renderTemplateId: string;
		overrideDisplayName: string;
		useDefaultDateIntervals: boolean;
		containerId: string;
		alternateRenderer: any;
		alternateRenderContext: any;
		countDisplay: string;
		deepHits: number
	}

	declare export class Result extends DisplayControl {
		parsePropertyMappingWithSlotDisplayNames(mappings: any): {
		[key: string]: any
	};
		parsePropertyMappingsString(mappings: any): {
		[key: string]: any
	};
		getSelectedPropertiesFromMappingDictionary(propMappings: any): any[];
		constructor(elem: Element): this;
		get_itemTemplateId(): string;
		set_itemTemplateId(value: string): string;
		get_groupTemplateId(): string;
		set_groupTemplateId(value: string): string;
		get_itemBodyTemplateId(): string;
		set_itemBodyTemplateId(value: string): string;
		get_maxPagesBeforeCurrent(): number;
		set_maxPagesBeforeCurrent(value: number): number;
		get_maxPagesAfterCurrent(): number;
		set_maxPagesAfterCurrent(value: number): number;
		get_currentPageNumber(): number;
		set_currentPageNumber(value: number): number;
		get_showSortOptions(): boolean;
		set_showSortOptions(value: boolean): boolean;
		get_showLanguageOptions(): boolean;
		set_showLanguageOptions(value: boolean): boolean;
		get_repositionLanguageDropDown(): boolean;
		set_repositionLanguageDropDown(value: boolean): boolean;
		get_showPaging(): boolean;
		set_showPaging(value: boolean): boolean;
		get_showResults(): boolean;
		set_showResults(value: boolean): boolean;
		get_showBestBets(): boolean;
		set_showBestBets(value: boolean): boolean;
		get_showPersonalFavorites(): boolean;
		set_showPersonalFavorites(value: boolean): boolean;
		get_showDefinitions(): boolean;
		set_showDefinitions(value: boolean): boolean;
		get_showDidYouMean(): boolean;
		set_showDidYouMean(value: boolean): boolean;
		get_showAdvancedLink(): boolean;
		set_showAdvancedLink(value: boolean): boolean;
		get_showPreferencesLink(): boolean;
		set_showPreferencesLink(value: boolean): boolean;
		get_showResultCount(): boolean;
		set_showResultCount(value: boolean): boolean;
		get_showAlertMe(): boolean;
		set_showAlertMe(value: boolean): boolean;
		get_showViewDuplicates(): boolean;
		set_showViewDuplicates(value: boolean): boolean;
		get_pagingInfo(): any;
		get_shouldShowNoResultMessage(): boolean;
		get_advancedUrl(): string;
		set_advancedUrl(value: string): string;
		get_showUpScopeMessage(): boolean;
		set_showUpScopeMessage(value: boolean): boolean;
		get_scrollToTopOnRedraw(): boolean;
		set_scrollToTopOnRedraw(value: boolean): boolean;
		get_useSimplifiedQueryBuilder(): boolean;
		set_useSimplifiedQueryBuilder(value: boolean): boolean;
		get_preloadedItemTemplateIds(): string[];
		set_preloadedItemTemplateIds(value: string[]): string[];
		processResultReady(
		resultTableCollection: Microsoft.SharePoint.Client.Search.Query.ResultTableCollection
	): void;
		render(): void;
		scriptApplication_PreLoad(sender: any, e: any): void;
		sortOrRank(sortRankName: string): void;
		sort(sortName: string): void;
		changeQueryLanguage(queryLanguage: number): void;
		page(startAt: number): void;
		changeQueryTerm(queryTerm: any): void;
		viewDuplicates(docId: number): void;
		shouldShowTable(resultTable: Microsoft.SharePoint.Client.Search.Query.ResultTable): boolean
	}

	declare export class SearchBox extends ClientControl {
		constructor(elem: Element): this;
		get_currentTerm(): string;
		set_currentTerm(value: string): string;
		get_queryGroupNames(): string[];
		set_queryGroupNames(value: any): string[];
		get_resultsPageAddress(): string;
		set_resultsPageAddress(value: string): string;
		get_showAdvancedLink(): boolean;
		set_showAdvancedLink(value: boolean): boolean;
		get_showQuerySuggestions(): boolean;
		set_showQuerySuggestions(value: boolean): boolean;
		get_showNavigation(): boolean;
		set_showNavigation(value: boolean): boolean;
		get_showPeopleNameSuggestions(): boolean;
		set_showPeopleNameSuggestions(value: boolean): boolean;
		get_querySuggestionCompletionInterval(): number;
		set_querySuggestionCompletionInterval(value: number): number;
		get_querySuggestionMinimumPrefixLength(): number;
		set_querySuggestionMinimumPrefixLength(value: number): number;
		get_querySuggestionCount(): number;
		set_querySuggestionCount(value: number): number;
		get_personalResultCount(): number;
		set_personalResultCount(value: number): number;
		get_advancedSearchPageAddress(): string;
		set_advancedSearchPageAddress(value: string): string;
		get_showPreferencesLink(): boolean;
		set_showPreferencesLink(value: boolean): boolean;
		get_serverInitialRender(): boolean;
		set_serverInitialRender(value: boolean): boolean;
		get_setFocusOnPageLoad(): boolean;
		set_setFocusOnPageLoad(value: boolean): boolean;
		get_allowEmptySearch(): boolean;
		set_allowEmptySearch(value: boolean): boolean;
		get_updatePageTitle(): boolean;
		set_updatePageTitle(value: boolean): boolean;
		get_pageTitlePrefix(): string;
		set_pageTitlePrefix(value: string): string;
		get_currentPrompt(): string;
		set_currentPrompt(value: string): string;
		get_initialPrompt(): string;
		set_initialPrompt(value: string): string;
		get_promptCssClass(): string;
		set_promptCssClass(value: string): string;
		get_tryInplaceQuery(): boolean;
		set_tryInplaceQuery(value: boolean): boolean;
		get_searchBoxInputId(): string;
		set_searchBoxInputId(value: string): string;
		get_searchBoxContainerId(): string;
		set_searchBoxContainerId(value: string): string;
		get_navigationButtonId(): string;
		set_navigationButtonId(value: string): string;
		get_suggestionsListId(): string;
		set_suggestionsListId(value: string): string;
		get_navigationListId(): string;
		set_navigationListId(value: string): string;
		get_searchBoxInputElement(): Element;
		get_searchBoxProgressClass(): string;
		set_searchBoxProgressClass(value: string): string;
		get_searchBoxContainerElement(): Element;
		get_searchBoxLinkId(): string;
		set_searchBoxLinkId(value: string): string;
		get_searchBoxLinkElement(): Element;
		get_navigationNodes(): any;
		set_navigationNodes(value: any): any;
		get_msBeforeShowingProgress(): number;
		set_msBeforeShowingProgress(value: number): number;
		get_maintainQueryState(): boolean;
		set_maintainQueryState(value: boolean): boolean;
		get_querySuggestionsSourceID(): string;
		set_querySuggestionsSourceID(value: string): string;
		scriptApplication_PreLoad(sender: any, e: any): void;
		scriptApplication_PostLoad(sender: any, e: any): void;
		serverTemplateScriptsCallback(): any;
		add_queryReady(value: any): void;
		remove_queryReady(value: any): void;
		raiseQueryReadyEvent(arg: any): void;
		add_batchQueryIssuing(value: any): void;
		remove_batchQueryIssuing(value: any): void;
		raiseBatchQueryIssuingEvent(arg: any): void;
		add_batchResultReady(value: any): void;
		remove_batchResultReady(value: any): void;
		raiseBatchResultReadyEvent(arg: any): void;
		dataProvider_QueryStateChanged(sender: any, e: any): void;
		dataProvider_QueryIssuing(sender: any, e: any): void;
		dataProvider_ResultReady(sender: any, e: any): void;
		search(term: string): void;
		hidePrompt(): void;
		showPrompt(): void;
		focus(): void;
		setBorder(focused: boolean): void;
		activate(
		prompt: string, searchBoxInputId: string, searchBoxContainerId: string, navigationButtonId: string, suggestionsListId: string, navigationListId: string, searchBoxLinkId: string, searchBoxProgressClass: string, searchBoxPromptClass: string
	): void;
		activateDefaultNavigationBehavior(): void;
		activateDefaultQuerySuggestionBehavior(): void
	}

	declare export class U  {
		e(value: string): boolean;
		w(value: any): boolean;
		n(value: any): boolean;
		isPageInEditMode(): boolean;
		isPageInMdsMode(): boolean;
		isPagePartialLoad(): boolean;
		isRTL(): boolean;
		ensureNotNullOrUndefined(value: any, context: any, methodName: string, paraName: string): void;
		ensureNotNullOrEmptyString(value: string, context: any, methodName: string, paraName: string): void;
		copyDictionary(source: {
		[key: string]: any
	}): {
		[key: string]: any
	};
		isPrimitive(obj: any): boolean;
		isArray(obj: any): boolean;
		appendArray(array: any[], item: any): void;
		setFieldOnObject(targetObject: any, fieldName: string, fieldValue: any): boolean;
		getFieldOnObject(targetObject: any, fieldName: string): any;
		getOrCreateFieldOnObject(targetObject: any, fieldName: string, defaultValue: any): any;
		getStringFieldOnObject(targetObject: any, fieldName: string): string;
		isInArray(array: any[], item: any): boolean;
		removeArray(array: any[], item: any): any[];
		trimExtraSpaces(value: string): string;
		ensureCSSClassNameExist(e: Element, className: string): void;
		ensureCSSClassNameNotExist(e: Element, className: string): void;
		setCookie(
		name: string, value: string, expires?: Date, domain?: string, path?: string
	): void;
		getCookie(name: string): string;
		isSameHost(url: string, hostName: string): boolean;
		getHostName(): string;
		trace(c: Srch.ClientControl, method: string, message: string): void;
		traceFormatted(
		c: Srch.ClientControl, method: string, format: string, ...values: string[]
	): void;
		addHandler(element: Element, eventName: string, handler: Function): void;
		removeHandler(element: Element, eventName: string, handler: Function): void;
		isDescendant(element: Element, container: Element): boolean;
		getParentElementByName(startingElement: Element, tagName: string): Element;
		getWorkspace(fallback: Element): Element;
		getParentAttributeByName(startingElement: Element, attributeName: string): string;
		getClientComponent(e: Element): ClientControl;
		getResultObject(id: string): any;
		setResultObject(id: string, resultObject: any): any;
		findResultObjectFromDOM(e: Element, type: string): any;
		appendUrlParameter(url: string, keyAndValue: string): string;
		ensureAllowedProtocol(value: string): string;
		isProtocolAllowed(value: string, allowRelativeUrl: boolean): boolean;
		isUrlRelative(url: string): boolean;
		isUrlServerRelative(url: string): boolean;
		isUrlPagelRelative(url: string): boolean;
		logClick(e: any, clickType: any): void;
		fillKeywordQuery(query: any, dp: any): void;
		getUsernameFromAuthorField(authorField: string): string;
		getDisplayNameFromAuthorField(authorField: string): string;
		getArray(value: string): string[];
		getFriendlyNameForFileExtension(fileExtension: string): string;
		isWebPage(fileExtension: string): boolean;
		truncateEnd(original: string, maxChars: number): string;
		isDefaultSiteLogo(logoUrl: string): boolean;
		toFormattedDate(dateValue: Date, dateTimeFormatId?: string): string;
		toFormattedNumber(num: number, defaultDecimalPlacesIfNotInt: number): string;
		toFriendlyNumber(num: number): string;
		toFileSizeDisplay(numberOfBytes: number, showDecimalPart: boolean): string;
		getVideoImageWithFallbackSource(valueObject: any, width: number, height: number): string;
		getImageSourceWithRendition(imageInfo: any, width: number, height: number): string;
		parseTypedRangeToken(rangeFilterToken: string, objToStoreFilterTokenType: any): any;
		modifyMediaDurationRefinementName(resultRow: any): void;
		getDeepLinks(deeplinks: string, maxRows: number): string;
		truncateUrl(url: string, maxChars: number): string;
		truncateHighlightedUrl(url: string, maxChars: number): string;
		copyLink(link: string): void;
		registerRenderTemplateByName(name: string, templateFunction: string | {
		(ctx: any): string
	}): void;
		getRenderTemplateByName(name: string, renderCtx: any): string | {
		(ctx: any): string
	};
		addRenderContextCallback(
		renderCtx: any, callbackType: any, callbackFunction: any, enforceUnique: any, templateFunction: any
	): void;
		setItemRenderWrapper(renderCtx: any, itemRenderWrapperFunction: any, templateFunction: any): any;
		logRenderingErrorMessageToContext(renderCtx: any, messageText: any, operationName: any): void;
		getTemplateUrlFromFunctionOrRenderCtx(templateFunctionOrRenderCtx: any): string;
		createErrorObjectWithExecContext(messageText: any, operationName: any, templateFuncOrRenderCtx: any): any;
		resolveRenderTemplate(
		renderCtx: any, component: ClientControl, level: "Item" | "Group" | "View" | "Body"
	): string | {
		(ctx: any): string
	};
		getFormattedTimeFromSeconds(secondsStr: string): string;
		isEnterKey(keyCode: any): boolean;
		cancelEvent(e: Event): void;
		cancelEventEx(e: Event, preventDefault: boolean, stopPropagation: boolean): void;
		getTableProperty(parent: any, propName: string): any;
		concatUrl(firstPart: string, secondPart: string): string;
		getIconUrl(): string;
		getFolderIconUrl(): string;
		getIconUrlByFileExtension(item: string, defaultIconPath?: string): string;
		getShowHoverPanelCallbackWide(itemId: string, hpContainerId: string, templateUrl: string): string;
		getShowHoverPanelCallback(itemId: string, hpContainerId: string, templateUrl: string): string;
		getHideHoverPanelCallback(): string;
		getHighlightedProperty(key: string, result: any, property: string): any;
		processHHXML(pre: string): string;
		createXMLDocument(xml: string): XMLDocument;
		getUnEncodedMultiValuedResults(multiValue: string, maxItems: number, rawDelimiter: string): string;
		getTrimmedString(value: string, cutOff: number): string;
		trimTitle(
		title: string, maximumLengthInChars: number, numberOfTermsToUse: number
	): string;
		extractReplyTitleFromSummary(hitHighlightedSummary: string, titleLength: number): string;
		getTrimmedProcessedHHXMLString(value: string, cutOff: number): string;
		getMultipleHHXMLNodeValues(
		xmlDoc: XMLDocument, nodeName: string, numItems: number, rawDelimiter: string
	): string;
		getSingleHHXMLNodeValue(xmlDoc: XMLDocument, nodeName: string): string;
		isTableTypeof(resultTable: any, tableTypeName: string): boolean;
		isSubstrateTable(resultTable: any): boolean;
		getTableOfType(
		tableCollection: Microsoft.SharePoint.Client.Search.Query.ResultTableCollection, tableTypeName: string
	): Microsoft.SharePoint.Client.Search.Query.ResultTable;
		isFirstPromotedBlock(resultTable: Microsoft.SharePoint.Client.Search.Query.ResultTable): boolean;
		isFirstRankedBlock(resultTable: Microsoft.SharePoint.Client.Search.Query.ResultTable): boolean;
		isIntentTable(resultTable: Microsoft.SharePoint.Client.Search.Query.ResultTable): boolean;
		createBehavior(id: string, type: any, properties: any, targetElementId: string): any;
		animate(element: Element, animationID: any, finishFunc: any): void;
		hideElement(element: Element): void;
		showElement(element: Element): void;
		positionElement(element: Element, offset: string): void;
		resetElement(element: Element): void;
		shouldAnimate(dp: any): boolean;
		animateResults(result: Result, userAction: any): void;
		loadScripts(scriptReferences: string[], success: any, failure: any, timeout: number): void;
		appendScriptsToLoad(scripts: string[], script: string): void;
		registerLoadedScripts(scripts: string[]): void;
		collapsibleRefinerTitle(
		propertyName: string, idPrefix: string, title: string, iconClass: string, customOnClick: string
	): string;
		isDefaultSiteSearchPage(): boolean;
		replaceUrlTokens(url: string): string;
		urlTokenExpansion(jsLink: string): string;
		includeCSS(templateLink: string, relativeLink: string): void;
		includeScript(templateLink: string, scriptLink: string): void;
		includeLanguageScript(templateLink: string, scriptLink: string): void;
		isSPFSKU(): boolean;
		loadResource(id: string): string;
		loadResourceForTemplate(id: string, templateFunc: {
		(ctx: any): string
	}): string;
		registerResourceDictionary(locale: string, dict: {
		[key: string]: string
	}): void;
		restorePath(el: Element, originalText: string, selectText: string): void;
		selectPath(text: string, el: Element): void;
		setPath(e: Event, el: Element, text: string, originalText: string): void;
		restoreText(el: Element, originalText: string, selectText: string): void;
		selectText(text: string, el: Element): void;
		renderFriendlyTimeIntervalString(dateTimeSinceUTC: Date, targetElementID: string, calendarType?: number): void;
		getFriendlyTimeInterval(dateTimeSince: Date, calendarType: number): string;
		getCalendarType(): any;
		htmlEncodeNonBase64ImageUrl(url: string): string;
		hitHighlightingOpenTag: string;
		hitHighlightingCloseTag: string;
		titleTruncationLength: number;
		titleTruncationLengthWithMetadata: number;
		titleTruncationLengthWithPreview: number;
		summaryTruncationLength: number;
		summaryTruncationLengthWithPreview: number;
		pathTruncationLength: number;
		pathTruncationLengthWithPreview: number;
		pathTruncationLengthWithMetadata: number;
		personaControlRenderedThreshold: number;
		maximumSocialMetadataValue: number;
		contentFixedWidthLength: number
	}

	declare export class ScriptApplicationManager  {
		get_current(): ScriptApplicationManager;
		get_clientRuntimeContext(): SP.ClientRuntimeContext;
		get_preferencesUrl(): string;
		get_resultTypesUrl(): string;
		get_displayTemplatesUrl(): string;
		get_queryRulesUrl(): string;
		get_resultSourcesUrl(): string;
		get_pagePath(): string;
		add_preLoad(handlerFunction: Function): void;
		remove_preLoad(handlerFunction: Function): void;
		raisePreLoadEvent(): void;
		add_load(handlerFunction: Function): void;
		remove_load(handlerFunction: Function): void;
		raiseLoadEvent(): void;
		add_postLoad(handlerFunction: Function): void;
		remove_postLoad(handlerFunction: Function): void;
		raisePostLoadEvent(): void;
		initialize(): void;
		dispose(): void;
		registerClientControl(clientControl: DisplayControl | DataProvider | SearchBox): void;
		navigateTo(url: string): void;
		get_searchSessionID(): void
	}

	declare export class Res  {
		sb_ResultsPageTitle: string;
		sb_EmptyQueryWarning: string;
		sb_InvalidResultPageURL: string;
		sb_SitePrompt: string;
		sb_Prompt: string;
		sb_Prompt_NavNode: string;
		sb_GoSearch: string;
		sb_GoNav: string;
		sb_AdvancedLink: string;
		sb_PreferencesLink: string;
		sb_AccessKey: string;
		sb_SearchInProgress: string;
		qs_PersonalResultTitleSingular: string;
		qs_PersonalResultTitlePlural: string;
		qs_NameSuggestionsTitle: string;
		dp_ScriptLoadFailed: string;
		rf_EmptyRefinement: string;
		rf_RefinementTitle: string;
		rf_RefineBy: string;
		rf_All: string;
		rf_RefineByAuthorGoButton: string;
		rf_Apply: string;
		rf_AddProperty: string;
		rs_ResultsTitle: string;
		rs_MoveToPage: string;
		rs_MoveToPrevPage: string;
		rs_MoveToNextPage: string;
		rs_GroupMoreLink: string;
		rs_Hide_Results: string;
		qb_GetRecItems: string;
		qb_ScopeRecItems: string;
		qb_GetFillIn: string;
		qb_ShowRecsOnly: string;
		qb_FillInPopular: string;
		qb_FillInPopularScope: string;
		qb_FillInKeywords: string;
		qb_NoCollapseString: string;
		qb_ShowAllCollapseString: string;
		qb_ShowRefinersOnly: string;
		qb_RecsFromURLToken: string;
		qb_Remove: string;
		qb_FallbackResultTitle: string;
		rf_DefaultNumberLabels_min: string;
		rf_DefaultNumberLabels_max: string;
		rf_DefaultNumberLabels_range: string;
		rf_DefaultNumberLabels_value: string;
		rf_DefaultDateRangeLabels_min: string;
		rf_DefaultDateRangeLabels_max: string;
		rf_DefaultDateRangeLabels_range: string;
		rf_DefaultDateRangeLabels_value: string;
		rf_DefaultDateBoundaryLabels_0: string;
		rf_DefaultDateBoundaryLabels_1: string;
		rf_DefaultDateBoundaryLabels_2: string;
		rf_DefaultDateBoundaryLabels_3: string;
		rf_RangeBoundariesAnyValue: string;
		rf_RefinementTitle_Author: string;
		rf_RefinementTitle_AuthorOWSUSER: string;
		rf_RefinementTitle_Write: string;
		rf_RefinementTitle_LastModifiedTime: string;
		rf_RefinementTitle_owstaxidmetadataalltagsinfo: string;
		rf_RefinementTitle_owsmetadatafacetinfo: string;
		rf_RefinementTitle_languages: string;
		rf_RefinementTitle_ContentType: string;
		rf_RefinementTitle_Size: string;
		rf_RefinementTitle_UrlDepth: string;
		rf_RefinementTitle_People: string;
		rf_RefinementTitle_FileType: string;
		rf_RefinementTitle_FileExtension: string;
		rf_RefinementLabel_More: string;
		rf_ShowMoreResults_Tooltip: string;
		rf_RefinementLabel_Less: string;
		rf_RefinementLabel_EnterName: string;
		rf_RefinementTitle_CreatedBy: string;
		rf_RefinementTitle_from: string;
		rf_RefinementTitle_recipients: string;
		rf_RefinementTitle_subject: string;
		rf_RefinementTitle_Kind: string;
		rf_RefinementTitle_ContentClass: string;
		rf_RefinementTitle_WebTemplate: string;
		rf_RefinementTitle_participants: string;
		rf_RefinementTitle_AttachmentType: string;
		rf_RefinementTitle_BaseOfficeLocation: string;
		rf_RefinementTitle_companies: string;
		rf_RefinementTitle_ContentTypeId: string;
		rf_RefinementTitle_Created: string;
		rf_RefinementTitle_Department: string;
		rf_RefinementTitle_PeopleKeywords: string;
		rf_RefinementTitle_DisplayAuthor: string;
		rf_RefinementTitle_format: string;
		rf_RefinementTitle_ImageDateCreated: string;
		rf_RefinementTitle_JobTitle: string;
		rf_RefinementTitle_Location: string;
		rf_RefinementTitle_locations: string;
		rf_RefinementTitle_ManagedProperties: string;
		rf_RefinementTitle_MediaDuration: string;
		rf_RefinementTitle_PeopleInMedia: string;
		rf_RefinementTitle_personnames: string;
		rf_RefinementTitle_PictureHeight: string;
		rf_RefinementTitle_PictureWidth: string;
		rf_RefinementTitle_PostAuthor: string;
		rf_RefinementTitle_recommendedfor: string;
		rf_RefinementTitle_Responsibilities: string;
		rf_RefinementTitle_SharedWithInternal: string;
		rf_RefinementTitle_Site: string;
		rf_RefinementTitle_sitename: string;
		rf_RefinementTitle_Tags: string;
		rf_RefinementTitle_Title: string;
		rf_ResultTypeRefinerValue_MSAccess: string;
		rf_ResultTypeRefinerValue_AdobePDF: string;
		rf_ResultTypeRefinerValue_Assignment: string;
		rf_ResultTypeRefinerValue_Archive: string;
		rf_ResultTypeRefinerValue_Blog: string;
		rf_ResultTypeRefinerValue_Book: string;
		rf_ResultTypeRefinerValue_Community: string;
		rf_ResultTypeRefinerValue_Course: string;
		rf_ResultTypeRefinerValue_Discussion: string;
		rf_ResultTypeRefinerValue_Email: string;
		rf_ResultTypeRefinerValue_MSExcel: string;
		rf_ResultTypeRefinerValue_Image: string;
		rf_ResultTypeRefinerValue_Lesson: string;
		rf_ResultTypeRefinerValue_LotusNotes: string;
		rf_ResultTypeRefinerValue_NewsfeedPost: string;
		rf_ResultTypeRefinerValue_MSOneNote: string;
		rf_ResultTypeRefinerValue_MSPowerPoint: string;
		rf_ResultTypeRefinerValue_MSProject: string;
		rf_ResultTypeRefinerValue_MSPublisher: string;
		rf_ResultTypeRefinerValue_SharePointSite: string;
		rf_ResultTypeRefinerValue_Task: string;
		rf_ResultTypeRefinerValue_TeamSite: string;
		rf_ResultTypeRefinerValue_Text: string;
		rf_ResultTypeRefinerValue_Video: string;
		rf_ResultTypeRefinerValue_Visio: string;
		rf_ResultTypeRefinerValue_Wiki: string;
		rf_ResultTypeRefinerValue_Webpage: string;
		rf_ResultTypeRefinerValue_MSWord: string;
		rf_ResultTypeRefinerValue_XML: string;
		rf_OtherValue: string;
		rf_ClearAll: string;
		cc_err_WebPartErrorMessageDisplayHeader: string;
		cc_err_DataErrorMessageDisplayHeader: string;
		cc_err_RenderingErrorMessageDisplayHeader: string;
		cc_err_TemplateNotFoundMessage: string;
		cc_err_HiddenWithNoResultsWarningMessage: string;
		cc_err_ShowMessageDetails: string;
		cc_err_HideMessageDetails: string;
		cc_err_CorrelationIdMessage: string;
		cc_err_CustomLocStringWarningDisplayHeaderFormat: string;
		cc_err_NoCustomLoadedLocStringWarningDisplayHeaderFormat: string;
		cc_err_MalformedHeader: string;
		cc_err_QueryThrottledDetailsHeader: string;
		cc_ValueRenderer_FileSizeKilobyte: string;
		cc_ValueRenderer_FileSizeMegabyte: string;
		cc_ValueRenderer_FileSizeGigabyte: string;
		cc_ValueRenderer_BooleanYes: string;
		cc_ValueRenderer_BooleanNo: string;
		qb_SortTab_ThenBy: string;
		qb_SortTab_ChangeRankingWhen: string;
		qb_SortTab_OrWhen: string;
		qb_TestQueryTab_ShowAdvanced: string;
		qb_TestQueryTab_HideAdvanced: string;
		recs_ControlTitle: string;
		recs_ShowDetails: string;
		recs_SaveLink: string;
		recs_Open: string;
		recs_Recommended: string;
		recs_Fillin: string;
		recs_LastEditedBy: string;
		recs_Location: string;
		recs_AltIcon: string;
		pkr_CatalogPickerMoreLink: string;
		pkr_CatalogPickerMoreLinkToolTip: string;
		pkr_CatalogPickerSelectLinkToolTip: string;
		item_CopyLink: string;
		item_Tooltip_CopyLink: string;
		item_Alt_Preview: string;
		hp_Tooltip_Close: string;
		hp_Size: string;
		hp_Views_Singular: string;
		hp_Views_Plural: string;
		hp_ViewsLifeTime: string;
		hp_Popularity: string;
		hp_PopularityLifeTimePlural: string;
		hp_PopularityLifeTimePluralAndRecentPlural: string;
		hp_PopularityLifeTimeSingular: string;
		hp_PopularityLifeTimeSingularAndRecentSingular: string;
		hp_PopularityLifeTimePluralAndRecentSingular: string;
		hp_Tooltip_ViewsLifeTime: string;
		hp_Tooltip_ViewsRecent: string;
		hp_ChangedByAuthorDate: string;
		hp_Tooltip_Views: string;
		hp_LastModified: string;
		hp_Tooltip_LastModified: string;
		hp_RecentlyEdited: string;
		hp_Tooltip_Contributors: string;
		hp_Authors2: string;
		hp_Authors3: string;
		hp_Authors4: string;
		hp_Authors5Singular: string;
		hp_Authors5Plural: string;
		hp_RecentlyEdited_eDiscovery: string;
		hp_Tooltip_RecentlyEdited_More: string;
		hp_RecentlyEdited_More: string;
		hp_ViewDuplicates: string;
		hp_Tooltip_ViewDuplicates: string;
		hp_ViewLibrary: string;
		hp_Tooltip_ViewLibrary: string;
		hp_Send_Title: string;
		hp_Send_Open: string;
		hp_Send_OpenInClient: string;
		hp_Send_OpenInWeb: string;
		hp_Send_ViewRelated: string;
		hp_Send: string;
		hp_Tooltip_Send: string;
		hp_OpenInClient: string;
		hp_Edit: string;
		hp_Follow: string;
		hp_NoData: string;
		hp_Tooltip_OpenInClient: string;
		hp_Alt_ImagePreview: string;
		hp_PictureDimensions: string;
		hp_PictureHeightWidth: string;
		hp_DateTaken: string;
		hp_SectionHeadings: string;
		hp_Alt_SiteLogo: string;
		hp_SiteDescription: string;
		hp_Open: string;
		hp_Tooltip_Open: string;
		hp_Tooltip_Follow: string;
		hp_Tooltip_StopFollowing: string;
		tprprt_Recent: string;
		tprprt_Lifetime: string;
		tprprt_excel_report_entrypoint: string;
		qb_token_Equals: string;
		qb_token_NotEquals: string;
		qb_token_GreaterThan: string;
		qb_token_LessThan: string;
		qb_token_Contains: string;
		qb_token_NotContains: string;
		qb_token_ContainsStartsWith: string;
		qb_token_StartsWith: string;
		qb_token_NotStartsWith: string;
		qb_token_SiteColletion: string;
		qb_token_Site: string;
		qb_token_Page: string;
		qb_token_Topic: string;
		qb_token_TopicIdWithChildren: string;
		qb_token_UserName: string;
		qb_token_PreferredContentLanguage: string;
		qb_token_Date: string;
		qb_token_SearchBoxQuery: string;
		qb_token_SearchTerms: string;
		qb_token_QueryString: string;
		qb_token_URLToken: string;
		qb_token_PageField: string;
		qb_token_SiteLocale: string;
		qb_token_DisplayLanguage: string;
		qb_token_OnlySites: string;
		qb_token_OnlyLists: string;
		qb_token_OnlyListItems: string;
		qb_path_SiteCollection: string;
		qb_path_Site: string;
		qb_path_Page: string;
		qb_path_List: string;
		qb_path_Catalog: string;
		qb_path_QueryString: string;
		qb_path_URL_token: string;
		qb_path_URL: string;
		qb_path_None: string;
		qb_ContentType_Article: string;
		qb_ContentType_Audio: string;
		qb_ContentType_DocSet: string;
		qb_ContentType_Page: string;
		qb_ContentType_Picture: string;
		qb_ContentType_Report: string;
		qb_ContentType_Task: string;
		qb_ContentType_Video: string;
		qb_ContentType_WikiPage: string;
		qb_PathControl_ChooseQueryString: string;
		qb_PathControl_ChooseURL: string;
		qb_PathControl_ChooseTag: string;
		qb_PathControl_ChooseTag_None: string;
		qb_PathControl_ChooseTag_ThisTag: string;
		qb_PathControl_ChooseTag_Topic: string;
		qb_PathControl_ChooseTag_SubTopic: string;
		qb_UserQuery_TypeQuery: string;
		qb_UserQuery_Properties: string;
		qb_UserQuery_AddToken: string;
		qb_UserQuery_ChooseContentType: string;
		qb_UserQuery_AddAdditionalFilter: string;
		qb_UserQuery_ChooseSort: string;
		qb_UserQuery_PickCatalog2: string;
		qb_UserQuery_ConfigureCatalog: string;
		qb_UserQuery_ManualValue: string;
		qb_UserQuery_SelectProperty: string;
		qb_UserQuery_SelectValue: string;
		qb_UserQuery_ShowAllProperties: string;
		qb_QueryType_UserQuery: string;
		qb_QueryType_Latest: string;
		qb_QueryType_ContentType: string;
		qb_QueryType_RecommendedItems: string;
		qb_QueryType_Popular: string;
		qb_QueryType_Video: string;
		qb_QueryType_Catalog: string;
		qb_Error_SourceIdInvalid: string;
		qb_Tab_FilterBy: string;
		qb_Tab_QueryHelper: string;
		qb_Tab_SortBy: string;
		qb_Tab_TestQuery: string;
		qb_Tab_Settings: string;
		qb_NotApplicable: string;
		qb_ComplexObject: string;
		qb_PreviewResult_NoTemplateVariables: string;
		qb_PreviewResult_CouldNotResolveTemplateVariables: string;
		qb_PreviewResult_ErrorExpandTokens: string;
		qb_PreviewResult_EmptyQuery: string;
		searchResult_NoResult: string;
		qb_CatalogPicker_Title: string;
		qb_UseDefinedSort: string;
		hp_Duration: string;
		hp_PeopleInVideo: string;
		hp_PostedBy: string;
		hp_VideoDescription: string;
		hp_GoToVideoPage: string;
		item_Community_Member: string;
		item_Community_Members: string;
		item_Community_MemberLabel: string;
		item_Community_MembersLabel: string;
		item_Reply: string;
		item_Replies: string;
		item_ReplyLabel: string;
		item_RepliesLabel: string;
		item_NoReplies: string;
		item_Like: string;
		item_Likes: string;
		item_NoLikes: string;
		item_RepliesAndLikes: string;
		item_MoreThan: string;
		item_DefaultTitle: string;
		item_BestReply: string;
		item_postDate: string;
		item_postAuthor: string;
		item_postAuthorDate: string;
		item_replyDate: string;
		item_replyAuthor: string;
		item_replyAuthorDate: string;
		item_Community_Discussion: string;
		item_Community_Discussions: string;
		item_Community_DiscussionLabel: string;
		item_Community_DiscussionsLabel: string;
		hp_Discussion: string;
		hp_DiscussionCategory: string;
		hp_Reply: string;
		hp_ReplyCategory: string;
		hp_PopularDiscussions: string;
		hp_OriginalPost: string;
		hp_RecentReplies: string;
		hp_ViewDiscussion: string;
		hp_ViewConversation: string;
		hp_Community: string;
		hp_VisitCommunity: string;
		hp_MicroBlog: string;
		item_MicroBlog_Reply: string;
		item_MicroBlog_Replies: string;
		item_MicroBlog_Like: string;
		item_MicroBlog_Likes: string;
		item_MicroBlog_NoReplies: string;
		item_MicroBlog_SeeFullConversation: string;
		item_MicroBlog_RootPostTitle: string;
		item_People_Responsibilities: string;
		item_People_Skills: string;
		item_People_PastProjects: string;
		item_People_Interests: string;
		item_People_Schools: string;
		item_People_Memberships: string;
		item_People_EditProfileLink: string;
		item_People_SelfSearchFrequency: string;
		item_People_SelfSearchFrequency_ViewsMonths_Singular: string;
		item_People_SelfSearchFrequency_ViewsMonths_Plural: string;
		item_People_SelfSearchFrequency_ViewsWeeks_Singular: string;
		item_People_SelfSearchFrequency_ViewsWeeks_Plural: string;
		item_People_SelfSearchKeywords: string;
		item_People_LastModified: string;
		item_People_NoPresenceAvailable: string;
		hp_PeopleItem_Skills: string;
		hp_PeopleItem_PastProjects: string;
		hp_PeopleItem_Interests: string;
		hp_PeopleItem_Schools: string;
		hp_PeopleItem_Summary: string;
		hp_PeopleItem_Memberships: string;
		hp_PeopleItem_Authorship: string;
		hp_PeopleItem_RelatedThrough: string;
		hp_PeopleItem_MoreItems: string;
		hp_PeopleItem_Related: string;
		hp_PeopleItem_NoInformationAvailable: string;
		hp_PeopleItem_ViewProfile: string;
		hp_WebPageItem_Results: string;
		hp_WebPageItem_MoreResults_Label: string;
		rs_Preferences: string;
		rs_Advanced: string;
		rs_NoResult: string;
		rs_SingleResultCount: string;
		rs_ResultCount: string;
		rs_ApproximateResultCount: string;
		rs_EdiscoveryTopResultCount: string;
		rs_UpscopeTitle: string;
		rs_Upscope: string;
		rs_DidYouMean: string;
		rs_Edit_ResultSourcesTitle: string;
		rs_Edit_ResultTypesTitle: string;
		rs_Edit_QueryRulesTitle: string;
		rs_Edit_ResultSourcesDescription: string;
		rs_Edit_ResultSources: string;
		rs_Edit_ResultTypesDescription: string;
		rs_Edit_ResultType: string;
		rs_Edit_DisplayTemplate: string;
		rs_Edit_QueryRulesDescription: string;
		rs_Edit_QueryRules: string;
		rs_Edit_PromotedTitle: string;
		rs_Edit_RankedTitle: string;
		rs_Edit_PromotedDescription: string;
		rs_Edit_RankedDescription: string;
		rs_Edit_ConfigureSearchResults: string;
		rs_Edit_ConfigureSearchResults_Link: string;
		rs_NoResultsTitle: string;
		rs_NoResultsMessageWhenSearchSkipped: string;
		rs_NoResultsSuggestions: string;
		rs_NoResultsSpelling: string;
		rs_NoResultsDifferentTerms: string;
		rs_NoResultsGeneralTerms: string;
		rs_NoResultsFewerTerms: string;
		rs_NoResultsRefiners: string;
		rs_NoResultsTips: string;
		rs_NoResultsTips_Link: string;
		us_NoTerm_Error: string;
		u_ScriptLoadFail: string;
		u_ScriptLoadFailForViewer: string;
		item_NoImageMessage: string;
		control_NoResultsDisplayMode: string;
		control_NoResultsEditMode: string;
		file_CSS: string;
		file_Help: string;
		file_Installer: string;
		file_JavaScript: string;
		file_Log: string;
		file_Mail: string;
		file_Access: string;
		file_Excel: string;
		file_InfoPath: string;
		file_OneNote: string;
		file_PowerPoint: string;
		file_Project: string;
		file_Publisher: string;
		file_SPDesigner: string;
		file_Visio: string;
		file_Word: string;
		file_XPS: string;
		file_Audio: string;
		file_RTF: string;
		file_Text: string;
		file_WebPage: string;
		file_XML: string;
		file_XSL: string;
		file_Zip: string;
		ct_Folder: string;
		ct_Image: string;
		file_Document: string;
		cc_sts_list_announcements: string;
		cc_sts_list_events: string;
		cc_sts_list_contacts: string;
		cc_sts_list_discussionboard: string;
		cc_sts_list_documentlibrary: string;
		cc_sts_listitem_documentlibrary: string;
		cc_sts_list_links: string;
		cc_sts_list: string;
		cc_sts_listitem: string;
		cc_sts_list_picturelibrary: string;
		cc_sts_listitem_picturelibrary: string;
		cc_sts_web: string;
		cc_sts_site: string;
		cc_sts_list_survey: string;
		cc_sts_list_tasks: string;
		cc_sts_list_xmlform: string;
		rs_SortDescription: string;
		rs_SocialDistanceSort: string;
		rs_LanguageDescription: string;
		rs_LanguagePreferences: string;
		rs_PreferredSearchLanguage: string;
		rs_MoreLanguages: string;
		rs_SearchScope: string;
		rs_SearchScopeTooltip: string;
		rs_SelectPreferredSearchLanguage: string;
		rs_SelectPreferredSearchLanguage_Language: string;
		edu_BookAuthor: string;
		edu_BookCategory: string;
		edu_BookRights: string;
		edu_BookReleaseDate: string;
		edu_BookHomePageLink: string;
		edu_Class: string;
		edu_AssignmentCategory: string;
		edu_AssignmentFormat: string;
		edu_AssignmentFormatNone: string;
		edu_AssignmentFormatOnlineFile: string;
		edu_AssignmentFormatOnlineQuiz: string;
		edu_AssignmentFormatInClass: string;
		edu_AssignmentFormatUnknown: string;
		edu_AssignmentMaxPoints: string;
		edu_DueDate: string;
		edu_ReadPermission: string;
		edu_PrintPermission: string;
		edu_WritePermission: string;
		edu_EnableScriptPermission: string;
		edu_AssignmentLabel: string;
		edu_LessonLabel: string;
		edu_BookLabel: string;
		rf_RefinementTitle_DMSDocAuthor: string;
		rf_RefinementTitle_DMSCategory: string;
		rf_RefinementTitle_EDiscSpecifyProperty: string;
		refconf_NoSampleValues: string;
		refconf_SortBy_Name: string;
		refconf_SortBy_Number: string;
		refconf_SortBy_Count: string;
		refconf_SortDirection_Ascending: string;
		refconf_SortDirection_Descending: string;
		refconf_Error_FailedToRestoreConfiguration: string;
		refconf_Section_SuggestedRefiners: string;
		refconf_Section_OtherRefiners: string;
		refconf_Section_Separator: string;
		refconf_SampleValuesDialog_Title: string;
		refconf_ResultsWithValues: string;
		refconf_TotalResults: string;
		refconf_FNT_ConfigurationLoadFailure: string;
		refconf_FNT_ConfigurationLoadWarning: string;
		refconf_FNT_ConfigurationLoadWarningNullResponse: string;
		refconf_FNT_InheritModeTermInfoSingularFormatString: string;
		refconf_FNT_DCR_InheritModeAnotherTermset: string;
		refconf_FNT_DCR_CustomRefiners: string;
		refconf_FNT_DCR_DescendantInfo_ChildTermsTotal: string;
		refconf_FNT_DCR_DescendantInfo_ChildTermsNotInheriting: string;
		refconf_FNT_DCR_DescendantInfo_ChildTermsStoppingInheriting: string;
		refconf_FNT_DCR_DescendantInfo_ChildTermsStoppingInheritingLinkAnchor: string;
		refconf_FNT_DCR_StopInheritingPopupTitle: string;
		refconf_FNT_DCR_InheritPopupTitle: string;
		refconf_FNT_DCR_RefinementConfigurationDialogTitle: string;
		refconf_FNT_DCR_LoadingConfiguration: string;
		refconf_FNT_DCR_DescendantStoppingInheritancePopupTitle: string;
		refconf_FNT_DCR_UseManualIntervals: string;
		refconf_FNT_DCR_RefinementPreviewPopupTitle: string;
		refconf_FNT_DCR_PropertiesForFriendly: string;
		refconf_FNT_DCR_PropertiesFor: string;
		refconf_FNT_DCR_TotalResultsTooltip: string;
		refconf_FNT_DCR_GeneratingPreview: string;
		refconf_DCR_Yes: string;
		refconf_DCR_No: string;
		refconf_DCR_FacetedNavigationProgressTitle: string;
		refconf_DCR_RefinementConfigurationDialogProgressTitle: string;
		refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltip: string;
		refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltipNoAliases: string;
		refconf_DCR_RefinementConfigurationDialogManagedPropertyTooltipSeparator: string;
		refconf_DCR_RefinementConfigurationDialog_TooManyRefiners_Warning: string;
		refconf_DCR_RefinementConfigurationDialog_TooManyRefiners_Error: string;
		refconf_DCR_RefinementConfigurationDialog_NoSuggestedRefiners_Warning: string;
		refconf_DCR_RefinementConfigurationDialog_InvalidSelectedRefiner_Warning: string;
		edisc_MultiValueFormat: string;
		edisc_NoSubject: string;
		edisc_ControlPagingFormat: string;
		hp_Summary: string;
		rf_DefaultMinutesLabels_min: string;
		rf_DefaultMinutesLabels_max: string;
		rf_DefaultMinutesLabels_range: string;
		rf_DefaultMinutesLabels_value: string;
		hp_NowDateTime_Today: string;
		hp_NowDateTime_Yesterday: string;
		hp_NowDateTime_MonthAgo: string;
		hp_NowDateTime_YearAgo: string;
		hp_NowDateTime_DaysAgo: string;
		hp_NowDateTime_MonthsAgo: string;
		hp_NowDateTime_YearsAgo: string;
		rs_UpScopeActionPhrase: string;
		control_Content_NoResultsDisplayMode: string;
		control_RollupPage_NoResultsDisplayMode: string;
		control_Content_NoResultsEditMode: string;
		item_Diagnostic_PictureSlot: string;
		item_Diagnostic_PathSlot: string;
		item_Diagnostic_Preview: string;
		item_Diagnostic_Value: string;
		item_Diagnostic_MappedManagedProperty: string;
		item_Diagnostic_PropertyMappings: string;
		item_Diagnostic_SlotNameFormat: string;
		item_Diagnostic_ItemTitleFormat: string;
		hp_Preview_LoadingImgAlt: string;
		rf_EDiscExTypeRefinerValue_Email: string;
		rf_EDiscExTypeRefinerValue_Contacts: string;
		rf_EDiscExTypeRefinerValue_Meetings: string;
		rf_EDiscExTypeRefinerValue_Tasks: string;
		rf_EDiscExTypeRefinerValue_Notes: string;
		rf_EDiscExTypeRefinerValue_Documents: string;
		rf_EDiscExTypeRefinerValue_Journal: string;
		rf_EDiscExTypeRefinerValue_IM: string;
		control_EDisc_Subject: string;
		control_EDisc_Recipients: string;
		control_EDisc_Sender: string;
		control_EDisc_DateSent: string;
		control_EDisc_Title: string;
		control_EDisc_Author: string;
		control_EDisc_DateModified: string;
		hp_EDisc_Cc: string;
		hp_EDisc_Bcc: string;
		item_Content_GenericNoImageSymbol: string;
		hp_EDisc_From: string;
		hp_EDisc_To: string;
		hp_EDisc_AttachmentsTooltip: string;
		control_EDisc_DateSentTooltip: string;
		rs_AlertMe: string;
		item_Generic_OpenCalloutTooltip: string;
		item_CommunityPortal_DetailsIntervals: string;
		item_CommunityPortal_DetailsMembers: string;
		item_CommunityPortal_DetailsDiscussions: string;
		item_CommunityPortal_DetailsReplies: string;
		item_CommunityPortal_Date: string;
		item_CommunityPortal_MoreDetails: string;
		ar_htv_Follow: string;
		ar_htv_StartFollowing: string;
		ar_htv_StopFollowing: string;
		ar_rec_NoResults: string;
		ar_Explanation: string;
		ar_htv_IsFollowed: string;
		ar_htv_IsNotFollowed: string;
		hp_Post: string;
		hp_Tooltip_Post: string;
		rs_PartialResultWarning_Line1: string;
		rs_PartialResultWarning_Line2: string;
		rs_HasParseExceptionWarning_Line1: string;
		rs_HasParseExceptionWarning_Line2: string
	}

	
}

declare module 'U' {
				declare export class PropNames  {
		renderTemplates: "RenderTemplates";
		renderTemplateId: "RenderTemplateId";
		tableType: "TableType";
		queryErrors: "QueryErrors";
		resultTables: "ResultTables";
		resultRows: "ResultRows";
		queryId: "QueryId";
		properties: "Properties";
		rowCount: "RowCount";
		totalRows: "TotalRows";
		totalRowsIncludingDuplicates: "TotalRowsIncludingDuplicates";
		queryRuleId: "QueryRuleId";
		parentTableReference: "ParentTableReference";
		isFirstPinnedBlock: "IsFirstPinnedResultBlock";
		isFirstRankedBlock: "IsFirstRankedResultBlock"
	}

	declare export class Ids  {
		group: "_group";
		groupTitle: "_groupTitle";
		groupLink: "_groupLink";
		groupContent: "_groupContent";
		item: "_item";
		body: "_itemBody";
		title: "_itemTitle";
		icon: "_itemIcon";
		titleLink: "_itemTitleLink";
		summary: "_itemSummary";
		path: "_itemPath";
		hover: "_hover";
		visualBestBet: "_visualBestBet";
		preview: "_itemPreview";
		deepLinks: "_deepLinks";
		members: "_members";
		replies: "_replies";
		discussions: "_discussions";
		likes: "_likes";
		postInfo: "_postInfo"
	}

	declare export class LoadScriptsState  {
		scriptsToLoad: any;
		progress: number;
		timeoutHandle: any
	}

	
}