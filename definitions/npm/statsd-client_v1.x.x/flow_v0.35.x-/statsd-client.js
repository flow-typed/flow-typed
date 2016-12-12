

declare module 'statsd-client' {
		declare interface CommonOptions {
		prefix?: string,
		debug?: boolean,
		tcp?: boolean,
		socketTimeout?: number
	}

	declare interface TcpOptions {
		host?: string,
		port?: number,
		socketTimeoutsToClose: number
	}

	declare interface UdpOptions {
		host?: string,
		port?: number
	}

	declare interface HttpOptions {
		host?: string,
		headers?: {
		[index: string]: string
	},
		method?: string
	}

		declare class StatsdClient  {
		constructor(options: TcpOptions | UdpOptions | HttpOptions): this;
		counter(metric: string, delta: number): void;
		increment(metric: string, delta?: number): void;
		decrement(metric: string, delta?: number): void;
		gauge(name: string, value: number): void;
		gaugeDelta(name: string, delta: number): void;
		set(name: string, value: number): void;
		timing(name: string, start: Date): void;
		timing(name: string, duration: number): void;
		close(): void;
		getChildClient(name: string): StatsdClient
	}

	declare module.exports: undefined


}