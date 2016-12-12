import type { IEmitterStatic, ISubscriberStatic } from 'npm$namespace$Emissary'

declare module 'emissary' {
					
}

declare module 'npm$namespace$Emissary' {
		declare interface IEmitterStatic {
		new (): IEmitter
	}

	declare interface IEmitter {
		on(eventNames: string, handler: Function): any,
		once(eventName: string, handler: Function): any,
		signal(eventName: string): void,
		behavior(eventName: string, initialValue: any): void,
		emit(eventName: string, ...args: any[]): void,
		off(eventNames: string, handler: Function): void,
		pauseEvents(eventNames: string): void,
		resumeEvents(eventNames: string): void,
		incrementSubscriptionCount(eventName: string): number,
		decrementSubscriptionCount(eventName: string): number,
		getSubscriptionCount(eventName: string): number,
		hasSubscriptions(eventName: string): boolean
	}

	declare interface ISubscriberStatic {
		new (): ISubscriber
	}

	declare interface ISubscriber {
		subscribeWith(eventEmitter: any, methodName: string, args: any): ISubscription,
		addSubscription(subscription: any): ISubscription,
		subscribe(eventEmitterOrSubscription: any, ...args: any[]): ISubscription,
		subscribeToCommand(eventEmitter: any, ...args: any[]): ISubscription,
		unsubscribe(object?: any): any
	}

	declare interface ISubscriptionStatic {
		new (emitter: any, eventNames: string, handler: Function): ISubscription
	}

	declare interface ISubscription {
		cancelled: boolean,
		off(): any
	}

			
}