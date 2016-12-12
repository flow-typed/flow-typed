

declare module 'intercom' {
		declare interface IntercomStatic {
		getInstance(): intercom.Intercom,
		destroy(): void
	}

			
}

declare module 'npm$namespace$intercom' {
		declare interface Intercom {
		emit(name: string, message?: any): void,
		on(name: string, fn: Function): void,
		off(name: string, fn: Function): void,
		once(key: string, fn: Function, ttl?: number): void,
		bind(socket: any, options?: intercom.SocketBindingOptions): void
	}

	declare interface SocketBindingOptions {
		send?: any,
		receive?: any
	}

			
}