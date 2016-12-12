

declare module 'eventemitter2' {
		declare interface EventEmitter2Configuration {
		wildcard?: boolean,
		delimiter?: string,
		newListener?: boolean,
		maxListeners?: number
	}

		declare class EventEmitter2  {
		constructor(conf?: EventEmitter2Configuration): this;
		addListener(event: string, listener: Function): EventEmitter2;
		on(event: string | string[], listener: Function): EventEmitter2;
		onAny(listener: Function): EventEmitter2;
		offAny(listener?: Function): EventEmitter2;
		once(event: string, listener: Function): EventEmitter2;
		many(event: string, timesToListen: number, listener: Function): EventEmitter2;
		removeListener(event: string, listener: Function): EventEmitter2;
		off(event: string, listener: Function): EventEmitter2;
		removeAllListeners(event?: string): EventEmitter2;
		removeAllListeners(events: string[]): EventEmitter2;
		setMaxListeners(n: number): void;
		listeners(event: string): Function[];
		listenersAny(): Function[];
		emit(event: string | string[], ...args: any[]): boolean;
		emit(event: string[]): boolean
	}

	declare export class EventEmitter2  {
		constructor(conf?: EventEmitter2Configuration): this;
		addListener(event: string, listener: Function): EventEmitter2;
		on(event: string | string[], listener: Function): EventEmitter2;
		onAny(listener: Function): EventEmitter2;
		offAny(listener: Function): EventEmitter2;
		once(event: string, listener: Function): EventEmitter2;
		many(event: string, timesToListen: number, listener: Function): EventEmitter2;
		removeListener(event: string, listener: Function): EventEmitter2;
		off(event: string, listener: Function): EventEmitter2;
		removeAllListeners(event?: string): EventEmitter2;
		removeAllListeners(events: string[]): EventEmitter2;
		setMaxListeners(n: number): void;
		listeners(event: string): Function[];
		listenersAny(): Function[];
		emit(event: string | string[], ...args: any[]): boolean;
		emit(event: string[]): boolean
	}

	
}