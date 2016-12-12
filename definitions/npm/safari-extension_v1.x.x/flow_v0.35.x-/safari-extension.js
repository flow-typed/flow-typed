

declare module 'safari-extension' {
		declare interface Window {
		safari: typeof safari
	}

	declare interface SafariEvent {
		type: string,
		target: SafariEventTarget,
		currentTarget: SafariEventTarget,
		timestamp: number,
		eventPhase: number,
		bubbles: boolean,
		cancelable: boolean,
		defaultPrevented: boolean,
		stopPropagation(): void,
		preventDefault(): void
	}

	declare interface SafariEventListener {
		(event: SafariEvent): any
	}

	declare interface SafariEventTarget {
		addEventListener(type: string, listener: SafariEventListener, useCapture?: boolean): void,
		removeEventListener(type: string, listener: SafariEventListener, useCapture?: boolean): void
	}

	declare interface SafariBrowserWindow {
		tabs: Array<SafariBrowserTab>,
		visible: boolean,
		activeTab: SafariBrowserTab,
		activate(): void,
		close(): void,
		openTab(visibility?: string, index?: number): SafariBrowserTab,
		insertTab(tab: SafariBrowserTab, index: number): SafariBrowserTab
	}

	declare interface SafariBrowserTab {
		browserWindow: SafariBrowserWindow,
		reader: SafariReader,
		title: string,
		page: SafariWebPageProxy,
		url: string,
		visibleContentsAsDataURL(): string,
		activate(): void,
		close(): void
	}

	declare interface SafariReader {
		available: boolean,
		tab: SafariBrowserTab,
		visible: boolean,
		enter(): void,
		exit(): void,
		dispatchMessage(name: string, message?: any): void
	}

	declare interface SafariWebPageProxy {
		dispatchMessage(name: string, message?: any): void
	}

	declare interface SafariExtensionGlobalPage {
		contentWindow: Window
	}

	declare interface SafariExtensionPopover {
		identifier: string,
		visible: boolean,
		contentWindow: Window,
		height: number,
		width: number,
		hide(): void
	}

	declare interface SafariExtensionMenu {
		identifier: string,
		menuItems: Array<SafariExtensionMenuItem>,
		visible: boolean,
		appendMenuItem(identifier: string, title: string, command?: string): SafariExtensionMenuItem,
		appendSeparator(identifier: string): SafariExtensionMenuItem,
		insertMenuItem(
		index: number, identifier: string, title: string, command?: string
	): SafariExtensionMenuItem,
		insertSeparator(index: number, identifier: string): SafariExtensionMenuItem,
		removeMenuItem(index: number): void
	}

	declare interface SafariExtensionMenuItem {
		command: string,
		identifier: string,
		separator: boolean,
		title: string,
		image: string,
		submenu: SafariExtensionMenu,
		visible: boolean,
		disabled: boolean,
		checkedState: number
	}

	declare interface SafariExtensionSettings {
		[index: string]: any,
		[index: number]: any,
		getItem(key: string): any,
		setItem(key: string, value: any): void,
		removeItem(key: string): void,
		clear(): void
	}

	declare interface SafariExtensionSecureSettings {
		[index: string]: any,
		getItem(key: string): any,
		setItem(key: string, value: any): void,
		removeItem(key: string): void,
		clear(): void
	}

	declare interface SafariExtensionBar {
		identifier: string,
		label: string,
		visible: boolean,
		browserWindow: SafariBrowserWindow,
		contentWindow: Window,
		hide(doNotRemember?: boolean): void,
		show(doNotRemember?: boolean): void
	}

	declare interface SafariExtensionToolbarItem {
		badge: number,
		image: string,
		label: string,
		paletteLabel: string,
		toolTip: string,
		menu: SafariExtensionMenu,
		popover: SafariExtensionPopover,
		browserWindow: SafariBrowserWindow,
		command: string,
		disabled: boolean,
		identifier: string,
		showMenu(): void,
		showPopover(): void,
		validate(): void
	}

	declare interface SafariPrivateBrowsing {
		enabled: boolean
	}

	declare interface SafariExtension {
		bars: Array<SafariExtensionBar>,
		baseURI: string,
		globalPage: SafariExtensionGlobalPage,
		toolbarItems: Array<SafariExtensionToolbarItem>,
		displayVersion: string,
		bundleVersion: string,
		menus: Array<SafariExtensionMenu>,
		createMenu(identifier: string): SafariExtensionMenu,
		removeMenu(identifier: string): void,
		popovers: Array<SafariExtensionPopover>,
		createPopover(
		identifier: string, url: string, width?: number, height?: number
	): SafariExtensionPopover,
		removePopover(identifier: string): void,
		addContentScript(
		source: string, whitelist: Array<string>, blacklist: Array<string>, runAtEnd: boolean
	): string,
		addContentScriptFromURL(
		url: string, whitelist: Array<string>, blacklist: Array<string>, runAtEnd: boolean
	): string,
		addContentStyleSheet(source: string, whitelist: Array<string>, blacklist: Array<string>): string,
		addContentStyleSheetFromURL(url: string, whitelist: Array<string>, blacklist: Array<string>): string,
		removeContentScript(url: string): void,
		removeContentScripts(): void,
		removeContentStyleSheet(url: string): void,
		removeContentStyleSheets(): void,
		settings: SafariExtensionSettings,
		secureSettings: SafariExtensionSecureSettings
	}

	declare interface SafariApplication {
		activeBrowserWindow: SafariBrowserWindow,
		browserWindows: Array<SafariBrowserWindow>,
		privateBrowsing: SafariPrivateBrowsing,
		openBrowserWindow(): SafariBrowserWindow
	}

	declare interface SafariExtensionContextMenuEvent {
		target: SafariExtensionContextMenuItem,
		currentTarget: SafariExtensionContextMenuItem,
		userInfo: any,
		contextMenu: SafariExtensionContextMenu
	}

	declare interface SafariExtensionContextMenu {
		contextMenuItems: any[],
		appendContextMenuItem(
		identifier: string, title: string, command?: string
	): SafariExtensionContextMenuItem,
		insertContextMenuItem(
		index: number, identifier: string, title: string, command?: string
	): SafariExtensionContextMenuItem
	}

	declare interface SafariExtensionContextMenuItem {
		command: string,
		disabled: boolean,
		identifier: string,
		title: string
	}

	declare interface SafariValidateEvent {
		command: string
	}

	declare interface SafariExtensionContextMenuItemValidateEvent {
		target: SafariExtensionContextMenuItem,
		currentTarget: SafariExtensionContextMenuItem,
		userInfo: any
	}

	declare interface SafariCommandEvent {
		command: string
	}

	declare interface SafariExtensionContextMenuItemCommandEvent {
		target: SafariExtensionContextMenuItem,
		currentTarget: SafariExtensionContextMenuItem,
		userInfo: any
	}

	declare interface SafariExtensionSettingsChangeEvent {
		target: SafariExtensionSettings | SafariExtensionSecureSettings,
		currentTarget: SafariExtensionSettings | SafariExtensionSecureSettings,
		key: string,
		oldValue: any,
		newValue: any
	}

	declare interface SafariExtensionMessageEvent {
		name: string,
		message: any
	}

			
}

declare module 'npm$namespace$safari' {
					
}