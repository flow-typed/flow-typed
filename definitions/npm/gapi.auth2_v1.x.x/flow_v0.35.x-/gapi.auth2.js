

declare module 'gapi.auth2' {
					
}

declare module 'auth2' {
		declare export interface IsSignedIn {
		get(): boolean,
		listen(listener: (signedIn: boolean) => any): void
	}

	declare export interface CurrentUser {
		get(): GoogleUser,
		listen(listener: (user: GoogleUser) => any): void
	}

	declare export interface BasicProfile {
		getId(): string,
		getName(): string,
		getImageUrl(): string,
		getEmail(): string
	}

	declare export interface AuthResponse {
		access_token: string,
		id_token: string,
		login_hint: string,
		scope: string,
		expires_in: string,
		first_issued_at: string,
		expires_at: string
	}

	declare export interface GoogleUser {
		getId(): string,
		isSignedIn(): boolean,
		getHostedDomain(): string,
		getGrantedScopes(): string,
		getBasicProfile(): BasicProfile,
		getAuthResponse(): AuthResponse,
		hasGrantedScopes(scopes: string): boolean,
		signIn(
		options?: {
		app_package_name?: string,
		fetch_basic_profile?: boolean,
		prompt?: boolean,
		scope?: string
	}, optionBuilder?: SigninOptionsBuilder
	): any,
		grant(
		options?: {
		app_package_name?: string,
		fetch_basic_profile?: boolean,
		prompt?: boolean,
		scope?: string
	}, optionBuilder?: SigninOptionsBuilder
	): any,
		grantOfflineAccess(scopes: string): void,
		disconnect(): void
	}

	declare export function init(
		params: {
		client_id?: string,
		cookie_policy?: string,
		scope?: string,
		fetch_basic_profile?: boolean,
		hosted_domain?: string,
		openid_realm?: string
	}
	): GoogleAuth

	declare export function getAuthInstance(): GoogleAuth

	declare export class GoogleAuth  {
		isSignedIn: IsSignedIn;
		currentUser: CurrentUser;
		then(onInit: () => any, onFailure: (reason: string) => any): any;
		signIn(): any;
		signIn(
		options?: {
		app_package_name?: string,
		fetch_basic_profile?: boolean,
		prompt?: boolean,
		scope?: string
	}, optionBuilder?: SigninOptionsBuilder
	): any;
		signOut(): any;
		disconnect(): any;
		grantOfflineAccess(options: {
		scope?: string,
		redirect_uri?: string
	}): any;
		attachClickHandler(
		container: any, options: {
		app_package_name?: string,
		fetch_basic_profile?: boolean,
		prompt?: boolean,
		scope?: string
	}, onsuccess: (googleUser: GoogleUser) => any, onfailure: (reason: string) => any
	): any
	}

	declare export class SigninOptionsBuilder  {
		setAppPackageName(name: string): any;
		setFetchBasicProfile(fetch: boolean): any;
		setPrompt(prompt: string): any;
		setScope(scope: string): any
	}

	
}

declare module 'signin2' {
			declare export function render(
		id: any, options: {
		scope?: string,
		width?: number,
		height?: number,
		longtitle?: boolean,
		theme?: string,
		onsuccess?: any,
		onfailure?: any,
		app_package_name?: string
	}
	): void

		
}