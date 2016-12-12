

declare module 'zeroclipboard-1.x.x' {
		declare interface ZeroClipboardOptions {
		autoActivate?: boolean,
		cacheBust?: boolean,
		debug?: boolean,
		forceHandCursor?: boolean,
		moviePath?: string,
		swfPath?: string,
		trustedDomains?: any,
		title?: string,
		zIndex?: number,
		activeClass?: string,
		hoverClass?: string,
		allowScriptAccess?: string,
		trustedOrigins?: any,
		useNoCache?: boolean
	}

		declare class ZeroClipboard  {
		constructor(elements?: Element | {
		[index: number]: Element
	}, options?: ZeroClipboardOptions): this;
		activate(element: Element): void;
		setText(newText: string): void;
		title(newTitle: string): void;
		setSize(width: number, height: number): void;
		version: string;
		moviePath: string;
		trustedDomains: any;
		text: string;
		hoverClass: string;
		activeClass: string;
		deactivate(): void;
		ready: boolean;
		reposition(): void;
		on(eventName: string, func: (client: ZeroClipboard, args: any) => void): void;
		off(eventName: string, func: (client: ZeroClipboard, args: any) => void): void;
		clip(elements: Element | {
		[index: number]: Element
	}): void;
		unclip(elements: Element | {
		[index: number]: Element
	}): void;
		config(options: ZeroClipboardOptions): void;
		destroy(): void;
		emit(eventName: string, args: any): void
	}

	
}

declare module 'zeroclipboard' {
					declare module.exports: undefined


}