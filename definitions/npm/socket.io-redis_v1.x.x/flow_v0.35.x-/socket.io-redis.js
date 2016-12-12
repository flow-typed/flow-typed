

declare module 'socket.io-redis' {
		declare interface SocketIORedisStatic {
		(): SocketIORedis.RedisAdapter,
		(uri: string, opts?: SocketIORedis.SocketIORedisOptions): SocketIORedis.RedisAdapter,
		(opts: SocketIORedis.SocketIORedisOptions): SocketIORedis.RedisAdapter
	}

			declare module.exports: SocketIORedisStatic


}

declare module 'npm$namespace$SocketIORedis' {
		declare interface SocketIORedisOptions {
		key?: string,
		host?: string,
		port?: number,
		pubClient?: any,
		subClient?: any
	}

	declare interface RedisAdapter {
		uid: string,
		prefix: string,
		pubClient?: any,
		subClient?: any,
		broadcast: {
		(packet: any, opts: {
		rooms?: string[],
		except?: string[],
		flags?: {
		[flag: string]: boolean
	}
	}): void,
		(packet: any, opts: {
		rooms?: string[],
		except?: string[],
		flags?: {
		[flag: string]: boolean
	}
	}, remote?: boolean): void
	},
		delAll: {
		(id: string): void,
		(id: string, callback?: (err?: any) => void): void
	}
	}

			
}