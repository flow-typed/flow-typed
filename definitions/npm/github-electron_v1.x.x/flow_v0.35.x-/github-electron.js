import type { ElectronMainAndRenderer } from 'npm$namespace$Electron'

declare module 'github-electron' {
		declare interface Document {
		createElement(tagName: "webview"): Electron.WebViewElement
	}

	declare interface Window {
		open(
		url: string, frameName?: string, features?: string
	): Electron.BrowserWindowProxy
	}

	declare interface File {
		path: string
	}

	declare interface NodeRequireFunction {
		(moduleName: "electron"): Electron.ElectronMainAndRenderer
	}

			
}

declare module 'npm$namespace$Electron' {
	declare type Point = {
		x: number,
		y: number
	};

	declare type Size = {
		width: number,
		height: number
	};

	declare type Rectangle = {
		x: number,
		y: number,
		width: number,
		height: number
	};

	declare type AppPathName = "home" | "appData" | "userData" | "temp" | "exe" | "module" | "desktop" | "documents" | "downloads" | "music" | "pictures" | "videos" | "pepperFlashSystemPlugin";

	declare type SetJumpListResult = "ok" | "error" | "invalidSeparatorError" | "fileTypeRegistrationError" | "customCategoryAccessDeniedError";

	declare type WindowLevel = "normal" | "floating" | "torn-off-menu" | "modal-panel" | "main-menu" | "status" | "pop-up-menu" | "screen-saver" | "dock";

	declare type SwipeDirection = "up" | "right" | "down" | "left";

	declare type ThumbarButtonFlags = "enabled" | "disabled" | "dismissonclick" | "nobackground" | "hidden" | "noninteractive";

	declare type BrowserWindowType = BrowserWindowTypeLinux | BrowserWindowTypeMac | BrowserWindowTypeWindows;

	declare type BrowserWindowTypeLinux = "desktop" | "dock" | "toolbar" | "splash" | "notification";

	declare type BrowserWindowTypeMac = "desktop" | "textured";

	declare type BrowserWindowTypeWindows = "toolbar";

	declare type ClipboardType = "" | "selection";

	declare type IpcMainEventListener = (event: IpcMainEvent, ...args: any[]) => void;

	declare type IpcRendererEventListener = (event: IpcRendererEvent, ...args: any[]) => void;

	declare type MenuItemType = "normal" | "separator" | "submenu" | "checkbox" | "radio";

	declare type MenuItemRole = "undo" | "redo" | "cut" | "copy" | "paste" | "pasteandmatchstyle" | "selectall" | "delete" | "minimize" | "close" | "quit" | "togglefullscreen" | "resetzoom" | "zoomin" | "zoomout";

	declare type MenuItemRoleMac = "about" | "hide" | "hideothers" | "unhide" | "startspeaking" | "stopspeaking" | "front" | "zoom" | "window" | "help" | "services";

	declare type FileProtocolHandler = (request: ProtocolRequest, callback: FileProtocolCallback) => void;

	declare type BufferProtocolHandler = (request: ProtocolRequest, callback: BufferProtocolCallback) => void;

	declare type StringProtocolHandler = (request: ProtocolRequest, callback: StringProtocolCallback) => void;

	declare type HttpProtocolHandler = (request: ProtocolRequest, callback: HttpProtocolCallback) => void;

	declare type DisplayMetrics = "bounds" | "workArea" | "scaleFactor" | "rotation";

	declare type Permission = "media" | "geolocation" | "notifications" | "midiSysex" | "pointerLock" | "fullscreen" | "openExternal";

	declare type CookieChangedCause = "explicit" | "overwrite" | "expired" | "evicted" | "expired-overwrite";

	declare type SystemColor = "3d-dark-shadow" | "3d-face" | "3d-highlight" | "3d-light" | "3d-shadow" | "active-border" | "active-caption" | "active-caption-gradient" | "app-workspace" | "button-text" | "caption-text" | "desktop" | "disabled-text" | "highlight" | "highlight-text" | "hotlight" | "inactive-border" | "inactive-caption" | "inactive-caption-gradient" | "inactive-caption-text" | "info-background" | "info-text" | "menu" | "menu-highlight" | "menubar" | "menu-text" | "scrollbar" | "window" | "window-frame" | "window-text";

	declare type NewWindowDisposition = "default" | "foreground-tab" | "background-tab" | "new-window" | "save-to-disk" | "other";

	declare type StopFindInPageAtion = "clearSelection" | "keepSelection" | "activateSelection";

	declare type CursorType = "default" | "crosshair" | "pointer" | "text" | "wait" | "help" | "e-resize" | "n-resize" | "ne-resize" | "nw-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize" | "ns-resize" | "ew-resize" | "nesw-resize" | "nwse-resize" | "col-resize" | "row-resize" | "m-panning" | "e-panning" | "n-panning" | "ne-panning" | "nw-panning" | "s-panning" | "se-panning" | "sw-panning" | "w-panning" | "move" | "vertical-text" | "cell" | "context-menu" | "alias" | "progress" | "nodrop" | "copy" | "none" | "not-allowed" | "zoom-in" | "zoom-out" | "grab" | "grabbing" | "custom";

	declare interface Event {
		preventDefault: Function,
		sender: NodeJS.EventEmitter
	}

	declare interface Destroyable {
		destroy(): void,
		isDestroyed(): boolean
	}

	declare interface App {
		on(event: "will-finish-launching", listener: Function): this,
		on(event: "ready", listener: (event: Event, launchInfo: Object) => void): this,
		on(event: "window-all-closed", listener: Function): this,
		on(event: "before-quit", listener: (event: Event) => void): this,
		on(event: "will-quit", listener: (event: Event) => void): this,
		on(event: "quit", listener: (event: Event, exitCode: number) => void): this,
		on(event: "open-file", listener: (event: Event, url: string) => void): this,
		on(event: "open-url", listener: (event: Event, url: string) => void): this,
		on(event: "activate", listener: Function): this,
		on(
		event: "continue-activity", listener: (event: Event, type: string, userInfo: Object) => void
	): this,
		on(
		event: "browser-window-blur", listener: (event: Event, browserWindow: BrowserWindow) => void
	): this,
		on(
		event: "browser-window-focus", listener: (event: Event, browserWindow: BrowserWindow) => void
	): this,
		on(
		event: "browser-window-created", listener: (event: Event, browserWindow: BrowserWindow) => void
	): this,
		on(
		event: "web-contents-created", listener: (event: Event, webContents: WebContents) => void
	): this,
		on(
		event: "certificate-error", listener: (
		event: Event, webContents: WebContents, url: string, error: string, certificate: Certificate, callback: (trust: boolean) => void
	) => void
	): this,
		on(
		event: "select-client-certificate", listener: (
		event: Event, webContents: WebContents, url: string, certificateList: Certificate[], callback: (certificate: Certificate) => void
	) => void
	): this,
		on(
		event: "login", listener: (
		event: Event, webContents: WebContents, request: LoginRequest, authInfo: LoginAuthInfo, callback: (username: string, password: string) => void
	) => void
	): this,
		on(
		event: "gpu-process-crashed", listener: (event: Event, killed: boolean) => void
	): this,
		on(
		event: "accessibility-support-changed", listener: (event: Event, accessibilitySupportEnabled: boolean) => void
	): this,
		on(event: string, listener: Function): this,
		quit(): void,
		exit(exitCode?: number): void,
		relaunch(options?: {
		args?: string[],
		execPath?: string
	}): void,
		isReady(): boolean,
		focus(): void,
		hide(): void,
		show(): void,
		getAppPath(): string,
		getPath(name: AppPathName): string,
		setPath(name: AppPathName, path: string): void,
		getVersion(): string,
		getName(): string,
		setName(name: string): void,
		getLocale(): string,
		addRecentDocument(path: string): void,
		clearRecentDocuments(): void,
		setAsDefaultProtocolClient(protocol: string, path?: string, args?: string[]): boolean,
		removeAsDefaultProtocolClient(protocol: string, path?: string, args?: string[]): boolean,
		isDefaultProtocolClient(protocol: string, path?: string, args?: string[]): boolean,
		setUserTasks(tasks: Task[]): boolean,
		getJumpListSettings(): JumpListSettings,
		setJumpList(categories: JumpListCategory[]): SetJumpListResult,
		makeSingleInstance(callback: (args: string[], workingDirectory: string) => void): boolean,
		releaseSingleInstance(): void,
		setUserActivity(type: string, userInfo: Object, webpageURL?: string): void,
		getCurrentActivityType(): string,
		setAppUserModelId(id: string): void,
		importCertificate(options: ImportCertificateOptions, callback: (result: number) => void): void,
		disableHardwareAcceleration(): void,
		isUnityRunning(): boolean,
		isAccessibilitySupportEnabled(): boolean,
		getLoginItemSettings(): LoginItemSettings,
		setLoginItemSettings(settings: LoginItemSettings): void,
		setAboutPanelOptions(options: AboutPanelOptions): void,
		commandLine: CommandLine,
		dock: Dock
	}

