

declare module 'amplify-deferred' {
		declare interface amplifyRequestSettings {
		resourceId: string,
		data?: any,
		success?: (...args: any[]) => void,
		error?: (...args: any[]) => void
	}

	declare interface amplifyDecoder {
		(data?: any, status?: string, xhr?: JQueryXHR, success?: (...args: any[]) => void, error?: (...args: any[]) => void): void
	}

	declare interface amplifyDecoders {
		[decoderName: string]: amplifyDecoder,
		jsSend: amplifyDecoder
	}

	declare interface amplifyAjaxSettings {
		cache?: any,
		dataMap?: {
		
	} | ((data: any) => {
		
	}),
		decoder?: any
	}

	declare interface amplifyRequest {
		(resourceId: string, hash?: any, callback?: Function): JQueryPromise<any>,
		(settings: amplifyRequestSettings): JQueryPromise<any>,
		define(resourceId: string, requestType: string, settings?: amplifyAjaxSettings): void,
		define(resourceId: string, resource: (settings: amplifyRequestSettings) => void): void,
		decoders: amplifyDecoders,
		cache: any
	}

	declare interface amplifySubscribe {
		(topic: string, callback: Function): void,
		(topic: string, context: any, callback: Function, priority?: number): void,
		(topic: string, callback: Function, priority?: number): void
	}

	declare interface amplifyStorageTypeStore {
		(key: string, value: any, options?: any): void,
		(key: string): any,
		(): any
	}

	declare interface amplifyStore {
		localStorage: amplifyStorageTypeStore,
		sessionStorage: amplifyStorageTypeStore,
		globalStorage: amplifyStorageTypeStore,
		userData: amplifyStorageTypeStore,
		memory: amplifyStorageTypeStore
	}

	declare interface amplifyStatic {
		subscribe: amplifySubscribe,
		unsubscribe(topic: string, callback: Function): void,
		publish(topic: string, ...args: any[]): boolean,
		store: amplifyStore,
		request: amplifyRequest
	}

			
}