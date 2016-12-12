import type { Base } from 'npm$namespace$PubSubJS'

declare module 'pubsub' {
					
}

declare module 'npm$namespace$PubSubJS' {
		declare interface Base {
		version: string,
		name: string
	}

	declare interface Publish {
		publish(message: any, data: any): boolean,
		publish(message: any, data: any, sync: boolean, immediateExceptions: Function): boolean,
		publishSync(message: any, data: any): boolean
	}

	declare interface Subscribe {
		subscribe(message: any, func: Function): any
	}

	declare interface Unsubscribe {
		unsubscribe(tokenOrFunction: any): any
	}

	declare interface ClearAllSubscriptions {
		clearAllSubscriptions(): any
	}

			
}

declare module 'pubsub-js' {
					declare module.exports: undefined


}