

declare module 'clipboard' {
		declare interface ClipboardOptions {
		action?: (elem: Element) => string,
		target?: (elem: Element) => Element,
		text?: (elem: Element) => string
	}

	declare interface ClipboardEvent {
		action: string,
		text: string,
		trigger: Element,
		clearSelection(): void
	}

		declare class Clipboard  {
		constructor(selector: (string | Element | NodeListOf<Element>), options?: ClipboardOptions): this;
		on(type: "success", handler: (e: ClipboardEvent) => void): this;
		on(type: "error", handler: (e: ClipboardEvent) => void): this;
		on(type: string, handler: (e: ClipboardEvent) => void): this;
		destroy(): void
	}

	declare module.exports: undefined


}