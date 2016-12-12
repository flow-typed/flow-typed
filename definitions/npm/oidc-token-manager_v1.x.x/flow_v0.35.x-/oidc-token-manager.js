import type { OidcTokenManager_Static, OidcClient_Static } from 'npm$namespace$Oidc'

declare module 'oidc-token-manager' {
					
}

declare module 'npm$namespace$Oidc' {
		declare interface OidcClientSettings {
		request_state_key?: string,
		request_state_store?: any,
		load_user_profile?: boolean,
		filter_protocol_claims?: boolean,
		authority?: string,
		response_type?: string
	}

	declare interface OidcClient_Static {
		new (settings: OidcClientSettings): OidcTokenManager
	}

	declare interface OidcClient {
		isOidc: boolean,
		isOAuth: boolean,
		loadMetadataAsync(): DefaultPromise,
		loadX509SigningKeyAsync(): DefaultPromise,
		loadUserProfile(access_token: string): DefaultPromise,
		loadAuthorizationEndpoint(): void,
		createTokenRequestAsync(): DefaultPromise,
		createLogoutRequestAsync(id_token_hint: string): DefaultPromise,
		validateIdTokenAsync(id_token: string, nonce: string, access_token: string): DefaultPromise,
		validateAccessTokenAsync(id_token_contents: string, access_token: string): DefaultPromise,
		validateIdTokenAndAccessTokenAsync(id_token: string, nonce: string, access_token: string): DefaultPromise,
		processResponseAsync(queryString: string): DefaultPromise
	}

	declare interface OidcTokenManagerSettings {
		load_user_profile?: boolean,
		persist?: boolean,
		store?: Storage,
		persistKey?: string,
		client_id?: string,
		redirect_uri?: string,
		post_logout_redirect_uri?: string,
		response_type?: string,
		scope?: string,
		authority?: string,
		popup_redirect_uri?: string,
		silent_redirect_uri?: string,
		silent_renew?: boolean,
		request_state_store?: Storage,
		request_state_key?: string,
		metadata?: any,
		authorization_endpoint?: string,
		jwks_uri?: string,
		jwks?: any,
		userinfo_endpoint?: string,
		end_session_endpoint?: string
	}

	declare interface PopupSettings {
		features?: string,
		target?: string
	}

	declare interface OidcTokenManager_Static {
		new (settings?: OidcTokenManagerSettings): OidcTokenManager,
		setPromiseFactory(promiseFactory: DefaultPromiseFactory): void,
		setHttpRequest(httpRequest: DefaultHttpRequest): void
	}

	declare interface OidcToken {
		profile: string,
		id_token: string,
		access_token: string,
		expires_at: number,
		scope: string,
		scopes: string[],
		session_state: any,
		expired: boolean,
		expires_in: number,
		toJSON(): string
	}

	declare interface OidcTokenManager {
		profile: any,
		id_token: string,
		access_token: string,
		expired: boolean,
		expires_in: number,
		expires_at: number,
		scope: string,
		scopes: string[],
		session_state: any,
		saveToken(token: OidcToken): void,
		addOnTokenRemoved(cb: () => void): void,
		addOnTokenObtained(cb: () => void): void,
		addOnTokenExpiring(cb: () => void): void,
		addOnTokenExpired(cb: () => void): void,
		addOnSilentTokenRenewFailed(cb: () => void): void,
		removeToken(): void,
		redirectForToken(): DefaultPromise,
		redirectForLogout(): DefaultPromise,
		processTokenCallbackAsync(queryString?: string): DefaultPromise,
		renewTokenSilentAsync(): DefaultPromise,
		processTokenCallbackSilent(hash?: string): void,
		openPopupForTokenAsync(popupSettings?: PopupSettings): DefaultPromise,
		processTokenPopup(hash?: string): void
	}

		declare class DefaultHttpRequest  {
		getJSON(url: string, config: any): DefaultPromise
	}

	declare class DefaultPromise  {
		constructor(promise: any): this;
		then(
		successCallback: (value?: any) => void, errorCallback: (reason?: any) => void
	): DefaultPromise;
		catch(errorCallback: () => void): DefaultPromise
	}

	declare class DefaultPromiseFactory  {
		resolve(value: any): DefaultPromise;
		reject(reason: any): DefaultPromise;
		create(callback: any): DefaultPromise
	}

	
}