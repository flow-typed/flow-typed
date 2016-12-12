import type { ArbiterStatic } from 'npm$namespace$ArbiterDef'

declare module 'Arbiter' {
					
}

declare module 'npm$namespace$ArbiterDef' {
		declare export interface SubscribeHandler {
		(data: any, message: string, subscriber_context: any): void
	}

	declare export interface SubscribeOptions {
		priority?: number,
		async?: boolean,
		persist?: boolean
	}

	declare export interface PublishOptions {
		cancelable?: boolean,
		persist?: boolean,
		async?: boolean
	}

	declare export interface ArbiterStatic {
		version: string,
		updated_on: string,
		create(): ArbiterStatic,
		publish(msg: string, data?: any, options?: PublishOptions): boolean,
		subscribe(msg: string, func: SubscribeHandler): any,
		subscribe(msg: string, options: SubscribeOptions, func: SubscribeHandler): any,
		subscribe(
		msg: string, options: SubscribeOptions, context: any, func: SubscribeHandler
	): any,
		subscribe(msg: string[], func: SubscribeHandler): any,
		subscribe(msg: string[], options: SubscribeOptions, func: SubscribeHandler): any,
		subscribe(
		msg: string[], options: SubscribeOptions, context: any, func: SubscribeHandler
	): any,
		unsubscribe(subscription_id: number): boolean,
		resubscribe(subscription_id: number): boolean
	}

			
}