import type { Tab } from 'npm$namespace$FFAddonSDK'

declare module 'jpm' {
					
}

declare module 'sdk/base64' {
			declare export function encode(data: string, charset?: string): string

	declare export function decode(data: string, charset?: string): string

		
}

declare module 'sdk/clipboard' {
			declare export function get(datatype?: "text" | "html" | "image"): string

	declare export function set(data: string, datatype?: "text" | "html" | "image"): void

		
}

declare module 'sdk/context-menu' {
	declare type ItemMenuSeparator = Item | Menu | Separator;

	declare interface Context {
		
	}

	declare interface PageContext {
		(): Object
	}

	declare interface SelectionContext {
		(): Object
	}

	declare interface SelectorContext {
		(selector: string): Object
	}

	declare interface URLContext {
		(matchPattern: string): Object
	}

	declare interface PredicateContext {
		(predicateFunction: (
		context: {
		documentType: string,
		documentURL: string,
		targetName: string,
		targetID?: string,
		isEditable: boolean,
		selectionText?: string,
		srcURL?: string,
		linkURL?: string,
		value?: string
	}
	) => boolean): Object
	}

	declare interface ItemContext {
		add: (context: Context) => void,
		remove: (context: Context) => void
	}

	declare interface Item {
		context: ItemContext,
		destroy: () => void,
		label: string,
		image: string | URL,
		data: any,
		parentMenu?: Menu,
		contentScript?: string | string[],
		contentScriptFile?: string | string[]
	}

	declare interface Separator {
		parentMenu: Menu,
		destroy: () => void
	}

	declare interface Menu {
		addItem: (item: ItemMenuSeparator) => void,
		removeItem: (item: ItemMenuSeparator) => void,
		destroy: () => void,
		label: string,
		items: ItemMenuSeparator[],
		image: string | URL,
		context: ItemContext,
		parentMenu?: Menu,
		contentScript: string | string[],
		contentScriptFile: string | string[]
	}

	declare export function Item(
		options: {
		label: string,
		image?: string,
		accessKey?: string,
		context?: Context | Context[],
		contentScript?: string,
		contentScriptFile?: string,
		data?: any,
		onMessage?: (message?: any) => any
	}
	): Item

	declare export function Separator(): Separator

	declare export function Menu(
		options: {
		label: string,
		items: ItemMenuSeparator[],
		image?: string,
		context?: Context[],
		contentScript?: string | string[],
		contentScriptFile?: string | string[],
		onMessage: (message?: any) => void
	}
	): Menu

		
}

declare module 'sdk/hotkeys' {
		declare interface Hotkey {
		destroy: () => void
	}

	declare export function Hotkey(options: {
		combo: string,
		onPress: () => void
	}): Hotkey

		
}

declare module 'sdk/indexed-db' {
		declare interface IndexedImpl {
		indexedDB: IDBFactory,
		IDBKeyRange: IDBKeyRange,
		DOMException: DOMException
	}

			declare module.exports: undefined


}

declare module 'sdk/l10n' {
			declare export function get(identifier: string, count?: number, ...placeholder: string[]): string

		
}

declare module 'sdk/notifications' {
			declare export function notify(
		options: {
		title?: string,
		text?: string,
		iconURL?: string,
		onClick?: (data: string) => any,
		data?: string
	}
	): void

		
}

declare module 'sdk/page-mod' {
	declare type attachmentMode = "existing" | "top" | "frame";

	declare interface PageMod {
		destroy: () => void,
		include: string | string[] | RegExp | RegExp[]
	}

	declare export function PageMod(
		options: {
		include: string | string[] | RegExp | RegExp[],
		contentScript?: string | string[],
		contentScriptFile?: string | string[],
		contentStyle?: string | string[],
		contentStyleFile?: string | string[],
		contentScriptOptions?: any,
		attachTo?: attachmentMode | attachmentMode[],
		contentScriptWhen?: "start" | "ready" | "end",
		exclude?: string | string[],
		onAttach?: (worker: FFAddonSDK.ContentWorker) => any,
		onError?: (error: Error) => any
	}
	): PageMod

		
}

