import type { AuthenticationContextStatic, Logging } from 'npm$namespace$adal'

declare module 'adal' {
					


}

declare module 'npm$namespace$adal' {
		declare interface Config {
		tenant?: string,
		clientId: string,
		redirectUri?: string,
		cacheLocation?: string,
		displayCall?: (urlNavigate: string) => any,
		correlationId?: string,
		loginResource?: string,
		resource?: string,
		endpoints?: any,
		extraQueryParameter?: string,
		postLogoutRedirectUri?: string
	}

	declare interface User {
		userName: string,
		profile: any
	}

	declare interface RequestInfo {
		valid: boolean,
		parameters: any,
		stateMatch: boolean,
		stateResponse: string,
		requestType: string
	}

	declare interface Logging {
		log: (message: string) => void,
		level: LoggingLevel
	}

	declare interface AuthenticationContextStatic {
		new (config: Config): AuthenticationContext
	}

	declare interface AuthenticationContext {
		instance: string,
		config: Config,
		login(): void,
		loginInProgress(): boolean,
		getCachedToken(resource: string): string,
		getCachedUser(): User,
		registerCallback(
		expectedState: string, resource: string, callback: (message: string, token: string) => any
	): void,
		acquireToken(resource: string, callback: (message: string, token: string) => any): void,
		promptUser(urlNavigate: string): void,
		clearCache(): void,
		clearCacheForResource(resource: string): void,
		logOut(): void,
		getUser(callback: (message: string, user?: User) => any): void,
		isCallback(hash: string): boolean,
		getLoginError(): string,
		getRequestInfo(hash: string): RequestInfo,
		saveTokenFromHash(requestInfo: RequestInfo): void,
		getResourceForEndpoint(endpoint: string): string,
		handleWindowCallback(): void,
		log(level: number, message: string, error: any): void,
		error(message: string, error: any): void,
		warn(message: string): void,
		info(message: string): void,
		verbose(message: string): void
	}

			
}