	declare interface ImportCertificateOptions {
		certificate: string,
		password: string
	}

	declare interface CommandLine {
		appendSwitch(_switch: string, value?: string): void,
		appendArgument(value: string): void
	}

	declare interface Dock {
		bounce(type?: "critical" | "informational"): number,
		cancelBounce(id: number): void,
		downloadFinished(filePath: string): void,
		setBadge(text: string): void,
		getBadge(): string,
		setBadgeCount(count: number): boolean,
		getBadgeCount(): number,
		hide(): void,
		show(): void,
		isVisible(): boolean,
		setMenu(menu: Menu): void,
		setIcon(icon: NativeImage | string): void
	}

	declare interface Task {
		program: string,
		arguments: string,
		title: string,
		description?: string,
		iconPath: string,
		iconIndex?: number
	}

	declare interface JumpListSettings {
		minItems: number,
		removedItems: JumpListItem[]
	}

	declare interface JumpListCategory {
		type?: "tasks" | "frequent" | "recent" | "custom",
		name?: string,
		items?: JumpListItem[]
	}

	declare interface JumpListItem {
		type: "task" | "separator" | "file",
		path?: string,
		program?: string,
		args?: string,
		title?: string,
		description?: string,
		iconPath?: string,
		iconIndex?: number
	}

	declare interface LoginItemSettings {
		openAtLogin: boolean,
		openAsHidden: boolean,
		wasOpenedAtLogin?: boolean,
		wasOpenedAsHidden?: boolean,
		restoreState?: boolean
	}

	declare interface AboutPanelOptions {
		applicationName?: string,
		applicationVersion?: string,
		copyright?: string,
		credits?: string,
		version?: string
	}

	declare interface AutoUpdater {
		on(event: "error", listener: (error: Error) => void): this,
		on(event: "checking-for-update", listener: Function): this,
		on(event: "update-available", listener: Function): this,
		on(event: "update-not-available", listener: Function): this,
		on(
		event: "update-downloaded", listener: (
		event: Event, releaseNotes: string, releaseName: string, releaseDate: Date, updateURL: string
	) => void
	): this,
		on(event: string, listener: Function): this,
		setFeedURL(url: string, requestHeaders?: Headers): void,
		getFeedURL(): string,
		checkForUpdates(): void,
		quitAndInstall(): void
	}

	declare interface ThumbarButton {
		icon: NativeImage | string,
		click: Function,
		tooltip?: string,
		flags?: ThumbarButtonFlags[]
	}

	declare interface DevToolsExtensions {
		[name: string]: {
		name: string,
		value: string
	}
	}

	declare interface WebPreferences {
		devTools?: boolean,
		nodeIntegration?: boolean,
		preload?: string,
		session?: Session,
		partition?: string,
		zoomFactor?: number,
		javascript?: boolean,
		webSecurity?: boolean,
		allowDisplayingInsecureContent?: boolean,
		allowRunningInsecureContent?: boolean,
		images?: boolean,
		textAreasAreResizable?: boolean,
		webgl?: boolean,
		webaudio?: boolean,
		plugins?: boolean,
		experimentalFeatures?: boolean,
		experimentalCanvasFeatures?: boolean,
		directWrite?: boolean,
		scrollBounce?: boolean,
		blinkFeatures?: string,
		disableBlinkFeatures?: string,
		defaultFontFamily?: {
		standard?: string,
		serif?: string,
		sansSerif?: string,
		monospace?: string
	},
		defaultFontSize?: number,
		defaultMonospaceFontSize?: number,
		minimumFontSize?: number,
		defaultEncoding?: string,
		backgroundThrottling?: boolean,
		offscreen?: boolean,
		sandbox?: boolean
	}

	declare interface BrowserWindowOptions {
		width?: number,
		height?: number,
		x?: number,
		y?: number,
		useContentSize?: boolean,
		center?: boolean,
		minWidth?: number,
		minHeight?: number,
		maxWidth?: number,
		maxHeight?: number,
		resizable?: boolean,
		movable?: boolean,
		minimizable?: boolean,
		maximizable?: boolean,
		closable?: boolean,
		focusable?: boolean,
		alwaysOnTop?: boolean,
		fullscreen?: boolean,
		fullscreenable?: boolean,
		skipTaskbar?: boolean,
		kiosk?: boolean,
		title?: string,
		icon?: NativeImage | string,
		show?: boolean,
		frame?: boolean,
		parent?: BrowserWindow,
		modal?: boolean,
		acceptFirstMouse?: boolean,
		disableAutoHideCursor?: boolean,
		autoHideMenuBar?: boolean,
		enableLargerThanScreen?: boolean,
		backgroundColor?: string,
		hasShadow?: boolean,
		darkTheme?: boolean,
		transparent?: boolean,
		type?: BrowserWindowType,
		titleBarStyle?: "default" | "hidden" | "hidden-inset",
		thickFrame?: boolean,
		webPreferences?: WebPreferences
	}

	declare interface Clipboard {
		readText(type?: ClipboardType): string,
		writeText(text: string, type?: ClipboardType): void,
		readHTML(type?: ClipboardType): string,
		writeHTML(markup: string, type?: ClipboardType): void,
		readImage(type?: ClipboardType): NativeImage,
		writeImage(image: NativeImage, type?: ClipboardType): void,
		readRTF(type?: ClipboardType): string,
		writeRTF(text: string, type?: ClipboardType): void,
		clear(type?: ClipboardType): void,
		availableFormats(type?: ClipboardType): string[],
		has(format: string, type?: ClipboardType): boolean,
		read(format: string, type?: ClipboardType): string | NativeImage,
		write(
		data: {
		text?: string,
		rtf?: string,
		html?: string,
		image?: NativeImage
	}, type?: ClipboardType
	): void,
		readBookmark(): Bookmark,
		writeBookmark(title: string, url: string, type?: ClipboardType): void
	}

	declare interface Bookmark {
		title: string,
		url: string
	}

	declare interface ContentTracing {
		getCategories(callback: (categoryGroups: string[]) => void): void,
		startRecording(options: ContentTracingOptions, callback: Function): void,
		stopRecording(resultFilePath: string, callback: (filePath: string) => void): void,
		startMonitoring(options: ContentTracingOptions, callback: Function): void,
		stopMonitoring(callback: Function): void,
		captureMonitoringSnapshot(resultFilePath: string, callback: (filePath: string) => void): void,
		getTraceBufferUsage(callback: Function): void,
		setWatchEvent(categoryName: string, eventName: string, callback: Function): void,
		cancelWatchEvent(): void
	}

	declare interface ContentTracingOptions {
		categoryFilter: string,
		traceOptions: string
	}

	declare interface CrashReporter {
		start(options: CrashReporterStartOptions): void,
		getLastCrashReport(): CrashReport,
		getUploadedReports(): CrashReport[]
	}

	declare interface CrashReporterStartOptions {
		productName?: string,
		companyName: string,
		submitURL: string,
		autoSubmit?: boolean,
		ignoreSystemCrashHandler?: boolean,
		extra?: {
		[prop: string]: string
	}
	}

	declare interface CrashReport {
		id: string,
		date: Date
	}

	declare interface DesktopCapturer {
		getSources(
		options: DesktopCapturerOptions, callback: (error: Error, sources: DesktopCapturerSource[]) => any
	): void
	}

