

declare module 'screenfull' {
		declare interface IScreenfullRaw {
		requestFullscreen?: string,
		exitFullscreen?: string,
		fullscreenElement?: string,
		fullscreenEnabled?: string,
		fullscreenchange?: string,
		fullscreenerror?: string
	}

	declare interface IScreenfull {
		isFullscreen: boolean,
		element: Element,
		enabled: boolean,
		raw: IScreenfullRaw,
		request(elem?: Element): void,
		toggle(elem?: Element): void,
		exit(): void
	}

			
}