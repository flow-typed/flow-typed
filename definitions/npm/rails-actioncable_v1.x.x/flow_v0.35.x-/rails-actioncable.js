

declare module 'rails-actioncable' {
		declare interface AppInterface {
		cable?: ActionCable.Cable,
		network?: ActionCable.Channel
	}

			
}

declare module 'ActionCable' {
		declare interface Channel {
		unsubscribe(): void,
		perform(action: string, data: {
		
	}): void
	}

	declare interface Subscriptions {
		create(chan_name: string, obj: CreateMixin): Channel
	}

	declare interface Cable {
		subscriptions: Subscriptions
	}

	declare interface CreateMixin {
		connected(): void,
		disconnected(): void,
		received(obj: Object): void,
		[key: string]: Function
	}

	declare function createConsumer(): Cable

	declare function createConsumer(url: string): Cable

		
}

declare module 'actioncable' {
					declare module.exports: undefined


}