/**
 * Flowtype definitions for alt
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface AltJS$StoreReduce {
    action: any,
        data: any
}

declare export interface AltJS$StoreModel<S>{
    bindAction(action: AltJS$Action<any>, handler: AltJS$ActionHandler): void,
    bindActions(actions: AltJS$ActionsClass): void,
    exportPublicMethods(exportConfig: any): void,
    bindListeners(config: {
        [methodName: string]: AltJS$Action<any>| AltJS$Actions
    }): void,
    exportAsync(source: AltJS$Source): void,
    registerAsync(datasource: AltJS$Source): void,
    setState(state: S): void,
    setState(stateFn: (currentState: S, nextState: S) => S): void,
    getState(): S,
    waitFor(store: AltJS$AltStore<any>): void,
    onSerialize(fn: (data: any) => any): void,
    onDeserialize(fn: (data: any) => any): void,
    on(event: AltJS$lifeCycleEvents, callback: () => any): void,
    emitChange(): void,
    waitFor(storeOrStores: AltJS$AltStore<any>| Array<AltJS$AltStore<any >> ): void,
    otherwise(data: any, action: AltJS$Action<any>): void,
    observe(alt: AltJS$Alt): any,
    reduce(state: any, config: AltJS$StoreReduce): Object,
    preventDefault(): void,
    afterEach(payload: Object, state: Object): void,
    beforeEach(payload: Object, state: Object): void,
    dispatcher?: any,
    getInstance(): AltJS$AltStore<S>,
    alt?: AltJS$Alt,
    displayName?: string
}

declare export type AltJS$Source = {
    [name: string]: () => AltJS$SourceModel<any >
};

declare export interface AltJS$SourceModel<S>{
    local(state: any, ...args: any[]): any,
    remote(state: any, ...args: any[]): Promise<S>,
    shouldFetch(fetchFn: (...args: Array<any>) => boolean): void,
    loading?: (args: any) => void,
    success?: (state: S) => void,
    error?: (args: any) => void,
    interceptResponse(response: any, action: AltJS$Action<any>, ...args: Array<any>): any
}

declare export interface AltJS$AltStore<S>{
    getState(): S,
    listen(handler: (state: S) => any): () => void,
    unlisten(handler: (state: S) => any): void,
    emitChange(): void
}

declare export type AltJS$Actions = {
    [action: string]: AltJS$Action<any >
};

declare export interface AltJS$Action<T>{
    (args: T): void,
    defer(data: any): void
}

declare export interface AltJS$ActionsClass {
    generateActions(...action: Array<string>): void,
        dispatch(...payload: Array<any>): void,
        actions?: AltJS$Actions
}

declare type AltJS$StateTransform = (store: AltJS$StoreModel<any>) => AltJS$AltStore<any>;

declare interface AltJS$AltConfig {
    dispatcher?: any,
        serialize?: (serializeFn: (data: Object) => string) => void,
        deserialize?: (deserializeFn: (serialData: string) => Object) => void,
        storeTransforms?: Array<AltJS$StateTransform>,
        batchingFunction?: (callback: (...data: Array<any>) => any) => void
}

declare class Alt {
    constructor(config?: AltJS$AltConfig): this;
    actions: AltJS$Actions;
    bootstrap(jsonData: string): void;
    takeSnapshot(...storeNames: Array<string>): string;
    flush(): Object;
    recycle(...stores: Array<AltJS$AltStore<any >> ): void;
    rollback(): void;
    dispatch(action?: AltJS$Action<any>, data?: Object, details?: any): void;
    addActions(actionsName: string, ActionsClass: AltJS$ActionsClassConstructor): void;
    createActions<T>(ActionsClass: AltJS$ActionsClassConstructor, exportObj?: Object): T;
    createActions<T>(
        ActionsClass: AltJS$ActionsClassConstructor,
        exportObj?: Object,
        ...constructorArgs: Array<any>): T;
    generateActions<T>(...actions: Array<string>): T;
    getActions(actionsName: string): AltJS$Actions;
    addStore(name: string, store: AltJS$StoreModel<any>, saveStore?: boolean): void;
    createStore<S>(store: AltJS$StoreModel<S>, name?: string): AltJS$AltStore<S>;
    getStore(name: string): AltJS$AltStore<any >
}

declare export interface AltJS$AltFactory {
    new(config?: AltJS$AltConfig): AltJS$Alt
}

declare type AltJS$ActionsClassConstructor = (alt: AltJS$Alt) => AltJS$ActionsClass;

declare type AltJS$ActionHandler = (...data: Array<any>) => any;

declare type AltJS$ExportConfig = {
    [key: string]: (...args: Array<any>) => any
};
declare module 'alt/utils/chromeDebug' {
    declare module.exports: typeof chromeDebug
}
declare module 'alt/AltContainer' {
    declare interface ContainerProps {
        store?: AltJS$AltStore<any>,
            stores?: Array<AltJS$AltStore<any >> ,
            inject?: {
                [key: string]: any
            },
            actions?: {
                [key: string]: Object
            },
            render?: (...props: Array<any>) => React.ReactElement<any>,
            flux?: AltJS$Alt,
            transform?: (store: AltJS$AltStore<any>, actions: any) => any,
            shouldComponentUpdate?: (props: any) => boolean,
            component?: React.Component<any, any >
    }
    declare module.exports: typeof AltContainer
    declare var AltContainer: React.ComponentClass<ContainerProps>;
}
declare module 'alt' {
    declare var alt: AltJS$AltFactory;
    declare module.exports: typeof alt
}