	declare interface DesktopCapturerOptions {
		types?: ("screen" | "window")[],
		thumbnailSize?: Size
	}

	declare interface DesktopCapturerSource {
		id: string,
		name: string,
		thumbnail: NativeImage
	}

	declare interface Dialog {
		showOpenDialog(
		browserWindow: BrowserWindow, options: OpenDialogOptions, callback?: (fileNames: string[]) => void
	): string[],
		showOpenDialog(options: OpenDialogOptions, callback?: (fileNames: string[]) => void): string[],
		showSaveDialog(
		browserWindow: BrowserWindow, options: SaveDialogOptions, callback?: (fileName: string) => void
	): string,
		showSaveDialog(options: SaveDialogOptions, callback?: (fileName: string) => void): string,
		showMessageBox(
		browserWindow: BrowserWindow, options: ShowMessageBoxOptions, callback?: (response: number) => void
	): number,
		showMessageBox(options: ShowMessageBoxOptions, callback?: (response: number) => void): number,
		showErrorBox(title: string, content: string): void
	}

	declare interface OpenDialogOptions {
		title?: string,
		defaultPath?: string,
		buttonLabel?: string,
		filters?: {
		name: string,
		extensions: string[]
	}[],
		properties?: ("openFile" | "openDirectory" | "multiSelections" | "createDirectory" | "showHiddenFiles")[]
	}

	declare interface SaveDialogOptions {
		title?: string,
		defaultPath?: string,
		buttonLabel?: string,
		filters?: {
		name: string,
		extensions: string[]
	}[]
	}

	declare interface ShowMessageBoxOptions {
		type?: "none" | "info" | "error" | "question" | "warning",
		buttons?: string[],
		defaultId?: number,
		title?: string,
		message?: string,
		detail?: string,
		icon?: NativeImage,
		cancelId?: number,
		noLink?: boolean
	}

	declare interface DownloadItem {
		on(
		event: "updated", listener: (event: Event, state: "progressing" | "interrupted") => void
	): this,
		on(
		event: "done", listener: (event: Event, state: "completed" | "cancelled" | "interrupted") => void
	): this,
		on(event: string, listener: Function): this,
		setSavePath(path: string): void,
		getSavePath(): string,
		pause(): void,
		isPaused(): boolean,
		resume(): void,
		canResume(): boolean,
		cancel(): void,
		getURL(): string,
		getMimeType(): string,
		hasUserGesture(): boolean,
		getFilename(): string,
		getTotalBytes(): number,
		getReceivedBytes(): number,
		getContentDisposition(): string,
		getState(): "progressing" | "completed" | "cancelled" | "interrupted"
	}

	declare interface GlobalShortcut {
		register(accelerator: string, callback: Function): void,
		isRegistered(accelerator: string): boolean,
		unregister(accelerator: string): void,
		unregisterAll(): void
	}

	declare interface IpcMain {
		addListener(channel: string, listener: IpcMainEventListener): this,
		on(channel: string, listener: IpcMainEventListener): this,
		once(channel: string, listener: IpcMainEventListener): this,
		removeListener(channel: string, listener: IpcMainEventListener): this,
		removeAllListeners(channel?: string): this
	}

	declare interface IpcMainEvent {
		returnValue?: any,
		sender: WebContents
	}

	declare interface IpcRenderer {
		addListener(channel: string, listener: IpcRendererEventListener): this,
		on(channel: string, listener: IpcRendererEventListener): this,
		once(channel: string, listener: IpcRendererEventListener): this,
		removeListener(channel: string, listener: IpcRendererEventListener): this,
		removeAllListeners(channel?: string): this,
		send(channel: string, ...args: any[]): void,
		sendSync(channel: string, ...args: any[]): any,
		sendToHost(channel: string, ...args: any[]): void
	}

	declare interface IpcRendererEvent {
		sender: IpcRenderer
	}

	declare interface MenuItemOptions {
		click?: (menuItem: MenuItem, browserWindow: BrowserWindow) => void,
		type?: MenuItemType,
		label?: string,
		sublabel?: string,
		accelerator?: string,
		icon?: NativeImage | string,
		enabled?: boolean,
		visible?: boolean,
		checked?: boolean,
		submenu?: Menu | MenuItemOptions[],
		id?: string,
		position?: string,
		role?: MenuItemRole | MenuItemRoleMac
	}

	declare interface PowerMonitor {
		on(event: "suspend", listener: Function): this,
		on(event: "resume", listener: Function): this,
		on(event: "on-ac", listener: Function): this,
		on(event: "on-battery", listener: Function): this,
		on(event: string, listener: Function): this
	}

	declare interface PowerSaveBlocker {
		start(type: "prevent-app-suspension" | "prevent-display-sleep"): number,
		stop(id: number): void,
		isStarted(id: number): boolean
	}

	declare interface Protocol {
		registerStandardSchemes(schemes: string[]): void,
		registerServiceWorkerSchemes(schemes: string[]): void,
		registerFileProtocol(
		scheme: string, handler: FileProtocolHandler, completion?: (error: Error) => void
	): void,
		registerBufferProtocol(
		scheme: string, handler: BufferProtocolHandler, completion?: (error: Error) => void
	): void,
		registerStringProtocol(
		scheme: string, handler: StringProtocolHandler, completion?: (error: Error) => void
	): void,
		registerHttpProtocol(
		scheme: string, handler: HttpProtocolHandler, completion?: (error: Error) => void
	): void,
		unregisterProtocol(scheme: string, completion?: (error: Error) => void): void,
		isProtocolHandled(scheme: string, callback: (handled: boolean) => void): void,
		interceptFileProtocol(
		scheme: string, handler: FileProtocolHandler, completion?: (error: Error) => void
	): void,
		interceptBufferProtocol(
		scheme: string, handler: BufferProtocolHandler, completion?: (error: Error) => void
	): void,
		interceptStringProtocol(
		scheme: string, handler: StringProtocolHandler, completion?: (error: Error) => void
	): void,
		interceptHttpProtocol(
		scheme: string, handler: HttpProtocolHandler, completion?: (error: Error) => void
	): void,
		uninterceptProtocol(scheme: string, completion?: (error: Error) => void): void
	}

	declare interface ProtocolRequest {
		url: string,
		referrer: string,
		method: string,
		uploadData?: {
		bytes: Buffer,
		file: string,
		blobUUID: string
	}[]
	}

	declare interface ProtocolCallback {
		(error: number): void,
		(obj: {
		error: number
	}): void,
		(): void
	}

	declare interface FileProtocolCallback {
		(filePath: string): void,
		(obj: {
		path: string
	}): void
	}

	declare interface BufferProtocolCallback {
		(buffer: Buffer): void,
		(obj: {
		data: Buffer,
		mimeType: string,
		charset?: string
	}): void
	}

	declare interface StringProtocolCallback {
		(str: string): void,
		(obj: {
		data: Buffer,
		mimeType: string,
		charset?: string
	}): void
	}

	declare interface HttpProtocolCallback {
		(redirectRequest: {
		url: string,
		method: string,
		session?: Object,
		uploadData?: {
		contentType: string,
		data: string
	}
	}): void
	}

	declare interface Remote {
		require(module: string): any,
		getCurrentWindow(): BrowserWindow,
		getCurrentWebContents(): WebContents,
		getGlobal(name: string): any,
		process: NodeJS.Process
	}

	declare interface Display {
		id: number,
		bounds: Rectangle,
		workArea: Rectangle,
		size: Size,
		workAreaSize: Size,
		scaleFactor: number,
		rotation: number,
		touchSupport: "available" | "unavailable" | "unknown"
	}

	declare interface Screen {
		on(
		event: "display-added", listener: (event: Event, newDisplay: Display) => void
	): this,
		on(
		event: "display-removed", listener: (event: Event, oldDisplay: Display) => void
	): this,
		on(
		event: "display-metrics-changed", listener: (event: Event, display: Display, changedMetrics: DisplayMetrics[]) => void
	): this,
		on(event: string, listener: Function): this,
		getCursorScreenPoint(): Point,
		getPrimaryDisplay(): Display,
		getAllDisplays(): Display[],
		getDisplayNearestPoint(point: Point): Display,
		getDisplayMatching(rect: Rectangle): Display
	}

