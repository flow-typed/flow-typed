// @flow
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
    fetch(options: FetchOpts):  XMLHttpRequest;
    set(attrs: Attrs, options?: Object): this;
    set(attr: string, value: mixed, options?: Object): this;
    has(attr: string): boolean;
    unset(attr: string, options?: { unset?: boolean }): this;
    clear(options?: Object): this;
    escape(attr: string): mixed;
    previous(attr: string): mixed;
    previousAttributes(): Attrs;
    fetch(options?: Object): any;
    keys(): string[];
    values(): mixed[];
    pairs: Function;
    invert: Function;
    pick: Function;
    omit: Function;
    chain(): Function;
    isEmpty(): boolean;
  }
  declare class Collection mixins Events {
    static extend<P, CP>(instanceProperies: P, classProperties?: CP): Class<Collection & P> & CP;
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
