import type { Pebble } from 'npm$namespace$PebbleKit'

declare module 'pebblekitjs' {
					
}

declare module 'npm$namespace$PebbleKit' {
		declare interface Error {
		message: string
	}

	declare interface Event {
		type: string,
		payload?: Object,
		response?: string
	}

	declare interface Layout {
		icon: string,
		subtitleTemplateString: string
	}

	declare interface AppGlanceSlice {
		expirationTime?: string,
		layout: Layout
	}

	declare interface AppMessageData {
		transactionId: string
	}

	declare interface AppMessageEvent {
		data: AppMessageData,
		error?: Error
	}

	declare interface Firmware {
		major: number,
		minor: number,
		patch: number,
		suffix: string
	}

	declare interface WatchInfo {
		platform: string,
		model: string,
		language: string,
		firmware: Firmware
	}

	declare interface Pebble {
		addEventListener(type: string, callback: (e: Event) => void): void,
		on(type: string, callback: (e: Event) => void): void,
		removeEventListener(type: string, callback?: (e: Event) => void): void,
		off(type: string, callback?: (e: Event) => void): void,
		showSimpleNotificationOnPebble(title: string, body: string): void,
		sendAppMessage(
		jsonAppMessage: Object, callbackForAck?: (e: AppMessageEvent) => void, callbackForNack?: (e: AppMessageEvent) => void
	): string,
		getTimelineToken(
		successCallback: (token: string) => void, failureCallback: (error: string) => void
	): void,
		timelineSubscribe(
		topic: string, successCb: () => void, errorCb: (errorString: string) => void
	): void,
		timelineUnsubscribe(
		topic: string, successCb: () => void, errorCb: (errorString: string) => void
	): void,
		timelineSubscriptions(
		successCb: (topics: string[]) => void, errorCb: (errorString: string) => void
	): void,
		getActiveWatchInfo(): WatchInfo,
		getAccountToken(): string,
		getWatchToken(): string,
		appGlanceReload(
		appGlanceSlices: AppGlanceSlice[], onSuccess: (appGlanceSlices: AppGlanceSlice[]) => void, onFailure: (appGlanceSlices: AppGlanceSlice[]) => void
	): void,
		openURL(url: string): void
	}

			
}