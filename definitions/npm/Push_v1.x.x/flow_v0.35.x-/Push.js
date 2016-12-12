

declare module 'Push' {
		declare interface Window {
		plugins: Plugins
	}

	declare interface Plugins {
		pushNotification: PushNotification
	}

	declare interface PushNotification {
		register(
		successCallback: (registrationId: string) => void, errorCallback: (error: any) => void, registrationOptions: RegistrationOptions
	): void,
		unregister(
		successCallback: (result: any) => void, errorCallback: (error: any) => void
	): void,
		setApplicationIconBadgeNumber(
		successCallback: (result: any) => void, errorCallback: (error: any) => void, badgeCount: number
	): void
	}

	declare interface RegistrationOptions {
		senderID?: string,
		channelName?: string,
		ecb?: string,
		badge?: boolean,
		sound?: boolean,
		alert?: boolean
	}

			
}