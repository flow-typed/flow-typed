declare module 'backbone' {
  declare var $: any; // @TODO this is no correct, but it is difficult to require another definition from here.
  declare var _: any; // @TODO this is no correct, but it is difficult to require another definition from here.
  declare var version: string;
  declare var emulateHTTP: boolean;
  declare var emulateJSON: boolean;

  declare type eventCallback = (event: Event) => void | mixed;
  declare type Attrs = {[name: string]: mixed};
  declare type CRUDMethod = 'create' | 'read' | 'update' | 'delete';

  declare class Events {
    // Not sure the best way of adding these to the declaration files
    on(event: string, callback: eventCallback, context?: Object): void;
    bind(event: string, callback: eventCallback, context?: Object): void;
    off(event: ?string, callback?: ?eventCallback, context?: Object): void;
    unbind(event: ?string, callback?: ?eventCallback, context?: Object): void;
    trigger(event: string, ...args?: Array<mixed>): void;
    listenTo(other: Events, event: string, callback: eventCallback): void;
    stopListening(other: Events, callback?: ?eventCallback, context?: Object): void;
    static on(event: string, callback: eventCallback, context?: Object): void;
    static bind(event: string, callback: eventCallback, context?: Object): void;
    static off(event: ?string, callback?: ?eventCallback, context?: Object): void;
    static unbind(event: ?string, callback?: ?eventCallback, context?: Object): void;
    static trigger(event: string, ...args?: Array<mixed>): void;
    static listenTo(other: Events, event: string, callback: eventCallback): void;
    static stopListening(other: Events, callback?: ?eventCallback, context?: Object): void;
  }
  declare type ModelOpts = {
    collection?: Collection,
    parse?: Function
  };
  declare class Model mixins Events {
    static extend<P, CP>(instanceProperies: P, classProperties?: CP): Class<Model & P> & CP;
    constructor(attributes?: Attrs, options?: ModelOpts): void;
    static initialize(attributes?: Attrs, options?: ModelOpts): void;
    idAttribute: string;
    id: string | number;
    attributes: Attrs;
    cid: string;
    cidPrefix: string;
    chagned: ?Object,
    validationError: ?Object;
    initialize(): void;
    toJSON(): Attrs;
    sync: sync;
    set(attrs: Attrs, options?: Object): this;
    set(attr: string, value: mixed, options?: Object): this;
    has(attr: string): boolean;
    unset(attr: string, options?: { unset?: boolean }): this;
    clear(options?: Object): this;
    escape(attr: string): mixed;
    previous(attr: string): mixed;
    previousAttributes(): Attrs;
    // @TODO should return a jQuery XHR, but I cannot define this without the dependency on jquery lib def.
    fetch(options?: Object): any;
    keys(): string[];
    values(): mixed[];
    pairs: Function;
    invert: Function;
    pick: Function;
    omit: Function;
    chain(): Function;
    isEmpty(): boolean;
    isValid(): boolean;
    url(): string;
    urlRoot: string | () => string,
    clone: this;
    isNew: boolean;
    hasChanged(attribute?: string): boolean;
    chagnedAttributes(attributes?: {[attr: string]: mixed}): boolean;
    previous(attribute: string): mixed;
    previousAttirbutes(): Attrs;
  }
  declare class Collection<TModel> mixins Events {
    static extend<P, CP>(instanceProperies: P, classProperties?: CP): Class<Collection & P> & CP;
    constructor(models: TModel, options: Object): this;
    initialize(models: TModel, options: Object): this;
    model: TModel;
    modelId(attributes: TModel): string;
    models: TModel[];
    toJSON(options?: Object): TModel[];
    sync: sync;
    add(models: Array<TModel>, options?: Object): void;
    remove(models: Array<TModel>, options?: Object): void;
    reset(models?: Array<TModel>, options?: Object): void;
    set(models: Array<TModel>, options?: Object): void;
    get(id: string): ?TModel;
    at(index: number): ?TModel;
    push(model: TModel, options?: Object): void;
    pop(otions?: Object): void;
    unshift(model: TModel, options?: Object): void;
    unshift(model: TModel, options?: Object): void;
    shift(options?: Object): TModel;
    slice(begin: number, end: number): Array<TModel>;
    length: number;
    sort(options?: Object): Array<TModel>;
    pluck(attribute: string): Array<TModel>;
    where(attributes: {[attributeName: string]: mixed}): Array<TModel>;
    findWhere(attributes: {[attributeName: string]: mixed}): TModel;
    url: () => string | string;
    parse(response: Object, options: Object): Object;
    clone(): this;
    fetch(options?: Object): void;
    create(attributes: Object, options?: Object): void;
  }
  declare class View mixins Events {
    static extend<P, CP>(instanceProperies: P, classProperties?: CP): Class<View & P> & CP;
  }
  declare class Router mixins Events {
    static extend<P, CP>(instanceProperies: P, classProperties?: CP): Class<Router & P> & CP;
  }
  declare class History mixins Events {
    static extend<P, CP>(instanceProperies: P, classProperties?: CP): Class<History & P> & CP;
  }

  declare function sync(method: CRUDMethod, model: Model, options?: Object):  XMLHttpRequest;
}
