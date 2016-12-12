

declare module 'fluxxor' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Fluxxor' {
		declare interface Store {
		bindActions(...args: Array<string | Function>): void,
		bindActions(args: Array<string | Function>): void,
		waitFor(stores: string[], fn: Function): void
	}

	declare interface StoreSpec {
		initialize(instance?: any, options?: {
		
	}): void,
		actions?: any
	}

	declare interface StoreClass {
		new (options?: {
		
	}): any
	}

	declare interface Context {
		flux: Flux
	}

	declare interface FluxMixin {
		getFlux(): Flux
	}

	declare interface FluxChildMixin {
		getFlux(): Flux
	}

	declare interface StoreWatchMixin<StoreState> {
		getStateFromFlux(): StoreState
	}

	declare function FluxMixin(React: typeof ___React): FluxMixin

	declare function FluxChildMixin(React: typeof ___React): FluxChildMixin

	declare function StoreWatchMixin<StoreState>(...storeNames: string[]): StoreWatchMixin<StoreState>

	declare function createStore(spec: StoreSpec): StoreClass

	declare class Dispatcher  {
		constructor(stores: any): this;
		addStore(name: string, store: Store): void;
		dispatch(action: Function): void;
		doDispatchLoop(action: Function): void;
		waitForStores(store: Store, stores: string[], fn: Function): void
	}

	declare class Flux extends EventEmitter3$EventEmitter {
		constructor(stores: any, actions: any): this;
		addActions(actions: any): void;
		addAction(...args: Array<string | Function>): void;
		addAction(names: string[], action: Function): void;
		store(name: string): any;
		addStore(name: string, store: Store): void;
		addStores(stores: any): void;
		stores: any;
		actions: any
	}

	
}