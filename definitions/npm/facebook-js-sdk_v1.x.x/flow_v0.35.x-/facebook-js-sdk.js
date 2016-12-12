

declare module 'facebook-js-sdk' {
					
}

declare module 'npm$namespace$facebook' {
		declare interface FacebookStatic {
		api: any,
		AppEvents: any,
		Canvas: any,
		Event: any,
		getAuthResponse(callback: (response: AuthResponse) => void): void,
		getLoginStatus(callback: (response: AuthResponse) => void, roundtrip?: boolean): void,
		init(params: InitParams): void,
		login(callback: (response: AuthResponse) => void, options?: LoginOptions): void,
		logout(callback: (response: AuthResponse) => void): void,
		ui: any,
		XFBML: any
	}

	declare interface InitParams {
		appId: string,
		version?: string,
		cookie?: boolean,
		status?: boolean,
		xfbml?: boolean,
		frictionlessRequests?: boolean,
		hideFlashCallback?: boolean
	}

	declare interface LoginOptions {
		auth_type?: string,
		scope?: string,
		return_scopes?: boolean,
		enable_profile_selector?: boolean,
		profile_selector_ids?: string
	}

	declare interface AuthResponse {
		status: string,
		authResponse: {
		accessToken: string,
		expiresIn: number,
		signedRequest: string,
		userID: string
	}
	}

			
}