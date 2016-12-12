

declare module 'angular-fullscreen' {
					
}

declare module 'fullscreen' {
		declare interface IFullscreen {
		all(): void,
		toggleAll(): void,
		enable(element: Element | HTMLElement): void,
		cancel(): void,
		isEnabled(): boolean,
		isSupported(): boolean
	}

			
}