

declare module 'restler' {
		declare interface RestlerStatic {
		del(url: string, options?: Object): RestlerResult,
		get(url: string, options?: RestlerOptions): RestlerResult,
		head(url: string, options?: RestlerOptions): RestlerResult,
		json(
		url: string, data?: any, options?: RestlerOptions, method?: string
	): RestlerResult,
		patch(url: string, options?: RestlerOptions): RestlerResult,
		patchJson(url: string, data?: any, options?: RestlerOptions): RestlerResult,
		post(url: string, options?: RestlerOptions): RestlerResult,
		postJson(url: string, data?: any, options?: RestlerOptions): RestlerResult,
		put(url: string, options?: RestlerOptions): RestlerResult,
		putJson(url: string, data?: any, options?: RestlerOptions): RestlerResult,
		service(url: string, options?: RestlerOptions): RestlerResult
	}

	declare interface RestlerOptionsHeader {
		[headerName: string]: string
	}

	declare interface RestlerOptions {
		accessToken?: string,
		agent?: any,
		client?: any,
		data?: any,
		decoding?: string,
		encoding?: string,
		followRedirects?: boolean,
		headers?: RestlerOptionsHeader,
		method?: string,
		multipart?: boolean,
		parser?: any,
		password?: string,
		query?: any,
		rejectUnauthorized?: boolean,
		timeout?: number,
		username?: string,
		xml2js?: any
	}

	declare interface RestlerResult {
		on(
		eventName: string, listener: (data?: any, response?: http.ServerResponse) => void
	): RestlerResult
	}

			declare module.exports: RestlerStatic


}