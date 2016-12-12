

declare module 'js-signals' {
		declare interface SignalWrapper {
		Signal: Signal
	}

	declare interface SignalBinding {
		active: boolean,
		context: any,
		params: any,
		detach(): Function,
		execute(paramsArr?: any[]): any,
		getListener(): Function,
		getSignal(): Signal,
		isBound(): boolean,
		isOnce(): boolean
	}

	declare interface Signal {
		new (): Signal,
		active: boolean,
		memorize: boolean,
		VERSION: string,
		add(listener: Function, listenerContext?: any, priority?: Number): SignalBinding,
		addOnce(listener: Function, listenerContext?: any, priority?: Number): SignalBinding,
		dispatch(...params: any[]): void,
		dispose(): void,
		forget(): void,
		getNumListeners(): number,
		halt(): void,
		has(listener: Function, context?: any): boolean,
		remove(listener: Function, context?: any): Function,
		removeAll(): void
	}

			
}

declare module 'signals' {
					declare module.exports: undefined


}