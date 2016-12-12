

declare module 'InAppBrowser' {
		declare interface Window {
		open(url: string, target?: "_self", options?: string): InAppBrowser,
		open(url: string, target?: "_blank", options?: string): InAppBrowser,
		open(url: string, target?: "_system", options?: string): InAppBrowser,
		open(
		url: string, target?: string, options?: string, replace?: boolean
	): InAppBrowser
	}

	declare interface InAppBrowser {
		onloadstart: (type: InAppBrowserEvent) => void,
		onloadstop: (type: InAppBrowserEvent) => void,
		onloaderror: (type: InAppBrowserEvent) => void,
		onexit: (type: InAppBrowserEvent) => void,
		addEventListener(type: "loadstart", callback: (event: InAppBrowserEvent) => void): void,
		addEventListener(type: "loadstop", callback: (event: InAppBrowserEvent) => void): void,
		addEventListener(type: "loaderror", callback: (event: InAppBrowserEvent) => void): void,
		addEventListener(type: "exit", callback: (event: InAppBrowserEvent) => void): void,
		addEventListener(type: string, callback: (event: Event) => void): void,
		removeEventListener(type: "loadstart", callback: (event: InAppBrowserEvent) => void): void,
		removeEventListener(type: "loadstop", callback: (event: InAppBrowserEvent) => void): void,
		removeEventListener(type: "loaderror", callback: (event: InAppBrowserEvent) => void): void,
		removeEventListener(type: "exit", callback: (event: InAppBrowserEvent) => void): void,
		removeEventListener(type: string, callback: (event: Event) => void): void,
		close(): void,
		show(): void,
		executeScript(script: {
		code: string
	}, callback: (result: any) => void): void,
		executeScript(script: {
		file: string
	}, callback: (result: any) => void): void,
		insertCSS(css: {
		code: string
	}, callback: () => void): void,
		insertCSS(css: {
		file: string
	}, callback: () => void): void
	}

	declare interface InAppBrowserEvent {
		type: string,
		url: string,
		code: number,
		message: string
	}

			
}