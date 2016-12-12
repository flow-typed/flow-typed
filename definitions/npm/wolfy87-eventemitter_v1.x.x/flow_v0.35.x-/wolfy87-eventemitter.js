

declare module 'wolfy87-eventemitter' {
				declare class EventEmitter extends Wolfy87EventEmitter$EventEmitter {
		
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$Wolfy87EventEmitter' {
		declare interface MultipleEvents {
		[event: string]: any
	}

		declare export class EventEmitter  {
		noConflict(): typeof EventEmitter;
		getListeners(event: string): Function[];
		getListeners(event: RegExp): {
		[event: string]: Function
	};
		addListener(event: string, listener: Function): EventEmitter;
		addListener(event: RegExp, listener: Function): EventEmitter;
		on(event: string, listener: Function): EventEmitter;
		on(event: RegExp, listener: Function): EventEmitter;
		flattenListeners(listeners: {
		listener: Function
	}[]): Function[];
		getListenersAsObject(event: string): {
		[event: string]: Function
	};
		getListenersAsObject(event: RegExp): {
		[event: string]: Function
	};
		addOnceListener(event: string, listener: Function): EventEmitter;
		addOnceListener(event: RegExp, listener: Function): EventEmitter;
		once(event: string, listener: Function): EventEmitter;
		once(event: RegExp, listener: Function): EventEmitter;
		defineEvent(event: string): EventEmitter;
		defineEvents(events: string[]): EventEmitter;
		removeListener(event: string, listener: Function): EventEmitter;
		removeListener(event: RegExp, listener: Function): EventEmitter;
		off(event: string, listener: Function): EventEmitter;
		off(event: RegExp, listener: Function): EventEmitter;
		addListeners(event: string, listeners: Function[]): EventEmitter;
		addListeners(event: RegExp, listeners: Function[]): EventEmitter;
		addListeners(event: MultipleEvents): EventEmitter;
		removeListeners(event: string, listeners: Function[]): EventEmitter;
		removeListeners(event: RegExp, listeners: Function[]): EventEmitter;
		removeListeners(event: MultipleEvents): EventEmitter;
		manipulateListeners(remove: boolean, event: string, listeners: Function[]): EventEmitter;
		manipulateListeners(remove: boolean, event: RegExp, listeners: Function[]): EventEmitter;
		manipulateListeners(remove: boolean, event: MultipleEvents): EventEmitter;
		removeEvent(event?: string): EventEmitter;
		removeEvent(event?: RegExp): EventEmitter;
		removeAllListeners(event?: string): EventEmitter;
		removeAllListeners(event?: RegExp): EventEmitter;
		emitEvent(event: string, ...args: any[]): EventEmitter;
		emitEvent(event: RegExp, ...args: any[]): EventEmitter;
		trigger(event: string, ...args: any[]): EventEmitter;
		trigger(event: RegExp, ...args: any[]): EventEmitter;
		emit(event: string, ...args: any[]): EventEmitter;
		emit(event: RegExp, ...args: any[]): EventEmitter;
		setOnceReturnValue(value: any): EventEmitter
	}

	
}