

declare module 'zmq' {
		declare interface EventEmitter {
		
	}

	declare interface SocketTypes {
		pub: number,
		xpub: number,
		sub: number,
		xsub: number,
		req: number,
		xreq: number,
		rep: number,
		xrep: number,
		push: number,
		pull: number,
		dealer: number,
		router: number,
		pair: number
	}

	declare interface SocketOptions {
		_fd: number,
		_ioevents: number,
		_receiveMore: number,
		_subscribe: number,
		_unsubscribe: number,
		affinity: number,
		backlog: number,
		hwm: number,
		identity: number,
		linger: number,
		mcast_loop: number,
		rate: number,
		rcvbuf: number,
		last_endpoint: number,
		reconnect_ivl: number,
		recovery_ivl: number,
		sndbuf: number,
		swap: number
	}

	declare interface Socket {
		setsocketopt(opt: number, val: any): Socket,
		setsocketopt(opt: string, val: any): Socket,
		getsocketopt(opt: number): any,
		getsocketopt(opt: string): any,
		bind(addr: string, callback?: (error: string) => void): Socket,
		bindSync(addr: string): Socket,
		unbind(addr: string, callback?: (error: string) => void): Socket,
		unbindSync(addr: string): Socket,
		connect(addr: string): Socket,
		disconnect(addr: string): Socket,
		subscribe(filter: string): Socket,
		unsubscribe(filter: string): Socket,
		send(msg: string, flags?: number): Socket,
		send(msg: Buffer, flags?: number): Socket,
		send(msg: any[], flags?: number): Socket,
		monitor(interval?: number): Socket,
		close(): Socket,
		on(eventName: string, callback: (...buffer: Buffer[]) => void): void,
		pause(): void,
		resume(): void,
		_fd: any,
		_ioevents: any,
		_receiveMore: any,
		_subscribe: any,
		_unsubscribe: any,
		affinity: any,
		backlog(): any,
		hwm: any,
		identity: any,
		linger: any,
		mcast_loop: any,
		rate: any,
		rcvbuf: any,
		last_endpoint: any,
		reconnect_ivl: any,
		recovery_ivl: any,
		sndbuf: any,
		swap: any
	}

	declare function socket(type: string, options?: any): Socket

	declare function socket(type: number, options?: any): Socket

	declare function createSocket(type: string, options?: any): Socket

		
}