

declare module 'sockjs' {
		declare interface SockJSSimpleEvent {
		type: string,
		toString(): string
	}

	declare interface SJSOpenEvent {
		
	}

	declare interface SJSCloseEvent {
		code: number,
		reason: string,
		wasClean: boolean
	}

	declare interface SJSMessageEvent {
		data: string
	}

	declare interface SockJS {
		protocol: string,
		readyState: number,
		onopen: (ev: SJSOpenEvent) => any,
		onmessage: (ev: SJSMessageEvent) => any,
		onclose: (ev: SJSCloseEvent) => any,
		send(data: any): void,
		close(code?: number, reason?: string): void,
		OPEN: number,
		CLOSING: number,
		CONNECTING: number,
		CLOSED: number
	}

			
}