

declare module 'amplitude-js' {
					
}

declare module 'amplitude' {
		declare interface Config {
		batchEvents?: boolean,
		cookieExpiration?: number,
		cookieName?: string,
		deviceId?: string,
		domain?: string,
		eventUploadPeriodMillis?: number,
		eventUploadThreshold?: number,
		includeReferrer?: boolean,
		includeUtm?: boolean,
		language?: string,
		optOut?: boolean,
		platform?: string,
		saveEvents?: boolean,
		savedMaxCount?: number,
		sessionTimeout?: number,
		uploadBatchSize?: number
	}

	declare export function init(apiKey: string): void

	declare export function init(apiKey: string, userId: string): void

	declare export function init(apiKey: string, userId: string, options: Config): void

	declare export function init(apiKey: string, userId: string, options: Config, callback: () => void): void

	declare export function setVersionName(version: string): void

	declare export function setUserId(userId: string): void

	declare export function setDeviceId(id: string): void

	declare export function regenerateDeviceId(): void

	declare export function identify(identify: Identify): void

	declare export function setUserProperties(properties: Object): void

	declare export function clearUserProperties(): void

	declare export function setOptOut(optOut: boolean): void

	declare export function setGroup(groupType: string, groupName: string | string[]): void

	declare export function logEvent(event: string): void

	declare export function logEvent(event: string, data: Object): void

	declare export function logEvent(
		event: string, data: Object, callback: (httpCode: number, response: any) => void
	): void

	declare export class Identify  {
		set(key: string, value: any): Identify;
		setOnce(key: string, value: any): Identify;
		add(key: string, value: number): Identify;
		append(key: string, value: any): Identify;
		prepend(key: string, value: any): Identify;
		unset(key: string): Identify
	}

	
}