declare module 'sdk/page-worker' {
		declare interface PageWorker {
		port: FFAddonSDK.Port,
		contentURL?: string,
		destroy: () => void,
		postMessage: (message: string) => void,
		on: (event: "message" | "error", handler: (arg?: "message" | Error) => any) => void,
		removeListener: (event: string, listener: Function) => void,
		allow?: {
		script: boolean
	},
		include?: string | string[] | RegExp | RegExp[],
		contentScriptFile?: string | string[],
		contentScript?: string | string[]
	}

	declare export function Page(
		options: {
		contentURL?: string,
		contentScript?: string | string[],
		contentScriptFile?: string | string[],
		contentScriptWhen?: "start" | "ready" | "end",
		onMessage?: (message: string) => any,
		allow?: {
		script: boolean
	},
		contentScriptOptions?: any,
		include?: string | string[] | RegExp | RegExp[]
	}
	): PageWorker

		
}

declare module 'sdk/panel' {
	declare type PanelPosition = FFAddonSDK.ToggleButton | FFAddonSDK.Widget | {
		top?: number,
		right?: number,
		bottom?: number,
		left?: number
	};

	declare interface Panel {
		show: (
		options?: {
		width?: number,
		height?: number,
		position?: PanelPosition,
		focus?: boolean
	}
	) => void,
		hide: () => void,
		resize: (width: number, height: number) => void,
		destroy: () => void,
		postMessage: (message: string) => void,
		on: (
		event: "show" | "hide" | "message" | "error", handler: (arg?: Error | any) => any
	) => void,
		removeListener: (event: string, listener: Function) => void,
		port: FFAddonSDK.Port,
		isShowing: boolean,
		height: number,
		width: number,
		focus: boolean,
		contentURL?: string | URL,
		allow?: {
		script: boolean
	},
		contentScriptFile?: string | string[],
		contentScript?: string | string[],
		contentScriptWhen: "start" | "ready" | "end",
		contentScriptOptions?: any
	}

	declare export function Panel(
		options: {
		contentURL?: string | URL,
		width?: number,
		height?: number,
		contentScript?: string | string[],
		contentScriptFile?: string | string[],
		contentScriptWhen?: "start" | "ready" | "end",
		contentScriptOptions?: any,
		contentStyle?: string | string[],
		contentStyleFile?: string | string[],
		position?: PanelPosition,
		allow?: {
		script?: boolean
	},
		focus?: boolean,
		contextMenu?: boolean,
		onMessage?: (message: string) => any,
		onShow?: () => any,
		onHide?: () => any,
		onError?: (error: Error) => any
	}
	): Panel

		
}

declare module 'sdk/passwords' {
		declare interface Credential {
		username: string,
		password: string,
		url?: string,
		formSubmitURL?: string,
		realm?: string,
		usernameField?: string,
		passwordField?: string
	}

	declare export function search(
		options: {
		onComplete: (credentials: Credential[]) => any,
		username?: string,
		url?: string,
		password?: string,
		formSubmitURL?: string,
		realm?: string,
		usernameField?: string,
		passwordField?: string,
		onError?: (error: FFAddonSDK.NSIException) => any
	}
	): void

	declare export function store(
		options: Credential & {
		onComplete?: () => any,
		onError?: (error: FFAddonSDK.NSIException) => any
	}
	): void

	declare export function remove(
		options: Credential & {
		onComplete?: () => any,
		onError?: (error: FFAddonSDK.NSIException) => any
	}
	): void

		
}

declare module 'sdk/private-browsing' {
			declare export function isPrivate(
		object: FFAddonSDK.Tab | FFAddonSDK.ContentWorker | FFAddonSDK.BrowserWindow
	): boolean

		
}

declare module 'sdk/querystring' {
			declare export function stringify(object: Object, separator?: string, assignment?: string): string

	declare export function parse(querystring: string, separator?: string, assignment?: string): Object

	declare export function escape(query: string): string

	declare export function unescape(query: string): string

		
}

declare module 'sdk/request' {
		declare interface BaseRequest {
		get: () => void,
		post: () => void,
		head: () => void,
		put: () => void,
		delete: () => void,
		url: string | FFAddonSDK.SDKURL,
		headers: Object,
		content: string,
		contentType: string
	}

