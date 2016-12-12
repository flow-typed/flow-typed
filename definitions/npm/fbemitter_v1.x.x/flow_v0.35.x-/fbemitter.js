

declare module 'fbemitter' {
					declare module.exports: undefined


}

declare module 'npm$namespace$FBEmitter' {
				declare export class EventSubscription  {
		listener: Function;
		context: any;
		remove(): void
	}

	declare export class EventEmitter  {
		constructor(): this;
		addListener(eventType: string, listener: Function, context?: any): EventSubscription;
		once(eventType: string, listener: Function, context?: any): EventSubscription;
		removeAllListeners(eventType?: string): void;
		removeCurrentListener(): void;
		listeners(eventType: string): Function[];
		emit(eventType: string, ...data: any[]): void
	}

	
}