

declare module 'tedious-connection-pool' {
				declare class tcp  {
		constructor(poolConfig: tcp.PoolConfig, connectionConfig: tedious.ConnectionConfig): this;
		acquire(callback: tcp.ConnectionCallback): void;
		on(event: string, callback: Function): void;
		drain(): void
	}

	declare module.exports: undefined


}

declare module 'tcp' {
		declare export interface ConnectionCallback {
		(err: Error, connection: PooledConnection): void
	}

	declare export interface PoolConfig {
		min?: number,
		max?: number,
		log?: boolean,
		idleTimeout?: number,
		retryDelay?: number,
		acquireTimeout?: number
	}

		declare export class PooledConnection extends tedious$Connection {
		release(): void
	}

	
}