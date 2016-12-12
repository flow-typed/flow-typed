

declare module 'chrome' {
		declare interface Window {
		chrome: typeof chrome
	}

			
}

declare module 'accessibilityFeatures' {
		declare interface AccessibilityFeaturesGetArg {
		incognito?: boolean
	}

	declare interface AccessibilityFeaturesCallbackArg {
		value: any,
		levelOfControl: string,
		incognitoSpecific?: boolean
	}

	declare interface AccessibilityFeaturesSetArg {
		value: any,
		scope?: string
	}

	declare interface AccessibilityFeaturesClearArg {
		scope?: string
	}

	declare interface AccessibilityFeaturesSetting {
		get(
		details: AccessibilityFeaturesGetArg, callback: (details: AccessibilityFeaturesCallbackArg) => void
	): void,
		set(details: AccessibilityFeaturesSetArg, callback?: () => void): void,
		clear(details: AccessibilityFeaturesClearArg, callback?: () => void): void
	}

			
}

declare module 'alarms' {
		declare interface AlarmCreateInfo {
		delayInMinutes?: number,
		periodInMinutes?: number,
		when?: number
	}

	declare interface Alarm {
		periodInMinutes?: number,
		scheduledTime: number,
		name: string
	}

	declare interface AlarmEvent {
		
	}

	declare export function create(alarmInfo: AlarmCreateInfo): void

	declare export function create(name: string, alarmInfo: AlarmCreateInfo): void

	declare export function getAll(callback: (alarms: Alarm[]) => void): void

	declare export function clearAll(callback?: (wasCleared: boolean) => void): void

	declare export function clear(name?: string, callback?: (wasCleared: boolean) => void): void

	declare export function clear(callback: (wasCleared: boolean) => void): void

	declare export function get(callback: (alarm: Alarm) => void): void

	declare export function get(name: string, callback: (alarm: Alarm) => void): void

		
}

declare module 'browser' {
		declare interface Options {
		url: string
	}

	declare export function openTab(options: Options, callback: () => void): void

	declare export function openTab(options: Options): void

		
}

declare module 'bookmarks' {
		declare interface BookmarkTreeNode {
		index?: number,
		dateAdded?: number,
		title: string,
		url?: string,
		dateGroupModified?: number,
		id: string,
		parentId?: string,
		children?: BookmarkTreeNode[],
		unmodifiable?: any
	}

	declare interface BookmarkRemoveInfo {
		index: number,
		parentId: string
	}

	declare interface BookmarkMoveInfo {
		index: number,
		oldIndex: number,
		parentId: string,
		oldParentId: string
	}

	declare interface BookmarkChangeInfo {
		url?: string,
		title: string
	}

	declare interface BookmarkReorderInfo {
		childIds: string[]
	}

	declare interface BookmarkRemovedEvent {
		
	}

	declare interface BookmarkImportEndedEvent {
		
	}

	declare interface BookmarkMovedEvent {
		
	}

	declare interface BookmarkImportBeganEvent {
		
	}

	declare interface BookmarkChangedEvent {
		
	}

	declare interface BookmarkCreatedEvent {
		
	}

	declare interface BookmarkChildrenReordered {
		
	}

	declare interface BookmarkSearchQuery {
		query?: string,
		url?: string,
		title?: string
	}

	declare interface BookmarkCreateArg {
		parentId?: string,
		index?: number,
		title?: string,
		url?: string
	}

	declare interface BookmarkDestinationArg {
		parentId?: string,
		index?: number
	}

	declare interface BookmarkChangesArg {
		title?: string,
		url?: string
	}

	declare export function search(query: string, callback: (results: BookmarkTreeNode[]) => void): void

	declare export function search(
		query: BookmarkSearchQuery, callback: (results: BookmarkTreeNode[]) => void
	): void

	declare export function getTree(callback: (results: BookmarkTreeNode[]) => void): void

	declare export function getRecent(numberOfItems: number, callback: (results: BookmarkTreeNode[]) => void): void

	declare export function get(id: string, callback: (results: BookmarkTreeNode[]) => void): void

	declare export function get(idList: string[], callback: (results: BookmarkTreeNode[]) => void): void

	declare export function create(
		bookmark: BookmarkCreateArg, callback?: (result: BookmarkTreeNode) => void
	): void

	declare export function move(
		id: string, destination: BookmarkDestinationArg, callback?: (result: BookmarkTreeNode) => void
	): void

	declare export function update(
		id: string, changes: BookmarkChangesArg, callback?: (result: BookmarkTreeNode) => void
	): void

	declare export function remove(id: string, callback?: Function): void

	declare export function getChildren(id: string, callback: (results: BookmarkTreeNode[]) => void): void

	declare export function getSubTree(id: string, callback: (results: BookmarkTreeNode[]) => void): void

	declare export function removeTree(id: string, callback?: Function): void

		
}

declare module 'browserAction' {
		declare interface BadgeBackgroundColorDetails {
		color: any,
		tabId?: number
	}

	declare interface BadgeTextDetails {
		text: string,
		tabId?: number
	}

	declare interface TitleDetails {
		title: string,
		tabId?: number
	}

	declare interface TabDetails {
		tabId?: number
	}

	declare interface TabIconDetails {
		path?: any,
		tabId?: number,
		imageData?: ImageData
	}

	declare interface PopupDetails {
		tabId?: number,
		popup: string
	}

	declare interface BrowserClickedEvent {
		
	}

	declare export function enable(tabId?: number): void

	declare export function setBadgeBackgroundColor(details: BadgeBackgroundColorDetails): void

	declare export function setBadgeText(details: BadgeTextDetails): void

	declare export function setTitle(details: TitleDetails): void

	declare export function getBadgeText(details: TabDetails, callback: (result: string) => void): void

	declare export function setPopup(details: PopupDetails): void

	declare export function disable(tabId?: number): void

	declare export function getTitle(details: TabDetails, callback: (result: string) => void): void

	declare export function getBadgeBackgroundColor(details: TabDetails, callback: (result: number[]) => void): void

	declare export function getPopup(details: TabDetails, callback: (result: string) => void): void

	declare export function setIcon(details: TabIconDetails, callback?: Function): void

		
}

declare module 'browsingData' {
		declare interface OriginTypes {
		protectedWeb?: boolean,
		extension?: boolean,
		unprotectedWeb?: boolean
	}

	declare interface RemovalOptions {
		originTypes?: OriginTypes,
		since?: number
	}

	declare interface DataTypeSet {
		webSQL?: boolean,
		indexedDB?: boolean,
		cookies?: boolean,
		passwords?: boolean,
		serverBoundCertificates?: boolean,
		downloads?: boolean,
		cache?: boolean,
		appcache?: boolean,
		fileSystems?: boolean,
		pluginData?: boolean,
		localStorage?: boolean,
		formData?: boolean,
		history?: boolean,
		serviceWorkers?: boolean
	}

	declare interface SettingsCallback {
		options: RemovalOptions,
		dataToRemove: DataTypeSet,
		dataRemovalPermitted: DataTypeSet
	}

	declare export function settings(callback: (result: SettingsCallback) => void): void

	declare export function removePluginData(options: RemovalOptions, callback?: () => void): void

	declare export function removeFormData(options: RemovalOptions, callback?: () => void): void

	declare export function removeFileSystems(options: RemovalOptions, callback?: () => void): void

	declare export function remove(
		options: RemovalOptions, dataToRemove: DataTypeSet, callback?: () => void
	): void

	declare export function removePasswords(options: RemovalOptions, callback?: () => void): void

	declare export function removeCookies(options: RemovalOptions, callback?: () => void): void

	declare export function removeWebSQL(options: RemovalOptions, callback?: () => void): void

	declare export function removeAppcache(options: RemovalOptions, callback?: () => void): void

	declare export function removeDownloads(options: RemovalOptions, callback?: () => void): void

	declare export function removeLocalStorage(options: RemovalOptions, callback?: () => void): void

	declare export function removeCache(options: RemovalOptions, callback?: () => void): void

	declare export function removeHistory(options: RemovalOptions, callback?: () => void): void

	declare export function removeIndexedDB(options: RemovalOptions, callback?: () => void): void

		
}

declare module 'commands' {
		declare interface Command {
		name?: string,
		description?: string,
		shortcut?: string
	}

	declare interface CommandEvent {
		
	}

	declare export function getAll(callback: (commands: Command[]) => void): void

		
}

declare module 'contentSettings' {
		declare interface ClearDetails {
		scope?: string
	}

	declare interface SetDetails {
		resourceIdentifier?: ResourceIdentifier,
		setting: any,
		secondaryPattern?: string,
		scope?: string,
		primaryPattern: string
	}

	declare interface GetDetails {
		secondaryUrl?: string,
		resourceIdentifier?: ResourceIdentifier,
		incognito?: boolean,
		primaryUrl: string
	}

	declare interface ReturnedDetails {
		setting: any
	}

	declare interface ContentSetting {
		clear(details: ClearDetails, callback?: () => void): void,
		set(details: SetDetails, callback?: () => void): void,
		getResourceIdentifiers(callback: (resourceIdentifiers?: ResourceIdentifier[]) => void): void,
		get(details: GetDetails, callback: (details: ReturnedDetails) => void): void
	}

	declare interface ResourceIdentifier {
		id: string,
		description?: string
	}

			
}

declare module 'contextMenus' {
		declare interface OnClickData {
		selectionText?: string,
		checked?: boolean,
		menuItemId: any,
		frameUrl?: string,
		editable: boolean,
		mediaType?: string,
		wasChecked?: boolean,
		pageUrl: string,
		linkUrl?: string,
		parentMenuItemId?: any,
		srcUrl?: string
	}

	declare interface CreateProperties {
		documentUrlPatterns?: string[],
		checked?: boolean,
		title?: string,
		contexts?: string[],
		enabled?: boolean,
		targetUrlPatterns?: string[],
		onclick?: (info: OnClickData, tab: chrome.tabs.Tab) => void,
		parentId?: any,
		type?: string,
		id?: string
	}

	declare interface UpdateProperties {
		documentUrlPatterns?: string[],
		checked?: boolean,
		title?: string,
		contexts?: string[],
		enabled?: boolean,
		targetUrlPatterns?: string[],
		onclick?: Function,
		parentId?: any,
		type?: string
	}

	declare interface MenuClickedEvent {
		
	}

