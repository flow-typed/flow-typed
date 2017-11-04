// subset of the `backbone` module

// repeated in backbone, backbone-model, and backbone-collection

type Comparator<T> = (attr: string) => any | ((attrA: T, attrB: T) => number);

declare module "backbone-model" {
  declare type EventCallback = (event: Event) => void | mixed;
  declare type Backbone$Attrs = { [name: string]: mixed };
  declare type CRUDMethod = "create" | "read" | "update" | "delete";

  /**
   * Events Module - http://backbonejs.org/#Events
   */
  declare class Events {
    // Not sure the best way of adding these to the declaration files
    on(event: string, callback: EventCallback, context?: Object): void;
    once(event: string, callback: EventCallback, context?: Object): void;
    bind(event: string, callback: EventCallback, context?: Object): void;
    off(event: ?string, callback?: ?EventCallback, context?: Object): void;
    unbind(event: ?string, callback?: ?EventCallback, context?: Object): void;
    trigger(event: string, ...args?: Array<mixed>): void;
    listenTo(other: Events, event: string, callback: EventCallback): void;
    listenToOnce(other: Events, event: string, callback: EventCallback): void;
    stopListening(
      other: Events,
      callback?: ?EventCallback,
      context?: Object
    ): void;
    static on(event: string, callback: EventCallback, context?: Object): void;
    static bind(event: string, callback: EventCallback, context?: Object): void;
    static off(
      event: ?string,
      callback?: ?EventCallback,
      context?: Object
    ): void;
    static unbind(
      event: ?string,
      callback?: ?EventCallback,
      context?: Object
    ): void;
    static trigger(event: string, ...args?: Array<mixed>): void;
    static listenTo(
      other: Events,
      event: string,
      callback: EventCallback
    ): void;
    static stopListening(
      other: Events,
      callback?: ?EventCallback,
      context?: Object
    ): void;
  }

  /**
   * Model Class - http://backbonejs.org/#Model
   */
  declare type ModelOpts = {
    collection?: Collection<*>,
    parse?: Function,
    [optionName: string]: mixed
  };

  declare class Model {
    static extend<P, CP>(
      instanceProperies: P,
      classProperties?: CP
    ): Class<Model & P> & CP;
    constructor(attributes?: Backbone$Attrs, options?: ModelOpts): void;
    static initialize(attributes?: Backbone$Attrs, options?: ModelOpts): void;
    initialize(): void;
    get(attr: ?string): any;
    set(attrs: Backbone$Attrs, options?: Object): this;
    set(attr: string, value: mixed, options?: Object): this;
    escape(attr: string): mixed;
    has(attr: string): boolean;
    unset(attr: string, options?: { unset?: boolean }): this;
    clear(options?: Object): this;
    id: string | number;
    idAttribute: string;
    cid: string;
    cidPrefix: string;
    attributes: Backbone$Attrs;
    changed: Object;
    defaults: Backbone$Attrs;
    defaults(): Backbone$Attrs;
    toJSON(): Backbone$Attrs;
    sync: sync;
    //Start jQuery XHR
    // @TODO should return a jQuery XHR, but I cannot define this without the dependency on jquery lib def
    fetch(options?: Object): any;
    save(attrs: Backbone$Attrs, options?: Object): any;
    save(attr: string, value: mixed, options?: Object): any;
    destroy(options?: Object): any;
    // End jQuery XHR
    validate(attrs: Backbone$Attrs, options?: Object): boolean;
    validationError: ?Object;
    isValid(): boolean;
    url(): string;
    urlRoot: string | (() => string);
    parse(response: Object, options?: Object): any;
    clone(): this;
    isNew(): boolean;
    hasChanged(attribute?: string): boolean;
    changedAttributes(attributes?: { [attr: string]: mixed }): boolean;
    previous(attribute: string): mixed;
    previousAttributes(): Backbone$Attrs;
    // Start Underscore methods
    // @TODO Underscore Methods should be defined by the library definition
    keys(): string[];
    values(): mixed[];
    pairs: Function;
    invert: Function;
    pick: Function;
    omit: Function;
    chain(): Function;
    isEmpty(): boolean;
    // End underscore methods
  }

  /**
   * Collection Class - http://backbonejs.org/#Collection
   */
  declare class Collection<TModel> {
    static extend<P, CP>(
      instanceProperies: P,
      classProperties?: CP
    ): Class<Collection<*> & P> & CP;
    constructor(models?: TModel, options?: Object): this;
    initialize(models?: TModel, options?: Object): this;
    model: TModel;
    modelId(attributes: TModel): string;
    models: TModel[];
    toJSON(options?: Object): TModel[];
    sync: sync;
    // Underscore Methods
    // @TODO should be defined by the underscore library defintion and not as generic functions.
    forEach: Function; //(each)
    map: Function; //(collect)
    reduce: Function; // (foldl, inject)
    reduceRight: Function; //(foldr)
    find: Function; // (detect)
    findIndex: Function;
    findLastIndex: Function;
    filter: Function; //(select)
    reject: Function;
    every: Function; //(all)
    some: Function; //(any)
    contains: Function; //(includes)
    invoke: Function;
    max: Function;
    min: Function;
    sortBy: Function;
    groupBy: Function;
    shuffle: Function;
    toArray: Function;
    size: Function;
    first: Function; //(head, take)
    initial: Function;
    rest: Function; //(tail, drop)
    last: Function;
    without: Function;
    indexOf: Function;
    lastIndexOf: Function;
    isEmpty: Function;
    chain: Function;
    difference: Function;
    sample: Function;
    partition: Function;
    countBy: Function;
    indexBy: Function;
    // end underscore methods
    add(models: Array<TModel>, options?: Object): void;
    remove(models: Array<TModel>, options?: Object): void;
    reset(models?: Array<TModel>, options?: Object): void;
    set(models: Array<TModel>, options?: Object): void;
    get(id: string): ?TModel;
    at(index: number): ?TModel;
    push(model: TModel, options?: Object): void;
    pop(otions?: Object): void;
    unshift(model: TModel, options?: Object): void;
    shift(options?: Object): TModel;
    slice(begin: number, end: number): Array<TModel>;
    length: number;
    comparator: string | Comparator<TModel>;
    sort(options?: Object): Array<TModel>;
    pluck(attribute: string): Array<TModel>;
    where(attributes: { [attributeName: string]: mixed }): Array<TModel>;
    findWhere(attributes: { [attributeName: string]: mixed }): TModel;
    url: () => string | string;
    parse(response: Object, options: Object): Object;
    clone(): this;
    fetch(options?: Object): void;
    create(attributes: Object, options?: Object): void;
  }

  /**
   * Sync - http://backbonejs.org/#Sync
   */
  declare function sync(
    method: CRUDMethod,
    model: Model,
    options?: Object
  ): any; // Should really be a jQuery XHR.

  /**
   * Declaring the export for backbone as well.
   */
  declare class Backbone {
    // subset of the `backbone` module
    Model: typeof Model;
  }

  declare var exports: Backbone;
}
