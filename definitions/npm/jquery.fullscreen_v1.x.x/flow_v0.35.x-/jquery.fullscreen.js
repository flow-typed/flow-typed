

declare module 'jquery.fullscreen' {
		declare interface JQuery {
		fullscreen(options?: Object): void
	}

	declare interface JQueryFullscreen {
		open(element: Element, options?: Object): void,
		close(): void,
		isFullScreen(): boolean,
		isNativelySupported(): boolean,
		exit(): void
	}

	declare interface JQueryStatic {
		fullscreen: JQueryFullscreen
	}

			
}