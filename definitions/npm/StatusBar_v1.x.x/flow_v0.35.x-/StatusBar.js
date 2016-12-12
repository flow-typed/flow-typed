

declare module 'StatusBar' {
		declare interface Window {
		StatusBar: StatusBar
	}

	declare interface StatusBar {
		overlaysWebView: (isOverlay: boolean) => void,
		styleDefault: () => void,
		styleLightContent: () => void,
		styleBlackTranslucent: () => void,
		styleBlackOpaque: () => void,
		backgroundColorByName: (color: string) => void,
		backgroundColorByHexString: (color: string) => void,
		hide: () => void,
		show: () => void,
		isVisible: boolean
	}

			
}