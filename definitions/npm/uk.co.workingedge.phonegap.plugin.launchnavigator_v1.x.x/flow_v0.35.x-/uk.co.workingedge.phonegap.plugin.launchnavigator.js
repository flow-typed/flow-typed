

declare module 'uk.co.workingedge.phonegap.plugin.launchnavigator' {
		declare interface Window {
		LaunchNavigator(): LaunchNavigator
	}

	declare interface LaunchNavigatorOptions {
		successCallback?: Function,
		errorCallback?: (error: string) => void,
		app?: string,
		destinationName?: string,
		start?: string | number[],
		startName?: string,
		transportMode?: string,
		enableDebug?: boolean,
		extras?: any,
		launchMode?: string,
		appSelectionDialogHeader?: string,
		appSelectionCancelButton?: string,
		appSelectionList?: string[],
		appSelectionCallback?: (app: string) => void
	}

	declare interface LaunchNavigator {
		PLATFORM: any,
		APP: any,
		TRANSPORT_MODE: any,
		LAUNCH_MODE: any,
		navigate: (destination: string | number[], options?: LaunchNavigatorOptions) => void,
		logEvent: (name: string, params?: any, valueToSum?: number) => void,
		isAppAvailable: (
		app: string, successCallback: (isAvailable: boolean) => void, errorCallback?: (error: string) => void
	) => void,
		availableApps: (
		successCallback: (apps: any) => void, errorCallback?: (error: string) => void
	) => void,
		getAppDisplayName: (app: string) => string,
		getAppsForPlatform: (platform: string) => string[],
		supportsTransportMode: (app: string, platform: string) => boolean,
		getTransportModes: (app: string, platform: string) => string[],
		supportsLaunchMode: (app: string, platform: string) => boolean,
		supportsStart: (app: string, platform: string) => boolean,
		supportsStartName: (app: string, platform: string) => boolean,
		supportsDestName: (app: string, platform: string) => boolean,
		userSelect: (destination: string | number[], options: LaunchNavigatorOptions) => void
	}

			
}