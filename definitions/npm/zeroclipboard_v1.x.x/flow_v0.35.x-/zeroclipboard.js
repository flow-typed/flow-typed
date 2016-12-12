import type { ZeroClipboardStatic } from 'npm$namespace$ZC'

declare module 'zeroclipboard' {
					declare module.exports: ZeroClipboardStatic


}

declare module 'npm$namespace$ZC' {
	declare type EventListenerOrEventListenerObject<T> = EventListener<T> | EventListenerObject<T>;

	declare interface List<T> {
		[index: number]: T,
		length: number
	}

	declare interface Dictionary<T> {
		[key: string]: T
	}

	declare interface EventListener<T> {
		(ev: T): void
	}

	declare interface EventListenerObject<T> {
		handleEvent(ev: T): void
	}

	declare export interface ZeroClipboardStatic {
		new (elements?: Element | List<Element>): ZeroClipboardClient,
		version: string,
		config(): ZeroClipboardConfig,
		config(propName: string): any,
		config(propName: "swfPath"): string,
		config(propName: "trustedDomains"): string[],
		config(propName: "cacheBust"): boolean,
		config(propName: "forceEnhancedClipboard"): boolean,
		config(propName: "flashLoadTimeout"): number,
		config(propName: "autoActivate"): boolean,
		config(propName: "bubbleEvents"): boolean,
		config(propName: "fixLineEndings"): boolean,
		config(propName: "containerId"): string,
		config(propName: "containerClass"): string,
		config(propName: "swfObjectId"): string,
		config(propName: "hoverClass"): string,
		config(propName: "activeClass"): string,
		config(propName: "forceHandCursor"): boolean,
		config(propName: "title"): string,
		config(propName: "zIndex"): number,
		config(config: ZeroClipboardConfig): ZeroClipboardConfig,
		create(): void,
		destroy(): void,
		focus(element: Element): void,
		activate(element: Element): void,
		blur(): void,
		deactivate(): void,
		activeElement(): HTMLElement,
		state(): Object,
		isFlashUnusable(): boolean
	}

	declare interface ZeroClipboardClient {
		id: string,
		destroy(): void,
		setText(data: string): void,
		setHtml(data: string): void,
		setRichText(data: string): void,
		clip(elements: List<Element>): ZeroClipboardClient,
		clip(element: Element): ZeroClipboardClient,
		unclip(elements: List<Element>): ZeroClipboardClient,
		unclip(elements?: Element): ZeroClipboardClient,
		elements(): HTMLElement[]
	}

	declare interface ZeroClipboardEvent {
		client?: ZeroClipboardClient,
		type: string,
		target: HTMLElement,
		relatedTarget: HTMLElement,
		currentTarget: HTMLObjectElement,
		timeStamp: number
	}

	declare interface ZeroClipboardReadyEvent {
		message: string,
		version: string
	}

	declare interface ZeroClipboardBeforeCopyEvent {
		
	}

	declare interface ZeroClipboardCopyEvent {
		clipboardData: {
		setData(format: string, data: string): void,
		setData(data: Dictionary<string>): void,
		clearData(mimeType?: string): void
	}
	}

	declare interface ZeroClipboardAfterCopyEvent {
		success: Dictionary<boolean>,
		data: Dictionary<string>,
		errors: any[]
	}

	declare interface ZeroClipboardDestroyEvent {
		success: Dictionary<boolean>,
		data: Dictionary<string>
	}

	declare interface ZeroClipboardErrorEvent {
		name: string,
		message: string,
		minimumVersion?: string,
		version?: string,
		jsVersion?: string,
		swfVersion?: string,
		property?: string,
		configuredValue?: string,
		actualValue?: string,
		data?: Dictionary<string>,
		errors?: any[]
	}

