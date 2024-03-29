/**
 * Credit to @faceleg for some of the typedefs seen here:
 * https://github.com/solnet-aquarium/flow-interfaces-angular/blob/master/interfaces/angular.js
 */

declare module angular {
  // NOTE: if you don't use named scope bindings, remove string type in the end
  // for stricter types
  declare type ScopeBindings = "<" | "=" | "&" | "<?" | "=?" | "&?" | string;
  declare type Scope = { [key: string]: ScopeBindings, ... };
  declare type ControllerFunction = (...a: Array<any>) => void;

  // I'm not sure how represent this properly: Angular DI declarations are a
  // list of strings with a single function at the end. The function can vary,
  // so it is a type param.
  //
  // NOTE: if you use compile step to mangle array, replace below with
  // declare type $npm$angular$DependencyInjection<T> = T
  declare type $npm$angular$DependencyInjection<T> = Array<string | T>;

  // Extending Array<Element> allows us to do the `jq[0]` expression and friends
  // to get the actual underlying Element.
  // TODO: This is supposed to be interchangeable with JQuery. Can we possibly
  // check to see if JQuery's types are already defined?
  declare interface JqliteElement extends Array<Element> {
    remove: () => JqliteElement;
    contents: () => JqliteElement;
    injector: Function;
  }

  declare type AngularLinkFunction = (
    scope: $Scope<any>,
    element: JqliteElement,
    attrs: mixed,
    controller: mixed
  ) => void;

  declare type AngularCompileLink = {
    post?: AngularLinkFunction,
    pre?: AngularLinkFunction,
    ...
  };

  // TODO: Attrs and controller should be properly typed.
  declare function CompileFunction(
    element: JqliteElement,
    attrs: mixed,
    controller: ControllerFunction
  ): AngularLinkFunction;

  // TODO: Expand to cover the whole matrix of AECM, in any order. Probably
  // should write something to handle it.
  declare type DirectiveRestrict = "A" | "E" | "AE" | "EA";
  declare type Directive = {|
    restrict?: DirectiveRestrict,
    template?: string,
    templateUrl?: string,
    scope?: Scope,
    controller?: ControllerFunction,
    link?: AngularLinkFunction,
    controllerAs?: string,
    bindToController?: boolean,
    // TODO: flesh out this definition
    compile?: (...a: any) => AngularCompileLink
  |};

