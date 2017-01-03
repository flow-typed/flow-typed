// @flow
/**
 * Flowtype definitions for backbone-global
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


declare var npm$namespace$Backbone: {
    sync: typeof Backbone$sync,
    ajax: typeof Backbone$ajax,
    noConflict: typeof Backbone$noConflict,
}
declare type Backbone$AddOptions = {
    at?: number,
    merge?: boolean
} & Backbone$Silenceable


declare type Backbone$HistoryOptions = {
    pushState?: boolean,
    root?: string
} & Backbone$Silenceable


declare interface Backbone$NavigateOptions {
    trigger?: boolean,
        replace?: boolean
}

declare interface Backbone$RouterOptions {
    routes: any
}

declare interface Backbone$Silenceable {
    silent?: boolean
}

declare interface Backbone$Validable {
    validate?: boolean
}

declare interface Backbone$Waitable {
    wait?: boolean
}

declare interface Backbone$Parseable {
    parse?: any
}

declare interface Backbone$PersistenceOptions {
    url?: string,
        data?: any,
        beforeSend?: (jqxhr: JQueryXHR) => void,
        success?: (modelOrCollection?: any, response?: any, options?: any) => void,
        error?: (modelOrCollection?: any, jqxhr?: JQueryXHR, options?: any) => void
}

declare type Backbone$ModelSetOptions = {} & Backbone$Silenceable & Backbone$Validable


declare type Backbone$ModelFetchOptions = {} & Backbone$PersistenceOptions & Backbone$ModelSetOptions & Backbone$Parseable


declare type Backbone$ModelSaveOptions = {
    patch?: boolean
} & Backbone$Silenceable & Backbone$Waitable & Backbone$Validable & Backbone$Parseable & Backbone$PersistenceOptions


declare type Backbone$ModelDestroyOptions = {} & Backbone$Waitable & Backbone$PersistenceOptions


declare type Backbone$CollectionFetchOptions = {
    reset?: boolean
} & Backbone$PersistenceOptions & Backbone$Parseable


declare interface Backbone$ObjectHash {
    [key: string]: any
}

declare interface Backbone$RoutesHash {
    [routePattern: string]: string | {
        (...urlParts: string[]): void
    }
}

declare interface Backbone$EventsHash {
    [selector: string]: string | {
        (eventObject: JQueryEventObject): void
    }
}

declare class Events {
    on(eventName: string, callback?: Function, context?: any): any;
    on(eventMap: Backbone$EventsHash): any;
    off(eventName?: string, callback?: Function, context?: any): any;
    trigger(eventName: string, ...args: any[]): any;
    bind(eventName: string, callback: Function, context?: any): any;
    unbind(eventName?: string, callback?: Function, context?: any): any;
    once(events: string, callback: Function, context?: any): any;
    listenTo(object: any, events: string, callback: Function): any;
    listenToOnce(object: any, events: string, callback: Function): any;
    stopListening(object?: any, events?: string, callback?: Function): any
}

declare class ModelBase mixins Events {
    url: any;
    parse(response: any, options?: any): any;
    toJSON(options?: any): any;
    sync(...arg: any[]): JQueryXHR
}

declare class Model mixins ModelBase {
    attributes: any;
    changed: any[];
    cidPrefix: string;
    cid: string;
    collection: Backbone$Collection<any>;

    /**
     * Default attributes for the model. It can be an object hash or a method returning an object hash.
     * For assigning an object hash, do it like this: this.defaults = <any>{ attribute: value, ... };
    That works only if you set it in the constructor or the initialize method.
    */
    defaults(): Backbone$ObjectHash;
    id: any;
    idAttribute: string;
    validationError: any;
    urlRoot: any;
    constructor(attributes?: any, options?: any): this;
    initialize(attributes?: any, options?: any): void;
    fetch(options?: Backbone$ModelFetchOptions): JQueryXHR;

    /**
     * For strongly-typed access to attributes, use the `get` method only privately in public getter properties.
     * @example  * get name(): string {
    return super.get("name");
    }
    */
    get(attributeName: string): any;

    /**
     * For strongly-typed assignment of attributes, use the `set` method only privately in public setter properties.
     * @example  * set name(value: string) {
    super.set("name", value);
    }
    */
    set(
        attributeName: string,
        value: any,
        options?: Backbone$ModelSetOptions): Backbone$Model;
    set(obj: any, options?: Backbone$ModelSetOptions): Backbone$Model;

    /**
     * Return an object containing all the attributes that have changed, or
     * false if there are no changed attributes. Useful for determining what
    parts of a view need to be updated and/or what attributes need to be
    persisted to the server. Unset attributes will be set to undefined.
    You can also pass an attributes object to diff against the model,
    determining if there would be a change. 
    */
    changedAttributes(attributes?: any): any;
    clear(options?: Backbone$Silenceable): any;
    clone(): Backbone$Model;
    destroy(options?: Backbone$ModelDestroyOptions): any;
    escape(attribute: string): string;
    has(attribute: string): boolean;
    hasChanged(attribute?: string): boolean;
    isNew(): boolean;
    isValid(options?: any): boolean;
    previous(attribute: string): any;
    previousAttributes(): any[];
    save(attributes?: any, options?: Backbone$ModelSaveOptions): any;
    unset(attribute: string, options?: Backbone$Silenceable): Backbone$Model;
    validate(attributes: any, options?: any): any;
    keys(): string[];
    values(): any[];
    pairs(): any[];
    invert(): any;
    pick(keys: string[]): any;
    pick(...keys: string[]): any;
    pick(fn: (value: any, key: any, object: any) => any): any;
    omit(keys: string[]): any;
    omit(...keys: string[]): any;
    omit(fn: (value: any, key: any, object: any) => any): any;
    chain(): any;
    isEmpty(): boolean;
    matches(attrs: any): boolean
}

