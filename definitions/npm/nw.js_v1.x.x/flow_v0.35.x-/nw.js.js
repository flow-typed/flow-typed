import type { App, Clipboard, Screen, Shell, Window } from 'npm$namespace$nw'

declare module 'nw.js' {
					
}

declare module 'NWJS_Helpers' {
		declare interface clip {
		set(data: string, type?: string, raw?: boolean): void,
		get(type?: string, raw?: boolean): string,
		readAvailableTypes(): string[],
		clear(): void
	}

	declare interface MenuOption {
		type: string
	}

	declare interface CreateMacBuiltinOption {
		hideEdit?: boolean,
		hideWindow?: boolean
	}

	declare interface MenuItemOption {
		label?: string,
		icon?: string,
		tooltip?: string,
		type?: string | "normal" | "checkbox" | "separator",
		click?: Function,
		enabled?: boolean,
		checked?: boolean,
		submenu?: nw.Menu,
		key?: string,
		modifiers?: string
	}

	declare interface screen {
		id: number,
		bounds: {
		x: number,
		y: number,
		width: number,
		height: number
	},
		work_area: {
		x: number,
		y: number,
		width: number,
		height: number
	},
		scaleFactor: number,
		isBuiltIn: boolean,
		rotation: number,
		touchSupport: number
	}

	declare interface DesktopCaptureMonitor {
		started: boolean,
		start(should_include_screens: boolean, should_include_windows: boolean): void,
		stop(): void,
		registerStream(id: string): void,
		on(event: string, listener: Function): this,
		on(
		event: "added", listener: (
		id?: string, name?: string, order?: number, type?: string, primary?: boolean
	) => any
	): this,
		on(event: "removed", listener: (order?: number) => any): this,
		on(
		event: "orderchanged", listener: (id?: string, new_order?: number, old_order?: number) => any
	): this,
		on(event: "namechanged", listener: (id?: string, name?: string) => any): this,
		on(
		event: "thumbnailchanged", listener: (id?: string, thumbnail?: string) => any
	): this
	}

	declare interface ShortcutOption {
		active: Function,
		failed: (msg?: string) => any,
		key: string
	}

	declare interface TrayOption {
		title?: string,
		tooltip?: string,
		icon?: string,
		alticon?: string,
		iconsAreTemplates?: boolean,
		menu?: nw.Menu
	}

	declare interface PrintOption {
		printer: string,
		pdf_path: string,
		headerFooterEnabled: boolean,
		landscape: boolean,
		mediaSize: JSON,
		shouldPrintBackgrounds: boolean
	}

	declare interface CapturePageConfig {
		format?: string,
		datatype?: string
	}

	declare interface Cookies {
		get(details: CookiesGetDetails, callback: (cookie?: Cookie) => void): void,
		getAll(details: CookiesGetAllDetails, callback: (cookies?: Cookie[]) => void): void,
		set(details: CookiesSetDetails, callback: (cookie?: Cookie) => void): void,
		remove(
		details: CookiesRemoveDetails, callback: (details?: CookiesRemovedDetails) => void
	): void,
		onChanged: {
		addListener(callback: (changeInfo: CookiesOnChangedCallbackChangeInfo) => void): void
	}
	}

	declare interface Cookie {
		name: string,
		value: string,
		domain: string,
		hostOnly: boolean,
		path: string,
		secure: boolean,
		httpOnly: boolean,
		sameSite: string | "no_restriction" | "lax" | "strict",
		session: boolean,
		expirationDate?: number,
		storeId: string
	}

	declare interface CookiesGetDetails {
		url: string,
		name: string,
		storeId: string
	}

	declare interface CookiesGetAllDetails {
		url?: string,
		name?: string,
		domain?: string,
		path?: string,
		secure?: boolean,
		session: boolean,
		storeId?: string
	}

	declare interface CookiesSetDetails {
		url: string,
		name?: string,
		value?: string,
		domain?: string,
		path?: string,
		secure?: boolean,
		httpOnly?: boolean,
		sameSite?: string | "no_restriction" | "lax" | "strict",
		expirationDate?: number,
		storeId?: string
	}

	declare interface CookiesRemoveDetails {
		url: string,
		name: string,
		storeId: string
	}

	declare interface CookiesRemovedDetails {
		url: string,
		name: string,
		storeId: string
	}

	declare interface CookiesOnChangedCallbackChangeInfo {
		removed: boolean,
		cookie: Cookie,
		cause: string | "evicted" | "expired" | "explicit" | "expired_overwrite" | "overwrite"
	}