  declare type DirectiveDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<(...a: Array<any>) => Directive>
  ) => AngularModule;

  declare type Component = {|
    bindings?: Scope,
    template?: string,
    templateUrl?: string,
    controllerAs?: string,
    controller?: $npm$angular$DependencyInjection<
      Class<any> | ControllerFunction
    >,
    transclude?: boolean
  |};

  declare type ComponentDeclaration = (
    name: string,
    component: Component
  ) => AngularModule;

  declare type ControllerDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<ControllerFunction>
  ) => AngularModule;

  declare type ConfigDeclaration = (
    di: $npm$angular$DependencyInjection<(...a: Array<any>) => void>
  ) => AngularModule;

  declare type FactoryDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<(...a: Array<any>) => {...}>
  ) => AngularModule;

  declare type FilterDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<(...a: Array<any>) => (: any => any)>
  ) => AngularModule;

  declare type ServiceDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<(...a: Array<any>) => (: any => any) | {...}>
  ) => AngularModule;

  declare type RunDeclaration = (
    fn: $npm$angular$DependencyInjection<(...a: Array<any>) => void>
  ) => AngularModule;

  declare type ValueDeclaration = (name: string, value: mixed) => AngularModule;

  declare type ConstantDeclaration = (
    name: string,
    value: mixed
  ) => AngularModule;

  declare type AngularModule = {|
    controller: ControllerDeclaration,
    component: ComponentDeclaration,
    directive: DirectiveDeclaration,
    run: RunDeclaration,
    config: ConfigDeclaration,
    factory: FactoryDeclaration,
    filter: FilterDeclaration,
    service: ServiceDeclaration,
    value: ValueDeclaration,
    constant: ConstantDeclaration,
    name: string
  |};

  declare type Dependency = AngularModule | string;

  declare function module(
    name: string,
    deps?: ?Array<Dependency>
  ): AngularModule;

  declare function element(html: string | Element | Document): JqliteElement;
  declare function copy<T>(object: T): T;
  declare function extend<A, B>(a: A, b: B): A & B;
  declare function extend<A, B, C>(a: A, b: B, c: C): A & B & C;
  declare function extend<A, B, C, D>(a: A, b: B, c: C, d: D): A & B & C & D;
  declare function extend<A, B, C, D, E>(
    a: A,
    b: B,
    c: C,
    d: D,
    e: E
  ): A & B & C & D & E;

  declare function forEach<T>(
    obj: {...},
    iterator: (value: T, key: string) => void
  ): void;
  declare function forEach<T>(
    obj: Array<T>,
    iterator: (value: T, key: number) => void
  ): void;
  declare function fromJson(json: string): {...} | Array<any> | string | number;
  declare function toJson(
    obj: {...} | Array<any> | string | Date | number | boolean,
    pretty?: boolean | number
  ): string;
  declare function isDefined(val: any): boolean;
  declare function isArray(value: Array<any>): true;
  declare function isArray(value: any): false;
  declare function noop(): void;
  declare type AngularQ = { when: <T>(value: T) => AngularPromise<T>, ... };

  declare type AngularPromise<T> = {
    then: <U>(a: (resolve: U) => T) => AngularPromise<any>,
    catch: <U>(a: (e: Error) => U) => AngularPromise<any>,
    finally: <U>(a: (result: U | typeof Error) => T) => AngularPromise<any>,
    ...
  };

  //****************************************************************************
  // Angular testing tools
  //****************************************************************************

  declare type AngularMock = {
    inject: (...a: Array<any>) => (: any => any),
    module: (...a: Array<string | (: (...args: Array<any>) => any) | {...}>) => () => void,
    ...
  };
  declare var mock: AngularMock;

  declare type StateProviderParams = {
    url?: string,
    abstract?: boolean,
    params?: {...},
    views?: {...},
    data?: {...},
    templateUrl?: string,
    template?: string,
    controller?: string | ControllerFunction,
    resolve?: {...},
    ...
  };

  declare type $StateProvider = { state: (name: string, conf: StateProviderParams) => $StateProvider, ... };

  //----------------------------------------------------------------------------
  // Service specific stuff
  //----------------------------------------------------------------------------

  declare type AngularHttpService = { post: AngularHttpPost<any>, ... };

  declare type AngularHttpPost<T> = (
    url: string,
    data: mixed
  ) => AngularPromise<T>;

  declare type AngularResourceResult<T> = { $promise: AngularPromise<T>, ... };

  declare type AngularResource = { get: <T>(options?: {...}, callback?: Function) => AngularResourceResult<T>, ... };

  declare function AngularResourceFactory(
    url: string,
    defaultParams?: {...},
    actions?: {...},
    options?: {...}
  ): AngularResource;

  declare function AngularCompileService(a: JqliteElement): JqliteElement;

  declare type WatchExpression<T> = string | ((scope: $Scope<T>) => any);
  declare type EvalExpression = string | (() => void);
  declare type ApplyExpression = string | (() => void);
  declare type Listener<T> = (
    newValue: any,
    oldValue: any,
    $scope: $Scope<T>
  ) => any;

  declare type _Watch1<T> = (
    expression: WatchExpression<T>,
    listener: Listener<T>,
    objectEquality?: boolean
  ) => () => void;
  declare type _Watch2<T> = (
    listener: Listener<T>,
    objectEquality?: boolean
  ) => () => void;

  declare type $Scope<T: {...}> = {|
    $new(isolate: boolean, parent: $Scope<T>): $Scope<T>,
    $watch: _Watch1<T> & _Watch2<T>,
    $watchGroup(
      expressions: Array<WatchExpression<T>>,
      listener: Listener<T>
    ): () => void,
    $watchCollection(
      expression: WatchExpression<T>,
      listener: Listener<T>
    ): () => void,
    $digest(): void,
    $destroy(): void,
    $eval(expression: EvalExpression, locals?: {...}): void,
    $evalAsync(expression: EvalExpression, locals?: {...}): void,
    $apply(expression?: ApplyExpression): void,
    $applyAsync(expression?: ApplyExpression): void,
    $on(name: string, listener: (event: any, ...Array<any>) => void): () => void,
    $emit(name: string, ...Array<any>): void,
    $broadcast(name: string, ...Array<any>): void,

    $$postDigest(cb: () => void): void,

    $id: string,
    $parent: $Scope<any>,
    $root: $Scope<any>
  |} & T;

  declare type $Timeout = (
    fn?: any => any,
    delay?: number,
    invokeApply?: boolean,
    additionalParams?: any
  ) => AngularPromise<any>;

  declare type $Log = {|
    log(a: any): void,
    info(a: any): void,
    warn(a: any): void,
    error(a: any): void,
    debug(a: any): void,
  |};

  declare type $Interval = (
    fn: any => any,
    delay: number,
    count?: number,
    invokeApply?: boolean,
    ...pass: any
  ) => AngularPromise<any>;
}
