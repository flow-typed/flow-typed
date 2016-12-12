import type { AltFactory } from 'npm$namespace$AltJS'

declare module 'alt' {
					declare module.exports: AltFactory


}

declare module 'npm$namespace$AltJS' {
	declare export type Source = {
		[name: string]: () => SourceModel<any>
	};

	declare export type Actions = {
		[action: string]: Action<any>
	};

	declare type StateTransform = (store: StoreModel<any>) => AltJS.AltStore<any>;

	declare type ActionsClassConstructor = NO PRINT IMPLEMENTED: ConstructorType;

	declare type ActionHandler = (...data: Array<any>) => any;

	declare type ExportConfig = {
		[key: string]: (...args: Array<any>) => any
	};

	declare interface StoreReduce {
		action: any,
		data: any
	}

	declare export interface StoreModel<S> {
		bindAction(action: Action<any>, handler: ActionHandler): void,
		bindActions(actions: ActionsClass): void,
		exportPublicMethods(exportConfig: any): void,
		bindListeners(config: {
		[methodName: string]: Action<any> | Actions
	}): void,
		exportAsync(source: Source): void,
		registerAsync(datasource: Source): void,
		setState(state: S): void,
		setState(stateFn: (currentState: S, nextState: S) => S): void,
		getState(): S,
		waitFor(store: AltStore<any>): void,
		onSerialize(fn: (data: any) => any): void,
		onDeserialize(fn: (data: any) => any): void,
		on(event: AltJS.lifeCycleEvents, callback: () => any): void,
		emitChange(): void,
		waitFor(storeOrStores: AltStore<any> | Array<AltStore<any>>): void,
		otherwise(data: any, action: AltJS.Action<any>): void,
		observe(alt: Alt): any,
		reduce(state: any, config: StoreReduce): Object,
		preventDefault(): void,
		afterEach(payload: Object, state: Object): void,
		beforeEach(payload: Object, state: Object): void,
		dispatcher?: any,
		getInstance(): AltJS.AltStore<S>,
		alt?: Alt,
		displayName?: string
	}

	declare export interface SourceModel<S> {
		local(state: any, ...args: any[]): any,
		remote(state: any, ...args: any[]): Promise<S>,
		shouldFetch(fetchFn: (...args: Array<any>) => boolean): void,
		loading?: (args: any) => void,
		success?: (state: S) => void,
		error?: (args: any) => void,
		interceptResponse(response: any, action: Action<any>, ...args: Array<any>): any
	}

	declare export interface AltStore<S> {
		getState(): S,
		listen(handler: (state: S) => any): () => void,
		unlisten(handler: (state: S) => any): void,
		emitChange(): void
	}

	declare export interface Action<T> {
		(args: T): void,
		defer(data: any): void
	}

	declare export interface ActionsClass {
		generateActions(...action: Array<string>): void,
		dispatch(...payload: Array<any>): void,
		actions?: Actions
	}

	declare interface AltConfig {
		dispatcher?: any,
		serialize?: (serializeFn: (data: Object) => string) => void,
		deserialize?: (deserializeFn: (serialData: string) => Object) => void,
		storeTransforms?: Array<StateTransform>,
		batchingFunction?: (callback: (...data: Array<any>) => any) => void
	}

	declare export interface AltFactory {
		new (config?: AltConfig): Alt
	}

		declare class Alt  {
		constructor(config?: AltConfig): this;
		actions: Actions;
		bootstrap(jsonData: string): void;
		takeSnapshot(...storeNames: Array<string>): string;
		flush(): Object;
		recycle(...stores: Array<AltJS.AltStore<any>>): void;
		rollback(): void;
		dispatch(action?: AltJS.Action<any>, data?: Object, details?: any): void;
		addActions(actionsName: string, ActionsClass: ActionsClassConstructor): void;
		createActions<T>(ActionsClass: ActionsClassConstructor, exportObj?: Object): T;
		createActions<T>(
		ActionsClass: ActionsClassConstructor, exportObj?: Object, ...constructorArgs: Array<any>
	): T;
		generateActions<T>(...actions: Array<string>): T;
		getActions(actionsName: string): AltJS.Actions;
		addStore(name: string, store: StoreModel<any>, saveStore?: boolean): void;
		createStore<S>(store: StoreModel<S>, name?: string): AltJS.AltStore<S>;
		getStore(name: string): AltJS.AltStore<any>
	}

	
}

declare module 'alt/utils/chromeDebug' {
			declare function chromeDebug(alt: AltJS.Alt): void

		declare module.exports: undefined


}

declare module 'alt/AltContainer' {
	declare type AltContainer = React.ReactElement<ContainerProps>;

	declare interface ContainerProps {
		store?: AltJS.AltStore<any>,
		stores?: Array<AltJS.AltStore<any>>,
		inject?: {
		[key: string]: any
	},
		actions?: {
		[key: string]: Object
	},
		render?: (...props: Array<any>) => React.ReactElement<any>,
		flux?: AltJS.Alt,
		transform?: (store: AltJS.AltStore<any>, actions: any) => any,
		shouldComponentUpdate?: (props: any) => boolean,
		component?: React.Component<any, any>
	}

			declare module.exports: ComponentClass


}