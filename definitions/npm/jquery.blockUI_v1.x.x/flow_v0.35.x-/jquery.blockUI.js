

declare module 'jquery.blockUI' {
		declare interface JQBlockUIOptions {
		message?: any,
		title?: string,
		draggable?: boolean,
		theme?: boolean,
		css?: any,
		themedCSS?: any,
		overlayCSS?: any,
		cursorReset?: string,
		growlCSS?: any,
		iframeSrc?: string,
		forceIframe?: boolean,
		baseZ?: number,
		centerX?: boolean,
		centerY?: boolean,
		allowBodyStretch?: boolean,
		bindEvents?: boolean,
		constrainTabKey?: boolean,
		fadeIn?: number,
		fadeOut?: number,
		timeout?: number,
		showOverlay?: boolean,
		focusInput?: boolean,
		onBlock?: () => void,
		onUnblock?: (element: any, options: any) => void,
		quirksmodeOffsetHack?: number,
		blockMsgClass?: string,
		ignoreIfBlocked?: boolean
	}

	declare interface JQBlockUIStatic {
		defaults?: JQBlockUIOptions,
		(): void,
		(option: JQBlockUIOptions): void
	}

	declare interface JQueryStatic {
		blockUI?: JQBlockUIStatic,
		unblockUI?: JQBlockUIStatic
	}

	declare interface JQuery {
		block(option?: JQBlockUIOptions): JQuery,
		unblock(option?: JQBlockUIOptions): JQuery
	}

			
}