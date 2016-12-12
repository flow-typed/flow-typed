import type { PushNotificationStatic } from 'npm$namespace$PhonegapPluginPush'

declare module 'phonegap-plugin-push' {
		declare interface Window {
		PushNotification: PhonegapPluginPush.PushNotificationStatic
	}

			
}

declare module 'npm$namespace$PhonegapPluginPush' {
	declare type EventResponse = RegistrationEventResponse | NotificationEventResponse | Error;

	declare interface PushNotification {
		on(
		event: "registration", callback: (response: RegistrationEventResponse) => any
	): void,
		on(
		event: "notification", callback: (response: NotificationEventResponse) => any
	): void,
		on(event: "error", callback: (response: Error) => any): void,
		on(event: string, callback: (response: EventResponse) => any): void,
		off(
		event: "registration", callback: (response: RegistrationEventResponse) => any
	): void,
		off(
		event: "notification", callback: (response: NotificationEventResponse) => any
	): void,
		off(event: "error", callback: (response: Error) => any): void,
		off(event: string, callback: (response: EventResponse) => any): void,
		unregister(successHandler: () => any, errorHandler?: () => any, topics?: string[]): void,
		setApplicationIconBadgeNumber(successHandler: () => any, errorHandler: () => any, count: number): void,
		getApplicationIconBadgeNumber(successHandler: (count: number) => any, errorHandler: () => any): void,
		finish(successHandler?: () => any, errorHandler?: () => any, id?: string): void
	}

	declare interface InitOptions {
		android?: {
		senderID: string,
		icon?: string,
		iconColor?: string,
		sound?: boolean,
		vibrate?: boolean,
		clearNotifications?: boolean,
		forceShow?: boolean,
		topics?: string[]
	},
		ios?: {
		badge?: boolean | string,
		sound?: boolean | string,
		alert?: boolean | string,
		clearBadge?: boolean | string,
		categories?: CategoryArray,
		senderID?: string,
		gcmSandbox?: boolean,
		topics?: string[]
	},
		windows?: {
		
	}
	}

	declare interface CategoryArray {
		[name: string]: CategoryAction
	}

	declare interface CategoryAction {
		yes?: CategoryActionData,
		no?: CategoryActionData,
		maybe?: CategoryActionData
	}

	declare interface CategoryActionData {
		callback: string,
		title: string,
		foreground: boolean,
		destructive: boolean
	}

	declare interface RegistrationEventResponse {
		registrationId: string
	}

	declare interface NotificationEventResponse {
		message: string,
		title?: string,
		count: string,
		sound: string,
		image: string,
		additionalData: NotificationEventAdditionalData
	}

	declare interface NotificationEventAdditionalData {
		[name: string]: any,
		foreground?: boolean,
		coldstart?: boolean,
		collapse_key?: string,
		from?: string,
		notId?: string
	}

	declare interface PushNotificationStatic {
		init(options: InitOptions): PushNotification,
		new (options: InitOptions): PushNotification
	}

			
}