	declare export function removeAll(callback?: () => void): void

	declare export function create(createProperties: CreateProperties, callback?: () => void): void

	declare export function update(id: string, updateProperties: UpdateProperties, callback?: () => void): void

	declare export function update(id: number, updateProperties: UpdateProperties, callback?: () => void): void

	declare export function remove(menuItemId: string, callback?: () => void): void

	declare export function remove(menuItemId: number, callback?: () => void): void

		
}

declare module 'cookies' {
		declare interface Cookie {
		domain: string,
		name: string,
		storeId: string,
		value: string,
		session: boolean,
		hostOnly: boolean,
		expirationDate?: number,
		path: string,
		httpOnly: boolean,
		secure: boolean
	}

	declare interface CookieStore {
		id: string,
		tabIds: number[]
	}

	declare interface GetAllDetails {
		domain?: string,
		name?: string,
		url?: string,
		storeId?: string,
		session?: boolean,
		path?: string,
		secure?: boolean
	}

	declare interface SetDetails {
		domain?: string,
		name?: string,
		url: string,
		storeId?: string,
		value?: string,
		expirationDate?: number,
		path?: string,
		httpOnly?: boolean,
		secure?: boolean
	}

	declare interface Details {
		name: string,
		url: string,
		storeId?: string
	}

	declare interface CookieChangeInfo {
		cookie: Cookie,
		removed: boolean,
		cause: string
	}

	declare interface CookieChangedEvent {
		
	}

	declare export function getAllCookieStores(callback: (cookieStores: CookieStore[]) => void): void

	declare export function getAll(details: GetAllDetails, callback: (cookies: Cookie[]) => void): void

	declare export function set(details: SetDetails, callback?: (cookie?: Cookie) => void): void

	declare export function remove(details: Details, callback?: (details: Details) => void): void

	declare export function get(details: Details, callback: (cookie?: Cookie) => void): void

		
}

declare module 'chrome.debugger' {
		declare interface Debuggee {
		tabId?: number,
		extensionId?: string,
		targetId?: string
	}

	declare interface TargetInfo {
		type: string,
		id: string,
		tabId?: number,
		extensionId?: string,
		attached: boolean,
		title: string,
		url: string,
		faviconUrl?: string
	}

	declare interface DebuggerDetachedEvent {
		
	}

	declare interface DebuggerEventEvent {
		
	}

	declare export function attach(target: Debuggee, requiredVersion: string, callback?: () => void): void

	declare export function detach(target: Debuggee, callback?: () => void): void

	declare export function sendCommand(
		target: Debuggee, method: string, commandParams?: Object, callback?: (result?: Object) => void
	): void

	declare export function getTargets(callback: (result: TargetInfo[]) => void): void

		
}

declare module 'declarativeContent' {
		declare interface PageStateUrlDetails {
		hostContains?: string,
		hostEquals?: string,
		hostPrefix?: string,
		hostSuffix?: string,
		pathContains?: string,
		pathEquals?: string,
		pathPrefix?: string,
		pathSuffix?: string,
		queryContains?: string,
		queryEquals?: string,
		queryPrefix?: string,
		querySuffix?: string,
		urlContains?: string,
		urlEquals?: string,
		urlMatches?: string,
		originAndPathMatches?: string,
		urlPrefix?: string,
		urlSuffix?: string,
		schemes?: string[],
		ports?: (number | number[])[]
	}

	declare interface PageStateMatcher {
		pageUrl?: PageStateUrlDetails,
		css?: string[],
		isBookmarked?: boolean
	}

			
}

declare module 'declarativeWebRequest' {
		declare interface HeaderFilter {
		nameEquals?: string,
		valueContains?: any,
		nameSuffix?: string,
		valueSuffix?: string,
		valuePrefix?: string,
		nameContains?: any,
		valueEquals?: string,
		namePrefix?: string
	}

	declare interface AddResponseHeader {
		name: string,
		value: string
	}

	declare interface RemoveResponseCookie {
		filter: ResponseCookie
	}

	declare interface RemoveResponseHeader {
		name: string,
		value?: string
	}

	declare interface RequestMatcher {
		contentType?: string[],
		url?: chrome.events.UrlFilter,
		excludeContentType?: string[],
		excludeResponseHeader?: HeaderFilter[],
		resourceType?: string,
		responseHeaders?: HeaderFilter[]
	}

	declare interface IgnoreRules {
		lowerPriorityThan: number
	}

	declare interface RedirectToEmptyDocument {
		
	}

	declare interface RedirectRequest {
		redirectUrl: string
	}

	declare interface ResponseCookie {
		domain?: string,
		name?: string,
		expires?: string,
		maxAge?: number,
		value?: string,
		path?: string,
		httpOnly?: string,
		secure?: string
	}

	declare interface AddResponseCookie {
		cookie: ResponseCookie
	}

	declare interface EditResponseCookie {
		filter: ResponseCookie,
		modification: ResponseCookie
	}

	declare interface CancelRequest {
		
	}

	declare interface RemoveRequestHeader {
		name: string
	}

	declare interface EditRequestCookie {
		filter: RequestCookie,
		modification: RequestCookie
	}

	declare interface SetRequestHeader {
		name: string,
		value: string
	}

	declare interface RequestCookie {
		name?: string,
		value?: string
	}

	declare interface RedirectByRegEx {
		to: string,
		from: string
	}

	declare interface RedirectToTransparentImage {
		
	}

	declare interface AddRequestCookie {
		cookie: RequestCookie
	}

	declare interface RemoveRequestCookie {
		filter: RequestCookie
	}

	declare interface RequestedEvent {
		
	}

			
}

declare module 'desktopCapture' {
			declare export function chooseDesktopMedia(sources: string[], callback: (streamId: string) => void): number

	declare export function chooseDesktopMedia(
		sources: string[], targetTab: chrome.tabs.Tab, callback: (streamId: string) => void
	): number

	declare export function cancelChooseDesktopMedia(desktopMediaRequestId: number): void

		
}

declare module 'inspectedWindow' {
		declare interface Resource {
		url: string,
		getContent(callback: (content: string, encoding: string) => void): void,
		setContent(content: string, commit: boolean, callback?: (error: Object) => void): void
	}

	declare interface ReloadOptions {
		userAgent?: string,
		ignoreCache?: boolean,
		injectedScript?: boolean,
		preprocessorScript?: string
	}

	declare interface EvaluationExceptionInfo {
		isError: boolean,
		code: string,
		description: string,
		details: any[],
		isException: boolean,
		value: string
	}

	declare interface ResourceAddedEvent {
		
	}

	declare interface ResourceContentCommittedEvent {
		
	}

	declare export function reload(reloadOptions: ReloadOptions): void

	declare export function eval(
		expression: string, callback?: (result: Object, exceptionInfo: EvaluationExceptionInfo) => void
	): void

	declare export function getResources(callback: (resources: Resource[]) => void): void

		
}

declare module 'network' {
		declare interface Request {
		getContent(callback: (content: string, encoding: string) => void): void
	}

	declare interface RequestFinishedEvent {
		
	}

	declare interface NavigatedEvent {
		
	}

	declare export function getHAR(callback: (harLog: Object) => void): void

		
}

declare module 'panels' {
		declare interface PanelShownEvent {
		
	}

	declare interface PanelHiddenEvent {
		
	}

	declare interface PanelSearchEvent {
		
	}

	declare interface ExtensionPanel {
		createStatusBarButton(iconPath: string, tooltipText: string, disabled: boolean): Button,
		onShown: PanelShownEvent,
		onHidden: PanelHiddenEvent,
		onSearch: PanelSearchEvent
	}

	declare interface ButtonClickedEvent {
		
	}

	declare interface Button {
		update(iconPath?: string, tooltipText?: string, disabled?: boolean): void,
		onClicked: ButtonClickedEvent
	}

	declare interface SelectionChangedEvent {
		
	}

	declare interface ElementsPanel {
		createSidebarPane(title: string, callback?: (result: ExtensionSidebarPane) => void): void,
		onSelectionChanged: SelectionChangedEvent
	}

	declare interface SourcesPanel {
		createSidebarPane(title: string, callback?: (result: ExtensionSidebarPane) => void): void,
		onSelectionChanged: SelectionChangedEvent
	}

	declare interface ExtensionSidebarPaneShownEvent {
		
	}

	declare interface ExtensionSidebarPaneHiddenEvent {
		
	}

	declare interface ExtensionSidebarPane {
		setHeight(height: string): void,
		setExpression(expression: string, rootTitle?: string, callback?: () => void): void,
		setExpression(expression: string, callback?: () => void): void,
		setObject(jsonObject: string, rootTitle?: string, callback?: () => void): void,
		setObject(jsonObject: string, callback?: () => void): void,
		setPage(path: string): void,
		onShown: ExtensionSidebarPaneShownEvent,
		onHidden: ExtensionSidebarPaneHiddenEvent
	}

	declare export function create(
		title: string, iconPath: string, pagePath: string, callback?: (panel: ExtensionPanel) => void
	): void

	declare export function setOpenResourceHandler(callback?: (resource: chrome.devtools.inspectedWindow.Resource) => void): void

	declare export function openResource(url: string, lineNumber: number, callback: () => void): void

		
}

declare module 'documentScan' {
		declare interface DocumentScanOptions {
		mimeTypes?: string[],
		maxImages?: number
	}

	declare interface DocumentScanCallbackArg {
		dataUrls: string[],
		mimeType: string
	}

	declare export function scan(
		options: DocumentScanOptions, callback: (result: DocumentScanCallbackArg) => void
	): void

		
}

declare module 'downloads' {
		declare interface HeaderNameValuePair {
		name: string,
		value: string
	}

	declare interface DownloadOptions {
		body?: string,
		saveAs?: boolean,
		url: string,
		filename?: string,
		headers?: HeaderNameValuePair[],
		method?: string,
		conflictAction?: string
	}

	declare interface DownloadDelta {
		danger?: StringDelta,
		url?: StringDelta,
		totalBytes?: DoubleDelta,
		filename?: StringDelta,
		paused?: BooleanDelta,
		state?: StringDelta,
		mime?: StringDelta,
		fileSize?: DoubleDelta,
		startTime?: DoubleDelta,
		error?: StringDelta,
		endTime?: DoubleDelta,
		id: number,
		canResume?: BooleanDelta,
		exists?: BooleanDelta
	}