	declare interface Request {
		response: Response
	}

	declare interface STRequest<ResponseType> {
		response: STResponse<ResponseType>
	}

	declare interface BaseResponse {
		url: string,
		text: string,
		status: number,
		statusText: string,
		headers: Object,
		anonymous: boolean
	}

	declare interface Response {
		json: Object
	}

	declare interface STResponse<T> {
		json: T
	}

	declare export function Request(
		options: {
		url?: string | FFAddonSDK.SDKURL,
		onComplete?: (response: Response) => any,
		headers?: Object,
		content?: string | Object,
		contentType?: string,
		anonymous?: boolean,
		overrideMimeType?: string
	}
	): Request

	declare export function Request<ResponseType>(
		options: {
		url?: string | FFAddonSDK.SDKURL,
		onComplete?: (response: STResponse<ResponseType>) => any,
		headers?: Object,
		content?: string | Object,
		contentType?: string,
		anonymous?: boolean,
		overrideMimeType?: string
	}
	): STRequest<ResponseType>

		
}

declare module 'sdk/selection' {
			declare export function on(event: "select" | "select", handler: () => any): void

	declare export function removeListener(event: "select" | "select", handler: Function): void

		
}

declare module 'data' {
			declare export function load(name: string): string

	declare export function url(name: string): string

		
}

declare module 'sdk/simple-prefs' {
			declare export function on(prefName: string, listener: (prefName: string) => any): void

	declare export function removeListener(prefName: string, listener: Function): void

		
}

declare module 'sdk/simple-storage' {
			declare export function on(event: "OverQuota" | "OverQuota", handler: () => any): void

		
}

declare module 'sdk/system' {
			declare export function exit(code: number): void

	declare export function pathFor(id: string): string

		
}

declare module 'sdk/tabs' {
			declare export function open(
		options: string | {
		url: string,
		inNewWindow?: boolean,
		inBackground?: boolean,
		isPinned?: boolean,
		onOpen?: (tab: FFAddonSDK.Tab) => any,
		onClose?: (tab: FFAddonSDK.Tab) => any,
		onReady?: (tab: FFAddonSDK.Tab) => any,
		onLoad?: (tab: FFAddonSDK.Tab) => any,
		onPageShow?: (tab: FFAddonSDK.Tab) => any,
		onActivate?: (tab: FFAddonSDK.Tab) => any,
		onDeactivate?: (tab: FFAddonSDK.Tab) => any
	}
	): void

	declare export function on(
		event: "open" | "close" | "ready" | "load" | "pageshow" | "activate" | "deactivate", handler: (tab: FFAddonSDK.Tab) => any
	): void

		
}

declare module 'sdk/timers' {
	declare type TIMEOUT_ID = number;

	declare type INTERVAL_ID = number;

		declare export function setTimeout(callback: (...args: any[]) => any, timeoutMS: number): TIMEOUT_ID

	declare export function clearTimeout(timerID: TIMEOUT_ID): void

	declare export function setInterval(callback: (...args: any[]) => any, timeoutMS: number): INTERVAL_ID

	declare export function clearInterval(intervalID: INTERVAL_ID): void

		
}

declare module 'sdk/ui/button/action' {
			declare export function ActionButton(
		options: {
		id: string,
		label: string,
		icon: FFAddonSDK.Icon,
		onClick?: (state: FFAddonSDK.ActionButton) => any,
		onChange?: (state: FFAddonSDK.ActionButtonState) => any,
		disabled?: boolean,
		badge?: string | number,
		badgeColor?: string
	}
	): FFAddonSDK.ActionButton

		
}

declare module 'sdk/ui/button/toggle' {
			declare export function ToggleButton(
		options: {
		id: string,
		label: string,
		icon: FFAddonSDK.Icon,
		onChange?: (state: FFAddonSDK.ToggleButtonState) => any,
		onClick?: (state: FFAddonSDK.ToggleButtonState) => any,
		badge?: string | number,
		badgeColor?: string,
		disabled?: boolean,
		checked?: boolean
	}
	): FFAddonSDK.ToggleButton

		
}

