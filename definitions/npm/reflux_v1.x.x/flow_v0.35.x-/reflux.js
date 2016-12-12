

declare module 'reflux' {
					declare module.exports: undefined


}

declare module 'RefluxCore' {
		declare interface StoreDefinition {
		listenables?: any[],
		init?: Function,
		getInitialState?: Function,
		[propertyName: string]: any
	}

	declare interface ListenFn {
		(...params: any[]): any,
		completed: Function,
		failed: Function
	}

	declare interface Listenable {
		listen: ListenFn
	}

	declare interface Subscription {
		stop: Function,
		listenable: Listenable
	}

	declare interface Store {
		hasListener(listenable: Listenable): boolean,
		listenToMany(listenables: Listenable[]): void,
		validateListening(listenable: Listenable): string,
		listenTo(
		listenable: Listenable, callback: Function, defaultCallback?: Function
	): Subscription,
		stopListeningTo(listenable: Listenable): boolean,
		stopListeningToAll(): void,
		fetchInitialState(listenable: Listenable, defaultCallback: Function): void,
		trigger(state: any): void,
		listen(callback: Function, bindContext: any): Function
	}

	declare interface ActionsDefinition {
		[index: string]: any
	}

	declare interface Actions {
		[index: string]: Listenable
	}

	declare function createStore(definition: StoreDefinition): Store

	declare function createAction(definition?: ActionsDefinition): any

	declare function createActions(definition: ActionsDefinition): any

	declare function createActions(definitions: string[]): any

	declare function connect(store: Store, key?: string): void

	declare function listenTo(store: Store, handler: string): void

	declare function setState(state: any): void

	declare function ListenerMixin(): any

		
}