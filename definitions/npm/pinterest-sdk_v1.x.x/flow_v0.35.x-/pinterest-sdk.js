

declare module 'pinterest-sdk' {
					declare module.exports: undefined


}

declare module 'npm$namespace$PDK' {
	declare type OauthSession = {
		accessToken?: string,
		scope?: string,
		error?: string
	};

	declare interface LoginOptions {
		scope: string | OAuthScopes,
		method?: string,
		appId?: string,
		cookie?: boolean,
		logging?: boolean,
		session?: OauthSession
	}

	declare interface OAuthRequestParams {
		accessToken?: string,
		data?: any
	}

	declare interface InitOptions {
		appId?: string,
		cookie?: boolean,
		logging?: boolean,
		session?: OauthSession
	}

	declare export function me(callback: Function): void

	declare export function me(path: string, callback: Function): void

	declare export function me(path: string, params: Object, callback: Function): void

	declare export function request(
		path: string, httpMethod?: string | HttpMethod, params?: OAuthRequestParams, callback?: Function
	): void

	declare export function login(options: LoginOptions, callback: Function): void

	declare export function logout(callback?: (session: OauthSession) => any): void

	declare export function getSession(): OauthSession

	declare export function setSession(session: OauthSession, callback?: (session: OauthSession) => any): void

	declare export function init(options: InitOptions): void

	declare export function pin(imageUrl: string, note: string, url: string, callback: Function): void

		
}