	declare interface ZeroClipboardCommon {
		setData(format: string, data: string): void,
		setData(data: Dictionary<string>): void,
		clearData(mimeType: string): void,
		clearData(): void,
		getData(format: string): string,
		getData(): Dictionary<string>,
		on(
		eventType: string, listener: EventListenerOrEventListenerObject<ZeroClipboardEvent>
	): void,
		on(
		eventType: "ready", listener: EventListenerOrEventListenerObject<ZeroClipboardReadyEvent>
	): void,
		on(
		eventType: "beforecopy", listener: EventListenerOrEventListenerObject<ZeroClipboardBeforeCopyEvent>
	): void,
		on(
		eventType: "copy", listener: EventListenerOrEventListenerObject<ZeroClipboardCopyEvent>
	): void,
		on(
		eventType: "aftercopy", listener: EventListenerOrEventListenerObject<ZeroClipboardAfterCopyEvent>
	): void,
		on(
		eventType: "destroy", listener: EventListenerOrEventListenerObject<ZeroClipboardDestroyEvent>
	): void,
		on(
		eventType: "error", listener: EventListenerOrEventListenerObject<ZeroClipboardErrorEvent>
	): void,
		on(
		listenerObj: {
		ready?: EventListenerOrEventListenerObject<ZeroClipboardReadyEvent>,
		beforecopy?: EventListenerOrEventListenerObject<ZeroClipboardBeforeCopyEvent>,
		copy?: EventListenerOrEventListenerObject<ZeroClipboardCopyEvent>,
		aftercopy?: EventListenerOrEventListenerObject<ZeroClipboardAfterCopyEvent>,
		destroy?: EventListenerOrEventListenerObject<ZeroClipboardDestroyEvent>,
		error?: EventListenerOrEventListenerObject<ZeroClipboardErrorEvent>
	}
	): void,
		off(
		eventType: string, listener: EventListenerOrEventListenerObject<ZeroClipboardEvent>
	): void,
		off(
		eventType: "ready", listener: EventListenerOrEventListenerObject<ZeroClipboardReadyEvent>
	): void,
		off(
		eventType: "beforecopy", listener: EventListenerOrEventListenerObject<ZeroClipboardBeforeCopyEvent>
	): void,
		off(
		eventType: "copy", listener: EventListenerOrEventListenerObject<ZeroClipboardCopyEvent>
	): void,
		off(
		eventType: "aftercopy", listener: EventListenerOrEventListenerObject<ZeroClipboardAfterCopyEvent>
	): void,
		off(
		eventType: "destroy", listener: EventListenerOrEventListenerObject<ZeroClipboardDestroyEvent>
	): void,
		off(
		eventType: "error", listener: EventListenerOrEventListenerObject<ZeroClipboardErrorEvent>
	): void,
		off(
		listenerObj: {
		ready?: EventListenerOrEventListenerObject<ZeroClipboardReadyEvent>,
		beforecopy?: EventListenerOrEventListenerObject<ZeroClipboardBeforeCopyEvent>,
		copy?: EventListenerOrEventListenerObject<ZeroClipboardCopyEvent>,
		aftercopy?: EventListenerOrEventListenerObject<ZeroClipboardAfterCopyEvent>,
		destroy?: EventListenerOrEventListenerObject<ZeroClipboardDestroyEvent>,
		error?: EventListenerOrEventListenerObject<ZeroClipboardErrorEvent>
	}
	): void,
		off(): void,
		emit(eventType: string): any,
		emit(eventType: "ready"): void,
		emit(eventType: "beforecopy"): void,
		emit(eventType: "copy"): any,
		emit(eventType: "aftercopy"): void,
		emit(eventType: "destroy"): void,
		emit(eventType: "error"): void,
		emit(data: {
		type: string,
		name: string
	}): any,
		handlers(eventType: string): EventListenerOrEventListenerObject<ZeroClipboardEvent>[],
		handlers(
		eventType: "ready"
	): EventListenerOrEventListenerObject<ZeroClipboardReadyEvent>[],
		handlers(
		eventType: "beforecopy"
	): EventListenerOrEventListenerObject<ZeroClipboardBeforeCopyEvent>[],
		handlers(
		eventType: "copy"
	): EventListenerOrEventListenerObject<ZeroClipboardCopyEvent>[],
		handlers(
		eventType: "aftercopy"
	): EventListenerOrEventListenerObject<ZeroClipboardAfterCopyEvent>[],
		handlers(
		eventType: "destroy"
	): EventListenerOrEventListenerObject<ZeroClipboardDestroyEvent>[],
		handlers(
		eventType: "error"
	): EventListenerOrEventListenerObject<ZeroClipboardErrorEvent>[],
		handlers(
		
	): {
		ready?: EventListenerOrEventListenerObject<ZeroClipboardReadyEvent>[],
		beforecopy?: EventListenerOrEventListenerObject<ZeroClipboardBeforeCopyEvent>[],
		copy?: EventListenerOrEventListenerObject<ZeroClipboardCopyEvent>[],
		aftercopy?: EventListenerOrEventListenerObject<ZeroClipboardAfterCopyEvent>[],
		destroy?: EventListenerOrEventListenerObject<ZeroClipboardDestroyEvent>[],
		error?: EventListenerOrEventListenerObject<ZeroClipboardErrorEvent>[]
	}
	}

	declare interface ZeroClipboardConfig {
		swfPath?: string,
		trustedDomains?: string[],
		cacheBust?: boolean,
		forceEnhancedClipboard?: boolean,
		flashLoadTimeout?: number,
		autoActivate?: boolean,
		bubbleEvents?: boolean,
		fixLineEndings?: boolean,
		containerId?: string,
		containerClass?: string,
		swfObjectId?: string,
		hoverClass?: string,
		activeClass?: string,
		forceHandCursor?: boolean,
		title?: string,
		zIndex?: number
	}

			
}