	declare interface FromPartitionOptions {
		cache?: boolean
	}

	declare interface ClearStorageDataOptions {
		origin?: string,
		storages?: ("appcache" | "cookies" | "filesystem" | "indexdb" | "localstorage" | "shadercache" | "websql" | "serviceworkers")[],
		quotas?: ("temporary" | "persistent" | "syncable")[]
	}

	declare interface ProxyConfig {
		pacScript: string,
		proxyRules: string,
		proxyBypassRules: string
	}

	declare interface NetworkEmulationOptions {
		offline?: boolean,
		latency?: number,
		downloadThroughput?: number,
		uploadThroughput?: number
	}

	declare interface CookieFilter {
		url?: string,
		name?: string,
		domain?: string,
		path?: string,
		secure?: boolean,
		session?: boolean
	}

	declare interface Cookie {
		on(
		event: "changed", listener: (event: Event, cookie: Cookie, cause: CookieChangedCause) => void
	): this,
		on(event: string, listener: Function): this,
		name: string,
		value: string,
		domain: string,
		hostOnly: string,
		path: string,
		secure: boolean,
		httpOnly: boolean,
		session: boolean,
		expirationDate?: number
	}

	declare interface CookieDetails {
		url: string,
		name?: string,
		value?: string,
		domain?: string,
		path?: string,
		secure?: boolean,
		httpOnly?: boolean,
		expirationDate?: number
	}

	declare interface SessionCookies {
		get(
		filter: CookieFilter, callback: (error: Error, cookies: Cookie[]) => void
	): void,
		set(details: CookieDetails, callback: (error: Error) => void): void,
		remove(url: string, name: string, callback: (error: Error) => void): void
	}

	declare interface WebRequest {
		onBeforeRequest(
		listener: (
		details: WebRequest.BeforeRequestDetails, callback: WebRequest.BeforeRequestCallback
	) => void
	): void,
		onBeforeRequest(
		filter: WebRequest.Filter, listener: (
		details: WebRequest.BeforeRequestDetails, callback: WebRequest.BeforeRequestCallback
	) => void
	): void,
		onBeforeSendHeaders(
		listener: (
		details: WebRequest.BeforeSendHeadersDetails, callback: WebRequest.BeforeSendHeadersCallback
	) => void
	): void,
		onBeforeSendHeaders(
		filter: WebRequest.Filter, listener: (
		details: WebRequest.BeforeSendHeadersDetails, callback: WebRequest.BeforeSendHeadersCallback
	) => void
	): void,
		onSendHeaders(listener: (details: WebRequest.SendHeadersDetails) => void): void,
		onSendHeaders(
		filter: WebRequest.Filter, listener: (details: WebRequest.SendHeadersDetails) => void
	): void,
		onHeadersReceived(
		listener: (
		details: WebRequest.HeadersReceivedDetails, callback: WebRequest.HeadersReceivedCallback
	) => void
	): void,
		onHeadersReceived(
		filter: WebRequest.Filter, listener: (
		details: WebRequest.HeadersReceivedDetails, callback: WebRequest.HeadersReceivedCallback
	) => void
	): void,
		onResponseStarted(listener: (details: WebRequest.ResponseStartedDetails) => void): void,
		onResponseStarted(
		filter: WebRequest.Filter, listener: (details: WebRequest.ResponseStartedDetails) => void
	): void,
		onBeforeRedirect(listener: (details: WebRequest.BeforeRedirectDetails) => void): void,
		onBeforeRedirect(
		filter: WebRequest.Filter, listener: (details: WebRequest.BeforeRedirectDetails) => void
	): void,
		onCompleted(listener: (details: WebRequest.CompletedDetails) => void): void,
		onCompleted(
		filter: WebRequest.Filter, listener: (details: WebRequest.CompletedDetails) => void
	): void,
		onErrorOccurred(listener: (details: WebRequest.ErrorOccurredDetails) => void): void,
		onErrorOccurred(
		filter: WebRequest.Filter, listener: (details: WebRequest.ErrorOccurredDetails) => void
	): void
	}

	declare interface Shell {
		showItemInFolder(fullPath: string): boolean,
		openItem(fullPath: string): boolean,
		openExternal(url: string, options?: {
		activate: boolean
	}): boolean,
		moveItemToTrash(fullPath: string): boolean,
		beep(): void,
		writeShortcutLink(shortcutPath: string, options: ShortcutLinkOptions): boolean,
		writeShortcutLink(
		shortcutPath: string, operation: "create" | "update" | "replace", options: ShortcutLinkOptions
	): boolean,
		readShortcutLink(shortcutPath: string): ShortcutLinkOptions
	}

	declare interface ShortcutLinkOptions {
		target: string,
		cwd?: string,
		args?: string,
		description?: string,
		icon?: string,
		iconIndex?: number,
		appUserModelId?: string
	}

	declare interface SystemPreferences {
		on(
		event: "accent-color-changed", listener: (event: Event, newColor: string) => void
	): this,
		on(event: "color-changed", listener: (event: Event) => void): this,
		on(
		event: "inverted-color-scheme-changed", listener: (event: Event, invertedColorScheme: boolean) => void
	): this,
		on(event: string, listener: Function): this,
		isDarkMode(): boolean,
		isSwipeTrackingFromScrollEventsEnabled(): boolean,
		postNotification(event: string, userInfo: Object): void,
		postLocalNotification(event: string, userInfo: Object): void,
		subscribeNotification(event: string, callback: (event: Event, userInfo: Object) => void): number,
		unsubscribeNotification(id: number): void,
		subscribeLocalNotification(event: string, callback: (event: Event, userInfo: Object) => void): number,
		unsubscribeLocalNotification(id: number): void,
		getUserDefault(
		key: string, type: "string" | "boolean" | "integer" | "float" | "double" | "url" | "array" | "dictionary"
	): any,
		isAeroGlassEnabled(): boolean,
		getAccentColor(): string,
		isInvertedColorScheme(): boolean,
		getColor(color: SystemColor): string
	}

	declare interface Modifiers {
		altKey: boolean,
		shiftKey: boolean,
		ctrlKey: boolean,
		metaKey: boolean
	}

	declare interface DragItem {
		file: string,
		icon: NativeImage
	}

	declare interface WebContentsStatic {
		getAllWebContents(): WebContents[],
		getFocusedWebContents(): WebContents,
		fromId(id: number): WebContents
	}