	declare interface BooleanDelta {
		current?: boolean,
		previous?: boolean
	}

	declare interface DoubleDelta {
		current?: number,
		previous?: number
	}

	declare interface StringDelta {
		current?: string,
		previous?: string
	}

	declare interface DownloadItem {
		bytesReceived: number,
		danger: string,
		url: string,
		totalBytes: number,
		filename: string,
		paused: boolean,
		state: string,
		mime: string,
		fileSize: number,
		startTime: string,
		error?: string,
		endTime?: string,
		id: number,
		incognito: boolean,
		referrer: string,
		estimatedEndTime?: string,
		canResume: boolean,
		exists: boolean,
		byExtensionId?: string,
		byExtensionName?: string
	}

	declare interface GetFileIconOptions {
		size?: number
	}

	declare interface DownloadQuery {
		orderBy?: string[],
		urlRegex?: string,
		endedBefore?: number,
		totalBytesGreater?: number,
		danger?: string,
		totalBytes?: number,
		paused?: boolean,
		filenameRegex?: string,
		query?: string[],
		totalBytesLess?: number,
		id?: number,
		bytesReceived?: number,
		endedAfter?: number,
		filename?: string,
		state?: string,
		startedAfter?: number,
		mime?: string,
		fileSize?: number,
		startTime?: number,
		url?: string,
		startedBefore?: number,
		limit?: number,
		error?: number,
		endTime?: number,
		exists?: boolean
	}

	declare interface DownloadFilenameSuggestion {
		filename: string,
		conflictAction?: string
	}

	declare interface DownloadChangedEvent {
		
	}

	declare interface DownloadCreatedEvent {
		
	}

	declare interface DownloadErasedEvent {
		
	}

	declare interface DownloadDeterminingFilenameEvent {
		
	}

	declare export function search(query: DownloadQuery, callback: (results: DownloadItem[]) => void): void

	declare export function pause(downloadId: number, callback?: () => void): void

	declare export function getFileIcon(downloadId: number, callback: (iconURL: string) => void): void

	declare export function getFileIcon(
		downloadId: number, options: GetFileIconOptions, callback: (iconURL: string) => void
	): void

	declare export function resume(downloadId: number, callback?: () => void): void

	declare export function cancel(downloadId: number, callback?: () => void): void

	declare export function download(options: DownloadOptions, callback?: (downloadId: number) => void): void

	declare export function open(downloadId: number): void

	declare export function show(downloadId: number): void

	declare export function showDefaultFolder(): void

	declare export function erase(query: DownloadQuery, callback: (erasedIds: number[]) => void): void

	declare export function removeFile(downloadId: number, callback?: () => void): void

	declare export function acceptDanger(downloadId: number, callback: () => void): void

	declare export function drag(downloadId: number): void

	declare export function setShelfEnabled(enabled: boolean): void

		
}

declare module 'platformKeys' {
		declare interface Token {
		id: string,
		subtleCrypto: SubtleCrypto
	}

	declare interface Match {
		certificate: ArrayBuffer,
		keyAlgorithm: KeyAlgorithm
	}

	declare interface ClientCertificateSelectRequestDetails {
		certificateTypes: string[],
		certificateAuthorities: ArrayBuffer[]
	}

	declare interface ClientCertificateSelectDetails {
		request: ClientCertificateSelectRequestDetails,
		clientCerts?: ArrayBuffer[],
		interactive: boolean
	}

	declare interface ServerCertificateVerificationDetails {
		serverCertificateChain: ArrayBuffer[],
		hostname: string
	}

	declare interface ServerCertificateVerificationResult {
		trusted: boolean,
		debug_errors: string[]
	}

	declare export function getToken(callback: (tokens: Token[]) => void): void

	declare export function getCertificates(tokenId: string, callback: (certificates: ArrayBuffer) => void): void

	declare export function importCertificate(tokenId: string, certificate: ArrayBuffer, callback?: () => void): void

	declare export function removeCertificate(tokenId: string, certificate: ArrayBuffer, callback?: () => void): void

	declare export function selectClientCertificates(
		details: ClientCertificateSelectDetails, callback: (matches: Match[]) => void
	): void

	declare export function getKeyPair(
		certificate: ArrayBuffer, parameters: Object, callback: (publicKey: CryptoKey, privateKey?: CryptoKey) => void
	): void

	declare export function subtleCrypto(): SubtleCrypto

	declare export function verifyTLSServerCertificate(
		details: ServerCertificateVerificationDetails, callback: (result: ServerCertificateVerificationResult) => void
	): void

		
}

declare module 'events' {
		declare interface UrlFilter {
		schemes?: string[],
		urlMatches?: string,
		pathContains?: string,
		hostSuffix?: string,
		hostPrefix?: string,
		hostContains?: string,
		urlContains?: string,
		querySuffix?: string,
		urlPrefix?: string,
		hostEquals?: string,
		urlEquals?: string,
		queryContains?: string,
		pathPrefix?: string,
		pathEquals?: string,
		pathSuffix?: string,
		queryEquals?: string,
		queryPrefix?: string,
		urlSuffix?: string,
		ports?: any[],
		originAndPathMatches?: string
	}

	declare interface Event<T> {
		addListener(callback: T): void,
		getRules(callback: (rules: Rule[]) => void): void,
		getRules(ruleIdentifiers: string[], callback: (rules: Rule[]) => void): void,
		hasListener(callback: T): boolean,
		removeRules(ruleIdentifiers?: string[], callback?: () => void): void,
		removeRules(callback?: () => void): void,
		addRules(rules: Rule[], callback?: (rules: Rule[]) => void): void,
		removeListener(callback: T): void,
		hasListeners(): boolean
	}

	declare interface Rule {
		priority?: number,
		conditions: any[],
		id?: string,
		actions: any[],
		tags?: string[]
	}

			
}

declare module 'extension' {
		declare interface FetchProperties {
		windowId?: number,
		type?: string
	}

	declare interface LastError {
		message: string
	}

	declare interface OnRequestEvent {
		
	}

	declare export function getBackgroundPage(): Window

	declare export function getURL(path: string): string

	declare export function setUpdateUrlData(data: string): void

	declare export function getViews(fetchProperties?: FetchProperties): Window[]

	declare export function isAllowedFileSchemeAccess(callback: (isAllowedAccess: boolean) => void): void

	declare export function isAllowedIncognitoAccess(callback: (isAllowedAccess: boolean) => void): void

	declare export function sendRequest(
		extensionId: string, request: any, responseCallback?: (response: any) => void
	): void

	declare export function sendRequest(request: any, responseCallback?: (response: any) => void): void

	declare export function getExtensionTabs(windowId?: number): Window[]

		
}

declare module 'fileBrowserHandler' {
		declare interface SelectionParams {
		allowedFileExtensions?: string[],
		suggestedName: string
	}

	declare interface SelectionResult {
		entry?: Object,
		success: boolean
	}

	declare interface FileHandlerExecuteEventDetails {
		tab_id?: number,
		entries: any[]
	}

	declare interface FileBrowserHandlerExecuteEvent {
		
	}

	declare export function selectFile(
		selectionParams: SelectionParams, callback: (result: SelectionResult) => void
	): void

		
}

declare module 'fileSystemProvider' {
		declare interface OpenedFileInfo {
		openRequestId: number,
		filePath: string,
		mode: string
	}

	declare interface FileWatchersInfo {
		entryPath: string,
		recursive: boolean,
		lastTag?: string
	}

	declare interface EntryMetadata {
		isDirectory: boolean,
		name: string,
		size: number,
		modificationTime: Date,
		mimeType?: string,
		thumbnail?: string
	}

	declare interface FileSystemInfo {
		fileSystemId: string,
		displayName: string,
		writable: boolean,
		openedFilesLimit: number,
		openedFiles: OpenedFileInfo[],
		supportsNotifyTag?: boolean,
		watchers: FileWatchersInfo[]
	}

	declare interface GetActionsRequestedOptions {
		fileSystemId: string,
		requestId: number,
		entryPath: string
	}

	declare interface Action {
		id: string,
		title?: string
	}

	declare interface ExecuteActionRequestedOptions {
		fileSystemId: string,
		requestId: number,
		entryPath: string,
		actionId: string
	}

	declare interface MountOptions {
		fileSystemId: string,
		displayName: string,
		writable?: boolean,
		openedFilesLimit?: number,
		supportsNotifyTag?: boolean
	}

	declare interface UnmountOptions {
		fileSystemId: string
	}

	declare interface NotificationChange {
		entryPath: string,
		changeType: string
	}

	declare interface NotificationOptions {
		fileSystemId: string,
		observedPath: string,
		recursive: boolean,
		changeType: string,
		changes?: NotificationChange[],
		tag?: string
	}

	declare interface RequestedEventOptions {
		fileSystemId: string,
		requestId: number
	}

	declare interface EntryPathRequestedEventOptions {
		entryPath: string
	}

	declare interface MetadataRequestedEventOptions {
		thumbnail: boolean
	}

	declare interface DirectoryPathRequestedEventOptions {
		directoryPath: string
	}

	declare interface FilePathRequestedEventOptions {
		filePath: string
	}

	declare interface OpenFileRequestedEventOptions {
		mode: string
	}

	declare interface OpenedFileRequestedEventOptions {
		openRequestId: number
	}

	declare interface OpenedFileOffsetRequestedEventOptions {
		offset: number,
		length: number
	}

	declare interface DirectoryPathRecursiveRequestedEventOptions {
		recursive: boolean
	}

	declare interface EntryPathRecursiveRequestedEventOptions {
		recursive: boolean
	}

	declare interface SourceTargetPathRequestedEventOptions {
		sourcePath: string,
		targetPath: string
	}

	declare interface FilePathLengthRequestedEventOptions {
		length: number
	}

	declare interface OpenedFileIoRequestedEventOptions {
		offset: number,
		data: ArrayBuffer
	}

	declare interface OperationRequestedEventOptions {
		operationRequestId: number
	}

	declare interface RequestedEvent {
		
	}

	declare interface MetadataRequestedEvent {
		
	}

	declare interface DirectoryPathRequestedEvent {
		
	}

	declare interface OpenFileRequestedEvent {
		
	}

	declare interface OpenedFileRequestedEvent {
		
	}

