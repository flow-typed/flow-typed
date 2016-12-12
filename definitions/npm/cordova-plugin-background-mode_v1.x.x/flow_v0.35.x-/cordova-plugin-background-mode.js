

declare module 'cordova-plugin-background-mode' {
		declare interface CordovaPluginBackgroundMode {
		enable(): void,
		disable(): void,
		isEnabled(): boolean,
		isActivated(): boolean,
		onactivate(): void,
		ondeactivate(): void,
		onfailure(callback: (errorCode: number) => void): void,
		setDefaults(item: ICordovaPluginBackgroundModeNotificationItem): void,
		configure(item: ICordovaPluginBackgroundModeNotificationItem): void
	}

	declare interface ICordovaPluginBackgroundModeNotificationItem {
		title?: string,
		ticker?: string,
		text?: string,
		resume?: boolean,
		silent?: boolean
	}

	declare interface CordovaPlugins {
		backgroundMode: CordovaPluginBackgroundMode
	}

			
}