

declare module 'component-emitter' {
		declare interface Emitter {
		(obj?: Object): Emitter,
		on(event: string, listener: Function): Emitter,
		once(event: string, listener: Function): Emitter,
		off(event?: string, listener?: Function): Emitter,
		emit(event: string, ...args: any[]): boolean,
		listeners(event: string): Function[],
		hasListeners(event: string): boolean
	}

			
}