	declare interface OpenedFileOffsetRequestedEvent {
		
	}

	declare interface DirectoryPathRecursiveRequestedEvent {
		
	}

	declare interface EntryPathRecursiveRequestedEvent {
		
	}

	declare interface FilePathRequestedEvent {
		
	}

	declare interface SourceTargetPathRequestedEvent {
		
	}

	declare interface FilePathLengthRequestedEvent {
		
	}

	declare interface OpenedFileIoRequestedEvent {
		
	}

	declare interface OperationRequestedEvent {
		
	}

	declare interface OptionlessRequestedEvent {
		
	}

	declare export function mount(options: MountOptions, callback?: () => void): void

	declare export function unmount(options: UnmountOptions, callback?: () => void): void

	declare export function getAll(callback: (fileSystems: FileSystemInfo[]) => void): void

	declare export function get(fileSystemId: string, callback: (fileSystem: FileSystemInfo) => void): void

	declare export function notify(options: NotificationOptions, callback: () => void): void

		
}

declare module 'fontSettings' {
		declare interface FontName {
		displayName: string,
		fontId: string
	}

	declare interface DefaultFontSizeDetails {
		pixelSize: number
	}

	declare interface FontDetails {
		genericFamily: string,
		script?: string
	}

	declare interface FullFontDetails {
		genericFamily: string,
		levelOfControl: string,
		script?: string,
		fontId: string
	}

	declare interface FontDetailsResult {
		levelOfControl: string,
		fontId: string
	}

	declare interface FontSizeDetails {
		pixelSize: number,
		levelOfControl: string
	}

	declare interface SetFontSizeDetails {
		pixelSize: number
	}

	declare interface SetFontDetails {
		fontId: string
	}

	declare interface DefaultFixedFontSizeChangedEvent {
		
	}

	declare interface DefaultFontSizeChangedEvent {
		
	}

	declare interface MinimumFontSizeChangedEvent {
		
	}

	declare interface FontChangedEvent {
		
	}

	declare export function setDefaultFontSize(details: DefaultFontSizeDetails, callback?: Function): void

	declare export function getFont(details: FontDetails, callback?: (details: FontDetailsResult) => void): void

	declare export function getDefaultFontSize(details?: Object, callback?: (options: FontSizeDetails) => void): void

	declare export function getMinimumFontSize(details?: FontSizeDetails, callback?: (options: FontSizeDetails) => void): void

	declare export function setMinimumFontSize(details: SetFontSizeDetails, callback?: Function): void

	declare export function getDefaultFixedFontSize(details?: Object, callback?: (details: FontSizeDetails) => void): void

	declare export function clearDefaultFontSize(details?: Object, callback?: Function): void

	declare export function setDefaultFixedFontSize(details: SetFontSizeDetails, callback?: Function): void

	declare export function clearFont(details: FontDetails, callback?: Function): void

	declare export function setFont(details: SetFontDetails, callback?: Function): void

	declare export function clearMinimumFontSize(details?: Object, callback?: Function): void

	declare export function getFontList(callback: (results: FontName[]) => void): void

	declare export function clearDefaultFixedFontSize(details: Object, callback?: Function): void

		
}

declare module 'gcm' {
		declare interface OutgoingMessage {
		destinationId: string,
		messageId: string,
		timeToLive?: number,
		data: Object
	}

	declare interface IncomingMessage {
		data: Object,
		from?: string,
		collapseKey?: string
	}

	declare interface GcmError {
		errorMessage: string,
		messageId?: string,
		detail: Object
	}

	declare interface MessageReceptionEvent {
		
	}

	declare interface MessageDeletionEvent {
		
	}

	declare interface GcmErrorEvent {
		
	}

	declare export function register(senderIds: string[], callback: (registrationId: string) => void): void

	declare export function unregister(callback: () => void): void

	declare export function send(message: OutgoingMessage, callback: (messageId: string) => void): void

		
}

declare module 'history' {
		declare interface VisitItem {
		transition: string,
		visitTime?: number,
		visitId: string,
		referringVisitId: string,
		id: string
	}

	declare interface HistoryItem {
		typedCount?: number,
		title?: string,
		url?: string,
		lastVisitTime?: number,
		visitCount?: number,
		id: string
	}

	declare interface HistoryQuery {
		text: string,
		maxResults?: number,
		startTime?: number,
		endTime?: number
	}

	declare interface Url {
		url: string
	}

	declare interface Range {
		endTime: number,
		startTime: number
	}

	declare interface RemovedResult {
		allHistory: boolean,
		urls?: string[]
	}

	declare interface HistoryVisitedEvent {
		
	}

	declare interface HistoryVisitRemovedEvent {
		
	}

	declare export function search(query: HistoryQuery, callback: (results: HistoryItem[]) => void): void

	declare export function addUrl(details: Url, callback?: () => void): void

	declare export function deleteRange(range: Range, callback: () => void): void

	declare export function deleteAll(callback: () => void): void

	declare export function getVisits(details: Url, callback: (results: VisitItem[]) => void): void

	declare export function deleteUrl(details: Url, callback?: () => void): void

		
}

declare module 'i18n' {
			declare export function getAcceptLanguages(callback: (languages: string[]) => void): void

	declare export function getMessage(messageName: string, substitutions?: any): string

	declare export function getUILanguage(): string

		
}

declare module 'identity' {
		declare interface AccountInfo {
		id: string
	}

	declare interface TokenDetails {
		interactive?: boolean,
		account?: AccountInfo,
		scopes?: string[]
	}

	declare interface UserInfo {
		email: string,
		id: string
	}

	declare interface TokenInformation {
		token: string
	}

	declare interface WebAuthFlowOptions {
		url: string,
		interactive?: boolean
	}

	declare interface SignInChangeEvent {
		
	}

	declare export function getAccounts(callback: (accounts: AccountInfo[]) => void): void

	declare export function getAuthToken(details: TokenDetails, callback?: (token: string) => void): void

	declare export function getProfileUserInfo(callback: (userInfo: UserInfo) => void): void

	declare export function removeCachedAuthToken(details: TokenInformation, callback?: () => void): void

	declare export function launchWebAuthFlow(details: WebAuthFlowOptions, callback: (responseUrl?: string) => void): void

	declare export function getRedirectURL(path?: string): string

		
}

declare module 'idle' {
		declare interface IdleStateChangedEvent {
		
	}

	declare export function queryState(detectionIntervalInSeconds: number, callback: (newState: string) => void): void

	declare export function setDetectionInterval(intervalInSeconds: number): void

		
}

declare module 'ime' {
		declare interface KeyboardEvent {
		shiftKey?: boolean,
		altKey?: boolean,
		requestId: string,
		key: string,
		ctrlKey?: boolean,
		type: string,
		extensionId?: string,
		code: string,
		keyCode?: number,
		capsLock?: boolean
	}

	declare interface InputContext {
		contextID: number,
		type: string,
		autoCorrect: boolean,
		autoComplete: boolean,
		spellCheck: boolean
	}

	declare interface MenuItem {
		id: string,
		label?: string,
		style?: string,
		visible?: boolean,
		checked?: boolean,
		enabled?: boolean
	}

	declare interface ImeParameters {
		items: MenuItem[],
		engineID: string
	}

	declare interface CommitTextParameters {
		text: string,
		contextID: number
	}

	declare interface CandidateUsage {
		title: string,
		body: string
	}

	declare interface CandidateTemplate {
		candidate: string,
		id: number,
		parentId?: number,
		label?: string,
		annotation?: string,
		usage?: CandidateUsage
	}

	declare interface CandidatesParameters {
		contextID: number,
		candidates: CandidateTemplate[]
	}

	declare interface CompositionParameterSegment {
		start: number,
		end: number,
		style: string
	}

	declare interface CompositionParameters {
		contextID: number,
		text: string,
		segments: CompositionParameterSegment[],
		cursor: number,
		selectionStart?: number,
		selectionEnd?: number
	}

	declare interface MenuItemParameters {
		items: Object[],
		engineId: string
	}

	declare interface CandidateWindowParameterProperties {
		cursorVisible?: boolean,
		vertical?: boolean,
		pageSize?: number,
		auxiliaryTextVisible?: boolean,
		auxiliaryText?: string,
		visible?: boolean,
		windowPosition?: string
	}

	declare interface CandidateWindowParameter {
		engineID: string,
		properties: CandidateWindowParameterProperties
	}

	declare interface ClearCompositionParameters {
		contextID: number
	}

	declare interface CursorPositionParameters {
		candidateID: number,
		contextID: number
	}

	declare interface SendKeyEventParameters {
		contextID: number,
		keyData: KeyboardEvent[]
	}

	declare interface DeleteSurroundingTextParameters {
		engineID: string,
		contextID: number,
		offset: number,
		length: number
	}

	declare interface SurroundingTextInfo {
		text: string,
		focus: number,
		anchor: number
	}

	declare interface BlurEvent {
		
	}

	declare interface CandidateClickedEvent {
		
	}

	declare interface KeyEventEvent {
		
	}

	declare interface DeactivatedEvent {
		
	}

	declare interface InputContextUpdateEvent {
		
	}

	declare interface ActivateEvent {
		
	}

	declare interface FocusEvent {
		
	}

	declare interface MenuItemActivatedEvent {
		
	}

	declare interface SurroundingTextChangedEvent {
		
	}

	declare interface InputResetEvent {
		
	}

	declare export function setMenuItems(parameters: ImeParameters, callback?: () => void): void

	declare export function commitText(parameters: CommitTextParameters, callback?: (success: boolean) => void): void

	declare export function setCandidates(parameters: CandidatesParameters, callback?: (success: boolean) => void): void

	declare export function setComposition(parameters: CompositionParameters, callback?: (success: boolean) => void): void

	declare export function updateMenuItems(parameters: MenuItemParameters, callback?: () => void): void

	declare export function setCandidateWindowProperties(
		parameters: CandidateWindowParameter, callback?: (success: boolean) => void
	): void

	declare export function clearComposition(
		parameters: ClearCompositionParameters, callback?: (success: boolean) => void
	): void

	declare export function setCursorPosition(
		parameters: CursorPositionParameters, callback?: (success: boolean) => void
	): void

	declare export function sendKeyEvents(parameters: SendKeyEventParameters, callback?: () => void): void

	declare export function hideInputView(): void

