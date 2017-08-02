declare module 'rivets' {
  declare class View {
    unbind(): void;
  }

  declare type ConfigurationOptions = {|
    prefix?: string,
    preloadData?: boolean,
    rootInterface?: string,
    templateDelimiters?: [string, string],
    iterationAlias?: (modelName: string) => string,
    handler?: (target: HTMLElement, event: Event, binding: Object) => void,
    executeFunctions?: boolean
  |}

  declare type TwoWayBinder = {|
    bind: (el: HTMLElement) => void,
    unbind: (el: HTMLElement) => void,
    routine: (el: HTMLElement, value: any) => any,
    getValue?: (el: HTMLElement) => any,
    publishes?: boolean,
    priority?: number,
    block?: boolean
  |}

  declare type TwoWayFormatter = {|
    read: (value: any) => any,
    publish: (value: any) => any
  |}

  declare type Component<C> = {|
    static?: Array<string>,
    template: () => string,
    initialize: (el: HTMLElement, data: Object) => C
  |}

  declare type Adapter = {|
    observe: (obj: Object, keypath: string, callback: () => void) => void,
    unobserve: (obj: Object, keypath: string, callback: () => void) => void,
    get: (obj: Object, keypath: string) => any,
    set: (obj: Object, keypath: string, value: any) => void,

    // NOTE: these are non-standard methods used to observe arrays
    observeMutations?: (obj: Object, ref: string, keypath: string) => void,
    unobserveMutations?: (obj: Object, ref: string, keypath: string) => void
  |};

  declare class Rivets {

    bind(element: HTMLElement, model: Object): View;
    configure(options: ConfigurationOptions): void;
    init(componentName: string, element: HTMLElement, data: Object): View;

    binders: {
      [key: string]: TwoWayBinder | (el: HTMLElement, value: any) => void
    };

    formatters: {
      [key: string]: TwoWayFormatter | (...value: any) => any
    };

    components: {
      [key: string]: Component<*>
    };

    adapters: {
      [key: string]: Adapter
    };
  }

  declare export default Rivets;
}