	declare interface WebContents {
		on(event: "did-finish-load", listener: Function): this,
		on(
		event: "did-fail-load", listener: (
		event: Event, errorCode: number, errorDescription: string, validatedURL: string, isMainFrame: boolean
	) => void
	): this,
		on(
		event: "did-frame-finish-load", listener: (event: Event, isMainFrame: boolean) => void
	): this,
		on(event: "did-start-loading", listener: Function): this,
		on(event: "did-stop-loading", listener: Function): this,
		on(
		event: "did-get-response-details", listener: (
		event: Event, status: boolean, newURL: string, originalURL: string, httpResponseCode: number, requestMethod: string, referrer: string, headers: Headers, resourceType: string
	) => void
	): this,
		on(
		event: "did-get-redirect-request", listener: (
		event: Event, oldURL: string, newURL: string, isMainFrame: boolean, httpResponseCode: number, requestMethod: string, referrer: string, headers: Headers
	) => void
	): this,
		on(event: "dom-ready", listener: (event: Event) => void): this,
		on(
		event: "page-favicon-updated", listener: (event: Event, favicons: string[]) => void
	): this,
		on(
		event: "new-window", listener: (
		event: WebContents.NewWindowEvent, url: string, frameName: string, disposition: NewWindowDisposition, options: BrowserWindowOptions, additionalFeatures: string[]
	) => void
	): this,
		on(event: "will-navigate", listener: (event: Event, url: string) => void): this,
		on(event: "did-navigate", listener: (event: Event, url: string) => void): this,
		on(
		event: "did-navigate-in-page", listener: (event: Event, url: string, isMainFrame: boolean) => void
	): this,
		on(event: "crashed", listener: (event: Event, killed: boolean) => void): this,
		on(
		event: "plugin-crashed", listener: (event: Event, name: string, version: string) => void
	): this,
		on(event: "destroyed", listener: Function): this,
		on(event: "devtools-opened", listener: Function): this,
		on(event: "devtools-closed", listener: Function): this,
		on(event: "devtools-focused", listener: Function): this,
		on(
		event: "certificate-error", listener: (
		event: Event, url: string, error: string, certificate: Certificate, callback: (trust: boolean) => void
	) => void
	): this,
		on(
		event: "select-client-certificate", listener: (
		event: Event, url: string, certificateList: Certificate[], callback: (certificate: Certificate) => void
	) => void
	): this,
		on(
		event: "login", listener: (
		event: Event, request: LoginRequest, authInfo: LoginAuthInfo, callback: (username: string, password: string) => void
	) => void
	): this,
		on(
		event: "found-in-page", listener: (event: Event, result: FoundInPageResult) => void
	): this,
		on(event: "media-started-playing", listener: Function): this,
		on(event: "media-paused", listener: Function): this,
		on(event: "did-change-theme-color", listener: Function): this,
		on(
		event: "update-target-url", listener: (event: Event, url: string) => void
	): this,
		on(
		event: "cursor-changed", listener: (
		event: Event, type: CursorType, image?: NativeImage, scale?: number, size?: Size, hotspot?: Point
	) => void
	): this,
		on(
		event: "context-menu", listener: (event: Event, params: ContextMenuParams) => void
	): this,
		on(
		event: "select-bluetooth-device", listener: (
		event: Event, deviceList: BluetoothDevice[], callback: (deviceId: string) => void
	) => void
	): this,
		on(
		event: "paint", listener: (event: Event, dirtyRect: Rectangle, image: NativeImage) => void
	): this,
		on(event: string, listener: Function): this,
		loadURL(url: string, options?: LoadURLOptions): void,
		downloadURL(url: string): void,
		getURL(): string,
		getTitle(): string,
		getFavicon(): NativeImage,
		isLoading(): boolean,
		isLoadingMainFrame(): boolean,
		isWaitingForResponse(): boolean,
		stop(): void,
		reload(): void,
		reloadIgnoringCache(): void,
		canGoBack(): boolean,
		canGoForward(): boolean,
		canGoToOffset(offset: number): boolean,
		clearHistory(): void,
		goBack(): void,
		goForward(): void,
		goToIndex(index: number): void,
		goToOffset(offset: number): void,
		isCrashed(): boolean,
		setUserAgent(userAgent: string): void,
		getUserAgent(): string,
		insertCSS(css: string): void,
		executeJavaScript(code: string, userGesture?: boolean, callback?: (result: any) => void): void,
		setAudioMuted(muted: boolean): void,
		isAudioMuted(): boolean,
		setZoomFactor(factor: number): void,
		getZoomFactor(callback: (zoomFactor: number) => void): void,
		setZoomLevel(level: number): void,
		getZoomLevel(callback: (zoomLevel: number) => void): void,
		setZoomLevelLimits(minimumLevel: number, maximumLevel: number): void,
		undo(): void,
		redo(): void,
		cut(): void,
		copy(): void,
		copyImageAt(x: number, y: number): void,
		paste(): void,
		pasteAndMatchStyle(): void,
		delete(): void,
		selectAll(): void,
		unselect(): void,
		replace(text: string): void,
		replaceMisspelling(text: string): void,
		insertText(text: string): void,
		findInPage(text: string, options?: FindInPageOptions): number,
		stopFindInPage(action: StopFindInPageAtion): void,
		hasServiceWorker(callback: (hasServiceWorker: boolean) => void): void,
		unregisterServiceWorker(callback: (isFulfilled: boolean) => void): void,
		print(options?: PrintOptions): void,
		printToPDF(
		options: PrintToPDFOptions, callback: (error: Error, data: Buffer) => void
	): void,
		addWorkSpace(path: string): void,
		removeWorkSpace(path: string): void,
		openDevTools(options?: {
		mode?: "right" | "bottom" | "undocked" | "detach"
	}): void,
		closeDevTools(): void,
		isDevToolsOpened(): boolean,
		isDevToolsFocused(): boolean,
		toggleDevTools(): void,
		inspectElement(x: number, y: number): void,
		inspectServiceWorker(): void,
		send(channel: string, ...args: any[]): void,
		enableDeviceEmulation(parameters: DeviceEmulationParameters): void,
		disableDeviceEmulation(): void,
		sendInputEvent(event: SendInputEvent): void,
		beginFrameSubscription(onlyDirty: boolean, callback: BeginFrameSubscriptionCallback): void,
		beginFrameSubscription(callback: BeginFrameSubscriptionCallback): void,
		endFrameSubscription(): void,
		savePage(
		fullPath: string, saveType: "HTMLOnly" | "HTMLComplete" | "MHTML", callback?: (eror: Error) => void
	): boolean,
		showDefinitionForSelection(): void,
		isOffscreen(): boolean,
		startPainting(): void,
		stopPainting(): void,
		isPainting(): boolean,
		setFrameRate(fps: number): void,
		getFrameRate(): number,
		invalidate(): void,
		startDrag(item: DragItem): void,
		capturePage(callback: (image: NativeImage) => void): void,
		capturePage(rect: Rectangle, callback: (image: NativeImage) => void): void,
		id: number,
		session: Session,
		hostWebContents: WebContents,
		devToolsWebContents: WebContents,
		debugger: Debugger
	}

	declare interface BeginFrameSubscriptionCallback {
		(frameBuffer: Buffer, dirtyRect?: Rectangle): void
	}

	declare interface ContextMenuParams {
		x: number,
		y: number,
		linkURL: string,
		linkText: string,
		pageURL: string,
		frameURL: string,
		srcURL: string,
		mediaType: "none" | "image" | "audio" | "video" | "canvas" | "file" | "plugin",
		mediaFlags: {
		inError: boolean,
		isPaused: boolean,
		isMuted: boolean,
		hasAudio: boolean,
		isLooping: boolean,
		isControlsVisible: boolean,
		canToggleControls: boolean,
		canRotate: boolean
	},
		hasImageContents: boolean,
		isEditable: boolean,
		editFlags: {
		canUndo: boolean,
		canRedo: boolean,
		canCut: boolean,
		canCopy: boolean,
		canPaste: boolean,
		canDelete: boolean,
		canSelectAll: boolean
	},
		selectionText: string,
		titleText: string,
		misspelledWord: string,
		frameCharset: string,
		inputFieldType: "none" | "plainText" | "password" | "other",
		menuSourceType: "none" | "mouse" | "keyboard" | "touch" | "touchMenu"
	}

	declare interface BluetoothDevice {
		deviceName: string,
		deviceId: string
	}

	declare interface Headers {
		[key: string]: string
	}

	declare interface LoadURLOptions {
		httpReferrer?: string,
		userAgent?: string,
		extraHeaders?: string
	}

	declare interface PrintOptions {
		silent?: boolean,
		printBackground?: boolean
	}

	declare interface PrintToPDFOptions {
		marginsType?: number,
		pageSize?: "A3" | "A4" | "A5" | "Legal" | "Letter" | "Tabloid" | Size,
		printBackground?: boolean,
		printSelectionOnly?: boolean,
		landscape?: boolean
	}

	declare interface Certificate {
		data: string,
		issuerName: string,
		subjectName: string,
		serialNumber: string,
		validStart: number,
		validExpiry: number,
		fingerprint: string
	}

	declare interface LoginRequest {
		method: string,
		url: string,
		referrer: string
	}

	declare interface LoginAuthInfo {
		isProxy: boolean,
		scheme: string,
		host: string,
		port: number,
		realm: string
	}

	declare interface FindInPageOptions {
		forward?: boolean,
		findNext?: boolean,
		matchCase?: boolean,
		wordStart?: boolean,
		medialCapitalAsWordStart?: boolean
	}

	declare interface FoundInPageResult {
		requestId: number,
		finalUpdate: boolean,
		activeMatchOrdinal?: number,
		matches?: number,
		selectionArea?: Rectangle
	}