	declare export function deleteSurroundingText(parameters: DeleteSurroundingTextParameters, callback?: () => void): void

	declare export function keyEventHandled(requestId: string, response: boolean): void

		
}

declare module 'management' {
		declare interface ExtensionInfo {
		disabledReason?: string,
		appLaunchUrl?: string,
		description: string,
		permissions: string[],
		icons?: IconInfo[],
		hostPermissions: string[],
		enabled: boolean,
		homepageUrl?: string,
		mayDisable: boolean,
		installType: string,
		version: string,
		id: string,
		offlineEnabled: boolean,
		updateUrl?: string,
		type: string,
		optionsUrl: string,
		name: string,
		shortName: string,
		isApp: boolean,
		launchType?: string,
		availableLaunchTypes?: string[]
	}

	declare interface IconInfo {
		url: string,
		size: number
	}

	declare interface UninstallOptions {
		showConfirmDialog?: boolean
	}

	declare interface ManagementDisabledEvent {
		
	}

	declare interface ManagementUninstalledEvent {
		
	}

	declare interface ManagementInstalledEvent {
		
	}

	declare interface ManagementEnabledEvent {
		
	}

	declare export function setEnabled(id: string, enabled: boolean, callback?: () => void): void

	declare export function getPermissionWarningsById(id: string, callback?: (permissionWarnings: string[]) => void): void

	declare export function get(id: string, callback?: (result: ExtensionInfo) => void): void

	declare export function getAll(callback?: (result: ExtensionInfo[]) => void): void

	declare export function getPermissionWarningsByManifest(manifestStr: string, callback?: (permissionwarnings: string[]) => void): void

	declare export function launchApp(id: string, callback?: () => void): void

	declare export function uninstall(id: string, options?: UninstallOptions, callback?: () => void): void

	declare export function uninstall(id: string, callback?: () => void): void

	declare export function getSelf(callback?: (result: ExtensionInfo) => void): void

	declare export function uninstallSelf(options?: UninstallOptions, callback?: () => void): void

	declare export function uninstallSelf(callback?: () => void): void

	declare export function createAppShortcut(id: string, callback?: () => void): void

	declare export function setLaunchType(id: string, launchType: string, callback?: () => void): void

	declare export function generateAppForLink(url: string, title: string, callback?: (result: ExtensionInfo) => void): void

		
}

declare module 'config' {
		declare interface NetworkInfo {
		Type: string,
		GUID?: string,
		HexSSID?: string,
		SSID?: string,
		BSSID?: string,
		Security?: string
	}

	declare interface CaptivePorttalDetectedEvent {
		
	}

	declare export function setNetworkFilter(networks: NetworkInfo[], callback: () => void): void

	declare export function finishAuthentication(GUID: string, result: string, callback?: () => void): void

		
}

declare module 'notifications' {
		declare interface ButtonOptions {
		title: string,
		iconUrl?: string
	}

	declare interface ItemOptions {
		title: string,
		message: string
	}

	declare interface NotificationOptions {
		type?: string,
		iconUrl?: string,
		title?: string,
		message?: string,
		contextMessage?: string,
		priority?: number,
		eventTime?: number,
		buttons?: ButtonOptions[],
		items?: ItemOptions[],
		progress?: number,
		isClickable?: boolean,
		appIconMaskUrl?: string,
		imageUrl?: string
	}

	declare interface NotificationClosedEvent {
		
	}

	declare interface NotificationClickedEvent {
		
	}

	declare interface NotificationButtonClickedEvent {
		
	}

	declare interface NotificationPermissionLevelChangedEvent {
		
	}

	declare interface NotificationShowSettingsEvent {
		
	}

	declare export function create(
		notificationId: string, options: NotificationOptions, callback?: (notificationId: string) => void
	): void

	declare export function create(
		options: NotificationOptions, callback?: (notificationId: string) => void
	): void

	declare export function update(
		notificationId: string, options: NotificationOptions, callback?: (wasUpdated: boolean) => void
	): void

	declare export function clear(notificationId: string, callback?: (wasCleared: boolean) => void): void

	declare export function getAll(callback: (notifications: Object) => void): void

	declare export function getPermissionLevel(callback: (level: string) => void): void

		
}

declare module 'omnibox' {
		declare interface SuggestResult {
		content: string,
		description: string
	}

	declare interface Suggestion {
		description: string
	}

	declare interface OmniboxInputEnteredEvent {
		
	}

	declare interface OmniboxInputChangedEvent {
		
	}

	declare interface OmniboxInputStartedEvent {
		
	}

	declare interface OmniboxInputCancelledEvent {
		
	}

	declare export function setDefaultSuggestion(suggestion: Suggestion): void

		
}

declare module 'pageAction' {
		declare interface PageActionClickedEvent {
		
	}

	declare interface TitleDetails {
		tabId: number,
		title: string
	}

	declare interface GetDetails {
		tabId: number
	}

	declare interface PopupDetails {
		tabId: number,
		popup: string
	}

	declare interface IconDetails {
		tabId: number,
		iconIndex?: number,
		imageData?: ImageData,
		path?: any
	}

	declare export function hide(tabId: number): void

	declare export function show(tabId: number): void

	declare export function setTitle(details: TitleDetails): void

	declare export function setPopup(details: PopupDetails): void

	declare export function getTitle(details: GetDetails, callback: (result: string) => void): void

	declare export function getPopup(details: GetDetails, callback: (result: string) => void): void

	declare export function setIcon(details: IconDetails, callback?: () => void): void

		
}

declare module 'pageCapture' {
		declare interface SaveDetails {
		tabId: number
	}

	declare export function saveAsMHTML(details: SaveDetails, callback: (mhtmlData: any) => void): void

		
}

declare module 'permissions' {
		declare interface Permissions {
		origins?: string[],
		permissions?: string[]
	}

	declare interface PermissionsRemovedEvent {
		addListener(callback: (permissions: Permissions) => void): void
	}

	declare interface PermissionsAddedEvent {
		addListener(callback: (permissions: Permissions) => void): void
	}

	declare export function contains(permissions: Permissions, callback: (result: boolean) => void): void

	declare export function getAll(callback: (permissions: Permissions) => void): void

	declare export function request(permissions: Permissions, callback?: (granted: boolean) => void): void

	declare export function remove(permissions: Permissions, callback?: (removed: boolean) => void): void

		
}

declare module 'power' {
			declare export function requestKeepAwake(level: string): void

	declare export function releaseKeepAwake(): void

		
}

declare module 'printerProvider' {
		declare interface PrinterInfo {
		id: string,
		name: string,
		description?: string
	}

	declare interface PrinterCapabilities {
		capabilities: any
	}

	declare interface PrintJob {
		printerId: string,
		title: string,
		ticket: Object,
		contentType: string,
		document: Blob
	}

	declare interface PrinterRequestedEvent {
		
	}

	declare interface PrinterInfoRequestedEvent {
		
	}

	declare interface CapabilityRequestedEvent {
		
	}

	declare interface PrintRequestedEvent {
		
	}

			
}

declare module 'privacy' {
		declare interface Services {
		spellingServiceEnabled: chrome.types.ChromeSetting,
		searchSuggestEnabled: chrome.types.ChromeSetting,
		instantEnabled: chrome.types.ChromeSetting,
		alternateErrorPagesEnabled: chrome.types.ChromeSetting,
		safeBrowsingEnabled: chrome.types.ChromeSetting,
		autofillEnabled: chrome.types.ChromeSetting,
		translationServiceEnabled: chrome.types.ChromeSetting,
		passwordSavingEnabled: chrome.types.ChromeSetting,
		hotwordSearchEnabled: chrome.types.ChromeSetting,
		safeBrowsingExtendedReportingEnabled: chrome.types.ChromeSetting
	}

	declare interface Network {
		networkPredictionEnabled: chrome.types.ChromeSetting,
		webRTCMultipleRoutesEnabled: chrome.types.ChromeSetting,
		webRTCNonProxiedUdpEnabled: chrome.types.ChromeSetting
	}

	declare interface Websites {
		thirdPartyCookiesAllowed: chrome.types.ChromeSetting,
		referrersEnabled: chrome.types.ChromeSetting,
		hyperlinkAuditingEnabled: chrome.types.ChromeSetting,
		protectedContentEnabled: chrome.types.ChromeSetting
	}

			
}

declare module 'proxy' {
		declare interface PacScript {
		url?: string,
		mandatory?: boolean,
		data?: string
	}

	declare interface ProxyConfig {
		rules?: ProxyRules,
		pacScript?: PacScript,
		mode: string
	}

	declare interface ProxyServer {
		host: string,
		scheme?: string,
		port?: number
	}

	declare interface ProxyRules {
		proxyForFtp?: ProxyServer,
		proxyForHttp?: ProxyServer,
		fallbackProxy?: ProxyServer,
		singleProxy?: ProxyServer,
		proxyForHttps?: ProxyServer,
		bypassList?: string[]
	}

	declare interface ErrorDetails {
		details: string,
		error: string,
		fatal: boolean
	}

	declare interface ProxyErrorEvent {
		
	}

			
}

declare module 'runtime' {
		declare interface LastError {
		message?: string
	}

	declare interface ConnectInfo {
		name?: string
	}

	declare interface InstalledDetails {
		reason: string,
		previousVersion?: string,
		id?: string
	}

	declare interface MessageOptions {
		includeTlsChannelId?: boolean
	}

	declare interface MessageSender {
		id?: string,
		tab?: chrome.tabs.Tab,
		frameId?: number,
		url?: string,
		tlsChannelId?: string
	}

	declare interface PlatformInfo {
		os: string,
		arch: string,
		nacl_arch: string
	}

	declare interface Port {
		postMessage: (message: Object) => void,
		disconnect: () => void,
		sender?: MessageSender,
		onDisconnect: chrome.events.Event<() => void>,
		onMessage: PortMessageEvent,
		name: string
	}

	declare interface UpdateAvailableDetails {
		version: string
	}

	declare interface UpdateCheckDetails {
		version: string
	}

	declare interface PortMessageEvent {
		
	}

	declare interface ExtensionMessageEvent {
		
	}

	declare interface ExtensionConnectEvent {
		
	}

	declare interface RuntimeInstalledEvent {
		
	}

	declare interface RuntimeEvent {
		
	}

	declare interface RuntimeRestartRequiredEvent {
		
	}

