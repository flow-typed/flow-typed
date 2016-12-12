import type { UrbanAirshipStatic } from 'npm$namespace$UrbanAirshipPlugin'

declare module 'urbanairship-cordova' {
		declare interface Document {
		addEventListener(
		type: "urbanairship.push", listener: (ev: UrbanAirshipPlugin.PushEvent) => void, useCapture?: boolean
	): void,
		addEventListener(
		type: "urbanairship.registration", listener: (ev: UrbanAirshipPlugin.RegistrationEvent) => void, useCapture?: boolean
	): void
	}

			
}

declare module 'npm$namespace$UrbanAirshipPlugin' {
		declare interface UrbanAirshipStatic {
		notificationType: {
		none: number,
		badge: number,
		sound: number,
		alert: number
	},
		setUserNotificationsEnabled(enabled: boolean, callback: (status: string) => void): void,
		isUserNotificationsEnabled(callback: (enabled: boolean) => void): void,
		getChannelID(callback: (id: string) => void): void,
		getLaunchNotification(clear: boolean, callback: (push: UrbanAirshipPlugin.PushEvent) => void): void,
		setQuietTimeEnabled(enabled: boolean, callback: () => void): void,
		isQuietTimeEnabled(callback: (enabled: boolean) => void): void,
		setQuietTime(
		startHour: number, startMinute: number, endHour: number, endMinute: number, callback: () => void
	): void,
		getQuietTime(callback: (quietTime: UrbanAirshipPlugin.QuietTimeTimeSpan) => void): void,
		isInQuietTime(callback: (inQuietTime: boolean) => void): void,
		setNotificationTypes(bitmask: number, callback: () => void): void,
		setAutobadgeEnabled(enabled: boolean, callback: () => void): void,
		setBadgeNumber(badge: number, callback: () => void): void,
		getBadgeNumber(callback: (badgeNumber: number) => void): void,
		resetBadge(callback: () => void): void,
		clearNotifications(callback: () => void): void,
		setSoundEnabled(enabled: boolean, callback: () => void): void,
		isSoundEnabled(callback: (enabled: boolean) => void): void,
		setVibrateEnabled(enabled: boolean, callback: () => void): void,
		isVibrateEnabled(callback: (enabled: boolean) => void): void,
		setTags(tags: string[], callback: () => void): void,
		getTags(callback: (tags: string[]) => void): void,
		setAlias(alias: string, callback: () => void): void,
		getAlias(callback: (alias: string) => void): void,
		setNamedUser(namedUserId: string, callback: () => void): void,
		getNamedUser(callback: (namedUserId: string) => void): void,
		editNamedUserTagGroups(): UrbanAirshipPlugin.EditNamedUserTagGroupsApi,
		editChannelTagGroups(): UrbanAirshipPlugin.EditChannelTagGroupsApi,
		setAnalyticsEnabled(enabled: boolean, callback: () => void): void,
		isAnalyticsEnabled(callback: (enabled: boolean) => void): void,
		runAction(
		actionName: string, actionValue: string, callback: (result: UrbanAirshipPlugin.RunActionResult) => void
	): void,
		setLocationEnabled(enabled: boolean, callback: () => void): void,
		isLocationEnabled(callback: (enabled: boolean) => void): void,
		setBackgroundLocationEnabled(enabled: boolean, callback: () => void): void,
		isBackgroundLocationEnabled(callback: () => void): void,
		recordCurrentLocation(callback: () => void): void
	}

	declare interface EditNamedUserTagGroupsApi {
		addTags: (tagGroup: string, tags: string[]) => EditNamedUserTagGroupsApi,
		removeTags: (tagGroup: string, tags: string[]) => EditNamedUserTagGroupsApi,
		apply: (callback?: () => void) => void
	}

	declare interface EditChannelTagGroupsApi {
		addTags: (tagGroup: string, tags: string[]) => EditChannelTagGroupsApi,
		removeTags: (tagGroup: string, tags: string[]) => EditChannelTagGroupsApi,
		apply: (callback?: () => void) => void
	}

	declare interface PushEvent {
		message: string,
		extras: {
		[key: string]: any
	}
	}

	declare interface RegistrationEvent {
		error: string,
		channelID: string,
		deviceToken: string
	}

	declare interface QuietTimeTimeSpan {
		startHour: number,
		startMinute: number,
		endHour: number,
		endMinute: number
	}

	declare interface RunActionResult {
		error: string,
		value: any
	}

			
}