declare module 'sdk/ui/frame' {
			declare export function Frame(
		options: {
		url: string,
		name?: string,
		onMessage?: (message: FFAddonSDK.FrameEvent) => any,
		onReady?: (event: FFAddonSDK.FrameEvent) => any,
		onLoad?: (event: FFAddonSDK.FrameEvent) => any,
		onAttach?: (event: FFAddonSDK.FrameEvent) => any,
		onDetach?: (event: FFAddonSDK.FrameEvent) => any
	}
	): FFAddonSDK.Frame

		
}

declare module 'sdk/ui/toolbar' {
	declare type ToolbarItem = FFAddonSDK.Frame | FFAddonSDK.ActionButton | FFAddonSDK.ToggleButton;

	declare interface Toolbar {
		title: string,
		items: ToolbarItem[],
		hidden: boolean,
		on: (
		event: "show" | "hide" | "attach" | "detach", handler: (toolbar: Toolbar) => any
	) => void,
		once: (
		event: "show" | "hide" | "attach" | "detach", handler: (toolbar: Toolbar) => any
	) => void,
		removeListener: (event: "show" | "hide" | "attach" | "detach", handler: Function) => void,
		off: (event: "show" | "hide" | "attach" | "detach", handler: Function) => void,
		destroy: () => void
	}

	declare export function Toolbar(
		options: {
		title: string,
		items: ToolbarItem[],
		hidden?: boolean,
		onAttach?: (toolbar: Toolbar) => any,
		onDetach?: (toolbar: Toolbar) => any,
		onShow?: (toolbar: Toolbar) => any,
		onHide?: (toolbar: Toolbar) => any
	}
	): Toolbar

		
}

declare module 'sdk/ui/sidebar' {
		declare interface Sidebar {
		id: string,
		title: string,
		url: string,
		show: (window?: FFAddonSDK.BrowserWindow) => void,
		hide: (window?: FFAddonSDK.BrowserWindow) => void,
		on: (
		event: "show" | "hide" | "attach" | "detach" | "ready", handler: (worker: SidebarWorker) => any
	) => void,
		once: (
		event: "show" | "hide" | "attach" | "detach" | "ready", handler: (worker: SidebarWorker) => any
	) => void,
		removeListener: (
		event: "show" | "hide" | "attach" | "detach" | "ready", handler: Function
	) => void,
		dispose: () => void
	}

	declare interface SidebarWorker {
		port: FFAddonSDK.Port
	}

	declare export function Sidebar(
		options: {
		id?: string,
		title: string,
		url: string,
		onShow?: () => any,
		onHide?: () => any,
		onAttach?: (worker: SidebarWorker) => any,
		onDetach?: () => any,
		onReady?: (worker: SidebarWorker) => any
	}
	): Sidebar

		
}

declare module 'sdk/url' {
		declare interface DataURL {
		toString: () => string,
		mimeType: string,
		parameters: Object,
		base64: string,
		data: string
	}

	declare export function URL(source: string, base?: string): FFAddonSDK.SDKURL

	declare export function DataURL(uri: string): DataURL

	declare export function toFilename(url: FFAddonSDK.SDKURL): string

	declare export function toFileName(url: string): string

	declare export function isValidURI(uri: string): boolean

	declare export function getTLD(url: string): string

		
}

declare module 'sdk/windows' {
		declare interface BrowserWindows {
		open: (
		options: string | {
		url: string,
		isPrivate?: boolean,
		onOpen?: (window: FFAddonSDK.BrowserWindow) => any,
		onClose?: (window: FFAddonSDK.BrowserWindow) => any,
		onActivate?: (window: FFAddonSDK.BrowserWindow) => any,
		onDeactivate?: (window: FFAddonSDK.BrowserWindow) => any
	}
	) => FFAddonSDK.BrowserWindow,
		on: (
		event: "open" | "close" | "activate" | "deactivate", handler: (window: FFAddonSDK.BrowserWindow) => any
	) => void,
		activeWindow: FFAddonSDK.BrowserWindow
	}

			
}

declare module 'npm$namespace$FFAddonSDK' {
	declare type Icon = string | {
		16?: string,
		32?: string,
		64?: string
	};

	declare interface BrowserWindow {
		title: string,
		activate: () => void,
		close: (callback?: () => void) => void,
		tabs: Tab[]
	}