	declare interface RuntimeUpdateAvailableEvent {
		
	}

	declare interface ManifestIcons {
		[size: number]: string
	}

	declare interface ManifestAction {
		default_icon?: ManifestIcons,
		default_title?: string,
		default_popup?: string
	}

	declare interface SearchProvider {
		name?: string,
		keyword?: string,
		favicon_url?: string,
		search_url: string,
		encoding?: string,
		suggest_url?: string,
		instant_url?: string,
		image_url?: string,
		search_url_post_params?: string,
		suggest_url_post_params?: string,
		instant_url_post_params?: string,
		image_url_post_params?: string,
		alternate_urls?: string[],
		prepopulated_id?: number,
		is_default?: boolean
	}

	declare interface Manifest {
		manifest_version: number,
		name: string,
		version: string,
		default_locale?: string,
		description?: string,
		icons?: ManifestIcons,
		browser_action?: ManifestAction,
		page_action?: ManifestAction,
		author?: any,
		automation?: any,
		background?: {
		scripts?: string[],
		page?: string,
		persistent?: boolean
	},
		background_page?: string,
		chrome_settings_overrides?: {
		homepage?: string,
		search_provider?: SearchProvider,
		startup_pages?: string[]
	},
		chrome_ui_overrides?: {
		bookmarks_ui?: {
		remove_bookmark_shortcut?: boolean,
		remove_button?: boolean
	}
	},
		chrome_url_overrides?: {
		bookmarks?: string,
		history?: string,
		newtab?: string
	},
		commands?: {
		[name: string]: {
		suggested_key?: {
		default?: string,
		windows?: string,
		mac?: string,
		chromeos?: string,
		linux?: string
	},
		description?: string,
		global?: boolean
	}
	},
		content_capabilities?: {
		matches?: string[],
		permissions?: string[]
	},
		content_scripts?: {
		matches?: string[],
		exclude_matches?: string[],
		css?: string[],
		js?: string[],
		run_at?: string,
		all_frames?: boolean,
		include_globs?: string[],
		exclude_globs?: string[]
	}[],
		content_security_policy?: string,
		converted_from_user_script?: boolean,
		copresence?: any,
		current_locale?: string,
		devtools_page?: string,
		event_rules?: {
		event?: string,
		actions?: {
		type: string
	}[],
		conditions?: chrome.declarativeContent.PageStateMatcher[]
	}[],
		externally_connectable?: {
		ids?: string[],
		matches?: string[],
		accepts_tls_channel_id?: boolean
	},
		file_browser_handlers?: {
		id?: string,
		default_title?: string,
		file_filters?: string[]
	}[],
		file_system_provider_capabilities?: {
		configurable?: boolean,
		watchable?: boolean,
		multiple_mounts?: boolean,
		source?: string
	},
		homepage_url?: string,
		import?: {
		id: string,
		minimum_version?: string
	}[],
		export?: {
		whitelist?: string[]
	},
		incognito?: string,
		input_components?: {
		name?: string,
		type?: string,
		id?: string,
		description?: string,
		language?: string,
		layouts?: any[]
	}[],
		key?: string,
		minimum_chrome_version?: string,
		nacl_modules?: {
		path: string,
		mime_type: string
	}[],
		oauth2?: {
		client_id: string,
		scopes?: string[]
	},
		offline_enabled?: boolean,
		omnibox?: {
		keyword: string
	},
		optional_permissions?: string[],
		options_page?: string,
		options_ui?: {
		page?: string,
		chrome_style?: boolean,
		open_in_tab?: boolean
	},
		permissions?: string[],
		platforms?: {
		nacl_arch?: string,
		sub_package_path: string
	}[],
		plugins?: {
		path: string
	}[],
		requirements?: {
		3D?: {
		features?: string[]
	},
		plugins?: {
		npapi?: boolean
	}
	},
		sandbox?: {
		pages: string[],
		content_security_policy?: string
	},
		short_name?: string,
		signature?: any,
		spellcheck?: {
		dictionary_language?: string,
		dictionary_locale?: string,
		dictionary_format?: string,
		dictionary_path?: string
	},
		storage?: {
		managed_schema: string
	},
		system_indicator?: any,
		tts_engine?: {
		voices: {
		voice_name: string,
		lang?: string,
		gender?: string,
		event_types?: string[]
	}[]
	},
		update_url?: string,
		version_name?: string,
		web_accessible_resources?: string[],
		[key: string]: any
	}

	declare export function connect(connectInfo?: ConnectInfo): Port

	declare export function connect(extensionId: string, connectInfo?: ConnectInfo): Port

	declare export function connectNative(application: string): Port

	declare export function getBackgroundPage(callback: (backgroundPage?: Window) => void): void

	declare export function getManifest(): Manifest

	declare export function getPackageDirectoryEntry(callback: (directoryEntry: DirectoryEntry) => void): void

	declare export function getPlatformInfo(callback: (platformInfo: PlatformInfo) => void): void

	declare export function getURL(path: string): string

	declare export function reload(): void

	declare export function requestUpdateCheck(callback: (status: string, details?: UpdateCheckDetails) => void): void

	declare export function restart(): void

	declare export function sendMessage(message: any, responseCallback?: (response: any) => void): void

	declare export function sendMessage(
		message: any, options: MessageOptions, responseCallback?: (response: any) => void
	): void

	declare export function sendMessage(
		extensionId: string, message: any, responseCallback?: (response: any) => void
	): void

	declare export function sendMessage(
		extensionId: string, message: any, options: MessageOptions, responseCallback?: (response: any) => void
	): void

	declare export function sendNativeMessage(
		application: string, message: Object, responseCallback?: (response: any) => void
	): void

	declare export function setUninstallURL(url: string, callback?: () => void): void

	declare export function openOptionsPage(callback?: () => void): void

		
}

declare module 'scriptBadge' {
		declare interface GetPopupDetails {
		tabId: number
	}

	declare interface AttentionDetails {
		tabId: number
	}

	declare interface SetPopupDetails {
		tabId: number,
		popup: string
	}

	declare interface ScriptBadgeClickedEvent {
		
	}

	declare export function getPopup(details: GetPopupDetails, callback: Function): void

	declare export function getAttention(details: AttentionDetails): void

	declare export function setPopup(details: SetPopupDetails): void

		
}

declare module 'sessions' {
		declare interface Filter {
		maxResults?: number
	}

	declare interface Session {
		lastModified: number,
		tab?: tabs.Tab,
		window?: windows.Window
	}

	declare interface Device {
		deviceName: string,
		sessions: Session[]
	}

	declare interface SessionChangedEvent {
		
	}

	declare export function getRecentlyClosed(filter: Filter, callback: (sessions: Session[]) => void): void

	declare export function getRecentlyClosed(callback: (sessions: Session[]) => void): void

	declare export function getDevices(filter: Filter, callback: (devices: Device[]) => void): void

	declare export function getDevices(callback: (devices: Device[]) => void): void

	declare export function restore(sessionId?: string, callback?: (restoredSession: Session) => void): void

		
}

declare module 'storage' {
		declare interface StorageArea {
		getBytesInUse(callback: (bytesInUse: number) => void): void,
		getBytesInUse(key: string, callback: (bytesInUse: number) => void): void,
		getBytesInUse(keys: string[], callback: (bytesInUse: number) => void): void,
		clear(callback?: () => void): void,
		set(items: Object, callback?: () => void): void,
		remove(key: string, callback?: () => void): void,
		remove(keys: string[], callback?: () => void): void,
		get(callback: (items: {
		[key: string]: any
	}) => void): void,
		get(key: string, callback: (items: {
		[key: string]: any
	}) => void): void,
		get(keys: string[], callback: (items: {
		[key: string]: any
	}) => void): void,
		get(keys: Object, callback: (items: {
		[key: string]: any
	}) => void): void
	}

	declare interface StorageChange {
		newValue?: any,
		oldValue?: any
	}

	declare interface LocalStorageArea {
		QUOTA_BYTES: number
	}

	declare interface SyncStorageArea {
		MAX_SUSTAINED_WRITE_OPERATIONS_PER_MINUTE: number,
		QUOTA_BYTES: number,
		QUOTA_BYTES_PER_ITEM: number,
		MAX_ITEMS: number,
		MAX_WRITE_OPERATIONS_PER_HOUR: number,
		MAX_WRITE_OPERATIONS_PER_MINUTE: number
	}

	declare interface StorageChangedEvent {
		
	}

	declare interface StorageUnitInfo {
		id: string,
		name: string,
		type: string,
		capacity: number
	}

	declare interface StorageCapacityInfo {
		id: string,
		availableCapacity: number
	}

	declare interface SystemStorageAttachedEvent {
		
	}

	declare interface SystemStorageDetachedEvent {
		
	}

	declare export function getInfo(callback: (info: StorageUnitInfo[]) => void): void

	declare export function ejectDevice(id: string, callback: (result: string) => void): void

	declare export function getAvailableCapacity(id: string, callback: (info: StorageCapacityInfo) => void): void

		
}

declare module 'socket' {
		declare interface CreateInfo {
		socketId: number
	}

	declare interface AcceptInfo {
		resultCode: number,
		socketId?: number
	}

	declare interface ReadInfo {
		resultCode: number,
		data: ArrayBuffer
	}

	declare interface WriteInfo {
		bytesWritten: number
	}

	declare interface RecvFromInfo {
		resultCode: number,
		data: ArrayBuffer,
		port: number,
		address: string
	}

	declare interface SocketInfo {
		socketType: string,
		localPort?: number,
		peerAddress?: string,
		peerPort?: number,
		localAddress?: string,
		connected: boolean
	}

	declare interface NetworkInterface {
		name: string,
		address: string
	}

	declare export function create(
		type: string, options?: Object, callback?: (createInfo: CreateInfo) => void
	): void

	declare export function destroy(socketId: number): void

	declare export function connect(
		socketId: number, hostname: string, port: number, callback: (result: number) => void
	): void

	declare export function bind(
		socketId: number, address: string, port: number, callback: (result: number) => void
	): void

	declare export function disconnect(socketId: number): void

	declare export function read(
		socketId: number, bufferSize?: number, callback?: (readInfo: ReadInfo) => void
	): void

	declare export function write(
		socketId: number, data: ArrayBuffer, callback?: (writeInfo: WriteInfo) => void
	): void

