

declare module 'jsf' {
					
}

declare module 'ajax' {
		declare interface RequestData {
		status: string,
		description: string
	}

	declare interface RequestOptions {
		execute?: String,
		render?: String,
		onevent(callback: (data: RequestData) => void): void,
		onerror(callback: (data: RequestData) => void): void,
		params?: any,
		javax.faces.behavior.event?: any
	}

	declare function addOnEvent(callback: (data: RequestData) => void): void

	declare function addOnError(callback: (data: RequestData) => void): void

	declare function request(source: any, event?: String, options?: RequestOptions): void

	declare function response(request: any, context: any): void

		
}