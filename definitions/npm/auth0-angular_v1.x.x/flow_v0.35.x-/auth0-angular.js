

declare module 'auth0-angular' {
					
}

declare module 'angular' {
		declare interface IAuth0ClientOptions {
		loginUrl?: string,
		loginState?: string,
		clientID: string,
		domain: string,
		sso?: boolean
	}

	declare interface ITokenOptions {
		targetClientId?: string,
		api?: string
	}

	declare interface IAuth0Options {
		connection?: string,
		username?: string,
		email?: string
	}

	declare interface ISuccessCallback {
		(profile?: string, idToken?: string, accessToken?: string, state?: string, refreshToken?: string): void
	}

	declare interface IErrorCallback {
		(error: any): void
	}

	declare interface IAuth0Service {
		hookEvents(): void,
		getToken(options?: ITokenOptions): ng.IPromise<any>,
		refreshIdToken(refreshToken: string): ng.IPromise<any>,
		renewIdToken(id_token: string): ng.IPromise<any>,
		signin(
		options?: IAuth0Options, successCallback?: ISuccessCallback, errorCallback?: IErrorCallback
	): void,
		signup(
		options?: IAuth0Options, successCallback?: ISuccessCallback, errorCallback?: IErrorCallback
	): void,
		reset(
		options?: IAuth0Options, successCallback?: ISuccessCallback, errorCallback?: IErrorCallback
	): void,
		validateUser(
		options: IAuth0Options, successCallback?: ISuccessCallback, errorCallback?: IErrorCallback
	): void,
		signout(): void,
		authenticate(
		profile?: any, idToken?: string, accessToken?: string, state?: any, refreshToken?: boolean
	): ng.IPromise<any>,
		getProfile(idToken?: string): ng.IPromise<any>,
		accessToken: string,
		idToken: string,
		profile: any,
		isAuthenticated: boolean,
		config: any
	}

	declare interface IAuth0ServiceProvider {
		init(options: IAuth0ClientOptions): void,
		on(event: string, handler: (...args: any[]) => any): void
	}

			
}