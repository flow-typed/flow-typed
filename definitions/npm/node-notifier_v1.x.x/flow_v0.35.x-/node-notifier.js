

declare module 'node-notifier' {
					declare module.exports: NodeNotifier


}

declare module 'nodeNotifier' {
		declare interface NodeNotifier {
		notify(notification?: Notification, callback?: NotificationCallback): NodeNotifier,
		NotificationCenter: NotificationCenter,
		NotifySend: NotifySend,
		WindowsToaster: WindowsToaster,
		WindowsBalloon: WindowsBalloon,
		Growl: Growl
	}

	declare interface Notification {
		title?: string,
		message?: string,
		icon?: string,
		sound?: boolean,
		wait?: boolean
	}

	declare interface NotificationCallback {
		(err: any, response: any): any
	}

	declare interface Option {
		withFallback?: boolean,
		customPath?: string
	}

			
}

declare module 'node-notifier/notifiers/notificationcenter' {
				declare class NotificationCenter  {
		constructor(option?: notifier.Option): this;
		notify(
		notification?: NotificationCenter.Notification, callback?: notifier.NotificationCallback
	): NotificationCenter
	}

	declare module.exports: undefined


}

declare module 'NotificationCenter' {
		declare interface Notification {
		subtitle?: string,
		contentImage?: string,
		open?: string
	}

			
}

declare module 'node-notifier/notifiers/notifysend' {
				declare class NotifySend  {
		constructor(option?: notifier.Option): this;
		notify(
		notification?: NotifySend.Notification, callback?: notifier.NotificationCallback
	): NotifySend
	}

	declare module.exports: undefined


}

declare module 'NotifySend' {
		declare interface Notification {
		title?: string,
		message?: string,
		icon?: string,
		urgency?: string,
		time?: number,
		category?: string,
		hint?: string
	}

			
}

declare module 'node-notifier/notifiers/toaster' {
				declare class WindowsToaster  {
		constructor(option?: notifier.Option): this;
		notify(
		notification?: notifier.Notification, callback?: notifier.NotificationCallback
	): WindowsToaster
	}

	declare module.exports: undefined


}

declare module 'node-notifier/notifiers/growl' {
				declare class Growl  {
		constructor(option?: Growl.Option): this;
		notify(
		notification?: Growl.Notification, callback?: notifier.NotificationCallback
	): Growl
	}

	declare module.exports: undefined


}

declare module 'Growl' {
		declare interface Option {
		name?: string,
		host?: string,
		port?: number
	}

	declare interface Notification {
		title?: string,
		message?: string,
		icon?: string,
		wait?: boolean,
		sticky?: boolean,
		label: string,
		priority: number
	}

			
}

declare module 'node-notifier/notifiers/balloon' {
				declare class WindowsBalloon  {
		constructor(option?: notifier.Option): this;
		notify(
		notification?: WindowsBalloon.Notification, callback?: notifier.NotificationCallback
	): WindowsBalloon
	}

	declare module.exports: undefined


}

declare module 'WindowsBalloon' {
		declare interface Notification {
		title?: string,
		message?: string,
		sound?: boolean,
		time?: number,
		wait?: boolean
	}

			
}