	declare interface WinPolicy {
		ignore(): void,
		forceCurrent(): void,
		forceDownload(): void,
		forceNewWindow(): void,
		forceNewPopup(): void,
		setNewWindowManifest(m: WindowOption): void
	}

	declare interface WindowOption {
		id?: string,
		title?: string,
		width?: number,
		height?: number,
		icon?: string,
		position?: string,
		min_width?: number,
		min_height?: number,
		max_width?: number,
		max_height?: number,
		as_desktop?: boolean,
		resizable?: boolean,
		always_on_top?: boolean,
		visible_on_all_workspaces?: boolean,
		fullscreen?: boolean,
		show_in_taskbar?: boolean,
		frame?: boolean,
		show?: boolean,
		kiosk?: boolean,
		transparent?: boolean
	}

	declare interface WindowOpenOption {
		new_instance?: boolean,
		inject_js_start?: string,
		inject_js_end?: string,
		id?: string
	}

	declare interface WinNavigationPolicy {
		ignore(): void
	}

	declare interface win {
		window: Object,
		x: number,
		y: number,
		width: number,
		height: number,
		title: string,
		menu: nw.Menu,
		isFullscreen: boolean,
		isTransparent: boolean,
		isKioskMode: boolean,
		zoomLevel: number,
		cookies: Cookies,
		moveTo(x: number, y: number): void,
		moveBy(x: number, y: number): void,
		resizeTo(width: number, height: number): void,
		resizeBy(width: number, height: number): void,
		focus(): void,
		blur(): void,
		show(is_show?: boolean): void,
		hide(): void,
		close(force?: boolean): void,
		reload(): void,
		reloadDev(): void,
		reloadIgnoringCache(): void,
		maximize(): void,
		minimize(): void,
		restore(): void,
		enterFullscreen(): void,
		leaveFullscreen(): void,
		toggleFullscreen(): void,
		enterKioskMode(): void,
		leaveKioskMode(): void,
		toggleKioskMode(): void,
		showDevTools(
		iframe?: string | HTMLIFrameElement, callback?: (dev_win?: Window) => void
	): void,
		closeDevTools(): void,
		getPrinters(callback: (printers?: JSON[]) => void): void,
		isDevToolsOpen(): boolean,
		print(options: JSON | PrintOption): void,
		setMaximumSize(width: number, height: number): void,
		setMinimumSize(width: number, height: number): void,
		setResizable(resizable: boolean): void,
		setAlwaysOnTop(top: boolean): void,
		setVisibleOnAllWorkspaces(visible: boolean): void,
		canSetVisibleOnAllWorkspaces(): boolean,
		setPosition(position: string): void,
		setShowInTaskbar(show: boolean): void,
		requestAttention(attension: boolean | number): void,
		capturePage(
		callback: (arg: string | Object) => void, config?: string | CapturePageConfig
	): void,
		setProgressBar(progress: number): void,
		setBadgeLabel(label: string): void,
		eval(frame: HTMLIFrameElement, script: string): void,
		evalNWBin(frame: HTMLIFrameElement, path: string): void,
		on(event: string, listener: Function): this,
		on(event: "close", listener: (byCommandQ?: string | any) => any): this,
		on(event: "closed", listener: () => any): this,
		on(event: "loading", listener: () => any): this,
		on(event: "loaded", listener: () => any): this,
		on(
		event: "document-start", listener: (frame: HTMLIFrameElement | any) => any
	): this,
		on(event: "document-end", listener: (frame: HTMLIFrameElement | any) => any): this,
		on(event: "focus", listener: () => any): this,
		on(event: "blur", listener: () => any): this,
		on(event: "minimize", listener: () => any): this,
		on(event: "restore", listener: () => any): this,
		on(event: "maximize", listener: () => any): this,
		on(event: "move", listener: (x?: number, y?: number) => any): this,
		on(event: "resize", listener: (width?: number, height?: number) => any): this,
		on(event: "enter-fullscreen", listener: () => any): this,
		on(event: "zoom", listener: (zoom?: number) => any): this,
		on(event: "devtools-closed", listener: () => any): this,
		on(
		event: "new-win-policy", listener: (frame?: HTMLIFrameElement | any, url?: string, policy?: WinPolicy) => any
	): this,
		on(
		event: "navigation", listener: (
		frame?: HTMLIFrameElement | any, url?: string, policy?: WinNavigationPolicy
	) => any
	): this
	}

