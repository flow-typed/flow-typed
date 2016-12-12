

declare module 'ng-stomp' {
		declare interface ngStomp {
		sock: any,
		stomp: any,
		debug: any,
		off: any,
		setDebug: (callback: Function) => void,
		connect: (endpoint: string, headers?: Headers) => angular.IHttpPromise<any>,
		disconnect: (callback: () => void) => angular.IHttpPromise<any>,
		subscribe: (
		destination: string, callback: (payload: string, headers: Headers, res: Function) => void, headers?: Headers, scope?: any
	) => any,
		unsubscribe: () => any,
		send: (destination: string, body: any, headers: Headers) => any
	}

	declare interface Headers {
		[key: string]: any
	}

			
}