	declare interface DeviceEmulationParameters {
		screenPosition?: "desktop" | "mobile",
		screenSize?: Size,
		viewPosition?: Point,
		deviceScaleFactor: number,
		viewSize?: Size,
		fitToView?: boolean,
		offset?: Point,
		scale: number
	}

	declare interface SendInputEvent {
		type: "mouseDown" | "mouseUp" | "mouseEnter" | "mouseLeave" | "contextMenu" | "mouseWheel" | "mouseMove" | "keyDown" | "keyUp" | "char",
		modifiers: ("shift" | "control" | "alt" | "meta" | "isKeypad" | "isAutoRepeat" | "leftButtonDown" | "middleButtonDown" | "rightButtonDown" | "capsLock" | "numLock" | "left" | "right")[]
	}

	declare interface SendInputKeyboardEvent {
		keyCode: string
	}

	declare interface SendInputMouseEvent {
		x: number,
		y: number,
		button?: "left" | "middle" | "right",
		globalX?: number,
		globalY?: number,
		movementX?: number,
		movementY?: number,
		clickCount?: number
	}

	declare interface SendInputMouseWheelEvent {
		deltaX?: number,
		deltaY?: number,
		wheelTicksX?: number,
		wheelTicksY?: number,
		accelerationRatioX?: number,
		accelerationRatioY?: number,
		hasPreciseScrollingDeltas?: boolean,
		canScroll?: boolean
	}

	declare interface Debugger {
		attach(protocolVersion?: string): void,
		isAttached(): boolean,
		detach(): void,
		sendCommand(
		method: string, commandParams?: any, callback?: (error: Error, result: any) => void
	): void,
		on(event: "detach", listener: (event: Event, reason: string) => void): this,
		on(
		event: "message", listener: (event: Event, method: string, params: any) => void
	): this,
		on(event: string, listener: Function): this
	}

	declare interface WebFrame {
		setZoomFactor(factor: number): void,
		getZoomFactor(): number,
		setZoomLevel(level: number): void,
		getZoomLevel(): number,
		setZoomLevelLimits(minimumLevel: number, maximumLevel: number): void,
		setSpellCheckProvider(
		language: string, autoCorrectWord: boolean, provider: {
		spellCheck: (text: string) => boolean
	}
	): void,
		registerURLSchemeAsSecure(scheme: string): void,
		registerURLSchemeAsBypassingCSP(scheme: string): void,
		registerURLSchemeAsPrivileged(scheme: string): void,
		insertText(text: string): void,
		executeJavaScript(code: string, userGesture?: boolean, callback?: (result: any) => void): void,
		getResourceUsage(): ResourceUsages,
		clearCache(): void
	}

	declare interface ResourceUsages {
		fonts: ResourceUsage,
		images: ResourceUsage,
		cssStyleSheets: ResourceUsage,
		xslStyleSheets: ResourceUsage,
		scripts: ResourceUsage,
		other: ResourceUsage
	}

	declare interface ResourceUsage {
		count: number,
		decodedSize: number,
		liveSize: number,
		purgeableSize: number,
		purgedSize: number,
		size: number
	}

