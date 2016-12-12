import type { FacebookConnectPluginStatic } from 'npm$namespace$PhonegapFacebookPlugin'

declare module 'phonegap-facebook-plugin' {
					
}

declare module 'npm$namespace$PhonegapFacebookPlugin' {
		declare interface FacebookConnectPluginStatic {
		api: (
		graphPath: string, permissions: string[], successCallback?: (result: any) => void, failureCallback?: (error: string) => void
	) => void,
		getAccessToken: (
		successCallback?: (token: string) => void, failureCallback?: (error: string) => void
	) => void,
		getLoginStatus: (
		successCallback?: (status: LoginResult) => void, failureCallback?: (error: string) => void
	) => void,
		logEvent: (
		name: string, params?: any, valueToSum?: number, successCallback?: () => void, failureCallback?: (error: string) => void
	) => void,
		logPurchase: (
		value: number, currency: string, successCallback?: () => void, failureCallback?: (error: string) => void
	) => void,
		login: (
		permissions: string[], successCallback?: (result: LoginResult) => void, failureCallback?: (error: string) => void
	) => void,
		logout: (
		successCallback?: () => void, failureCallback?: (error: string) => void
	) => void,
		showDialog: (
		options: BaseDialogOptions, successCallback?: (status: BaseDialogResult) => void, failureCallback?: (error: string) => void
	) => void
	}

	declare interface BaseDialogOptions {
		method: string
	}

	declare interface FeedDialogOptions {
		from?: string,
		to?: string,
		link?: string,
		picture?: string,
		source?: string,
		name?: string,
		caption?: string,
		description?: string,
		ref?: string
	}

	declare interface SendDialogOptions {
		to: string,
		link: string
	}

	declare interface ShareDialogOptions {
		href: string
	}

	declare interface ShareOpenGraphDialogOptions {
		action_type: string,
		action_properties: string
	}

	declare interface LoginResult {
		authResponse: {
		accessToken: string,
		expiresIn: string,
		secret: string,
		session_key: boolean,
		sig: string,
		userID: string
	},
		status: string
	}

	declare interface BaseDialogResult {
		error_code: string,
		error_message: string
	}

	declare interface FeedDialogResult {
		post_id: string
	}

	declare interface SendDialogResult {
		
	}

	declare interface ShareDialogResult {
		post_id: string
	}

			
}