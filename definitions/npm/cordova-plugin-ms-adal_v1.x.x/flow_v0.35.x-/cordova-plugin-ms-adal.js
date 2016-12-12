

declare module 'cordova-plugin-ms-adal' {
					
}

declare module 'ADAL' {
		declare interface UserInfo {
		displayableId: string,
		userId: string,
		familyName: string,
		givenName: string,
		identityProvider: string,
		passwordChangeUrl: string,
		passwordExpiresOn: Date,
		uniqueId: string
	}

	declare interface TokenCacheItem {
		accessToken: string,
		authority: string,
		clientId: string,
		displayableId: string,
		expiresOn: Date,
		isMultipleResourceRefreshToken: boolean,
		resource: string,
		tenantId: string,
		userInfo: UserInfo
	}

	declare interface Promise {
		then(doneCallBack: () => any, failCallBack?: (message: string) => any): any
	}

	declare interface PromiseTokenCacheItems {
		then(
		doneCallBack: (tokenCacheItems: TokenCacheItem[]) => any, failCallBack?: (message: string) => any
	): any
	}

	declare interface PromiseAuthenticationResult {
		then(
		doneCallBack: (context: AuthenticationResult) => any, failCallBack?: (message: string) => any
	): any
	}

	declare interface PromiseAuthenticationContext {
		then(
		doneCallBack: (context: AuthenticationContext) => any, failCallBack?: (message: string) => any
	): any
	}

		declare class TokenCache  {
		contextAuthority: string;
		clear(): Promise;
		readItems(): PromiseTokenCacheItems;
		deleteItem(item: TokenCacheItem): Promise
	}

	declare class AuthenticationResult  {
		accessToken: string;
		accessTokenType: string;
		expiresOn: Date;
		idToken: string;
		isMultipleResourceRefreshToken: boolean;
		status: string;
		statusCode: string;
		tenantId: string;
		userInfo: UserInfo;
		createAuthorizationHeader(): string
	}

	declare class AuthenticationContext  {
		authority: string;
		validateAuthority: boolean;
		tokenCache: TokenCache;
		constructor(authority: string, validateAuthority?: boolean): this;
		createAsync(authority: string, validateAuthority?: boolean): PromiseAuthenticationContext;
		acquireTokenAsync(
		resourceUrl: string, clientId: string, redirectUrl: string, userId?: string, extraQueryParameters?: string
	): PromiseAuthenticationResult;
		acquireTokenSilentAsync(
		resourceUrl: string, clientId: string, userId: string
	): PromiseAuthenticationResult
	}

	
}