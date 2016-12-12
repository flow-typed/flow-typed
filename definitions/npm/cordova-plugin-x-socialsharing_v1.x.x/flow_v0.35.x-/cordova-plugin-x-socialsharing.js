

declare module 'cordova-plugin-x-socialsharing' {
		declare interface Plugins {
		socialsharing: SocialSharingPlugin.SocialSharing
	}

			
}

declare module 'SocialSharingPlugin' {
		declare interface ShareOptions {
		message: string,
		subject?: string,
		files?: string | string[],
		url?: string
	}

	declare interface ShareResult {
		completed: boolean,
		app: any
	}

	declare export interface SocialSharing {
		iPadPopupCoordinates: () => string,
		setIPadPopupCoordinates(coords: string): void,
		available(callback: (isAvailable: boolean) => void): void,
		share(
		message: string, subject?: string, fileOrFileArray?: string | string[], url?: string, successCallback?: (succeeded: boolean) => void, errorCallback?: (errormsg: string) => void
	): void,
		shareWithOptions(
		options: ShareOptions, successCallback?: (result: ShareResult) => void, errorCallback?: (errormsg: string) => void
	): void,
		shareViaTwitter(
		message: string, file?: string, url?: string, successCallback?: (succeeded: boolean) => void, errorCallback?: (errormsg: string) => void
	): void,
		shareViaFacebook(
		message: string, fileOrFileArray?: string | string[], url?: string, successCallback?: (succeeded: boolean) => void, errorCallback?: (errormsg: string) => void
	): void,
		shareViaFacebookWithPasteMessageHint(
		message: string, fileOrFileArray: string | string[], url: string, pasteMessageHint: string, successCallback?: (succeeded: boolean) => void, errorCallback?: (errormsg: string) => void
	): void,
		shareViaWhatsApp(
		message: string, fileOrFileArray?: string | string[], url?: string, successCallback?: (succeeded: boolean) => void, errorCallback?: (errormsg: string) => void
	): void,
		shareViaWhatsAppToReceiver(
		receiver: string, message: string, fileOrFileArray?: string | string[], url?: string, successCallback?: (succeeded: boolean) => void, errorCallback?: (errormsg: string) => void
	): void,
		shareViaSMS(
		options: string | {
		message: string,
		subject: string,
		image: string
	}, phonenumbers: string, successCallback?: (succeeded: boolean) => void, errorCallback?: (errormsg: string) => void
	): void,
		shareViaEmail(
		message: string, subject: string, toArray?: string[], ccArray?: string[], bccArray?: string[], fileOrFileArray?: string | string[], successCallback?: (succeeded: boolean) => void, errorCallback?: (errormsg: string) => void
	): void,
		canShareVia(
		via: string, message: string, subject?: string, fileOrFileArray?: string | string[], url?: string, successCallback?: (succeeded: boolean) => void, errorCallback?: (errormsg: string) => void
	): void,
		canShareViaEmail(
		successCallback: (succeeded: boolean) => void, errorCallback: (errormsd: string) => void
	): void,
		shareViaInstagram(
		message: string, fileOrFileArray: string | string[], successCallback?: (succeeded: boolean) => void, errorCallback?: (errormsg: string) => void
	): void,
		shareVia(
		via: string, message: string, subject: string, fileOrFileArray: string | string[], url: string, successCallback: (succeeded: boolean) => void, errorCallback?: (errormsg: string) => void
	): void,
		saveToPhotoAlbum(
		fileOrFileArray: string | string[], successCallback?: (succeeded: boolean) => void, errorCallback?: (errormsg: string) => void
	): void
	}

			
}