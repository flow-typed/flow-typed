

declare module 'eventemitter3' {
					


}

declare module 'npm$namespace$EventEmitter3' {
				declare class EventEmitter  {
		constructor(): this;
		eventNames(): (string | NO PRINT IMPLEMENTED: SymbolKeyword)[];
		listeners(event: string | NO PRINT IMPLEMENTED: SymbolKeyword): Function[];
		listeners(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, exists: boolean): boolean;
		emit(event: string | NO PRINT IMPLEMENTED: SymbolKeyword, ...args: any[]): boolean;
		on(
		event: string | NO PRINT IMPLEMENTED: SymbolKeyword, fn: Function, context?: any
	): this;
		once(
		event: string | NO PRINT IMPLEMENTED: SymbolKeyword, fn: Function, context?: any
	): this;
		removeListener(
		event: string | NO PRINT IMPLEMENTED: SymbolKeyword, fn?: Function, context?: any, once?: boolean
	): this;
		removeAllListeners(event?: string | NO PRINT IMPLEMENTED: SymbolKeyword): this;
		off(
		event: string | NO PRINT IMPLEMENTED: SymbolKeyword, fn?: Function, context?: any, once?: boolean
	): this;
		addListener(
		event: string | NO PRINT IMPLEMENTED: SymbolKeyword, fn: Function, context?: any
	): this;
		setMaxListeners(): this;
		prefixed: string | boolean
	}

	
}