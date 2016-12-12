

declare module 'adal-angular' {
					
}

declare module 'npm$namespace$adal' {
		declare interface AdalAuthenticationServiceProvider {
		init(configOptions: Config, httpProvider: angular.IHttpProvider): void
	}

	declare interface UserInfo {
		isAuthenticated: boolean,
		userName: string,
		loginError: string,
		profile: any
	}

	declare interface AdalAuthenticationService {
		config: Config,
		userInfo: UserInfo,
		login(): void,
		loginInProgress(): boolean,
		logOut(): void,
		getCachedToken(resource: string): string,
		acquireToken(resource: string): angular.IPromise<string>,
		getUser(): angular.IPromise<User>,
		getResourceForEndpoint(endpoint: string): string,
		clearCache(): void,
		clearCacheForResource(resource: string): void,
		info(message: string): void,
		verbose(message: string): void
	}

			
}