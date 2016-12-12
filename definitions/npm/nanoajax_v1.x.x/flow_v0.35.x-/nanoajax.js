

declare module 'nanoajax' {
		declare interface RequestParameters {
		url: string,
		headers?: {
		[key: string]: string
	},
		body?: string | FormData,
		method?: string,
		cors?: boolean
	}

	declare interface Callback {
		(statusCode: number, response: string, request: XMLHttpRequest): any
	}

	declare export function ajax(params: RequestParameters, callback: Callback): XMLHttpRequest

		
}