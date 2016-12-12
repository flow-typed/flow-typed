

declare module 'socketty' {
		declare interface Socketty {
		connect(url: string, callback: (socket: SockettySocket) => void): SockettySocket,
		createServer(httpServer: any): SockettyServer
	}

	declare interface SockettySocket {
		on(action: string, callback: (message?: any) => void): void,
		send(action: string, message?: any): void,
		disconnect(callback: () => void): void
	}

	declare interface SockettyServer {
		connection(callback: (socket: SockettySocket) => void): void
	}

			declare module.exports: Socketty


}