	declare interface SDKURL {
		scheme: string,
		userPass: string,
		host: string,
		port: string,
		path: string,
		hostname: string,
		pathname: string,
		hash: string,
		href: string,
		origin: string,
		protocol: string,
		search: string,
		toString: () => string,
		toJSON: () => string
	}

	declare interface FrameEvent {
		origin: string,
		source: Frame,
		data?: any
	}

	declare interface Frame {
		url: URL,
		postMessage: (message: string, target: string) => void,
		on: (
		event: "attach" | "detach" | "load" | "ready" | "message", handler: (event: FrameEvent) => any
	) => void,
		once: (
		event: "attach" | "detach" | "load" | "ready" | "message", handler: (event: FrameEvent) => any
	) => void,
		removeListener: (
		event: "attach" | "detach" | "load" | "ready" | "message", handler: Function
	) => void,
		off: (
		event: "attach" | "detach" | "load" | "ready" | "message", handler: Function
	) => void,
		destroy: () => void
	}

	declare interface ToggleButtonState {
		id: string,
		label: string,
		badge: string,
		checked: boolean,
		disabled: boolean
	}

	declare interface ToggleButton {
		click: () => void,
		on: (event: "click" | "change", handler: (state: ToggleButtonState) => any) => void,
		once: (event: "click" | "change", handler: (state: ToggleButtonState) => any) => void,
		removeListener: (event: string, handler: Function) => void,
		state: (
		target: "window" | "tab" | Tab | BrowserWindow | ToggleButton, state?: {
		disabled?: boolean,
		label?: string,
		icon?: Icon,
		checked?: boolean,
		badge?: string | number,
		badgeColor?: string
	}
	) => ToggleButtonState,
		destroy: () => void
	}

	declare interface ActionButtonState {
		id: string,
		label: string,
		disabled: boolean,
		icon: FFAddonSDK.Icon,
		badge: string | number,
		badgeColor: string
	}

	declare interface ActionButton {
		state: (
		target: BrowserWindow | Tab | ActionButton | "window" | "tab", state?: {
		disabled?: boolean,
		label?: string,
		icon?: Icon
	}
	) => ActionButtonState,
		click: () => void,
		destroy: () => void,
		on: (event: "click" | "click", handler: (state: ActionButtonState) => any) => void,
		once: (event: "click" | "click", handler: (state: ActionButtonState) => any) => void,
		removeListener: (event: "click" | "click", handler: Function) => void
	}

	declare interface Tab {
		title: string,
		url: string,
		id: string,
		favicon: string,
		contentType: string,
		index: number,
		isPinned: boolean,
		window: BrowserWindow,
		readyState: "uninitialized" | "loading" | "interactive" | "complete",
		on: (
		event: "ready" | "load" | "pageshow" | "activate" | "deactivate" | "close", handler: (tab: Tab) => any
	) => void,
		attach: (
		options: {
		contentScript?: string | string[],
		contentScriptFile?: string | string[],
		contentScriptOptions?: Object,
		onMessage?: (message: string) => any,
		onError?: (error: Error) => any
	}
	) => ContentWorker,
		activate: () => void,
		pin: () => void,
		unpin: () => void,
		close: (afterClose?: () => any) => void,
		reload: () => void,
		getThumbnail: () => string
	}

	declare interface Port {
		emit: (event: string, data?: any) => void,
		on: (event: string, handler: (data?: any) => any) => void
	}

	declare interface ContentWorker {
		new (
		options: {
		window: Window,
		contentScript?: string | string[],
		contentScriptFile?: string | string[],
		onMessage: (data?: any) => any,
		onError: (data?: any) => any
	}
	): ContentWorker,
		url: URL,
		port: Port,
		tab: Tab,
		on: (event: "detach" | "message" | "error", handler: () => any) => void,
		postMessage: (data?: any) => void,
		destroy: () => void
	}

	declare interface Widget {
		
	}

	declare interface NSIException {
		lineNumber: number,
		columnNumber: number,
		data: any,
		filename: string,
		inner?: NSIException,
		location?: any,
		message: string,
		name: string,
		result: any,
		toString: () => string
	}

			
}