	declare interface WebViewElement {
		src: string,
		autosize: string,
		nodeintegration: string,
		plugins: string,
		preload: string,
		httpreferrer: string,
		useragent: string,
		disablewebsecurity: string,
		partition: string,
		allowpopups: string,
		blinkfeatures: string,
		disableblinkfeatures: string,
		guestinstance: string,
		loadURL(url: string, options?: LoadURLOptions): void,
		getURL(): string,
		getTitle(): string,
		isDestroyed(): boolean,
		isFocused(): boolean,
		isLoading(): boolean,
		isWaitingForResponse(): boolean,
		stop(): void,
		reload(): void,
		reloadIgnoringCache(): void,
		canGoBack(): boolean,
		canGoForward(): boolean,
		canGoToOffset(offset: number): boolean,
		clearHistory(): void,
		goBack(): void,
		goForward(): void,
		goToIndex(index: number): void,
		goToOffset(offset: number): void,
		isCrashed(): boolean,
		setUserAgent(userAgent: string): void,
		getUserAgent(): string,
		insertCSS(css: string): void,
		executeJavaScript(code: string, userGesture?: boolean, callback?: (result: any) => void): void,
		openDevTools(): void,
		closeDevTools(): void,
		isDevToolsOpened(): boolean,
		isDevToolsFocused(): boolean,
		inspectElement(x: number, y: number): void,
		inspectServiceWorker(): void,
		setAudioMuted(muted: boolean): void,
		isAudioMuted(): boolean,
		undo(): void,
		redo(): void,
		cut(): void,
		copy(): void,
		paste(): void,
		pasteAndMatchStyle(): void,
		delete(): void,
		selectAll(): void,
		unselect(): void,
		replace(text: string): void,
		replaceMisspelling(text: string): void,
		insertText(text: string): void,
		findInPage(text: string, options?: FindInPageOptions): number,
		stopFindInPage(action: StopFindInPageAtion): void,
		print(options?: PrintOptions): void,
		printToPDF(
		options: PrintToPDFOptions, callback: (error: Error, data: Buffer) => void
	): void,
		send(channel: string, ...args: any[]): void,
		sendInputEvent(event: SendInputEvent): void,
		setZoomFactor(factor: number): void,
		setZoomLevel(level: number): void,
		showDefinitionForSelection(): void,
		getWebContents(): WebContents,
		capturePage(callback: (image: NativeImage) => void): void,
		capturePage(rect: Rectangle, callback: (image: NativeImage) => void): void,
		addEventListener(
		type: "load-commit", listener: (event: WebViewElement.LoadCommitEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "did-finish-load", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "did-fail-load", listener: (event: WebViewElement.DidFailLoadEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "did-frame-finish-load", listener: (event: WebViewElement.DidFrameFinishLoadEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "did-start-loading", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "did-stop-loading", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "did-get-response-details", listener: (event: WebViewElement.DidGetResponseDetails) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "did-get-redirect-request", listener: (event: WebViewElement.DidGetRedirectRequestEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "dom-ready", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "page-title-updated", listener: (event: WebViewElement.PageTitleUpdatedEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "page-favicon-updated", listener: (event: WebViewElement.PageFaviconUpdatedEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "enter-html-full-screen", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "leave-html-full-screen", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "console-message", listener: (event: WebViewElement.ConsoleMessageEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "found-in-page", listener: (event: WebViewElement.FoundInPageEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "new-window", listener: (event: WebViewElement.NewWindowEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "will-navigate", listener: (event: WebViewElement.WillNavigateEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "did-navigate", listener: (event: WebViewElement.DidNavigateEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "did-navigate-in-page", listener: (event: WebViewElement.DidNavigateInPageEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "close", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "ipc-message", listener: (event: WebViewElement.IpcMessageEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "crashed", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "gpu-crashed", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "plugin-crashed", listener: (event: WebViewElement.PluginCrashedEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "destroyed", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "media-started-playing", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "media-paused", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "did-change-theme-color", listener: (event: WebViewElement.DidChangeThemeColorEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "update-target-url", listener: (event: WebViewElement.UpdateTargetUrlEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "devtools-opened", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "devtools-closed", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "devtools-focused", listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: string, listener: (event: WebViewElement.Event) => void, useCapture?: boolean
	): void
	}

	declare interface BrowserWindowProxy {
		blur(): void,
		close(): void,
		closed: boolean,
		eval(code: string): void,
		focus(): void,
		postMessage(message: string, targetOrigin: string): void,
		print(): void
	}

	declare interface CommonElectron {
		clipboard: Electron.Clipboard,
		crashReporter: Electron.CrashReporter,
		nativeImage: typeof undefined,
		shell: Electron.Shell,
		app: Electron.App,
		autoUpdater: Electron.AutoUpdater,
		BrowserWindow: typeof undefined,
		contentTracing: Electron.ContentTracing,
		dialog: Electron.Dialog,
		ipcMain: Electron.IpcMain,
		globalShortcut: Electron.GlobalShortcut,
		Menu: typeof undefined,
		MenuItem: typeof undefined,
		powerMonitor: Electron.PowerMonitor,
		powerSaveBlocker: Electron.PowerSaveBlocker,
		protocol: Electron.Protocol,
		screen: Electron.Screen,
		session: typeof undefined,
		systemPreferences: Electron.SystemPreferences,
		Tray: typeof undefined,
		webContents: Electron.WebContentsStatic
	}

	declare interface ElectronMainAndRenderer {
		desktopCapturer: Electron.DesktopCapturer,
		ipcRenderer: Electron.IpcRenderer,
		remote: Electron.Remote,
		webFrame: Electron.WebFrame
	}

		declare class BrowserWindow extends NodeJS$EventEmitter, Destroyable {
		on(
		event: "page-title-updated", listener: (event: Event, title: string) => void
	): this;
		on(event: "close", listener: (event: Event) => void): this;
		on(event: "closed", listener: Function): this;
		on(event: "unresponsive", listener: Function): this;
		on(event: "responsive", listener: Function): this;
		on(event: "blur", listener: Function): this;
		on(event: "focus", listener: Function): this;
		on(event: "show", listener: Function): this;
		on(event: "hide", listener: Function): this;
		on(event: "ready-to-show", listener: Function): this;
		on(event: "maximize", listener: Function): this;
		on(event: "unmaximize", listener: Function): this;
		on(event: "minimize", listener: Function): this;
		on(event: "restore", listener: Function): this;
		on(event: "resize", listener: Function): this;
		on(event: "move", listener: Function): this;
		on(event: "enter-full-screen", listener: Function): this;
		on(event: "leave-full-screen", listener: Function): this;
		on(event: "enter-html-full-screen", listener: Function): this;
		on(event: "leave-html-full-screen", listener: Function): this;
		on(event: "app-command", listener: (event: Event, command: string) => void): this;
		on(event: "scroll-touch-begin", listener: Function): this;
		on(event: "scroll-touch-end", listener: Function): this;
		on(event: "scroll-touch-edge", listener: Function): this;
		on(
		event: "swipe", listener: (event: Event, direction: SwipeDirection) => void
	): this;
		on(event: string, listener: Function): this;
		constructor(options?: BrowserWindowOptions): this;
		getAllWindows(): BrowserWindow[];
		getFocusedWindow(): BrowserWindow;
		fromWebContents(webContents: WebContents): BrowserWindow;
		fromId(id: number): BrowserWindow;
		addDevToolsExtension(path: string): string;
		removeDevToolsExtension(name: string): void;
		getDevToolsExtensions(): DevToolsExtensions;
		webContents: WebContents;
		id: number;
		destroy(): void;
		close(): void;
		focus(): void;
		blur(): void;
		isFocused(): boolean;
		isDestroyed(): boolean;
		show(): void;
		showInactive(): void;
		hide(): void;
		isVisible(): boolean;
		isModal(): boolean;
		maximize(): void;
		unmaximize(): void;
		isMaximized(): boolean;
		minimize(): void;
		restore(): void;
		isMinimized(): boolean;
		setFullScreen(flag: boolean): void;
		isFullScreen(): boolean;
		setAspectRatio(aspectRatio: number, extraSize?: Size): void;
		setBounds(options: Rectangle, animate?: boolean): void;
		getBounds(): Rectangle;
		setContentBounds(options: Rectangle, animate?: boolean): void;
		getContentBounds(): Rectangle;
		setSize(width: number, height: number, animate?: boolean): void;
		getSize(): number[];
		setContentSize(width: number, height: number, animate?: boolean): void;
		getContentSize(): number[];
		setMinimumSize(width: number, height: number): void;
		getMinimumSize(): number[];
		setMaximumSize(width: number, height: number): void;
		getMaximumSize(): number[];
		setResizable(resizable: boolean): void;
		isResizable(): boolean;
		setMovable(movable: boolean): void;
		isMovable(): boolean;
		setMinimizable(minimizable: boolean): void;
		isMinimizable(): boolean;
		setMaximizable(maximizable: boolean): void;
		isMaximizable(): boolean;
		setFullScreenable(fullscreenable: boolean): void;
		isFullScreenable(): boolean;
		setClosable(closable: boolean): void;
		isClosable(): boolean;
		setAlwaysOnTop(flag: boolean, level?: WindowLevel): void;
		isAlwaysOnTop(): boolean;
		center(): void;
		setPosition(x: number, y: number, animate?: boolean): void;
		getPosition(): number[];
		setTitle(title: string): void;
		getTitle(): string;
		setSheetOffset(offsetY: number, offsetX?: number): void;
		flashFrame(flag: boolean): void;
		setSkipTaskbar(skip: boolean): void;
		setKiosk(flag: boolean): void;
		isKiosk(): boolean;
		getNativeWindowHandle(): Buffer;
		hookWindowMessage(message: number, callback: Function): void;
		isWindowMessageHooked(message: number): boolean;
		unhookWindowMessage(message: number): void;
		unhookAllWindowMessages(): void;
		setRepresentedFilename(filename: string): void;
		getRepresentedFilename(): string;
		setDocumentEdited(edited: boolean): void;
		isDocumentEdited(): boolean;
		focusOnWebView(): void;
		blurWebView(): void;
		capturePage(rect: Rectangle, callback: (image: NativeImage) => void): void;
		capturePage(callback: (image: NativeImage) => void): void;
		loadURL(url: string, options?: LoadURLOptions): void;
		reload(): void;
		setMenu(menu: Menu): void;
		setProgressBar(
		progress: number, options?: {
		mode: "none" | "normal" | "indeterminate" | "error" | "paused"
	}
	): void;
		setOverlayIcon(overlay: NativeImage, description: string): void;
		setHasShadow(hasShadow: boolean): void;
		hasShadow(): boolean;
		setThumbarButtons(buttons: ThumbarButton[]): boolean;
		setThumbnailClip(region: Rectangle): boolean;
		setThumbnailToolTip(toolTip: string): boolean;
		showDefinitionForSelection(): void;
		setIcon(icon: NativeImage): void;
		setAutoHideMenuBar(hide: boolean): void;
		isMenuBarAutoHide(): boolean;
		setMenuBarVisibility(visibile: boolean): void;
		isMenuBarVisible(): boolean;
		setVisibleOnAllWorkspaces(visible: boolean): void;
		isVisibleOnAllWorkspaces(): boolean;
		setIgnoreMouseEvents(ignore: boolean): void;
		setContentProtection(enable: boolean): void;
		setFocusable(focusable: boolean): void;
		setParentWindow(parent: BrowserWindow): void;
		getParentWindow(): BrowserWindow;
		getChildWindows(): BrowserWindow[]
	}

	declare class MenuItem  {
		constructor(options: MenuItemOptions): this;
		click: (menuItem: MenuItem, browserWindow: BrowserWindow, event: Event) => void;
		type: MenuItemType;
		role: MenuItemRole | MenuItemRoleMac;
		accelerator: string;
		icon: NativeImage | string;
		submenu: Menu | MenuItemOptions[];
		label: string;
		sublabel: string;
		enabled: boolean;
		visible: boolean;
		checked: boolean
	}

	declare class Menu extends NodeJS$EventEmitter {
		constructor(): this;
		setApplicationMenu(menu: Menu): void;
		getApplicationMenu(): Menu;
		sendActionToFirstResponder(action: string): void;
		buildFromTemplate(template: MenuItemOptions[]): Menu;
		popup(browserWindow?: BrowserWindow, x?: number, y?: number): void;
		append(menuItem: MenuItem): void;
		insert(position: number, menuItem: MenuItem): void;
		items: MenuItem[]
	}

	declare class NativeImage  {
		createEmpty(): NativeImage;
		createFromPath(path: string): NativeImage;
		createFromBuffer(buffer: Buffer, scaleFactor?: number): NativeImage;
		createFromDataURL(dataURL: string): NativeImage;
		toPNG(): Buffer;
		toJPEG(quality: number): Buffer;
		toBitmap(): Buffer;
		getBitmap(): Buffer;
		toDataURL(): string;
		getNativeHandle(): Buffer;
		isEmpty(): boolean;
		getSize(): Size;
		setTemplateImage(option: boolean): void;
		isTemplateImage(): boolean;
		crop(rect: Rectangle): NativeImage;
		resize(
		options: {
		width?: number,
		height?: number,
		quality?: "good" | "better" | "best"
	}
	): NativeImage;
		getAspectRatio(): number
	}

	declare class Session extends NodeJS$EventEmitter {
		fromPartition(partition: string, options?: FromPartitionOptions): Session;
		defaultSession: Session;
		on(
		event: "will-download", listener: (event: Event, item: DownloadItem, webContents: WebContents) => void
	): this;
		on(event: string, listener: Function): this;
		cookies: SessionCookies;
		getCacheSize(callback: (size: number) => void): void;
		clearCache(callback: Function): void;
		clearStorageData(callback: Function): void;
		clearStorageData(options: ClearStorageDataOptions, callback: Function): void;
		flushStorageData(): void;
		setProxy(config: ProxyConfig, callback: Function): void;
		resolveProxy(url: URL, callback: (proxy: string) => void): void;
		setDownloadPath(path: string): void;
		enableNetworkEmulation(options: NetworkEmulationOptions): void;
		disableNetworkEmulation(): void;
		setCertificateVerifyProc(
		proc: (
		hostname: string, cert: Certificate, callback: (accepted: boolean) => void
	) => void
	): void;
		setPermissionRequestHandler(
		handler: (
		webContents: WebContents, permission: Permission, callback: (allow: boolean) => void
	) => void
	): void;
		clearHostResolverCache(callback: Function): void;
		allowNTLMCredentialsForDomains(domains: string): void;
		setUserAgent(userAgent: string, acceptLanguages?: string): void;
		getUserAgent(): string;
		getBlobData(identifier: string, callback: (result: Buffer) => void): void;
		webRequest: WebRequest;
		protocol: Protocol
	}

	declare class Tray extends NodeJS$EventEmitter, Destroyable {
		on(
		event: "click", listener: (modifiers: Modifiers, bounds: Rectangle) => void
	): this;
		on(
		event: "right-click", listener: (modifiers: Modifiers, bounds: Rectangle) => void
	): this;
		on(
		event: "double-click", listener: (modifiers: Modifiers, bounds: Rectangle) => void
	): this;
		on(event: "balloon-show", listener: Function): this;
		on(event: "balloon-click", listener: Function): this;
		on(event: "balloon-closed", listener: Function): this;
		on(event: "drop", listener: Function): this;
		on(event: "drop-files", listener: (event: Event, files: string[]) => void): this;
		on(event: "drop-text", listener: (event: Event, text: string) => void): this;
		on(event: "drag-enter", listener: Function): this;
		on(event: "drag-leave", listener: Function): this;
		on(event: "drag-end", listener: Function): this;
		on(event: string, listener: Function): this;
		constructor(image: NativeImage | string): this;
		destroy(): void;
		setImage(image: NativeImage | string): void;
		setPressedImage(image: NativeImage): void;
		setToolTip(toolTip: string): void;
		setTitle(title: string): void;
		setHighlightMode(mode: "selection" | "always" | "never"): void;
		displayBalloon(
		options?: {
		icon?: NativeImage,
		title?: string,
		content?: string
	}
	): void;
		popUpContextMenu(menu?: Menu, position?: Point): void;
		setContextMenu(menu: Menu): void;
		getBounds(): Rectangle;
		isDestroyed(): boolean
	}

	
}

declare module 'WebRequest' {
	declare type BeforeRequestCallback = (response: {
		cancel?: boolean,
		redirectURL?: string
	}) => void;

	declare type BeforeSendHeadersCallback = (response: {
		cancel?: boolean,
		requestHeaders?: Headers
	}) => void;

	declare type HeadersReceivedCallback = (
		response: {
		cancel?: boolean,
		responseHeaders?: Headers,
		statusLine?: string
	}
	) => void;

	declare interface Filter {
		urls: string[]
	}

	declare interface Details {
		id: number,
		url: string,
		method: string,
		resourceType: string,
		timestamp: number
	}

	declare interface UploadData {
		bytes: Buffer,
		file: string,
		blobUUID: string
	}

	declare interface BeforeRequestDetails {
		uploadData?: UploadData[]
	}

	declare interface BeforeSendHeadersDetails {
		requestHeaders: Headers
	}

	declare interface SendHeadersDetails {
		requestHeaders: Headers
	}

	declare interface HeadersReceivedDetails {
		statusLine: string,
		statusCode: number,
		responseHeaders: Headers
	}

	declare interface ResponseStartedDetails {
		responseHeaders: Headers,
		fromCache: boolean,
		statusCode: number,
		statusLine: string
	}

	declare interface BeforeRedirectDetails {
		redirectURL: string,
		statusCode: number,
		ip?: string,
		fromCache: boolean,
		responseHeaders: Headers
	}

	declare interface CompletedDetails {
		responseHeaders: Headers,
		fromCache: boolean,
		statusCode: number,
		statusLine: string
	}

	declare interface ErrorOccurredDetails {
		fromCache: boolean,
		error: string
	}

			
}

declare module 'WebContents' {
		declare interface NewWindowEvent {
		newGuest?: BrowserWindow
	}

			
}

declare module 'WebViewElement' {
	declare type Event = ElectronPrivate.GlobalEvent;

	declare interface LoadCommitEvent {
		url: string,
		isMainFrame: boolean
	}

	declare interface DidFailLoadEvent {
		errorCode: number,
		errorDescription: string,
		validatedURL: string,
		isMainFrame: boolean
	}

	declare interface DidFrameFinishLoadEvent {
		isMainFrame: boolean
	}

	declare interface DidGetResponseDetails {
		status: boolean,
		newURL: string,
		originalURL: string,
		httpResponseCode: number,
		requestMethod: string,
		referrer: string,
		headers: Headers,
		resourceType: string
	}

	declare interface DidGetRedirectRequestEvent {
		oldURL: string,
		newURL: string,
		isMainFrame: boolean,
		httpResponseCode: number,
		requestMethod: string,
		referrer: string,
		headers: Headers
	}

	declare interface PageTitleUpdatedEvent {
		title: string,
		explicitSet: string
	}

	declare interface PageFaviconUpdatedEvent {
		favicons: string[]
	}

	declare interface ConsoleMessageEvent {
		level: number,
		message: string,
		line: number,
		sourceId: string
	}

	declare interface FoundInPageEvent {
		result: FoundInPageResult
	}

	declare interface NewWindowEvent {
		url: string,
		frameName: string,
		disposition: NewWindowDisposition,
		options: BrowserWindowOptions
	}

	declare interface WillNavigateEvent {
		url: string
	}

	declare interface DidNavigateEvent {
		url: string
	}

	declare interface DidNavigateInPageEvent {
		url: string,
		isMainFrame: boolean
	}

	declare interface IpcMessageEvent {
		channel: string,
		args: any[]
	}

	declare interface PluginCrashedEvent {
		name: string,
		version: string
	}

	declare interface DidChangeThemeColorEvent {
		themeColor: string
	}

	declare interface UpdateTargetUrlEvent {
		url: string
	}

			
}

declare module 'npm$namespace$ElectronPrivate' {
	declare type GlobalEvent = Event;

				
}

declare module 'npm$namespace$NodeJS' {
		declare interface ProcessVersions {
		electron: string,
		chrome: string
	}

	declare interface Process {
		noAsar?: boolean,
		type: "browser" | "renderer",
		resourcesPath: string,
		mas?: boolean,
		windowsStore?: boolean,
		defaultApp?: boolean,
		on(event: "loaded", listener: Function): this,
		on(event: string, listener: Function): this,
		crash(): void,
		hang(): void,
		setFdLimit(maxDescriptors: number): void,
		getProcessMemoryInfo(): ProcessMemoryInfo,
		getSystemMemoryInfo(): SystemMemoryInfo
	}

	declare interface ProcessMemoryInfo {
		workingSetSize: number,
		peakWorkingSetSize: number,
		privateBytes: number,
		sharedBytes: number
	}

	declare interface SystemMemoryInfo {
		total: number,
		free: number,
		swapTotal: number,
		swapFree: number
	}

			
}

declare module 'electron' {
					declare module.exports: ElectronMainAndRenderer


}