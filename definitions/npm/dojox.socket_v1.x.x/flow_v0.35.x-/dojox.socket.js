import type { socket } from 'npm$namespace$dojox'

declare module 'dojox.socket' {
					
}

declare module 'npm$namespace$dojox' {
		declare interface socket {
		(argsOrUrl: Object): void
	}

			
}

declare module 'socket' {
		declare interface LongPoll {
		(args: Object): any
	}

	declare interface replace {
		(socket: any, newSocket: any, listenForOpen: any): void
	}

	declare interface WebSocket {
		(args: any, fallback: any): void
	}

	declare interface Reconnect {
		(socket: any, options: any): void
	}

			
}

declare module 'dojox/socket' {
					declare module.exports: socket


}

declare module 'dojox/socket/Reconnect' {
					declare module.exports: Reconnect


}