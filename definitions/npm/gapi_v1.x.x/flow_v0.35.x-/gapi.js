

declare module 'gapi' {
		declare interface GoogleApiOAuth2TokenObject {
		access_token: string,
		error: string,
		expires_in: string,
		state: string
	}

			
}

declare module 'npm$namespace$gapi' {
			declare export function load(object: string, fn: any): any

		
}

declare module 'auth' {
			declare export function authorize(
		params: {
		client_id?: string,
		immediate?: boolean,
		response_type?: string,
		scope?: any,
		authuser?: number
	}, callback: (token: GoogleApiOAuth2TokenObject) => any
	): void

	declare export function init(callback: () => any): void

	declare export function getToken(): GoogleApiOAuth2TokenObject

	declare export function setToken(token: GoogleApiOAuth2TokenObject): void

	declare export function signIn(
		params: {
		clientid?: string,
		cookiepolicy?: string,
		callback?: Function,
		includegrantedscopes?: boolean,
		requestvisibleactions?: any,
		scope?: any,
		apppackagename?: string
	}
	): void

	declare export function signOut(): void

		
}

declare module 'client' {
			declare export function load(name: string, version: string): Promise<void>

	declare export function load(name: string, version: string, callback: () => any, url?: string): void

	declare export function request(
		args: {
		path: string,
		method?: string,
		params?: any,
		headers?: any,
		body?: any,
		callback?: () => any
	}
	): HttpRequest<any>

	declare export function rpcRequest(method: string, version?: string, rpcParams?: any): RpcRequest

	declare export function setApiKey(apiKey: string): void

	declare export class HttpRequest<T>  {
		execute(
		callback: (
		jsonResp: T, rawResp: {
		body: string,
		headers: any[],
		status: number,
		statusText: string
	}
	) => any
	): void;
		then(
		success: (
		response: {
		result: T,
		body: string,
		headers?: any[],
		status?: number,
		statusText?: string
	}
	) => void, failure: (
		response: {
		result: T,
		body: string,
		headers?: any[],
		status?: number,
		statusText?: string
	}
	) => void
	): void
	}

	declare export class HttpBatch  {
		add(
		httpRequest: HttpRequest<any>, opt_params?: {
		id: string,
		callback: (individualResponse: any, rawBatchResponse: any) => any
	}
	): void;
		execute(callback: (responseMap: any, rawBatchResponse: string) => any): void
	}

	declare export class RpcRequest  {
		callback(callback: (jsonResp: any, rawResp: string) => void): void
	}

	
}