		declare class EventEmitter extends NodeJS$EventEmitter {
		EventEmitter: EventEmitter;
		listenerCount(emitter: EventEmitter, event: string): number;
		defaultMaxListeners: number;
		addListener(event: string, listener: Function): this;
		on(event: string, listener: Function): this;
		once(event: string, listener: Function): this;
		removeListener(event: string, listener: Function): this;
		removeAllListeners(event?: string): this;
		setMaxListeners(n: number): this;
		getMaxListeners(): number;
		listeners(event: string): Function[];
		emit(event: string, ...args: any[]): boolean;
		listenerCount(type: string): number
	}

	
}

declare module 'npm$namespace$nw' {
		declare export interface App {
		argv: string[],
		fullArgv: string[],
		filteredArgv: Object[],
		dataPath: string,
		manifest: JSON,
		clearCache(): void,
		closeAllWindows(): void,
		crashBrowser(): void,
		crashRenderer(): void,
		getProxyForURL(url: string): string,
		setProxyConfig(config: string): void,
		quit(): void,
		addOriginAccessWhitelistEntry(
		sourceOrigin: string, destinationProtocol: string, destinationHost: string, allowDestinationSubdomains: boolean
	): void,
		removeOriginAccessWhitelistEntry(
		sourceOrigin: string, destinationProtocol: string, destinationHost: string, allowDestinationSubdomains: boolean
	): void,
		registerGlobalHotKey(shortcut: Shortcut): void,
		unregisterGlobalHotKey(shortcut: Shortcut): void,
		on(event: string, listener: Function): this,
		on(event: "open", listener: (args?: string) => any): this,
		on(event: "reopen", listener: () => any): this
	}

	declare export interface Clipboard {
		get(): NWJS_Helpers.clip
	}

	declare interface Screen {
		Init(): void,
		screens: NWJS_Helpers.screen[],
		chooseDesktopMedia(sources: string[], callback: (streamId?: string | boolean) => void): void,
		DesktopCaptureMonitor: NWJS_Helpers.DesktopCaptureMonitor,
		on(event: string, listener: Function): this,
		on(
		event: "displayBoundsChanged", listener: (screen: NWJS_Helpers.screen) => any
	): this,
		on(event: "displayAdded ", listener: (screen: NWJS_Helpers.screen) => any): this,
		on(event: "displayRemoved ", listener: (screen: NWJS_Helpers.screen) => any): this
	}

	declare interface Shell {
		openExternal(uri: string): void,
		openItem(file_path: string): void,
		showItemInFolder(file_path: string): void
	}

	declare interface Window {
		get(window_object?: Object): NWJS_Helpers.win,
		open(
		url: string, option?: NWJS_Helpers.WindowOpenOption, callback?: (new_win?: NWJS_Helpers.win) => void
	): void
	}

		declare class Menu  {
		constructor(option?: NWJS_Helpers.MenuOption): this;
		items: MenuItem[];
		append(item: MenuItem): void;
		insert(item: MenuItem, i: number): void;
		remove(item: MenuItem): void;
		removeAt(i: number): void;
		popup(x: number, y: number): void;
		createMacBuiltin(appname: string, options?: NWJS_Helpers.CreateMacBuiltinOption): void
	}

	declare class MenuItem extends NWJS_Helpers$EventEmitter {
		constructor(option: NWJS_Helpers.MenuItemOption): this;
		type: string;
		lable: string;
		icon: string;
		iconIsTemplate: boolean;
		tooltip: boolean;
		checked: boolean;
		enabled: string;
		submenu: Menu;
		click: Function;
		key: string;
		modifiers: string;
		on(event: string, listener: Function): this;
		on(event: "click", listener: () => any): this
	}

	declare export class Shortcut extends NWJS_Helpers$EventEmitter {
		constructor(option: NWJS_Helpers.ShortcutOption): this;
		active: Function;
		failed: (msg?: string) => any;
		key: string;
		on(event: string, listener: Function): this;
		on(event: "active", listener: () => any): this;
		on(event: "failed", listener: (msg?: string) => any): this
	}

	declare export class Tray extends NWJS_Helpers$EventEmitter {
		constructor(option: NWJS_Helpers.TrayOption): this;
		title: string;
		tooltip: string;
		icon: string;
		alticon: string;
		iconsAreTemplates: boolean;
		menu: Menu;
		remove(): void;
		on(event: string, listener: Function): this;
		on(event: "click ", listener: () => any): this
	}

	
}

declare module 'nw.gui' {
				declare export class Menu extends nw$Menu {
		
	}

	declare export class MenuItem extends nw$MenuItem {
		
	}

	declare export class Shortcut extends nw$Shortcut {
		
	}

	declare export class Tray extends nw$Tray {
		
	}

	
}