	declare export function recvFrom(
		socketId: number, bufferSize?: number, callback?: (recvFromInfo: RecvFromInfo) => void
	): void

	declare export function sendTo(
		socketId: number, data: ArrayBuffer, address: string, port: number, callback?: (writeInfo: WriteInfo) => void
	): void

	declare export function listen(
		socketId: number, address: string, port: number, backlog?: number, callback?: (result: number) => void
	): void

	declare export function accept(socketId: number, callback?: (acceptInfo: AcceptInfo) => void): void

	declare export function setKeepAlive(
		socketId: number, enable: boolean, delay?: number, callback?: (result: boolean) => void
	): void

	declare export function setNoDelay(socketId: number, noDelay: boolean, callback?: (result: boolean) => void): void

	declare export function getInfo(socketId: number, callback: (result: SocketInfo) => void): void

	declare export function getNetworkList(callback: (result: NetworkInterface[]) => void): void

		
}

declare module 'cpu' {
		declare interface ProcessorUsage {
		user: number,
		kernel: number,
		idle: number,
		total: number
	}

	declare interface ProcessorInfo {
		usage: ProcessorUsage
	}

	declare interface CpuInfo {
		numOfProcessors: number,
		archName: string,
		modelName: string,
		features: string[],
		processors: ProcessorInfo[]
	}

	declare export function getInfo(callback: (info: CpuInfo) => void): void

		
}

declare module 'memory' {
		declare interface MemoryInfo {
		capacity: number,
		availableCapacity: number
	}

	declare export function getInfo(callback: (info: MemoryInfo) => void): void

		
}

declare module 'tabCapture' {
		declare interface CaptureInfo {
		tabId: number,
		status: string,
		fullscreen: boolean
	}

	declare interface CaptureOptions {
		audio?: boolean,
		video?: boolean,
		audioConstraints?: MediaStreamConstraints,
		videoConstraints?: MediaStreamConstraints
	}

	declare interface CaptureStatusChangedEvent {
		
	}

	declare export function capture(options: CaptureOptions, callback: (stream: MediaStream) => void): void

	declare export function getCapturedTabs(callback: (result: CaptureInfo[]) => void): void

		
}

declare module 'tabs' {
		declare interface MutedInfo {
		muted: boolean,
		reason?: string,
		extensionId?: string
	}

	declare interface Tab {
		status?: string,
		index: number,
		openerTabId?: number,
		title?: string,
		url?: string,
		pinned: boolean,
		highlighted: boolean,
		windowId: number,
		active: boolean,
		favIconUrl?: string,
		id?: number,
		incognito: boolean,
		selected: boolean,
		audible?: boolean,
		mutedInfo?: MutedInfo,
		width?: number,
		height?: number,
		sessionId?: string
	}

	declare interface ZoomSettings {
		mode?: string,
		scope?: string,
		defaultZoomFactor?: number
	}

	declare interface InjectDetails {
		allFrames?: boolean,
		code?: string,
		runAt?: string,
		file?: string,
		matchAboutBlank?: boolean
	}

	declare interface CreateProperties {
		index?: number,
		openerTabId?: number,
		url?: string,
		pinned?: boolean,
		windowId?: number,
		active?: boolean,
		selected?: boolean
	}

	declare interface MoveProperties {
		index: number,
		windowId?: number
	}

	declare interface UpdateProperties {
		pinned?: boolean,
		openerTabId?: number,
		url?: string,
		highlighted?: boolean,
		active?: boolean,
		selected?: boolean,
		muted?: boolean
	}

	declare interface CaptureVisibleTabOptions {
		quality?: number,
		format?: string
	}

	declare interface ReloadProperties {
		bypassCache?: boolean
	}

	declare interface ConnectInfo {
		name?: string,
		frameId?: number
	}

	declare interface MessageSendOptions {
		frameId?: number
	}

	declare interface HighlightInfo {
		tabs: number | number[],
		windowId?: number
	}

	declare interface QueryInfo {
		status?: string,
		lastFocusedWindow?: boolean,
		windowId?: number,
		windowType?: string,
		active?: boolean,
		index?: number,
		title?: string,
		url?: string | string[],
		currentWindow?: boolean,
		highlighted?: boolean,
		pinned?: boolean,
		audible?: boolean,
		muted?: boolean
	}

	declare interface TabHighlightInfo {
		windowId: number,
		tabIds: number[]
	}

	declare interface TabRemoveInfo {
		windowId: number,
		isWindowClosing: boolean
	}

	declare interface TabAttachInfo {
		newPosition: number,
		newWindowId: number
	}

	declare interface TabChangeInfo {
		status?: string,
		pinned?: boolean,
		url?: string,
		audible?: boolean,
		mutedInfo?: MutedInfo,
		favIconUrl?: string,
		title?: string
	}

	declare interface TabMoveInfo {
		toIndex: number,
		windowId: number,
		fromIndex: number
	}

	declare interface TabDetachInfo {
		oldWindowId: number,
		oldPosition: number
	}

	declare interface TabActiveInfo {
		tabId: number,
		windowId: number
	}

	declare interface TabWindowInfo {
		windowId: number
	}

	declare interface ZoomChangeInfo {
		tabId: number,
		oldZoomFactor: number,
		newZoomFactor: number,
		zoomSettings: ZoomSettings
	}

	declare interface TabHighlightedEvent {
		
	}

	declare interface TabRemovedEvent {
		
	}

	declare interface TabUpdatedEvent {
		
	}

	declare interface TabAttachedEvent {
		
	}

	declare interface TabMovedEvent {
		
	}

	declare interface TabDetachedEvent {
		
	}

	declare interface TabCreatedEvent {
		
	}

	declare interface TabActivatedEvent {
		
	}

	declare interface TabReplacedEvent {
		
	}

	declare interface TabSelectedEvent {
		
	}

	declare interface TabZoomChangeEvent {
		
	}

	declare export function executeScript(details: InjectDetails, callback?: (result: any[]) => void): void

	declare export function executeScript(
		tabId: number, details: InjectDetails, callback?: (result: any[]) => void
	): void

	declare export function get(tabId: number, callback: (tab: Tab) => void): void

	declare export function getAllInWindow(callback: (tab: Tab) => void): void

	declare export function getAllInWindow(windowId: number, callback: (tab: Tab) => void): void

	declare export function getCurrent(callback: (tab?: Tab) => void): void

	declare export function getSelected(callback: (tab: Tab) => void): void

	declare export function getSelected(windowId: number, callback: (tab: Tab) => void): void

	declare export function create(createProperties: CreateProperties, callback?: (tab: Tab) => void): void

	declare export function move(
		tabId: number, moveProperties: MoveProperties, callback?: (tab: Tab) => void
	): void

	declare export function move(
		tabIds: number[], moveProperties: MoveProperties, callback?: (tabs: Tab[]) => void
	): void

	declare export function update(updateProperties: UpdateProperties, callback?: (tab?: Tab) => void): void

	declare export function update(
		tabId: number, updateProperties: UpdateProperties, callback?: (tab?: Tab) => void
	): void

	declare export function remove(tabId: number, callback?: Function): void

	declare export function remove(tabIds: number[], callback?: Function): void

	declare export function captureVisibleTab(callback: (dataUrl: string) => void): void

	declare export function captureVisibleTab(windowId: number, callback: (dataUrl: string) => void): void

	declare export function captureVisibleTab(options: CaptureVisibleTabOptions, callback: (dataUrl: string) => void): void

	declare export function captureVisibleTab(
		windowId: number, options: CaptureVisibleTabOptions, callback: (dataUrl: string) => void
	): void

	declare export function reload(
		tabId: number, reloadProperties?: ReloadProperties, callback?: () => void
	): void

	declare export function reload(reloadProperties: ReloadProperties, callback?: () => void): void

	declare export function reload(callback?: () => void): void

	declare export function duplicate(tabId: number, callback?: (tab?: Tab) => void): void

	declare export function sendMessage(tabId: number, message: any, responseCallback?: (response: any) => void): void

	declare export function sendMessage(
		tabId: number, message: any, options: MessageSendOptions, responseCallback?: (response: any) => void
	): void

	declare export function sendRequest(tabId: number, request: any, responseCallback?: (response: any) => void): void

	declare export function connect(tabId: number, connectInfo?: ConnectInfo): runtime.Port

	declare export function insertCSS(details: InjectDetails, callback?: Function): void

	declare export function insertCSS(tabId: number, details: InjectDetails, callback?: Function): void

	declare export function highlight(
		highlightInfo: HighlightInfo, callback: (window: chrome.windows.Window) => void
	): void

	declare export function query(queryInfo: QueryInfo, callback: (result: Tab[]) => void): void

	declare export function detectLanguage(callback: (language: string) => void): void

	declare export function detectLanguage(tabId: number, callback: (language: string) => void): void

	declare export function setZoom(zoomFactor: number, callback?: () => void): void

	declare export function setZoom(tabId: number, zoomFactor: number, callback?: () => void): void

	declare export function getZoom(callback: (zoomFactor: number) => void): void

	declare export function getZoom(tabId: number, callback: (zoomFactor: number) => void): void

	declare export function setZoomSettings(zoomSettings: ZoomSettings, callback?: () => void): void

	declare export function setZoomSettings(tabId: number, zoomSettings: ZoomSettings, callback?: () => void): void

	declare export function getZoomSettings(callback: (zoomSettings: ZoomSettings) => void): void

	declare export function getZoomSettings(tabId: number, callback: (zoomSettings: ZoomSettings) => void): void

		
}

declare module 'topSites' {
		declare interface MostVisitedURL {
		url: string,
		title: string
	}

	declare export function get(callback: (data: MostVisitedURL[]) => void): void

		
}

declare module 'tts' {
		declare interface TtsEvent {
		charIndex?: number,
		errorMessage?: string,
		type: string
	}

	declare interface TtsVoice {
		lang?: string,
		gender?: string,
		voiceName?: string,
		extensionsId?: string,
		eventTypes?: string[],
		remote?: boolean
	}

	declare interface SpeakOptions {
		volume?: number,
		enqueue?: boolean,
		rate?: number,
		onEvent?: (event: TtsEvent) => void,
		pitch?: number,
		lang?: string,
		voiceName?: string,
		extensionId?: string,
		gender?: string,
		requiredEventTypes?: string[],
		desiredEventTypes?: string[]
	}

