

declare module 'sockjs-node' {
					
}

declare module 'sockjs' {
		declare export interface ServerOptions {
		sockjs_url?: string,
		prefix?: string,
		response_limit?: number,
		websocket?: boolean,
		jsessionid?: any,
		log?: (severity: string, message: string) => void,
		heartbeat_delay?: number,
		disconnect_delay?: number
	}

	declare export interface Server {
		installHandlers(server: http.Server, options?: ServerOptions): any,
		on(event: "connection", listener: (conn: Connection) => any): this,
		on(event: string, listener: Function): this
	}

	declare export interface Connection {
		remoteAddress: string,
		remotePort: number,
		address: {
		[key: string]: {
		address: string,
		port: number
	}
	},
		headers: {
		[key: string]: string
	},
		url: string,
		pathname: string,
		prefix: string,
		protocol: string,
		readyState: number,
		id: string,
		close(code?: string, reason?: string): boolean,
		destroy(): void,
		on(event: "data", listener: (message: string) => any): this,
		on(event: "close", listener: () => void): this,
		on(event: string, listener: Function): this
	}

	declare export function createServer(options?: ServerOptions): Server

		
}