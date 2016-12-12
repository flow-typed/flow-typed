

declare module 'knockout-postbox' {
		declare interface KnockoutPostBox {
		subscribe<T>(
		topic: string, handler: (value: T) => void, target?: any
	): KnockoutSubscription,
		publish<T>(topic: string, value?: T): void,
		defaultComparer<T>(newValue: T, oldValue: T): boolean,
		serializer: (object: any) => string,
		reset(): void
	}

	declare interface KnockoutObservable<T> {
		subscribeTo(
		topic: string, useLastPublishedValueToInitialize?: boolean, transform?: (val: any) => T
	): KnockoutObservable<T>,
		unsubscribeFrom(topic: string): KnockoutObservable<T>,
		publishOn(
		topic: string, skipInitialPublish?: boolean, equalityComparer?: (newValue: T, oldValue: T) => boolean
	): KnockoutObservable<T>,
		stopPublishingOn(topic: string): KnockoutObservable<T>,
		syncWith(
		topic: string, initializeWithLatestValue?: boolean, skipInitialPublish?: boolean, equalityComparer?: (newValue: T, oldValue: T) => boolean
	): KnockoutObservable<T>
	}

	declare interface KnockoutObservableArray<T> {
		subscribeTo(
		topic: string, useLastPublishedValueToInitialize?: boolean, transform?: (val: any) => any
	): KnockoutObservableArray<T>,
		unsubscribeFrom(topic: string): KnockoutObservableArray<T>,
		publishOn(
		topic: string, skipInitialPublish?: boolean, equalityComparer?: (newValue: any, oldValue: any) => boolean
	): KnockoutObservableArray<T>,
		stopPublishingOn(topic: string): KnockoutObservableArray<T>,
		syncWith(
		topic: string, initializeWithLatestValue?: boolean, skipInitialPublish?: boolean, equalityComparer?: (newValue: any, oldValue: any) => boolean
	): KnockoutObservableArray<T>
	}

	declare interface KnockoutStatic {
		postbox: KnockoutPostBox
	}

			
}