	declare export function isSpeaking(callback?: (speaking: boolean) => void): void

	declare export function stop(): void

	declare export function getVoices(callback?: (voices: TtsVoice[]) => void): void

	declare export function speak(utterance: string, callback?: Function): void

	declare export function speak(utterance: string, options: SpeakOptions, callback?: Function): void

	declare export function pause(): void

	declare export function resume(): void

		
}

declare module 'ttsEngine' {
		declare interface SpeakOptions {
		lang?: string,
		voiceName?: string,
		gender?: string,
		volume?: number,
		rate?: number,
		pitch?: number
	}

	declare interface TtsEngineSpeakEvent {
		
	}

			
}

declare module 'types' {
	declare type DetailsCallback = (details: ChromeSettingGetResultDetails) => void;

	declare interface ChromeSettingClearDetails {
		scope?: string
	}

	declare interface ChromeSettingSetDetails {
		value: any,
		scope?: string
	}

	declare interface ChromeSettingGetDetails {
		incognito?: boolean
	}

	declare interface ChromeSettingGetResultDetails {
		levelOfControl: string,
		value: any,
		incognitoSpecific?: boolean
	}

	declare interface ChromeSettingChangedEvent {
		
	}

	declare interface ChromeSetting {
		set(details: ChromeSettingSetDetails, callback?: Function): void,
		get(details: ChromeSettingGetDetails, callback?: DetailsCallback): void,
		clear(details: ChromeSettingClearDetails, callback?: Function): void,
		onChange: ChromeSettingChangedEvent
	}

			
}

declare module 'vpnProvider' {
		declare interface VpnSessionParameters {
		address: string,
		broadcastAddress?: string,
		mtu?: string,
		exclusionList: string[],
		inclusionList: string[],
		domainSearch?: string[],
		dnsServer: string[]
	}

	declare interface VpnPlatformMessageEvent {
		
	}

	declare interface VpnPacketReceptionEvent {
		
	}

	declare interface VpnConfigRemovalEvent {
		
	}

	declare interface VpnConfigCreationEvent {
		
	}

	declare interface VpnUiEvent {
		
	}

	declare export function createConfig(name: string, callback: (id: string) => void): void

	declare export function destroyConfig(id: string, callback?: Function): void

	declare export function setParameters(parameters: VpnSessionParameters, callback: Function): void

	declare export function sendPacket(data: ArrayBuffer, callback?: Function): void

	declare export function notifyConnectionStateChanged(state: string, callback?: Function): void

		
}

declare module 'wallpaper' {
		declare interface WallpaperDetails {
		data?: any,
		url?: string,
		layout: string,
		filename: string,
		thumbnail?: boolean
	}

	declare export function setWallpaper(details: WallpaperDetails, callback: (thumbnail: any) => void): void

		
}

declare module 'webNavigation' {
		declare interface GetFrameDetails {
		processId: number,
		tabId: number,
		frameId: number
	}

	declare interface GetFrameResultDetails {
		url: string,
		errorOccurred: boolean,
		parentFrameId: number
	}

	declare interface GetAllFrameDetails {
		tabId: number
	}

	declare interface GetAllFrameResultDetails {
		processId: number,
		frameId: number
	}

	declare interface WebNavigationCallbackDetails {
		tabId: number,
		timeStamp: number
	}

	declare interface WebNavigationUrlCallbackDetails {
		url: string
	}

	declare interface WebNavigationReplacementCallbackDetails {
		replacedTabId: number
	}

	declare interface WebNavigationFramedCallbackDetails {
		frameId: number,
		processId: number
	}

	declare interface WebNavigationFramedErrorCallbackDetails {
		error: string
	}

	declare interface WebNavigationSourceCallbackDetails {
		sourceTabId: number,
		sourceProcessId: number,
		sourceFrameId: number
	}

	declare interface WebNavigationParentedCallbackDetails {
		parentFrameId: number
	}

	declare interface WebNavigationTransitionCallbackDetails {
		transitionType: string,
		transitionQualifiers: string[]
	}

	declare interface WebNavigationEventFilter {
		url: chrome.events.UrlFilter[]
	}

	declare interface WebNavigationEvent<T> {
		addListener(callback: (details: T) => void, filters?: WebNavigationEventFilter): void
	}

	declare interface WebNavigationFramedEvent {
		
	}

	declare interface WebNavigationFramedErrorEvent {
		
	}

	declare interface WebNavigationSourceEvent {
		
	}

	declare interface WebNavigationParentedEvent {
		
	}

	declare interface WebNavigationTransitionalEvent {
		
	}

	declare interface WebNavigationReplacementEvent {
		
	}

	declare export function getFrame(
		details: GetFrameDetails, callback: (details?: GetFrameResultDetails) => void
	): void

	declare export function getAllFrames(
		details: GetAllFrameDetails, callback: (details?: GetAllFrameResultDetails[]) => void
	): void

		
}

declare module 'webRequest' {
		declare interface AuthCredentials {
		username: string,
		password: string
	}

	declare interface HttpHeader {
		name: string,
		value?: string,
		binaryValue?: ArrayBuffer
	}

	declare interface BlockingResponse {
		cancel?: boolean,
		redirectUrl?: string,
		responseHeaders?: HttpHeader[],
		authCredentials?: AuthCredentials,
		requestHeaders?: HttpHeader[]
	}

	declare interface RequestFilter {
		tabId?: number,
		types?: string[],
		urls: string[],
		windowId?: number
	}

	declare interface UploadData {
		bytes?: ArrayBuffer,
		file?: string
	}

	declare interface WebRequestBody {
		error?: string,
		formData?: {
		[key: string]: string[]
	},
		raw?: UploadData[]
	}

	declare interface WebAuthChallenger {
		host: string,
		port: number
	}

	declare interface ResourceRequest {
		url: string,
		requestId: string,
		frameId: number,
		parentFrameId: number,
		tabId: number,
		type: string,
		timeStamp: number
	}

	declare interface WebRequestDetails {
		method: string
	}

	declare interface WebRequestHeadersDetails {
		requestHeaders?: HttpHeader[]
	}

	declare interface WebRequestBodyDetails {
		requestBody: WebRequestBody
	}

	declare interface WebRequestFullDetails {
		
	}

	declare interface WebResponseDetails {
		statusLine: string,
		statusCode: number
	}

	declare interface WebResponseHeadersDetails {
		responseHeaders?: HttpHeader[]
	}

	declare interface WebResponseCacheDetails {
		ip?: string,
		fromCache: boolean
	}

	declare interface WebRedirectionResponseDetails {
		redirectUrl: string
	}

	declare interface WebAuthenticationChallengeDetails {
		scheme: string,
		realm?: string,
		challenger: WebAuthChallenger,
		isProxy: boolean
	}

	declare interface WebResponseErrorDetails {
		error: string
	}

	declare interface WebRequestBodyEvent {
		addListener(
		callback: (details: WebRequestBodyDetails) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]
	): void
	}

	declare interface WebRequestHeadersEvent {
		addListener(
		callback: (details: WebRequestHeadersDetails) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]
	): void
	}

	declare interface _WebResponseHeadersEvent<T> {
		addListener(
		callback: (details: T) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]
	): void
	}

	declare interface WebResponseHeadersEvent {
		
	}

	declare interface WebResponseCacheEvent {
		
	}

	declare interface WebRedirectionResponseEvent {
		
	}

	declare interface WebAuthenticationChallengeEvent {
		addListener(
		callback: (details: WebAuthenticationChallengeDetails) => void, filter?: RequestFilter, opt_extraInfoSpec?: string[]
	): void
	}

	declare interface WebResponseErrorEvent {
		
	}

	declare export function handlerBehaviorChanged(callback?: Function): void

		
}

declare module 'webstore' {
		declare interface InstallationStageEvent {
		
	}

	declare interface DownloadProgressEvent {
		
	}

	declare export function install(
		url: string, successCallback?: Function, failureCallback?: (error: string, errorCode?: string) => void
	): void

	declare export function install(
		successCallback: Function, failureCallback?: (error: string, errorCode?: string) => void
	): void

	declare export function install(failureCallback?: (error: string, errorCode?: string) => void): void

		
}

declare module 'windows' {
		declare interface Window {
		tabs?: chrome.tabs.Tab[],
		top?: number,
		height?: number,
		width?: number,
		state: string,
		focused: boolean,
		alwaysOnTop: boolean,
		incognito: boolean,
		type: string,
		id: number,
		left?: number,
		sessionId?: string
	}

	declare interface GetInfo {
		populate?: boolean,
		windowTypes?: string[]
	}

	declare interface CreateData {
		tabId?: number,
		url?: string | string[],
		top?: number,
		height?: number,
		width?: number,
		focused?: boolean,
		incognito?: boolean,
		type?: string,
		left?: number,
		state?: string
	}

	declare interface UpdateInfo {
		top?: number,
		drawAttention?: boolean,
		height?: number,
		width?: number,
		state?: string,
		focused?: boolean,
		left?: number
	}

	declare interface WindowEventFilter {
		windowTypes: string[]
	}

	declare interface WindowIdEvent {
		
	}

	declare interface WindowReferenceEvent {
		
	}

	declare export function get(windowId: number, callback: (window: chrome.windows.Window) => void): void

	declare export function get(
		windowId: number, getInfo: GetInfo, callback: (window: chrome.windows.Window) => void
	): void

	declare export function getCurrent(callback: (window: chrome.windows.Window) => void): void

	declare export function getCurrent(getInfo: GetInfo, callback: (window: chrome.windows.Window) => void): void

	declare export function create(callback?: (window?: chrome.windows.Window) => void): void

	declare export function create(
		createData: CreateData, callback?: (window?: chrome.windows.Window) => void
	): void

	declare export function getAll(callback: (windows: chrome.windows.Window[]) => void): void

	declare export function getAll(getInfo: GetInfo, callback: (windows: chrome.windows.Window[]) => void): void

	declare export function update(
		windowId: number, updateInfo: UpdateInfo, callback?: (window: chrome.windows.Window) => void
	): void

	declare export function remove(windowId: number, callback?: Function): void

	declare export function getLastFocused(callback: (window: chrome.windows.Window) => void): void

	declare export function getLastFocused(getInfo: GetInfo, callback: (window: chrome.windows.Window) => void): void

		
}