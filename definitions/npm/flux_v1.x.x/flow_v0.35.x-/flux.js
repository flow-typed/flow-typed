

declare module 'flux' {
					declare module.exports: undefined


}

declare module 'npm$namespace$Flux' {
				declare export class Dispatcher<TPayload>  {
		constructor(): this;
		register(callback: (payload: TPayload) => void): string;
		unregister(id: string): void;
		waitFor(IDs: string[]): void;
		dispatch(payload: TPayload): void;
		isDispatching(): boolean
	}

	
}

declare module 'npm$namespace$FluxUtils' {
		declare interface RealOptions {
		pure?: boolean,
		withProps?: boolean
	}

		declare export class Container  {
		constructor(): this;
		create<TComponent>(
		base: React.ComponentClass<TComponent>, options?: RealOptions
	): React.ComponentClass<TComponent>
	}

	declare export class MapStore<K, V, TPayload> extends ReduceStore<immutable.Map<K, V>, TPayload> {
		at(key: K): V;
		has(key: K): boolean;
		get(key: K): V;
		getAll(
		keys: immutable.Iterable.Indexed<K>, prev?: immutable.Map<K, V>
	): immutable.Map<K, V>
	}

	declare export class ReduceStore<T, TPayload> extends Store<TPayload> {
		getState(): T;
		getInitialState(): T;
		reduce(state: T, action: TPayload): T;
		areEqual(one: T, two: T): boolean
	}

	declare export class Store<TPayload>  {
		constructor(dispatcher: Flux.Dispatcher<TPayload>): this;
		addListener(callback: Function): fbEmitter.EventSubscription;
		getDispatcher(): Flux.Dispatcher<TPayload>;
		getDispatchToken(): string;
		hasChanged(): boolean;
		___emitChange(): void;
		___onDispatch(payload: TPayload): void
	}

	
}

declare module 'flux/utils' {
					declare module.exports: undefined


}