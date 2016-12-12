

declare module 'NetworkInformation' {
		declare interface Navigator {
		connection: Connection,
		network: {
		connection: Connection
	}
	}

	declare interface Document {
		addEventListener(type: "online", connectionStateCallback: () => any, useCapture?: boolean): void,
		addEventListener(
		type: "offline", connectionStateCallback: () => any, useCapture?: boolean
	): void
	}

	declare interface Connection {
		type: string,
		addEventListener(
		type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean
	): void,
		removeEventListener(
		type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean
	): void
	}

			
}