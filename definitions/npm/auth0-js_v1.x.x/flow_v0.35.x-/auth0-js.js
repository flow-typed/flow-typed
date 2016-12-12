

declare module 'auth0-js' {
		declare interface Window {
		token: string
	}

	declare interface Auth0Static {
		new (options: Auth0ClientOptions): Auth0Static,
		changePassword(options: any, callback?: Function): void,
		decodeJwt(jwt: string): any,
		login(
		options: any, callback: (
		error?: Auth0Error, profile?: Auth0UserProfile, id_token?: string, access_token?: string, state?: string
	) => any
	): void,
		loginWithPopup(
		options: Auth0LoginOptions, callback: (
		error?: Auth0Error, profile?: Auth0UserProfile, id_token?: string, access_token?: string, state?: string
	) => any
	): void,
		loginWithResourceOwner(
		options: Auth0LoginOptions, callback: (
		error?: Auth0Error, profile?: Auth0UserProfile, id_token?: string, access_token?: string, state?: any
	) => any
	): void,
		loginWithUsernamePassword(
		options: Auth0LoginOptions, callback: (
		error?: Auth0Error, profile?: Auth0UserProfile, id_token?: string, access_token?: string, state?: string
	) => any
	): void,
		logout(query: string): void,
		getConnections(callback?: Function): void,
		refreshToken(
		refreshToken: string, callback: (error?: Auth0Error, delegationResult?: Auth0DelegationToken) => any
	): void,
		getDelegationToken(
		targetClientId: string, id_token: string, options: any, callback: (error?: Auth0Error, delegationResult?: Auth0DelegationToken) => any
	): void,
		getProfile(id_token: string, callback?: Function): Auth0UserProfile,
		getSSOData(withActiveDirectories: any, callback?: Function): void,
		parseHash(hash: string): Auth0DecodedHash,
		signup(options: Auth0SignupOptions, callback: Function): void,
		validateUser(options: any, callback: (error?: Auth0Error, valid?: any) => any): void
	}

	declare interface Auth0ClientOptions {
		clientID: string,
		callbackURL: string,
		callbackOnLocationHash?: boolean,
		domain: string,
		forceJSONP?: boolean
	}

	declare interface Auth0UserProfile {
		email: string,
		email_verified: boolean,
		family_name: string,
		gender: string,
		given_name: string,
		locale: string,
		name: string,
		nickname: string,
		picture: string,
		user_id: string,
		identities: Auth0Identity[],
		user_metadata?: any,
		app_metadata?: any
	}

	declare interface MicrosoftUserProfile {
		emails: string[]
	}

	declare interface Office365UserProfile {
		tenantid: string,
		upn: string
	}

	declare interface AdfsUserProfile {
		issuer: string
	}

	declare interface Auth0Identity {
		access_token: string,
		connection: string,
		isSocial: boolean,
		provider: string,
		user_id: string
	}

	declare interface Auth0DecodedHash {
		access_token: string,
		id_token: string,
		profile: Auth0UserProfile,
		state: any
	}

	declare interface Auth0PopupOptions {
		width: number,
		height: number
	}

	declare interface Auth0LoginOptions {
		auto_login?: boolean,
		connection?: string,
		email?: string,
		username?: string,
		password?: string,
		popup?: boolean,
		popupOptions?: Auth0PopupOptions
	}

	declare interface Auth0SignupOptions {
		auto_login: boolean
	}

	declare interface Auth0Error {
		code: any,
		details: any,
		name: string,
		message: string,
		status: any
	}

	declare interface Auth0DelegationToken {
		expires_in: string,
		id_token: string,
		token_type: string
	}

			declare module.exports: Auth0Static


}