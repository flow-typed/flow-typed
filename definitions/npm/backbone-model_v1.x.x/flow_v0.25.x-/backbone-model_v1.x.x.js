// subset of the `backbone` module
declare module 'backbone-model' {
  declare type eventCallback = (event: Event) => void | mixed;
  declare type Attrs = {[name: string]: mixed};
  declare type CRUDMethod = 'create' | 'read' | 'update' | 'delete';

  /**
   * Events Module - http://backbonejs.org/#Events
   */
  declare class Events {
    // Not sure the best way of adding these to the declaration files
    on(event: string, callback: eventCallback, context?: Object): void;
    once(event: string, callback: eventCallback, context?: Object): void;
    bind(event: string, callback: eventCallback, context?: Object): void;
    off(event: ?string, callback?: ?eventCallback, context?: Object): void;
    unbind(event: ?string, callback?: ?eventCallback, context?: Object): void;
    trigger(event: string, ...args?: Array<mixed>): void;
    listenTo(other: Events, event: string, callback: eventCallback): void;
    listenToOnce(other: Events, event: string, callback: eventCallback): void;
    stopListening(other: Events, callback?: ?eventCallback, context?: Object): void;
    static on(event: string, callback: eventCallback, context?: Object): void;
    static bind(event: string, callback: eventCallback, context?: Object): void;
    static off(event: ?string, callback?: ?eventCallback, context?: Object): void;
    static unbind(event: ?string, callback?: ?eventCallback, context?: Object): void;
    static trigger(event: string, ...args?: Array<mixed>): void;
    static listenTo(other: Events, event: string, callback: eventCallback): void;
    static stopListening(other: Events, callback?: ?eventCallback, context?: Object): void;
  }

  /**
   * Model Class - http://backbonejs.org/#Model
   */
  declare type ModelOpts = {
    collection?: Collection<*>,
    parse?: Function,
    [optionName: string]: mixed
  };

  declare class Model mixins Events {
    static extend<P, CP>(instanceProperies: P, classProperties?: CP): Class<Model & P> & CP;
    constructor(attributes?: Attrs, options?: ModelOpts): void;
    static initialize(attributes?: Attrs, options?: ModelOpts): void;
    initialize(): void;
    get(attr: ?string): any,
    set(attrs: Attrs, options?: Object): this;
    set(attr: string, value: mixed, options?: Object): this;
    escape(attr: string): mixed;
    has(attr: string): boolean;
    unset(attr: string, options?: { unset?: boolean }): this;
    clear(options?: Object): this;
    id: string | number;
    idAttribute: string;
    cid: string;
    cidPrefix: string;
    attributes: Attrs;
    changed: ?Object;
    defaults(attr: Object): void;
    defaults(attr: () => void): void;
    toJSON(): Attrs;
    //Start jQuery XHR
    // @TODO should return a jQuery XHR, but I cannot define this without the dependency on jquery lib def
    fetch(options?: Object): any;
    save(attrs: Attrs, options?: Object): any;
    save(attr: string, value: mixed, options?: Object): any;
    destroy(options?: Object): any;
    // End jQuery XHR
    validate(attrs: Attrs, options?: Object): boolean;
    validationError: ?Object;
    isValid(): boolean;
    url(): string;
    urlRoot: string | () => string;
    parse(response: Object, options?: Object): any;
    clone(): this;
    isNew(): boolean;
    hasChanged(attribute?: string): boolean;
    chagnedAttributes(attributes?: {[attr: string]: mixed}): boolean;
    previous(attribute: string): mixed;
    previousAttributes(): Attrs;
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
   * Declaring the export for backbone as well.
   */
  declare class Backbone {
    // subset of the `backbone` module
    Model: typeof Model;
  }

  declare var exports: Backbone;
}