declare class Collection<TModel>mixins ModelBase {
    model: (...args: any[]) => TModel;
    models: TModel[];
    length: number;
    constructor(models?: TModel[] | Object[], options?: any): this;
    initialize(models?: TModel[] | Object[], options?: any): void;
    fetch(options?: Backbone$CollectionFetchOptions): JQueryXHR;

    /**
     * Specify a model attribute name (string) or function that will be used to sort the collection.
     */
    comparator: string | ((element: TModel) => number | string) | ((compare: TModel, to?: TModel) => number);
    add(model: {} | TModel, options?: Backbone$AddOptions): TModel;
    add(models: ({} | TModel)[], options?: Backbone$AddOptions): TModel[];
    at(index: number): TModel;

    /**
     * Get a model from a collection, specified by an id, a cid, or by passing in a model.
     */
    get(id: number | string | Backbone$Model): TModel;
    has(key: number | string | Backbone$Model): boolean;
    create(attributes: any, options?: Backbone$ModelSaveOptions): TModel;
    pluck(attribute: string): any[];
    push(model: TModel, options?: Backbone$AddOptions): TModel;
    pop(options?: Backbone$Silenceable): TModel;
    remove(model: {} | TModel, options?: Backbone$Silenceable): TModel;
    remove(models: ({} | TModel)[], options?: Backbone$Silenceable): TModel[];
    reset(models?: TModel[], options?: Backbone$Silenceable): TModel[];
    set(models?: TModel[], options?: Backbone$Silenceable): TModel[];
    shift(options?: Backbone$Silenceable): TModel;
    sort(options?: Backbone$Silenceable): Backbone$Collection<TModel>;
    unshift(model: TModel, options?: Backbone$AddOptions): TModel;
    where(properties: any): TModel[];
    findWhere(properties: any): TModel;
    modelId(attrs: any): any;

