

declare module 'sockjs-client' {
					declare module.exports: undefined


}

declare module 'npm$namespace$___SockJSClient' {
		declare interface BaseEvent {
		type: string
	}

	declare interface OpenEvent {
		
	}

	declare interface CloseEvent {
		code: number,
		reason: string,
		wasClean: boolean
	}

	declare interface MessageEvent {
		data: string
	}

	declare interface SessionGenerator {
		(): string
	}

	declare interface Options {
		server?: string,
		sessionId?: number | SessionGenerator,
		transports?: string | string[]
	}

	declare interface SockJSClass {
		readyState: State,
		protocol: string,
		url: string,
		onopen: (e: OpenEvent) => any,
		onclose: (e: CloseEvent) => any,
		onmessage: (e: MessageEvent) => any,
		send(data: any): void,
		close(code?: number, reason?: string): void
	}

			
}