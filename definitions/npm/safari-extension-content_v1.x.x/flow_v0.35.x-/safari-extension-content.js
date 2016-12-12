

declare module 'safari-extension-content' {
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

	declare interface SafariExtensionMessageEvent {
		name: string,
		message: any
	}

	declare interface SafariEventListener {
		(event: SafariEvent): any
	}

	declare interface SafariEventTarget {
		addEventListener(type: string, listener: SafariEventListener, useCapture?: boolean): void,
		removeEventListener(type: string, listener: SafariEventListener, useCapture?: boolean): void
	}

	declare interface SafariContentExtension {
		baseURI: string
	}

	declare interface SafariContentWebPage {
		tab: SafariContentBrowserTabProxy
	}

	declare interface SafariContentBrowserTabProxy {
		canLoad(event: any, message: any): any,
		dispatchMessage(name: string, message?: any): void,
		setContextMenuEventUserInfo(event: MouseEvent, userInfo: any): void
	}

	declare interface BeforeLoadEvent {
		url: string
	}

			
}

declare module 'npm$namespace$safari' {
					
}