    /**
     * Return a shallow copy of this collection's models, using the same options as native Array#slice.
     */
    slice(min: number, max?: number): TModel[];
    all(iterator?: _.ListIterator<TModel, boolean>, context?: any): boolean;
    any(iterator?: _.ListIterator<TModel, boolean>, context?: any): boolean;
    chain(): any;
    collect<TResult>(iterator: _.ListIterator<TModel, TResult>, context?: any): TResult[];
    contains(value: TModel): boolean;
    countBy(iterator?: _.ListIterator<TModel, any>): _.Dictionary<number>;
    countBy(iterator: string): _.Dictionary<number>;
    detect(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel;
    difference(others: TModel[]): TModel[];
    drop(n?: number): TModel[];
    each(iterator: _.ListIterator<TModel, void>, context?: any): TModel[];
    every(iterator: _.ListIterator<TModel, boolean>, context?: any): boolean;
    filter(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel[];
    find(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel;
    findIndex(predicate: _.ListIterator<TModel, boolean>, context?: any): number;
    findLastIndex(predicate: _.ListIterator<TModel, boolean>, context?: any): number;
    first(): TModel;
    first(n: number): TModel[];
    foldl<TResult>(
        iterator: _.MemoIterator<TModel, TResult>,
        memo?: TResult,
        context?: any): TResult;
    foldr<TResult>(
        iterator: _.MemoIterator<TModel, TResult>,
        memo?: TResult,
        context?: any): TResult;
    forEach(iterator: _.ListIterator<TModel, void>, context?: any): TModel[];
    groupBy(iterator: _.ListIterator<TModel, any>, context?: any): _.Dictionary<TModel[]>;
    groupBy(iterator: string, context?: any): _.Dictionary<TModel[]>;
    head(): TModel;
    head(n: number): TModel[];
    include(value: TModel): boolean;
    includes(value: TModel): boolean;
    indexBy(iterator: _.ListIterator<TModel, any>, context?: any): _.Dictionary<TModel>;
    indexBy(iterator: string, context?: any): _.Dictionary<TModel>;
    indexOf(value: TModel, isSorted?: boolean): number;
    initial(): TModel;
    initial(n: number): TModel[];
    inject<TResult>(
        iterator: _.MemoIterator<TModel, TResult>,
        memo?: TResult,
        context?: any): TResult;
    invoke(methodName: string, ...args: any[]): any;
    isEmpty(): boolean;
    last(): TModel;
    last(n: number): TModel[];
    lastIndexOf(value: TModel, from?: number): number;
    map<TResult>(iterator: _.ListIterator<TModel, TResult>, context?: any): TResult[];
    max(iterator?: _.ListIterator<TModel, any>, context?: any): TModel;
    min(iterator?: _.ListIterator<TModel, any>, context?: any): TModel;
    partition(iterator: _.ListIterator<TModel, boolean>): TModel[][];
    reduce<TResult>(
        iterator: _.MemoIterator<TModel, TResult>,
        memo?: TResult,
        context?: any): TResult;
    reduceRight<TResult>(
        iterator: _.MemoIterator<TModel, TResult>,
        memo?: TResult,
        context?: any): TResult;
    reject(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel[];
    rest(n?: number): TModel[];
    sample(): TModel;
    sample(n: number): TModel[];
    select(iterator: _.ListIterator<TModel, boolean>, context?: any): TModel[];
    shuffle(): TModel[];
    size(): number;
    some(iterator?: _.ListIterator<TModel, boolean>, context?: any): boolean;
    sortBy<TSort>(iterator?: _.ListIterator<TModel, TSort>, context?: any): TModel[];
    sortBy(iterator: string, context?: any): TModel[];
    tail(n?: number): TModel[];
    take(): TModel;
    take(n: number): TModel[];
    toArray(): TModel[];
    without(...values: TModel[]): TModel[]
}

declare class Router mixins Events {

    /**
     * Routes hash or a method returning the routes hash that maps URLs with parameters to methods on your Router.
     * For assigning routes as object hash, do it like this: this.routes = <any>{ "route": callback, ... };
    That works only if you set it in the constructor or the initialize method.
    */
    routes: Backbone$RoutesHash | any;
    constructor(options?: Backbone$RouterOptions): this;
    initialize(options?: Backbone$RouterOptions): void;
    route(route: string | RegExp, name: string, callback?: Function): Backbone$Router;
    navigate(fragment: string, options?: Backbone$NavigateOptions): Backbone$Router;
    navigate(fragment: string, trigger?: boolean): Backbone$Router;
    execute(callback: Function, args: any[], name: string): void
}

declare var history: Backbone$History;

declare class History mixins Events {
    handlers: any[];
    interval: number;
    start(options?: Backbone$HistoryOptions): boolean;
    getHash(window?: Window): string;
    getFragment(fragment?: string): string;
    decodeFragment(fragment: string): string;
    getSearch(): string;
    stop(): void;
    route(route: string, callback: Function): number;
    checkUrl(e?: any): void;
    getPath(): string;
    matchRoot(): boolean;
    atRoot(): boolean;
    loadUrl(fragmentOverride?: string): boolean;
    navigate(fragment: string, options?: any): boolean;
    started: boolean;
    options: any
}

declare interface Backbone$ViewOptions<TModel>{
    model?: TModel,
    collection?: Backbone$Collection<any>,
    el?: any,
    events?: Backbone$EventsHash,
    id?: string,
    className?: string,
    tagName?: string,
    attributes?: {
        [id: string]: any
    }
}

declare class View<TModel>mixins Events {
    constructor(options?: Backbone$ViewOptions<TModel>): this;
    initialize(options?: Backbone$ViewOptions<TModel>): void;

    /**
     * Events hash or a method returning the events hash that maps events/selectors to methods on your View.
     * For assigning events as object hash, do it like this: this.events = <any>{ "event:selector": callback, ... };
    That works only if you set it in the constructor or the initialize method.
    */
    events(): Backbone$EventsHash;
    $(selector: string): JQuery;
    model: TModel;
    collection: Backbone$Collection<TModel>;
    setElement(element: HTMLElement | JQuery, delegate?: boolean): Backbone$View<TModel>;
    id: string;
    cid: string;
    className: string;
    tagName: string;
    el: any;
    $el: JQuery;
    setElement(element: any): Backbone$View<TModel>;
    attributes: any;
    $(selector: any): JQuery;
    render(): Backbone$View<TModel>;
    remove(): Backbone$View<TModel>;
    delegateEvents(events?: Backbone$EventsHash): any;
    delegate(eventName: string, selector: string, listener: Function): Backbone$View<TModel>;
    undelegateEvents(): any;
    undelegate(
        eventName: string,
        selector?: string,
        listener?: Function): Backbone$View<TModel>;
    _ensureElement(): void
}

declare function Backbone$sync(method: string, model: Backbone$Model, options?: JQueryAjaxSettings): any

declare function Backbone$ajax(options?: JQueryAjaxSettings): JQueryXHR

declare var emulateHTTP: boolean;

declare var emulateJSON: boolean;

declare function Backbone$noConflict(): typeof Backbone

declare var $: JQueryStatic;
declare module 'backbone' {
    declare module.exports: typeof Backbone
}