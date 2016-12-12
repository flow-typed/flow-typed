import type { Static } from 'npm$namespace$Qwest'

declare module 'qwest' {
					declare module.exports: Static


}

declare module 'npm$namespace$Qwest' {
		declare interface Static {
		base: string,
		xhr2: boolean,
		limit(by: number): void,
		setDefaultXdrResponseType(type: string): void,
		before(callback: () => any): Static,
		get(url: string, data?: any, options?: Options): Promise,
		post(url: string, data?: any, options?: Options): Promise,
		put(url: string, data?: any, options?: Options): Promise,
		delete(url: string, data?: any, options?: Options): Promise
	}

	declare interface Promise {
		then(callback: (xhr: any, response?: any) => any): Promise,
		catch(callback: (e: any, xhr?: any, response?: any) => any): Promise,
		complete(callback: () => any): Promise
	}

	declare interface Options {
		dataType?: string,
		responseType?: string,
		cache?: boolean,
		async?: boolean,
		user?: string,
		password?: string,
		headers?: {
		[key: string]: any
	},
		withCredentials?: boolean,
		timeout?: number,
		attempts?: number
	}

			
}