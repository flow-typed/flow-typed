

declare module 'google-apps-script.url-fetch' {
					
}

declare module 'URL_Fetch' {
		declare export interface HTTPResponse {
		getAllHeaders(): Object,
		getAs(contentType: string): Base.Blob,
		getBlob(): Base.Blob,
		getContent(): Byte[],
		getContentText(): string,
		getContentText(charset: string): string,
		getHeaders(): Object,
		getResponseCode(): Integer
	}

	declare export interface OAuthConfig {
		getAccessTokenUrl(): string,
		getAuthorizationUrl(): string,
		getMethod(): string,
		getParamLocation(): string,
		getRequestTokenUrl(): string,
		getServiceName(): string,
		setAccessTokenUrl(url: string): void,
		setAuthorizationUrl(url: string): void,
		setConsumerKey(consumerKey: string): void,
		setConsumerSecret(consumerSecret: string): void,
		setMethod(method: string): void,
		setParamLocation(location: string): void,
		setRequestTokenUrl(url: string): void
	}

	declare export interface UrlFetchApp {
		fetch(url: string): HTTPResponse,
		fetch(url: string, params: Object): HTTPResponse,
		getRequest(url: string): Object,
		getRequest(url: string, params: Object): Object,
		addOAuthService(serviceName: string): OAuthConfig,
		removeOAuthService(serviceName: string): void
	}

			
}