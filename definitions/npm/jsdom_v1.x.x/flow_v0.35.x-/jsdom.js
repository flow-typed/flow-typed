

declare module 'jsdom' {
		declare export interface VirtualConsole {
		sendTo(console: Console): VirtualConsole
	}

	declare export interface VirtualConsoleOptions {
		
	}

	declare export interface WindowProperties {
		parsingMode?: string,
		contentType?: string,
		parser?: any,
		url?: string,
		referrer?: string,
		cookieJar?: CookieJar,
		cookie?: string,
		resourceLoader?: any,
		deferClose?: boolean,
		concurrentNodeIterators?: number,
		virtualConsole?: VirtualConsole,
		created?: (something: any, window: Window) => any,
		features?: FeatureOptions,
		top?: Window
	}

	declare export interface CookieJar {
		
	}

	declare export interface DocumentWithParentWindow {
		parentWindow: Window
	}

	declare export interface Callback {
		(errors: Error[], window: Window): any
	}

	declare export interface FeatureOptions {
		FetchExternalResources?: string[] | boolean,
		ProcessExternalResources?: string[] | boolean,
		SkipExternalResources?: string | boolean
	}

	declare export interface EnvDocument {
		referrer?: string,
		cookie?: string,
		cookieDomain?: string
	}

	declare export interface Config {
		html?: string,
		file?: string,
		url?: string,
		scripts?: string[],
		src?: string[],
		jar?: CookieJar,
		parsingMode?: string,
		document?: EnvDocument,
		features?: FeatureOptions,
		virtualConsole?: VirtualConsole,
		done?: Callback,
		loaded?: Callback,
		created?: (error: Error, window: Window) => void
	}

	declare export function env(urlOrHtml: string, scripts: string, config: Config, callback?: Callback): void

	declare export function env(urlOrHtml: string, scripts: string, callback: Callback): void

	declare export function env(
		urlOrHtml: string, scripts: string[], config: Config, callback?: Callback
	): void

	declare export function env(urlOrHtml: string, scripts: string[], callback: Callback): void

	declare export function env(urlOrHtml: string, callback: Callback): void

	declare export function env(urlOrHtml: string, config: Config, callback?: Callback): void

	declare export function env(config: Config, callback?: Callback): void

	declare export function serializeDocument(doc: Document): string

	declare export function createVirtualConsole(options?: VirtualConsoleOptions): VirtualConsole

	declare export function getVirtualConsole(window: Window): VirtualConsole

	declare export function createCookieJar(): CookieJar

	declare export function nodeLocation(node: Node): any

	declare export function reconfigureWindow(window: Window, newProps: WindowProperties): void

	declare export function changeURL(window: Window, url: string): void

	declare export function jQueryify(
		window: Window, jqueryUrl: string, callback: (window: Window, jquery: JQuery) => any
	): void

	declare export function jsdom(markup: string, config?: Config): DocumentWithParentWindow

		
}