import type { IAngularticsStatic } from 'npm$namespace$angulartics'

declare module 'angulartics' {
					
}

declare module 'npm$namespace$angulartics' {
		declare interface IAngularticsStatic {
		waitForVendorApi(
		objectName: string, delay: number, containsField?: any, registerFn?: any, onTimeout?: boolean
	): void
	}

	declare interface IAnalyticsService {
		eventTrack(eventName: string, properties?: any): any,
		pageTrack(path: string, location?: angular.ILocationService): any,
		setAlias(alias: string): any,
		setUsername(username: string): any,
		setUserProperties(properties: any): any,
		setSuperProperties(properties: any): any
	}

	declare interface IAnalyticsServiceProvider {
		virtualPageviews(value: boolean): void,
		excludeRoutes(value: string[]): void,
		firstPageview(value: boolean): void,
		withBase(value: boolean): void,
		withAutoBase(value: boolean): void,
		developerMode(value: boolean): void,
		registerPageTrack(callback: (path: string, location?: angular.ILocationService) => any): void,
		registerEventTrack(callback: (eventName: string, properties?: any) => any): void,
		registerSetAlias(callback: (alias: string) => any): void,
		registerSetUsername(callback: (username: string) => any): void,
		registerSetUserProperties(callback: (userProperties: any) => any): void,
		registerSetSuperProperties(callback: (superProperties: any) => any): void,
		settings: {
		pageTracking: {
		autoTrackingVirtualPages: boolean,
		autoTrackingFirstPage: boolean,
		basePath: string,
		autoBasePath: boolean
	},
		developerMode: boolean
	}
	}

			
}