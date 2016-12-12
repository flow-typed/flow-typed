

declare module 'jquery.window' {
		declare interface JQuery {
		window(options: JQueryWindow.WindowOptions): JQueryWindow.Window
	}

	declare interface JQueryStatic {
		window: JQueryWindow.Static
	}

			
}

declare module 'npm$namespace$JQueryWindow' {
		declare interface Window {
		getWindowId(): string,
		getCaller(): JQuery,
		getContainer(): JQuery,
		getHeader(): JQuery,
		getFrame(): JQuery,
		getFooter(): JQuery,
		alignCenter(): void,
		alignHorizontalCenter(): void,
		alignVerticalCenter(): void,
		select(): void,
		unselect(): void,
		move(x: number, y: number, bShift: boolean): void,
		resize(width: number, height: number): void,
		maximize(): void,
		minimize(): void,
		restore(): void,
		close(quiet: boolean): void,
		hide(): void,
		show(): void,
		setTitle(title: string): void,
		setUrl(url: string): void,
		setContent(content: string | JQuery | HTMLElement): void,
		setFooterContent(content: string | JQuery | HTMLElement): void,
		getTitle(): string,
		getUrl(): string,
		getContent(): string,
		getFooterContent(): string,
		isMaximized(): boolean,
		isMinimized(): boolean,
		isSelected(): boolean,
		setIcon(iconUrl: string): void,
		showIcon(): void,
		hideIcon(): void
	}

	declare interface Static {
		(options: WindowOptions): JQueryWindow.Window,
		prepare(options?: StaticOptions): void,
		closeAll(quiet?: boolean): void,
		hideAll(): void,
		showAll(): void,
		getAll(): Array<JQueryWindow.Window>,
		getWindow(windowId: string): JQueryWindow.Window,
		getSelectedWindow(): JQueryWindow.Window
	}

	declare interface StaticOptions {
		dock?: string,
		dockArea?: JQuery | HTMLElement,
		animationSpeed?: number,
		minWinNarrow?: number,
		minWinLong?: number,
		handleScrollbar?: boolean,
		showLog?: boolean
	}

	declare interface WindowOptions {
		icon?: string,
		title: string,
		url?: string,
		content?: string | JQuery | HTMLElement,
		footerContent?: string | JQuery | HTMLElement,
		containerClass?: string,
		headerClass?: string,
		frameClass?: string,
		footerClass?: string,
		selectedHeaderClass?: string,
		x?: number,
		y?: number,
		z?: number,
		width?: number,
		height?: number,
		minWidth?: number,
		minHeight?: number,
		maxWidth?: number,
		maxHeight?: number,
		showModal?: boolean,
		modalOpacity?: number,
		showFooter?: boolean,
		showRoundCorner?: boolean,
		closable?: boolean,
		minimizable?: boolean,
		maximizable?: boolean,
		bookmarkable?: boolean,
		draggable?: boolean,
		resizable?: boolean,
		scrollable?: boolean,
		checkBoundary?: boolean,
		withinBrowserWindow?: boolean,
		custBtns?: Array<JQueryWindow.Button>,
		onOpen?: (wnd: JQueryWindow.Window) => void,
		onShow?: (wnd: JQueryWindow.Window) => void,
		onClose?: (wnd: JQueryWindow.Window) => void,
		onSelect?: (wnd: JQueryWindow.Window) => void,
		onUnselect?: (wnd: JQueryWindow.Window) => void,
		onDrag?: (wnd: JQueryWindow.Window) => void,
		afterDrag?: (wnd: JQueryWindow.Window) => void,
		onResize?: (wnd: JQueryWindow.Window) => void,
		afterResize?: (wnd: JQueryWindow.Window) => void,
		onMinimize?: (wnd: JQueryWindow.Window) => void,
		afterMinimize?: (wnd: JQueryWindow.Window) => void,
		onMaximize?: (wnd: JQueryWindow.Window) => void,
		afterMaximize?: (wnd: JQueryWindow.Window) => void,
		onCascade?: (wnd: JQueryWindow.Window) => void,
		afterCascade?: (wnd: JQueryWindow.Window) => void,
		onIframeStart?: (wnd: JQueryWindow.Window) => void,
		onIframeEnd?: (wnd: JQueryWindow.Window) => void,
		iframeRedirectCheckMsg?: string,
		createRandomOffset?: {
		x: number,
		y: number
	}
	}

	declare interface Button {
		id: string,
		title?: string,
		clazz?: string,
		style?: string,
		image: string,
		callback: (btn: JQueryWindow.Button, wnd: JQueryWindow.Window) => void
	}

			
}